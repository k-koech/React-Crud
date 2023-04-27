import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css"
import SingleBlog from "./components/SingleBlog";
import AddBlog from "./components/AddBlog";

function App() {

  return (
  <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>} />
         <Route path="about" element={<About/>} />
         <Route path="addblog" element={<AddBlog/>} />
         <Route path="contact" element={<Contact />} />
         <Route path="blog/:id" element={<SingleBlog />} />
       </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
