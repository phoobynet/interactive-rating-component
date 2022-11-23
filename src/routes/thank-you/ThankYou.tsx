import PageContainer from '@/components/PageContainer'
import Panel from '@/components/Panel'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'

export default function ThankYou() {
  const params = useParams<{ rating: string }>()

  const rating = useMemo(() => {
    return Number(params.rating)
  }, [params])

  return (
    <PageContainer>
      <Panel>
        <header className="flex h-3/4 flex-col items-center justify-between">
          <img
            src="/images/illustration-thank-you.svg"
            alt=""
          />
          <div className="flex h-10 items-center justify-center rounded-3xl bg-dark-blue px-6 pt-1 text-orange">
            You selected {rating} out of 5
          </div>
          <h1 className="text-heading-lg text-white">Thank you!</h1>
        </header>
        <main>
          <p className="mt-4 text-center text-light-grey">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </main>
      </Panel>
    </PageContainer>
  )
}
