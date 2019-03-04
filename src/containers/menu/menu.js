import './style.scss';
import React from 'react';
import bind from 'react-autobind';
import {Menu, Icon, Button} from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu, Item = Menu.Item;
export default class LeftMenu extends React.Component{
    constructor(p){
        super(p);
        this.state = {
            collapsed: false,
        }
        bind(this);
    }
    render(){
        return (
            <div className="guide-menu">
                <div className="title">xxx Manage System</div>
                <div className="nav">
                <Menu
                    defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1">
                        <Link to={'/'}>
                            <Icon type="pie-chart" />
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>用户管理</span></span>}>
                        <Menu.Item key="2"><Link to={'/userManage'}>**用户</Link></Menu.Item>
                        <Menu.Item key="3"><Link to={'/userManage/department'}>**用户</Link></Menu.Item>
                        <Menu.Item key="4"><Link to={'/userManage/government'}>**用户</Link></Menu.Item>
                        <Menu.Item key="5"><Link to={'/userManage/manager'}>**管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="mail" /><span>内容管理</span></span>}>
                        <Menu.Item key="6"><Link to={'/contentManage'}>**管理</Link></Menu.Item>
                        <Menu.Item key="7"><Link to={'/contentManage/classicCase'}>**管理</Link></Menu.Item>
                        <Menu.Item key="8"><Link to={'/contentManage/complianAdvice'}>**管理</Link></Menu.Item>
                        <Menu.Item key="9"><Link to={'/contentManage/analysisReport'}>**管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="mail" /><span>**管理</span></span>}>
                        <Menu.Item key="10"><Link to={'/indexConManage'}>**管理</Link></Menu.Item>
                        <Menu.Item key="11"><Link to={'/indexConManage/departmentReport'}>**管理</Link></Menu.Item>
                        <Menu.Item key="12"><Link to={'/indexConManage/indexManage'}>**管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="mail" /><span>角色权限管理</span></span>}>
                        <Menu.Item key="13"><Link to={'/roleManage'}>**列表</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" title={<span><Icon type="mail" /><span>数据管理</span></span>}>
                        <Menu.Item key="14"><Link to={'/dataDicManage'}>**管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub6" title={<span><Icon type="mail" /><span>系统管理</span></span>}>
                        <Menu.Item key="15"><Link to={'/systemManage'}>帮助中心</Link></Menu.Item>
                        <Menu.Item key="16"><Link to={'/systemManage/logManage'}>日志管理</Link></Menu.Item>
                    </SubMenu>
                </Menu> 
                </div>
            </div>
        );
    }
}