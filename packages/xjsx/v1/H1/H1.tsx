import * as React from 'react'
import { ComponentProps } from 'react'
import clsx from 'clsx'

const H1_ELEMENT = 'h1'

type H1Props = ComponentProps<typeof H1_ELEMENT> &
  Required<Pick<ComponentProps<typeof H1_ELEMENT>, 'children'>>

const H1 = React.forwardRef<JSX.IntrinsicElements[typeof H1_ELEMENT], H1Props>(
  ({ children, className, ...props }, ref) =>
    React.createElement(
      H1_ELEMENT,
      { className: clsx(className), ref, ...props },
      children
    )
)

export default H1

const Test = () => {
  return <H1>Test</H1>
}
