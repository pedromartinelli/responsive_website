import { bill, apple, google } from '../../assets'

import { Container, TextDiv, H2, P, ImgDiv } from './styles'

export function Billing() {
  return (
    <Container id='billing'>
      <ImgDiv>
        <img
          className='w-[100%] h-[100%] relative z-[5]'
          src={bill}
          alt='billing'
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </ImgDiv>

      <TextDiv>
        <H2>
          Easily control your <br className='hidden sm:block' /> billing & invoicing.
        </H2>

        <P>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </P>

        <div className='flex flex-row mt-8 sm:mt-10 justify-center'>
          <img src={apple} alt="app store" className='object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google play" className='object-contain mr-5 cursor-pointer ' />
        </div>
      </TextDiv>

    </Container >
  )
}

