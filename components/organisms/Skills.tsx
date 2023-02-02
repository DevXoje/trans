import { Typography } from '@mui/material'
import { jsx } from '@emotion/react'
import React, { useState } from 'react'
import { getSkills, preloadSkills } from '@/utils/FetchData'
import Skill from '@/components/organisms/Skill'
import styles from '@/styles/Skills.module.scss'
import JSX = jsx.JSX;

preloadSkills()
const Skills = () => {
  const [skills, setSkills] = useState<JSX.Element[]>([])
  const renderSkills: JSX.Element[] = []
  getSkills().then((skills) => {
    for (const skill of skills) {
      renderSkills.push(
        <li key={skill.title}>
          <Skill skill={skill} />
        </li>
      )
    }
    setSkills(renderSkills)
  })

  return (
    <section className={styles.gallery_skills}>
      <Typography variant='h2' className={styles.gallery_skills__title}>Skills</Typography>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <ul>
        {skills}
      </ul>
      {/* </Suspense> */}
    </section>
  )
}

export default Skills
