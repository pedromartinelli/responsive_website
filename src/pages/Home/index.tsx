import { NavBar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from '../../components'

import { Container, Section } from "./styles"

export function Home() {
  return (
    <Container>
      <div className='px-6 sm:px-16 flex justify-center items-center'>
        <div className='w-full xl:max-w-[1280px]'>
          <NavBar />
        </div>
      </div>

      <Section>
        <div className="w-full xl:max-w-[1280px]">
          <Hero />
        </div>
      </Section>

      <Section className="px-6 sm:px-16">
        <div className="w-full xl:max-w-[1280px]">

        </div>
      </Section>
    </Container>
  )
}

