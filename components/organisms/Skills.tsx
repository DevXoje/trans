import { Typography } from '@mui/material'
import { jsx } from '@emotion/react'
import React, { Suspense, useState } from 'react'
import { getSkills, preloadSkills } from '@/utils/FetchData'
import Skill from '@/components/organisms/Skill'
import JSX = jsx.JSX;

preloadSkills()
const Skills = () => {
  const [skills, setSkills] = useState<JSX.Element[]>([])
  const renderSkills: JSX.Element[] = []
  getSkills().then((skills) => {
    for (const skill of skills) {
      renderSkills.push(<Skill key={skill.title} skill={skill} />)
    }
    setSkills(renderSkills)
  })

  return (
    <>
      <Typography variant='h2'>Skills</Typography>
      <Suspense fallback={<div>Loading...</div>}>
        {skills}
      </Suspense>
    </>
  )
}

export default Skills
