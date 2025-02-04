import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div className="flex bg-[#111111]" >
      <Sidebar />
      <Outlet className=" bg-[#000000]" />
    </div>
  )
}

export default Layout
