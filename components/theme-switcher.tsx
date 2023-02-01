import * as React from 'react'
import { useState } from 'react'
import { Checkbox, FormControlLabel, Switch, Tooltip, useMediaQuery } from '@mui/material'

/* import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel"; */

interface ThemeSwitcherOptions {
    useOs?: boolean;
    useDark?: boolean;
    darkPrompt?: string;
    osPrompt?: string;
    tooltipText?: string;
    themeChanger: (useDark?: boolean) => void;
}

export default function ThemeSwitcherComponent (props: ThemeSwitcherOptions) {
  // const { prompt, useOs, useDark } = props;

  const expandedProps = {
    ...props,
    useOs: props.useOs || false,
    useDark: props.useDark || false,
    darkPrompt: props.darkPrompt || 'Use dark mode',
    osPrompt: props.osPrompt || 'Use OS preference',
    tooltipText: props.tooltipText || 'OS preference: '
  }

  const [state, setState] = useState(expandedProps)

  const handleCheck = (_e: any, checked: boolean) => {
    setState({ ...state, useOs: checked })
    state.themeChanger(checked ? undefined : state.useDark)
    console.log(state)
  }

  const handleSwitch = (_e: any, checked: boolean) => {
    setState({ ...state, useDark: checked })
    state.themeChanger(checked)
    console.log(state)
  }

  // Get OS-level preference for dark mode
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  return (
    <>
      <Tooltip
        title={state.tooltipText + (prefersDarkMode ? ' dark' : ' light')}
      >
        <FormControlLabel
          labelPlacement='end'
          label={state.osPrompt}
          control={<Checkbox checked={state.useOs} onChange={handleCheck} />}
        />
      </Tooltip>

      <FormControlLabel
        labelPlacement='end'
        label={state.darkPrompt}
        control={
          <Switch
            checked={state.useOs ? prefersDarkMode : state.useDark}
            disabled={state.useOs}
            onChange={handleSwitch}
          />
                }
      />
    </>
  )
}
