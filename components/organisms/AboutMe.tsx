'use client'

import { Grid, Typography } from '@mui/material'
import styles from '@/styles/Aboutme.module.scss'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Section from '@/components/molecules/Section'
import ParagraphShowMore from '@/components/atoms/ParagraphShowMore/ParagraphShowMore'
import { mailtoUrl } from '@/lib/porfolioData'
import useWindowDimensions from '@/hooks/UseWindowDimensions'
import Link from 'next/link'

const AboutMe = () => {
  const { t } = useTranslation('about')
  const { width } = useWindowDimensions()
  const paragraphMaxLength = width > 960 ? 1000 : 100
  // const paragraphMaxLength = 100
  return (
    <Section withContrast id='aboutme'>
      <Grid container className={styles.aboutMe}>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <Image
            src='/images/person5.png'
            alt={t('image_alt')}
            width={600}
            height={600}
            className={styles.aboutMe__image}
            priority
          />
        </Grid>
        <Grid item xs={12} sm={7.7} md={7.7} lg={7.7} xl={7.7} className={styles.aboutMe__content}>
          <Typography variant='h2' className={styles.title}>Jose Vilches</Typography>
          <Typography variant='h3' className={styles.subtitle}>{t('subtitle')}</Typography>
          <ParagraphShowMore
            content={t('body')}
            className={styles.description}
            maxLength={paragraphMaxLength}

          />
          {/* <Button// Todo: falta que el mailto se traduzca
            href={mailtoUrl} variant='outlined'
            className={styles.button}
          >{t('button')}
          </Button> */}
          <Link href={mailtoUrl} className={styles.button}>{t('button')}</Link>
          {/* <Link href={mailtoUrl}>{t('button')}</Link> */}
        </Grid>
      </Grid>
    </Section>
  )
}

export default AboutMe
