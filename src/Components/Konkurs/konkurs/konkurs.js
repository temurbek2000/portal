import React from 'react';
import './konkurs.css';
import {Button, Card, Col, Row} from "antd";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {uzLanguage} from "../../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../../Redux/Actions/EnLanguage";
import {host,port} from "../../../server/host";

class  Conkurs extends  React.Component{
    render() {
        const {uzLang,enLang,contests}=this.props;
        return(
            <React.Fragment>
                <div>
                    <Row>
                        <Col  sm={24}>

                            {
                                contests?contests.map(function (item) {
                                    var date=new Date(item.startAt);
                                    var date1=new Date(item.registrationAt)


                                    return  <Card style={{marginBottom:'10px'}}>
                                        <Row>

                                            <Col span={18} lg={18} md={24} sm={24} xs={24} style={{padding:'20px'}}>
                                                <Link to={'/big_conkurs/'+item.id}><h2>{uzLang?item.titleUz:enLang?item.titleEn:item.titleRu}.</h2></Link>
                                                <h5 style={{color:'gray'}}>регистрация до:{date1.getDay()+'.'+date1.getMonth()+'.'+date1.getFullYear()+' '+date1.getHours()+':'+date1.getMinutes()}</h5>
                                                <h5 style={{color:'gray'}}>начало в::{date.getDay()+'.'+date.getMonth()+'.'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes()}</h5>
                                                <h5 style={{color:'gray'}} dangerouslySetInnerHTML={{__html: uzLang?item.contentUz:enLang?item.contentEn:item.contentRu}}/>
                                            </Col>
                                            <Col span={6} lg={6} md={24} sm={24} xs={24}>
                                                <img  src={host+':'+port+'/api/auth/file/'+item.logo.id} alt="" style={{borderTopRightRadius:'15px',borderBottomRightRadius:'15px',width:'100%'}}/>
                                            </Col>

                                        </Row>
                                        <button className="novosti_btn">
                                            <Link to={'/big_conkurs/'+item.id}><h3>{uzLang?"Batafsil ma'lumot":enLang?"More details":"Подробнее"}</h3></Link>
                                        </button>
                                    </Card>
                                }):''
                            }

                        </Col>
                        <Button onClick={this.props.ShowMoreConkurs} className={'video_all'}>{uzLang?"Ko'proq ko'rsatish":enLang?"Show more":"Показать еще"}</Button>
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
    Conkurs
)