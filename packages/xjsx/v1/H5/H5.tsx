import * as React from 'react'
import { ComponentProps } from 'react'
import clsx from 'clsx'

const H5_ELEMENT = 'h5'

type H5Props = ComponentProps<typeof H5_ELEMENT> &
  Required<Pick<ComponentProps<typeof H5_ELEMENT>, 'children'>>

const H5 = React.forwardRef<JSX.IntrinsicElements[typeof H5_ELEMENT], H5Props>(
  ({ children, className, ...props }, ref) =>
    React.createElement(
      H5_ELEMENT,
      { className: clsx(className), ref, ...props },
      children
    )
)

export default H5

const Test = () => {
  return <H5>Test</H5>
}
