import Banner from "./components/Banner/Index"
import Button from "./components/Button"
import Link from "./components/Link"

function App() {

  return (
    <>
      <Banner src="../public/banner-desktop.png" alt="Banner" />
      <Link href="/" target="_blank">Link</Link>
      <Button variant="default">Botão</Button>
    </>
  )
}

export default App
