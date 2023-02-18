import * as React from 'react'
import { ComponentProps } from 'react'
import clsx from 'clsx'

const H6_ELEMENT = 'h6'

type H6Props = ComponentProps<typeof H6_ELEMENT> &
  Required<Pick<ComponentProps<typeof H6_ELEMENT>, 'children'>>

const H6 = React.forwardRef<JSX.IntrinsicElements[typeof H6_ELEMENT], H6Props>(
  ({ children, className, ...props }, ref) =>
    React.createElement(
      H6_ELEMENT,
      { className: clsx(className), ref, ...props },
      children
    )
)

export default H6

const Test = () => {
  return <H6>Test</H6>
}
