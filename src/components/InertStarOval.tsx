import { PropsWithChildren } from 'react'

export default function InertStarOval({ children }: PropsWithChildren) {
  return (
    <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-dark-blue">
      {children}
    </div>
  )
}
