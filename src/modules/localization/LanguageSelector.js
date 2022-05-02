/** @jsx jsx */
import { Select } from '@modules/ui'
import { navigate } from 'gatsby'
import { useTranslation } from '@modules/localization'
import { Link } from '@modules/navigation'
import { Fragment } from 'react'
import { Box, jsx, Text, useThemeUI } from 'theme-ui'

const LanguageSelector = ({ data, pagePath }) => {
  const { theme } = useThemeUI()
  const { locale, t, allLocales } = useTranslation()

  const onChange = ({ value }) => {
    //Update local storage on switch
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', value.split('/')[1])
    }

    navigate(value)
  }

  //Override select component theme with our theme since it's not connected to theme-ui
  const uiSelectTheme = {
    primary: theme.colors.primary,
    primary75: theme.colors.success,
    primary50: theme.colors.primaryMuted,
    primary25: theme.colors.successAlt,
    danger: theme.colors.bear,
    dangerLight: theme.colors.bearAlt,
  }

  const availableLanguages = allLocales.filter((loc) => loc !== locale)

  return (
    <Box
      sx={{
        p: [0, 0, 3],
        width: ['100%', '100%', '234px'],
        border: ['unset', 'unset', '1px solid'],
        borderColor: 'text',
        borderRadius: '12px',
        bg: 'background',
        mb: 2,
        mt: ['unset', 'unset', '64px'],
        position: 'relative',
        right: 0,
        top: 0,
      }}>
      <Select
        isSearchable={false}
        theme={(selectTheme) => ({
          ...selectTheme,
          fontFamily: theme.fonts.body,
          colors: { ...selectTheme.colors, ...uiSelectTheme },
        })}
        sx={{
          display: ['inline-block', 'block', 'block'],
          width: '100%',
          mb: 2,
        }}
        options={data}
        onChange={onChange}
        aria-label={t('Page_Language_Selector')}
        value={{
          value: pagePath,
          label: t('Language'),
        }}
      />

      <Text
        sx={{
          display: ['inline-block', 'inline-block', 'block'],
          mr: [2, 2, 'unset'],
        }}>
        {t('Available_Languages', null, {
          count: availableLanguages.length,
        })}
      </Text>

      <Text
        sx={{
          mb: [1, 1, 2],
          letterSpacing: '.7rem',
          display: ['inline-block', 'inline-block', 'block'],
        }}>
        {availableLanguages.length > 0 && (
          <Fragment>
            {availableLanguages.map((loc) => t('Flag', null, null, loc))}
          </Fragment>
        )}
      </Text>

      <Box>
        <Text
          sx={{
            lineHeight: 'normal',
            display: ['inline-block', 'inline-block', 'unset'],
          }}>
          {`${t('Need_Another_Language')}  `}
          <Link
            to="/en/guiding/writers/translation"
            sx={{
              color: 'link',
              textDecoration: 'none',
              fontWeight: '500',
              mt: 1,
              lineHeight: 'normal',
              display: ['inline-block', 'inline-block', 'block'],
            }}>
            {t('Join_translation_team')}
          </Link>
        </Text>
      </Box>
    </Box>
  )
}

export default LanguageSelector
