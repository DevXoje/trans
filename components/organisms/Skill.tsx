import { Skill } from '@/lib/models/Skill'
import { Box, Paper, Slider, Typography } from '@mui/material'
import React from 'react'
import styles from '@/styles/Skills.module.scss'
import { FaAngular } from 'react-icons/fa'

function valuetext (value: number) {
  return `${value}lvl`
}

// eslint-disable-next-line no-import-assign,no-redeclare
const Skill = ({ skill }: { skill: Skill }) => {
  const { title, rating } = skill
  const marks = [
    {
      value: 0,
      label: <FaAngular />
    },
    {
      value: 2,
      label: '2lvl'
    },
    {
      value: 3.7,
      label: '3.7lvl'
    },
    {
      value: 10,
      label: '10lvl'
    }
  ]

  return (
    <Box className={styles.skill}>
      <Paper>
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
        />

      </Paper>

    </Box>
  )
}

export default Skill
