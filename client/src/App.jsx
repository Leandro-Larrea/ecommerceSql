import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Landing } from "./components/Landing";
import { Login } from "./components/Login";
import { ProductDetails } from "./components/ProductDetails";
import { PrivateRoute } from "./components/PrivateRouter";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/details/:id" Component={ProductDetails} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
