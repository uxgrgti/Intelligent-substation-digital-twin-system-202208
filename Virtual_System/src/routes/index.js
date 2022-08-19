import { Navigate } from "react-router-dom";
import AlarmDetails from "../page/AlarmDetails";
import AlarmManagement from "../page/AlarmManagement/AlarmManagement";
import AlarmRules from "../page/AlarmRules";
import DefectInformationManagement from "../page/DefectInformationManagement";
import DeviceManagement from "../page/DeviceManagement/DeviceManagement";
import IndicatorRule from "../page/IndicatorRule";

const routes = [
  {
    path: "/alarmmanagement",
    element: <AlarmManagement />,
    children: [
      {
        path: "/alarmdetails",
        element: <AlarmDetails />,
      },
    ],
  },
  {
    path: "/deviceManagement",
    element: <DeviceManagement />,
  },
  {
    path: "/rulemanagement",
    element: <Navigate to="/alarmrules" />,
    children: [
      {
        path: "/alarmrules",
        element: <AlarmRules />,
      },
      {
        path: "/indicatorrules",
        element: <IndicatorRule />,
      },
    ],
  },
  {
    path: "/knowledgegraph",
    element: <DefectInformationManagement />,
    children: [
      {
        path: "/defectinformationmanagement",
        element: <DefectInformationManagement />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/alarmmangement" />,
  },
];
export default routes;
