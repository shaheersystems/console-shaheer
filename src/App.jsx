import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className='App font-inter'>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/products' element={<Products />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/stack' element={<Stack />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Container>
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
