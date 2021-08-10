import React from 'react';
import './Rekurs.css';
import {Row, Col, Card, Tabs, Avatar,Button,Select} from 'antd';
import {AlignLeftOutlined,AppstoreOutlined} from '@ant-design/icons'
import Video from "./Video/Video";
import Video_line from "./Video_line/Video_line";
import Books from "./Books/Books";
import Books_line from "./Books_line/Books_line";
import Sites_line from "./Sites_line/Sites_line";
import Sites from "./Sites/Sites";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
const {TabPane}=Tabs;
const {Meta}=Card;

class Rekurs extends React.Component{
    state={
        batafsil:false,
        big_sort:false,
    };
    render() {
        const {batafsil,big_sort}=this.state;
        const {uzLang,enLang}=this.props;
        const callback=(key)=>{
            console.log(key)
        }
        const Batafsil=()=>{
            this.setState({
                batafsil:!batafsil
            })
        }
        const CardSort=(sort)=>{
            console.log(sort)
            if(sort===1){
                document.querySelector('.video1').style.color="#08C784"
                document.querySelector('.video2').style.color="black"
                this.setState({
                    big_sort:true,
                })
            }else{
                document.querySelector('.video2').style.color="#08C784"
                document.querySelector('.video1').style.color="black"
                this.setState({
                    big_sort:false,
                })
            }
        }
        const Select_filtr=(values)=>{

        }
        return(
            <React.Fragment>
                <div className="main_forum">
                    <div className="container">
                        <h3><Link to={'/home'}>{uzLang?"Bosh sahifa":enLang?"Home":"Главная"}</Link>{'>'}{uzLang?"Resurslar":enLang?"Resources":"Ресурсы"}</h3>
                        <br/><br/><br/>
                        <Row>
                            <Col md={2} sm={12} xs={24}>
                                <Select className={'video3'} defaultValue={'Barchasi'} onChange={Select_filtr}>
                                    <Select.Option value={'popular'}>Ommabop</Select.Option>
                                    <Select.Option value={'recent'}>Yaqinda</Select.Option>
                                </Select>
                            </Col>
                            <Col md={2} sm={12} xs={24}><AlignLeftOutlined className={'video1'} style={{cursor:'pointer',fontSize:'20px'}} onClick={()=>CardSort(1)}/></Col>
                            <Col md={2} sm={12} xs={24}><AppstoreOutlined className={'video2'} style={{cursor:'pointer',fontSize:'20px',color:'#08C784'}} onClick={()=>CardSort(-1)}/></Col>
                        </Row>

                        <Row>
                            <Col md={24} lg={24} sm={24}>
                                <Card>
                                    <Tabs defaultActiveKey="1" onChange={callback}>
                                        <TabPane tab={<h3>{uzLang?"Video darslari":enLang?"Video lessons":"Видео-уроки"}</h3>} key="1">

                                            {
                                                big_sort?<Video_line/>:<Video/>
                                            }
                                        </TabPane>
                                        <TabPane tab={<h3>{uzLang?"Uslubiy qo'llanmalar":enLang?"Methodological aids":"Методические пособия"}</h3>} key="2">

                                            {
                                                big_sort?<Books_line/>:<Books/>
                                            }
                                        </TabPane>
                                        <TabPane tab={<h3>{uzLang?"Foydali havolalar":enLang?"Useful links":"Полезные ссылки"}</h3>} key="3">

                                            {
                                                big_sort?<Sites_line/>:<Sites/>
                                            }
                                        </TabPane>


                                    </Tabs>
                                </Card>
                            </Col>
                            <Col span={24}><Button className={'video_all'}></Button></Col>
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
    Rekurs
)