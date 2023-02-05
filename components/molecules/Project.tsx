import { Project as ProjectModel } from '@/lib/models/Project'
import { Button, Card, CardActions, CardContent, Skeleton, Typography } from '@mui/material'
import styles from '../../styles/Project.module.scss'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
/* import { BsFillFileCodeFill } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md' */

export default function Project ({ project }: { project: ProjectModel }) {
  const { title, description, image } = project
  const { t } = useTranslation('projects')
  const ProjectComplete = () => {
    return (
      <Card sx={{ maxWidth: 345 }} className={`${styles.project} ${!project.isComplete ? styles.incomplete : ''}`}>
        {/* <CardMedia
          component='img'
          alt={t(image.alt)}
          height='140'
          image={image.src}
        /> */}
        {/* TODO: Al cambiar de elemento para la imagen se ha descentrado */}
        {/* TODO: Y en concreto el primer proyecto falla en el lighthouse de brave */}
        <Image
          src={image.src} alt={t(image.alt)} width={1000} height={140}
          sizes='(max-width: 1400px) 100vw, 1400px'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' className={styles.project__title}>
            {t(title)}

          </Typography>
          <Typography variant='body2'>
            {t(description)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant='contained' size='small'
            className={styles.project__button}
            href='https://wwww.code.com '
          >{/* endIcon={<BsFillFileCodeFill />} */}
            {t('source code')}

            {/* <Link href={links.source.content}>Code</Link> */}
          </Button>
          <Button
            variant='contained' size='small'
            className={styles.project__button}
            href='https://wwww.code.com'
          > {/* endIcon={<MdWeb />} */}
            {t('web site')}

          </Button>
        </CardActions>
      </Card>

    )
  }
  const ProjectIncomplete = () => {
    return (
      <Card sx={{ maxWidth: 345 }} className={styles.project}>
        <Skeleton variant='rectangular' width={210} height={118} />

        <CardContent>
          <Typography gutterBottom variant='h5' component='div' className={styles.project__title}>
            {t(title)}

          </Typography>
          <Typography variant='body2'>
            {/* {t(description)} */}
            joder no quiere
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant='contained' size='small'
            className={styles.project__button}
            href='https://wwww.code.com '
          >{/* endIcon={<BsFillFileCodeFill />} */}
            {t('source code')}
            {/* <Link href={links.source.content}>Code</Link> */}
          </Button>
          <Button
            variant='contained' size='small'
            className={styles.project__button}
            href='https://wwww.code.com'
            disabled
          > {/* endIcon={<MdWeb />} */}{t('web site')}
          </Button>
        </CardActions>
      </Card>
    )
  }

  return (
    project
      ? (<ProjectComplete />
    // (project.isComplete) ? (<ProjectComplete />) : <ProjectIncomplete />
        )
      : (<ProjectSkeleton />)
  )
}
const ProjectSkeleton = () => <Skeleton variant='rectangular' width={210} height={118} />
