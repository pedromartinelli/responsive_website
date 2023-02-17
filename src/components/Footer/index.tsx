import { logo } from '../../assets'
import { footerLinks, socialMedia } from '../../constants'

import { Container, LogoDiv, P, LinksDiv } from './styles'

export function Footer() {
  return (
    <Container>
      <div className='flex items-center justify-center flex-col md:flex-row w-full'>
        <LogoDiv>
          <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain' />
          <P>
            A new way to make the payments easy, reliable and secure.
          </P>
        </LogoDiv>

        <LinksDiv>
          {footerLinks.map((footerLink, i) => (
            <div
              key={`${footerLink}-${i}`}
              className='flex flex-col my-4 ss:my-0 min-w-[150px]'
            >
              <h4 className='font-poppins text-white'>{footerLink.title}</h4>

              <ul className='font-poppins text-dimWhite flex flex-col gap-3 mt-6'>
                {footerLink.links.map((link, i) => (
                  <li className='hover:scale-105 transition-all duration-300' key={`${link}-${i}`}>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </LinksDiv>
      </div>

      <hr className='border-t-dimWhite opacity-40 my-6 md:my-10' />

      <div className='flex items-center justify-center md:justify-between flex-col md:flex-row w-full mb-20 md:mb-0'>
        <div className='flex flex-col md:flex-row items-center ml-4 md:ml-0 mb-4'>
          <span className='font-poppins text-[16px] leading-[24px] text-dimWhite mr-[16px]'>Copyright &copy;</span>
          <span className='font-poppins text-[16px] leading-[24px] text-dimWhite'>2021 HooBank. All Rights Reserved.</span>
        </div>

        <ul className='flex flex-row items-center gap-[30px]'>
          {socialMedia.map((media, i) => (
            <li className='hover:scale-110 transition-all duration-300' key={`${media}-${i}`}>
              <a href="/"><img src={media.icon} alt={`${media.icon}`} /></a>
            </li>
          ))}
        </ul>
      </div>
    </Container >
  )
}

