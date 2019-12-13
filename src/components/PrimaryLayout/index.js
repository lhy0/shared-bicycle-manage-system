import React from 'react';
// import { Row, Col } from "antd";
import Footer from '../Footer';
import Header from '../Header';
import Sider from '../Sider';
// import Home from './pages/home';
import Content from '../../router';
import './index.less';

export default class PrimaryLayout extends React.Component {

    render() {
        return (
            <section className="container">
                <aside className="sider">
                    <Sider/>
                </aside>
                <section className="main">
                    <Header/>
                    <main className="content">
                        <Content/>
                    </main>
                    <Footer/>
                </section>
            </section>
        )
    }
}