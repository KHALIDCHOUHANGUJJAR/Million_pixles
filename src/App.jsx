import { BrowserRouter, Routes, Route } from "react-router-dom";
import { myRoutes } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import { ContextProvider } from "./Context/Context";

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
      <div className="flex">
        <Toaster />
        <Routes>
          {myRoutes.map((item, index) => (
            <Route key={index} path={item.path} element={item.element}>
              {item.children &&
                item.children.map((child, i) => (
                  <Route key={i} path={child.path} element={child.element} />
                ))}
            </Route>
          ))}
        </Routes>
      </div>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
