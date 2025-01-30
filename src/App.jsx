import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { myRoutes } from "./Routes/Routes";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex">
      {location.pathname !== "/login" &&
        location.pathname !== "/singup" &&
        location.pathname !== "/create" && 
        location.pathname !== "/pixels" && 
       
        location.pathname !== "/create2" &&
        <Sidebar />}
      <Routes>
        {myRoutes.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
