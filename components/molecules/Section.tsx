import styles from '@/styles/Section.module.scss'
import { Card, Typography } from '@mui/material'
import React from 'react'

const Section = ({
  children,
  title,
  withContrast,
  titleStyle
}: {
    children: React.ReactNode,
    title?: string,
    withContrast?: boolean,
    titleStyle?: React.CSSProperties
}) => {
  return (
  // <Card sx={{ maxWidth: 345 }} className={`${styles.project} ${!project.isComplete ? styles.incomplete : ''}`}>

    <Card
      variant='outlined' component='section'
      className={`${styles.section} ${withContrast ? styles.withContrast : ''}`}
    >
      {(title)
        ? (
          <header>
            <Typography
              variant='h2'
              style={titleStyle}
              className={styles.section__title}
            >
              {title}
            </Typography>
          </header>)
        : ''}
      <div className={styles.section__content}>
        {children}
      </div>
    </Card>
  )
}
export default Section
