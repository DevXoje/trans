// import 'server-only'
// import { cache } from 'react'
import { Skill } from '@/lib/models/Skill'

export const preloadSkills = () => {
  // eslint-disable-next-line no-void
  void getSkills()
}

export const getSkills = async () => { // cache(async () => {
  const skills: Skill[] = [
    { title: 'Angular', rating: 4 },
    // { title: <FaAngular />, rating: 4 },
    { title: 'angular material', rating: 4 },
    { title: 'ng-bootstrap', rating: 4 },
    { title: 'React', rating: 3 },
    { title: 'Next', rating: 3 },
    { title: 'Vue', rating: 2 },
    { title: 'Quasar', rating: 2 },
    { title: 'Laravel', rating: 1 }
  ]
  return skills
}
