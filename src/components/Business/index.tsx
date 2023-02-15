import { features } from '../../constants'
import { Button } from '../Button'

import { Container, TitleDiv, H2, P, FeaturesDiv, FeatureCard } from './styles'

export function Business() {
  return (
    <Container id='features'>
      <TitleDiv>
        <H2>
          You do the business, <br className='hidden sm:block' /> we'll handle the money.
        </H2>

        <P>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </P>

        <Button className='mt-10' />
      </TitleDiv>

      <FeaturesDiv >

        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            className={`${index !== features.length - 1 ? 'mb-6' : 'mb-0'}`}
          >
            <div className='w-16 h-16 rounded-full bg-dimBlue flex items-center justify-center'>
              <img
                className='w-[50%] h-[50%] object-contain'
                src={feature.icon}
                alt={`icon of a ${feature.icon}`}
              />
            </div>
            
            <div className='flex-1 flex flex-col ml-3'>
              <h4 className='font-poppins font-semibold text-[18px] leading-[24px] text-white mb-1'>{feature.title}</h4>
              <p className='font-poppins text-[16px] leading-[24px] text-dimWhite'>{feature.content}</p>
            </div>
          </FeatureCard>
        ))}

      </FeaturesDiv>
    </Container >
  )
}

