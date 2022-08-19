import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const breadcrumbNameMap = {
  "/alarmmanagement": "告警管理",
  "/alarmmanagement/alarmdetails": "告警详情",
  "/devicemanagement": "设备管理",
  "/rulemanagement": "规则管理",
  "/rulemanagement/alarmrules": "告警规则",
  "/rulemanagement/indicatorrules": "指标规则",
  "/knowledgegraph": "知识图谱",
  "/knowledgegraph/defectinformationmanagement": "缺陷信息管理",
};

const Nav = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      {/* <Link to="/">Home</Link> */}
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
};
export default Nav;
