import React, { useState } from 'react'
import { Box, Button, Fade, Tooltip, Typography, Zoom } from '@mui/material'
import styles from './ParagraphShowMore.module.scss'

const FadeComponent = ({ isActive, content }:{isActive: boolean, content: string}) => {
  const handleFadeEnd = (node:HTMLElement) => {
    const done = () => {
      // setInFade(false)
      // console.log({ showMore, inFade })
      console.log('done')
    }
    const ended = () => {
      console.log('ended')
    }
    // use the css transitionend event to mark the finish of a transition
    node.addEventListener('transitionend', done, false)
    node.addEventListener('ended', ended, false)
  }

  return (
    <Fade
      in={isActive}
        // timeout={1000}
      onExit={(e) => {
        console.log('algo')
      }}
      addEndListener={(e) => handleFadeEnd(e)}
      unmountOnExit
    >
      <Box component='span'>{content}</Box>
    </Fade>
  )
}
const ToggleButton = ({ onClick }:{onClick:any}) => {
  return (
    <Tooltip
      TransitionComponent={Zoom}
      title='show more'
    >
      <Button
        aria-label='delete'
        size='small'
        onClick={onClick}
        className={styles.paragraph__icon}
      >
        {/*  {showMore ? '⤴️' : '⤵️'} */}
        algo
      </Button>
    </Tooltip>
  )
}

const ParagraphShowMore = ({
  content,
  maxLength = 251,
  className
}: { content: string, maxLength?: number, className?: string }) => {
  const [showMore, setShowMore] = useState(false)
  const [inFade, setInFade] = useState(false)
  const handleShowMore = () => {
    console.log('amtes', { showMore, inFade })
    setShowMore(!showMore)

    /*    if (!showMore) {
      setInFade(showMore)
      setShowMore(!showMore)
    }
    setInFade(showMore) */
    console.log('despues', { showMore, inFade })
  }
  let finalContent = <>{content}</>
  const haveMaxLength = content.length > maxLength
  if (haveMaxLength) {
    const contentSnippet = content.substring(0, maxLength)
    const contentExtra = content.substring(maxLength, content.length - 1)
    finalContent = (
      <Box>
        <Typography className={styles.paragraph}>
          {contentSnippet}
          <FadeComponent isActive={showMore} content={contentExtra} />
        </Typography>

        <ToggleButton onClick={() => handleShowMore()} />
      </Box>
    )
  }
  return (
    finalContent
  )
}
export default ParagraphShowMore
