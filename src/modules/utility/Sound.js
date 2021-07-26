/** @jsx jsx */
import {Box, jsx} from 'theme-ui';

//This sound component is a basic recreation of what the remark-gatsby-video plugin creates.
//We inline the allowances and styles as needed, but this can be used for anything that can be embed into an iframe.
const Sound = ({src, title}) => (
  <Box
    sx={{
      pb: ['40%', '20%', '10%'],
      position: 'relative',
      height: 0,
      overflow: 'hidden',
      marginBottom: 4
    }}>
    <Box>
      <iframe
        src={src}
        title={title || 'Inlined Iframe Video'}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sx={{
          border: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100px'
        }}></iframe>
    </Box>
  </Box>
);

export default Sound;
