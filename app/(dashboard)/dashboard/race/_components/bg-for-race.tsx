'use client'

import { useParams } from 'next/navigation'
import { type ReactNode } from 'react'
import cls from 'classnames'

const defaultCss = 'w-screen min-h-screen bg-no-repeat bg-cover'

export default function BgForRace({ children }: { children: ReactNode }) {
  const params = useParams() as { name: string }

  if (params.name === 'Human') {
    return (
      <div className={cls(defaultCss, "bg-[url('/races/bg-human.svg')]")}>
        {children}
      </div>
    )
  }

  if (params.name === 'Elf') {
    return (
      <div className={cls(defaultCss, "bg-[url('/races/bg-elf.svg')]")}>
        {children}
      </div>
    )
  }

  if (params.name === 'Dwarf') {
    return (
      <div className={cls(defaultCss, "bg-[url('/races/bg-dwarf.svg')]")}>
        {children}
      </div>
    )
  }

  if (params.name === 'Ainur') {
    return (
      <div className={cls(defaultCss, "bg-[url('/races/bg-ainur.svg')]")}>
        {children}
      </div>
    )
  }

  if (params.name === 'Orc') {
    return (
      <div className={cls(defaultCss, "bg-[url('/races/bg-orc.svg')]")}>
        {children}
      </div>
    )
  }

  if (params.name === 'Hobbit') {
    return (
      <div className={cls(defaultCss, "bg-[url('/races/bg-hobbit.svg')]")}>
        {children}
      </div>
    )
  }

  return <div>{children}</div>
}
