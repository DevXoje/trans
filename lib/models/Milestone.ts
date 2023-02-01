import { jsx } from '@emotion/react'
import JSX = jsx.JSX;
import { TimelineDotProps } from '@mui/lab'

export type MilestoneContent = { title: string; description: string }

export type Milestone = {
    oppositeContent: string;
    content: MilestoneContent;
    icon?: JSX.Element;
    dotStyles?: TimelineDotProps,
    connectorColor?: string
}
