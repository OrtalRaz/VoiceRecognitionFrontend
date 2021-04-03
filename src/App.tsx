import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoronaPage from "./pages/CoronaPage";
import SportsPage from "./pages/SportsPage";
import PoliticsPage from "./pages/PoliticsPage";
import MusicPage from "./pages/MusicPage";
import MainPage from "./pages/MainPage";
import TravelPage from "./pages/TravelPage";
import FoodPage from "./pages/FoodPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import RestoringPage from "./pages/RestoringPage";
import ChangingPage from "./pages/ChangingPage";
function App() {
    return (
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
            <Route exact path="/connection" component={LoginPage}/>
            <Route exact path="/restoring" component={RestoringPage}/>
            <Route exact path="/changing" component={ChangingPage}/>
        </Router>
    );
}

export default App;
