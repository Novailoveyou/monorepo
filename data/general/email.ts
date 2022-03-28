import { emailAddress } from '@/config/index'

type TEmail = {
  href: `mailto:${typeof emailAddress}`
  val: typeof emailAddress
}

const email: TEmail = {
  href: `mailto:${emailAddress}`,
  val: emailAddress
}

export default email
