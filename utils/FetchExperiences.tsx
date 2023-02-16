// import 'server-only'
// import { cache } from 'react'
import { Experience } from '@/lib/models/Experience'

export const preloadExperiences = () => {
  // eslint-disable-next-line no-void
  void getExperiences()
}

export const getExperiences = async () => { // cache(async () => {
  // let res = use( fetch("https://external-service.com/data", {headers: {authorization: process.env.API_KEY,},}));return res.json();
  const experiences: Experience[] = [
    {
      title: 'robotic system integrators',
      // description: 'As an industrial robotic integrator with experience in Kuka and welding, I have programmed and configured robots to automate manufacturing processes in the automotive industry. With skills in robotics, electronics and mechanics, I have worked in a team environment to achieve efficient and high-quality solutions. My experience has improved productivity and reduced costs, giving me a sense of professional accomplishment.',
      description: 'experience_description1',
      otherTime: {
        from: new Date('2022-06-01'),
        to: new Date('2022-12-01')
      },
      thumbnail: { src: '/images/experiences/algo.png', alt: '', width: 100, height: 100 },

      enterprise: 'LCS Robotics Solutions',
      address: {
        city: 'tulsa',
        state: 'oklahoma',
        country: 'usa'
      },
      shift: 'complete'
    },
    {
      title: 'frontend developer (Angular)',
      description: 'experience_description2',
      otherTime: {
        from: new Date('2022-01-01'),
        to: new Date('2022-06-01')
      },
      thumbnail: { src: '/images/experiences/logo-nttdata.png', alt: '', width: 100, height: 100 },
      enterprise: 'Publicidad Calpe',
      address: {
        city: 'remote',
        state: 'alicante',
        country: 'españa'
      },
      shift: 'shift1'
    },
    {
      title: 'frontend developer (Static Web)',
      description: 'experience_description2',
      otherTime: {
        from: new Date('2022-01-01'),
        to: new Date('2022-06-01')
      },
      thumbnail: { src: '/images/experiences/logo-calpe-publicidad.png', alt: '', width: 100, height: 100 },
      enterprise: 'Publicidad Calpe',

      address: {
        city: 'calpe',
        state: 'alicante',
        country: 'españa'
      },
      shift: 'half'
    }
  ]
  return experiences
}
