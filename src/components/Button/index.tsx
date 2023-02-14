import { Container } from './styles'

interface BProps {
  className?: any
}

export function Button({ className }: BProps) {
  return (
    <Container className={className}>
          <span className='font-poppins font-medium text-[18px] text-black'> Get Started </span>
    </Container >
  )
}

