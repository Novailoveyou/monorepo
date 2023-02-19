import clsx from 'clsx'
import Div from 'xjsx/v1/Div'
import Button from 'ui/v1/buttons/Button'
import Text from 'ui/v1/texts/Text'
import classNames from './Page.module.sass'

const Home = () => {
  return (
    <main className={clsx(classNames.main)}>
      <Div className={clsx(classNames.container)}>
        <Div className={clsx(classNames.plate)}>
          <Div className={clsx(classNames.left)}>
            <Text
              elementType='h1'
              variant='nova'
              fontWeight={700}
              theme='light'
              textTransform='uppercase'
              className={clsx(classNames.h1)}>
              <Text elementType='div' variant='nova' size='82' lineHeight='100'>
                Hello!
              </Text>{' '}
              <Text
                elementType='div'
                variant='nova'
                size='47'
                fontWeight={400}
                lineHeight='100'
                textTransform='lowercase'>
                My name is
              </Text>{' '}
              <Text elementType='div' variant='nova' size='51' lineHeight='100'>
                Ilia Orlov
              </Text>
            </Text>
            <Text
              elementType='p'
              variant='nova'
              size='22'
              fontWeight={500}
              lineHeight='120'
              theme='light'
              className={clsx(classNames.p)}>
              Full Stack Web Developer specializing in TypeScript
            </Text>
            <Button
              elementType='button'
              variant='nova'
              size='lg'
              theme='primary'
              className={clsx(classNames.button)}
              type='button'>
              Hire me
            </Button>
          </Div>
        </Div>
      </Div>
    </main>
  )
}

export default Home
