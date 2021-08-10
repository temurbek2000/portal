import React from 'react';
import './Galereya2.css';
import {Row,Col,Card,Modal} from 'antd';
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PauseCircleOutlined,PlayCircleOutlined} from '@ant-design/icons';
import {connect} from "react-redux";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
import {getGalleryById} from "../../server/config/Servises";
import {host, port} from "../../server/host";
const {Meta}=Card;
class Galereya2 extends React.Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    state={
        isOpenModal:false,
        img_url:'',
        video_url:'',
        gallery:{},
        play:false,

    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    bb=()=>{
        document.querySelector(".nuqtalar").classList.toggle("nuqtalar1")
    };
    componentDidMount() {
        getGalleryById(window.location.pathname.split('/')[2]).then((res)=>{
            if(res){
                console.log(res.data)
                this.setState({
                    gallery:res.data,
                })
            }
        })
    }

    render() {
        const {uzLang,enLang}=this.props;
        const {img_url,isOpenModal,gallery,play}=this.state;
        const ShowModal=()=>{
            document.querySelector('.for_video').classList.add('close')
            this.setState({
                play:true,
            })
        }
        const CloseModal=()=>{
            this.setState({
                isOpenModal:false,
            })
        }
        const Select_big_img=(url)=>{
            this.setState({
                img_url:url,
            })
        }
        const Select_big_video=(url)=>{
            this.setState({
                video_url:url,
            })
        }
        const settings = {
            dots:true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            customPaging: bb => (
                <div
                    onMouseDown={this.bb}
                    className="nuqtalar"
                    style={{
                        width: "10px",
                        height: '10px',
                        borderRadius: '20px',
                        border: "1px black solid",
                    }}
                >
                </div>
            )
        };
        const HoverImg=()=>{
            document.querySelector('.for_video').classList.remove('close')
        }
        const HoverImg1=()=>{
            document.querySelector('.for_video').classList.add('close')
        }
        const date=new Date(gallery.createAt);
        const PlayPause=()=>{
            this.setState({
                play:false,
            })
        }
        return(
            <React.Fragment>
                <div className="main_galereya2">
                    <div className="container">
                        <h3><Link to={'/home'}>{uzLang?"Bosh sahifa":enLang?"Home":"Главная"}</Link>{'>'}{uzLang?"Galereya":enLang?"Gallery":"Галерея"}</h3>
                        <Card title={<h3> {uzLang?gallery.titleUz:enLang?gallery.titleEn:gallery.titleRu}<br/><p style={{fontSize:'13px'}}> {date.getDay()+'.'+date.getMonth()+'.'+date.getFullYear()}</p></h3>}>
                           <Card title={uzLang?"Rasm":enLang?"Photo":"Фото"} style={{width:'100%',borderRadius:'15px'}}>

                               <img  src={img_url} alt="" style={{width:'100%',borderRadius:'15px'}}/>
                               <Slider {...settings}>
                                   {
                                       gallery.images?gallery.images.map(item=>{
                                           return  <div style={{width:'100%',position:'relative'}} onClick={()=>Select_big_img(host+':'+port+'/api/auth/file/'+item)}>
                                               <img src={host+':'+port+'/api/auth/file/'+item} alt="" className={'galereya_images'}/>
                                           </div>
                                       }):''
                                   }
                               </Slider>

                           </Card>
                            <Card title={uzLang?"Video":enLang?"Video":"Видео"} style={{width:'100%',borderRadius:'15px'}}>
                                <Modal title="Video" visible={isOpenModal} onOk={CloseModal} onCancel={CloseModal} className={'Modal_for_video'}>
                                    <video src={this.state.video_url} controls={true} autoPlay={false} style={{width:'660px',height:'270px'}}></video>
                                </Modal>

                                <div style={{position:'relative'}} onMouseEnter={play?'':HoverImg} onMouseLeave={play?'':HoverImg1} onClick={ShowModal}>
                                    <video controls={play} onPause={PlayPause} playsInline={play} style={{width:'100%'}} src={this.state.video_url} alt=""/>
                                    <div className="for_video close">
                                      <div className={'pause_icon'}><PlayCircleOutlined onClick={ShowModal}/></div>
                                    </div>
                                </div>
                                <Slider {...settings}>
                                    {
                                        gallery.videos?gallery.videos.map(item=>{
                                            return  <div style={{width:'100%',position:'relative'}} onClick={()=>Select_big_video(host+':'+port+'/api/auth/file/'+item)}>
                                                <video src={host+':'+port+'/api/auth/file/'+item}  className={'galereya_images'}/>
                                            </div>
                                        }):''
                                    }

                                </Slider>

                            </Card>

                        </Card>
                    </div>
                </div>

            </React.Fragment>
        )
    }

}const mapStateToProps = (state) => {

    return {
        uzLang: state.changeLang.uzLang,
        enLang: state.changeLang.enLang,
    };
};
export default connect(mapStateToProps,{uzLanguage,ruLanguage,enLanguage})(
    Galereya2
)