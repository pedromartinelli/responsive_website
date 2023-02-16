import { logo } from '../../assets'
import { footerLinks, socialMedia } from '../../constants'

import { Container, LogoDiv, P, LinksDiv } from './styles'

export function Footer() {
  return (
    <Container>
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
                <li key={`${link}-${i}`}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </LinksDiv>
    </Container >
  )
}

