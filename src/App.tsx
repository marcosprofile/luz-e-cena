import Banner from "./components/Banner/Index"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieSection from "./components/MovieSection"
import Newsletter from "./components/Newsletter"

function App() {

  return (
    <>
      <Header />
      <Banner src="../public/banner-desktop.png" alt="Banner" />
      <MovieSection />
      <Banner src="banner-combo-desktop.png" alt="Combo" />
      <Newsletter />
      <Banner src="tarjeta-desktop.png" alt="Tarjeta" />
      <Footer />
    </>
  )
}

export default App
