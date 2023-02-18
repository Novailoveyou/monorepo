import { ComponentProps } from 'react'
import clsx from 'clsx'
import XJsxH1 from 'xjsx/v1/H1'
import XJsxH2 from 'xjsx/v1/H2'
import XJsxH3 from 'xjsx/v1/H3'
import XJsxH4 from 'xjsx/v1/H4'
import XJsxH5 from 'xjsx/v1/H5'
import XJsxH6 from 'xjsx/v1/H6'
import XJsxP from 'xjsx/v1/P'
import XJsxDiv from 'xjsx/v1/Div'
import XJsxSpan from 'xjsx/v1/Span'
import classNames from './Text.module.sass'

const H1 = 'h1'
const H2 = 'h2'
const H3 = 'h3'
const H4 = 'h4'
const H5 = 'h5'
const H6 = 'h6'
const P = 'p'
const DIV = 'div'
const SPAN = 'span'

type ElementType =
  | typeof H1
  | typeof H2
  | typeof H3
  | typeof H4
  | typeof H5
  | typeof H6
  | typeof P
  | typeof DIV
  | typeof SPAN

type Variant = 'nova' | 'test'

type AdditionalProps<T, V> = {
  elementType: T
  variant?: V
  size?: V extends 'nova' ? '82' | '47' | '51' | '22' | '20' | '18' : never
  fontWeight?: 300 | 400 | 500 | 700
  lineHeight?: '100' | '120'
  theme?: 'light'
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize'
}

type TextProps<T extends ElementType, V extends Variant> = T extends typeof H1
  ? AdditionalProps<T, V> & ComponentProps<typeof XJsxH1>
  : T extends typeof H2
  ? AdditionalProps<T, V> & ComponentProps<typeof XJsxH2>
  : T extends typeof H3
  ? AdditionalProps<T, V> & ComponentProps<typeof XJsxH3>
  : T extends typeof H4
  ? AdditionalProps<T, V> & ComponentProps<typeof XJsxH4>
  : T extends typeof H5
  ? AdditionalProps<T, V> & ComponentProps<typeof XJsxH5>
  : T extends typeof H6
  ? AdditionalProps<T, V> & ComponentProps<typeof XJsxH6>
  : T extends typeof P
  ? AdditionalProps<T, V> & ComponentProps<typeof XJsxP>
  : T extends typeof DIV
  ? AdditionalProps<T, V> & ComponentProps<typeof XJsxDiv>
  : AdditionalProps<T, V> & ComponentProps<typeof XJsxSpan>

const Text = <T extends TextProps<ElementType, Variant>, V extends Variant>({
  elementType,
  variant,
  size,
  fontWeight,
  lineHeight,
  theme,
  textTransform,
  className: classNameProp,
  ...props
}: TextProps<T['elementType'], V>) => {
  const className = clsx(
    variant && classNames.variant,
    size && classNames[`size-${size}`],
    fontWeight && classNames[`fontWeight-${fontWeight}`],
    lineHeight && classNames[`lineHeight-${lineHeight}`],
    theme && classNames[`theme-${theme}`],
    textTransform && classNames[`textTransform-${textTransform}`],
    classNameProp
  )

  if (elementType === H1)
    // @ts-expect-error - TS doesn't understand that props are valid
    return <XJsxH1 {...props} className={className} />

  if (elementType === H2)
    // @ts-expect-error - TS doesn't understand that props are valid
    return <XJsxH2 {...props} className={className} />

  if (elementType === H3)
    // @ts-expect-error - TS doesn't understand that props are valid
    return <XJsxH3 {...props} className={className} />

  if (elementType === H4)
    // @ts-expect-error - TS doesn't understand that props are valid
    return <XJsxH4 {...props} className={className} />

  if (elementType === H5)
    // @ts-expect-error - TS doesn't understand that props are valid
    return <XJsxH5 {...props} className={className} />

  if (elementType === H6)
    // @ts-expect-error - TS doesn't understand that props are valid
    return <XJsxH6 {...props} className={className} />

  if (elementType === P)
    // @ts-expect-error - TS doesn't understand that props are valid
    return <XJsxP {...props} className={className} />

  if (elementType === DIV)
    // @ts-expect-error - TS doesn't understand that props are valid
    return <XJsxDiv {...props} className={className} />

  return <XJsxSpan {...props} className={className} />
}

export default Text

const Test = () => {
  return (
    <Text
      elementType='h1'
      variant='nova'
      size='20'
      fontWeight={500}
      lineHeight='100'
      theme='light'>
      Test
    </Text>
  )
}
