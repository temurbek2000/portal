import React from 'react';
import './statistic.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Card,Row,Col } from 'antd';
import {connect} from "react-redux";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
import {getConsultations} from "../../server/config/Servises";
const {Meta}=Card;

class Statistic extends React.Component{


    render() {
        const {uzLang,enLang}=this.props;

        return(
            <React.Fragment>
                <div className="" style={{marginBottom:'50px'}}>
                    <p  className={'statistic_large_title'} >{uzLang?"Statistik ma'lumotlar":enLang?"Statistical data":"Статистические данные"}</p>
                     <div className="container">
                      <Row>
                          <Col md={8} sm={12} xs={24}>
                              <div className="">
                                  <p className="statistic_title">
                                      25+
                                  </p>
                                  <p className="statistic_little_title">
                                      {uzLang?"million rubl":enLang?"million rubles":"млн.рублей"}
                                  </p>
                                  <p className="statistic_description">
                                      {uzLang?"mijozlarning yillik umumiy aylanmasi":enLang?"aggregate annual customer turnover":" совокупний годовой оборот клиентов"}
                                  </p>
                              </div>
                          </Col>
                          <Col md={8} sm={12} xs={24}>
                              <div className="">
                                  <p className="statistic_title">
                                      14
                                  </p>
                                  <p className="statistic_little_title">
                                      {uzLang?"yillik tajriba":enLang?"years of experience":"лет опита работы"}

                                  </p>
                                  <p className="statistic_description">
                                      {uzLang?"har xil moliyaviy -iqtisodiy faoliyatda":enLang?"in various financial and economic activities":" в различной финансово-хозяйственной деятельности"}

                                  </p>
                              </div>
                          </Col>
                          <Col md={8} sm={12} xs={24}>
                              <div className="">
                                  <p className="statistic_title">
                                      350
                                  </p>
                                  <p className="statistic_little_title">
                                      {uzLang?"butun dunyo bo'ylab xodimlar":enLang?"employees around the world":" сотрудников по всему миру"}

                                  </p>
                                  <p className="statistic_description">
                                      {uzLang?"Biz har oyda 350 dan ortiq xodimlarning ish haqini hisoblaymiz":enLang?"We calculate the salary for more than 350 employees monthly":"Считаем зарплату  более чем для 350 сотрудников ежемесячно"}

                                  </p>
                              </div>
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
    Statistic
)