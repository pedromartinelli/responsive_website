import tw from 'tailwind-styled-components'

// flex
// items-center
// justify-center
export const Container = tw.footer`

  flex-col

  py-6
  sm:py-16

  w-full 
  xl:max-w-[1280px]
  mx-auto

  px-6 
  sm:px-16  
  xl:px-0 

  mt-8
  md:mt-20
`

export const LogoDiv = tw.div`
  flex-1
  
  flex
  flex-col
  justify-start
  
  mr-10
`

export const P = tw.p`
  font-poppins
  font-normal
  text-dimWhite

  text-[18px]
  leading-[30.8px]

  mt-4

  max-w-[310px]
`

export const LinksDiv = tw.div`
  w-full
  
  flex-[1.5]
  
  flex
  flex-row
  justify-between
  flex-wrap

  mt-10
  md:mt-0
`

