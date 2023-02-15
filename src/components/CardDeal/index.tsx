import { card } from '../../assets'

import { Button } from '../Button'

import { Container, TitleDiv, H2, P, ImgDiv } from './styles'

export function CardDeal() {
  return (
    <Container id='cards'>
      <TitleDiv>
        <H2>
          Find a better card deal <br className='hidden sm:block' /> in few easy steps.
        </H2>

        <P>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </P>

        <Button className='mt-10' />
      </TitleDiv>

      <ImgDiv >
        <img
          className='w-[100%] h-[100%] relative z-[5]'
          src={card}
          alt='card'
        />

      </ImgDiv>
    </Container >
  )
}

