import { jsx } from '@emotion/react'
import React, { useState } from 'react'
import { getSkills, preloadSkills } from '@/utils/FetchSkills'
import Skill from '@/components/organisms/Skill'
import useTranslation from 'next-translate/useTranslation'
import Section from '@/components/molecules/Section'
import JSX = jsx.JSX;

preloadSkills()
const Skills = () => {
  const [skills, setSkills] = useState<JSX.Element[]>([])
  const { t } = useTranslation('skills')

  const renderSkills: JSX.Element[] = []
  getSkills().then((skills) => {
    for (const skill of skills) {
      renderSkills.push(
        <li key={skill.title} style={{ listStyle: 'none' }}>
          <Skill skill={skill} />
        </li>
      )
    }
    setSkills(renderSkills)
  })

  return (
    <Section title={t('skills')}>
      <ul>
        {skills}
      </ul>
    </Section>
  )
}

export default Skills
