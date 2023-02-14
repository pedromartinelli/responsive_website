import { stats } from '../../constants'

import { Container, Span } from './styles'

export function Stats() {
  return (
    <Container>

      {stats.map((stat, index) => (
        <div
          className='flex-1 flex items-center sm:justify-center flex-col sm:flex-row m-3'
          key={stat.id}
        >
          <Span>{stat.value}</Span>
          <Span className='ml-3 font-normal text-gradient uppercase text-[15px] xs:text-[20px] leading-[21px] xs:leading-[26px]'>{stat.title}</Span>
        </div>

      ))}


    </Container >
  )
}

