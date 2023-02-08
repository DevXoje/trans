'use client'

import { Grid, Slide } from '@mui/material'
import styles from '@/styles/SkillsAndExperience.module.scss'
import { useEffect, useState } from 'react'
import Skills from '@/components/organisms/Skills'
import Experiences from '@/components/organisms/Experiences'

const SkillsAndExperience = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])
  return (
    <>
      <Grid container className={styles.wrapper}>
        <Slide direction='right' in={show} timeout={1000} mountOnEnter unmountOnExit>
          <Grid item xs={12} sm={4} md={3.5} lg={3.5} xl={3.5} className={styles.left_item}>
            <Skills />
          </Grid>
        </Slide>
        <Slide direction='left' in={show} timeout={1000} mountOnEnter unmountOnExit>
          <Grid
            item xs={12} sm={7.5} md={8} lg={8}
            xl={8} className={styles.right_item}
          >
            <Experiences />
          </Grid>
        </Slide>

      </Grid>
    </>
  )
}

export default SkillsAndExperience
