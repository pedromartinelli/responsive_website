import { FeedbackCard } from '../FeedbackCard'
import { Container, TextDiv, H2, P } from './styles'


export function Testimonials() {
  return (
    <Container id='clients'>

      <div className='absolute z-[0] w-[60%] h-[40%] -right-[50%] rounded-full white__gradient'/>
      <div className='absolute z-[0] w-[70%] h-[70%] -right-[38%] rounded-full blue__gradient'/>
      
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

