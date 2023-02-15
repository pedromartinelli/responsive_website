import { clients } from '../../constants'

import { Container } from './styles'

export function Clients() {
  return (
    <Container>
      {clients.map((client, index) => (
        <img
          className={`w-[120px] md:w-[190px] ${index === 2 ? 'mb-3' : ''}`}
          key={client.id}
          src={client.logo}
          alt={`${client.logo}`}
        />
      ))}
    </Container >
  )
}

