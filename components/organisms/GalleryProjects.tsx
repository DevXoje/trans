import React, { useEffect, useState } from 'react'
import { Button, Grid } from '@mui/material'
import styles from '@/styles/Project.module.scss'
import { getProjects, preloadProjects } from '@/utils/FetchProjects'
import { jsx } from '@emotion/react'
import { linkedinUrl } from '@/lib/porfolioData'
import useTranslation from 'next-translate/useTranslation'
import Project from '@/components/molecules/Project'
import Section from '@/components/molecules/Section'
import JSX = jsx.JSX;

preloadProjects()
export default function GalleryProjects () {
  const [projects, setProjects] = useState<JSX.Element[]>([])
  const { t } = useTranslation('gallery_projects')
  useEffect(() => { // Todo: se ejecuta 2 veces
    const renderProjects: JSX.Element[] = []

    getProjects().then((projects) => {
      for (const project of projects) {
        renderProjects.push(
          <Grid item xs={12} sm={4} key={project.title}>
            <Project project={project} />
          </Grid>)
        setProjects(renderProjects)
      }
    })
  }, [])

  return (
    <Section withContrast title={t('my projects')} titleStyle={{ textAlign: 'center' }}>
      <Grid container>
        {projects}
      </Grid>
      <Button
        href={linkedinUrl}
        target='_blank'
        variant='outlined'
        className={styles.gallery_projects__button}
      >
        {t('more projects')}
      </Button>
    </Section>

  )
}
