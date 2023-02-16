import { NavBar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from '../../components'

import { Container, Section, Div, Header } from "./styles"

export function Home() {
  return (
    <Container>
      <Header>
        <Div>
          <NavBar />
        </Div>
      </Header>

      <Section>
        <Div >
          <Hero />
        </Div>
      </Section>

      <Section>
        <Div >
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
        </Div>
      </Section>

      <Footer />
    </Container>
  )
}

