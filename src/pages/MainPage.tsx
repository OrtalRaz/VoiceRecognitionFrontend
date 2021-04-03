import React from 'react';
import './HomePage.css';
import politics from '../pictures/politics/politics.jpg';
import sports from '../pictures/sports/sports.jpg';
import corona from '../pictures/corona/corona.jpg';
import music from '../pictures/music/music.jpg';
import travel from '../pictures/travel/travel.jpg';
import food from '../pictures/food/food.png';
import website_logo from '../pictures/website_logo.png';
import '../common/image/ImagesRow.css';
import ImagesRow from "../common/image/ImagesRow";
import MenuHeader, {HomeHeader} from "../common/MenuHeader";

function MainPage() {
    return (
        <div className="Home">
            <header className="Home-header">
                <br/>
                <HomeHeader/>
                <br/>
                <img src={website_logo} alt="website logo" height={100} width={150}/>
                <br/>
                <MenuHeader/>
                <ImagesRow images={
                    [{src: politics, name: "politics", height: 200, width: 420},
                        {src: sports, name: "sports", height: 200, width: 420}]
                }/>
                <ImagesRow images={
                    [{src: music, name: "music", height: 200, width: 420},
                        {src: corona, name: "corona", height: 200, width: 420}]
                }/>
                <ImagesRow images={
                    [{src: food, name: "food", height: 200, width: 420},
                        {src: travel, name: "travel", height: 200, width: 420}]
                }/>
            </header>
        </div>
    );
}


export default MainPage;
