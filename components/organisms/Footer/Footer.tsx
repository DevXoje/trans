import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
  const href = 'https://www.linkedin.com/in/jose-vilches-sanchez/'
  return (
    <footer className={styles.footer}>

      Sitio web desarrollado por <Link href={href} target='_blank' rel='noreferrer'>Xoje</Link>
    </footer>
  )
}

export default Footer
