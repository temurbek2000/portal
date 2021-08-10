import React from 'react';
import './Books.css';
import {Row,Col,Card,Button,Select} from 'antd';
import {connect} from "react-redux";
import {uzLanguage} from "../../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../../Redux/Actions/EnLanguage";
import {getManualCategorys, getManuals, getManualsByCategoryId, getUsefulLinks} from "../../../server/config/Servises";
const {Meta}=Card;
const {Option}=Select;
class Books extends React.Component{
    state={
        manuals:[],
        size:12,
        manualCategories:[],
    }
    componentDidMount() {
        getManuals(0,this.state.size).then((res)=>{
            if(res){
                this.setState({
                    manuals:res.data.content,
                })
            }
        });
        getManualCategorys().then((res)=>{
            if(res){
                this.setState({
                    manualCategories:res.data,
                })
            }
        })

    }
    render() {
        const {uzLang,enLang}=this.props;
        const {manuals,size,manualCategories}=this.state;
        const ShowMoreManuals=()=>{
            this.setState({
                size:size+12,
            })
            getManuals(0,this.state.size).then((res)=>{
                if(res){
                    this.setState({
                        manuals:res.data.content,
                    })
                }
            })
        }
        const SelectManualCategory=(value)=>{
            if(value==='all'){
                getManuals(0,this.state.size).then((res)=>{
                    if(res){
                        this.setState({
                            manuals:res.data.content,
                        })
                    }
                })
            }else{
                getManualsByCategoryId(value,0,this.state.size).then((res)=>{
                    if(res){
                        this.setState({
                            manuals:res.data.content,
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
                            manuals?manuals.map((item)=>{
                                return <Col lg={6} md={12} sm={24}>
                                    <Card

                                        style={{ cursor:"pointer",width: '90%',height:'auto',borderRadius:'15px',marginBottom:'50px',padding:'10px',textAlign:'center' }}
                                        cover={<img alt="example" src={'http://195.158.24.249:2020/api/auth/file/'+item.logo.id} style={{width:'50%',marginLeft:'25%',height:'50%'}}/>}
                                    >
                                        <Meta title={uzLang?item.titleUz:enLang?item.titleEn:item.titleRu} description={<h5>{item.pageCount} bet</h5>} />
                                        <Button  type={'primary'}><a href={'http://195.158.24.249:2020/api/auth/file/'+item.file.id}>Download</a></Button>
                                    </Card>
                                </Col>
                            }):''
                        }

                        <Button onClick={ShowMoreManuals} className={'video_all'}>{uzLang?"Ko'proq ko'rsatish":enLang?"Show more":"Показать еще"}</Button>
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
    Books
)