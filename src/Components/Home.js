import React from "react";
import Karousel from "./Karousel/Karousel";
import Missiya from "./Missiya/Missiya";
import Novosti from "./Novosti/Novosti";
import Grands from "./Grands/Grands";
import Konsultasiya from "./Konsultasiya/Konsultasiya";
import {Route} from "react-router-dom";
import Statistic from "./statistic/statistic";

class Home extends React.Component{
    render() {
        return(
            <React.Fragment>
                <Karousel/>
                <Missiya/>
                <Novosti/>
                <Grands/>
                <Konsultasiya/>
            </React.Fragment>
        )
    }
}export default Home;