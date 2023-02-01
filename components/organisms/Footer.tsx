import { Grid, Paper, Typography } from '@mui/material'

export default function Footer () {
  const currentYear: number = new Date().getFullYear()
  return (
    <footer>
      <Grid container>
        <Grid item xs={12}>
          <Paper>
            <Typography variant='body2'>Copyright ©{currentYear}. All rights reserved.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </footer>
  )
}
