import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex
  flex-col

  py-6
  sm:py-16 
`

export const TextDiv = tw.div`
  flex-1 
  flex
  flex-col
  md:flex-row
  
  justify-center
  md:justify-between
  items-center

  pr-12
`

export const H2 = tw.h2`
  font-poppins
  font-semibold
  text-white

  text-[40px]
  xs:text-[48px]

  leading-[66.8px]
  xs:leading-[76.8px]
`

export const P = tw.p`
  font-poppins
  font-normal
  text-dimWhite

  text-[18px]
  leading-[30.8px]

  mt-5
  max-w-[470px]
`