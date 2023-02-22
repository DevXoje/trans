'use client'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import styles from '@/styles/Navbar.module.scss'
import LanguageSwitcher from '@/components/atoms/LanguageSwitcher/LanguageSwitcher'
import ModeSwitcher from '@/components/atoms/ModeSwitcher/ModeSwitcher'
import Image from 'next/image'
import Link from 'next/link'

// const Navbar = ({ t }:{t:TFunction}) => {
const Navbar = () => {
  /*  const nav = useRef<HTMLElement | undefined>(undefined)
            useEffect(() => {
              const navElement = nav.current as HTMLElement
              console.log(navElement.offsetWidth)
              console.log(navElement.classList)
            }, [nav]) */
  const logo = {
    src: '/images/logo.png',
    alt: 'Xoje',
    width: 50,
    height: 50
  }
  return (

    <>

      <AppBar className={styles.navbar}>
        <Toolbar component='nav' className={styles.navbar__toolbar}>
          <Link href='/'>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: 150 }}>
              <Image {...logo} />
              <Typography variant='h6' component='h1' className={styles.navbar__title}>
                Xoje
              </Typography>
            </Box>
          </Link>
          {/* <LinkList params={params} /> */}
          <ModeSwitcher />
          <LanguageSwitcher />
          {/*  <button onClick={() => {
            console.log(nav.current?.offsetWidth)
            console.log(nav.current?.classList)
          }}
          >click
          </button> */}
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
