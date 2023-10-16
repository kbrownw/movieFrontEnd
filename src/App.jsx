import { LandingPage } from "./components/LandingPage/LandingPage.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main className="bg-dark-blue overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/showtimes" element={<h1>Hello world</h1>}></Route>
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
