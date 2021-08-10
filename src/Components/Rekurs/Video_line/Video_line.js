import React from 'react';
import './Video_line.css';
import {Row, Col, Card, Button, Modal} from 'antd';
import {connect} from "react-redux";
import {uzLanguage} from "../../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../../Redux/Actions/EnLanguage";
import {getVideoLessons} from "../../../server/config/Servises";
const {Meta}=Card;
class Video_line extends React.Component{
    state={
        video_lessons:[],
        size:12,
        open_video:false,
        video_id:'',
    }
    componentDidMount() {
        getVideoLessons(0,this.state.size).then((res)=>{
            if(res){
                this.setState({
                    video_lessons:res.data.content,
                })
            }
        })

    }

    render() {
        const {uzLang,enLang}=this.props;
        const {size,video_lessons,open_video,video_id}=this.state;
        const ShowMoreVideo=()=>{
            this.setState({
                size:size+12,
            })
            getVideoLessons(0,this.state.size).then((res)=>{
                if(res){
                    this.setState({
                        video_lessons:res.data.content,
                    })
                }
            })
        }
        const OpenVideoModal=(videoId)=>{
            this.setState({
                open_video:true,
                video_id:videoId,
            })
        }
        const CloseVideoModal=()=>{
            this.setState({
                open_video:false,
                video_id:''
            })
        }

        return(
            <React.Fragment>
                <div>
                <Modal title="Video" visible={open_video} onOk={CloseVideoModal} onCancel={CloseVideoModal} >
                    <video src={'http://195.158.24.249:2020/api/auth/file/'+video_id} controls={true} autoPlay={false} style={{width:'85%'}}></video>
                </Modal>

                    <Row>
                        {
                            video_lessons?video_lessons.map((item)=>{
                                return <Col  sm={24}>
                                    <Card onClick={()=>OpenVideoModal(item.video.id)}>
                                        <Row>
                                            <Col span={4} lg={4} md={24} xs={24}>
                                                <img width={'100%'} src={'http://195.158.24.249:2020/api/auth/file/'+item.logo.id} alt="" style={{borderTopLeftRadius:'15px',borderBottomLeftRadius:'15px'}}/>
                                            </Col>
                                            <Col span={20} lg={20} md={24} xs={24} style={{padding:'20px'}}>
                                                <h3>{uzLang?item.titleUz:enLang?item.titleEn:item.titleRu}</h3>
                                                <h5 style={{color:'gray'}}>20:25 минут</h5>
                                            </Col>
                                        </Row>
                                    </Card>

                                </Col>
                            }):''
                        }






                        <Button onClick={ShowMoreVideo} className={'video_all'}>{uzLang?"Ko'proq ko'rsatish":enLang?"Show more":"Показать еще"}</Button>
                    </Row>
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
    Video_line
)