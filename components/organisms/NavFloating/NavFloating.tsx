import React, { FC, useState } from 'react'
import styles from './NavFloating.module.scss'
import { BottomNavigation, BottomNavigationAction, Box, Button, ButtonProps, Slide, SlideProps } from '@mui/material'
import useScroll from '@/hooks/UseScroll'
import { Section } from '@/lib/models/Section'

const RenderSections = ({ sections }:{sections:Section[]}) =>
  <>
    {sections.map(section =>
      <BottomNavigationAction
        label={section.id}
        value={section.id}
        icon={section.icon}
        key={section.id}
        onClick={(event) => handleClick(event, section.id)}
      />)}
  </>
const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
  event.preventDefault()
  const element = document.getElementById(id)
  if (!element) return
  const offset = 70 // La cantidad de píxeles que deseas mover hacia abajo el componente
  const bodyRect = document.body.getBoundingClientRect().top
  const elementRect = element.getBoundingClientRect().top
  const elementPosition = elementRect - bodyRect
  const offsetPosition = elementPosition - offset
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}
const NavFloating: FC = () => {
  const { sections, actualSection, setActualSection } = useScroll()
  const [show, setShow] = useState(false)
  const slideProps:SlideProps = {
    direction: 'left',
    in: !show,
    timeout: 1000,
    mountOnEnter: true,
    unmountOnExit: true,
    children: <></>
  }
  const buttonProps:ButtonProps = {
    variant: 'contained',
    color: 'primary'
  }
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(newValue)
    /*   const sectionActual = sections.find(section => section.position - 30 > positionActual) setActualSection(newValue) */
  }

  return (
    <>
      <Box className={`${styles.navFloating}`}>
        <Slide {...slideProps} in={!show}>
          <Button {...buttonProps} onClick={() => setShow(true)}>Menu</Button>
        </Slide>
        <Slide {...slideProps} in={show}>
          <BottomNavigation
            value={actualSection?.id}
            onChange={handleChange}
            className={`${styles.navFloating__items}`}
          >
            <Button {...buttonProps} onClick={() => setShow(false)}>X</Button>
            <RenderSections sections={sections} />
          </BottomNavigation>
        </Slide>
      </Box>
    </>
  )
}
export default NavFloating
