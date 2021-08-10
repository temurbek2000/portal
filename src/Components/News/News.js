import React from 'react';
import './News.css';
import {
    Link
} from "react-router-dom";
import {Row, Col, Card, Tabs, Avatar,Button} from 'antd';
import {ArrowDownOutlined,ArrowUpOutlined ,EyeOutlined,MessageOutlined,ArrowRightOutlined} from '@ant-design/icons'
import {connect} from "react-redux";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
import {getNews, getNewsByCategoryId, getNewsCategorys, getPopularNews} from "../../server/config/Servises";
import {host,port} from "../../server/host";

const {TabPane}=Tabs;
const {Meta}=Card;

class News extends React.Component{
    state={
        batafsil:false,
        newsCategories:[],
        news:[],
        size:3,
        twoNews:[],
        popularNews:[],
    };
    componentDidMount() {
        getNewsCategorys().then((res)=>{
            if(res){
                this.setState({
                    newsCategories:res.data,
                })
            }
        });
        getNews(0,this.state.size).then((res)=>{
            if(res){
                this.setState({
                    news:res.data.content,
                })
            }

        });
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
        const {batafsil,newsCategories,news,size,popularNews,twoNews}=this.state;
        const {uzLang,enLang}=this.props;
        const callback=(key)=>{
            if(key==='1'){
                getNews(0,size).then((res)=>{
                    if(res){
                        this.setState({
                            news:res.data.content,
                        })
                    }
                })
            }else{
                getNewsByCategoryId(key,0,size).then((res)=>{
                    if(res){
                        this.setState({
                            news:res.data.content,
                        })
                    }
                })
            }
        }
        const Batafsil=()=>{
            this.setState({
                batafsil:!batafsil
            })
        }
        const ShowMoreNews=()=>{
            this.setState({
                size:size+3,
            })
            getNews(0,this.state.size).then((res)=>{
                if(res){
                    this.setState({
                        news:res.data.content,
                    })
                }

            });
        }
        return(
            <React.Fragment>
                <div className="main_forum">
                    <div className="container">
                        <h3><Link to={'/home'}>{uzLang?"Bosh sahifa":enLang?"Home":"Главная"}</Link>{'>'}{uzLang?"Yangiliklar":enLang?"News":"Новости"}</h3>
                        <Row>
                            <Col md={24} lg={18} sm={24}>
                                <Card>
                                    <Tabs defaultActiveKey="1" onChange={callback}>
                                        <TabPane tab={<h3>{uzLang?"Barchasi":enLang?"All":"Все"}</h3>} key="1">

                                            <div>
                                                <Row>
                                                    <Col  sm={24}>
                                                        {news?news.map(function(item){
                                                            var date=new Date(item.createAt)
                                                            return <Card>
                                                                <Row>
                                                                    <Col span={6} md={6} sm={24} xs={24}>
                                                                        <img  src={host+':'+port+'/api/auth/file/'+item.logo.id} alt="" style={{borderTopLeftRadius:'15px',borderBottomLeftRadius:'15px',width:'100%',height:'100%'}}/>
                                                                    </Col>
                                                                    <Col span={18} md={18} sm={24} xs={24} style={{padding:'20px'}}>
                                                                        <h5 style={{color:'gray'}}>{date.getDay()+'.'+date.getMonth()+'.'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes()}</h5>
                                                                        <Link to={'/one_post/'+item.id}><h3>{uzLang?item.titleUz:enLang?item.titleEn:item.titleRu}</h3></Link>
                                                                        <h5 style={{color:'gray'}} dangerouslySetInnerHTML={{__html: uzLang?item.contentUz:enLang?item.contentEn:item.contentRu}}/>
                                                                    </Col>
                                                                </Row>
                                                            </Card>
                                                        }):''}

                                                    </Col>
                                                </Row>

                                            </div>
                                        </TabPane>
                                        {newsCategories?newsCategories.map((item)=>{
                                            return  <TabPane tab={<h3>{uzLang?item.titleUz:enLang?item.titleEn:item.titleRu}</h3>} key={item.id}>
                                                <div>
                                                    <Row>
                                                        <Col  sm={24}>
                                                            {news?news.map((item)=>{
                                                                return <Card>
                                                                    <Row>
                                                                        <Col span={6} md={6} sm={24} xs={24}>
                                                                            <img  src={host+':'+port+'/api/auth/file/'+item.logo.id} alt="" style={{borderTopLeftRadius:'15px',borderBottomLeftRadius:'15px',width:'100%',height:'100%'}}/>
                                                                        </Col>
                                                                        <Col span={18} md={18} sm={24} xs={24} style={{padding:'20px'}}>
                                                                            <h5 style={{color:'gray'}}>22 июня 2021 года</h5>
                                                                            <Link to={'/one_post/'+item.id}><h3>{uzLang?item.titleUz:enLang?item.titleEn:item.titleRu}</h3></Link>
                                                                            <h5 style={{color:'gray'}}dangerouslySetInnerHTML={{__html: uzLang?item.contentUz:enLang?item.contentEn:item.contentRu}}/>
                                                                        </Col>
                                                                    </Row>
                                                                </Card>
                                                            }):''}

                                                        </Col>
                                                    </Row>
                                                </div>
                                            </TabPane>
                                        }):''}
                                    </Tabs>
                                    <Button onClick={ShowMoreNews} className={'video_all'}>{uzLang?"Ko'proq ko'rsatish":enLang?"Show more":"Показать еще"}</Button>

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
    News
)