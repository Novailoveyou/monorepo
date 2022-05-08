import stls from '@/styles/components/layout/ImgContainer.module.sass'
import { FC } from 'react'
import { TPropClassNames, TPropChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TImgContainerProps = TPropClassNames & TPropChildren

const ImgContainer: FC<TImgContainerProps> = ({ classNames, children }) => {
  return (
    <span
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </span>
  )
}

export default ImgContainer
