import React from 'react';
import './Sites_line.css';
import {Row, Col, Card, Button, Select} from 'antd';
import {connect} from "react-redux";
import {uzLanguage} from "../../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../../Redux/Actions/EnLanguage";
import links_img from '../../images/links_img.jpg'
import {getUsefulLinkCategorys, getUsefulLinks, getUsefulLinksByCategoryId} from "../../../server/config/Servises";
const {Meta}=Card;
const {Option}=Select;
class Sites_line extends React.Component{
    state={
        usefulLinks:[],
        size:12,
        usufulLinkCategories:[],
    }
    componentDidMount() {
        getUsefulLinks(0,this.state.size).then((res)=>{
            if(res){
                this.setState({
                    usefulLinks:res.data.content,
                })
            }
        });
        getUsefulLinkCategorys().then(res=>{
            if(res){
                this.setState({
                    usufulLinkCategories:res.data,
                })
            }
        })

    }
    render() {
        const {uzLang,enLang}=this.props;
        const {usefulLinks,size,usufulLinkCategories}=this.state;
        const ShowMoreLinks=()=>{
            this.setState({
                size:size+12,
            })
            getUsefulLinks(0,this.state.size).then((res)=>{
                if(res){
                    this.setState({
                        usefulLinks:res.data.content,
                    })
                }
            })
        }
        const SelectLinksCategory=(value)=>{
            if(value==='all'){
                getUsefulLinks(0,this.state.size).then((res)=>{
                    if(res){
                        this.setState({
                            usefulLinks:res.data.content,
                        })
                    }
                })
            }else{
                getUsefulLinksByCategoryId(value,0,this.state.size).then((res)=>{
                    if(res){
                        this.setState({
                            usefulLinks:res.data.content,
                        })
                    }
                })
            }
        }
        return(
            <React.Fragment>
                <div>


                    <Row>

                        {
                            usefulLinks?usefulLinks.map((item)=>{
                                return   <Col  sm={24}>
                                    <Card>
                                        <Row>
                                            <Col span={4} lg={4} md={24} xs={24}>
                                                <img width={'100%'} src={'http://195.158.24.249:2020/api/auth/file/'+item.logo.id} alt="" style={{borderTopLeftRadius:'15px',borderBottomLeftRadius:'15px'}}/>
                                            </Col>
                                            <Col span={20} lg={20} md={24} xs={24} style={{padding:'20px'}}>
                                                <h3>{uzLang?item.titleUz:enLang?item.titleEn:item.titleRu}</h3>
                                                <h5 style={{color:'gray'}}><a href={item.link} target={'_blank'}>{item.link}</a></h5>
                                            </Col>
                                        </Row>
                                    </Card>

                                </Col>
                            }):''
                        }





                        <Button onClick={ShowMoreLinks} className={'video_all'}>{uzLang?"Ko'proq ko'rsatish":enLang?"Show more":"Показать еще"}</Button>
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
    Sites_line
)