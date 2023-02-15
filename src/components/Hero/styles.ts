import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex
  flex-col
  md:flex-row

  py-6 
  sm:py-16
`
export const MainDiv = tw.div`
  flex-1 
  flex 
  flex-col 
  
  justify-center 
  items-start 
 
`
export const DiscountDiv = tw.div`
  flex 
  flex-row 
  items-center 
  
  mb-2
  py-[6px] 
  px-4 
  
  bg-discount-gradient 
  rounded-[10px] 
`

export const BigTextDiv = tw.div`
  flex 
  flex-row 
  justify-between 
  items-center 
  
  w-full
` 

export const H1Text = tw.h1`
flex-1

text-white 
font-poppins 
font-semibold 

text-[52px] 
ss:text-[72px] 

leading-[75px] 
ss:leading-[100px] 
` 

