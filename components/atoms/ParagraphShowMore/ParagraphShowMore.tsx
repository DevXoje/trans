import React, { useState } from 'react'
import { IconButton, Typography } from '@mui/material'
import { jsx } from '@emotion/react'
import styles from '@/styles/ParagraphShowMore.module.scss'
import JSX = jsx.JSX;

const ParagraphShowMore = ({
  content,
  maxLength = 251,
  className
}: { content: string, maxLength?: number, className?: string }) => {
  const [showMore, setShowMore] = useState(false)
  const haveMaxLength = content.length > maxLength
  let finalContent: JSX.Element = <>{content}</>
  if (haveMaxLength) {
    const contentSnippet = content.substring(0, maxLength)
    finalContent = (
      <>
        {showMore ? content : contentSnippet}
        <IconButton// TODO: hacer el boton mas llamativo
          aria-label='delete' size='small'
          onClick={() => setShowMore(!showMore)}
          className={styles.paragraph__icon}
        >
          {showMore ? '⤴️' : '⤵️'}
        </IconButton>
      </>
    )
  }
  return (
    <Typography
      variant='body1'
      className={className}
      paragraph
    >
      {finalContent}
    </Typography>
  )
}
/*
ParagraphShowMore.propType = {
  content: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  className: PropTypes.string
}
*/

export default ParagraphShowMore