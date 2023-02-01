import { Project as ProjectModel } from '@/lib/models/Project'
import { Button, Card, CardActions, CardContent, CardMedia, Link, Skeleton, Typography } from '@mui/material'
import styles from '../../styles/Project.module.scss'
/* import { BsFillFileCodeFill } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md' */

export default function Project ({ project }: { project: ProjectModel }) {
  const { title, description, image } = project
  return (
    project
      ? (
        <Card sx={{ maxWidth: 345 }} className={styles.project}>
          <CardMedia
            component='img'
            alt={image.alt}
            height='140'
            image={image.src}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div' className={styles.project__title}>
              {title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='contained' size='small'>{/* endIcon={<BsFillFileCodeFill />} */}
              <Link href='https://wwww.code.com' color='inherit'>Code</Link>
              {/* <Link href={links.source.content}>Code</Link> */}
            </Button>
            <Button variant='contained' size='small'> {/* endIcon={<MdWeb />} */}Web</Button>
          </CardActions>
        </Card>
        )
      : (<ProjectSkeleton />)
  )
}

function ProjectSkeleton () {
  return (<Skeleton variant='rectangular' width={210} height={118} />)
}
