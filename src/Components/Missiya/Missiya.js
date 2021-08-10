import React from 'react';
import 'antd/dist/antd.css';
import './Missiya.css';
import {Row,Col,Card} from 'antd';
import {ApartmentOutlined,MailOutlined,FileOutlined} from '@ant-design/icons';
import {connect} from "react-redux";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
import icon from '../images/missia_icon.svg';
class Missiya extends React.Component{
    render() {
        const {uzLang,enLang}=this.props;
        return(
            <React.Fragment>
              <div className="main_missia_div">
                  <div className="container">

                      <div className="main_mis">
                          <div className="container d-flex ">
                              <img className={'ellio_img'} src={icon} alt="Ellio"/>
                              <p  className={'nasha_title'}>{uzLang?"Bizning vazifamiz":enLang?"Our mission":"Наша миссия"}</p>
                              <p className={'nasha_text'}> {uzLang?"Tashkilotning asosiy maqsadi tizimda ishlaydigan o'qituvchilarni har tomonlama qo'llab-quvvatlashdir":enLang?"The main goal of the organization is to provide comprehensive support to teachers working in the system":"Основной целью организации является оказание всесторонней поддержки учителям, работающим в системе"}</p>
                          </div>
                          <div className="nasha_card">
                              <Row>

                                  <Col lg={8} md={24} sm={24} >
                                      <div className="w-100 mb-3">
                                          <Card style={{ width: '90%',marginLeft:'5%',height:'auto',minHeight:'170px',marginBottom:'50px'}}>
                                              <Row>
                                                  <Col span={6}>
                                                      <p style={{color:'rgba(0, 197, 128, 0.97)',fontSize:'30px'}}><ApartmentOutlined /></p>
                                                  </Col>
                                                  <Col span={18}>
                                                      <h3 >{uzLang?"Vazifalarni avtomatlashtirish":enLang?"Automate tasks":"Автоматизация задач"} </h3>
                                                      <p style={{color:'#61666D'}}> {uzLang?"O'qituvchilar uyushmasi O'zbekistonda tashkil topgan":enLang?"The Association of Teachers was formed in Uzbekistan":"В Узбекистане была сформирована Ассоциация учителей"}</p>
                                                  </Col>
                                              </Row>
                                          </Card>
                                      </div>
                                  </Col>
                                  <Col lg={8} md={24} sm={24} >
                                      <div className="w-100 mb-3">
                                          <Card style={{ width: '90%',marginLeft:'5%',height:'auto',minHeight:'170px',marginBottom:'50px' }}>
                                              <Row>
                                                  <Col span={6}>
                                                      <p style={{color:'rgba(0, 197, 128, 0.97)',fontSize:'30px'}}><MailOutlined /></p>
                                                  </Col>
                                                  <Col span={18}>
                                                      <h3 >{uzLang?"Ma'lumotlarni saqlash":enLang?"Data storage":"Хранение информации"}</h3>
                                                      <p style={{color:'#61666D'}}>{uzLang?"Loyihaning asosiy maqsadiga bitta sayt yordamida erishish kutilmoqda.":enLang?"The main goal of the project is expected to be achieved using a single site.":"Достижение главной цели проекта предполагается при использовании единого сайта"}</p>
                                                  </Col>
                                              </Row>
                                          </Card>
                                      </div>
                                  </Col>
                                  <Col lg={8} md={24} sm={24} >
                                      <div className="w-100 mb-3">
                                          <Card style={{ width: '90%',marginLeft:'5%' ,height:'auto',minHeight:'170px',marginBottom:'50px' }}>
                                              <Row>
                                                  <Col span={6}>
                                                      <p style={{color:'rgba(0, 197, 128, 0.97)',fontSize:'30px'}}><FileOutlined /></p>
                                                  </Col>
                                                  <Col span={18}>
                                                      <h3 >{uzLang?"Ma'lumotlarni qayta ishlash":enLang?"Data processing":"Обработка информации"}</h3>
                                                      <p style={{color:'#61666D'}}>{uzLang?"Ariza beruvchilar va ko'rib chiquvchi tomonlar o'rtasidagi o'zaro ta'sir samaradorligini oshirish":enLang?"Improving the efficiency of interaction between applicants and considering parties":"Повышение эффективности взаимодействия соискателей и рассматривающих сторон"}
                                                      </p>
                                                  </Col>
                                              </Row>
                                          </Card>
                                      </div>
                                  </Col>
                                  <Col lg={8} md={24} sm={24} >
                                      <div className="w-100 mb-3">
                                          <Card style={{ width: '90%',marginLeft:'5%',height:'auto',minHeight:'170px',marginBottom:'50px'  }}>
                                              <Row>
                                                  <Col span={6}>
                                                      <p style={{color:'rgba(0, 197, 128, 0.97)',fontSize:'30px'}}><ApartmentOutlined /></p>
                                                  </Col>
                                                  <Col span={18}>
                                                      <h3 >{uzLang?"Vazifalarni avtomatlashtirish":enLang?"Automate tasks":"Автоматизация задач"} </h3>
                                                      <p style={{color:'#61666D'}}> {uzLang?"O'qituvchilar uyushmasi O'zbekistonda tashkil topgan":enLang?"The Association of Teachers was formed in Uzbekistan":"В Узбекистане была сформирована Ассоциация учителей"}</p>
                                                  </Col>
                                              </Row>
                                          </Card>
                                      </div>
                                  </Col>
                                  <Col lg={8} md={24} sm={24} >
                                      <div className="w-100 mb-3">
                                          <Card style={{ width: '90%',marginLeft:'5%',height:'auto',minHeight:'170px' ,marginBottom:'50px'}}>
                                              <Row>
                                                  <Col span={6}>
                                                      <p style={{color:'rgba(0, 197, 128, 0.97)',fontSize:'30px'}}><MailOutlined /></p>
                                                  </Col>
                                                  <Col span={18}>
                                                      <h3 >{uzLang?"Ma'lumotlarni saqlash":enLang?"Data storage":"Хранение информации"}</h3>
                                                      <p style={{color:'#61666D'}}>{uzLang?"Loyihaning asosiy maqsadiga bitta sayt yordamida erishish kutilmoqda.":enLang?"The main goal of the project is expected to be achieved using a single site.":"Достижение главной цели проекта предполагается при использовании единого сайта"}</p>
                                                  </Col>
                                              </Row>
                                          </Card>
                                      </div>
                                  </Col>
                                  <Col lg={8} md={24} sm={24} >
                                      <div className="w-100 mb-3">
                                          <Card style={{ width: '90%',marginLeft:'5%',height:'auto',minHeight:'170px',marginBottom:'50px'  }}>
                                              <Row>
                                                  <Col span={6}>
                                                      <p style={{color:'rgba(0, 197, 128, 0.97)',fontSize:'30px'}}><FileOutlined /></p>
                                                  </Col>
                                                  <Col span={18}>
                                                      <h3 >{uzLang?"Ma'lumotlarni qayta ishlash":enLang?"Data processing":"Обработка информации"}</h3>
                                                      <p style={{color:'#61666D'}}>{uzLang?"Ariza beruvchilar va ko'rib chiquvchi tomonlar o'rtasidagi o'zaro ta'sir samaradorligini oshirish":enLang?"Improving the efficiency of interaction between applicants and considering parties":"Повышение эффективности взаимодействия соискателей и рассматривающих сторон"}
                                                      </p>
                                                  </Col>
                                              </Row>
                                          </Card>
                                      </div>
                                  </Col>

                              </Row>
                          </div>
                      </div>
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
    Missiya
)
