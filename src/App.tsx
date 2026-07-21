import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Committee from "./pages/Committee";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import Ambassadors from "./pages/Ambassadors";
import Congress2025 from "./pages/prev-congress/Congress2025";
import Congress2026 from "./pages/prev-congress/Congress2026";
import SpeakerDetail from "./pages/SpeakerDetail";
import Participants from "./pages/Participants";

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
              <Route path="/participants" element={<Participants />} />
              <Route path="/ambassadors" element={<Ambassadors />} />
              <Route path="/2025" element={<Congress2025 />} />
              <Route path="/2026" element={<Congress2026 />} />
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
