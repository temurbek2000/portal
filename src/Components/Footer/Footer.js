import React from 'react'
import './Footer.css';
import {Row,Col,Input} from 'antd';
import {
    Link
} from "react-router-dom";
import {connect} from "react-redux";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
import instagram_icon from '../images/instagram_icon.svg';
import twitter_icon from '../images/twitter_icon.svg';
import telegram_icon from '../images/telegram_icon.svg';
import facebook_icon from '../images/facebook_icon.svg';
const {Search}=Input;
class Footer extends React.Component{
    render() {
        const {uzLang,enLang}=this.props;
        const onSearch = value => console.log(value);

        return(
            <React.Fragment>
                <div className="main_footer">
                    <div className="container">
                        <Row>
                            <Col md={24} lg={6} xs={24}>
                                <Link to={'/home'}><p className={'menu_logo'}>Portal<span style={{color:'#FEC339'}}>.UZ</span></p></Link>
                                <p style={{color:'white'}}>
                                    {uzLang?"Xizmat faoliyati o'qituvchilarning jamiyatdagi obro'sini oshirishga, huquqiy savodxonligini oshirishga qaratilgan jamoalarni yaratishni qo'llab-quvvatlaydi.":enLang?"The service supports the creation of communities whose activities are aimed at raising the authority of teachers in society, increasing legal literacy.":"Сервис поддерживает создание сообществ, деятельность которых направлена на поднятие авторитета учителей в обществе, повышение правовой грамотности."}

                                </p>
                            </Col>
                            <Col md={24} lg={18} xs={24}>
                                <div className="input_footer">
                                    <Row>
                                        <Col sm={24} md={12}>
                                            <h6 style={{color:'white'}}>{uzLang?"Elektron pochtangizni biz bilan baham ko'ring, biz sizga yangiliklar, qiziqarli ko'rgazmalar va yangi qarorlar to'g'risida xabar beramiz.":enLang?"Share your email with us and we will inform you about news, interesting exhibitions and new decrees.":"Поделитесь с нами своей электронной почтой и мы сообщим вам о новостях, интересных выставак и новых указах."}</h6>
                                        </Col>
                                        <Col sm={24} md={12}>
                                            <Search
                                                placeholder="Email"
                                                allowClear
                                                enterButton={uzLang?"Yuborish":enLang?"Send":"Отправить"}
                                                size="large"
                                                onSearch={onSearch}
                                                style={{borderRadius:'20px',width:'100%'}}
                                            />

                                        </Col>
                                    </Row>

                                </div>
                                <Row>
                                    <Col md={16} sm={24}>
                                        <ul className="second_ul_menu_footer">
                                            <Link to={'/home'}><li>{uzLang?"Bosh sahifa":enLang?"Home":"Главная"}</li></Link>
                                            <Link to={'/forum'}><li>{uzLang?"Forum":enLang?"Forum":"Форум"}</li></Link>
                                            <Link to={'/rekurs'}><li>{uzLang?"Resurslar":enLang?"Resources":"Ресурсы"}</li></Link>
                                            <Link to={'/consultation'}><li >{uzLang?"Konsultatsiya":enLang?"Consultation":"Консультация"}</li></Link>
                                            <Link to={'/konkurs'}><li>{uzLang?"Tanlovlar":enLang?"Contests":"Конкурсы"}</li></Link>
                                            <Link to={'/news'}><li >{uzLang?"Nashrlar":enLang?"Publications":"Публикации"}</li></Link>
                                            <Link to={'/galereya'}><li >{uzLang?"Galereya":enLang?"Gallery":"Галерея"}</li></Link>
                                        </ul>
                                        <hr className={'menu_hr'}/>
                                        <ul className="first_ul_footer">
                                            <Link to={'/faq'}><li >FAQ</li></Link>
                                            <Link to={'/about'}><li >{uzLang?"Biz Haqimizda":enLang?"About Us":"О нас"}</li>
                                            </Link><Link to={'/about'}><li>{uzLang?"Aloqa":enLang?"Contact Us":"Контакты"}</li></Link>
                                            <li >{uzLang?"NNTlarning ro'yxati":enLang?"List of NGOs":"Список ННО"}</li>
                                        </ul>
                                    </Col>
                                    <Col md={8} sm={24}>
                                        <p style={{color:'#B7BABE',padding:'20px',marginTop:'13px',fontSize:'18px'}}>{uzLang?"Biz ijtimoiy tarmoqlarda":enLang?"We are in social networks":"Мы в социальных сетях"}
                                        </p>
                                        <Row style={{paddingLeft:'20px',color:'white'}}>
                                            <Col span={6} style={{fontSize:'30px'}}><a href="http://www.facebook.com/portal_uz"><img src={facebook_icon} alt=""/></a></Col>
                                            <Col span={6} style={{fontSize:'30px'}}><a href="https://api.instagram.com/portal_uz"><img src={instagram_icon} alt=""/></a></Col>
                                            <Col span={6} style={{fontSize:'30px'}}><a href="https://api.twitter.com/portal_uz"><img src={twitter_icon} alt=""/></a></Col>
                                            <Col span={6} style={{fontSize:'30px'}}><a href="http://t.me/portal_uz"><img src={telegram_icon} alt=""/></a></Col>
                                        </Row>
                                        <h5 style={{padding:'20px 20px 0px 20px',marginLeft:'10px',color:'white'}}>+998 71 231-60-00</h5>
                                        <h6 style={{paddingLeft:'20px',marginLeft:'10px',color:'#B7BABE'}}>{uzLang?"Yagona aloqa markazi":enLang?"Unified Call Center":"Единый Call Center"}
                                        {uzLang?"":enLang?"":""}</h6>
                                    </Col>
                                </Row>
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
    Footer
)