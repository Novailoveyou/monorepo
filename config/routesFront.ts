import { dev, localhost, domainName } from '@/config/index'

const routesFront = {
  root: dev ? `http://${localhost}` : `https://${domainName}`,
  home: '/',
  contact: '/contact',
  follow: '/follow'
}

export default routesFront
