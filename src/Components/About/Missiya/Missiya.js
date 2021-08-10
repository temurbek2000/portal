import React from 'react';
import './Missiya.css';
import {connect} from "react-redux";
import {uzLanguage} from "../../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../../Redux/Actions/EnLanguage";
import Statistic from "../../statistic/statistic";
import {ApartmentOutlined,MailOutlined,FileOutlined} from '@ant-design/icons';
import our from '../../images/about_mission.jpg'
import {Card, Col, Row} from "antd";
class Missiya1  extends  React.Component{
    render() {
        const {uzLang,enLang}=this.props;
        return(
            <React.Fragment>
                <h2>{uzLang?"Biz Haqimizda":enLang?"About Us":"О нас"}</h2>
               <Row>
                   <Col md={12} sm={24}>
                       <h4> {uzLang?"O'zbekistonda \"O'qituvchilar uyushmasi\" nodavlat notijorat tashkiloti tashkil etildi. U jamoat birlashmasi shaklida tuzilgan va O'zbekiston Respublikasi Adliya vazirligida ro'yxatdan o'tgan. Ushbu o'qituvchilar uyushmasini moliyalashtirish Evropa Ittifoqi tomonidan \"O'zbekistondagi mustaqil o'qituvchilar uyushmalarining imkoniyatlarini kengaytirish\" loyihasi asosida amalga oshiriladi. Assotsiatsiyani yaratishda amaliy tashkiliy yordam Innovatsiyalar, texnologiyalar va strategiyalar markazi tomonidan ko'rsatildi.\n" +
                           "                    Tashkilotning asosiy maqsadi xalq ta'limi tizimida ishlaydigan o'qituvchilarni har tomonlama qo'llab-quvvatlashdir.\n" +
                           "                    \"O'zbekistonda mustaqil o'qituvchilar uyushmalariga vakolat berish\" loyihasi doirasida Innovatsiya, texnologiya va strategiya markazi jamoat birlashmasini shakllantirishda amaliy yordam ko'rsatdi.\n" +
                           "                    O'qituvchilar uyushmasi Evropa Ittifoqi tomonidan moliyalashtiriladi. U faoliyati o'qituvchilarning jamiyatdagi obro'sini oshirishga, ularning ijtimoiy himoyasini kuchaytirishga, huquqiy savodxonligini oshirishga va kasbiy mahoratini rivojlantirishga qaratilgan jamoalarni yaratishni qo'llab-quvvatlaydi.":enLang?"A non-profit non-governmental organization \"Association of Teachers\" was formed in Uzbekistan. It was created in the form of a public association and was registered with the Ministry of Justice of the Republic of Uzbekistan. Funding for this association of teachers is provided by the European Union in accordance with the created project \"Expanding the capabilities of independent teachers' associations in Uzbekistan.\" Practical organizational assistance in the creation of the association was provided by the Center for Innovations, Technologies and Strategies.\n" +
                           "                    The main goal of the organization is to provide comprehensive support to teachers working in the public education system.\n" +
                           "                    Within the framework of the project \"Empowering Independent Teachers Associations in Uzbekistan\", the Center for Innovation, Technology and Strategy provided practical assistance in the formation of a public association.\n" +
                           "                    The Teachers' Association is funded by the European Union. It supports the creation of communities whose activities are aimed at raising the profile of teachers in society, strengthening their social protection, increasing legal literacy and developing professional skills.":"В Узбекистане была сформирована некоммерческая неправительственная организация «Ассоциация учителей». Она создана в форме общественного объединения и была зарегистрирована в Министерстве юстиции РУз. Финансирование данного объединения учителей осуществляет Европейский союз согласно созданному проекту «Расширение возможностей независимых ассоциаций учителей в Узбекистане». Организационную помощь практического характера при создании объединения оказал Центр инноваций, технологий и стратегий.\n" +
                           "                    Основной целью организации является оказание всесторонней поддержки учителям, работающим в системе государственного образования.\n" +
                           "                    В рамках проекта \"Расширение возможностей независимых ассоциаций учителей в Узбекистане\" Центром инноваций, технологий и стратегии была оказана практическая помощь в формировании общественного объединения.\n" +
                           "                    Ассоциация учителей финансируется Европейским союзом. Она поддерживает создание сообществ, деятельность которых направлена на поднятие авторитета учителей в обществе, усиление их социальной защиты, повышение правовой грамотности и развитие профессиональных способностей.\n" +
                           "              "}
                       </h4>
                   </Col>
                   <Col md={12} sm={24}>
                       <img src={our} alt="error"/>
                   </Col>
               </Row>
                <div className="">
                    <div className="container">

                        <div className="main_mis">
                            <div className="container d-flex ">
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
                {/*<h2> {uzLang?"IP-ning maqsadi":enLang?"Purpose of IP":"Назначение ИС"}</h2>*/}
                {/*<h4>*/}
                    {/*{uzLang?"Axborot tizimi quyidagilarga mo'ljallangan: sohada funktsiyalarni bajarish uchun zarur bo'lgan ma'lumotlarni to'plash, saqlash va qayta ishlash vazifalarini avtomatlashtirish\n" +*/}
                        {/*"                     O'zbekistonda umumiy o'rta va maktabdan tashqari ta'limni isloh qilishning ustuvor yo'nalishlaridan kelib chiqqan holda davlat muassasalari tizimining o'qituvchilariga har tomonlama uslubiy yordam. O'qituvchilarning uslubiy savodxonligini oshirish mamlakatda yuqori darajadagi mutaxassislar sonini ko'paytirish, o'quvchi avlodning qiziqishini uyg'otish va natijada ularning bilim va savodxonlik darajasini oshirishning kalitidir.":enLang?"The information system is intended for: automating the tasks of collecting, storing and processing information necessary for performing functions in the field\n" +*/}
                        {/*"                     Comprehensive methodological assistance to teachers of the system of state institutions based on the priorities of reforming general secondary and out-of-school education in Uzbekistan. Improving the methodological literacy of teachers is the key to increasing the number of high-level specialists in the country, awakening the interest of the learning generation, and, as a result, increasing their level of knowledge and literacy.":"Информационная система предназначена для: автоматизации задач сбора, хранения и обработки информации, необходимой для исполнения функций в сфере\n" +*/}
                        {/*"                    Разносторонняя методическая помощь учителям системы госучреждений исходя из приоритетов реформирования общего среднего и внешкольного образования в Узбекистане. Повышение методической грамотности учителей – залог увеличения количества специалистов высокого уровня в стране, пробуждения интереса обучающегося поколения, и как следствие повышения уровня их знаний, грамотности.\n"}*/}

                {/*</h4>*/}
                {/*<h2>*/}
                     {/*{uzLang?"IP yaratish maqsadlari":enLang?"The goals of creating IP":"Цели создания ИС"}*/}
                {/*</h2>*/}
                {/*<h4> {uzLang?"Loyihaning asosiy maqsadiga quyidagi loyihaning vazifalarini hal qilish natijasida axborot-kommunikatsiya texnologiyalarini joriy qilishning yagona yondashuvi va standartlaridan foydalangan holda erishish kutilmoqda:\n" +*/}
                    {/*"                    Mustaqil o'qituvchilar uyushmalarining vakolatlarini kengaytirish bilan bog'liq barcha jarayonlarni avtomatlashtirish;\n" +*/}
                    {/*"                    Arizachilar va davlat hokimiyati organlari o'rtasidagi o'zaro ta'sir samaradorligini oshirish;\n" +*/}
                    {/*"                    Xizmatlarni ko'rsatish shaffofligini oshirish.\n" +*/}
                    {/*"                    Loyihaning maqsadi - \"O'zbekistondagi mustaqil o'qituvchilar uyushmalarining imkoniyatlarini kengaytirish\", o'qituvchilarning ahamiyati va ishonchliligini oshirish, o'qituvchilarning jamiyatdagi himoyasini kuchaytirish, savodxonlik darajasini oshirish doirasida uyushmalar faoliyatini yaratish va qo'llab-quvvatlash. inson huquqlari sohasida va professional mukammallikni qo'llab-quvvatlash.":enLang?"The main goal of the project is expected to be achieved using a unified approach and standards for the implementation of information and communication technologies as a result of solving the following project tasks:\n" +*/}
                    {/*"                    Automation of all processes related to the empowerment of independent teacher associations;\n" +*/}
                    {/*"                    Improving the efficiency of interaction between applicants and government authorities;\n" +*/}
                    {/*"                    Increasing the transparency of service delivery.\n" +*/}
                    {/*"                    The goal of the project is \"Expanding the capabilities of independent teacher associations in Uzbekistan\", creating and supporting the activities of associations in the framework of increasing the importance and credibility of teachers, strengthening the protection of teachers in society, increasing the level of literacy in the field of human rights and supporting professional excellence.":"Достижение главной цели проекта предполагается при использовании единого подхода и стандартов по внедрению информационно-коммуникационных технологий в результате решения следующих задач проекта:\n" +*/}
                    {/*"                    Автоматизация всех процессов, связанных с расширение возможностей независимых ассоциаций учителей;\n" +*/}
                    {/*"                    Повышение эффективности взаимодействия соискателей и рассматривающих государственных органов;\n" +*/}
                    {/*"                    Повышение прозрачности оказания услуг.\n" +*/}
                    {/*"                    Целью проекта является «Расширение возможностей независимых ассоциаций учителей в Узбекистане», создание и поддержка деятельности ассоциаций в рамках повышения значимости, авторитетности учителей, усиление защиты педагогов в социуме, повышение уровня грамотности в сфере прав человека и поддержка профессионального мастерства\n" +*/}
                    {/*"                "}*/}
                    {/*</h4>*/}
                <Statistic/>
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
    Missiya1
)