import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex-1
  
  flex
  flex-col
  md:flex-row
  
  items-center
  justify-center
  md:justify-between

  mt-8

  py-6
  sm:py-16 

  px-6
  sm:px-24

  bg-black-gradient
  shadow-[0_20px_100px_-10px_rgba(66,71,91,0.1)]

  rounded-[20px]
`

export const TextDiv = tw.div`
  flex-1 
  flex
  flex-col
  
  justify-center
  items-center
  xs:items-start

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
