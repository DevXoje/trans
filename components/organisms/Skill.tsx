import { Skill } from '@/lib/models/Skill'
import { Box, Slider, Typography } from '@mui/material'
import React from 'react'
import styles from '@/styles/Skills.module.scss'

function valuetext (value: number) {
  return `${value}lvl`
}

// eslint-disable-next-line no-import-assign,no-redeclare
const Skill = ({ skill }: { skill: Skill }) => {
  const { title, rating } = skill
  const marks = [
    {
      value: 0,
      label: 'a'
    },
    {
      value: 2,
      label: '😁'
    },
    {
      value: 3.7,
      label: '🙂'
    },
    {
      value: 10,
      label: '😎'
    }
  ]

  return (
    <Box className={styles.skill}>
      <Typography variant='h3' className={styles.skill__title}>{title}</Typography>
      <Slider
        defaultValue={rating}
        step={1}
        min={1}
        max={10}
        getAriaValueText={valuetext}
        aria-label={title + ' rating'}
        valueLabelDisplay='auto'
        marks={marks}
        className={styles.skill__slider}
      />

    </Box>
  )
}

export default Skill
