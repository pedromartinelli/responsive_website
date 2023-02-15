import { FeedbackCard } from '../FeedbackCard'
import { Container, TextDiv, H2, P } from './styles'


export function Testimonials() {
  return (
    <Container>
      <TextDiv>
        <H2>
          What people are <br className='hidden sm:block' /> saying about us
        </H2>

        <P>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </P>
      </TextDiv>

      <FeedbackCard />
    </Container >
  )
}

