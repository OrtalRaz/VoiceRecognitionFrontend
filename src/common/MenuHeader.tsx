import React from 'react';
import {LinkButton} from "./button/Button";


function MenuHeader() {
    return (
        <div className="row">
            <div className="column">
                <LinkButton text="POLITICS" to='/politics'/>
            </div>
            <div className="column">
                <LinkButton text="SPORTS" to='/sports'/>
            </div>
            <div className="column">
                <LinkButton text="TRAVEL" to='/travel'/>
            </div>
            <div className="column">
                <LinkButton text="FOOD" to='/food'/>
            </div>
            <div className="column">
                <LinkButton text="CORONA" to='/corona'/>
            </div>
            <div className="column">
                <LinkButton text="MUSIC" to='/music'/>
            </div>
        </div>
    )
}


function HomeHeader() {
    return (
        <div className="row">
            <div className="column">
                <LinkButton text="HOME" to='/'/>
            </div>
        </div>
    )
}

export default MenuHeader;
export {HomeHeader};