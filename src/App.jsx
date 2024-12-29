import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Collaborate from "./components/Collaborate";
import Explore from "./components/Explore";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Benefits />
                  <Collaboration />
                  <Services />
                  <Pricing />
                  <Roadmap />
                </>
              }
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/collaborate" element={<Collaborate />} />
          </Routes>
        </div>
        <Footer />
        <ButtonGradient />
      </div>
    </>
  );
};

export default App;
