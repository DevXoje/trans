// import 'server-only'
// import { cache } from 'react'
import { Experience } from '@/lib/models/Experience'

export const preload = () => {
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
