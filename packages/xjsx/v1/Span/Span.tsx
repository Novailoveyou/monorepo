import * as React from 'react'
import { ComponentProps } from 'react'
import clsx from 'clsx'

const SPAN = 'span'

type SpanProps = ComponentProps<typeof SPAN> &
  Required<Pick<ComponentProps<typeof SPAN>, 'children'>>

const Span = React.forwardRef<JSX.IntrinsicElements[typeof SPAN], SpanProps>(
  ({ children, className, ...props }, ref) =>
    React.createElement(
      SPAN,
      { className: clsx(className), ref, ...props },
      children
    )
)

export default Span

const Test = () => {
  return <Span>Test</Span>
}
