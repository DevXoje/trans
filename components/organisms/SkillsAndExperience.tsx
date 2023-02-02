'use client'

import Skills from './Skills'
import Experiences from './Experiences'
import { Card, Grid } from '@mui/material'
import styles from '@/styles/SkillsAndExperience.module.scss'
import { useEffect, useRef } from 'react'

const SkillsAndExperience = () => {
  const leftItem = useRef(null)
  const rightItem = useRef(null)
  const addShow = () => {
    const currentLeft = leftItem.current as unknown as HTMLElement
    const currentRight = rightItem.current as unknown as HTMLElement
    const items = [currentLeft, currentRight]
    items.forEach((item) => {
      item.style.opacity = '1'
      item.style.filter = 'blur(0)'
      item.style.transform = 'translateX(0)'
    })

    /* opacity: 1;
                                    filter: blur(0);
                                    transform: translateX(0); */
  }
  useEffect(() => {
    addShow()
  }, [])
  return (
    <Grid container className={styles.wrapper}>
      <Grid item sm={12} md={6} className={styles.left_item} ref={leftItem}>
        <Card variant='outlined'>
          <Skills />
        </Card>
      </Grid>
      <Grid item sm={12} md={6} className={styles.right_item} ref={rightItem}>
        <Card variant='outlined'>
          <Experiences />
        </Card>
      </Grid>
    </Grid>
  )
}

export default SkillsAndExperience
