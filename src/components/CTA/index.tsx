import { Button } from '../Button'

import { Container, TextDiv, H2, P } from './styles'

export function CTA() {
  return (
    <Container>
      <TextDiv>
        <H2>
          Let's try our service now!
        </H2>

        <P>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </P>

      </TextDiv>

      <Button className='mt-10' />
    </Container >
  )
}

