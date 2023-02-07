import React, { useState } from 'react'
import { IconButton, Typography } from '@mui/material'
import { jsx } from '@emotion/react'
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
          style={{ color: 'inherit' }}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? '^' : '...'}
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

export default ParagraphShowMore
