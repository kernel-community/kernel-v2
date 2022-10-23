(self.webpackChunkkernel_community=self.webpackChunkkernel_community||[]).push([[4027],{40852:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return w}});var n=a(19756),i=(a(67294),a(63497)),o=a(28360),r=["components"],s={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},h=l("Aligner"),p=l("Box"),c=l("InfoBlock"),d=l("Button"),m=l("Process"),u=l("Link"),k=l("Flash"),f=l("Card"),y=l("List"),g={_frontmatter:s},v=o.Z;function w(e){var t=e.components,a=(0,n.Z)(e,r);return(0,i.kt)(v,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"🦋-serenity",style:{position:"relative"}},"🦋 Serenity",(0,i.kt)("a",{parentName:"h1",href:"#%F0%9F%A6%8B-serenity","aria-label":"🦋 serenity permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"We have finally reached the tranquil waters of Eth2. It's been many years in the making, and it appears we still have some way to go yet. "),(0,i.kt)("p",null,"In fact, coming up with the right wording for the previous sentence was quite a challenge, because Kernel aims for “evergreen” content which will still be accurate and relevant at least a decade from now. As we will shortly see, this is an aspiration we share with the Eth2 Design Rationale on which the below brief is based."),(0,i.kt)("p",null,"You might wonder, are we saying that we will “still have some way to go yet” ten years from now? We certainly hope so. The desire for enclosure, for a certain and definitive end state which can be encapsulated as a “product” and consumed by the wider culture is a peculiarly modern phenomenon. "),(0,i.kt)("p",null,"We hope that Ethereum, and networks like it, are never really finished. We hope that people continue tinkering with them and playing with new ways of imagining how we might relate for as long as there are world machines and people using them to build new trust spaces. This is what traditional business people will never understand: it's not interesting to ship products using this kind of technology. What is truly fascinating is ",(0,i.kt)("strong",{parentName:"p"},"the ongoing art of making possible"),":"),(0,i.kt)(h,{center:!0,mdxType:"Aligner"},(0,i.kt)(p,{mdxType:"Box"},(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"And once those limits are understood"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"To understand that limitations no longer exist."),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"Earth could be fair. And you and I must be free"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"Not to save the world in a glorious crusade"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"Not to kill ourselves with a nameless gnawing pain"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"But to practice with all the skill of our being"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"The art of making possible."),"  "),(0,i.kt)("p",null,"Nancy Scheibner "))),(0,i.kt)(c,{mdxType:"InfoBlock"},(0,i.kt)(p,{mdxType:"Box"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Eth2 Design Rationale")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"/images/ethereum.png",alt:"Design Rationale"})),(0,i.kt)(h,{center:!0,mdxType:"Aligner"},(0,i.kt)(d,{to:"https://notes.ethereum.org/@vbuterin/rkhCgQteN?type=view",mdxType:"Button"},"Read")))),(0,i.kt)("h3",{id:"how-does-this-fit-into-kernel",style:{position:"relative"}},"How does this fit into Kernel?",(0,i.kt)("a",{parentName:"h3",href:"#how-does-this-fit-into-kernel","aria-label":"how does this fit into kernel permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"In a way, this is what Kernel has been preparing you for: the ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-1/understanding-ethereum/#kaizen-and-the-principle-of-subtraction"},"continuous iteration")," which leads to a global, public, decentralized and censorship-resistant computing surface which anyone can use and no-one owns. "),(0,i.kt)("p",null,"What this ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-1/meaning/"},(0,i.kt)("em",{parentName:"a"},"means"))," for our networked species remains an open ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-2/better-questions/"},"question"),". One thing seems clear: it is an upgrade the likes of which is only seen once in an ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-2/debt/#virtual-money-coins-and-an-ancient-global-system"},"age"),". You'll need to recall the arguments made in ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-1/value/"},"value")," and ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-5/incentives"},"incentives")," to understand the design rationale for these next few scenes of the ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-0/conversation/"},"human")," ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-5/listening-stories/"},"story"),"."),(0,i.kt)("h2",{id:"brief",style:{position:"relative"}},"Brief",(0,i.kt)("a",{parentName:"h2",href:"#brief","aria-label":"brief permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"We’ll be taking a close look at Vitalik’s Design Rationale for Ethereum 2, which is the move to a Proof-of-Stake network that also greatly increases capacity by using “shards”. Don’t get intimidated by the technical jargon here: this has been included in the syllabus for two primary reasons:"),(0,i.kt)(m,{mdxType:"Process"},(0,i.kt)("p",null,"When discussing mechanism design and game mechanics which arise from revealing truth with least contrivance, we made the claim that “exploration of low-level primitives yields possibility”. We need to look at the primitives, but the intention is primarily to walk away with a better understanding of the possibilities they imply.  "),(0,i.kt)("p",null,'When discussing money and speech, we claimed that - with blockchains - the best way to protect free speech is to price it correctly. We don\'t enforce "the good" by legal fiat and deal with exceptions like libel and hate speech through human interpretation and violent enforcement; we define what is "bad" and set a price on it such that malicious expression is provably more expensive than its potential effects. Eth2 extends this idea greatly: it is our generation\'s elder game of economic penalties.')),(0,i.kt)("h3",{id:"principled-layers",style:{position:"relative"}},"Principled Layers",(0,i.kt)("a",{parentName:"h3",href:"#principled-layers","aria-label":"principled layers permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"Just as ",(0,i.kt)("a",{parentName:"p",href:"/start/principled-people"},"we did for Kernel"),", Vitalik begins Eth2's\ndesign rational with a series of core principles:"),(0,i.kt)(m,{mdxType:"Process"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Simplicity"),": given the inherent complexity of such networks, this (i) minimizes\ndevelopment costs, (ii) reduces the risk of unforeseen security issues, and (iii) helps\nprotocol designers to more easily convince users that parameter choices are legitimate.\nWhen complexity is unavoidable to achieve a given level of functionality, the preference order\nfor where the complexity goes is: layer 2 protocols → client implementations → protocol spec."),(0,i.kt)("p",null,"Long-term ",(0,i.kt)("strong",{parentName:"p"},"stability"),": the low levels of the protocol should ideally be built so that there\nis no need to change them for a decade or longer."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sufficiency"),": it should be possible to build ",(0,i.kt)("em",{parentName:"p"},"any class")," of applications on top of the\nprotocol."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Defense")," in depth: the protocol should continue to work as well as possible under a\nvariety of possible security assumptions (network latency, fault count, the motivations of\nusers etc.)"),(0,i.kt)("p",null,"Full light-client ",(0,i.kt)("strong",{parentName:"p"},"verifiability"),": given some assumptions, a client verifying ",(0,i.kt)("inlineCode",{parentName:"p"},"O(c)"),"\ndata should be able to gain indirect assurance that all of the data in the full system is\navailable and valid, even under a 51% attack.")),(0,i.kt)("p",null,"In our ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-0/play-of-pattern"},"very first note"),", we made the point that our way of\nthinking and solving problems ",(0,i.kt)("em",{parentName:"p"},"always"),' has to do with trade-offs. The trade-off between\ncomplexity and functionality is a deep one and goes to the heart of the debate about whether\nwe should be innovating on layer 1 or 2. The answer is "both", and you need to understand your\nown context in order to best decide where on the spectrum your most optimal solution lies.'),(0,i.kt)("p",null,'Vitalik calls this "',(0,i.kt)(u,{to:"https://vitalik.ca/general/2019/12/26/mvb.html",mdxType:"Link"},"functional escape velocity"),'":\nwe need layer 2 solutions to ensure ',(0,i.kt)("strong",{parentName:"p"},"simplicity")," and ",(0,i.kt)("strong",{parentName:"p"},"long-term stability")," by reducing\nthe complexity of the consensus layer; and we need layer 1 innovation in order to ensure\n",(0,i.kt)("strong",{parentName:"p"},"sufficiency"),". In practice, this means:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Quasi-Turing-complete and richly-stateful code execution"),", allowing robust L2 trust\nsolutions."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Scalable data availability and computation,")," along with"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Fast block times,")," both of which ensure that L2 is not limited to channel and Plasma-like\ntechniques which are not general and suffer capital inefficiencies and/or mass-exit issues.")),(0,i.kt)("p",null,"There are other features deliberately left to L2: (i) privacy, (ii) high-level programming\nlanguages, (iii) scalable state storage, and (iv) signature schemes, because these features\nare all areas of rapid innovation, which tilts the trade-off towards ensuring we don't set\nsome solution in the stone of our protocol spec for an area likely to develop extensively\nover the next 10 years."),(0,i.kt)(k,{mdxType:"Flash"},(0,i.kt)(f,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: What are the five principles of the Eth2 Design Rationale?"),(0,i.kt)("p",null,"Simplicity, stability, sufficiency, defense, verifiability."))),(0,i.kt)("h3",{id:"a-defenders-game",style:{position:"relative"}},"A Defender's Game",(0,i.kt)("a",{parentName:"h3",href:"#a-defenders-game","aria-label":"a defenders game permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"Bitcoin was a major innovation - it's almost like time-travelers came back to 2009 and dropped\nit on an obscure mailing list for us to puzzle over. However\n, ",(0,i.kt)(u,{to:"https://www.gwern.net/Bitcoin-is-Worse-is-Better",mdxType:"Link"},"it is not elegant"),"\nand its consensus algorithm breaks one of the fundamental advantages cryptography provides:\n",(0,i.kt)("strong",{parentName:"p"},"adversarial conflict should heavily favor defenders"),". Sea steads are easier to destroy than\nbuild, but an average person’s ECC keys are secure enough to resist even state-level actors."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Systems that consider themselves ideological heirs to the cypherpunk spirit should maintain\nthis basic property, and be much more expensive to destroy or disrupt than they are to use and\nmaintain.")),(0,i.kt)("p",null,"Proof of Work security can only come from block rewards, and incentives to miners can only\ncome from the risk of losing future block rewards. Proof of work necessarily operates on a\nlogic of massive power incentivized into existence by massive rewards. It's effective, but\ninefficient. The cost of attack and cost of defense are at a 1:1 ratio, so there is no\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://www.daoistry.com/mindsets/defenders-advantage/"},"defender’s advantage")),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Proof of stake breaks this symmetry by relying not on rewards for security, but rather\npenalties ","[...]"," The “one-sentence philosophy” of proof of stake is thus not “security comes\nfrom burning energy”, but rather “security comes from putting up economic value-at-loss”.")),(0,i.kt)(k,{mdxType:"Flash"},(0,i.kt)(f,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: What kind of actor does cryptography favour fundamentally?"),(0,i.kt)("p",null,"(individual) defenders."))),(0,i.kt)("p",null,"Consider Amazon's algorithm and how they solved unbounded search by turning everything into a\nplatform, only to find that ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-5/amazon-unbounded-search/#unsolved-advertising"},"advertising is intractable to platform solutions"),".\nThis is because the limited number of top spots on infinite-length shelves, and the crazy\namounts of revenue they generate, create a conflict of interest between Amazon and its users.\nThis kind of conflict can only be ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-0/money-language/#open-protocols-and-a-network-of-value"},"solved with a ",(0,i.kt)("strong",{parentName:"a"},"protocol"),", not a platform"),".\nHowever, PoW protocols still have a comparable conflict of interests between miners and users.\nMiners must pay for the massive power they are incentivized to use in securing a PoW network,\nwhich creates both (i) consistent forced sellers in any market and (ii) skewed incentives\naround, for instance, block sizes which lead to suboptimal outcomes for users of the network."),(0,i.kt)("p",null,"Ensuring that anyone, even with entry-level hardware and a small amount of ETH, can act as a\nvalidator and that the protocol relies on penalties rather than rewards, means that users and\nvalidators are more likely to be ",(0,i.kt)("em",{parentName:"p"},"the same people"),", thus reducing conflict. Just as protocols\nwhich define and encode what it means to cheat do not need to be ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-0/trust/"},"trusted"),",\nprotocols which define and encode penalties are ",(0,i.kt)("strong",{parentName:"p"},"more likely to benefit all their users"),".\nThis is because encoding rewards creates inevitably skewed incentives that only accrue to the\nsubset of network participants who are best placed to game the system required to earn them."),(0,i.kt)(k,{mdxType:"Flash"},(0,i.kt)(f,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: The cost of attacking or defending Proof of Work consensus is 1:1. Proof of Stake breaks this symmetry by relying on what, instead of rewards? "),(0,i.kt)("p",null,"Penalties.")),(0,i.kt)(f,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: This solves the conflict of interest between miners and users, because Eth2 validators and Eth2 users are more likely to be what?"),(0,i.kt)("p",null,"The same people. "))),(0,i.kt)("h3",{id:"proving-stake",style:{position:"relative"}},"Proving Stake",(0,i.kt)("a",{parentName:"h3",href:"#proving-stake","aria-label":"proving stake permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"Eth2 uses a slashing mechanism where a validator that is detected to have misbehaved can be\npenalized: in the best case ~1%, but in the worst case up to its entire deposit. This raises\nthe cost of an attack such that we achieve the defender's asymmetry described above and\novercome the validator's dilemma, i.e. lazily validating everything without properly checking\neach transaction."),(0,i.kt)("p",null,'Vitalik describes why Casper FFG was chosen - it was the simplest available at the time - and\nhow other options continue to be explored. He highlights the problem of "supernodes" and why\nsharding is better: less centralization risk, more censorship resistance, and better long-term\nscalability. Critically, he then considers the security models of any system we choose, and\nhow it operates not just under the "honest majority" model of 51% chains, but also the\n',(0,i.kt)("em",{parentName:"p"},"uncoordinated rational majority")," and ",(0,i.kt)("em",{parentName:"p"},"worst-case")," models. Assuming the worst-case, the\nquestion remains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can we force the attacker to have to pay a very high cost to break the chain’s guarantees?"),(0,i.kt)("li",{parentName:"ul"},"What guarantees can we unconditionally preserve?")),(0,i.kt)("p",null,"Slashing ensures the first condition, and Vitalik provides a detailed table of the guarantees\nwe can preserve with Proof of Stake systems\nin ",(0,i.kt)(u,{to:"https://notes.ethereum.org/@vbuterin/rkhCgQteN?type=view#Security-models",mdxType:"Link"},"this section"),".\nIn a system designed around penalties, you need to distinguish between various types of\nvalidator failure - most of which are benign (like simply being offline) - and only a few of\nwhich are genuinely malicious. Critically, ",(0,i.kt)("strong",{parentName:"p"},"it is the trade-off between different penalties"),"\nwhich informs how we structure rewards."),(0,i.kt)(k,{mdxType:"Flash"},(0,i.kt)(f,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: What kind of mechanism is used to ensure that attackers still pay a very high cost to break the chain's guarantees, assuming the worst-case model?"),(0,i.kt)("p",null,"Slashing (extra points if you said Casper the Friendly Finality Gadget)."))),(0,i.kt)("h4",{id:"aligning-incentives",style:{position:"relative"}},"Aligning Incentives",(0,i.kt)("a",{parentName:"h4",href:"#aligning-incentives","aria-label":"aligning incentives permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"Validators must attest to what they believe to be the head of the chain in each epoch. If they\ndo so, they earn a ",(0,i.kt)("strong",{parentName:"p"},"base reward"),", which is split into 5 parts described ",(0,i.kt)(u,{to:"https://notes.ethereum.org/@vbuterin/rkhCgQteN?type=view#Base-rewards",mdxType:"Link"},"here"),'. There are two features to understand about this reward: how it prevents "',(0,i.kt)(u,{to:"https://raw.githubusercontent.com/ethereum/research/master/papers/discouragement/discouragement.pdf",mdxType:"Link"},"griefing"),'", and how it is calculated. '),(0,i.kt)(m,{mdxType:"Process"},(0,i.kt)(p,{mdxType:"Box"},(0,i.kt)("p",null,"Griefing occurs when an attacker seeks to reduce other validators’ revenue, even at some\ncost to themselves, in order to encourage the victims to drop out of the mechanism (either\nso the attacker can get more revenue, or as part of a longer-term 51% attack). "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"By multiplying the base reward ",(0,i.kt)("strong",{parentName:"p"},"B")," with ",(0,i.kt)("strong",{parentName:"p"},"P")," the portion of validators that agree, and penalizing any validator who doesn't with ",(0,i.kt)("strong",{parentName:"p"},"−B"),", we implement a ",(0,i.kt)("strong",{parentName:"p"},"collective rewards scheme")," where “if anyone performs better, everyone performs better”. This bounds the griefing factors in an optimal way and is the best example of ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-5/prosocial-value"},"explicitly prosocial mechanism design")," we know of in any blockchain."))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"base reward")," is proportional to the inverse square root of all deposits. This strikes a\ncompromise between a ",(0,i.kt)("em",{parentName:"p"},"fixed reward rate")," and a ",(0,i.kt)("em",{parentName:"p"},"fixed total reward"),". The first creates too much\nuncertainty about both issuance and the total level of deposits; the second potentially\nincentivizes griefing more than can be disincentivized by the collective scheme above. Again,\nmechanism design is ",(0,i.kt)("em",{parentName:"p"},"all about balancing trade-offs"),".")),(0,i.kt)(k,{mdxType:"Flash"},(0,i.kt)(f,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: Multiplying the base reward ",(0,i.kt)("strong",{parentName:"p"},"B")," with the portion of validators who agree, while only penalizing those who disagree with ",(0,i.kt)("strong",{parentName:"p"},"-B")," is what kind explicitly prosocial scheme?"),(0,i.kt)("p",null,"Collective rewards.")),(0,i.kt)(f,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: Making the base reward proportional to the inverse square root of all deposits strikes a balance between what two fixed quantities?"),(0,i.kt)("p",null,"Reward rate and total rewards.")),(0,i.kt)(f,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: If the reward rate were fixed, it would create too much uncertainty about what two things?"),(0,i.kt)("p",null,"Total issuance and total deposits (i.e. how much ETH is created over time, and how much we can reasonably expect to be staked).")),(0,i.kt)(f,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: If the total rewards were fixed, it would incentivize what kind of malicious behaviour?"),(0,i.kt)("p",null,"Griefing."))),(0,i.kt)("p",null,"Rewards are designed this way ",(0,i.kt)("em",{parentName:"p"},"only as a result")," of thinking about how to penalize\ndifferent kinds of undesirable validator behaviour. Now that we understand this premise, we\ncan check that the rewards fit our requirements by considering the ",(0,i.kt)("strong",{parentName:"p"},"break-even uptime")," for\nany validator. If everyone is validating, you need only be online ~44.44% of the time. However,\nif other validators are offline - say P = 2/3 - then you need to be online ~53.6% of the time."),(0,i.kt)("p",null,"The incentives ensure that, as more validators go offline, the penalty for doing so is greater,\nwhich creates something Vitalik calls an ",(0,i.kt)("strong",{parentName:"p"},"inactivity leak"),". If the chain fails to finalize\nfor more than 4 epochs, a second penalty component is added which increases quadratically over\ntime. This:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Penalizes being offline much more heavily in the case where you being offline is actually\npreventing blocks from being finalized and"),(0,i.kt)("li",{parentName:"ul"},"Ensures that if more than 1/3 do go offline, eventually the portion online goes back up to\n2/3 because of the declining deposits of the offline validators.")),(0,i.kt)(k,{mdxType:"Flash"},(0,i.kt)(f,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: If everyone else is online, what percentage of time must I be online for to break even as a validator?"),(0,i.kt)("p",null,"~44.4%. ")),(0,i.kt)(f,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: If others start to go offline, does the break even uptime for validators increase or decrease?"),(0,i.kt)("p",null,"Increase (as there is a higher penalty if my being offline impacts the chain's ability to reach finality)."))),(0,i.kt)("p",null,"So, we can handle elegantly the penalties for common and benign kinds of validator failures,\nbut what about actual attacks and/or malicious behaviour? If a validator is caught violating\nthe Casper FFG slashing condition\n, ",(0,i.kt)(u,{to:"https://github.com/ethereum/eth2.0-specs/blob/dev/specs/phase0/beacon-chain.md#proposer-slashings",mdxType:"Link"},"they get penalized"),"\na portion of their deposit equal ",(0,i.kt)(u,{to:"https://github.com/ethereum/eth2.0-specs/blob/dev/specs/phase0/beacon-chain.md#slashings",mdxType:"Link"},"to three times"),"\nthe portion of validators that were penalized around the same time."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A validator misbehaving is only really bad for the network if they misbehave at the same time\nas many other validators, so it makes sense to punish them more in that case."),(0,i.kt)("li",{parentName:"ul"},"It heavily penalizes actual attacks, but applies very light penalties to single isolated\nfailures that are likely to be honest mistakes."),(0,i.kt)("li",{parentName:"ul"},"It ensures that smaller validators take on less risk than larger validators (in the normal\ncase, a large validator would be the only one failing at the same time as themselves)."),(0,i.kt)("li",{parentName:"ul"},"It creates a disincentive against everyone joining the largest pool.")),(0,i.kt)(k,{mdxType:"Flash"},(0,i.kt)(f,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: True or false: the collective reward scheme of ",(0,i.kt)("strong",{parentName:"p"},"B * P")," incentivises validators to pool their resources?"),(0,i.kt)("p",null,"False! We can now program collective rewards without sacrificing decentralization."))),(0,i.kt)("h3",{id:"technicalities",style:{position:"relative"}},"Technicalities",(0,i.kt)("a",{parentName:"h3",href:"#technicalities","aria-label":"technicalities permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"Vitalik then discusses some of the technical choices favored in the design, like BLS signatures\n(which are easy to aggregate) and SSZ (a simpler serialization suite which aligns with the\nprinciple of ",(0,i.kt)("strong",{parentName:"p"},"simplicity"),"). We'll summarize briefly here. ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/LuozhuZhang/status/1579845478920749060"},"This twitter thread")," does an excellent job of providing an overview of the development of Eth2 consensus and the associated research if you want more history and detail than is below."),(0,i.kt)(m,{mdxType:"Process"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"32 ETH")," minimum deposits ",(0,i.kt)(u,{to:"https://notes.ethereum.org/@vbuterin/rkhCgQteN?type=view#Why-32-ETH-validator-sizes",mdxType:"Link"},"strike a good balance"),"\nbetween decentralization / finality time / message overhead. This is a trade-off because the\nsize of deposits defines the total possible number of validators (smaller deposits = more\nvalidators), which increases decentralization at the cost of message overhead, and potentially\nfinality time."),(0,i.kt)("p",null,"Various techniques around ",(0,i.kt)("strong",{parentName:"p"},"random sampling")," for different committees are discussed,\nincluding Verifiable Delay Functions and the\ncurrent ",(0,i.kt)(u,{to:"https://notes.ethereum.org/@vbuterin/rkhCgQteN?type=view#Shuffling",mdxType:"Link"},"swap-or-not"),"\nalgorithm used to shuffle the validator set and assign responsibilities every epoch."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"LMD GHOST fork choice rule"),", which incorporates information from all validators,\nhundreds in each slot, making it extremely unlikely in the normal case that even a single\nblock will be reverted."),(0,i.kt)(p,{mdxType:"Box"},(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"beacon chain and shard structure")," is described, along with reasons for not going with a different design, such as "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Having distinct shard chains and linking them into the beacon chain more rarely. This was rejected to allow for fast (single-slot) base-layer cross-shard communication capability. See ",(0,i.kt)(u,{to:"https://notes.ethereum.org/@vbuterin/HkiULaluS",mdxType:"Link"},"here")," for more."),(0,i.kt)("li",{parentName:"ol"},"Not having a beacon chain, and connecting shard chains to each other in some other structure. This was rejected to maintain ",(0,i.kt)("strong",{parentName:"li"},"simplicity"),". The hub-and-spoke beacon chain structure with a hierarchical fork choice is simpler to implement and reason about."))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"proof of custody game"),', which revolves around validators needing to produce "period sub-keys"\nsuch that they can prove they were not lazily verifying data. This creates a disincentive so\nas to overcome the validator\'s dilemma mentioned above.'),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"validator lifecycle"),', which involves depositing, activating, exiting, withdrawing\nand the reason for using a more convenient construction of "effective balance" for validators.'),(0,i.kt)("p",null,"Finally, Vitalik describes ",(0,i.kt)("strong",{parentName:"p"},"fork choice rule")," - because the ability to exit the network\nat any stage is critical to the system's game theoretic equilibria.")),(0,i.kt)(k,{mdxType:"Flash"},(0,i.kt)(f,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: What three features does the 32 ETH validator deposit make a trade-off between?  "),(0,i.kt)("p",null,"Decentralization, finality time, and message overhead.")),(0,i.kt)(f,{mdxType:"Card"},(0,i.kt)("p",null,"Prompt: What principle of the Design Rationale dictated the choice of a beacon chain, rather than distinct shards connected in some other manner?"),(0,i.kt)("p",null,"Simplicity."))),(0,i.kt)("h3",{id:"the-positive-sum",style:{position:"relative"}},"The Positive Sum",(0,i.kt)("a",{parentName:"h3",href:"#the-positive-sum","aria-label":"the positive sum permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"What is Eth2? Well, we said it already: our generation's elder game of economic penalties. These penalties are the game mechanics we use to reveal a ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-5/reveal-the-universe/#the-value-of-truth"},"unique kind of truth"),": it is possible to build - and asymmetrically defend/maintain - an explicitly prosocial, global, and ownerless system that provably benefits all the people who choose to use it. The benefits of encoding penalties extend to all layers of this game, including our ability to ",(0,i.kt)(u,{to:"https://twitter.com/VitalikButerin/status/1294461236680130560",mdxType:"Link"},"use coordination costs to our advantage"),"."),(0,i.kt)("p",null,"Welcome. Most of us are ",(0,i.kt)("a",{parentName:"p",href:"/learn/module-5/prosocial-value/#friendship"},"friends")," here,\nbecause the alternatives are more expensive."),(0,i.kt)("h3",{id:"further-resources",style:{position:"relative"}},"Further resources",(0,i.kt)("a",{parentName:"h3",href:"#further-resources","aria-label":"further resources permalink",className:"anchor-link after"},(0,i.kt)("span",{parentName:"a"},"¶"))),(0,i.kt)("p",null,"These few links are intended for those who wish to understand more technicalities and begin developing on, or building tools for, Eth2."),(0,i.kt)(y,{mdxType:"List"},(0,i.kt)(u,{to:"https://github.com/ethereum/eth2.0-specs",mdxType:"Link"},(0,i.kt)("p",null,"The Eth 2.0 Specs")),(0,i.kt)(u,{to:"https://ethos.dev/beacon-chain/",mdxType:"Link"},(0,i.kt)("p",null,"Ethos.dev")),(0,i.kt)(u,{to:"https://ethereumstudymaster.com/courses/ethereum-2-0-studymaster-program/",mdxType:"Link"},(0,i.kt)("p",null,"Eth2 Studymaster")),(0,i.kt)(u,{to:"https://www.reddit.com/r/ethereum/comments/o4unlp/ama_we_are_the_efs_research_team_pt_6_23_june_2021/h2oa00n/",mdxType:"Link"},(0,i.kt)("p",null,"EF Research Team AMA")),(0,i.kt)(u,{to:"https://stateful.mirror.xyz/Y1ED9RorG9OvEUXD8NBmXgYhSVhjj8H537-I2SZJkYA",mdxType:"Link"},(0,i.kt)("p",null,"The Beacon Book")),(0,i.kt)(u,{to:"https://vitalik.ca/general/2021/05/23/scaling.html",mdxType:"Link"},(0,i.kt)("p",null,"The Limits to Blockchain Scalability"))))}w.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-en-learn-module-6-serenity-mdx-8a8ee35a3f202c1073e1.js.map