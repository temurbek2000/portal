import React from 'react';
import './Konkurs.css';
import {
    Link
} from "react-router-dom";
import {Row, Col, Card, Tabs, Avatar,Button} from 'antd';
import {AlignLeftOutlined,CalendarOutlined} from '@ant-design/icons'
import Conkurs from "./konkurs/konkurs";
import Grant from "./Grant/Grant";
import Vstavka from "./Vstavka/Vstavka";
import Map_Calendar from "./Map/Map";
import {connect} from "react-redux";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
import {getContestCategories, getContests, getContestsByCategoryId} from "../../server/config/Servises";
import All from "../Forum/Forum";
const {TabPane}=Tabs;
const {Meta}=Card;

class Konkurs extends React.Component{
    state={
        batafsil:false,
        calendar:false,
        contestCategories:[],
        contests:[],
        size:3,
        categoryId:"",
    };
    componentDidMount() {
        getContestCategories().then((res)=>{
           if(res){
               this.setState({
                   contestCategories:res.data,
               })
           }
        });
        getContests(0,this.state.size).then((res)=>{
            if(res){
                this.setState({
                    contests:res.data.content,
                })
            }
        })
    }

    render() {
        const {uzLang,enLang}=this.props;
        const {batafsil,calendar,contestCategories,contests,size,categoryId}=this.state;
        const callback=(key)=>{
            this.setState({
                categoryId:key,
            })
            if(key==='all'){
                getContests(0,this.state.size).then((res)=>{
                    if(res){
                        this.setState({
                            contests:res.data.content,
                        })
                    }
                })
            }else{
                getContestsByCategoryId(key,0,this.state.size).then((res)=>{
                    if(res){
                        this.setState({
                            contests:res.data.content,
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
        const Calendar=(bool)=>{
            if(bool){
                document.querySelector('.calendar_konkurs').style.color="#08C784"
                document.querySelector('.line_konkurs').style.color="gray"
            }else{
                document.querySelector('.line_konkurs').style.color="#08C784"
                document.querySelector('.calendar_konkurs').style.color="gray"
            }
            this.setState({
                calendar:bool,
            })
        }
        const ShowMoreConkurs=()=>{
            this.setState({
                size:size+3,
            })
            getContestsByCategoryId(categoryId,0,this.state.size).then((res)=>{
                if(res){
                    this.setState({
                        contests:res.data.content,
                    })
                }
            })

        }
        return(
            <React.Fragment>
                <div className="main_forum">
                    <div className="container">
                        <h3><Link to={'/home'}>{uzLang?"Bosh sahifa":enLang?"Home":"Главная"}</Link>{'>'}{uzLang?"Tanlovlar":enLang?"Contests":"Конкурсы"}</h3>
                        <Row>
                            <Col  sm={24}>
                                <Card>
                                    <Tabs defaultActiveKey="all" onChange={callback}>
                                        <TabPane tab={<h3>  {uzLang?"Barchasi":enLang?"All":"Все"}</h3>} key="all">

                                            {
                                                calendar?<Map_Calendar contests={contests}/>: <Conkurs ShowMoreConkurs={ShowMoreConkurs} contests={contests}/>
                                            }
                                        </TabPane>

                                        {
                                            contestCategories?contestCategories.map(item=>{
                                                return  <TabPane tab={<h3>{uzLang?item.titleUz:enLang?item.titleEn:item.titleRu}</h3>} key={item.id}>
                                                    <div className="select_konkurs">
                                                    <Row>
                                                        <Col span={2}><AlignLeftOutlined className={'line_konkurs'}  onClick={()=>Calendar(false)}/></Col>
                                                        <Col span={2}><CalendarOutlined className={'calendar_konkurs'} onClick={()=>Calendar(true)}/></Col>
                                                    </Row>
                                                </div>

                                                    {
                                                        calendar?<Map_Calendar contests={contests}/>: <Conkurs ShowMoreConkurs={ShowMoreConkurs} contests={contests}/>
                                                    }
                                                </TabPane>

                                            }):''
                                        }


                                    </Tabs>
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
    Konkurs
)