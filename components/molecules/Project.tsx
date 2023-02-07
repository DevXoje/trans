import { Project as ProjectModel } from '@/lib/models/Project'
import { Button, Card, CardActions, CardContent, Skeleton, Typography } from '@mui/material'
import styles from '../../styles/Project.module.scss'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import ParagraphShowMore from '@/components/atoms/ParagraphShowMore'
/* import { BsFillFileCodeFill } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md' */

export default function Project ({ project }: { project: ProjectModel }) {
  const { title, description, image } = project
  const { t } = useTranslation('projects')
  const ProjectComplete = () => {
    return (
      <Card className={`${styles.project} ${!project.isComplete ? styles.incomplete : ''}`}>
        {/* <CardMedia
          component='img'
          alt={t(image.alt)}
          height='140'
          image={image.src}
        /> */}
        {/* TODO: Al cambiar de elemento para la imagen se ha descentrado */}
        {/* TODO: Y en concreto el primer proyecto falla en el lighthouse de brave */}
        <Image
          src={image.src} alt={t(image.alt)} width={468}
          height={1000}// 140h?
          className={styles.project__image}
        />
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

  return (
    project
      ? (<ProjectComplete />
    // (project.isComplete) ? (<ProjectComplete />) : <ProjectIncomplete />
        )
      : (<ProjectSkeleton />)
  )
}
const ProjectSkeleton = () => <Skeleton variant='rectangular' width={210} height={118} />
