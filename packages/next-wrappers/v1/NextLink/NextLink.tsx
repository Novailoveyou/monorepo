import * as React from 'react'
import { ComponentProps } from 'react'
import Link from 'next/link'
import A from 'xjsx/v1/A'

const PASS_HREF = true
const LEGACY_BEHAVIOR = true

type NextLinkPropsA = ComponentProps<typeof A>

type NextLinkPropsLink = ComponentProps<typeof Link>

type NextLinkProps = NextLinkPropsLink &
  Required<Pick<NextLinkPropsLink, 'children'>> &
  Partial<Record<'passHref', true>> &
  Partial<Record<'legacyBehavior', true>> &
  Omit<NextLinkPropsA, 'href' | 'children'>

const NextLink = ({
  children,
  href,
  as,
  passHref = PASS_HREF,
  legacyBehavior = LEGACY_BEHAVIOR,
  prefetch,
  replace,
  scroll,
  shallow,
  locale,
  ...props
}: NextLinkProps) => {
  return (
    <Link
      href={href}
      as={as}
      passHref={passHref}
      legacyBehavior={legacyBehavior}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}>
      <A {...props}>{children}</A>
    </Link>
  )
}

export default NextLink

const Test = () => {
  return <NextLink href='/'>Test</NextLink>
}
