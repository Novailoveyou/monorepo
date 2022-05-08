import type { NextPage } from 'next'
import { phone } from '@/data/index'

const PageHome: NextPage = () => {
  return <div>{phone.val}</div>
}

export default PageHome
