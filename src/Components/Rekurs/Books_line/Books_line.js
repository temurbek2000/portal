import React from 'react';
import './Books_line.css';
import {Row, Col, Card, Button, Select} from 'antd';
import {connect} from "react-redux";
import {uzLanguage} from "../../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../../Redux/Actions/EnLanguage";
import {getManualCategorys, getManuals, getManualsByCategoryId} from "../../../server/config/Servises";
const {Meta}=Card;
const {Option}=Select;
class Books_line extends React.Component{
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
                                return  <Col  sm={24}>
                                    <Card>
                                        <Row>
                                            <Col span={4} lg={4} md={24} xs={24}>
                                                <img width={'100%'} src={'http://195.158.24.249:2020/api/auth/file/'+item.logo.id} alt="" style={{borderTopLeftRadius:'15px',borderBottomLeftRadius:'15px'}}/>
                                            </Col>
                                            <Col span={20} lg={20} md={24} xs={24} style={{padding:'20px'}}>
                                                <h3>{uzLang?item.titleUz:enLang?item.titleEn:item.titleRu}</h3>
                                                <h5 style={{color:'gray'}}>{item.pageCount} bet</h5>
                                                <Button  type={'primary'}><a href={'http://195.158.24.249:2020/api/auth/file/'+item.file.id}>Download</a></Button>

                                            </Col>
                                        </Row>
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
    Books_line
)