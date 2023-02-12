import { ComponentProps } from 'react'

type As = 'button' | 'a'

export type ButtonProps<T extends As> = T extends 'a'
  ? { as: T } & ComponentProps<'a'>
  : { as: T } & ComponentProps<'button'>
