import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Events from "./components/Events";
import Locations from "./components/Locations";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <section className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
