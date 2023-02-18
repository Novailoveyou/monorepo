import COLORS from './colors'
import TYPO from './typo'
import BRAKEPOINTS from './brakepoints'
import MEDIA from './media'

export { COLORS, TYPO, BRAKEPOINTS, MEDIA }

const V1 = {
  colors: COLORS,
  typo: TYPO,
  brakepoints: BRAKEPOINTS,
  media: MEDIA
} as const

export default V1
