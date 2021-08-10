import React from 'react';
import 'antd/dist/antd.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Karousel.css'
import carousel_img_url from '../images/slider_img.jpg';
import {getFile, getMainSliders} from "../../server/config/Servises";
import {connect} from "react-redux";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
import {MainSliders} from "../../server/constants";
import {host, port} from "../../server/host";
import TransverseLoading from "../Loader/TransverseLoading";
class Karousel extends React.Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    state={
        mainSliders:[],
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
        getMainSliders().then((res)=>{
            if (res){
                this.setState({
                    mainSliders:res.data,
                });
            }else{
                console.log('slider error')
            }
        });

    }


    render() {
        const {mainSliders}=this.state;
        const {uzLang,enLang}=this.props;
        const settings = {
            dots:true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
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
        return(
            <React.Fragment>
                <Slider {...settings}>

                    {mainSliders.map((item)=>{
                        return <div style={{width:'100%',height:'80%',position:'relative'}}>
                            <div style={{position:'relative'}} >
                                <img   src={host+':'+port+'/api/auth/file/'+item.imgId} alt="" style={{width:'100%',borderRadius:'15px'}}/>
                                <div className="carousel_div ">
                                 <div className="carousel_body"> <div className={'carousel_text'}>{uzLang?item.titleUz:enLang?item.titleEn:item.titleRu}</div>
                                     <div className={'carousel_text carousel_little_text'}>{uzLang?item.contentUz:enLang?item.contentEn:item.contentRu}</div>
                                     <button className={'carousel_button'}>{uzLang?"Batafsil":enLang?"Read More":"подробнее"}</button>

                                 </div>
                                </div>
                            </div>


                        </div>
                    })}


                </Slider>

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
    Karousel
)

