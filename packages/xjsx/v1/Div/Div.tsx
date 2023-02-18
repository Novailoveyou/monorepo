import * as React from 'react'
import { ComponentProps } from 'react'
import clsx from 'clsx'

const DIV = 'div'

type DivProps = ComponentProps<typeof DIV> &
  Required<Pick<ComponentProps<typeof DIV>, 'children'>>

const Div = React.forwardRef<JSX.IntrinsicElements[typeof DIV], DivProps>(
  ({ children, className, ...props }, ref) =>
    React.createElement(
      DIV,
      { className: clsx(className), ref, ...props },
      children
    )
)

export default Div

const Test = () => {
  return <Div>Test</Div>
}
