export default function TimeLineStudies () {}/*
'use client'
import Timeline from '@mui/lab/Timeline'
import { AiFillAccountBook } from 'react-icons/ai'
import Milestone from '../molecules/Milestone'
import { Milestone as MilestoneModel } from '@models/Milestone'
import {
  MilestoneDescriptionMethods, MileStoneInfo,
  MyEventMouse,
  useMilestone,
  usePosition
} from '../../utils/Timeline'
import React, { useRef } from 'react'
import MilestoneDescription from '../molecules/MilestoneDescription'
import { searchClassTree } from '../../utils/Common'

export default function TimeLineStudies () {
  const milestones = React.use(getMilestones())
  const { milestone, setMilestone } = useMilestone()
  const { position, setPosition, handlePosition, styleToPosition } = usePosition()
  const getMilestoneByTitle = (title: string) => {
    const found = milestones.find(ms => ms.content.title === title)
    return found !== undefined ? found : milestones[0]
  }
  const childRef = useRef<MilestoneDescriptionMethods>(null)
  const callChildMethod = () => {
    childRef.current?.toggleDrawer(position, true)
  }
  const handleOutClick = (event: MyEventMouse) => {
    const dotClass = 'MuiTimelineDot-root'
    const target = event.target as HTMLElement
    const parent = target.parentElement as HTMLElement
    const grandpa = parent.parentElement as HTMLElement
    const isDot = target.classList.contains(dotClass)
    const dotIsParent = parent.classList.contains(dotClass)
    const dotIsGrandpa = grandpa.classList.contains(dotClass)
    if (!isDot && !dotIsParent && !dotIsGrandpa) {
      setPosition('center')
    } else {
      handleClick(event)
      callChildMethod()
    }
  }
  const handleClick = (event: MyEventMouse) => {
    const target = event.target as HTMLElement
    const wrapper = searchClassTree('milestone', target)
    const milestoneInfo: MileStoneInfo = handlePosition.togglePosition(wrapper) as MileStoneInfo
    const selected = getMilestoneByTitle(milestoneInfo.milestone_title)
    setMilestone(selected)
    // handleMilestone.openDrawer(wrapper)
    console.log(milestoneInfo)
    if (milestoneInfo.position === 'even') {
      setPosition('left')
    } else {
      setPosition('right')
    }
  }

  const renderMilestones = milestones.map(ms =>
    <Milestone
      key={ms.content.title} milestone={ms}
    />)

  return (
    <section className='hidden'>
      <header>
        <h2>Mi historia</h2>
      </header>
      <Timeline
        sx={styleToPosition}
        onClick={handleOutClick}
        position='alternate'
      >
        <MilestoneDescription
          content={milestone.content}
          position={position}
        />
        {renderMilestones}
      </Timeline>
    </section>
  )
}

/!*
function getMilestones (): MilestoneModel[] {
  return [
    {
      icon: <AiFillAccountBook />,
      oppositeContent: '09:30 am',
      content: {
        title: 'Inicio',
        description: 'Because you need strength'
      }
    },
    {
      icon: <AiFillAccountBook />,
      oppositeContent: '09:30 am',
      content: {
        title: 'Typescript',
        description: 'Because you need strength'
      },
      dotStyles: { color: 'primary' }
    },
    {
      icon: <AiFillAccountBook />,
      oppositeContent: '09:30 am',
      content: {
        title: 'Eat',
        description: 'Because you need strength'
      },
      dotStyles: {
        color: 'primary',
        variant: 'outlined'
      }
    },
    {
      icon: <AiFillAccountBook />,
      oppositeContent: '09:30 am',
      content: {
        title: 'Laravel',
        description: 'Because you need strength'
      },
      dotStyles: {
        color: 'secondary',
        variant: 'filled'
      },
      connectorColor: 'secondary.main'
    }
  ]
}
*!/

function getMilestones () {
  const milestones: MilestoneModel[] = [
    {
      icon: <AiFillAccountBook />,
      oppositeContent: '09:30 am',
      content: {
        title: 'Inicio',
        description: 'Because you need strength'
      }
    },
    {
      icon: <AiFillAccountBook />,
      oppositeContent: '09:30 am',
      content: {
        title: 'Typescript',
        description: 'Because you need strength'
      },
      dotStyles: { color: 'primary' }
    },
    {
      icon: <AiFillAccountBook />,
      oppositeContent: '09:30 am',
      content: {
        title: 'Eat',
        description: 'Because you need strength'
      },
      dotStyles: {
        color: 'primary',
        variant: 'outlined'
      }
    },
    {
      icon: <AiFillAccountBook />,
      oppositeContent: '09:30 am',
      content: {
        title: 'Laravel',
        description: 'Because you need strength'
      },
      dotStyles: {
        color: 'secondary',
        variant: 'filled'
      },
      connectorColor: 'secondary.main'
    }
  ]
  return new Promise<MilestoneModel[]>((resolve, reject) => {
    resolve(milestones)
    // reject('Error.')
  })
}
*/
