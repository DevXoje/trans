import React, { useEffect, useState } from 'react'
import { BsFillPersonBadgeFill } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'
import { GrUserWorker, GrWorkshop } from 'react-icons/gr'
import { TfiLayoutPlaceholder } from 'react-icons/tfi'
import { Section } from '@/lib/models/Section'

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
  const handleScroll = () => {
    const positionActual = window.scrollY
    const sectionActual = sections.find(section => section.position - 30 > positionActual)
    if (!sectionActual) return
    setActualSection(sectionActual)
  }
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
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections, handleScroll])

  return { sections, actualSection, setActualSection }
}
export default useScroll
