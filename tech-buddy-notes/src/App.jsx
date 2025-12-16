import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Notes from "./pages/Notes.jsx"
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import Resources from "./pages/Resources.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

      <Footer />
    </Router>

    
  );
}

export default App;
