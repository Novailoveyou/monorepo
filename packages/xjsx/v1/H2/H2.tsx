import * as React from 'react'
import { ComponentProps } from 'react'
import clsx from 'clsx'

const H2_ELEMENT = 'h2'

type H2Props = ComponentProps<typeof H2_ELEMENT> &
  Required<Pick<ComponentProps<typeof H2_ELEMENT>, 'children'>>

const H2 = React.forwardRef<JSX.IntrinsicElements[typeof H2_ELEMENT], H2Props>(
  ({ children, className, ...props }, ref) =>
    React.createElement(
      H2_ELEMENT,
      { className: clsx(className), ref, ...props },
      children
    )
)

export default H2

const Test = () => {
  return <H2>Test</H2>
}
