import { ComponentProps } from 'react'
import clsx from 'clsx'
import XJsxButton from 'xjsx/v1/Button'
import XJsxA from 'xjsx/v1/A'
import NextLink from 'next-wrappers/v1/NextLink'
import classNames from './Button.module.sass'

const BUTTON = 'button'
const A = 'a'
const NEXT_LINK = 'NextLink'

type ElementType = typeof BUTTON | typeof A | typeof NEXT_LINK

type AdditionalProps<T extends ElementType> = {
  elementType: T
  variant: 'nova'
  size: 'lg'
  theme: 'primary'
}

type ButtonProps<T extends ElementType> = T extends typeof A
  ? AdditionalProps<T> & ComponentProps<typeof XJsxA>
  : T extends typeof NEXT_LINK
  ? AdditionalProps<T> & ComponentProps<typeof NextLink>
  : AdditionalProps<T> & ComponentProps<typeof XJsxButton>

const Button = <T extends ButtonProps<ElementType>>({
  elementType,
  variant,
  size,
  theme,
  ...props
}: ButtonProps<T['elementType']>) => {
  const className = clsx(
    classNames[variant],
    classNames[`${variant}--size-${size}`],
    classNames[`${variant}--theme-${theme}`],
    props.className
  )

  if (elementType === A)
    // @ts-expect-error - TS doesn't understand that props are valid
    return <XJsxA {...props} className={className} />

  if (elementType === NEXT_LINK)
    // @ts-expect-error - TS doesn't understand that props are valid
    return <NextLink {...props} className={className} />

  return (
    // @ts-expect-error - TS doesn't understand that props are valid
    <XJsxButton {...props} className={className} />
  )
}

export default Button

const Test = () => {
  return (
    <Button
      elementType='NextLink'
      href='/'
      variant='nova'
      size='lg'
      theme='primary'>
      Test
    </Button>
  )
}
