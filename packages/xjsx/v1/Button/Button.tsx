import * as React from 'react'
import { ComponentProps } from 'react'
import clsx from 'clsx'
import classNames from './Button.module.sass'

const BUTTON = 'button'

type ButtonProps = ComponentProps<typeof BUTTON> &
  Required<Pick<ComponentProps<typeof BUTTON>, 'children'>> &
  Required<Pick<ComponentProps<typeof BUTTON>, 'type'>>

const Button = React.forwardRef<
  JSX.IntrinsicElements[typeof BUTTON],
  ButtonProps
>(({ children, className, ...props }, ref) =>
  React.createElement(
    BUTTON,
    { className: clsx(classNames.button, className), ref, ...props },
    children
  )
)

export default Button

const Test = () => {
  return <Button type='button'>Test</Button>
}
