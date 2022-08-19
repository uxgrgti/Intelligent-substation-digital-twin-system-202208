import React from "react";
import ReactECharts from "echarts-for-react";
const Bar = (props) => {
  var count = 0;
  console.log("Bar props", props.tableData);
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
  let option = {
    grid: {
      top: "5%",
      bottom: "45%",
    },
    xAxis: {
      type: "value",
      show: false,
    },
    yAxis: {
      type: "category",
      data: ["危急", "严重", "一般", "关注"],
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        barWidth: 15,
        data: [
          criticalCount[criticalCount.length - 1],
          seriousCount[seriousCount.length - 1],
          commonlyCount[commonlyCount.length - 1],
          followCount[followCount.length - 1],
        ],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          borderRadius: 50,
          color: "rgba(180, 180, 180, 0.2)",
        },
        label: {
          show: true,
          position: "right",
        },
        itemStyle: {
          borderRadius: 50,
          color: function (params) {
            var colorList = ["#e05146", "#f9d351", "#5db9f9", "#7aee9f"];
            return colorList[params.dataIndex];
          },
        },
      },
    ],
  };
  return (
    <div className="bar">
      <ReactECharts option={option} />
    </div>
  );
};

export default Bar;
