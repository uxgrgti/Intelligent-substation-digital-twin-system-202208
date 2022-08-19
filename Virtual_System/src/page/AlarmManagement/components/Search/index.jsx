import { React, useEffect } from "react";
import { Select, DatePicker, Button } from "antd";
import moment from "moment";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { dataState } from "../../../../recoil";
export default function Search(props) {
  const [equipTypeSelectValue, setEquipTypeSelectValue] = useState("all");
  const [stationNameSelectValue, setStationNameSelectValue] = useState("all");
  const [alertTypeSelectValue, setAlertTypeSelectValue] = useState("all");
  const [alertStatusSelectValue, setAlertStatusSelectValue] = useState("all");
  const [relieveFlagSelectValue, setRelieveFlagSelectValue] = useState("all");
  const [equipNameChSelectValue, setEquipNameChSelectValue] = useState();
  const [ruleNameSelectValue, setRuleNameSelectValue] = useState();
  const [createTimeSelectValue, setCreateTimeSelectValue] = useState();
  const [data, setData] = useRecoilState(dataState);
  const [searchCriteria, setSearchCriteria] = useState({
    stationName: "",
    equipType: "",
    alertType: "",
    alertStatus: "",
    relieveFlag: "",
    ruleName: "",
    equipNameCh: "",
    createTime: ["", ""],
  });
  // const data = [
  //   {
  //     id: "754592747888971776",
  //     ruleId: "5",
  //     ruleName: "油位比例异常", //告警名称
  //     deletedFlag: null,
  //     createTime: "2022-08-10 04:03:16",
  //     updateTime: null,
  //     stationId: "bdz001",
  //     stationName:
  //       "智慧A变电站彩虹信息有限公司彩虹信息有限公司彩虹信息有限公司",
  //     equipNameEn: "yz001",
  //     equipNameCh: "1号变压器油枕",
  //     equipType: "bj",
  //     alertStatus: 2,
  //     collectedTime: "1660075341062",
  //     collectedEndTime: null,
  //     continuedTime: 5.86,
  //     relieveFlag: 1,
  //     criterionPointList:
  //       '[{"name":"sds.sds219","nameCh":"实时油位比例","value":"50.0","unit":"%"}]',
  //     originalCriterionPointList: '[{"name":"sds.sds219","value":"50.0"}]',
  //     remark: "遥控器场景：\n油位比例(80,100)异常；(20,80]正常",
  //     dataCriterionNameEn: "sds",
  //     equipId: "1463000355058388994",
  //     taskId: null,
  //     subEquipId: null,
  //     subEquipNameCh: null,
  //     pointName: null,
  //     pointType: null,
  //     alertType: 3,
  //     alertCount: 2861,
  //     criterionPointNameEn: null,
  //     criterionPointValue: null,
  //     startTime: null,
  //     endTime: null,
  //     mainEquip: false,
  //   },
  //   {
  //     id: "754592747700228096",
  //     ruleId: "5",
  //     ruleName: "油位比例异常",
  //     deletedFlag: null,
  //     createTime: "2022-08-10 04:03:16",
  //     updateTime: null,
  //     stationId: "bdz001",
  //     stationName:
  //       "智慧A变电站彩虹信息有限公司彩虹信息有限公司彩虹信息有限公司",
  //     equipNameEn: "YZ",
  //     equipNameCh: "主变油枕",
  //     equipType: "bj",
  //     alertStatus: 2,
  //     collectedTime: "1660075341062",
  //     collectedEndTime: null,
  //     continuedTime: 5.86,
  //     relieveFlag: 1,
  //     criterionPointList:
  //       '[{"name":"sds.sds219","nameCh":"实时油位比例","value":"50.0","unit":"%"}]',
  //     originalCriterionPointList: '[{"name":"sds.sds219","value":"50.0"}]',
  //     remark: "遥控器场景：\n油位比例(80,100)异常；(20,80]正常",
  //     dataCriterionNameEn: "sds",
  //     equipId: "1463081515692216321",
  //     taskId: null,
  //     subEquipId: null,
  //     subEquipNameCh: null,
  //     pointName: null,
  //     pointType: null,
  //     alertType: 3,
  //     alertCount: 2875,
  //     criterionPointNameEn: null,
  //     criterionPointValue: null,
  //     startTime: null,
  //     endTime: null,
  //     mainEquip: false,
  //   },
  //   {
  //     id: "754592747268214785",
  //     ruleId: "5",
  //     ruleName: "油位比例异常",
  //     deletedFlag: null,
  //     createTime: "2022-08-10 04:03:16",
  //     updateTime: null,
  //     stationId: "bdz001",
  //     stationName:
  //       "智慧A变电站彩虹信息有限公司彩虹信息有限公司彩虹信息有限公司",
  //     equipNameEn: "bdz001xq1",
  //     equipNameCh: "智慧A一间隔",
  //     equipType: "zbjg",
  //     alertStatus: 2,
  //     collectedTime: "1660075341062",
  //     collectedEndTime: null,
  //     continuedTime: 5.86,
  //     relieveFlag: 1,
  //     criterionPointList:
  //       '[{"name":"sds.sds219","nameCh":"实时油位比例","value":"50.0","unit":"%"}]',
  //     originalCriterionPointList: '[{"name":"sds.sds219","value":"50.0"}]',
  //     remark: "遥控器场景：\n油位比例(80,100)异常；(20,80]正常",
  //     dataCriterionNameEn: "sds",
  //     equipId: "1",
  //     taskId: null,
  //     subEquipId: null,
  //     subEquipNameCh: null,
  //     pointName: null,
  //     pointType: null,
  //     alertType: 3,
  //     alertCount: 83,
  //     criterionPointNameEn: null,
  //     criterionPointValue: null,
  //     startTime: null,
  //     endTime: null,
  //     mainEquip: false,
  //   },
  //   {
  //     id: "754592747268214784",
  //     ruleId: "5",
  //     ruleName: "油位比例异常",
  //     deletedFlag: null,
  //     createTime: "2022-08-10 04:03:16",
  //     updateTime: null,
  //     stationId: "bdz001",
  //     stationName:
  //       "智慧A变电站彩虹信息有限公司彩虹信息有限公司彩虹信息有限公司",
  //     equipNameEn: "1ZB",
  //     equipNameCh: "一号主变",
  //     equipType: "abbyq",
  //     alertStatus: 1,
  //     collectedTime: "1660075341062",
  //     collectedEndTime: null,
  //     continuedTime: 5.86,
  //     relieveFlag: 1,
  //     criterionPointList:
  //       '[{"name":"sds.sds219","nameCh":"实时油位比例","value":"50.0","unit":"%"}]',
  //     originalCriterionPointList: '[{"name":"sds.sds219","value":"50.0"}]',
  //     remark: "遥控器场景：\n油位比例(80,100)异常；(20,80]正常",
  //     dataCriterionNameEn: "sds",
  //     equipId: "84705685337673750",
  //     taskId: null,
  //     subEquipId: null,
  //     subEquipNameCh: null,
  //     pointName: null,
  //     pointType: null,
  //     alertType: 3,
  //     alertCount: 3610,
  //     criterionPointNameEn: null,
  //     criterionPointValue: null,
  //     startTime: null,
  //     endTime: null,
  //     mainEquip: true,
  //   },
  //   {
  //     id: "749688713629536256",
  //     ruleId: "115549073485991936",
  //     ruleName: "本体温度异常",
  //     deletedFlag: null,
  //     createTime: "2022-07-27 15:16:24",
  //     updateTime: null,
  //     stationId: "bdz110",
  //     stationName: "cj电站",
  //     equipNameEn: "zb99",
  //     equipNameCh: "99号变压器",
  //     equipType: "abbyq",
  //     alertStatus: 3,
  //     collectedTime: "1658906183359",
  //     collectedEndTime: null,
  //     continuedTime: 330.63,
  //     relieveFlag: 1,
  //     criterionPointList:
  //       '[{"name":"sds.sds202","nameCh":"本体温度","value":"80.120000","unit":"℃"}]',
  //     originalCriterionPointList: '[{"name":"sds.sds202","value":"80.120000"}]',
  //     remark: "阈值规则：热点温度＞80℃为关注状态，否则为正常状态",
  //     dataCriterionNameEn: "sds",
  //     equipId: "280381445749477376",
  //     taskId: null,
  //     subEquipId: null,
  //     subEquipNameCh: null,
  //     pointName: null,
  //     pointType: null,
  //     alertType: 3,
  //     alertCount: 2,
  //     criterionPointNameEn: null,
  //     criterionPointValue: null,
  //     startTime: null,
  //     endTime: null,
  //     mainEquip: false,
  //   },
  //   {
  //     id: "748892622935953408",
  //     ruleId: "255058812782907392",
  //     ruleName: "油温异常",
  //     deletedFlag: null,
  //     createTime: "2022-07-25 10:33:01",
  //     updateTime: null,
  //     stationId: "bdz001",
  //     stationName: "智慧A变电站",
  //     equipNameEn: "1ZB",
  //     equipNameCh: "一号主变",
  //     equipType: "abbyq",
  //     alertStatus: 3,
  //     collectedTime: "1658745430000",
  //     collectedEndTime: null,
  //     continuedTime: -1,
  //     relieveFlag: 1,
  //     criterionPointList:
  //       '[{"name":"sds.sds220","nameCh":"实时油温","value":"100.74750828621825","unit":"℃"}]',
  //     originalCriterionPointList:
  //       '[{"name":"sds.sds220","value":"100.74750828621825"}]',
  //     remark:
  //       "阈值规则：\n实时油温 在>105℃：严重；>95℃：一般；>80℃：关注\n其余：正常",
  //     dataCriterionNameEn: "sds",
  //     equipId: "84705685337673750",
  //     taskId: null,
  //     subEquipId: null,
  //     subEquipNameCh: null,
  //     pointName: null,
  //     pointType: null,
  //     alertType: 1,
  //     alertCount: 8,
  //     criterionPointNameEn: null,
  //     criterionPointValue: null,
  //     startTime: null,
  //     endTime: null,
  //     mainEquip: true,
  //   },
  //   {
  //     id: "747232326660001792",
  //     ruleId: "255058812782907392",
  //     ruleName: "油温异常",
  //     deletedFlag: null,
  //     createTime: "2022-07-20 20:35:35",
  //     updateTime: null,
  //     stationId: "bdz001",
  //     stationName: "智慧A变电站",
  //     equipNameEn: "YZ",
  //     equipNameCh: "主变油枕",
  //     equipType: "bj",
  //     alertStatus: 2,
  //     collectedTime: "1658320533431",
  //     collectedEndTime: null,
  //     continuedTime: 493.31,
  //     relieveFlag: 1,
  //     criterionPointList:
  //       '[{"name":"sds.sds220","nameCh":"实时油温","value":"85.100000","unit":"℃"}]',
  //     originalCriterionPointList: '[{"name":"sds.sds220","value":"85.100000"}]',
  //     remark:
  //       "阈值规则：\n实时油温 在>105℃：严重；>95℃：一般；>80℃：关注\n其余：正常",
  //     dataCriterionNameEn: "sds",
  //     equipId: "1463081515692216321",
  //     taskId: null,
  //     subEquipId: null,
  //     subEquipNameCh: null,
  //     pointName: null,
  //     pointType: null,
  //     alertType: 3,
  //     alertCount: 1,
  //     criterionPointNameEn: null,
  //     criterionPointValue: null,
  //     startTime: null,
  //     endTime: null,
  //     mainEquip: false,
  //   },
  //   {
  //     id: "747232325573677056",
  //     ruleId: "255058812782907392",
  //     ruleName: "油温异常",
  //     deletedFlag: null,
  //     createTime: "2022-07-20 20:35:35",
  //     updateTime: null,
  //     stationId: "bdz001",
  //     stationName: "智慧A变电站",
  //     equipNameEn: "1ZB",
  //     equipNameCh: "一号主变",
  //     equipType: "abbyq",
  //     alertStatus: 2,
  //     collectedTime: "1658320533431",
  //     collectedEndTime: null,
  //     continuedTime: 493.31,
  //     relieveFlag: 1,
  //     criterionPointList:
  //       '[{"name":"sds.sds220","nameCh":"实时油温","value":"85.100000","unit":"℃"}]',
  //     originalCriterionPointList: '[{"name":"sds.sds220","value":"85.100000"}]',
  //     remark:
  //       "阈值规则：\n实时油温 在>105℃：严重；>95℃：一般；>80℃：关注\n其余：正常",
  //     dataCriterionNameEn: "sds",
  //     equipId: "84705685337673750",
  //     taskId: null,
  //     subEquipId: null,
  //     subEquipNameCh: null,
  //     pointName: null,
  //     pointType: null,
  //     alertType: 3,
  //     alertCount: 1,
  //     criterionPointNameEn: null,
  //     criterionPointValue: null,
  //     startTime: null,
  //     endTime: null,
  //     mainEquip: true,
  //   },
  //   {
  //     id: "747234697175764992",
  //     ruleId: "5",
  //     ruleName: "油位比例异常",
  //     deletedFlag: null,
  //     createTime: "2022-07-20 20:45:01",
  //     updateTime: null,
  //     stationId: "bdz001",
  //     stationName: "智慧A变电站",
  //     equipNameEn: "2ZB",
  //     equipNameCh: "二号主变",
  //     equipType: "abbyq",
  //     alertStatus: 4,
  //     collectedTime: "1658316470712",
  //     collectedEndTime: null,
  //     continuedTime: 494.44,
  //     relieveFlag: 1,
  //     criterionPointList:
  //       '[{"name":"sds.sds219","nameCh":"实时油位比例","value":"59.1","unit":"%"}]',
  //     originalCriterionPointList: '[{"name":"sds.sds219","value":"59.1"}]',
  //     remark: "遥控器场景：\n油位比例(80,100)异常；(20,80]正常",
  //     dataCriterionNameEn: "sds",
  //     equipId: "84705685341868054",
  //     taskId: null,
  //     subEquipId: null,
  //     subEquipNameCh: null,
  //     pointName: null,
  //     pointType: null,
  //     alertType: 3,
  //     alertCount: 3413,
  //     criterionPointNameEn: null,
  //     criterionPointValue: null,
  //     startTime: null,
  //     endTime: null,
  //     mainEquip: true,
  //   },
  //   {
  //     id: "747234696232046592",
  //     ruleId: "5",
  //     ruleName: "油位比例异常",
  //     deletedFlag: null,
  //     createTime: "2022-07-20 20:45:00",
  //     updateTime: null,
  //     stationId: "bdz001",
  //     stationName: "智慧A变电站",
  //     equipNameEn: "1YZ",
  //     equipNameCh: "主变油枕",
  //     equipType: "bj",
  //     alertStatus: 2,
  //     collectedTime: "1658316470712",
  //     collectedEndTime: null,
  //     continuedTime: 494.44,
  //     relieveFlag: 1,
  //     criterionPointList:
  //       '[{"name":"sds.sds219","nameCh":"实时油位比例","value":"59.1","unit":"%"}]',
  //     originalCriterionPointList: '[{"name":"sds.sds219","value":"59.1"}]',
  //     remark: "遥控器场景：\n油位比例(80,100)异常；(20,80]正常",
  //     dataCriterionNameEn: "sds",
  //     equipId: "1549592236944052226",
  //     taskId: null,
  //     subEquipId: null,
  //     subEquipNameCh: null,
  //     pointName: null,
  //     pointType: null,
  //     alertType: 3,
  //     alertCount: 1,
  //     criterionPointNameEn: null,
  //     criterionPointValue: null,
  //     startTime: null,
  //     endTime: null,
  //     mainEquip: false,
  //   },
  // ];

  //根据告警对象去重
  let obj3 = {};
  var equipNameChTableDatas = data.reduce((curr, next) => {
    obj3[next.equipNameCh] ? "" : (obj3[next.equipNameCh] = curr.push(next));
    return curr;
  }, []);

  //根据告警名称去重
  let obj2 = {};
  var ruleNameTableDatas = data.reduce((curr, next) => {
    obj2[next.ruleName] ? "" : (obj2[next.ruleName] = curr.push(next));
    return curr;
  }, []);

  //根据电站名称去重
  let obj1 = {};
  var stationNameTableDatas = data.reduce((curr, next) => {
    /*判断对象中是否已经有该属性  没有的话 push 到 curr数组*/
    obj1[next.stationName] ? "" : (obj1[next.stationName] = curr.push(next));
    return curr;
  }, []);

  // const dayContent = <p>过去一日</p>;
  // const weekContent = <p>过去一周</p>;
  // const monthContent = <p>过去一月</p>;
  const { Option, OptGroup } = Select;
  const { RangePicker } = DatePicker;
  // 重置;
  const Reset = () => {
    setSearchCriteria({
      stationName: "",
      equipType: "",
      alertType: "",
      alertStatus: "",
      relieveFlag: "",
      ruleName: "",
      equipNameCh: "",
      createTime: ["", ""],
    });
    console.log("重置结果", searchCriteria);
    props.getTableData(data);
    setEquipTypeSelectValue("all");
    setStationNameSelectValue("all");
    setAlertTypeSelectValue("all");
    setAlertStatusSelectValue("all");
    setRelieveFlagSelectValue("all");
    setRuleNameSelectValue();
    setEquipNameChSelectValue();
    setCreateTimeSelectValue();
  };
  //根据搜索条件筛选
  const search = () => {
    console.log("搜索条件", searchCriteria);
    const tempData = [...data];
    const filterResults = tempData.filter((item) => {
      if (searchCriteria.alertStatus === "attentionStatusAlarm")
        searchCriteria.alertStatus = 2;
      if (searchCriteria.alertStatus === "generalDefectAlarm")
        searchCriteria.alertStatus = 1;
      if (searchCriteria.alertStatus === "seriousDefectAlarm")
        searchCriteria.alertStatus = 3;
      if (searchCriteria.alertStatus === "criticalDefectAlarm")
        searchCriteria.alertStatus = 4;

      if (searchCriteria.alertType === "warning") searchCriteria.alertType = 3;
      if (searchCriteria.alertType === "earlyWarning")
        searchCriteria.alertType = 2;
      if (searchCriteria.alertType === "interrupt")
        searchCriteria.alertType = 1;

      if (searchCriteria.relieveFlag === "notReleased")
        searchCriteria.relieveFlag = 1;
      if (searchCriteria.relieveFlag === "released")
        searchCriteria.relieveFlag = 2;
      if (
        (searchCriteria.stationName === "all" ||
        searchCriteria.stationName === ""
          ? true
          : item.stationName === searchCriteria.stationName) &&
        (searchCriteria.equipType === "all" || searchCriteria.equipType === ""
          ? true
          : item.equipType === searchCriteria.equipType) &&
        (searchCriteria.alertStatus === "all" ||
        searchCriteria.alertStatus === ""
          ? true
          : item.alertStatus === searchCriteria.alertStatus) &&
        (searchCriteria.alertType === "all" || searchCriteria.alertType === ""
          ? true
          : item.alertType === searchCriteria.alertType) &&
        (searchCriteria.relieveFlag === "all" ||
        searchCriteria.relieveFlag == ""
          ? true
          : item.relieveFlag === searchCriteria.relieveFlag) &&
        (searchCriteria.ruleName === ""
          ? true
          : item.ruleName === searchCriteria.ruleName) &&
        (searchCriteria.equipNameCh === ""
          ? true
          : item.equipNameCh === searchCriteria.equipNameCh) &&
        (searchCriteria.createTime[0] === ""
          ? true
          : moment(item.createTime).isAfter(searchCriteria.createTime[0])) &&
        (searchCriteria.createTime[1] === ""
          ? true
          : moment(item.createTime).isBefore(searchCriteria.createTime[1]))
      )
        return item;
    });

    props.getTableData(filterResults);
    console.log("筛选结果", nTableData);
  };

  return (
    <div className="search">
      <div className="ant-form-item">
        <Select
          // defaultValue="all"
          value={stationNameSelectValue}
          style={{ width: 140 }}
          onChange={(value) => {
            setStationNameSelectValue(value);
            setSearchCriteria({
              ...searchCriteria,
              stationName: value,
            });
          }}
        >
          <Option value="all">全部电站</Option>
          {stationNameTableDatas.map((item) => {
            return <Option value={item.stationName}>{item.stationName}</Option>;
          })}
        </Select>
      </div>
      <div className="ant-form-item">
        <Select
          // defaultValue="all"
          value={equipTypeSelectValue}
          style={{
            width: 140,
          }}
          onChange={(value) => {
            setEquipTypeSelectValue(value);
            setSearchCriteria({
              ...searchCriteria,
              equipType: value,
            });
          }}
        >
          <Option value="all">全部对象类型</Option>
          <OptGroup label="电站">
            <Option value="transformerSubstation">变电站</Option>
            <Option value="distributionStation">配电站</Option>
            <Option value="subscriberStation">用户站</Option>
            <Option value="transmissionLine">输电线路</Option>
            <Option value="testStation">测试电站</Option>
          </OptGroup>
          <OptGroup label="间隔">
            <Option value="zbjg">主变间隔</Option>
            <Option value="lineInterval">线路间隔</Option>
            <Option value="testInterval">测试间隔</Option>
          </OptGroup>
          <OptGroup label="设备">
            <Option value="bj">变压器</Option>
            <Option value="switchCabinet">开关柜</Option>
            <Option value="battery">蓄电池</Option>
            <Option value="lightningArrester">避雷器</Option>
            <Option value="cable">电缆</Option>
            <Option value="abbyq">中性点接地电阻</Option>
            <Option value="GIS">GIS</Option>
            <Option value="capacitor">电容器</Option>
            <Option value="auxiliaryControlEquipment">辅控设备</Option>
            <Option value="camera">摄像头</Option>
            <Option value="lightControlEquipment">灯控设备</Option>
            <Option value="testEquipment">测试设备</Option>
          </OptGroup>
          <Option value="building">建筑</Option>
        </Select>
      </div>
      <div className="ant-form-item">
        <Select
          // defaultValue="all"
          value={alertTypeSelectValue}
          style={{ width: 140 }}
          onChange={(value) => {
            setAlertTypeSelectValue(value);
            setSearchCriteria({
              ...searchCriteria,
              alertType: value,
            });
          }}
        >
          <Option value="all">全部告警类型</Option>
          <Option value="warning">告警</Option>
          <Option value="earlyWarning">预警</Option>
          <Option value="interrupt">中断</Option>
        </Select>
      </div>
      <div className="ant-form-item">
        <Select
          // defaultValue="all"
          value={alertStatusSelectValue}
          style={{ width: 140 }}
          onChange={(value) => {
            setAlertStatusSelectValue(value);
            setSearchCriteria({
              ...searchCriteria,
              alertStatus: value,
            });
          }}
        >
          <Option value="all">全部告警等级</Option>
          <Option value="attentionStatusAlarm">关注状态告警</Option>
          <Option value="generalDefectAlarm">一般缺陷告警</Option>
          <Option value="seriousDefectAlarm">严重缺陷告警</Option>
          <Option value="criticalDefectAlarm">危急缺陷告警</Option>
        </Select>
      </div>
      <div className="ant-form-item">
        <Select
          // defaultValue="all"
          value={relieveFlagSelectValue}
          style={{ width: 140 }}
          onChange={(value) => {
            setRelieveFlagSelectValue(value);
            setSearchCriteria({
              ...searchCriteria,
              relieveFlag: value,
            });
          }}
        >
          <Option value="all">全部告警状态</Option>
          <Option value="notReleased">未解除</Option>
          <Option value="released">解除</Option>
        </Select>
      </div>
      <div className="ant-form-item">
        <Select
          showSearch
          placeholder="请输入告警名称"
          value={ruleNameSelectValue}
          optionFilterProp="children" //搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索。
          onChange={(value) => {
            setRuleNameSelectValue(value);
            setSearchCriteria({
              ...searchCriteria,
              ruleName: value,
            });
          }}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {ruleNameTableDatas.map((item) => {
            return <Option value={item.ruleName}>{item.ruleName}</Option>;
          })}
        </Select>
      </div>
      <div className="ant-form-item">
        <Select
          showSearch
          placeholder="请输入对象名称"
          value={equipNameChSelectValue}
          optionFilterProp="children"
          onChange={(value) => {
            setEquipNameChSelectValue(value);
            setSearchCriteria({
              ...searchCriteria,
              equipNameCh: value,
            });
          }}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {equipNameChTableDatas.map((item) => {
            return <Option value={item.equipNameCh}>{item.equipNameCh}</Option>;
          })}
        </Select>
      </div>
      {/* <div className="ant-form-item">
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Popover content={dayContent}>
            <Radio.Button value="day" onClick={onClickDay}>
              日
            </Radio.Button>
          </Popover>
          <Popover content={weekContent}>
            <Radio.Button value="week" onClick={onClickWeek}>
              周
            </Radio.Button>
          </Popover>
          <Popover content={monthContent}>
            <Radio.Button value="month" onClick={onClickMonth}>
              月
            </Radio.Button>
          </Popover>
        </Radio.Group>
      </div> */}
      <div className="ant-form-item">
        <RangePicker
          value={createTimeSelectValue}
          ranges={{
            今日: [moment(), moment()],
            昨天: [
              moment().startOf("day").subtract(1, "days"),
              moment().endOf("day").subtract(1, "days"),
            ],
            最近7天: [
              moment().startOf("day").subtract(6, "days"),
              moment().endOf("day"),
            ],
            最近10天: [
              moment().startOf("day").subtract(9, "days"),
              moment().endOf("day"),
            ],
            最近30天: [
              moment().startOf("day").subtract(29, "days"),
              moment().endOf("day"),
            ],
            最近一周: [moment().startOf("day").subtract(1, "weeks"), moment()],
            本月: [moment().startOf("month"), moment()],
            本年: [moment().startOf("year"), moment()],
          }}
          separator="~"
          showTime={{ format: "HH:mm" }}
          format="YYYY-MM-DD HH:mm"
          placeholder={["开始日期", "结束日期"]}
          onChange={(value) => {
            setCreateTimeSelectValue(value);
            setSearchCriteria({ ...searchCriteria, createTime: value });
          }}
        />
      </div>
      <div className="floatButton">
        <div className="ant-form-item">
          <Button type="primary" onClick={search}>
            搜索
          </Button>
        </div>
        <div className="ant-form-item">
          <Button onClick={Reset}>重置</Button>
        </div>
        <div className="ant-form-item">
          <Button type="primary">告警导出</Button>
        </div>
      </div>
    </div>
  );
}
