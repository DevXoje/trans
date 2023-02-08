import React, { useState } from 'react'
import Section from '@/components/molecules/Section'
import styles from '@/styles/Aboutme.module.scss'

import { Button, Grid, Link, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'

const SectionExtra = () => {
  const { t } = useTranslation('about')
  const [showMore, setShowMore] = useState(false)

  return (
    <Section withContrast>
      <Grid container>
        <Grid item xs={12} md={6} />
        <Grid item xs={12} md={6}>
          <Typography variant='h2'>Jose Vilches</Typography>
          <Typography variant='h4'>{t('subtitle')}</Typography>
          <Typography
            variant='body1'
            paragraph
          >
            {showMore ? t('body') : t('body').substring(0, 251)}
            <button onClick={() => setShowMore(!showMore)}>{showMore ? 'show less' : 'show more'}</button>
          </Typography>
          <Link href='' target='_blank'>
            <Button
              variant='outlined'
              className={styles.button}
            >{t('button')}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Section>
  )
}
export default SectionExtra
