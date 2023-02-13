'use client'
import { Project as ProjectModel } from '@/lib/models/Project'
import { Button, Card, CardActions, CardContent, Skeleton, SxProps, Theme, Typography } from '@mui/material'
import styles from '../../styles/Project.module.scss'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import ParagraphShowMore from '@/components/atoms/ParagraphShowMore/ParagraphShowMore'
/* import { BsFillFileCodeFill } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md' */

export default function Project ({ project }: { project: ProjectModel }) {
  const { title, description, image, state } = project
  const { t } = useTranslation('projects')

  const titleTranslated = t(title)
  // const [isZoom, setIsZoom] = useState(false)
  const ButtonSkeleton = () => <Skeleton
    variant='rounded'
    className={styles.project__button}
    height={50}
                               />
  const ProjectSkeleton = () => {
    const sxInline: SxProps<Theme> = {}
    return (
      <>
        {/* <Paper sx={{ height: 400 }}>
          <Stack spacing={1}>

            <Skeleton variant='rectangular' height={140} />
            <Typography variant='h3'>{title}</Typography>
            <Skeleton variant='text' sx={{ fontSize: '2rem' }} width={200} />
            <Skeleton variant='text' sx={{ fontSize: '1rem' }} width={200} />
            <div className='lastLine'>
              <Skeleton variant='text' sx={{ fontSize: '1rem', ...sxInline }} width={150} />
              <Skeleton variant='circular' sx={{ ...sxInline }} width={40} height={40} />
            </div>
            <div className='group_button'>
              <Skeleton variant='rounded' sx={{ ...sxInline }} width={90} height={50} />
              <Skeleton variant='rounded' sx={{ ...sxInline }} width={90} height={50} />
            </div>
          </Stack>
        </Paper> */}
        <Card className={`${styles.project} `}>
          <Skeleton variant='rectangular' height={140} className={styles.project__image} />
          <CardContent>
            <Skeleton
              variant='text' sx={{ fontSize: '2.5rem' }} width={130}
              className={styles.project__title}
            />
            <Skeleton variant='text' sx={{ fontSize: '1rem' }} width={200} />
            <Skeleton variant='text' sx={{ fontSize: '1rem' }} width={200} />
            <Skeleton variant='text' sx={{ fontSize: '1rem', ...sxInline }} width={150} />
            <Skeleton variant='circular' sx={{ ...sxInline }} width={40} height={40} />

          </CardContent>
          <CardActions className={styles.project__group_buttons}>
            <ButtonSkeleton />
            <ButtonSkeleton />
          </CardActions>
        </Card>
      </>
    )
  }

  const ProjectComplete = () => {
    return (
      <Card
        className={`${styles.project} ${!project.isComplete ? styles.incomplete : ''}`}
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
            {titleTranslated}

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
