import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import AdminHome from "./components/Admin/AdminHome";
import AdminAddMovies from "./components/Admin/AdminAddMovies";
import AdminViewMovies from "./components/Admin/AdminViewMovies";

const App = () => (
  <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Welcome />} />
      <Route path="/AdminHome" element={<AdminHome />} />
      <Route path="/AdminAddMovies" element={<AdminAddMovies />} />
      <Route path="/AdminViewMovies" element={<AdminViewMovies />} />
    </Routes>
  </Router>
);

export default App;
