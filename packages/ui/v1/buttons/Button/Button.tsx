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

type UI = 'nova'

type Size = 'lg'

type Theme = 'primary'

type AdditionalProps<T> = {
  elementType: T
  variant: `${UI}-${Size}-${Theme}`
}

type ButtonProps<T extends ElementType> = T extends typeof A
  ? AdditionalProps<T> & ComponentProps<typeof XJsxA>
  : T extends typeof NEXT_LINK
  ? AdditionalProps<T> & ComponentProps<typeof NextLink>
  : AdditionalProps<T> & ComponentProps<typeof XJsxButton>

const Button = <T extends ButtonProps<ElementType>>({
  elementType,
  variant,
  ...props
}: ButtonProps<T['elementType']>) => {
  const ui = variant.split('-')[0] as string // TODO: improve types to use Infer
  const size = variant.split('-')[1] as string // TODO: improve types to use Infer
  const theme = variant.split('-')[2] as string // TODO: improve types to use Infer

  const className = clsx(
    classNames[ui],
    classNames[`${ui}--size-${size}`],
    classNames[`${ui}--theme-${theme}`]
  )

  if (elementType === A)
    return (
      // @ts-expect-error - TS doesn't understand that props are valid
      <XJsxA {...props} className={className} />
    )

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
    <Button elementType='NextLink' href='/' variant='nova-lg-primary'>
      Test
    </Button>
  )
}
