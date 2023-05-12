import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Landing } from "./components/Landing";
import { Login } from "./components/Login";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/details/:id" Component={ProductDetails} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
