import React from 'react';
import './Bignews.css';
import {Row, Col, Card, Tabs, Avatar,Button} from 'antd';
import {ArrowDownOutlined,ArrowUpOutlined ,EyeOutlined,MessageOutlined,ArrowRightOutlined} from '@ant-design/icons'
import {
    Link
} from "react-router-dom";
import {connect} from "react-redux";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
import {getNews, getNewsById, getPopularNews} from "../../server/config/Servises";
const {TabPane}=Tabs;
const {Meta}=Card;

class Bignews extends React.Component{
    state={
        batafsil:false,
        one_new:{},
        lang:'Uz',
        twoNews:[],
        popularNews: [],
    };
    componentDidMount() {
        const {uzLang,enLang}=this.props;
        this.setState({
            lang:uzLang?"Uz":enLang?"En":"Ru"
        })
        getNewsById(window.location.pathname.split('/')[2]).then((res)=>{
            if(res){
                this.setState({
                    one_new:res.data,
                })
            }
        })
        getNews(0,2).then((res)=>{
            if(res){
                this.setState({
                    twoNews:res.data.content,
                })
            }
        });
        getPopularNews(0,3).then((res)=>{
            if(res){
                this.setState({
                    popularNews:res.data.content,
                })
            }
        })

    }

    render() {
        const {uzLang,enLang}=this.props;
        const {batafsil,one_new,lang,popularNews,twoNews}=this.state;
        const callback=(key)=>{
            console.log(key)
        }
        const Batafsil=()=>{
            this.setState({
                batafsil:!batafsil
            })
        }
        const date=new Date(one_new.createAt);
        return(
            <React.Fragment>
                <div className="main_forum">
                    <div className="container">
                        <h3><Link to={'/home'}>{uzLang?"Bosh sahifa":enLang?"Home":"Главная"}</Link>{'>'}{uzLang?"Yangiliklar":enLang?"News":"Новости"}</h3>
                        <Row>
                            <Col md={24} lg={18} sm={24}>
                                <Card>
                                    <div>
                                        <Row>
                                            <Col  sm={24}>
                                                <Card>
                                                    <Row>
                                                        <Col span={24} style={{padding:'20px'}}>
                                                            <h5 style={{color:'gray'}}>{date.getDay()+'.'+date.getMonth()+'.'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes()}</h5>
                                                            {/*<h3>{uzLang?one_new.titleUz:enLang?one_new.titleEn:one_new.titleRu}</h3>*/}
                                                            <h3>{one_new[`title${lang}`]}</h3>
                                                        </Col>
                                                        <Col span={24}>
                                                        </Col>
                                                        <Col span={24}>
                                                            <h5 style={{color:'gray'}} dangerouslySetInnerHTML={{__html: uzLang?one_new.contentUz:enLang?one_new.contentEn:one_new.contentRu}}/>

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
                                    {
                                        twoNews?twoNews.map(function (item) {

                                            var date=new Date(item.createAt)
                                            return   <Meta
                                                width={'100%'}
                                                avatar={
                                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{width:'40px',height:'40px',borderRadius:'15px'}} />
                                                }
                                                title={<div>
                                                    <p style={{color:'#61666D',fontSize:'12px'}}>{date.getDay()+'.'+date.getMonth()+'.'+date.getFullYear()}</p>
                                                    <p style={{fontSize:'14px',color:'black',marginTop:'0px',display:'inline-block'}}>{uzLang?item.titleUz:enLang?item.titleEn:item.titleRu} </p>
                                                </div>}
                                            />
                                        }):''
                                    }


                                    <br/>
                                    <table>
                                        <tr>
                                            <td><h3>{uzLang?"Ommabop":enLang?"Popular":"Популярное"}</h3></td>
                                            <td><ArrowRightOutlined style={{marginLeft:'30px',cursor:'pointer'}} /></td>
                                        </tr>
                                    </table>
                                    {
                                        popularNews?popularNews.map(function (item) {

                                            var date=new Date(item.createAt)
                                            return   <Meta
                                                width={'100%'}
                                                avatar={
                                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{width:'40px',height:'40px',borderRadius:'15px'}} />
                                                }
                                                title={<div>
                                                    <p style={{color:'#61666D',fontSize:'12px'}}>{date.getDay()+'.'+date.getMonth()+'.'+date.getFullYear()}</p>
                                                    <p style={{fontSize:'14px',color:'black',marginTop:'0px',display:'inline-block'}}>{uzLang?item.titleUz:enLang?item.titleEn:item.titleRu} </p>
                                                </div>}
                                            />
                                        }):''
                                    }

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
    Bignews
)