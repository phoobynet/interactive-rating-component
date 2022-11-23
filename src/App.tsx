import Rating from '@/routes/rating/Rating'
import { Route, Routes } from 'react-router-dom'
import ThankYou from '@/routes/thank-you/ThankYou'

export default function App() {
  return (
    <Routes>
      <Route
        index
        element={<Rating />}
      />
      <Route
        path="/thank-you/:rating"
        element={<ThankYou />}
      />
    </Routes>
  )
}
