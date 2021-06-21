import React, {useEffect} from 'react';
import ReactNotification, {store} from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.min.css';
import {BrowserRouter as Router, Route, useHistory} from "react-router-dom";
import {History} from 'history';
import {getFrequentTopic, uploadRecording} from "./client";
import ChangingPage from "./pages/ChangingPage";
import CoronaPage from "./pages/CoronaPage";
import FoodPage from "./pages/FoodPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MusicPage from "./pages/MusicPage";
import PoliticsPage from "./pages/PoliticsPage";
import RestoringPage from "./pages/RestoringPage";
import SignUpPage from "./pages/SignUpPage";
import SportsPage from "./pages/SportsPage";
import TravelPage from "./pages/TravelPage";
import {record} from "./recorder";

const RECORD_TIME = 5000;
const RECORD_INTERVAL_OFFSET = 100;

const TOPIC_NOTIFICATION_INTERVAL = 120000;

function displayTopicNotification(topic: string, onRemoval?: ((id: string, removedBy: any) => void) | undefined) {
    store.addNotification({
        title: 'FOR YOU!',
        message: 'Articles about ' + topic,
        type: 'info',
        container: 'bottom-left',
        animationIn: ['animate__animated', 'animate__jackInTheBox'],
        onRemoval: onRemoval,
    })
}

async function loadTopicNotification(history: History) {
    const topic = await getFrequentTopic();
    displayTopicNotification(topic, () => history.push(`/${topic}`))
}

const recordAndUpload = () => {
    record(RECORD_TIME, (blob) => {
        console.log("Uploading recording");
        uploadRecording(blob)
            .catch((error) => console.error(error.message))
    })
}
function App() {
    const history = useHistory();

    useEffect(() => {
        recordAndUpload();
        setInterval(recordAndUpload, RECORD_TIME + RECORD_INTERVAL_OFFSET);

        loadTopicNotification(history).then();
        setInterval(() => loadTopicNotification(history), TOPIC_NOTIFICATION_INTERVAL);
    })

    return (
        <div>
            <ReactNotification/>
            <Router>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/signup" component={SignUpPage}/>
                <Route exact path="/main" component={MainPage}/>
                <Route exact path="/corona" component={CoronaPage}/>
                <Route exact path="/sports" component={SportsPage}/>
                <Route exact path="/politics" component={PoliticsPage}/>
                <Route exact path="/music" component={MusicPage}/>
                <Route exact path="/food" component={FoodPage}/>
                <Route exact path="/travel" component={TravelPage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/restoring" component={RestoringPage}/>
                <Route exact path="/changing" component={ChangingPage}/>
            </Router>
        </div>
    );
}

export default App;
