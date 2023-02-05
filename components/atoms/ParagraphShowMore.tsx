import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'
import { jsx } from '@emotion/react'
import JSX = jsx.JSX;

const maxLength = 251
const ParagraphShowMore = ({ content, className }: { content: string, className: string }) => {
  const [showMore, setShowMore] = useState(false)
  const haveMaxLength = content.length > maxLength
  let finalContent: JSX.Element = <>content</>
  if (haveMaxLength) {
    const contentSnippet = content.substring(0, maxLength)
    finalContent = (
      <>
        {showMore && !haveMaxLength ? content : contentSnippet}
        <Button
          variant='contained'
          onClick={() => setShowMore(!showMore)}
        >{showMore ? 'show less' : '...'}
        </Button>
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
