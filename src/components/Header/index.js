import React from 'react';
import { Row, Col, Button } from 'antd';
import Util from '../../utils/utils'
// import Jsonp from 'jsonp';
import './index.less';

export default class Header extends React.Component {
    state = {
        user: "liuhy"
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ sysTime: Util.formateDate(new Date().getTime()) })
        }, 1000);

        this.getWeather();
    }

    getWeather = () => {
        // let location = "北京";
        // let ak = "DP3y6ep0ZDmGsuM7hTUwn3F089vylI2c";
        // let url = `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(location)}&output=json&ak=${ak}`
        // Jsonp(url, {
        //     param: "callback"
        // }, (error, response) => {
        //     let weather = response.results[0].weather_data[0].weather;
        //     this.setState({ weather })
        // })
        this.setState({ weather: "晴转多云" })
    }

    onLoginOut = () => {

    }

    render() {
        return (
            <header>
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎{this.state.user}</span>
                        <Button type="link" onClick={this.onLoginOut}>退出</Button>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{ this.state.sysTime || ""}</span>
                        <span className="weather-detail">{ this.state.weather }</span>
                    </Col>
                </Row>
            </header>
        )
    }
}