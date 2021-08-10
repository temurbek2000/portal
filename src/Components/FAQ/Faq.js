import React from 'react';
import './Faq.css';
import {Row,Col,Card,Collapse} from 'antd';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {uzLanguage} from "../../Redux/Actions/Uzlanguage";
import {ruLanguage} from "../../Redux/Actions/RuLanguage";
import {enLanguage} from "../../Redux/Actions/EnLanguage";
const { Panel } = Collapse;
class Faq extends React.Component{
    render() {
        const {uzLang,enLang}=this.props;
        const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
        const callback=(key)=>{
            console.log(key)
        }
        return(
            <React.Fragment>
                <div className="main_faq">
                    <div className="container">
                        <h3><Link to={'/home'}>{uzLang?"Bosh sahifa":enLang?"Home":"Главная"}</Link>{'>'}FAQ</h3>
                        <Card>
                            <Collapse defaultActiveKey={['1']} onChange={callback} expandIconPosition={'right'}>
                                <Panel header={<p className="faq_title">bu card nomi savol javoblar uchun berilgan sahifa hisoblanadi va javoblar uchun</p>} key="1">
                                    <h4>{text}</h4>
                                </Panel>
                                <Panel header={<p className="faq_title">bu card nomi savol javoblar uchun berilgan sahifa hisoblanadi va javoblar uchun</p>} key="2">
                                    <h4>{text}</h4>
                                </Panel>
                                <Panel header={<p className="faq_title">bu card nomi savol javoblar uchun berilgan sahifa hisoblanadi va javoblar uchun</p>} key="3">
                                    <h4>{text}</h4>
                                </Panel>
                            </Collapse>
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
    Faq
)