import { Experience } from '@/lib/models/Experience'
import useTranslation from 'next-translate/useTranslation'

const Experience = ({ experience }: { experience: Experience }) => {
  const { t } = useTranslation('common')
  const { title, description } = experience
  return (
    <>
      <h2>{t(title)}</h2>
      <p>{t(description)}</p>

    </>
  )
}
export default Experience
