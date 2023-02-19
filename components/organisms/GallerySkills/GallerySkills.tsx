import Section from '@/components/molecules/Section'
import { Grid, Paper } from '@mui/material'
import { FaAngular } from 'react-icons/all'

const GallerySkills = () => {
  const angularGroup = [{ text: 'Angular', icon: <FaAngular /> }]

  const title = 'Skills'
  return (
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
  )
}
export default GallerySkills
