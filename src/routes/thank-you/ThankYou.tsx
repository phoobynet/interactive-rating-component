import PageContainer from '@/components/PageContainer'
import Panel from '@/components/Panel'
import { useParams } from 'react-router-dom'
import { useEffect, useMemo } from 'react'

export default function ThankYou() {
  const params = useParams<{ rating: string }>()
  const rating = useMemo(() => {
    return Number(params.rating)
  }, [params])

  return (
    <PageContainer>
      <Panel>
        <div className="flex flex-col items-center justify-between">
          <img
            src="/images/illustration-thank-you.svg"
            alt=""
          />
          <div>You selected {rating} out of 5</div>
          <h1 className="pt-8 text-heading-lg text-white">Thank you!</h1>
          <p className="text-center">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </Panel>
    </PageContainer>
  )
}
