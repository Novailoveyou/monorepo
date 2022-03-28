import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { phone } from '@/data/index'

const Home: NextPage = () => {
  return <div className={styles.container}>{phone.val}</div>
}

export default Home
