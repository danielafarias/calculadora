import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Calculator from '../components/calculator'

export default function Home() {
  return (
    <>

      <Head>
        <title>Calculadora</title>
      </Head>

      <Header />
      <Calculator />
      
    </>
  )
}
