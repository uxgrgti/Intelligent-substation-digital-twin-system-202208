import React, { Component } from "react";
// import "antd/dist/antd.css";
import "antd/dist/antd.variable.min.css";
import "./index.css";
import { Layout, Menu, Divider, Popover } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  AimOutlined,
  BarsOutlined,
  BlockOutlined,
  BorderOutlined,
  CodeOutlined,
  ContainerOutlined,
  ControlOutlined,
  ExceptionOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link, Route, Routes } from "react-router-dom";
import AlarmManagement from "./page/AlarmManagement/AlarmManagement";
import DeviceManagement from "./page/DeviceManagement/DeviceManagement";
import Nav from "./Nav";
import AlarmRules from "./page/AlarmRules";
import IndicatorRule from "./page/IndicatorRule";
import AlarmDetails from "./page/AlarmDetails";
import DefectInformationManagement from "./page/DefectInformationManagement";
import { ConfigProvider } from "antd";

ConfigProvider.config({
  theme: {
    primaryColor: "#59c5bd",
  },
});
const { SubMenu } = Menu;
const { Header, Sider } = Layout;

const App = () => {
  const content = (
    <div>
      <p>
        <SettingOutlined /> 编辑个人信息
      </p>
      <p>
        <SettingOutlined /> 修改密码
      </p>
      <LogoutOutlined />
      <> 退出登录</>
    </div>
  );
  return (
    <div>
      <Layout>
        <div style={{ height: "56px", width: "1440px" }}>
          <Header className="header">
            <img
              className="logo"
              src="src/image/cloudwise_logo.png"
              width={"73px"}
              height={"60ps"}
            />
            <Divider className="header_divider" type="vertical" />
            <span className="system_title">智慧变电站数字孪生系统</span>
            <Popover content={content}>
              <img className="admin" src="/src/image/admin.png" />
            </Popover>
          </Header>
        </div>
        <Layout>
          <Sider
            width={208}
            className="site-layout-background"
            collapsible="true"
            style={{ height: "574px", overflow: "scroll" }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="submenu1" icon={<UserOutlined />}>
                新驾驶舱
              </Menu.Item>
              <Menu.Item key="submenu2" icon={<LaptopOutlined />}>
                驾驶舱
              </Menu.Item>
              <Menu.Item key="submenu3" icon={<AimOutlined />}>
                <Link to="/devicemanagement">设备管理</Link>
              </Menu.Item>
              <Menu.Item key="submenu4" icon={<NotificationOutlined />}>
                <Link to="/alarmmanagement">告警管理</Link>
              </Menu.Item>
              <SubMenu key="submenu5" icon={<BarsOutlined />} title="规则管理">
                <Menu.Item key="submenu5_1">
                  <Link to="/rulemanagement/alarmrules"> 告警规则</Link>
                </Menu.Item>
                <Menu.Item key="submenu5_2">
                  <Link to="/rulemanagement/indicatorrules">指标规则</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="submenu6" icon={<BlockOutlined />} title="算法管理">
                <Menu.Item key="submenu6_1">算法模型管理</Menu.Item>
                <Menu.Item key="submenu6_2">算法作业管理</Menu.Item>
              </SubMenu>
              <SubMenu key="submenu7" icon={<CodeOutlined />} title="知识图谱">
                <Menu.Item key="submenu7_1">缺陷智能诊断</Menu.Item>
                <Menu.Item key="submenu7_2">知识库管理</Menu.Item>
                <Menu.Item key="submenu7_3">
                  <Link to="/knowledgegraph/defectinformationmanagement">
                    缺陷信息管理
                  </Link>
                </Menu.Item>
                <Menu.Item key="submenu7_4">图谱知识管理</Menu.Item>
                <Menu.Item key="submenu7_5">同义词管理</Menu.Item>
              </SubMenu>
              <SubMenu
                key="submenu8"
                icon={<ContainerOutlined />}
                title="状态评价"
              >
                <Menu.Item key="submenu8_1">状态评价总览</Menu.Item>
                <Menu.Item key="submenu8_2">状态评价发起</Menu.Item>
                <Menu.Item key="submenu8_3">状态评价确认</Menu.Item>
                <Menu.Item key="submenu8_4">评价导则管理</Menu.Item>
                <Menu.Item key="submenu8_5">二次设备评价</Menu.Item>
              </SubMenu>
              <SubMenu
                key="submenu9"
                icon={<ExceptionOutlined />}
                title="风险评估"
              >
                <Menu.Item key="submenu9_1">风险评估总览</Menu.Item>
                <Menu.Item key="submenu9_2">风险评估发起</Menu.Item>
                <Menu.Item key="submenu9_3">风险评估确认</Menu.Item>
                <Menu.Item key="submenu9_4">评估导则管理</Menu.Item>
              </SubMenu>
              <SubMenu
                key="submenu10"
                icon={<BorderOutlined />}
                title="运检管控"
              >
                <Menu.Item key="submenu10_1">管控等级总览</Menu.Item>
                <Menu.Item key="submenu10_2">策略编制上报</Menu.Item>
                <Menu.Item key="submenu10_3">策略审批确认</Menu.Item>
                <Menu.Item key="submenu10_4">评价信息维护</Menu.Item>
              </SubMenu>
              <SubMenu
                key="submenu11"
                icon={<ControlOutlined />}
                title="系统管理"
              >
                <Menu.Item key="submenu11_1">设备维护</Menu.Item>
                <Menu.Item key="submenu11_2">实施引导</Menu.Item>
                <Menu.Item key="submenu11_3">电站管理</Menu.Item>
                <Menu.Item key="submenu11_4">巡视管理</Menu.Item>
                <Menu.Item key="submenu11_5">数据标准管理</Menu.Item>
                <Menu.Item key="submenu11_6">间隔管理</Menu.Item>
                <Menu.Item key="submenu11_7">数据集管理</Menu.Item>
                <Menu.Item key="submenu11_8">模版管理</Menu.Item>
                <Menu.Item key="submenu11_9">素材管理</Menu.Item>
                <Menu.Item key="submenu11_10">场景管理</Menu.Item>
                <Menu.Item key="submenu11_11">字典管理</Menu.Item>
                <Menu.Item key="submenu11_12">用户管理</Menu.Item>
                <Menu.Item key="submenu11_13">角色管理</Menu.Item>
                <Menu.Item key="submenu11_14">日志管理</Menu.Item>
                <Menu.Item key="submenu11_15">系统管理</Menu.Item>
                <Menu.Item key="submenu11_16">菜单管理</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className="customLayout">
            <div style={{ height: "32px" }}>
              <Nav />
            </div>
            <div className="page">
              <Routes>
                <Route path="/" element={<AlarmManagement />} />
                <Route path="/alarmmanagement" element={<AlarmManagement />} />
                <Route
                  path="/devicemanagement"
                  element={<DeviceManagement />}
                />
                <Route
                  path="/rulemanagement/alarmrules"
                  element={<AlarmRules />}
                />
                <Route
                  path="/rulemanagement/indicatorrules"
                  element={<IndicatorRule />}
                />
                <Route
                  path="/alarmmanagement/alarmdetails"
                  element={<AlarmDetails />}
                />
                <Route
                  path="/knowledgegraph/defectinformationmanagement"
                  element={<DefectInformationManagement />}
                />
              </Routes>
            </div>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
