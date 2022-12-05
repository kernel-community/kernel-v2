(self.webpackChunkkernel_community=self.webpackChunkkernel_community||[]).push([[5268],{2349:function(e,a,n){"use strict";n.r(a),n.d(a,{_frontmatter:function(){return i},default:function(){return q}});var o=n(9756),t=(n(7294),n(3497)),r=n(8360),s=["components"],i={},l=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",a)}},c=l("Video"),u=l("Process"),d=l("Flash"),p=l("Card"),m=l("List"),k=l("Link"),b={_frontmatter:i},g=r.Z;function q(e){var a=e.components,n=(0,o.Z)(e,s);return(0,t.kt)(g,Object.assign({},b,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"-la-idea",style:{position:"relative"}},"💡 La idea",(0,t.kt)("a",{parentName:"h1",href:"#-la-idea","aria-label":" la idea permalink",className:"anchor-link after"},(0,t.kt)("span",{parentName:"a"},"¶"))),(0,t.kt)(c,{src:"https://www.youtube-nocookie.com/embed/gjwr-7PgpN8",mdxType:"Video"}),(0,t.kt)("h2",{id:"¿cómo-encaja-en-kernel",style:{position:"relative"}},"¿Cómo encaja en Kernel?",(0,t.kt)("a",{parentName:"h2",href:"#%C2%BFc%C3%B3mo-encaja-en-kernel","aria-label":"¿cómo encaja en kernel permalink",className:"anchor-link after"},(0,t.kt)("span",{parentName:"a"},"¶"))),(0,t.kt)("p",null,"Este video de Devcon 1 contiene muchas gemas de conocimiento sobre las ideas detrás de Ethereum; ¿por qué podría ser interesante e importante tener un entorno Turing completo compartido al que cualquiera pueda acceder y programar?; ¿y cuál era (y es) la visión? Es especialmente útil mirar hacia atrás y preguntar qué ideas originales hemos logrado implementar y dónde se puede mejorar todavía. Este video ha sido seleccionado para ayudarte a profundizar su comprensión (más técnica) de:"),(0,t.kt)(u,{mdxType:"Process"},(0,t.kt)("p",null,"Valor"),(0,t.kt)("p",null,"Confianza "),(0,t.kt)("p",null,"Incentivos "),(0,t.kt)("p",null,"Resistencia a la censura "),(0,t.kt)("p",null,"(¡No solo!) dinero y discurso ")),(0,t.kt)("h2",{id:"resumen",style:{position:"relative"}},"Resumen",(0,t.kt)("a",{parentName:"h2",href:"#resumen","aria-label":"resumen permalink",className:"anchor-link after"},(0,t.kt)("span",{parentName:"a"},"¶"))),(0,t.kt)("p",null,"Este video es la génesis de la analogía entre la calculadora (Bitcoin) y el teléfono inteligente (Ethereum) y\nuna demostración del poder de la generalidad..."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},'"En lugar de tener un protocolo diseñado en torno a un conjunto muy pequeño de casos de uso,\nsimplemente creas un ',(0,t.kt)("strong",{parentName:"p"},"sistema operativo de propósito general"),' y dejas que las personas construyan\nlo que quieran como aplicaciones encima de él".')),(0,t.kt)("p",null,"Ethereum es un blockchain con algunas characterísticas únicas:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},'Incorpora un lenguaje de programación Turing-completo: esencialmente un híbrido entre arquitecturas\nde máquinas virtuales estándar, secuencias de comandos de Bitcoin y "algunas otras cosas". '),(0,t.kt)("li",{parentName:"ul"},"Todo el mundo puede escribir programas en este lenguaje o bien, lenguajes de alto nivel que se compilan a este,\ntomar estos códigos compilados, ponerlos en transacciones y enviarlos al blockchain.\nLa transacción se confirma y obtiene una cuenta especial en esa dirección. "),(0,t.kt)("li",{parentName:"ul"},"Las cuentas contractuales y las cuentas de propiedad externa tienen ",(0,t.kt)("strong",{parentName:"li"},"los mismos privilegios"),"."),(0,t.kt)("li",{parentName:"ul"},"Cualquier persona puede crear una aplicación, con las reglas que sea. Y cualquiera persona puede interactuar con esa\naplicación, es decir, puedes hacer NameCoin en 10 líneas de código...")),(0,t.kt)("p",null,'El estado se define como un valor clave que asigna direcciones a objetos de cuenta. Cada objeto de cuenta tiene un\n"nonce" (un número o valor que solo se puede usar una vez) y un saldo. Las cuentas de contrato también incluyen un hash de código y almacenamiento usando un árbol trie. Luego,\nVitalik analiza cómo funcionan las transacciones con detalles importantes de bajo nivel para que podamos construir una\nimagen conceptual completa en las próximas semanas. '),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},'"En realidad, puedes pensar en Ethereum como un sistema bastante simple. Puedes pensar en el estado como\nuna base de datos, y puedes pensar en cada uno de estos contratos como programas que están\nsentados en una computadora, ',(0,t.kt)("strong",{parentName:"p"},"excepto la computadora se distribuye masivamente a nivel mundial. En realidad,\nes una red altamente segura respaldada por decenas de miles de computadoras en todo el mundo."),' Es audaz\nporque es importante".')),(0,t.kt)("p",null,'Sin embargo, esto plantea "El problema Halting". Si tienes un lenguaje de secuencias de comandos general, entonces, ¿qué impide que alguien escriba un programa que no finaliza (o se pare / halt), ocupando todos los recursos de la computadora e impidiendo que alguien más lo use? Vitalik explica cómo resuelve esto con "gas": una tarifa que se cobra por cada paso computacional que debe realizar la computadora, donde hay un límite de pasos computacionales posibles por bloque.'),(0,t.kt)(d,{mdxType:"Flash"},(0,t.kt)(p,{mdxType:"Card"},(0,t.kt)("p",null,"P: El estado de Ethereum se define como un...?"),(0,t.kt)("p",null,"R: valor clave que asigna direcciones a objetos de cuenta."))),(0,t.kt)("h3",{id:"economía-virtual",style:{position:"relative"}},"Economía Virtual",(0,t.kt)("a",{parentName:"h3",href:"#econom%C3%ADa-virtual","aria-label":"economía virtual permalink",className:"anchor-link after"},(0,t.kt)("span",{parentName:"a"},"¶"))),(0,t.kt)("p",null,"Esto significa que no hay un límite ",(0,t.kt)("em",{parentName:"p"},"técnico")," sobre lo que se puede poner en el campo ",(0,t.kt)("inlineCode",{parentName:"p"},"datos"),"\nde una transacción, pero hay uno ",(0,t.kt)("em",{parentName:"p"},"económico"),", ya que cuantos más datos incluyas, más caro\nse vuelve. Fue un gas 68 adicional por cada byte de datos que incluyiste en ese momento, aunque\nes posible que haya cambiado ahora.  "),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"💡 Ejercicio para el lector: ¿cómo dirías cuál es el precio del gas por byte actualmente?")),(0,t.kt)("p",null,"Vitalik consiguientemente analiza algunas de las complejidades en torno a ",(0,t.kt)("inlineCode",{parentName:"p"},"v"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"r")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"s")," de la criptografía de curva\nelíptica, y cómo ",(0,t.kt)("inlineCode",{parentName:"p"},"v")," es un campo adicional que se usa para la recuperación de claves públicas. También proporciona\nmás información sobre recibos y registros y por qué los registros son más baratos y permiten un acceso eficiente\nde clientes ligeros. Aunque suene aburrido, este es el corazón de cómo construimos\nherramientas resistentes a la censura."),(0,t.kt)(d,{mdxType:"Flash"},(0,t.kt)(p,{mdxType:"Card"},(0,t.kt)("p",null,"P: ¿Cómo evitamos que se pare un blockchain con un script completo de Turing?"),(0,t.kt)("p",null,'R: Cobrando "gas" por cada paso computacional y limitando la cantidad de gas consumido por bloque.'))),(0,t.kt)("p",null,"A continuación una descripción de la ",(0,t.kt)("strong",{parentName:"p"},"Máquina Virtual Ethereum"),":"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Stack: hasta 1024 campos de 32 bytes."),(0,t.kt)("li",{parentName:"ul"},"Memoria: solo una matriz de bytes que se expande infinitamente, pero cuanto más expande la matriz de bytes,\nmás gas que tienes que pagar. ",(0,t.kt)("strong",{parentName:"li"},"La mayoría de los límites no son estáticos, son económicos y verás\nesta idea una y otra vez.")),(0,t.kt)("li",{parentName:"ul"},"Almacenamiento: permanente para contratos. Puedes leer y escribir en él."),(0,t.kt)("li",{parentName:"ul"},"Variables de entorno: la Máquina Virtual puede acceder al número del bloque, el tiempo, la dificultad de extracción, el bloque anterior\nhash, etc."),(0,t.kt)("li",{parentName:"ul"},"Registros: almacenamiento de sólo agregar en un bloque específico, no en el estado."),(0,t.kt)("li",{parentName:"ul"},"Subllamada: código de operación por el cual Máquina Virtual puede llamar a otros contratos.")),(0,t.kt)("p",null,'Vitalik analiza la codificación ABI (interfaz binaria de aplicación) y RLP (prefijo de longitud recursiva) "para personas que\nson fanáticos de la teoría de conjuntos". Puede parecer aburrido, pero es una demostración de la cultura primitiva y de cómo\npiensan realmente las personas que construyeron todo esto. Continúa con una explicación de los algoritmos de memoria dura\npara la minería y por qué fueron una innovación; enfatiza el tiempo de bloqueo rápido (17s); y analiza "tíos", que resuelven las tasas obsoletas de bloqueos que surgen debido a la latencia de la red. Vale la pena escucharlo por el contexto cultural, pero 23:50 - 28:57 ahora está un poco desactualizado.'),(0,t.kt)("p",null,'Vitalik destaca que los intentos de un árbol Merkle son "una construcción que permite pruebas compactas y\neficientemente verificables de que una transacción en particular se incluyó en un bloque en particular".\nSin embargo, no se trata solo de transacciones en el árbol Merkle; también es el estado: es decir, ese almacenamiento\nárbol trie del que hablamos anteriormente en el objeto de la cuenta.'),(0,t.kt)("p",null,"Comprender cómo esta elección particular de estructura de datos nos permite expresar sucintamente\nel estado compartido revela por qué la intimidad con los detalles técnicos de bajo nivel permite construir\nuna imagen conceptual integral de cómo se une todo y el tipo significados que la tecnología\npuede crear. "),(0,t.kt)("p",null,"¿Qué tipo de significado exactamente? Bueno, ",(0,t.kt)("a",{parentName:"p",href:"https://www.goodreads.com/book/show/5755.The_Language_Instinct"},"el lenguaje en sí está compuesto de estructuras profundas en forma de árbol"),". Son estos patrones combinatorios básicos, pero extraordinariamente poderosos, los que permiten a los seres humanos muy jóvenes aprender y utilizar un fenómeno casi infinitamente complejo con tanta facilidad, incluso cuando sus cerebros aún se están desarrollando. Más prosaicamente, cada palabra es un árbol, con sus raíces rastreando a través de un sinfín de otras palabras, idiomas y personas, y sus ramas alcanzando cualquier número de interpretaciones únicas en tiempos y contextos aún por descubrir. El lenguaje es el único sistema ",(0,t.kt)("a",{parentName:"p",href:"https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274"},"lógicamente descentralizado")," que tenemos, por lo que tiene sentido que las estructuras de datos que informan los próximos sistemas lógicamente descentralizados que co-creamos reflejen eso en el corazón de cómo comunicamos valor actualmente."),(0,t.kt)("h3",{id:"computación-generalizada",style:{position:"relative"}},"Computación generalizada",(0,t.kt)("a",{parentName:"h3",href:"#computaci%C3%B3n-generalizada","aria-label":"computación generalizada permalink",className:"anchor-link after"},(0,t.kt)("span",{parentName:"a"},"¶"))),(0,t.kt)("p",null,"Si eres menos técnico que Vitalik (vamos, al igual que casi todos nosotros) y te preguntas qué significa todo esto\nrealmente. Bueno, el punto crítico es esta noción de un ",(0,t.kt)("strong",{parentName:"p"},"sistema operativo de propósito general"),": una\nmáquina virtual monolítica distribuida en todo el mundo que es compartida por todos, que no es propiedad de\nnadie y que no se puede apagar sin también apagar Internet. Con Bitcoin,\npuedes transportar 12 palabras mágicas en su cabeza a través de cualquier frontera del\nmundo, deletrearlas en una máquina conectada a Internet y tener acceso inmediato al valor. "),(0,t.kt)("p",null,"Ahora, existe la posibilidad de reducir no solo el valor monetario, sino\ntambién la ",(0,t.kt)("em",{parentName:"p"},"computación generalizada"),". Es decir, su mnemónica de 12 o 24 palabras podría ser su sistema operativo personal completo,\nal que se podría acceder desde cualquier lugar. Deja de pensar en las computadoras como una pantalla en la que escribe cosas desde un teclado.\nComienza a ver el mundo en sí mismo como un patio de juegos infinitamente programable, cuyo acceso solo requiere unas pocas palabras mágicas\nque cualquier persona, en cualquier lugar, puede crear cuando aprende los conceptos básicos de un nuevo orden de lenguaje."),(0,t.kt)(d,{mdxType:"Flash"},(0,t.kt)(p,{mdxType:"Card"},(0,t.kt)("p",null,"P: Las 12 o 24 palabras que se utilizan para generar tu clave privada y otorgarle acceso a blockchain se denominan ","_","_","_","_","_","_","_","_","."),(0,t.kt)("p",null,"R: Mnemotécnicas."))),(0,t.kt)("h3",{id:"kaizen-y-el-principio-de-substracción",style:{position:"relative"}},"Kaizen y el principio de substracción",(0,t.kt)("a",{parentName:"h3",href:"#kaizen-y-el-principio-de-substracci%C3%B3n","aria-label":"kaizen y el principio de substracción permalink",className:"anchor-link after"},(0,t.kt)("span",{parentName:"a"},"¶"))),(0,t.kt)("p",null,"También vale la pena entender la ",(0,t.kt)("a",{parentName:"p",href:"https://ethereum.foundation/philosophy/"},"filosofía de la Fundación Ethereum"),", ya que funciona con dos fascinantes opuestos complementarios."),(0,t.kt)(m,{mdxType:"List"},(0,t.kt)(k,{to:"https://youtu.be/R7FjX0GEiAM?t=110",mdxType:"Link"},"La charla por excelencia de DevCon IV")),(0,t.kt)("p",null,'El término 改善 (que se pronuncia "kaizen", significa "mejorar continuamente") fué usado por primera vez en Japón después de la Segunda Guerra Mundial, mayoritarimente promovido por negocios americanos y profesores de gestión de calidad, y encontró su apogeo en "The Toyota Way". Así que no es un término con una gran historia, pero es uno que podemos recuperar combinándolo con su opuesto, lo que Aya Miyaguchi llama "El principio de substracción". '),(0,t.kt)("p",null,'Arraigada en la filosofía Zen, la Fundación Ethereum tiene como objetivo "hacerse pequeña"; hacer al no hacer; y tratar de importar menos. Al restar consistentemente de su propia importancia e influencia, entonces la mejora continua que todos deseamos ver ocurre en la capacidad y habilidad de la comunidad. Es elegante y simple.'),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Buscamos mejorar continuamente a las personas que nos rodean, humillándonos y entregando poder en cada oportunidad, sin eludir la responsabilidad. ")),(0,t.kt)("p",null,"Encantados, poco a poco nos encontramos sin hacer nada, siendo felices. "))}q.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-es-learn-module-1-understanding-ethereum-mdx-1a68a7f1e111a43f17fd.js.map