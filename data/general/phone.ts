import { phoneNumber } from '@/config/index'
import { prettifyPhoneNumber } from '@/helpers/index'

type TPhone = {
  href: `tel:${typeof phoneNumber}`
  val: string
}

const email: TPhone = {
  href: `tel:${phoneNumber}`,
  val: prettifyPhoneNumber(phoneNumber)
}

export default email
