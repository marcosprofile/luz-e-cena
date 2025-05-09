import Banner from "./components/Banner/Index"
import Header from "./components/Header"
import MovieSection from "./components/MovieSection"

function App() {

  return (
    <>
      <Header />
      <Banner src="../public/banner-desktop.png" alt="Banner" />
      <MovieSection />
    </>
  )
}

export default App
