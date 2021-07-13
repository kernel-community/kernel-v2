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
              Collected testimonials to help us explain what Kernel is. These
              show "the truth - that love is the ultimate and the highest goal
              to which we can aspire. Then we grasped the meaning of the
              greatest secret that human poetry and human thought and belief
              have to impart: our salvation is through love and in love." –
              Viktor Frankl
            </Subtitle>
          </Box>
          <Image src={KernelHeart} alt="kernel heart" />
        </InfoBlock>
        <CardGrid cards={this.state.cards} />
      </Box>
    );
  }
}

export default Love;
