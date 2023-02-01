import { Button, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import { getExperiences, preloadExperiences } from '@/utils/FetchData'
import { jsx } from '@emotion/react/macro'
import Experience from '@/components/molecules/Experience'
import useTranslation from 'next-translate/useTranslation'
import { linkedinUrl } from '@/lib/porfolioData'
import JSX = jsx.JSX;

preloadExperiences()
/*
const renderExperiences = experiences.map(({ title, description, rangeTime }, index) => (
  <li key={index}>
    <Typography variant='h3'>
      {title}
    </Typography>
    <Typography variant='subtitle1'>
      {rangeTime.from} {rangeTime.to ? `- ${rangeTime.to}` : '- current'}
    </Typography>
    <Typography variant='body1'>
      {description}
    </Typography>
  </li>
)) */
const Experiences = () => {
  const { t } = useTranslation('experiences')

  const [experiences, setExperiences] = useState<JSX.Element[]>([])
  const renderExperiences: JSX.Element[] = []

  getExperiences().then((experiences) => {
    for (const experience of experiences) {
      renderExperiences.push(<Experience key={experience.title} experience={experience} />)
    }
    setExperiences(renderExperiences)
  })
  return (
    <div>
      <div className='card-body'>
        <Typography variant='h2'>
          {t('title')}
        </Typography>
        <ul>
          {/* List Item Experience */}
          {experiences}
        </ul>

        <Link href={linkedinUrl}>
          <Button variant='outlined'>
            {t('button')}
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default Experiences
