import { LandingPage } from "./components/LandingPage/LandingPage.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import { ShowtimesLanding } from "./components/ShowtimesLanding.jsx";
import { ShowtimesWrapper } from "./context/ShowtimesProvider.jsx";
import { TheaterListWrapper } from "./context/TheaterListContext.jsx";

const TheaterIdContext = createContext(null);

function App() {
  const [theaterId, setTheaterId] = useState();
  return (
    <>
      <main className="bg-dark-blue overflow-hidden">
        <Header />
        <ShowtimesWrapper>
          <TheaterListWrapper>
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route
                path={`/showtimes`}
                element={
                  <section className="grid grid-cols-1 gap-10 max-w-6xl lg:px-0 px-4 pb-10 mx-auto relative">
                    <ShowtimesLanding />
                  </section>
                }
              ></Route>
            </Routes>
          </TheaterListWrapper>
        </ShowtimesWrapper>
        <Footer />
      </main>
    </>
  );
}

export default App;
