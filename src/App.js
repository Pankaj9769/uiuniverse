import { Button } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Upload from "./components/Upload";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/videos" element={<Videos />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
