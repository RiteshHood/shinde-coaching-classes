import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Wrapper that enables routing using URLs like /, /about, /contact, etc. */}

        {/* Container that contains all the routes */}
        <Routes>

          {/* Route is defined as single individual page: Home, About, Contact, etc. */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
