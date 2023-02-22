import React, { useState } from 'react'
import { Box, Button, Fade, Tooltip, Typography, Zoom } from '@mui/material'
import styles from './ParagraphShowMore.module.scss'
import useTranslation from 'next-translate/useTranslation'

const FadeComponent = ({ isActive, content }:{isActive: boolean, content: string}) =>
  <Fade
    in={isActive}
        // timeout={1000}
    unmountOnExit
  >
    <Box component='span'>{content}</Box>
  </Fade>

const ToggleButton = (
  { onClick, showMore }:
  {onClick: React.MouseEventHandler<HTMLButtonElement>, showMore:boolean}) => {
  const { t } = useTranslation('common')
  const tooltipTitle = showMore ? t('show less') : t('show more')
  return (
    <Tooltip
      TransitionComponent={Zoom}
      title={tooltipTitle}
    >
      <Button
        aria-label='delete'
        size='small'
        onClick={onClick}
        className={styles.paragraph__icon}
      >
        {showMore ? '⤴️' : '⤵️'}
      </Button>
    </Tooltip>
  )
}

const ParagraphShowMore = (
  { content, maxLength = 251, className }: { content: string, maxLength?: number, className?: string }) => {
  const [showMore, setShowMore] = useState(false)

  let finalContent = <Box className={`${styles.paragraph} $                                                              {className}`}>{content}</Box>
  const haveMaxLength = content.length > maxLength
  if (haveMaxLength) {
    const contentSnippet = content.substring(0, maxLength)
    const contentExtra = content.substring(maxLength, content.length - 1)
    finalContent = (
      <Box className={className}>
        <Typography className={`${styles.paragraph} ${!showMore ? styles.paragraph__gradient : ''}`}>
          {contentSnippet}{!showMore && '...'}
          <FadeComponent isActive={showMore} content={contentExtra} />
        </Typography>
        <ToggleButton showMore={showMore} onClick={() => setShowMore(!showMore)} />
      </Box>
    )
  }
  return finalContent
}
export default ParagraphShowMore
