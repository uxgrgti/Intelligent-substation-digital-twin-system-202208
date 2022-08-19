import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { dataState } from "../../recoil";
import DataChart from "./components/DataChart";
import Search from "./components/Search";
import WarningTable from "./components/WarningTable";

export default function AlarmManagement() {
  const [data, setData] = useRecoilState(dataState);
  const [tableData, setTableData] = useState(data);

  const getTableData = (filterResult) => {
    setTableData(filterResult);
  };
  return (
    <div className="AlarmManagement">
      <Search
        getTableData={getTableData}
        // tableData={tableData}
        // changeTableData={changeTableData}
        // data={data}
      />
      <DataChart tableData={tableData} />
      <WarningTable tableData={tableData} />
    </div>
  );
}
