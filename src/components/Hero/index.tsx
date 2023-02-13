import { discount, robot } from '../../assets'
import { GetStarted } from '../GetStarted'

import { Container, MainDiv, DiscountDiv, BigTextDiv, H1Text } from './styles'

export function Hero() {
  return (
    <Container id='home'>
      <MainDiv>
        <DiscountDiv>
          <img
            className='w-8 h-8'
            src={discount}
            alt="discount"
          />

          <p className='font-poppins font-normal text-dimWhite text-lg leading-[30.8px] ml-2'>
            <span className='text-white'> 20% </span>
            Discount for
            <span className='text-white'> 1 Month </span>
            Account
          </p>
        </DiscountDiv>

        <BigTextDiv >
          <H1Text>
            The Next <br className='hidden sm:block' />
            <span className='text-gradient'> Generation </span>
          </H1Text>

          <div className='hidden ss:flex mr-0 md:mr-4'>
            <GetStarted />
          </div>
        </BigTextDiv>

        <H1Text className='ss:text-[68px]'>
          Payment Method.
        </H1Text>

        <p className='font-poppins font-normal text-dimWhite text-lg leading-[30.8px] max-w-[470px] mt-5'>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.
        </p>
      </MainDiv>

      <div className='flex-1 flex justify-center items-center my-10 md:my-0 relative'>
        <img
          className='w-full h-full relative z-index[5]'
          src={robot}
          alt="billing"
        />

        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </div>

      <div className='flex justify-center items-center ss:hidden'>
        <GetStarted />
      </div>
    </Container >
  )
}

