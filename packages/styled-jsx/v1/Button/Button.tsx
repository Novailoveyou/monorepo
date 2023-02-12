import * as React from 'react'
import { ComponentProps } from 'react'
import clsx from 'clsx'
import { z } from 'zod'
// import stls from './Button.module.sass'

const ROOT = 'button'
const TYPE = 'button'

type As = typeof ROOT | 'a'

export type ButtonProps<T extends As> = T extends 'a'
  ? { as: T } & ComponentProps<'a'>
  : { as: T } & ComponentProps<'button'>

export const Button = <T extends ButtonProps<As>>({
  className,
  as = ROOT,
  ...props
}: ButtonProps<T['as']>) =>
  React.createElement(
    as,
    { className: clsx(className), type: TYPE, ...props },
    props.children
  )

export default Button

export const Test = () => {
  return (
    <Button as='a' href='/'>
      Test
    </Button>
  )
}
