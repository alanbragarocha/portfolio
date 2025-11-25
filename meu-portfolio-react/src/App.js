import "./styles/main.css";
import "./styles/variables.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";

// Componente para controlar o scroll ao trocar de rota
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(ScrollToTop),
    React.createElement(Header),
    React.createElement(
      Routes,
      null,
      React.createElement(Route, {
        path: "/",
        element: React.createElement(Home),
      }),
      React.createElement(Route, {
        path: "/sobre",
        element: React.createElement(About),
      })
    ),
    React.createElement(Footer)
  );
}

export default App;
