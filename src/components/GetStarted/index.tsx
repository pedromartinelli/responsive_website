import { Container, InsideCircle, Text } from './styles'

import { arrowUp } from '../../assets'

export function GetStarted() {
  return (
    <Container>
      <InsideCircle>
        
        <div className='flex flex-row justify-center items-start'>
          <Text className='mr-2'>
            <span className='text-gradient'>Get</span>
          </Text>
          <img
            className='w-[23px] h-[23px] object-contain'
            src={arrowUp}
            alt="arrow"
          />
        </div>

        <Text>
          <span className='text-gradient'>Started</span>
        </Text>
      </InsideCircle>
    </Container >
  )
}

