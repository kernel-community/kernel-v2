/** @jsx jsx */

import { Box, Flex, jsx, p } from 'theme-ui'
import { Heading } from '@modules/ui/heading'
import { Link } from '@modules/navigation/'
import StatusBanner from '@modules/ui/StatusBanner'
import AudioPlayer from '@modules/audioPlayer'
import Process from '@modules/ui/Process'
import Callout from '@modules/ui/Callout'

const Content = ({ balance }) => {
  return (
    <Flex sx={styles.container}>
      <p sx={styles.banner}>You owe <b>{balance} HON</b>, which - in this context - means you can read on to learn more...</p>
      <StatusBanner>💡 "Put your money where your mouth is!"</StatusBanner>
      <p>
        A tamperproof, borderless, ownerless, global record is not just money and it's not just language. It's a new way of simultaneously ordering both which makes possible valuable, meaningful communication with anyone, anywhere, in any way we care to program it.
      </p>
      <Heading level={2}>Open Money</Heading>
      <p sx={styles.callout}>
        <Link to="https://openmoney.org/top/omanifesto.html">Open moneys</Link> are virtual, personal and free. Any community, network, business can create their own free money - "free" as in free speech, free radical, freely available - but NOT free as in free lunch, or free ride.  It's not something you get for nothing. Open money is money that must be earned to be respected. When you issue it, you are obliged to redeem it - <b>your money is your word</b>.
      </p>
      <p>
        We are all here in order to make money. The only difference is what kind of emphasis you place on that single word, "make". Does it mean "extract the most of someone's standard of value that you can get your hands on", or do you understand it more literally? We can actually <b>make</b> money: that is the primary capability web3 endows us with. We only need to speak it into existence with integrity.
      </p>
      <p sx={styles.callout}>
        Open money is flat money. It confers <Link to="/conversation/hospitality/#freeing-civilization">no power of one <b>over</b> another</Link>, only one with another [...] there's no monopoly, all systems coexist in the same space. Open money is virtual and not limited. Physical things exist in space and time - which makes them limited - in number, mass, place. Virtual things don't exist and need not respect any such limits.
      </p>
      <p sx={styles.callout}>
        We believe that the problems that come from conventional money can be resolved with open money systems
      </p>
      <Heading level={2}>Magic internet meaning</Heading>
      <p>
      Although they share a common language arising from the twin practices of <Link to="/learn/module-1/playdough-protocols/#faith-and-finance">faith and finance</Link>, our <Link to="/learn/module-0/conversation">narratives</Link> and our <Link to="/learn/module-1/value/#narrative">financial records</Link> were clearly distinct before 2009. Consequently, there is confusion around the concept of "free" speech, because its definition shifts depending on the conp: story or money.
      </p>
      <p>
        However, programmable protocols that are intertwined with a shared record no-one owns are both stories <b>and</b> money. This collapses the distinction between narratives around which we organise and our record of societal debt. So, what happens to "free" speech?
      </p>
      <p>
        Meaningful communication is a balance between the fact that your <i>ability to speak</i> ought to be free, with the fact that you don't get to say whatever you please. Hence we enshrine freedom of speech as a constitutional good and implement error-handling for exceptions like hate speech and defamation.
      </p>
      <p>
        Protocols capable of processing valuable narratives, like Bitcoin and Ethereum, render such interpretive balancing acts unnecessary. Your ability to <Link to="/learn/module-0/money-language/#open-protocols-and-a-network-of-value">access the network</Link> - much like TCP/IP - is free in all senses, requiring only a connection that can support you speaking in the same language as your peers. Saying anything <i>meaningful</i> (i.e. state-changing) has a specific, well-defined economic cost, captured in transaction fees which accrue to the benefit of those who "listen" to what you have to say.
      </p>
      <p>
        In some sense, it is the <b>primary benefit</b> of this new order of econo-linguistic network we now communicate with: everyone is simultaneously free to speak <i>and</i> the cost of any kind of meaningful speech is well-defined everywhere. We are also provided with a clear definition of meaning: any speech act which changes the state of our shared record.
      </p>
      <Heading level={2}>Regulation vs expense</Heading>
      <p>
        In blockchains, speech and execution are <i>one and the same thing</i> and interpretation is deterministic. The protocol has the bare minimum of rules required for consensus, basically: you cannot double spend a token. Every peer processes every transaction which passes these rules without fear or favour.
      </p>
      <p>
        The conp is determined not by legal interpretation, but by <b>economics</b>. Rather than enshrining an ideal like "free speech" which we <i>agree is good</i>, certain behaviours we <i>agree to be malicious</i> are made prohibitively expensive. They are not disallowed, just economically unsustainable, in much the same way that prevention is better than any cure. Vitalik touches on this in his <Link to="/learn/module-1/understanding-ethereum/">Devcon 1 talk</Link> and we'll return to it again and again.
      </p>
      <p>
        You can validate any kind of state transition you like in Eth2, but if it's provably malicious, your stake will get slashed. <Link to="/learn/module-6/serenity/#proving-stake">Programming penalties rather than rewards</Link> ensures that the only state transitions worth validating are those that maintain a meaningful consensus. It is a profound change in how we regulate expression.
      </p>
      <p>
        Again, it points at complementary opposites: 
      </p>
      <StatusBanner>💡 <b>The most effective way to free meaning is to price it correctly.</b></StatusBanner>
      <Heading level={2}>Math beats bureaucracy</Heading>
      <p>
        Pricing different kinds of speech appropriately, rather than trying to "protect" a culturally-conditioned ideal, has the second-order cybernetic effect of better securing public goods. For instance, SSTOREs are a relatively expensive operation/expression because storing data on public networks is costly, and it is a cost borne by all of us. Therefore, we agree upon a gas price that incentivizes developers to write contracts which store the minimum possible information required for state-changing, meaningful transactions.
      </p>
      <p>
        We could even say that, on freely accessible public blockchains, there is no such thing as free speech. There is only increasingly costly expression for increasingly complex kinds of meaning, with the incentives programmed such that the costs borne by the speaker are always provably more than those imposed on the community of listeners.
      </p>
      <Heading level={2}>The expanded view</Heading>
      <p>
        When we stop "protecting" free speech, but instead price any speech act according to a set ofexplicit consensus rules we all agree to follow, the space of <b>meaningful communications</b> is greatly expanded.
      </p>
      <p>
      You may think this unfairly favours the rich, but you'd be wrong. We can <b>program</b> our shared ledger in any way we care to! If your program favours those already in power, it's because you lack creativity, not because of some limitation in the underlying protocol. Look at Gitcoin Grants and Quadratic Funding: a speech act which donates $1 to a cause can have nearly as great an effect as a donation two orders of magnitude larger, because we've <Link to="/learn/module-4/liberal-radical/#optimal-gathering">modelled clearly the most optimal way</Link> to fund public goods.
      </p>
      <Callout>
        💡 When there is nothing to protect, we no longer need guards. Without guards, the digital world is not about captive audiences, but creative participation.
      </Callout>
      <Heading level={2}>Clarifying metaphors</Heading>
      <p>
        Money-as-a-programmable-protocol is "spoken" as hex-encoded data strings, which are run on and interpreted by a monolithic virtual machine which is everywhere and nowhere, so our metaphor can only go so far. Despite the descriptive limitations of natural language faced with such a construction, we can still be precise about the exceptions to free speech mentioned above and how they might be handled in a world which does not "protect" speech, but rather agrees communally on its cost. 
      </p>
      <p>
        Hate speech (analogous to malicious behaviour or outright attacks on the network) can be more elegantly handled when you are required to have <Link to="/learn/module-6/serenity/#a-defenders-game">value-at-a-loss</Link> to speak meaningfully. If you then violate rules which are not just social norms, but executable software, that value is slashed <i>simultaneously</i> with your speech and you suffer provably more damage.
      </p>
      <p>
        Defamation comes in two flavours: per se (a statement that is obviously defamatory) and per quod (the defamatory implication must be proven).
      </p>
      <Process>
        <Box>
          <b>Per se</b> defamation can be more elegantly handled by <Link to="https://observablehq.com/@andytudhope/embedded-discover" >mechanisms</Link> like that which runs <Link to="https://dap.ps">dap.ps</Link>. Anyone can vote in a way which "defames" a product or service, but that vote is also an economic signal denoted in tokens, which are sent straight back to the product or service. So, your downvote causes reputational damage while simultaneously repaying the people you're damaging (programmed according to a curve which makes votes cheaper the richer/higher the rank of whomever you're voting on is).
        </Box>
        <Box>
          <b>Per quod</b> defamation can be more elegantly handled either by some version of <Link to="https://gitcoin.co/blog/gitcoin-grants-round-5-funding-our-future/">negative votes</Link> Gitcoin Grants is currently iterating over, or by <Link to="/learn/module-4/self-enquiry/">collections of composable identities</Link> yet to mature.
        </Box>
      </Process>
      <p>
        The (in)famous <Link to="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md">EIP-1559</Link> is a great example of how we price transactional expression at the protocol level, which is where the most contentious <Link to="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2593.md" >debates</Link> occur. Note, however, how such debate centres not on opinion, but engineering <Link to="/learn/module-4/consensus/#1-lack-of-disagreement-is-more-important-than-agreement">trade-offs</Link> and technical proof.
      </p>
      <p>
        More fundamentally, this new order of communication, akin to the appearance of language itself, is best demonstrated by the simple fact that you need only memorize 12 magical <b>words</b>, incant them into an internet-connected machine and you gain immediate access to <b>monetary value</b>, anywhere in the world. One can even encode a reference to a newspaper headline in the genesis block of a network of timestamp servers (Satoshi's wording) which run money-as-a-protocol to make a permanent political statement. It is unprecedented.
      </p>
      <Heading level={2}>Further References</Heading>
      <p>
        Reimagining meaningful speech and how it is enacted on our shared records is already an important step towards a better web, but it is only one half of the picture. We've claimed above that we require "incentives programmed such that the costs borne by the speaker are always provably more than those imposed on the community of listeners" and it is this <b>community of listeners</b> who will form a big part of future modules. For now, we leave you to consider Hanzi Freinacht's <Link to="https://www.circularconversations.com/conversations/metamodern-values-for-a-listening-society"><i>The Listening Society</i></Link>.
      </p>
      <Heading level={2}>Listen</Heading>
      <AudioPlayer src="https://kernel-audio.s3.amazonaws.com/M2E2+-+Speak.mp3"/>
    </Flex>
  )
}

const styles = {
  container: {
    width: '100%',
    alignItems: 'left',
    flexDirection: 'column',
  },
  banner: {
    margin: '1rem 0 3rem 0'
  },
  callout: {
    px: '24px',
    py: '28px',
    mb: '24px',
    mt: '24px',
    width: '100%',
    borderRadius: '12px',
    bg: 'primaryMuted',
  }
}

export default Content
