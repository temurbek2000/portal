import React from 'react';
import './Video.css';
import {Row,Col,Card,Button,Modal} from 'antd';
import {connect} from "react-redux";
import {uzLanguage} from "../../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../../Redux/Actions/EnLanguage";
import {getVideoLessons} from "../../../server/config/Servises";
const {Meta}=Card;
class Video extends React.Component{
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
                                return <Col lg={6} md={12} sm={24}>
                                    <Card
                                        onClick={()=>OpenVideoModal(item.video.id)}
                                        hoverable
                                        style={{ width: '90%',height:'300px',borderRadius:'15px',marginBottom:'50px' }}
                                        cover={<img alt="example" src={'http://195.158.24.249:2020/api/auth/file/'+item.logo.id} style={{borderTopLeftRadius:'15px',borderTopRightRadius:'15px',height:'200px'}}/>}
                                    >
                                        <Meta title={uzLang?item.titleUz:enLang?item.titleEn:item.titleRu} description={<h5>2 июня 2021 года</h5>} />
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
    Video
)