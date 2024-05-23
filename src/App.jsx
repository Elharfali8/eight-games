import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Navbar, Sidebar } from "./components"
import { Home } from "./pages"
import { useState } from "react"

function App() {
  const [isOpen, setIsOpen] = useState(true)

  const handleNavbar = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <BrowserRouter>
      <Navbar isOpen={isOpen} handleNavbar={handleNavbar} />
      <Sidebar isOpen={isOpen} handleNavbar={handleNavbar} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
