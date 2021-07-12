import React from 'react';
import {Box, Image} from 'theme-ui';
import {InfoBlock} from '@modules/ui';
import {Heading, Subtitle} from '@modules/ui/heading';
import {CardGrid} from '@modules/testimonials';
import axios from 'axios';
import KernelHeart from '../../../static/images/kernel_heart.png';

class Love extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }
  componentDidMount() {
    axios.get('https://wall-of-love.herokuapp.com/wol/raw').then((response) => {
      this.setState({
        cards: response.data.data
      });
    });
  }
  render() {
    return (
      <Box>
        <InfoBlock>
          <Box sx={{textAlign: 'left'}}>
            <Heading level={1}>Wall of Love</Heading>
            <Subtitle>
              This virtual wall is a collection of all the love that came our
              way from all our social channels
            </Subtitle>
          </Box>
          <Image
            src={KernelHeart}
            alt="kernel heart"
            sx={{
              width: ['100%', '543px', '550px']
            }}
          />
        </InfoBlock>
        {/* <hr/> */}
        <CardGrid cards={this.state.cards} />
      </Box>
    );
  }
}

export default Love;
