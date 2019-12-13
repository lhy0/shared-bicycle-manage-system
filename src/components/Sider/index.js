import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import MenuConfig from './../../config/menuConfig'

import './index.less';

const { SubMenu } = Menu;

export default class Sider extends React.Component {

    homeHandleClick = () => {
       
    };

    // 菜单点击
    handleClick = ({ item, key }) => {
        
    };

    rendermenu = (data) => {
        return data.map(item => {
            return item.children ? (
                <SubMenu key={item.key} title={item.title}>
                    {this.rendermenu(item.children)}
                </SubMenu>
            ) : (
                <Menu.Item  key={item.key}>{item.title}</Menu.Item>
            )
        })
    }

    render() {
        return (
            <div>
                {/* <NavLink to="/home" onClick={this.homeHandleClick}> */}
                    <div className="logo">
                        <img src="/assets/logo-ant.svg" alt=""/>
                        <h1>My Pro</h1>
                    </div>
                {/* </NavLink> */}
                <Menu onClick={this.handleClick} style={{ width: 256 }} mode="vertical" theme="dark">
                    {this.rendermenu(MenuConfig)}
                </Menu>
            </div>
        )
    }
}