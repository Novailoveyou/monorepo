import stls from '@/styles/components/imgs/general/ImgGeneralIliaOrlovPortrait.module.sass'
import { TPropClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgContainer } from '@/components/layout'
import srcDefault from '@/public/assets/imgs/general/ilia-orlov-portrait.png'

type TypeImgGeneralIliaOrlovPortraitProps = TPropClassNames & TypeImg

const ImgGeneralIliaOrlovPortrait = ({
  classNames,
  src,
  width,
  height,
  alt,
  title,
  filter
}: TypeImgGeneralIliaOrlovPortraitProps) => {
  const publicSrc = '/assets/imgs/general/for-whom.jpg'

  return (
    <>
      <ImgContainer
        classNames={classNames}
        src={src || (nextexport ? publicSrc : srcDefault)}
        width={nextexport ? srcDefault.width : width}
        height={nextexport ? srcDefault.height : height}
        alt={alt || 'Для кого эта программа'}
        title={title}
      />
    </>
  )
}

export default ImgGeneralIliaOrlovPortrait
