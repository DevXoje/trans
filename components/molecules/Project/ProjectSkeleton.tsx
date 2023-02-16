import { Card, CardActions, CardContent, Skeleton, SxProps, Theme } from '@mui/material'
import styles from './Project.module.scss'

const animation = 'wave'
const sxInline: SxProps<Theme> = {}

const ButtonSkeleton = () => <Skeleton
  variant='rounded'
  className={styles.project__button}
  height={50}
  animation={animation}
                             />

const ProjectSkeleton = () => {
  return (
    <Card className={`${styles.project} ${styles.incomplete} ${styles.projectSkeleton} `}>
      <Skeleton variant='rectangular' height={140} className={styles.project__image} animation={animation} />
      <CardContent>
        <Skeleton
          variant='text'
          sx={{ fontSize: '2.5rem' }}
          width={130}
          className={`${styles.project__title} ${styles.project__titleSkeleton}`}
          animation={animation}
        />
        <Skeleton
          variant='text'
          className={styles.projectSkeleton__paragraph}
          sx={{ fontSize: '1rem' }}
          width={200}
          animation={animation}
        />
        <Skeleton
          variant='text'
          className={styles.projectSkeleton__paragraph}
          sx={{ fontSize: '1rem' }}
          width={200}
          animation={animation}
        />
        <Skeleton
          variant='text'
          className={styles.projectSkeleton__paragraphShort}
          sx={{ fontSize: '1rem', ...sxInline }}
          width={150}
          animation={animation}
        />
        <Skeleton
          variant='circular'
          className={styles.projectSkeleton__paragraphButton}
                    // sx={{ ...sxInline }}
          animation={animation}
          width={30}
          height={30}
        />

      </CardContent>
      <CardActions className={styles.project__group_buttons}>
        <ButtonSkeleton />
        <ButtonSkeleton />
      </CardActions>
    </Card>
  )
}

export default ProjectSkeleton
