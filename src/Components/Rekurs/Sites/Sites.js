import React from 'react';
import './Sites.css';
import {Row,Col,Card,Button,Select} from 'antd';
import {connect} from "react-redux";
import {uzLanguage} from "../../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../../Redux/Actions/EnLanguage";
import links_img from '../../images/links_img.jpg'
import {
    getManuals,
    getManualsByCategoryId,
    getUsefulLinkCategorys,
    getUsefulLinks, getUsefulLinksByCategoryId,
    getVideoLessons
} from "../../../server/config/Servises";
const {Meta}=Card;
const {Option}=Select;
class Sites extends React.Component{
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
                                return  <Col lg={6} md={12} sm={24}>
                                    <Card
                                        style={{ cursor:"pointer",width: '90%',height:'300px',borderRadius:'15px',marginBottom:'50px' }}
                                        cover={<img alt="example" src={'http://195.158.24.249:2020/api/auth/file/'+item.logo.id} style={{borderTopLeftRadius:'15px',borderTopRightRadius:'15px',height:'200px'}}/>}
                                    >
                                        <Meta title={uzLang?item.titleUz:enLang?item.titleEn:item.titleRu} description={<h5>
                                            <a href={item.link} target={'_blank'}>{item.link}</a></h5>} />
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
    Sites
)