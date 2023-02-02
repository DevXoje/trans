// import 'server-only'
// import { cache } from 'react'
import { Experience } from '@/lib/models/Experience'
import { Skill } from '@/lib/models/Skill'
import { Project } from '@/lib/models/Project'

export const preloadExperiences = () => {
  void getExperiences()
}

export const getExperiences = async () => { // cache(async () => {
  // let res = use( fetch("https://external-service.com/data", {headers: {authorization: process.env.API_KEY,},}));return res.json();
  const experiences: Experience[] = [
    { title: 'titulo1', description: 'Lorem, ipsum dolor sit amet', rangeTime: { from: 5, to: 10 } },
    { title: 'titulo2', description: 'Lorem, ipsum dolor sit amet', rangeTime: { from: 5, to: 10 } }
  ]
  return experiences
}

export const preloadSkills = () => {
  void getSkills()
}

export const getSkills = async () => { // cache(async () => {
  const skills: Skill[] = [
    { title: 'Angular', rating: 4 },
    { title: 'React', rating: 3 },
    { title: 'Vue', rating: 2 },
    { title: 'Laravel', rating: 1 }
  ]
  return skills
}

export const preloadProjects = () => {
  void getProjects()
}

export const getProjects = async () => { // cache(async () => {
  const projects: Project[] = [
    {
      title: 'my portfolio',
      description: 'On this site, you will find a selection of my standout projects and a little about my experience and skills.',
      image: { src: 'project1.png', alt: 'thumbnail of my portfolio' },
      links: {
        source: { href: '', content: 'LinkCode' },
        webSite: { href: '', content: 'LinkWeb' }
      },
      isComplete: true
    }/*,
    {
      title: 'titulo 2',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000\n' +
                '              species, ranging across all continents except Antarctica',
      image: { src: 'project1.png', alt: 'Lizards are a widespread group of squamate reptiles' },
      links: {
        source: { href: '', content: 'LinkCode' },
        webSite: { href: '', content: 'LinkWeb' }
      },
      isComplete: false

    } */
  ]
  return projects
}
