import React from 'react';
import {connect} from "react-redux";
import {uzLanguage} from "../../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../../Redux/Actions/EnLanguage";
import {Button, Col, Divider, Input, Modal, Radio, Row, Select, Steps,Form,message} from "antd";
import {getDistrictByRegionId, getRegions} from "../../../server/config/Servises";
import {sign_up} from "../../../server/config/authentication";


const {Step}=Steps
const {Option}=Select;
const {TextArea}=Input;

class ModalSignup extends React.Component {
    state = {
        visible: true,
        current: 0,
        regions:[],
        districts:[],
        user_data:{},
    };

    onClose = () => {
        this.setState({
            visible: false
        })
    };






    collections=()=>{
        getRegions().then((res)=>{
            if (res){
                this.setState({
                    regions: res.data
                });
            }
        });
    }

    componentDidMount() {
        this.collections()
    }

    render() {
        const {uzLang,enLang}=this.props;
        const {current,user_data,regions,districts}=this.state

        const Finish = (values) => {
            this.setState({
                current:current+1,

            });
 let dd={
     ...user_data,
     districtId:values.district,
     school:values.school,
     birthday:new Date().getTime()
 };
            sign_up(dd).then(res=>{
                if (res.data.success){
                    message.success("Ro'yxatdan o'tildi")
                    this.onClose()
                } else {
                    message.error("Ro'yxatdan o'tilmadi")
                }
            })
        };
        const Finish2 = (values) => {
            console.log(values)
            this.setState({
                current:current+1,
                user_data:{
                    ...user_data,
                    lastname:values.fullname,
                    firstname:values.name,
                    fathersName:values.fathername,
                    email:values.email,
                    // birthday:12345,
                }
            })
        };
        const Finish1 = (values) => {
            if(values.password===values.password1){
                this.setState({
                    current:current+1,
                    user_data:{
                        ...user_data,
                        username:values.login,
                        password:values.password,
                    }
                })

            }else{
                this.setState({
                    current:current,
                })
            }
        };
        const StepsChange=(current)=>{
            this.setState({
                current,
            })
        }
        const Select_Region=(value)=>{
            getDistrictByRegionId(value).then((res)=>{
                if (res){
                    this.setState({
                        districts: res.data
                    });
                }
            })

        }
        const  onClose = () => {
            this.setState({
                visible:false
            })
        };
        return (
            <Modal
                title={<h3 style={{textAlign:'center'}}>{uzLang?"Ro'yxatdan o'tish":enLang?"Sign Up":"??????????????????????"}</h3>}
                visible={this.state.visible}
                className={'Sign_up_modal'}
                onOk={Finish}
                onCancel={this.onClose}
            >
                <Steps labelPlacement={'vertical'} current={current} onChange={StepsChange} responsive={true}>
                    <Step description={<h3>{uzLang?"Profil ma'lumotlari":enLang?"Profile data":"???????????? ??????????????"}</h3>}/>
                    <Step  description={<h3>{uzLang?"Shaxs malumotlari":enLang?"Your data":"???????? ????????????"}</h3>}/>
                    <Step description={<h3>{uzLang?"Ish joyi":enLang?"Place of work":"?????????? ????????????"}</h3>} />
                </Steps>

                <Divider />
                {
                    current==0?
                        <Form
                            style={{
                                width:'100%',
                                position:'absolute'
                            }}
                            name="Add "
                            initialValues={{ remember: true }}
                            onFinish={Finish1}
                        >


                            <Form.Item
                                style={{
                                    marginLeft:'10%',
                                    width:'100%'
                                }}
                                name="login"
                                rules={[{ required: true, message: uzLang?"Loginingizni kiriting":enLang?"Enter login":" ?????????????? ??????????" }]}
                            >
                                <Row><Col span={24}><div style={{width:'70%'}}><Input placeholder={uzLang?"Loginingizni kiriting":enLang?"Enter login":" ?????????????? ??????????" }/></div></Col></Row>
                            </Form.Item>

                            <Form.Item
                                style={{
                                    marginLeft:'10%',
                                    width:'100%'
                                }}
                                name="password"
                                rules={[{ required: true, message: uzLang?"Parolni kiriting":enLang?"Enter password":"?????????????? ????????????"}]}
                            >
                                <Row><Col span={24}><div style={{width:'70%'}}><Input.Password placeholder={uzLang?"Parolni kiriting":enLang?"Enter password":"?????????????? ????????????"} className={'parol1'}/></div></Col></Row>
                            </Form.Item>
                            <Form.Item
                                style={{
                                    marginLeft:'10%',
                                    width:'100%'
                                }}
                                name="password1"
                                rules={[{ required: true, message: uzLang?"Parolni qayta kiriting":enLang?"Repeat password":"?????????????????? ????????????" }]}
                            >
                                <Row>
                                    <Col span={24}><div style={{width:'70%'}}><Input.Password placeholder={uzLang?"Parolni qayta kiriting":enLang?"Repeat password":"?????????????????? ????????????"} className={'parol2'}/></div></Col></Row>
                            </Form.Item>

                            <Row>
                                <Col md={4} xs={24}></Col>
                                <Col md={16} xs={24}>
                                    <h5 className={'remember_password'}>{uzLang?"Ro'yxatdan o'tish orqali siz bizning":enLang?"By registering, you agree to our":"??????????????????????????, ???? ???????????????????????? ?? ????????????"}
                                        <span className={'to_sign_up'}>{uzLang?"Shartlar va Maxfiylik siyosatiga":enLang?"Terms and Privacy Policy.":"?????????????? ?? ???????????????? ????????????????????????????????????."}</span>{uzLang?"rozilik bildirasiz.":enLang?"":""}</h5>
                                </Col>

                            </Row>
                            <Form.Item>
                                <Col md={4} xs={24}></Col>
                                <Col md={16} xs={24} style={{textAlign:'center'}}>
                                    <Button  htmlType="submit" hover={false} className={'Sign_button'}><h3 style={{textAlign:'center'}}>{uzLang?"Davom eting":enLang?"Proceed":"????????????????????"}</h3></Button>
                                </Col>
                            </Form.Item>
                        </Form> :current==1?
                        <Form
                            style={{
                                width:'100%',
                                position:'absolute'
                            }}
                            name="Add "
                            initialValues={{ remember: true }}
                            onFinish={Finish2}
                        >


                            <Form.Item
                                style={{
                                    marginLeft:'10%',
                                    width:'100%'
                                }}
                                name="fullname"
                                rules={[{ required: true, message: uzLang?"Familiyangizni kiriting":enLang?"Enter your last name":"?????????????? ???????? ??????????????" }]}
                            >
                                <Row><Col span={24}><div style={{width:'70%'}}><Input placeholder={uzLang?"Familiyangizni kiriting":enLang?"Enter your last name":"?????????????? ???????? ??????????????" }/></div></Col></Row>
                            </Form.Item>

                            <Form.Item
                                style={{
                                    marginLeft:'10%',
                                    width:'100%'
                                }}
                                name="name"
                                rules={[{ required: true, message: uzLang?"Ismingizni kiriting":enLang?"Enter your name":"?????????????? ???????? ??????" }]}
                            >
                                <Row><Col span={24}><div style={{width:'70%'}}><Input placeholder={uzLang?"Ismingizni kiriting":enLang?"Enter your name":"?????????????? ???????? ??????" }/></div></Col></Row>
                            </Form.Item>
                            <Form.Item
                                style={{
                                    marginLeft:'10%',
                                    width:'100%'
                                }}
                                name="fathername"
                                rules={[{ required: true, message: uzLang?"Otangizning ismini kiriting":enLang?"Enter your father's name":"?????????????? ?????? ???????????? ????????" }]}
                            >
                                <Row><Col span={24}><div style={{width:'70%'}}><Input placeholder={uzLang?"Otangizning ismini kiriting":enLang?"Enter your father's name":"?????????????? ?????? ???????????? ????????" }/></div></Col></Row>
                            </Form.Item>
                            <Form.Item
                                style={{
                                    marginLeft:'10%',
                                    width:'100%'
                                }}
                                name="email"
                                rules={[{ required: true, message: uzLang?"Emailingizni kiriting":enLang?"Enter your email":"?????????????? ?????????? ?????????????????????? ??????????" }]}
                            >
                                <Row><Col span={24}><div style={{width:'70%'}}><Input placeholder={uzLang?"Emailingizni kiriting":enLang?"Enter your email":"?????????????? ?????????? ?????????????????????? ??????????" }/></div></Col></Row>
                            </Form.Item>


                            <Row>
                                <Col md={4} xs={24}></Col>
                                <Col md={16} xs={24}>
                                    <h5 className={'remember_password'}>{uzLang?"Ro'yxatdan o'tish orqali siz bizning":enLang?"By registering, you agree to our":"??????????????????????????, ???? ???????????????????????? ?? ????????????"}
                                        <span className={'to_sign_up'}>{uzLang?"Shartlar va Maxfiylik siyosatiga":enLang?"Terms and Privacy Policy.":"?????????????? ?? ???????????????? ????????????????????????????????????."}</span>{uzLang?"rozilik bildirasiz.":enLang?"":""}</h5>
                                </Col>

                            </Row>
                            <Form.Item>
                                <Col md={4} xs={24}></Col>
                                <Col md={16} xs={24} style={{textAlign:'center'}}>
                                    <Button  htmlType="submit" hover={false} className={'Sign_button'}><h3 style={{textAlign:'center'}}>{uzLang?"Davom eting":enLang?"Proceed":"????????????????????"}</h3></Button>
                                </Col>
                            </Form.Item>
                        </Form> :

                        <Form
                            style={{
                                width:'100%',
                                position:'absolute'
                            }}
                            name="Add "
                            initialValues={{ remember: true }}
                            onFinish={Finish}
                        >



                            <Form.Item
                                style={{
                                    marginLeft:'10%',
                                    width:'80%'
                                }}
                                name="region"
                                rules={[{ required: true, message: uzLang?"Mintaqani tanlang":enLang?"Choose region":"???????????????? ????????????" }]}
                            >
                                <Select  defaultValue={uzLang?"Mintaqani tanlang":enLang?"Choose region":"???????????????? ????????????"} onChange={Select_Region}>
                                    {
                                        regions?regions.map((item)=>{
                                            return <Option value={item.id}>{uzLang?item.nameUz:enLang?item.nameEn:item.nameRu}</Option>
                                        }):''
                                    }
                                </Select>
                            </Form.Item>

                            <Form.Item
                                style={{
                                    marginLeft:'10%',
                                    width:'80%'
                                }}
                                name="district"
                                rules={[{ required: true, message: 'district' }]}
                            >
                                <Select defaultValue={uzLang?"Hududni tanlang":enLang?"Select area":"???????????????? ??????????"}>
                                    {
                                        districts?districts.map((item)=>{
                                            return <Option value={item.id}>{uzLang?item.nameUz:enLang?item.nameEn:item.nameRu}</Option>
                                        }):''
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item
                                style={{
                                    marginLeft:'10%',
                                    width:'80%'
                                }}
                                name="school"
                                rules={[{ required: true, message: 'school' }]}
                            >
                                <TextArea rows={4} style={{height:'30px',borderRadius:'10px'}} placeholder={uzLang?"Maktab tanlang":enLang?"Choose a school":"???????????????? ??????????"} />

                            </Form.Item>
                            <Form.Item
                                style={{
                                    marginLeft:'10%',
                                    width:'80%'
                                }}
                                name="agree"
                                rules={[{ required: false, message: 'agree' }]}>
                                <Radio value={'Ha'}>{uzLang?"Siz uyushma a'zosisiz?":enLang?"Are you a member of the association?":"?????????????????? ???? ???? ???????????????????? ?????????????????????"} </Radio>
                            </Form.Item>



                            <Row>
                                <Col md={4} xs={24}></Col>
                                <Col md={16} xs={24}>
                                    <h5 className={'remember_password'}>{uzLang?"Ro'yxatdan o'tish orqali siz bizning":enLang?"By registering, you agree to our":"??????????????????????????, ???? ???????????????????????? ?? ????????????"}
                                        <span className={'to_sign_up'}>{uzLang?"Shartlar va Maxfiylik siyosatiga":enLang?"Terms and Privacy Policy.":"?????????????? ?? ???????????????? ????????????????????????????????????."}</span>{uzLang?"rozilik bildirasiz.":enLang?"":""}</h5>
                                </Col>

                            </Row>
                            <Form.Item>
                                <Col md={4} xs={24}></Col>
                                <Col md={16} xs={24} style={{textAlign:'center'}}>
                                    <Button  htmlType="submit"  hover={false} className={'Sign_button'}><h3 style={{textAlign:'center'}}>{uzLang?"Davom eting":enLang?"Proceed":"????????????????????"}</h3></Button>
                                </Col>
                            </Form.Item>

                        </Form>
                }

            </Modal>
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
    ModalSignup
)