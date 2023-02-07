'use client'
import i18n from '../../i18n'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { Box, Skeleton, ToggleButton, ToggleButtonGroup } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

const locales = i18n.locales
const defaultLocale: string = i18n.defaultLocale

// type SupportedLocales = keyof typeof locales;
const LanguageSwitcher = () => {
  // const [locale, setLocale] = React.useState<SupportedLocales>(defaultLocale);
  const [locale, setLocale] = React.useState<string>(defaultLocale)

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return <Skeleton variant='rectangular' width={100} height={50} />
  }

  const renderLanguages = () =>
    locales.map((locale: string) => {
      // const name = locale.split('-')[0]
      return (
        <ToggleButton key={locale} value={locale} aria-label='left aligned' sx={{ width: 'none' }}>
          <Link href={`/${locale}`} locale={locale}>
            <Image src={`/icons/${locale}.svg`} alt='language english' width={30} height={30} priority />
          </Link>
        </ToggleButton>
      /* //<MenuItem value={name} key={name}>
                                                                                                              <Link href="/" locale={name} legacyBehavior>
                                                                                                              {name}
                                                                                                            </Link>
                                                                                                          //</MenuItem> */
      )
    })

  const handleLocale = (
    event: React.MouseEvent<HTMLElement>,
    newLocale: string
  ) => {
    setLocale(newLocale)
  }
  return (
    <>
      <Box width={150}>
        <ToggleButtonGroup
          value={locale}
          exclusive
          onChange={handleLocale}
          aria-label='text locale'
        >
          {renderLanguages()}
        </ToggleButtonGroup>

        {/* <FormControl fullWidth>
        <InputLabel id='language_label'>{"language"}</InputLabel>
        <Select
          labelId='language'
          id='demo-simple-select'
          value={language}
          label='language'
          onChange={handleChange}
        >
          {renderLanguages()}
        </Select>
          <Autocomplete
              options={locales}
              //getOptionLabel={(key) => `${key.substring(0, 2)}-${key.substring(2, 4)}`}
              style={{ width: 300 }}
              value={locale}
              disableClearable
              onChange={(event: any, newValue: string | null) => {
                  console.log(newValue)
                  setLocale(newValue);
              }}
              renderInput={(params) => (
                  <TextField {...params} label="Locale" fullWidth />
              )}
          />
      </FormControl> */}

      </Box>
    </>

  )
}

export default LanguageSwitcher
/*
<ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup> */
