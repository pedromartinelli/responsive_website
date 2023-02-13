import { useState, useEffect, useRef } from 'react'

import { logo, close, menu } from '../../assets'

import { navLinks } from '../../constants'

import { Container } from './styles'


export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  let menuRef = useRef<any>()

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])

  return (
    <Container>
      <img
        className='w-[124px] h-[32px]'
        src={logo}
        alt="hoobank"
      />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal text-white text-base ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#{nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}
      </ul>

      <div ref={menuRef} className='sm:hidden flex flex-1 justify-end items-center'>
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <img
            className='h-7 w-7 object-contain cursor-pointer focus:border-2 focus:border-white'
            src={isMenuOpen ? close : menu}
            alt="menu"

          />
        </button>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal text-white text-base ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
              >
                <a href={`#{nav.id}`}>
                  {nav.title}
                </a>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container >
  )
}

