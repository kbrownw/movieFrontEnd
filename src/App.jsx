import { LandingPage } from "./components/LandingPage/LandingPage.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <>
      <main className="bg-dark-blue">
        <Header />
        <LandingPage />
        <Footer />
      </main>
    </>
  );
}

export default App;
