/** @jsx jsx */
import { Children } from 'react'
import { Flex, jsx } from 'theme-ui'

const InfoBlock = ({ children }) => {
  let _Children = Children.toArray(children)

  //NOTE(Rejon): In the future when css4 comes out this will be replaced by the :has() selector!
  const hasImage = _Children.find((n) => {
    const _isTrue =
      n.props.mdxType === 'Image' ||
      (n.props.children &&
        !Array.isArray(n.props.children) &&
        n.props.children.props &&
        n.props.children.props.mdxType === 'img')

    if (_isTrue) {
      return _isTrue
    }

    return false
  })

  return (
    <Flex
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: ['column', 'column', 'row'],
        width: '100%',
        // px: ['20px', '20px', '2%'],
        // py: ['60px', '60px', '72px'],
        textAlign: hasImage ? '' : 'center',
        '& > *': {
          width: ['100%', '50%', '50%'],
          minWidth: ['unset', 'unset', '300px'],
          mb: 0,
          margin: hasImage ? '' : 'auto',
          '& > *': {
            mx: hasImage ? '' : 'auto',
          },
        },
        '& > img': {
          height: '100%',
          width: ['90%', '50%', '50%'],
          objectFit: 'cover',
          objectPosition: 'center',
          order: [-1, -1, 0],
        },
        '& > *:first-of-type': {
          minWidth: ['unset', 'unset', '250px'],
          mr: hasImage ? [0, 0, '4%'] : 0,
        },
        '& > *:last-child': {
          minWidth: ['unset', 'unset', '250px'],
          ml: hasImage ? [0, 0, '4%'] : 0,
        },
      }}>
      {_Children.map((child) => child)}
    </Flex>
  )
}

export default InfoBlock
