import React from "react";
import Bar from "../Bar";
import Pie from "../Pie";
import { Button } from "antd";
import { useState } from "react";

export default function DataChart(props) {
  const [isFold, setIsFold] = useState(false);
  const onClick = () => {
    setIsFold(!isFold);
  };
  return (
    <div className="dataChart">
      <div className="fold">
        <Button
          type="link"
          style={{ float: "right", margin: "0 30px" }}
          onClick={onClick}
        >
          <span style={{ display: isFold ? "none" : "block" }}>收起 ⬆</span>
          <span style={{ display: isFold ? "block" : "none" }}>展开 ⬇</span>
        </Button>
      </div>
      <div className="charts" style={{ display: isFold ? "none" : "flex" }}>
        <Bar tableData={props.tableData} />
        <Pie tableData={props.tableData} />
      </div>
    </div>
  );
}
