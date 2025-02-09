import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AddTaskIcon from "@mui/icons-material/AddTask";
import "./Sidebar.css";
import { Outlet, Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div className="side">
        <Link to="/">
          <p>
            <HomeIcon style={{ paddingRight: "10px" }} />
            HOME
          </p>
        </Link>
        <Link to="/AddStudent">
          <p>
            <InfoIcon style={{ marginRight: "10px" }} />
            ADD STUDENT
          </p>
        </Link>
        <Link to="/TaskTracker">
          <p>
            <AddTaskIcon style={{ marginRight: "10px" }} />
            TASK TRACKER
          </p>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Sidebar;
