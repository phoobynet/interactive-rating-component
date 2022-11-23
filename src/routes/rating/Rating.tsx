import { useState } from 'react'
import PageContainer from '@/components/PageContainer'
import Panel from '@/components/Panel'
import InertStarOval from '@/components/InertStarOval'
import RatingButton from '@/components/RatingButton'
import SubmitButton from '@/components/SubmitButton'

export default function Rating() {
  const [selectedRating, setSelectedRating] = useState<number>()
  const ratings = [1, 2, 3, 4, 5]

  const submit = () => {
    console.log('TODO: Submit button')
  }

  return (
    <PageContainer>
      <Panel>
        <div className="pb-8">
          <InertStarOval>
            <img
              src="/images/icon-star.svg"
              alt="Star"
            />
          </InertStarOval>
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
          <SubmitButton
            selectedRating={selectedRating}
            onClick={submit}
          />
        </footer>
      </Panel>
    </PageContainer>
  )
}
