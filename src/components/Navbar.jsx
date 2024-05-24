import { VscGame } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../utils/data";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = ({isOpen, handleNavbar}) => {
  return (
      <nav className='h-20 sticky top-0 right-0 blue-bg-color light-color z-10'>
      <div className="container mx-auto flex justify-between items-center h-full px-4 lg:px-2 xl:px-1">
        
        <div className=''>
                  <Link to='/' className="h-full text-white flex items-center justify-center text-2xl md:text-3xl lg:text-4xl poppins-semibold" >
                  <span className="mr-2"><VscGame size={28} /></span> Logo 
          </Link>
        </div>

          <ul className="hidden lg:flex gap-x-2">
              {navLinks.map((link) => {
              const { id, title, path } = link
              return (
                <li key={id} className="block poppins-regular tracking-wider  ">
                  <NavLink to={path} className='px-5 py-2 rounded-lg text-lg'>
                    {title}
                  </NavLink>
                </li>
              )
            })}
        </ul>
        <div className="flex items-center justify-center lg:hidden">
          <button type="button" onClick={handleNavbar}>
            {isOpen ? <FaTimes color="white" size={27} /> : <FaBarsStaggered size={27} color="white" />}
              </button>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar