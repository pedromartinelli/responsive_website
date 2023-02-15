import { quotes } from '../../assets'

import { feedbacks } from '../../constants'

import { Container, Card } from './styles'

export function FeedbackCard() {
  console.log(feedbacks.length - 1)
  return (
    <Container>

      {feedbacks.map((feedback, index) => (
        <Card 
          key={feedback.id}
          className={`${index === 0 ? 'mt-10' : 'mt-5'} ${index !== feedbacks.length - 1 ? 'mr-0' : 'mr-6'}`}
        >
          <img src={quotes} alt="quote" className='w-[42px] h-[27px]' />
          <p className='font-poppins text-[18px] leading-[32px] text-white mb-6 mt-10 h-[128px]'>{feedback.content}</p>

          <div className='flex items-center justify-center gap-4'>
            <img src={feedback.img} alt="image profile" className='w-12 h-12' />
            <div className='flex flex-col'>
              <span className='font-poppins text-[20px] leading-[32px] text-white'>{feedback.name}</span>
              <span className='font-poppins text-[16px] leading-[24px] text-dimWhite'>{feedback.title}</span>
            </div>
          </div>
        </Card>
      ))}

    </Container >
  )
}

