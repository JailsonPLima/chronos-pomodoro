import { Container } from './components/Container'
import { Heading } from './components/Heading'

import './styles/theme.css'

import './styles/global.css'

export const App = () => {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  )
}
