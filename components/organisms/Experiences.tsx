import React, { useState } from 'react'
import { getExperiences, preloadExperiences } from '@/utils/FetchData'
import { jsx } from '@emotion/react/macro'
import Experience from '@/components/molecules/Experience'
import useTranslation from 'next-translate/useTranslation'
import Section from '@/components/molecules/Section'
import { linkedinUrl } from '@/lib/porfolioData'
import { Button } from '@mui/material'
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

      <Button variant='outlined' href={linkedinUrl} target='_blank'>
        {t('know more')}
      </Button>

    </Section>
  )
}
export default Experiences
