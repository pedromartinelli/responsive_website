import tw from 'tailwind-styled-components'

export const Container = tw.div`
  w-full

  bg-primary
  overflow-hidden  
`

export const Header = tw.header`
  px-6 
  sm:px-16 
  
  flex 
  justify-center 
  items-center
`

export const Section = tw.section`
  bg-primary

  flex
  justify-center
  items-start
` 

export const Div = tw.div`
  w-full 
  xl:max-w-[1280px]
`