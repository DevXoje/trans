'use client'

import { Grid } from '@mui/material'
import styles from '@/styles/SkillsAndExperience.module.scss'
import { useEffect, useRef } from 'react'
import Skills from '@/components/organisms/Skills'
import Experiences from '@/components/organisms/Experiences'

const SkillsAndExperience = () => {
  const leftItem = useRef(null)
  const rightItem = useRef(null)
  const addShow = () => {
    if (leftItem.current && rightItem.current) {
      const currentLeft = leftItem.current as HTMLElement
      const currentRight = rightItem.current as HTMLElement
      const items = [currentLeft, currentRight]
      items.forEach((item) => {
        item.classList.add(styles.animate)
      })
    }

    /* opacity: 1;
                                                                                                                                    filter: blur(0);
                                                                                                                                    transform: translateX(0); */
  }
  useEffect(() => {
    addShow()
  }, [])
  return (
    <Grid container className={styles.wrapper}>
      <Grid item xs={12} sm={4} md={3.5} lg={3.5} xl={3.5} className={styles.left_item} ref={leftItem}>
        <Skills />
      </Grid>
      <Grid item xs={12} sm={7.5} md={8} lg={8} xl={8} className={styles.right_item} ref={rightItem}>
        <Experiences />
      </Grid>
    </Grid>
  )
}

export default SkillsAndExperience
