import { LandingPage } from "./components/LandingPage/LandingPage.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import { ShowtimesLanding } from "./components/ShowtimesLanding.jsx";
import { ShowtimesWrapper } from "./context/ShowtimesProvider.jsx";

const TheaterIdContext = createContext(null);

function App() {
  const [theaterId, setTheaterId] = useState();
  return (
    <>
      <main className="bg-dark-blue overflow-hidden">
        <Header />
        <ShowtimesWrapper>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path={`/showtimes`} element={<ShowtimesLanding />}></Route>
          </Routes>
        </ShowtimesWrapper>
        <Footer />
      </main>
    </>
  );
}

export default App;
