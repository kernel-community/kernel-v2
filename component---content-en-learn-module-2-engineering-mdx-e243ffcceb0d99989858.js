(self.webpackChunkkernel_community=self.webpackChunkkernel_community||[]).push([[1836],{3442:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return w}});var n=a(9756),o=(a(7294),a(3497)),i=a(8360),r=["components"],s={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},h=l("Video"),c=l("Process"),u=l("Flash"),d=l("Card"),m=l("Link"),p=l("List"),f={_frontmatter:s},y=i.Z;function w(e){var t=e.components,a=(0,n.Z)(e,r);return(0,o.kt)(y,Object.assign({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-engineering-money",style:{position:"relative"}},"💎 Engineering money",(0,o.kt)("a",{parentName:"h1",href:"#-engineering-money","aria-label":" engineering money permalink",className:"anchor-link after"},(0,o.kt)("span",{parentName:"a"},"¶"))),(0,o.kt)(h,{src:"https://www.youtube-nocookie.com/embed/MxIrc1rxhyI",mdxType:"Video"}),(0,o.kt)("p",null,"This Andreas Antonopoulos talk goes into more detail about the critical features of money and\nwhat being able to engineer them really means. We consider it to be one of his more profound presentations."),(0,o.kt)("p",null,"We've covered the collectible story of money, the links it has to reciprocal altruism and\nthe influence this has had on our evolution as a species, and the importance of closed loops of\ncirculation and lowered transaction costs. We've looked at the alternative story of debt, the\ndeep mythic and religious roots money and morality have in our human story, the link between\nphysical currency and violence, and ancient virtual monies and global trade networks. We've looked at modern banking methods, the need for ",(0,o.kt)("a",{parentName:"p",href:"https://nakamoto.com/credible-neutrality/"},"credibly neutral")," currencies which can be programmed to respond in real time to the need for discipline or elasticity, and the importance of liquidity and the different prices of money to a truly global system. Now it's time to get down to engineering truly beneficial protocols for the creation and distribution of value."),(0,o.kt)("h2",{id:"how-does-this-fit-into-kernel",style:{position:"relative"}},(0,o.kt)("strong",{parentName:"h2"},"How does this fit into Kernel?"),(0,o.kt)("a",{parentName:"h2",href:"#how-does-this-fit-into-kernel","aria-label":"how does this fit into kernel permalink",className:"anchor-link after"},(0,o.kt)("span",{parentName:"a"},"¶"))),(0,o.kt)("p",null,"This has been chosen for Kernel, in particular, because it speaks directly to:"),(0,o.kt)(c,{mdxType:"Process"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Value")," and how we can use technology to engineer its creation and distribution."),(0,o.kt)("p",null,"What ",(0,o.kt)("strong",{parentName:"p"},"money")," as a protocol really means for engineers capable of writing economic code."),(0,o.kt)("p",null,"How we can rethink ",(0,o.kt)("strong",{parentName:"p"},"incentives")," now that we have overhauled the control architecture of money.")),(0,o.kt)("h2",{id:"brief",style:{position:"relative"}},"Brief",(0,o.kt)("a",{parentName:"h2",href:"#brief","aria-label":"brief permalink",className:"anchor-link after"},(0,o.kt)("span",{parentName:"a"},"¶"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"',(0,o.kt)("strong",{parentName:"p"},"Money is the killer app"),'. Money is the killer app because it is the foundational technology\nfor all commerce and, as such, touches everything. In order to make all the stuff that is beyond\nmoney - the "blockchain" applications - work as neutral, open, decentralized platforms, we need\nto transact with a neutral, global, decentralized currency. You can\'t do the commerce, the trade,\nthe identity, the land registry, the ',(0,o.kt)("em",{parentName:"p"},"everything else"),' without first having the foundation of a\nfundamentally new way of doing money which is open, borderless, decentralized, censorship-resistant and global."')),(0,o.kt)("p",null,"Remember, money-as-a-protocol allows us to program incentives at scales never\nbefore possible. Yes, this means that there are all sorts of interesting high-level use cases\nto go after, but it also implies that the only way genuinely to do so is by thinking about the\nincentives which underpin whatever you want to build. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"💡 If you're not altering the incentive structure on which your society runs, you should\nprobably just use a database.")),(0,o.kt)("p",null,"One of our biggest problems is understanding the terms we use, and ",(0,o.kt)("em",{parentName:"p"},"money")," is probably the\nmost relevant example of this. In this course, we've described it as an abstraction to communicate value, as a language in its own right, and as a technology older than writing. 'Money' as such is not a definitional term, it's ",(0,o.kt)("strong",{parentName:"p"},"a general classifier"),". We can, at least, talk about its critical features, defined in terms of how we can engineer it: "),(0,o.kt)(c,{mdxType:"Process"},"Store of value",(0,o.kt)("p",null,"Medium of exchange"),(0,o.kt)("p",null,"Unit of account. ")),(0,o.kt)("p",null,'"Money" describes things which exhibit some behaviour that allows us to use that thing for one or more of the above purposes. Most importantly, there is always a trade-off between the three. Gold is a great store of value, but a lousy medium of exchange. Visa is a great medium of exchange, but not really a unit of account, or a store of value (as it generally represents a form of debt). When you throw tokens on a blockchain into the mix, things become really confusing, and this is because we\'re using a descriptive term - "money" - without differentiating between its actual uses.'),(0,o.kt)("p",null,'How do we decide which "things" satisfy the trade-off between these three critical features in\nthe most optimal way? We consider: scarcity, portability, durability, fungibility, divisibility,\nacceptability and stability. In this context:'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\"Metals aren't very good money, because they have some intrinsic value which is separate from\nthe money it represents. Silver and gold can be traded independently for aesthetic reasons or\nother purposes. ",(0,o.kt)("strong",{parentName:"p"},"This destroys its fundamental function as a medium of exchange."),'"')),(0,o.kt)("p",null,"It is a profound point, so pause here for a moment. Most people will tell you that intrinsic value is ",(0,o.kt)("em",{parentName:"p"},"required"),' to make money "money", but the truth is almost the exact opposite. Money is an abstraction which allows us to speak meaningfully about the value of different items otherwise unrelated. If the medium we use to express such transactional relationships has its own intrinsic value, it is not a very functional abstraction.'),(0,o.kt)(u,{mdxType:"Flash"},(0,o.kt)(d,{mdxType:"Card"},(0,o.kt)("p",null,"Prompt: What are the three traditional features of money we can engineer?"),(0,o.kt)("p",null,"Store of value, medium of exchange, and unit of account.")),(0,o.kt)(d,{mdxType:"Card"},(0,o.kt)("p",null,"Prompt: Which feature is most effected by money which has its own intrinsic value, like gold?"),(0,o.kt)("p",null,"Medium of exchange."))),(0,o.kt)("h3",{id:"changing-the-nature-of-control",style:{position:"relative"}},"Changing the nature of control",(0,o.kt)("a",{parentName:"h3",href:"#changing-the-nature-of-control","aria-label":"changing the nature of control permalink",className:"anchor-link after"},(0,o.kt)("span",{parentName:"a"},"¶"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"Metals represented for humanity an era when we used the materials we found around us in the\nworld and adapted them to the uses for which they fit ',"[...]"," Human beings looked around at found\nobjects in the world and asked 'How do we take these materials that we have and find suitable\nuses for them?' At this point, we were adapting nature to the uses that we had, but only in a\nperipheral way. Gradually, we became more intrusive in our adaptations and started ",(0,o.kt)("em",{parentName:"p"},"moulding"),"\nnature to our needs. We began interacting with nature at a molecular level, turning wood into\ncharcoal, or metal into alloys with unique properties better suited to our needs. Then came the\nability to affect the atomic nature of materials: synthetic fertilizers, fabrics, and plastics\netc. This is no longer about just finding materials and adapting them to our needs; it's about\ncreating materials which fit uses we have ",(0,o.kt)("em",{parentName:"p"},"preconceived"),". Today, we can affect the subatomic\nstructure of things - manipulating nature at the nanoscale to create carbon nanotubes etc.\nThat is, we are not just manipulating the atomic behaviour of materials; we are giving them new\nphysical properties.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"We just did something similarly amazing to money. Until now, we have taken money as it exists\nin the world, accepted the trade-offs different kinds imply between the three critical features\nand used it as best we can. We accepted the compromise implicit in each type because we could\nnot change its fundamental nature. Take paper money: great medium of exchange and unit of\naccount; really terrible store of value because of its ',(0,o.kt)("strong",{parentName:"p"},"control architecture")," (don't tell\nyour kids what inflation really does!). We adapt our uses to the material, and not the other\nway around. ",(0,o.kt)("strong",{parentName:"p"},"Until now, because now - for the very first time - we can engineer the fundamental\nproperties of money"),'."')),(0,o.kt)("p",null,"Because the protocols for communicating value are now completely abstracted from the value which\nthey communicate, we can create the properties we need, as opposed to adapting the ones implicit\nin any physical media. It's debatable whether this 'engineered money' has served as a good\nmedium of exchange and unit of account so far. This is because these two features have as much\nto do with social contracts and the unit in which we choose to measure as they do with technical\nprotocols. Andreas' argument is that we can use abstract monetary protocols which we can\nengineer to change gradually higher-order social contracts."),(0,o.kt)("h3",{id:"new-conversations",style:{position:"relative"}},"New conversations",(0,o.kt)("a",{parentName:"h3",href:"#new-conversations","aria-label":"new conversations permalink",className:"anchor-link after"},(0,o.kt)("span",{parentName:"a"},"¶"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\"Now that we don't have to adapt to compromises, but can engineer trade-offs away, how about\nwe invent some characteristics of money that have never existed before? For instance, our money\nis now also a universal ledger of transactions. A trackable, auditable ledger that can tell us\nwhere money has been and what it has been used for. Or not. Because we can tweak the privacy\ndial and say individuals should have privacy and governments should be accountable. ",(0,o.kt)("strong",{parentName:"p"},"We can\nreset that societal conversation"),'."')),(0,o.kt)("p",null,"Again, this final sentence may seem glib, but it's an important point. We can literally reset\nsociety-level conversations because there has been such a profound innovation in the media\nthrough which we communicate value. What powerful narrative will your work speak accountable,\npublic truth to?"),(0,o.kt)(u,{mdxType:"Flash"},(0,o.kt)(d,{mdxType:"Card"},(0,o.kt)("p",null,"Prompt: What feature of money which has never existed before does Andreas argue we have already engineered?"),(0,o.kt)("p",null,"A universal ledger of transactions."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"One of the results of compromising with the forms of money we use is that it is very difficult\nto move between the choices you make: if you want to move between dollars and gold, it\'s not a\ntrivial procedure. However, if you want to move from a fully digital, owned asset that is a\nperfect store of value, to a fully digital, owned asset that is a perfect medium of exchange;\nyou can now do that. Instead of trade-offs, we can just trade. I can disaggregate the fundamental\nproperties of money, on demand: even better, my wallet can do it for me, intelligently."')),(0,o.kt)("p",null,"The technology of money, at base, has always been composed of a system of symbols that allows\nus to communicate value to one another. What is at issue with compromised versions is the\n",(0,o.kt)("strong",{parentName:"p"},"control architecture")," required to navigate said compromises. Upending control architectures\nmight sound like a good thing to do and, in principle, it is, but remember:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\"This morning someone said, 'Disrupt yourself!' Bullshit. Disruption isn't comfortable or\neasy. Disruption means losing your job; it means cannibalizing your profit centre; it means\ndestroying your business. You don't do that to yourself! You act like Kodak - invent digital\nphotography in the 80's and then bury it and pretend that no-one knows, only to get upended by\nNokia who shipped a billion cameras, and they're not even a camera company ","[...]"," Engineered\nmoney, built by a rag-tag crew of anarchists, cypherpunks and misfits who don't care about your\nbusiness plan, or about being legitimized by regulators, is similar. These people have, for\nyears now, been laying down on the ground ",(0,o.kt)("strong",{parentName:"p"},"unassailable facts"),' faster than anyone can keep up\nwith."')),(0,o.kt)("p",null,"What makes one man's fact another's fiction? Arguably; interpretation. However, when you can\nengineer the linguistic protocol which communicates value between people, and create a common\nstandard for interpretation - i.e. a language compiler which produces the same output whenever\nyou feed it the same code - you get to what Andreas is talking about here: unassailable facts\nthat do not rely on any control architecture. They are true by virtue of the language in which\nthey are expressed, not because anyone in a position of authority said so."),(0,o.kt)(u,{mdxType:"Flash"},(0,o.kt)(d,{mdxType:"Card"},(0,o.kt)("p",null,"Prompt: We can create any number of new features with money that is a perfect abstraction. However, what engineering money is ",(0,o.kt)("em",{parentName:"p"},"really")," about is changing the ","_","_","_","_","_","_","_"," ","_","_","_","_","_","_","_","_","_","_","_","_"," which informs its creation and distribution."),(0,o.kt)("p",null,"control architecture."))),(0,o.kt)("h3",{id:"further-references",style:{position:"relative"}},"Further References",(0,o.kt)("a",{parentName:"h3",href:"#further-references","aria-label":"further references permalink",className:"anchor-link after"},(0,o.kt)("span",{parentName:"a"},"¶"))),(0,o.kt)("p",null,'One question we may ask, upon realising that we can now engineer money, is "what new features are worth engineering?" Andreas has helped us observe one: a universal ledger of transactions, which has already had a stark impact on how we imagine transactions, work and organisation more broadly. Is that all we need?'),(0,o.kt)("p",null,"Kernel will suggest, over the next seven weeks, that we can consider at least one more critical feature as a part of our engineering efforts. Transactions, work and organisation are all about relationships and capabilities. Kernel asks, "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Can we create a culture where I am wealthy by virtue of what I care for, rather than what I control? Where wealth means “having enough to share” because who you are is already enough. Can we create environments where what I hold is valuable because of how it cultivates the expression of care within community?")),(0,o.kt)(h,{src:"https://www.youtube-nocookie.com/embed/p1lXhTzlCVk?start=258",mdxType:"Video"}),(0,o.kt)("p",null,"Much like Niran Babalola in ",(0,o.kt)("a",{parentName:"p",href:"/learn/module-1/#week-1-firesides"},"Module 1")," we wish to reimagine ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/tV49vVMPsYo?t=346"},"the meaning of welfare"),", and suggest that we can enact this practically by "),(0,o.kt)(c,{mdxType:"Process"},"Developing our capability to relate (both internally and with others), and",(0,o.kt)(m,{to:"https://kortina.nyc/essays/principles-for-radical-tax-reform-and-a-universal-dividend/",mdxType:"Link"},"Radical tax reform.")),(0,o.kt)("p",null,"This is not to suggest that we financialize care, but rather that we figure out increasingly artistic ways of ",(0,o.kt)("a",{parentName:"p",href:"https://so-far.online/a-new-circuit-reunion/"},"incentivizing healthy relationships")," of many different kinds. We seek to create a more reciprocal, convivial society:"),(0,o.kt)(p,{mdxType:"List"},(0,o.kt)(m,{to:"https://theconvivialsociety.substack.com/p/the-paradox-of-control",mdxType:"Link"},(0,o.kt)("p",null,"Resonance rather than control")),(0,o.kt)(m,{to:"https://www.youtube.com/watch?v=rAL3L4-7r0M",mdxType:"Link"},(0,o.kt)("p",null,"Make money beautiful"))))}w.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-en-learn-module-2-engineering-mdx-e243ffcceb0d99989858.js.map