import { Outlet } from "react-router-dom";

import "./Root.css";
import NavBar from "../../components/NavBar/NavBar";

function Root() {
  return (
    <div className="pb-8">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Root;
