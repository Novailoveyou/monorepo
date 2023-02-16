import * as React from 'react'
import { ComponentProps } from 'react'
import clsx from 'clsx'
import stls from './Button.module.sass'

const BUTTON = 'button' as const
const A = 'a' as const

type As = typeof BUTTON | typeof A

type ButtonProps<T extends As> = T extends typeof A
  ? { as: T } & ComponentProps<typeof A>
  : { as: T } & ComponentProps<typeof BUTTON> &
      Required<Pick<ComponentProps<typeof BUTTON>, 'type'>>

const Button = <T extends ButtonProps<As>>({
  className,
  as = BUTTON,
  ...props
}: ButtonProps<T['as']>) =>
  React.createElement(
    as,
    { className: clsx(stls[as], className), ...props },
    props.children
  )

export default Button

const Test = () => {
  return (
    <Button as='button' type='button'>
      Test
    </Button>
  )
}
