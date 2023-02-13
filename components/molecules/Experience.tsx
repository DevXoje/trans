import { Experience } from '@/lib/models/Experience'
import useTranslation from 'next-translate/useTranslation'
import { Typography } from '@mui/material'
import styles from '@/styles/Experience.module.scss'
import ParagraphShowMore from '@/components/atoms/ParagraphShowMore/ParagraphShowMore'

// eslint-disable-next-line no-import-assign,no-redeclare
const Experience = ({ experience }: { experience: Experience }) => {
  const { t } = useTranslation('experiences')
  const { title, description, rangeTime } = experience
  return (
    <li className={styles.experience}>
      <Typography variant='h3' className={styles.experience__title}>
        {t(title)}
      </Typography>
      <Typography variant='subtitle1' component='h4' className={styles.experience__date}>
        {rangeTime.from} {rangeTime.to ? `- ${rangeTime.to}` : '- current'}
      </Typography>
      <ParagraphShowMore content={t(description)} className={styles.experience__description} />
    </li>

  )
}
export default Experience
