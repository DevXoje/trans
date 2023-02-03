'use client'

import { Button, Grid, Link, Typography } from '@mui/material'
import styles from '@/styles/Aboutme.module.scss'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
import Section from '@/components/molecules/Section'

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false)
  const { t } = useTranslation('about')

  return (
    <Section withContrast>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Image
            src='/images/person1.jpeg'
            alt={t('image_alt')}
            width={468}
            height={1000}
            className={styles.aboutMe__image}
            priority
          />
        </Grid>
        <Grid item xs={12} md={6} className={styles.aboutMe__content}>
          <Typography variant='h2' className={styles.title}>Jose Vilches</Typography>
          <Typography variant='h4' className={styles.subtitle}>{t('subtitle')}</Typography>
          <Typography
            variant='body1'
            className={styles.description}
            paragraph
          >
            {showMore ? t('body') : t('body').substring(0, 251)}
            <button onClick={() => setShowMore(!showMore)}>{showMore ? 'show less' : 'show more'}</button>
          </Typography>
          <Link href=''><Button variant='outlined' className={styles.button}>{t('button')}</Button></Link>
        </Grid>
      </Grid>
    </Section>
  )
}

export default AboutMe
