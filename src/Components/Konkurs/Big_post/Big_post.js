import React from 'react';
import './Big_post.css';
import {Button, Card, Col, Row} from "antd";
import {Link} from "react-router-dom";
class  Big_post extends  React.Component{
    render() {
        return(
            <React.Fragment>

                <div className={'container'}>
                    <h3>Главная{'>'}Конкурсы{'>'}Выставки</h3>
                    <Row>
                        <Col  sm={24}>
                            <Card style={{marginBottom:'10px'}} title={<h2>Пресс-конференция по математике</h2>}>
                                <Row>

                                    <Col xs={24} style={{padding:'20px'}}>
                                        <Link to={'/one_post'}><h3>Узбекские школьники хотят изучать предметы...</h3></Link>
                                        <h5 style={{color:'gray'}}>регистрация до:22 июня 2021 года</h5>
                                        <h5 style={{color:'gray'}}>начало в::22 июня 2021 года</h5>
                                        <h3>О выставке</h3>
                                        <h5 style={{color:'gray'}}>Выставка 4YFN 2021 проводится c 28 июня по 1 июля в городе Барселона, Испания.

                                            Экспонируемые продукты и разделы выставки Вы можете посмотреть ниже, в блоке «Дополнительная информация». Полный список участников 4YFN 2021 размещается на официальном сайте выставки и постоянно обновляется. Там же вы сможете найти экспонентов предыдущего года. Деловая программа 4YFN 2021 обычно публикуется ближе к началу события.
                                        </h5>
                                        <img  src="https://g.foolcdn.com/editorial/images/446553/meeting_gettyimages-603992138.jpg" alt="" style={{borderTopRightRadius:'15px',borderBottomRightRadius:'15px',width:'100%'}}/>
                                        <h5 style={{color:'gray'}}>Ваш личный календарь
                                            Добавьте выставку 4YFN 2021 в календарь, чтобы не потерять важное событие. Создавайте свое расписание мероприятий.

                                            Планируете самостоятельную поездку на 4YFN 2021?
                                            Мы рекомендуем посмотреть отели и цены в период проведения выставки на Booking.com. Как добраться до выставочного центра Fira de Barcelona Montjuic можно посмотреть в каталоге мест или на официальном сайте площадки. Пользуйтесь также картами  Google Maps, которая позволяет строить маршруты с использованием общественного транспорта.  Не забудьте проверить место и даты выставки на официальном сайте и в календаре выставочного комплекса. Событие могут перенести, отменить, объединить с проектом схожей тематики. Обращаем ваше внимание на то, что Expomap не является организатором события и не несет ответственности за неточности предоставляемой информации.
                                        </h5>
                                    </Col>

                                </Row>

                            </Card>

                        </Col>
                        <Button className={'video_all'} style={{marginLeft:'70%'}}>Перейти на сайт</Button>
                    </Row>
                </div>
            </React.Fragment>
        )
    }

}
export  default Big_post