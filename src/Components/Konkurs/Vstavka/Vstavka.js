import React from 'react';
import './Vstavka.css';
import {Button, Card, Col, Row} from "antd";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {uzLanguage} from "../../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../../Redux/Actions/EnLanguage";
class  Vstavka extends  React.Component{
    render() {
        const {uzLang,enLang}=this.props;
        return(
            <React.Fragment>
                <div>
                    <Row>
                        <Col  sm={24}>
                            <Card style={{marginBottom:'10px'}}>
                                <Row>

                                    <Col span={18} lg={18} md={24} sm={24} xs={24} style={{padding:'20px'}}>
                                        <Link to={'/big_post'}><h3>Узбекские школьники хотят изучать предметы...</h3></Link>
                                        <h5 style={{color:'gray'}}>регистрация до:22 июня 2021 года</h5>
                                        <h5 style={{color:'gray'}}>начало в::22 июня 2021 года</h5>
                                        <h5 style={{color:'gray'}}>Платформа провела исследование о предпочтениях современных школьников – среди предметов, которыми стоит дополнить учебную программу, российские ...</h5>
                                    </Col>
                                    <Col span={6} lg={6} md={24} sm={24} xs={24}>
                                        <img  src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_473909426_129584.jpg" alt="" style={{borderTopRightRadius:'15px',borderBottomRightRadius:'15px',width:'100%'}}/>
                                    </Col>

                                </Row>
                                <button className="novosti_btn">
                                    <h3>{uzLang?"Batafsil ma'lumot":enLang?"More details":"Подробнее"}</h3>
                                </button>
                            </Card>
                            <Card style={{marginBottom:'10px'}}>
                                <Row>

                                    <Col span={18} lg={18} md={24} sm={24} xs={24} style={{padding:'20px'}}>
                                        <Link to={'/big_post'}><h3>Узбекские школьники хотят изучать предметы...</h3></Link>
                                        <h5 style={{color:'gray'}}>регистрация до:22 июня 2021 года</h5>
                                        <h5 style={{color:'gray'}}>начало в::22 июня 2021 года</h5>
                                        <h5 style={{color:'gray'}}>Платформа провела исследование о предпочтениях современных школьников – среди предметов, которыми стоит дополнить учебную программу, российские ...</h5>
                                    </Col>
                                    <Col span={6} lg={6} md={24} sm={24} xs={24}>
                                        <img  src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_473909426_129584.jpg" alt="" style={{borderTopRightRadius:'15px',borderBottomRightRadius:'15px',width:'100%'}}/>
                                    </Col>

                                </Row>
                                <button className="novosti_btn">
                                    <h3>{uzLang?"Batafsil ma'lumot":enLang?"More details":"Подробнее"}</h3>
                                </button>
                            </Card>
                            <Card style={{marginBottom:'10px'}}>
                                <Row>

                                    <Col span={18} lg={18} md={24} sm={24} xs={24} style={{padding:'20px'}}>
                                        <Link to={'/big_post'}><h3>Узбекские школьники хотят изучать предметы...</h3></Link>
                                        <h5 style={{color:'gray'}}>регистрация до:22 июня 2021 года</h5>
                                        <h5 style={{color:'gray'}}>начало в::22 июня 2021 года</h5>
                                        <h5 style={{color:'gray'}}>Платформа провела исследование о предпочтениях современных школьников – среди предметов, которыми стоит дополнить учебную программу, российские ...</h5>
                                    </Col>
                                    <Col span={6} lg={6} md={24} sm={24} xs={24}>
                                        <img  src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_473909426_129584.jpg" alt="" style={{borderTopRightRadius:'15px',borderBottomRightRadius:'15px',width:'100%'}}/>
                                    </Col>

                                </Row>
                                <button className="novosti_btn">
                                    <h3>{uzLang?"Batafsil ma'lumot":enLang?"More details":"Подробнее"}</h3>
                                </button>
                            </Card>
                        </Col>
                        <Button className={'video_all'}>{uzLang?"Ko'proq ko'rsatish":enLang?"Show more":"Показать еще"}</Button>
                    </Row>
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
    Vstavka
)