import * as React from 'react'
import clsx from 'clsx'
import { ButtonProps } from './types'
import { ROOT, TYPE } from './constants'
// import stls from './Button.module.sass'

export const Button = ({ className, as, ...props }: ButtonProps<'button'>) => {
  const root = as || ROOT
  // const type = root === ''

  return React.createElement(
    root,
    { className: clsx(className), type: TYPE, ...props },
    props.children
  )
}

export default Button
