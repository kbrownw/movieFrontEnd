import { LandingPage } from "./components/LandingPage.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import { ShowtimesLanding } from "./components/ShowtimesLanding.jsx";
import { ShowtimesWrapper } from "./context/ShowtimesProvider.jsx";
import { TheaterListWrapper } from "./context/TheaterListContext.jsx";
import { ContactMe } from "./components/ContactMe.jsx";

function App() {
  return (
    <>
      <main className="bg-dark-blue overflow-hidden">
        <ShowtimesWrapper>
          <TheaterListWrapper>
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route
                path="/showtimes"
                element={
                  <section className="grid grid-cols-1 gap-10 max-w-6xl lg:px-0 px-4 pb-10 mx-auto relative">
                    <ShowtimesLanding />
                  </section>
                }
              ></Route>
              <Route path="/contact" element={<ContactMe />}></Route>
            </Routes>
          </TheaterListWrapper>
        </ShowtimesWrapper>
        <Footer />
      </main>
    </>
  );
}

export default App;
