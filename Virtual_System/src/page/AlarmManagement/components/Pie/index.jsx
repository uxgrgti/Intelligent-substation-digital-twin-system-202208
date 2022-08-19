import React from "react";
import ReactECharts from "echarts-for-react";

const Pie = (props) => {
  var count = 0;
  const followCount = props.tableData.map((item) => {
    if (item.alertStatus == 2) count++;
    return count;
  });
  var count = 0;
  const commonlyCount = props.tableData.map((item) => {
    if (item.alertStatus == 1) count++;
    return count;
  });
  var count = 0;
  const seriousCount = props.tableData.map((item) => {
    if (item.alertStatus == 3) count++;
    return count;
  });
  var count = 0;
  const criticalCount = props.tableData.map((item) => {
    if (item.alertStatus == 4) count++;
    return count;
  });
  var option;
  option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: 50,
      right: 80,
      orient: "vertical",
      itemWidth: 10,
      itemStyle: {
        borderColor: null,
      },
      icon: "circle",
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        width: 200,
        height: 200,
        top: -10,
        itemStyle: {
          color: function (params) {
            var colorList = ["#7aee9f", "#5db9f9", "#f9d351", "#e05146"];
            return colorList[params.dataIndex];
          },
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
          formatter: "{d}%",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: followCount[followCount.length - 1], name: "关注" },
          { value: commonlyCount[commonlyCount.length - 1], name: "一般" },
          { value: seriousCount[seriousCount.length - 1], name: "严重" },
          { value: criticalCount[criticalCount.length - 1], name: "危急" },
        ],
      },
    ],
  };
  return (
    <div className="pie">
      <ReactECharts option={option} />
    </div>
  );
};

export default Pie;
