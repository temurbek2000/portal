import React from 'react';
import './Galereya1.css';
import {Row, Col, Card, Button} from 'antd';
import {
    Link
} from "react-router-dom";
import {connect} from "react-redux";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
import {getGallerys} from "../../server/config/Servises";
import {host, port} from "../../server/host";
const {Meta}=Card;
class Galereya1 extends React.Component{
    state={
        gallerys:[],
        size:12,
    }
    componentDidMount() {
        getGallerys(0,this.state.size).then((res)=>{
            if(res){
                this.setState({
                    gallerys:res.data.content,
                })

            }
        })
    }

    render() {
        const {uzLang,enLang}=this.props;
        const {size,gallerys}=this.state;
        const ShowMoreGallery=()=>{
            this.setState({
                size:size+12,
            })
            getGallerys(0,this.state.size).then((res)=>{
                if(res){
                    this.setState({
                        gallerys:res.data.content,
                    })

                }
            })
        }
        return(
            <React.Fragment>
                <div className="main_galereya1">
                    <div className="container">
                        <h3><Link to={'/home'}>{uzLang?"Bosh sahifa":enLang?"Home":"Главная"}</Link>{'>'}{uzLang?"Galereya":enLang?"Gallery":"Галерея"}</h3>
                        <Card>
                            <Row>
                                {
                                    gallerys?gallerys.map(function (item) {
                                        var date=new Date(item.createAt);
                                        return <Col lg={6} md={12} sm  ={24}>
                                            <Link to={'/big_image/'+item.id}><Card
                                                hoverable
                                                style={{ width: '90%',height:'300px',borderRadius:'15px',marginBottom:'50px' }}
                                                cover={<img alt="example" src={host+':'+port+'/api/auth/file/'+item.logoId} style={{borderTopLeftRadius:'15px',borderTopRightRadius:'15px',height:'200px'}}/>}
                                            >
                                                <Meta title={uzLang?item.titleUz:enLang?item.titleEn:item.titleRu} description={<h5>{date.getDay()+'.'+date.getMonth()+'.'+date.getFullYear()}</h5>} />
                                            </Card></Link>
                                        </Col>

                                    }):''
                                }


                            </Row>
                            <Button onClick={ShowMoreGallery} className={'video_all'}>{uzLang?"Ko'proq ko'rsatish":enLang?"Show more":"Показать еще"}</Button>

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
    Galereya1
)