'use client'
import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import styles from '@/styles/Navbar.module.scss'
import LanguageSwitcher from '@/components/atoms/LanguageSwitcher'

// const Navbar = ({ t }:{t:TFunction}) => {
const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar className={styles.navbar}>
          <Typography variant='h6' component='div' className={styles.navbar__title}>
            Xoje
          </Typography>
          {/* <LinkList params={params} /> */}
          {/* <ModeSwitcher /> */}
          <LanguageSwitcher />
        </Toolbar>
      </AppBar>
      <Toolbar id='back-to-top-anchor' />
      {/* <ScrollTop>
        <Fab size='small' aria-label='scroll back to top' className='back_to_top'>
           <AiOutlineArrowUp />
        </Fab>
      </ScrollTop> */}
    </>
  )
}

// export default withTranslation()(Navbar)
export default Navbar
/*
* import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

export default function BackToTop(props: Props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Scroll to see button
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <Container>
                <Box sx={{ my: 2 }}>
                    {[...new Array(12)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}
* */
