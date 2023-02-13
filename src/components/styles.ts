import tw from 'tailwind-styled-components'

export const Container = tw.div`
  m-0
  box-border

  bg-white
  text-sm
  font-sans
  font-normal

  flex
  items-center
  justify-between
  
  p-3

  w-screen
  fixed
`

export const A = tw.a`
  text-[#666666]
  font-normal
  
  hover:text-orange-400
  active:text-orange-600
`

