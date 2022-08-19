import React, { useEffect, useState } from "react";
import { Table, Divider, Tag, Button, Select } from "antd";
import { Link } from "react-router-dom";

export default function WarningTable(props) {
  console.log("warning Table收到的props", props.tableData);
  const [pagesize, setPagesize] = useState(10);
  const nTableDatas1 = props.tableData.map((item) => {
    if (item.alertType === 3) return { ...item, alertType: "告警" };
    else if (item.alertType === 2) return { ...item, alertType: "预警" };
    else return { ...item, alertType: "中断" };
  });

  const nTableDatas2 = nTableDatas1.map((item) => {
    if (item.relieveFlag === 1) return { ...item, relieveFlag: "未解除" };
    else return { ...item, relieveFlag: "解除" };
  });
  const nTableDatas3 = nTableDatas2.map((item) => {
    if (item.alertStatus === 2) return { ...item, alertStatus: ["关注"] };
    else if (item.alertStatus === 1) return { ...item, alertStatus: ["一般"] };
    else if (item.alertStatus === 3) return { ...item, alertStatus: ["严重"] };
    else return { ...item, alertStatus: ["危急"] };
  });
  const nTableDatas4 = nTableDatas3.map((item) => {
    var string1 = JSON.parse(item.criterionPointList);
    var string2 = string1[0].nameCh + string1[0].value + string1[0].unit;
    item.criterionPointList = string2;
    // console.log(item);
    return item;
  });
  const columns = [
    {
      title: "告警名称",
      dataIndex: "ruleName",
      key: "ruleName",
      fixed: "left",
      width: 140,
      sorter: (a, b) => a.ruleName.charCodeAt() - b.ruleName.charCodeAt(),
    },
    {
      title: "告警类型",
      dataIndex: "alertType",
      key: "alertType",
      width: 90,
      sorter: (a, b) => a.alertType.charCodeAt() - b.alertType.charCodeAt(),
    },
    {
      title: "告警等级",
      key: "alertStatus",
      width: 90,
      dataIndex: "alertStatus",
      sorter: (a, b) =>
        a.alertStatus[0].charCodeAt() - b.alertStatus[0].charCodeAt(),
      render: (_, { alertStatus }) => (
        <>
          {alertStatus.map((alertStatus) => {
            let color = "geekblue";
            if (alertStatus === "危急") {
              color = "volcano";
            }
            if (alertStatus === "关注") {
              color = "green";
            }
            if (alertStatus === "严重") {
              color = "orange";
            }
            return (
              <Tag color={color} key={alertStatus}>
                {alertStatus.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "电站",
      dataIndex: "stationName",
      key: "stationName",
      width: 280,
      ellipsis: true,
      sorter: (a, b) => a.stationName.charCodeAt() - b.stationName.charCodeAt(),
    },
    {
      title: "告警对象",
      dataIndex: "equipNameCh",
      key: "equipNameCh",
      width: 150,
      sorter: (a, b) => a.equipNameCh.charCodeAt() - b.equipNameCh.charCodeAt(),
    },
    {
      title: "告警值",
      dataIndex: "criterionPointList",
      key: "criterionPointList",
      width: 300,
    },
    {
      title: "告警发生时间",
      dataIndex: "createTime",
      key: "createTime",
      width: 180,
      sorter: (a, b) => a.createTime.charCodeAt() - b.createTime.charCodeAt(),
    },
    {
      title: "告警持续时间(h)",
      dataIndex: "continuedTime",
      key: "continuedTime",
      width: 140,
      sorter: (a, b) => a.continuedTime - b.continuedTime,
    },
    {
      title: "告警状态",
      dataIndex: "relieveFlag",
      key: "relieveFlag",
      width: 90,
      sorter: (a, b) => a.relieveFlag - b.relieveFlag,
    },
    {
      title: "累计告警次数",
      dataIndex: "alertCount",
      key: "alertCount",
      width: 90,
      sorter: (a, b) => a.alertCount - b.alertCount,
    },
    {
      title: "操作",
      key: "action",
      fixed: "right",
      width: 230,
      render: (text, record) => (
        <span>
          <a>
            <Button type="link" href="">
              <Link to="/knowledgegraph/defectinformationmanagement">
                登记缺陷
              </Link>
            </Button>
          </a>
          <Divider type="vertical" />
          <a>
            <Button type="link">
              <Link to="/alarmmanagement/alarmdetails">告警详情</Link>
            </Button>
          </a>
        </span>
      ),
    },
  ];

  useEffect(() => {
    console.log("data changed");
  }, [props.tableData]);
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="table">
      <Table
        pagination={{ pageSize: pagesize }}
        scroll={{ x: 1300 }}
        columns={columns}
        dataSource={nTableDatas4}
        onChange={onChange}
      />
      <div
        style={{
          position: "relative",
          top: "-48px",
          left: "20px",
          width: "300px",
        }}
      >
        <Select
          style={{ width: 95 }}
          defaultValue="10"
          onChange={(value) => {
            setPagesize(value);
          }}
        >
          <Option value="3">3条/页</Option>
          <Option value="6">6条/页</Option>
          <Option value="10">10条/页</Option>
        </Select>
        <span style={{ margin: "0 10px" }}>共{nTableDatas4.length}条</span>
      </div>
    </div>
  );
}
