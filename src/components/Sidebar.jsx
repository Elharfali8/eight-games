import React from 'react'
import { navLinks } from '../utils/data'
import { NavLink } from 'react-router-dom'

const Sidebar = ({isOpen, handleNavbar}) => {
  return (
    <aside className={`
      text-white p-6
    ${isOpen ? 'lg:hidden fixed right-0 left-0 bottom-0 top-20 light-blue-bg-color translate-x-0 transition-all ease-in-out duration-150 ' : 'lg:hidden fixed right-0 left-0 bottom-0 top-20 light-blue-bg-color translate-x-[-100%] transition-all ease-in-out duration-150 '}
    `}>
      <ul className='grid gap-6'>
        {navLinks.map((link) => {
          const { id, path, title } = link
          return (
            <li key={id} className='block '>
              <NavLink to={path} className='block w-full rounded-lg px-2 py-1 text-lg tracking-wider poppins-regular transition-all ease-in-out duration-150 hover:pl-4 ' onClick={handleNavbar}>
              {title}
            </NavLink>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar