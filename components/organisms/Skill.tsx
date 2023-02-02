import { Skill } from '@/lib/models/Skill'
import { Slider, Typography } from '@mui/material'
import React from 'react'
import styles from '@/styles/Skills.module.scss'

const Skill = ({ skill }: { skill: Skill }) => {
  const { title, rating } = skill
  return (
    <div className={styles.skill}>
      <Typography variant='h5' className={styles.skill__title}>{title}</Typography>
      <Slider
        aria-label={title + ' rating'}
        defaultValue={rating}
        valueLabelDisplay='auto'
        color='secondary'
        step={1}
        marks
        min={1}
        max={10}
        disabled
        className={styles.skill__slider}
      />
    </div>
  )
}

export default Skill
