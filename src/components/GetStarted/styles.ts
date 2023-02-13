import tw from 'tailwind-styled-components'

export const Container = tw.button`
  flex 
  justify-center 
  items-center

  w-[140px]
  h-[140px]
  p-[2px]

  rounded-full
  bg-blue-gradient

  cursor-pointer

  hover:scale-110
  transition-all
  duration-300
`

export const InsideCircle = tw.div`
  flex 
  justify-center 
  items-center

  flex-col

  bg-primary
  w-full
  h-full
  rounded-full
`
export const Text = tw.p`
  font-poppins 
  font-medium 
  text-[18px] 
  leading-[23px]
`

