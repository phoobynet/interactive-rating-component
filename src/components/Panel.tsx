import { PropsWithChildren } from 'react'

export default function Panel({ children }: PropsWithChildren) {
  return (
    <div className="to h-[416px] w-[412px] rounded-3xl bg-gradient-to-b from-black-gradient-start to-black-gradient-end p-8">
      {children}
    </div>
  )
}
