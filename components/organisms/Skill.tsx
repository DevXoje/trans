import { Skill } from '@/lib/models/Skill'
import { Box, Slider, Typography } from '@mui/material'
import React from 'react'

const Skill = ({ skill }: { skill: Skill }) => {
  const { title, rating } = skill
  return (
    <Box key={title}>
      <Typography variant='h3'>{title}</Typography>
      <Slider
        aria-label={title + ' rating'}
        defaultValue={rating}
        valueLabelDisplay='auto'
        color='primary'
        step={1}
        marks
        min={1}
        max={10}
        disabled
      />
    </Box>
  )
}

export default Skill
