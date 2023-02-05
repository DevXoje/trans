// import 'server-only'
// import { cache } from 'react'
import { Experience } from '@/lib/models/Experience'
import { Skill } from '@/lib/models/Skill'

export const preloadExperiences = () => {
  void getExperiences()
}

export const getExperiences = async () => { // cache(async () => {
  // let res = use( fetch("https://external-service.com/data", {headers: {authorization: process.env.API_KEY,},}));return res.json();
  const experiences: Experience[] = [
    {
      title: 'robotic system integrators',
      // description: 'As an industrial robotic integrator with experience in Kuka and welding, I have programmed and configured robots to automate manufacturing processes in the automotive industry. With skills in robotics, electronics and mechanics, I have worked in a team environment to achieve efficient and high-quality solutions. My experience has improved productivity and reduced costs, giving me a sense of professional accomplishment.',
      description: 'experience_description1',
      rangeTime: { from: 2022, to: 2022 }
    },
    {
      title: 'frontend developer',
      description: 'experience_description2',
      rangeTime: { from: 2022, to: 2022 }
    }
  ]
  return experiences
}

export const preloadSkills = () => {
  void getSkills()
}

export const getSkills = async () => { // cache(async () => {
  const skills: Skill[] = [
    { title: 'Angular', rating: 4 },
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
