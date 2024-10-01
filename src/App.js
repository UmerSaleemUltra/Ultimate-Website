import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./website/pages/Home";
import './App.css';
import Pricing from "./website/pages/Pricing";
import About from "./website/pages/About";
import FaqPage from "./website/pages/FaqPage"
import Contact from "./website/pages/Contact";
import CompanyNameSearch from "./website/pages/CompanyNameSearch";
import StateFees from "./website/pages/StateFees";
import Starts from "./website/pages/Starts";
import Register from "./website/pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Pricing />} path="/pricing" />
          <Route element={<About />} path="/about" />
          <Route element={<FaqPage />} path="/faq" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<CompanyNameSearch />} path="/company" />
          <Route element={<StateFees />} path="/statefees" />
          <Route element={<Starts />} path="/start" />
          <Route element={<Register />} path="/register" />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
