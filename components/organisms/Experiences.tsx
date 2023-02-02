import { Button, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import { getExperiences, preloadExperiences } from '@/utils/FetchData'
import { jsx } from '@emotion/react/macro'
import Experience from '@/components/molecules/Experience'
import useTranslation from 'next-translate/useTranslation'
import { linkedinUrl } from '@/lib/porfolioData'
import styles from '@/styles/Experience.module.scss'
import JSX = jsx.JSX;

preloadExperiences()

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
    <section className={styles.gallery_experiences}>
      <Typography variant='h2' color='text.secondary' className={styles.experience__title}>
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
    </section>
  )
}
export default Experiences
