import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  NotificationOutlined
} from "@ant-design/icons";
import ErrorIcon from '@material-ui/icons/Error';
import LockIcon from '@material-ui/icons/Lock';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TimelineIcon from '@material-ui/icons/Timeline';
import LayersIcon from '@material-ui/icons/Layers';
import "./style.css";
import Post from "./Post";
import Ventilation from "./Ventilation";
import Cooling from "./Cooling";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<LayersIcon />}>
              Grid Manager
            </Menu.Item>
            <Menu.Item key="2" icon={<DashboardIcon />}>
              Dashboard
            </Menu.Item>

            <SubMenu key="sub1" icon={<VpnKeyIcon />} title="E3 App">
              <Menu.Item key="3">
                <Link to="/"><ErrorIcon /> Peak Saving And Alerts</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <LockIcon />
                <Link to="/ventilation">Ventilation</Link>
              </Menu.Item>
              <Menu.Item key="5">
              <LockIcon />
                <Link to="/cooling">cooling</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<NotificationOutlined />}
              title="Demand Response"
            ></SubMenu>
            <SubMenu
              key="sub3"
              icon={<EventNoteIcon />}
              title="Insights"
            ></SubMenu>
            <Menu.Item key="6" icon={<TimelineIcon />}>
              Version History
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>

            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch>
                <Route exact path="/" component={Post} />
                <Route exact path="/ventilation" component={Ventilation} />
                <Route exact path="/cooling" component={Cooling} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Created By Manas 2020
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Sidebar;
