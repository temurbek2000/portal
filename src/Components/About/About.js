import React from 'react';
import './About.css';
import {
    Link
} from "react-router-dom";
import {Row, Col, Card, Tabs, Avatar,Button} from 'antd';
import {ArrowDownOutlined,ArrowUpOutlined ,EyeOutlined,MessageOutlined,ArrowRightOutlined} from '@ant-design/icons'
import Missiya1 from "./Missiya/Missiya";
import Rekvisit from "./Rekvisit/Rekvisit";
import Rukovoditel from "./Rukovoditel/Rukovoditel";
import Team from "./Team/Team";
import {connect} from "react-redux";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
import about_first from "../images/about_first.jpg"
const {TabPane}=Tabs;
const {Meta}=Card;

class About extends React.Component{
    state={
        batafsil:false,
    };
    render() {
        const {uzLang,enLang}=this.props;
        const {batafsil}=this.state;
        const callback=(key)=>{
            console.log(key)
        }
        const Batafsil=()=>{
            this.setState({
                batafsil:!batafsil
            })
        }
        return(
            <React.Fragment>
                <div className="main_forum">
                    <div className="container">
                        <h3><Link to={'/home'}>{uzLang?"Bosh sahifa":enLang?"Home":"Главная"}</Link>{'>'}{uzLang?"Biz Haqimizda":enLang?"About Us":"О нас"}</h3>
                        <div className={'about_first'}>
                            <img style={{width:'100%'}} src={about_first} alt="error"/>
                           <div className="about_card">
                             <p className={'about_title'}>{uzLang?"Biz Haqimizda":enLang?"About Us":"О нас"}</p>
                           </div>
                        </div>
                        <Row>
                            <Col  sm={24}>
                                <Card>
                                    <Tabs defaultActiveKey="1" onChange={callback}>
                                        <TabPane tab={<h3> {uzLang?"Bizning vazifamiz":enLang?"Our mission":"Наша миссия"}</h3>} key="1">
                                            <Missiya1/>

                                        </TabPane>
                                        <TabPane tab={<h3> {uzLang?"Rekvizitlar":enLang?"Requisites":"Реквизиты"}</h3>} key="2">
                                           <Rekvisit/>
                                        </TabPane>
                                        <TabPane tab={<h3> {uzLang?"Rahbarlar":enLang?"Leaders":"Руководители"}</h3>} key="3">
                                            <Rukovoditel/>

                                        </TabPane>
                                        <TabPane tab={<h3>  {uzLang?"Bizning kompozitsiyamiz":enLang?"Our composition":"Наш состав"}</h3>} key="4">
                                            <Team/>

                                        </TabPane>

                                    </Tabs>
                                </Card>
                            </Col>

                        </Row>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}
const mapStateToProps = (state) => {

    return {
        uzLang: state.changeLang.uzLang,
        enLang: state.changeLang.enLang,
    };
};
export default connect(mapStateToProps,{uzLanguage,ruLanguage,enLanguage})(
    About
)