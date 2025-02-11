import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full flex bg-[#111111] min-h-screen">
      <div className="w-[20%] fixed h-screen">
        <Sidebar />
      </div>

      <div className="w-[100%] ml-[20%] flex flex-col">
        <Header />
        <div className="flex-1  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
