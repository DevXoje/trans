'use client'

import React, { useState } from 'react'
import { Grid, Typography } from '@mui/material'
import styles from '../../styles/Project.module.scss'
import Project from '@/components/molecules/Project'
import { getProjects, preloadProjects } from '@/utils/FetchData'
import { jsx } from '@emotion/react'
import useTranslation from 'next-translate/useTranslation'
import JSX = jsx.JSX;

preloadProjects()
export default function GalleryProjects () {
  const [projects, setProjects] = useState<JSX.Element[]>([])
  const renderProjects: JSX.Element[] = []
  const { t } = useTranslation('projects')

  getProjects().then((projects) => {
    for (const project of projects) {
      renderProjects.push(
        <Grid item xs={12} sm={4} key={project.title} className='hidden project'>
          <Project project={project} />
        </Grid>)
      setProjects(renderProjects)
    }
  })
  return (
    <section className={styles.gallery_projects}>
      <header>
        <Typography variant='h2' className={styles.gallery_projects__title}>{t('title')}</Typography>
      </header>
      <Grid container spacing={3} className='projects'>
        {projects}
      </Grid>
    </section>
  )
}
