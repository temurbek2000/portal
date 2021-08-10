import React from 'react';
import './Novosti.css';
import {Card,Row,Col} from 'antd';
import {connect} from "react-redux";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
import {getNews} from "../../server/config/Servises";
import {host,port} from "../../server/host";
import {Link} from "react-router-dom";
const {Meta}=Card;

class Novosti extends React.Component{
    state={
        news:[],
    }
    componentDidMount() {
        getNews(0,3).then((res)=>{
            if(res){
                this.setState({
                    news:res.data.content,
                })
            }
        })
    }

    render() {
        const {uzLang,enLang}=this.props;
        const {news}=this.state;
        return(
            <React.Fragment>
                <div className="main_novosti">
                    <p  className={'nasha_title'} >{uzLang?"Ta'lim yangiliklari":enLang?"Education news":"Новости образования"}</p>
                    <p className={'nasha_text'}> {uzLang?"Bilan bog'liq so'nggi yangiliklardan xabardor bo'lib turing\n" +
                        "                         o'rtacha ta'lim emas":enLang?"Keep up to date with the latest news regarding\n" +
                        "                         not mediocre education":"Будьте в курсе самых свежих новостей касающихся\n" +
                        "                        не посредственно сферы образования"} </p>
                    <div className="container">
                      <Row style={{marginTop:'100px'}} className={'cards_novosti'}>

                          {news?news.map(function(item){
                              var date=new Date(item.createAt)
                              return  <Col lg={8} md={24} sm={24}>
                                  <Card
                                      className={'novosti_card'}
                                      style={{ width: '90%',height:'90%',marginLeft:'5%',borderRadius:'20px',marginBottom:'30px' }}
                                      cover={
                                          <img
                                              className={'novosti_img'}
                                              style={{borderRadius:'10px'}}
                                              alt="example"
                                              src={host+':'+port+'/api/auth/file/'+item.logo.id}
                                          />
                                      }

                                  >
                                      <div className={'novosti_lenta'}>
                                         {date.getDay()+'.'+date.getMonth()+'.'+date.getFullYear()}
                                      </div>
                                      <Meta
                                          title={uzLang?item.titleUz:enLang?item.titleEn:item.titleRu}
                                          description={<p dangerouslySetInnerHTML={{__html: uzLang?item.contentUz.slice(0,150)+'...':enLang?item.contentEn.slice(0,150)+'...':item.contentRu.slice(0,150)+'...'}}/>}
                                      />
                                      <button className="novosti_btn">
                                          <Link to={'/one_post/'+item.id}><h3>{uzLang?"Batafsil":enLang?"More details":"Подробнее"}</h3></Link>
                                      </button>
                                  </Card>
                              </Col>
                          }):''}

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
    Novosti
)
