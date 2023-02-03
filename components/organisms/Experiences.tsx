import { Button, Link } from '@mui/material'
import React, { useState } from 'react'
import { getExperiences, preloadExperiences } from '@/utils/FetchData'
import { jsx } from '@emotion/react/macro'
import Experience from '@/components/molecules/Experience'
import useTranslation from 'next-translate/useTranslation'
import { linkedinUrl } from '@/lib/porfolioData'
import Section from '@/components/molecules/Section'
import JSX = jsx.JSX;

preloadExperiences()

const Experiences = () => {
  const { t } = useTranslation('gallery_experiences')

  const [experiences, setExperiences] = useState<JSX.Element[]>([])
  const renderExperiences: JSX.Element[] = []

  getExperiences().then((experiences) => {
    for (const experience of experiences) {
      renderExperiences.push(<Experience key={experience.title} experience={experience} />)
    }
    setExperiences(renderExperiences)
  })
  return (
    <Section title={t('experiences')}>
      <ul>
        {experiences}
      </ul>
      <Link href={linkedinUrl}>
        <Button variant='outlined'>
          {t('know more')}
        </Button>
      </Link>
    </Section>
  )
}
export default Experiences
