import React from 'react';
import './Rekvisit.css';
import {Row,Col} from 'antd'
import {connect} from "react-redux";
import {uzLanguage} from "../../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../../Redux/Actions/EnLanguage";
class Rekvisit  extends  React.Component{
    render() {
        const {uzLang,enLang}=this.props;
        return(
            <React.Fragment>
                <Row>
                    <Col lg={12} md={24}>
                      <h3 style={{color:'gray'}}> {uzLang?"To'liq ism":enLang?"Full name":"Полное наименование"}</h3>
                    </Col>
                    <Col lg={12} md={24}>
                        <h3 > {uzLang?"Mustaqil o'qituvchilar uyushmalariga vakolat berish":enLang?"Empowering independent teacher associations":"Расширение возможностей независимых ассоциаций учителей"}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={24}>
                        <h3 style={{color:'gray'}}>{uzLang?"Bosh direktor":enLang?"CEO":"Генеральный директор "}</h3>
                    </Col>
                    <Col lg={12} md={24}>
                        <h3 > {uzLang?"Innovatsiya, texnologiya va strategiya markazi \"O'zbekiston Respublikasi Xalq ta'limi vazirligi huzurida.":enLang?"Center for Innovation, Technology and Strategy \"under the Ministry of Public Education of the Republic of Uzbekistan.":"Центр инновации, технологии и стратегии» при Министерстве народного образования Республики Узбекистан."}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={24}>
                        <h3 style={{color:'gray'}}> {uzLang?"Bank nomi":enLang?"Name of the bank":"Наименование банка"}</h3>
                    </Col>
                    <Col lg={12} md={24}>
                        <h3 > {uzLang?"bank VTB (PJSC) da, Moskva":enLang?"at VTB Bank (PJSC), Moscow":"в Банк ВТБ (ПАО), г. Москва"}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={24}>
                        <h3 style={{color:'gray'}}> {uzLang?"Korrespondentlik qaydnomasi":enLang?"Correspondent account":"Корреспондентский счет"}</h3>
                    </Col>
                    <Col lg={12} md={24}>
                        <h3 >30101810700000000187
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={24}>
                        <h3 style={{color:'gray'}}> {uzLang?"BIK":enLang?"BIK":"БИК"}</h3>
                    </Col>
                    <Col lg={12} md={24}>
                        <h3 >044525187
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={24}>
                        <h3 style={{color:'gray'}}> {uzLang?"Hisob raqami":enLang?"Checking account":"Расчетный счет"}	</h3>
                    </Col>
                    <Col lg={12} md={24}>
                        <h3 >40702810500110000939
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={24}>
                        <h3 style={{color:'gray'}}> {uzLang?"INN":enLang?"INN":"ИНН"}	</h3>
                    </Col>
                    <Col lg={12} md={24}>
                        <h3 >7721546864
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={24}>
                        <h3 style={{color:'gray'}}> {uzLang?"KPP":enLang?"KPP":"КПП"}	</h3>
                    </Col>
                    <Col lg={12} md={24}>
                        <h3 >507401001
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={24}>
                        <h3 style={{color:'gray'}}> {uzLang?"OGRN":enLang?"OGRN":"ОГРН"}	</h3>
                    </Col>
                    <Col lg={12} md={24}>
                        <h3 >1067746062449
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={24}>
                        <h3 style={{color:'gray'}}> {uzLang?"Yuridik manzil":enLang?"Legal address":"Юридический адреc"}		</h3>
                    </Col>
                    <Col lg={12} md={24}>
                        <h3 > {uzLang?"100187, O'zbekiston, Toshkent, Shayxontohur tumani, Navoiy ko'chasi, 2a":enLang?"100187, Uzbekistan, Tashkent, Shaykhantakhur district, Navoi street, 2a":"100187, Узбекистан, г. Ташкент, Шайхантахурский район, улица Навои, 2а"}
                        </h3>
                    </Col>
                </Row>
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
    Rekvisit
)