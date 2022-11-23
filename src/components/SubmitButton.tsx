import { MouseEventHandler } from 'react'

export default function SubmitButton({
  selectedRating,
  onClick,
}: {
  selectedRating?: number
  onClick: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        onClick(e)
      }}
      className={`${
        selectedRating
          ? 'cursor-pointer bg-orange text-white'
          : 'cursor-not-allowed bg-light-grey text-gray-700'
      } active: flex h-10 w-full items-center justify-center rounded-full transition-colors duration-100 hover:bg-white hover:text-orange`}
    >
      <span className="pt-1 text-heading-md uppercase">submit</span>
    </button>
  )
}
