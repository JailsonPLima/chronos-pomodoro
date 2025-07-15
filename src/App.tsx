import { Heading } from './components/Heading'

import './styles/theme.css'

import './styles/global.css'

export const App = () => {
  console.log('Hello')

  return (
    <>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        temporibus perspiciatis odio harum, pariatur eum amet eaque perferendis
        recusandae numquam tempore aperiam. Quos obcaecati recusandae molestiae
        reprehenderit, placeat ipsum ratione!
      </p>
    </>
  )
}
