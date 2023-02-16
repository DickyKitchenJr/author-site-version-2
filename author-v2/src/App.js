import React, { lazy, Suspense } from "react";
import "./App.css";
import ScrollToTop from "./Helpers/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Copyright from "./Components/Copyright";
import LandingPage from "./Components/LandingPage";
// import About from "./Components/About";
import KidFriendly from "./Components/KidFriendly";
import Thrillers from "./Components/Thrillers";
// import BlogSection from "./Components/BlogSection";
import BookInd from "./Components/BookInd";

const About = lazy(() => import('./Components/About'));
const BlogSection = lazy(() => import("./Components/BlogSection"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
        path="/about" 
        element={ <Suspense fallback={ <h1 style={{ padding: "10rem" }}>Fetching the awesomeness...</h1>}>
          <About />
          </Suspense>}/>
        <Route
          path="/blogs/*"
          element={
            <Suspense fallback={<h1 style={{ padding: "10rem" }}>Fetching the awesomeness...</h1>}>
              <BlogSection />
            </Suspense>
          }
        />

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
