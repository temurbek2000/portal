import React from 'react';
import 'antd/dist/antd.css';
import './App.css'
import HorizantalMenu from "./Components/Menu/HorizantalMenu";
import Footer from "./Components/Footer/Footer";
import Faq from "./Components/FAQ/Faq";
import Galereya1 from "./Components/Galereya1/Galereya1";
import Galereya2 from "./Components/Galereya2/Galereya2";
import Forum from "./Components/Forum/Forum";
import Addquestion from "./Components/Forum/Addquestion";
import Rekurs from "./Components/Rekurs/Rekurs";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import News from "./Components/News/News";
import Bignews from "./Components/News/Bignews";
import Konkurs from "./Components/Konkurs/Konkurs";
import Big_post from "./Components/Konkurs/Big_post/Big_post";
import About from "./Components/About/About";
import {connect} from "react-redux";
import {enLanguage} from "./Redux/Actions/EnLanguage";
import {uzLanguage} from "./Redux/Actions/Uzlanguage";
import {ruLanguage} from "./Redux/Actions/RuLanguage";
import {GetEnLanguage, GetLanguage,GetRuLanguage} from "./Utilitil";
import Consultation from "./Components/Consultation/Consultation";
import Comment from "./Components/Consultation/Comment"
import {getMe} from "./server/config/authentication";
import {deleteCookie} from "./utils/useCookies";
import {userAccessTokenName} from "./server/constants";
import BigConkurs from "./Components/Konkurs/Big_conkurs";
import Home from "./Components/Home";
import Profile from "./Components/Menu/Profile/Profile";
import TransverseLoading from "./Components/Loader/TransverseLoading";
import {getMainSliders} from "./server/config/Servises";


class App extends React.Component{
    state={
        current_user:null,
        loader:true,
    }


   routes=[
        {
            path:"/home",
            component:<Home/>
        },
        {
            path:"/faq",
            component:<Faq/>
        },
        {
            path:"/galereya",
            component:<Galereya1/>
        } ,
        {
            path:"/forum",
            component:<Forum current_user={this.state.current_user} />
        },
        {
            path:"/rekurs",
            component:<Rekurs/>
        },
        {
            path:"/news",
            component:<News/>
        },
        {
            path:"/one_post/:id",
            component:<Bignews/>
        },
        {
            path:"/konkurs",
            component:<Konkurs/>

        },
        {
            path:"/big_post",
            component:<Big_post/>
        },
        {
            path:"/big_conkurs",
            component:<BigConkurs/>
        },
        {
            path:"/about",
            component:<About/>
        },
        {
            path:"/big_image/:id",
            component:<Galereya2/>
        },
       {
            path:"/add/:id",
            component:<Addquestion current_user={this.state.current_user}/>
        },
       {
            path:"/consultation",
            component:  <Consultation current_user={this.state.current_user}/>
        },
       {
            path:"/reply/:id",
            component:  <Comment current_user={this.state.current_user}/>
        },
       {
            path:"/profile",
            component:  <Profile current_user={this.state.current_user}/>
        },
    ];
    componentDidMount() {
        document.title="PORTAL.UZ";
        getMe().then(res=>{
            if (res && res.data){
                this.setState({
                    current_user:res.data
                })
            }else{
                deleteCookie(userAccessTokenName)
            }
        });
        if (!GetLanguage() && GetEnLanguage() || !GetLanguage() && GetRuLanguage()){
            this.props.uzLanguage();
        }else {
            if (!GetEnLanguage() && GetRuLanguage() || !GetEnLanguage() && GetLanguage()){
                this.props.enLanguage()
            }else if (GetRuLanguage() && GetEnLanguage() || !GetRuLanguage() && GetLanguage()) {
                this.props.ruLanguage()
            }
        }
        getMainSliders().then(res=>{
            if(res){
                this.setState({
                    loader:false,
                })
            }
        })
    }
    render() {
        return(
            <React.Fragment>
                {
                    this.state.loader?<TransverseLoading/>: <Router>
                        <HorizantalMenu current_user={this.state.current_user} />
                        <Switch>
                            {
                                this.routes.map(route=>(
                                    <Route path={route.path}>
                                        {route.component}
                                    </Route>
                                ))
                            }
                            <Redirect from="/" to="/home" />
                        </Switch>
                        <Footer/>
                    </Router>
                }





            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        uzLang: state.changeLang.uzLang,
    };
};
export default connect(mapStateToProps,{enLanguage,uzLanguage,ruLanguage})(
    App
)

