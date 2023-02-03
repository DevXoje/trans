import Navbar from '@/components/organisms/Navbar'
import { Container } from '@mui/material'
import AboutMe from '@/components/organisms/AboutMe'
import styles from '@/styles/Porfolio.module.scss'
import SkillsAndExperience from '@/components/organisms/SkillsAndExperience'
import GalleryProjects from '@/components/organisms/GalleryProjects'

export default function Porfolio () {
  return (
    <>
      <Navbar />
      <Container className={styles.main}>
        <AboutMe />
        <SkillsAndExperience />
        <GalleryProjects />
      </Container>
    </>
  )
}
