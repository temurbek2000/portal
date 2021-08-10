import React from 'react';
import './Team.css';
import {Row,Col,Card} from 'antd';
import {connect} from "react-redux";
import {uzLanguage} from "../../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../../Redux/Actions/EnLanguage";
import alberta_logo from '../../images/alberta_logo.jpg';
import location_img from '../../images/lokation_icon.svg'
import map_img from '../../images/map_img.jpg';
class Team extends React.Component{
    render() {
        const {uzLang,enLang}=this.props;
        return(
            <React.Fragment>
                <h2> {uzLang?"Ishtirok etuvchi tashkilotlar (ro'yxat)":enLang?"Participating organizations (list)":"Участвующие организации (список)"}</h2>
                <Row>
                    <Col lg={8} md={12} sm={24}>
                        <Card style={{padding:'5px',margin:'5px'}}>
                            <div style={{textAlign:'center'}}>
                                <img src={alberta_logo} style={{width:'100%'}} alt=""/>
                                <h3> {uzLang?"Alberta o'qituvchilari assotsiatsiyasi":enLang?"Alberta Teachers Association":"Ассоциация учителей Альберты"}</h3>
                                <Row>
                                    <Col span={12}><h4 style={{color:'gray'}}>Адрес:</h4></Col>
                                    <Col span={12}><h4>136 Isabella Street Toronto, ON  M4Y 0B5</h4></Col>

                                    <Col span={12}><h4 style={{color:'gray'}}>Номер:</h4></Col>
                                    <Col span={12}><h4>+998 90 992 22 22</h4></Col>
                                    <button className="novosti_btn" style={{borderRadius:'10px',width:'100%',marginLeft:'50%'}}>
                                        <h3> {uzLang?"Saytga o'tish":enLang?"Go to the site":"Перейти на сайт"}</h3>
                                    </button>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={8} md={12} sm={24}>
                        <Card style={{padding:'5px',margin:'5px'}}>
                            <div style={{textAlign:'center'}}>
                                <img src={alberta_logo} style={{width:'100%'}} alt=""/>
                                <h3>Ассоциация учителей Альберты</h3>
                                <Row>
                                    <Col span={12}><h4 style={{color:'gray'}}>Адрес:</h4></Col>
                                    <Col span={12}><h4>136 Isabella Street Toronto, ON  M4Y 0B5</h4></Col>

                                    <Col span={12}><h4 style={{color:'gray'}}>Номер:</h4></Col>
                                    <Col span={12}><h4>+998 90 992 22 22</h4></Col>
                                    <button className="novosti_btn" style={{borderRadius:'10px',width:'100%',marginLeft:'50%'}}>
                                        <h3> {uzLang?"Saytga o'tish":enLang?"Go to the site":"Перейти на сайт"}</h3>
                                    </button>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={8} md={12} sm={24}>
                        <Card style={{padding:'5px',margin:'5px'}}>
                            <div style={{textAlign:'center'}}>
                                <img src={alberta_logo} style={{width:'100%'}} alt=""/>
                                <h3>Ассоциация учителей Альберты</h3>
                                <Row>
                                    <Col span={12}><h4 style={{color:'gray'}}>Адрес:</h4></Col>
                                    <Col span={12}><h4>136 Isabella Street Toronto, ON  M4Y 0B5</h4></Col>

                                    <Col span={12}><h4 style={{color:'gray'}}>Номер:</h4></Col>
                                    <Col span={12}><h4>+998 90 992 22 22</h4></Col>
                                    <button className="novosti_btn" style={{borderRadius:'10px',width:'100%',marginLeft:'50%'}}>
                                        <h3> {uzLang?"Saytga o'tish":enLang?"Go to the site":"Перейти на сайт"}</h3>
                                    </button>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={8} md={12} sm={24}>
                        <Card style={{padding:'5px',margin:'5px'}}>
                            <div style={{textAlign:'center'}}>
                                <img src={alberta_logo} style={{width:'100%'}} alt=""/>
                                <h3>Ассоциация учителей Альберты</h3>
                                <Row>
                                    <Col span={12}><h4 style={{color:'gray'}}>Адрес:</h4></Col>
                                    <Col span={12}><h4>136 Isabella Street Toronto, ON  M4Y 0B5</h4></Col>

                                    <Col span={12}><h4 style={{color:'gray'}}>Номер:</h4></Col>
                                    <Col span={12}><h4>+998 90 992 22 22</h4></Col>
                                    <button className="novosti_btn" style={{borderRadius:'10px',width:'100%',marginLeft:'50%'}}>
                                        <h3> {uzLang?"Saytga o'tish":enLang?"Go to the site":"Перейти на сайт"}</h3>
                                    </button>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={8} md={12} sm={24}>
                        <Card style={{padding:'5px',margin:'5px'}}>
                            <div style={{textAlign:'center'}}>
                                <img src={alberta_logo} style={{width:'100%'}} alt=""/>
                                <h3>Ассоциация учителей Альберты</h3>
                                <Row>
                                    <Col span={12}><h4 style={{color:'gray'}}>Адрес:</h4></Col>
                                    <Col span={12}><h4>136 Isabella Street Toronto, ON  M4Y 0B5</h4></Col>

                                    <Col span={12}><h4 style={{color:'gray'}}>Номер:</h4></Col>
                                    <Col span={12}><h4>+998 90 992 22 22</h4></Col>
                                    <button className="novosti_btn" style={{borderRadius:'10px',width:'100%',marginLeft:'50%'}}>
                                        <h3> {uzLang?"Saytga o'tish":enLang?"Go to the site":"Перейти на сайт"}</h3>
                                    </button>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={8} md={12} sm={24}>
                        <Card style={{padding:'5px',margin:'5px'}}>
                            <div style={{textAlign:'center'}}>
                                <img src={alberta_logo} style={{width:'100%'}} alt=""/>
                                <h3>Ассоциация учителей Альберты</h3>
                                <Row>
                                    <Col span={12}><h4 style={{color:'gray'}}>Адрес:</h4></Col>
                                    <Col span={12}><h4>136 Isabella Street Toronto, ON  M4Y 0B5</h4></Col>

                                    <Col span={12}><h4 style={{color:'gray'}}>Номер:</h4></Col>
                                    <Col span={12}><h4>+998 90 992 22 22</h4></Col>
                                    <button className="novosti_btn" style={{borderRadius:'10px',width:'100%',marginLeft:'50%'}}>
                                        <h3> {uzLang?"Saytga o'tish":enLang?"Go to the site":"Перейти на сайт"}</h3>
                                    </button>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <h2> {uzLang?"Ishtirok etuvchi tashkilotlar (xaritada)":enLang?"Participating organizations (on the map)":"Участвующие организации (на карте)"}</h2>
                <div className={'lokation_div'}>
                    <img src={location_img} alt="error" className={'location_icon'}/>
                    <img src={map_img} alt="" width={'100%'}/>
                    </div>
            </React.Fragment>
        )
    }

}const mapStateToProps = (state) => {

    return {
        uzLang: state.changeLang.uzLang,
        enLang: state.changeLang.enLang,
    };
};
export default connect(mapStateToProps,{uzLanguage,ruLanguage,enLanguage})(
    Team
)