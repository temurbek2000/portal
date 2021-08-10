import React from 'react';
import {Row, message,Col, Button, Select, Drawer, Modal,Menu, Form, Input, Divider, DatePicker, Radio, Steps, Card,Dropdown} from "antd";
import './Menu.css';
import {
    Link
} from "react-router-dom";
import {MenuUnfoldOutlined,LogoutOutlined,DownOutlined,ExclamationCircleOutlined} from '@ant-design/icons';
import {connect} from "react-redux";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {GetEnLanguage, GetLanguage,GetRuLanguage} from "../../Utilitil";
import {getDistrictByRegionId, getDistricts, getRegions, getUserInfo} from "../../server/config/Servises";
import {loginUser, sign_up} from "../../server/config/authentication";
import {userAccessTokenName} from "../../server/constants";
import ModalSignin from "./components/ModalSignin";
import ModalSignup from "./components/ModalSignup";
import {deleteCookie} from "../../utils/useCookies";
import TransverseLoading from "../Loader/TransverseLoading";
const {TextArea }=Input;
const { Step } = Steps;
const {Option}=Select;

class HorizantalMenu extends React.Component{
    state={
        visible:false,
        signupModal:false,
    }

    openSignUp=()=>{
        this.setState({
            signupModal:true
        })
    }


    render() {
        const {uzLang,enLang,current_user}=this.props;
        const {visible}=this.state;
        const changeSelect=(value)=>{
            if (value==="UZ"){
                this.props.uzLanguage();
            }else if (value==="EN") {
                this.props.enLanguage();
            }else {
                this.props.ruLanguage();
            }
        };
        const showDrawer = () => {
            this.setState({
                visible:true
            })
        };

      const  onClose = () => {
            this.setState({
                visible: false
            })
        };
        return(
            <React.Fragment className="Fragment">
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <ul className="sidebar_ul">
                        <Link to={'/faq'}><li onClick={onClose}>FAQ</li></Link>
                        <Link to={'/about'}><li onClick={onClose}>{uzLang?"Biz Haqimizda":enLang?"About Us":"О нас"}</li></Link>
                        <Link to={'/about'}><li onClick={onClose}>{uzLang?"Aloqa":enLang?"Contact Us":"Контакты"}</li></Link>
                        <Link to={'/home'}><li onClick={onClose}>{uzLang?"Bosh sahifa":enLang?"Home":"Главная"}</li></Link>
                        <Link to={'/forum'}><li onClick={onClose}>{uzLang?"Forum":enLang?"Forum":"Форум"}</li></Link>
                        <Link to={'/rekurs'}><li onClick={onClose}>{uzLang?"Resurslar":enLang?"Resources":"Ресурсы"}</li></Link>
                        <Link to={'/consultation'}><li onClick={onClose}>{uzLang?"Maslahatlar":enLang?"Consultation":"Консультация"}</li></Link>
                        <Link to={'/konkurs'}><li onClick={onClose}>{uzLang?"Tanlovlar":enLang?"Contests":"Конкурсы"}</li></Link>
                        <Link to={'/news'}><li onClick={onClose}>{uzLang?"Yangiliklar":enLang?"News":"Новости"}</li></Link>
                        <Link to={'/galereya'}><li onClick={onClose}>{uzLang?"Galereya":enLang?"Gallery":"Галерея"}</li></Link>
                         <li>
                             <Select  defaultValue={!GetLanguage()?"UZ":!GetEnLanguage()?"EN":"RU"} onChange={changeSelect}>
                                 <Option  value="EN"  ><p style={{color:'black'}} >EN</p></Option>
                                 <Option value="UZ"  ><p style={{color:'black'}} >UZ</p></Option>
                                 <Option value="RU"  ><p style={{color:'black'}} >RU</p></Option>
                             </Select>
                         </li>


                    </ul>
                    <ModalSignin current_user={current_user} sidebar={true} openSignUp={this.openSignUp}/>
                </Drawer>
              <div className="menu z_index">
                  <div className="">
                      <Row >
                          <Col className="gutter-row" span={5} md={5} sm={12} xs={24}>
                              <Link to={'/home'}><p className={'menu_logo'}>Portal<span style={{color:'#FEC339'}}>.UZ</span></p></Link>
                          </Col>
                          <Col className="gutter-row" span={16} md={16} sm={12} xs={24}>
                              <ul className="first_ul">
                                  <Link to={'/faq'}><li onClick={onClose}>FAQ</li></Link>
                                  <Link to={'/about'}><li onClick={onClose}>{uzLang?"Biz Haqimizda":enLang?"About Us":"О нас"}</li></Link>
                                  <Link to={'/about'}><li onClick={onClose}>{uzLang?"Aloqa":enLang?"Contact Us":"Контакты"}</li></Link>
                                 <Link to={'/home'}><li onClick={onClose}>{uzLang?"Bosh sahifa":enLang?"Home":"Главная"}</li></Link>
                                  <Link to={'/forum'}><li onClick={onClose}>{uzLang?"Forum":enLang?"Forum":"Форум"}</li></Link>
                                  <Link to={'/rekurs'}><li onClick={onClose}>{uzLang?"Resurslar":enLang?"Resources":"Ресурсы"}</li></Link>
                                  <Link to={'/consultation'}><li onClick={onClose}>{uzLang?"Maslahatlar":enLang?"Consultation":"Консультация"}</li></Link>
                                  <Link to={'/konkurs'}><li onClick={onClose}>{uzLang?"Tanlovlar":enLang?"Contests":"Конкурсы"}</li></Link>
                                  <Link to={'/news'}><li onClick={onClose}>{uzLang?"Yangiliklar":enLang?"News":"Новости"}</li></Link>
                                  <Link to={'/galereya'}><li onClick={onClose}>{uzLang?"Galereya":enLang?"Gallery":"Галерея"}</li></Link>
                                  <li onClick={()=>changeSelect('RU')}> RU  /

                                      {/*<Select className={'language_select'}  defaultValue={!GetLanguage()?"UZ":!GetEnLanguage()?"EN":"RU"} onChange={changeSelect}   style={{}}>*/}
                                      {/*<Option value="EN"  ><p style={{color:'black'}} >EN</p></Option>*/}
                                      {/*<Option value="UZ"  ><p style={{color:'black'}} >UZ</p></Option>*/}
                                      {/*<Option value="RU"  ><p style={{color:'black'}} >RU</p></Option>*/}
                                  {/*</Select>*/}
                                  </li>
                                  <li onClick={()=>changeSelect('UZ')}>UZ /</li>
                                  <li onClick={()=>changeSelect('EN')}>EN </li>
                              </ul>
                            </Col>
                          <Col className="gutter-row" span={3} md={3} sm={12} xs={24}>

                              <ModalSignin current_user={current_user} sidebar={false} openSignUp={this.openSignUp}/>



                          </Col>
                          <div className="menu_btn" onClick={showDrawer}>
                              <MenuUnfoldOutlined />
                          </div>
                      </Row>
                  </div>
              </div>


                {
                    this.state.signupModal?
                        <ModalSignup/>:''
                }

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
    HorizantalMenu
)
