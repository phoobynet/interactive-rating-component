import { useState } from 'react'
import PageContainer from '@/components/PageContainer'
import Panel from '@/components/Panel'
import RatingInertStarOval from './RatingInertStarOval'
import RatingButton from './RatingButton'
import RatingSubmitButton from './RatingSubmitButton'
import { useNavigate } from 'react-router-dom'

export default function Rating() {
  const [selectedRating, setSelectedRating] = useState<number>()
  const ratings = [1, 2, 3, 4, 5]
  const navigate = useNavigate()

  const submit = () => {
    navigate('/thank-you')
  }

  return (
    <PageContainer>
      <Panel>
        <div className="pb-8">
          <RatingInertStarOval>
            <img
              src="/images/icon-star.svg"
              alt="Star"
            />
          </RatingInertStarOval>
        </div>
        <header className="pb-4">
          <h1 className="text-heading-lg text-white">How did we do?</h1>
        </header>
        <main>
          <p className="text-body text-light-grey">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex flex-row justify-between space-x-2 py-8 text-medium-grey">
            {ratings.map((rating) => (
              <RatingButton
                key={rating}
                rating={rating}
                selectedRating={selectedRating}
                onClick={() => setSelectedRating(rating)}
              />
            ))}
          </div>
        </main>
        <footer>
          <RatingSubmitButton
            selectedRating={selectedRating}
            onClick={submit}
          />
        </footer>
      </Panel>
    </PageContainer>
  )
}
