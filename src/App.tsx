import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/global.css';
import Layout from "./pages/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Contact from "./pages/contact";
import NoPage from "./pages/nopage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
