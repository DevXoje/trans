'use client'
import { Project as ProjectModel } from '@/lib/models/Project'
import { Button, Card, CardActions, CardContent, Tooltip, Typography } from '@mui/material'
import styles from './Project.module.scss'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import ParagraphShowMore from '@/components/atoms/ParagraphShowMore/ParagraphShowMore'
import ProjectSkeleton from '@/components/molecules/Project/ProjectSkeleton'
import { BsFillFileCodeFill } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md'

export default function Project ({ project }: { project: ProjectModel }) {
  const { title, description, image, state } = project
  const { t } = useTranslation('projects')
  const getButtons = (sourceCodeURL: string, webSiteURL: string) => {
    return (
      <>
        <Tooltip title={t('source code')} arrow>
          <Button
            variant='contained'
            size='small'
            className={styles.project__button}
            href={sourceCodeURL}
            target='_blank'
            endIcon={<BsFillFileCodeFill />}
          >
            {/*  {t('source code')} */}
            {/* <Link href={links.source.content}>Code</Link> */}
          </Button>
        </Tooltip>
        <Tooltip title={t('web site')} arrow>
          <Button
            variant='contained'
            size='small'
            className={styles.project__button}
            href={webSiteURL}
            target='_blank'
            endIcon={<MdWeb />}
          >
            {/* <MdWeb /> */}
            {/* {t('web site')} */}

          </Button>
        </Tooltip>
      </>
    )
  }

  const titleTranslated = t(title)

  const ProjectComplete = () =>
    <Card
      className={`${styles.project}`}
    >
      {/* TODO: Al cambiar de elemento para la imagen se ha descentrado */}
      {/* TODO: Y en concreto el primer proyecto falla en el lighthouse de brave */}
      <div className={styles.wrapper__image}>
        <Image
          src={image.src} alt={t(image.alt)} width={468}
          height={1000}// 140h?
          className={styles.project__image}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant='h5' className={styles.project__title}>
          {titleTranslated}
        </Typography>
        <ParagraphShowMore content={t(description)} maxLength={50} />
      </CardContent>
      <CardActions className={styles.project__group_buttons}>
        {getButtons(project.links.source.href, project.links.webSite.href)}
        {/* <Tooltip title={t('source code')} arrow>

          <Button
            variant='contained'
            size='small'
            className={styles.project__button}
            href={project.links.source.href}
            target='_blank'
            endIcon={<BsFillFileCodeFill />}
          >
              {t('source code')}

             <Link href={links.source.content}>Code</Link>
          </Button>
        </Tooltip>
        <Tooltip title={t('web site')} arrow>
          <Button
            variant='contained'
            size='small'
            className={styles.project__button}
            href={project.links.webSite.href}
            target='_blank'
            endIcon={<MdWeb />}
          >
             <MdWeb />
             {t('web site')}

          </Button>
        </Tooltip> */}

      </CardActions>
    </Card>
  const ProjectIncomplete = () =>
    <Card
      className={`${styles.project} ${styles.incomplete}`}
    >
      {/* TODO: Al cambiar de elemento para la imagen se ha descentrado */}
      {/* TODO: Y en concreto el primer proyecto falla en el lighthouse de brave */}
      <div className={styles.wrapper__image}>
        <Image
          src={image.src}
          alt={t(image.alt)}
          width={468}
          height={1000}// 140h?
          className={styles.project__image}
          priority
        />
      </div>

      <CardContent>
        <Typography gutterBottom variant='h5' component='div' className={styles.project__title}>
          {titleTranslated}

        </Typography>
        <ParagraphShowMore content={t(description)} maxLength={100} />

      </CardContent>
      <CardActions className={styles.project__group_buttons}>
        {getButtons(project.links.source.href, project.links.webSite.href)}
      </CardActions>
    </Card>

  let output
  switch (state) {
    case 'TODO':
      output = <ProjectSkeleton />
      break
    case 'DOING':
      output = <ProjectIncomplete />

      break
    case 'DONE':
      output = <ProjectComplete />

      break
    default:
      output = <ProjectSkeleton />

      break
  }

  return project ? output : <ProjectSkeleton />
}
