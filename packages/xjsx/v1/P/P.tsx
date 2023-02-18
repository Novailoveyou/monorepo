import * as React from 'react'
import { ComponentProps } from 'react'
import clsx from 'clsx'

const P_ELEMENT = 'p'

type PProps = ComponentProps<typeof P_ELEMENT> &
  Required<Pick<ComponentProps<typeof P_ELEMENT>, 'children'>>

const P = React.forwardRef<JSX.IntrinsicElements[typeof P_ELEMENT], PProps>(
  ({ children, className, ...props }, ref) =>
    React.createElement(
      P_ELEMENT,
      { className: clsx(className), ref, ...props },
      children
    )
)

export default P

const Test = () => {
  return <P>Test</P>
}
