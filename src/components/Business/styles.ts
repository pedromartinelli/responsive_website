import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex
  flex-col
  md:flex-row

  py-6
  sm:py-16 
`

export const TitleDiv = tw.div`
  flex-1 
  flex
  flex-col
  
  justify-center
  items-center
  xs:items-start
`

// text-center
// xs:text-left
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

export const FeaturesDiv = tw.div`
  flex-1 
  
  flex
  flex-col
  justify-center
  items-center

  ml-0 
  md:ml-32 
  
  mt-10 
  md:mt-0

  relative
`

export const FeatureCard = tw.div`
  max-w-[480px]

  flex
  flex-row

  p-6

  rounded-[20px]

  feature-card
` 

