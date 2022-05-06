/** @jsx jsx */

import { Icon } from '@makerdao/dai-ui-icons'
import { Box, Flex, Image, jsx } from 'theme-ui'

import { getAuthorData } from './BlogAuthor'

const BlogContributors = ({ contributors }) => {
  return (
    <Flex
      sx={{
        flexDirection: ['column', 'row', 'row'],
        justifyContent: 'space-evenly',
        margin: 'auto',
      }}>
      {contributors.map((author, index) => {
        const authorData = getAuthorData(author)

        return (
          <Flex
            key={`blog-contributor-${index}`}
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              mt: 2,
            }}>
            {authorData.avatar_url ? (
              <Box>
                <Image
                  src={authorData.avatar_url}
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 99999,
                    mt: [2, 'unset', 'unset'],
                  }}
                />
              </Box>
            ) : (
              <Icon
                name="person"
                size={'100px'}
                sx={{
                  color: 'primary',
                  mt: [2, 'unset', 'unset'],
                }}
              />
            )}

            <Box sx={{ mt: '12px' }}>
              <Box sx={{ mb: [2, 'unset', 'unset'] }}>{authorData.name}</Box>
            </Box>
          </Flex>
        )
      })}
    </Flex>
  )
}

export default BlogContributors
