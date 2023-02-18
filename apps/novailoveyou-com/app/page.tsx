import clsx from 'clsx'
import Button from 'ui/v1/buttons/Button'
import classNames from './page.module.css'

const Home = () => {
  return (
    <main className={clsx(classNames.main)}>
      <h1
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
        <span className='uppercase'>Hello!</span>{' '}
        <span
          className='lowercase'
          style={{
            fontWeight: 400
          }}>
          My name is
        </span>{' '}
        <span className='uppercase'>Ilia Orlov</span>
      </h1>
      <p>Full Stack Web Developer specializing in TypeScript </p>
      <Button elementType='button' variant='nova-lg-primary' type='button'>
        Hire me
      </Button>
    </main>
  )
}

export default Home
