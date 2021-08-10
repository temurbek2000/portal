import React from 'react';
import '../Menu.css'
import {Button, Col, Modal, Row, Form, Input, message, Dropdown,Menu} from "antd";
import {userAccessTokenName} from "../../../server/constants";
import {deleteCookie, getCookie, setCookie} from "../../../utils/useCookies";
import {connect} from "react-redux";
import {uzLanguage} from "../../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../../Redux/Actions/EnLanguage";
import {loginUser} from "../../../server/config/authentication";
import {Link} from "react-router-dom";
import {MenuUnfoldOutlined,LogoutOutlined,DownOutlined,ExclamationCircleOutlined,UserOutlined} from '@ant-design/icons';
const { confirm } = Modal;
class ModalSignin extends React.Component{
    state={
        visible:false,
    };
    showModal=()=>{
        this.setState({
            visible:true
        })
    }
     onClose = () => {
        this.setState({
            visible:false
        })
    };

    confirmLogOut=()=> {
        confirm({
            className:"LogoutCofirm",
            title:"Tizimdan chiqmoqchimisiz?",
            icon: <ExclamationCircleOutlined />,
            content: "Tizimdan chiqqandan so'ng, parolingizni qayta kiritishingiz kerak bo'ladi.",
            okText: "Chiqish",
            cancelText: "Bekor qilish",
            centered: true,
            onOk() {
                deleteCookie(userAccessTokenName);
                window.location.reload()
            },
        });
    };
    onFinish=(values)=>{

        loginUser({
            ...values
        }).then((res) => {
            if (res && res.status === 200 && res.data) {
                setCookie(userAccessTokenName, res.data.token)
                this.onClose()
                window.location.reload()
            } else {
                message.error("Something went wrong!")
            }
        })
    }
    openSignUp=()=>{
        this.onClose()
        this.props.openSignUp();
    }
    render() {
        const {uzLang,enLang,current_user,sidebar}=this.props;
        return (

            <Col className="gutter-row" span={4}>
                {
                    getCookie(userAccessTokenName)? <Dropdown
                            overlay={
                                <Menu>

                                    <Menu.Item key="child1" style={{width:'100%'}}>
                                        <Link to={'/profile'}><h3>Profil</h3></Link>
                                    </Menu.Item>
                                    <Menu.Item key="child2" onClick={this.confirmLogOut} style={{width:'100%'}}>
                                        <LogoutOutlined />
                                        Chiqish
                                    </Menu.Item>
                                </Menu>
                            }
                        >
                            <Button className={'first_ul'} type="text" style={{fontSize:'18px',color:'white',fontWeight:500,marginLeft:'-100%',width:'20%'}}>
                                <UserOutlined/>
                                {current_user?current_user.firstname+' '+current_user.lastname:''}
                                <DownOutlined />
                            </Button>
                        </Dropdown>:
                        <button style={{marginTop:'20px'}} onClick={this.showModal}  className={sidebar?'sidebar_voyti_btn':'voyti_btn'}>
                            {uzLang?"Kirish":enLang?"Sign in":"Войти"}
                        </button>
                }
                <Modal footer={false}  title={<h3 style={{textAlign:'center'}}>{uzLang?"Tizimga kirish":enLang?"Sign in":"Войти в систему"}</h3>}
                        visible={this.state.visible}
                        onCancel={this.onClose}
                        onOk={this.onFinish}
                        className={'Sign_modal'}>
                    <Form
                        style={{
                            width:'100%',
                            position:'absolute'
                        }}
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            style={{
                                marginLeft:'5%',
                                width:'100%'
                            }}
                            name="username"
                            rules={[{ required: true, message:uzLang?"Loginingizni kiriting":enLang?"Enter login":" Введите логин" }]}
                        >
                            <Row><Col span={20}><div style={{width:'70%'}}><Input placeholder={uzLang?"Loginingizni kiriting":enLang?"Enter login":" Введите логин" }/></div></Col></Row>
                        </Form.Item>

                        <Form.Item
                            style={{
                                marginLeft:'5%',
                                width:'100%'
                            }}
                            name="password"tel
                            rules={[{ required: true, message: uzLang?"Parolni kiriting":enLang?"Enter password":"Введите пароль"}]}
                        >
                            <Row><Col span={20}><div style={{width:'70%'}}><Input.Password placeholder={uzLang?"Parolni kiriting":enLang?"Enter password":"Введите пароль"}/></div></Col></Row>
                        </Form.Item>



                        <Form.Item>
                            <Button   htmlType="submit" hover={false} className={'Sign_in_button'}><h3 style={{textAlign:'center'}}>{uzLang?"Kirish":enLang?"Come In":"Войти"}</h3></Button>
                        </Form.Item>
                        <Row>
                            <Col md={8} xs={24}>
                                <h5 className={'remember_password'}>{uzLang?"Ro'yxatdan o'tmaganmisiz?":enLang?"Not registered?":"Не зарегистрирован?"}</h5>
                            </Col>
                            <Col md={8} xs={24}>
                                <h5 onClick={this.openSignUp} className={'to_sign_up'}>{uzLang?"Ro'yxatdano'tish":enLang?"Sign Up":"Регистрация"}</h5>
                            </Col>
                        </Row>
                        <Form.Item>
                            <Button hover={false} className={'Sign_in_button idGov'}><h3 style={{textAlign:'center'}}>ID.GOV.UZ</h3></Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </Col>

        );
    }

}
const mapStateToProps = (state) => {

    return {
        uzLang: state.changeLang.uzLang,
        enLang: state.changeLang.enLang,

    };
};
export default connect(mapStateToProps,{uzLanguage,ruLanguage,enLanguage})(
    ModalSignin
)