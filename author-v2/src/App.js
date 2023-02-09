import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Copyright from "./Components/Copyright";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About";
import KidFriendly from "./Components/KidFriendly";
import Thrillers from "./Components/Thrillers";
import BlogSection from "./Components/BlogSection";
import BookInd from "./Components/BookInd";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs/*" element={<BlogSection />} />
        <Route path="/thrillers" element={<Thrillers />} />
        <Route path="/kidfriendly" element={<KidFriendly />} />
        <Route path="/bookind" element={<BookInd />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
      <Copyright />
    </>
  );
}

export default App;
