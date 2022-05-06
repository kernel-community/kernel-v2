import React from 'react'
import { Box, Image } from 'theme-ui'
import { SEO } from '@modules/utility'
import { InfoBlock } from '@modules/ui'
import { Heading, Subtitle } from '@modules/ui/heading'
import { CardGrid } from '@modules/testimonials'
import axios from 'axios'
import KernelHeart from '../../../static/images/kernel_heart.png'

const seo = {
  title: "Kernel's Wall of Love",
  description: 'Collected testimonials to help us explain what Kernel is.',
  keywords: 'community, kernel, contribute, WallOfLove',
  featuredImage: 'images/shares/giving.png',
}

class Love extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
    }
  }
  componentDidMount() {
    axios
      .get('https://kernel-wall-of-love.herokuapp.com/wol/raw')
      .then((response) => {
        this.setState({
          cards: response.data.data,
        })
      })
  }
  render() {
    return (
      <>
        <SEO {...seo} />
        <Box>
          <InfoBlock>
            <Box sx={{ textAlign: 'left' }}>
              <Heading level={1}>Wall of Love</Heading>
              <Subtitle>
                Collected testimonials to help us explain what Kernel is. These
                show &quot;the truth - that love is the ultimate and the highest
                goal to which we can aspire. Then we grasped the meaning of the
                greatest secret that human poetry and human thought and belief
                have to impart: our salvation is through love and in love.&quot;
                – Viktor Frankl
              </Subtitle>
            </Box>
            <Image src={KernelHeart} alt="kernel heart" />
          </InfoBlock>
          <CardGrid cards={this.state.cards} />
        </Box>
      </>
    )
  }
}

export default Love
