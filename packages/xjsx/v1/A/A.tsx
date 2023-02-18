import * as React from 'react'
import { ComponentProps } from 'react'
import clsx from 'clsx'
import classNames from './A.module.sass'

const A_ELEMENT = 'a'

type AProps = ComponentProps<typeof A_ELEMENT>

const A = React.forwardRef<JSX.IntrinsicElements[typeof A_ELEMENT], AProps>(
  ({ children, className, ...props }, ref) =>
    React.createElement(
      A_ELEMENT,
      { className: clsx(classNames.a, className), ref, ...props },
      children
    )
)

export default A

const Test = () => {
  return <A>Test</A>
}
