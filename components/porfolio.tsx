import Navbar from '@/components/organisms/Navbar'
import { Container } from '@mui/material'
import AboutMe from '@/components/organisms/AboutMe'
import styles from '@/styles/Porfolio.module.scss'
import SkillsAndExperience from '@/components/organisms/SkillsAndExperience'
import GalleryProjects from '@/components/organisms/GalleryProjects'
import Head from 'next/head'

export default function Porfolio () {
  const head = {
    title: 'Jose Vilches Porfolio',
    description: 'Este porfolio mola'
  }
  return (
    <>
      <Head>
        <title>{head.title}</title>
        <meta name='description' content={head.description} />
      </Head>
      <Navbar />
      <Container className={styles.main}>
        <AboutMe />
        <SkillsAndExperience />
        <GalleryProjects />
      </Container>
    </>
  )
}
