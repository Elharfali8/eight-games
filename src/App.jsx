import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Navbar, Sidebar } from "./components"
import { Games, Home, SingleGame } from "./pages"
import { useState } from "react"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavbar = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <BrowserRouter>
      <Navbar isOpen={isOpen} handleNavbar={handleNavbar} />
      <Sidebar isOpen={isOpen} handleNavbar={handleNavbar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<SingleGame />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
