import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex-1 
  
  flex
  flex-col
  md:flex-row
  flex-wrap

  justify-between
  items-center

  relative
`

export const Card = tw.div`
  max-w-[370px]
  h-auto

  md:mt-20

  flex
  flex-col

  py-[60px]
  px-[40px]

  rounded-[20px]

  feature-card
` 
