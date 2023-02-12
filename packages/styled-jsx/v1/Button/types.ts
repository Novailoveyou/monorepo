import { ComponentProps } from 'react'

type As = 'button' | 'a'

export type ButtonProps<T extends As = 'button'> = {
  as?: T
} & ComponentProps<T>
