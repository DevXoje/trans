import { FaAngular } from 'react-icons/fa'
import { useEffect } from 'react'
import styles from './GallerySkills.module.scss'
import { Grid } from '@mui/material'
import Section from '@/components/molecules/Section'

const GallerySkills = () => {
  useEffect(() => {
    const cardsGroup = document.getElementById('cards')
    const cards = document.getElementsByClassName(styles.card)

    if (cardsGroup != null && cards != null) {
      cardsGroup.onmousemove = e => {
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i] as HTMLElement
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          card.style.setProperty('--mouse-x', `${x}px`)
          card.style.setProperty('--mouse-y', `${y}px`)
        }
      }
    }
  }, [])

  // const angularGroup = [{ text: 'Angular', icon: <FaAngular /> }]

  const title = 'Skills'
  return (
    <Section title={title} withContrast>
      <Grid container className={styles.cards} id='cards'>
        {
                    [1, 2, 3, 4].map((item, index) =>
                      <Grid item key={index} className={styles.card}>
                        <div className={styles.card__content}>
                          <div className={styles.card__image}>
                            <FaAngular size={100} />
                          </div>
                          <div className={styles.card__info_wrapper}>
                            <div className={styles.card__info}>
                              <i className='fa-duotone fa-apartment' />
                              <div className={styles.card__info_title}>
                                <h3>Apartments</h3>
                                <h4>Places to be apart. Wait, what?</h4>
                              </div>
                            </div>
                          </div>
                        </div>

                      </Grid>
                    )
                }

      </Grid>
    </Section>

  )
  /* return (
        <Section title={title} withContrast>
          <Grid container>
            <Grid item>
              <Paper
                elevation={3} sx={{
                  bgcolor: 'primary.main',
                  padding: '1rem'

                }}
              >
                <h3>{angularGroup[0].text}</h3>
              </Paper>
            </Grid>
            <Grid item>
              <Paper
                elevation={3} sx={{
                  bgcolor: 'primary.main',
                  padding: '1rem'
                }}
              >
                <h3>React</h3>
              </Paper>
            </Grid>

          </Grid>
        </Section>
      ) */
}
export default GallerySkills
