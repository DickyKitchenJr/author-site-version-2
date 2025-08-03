import React, { lazy, Suspense } from "react";
import "./App.css";
import ScrollToTop from "./Helpers/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Copyright from "./Components/Copyright";
import LandingPage from "./Components/LandingPage";

const About = lazy(() => import("./Components/About"));
const BlogSection = lazy(() => import("./Components/BlogSection"));
const Thrillers = lazy(() => import("./Components/Thrillers"));
const KidFriendly = lazy(() => import("./Components/KidFriendly"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/about"
          element={
            <Suspense
              fallback={
                <h1 style={{ padding: "10rem" }}>
                  Fetching the awesomeness...
                </h1>
              }
            >
              <About />
            </Suspense>
          }
        />

        <Route
          path="/blogs/*"
          element={
            <Suspense
              fallback={
                <h1 style={{ padding: "10rem" }}>
                  Fetching the awesomeness...
                </h1>
              }
            >
              <BlogSection />
            </Suspense>
          }
        />

        <Route
          path="/thrillers"
          element={
            <Suspense
              fallback={
                <h1 style={{ padding: "10rem" }}>
                  Fetching the awesomeness...
                </h1>
              }
            >
              <Thrillers />
            </Suspense>
          }
        />

        <Route
          path="/kidfriendly"
          element={
            <Suspense
              fallback={
                <h1 style={{ padding: "10rem" }}>
                  Fetching the awesomeness...
                </h1>
              }
            >
              <KidFriendly />
            </Suspense>
          }
        />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
      <Copyright />
    </>
  );
}

export default App;
