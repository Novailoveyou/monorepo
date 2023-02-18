import * as React from 'react'
import { ComponentProps } from 'react'
import clsx from 'clsx'

const H4_ELEMENT = 'h4'

type H4Props = ComponentProps<typeof H4_ELEMENT> &
  Required<Pick<ComponentProps<typeof H4_ELEMENT>, 'children'>>

const H4 = React.forwardRef<JSX.IntrinsicElements[typeof H4_ELEMENT], H4Props>(
  ({ children, className, ...props }, ref) =>
    React.createElement(
      H4_ELEMENT,
      { className: clsx(className), ref, ...props },
      children
    )
)

export default H4

const Test = () => {
  return <H4>Test</H4>
}
