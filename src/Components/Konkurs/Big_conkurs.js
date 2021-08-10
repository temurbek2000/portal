import React from 'react';
import './Konkurs.css';
import {Row, Col, Card, Tabs, Avatar,Button} from 'antd';
import {ArrowDownOutlined,ArrowUpOutlined ,EyeOutlined,MessageOutlined,ArrowRightOutlined} from '@ant-design/icons'
import {
    Link
} from "react-router-dom";
import {connect} from "react-redux";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
import {getContestyId, getNewsById} from "../../server/config/Servises";
const {TabPane}=Tabs;
const {Meta}=Card;

class BigConkurs extends React.Component{
    state={
        batafsil:false,
        one_conkurs:{},
        lang:'Uz'
    };
    componentDidMount() {
        const {uzLang,enLang}=this.props;
        this.setState({
            lang:uzLang?"Uz":enLang?"En":"Ru"
        })
        getContestyId(window.location.pathname.split('/')[2]).then((res)=>{
            if(res){
                this.setState({
                    one_conkurs:res.data,
                })
            }
        })

    }

    render() {
        const {uzLang,enLang}=this.props;
        const {batafsil,one_conkurs,lang}=this.state;

        const date=new Date(one_conkurs.createAt);
        return(
            <React.Fragment>
                <div className="main_forum">
                    <div className="container">
                        <h3><Link to={'/home'}>{uzLang?"Bosh sahifa":enLang?"Home":"Главная"}</Link></h3>
                        <Row>
                            <Col md={24} lg={18} sm={24}>
                                <Card>
                                    <div>
                                        <Row>
                                            <Col  sm={24}>
                                                <Card>
                                                    <Row>
                                                        <Col span={24} style={{padding:'20px'}}>
                                                             <h3>{one_conkurs[`title${lang}`]}</h3>
                                                        </Col>
                                                        <Col span={24}>
                                                        </Col>
                                                        <Col span={24}>
                                                            <h5 style={{color:'gray'}} dangerouslySetInnerHTML={{__html: uzLang?one_conkurs.contentUz:enLang?one_conkurs.contentEn:one_conkurs.contentRu}}/>

                                                        </Col>

                                                    </Row>
                                                </Card>


                                            </Col>
                                        </Row>
                                    </div>

                                </Card>
                            </Col>
                            <Col md={12} lg={6} sm={24}>
                                <Card title={
                                    <div>
                                        <table>
                                            <tr>
                                                <td><h3>{uzLang?"Faol":enLang?"Actual":"Акутальное"}</h3></td>
                                                <td><ArrowRightOutlined style={{marginLeft:'30px',cursor:'pointer'}} /></td>
                                            </tr>
                                        </table>


                                    </div>
                                } style={{ width: '100%', marginLeft: 10,marginBottom:'100px' }} >
                                    <Meta
                                        width={'100%'}
                                        avatar={
                                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{width:'40px',height:'40px',borderRadius:'15px'}} />
                                        }
                                        title={<div>
                                            <p style={{color:'#61666D',fontSize:'12px'}}>22 июня 2021 года</p>
                                            <p style={{fontSize:'14px',color:'black',marginTop:'0px',display:'inline-block'}}>В МНО рассказали,<br/> как будет организована.. </p>
                                        </div>}
                                    />
                                    <Meta
                                        width={'100%'}
                                        avatar={
                                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{width:'40px',height:'40px',borderRadius:'15px'}} />
                                        }
                                        title={<div>
                                            <p style={{color:'#61666D',fontSize:'12px'}}>22 июня 2021 года</p>
                                            <p style={{fontSize:'14px',color:'black',marginTop:'0px',display:'inline-block'}}>В МНО рассказали,<br/> как будет организована.. </p>
                                        </div>}
                                    />
                                    <br/>
                                    <table>
                                        <tr>
                                            <td><h3>{uzLang?"Ommabop":enLang?"Popular":"Популярное"}</h3></td>
                                            <td><ArrowRightOutlined style={{marginLeft:'30px',cursor:'pointer'}} /></td>
                                        </tr>
                                    </table>
                                    <Meta
                                        width={'100%'}
                                        avatar={
                                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{width:'40px',height:'40px',borderRadius:'15px'}} />
                                        }
                                        title={<div>
                                            <p style={{color:'#61666D',fontSize:'12px'}}>22 июня 2021 года</p>
                                            <p style={{fontSize:'14px',color:'black',marginTop:'0px',display:'inline-block'}}>В МНО рассказали,<br/> как будет организована.. </p>
                                        </div>}
                                    /><Meta
                                    width={'100%'}
                                    avatar={
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{width:'40px',height:'40px',borderRadius:'15px'}} />
                                    }
                                    title={<div>
                                        <p style={{color:'#61666D',fontSize:'12px'}}>22 июня 2021 года</p>
                                        <p style={{fontSize:'14px',color:'black',marginTop:'0px',display:'inline-block'}}>В МНО рассказали,<br/> как будет организована.. </p>
                                    </div>}
                                /><Meta
                                    width={'100%'}
                                    avatar={
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{width:'40px',height:'40px',borderRadius:'15px'}} />
                                    }
                                    title={<div>
                                        <p style={{color:'#61666D',fontSize:'12px'}}>22 июня 2021 года</p>
                                        <p style={{fontSize:'14px',color:'black',marginTop:'0px',display:'inline-block'}}>В МНО рассказали,<br/> как будет организована.. </p>
                                    </div>}
                                />

                                </Card>
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
    BigConkurs
)