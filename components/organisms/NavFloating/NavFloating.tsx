import React, { FC, ReactNode, useEffect, useState } from 'react'
import styles from './NavFloating.module.scss'
import { GrUserWorker, GrWorkshop } from 'react-icons/gr'
import { BsFillPersonBadgeFill } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'
import { TfiLayoutPlaceholder } from 'react-icons/tfi'
import Link from 'next/link'
import { Button, Slide } from '@mui/material'

interface Section {
    id: string;
    position: number;
    icon: ReactNode;
}

const assignIcon = (id: string) => {
  switch (id) {
    case 'aboutme':
      return <BsFillPersonBadgeFill />
    case 'skills':
      return <MdWork />
    case 'experiences':
      return <GrUserWorker />
    case 'gallery_projects':
      return <GrWorkshop />
    default:
      return <TfiLayoutPlaceholder />
  }
}

const useScroll = () => {
  const [sections, setSections] = useState<Section[]>([])
  const [actualSection, setActualSection] = useState<Section | undefined>(undefined)
  useEffect(() => {
    if (sections.length > 2) return
    const sectionsHTML = document.querySelectorAll('section')
    const sectionsPositions: Section[] = Array.from(sectionsHTML).map(
      (section: Element) => {
        return {
          id: section.id,
          position: section.getBoundingClientRect().top,
          icon: assignIcon(section.id)
        }
      }
    )
    setSections(sectionsPositions)
    // setActualSection(sectionsPositions[0])
  }, [sections])
  useEffect(() => {
    const handleScroll = () => {
      const positionActual = window.scrollY
      const sectionActual = sections.find(section => section.position - 30 > positionActual)
      if (!sectionActual) return
      setActualSection(sectionActual)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  return { sections, actualSection }
}
const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
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
  const { sections, actualSection } = useScroll()
  const [show, setShow] = useState(false)

  /*  const renderSections = sections.map((section) => (
            <li key={section.id} className={actualSection?.id === section.id ? styles.actual : ''}>
              <a href={`#${section.id}`} onClick={(event) => handleClick(event, section.id)}>{section.icon}</a>
            </li>
          )) */
  const renderSections = sections.map((section) => (
    <li
      key={section.id}
      className={actualSection?.id === section.id ? styles.actual : ''}
    >
      <Link
        href=''
        onClick={(event) => handleClick(event, section.id)}
      >
        {section.icon}
      </Link>
    </li>
  ))
  return (
    <div className={styles.navFloating}>
      <Slide direction='left' in={!show} timeout={1000} mountOnEnter unmountOnExit>
        <Button variant='contained' color='primary' onClick={() => setShow(true)}>Menu</Button>
      </Slide>
      <Slide direction='left' in={show} timeout={1000} mountOnEnter unmountOnExit>
        <ul className={styles.navFloating__items}>
          <Button variant='contained' color='primary' onClick={() => setShow(false)}>X</Button>

          {renderSections}
        </ul>
      </Slide>
    </div>
  )
}

/* import React, {useState, useEffect} from 'react';

interface Seccion {
    id: string;
    posicion: number;
}

const NavegadorFlotante: React.FC = () => {
    const [secciones, setSecciones] = useState<Seccion[]>([]);

    useEffect(() => {
    const secciones = document.querySelectorAll('section');
    const seccionesPosiciones: Seccion[] = Array.from(secciones).map(
    (seccion: Element) => {
    return {
    id: seccion.id,
    posicion: seccion.getBoundingClientRect().top,
};
}
    );
    setSecciones(seccionesPosiciones);
}, []);

    useEffect(() => {
    const handleScroll = () => {
    const posicionActual = window.scrollY;
    const seccionActual = secciones.find((seccion) => {
    return seccion.posicion > posicionActual;
});
    console.log('Sección actual:', seccionActual?.id);
};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, [secciones]);

    return (
    <div className="navegador-flotante">
    <ul>
{secciones.map((seccion) => (
    <li key={seccion.id}>
    <a href={`#${seccion.id}`}>{seccion.id}</a>
    </li>
    ))}
    </ul>
    </div>
    );
};

export default NavegadorFlotante; */
export default NavFloating
