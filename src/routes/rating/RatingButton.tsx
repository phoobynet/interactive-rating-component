import { MouseEventHandler } from 'react'

type Props = {
  rating: number
  selectedRating?: number
  onClick: MouseEventHandler
}

export default function RatingButton({
  rating,
  selectedRating,
  onClick,
}: Props) {
  return (
    <button
      className={`flex h-[3.1875rem] w-[3.1875rem] cursor-pointer items-center justify-center rounded-full ${
        rating === selectedRating
          ? 'bg-orange text-white'
          : 'bg-dark-blue hover:bg-light-grey hover:text-white'
      } active:bg-orange active:text-white`}
      onClick={onClick}
    >
      <span className="pt-1">{rating}</span>
    </button>
  )
}
