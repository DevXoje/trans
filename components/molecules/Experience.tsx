import { Experience } from '@/lib/models/Experience'
import useTranslation from 'next-translate/useTranslation'
import { Typography } from '@mui/material'
import styles from '@/styles/Experience.module.scss'
import ParagraphShowMore from '@/components/atoms/ParagraphShowMore/ParagraphShowMore'
import Image from 'next/image'

// eslint-disable-next-line no-import-assign,no-redeclare
const Experience = ({ experience }: { experience: Experience }) => {
  const { t } = useTranslation('experiences')
  const { title, description, shift, thumbnail, address, enterprise, otherTime } = experience
  const addressString = `${address.city}, ${address.state}, ${address.country}`
  const formatTime = (time: Date) => {
    return time.toLocaleString('en', { month: 'long' }).substring(0, 3) + '. ' + time.getFullYear()
  }
  const diffDate = Math.floor((otherTime.to.getTime() - otherTime.from.getTime()) / (1000 * 60 * 60 * 24 * 30)) + ' months'// TODO: Make units dynamic

  return (
    <div className={styles.experience}>
      <Image {...thumbnail} style={{ backgroundColor: 'black' }} />

      <li>
        <Typography variant='h3' className={styles.experience__title}>
          {t(title)}
        </Typography>
        <Typography
          variant='subtitle1' component='h4'
          className={styles.experience__date}
        >{enterprise} Shift {shift}
        </Typography>
        <Typography variant='subtitle1' component='h4' className={styles.experience__date}>
          {formatTime(otherTime.from)} {otherTime.to ? `- ${formatTime(otherTime.to)}` : '- current'} {diffDate}
        </Typography>

        <Typography
          variant='subtitle1' component='h4'
          className={styles.experience__date}
        >
          {addressString}
        </Typography>
        <ParagraphShowMore content={t(description)} className={styles.experience__description} maxLength={10} />
      </li>
    </div>

  )
}
export default Experience
