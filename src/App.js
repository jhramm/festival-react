import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Welcome from "./Components/Welcome";
import OurFestival from "./Components/OurFestival";
import Cards from "./Components/Cards";
import "./App.css";
import FollowUs from "./Components/FollowUs";
import OurHistory from "./Components/OurHistory";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
          <Welcome />
          <OurFestival />
          <OurHistory />
          <Cards />
          <FollowUs />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
