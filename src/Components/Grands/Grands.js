import React from 'react';
import './Grand.css';
import {Card, Col, Row} from "antd";
import {connect} from "react-redux";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
import grand_img1 from '../images/grand_img1.jpg'
import grand_img2 from '../images/grand_img2.jpg'
import grand_img3 from '../images/grand_img3.jpg'
import grand_img4 from '../images/grand_img4.jpg'
import grand_img5 from '../images/grand_img5.jpg'
import grand_img6 from '../images/news_img1.jpg'
import {getContests} from "../../server/config/Servises";
import {host,port} from "../../server/host";
import {Link} from "react-router-dom";

const {Meta}=Card;
class Grands extends React.Component{
    state={
        contests:[],
    }
    componentDidMount() {
        getContests(0,6).then((res)=>{
            if(res){
                this.setState({
                    contests:res.data.content,
                })
            }
        })
    }

    render() {
        const {uzLang,enLang}=this.props;
        const {contests}=this.state;
        return(
            <React.Fragment>
             <div className="grand_main">
                 <p  className={'nasha_title'}>{uzLang?"10,000+ Tanlovlar va Grandlar":enLang?"10,000+ Contests and grants":"10,000+ Конкурсов и грантов"} </p>
                 <p className={'nasha_text'}>{uzLang?"Dunyo bo'ylab eng so'nggi tanlovlar, grantlar va ko'rgazmalarga kirish huquqini qo'lga kiriting":enLang?"Get access to the latest competitions, grants and exhibitions around the world":"Получите доступ к самым новейшим конкурсам, грантам и выставкам по всему миру"}
                      </p>
                 <div className="container">
                     <Row style={{marginTop:'100px'}}>
                         {
                             contests?contests.map(item=> {

                                 return <Col lg={8} md={12} sm={24}>
                                     <Card
                                         style={{ width: '90%',marginLeft:'5%',height:'90%',borderRadius:'20px',marginBottom:'50px' }}
                                         cover={
                                             <img
                                                 height={'auto'}
                                                 style={{borderRadius:'10px'}}
                                                 alt="example"
                                                 src={host+':'+port+'/api/auth/file/'+item.logo.id}
                                             />
                                         }

                                     >

                                         <Meta
                                             title={uzLang?item.titleUz:enLang?item.titleEn:item.titleRu}
                                             description="Платформа «Учи.ру» провела исследование о предпочтениях современных школьников – среди предметов, которыми стоит дополнить учебную программу. Школьники чаще..."
                                         />
                                         <button className="novosti_btn">
                                             <Link to={'/big_conkurs/'+item.id}><h3>{uzLang?"Batafsil":enLang?"More details":"Подробнее"}</h3></Link>
                                         </button>
                                     </Card>
                                 </Col>

                             }):''
                         }

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
    Grands
)