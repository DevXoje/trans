'use client'
import { Project as ProjectModel } from '@/lib/models/Project'
import { Button, Card, CardActions, CardContent, Paper, Skeleton, Stack, SxProps, Theme, Typography } from '@mui/material'
import styles from '../../styles/Project.module.scss'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import ParagraphShowMore from '@/components/atoms/ParagraphShowMore'
/* import { BsFillFileCodeFill } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md' */
const ProjectSkeleton = () => {
  const title = 'algo'
  const sxInline: SxProps<Theme> = {
    display: ''
  }
  return (
    <>
      <Paper sx={{ height: 400 }}>
        <Stack spacing={1}>

          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant='rectangular' height={140} />
          <Typography>{title}</Typography>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} width={200} />
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} width={200} />
          <Skeleton variant='text' sx={{ fontSize: '1rem', ...sxInline }} width={150} />
          <Skeleton variant='circular' sx={{ ...sxInline }} width={40} height={40} />

          <Skeleton variant='rounded' sx={{ ...sxInline }} width={90} height={50} />
          <Skeleton variant='rounded' sx={{ ...sxInline }} width={90} height={50} />
        </Stack>
      </Paper>
    </>
  )
}

export default function Project ({ project }: { project: ProjectModel }) {
  const { title, description, image, state } = project
  const { t } = useTranslation('projects')
  // const [isZoom, setIsZoom] = useState(false)
  const ProjectComplete = () => {
    return (
      <Card
        className={`${styles.project} ${!project.isComplete ? styles.incomplete : ''}`}
      >
        {/* TODO: Al cambiar de elemento para la imagen se ha descentrado */}
        {/* TODO: Y en concreto el primer proyecto falla en el lighthouse de brave */}
        {/* <Zoom in={isZoom} timeout={1000}>
          <Image
            src={image.src} alt={t(image.alt)} width={468}
            height={1000}// 140h?
            className={styles.project__image}
          />
        </Zoom> */}
        <div className={styles.wrapper__image}>
          <Image
            src={image.src} alt={t(image.alt)} width={468}
            height={1000}// 140h?
            className={styles.project__image}
          />
        </div>
        {/* <Image
            src={image.src}
            alt={t(image.alt)}
            width={468}
            height={1000}
            className={styles.aboutMe__image}
            priority
          /> */}
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' className={styles.project__title}>
            {t(title)}

          </Typography>
          <ParagraphShowMore content={t(description)} maxLength={100} />

        </CardContent>
        <CardActions className={styles.project__group_buttons}>
          <Button
            variant='contained'
            size='small'
            className={styles.project__button}
            href={project.links.source.href}
            target='_blank'
          >{/* endIcon={<BsFillFileCodeFill />} */}
            {t('source code')}

            {/* <Link href={links.source.content}>Code</Link> */}
          </Button>
          <Button
            variant='contained'
            size='small'
            className={styles.project__button}
            href={project.links.webSite.href}
            target='_blank'
          > {/* endIcon={<MdWeb />} */}
            {t('web site')}

          </Button>
        </CardActions>
      </Card>

    )
  }

  let output
  switch (state) {
    case 'TODO':
      output = <ProjectSkeleton />
      break
    case 'DOING':
      output = 'tood'

      break
    case 'DONE':
      output = <ProjectComplete />

      break
    default:
      output = 'tood'

      break
  }

  return (
    project
      ? (output
    // (project.isComplete) ? (<ProjectComplete />) : <ProjectIncomplete />
        )
      : (<ProjectSkeleton />)
  )
}
