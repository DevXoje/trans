import Experience from './Experience'
import React, { useState } from 'react'
import { getExperiences, preload } from '@/utils/FetchData'
import { jsx } from '@emotion/react/macro'
import JSX = jsx.JSX;

preload() // starting loading the user data now

const Experiences = () => {
  const [experiences, setExperiences] = useState<JSX.Element[]>([])
  const renderExperiences: JSX.Element[] = []

  getExperiences().then((experiences) => {
    for (const experience of experiences) {
      renderExperiences.push(<Experience key={experience.title} experience={experience} />)
    }
    setExperiences(renderExperiences)
  })
  // console.log(React.use())

  return <>{experiences}</>
}
export default Experiences
