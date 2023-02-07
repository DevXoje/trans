'use client'

import { Button, Grid, Typography } from '@mui/material'
import styles from '@/styles/Aboutme.module.scss'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Section from '@/components/molecules/Section'
import ParagraphShowMore from '@/components/atoms/ParagraphShowMore'
import { mailtoUrl } from '@/lib/porfolioData'

const AboutMe = () => {
  const { t } = useTranslation('about')

  return (
    <Section withContrast>
      <Grid container className={styles.aboutMe}>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <Image
            src='/images/person1.jpeg'
            alt={t('image_alt')}
            width={468}
            height={1000}
            className={styles.aboutMe__image}
            priority
          />
        </Grid>
        <Grid item xs={12} sm={7.7} md={7.7} lg={7.7} xl={7.7} className={styles.aboutMe__content}>
          <Typography variant='h2' className={styles.title}>Jose Vilches</Typography>
          <Typography variant='h3' className={styles.subtitle}>{t('subtitle')}</Typography>
          <ParagraphShowMore
            className={styles.description}
            content={t('body')}
          />
          <Button// Todo: falta que el mailto se traduzca
            href={mailtoUrl} target='_blank' variant='outlined'
            className={styles.button}
          >{t('button')}
          </Button>
        </Grid>
      </Grid>
    </Section>
  )
}

export default AboutMe
