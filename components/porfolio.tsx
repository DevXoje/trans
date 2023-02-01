import ModeSwitcher from '@/components/atoms/ModeSwitcher'
import LanguageSwitcher from '@/components/atoms/LanguageSwitcher'
import AboutMe from '@/components/organisms/AboutMe'
import SkillsAndExperience from '@/components/organisms/SkillsAndExperience'
import GalleryProjects from '@/components/organisms/GalleryProjects'

export default function Porfolio () {
  return (
    <>
      <ModeSwitcher />
      <LanguageSwitcher />
      <AboutMe />
      <SkillsAndExperience />
      <GalleryProjects />
    </>
  )
}
