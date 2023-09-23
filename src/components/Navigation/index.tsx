import TrigramIcon from "../../assets/icons/trigram.svg";
import DashboardIcon from "../../assets/icons/dashboard.svg";
import BranchesIcon from "../../assets/icons/branches.svg";
import VehiclesIcon from "../../assets/icons/vehicles.svg";

// import { ReactComponent as Logo } from "./logo.svg";

import "./index.scss";

interface Props {
  children: JSX.Element;
}

export default function NavigationComponent(props: Props): React.ReactElement {
  return (
    <>
      <div className="navigation">
        <div className="topbar">
          <div className="container">
            <div className="logo">
              <img className="icon" src={TrigramIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="container">
            <div className="link mt-65 active">
              <img src={DashboardIcon} alt="" /> Dashboard
            </div>
            <div className="link">
              <img src={BranchesIcon} alt="" /> Branches
            </div>
            <div className="link">
              <img src={VehiclesIcon} alt="" /> Vehicles
            </div>
          </div>
          <div className="children">{props.children}</div>
        </div>
      </div>
    </>
  );
}
