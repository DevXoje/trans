import Navbar from '@/components/organisms/Navbar'
import { Box, Container } from '@mui/material'
import styles from '@/styles/Porfolio.module.scss'
import Footer from '@/components/organisms/Footer/Footer'
import AboutMe from '@/components/organisms/AboutMe'
import GalleryProjects from '@/components/organisms/GalleryProjects'
import SkillsAndExperience from '@/components/organisms/SkillsAndExperience'
import NavFloating from '@/components/organisms/NavFloating/NavFloating'

export default function Porfolio () {
  return (
    <>
      <Navbar />
      <NavFloating />
      <Box className={styles.background}>
        <Container className={styles.main}>
          <AboutMe />
          <SkillsAndExperience />
          <GalleryProjects />
        </Container>
      </Box>
      <Footer />
    </>
  )
}
