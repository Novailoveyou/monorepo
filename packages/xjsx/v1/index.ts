import * as React from 'react'
import Button from './Button'
import A from './A'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import H5 from './H5'
import H6 from './H6'
import P from './P'
import Div from './Div'
import Span from './Span'

export { Button, A, H1, H2, H3, H4, H5, H6, P, Div, Span }

const V1 = {
  Button,
  A,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Div,
  Span
} as const

export default V1
