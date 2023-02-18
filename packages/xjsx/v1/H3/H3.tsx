import * as React from 'react'
import { ComponentProps } from 'react'
import clsx from 'clsx'

const H3_ELEMENT = 'h3'

type H3Props = ComponentProps<typeof H3_ELEMENT> &
  Required<Pick<ComponentProps<typeof H3_ELEMENT>, 'children'>>

const H3 = React.forwardRef<JSX.IntrinsicElements[typeof H3_ELEMENT], H3Props>(
  ({ children, className, ...props }, ref) =>
    React.createElement(
      H3_ELEMENT,
      { className: clsx(className), ref, ...props },
      children
    )
)

export default H3

const Test = () => {
  return <H3>Test</H3>
}
