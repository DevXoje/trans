import { Experience } from '@/lib/models/Experience'
import useTranslation from 'next-translate/useTranslation'
import { Typography } from '@mui/material'

const Experience = ({ experience }: { experience: Experience }) => {
  const { t } = useTranslation('common')
  const { title, description, rangeTime } = experience
  return (
    <li>
      <Typography variant='h3'>
        {t(title)}
      </Typography>
      <Typography variant='subtitle1'>
        {rangeTime.from} {rangeTime.to ? `- ${rangeTime.to}` : '- current'}
      </Typography>
      <Typography variant='body1'>
        {t(description)}
      </Typography>
    </li>

  )
}
export default Experience
