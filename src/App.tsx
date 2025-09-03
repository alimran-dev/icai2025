import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Committee from "./pages/Committee";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import Ambassadors from "./pages/Ambassadors";
import Congress2024 from "./pages/prev-congress/2024-congress";
import Congress2023 from "./pages/prev-congress/2023";
import Congress2022 from "./pages/prev-congress/2022";
import SpeakerDetail from "./pages/SpeakerDetail";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/speakers" element={<Speakers />} />
              {/* <Route path="/call-for-papers" element={<CallForPapers />} /> */}
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/ambassadors" element={<Ambassadors />} />
              <Route path="/2024" element={<Congress2024 />} />
              <Route path="/2023" element={<Congress2023 />} />
              <Route path="/2022" element={<Congress2022 />} />
              <Route path="/speakers/:id" element={<SpeakerDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
