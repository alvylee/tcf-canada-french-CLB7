(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch9_conjunctions',
    code: 'Ch 9',
    level: 'A2–B2',
    category: 'conjunctions',
    icon: '🔗',
    title: 'Conjunctions & Logical Connectors (Les Conjonctions)',
    titleZh: '第九章 · 连词与逻辑连接词（并列、从属、虚拟式连词与 TCF 高分衔接）',
    subtitle: 'Tex-style mastery of Chapter 9 (con1–con3) expanded for TCF Canada CLB 7 into 5 bite-sized pages: Coordinating ("Mais où est donc Ornicar ?"), Subordinating with Indicative (parce que vs. puisque, pendant que vs. tandis que, depuis que), Subjunctive vs. Same-Subject Infinitive Conjunctions (bien que, avant que/de, pour que/de), and B2 Essay/Speaking Connectors (cependant, néanmoins, malgré vs. bien que) — with 4 original Tex cartoons & 58 drills.',
    subtitleZh: '对标 Tex 原版第九章（con1–con3）并结合 TCF Canada CLB 7 写作与口语高分要求扩充为 5 个精讲小页：并列连词（口诀 *Mais où est donc Ornicar ?*）、直陈式从属连词（parce que vs puisque、pendant que vs tandis que、depuis que）、虚拟式触发连词与同主语不定式转换（bien que、avant que/de、pour que/de），以及 B2 议论逻辑连接词（cependant、malgré vs bien que 等），配 4 张原版卡通与 58 题专练。',
    pages: [
      /* =========================================================
         PAGE 9.1: INTRO TO CONJUNCTIONS (con1)
      ========================================================= */
      {
        id: 'cj_1',
        code: '9.1',
        group: 'Intro & Coordinating',
        shortTitle: 'Intro: Coordinate vs. Subordinate',
        title: 'Introduction to Conjunctions: Coordinating vs. Subordinating Clauses',
        titleZh: '连词总论：并列连词（对等连接）与从属连词（主从关系）',
        estMin: 3,
        summary: 'Understand the two big classes of French conjunctions: (1) COORDINATING conjunctions ("mais, ou, et, donc, or, ni...ni, car, puis" — famous French mnemonic: "Mais où est donc Ornicar ?") join two equal elements (noun + noun, verb + verb, independent clause + independent clause); (2) SUBORDINATING conjunctions ("que, quand, lorsque, pendant que, tandis que, depuis que, puisque, parce que") link an independent main clause to a dependent clause that cannot stand alone.',
        summaryZh: '法语连词分为两大阵营：① **并列连词**（记忆口诀：*Mais où est donc Ornicar ?* = `mais, ou, et, donc, or, ni, car` 再加上 `puis`），专门连接两个语法地位**完全平等**的成分（名词+名词、动词+动词、独立句+独立句）；② **从属连词**（如 `que, quand, pendant que, tandis que, depuis que, puisque, parce que`），用来把一条**不能单独成句的从句**挂接到主句上。',
        cheatSummary: [
          { label: 'Class 1: Coordinating ("Mais où est donc Ornicar ?")', rule: 'Links equals: mais (but), ou (or — NOT où!), et (and), donc (so), or (now/but), ni...ni (neither...nor), car (for), puis (then).', ruleZh: '并列连词七剑客 + puis：mais（但是）、ou（或者，注意没重音）、et（和）、donc（因此）、or（然而/话虽如此）、ni…ni（既不…也不）、car（因为）、puis（接着）。' },
          { label: 'Class 2: Subordinating (Independent + Dependent)', rule: 'Introduces dependent clause: que (that), quand/lorsque (when), pendant que (while), tandis que (whereas), depuis que (since), puisque (since/as), parce que (because).', ruleZh: '从属连词引出依赖主句的从句：que, quand/lorsque, pendant que, tandis que, depuis que, puisque, parce que。' }
        ],
        sections: [
          {
            id: 'cj1_intro',
            heading: '1. Equal Partners vs. Main + Dependent Clauses',
            headingZh: '一、平级并列 vs. 主从依赖对比总览',
            lead: 'Look at Tex’s classic examples: "ni le barbecue ni les hamburgers" links two nouns; "fume... et boit..." links two verbs; while "que Tex fume trop" depends on "Il est évident":',
            leadZh: '看这两幅典型句式：同样是用连词把想法接起来，**并列连词**连接两个对称元素，**从属连词**则把从句嵌进主句框架中：',
            cartoon: {
              src: './assets/tex_cartoons/con1_fume.gif',
              alt: 'Tex fume des cigarettes et boit du vin rouge',
              caption: 'Coordinating: Tex fume des cigarettes ET boit du vin rouge. — Subordinating: Il est évident QUE Tex fume trop.',
              captionZh: '并列（对等动词）：Tex 抽烟“并且（et）”喝红酒。— 主从（依赖主句）：很明显“（que）Tex 抽得太多了”。'
            },
            table: {
              headers: ['Class', 'French Words', 'Grammatical Role', 'Model Example'],
              rows: [
                { cols: ['Coordinating', 'mais, ou, et, donc, or, ni...ni, car (+ puis)', 'Joins equal words, verbs, or independent clauses', 'Edouard n’aime ni le barbecue ni les hamburgers.'], audio: 'Edouard n’aime ni le barbecue ni les hamburgers.' },
                { cols: ['Subordinating', 'que, quand, lorsque, pendant que, tandis que, depuis que, puisque, parce que', 'Attaches dependent clause to main clause', 'Il est évident que Tex fume trop.'], audio: 'Il est évident que Tex fume trop.' }
              ]
            },
            examples: [
              { fr: 'Tex fume des cigarettes et boit du vin rouge.', en: 'et links two equal verb phrases (no subject repeat needed)', zh: 'et 连接两个平等的动作（抽烟、喝酒），后面甚至不用重复主语。', tag: 'Coordinating' },
              { fr: 'Il est évident que Tex fume trop.', en: 'que introduces a dependent noun clause ("that Tex smokes too much")', zh: 'que 引出的从句无法单独站立，必须依附于前面的主句 Il est évident。', tag: 'Subordinating' }
            ],
            quickCheck: {
              prompt: 'In "Mais où est donc Ornicar ?" — which French coordinating conjunction actually has NO accent when written?',
              promptZh: '法国人背并列连词的谐音梗 “Mais où est donc Ornicar ?” 里，哪一个词实际拼写时头上**没有重音符号**？',
              options: [
                'ou ("or" — où with accent is "where" / relative!)',
                'donc',
                'mais',
                'car'
              ],
              answerIdx: 0,
              explain: 'In the mnemonic, "où" represents "ou" (= "or", NO accent!). "Où" with an accent means "where".',
              explainZh: '口诀里借用了“où est（在哪里）”的谐音，但表示“或者”的连词 ou 绝对没有重音符号！'
            }
          }
        ],
        drills: [
          {
            id: 'dcj1_d1',
            kind: 'choice',
            prompt: 'Which set contains ONLY coordinating conjunctions?',
            promptZh: '下面哪一组全部都是并列连词（coordinating conjunctions）？',
            options: [
              'mais, ou, et, donc, or, ni, car',
              'parce que, puisque, tandis que',
              'bien que, avant que, afin que',
              'que, depuis que, lorsque'
            ],
            answerIdx: 0,
            audio: 'mais, ou, et, donc, or, ni, car',
            explain: 'Classic French mnemonic: "Mais où est donc Ornicar ?" = mais, ou, et, donc, or, ni, car!',
            explainZh: '法语七大并列连词：mais, ou, et, donc, or, ni, car。'
          },
          {
            id: 'dcj1_d2',
            kind: 'choice',
            prompt: 'Identify the clause type: "que Tex fume trop" inside "Il est évident que Tex fume trop."',
            promptZh: '在 “Il est évident que Tex fume trop.” 中，后半句 “que Tex fume trop” 属于？',
            options: [
              'A dependent (subordinate) clause',
              'An independent clause standing alone',
              'Two coordinated nouns',
              'An imperative phrase'
            ],
            answerIdx: 0,
            audio: 'Il est évident que Tex fume trop.',
            explain: 'Introduced by subordinating conjunction "que", it cannot stand alone as a sentence.',
            explainZh: '由从属连词 que 引出，必须依赖主句，属于从句（dependent clause）。'
          },
          {
            id: 'dcj1_d3',
            kind: 'fib',
            prompt: 'Complete the negative pairing: Edouard n’aime ___ le barbecue ni les hamburgers.',
            promptZh: '填入表示“既不……也不……”的前半个并列连词：',
            answers: ['ni'],
            hint: 'ne... ni A ni B (note: keep definite articles le / les here!).',
            audio: 'Edouard n’aime ni le barbecue ni les hamburgers.',
            explain: 'ni... ni... coordinates two negative items cleanly.',
            explainZh: '固定并列否定搭配：ne + 动词 + ni A ni B。'
          },
          {
            id: 'dcj1_d4',
            kind: 'fib',
            prompt: 'Link two equal verbs: Tex fume des cigarettes ___ boit du vin rouge. (and)',
            promptZh: '用“和 / 并且”连接两个平等动词：',
            answers: ['et'],
            hint: 'French coordinating conjunction for "and".',
            audio: 'Tex fume des cigarettes et boit du vin rouge.',
            explain: 'et joins two equal verb phrases.',
            explainZh: '连接两个动词用并列连词 et。'
          },
          {
            id: 'dcj1_d5',
            kind: 'fib',
            prompt: 'Mandatory "that": Il est évident ___ Tex fume trop. (NEVER omit "that" in French!)',
            promptZh: '“很明显（that）Tex 抽得太多了”——法语里“that”绝对不能省略，请填入：',
            answers: ['que'],
            hint: 'Subordinating conjunction "that" = que.',
            audio: 'Il est évident que Tex fume trop.',
            explain: 'English can drop "that", but French ALWAYS keeps subordinating "que"!',
            explainZh: '英语常省略 that，但法语里的从属连词 que 绝对不能省！'
          },
          {
            id: 'dcj1_d6',
            kind: 'choice',
            prompt: 'Choose the right spelling for "coffee OR tea":',
            promptZh: '选择“咖啡**或者**茶”的正确法语拼写：',
            options: ['du café ou du thé', 'du café où du thé', 'du café or du thé', 'du café ni du thé'],
            answerIdx: 0,
            audio: 'Vous préférez du café ou du thé ?',
            explain: '"ou" (without accent) = "or". "où" (with accent) = "where".',
            explainZh: '“或者”是 ou（不带重音）；où 表示地点或时间“哪里/何时”。'
          },
          {
            id: 'dcj1_d7',
            kind: 'choice',
            prompt: 'Which conjunction CANNOT join two single words inside a sentence (only whole sentences/clauses)?',
            promptZh: '以下哪一个并列连词通常只能站在新句句首转折（**不能**直接用来连接两个孤立形容词或名词）？',
            options: ['or ("now / however / as it happens")', 'mais', 'et', 'ou'],
            answerIdx: 0,
            audio: 'Or, cela inquiète Tex.',
            explain: 'Tex emphasizes that "or" links full sentences/arguments — unlike mais/et/ou, it cannot link two bare adjectives/nouns.',
            explainZh: 'or 是书面逻辑转折词（“然而/话虽如此”），通常用来衔接整句话，不像 mais / et / ou 那样可以连接两个词。'
          },
          {
            id: 'dcj1_d8',
            kind: 'fib',
            prompt: 'Complete with the subordinating conjunction meaning "since (already known)": ___ tu es là, aide-moi.',
            promptZh: '表示“既然（已知的明显原因）”的从属连词是（句首大写）：',
            answers: ['Puisque', 'puisque'],
            hint: 'Starts with puis- (different from time "depuis que").',
            audio: 'Puisque tu es là, aide-moi.',
            explain: 'puisque = since/as (already known reason); depuis que = since (time).',
            explainZh: 'puisque 表原因（“既然”）；depuis que 表时间（“自从……以来”）。'
          },
          {
            id: 'dcj1_d9',
            kind: 'fib',
            prompt: 'Complete with the contrast subordinating conjunction ("whereas"): Tex est poète, ___ Trey est musicien.',
            promptZh: '用来对比两个人截然相反的情况（“而 / 却”，whereas），常用哪两个词构成从属连词？',
            answers: ['tandis que'],
            hint: 'tandis + que.',
            audio: 'Tex est poète, tandis que Trey est musicien.',
            explain: 'tandis que highlights a contrast ("whereas"), unlike pendant que (simultaneous time).',
            explainZh: 'tandis que 侧重对比“而……却……”；pendant que 侧重时间同步“在……期间”。'
          },
          {
            id: 'dcj1_d10',
            kind: 'choice',
            prompt: 'Which sentence contains a SUBORDINATING conjunction?',
            promptZh: '下面哪一句使用了**从属连词**（主从结构）？',
            options: [
              'Je sais que tu comprends la règle.',
              'Tu veux du thé ou du café ?',
              'Il est jeune mais sérieux.',
              'Il n’aime ni le sport ni la télé.'
            ],
            answerIdx: 0,
            audio: 'Je sais que tu comprends la règle.',
            explain: '"que" links dependent clause "tu comprends la règle" to main verb "Je sais".',
            explainZh: 'Je sais que... 使用了从属连词 que 引出宾语从句；其余三句均由并列连词 ou / mais / ni...ni 连接对等成分。'
          }
        ],
        related: [
          { chapterId: 'ch8b_pronouns_relative', pageId: 'p8b_8', label: 'Back to 8B.8 lequel, ce dont & Review' },
          { chapterId: 'ch9_conjunctions', pageId: 'cj_2', label: '9.2 Coordinating Conjunctions in Depth' }
        ]
      },

      /* =========================================================
         PAGE 9.2: COORDINATING CONJUNCTIONS (con2)
      ========================================================= */
      {
        id: 'cj_2',
        code: '9.2',
        group: 'Intro & Coordinating',
        shortTitle: 'mais, ou, et, donc, or, ni, car',
        title: 'Coordinating Conjunctions in Depth: Words, Clauses, Sentence Position & False Friend "or"',
        titleZh: '并列连词精讲（mais/ou/et/donc/or/ni/car）：连词造句、donc 位置与假朋友 or / car',
        estMin: 4,
        summary: 'Master every nuance of coordinating conjunctions (con2): (1) link words ("intéressante mais fatigante", "fascinant car dangereux"), clauses, OR separate sentences ("En France, Tex ignorait... Puis, un jour..."); (2) notice "donc" can sit either at the start of the sentence ("Donc Edouard est snob") OR right after the conjugated verb ("Ils ont donc quelques problèmes"); (3) avoid the trap "or" = "now/yet/consequently" (introducing a logical premise/surprise, NOT English "or" which is "ou"!) and formal "car" (= "for/because" between clauses — never starts a standalone answer to "Pourquoi ?").',
        summaryZh: '深挖八大并列连词在真实语境里的细微规则：① `mais, ou, et, donc, ni, car, puis` 既能连接词组，也能连接分句；② **`donc`** 极其灵活，既可放句首，也常插在**变位动词紧后面**（如 *Ils ont **donc** des problèmes*）；③ 防坑 **`or`** 不是“或者”（“或者”是 `ou`！），而是议论文逻辑推进转折词（“然而/但是/话说回来”）；④ **`car`（因为）** 多见于书面，只连接两个分句且不以 *Car...* 单独回答 Pourquoi（对话回答“为什么”必须用 *Parce que...*）！',
        cheatSummary: [
          { label: 'Two Classic Traps: or vs. ou & car vs. parce que', rule: '"ou" = "or" (choice). "or" = logical "now / however" (only links full sentences!). "car" = formal coordinating "for/because" between two clauses (cannot answer "Pourquoi ?").', ruleZh: '高频混淆：ou = 或者；or = 然而/且说（书面逻辑衔接句首）。car = 因为（仅连接分句，书面多，不直接用来回答 Pourquoi ?）。' },
          { label: 'Word Placement: donc & or / puis', rule: 'or, mais, puis stand at the START of the second sentence. "donc" can stand at the start OR immediately AFTER the conjugated verb ("Il parle donc français couramment").', ruleZh: '位置细节：or / mais / puis 通常站新句最前面；donc 既能放句首，也能优雅地放在变位动词后面（Il parle donc français / Ils ont donc des problèmes）！' }
        ],
        sections: [
          {
            id: 'cj2_words_clauses',
            heading: '1. Word-Level vs. Clause-Level Links (Tex & Trey)',
            headingZh: '一、词组连接 vs. 分句/句间衔接（Tex 与兄弟 Trey）',
            lead: 'Notice how concise French becomes when coordinating adjectives ("intéressante mais fatigante", "fascinant car dangereux") or infinitives ("n’aime pas écouter... ni faire..."):',
            leadZh: '读 Tex 和摇滚滑板弟弟 Trey 的对比，你会发现法语里不仅连词能接句子，连 `car / donc / mais` 都能直接连接两个形容词！',
            cartoon: {
              src: './assets/tex_cartoons/con2_et.gif',
              alt: 'Trey fait du skate-board et écoute de la musique',
              caption: 'Trey fait du skate-board ET écoute de la musique. Pour Trey, le saut à l’élastique est fascinant CAR dangereux.',
              captionZh: 'Trey 玩滑板“并（et）”听音乐；在他看来蹦极很刺激，“因为（car）”很危险！'
            },
            table: {
              headers: ['Conjunction', 'Meaning', 'Can Link', 'Authentic Tex Example'],
              rows: [
                { cols: ['et · puis', 'and · then', 'Words, clauses, sentences', 'Tex, puis Tammy, ont essayé... · Puis, un jour...'], audio: 'Trey fait du skate-board et écoute de la musique.' },
                { cols: ['mais · ou', 'but · or', 'Words, clauses, sentences', 'intéressante mais fatigante · la musique française ou le jazz'], audio: 'Le rap est intéressant mais fatigant.' },
                { cols: ['donc', 'so, therefore', 'Words, clauses, after verb', 'Il est jeune donc curieux. · Ils ont donc des problèmes.'], audio: 'Ils ont donc quelques problèmes de communication.' },
                { cols: ['or', 'now / however / yet', 'FULL sentences only (start)', 'Ils n’ont rien en commun. Or cela inquiète Tex.'], audio: 'Or, cela inquiète Tex. Mais que faire ?' },
                { cols: ['ni...ni (ne...pas...ni)', 'neither...nor / nor', 'Nouns, verbs, infinitives', 'Il n’est ni intellectuel ni cultivé.'], audio: 'Trey n’est ni intellectuel ni cultivé.' },
                { cols: ['car', 'for, because', 'Adj./clauses (between clauses)', 'Le saut est fascinant car dangereux.'], audio: 'Il ne veut pas essayer car c’est dangereux.' }
              ]
            },
            cartoon_extra: null
          },
          {
            id: 'cj2_sentences',
            heading: '2. Linking Full Sentences With "donc" & "or"',
            headingZh: '二、句间逻辑连接：donc 的后置写法与 or 的用法',
            lead: 'Watch the second Tex cartoon carefully: see how "donc" slides smoothly RIGHT AFTER the verb ("Ils ont donc quelques problèmes"), while "Or" steps in at the beginning of the next sentence to introduce a new tension:',
            leadZh: '重点看第二张漫画的句法：**`donc`** 放在动词 `ont` 后面读起来非常地道德语式节奏，而 **`Or`** 开启一个逻辑转折或新事实：',
            cartoon: {
              src: './assets/tex_cartoons/con2_donc.gif',
              alt: 'Tex et Trey ont donc des problèmes de communication',
              caption: 'Tex et Trey n’ont rien en commun. Ils ont DONC quelques problèmes de communication. OR cela inquiète Tex.',
              captionZh: '他们俩毫无共同点，**因此**沟通有点问题（Ils ont donc…）；**然而（or）**这令 Tex 很担忧。'
            },
            examples: [
              { fr: 'Tex et Trey n’ont rien en commun. Ils ont donc quelques problèmes de communication.', en: 'donc placed right after conjugated verb "ont"', zh: 'donc 放在变位动词 ont 后面，是法语写作与口语最地道的位置之一！', tag: 'donc After Verb' },
              { fr: 'Or cela inquiète Tex. Mais que faire ?', en: 'or = "Now, this worries Tex" / "However, this worries Tex"', zh: '切记：or 在句首绝对不是“或者”（英语 *or*），而是“而/话说/然而”的逻辑转折词！', tag: 'or = However/Now' },
              { fr: 'Tex n’aime pas écouter de rap ni faire du skate-board.', en: 'After "ne... pas", second item uses "ni" (no extra "pas" needed)', zh: '前面用 ne...pas 否定了第一项后，接并列第二项直接用 ni 连接（也可双 ni：ne...ni A ni B）。', tag: 'Negative ni' }
            ],
            quickCheck: {
              prompt: 'Look at Tex Drill #3: "Tex a grandi en France, il parle ___ français couramment." Which conjunction fits naturally right after "parle"?',
              promptZh: '观察语序位置：“Tex 在法国长大，因此他说一口流利的法语。” 把哪个词放在 parle 后面最地道？',
              options: ['donc', 'or', 'car', 'ni'],
              answerIdx: 0,
              explain: 'Among these conjunctions, ONLY "donc" ("therefore") naturally sits right after the conjugated verb ("il parle donc français couramment")!',
              explainZh: '只有 donc 可以插在主语+变位动词之后（il parle donc français...）；其余连词通常放分句开头。'
            }
          }
        ],
        drills: [
          {
            id: 'dcj2_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex, tu préfères Tammy ___ Bette ? (or)',
            promptZh: 'Tex 原题 #1：Tex，你更喜欢 Tammy 还是（或者）Bette？（注意别加错重音）：',
            answers: ['ou'],
            hint: '"or" = ou (NO accent!).',
            audio: 'Tex, tu préfères Tammy ou Bette ?',
            explain: 'ou (choice between two options).',
            explainZh: '二选一的“或者/还是”用 ou。'
          },
          {
            id: 'dcj2_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tex aime la France, ___ pas les Français ! (but)',
            promptZh: 'Tex 原题 #2：Tex 喜欢法国，但不喜欢法国人！',
            answers: ['mais'],
            hint: 'Contrast "but" = mais.',
            audio: 'Tex aime la France, mais pas les Français !',
            explain: 'Contrast → mais.',
            explainZh: '表示转折对比“但是”用 mais。'
          },
          {
            id: 'dcj2_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tex a grandi en France, il parle ___ français couramment. (so / therefore)',
            promptZh: 'Tex 原题 #3：Tex 在法国长大，因此他说一口流利的法语（放动词 parle 后）：',
            answers: ['donc'],
            hint: 'Result "so/therefore" placed right after "parle" → donc.',
            audio: 'Tex a grandi en France, il parle donc français couramment.',
            explain: 'Consequence after conjugated verb → il parle donc...',
            explainZh: '表因果结论“因此”且常置于动词后：donc。'
          },
          {
            id: 'dcj2_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Tammy n’aime pas le chili, ___ les tamales. (nor)',
            promptZh: 'Tex 原题 #4：Tammy 不喜欢辣豆酱，也不喜欢玉米粽（前面已有 n’aime pas）：',
            answers: ['ni'],
            hint: 'Negative coordination after ne... pas → ni.',
            audio: 'Tammy n’aime pas le chili, ni les tamales.',
            explain: 'Negative addition after ne... pas → ni.',
            explainZh: '否定句并列“也不……”填 ni。'
          },
          {
            id: 'dcj2_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tex aime Tammy ___ elle fait bien la cuisine. (for / because — 3 letters)',
            promptZh: 'Tex 原题 #5：Tex 爱 Tammy，因为她菜做得好（用 3 个字母的并列连词）：',
            answers: ['car'],
            hint: 'Coordinating "because/for" (3 letters).',
            audio: 'Tex aime Tammy car elle fait bien la cuisine.',
            explain: 'car gives a reason between two clauses (= parce que).',
            explainZh: '三个字母的因果并列连词：car。'
          },
          {
            id: 'dcj2_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Les Français sont snobs. ___ Edouard est snob. (So / Therefore — capitalize)',
            promptZh: 'Tex 原题 #6：法国人很傲气。所以 Edouard 很傲气。（句首大写的“因此”）：',
            answers: ['Donc', 'donc'],
            hint: 'Logical conclusion at start of sentence.',
            audio: 'Donc Edouard est snob.',
            explain: 'Donc = therefore / so.',
            explainZh: '得出三段论结论：Donc。'
          },
          {
            id: 'dcj2_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tex est ami avec Corey ___ Joe-Bob. (and)',
            promptZh: 'Tex 原题 #7：Tex 和 Corey 还有 Joe-Bob 是朋友：',
            answers: ['et'],
            hint: 'Basic "and".',
            audio: 'Tex est ami avec Corey et Joe-Bob.',
            explain: 'et joins two equal nouns.',
            explainZh: '并列连接两个人物用 et。'
          },
          {
            id: 'dcj2_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tex porte un béret ___ il n’a pas de cheveux. (for / because — 3 letters)',
            promptZh: 'Tex 原题 #8：Tex 戴贝雷帽，因为他没有头发（3 个字母）：',
            answers: ['car'],
            hint: '3-letter coordinating conjunction meaning "for/because".',
            audio: 'Tex porte un béret car il n’a pas de cheveux.',
            explain: 'car explains the reason.',
            explainZh: '说明原因填 car。'
          },
          {
            id: 'dcj2_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tammy : Tex, il faut que tu choisisses : c’est moi ___ Bette ! (or)',
            promptZh: 'Tex 原题 #9：你必须做出选择：是我还是（or）Bette！',
            answers: ['ou'],
            hint: 'Choice between two options = ou.',
            audio: 'C’est moi ou Bette !',
            explain: 'ou = or.',
            explainZh: '选择关系填 ou。'
          },
          {
            id: 'dcj2_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Bette adore le chocolat ___ les glaces Blue Bell. (and)',
            promptZh: 'Tex 原题 #10：Bette 超级喜欢巧克力和 Blue Bell 冰淇淋：',
            answers: ['et'],
            hint: 'et = and.',
            audio: 'Bette adore le chocolat et les glaces.',
            explain: 'et joins two things she loves.',
            explainZh: '列举并列喜爱事物填 et。'
          },
          {
            id: 'dcj2_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Corey n’est pas un bon étudiant ___ il n’étudie pas. (for — 3 letters)',
            promptZh: 'Tex 原题 #11：Corey 不是好学生，因为他不学习（3 个字母并列连词）：',
            answers: ['car'],
            hint: 'car = for / because.',
            audio: 'Corey n’est pas un bon étudiant car il n’étudie pas.',
            explain: 'car introduces the reason.',
            explainZh: '表原因用 car。'
          },
          {
            id: 'dcj2_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tex n’apprécie pas la musique rap ___ la musique techno. (nor)',
            promptZh: 'Tex 原题 #12：Tex 不喜欢说唱乐，也不喜欢电子舞曲（否定并列）：',
            answers: ['ni'],
            hint: 'Negative pairing after n’apprécie pas → ni.',
            audio: 'Tex n’apprécie pas la musique rap ni la musique techno.',
            explain: 'ni connects the second negated item.',
            explainZh: '否定句延续另一项用 ni。'
          }
        ],
        related: [
          { chapterId: 'ch9_conjunctions', pageId: 'cj_1', label: 'Back to 9.1 Intro to Conjunctions' },
          { chapterId: 'ch9_conjunctions', pageId: 'cj_3', label: '9.3 Subordinating Conjunctions (Indicative)' }
        ]
      },

      /* =========================================================
         PAGE 9.3: SUBORDINATING CONJUNCTIONS WITH INDICATIVE (con3)
      ========================================================= */
      {
        id: 'cj_3',
        code: '9.3',
        group: 'Subordinating',
        shortTitle: 'quand, tandis que, puisque...',
        title: 'Subordinating Conjunctions (+ Indicative): quand, pendant que vs. tandis que, depuis que & puisque vs. parce que',
        titleZh: '直陈式从属连词全解：quand/lorsque、pendant que vs. tandis que、depuis que 与 puisque vs. parce que',
        estMin: 4,
        summary: 'Master all 7 indicative subordinating conjunctions in Tex (con3): (1) "que" (that); (2) "quand / lorsque" (when — remember future tense rule: "quand j’arriverai", future in BOTH clauses when talking about the future!); (3) "pendant que" (simultaneous "while") vs. "tandis que" (contrast "whereas", like Tex is a poet while Trey is a musician); (4) "depuis que" (time "since" + duration); (5) "parce que" (new unknown reason: "because") vs. "puisque" (obvious/already-known reason shared by speaker & listener: "since/as").',
        summaryZh: '吃透三大组最容易用混的**直陈式**从属连词（记住它们后面跟正常的现在/过去/将来时，**不用虚拟式**）：① **`quand / lorsque`（当……时）**：遇将来意义从句内一样要用**简单将来时**（`Quand il fera beau...`，不能像英语用一般现在时！）；② **`pendant que`（时间上“在……同时”）** vs **`tandis que`（对比上“然而 / ……却……”）**；③ **`depuis que`（自从……以来，表时间跨度，常配合现在时/复合过去时）**；④ **`parce que`（告诉对方还不知道的新原因，“因为”）** vs **`puisque`（双方都心知肚明的前提，“既然”）**！',
        cheatSummary: [
          { label: 'pendant que vs. tandis que & parce que vs. puisque', rule: 'pendant que = two actions happening at the same TIME ("Il travaille pendant que Tex dort"). tandis que = CONTRAST ("Tex est poète, tandis que Trey est musicien"). parce que = new reason ("Why? Parce que..."); puisque = known premise ("Since you’re free, help me!").', ruleZh: '两组精准辨析：同时发生用 pendant que；两者对比相反用 tandis que。回答新原因用 parce que；点明已知前提“既然……”用 puisque！' },
          { label: 'depuis que & quand + Future Trap', rule: 'depuis que = time "since" ("Depuis que Tex connaît Bette..."). NEVER confuse with puisque! With future meaning, quand / lorsque take FUTURE tense (not present!): "Quand tu viendras, je te le dirai."', ruleZh: '防坑两点：① “自从某时起”用 depuis que，不能用 puisque；② quand / lorsque 引出将来的时间，里面必须用将来时（Quand je pourrai，不用 *Quand je peux）！' }
        ],
        sections: [
          {
            id: 'cj3_sub_grid',
            heading: '1. Tex & Trey Night-Owl Routine & Comparison Grid',
            headingZh: '一、七大从属连词对比表与 Trey 作息示例',
            lead: 'Notice how Tex contrasts his daytime poetic life with Trey’s night-owl skateboard schedule using "tandis que", "quand", "pendant que", "depuis que", and "puisque":',
            leadZh: '读完关于 Tex 与弟弟 Trey 截然不同作息的几句话，这五个常用从属连词就再也不会张冠李戴：',
            cartoon: {
              src: './assets/tex_cartoons/con3_quand.gif',
              alt: 'Trey se lève quand le soleil se couche',
              caption: 'Trey se lève QUAND le soleil se couche. Il travaille PENDANT QUE Tex dort !',
              captionZh: '太阳落山**的时候（quand）** Trey 起床；**就在** Tex 呼呼大睡**期间（pendant que）**，他开始干活！'
            },
            table: {
              headers: ['Conjunction', 'Meaning & Nuance', 'Typical Tense / Mood', 'Tex Example'],
              rows: [
                { cols: ['que (qu’)', 'that (never omitted)', 'Indicative (after Je pense / Il est évident)', 'Il est évident que Trey est un curieux personnage.'], audio: 'Il est évident que Trey est un curieux personnage.' },
                { cols: ['quand · lorsque', 'when (lorsque = slightly more formal)', 'Present / Past / FUTURE for future!', 'Trey se lève quand le soleil se couche.'], audio: 'Trey se lève quand le soleil se couche.' },
                { cols: ['pendant que', 'while (simultaneous duration)', 'Indicative', 'Il travaille pendant que Tex dort.'], audio: 'Il travaille pendant que Tex dort.' },
                { cols: ['tandis que', 'whereas (contrast between A & B)', 'Indicative', 'Tandis que Tex est poète, Trey est musicien.'], audio: 'Tandis que Tex est poète, Trey est musicien.' },
                { cols: ['depuis que', 'since (time — action still ongoing)', 'Present / Passé Composé / Imp.', 'Depuis que Tex connaît Trey, il a découvert le rap.'], audio: 'Depuis que Tex connaît Trey, il a découvert le rap.' },
                { cols: ['parce que', 'because (gives NEW reason)', 'Indicative', 'J’aime Tex parce qu’il est beau.'], audio: 'J’aime Tex parce qu’il est beau.' },
                { cols: ['puisque', 'since / as (known / obvious reason)', 'Indicative', 'Puisque Tex et Trey sont frères, ils devraient se comprendre.'], audio: 'Puisque tu ne fais rien, viens m’aider !' }
              ]
            },
            examples: [
              { fr: 'Trey et Tex sont tous les deux des artistes, mais tandis que Tex est poète, Trey est musicien.', en: 'Contrast between two brothers → tandis que ("whereas")', zh: '对照两个人不同的身份或喜好，用 tandis que（“而/相反”）。', tag: 'tandis que (Contrast)' },
              { fr: 'Depuis que Tex connaît Trey, il a découvert le monde du rap.', en: 'Time starting in the past → depuis que (NOT *puisque)', zh: '“自从认识他以来”是时间起点，必须用 depuis que！', tag: 'depuis que (Time)' },
              { fr: 'Puisque Tex et Trey sont frères, ils devraient se comprendre.', en: 'Known premise obvious to everyone → puisque ("since/given that")', zh: '“既然他俩是亲兄弟（这是众所周知的事实）” → puisque！', tag: 'puisque (Known Cause)' }
            ],
            quickCheck: {
              prompt: 'Pick the sentence with the correct tense AND correct conjunction for "When I go to Canada next year, I will visit Montreal":',
              promptZh: '选出表达“明年我去加拿大时，我会去蒙特利尔玩”的正确法语句子（注意 quand 后时态）：',
              options: [
                'Quand j’irai au Canada l’an prochain, je visiterai Montréal.',
                'Quand je vais au Canada l’an prochain, je visiterai Montréal.',
                'Pendant que j’irai au Canada l’an prochain, je vais visiter Montréal.',
                'Depuis que j’irai au Canada, je visiterai Montréal.'
              ],
              answerIdx: 0,
              explain: 'In French, after "quand / lorsque" referring to a future event, you MUST use the Future tense ("Quand j’irai..."), NEVER Present!',
              explainZh: '英语说 *When I go*（用一般现在表将来），但法语在 quand / lorsque 后面谈论将来时**必须用将来时**：Quand j’irai…！'
            }
          }
        ],
        drills: [
          {
            id: 'dcj3_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex : ___ je connais Bette, ma vie a changé. (since — time)',
            promptZh: 'Tex 原题 #1：自从（time）我认识 Bette 以来，我的生活全都变了：',
            answers: ['Depuis que', 'depuis que'],
            hint: 'Time "since" = Depuis que.',
            audio: 'Depuis que je connais Bette, ma vie a changé.',
            explain: 'Duration/time starting from meeting Bette → Depuis que.',
            explainZh: '表示从认识到现在的时间跨度，用 Depuis que。'
          },
          {
            id: 'dcj3_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Joe-Bob est un écureuil ___ Corey est un cafard. (whereas — contrast)',
            promptZh: 'Tex 原题 #2：Joe-Bob 是只松鼠，**而** Corey 是只蟑螂（两者对比，填 2 词）：',
            answers: ['tandis que'],
            hint: 'Contrast "whereas" = tandis que.',
            audio: 'Joe-Bob est un écureuil tandis que Corey est un cafard.',
            explain: 'Direct contrast between two characters → tandis que.',
            explainZh: '比较两个截然不同的对象，“而/相反”用 tandis que。'
          },
          {
            id: 'dcj3_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tex : Je pense ___ Tammy est jolie. (that)',
            promptZh: 'Tex 原题 #3：我觉得 Tammy 很漂亮（“that”，不可省略）：',
            answers: ['que'],
            hint: 'Main verb penser + que + indicative.',
            audio: 'Je pense que Tammy est jolie.',
            explain: 'penser (affirmative) takes "que" + indicative.',
            explainZh: '肯定句 Je pense que... 引出观点。'
          },
          {
            id: 'dcj3_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Tammy : ___ Tex m’embrasse, je suis heureuse. (When — capitalize)',
            promptZh: 'Tex 原题 #4：当 Tex 亲吻我的时候，我很幸福（句首大写）：',
            answers: ['Quand', 'quand', 'Lorsque', 'lorsque'],
            hint: '"When" at start of sentence → Quand (or Lorsque).',
            audio: 'Quand Tex m’embrasse, je suis heureuse.',
            explain: 'Quand (or formal Lorsque) introduces a temporal condition ("whenever / when").',
            explainZh: '表示“每当……的时候”：Quand（或书面 Lorsque）。'
          },
          {
            id: 'dcj3_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tammy : ___ tu ne fais rien, viens m’aider ! (Since you’re clearly doing nothing... — capitalize)',
            promptZh: 'Tex 原题 #5：既然你现在明显啥也没干，快过来帮我！（已知前提，“既然”）：',
            answers: ['Puisque', 'puisque'],
            hint: 'Known cause / premise = Puisque.',
            audio: 'Puisque tu ne fais rien, viens m’aider !',
            explain: 'Using a visible, known fact as justification → Puisque!',
            explainZh: '对方什么都没干是显而易见的已知前提，用 Puisque（既然）。'
          },
          {
            id: 'dcj3_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Bette : J’aime Tex ___ il est beau. (because — new reason)',
            promptZh: 'Tex 原题 #6：我喜欢 Tex，因为他长得帅（说明原因“因为”）：',
            answers: ['parce qu’', "parce qu'", 'parce que'],
            hint: 'parce que (+ elided before il → parce qu’il est beau — Note: fill "parce qu’" or write full "parce qu’"? Notice "il est beau" follows!).',
            audio: 'J’aime Tex parce qu’il est beau.',
            explain: 'parce que + il elides cleanly to parce qu’il est beau!',
            explainZh: 'parce que 后接元音 il 时省音成 parce qu’。'
          },
          {
            id: 'dcj3_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Edouard est serveur ___ il adore la cuisine. (because — before il!)',
            promptZh: 'Tex 原题 #7：Edouard 当服务员，因为他热爱美食（parce que 在 il 前需省音）：',
            answers: ['parce qu’', "parce qu'", 'parce que'],
            hint: 'parce qu’ before vowel "il".',
            audio: 'Edouard est serveur parce qu’il adore la cuisine.',
            explain: 'parce qu’il adore la cuisine.',
            explainZh: '表原因用 parce qu’（省音）。'
          },
          {
            id: 'dcj3_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Il est clair ___ Bette aime Tex. (that)',
            promptZh: 'Tex 原题 #8：很明显 Bette 喜欢 Tex：',
            answers: ['que'],
            hint: 'Il est clair que + indicative.',
            audio: 'Il est clair que Bette aime Tex.',
            explain: 'Il est clair que (certainty = indicative!).',
            explainZh: '客观陈述肯定事实，接 que + 直陈式。'
          },
          {
            id: 'dcj3_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tex : Tammy est gentille ___ Bette est séduisante. (whereas)',
            promptZh: 'Tex 原题 #9：Tammy 性格温柔，而（对比）Bette 则魅力四射：',
            answers: ['tandis que'],
            hint: 'Contrasting Tammy and Bette → tandis que.',
            audio: 'Tammy est gentille tandis que Bette est séduisante.',
            explain: 'tandis que contrasts two traits.',
            explainZh: '对比两个人截然不同的特质，填 tandis que。'
          },
          {
            id: 'dcj3_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: ___ Tex sort avec Tammy, il fume de moins en moins. (Since — time)',
            promptZh: 'Tex 原题 #10：自从 Tex 和 Tammy 交往以来，他抽烟越来越少了（时间“自从”）：',
            answers: ['Depuis que', 'depuis que'],
            hint: 'Time progression since starting to date → Depuis que.',
            audio: 'Depuis que Tex sort avec Tammy, il fume de moins en moins.',
            explain: 'Depuis que marks the starting point of an ongoing change.',
            explainZh: '表示从过去某节点持续至今的变化，用 Depuis que。'
          },
          {
            id: 'dcj3_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Tammy : ___ Paw-Paw est ton grand-père, tu dois le respecter. (Since — known fact)',
            promptZh: 'Tex 原题 #11：既然 Paw-Paw 是你爷爷（众所周知的事实），你就应该尊重他：',
            answers: ['Puisque', 'puisque'],
            hint: 'Known fact used as premise → Puisque.',
            audio: 'Puisque Paw-Paw est ton grand-père, tu dois le respecter.',
            explain: 'Known fact ("he is your grandpa") → Puisque.',
            explainZh: '根据双方已知事实推导出责任，用 Puisque。'
          },
          {
            id: 'dcj3_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: ___ il fait beau, Tammy fait son jogging. (When / Whenever — capitalize)',
            promptZh: 'Tex 原题 #12：每当天晴的时候，Tammy 都会去慢跑：',
            answers: ['Quand', 'quand', 'Lorsque', 'lorsque'],
            hint: 'Quand / Lorsque + il fait beau.',
            audio: 'Quand il fait beau, Tammy fait son jogging.',
            explain: 'Quand (or Lorsque) introduces the weather condition.',
            explainZh: '表时间条件“当……时”填 Quand（或 Lorsque）。'
          }
        ],
        related: [
          { chapterId: 'ch9_conjunctions', pageId: 'cj_2', label: 'Back to 9.2 Coordinating Conjunctions' },
          { chapterId: 'ch9_conjunctions', pageId: 'cj_4', label: '9.4 Subjunctive Conjunctions & Infinitive Rule' }
        ]
      },

      /* =========================================================
         PAGE 9.4: SUBJUNCTIVE CONJUNCTIONS & INF. RULE (TCF B1-B2)
      ========================================================= */
      {
        id: 'cj_4',
        code: '9.4',
        group: 'Subjunctive & B2',
        shortTitle: 'Subjunctive vs. Infinitive (bien que...)',
        title: 'Conjunctions Taking Subjunctive (bien que, avant que, pour que...) vs. Same-Subject Infinitive',
        titleZh: 'TCF B1–B2 核心：触发虚拟式的连词（bien que/avant que/pour que）与同主语不定式法则',
        estMin: 4,
        summary: 'Master the #1 B2 syntax discriminator tested on TCF Reading & Writing: (1) Conjunctions REQUIRING the Subjunctive (when subjects differ!): bien que / quoique ("although"), avant que ("before"), pour que / afin que ("so that"), sans que ("without"), à condition que ("provided that"), jusqu’à ce que ("until"); (2) Conjunctions staying in Indicative: après que ("after" — strictly indicative in standard grammar!), parce que, pendant que, tandis que, depuis que; (3) CRUCIAL SAME-SUBJECT RULE: whenever BOTH clauses have the SAME subject, you MUST drop "que + subjunctive" and use PREPOSITION + INFINITIVE ("avant de partir", "pour réussir", "sans hésiter", "à condition d’étudier")!',
        summaryZh: '法语 B2 考试（TCF 阅读结构与写作）必考分水岭：**带 `que` 接虚拟式** vs **同主语换成不定式**！① **不同主语时必接虚拟式**的六大高频连词：`bien que / quoique`（尽管）、`avant que`（在……之前）、`pour que / afin que`（为了使……）、`sans que`（没有……）、`à condition que`（只要……）、`jusqu’à ce que`（直到……）；② **注意对照**：`après que`（在……之后）在标准法语里**接直陈式**（如 `après qu’il est parti`）；③ **同主语铁律**（极其重要！）：当主从句主语是**同一个人**时，绝对不能说 *pour que je réussisse 或 *avant que je parte，必须换成 **介词 + `de` + 动词原形**：`pour réussir`、`avant de partir`、`sans hésiter`、`à condition d’étudier`！',
        cheatSummary: [
          { label: 'Two Subjects → Subjunctive Conjunctions', rule: 'bien que / quoique (although), avant que (before), pour que / afin que (so that), sans que (without), à condition que (provided that), jusqu’à ce que (until). Note: après que = INDICATIVE (or après + past inf. for same subject)!', ruleZh: '主语不同用 que + 虚拟式：bien que（尽管）、avant que（在…前）、pour que / afin que（为了使）、sans que（无）、à condition que（只要）、jusqu’à ce que（直到）。注意 après que 接直陈式！' },
          { label: 'Same Subject → Swap "-que" for "de / Ø" + Infinitive!', rule: 'avant que → avant de + inf. ("Avant de sortir..."); pour que → pour / afin de + inf. ("Pour réussir..."); sans que → sans + inf. ("Sans faire de bruit"); à condition que → à condition de + inf. EXCEPTION: bien que / quoique keep que + subjunctive even with same subject!', ruleZh: '同主语必换不定式：avant de + 原形、pour / afin de + 原形、sans + 原形、à condition de + 原形（如 Il étudie pour réussir）。只有 bien que 即使主语相同依然保持 bien que + 虚拟式（不能 *bien de）！' }
        ],
        sections: [
          {
            id: 'cj4_subj_table',
            heading: '1. Subjunctive vs. Same-Subject Infinitive Switchboard',
            headingZh: '一、虚拟式连词 vs. 同主语不定式对照全表',
            lead: 'Before choosing "pour que" or "avant que", ALWAYS check the subjects! Are they DIFFERENT (je... tu...)? Keep "que + subjunctive". Are they the SAME person (je... je...)? Switch immediately to the preposition + infinitive column:',
            leadZh: '写句子前先瞄一眼两边主语是不是同一个人——不同才用左侧 `que + 虚拟式`，相同就立刻切换到中间列（唯一例外是 `bien que`，主语相不相同都要用 `bien que + 虚拟式`！）：',
            table: {
              headers: ['Different Subjects (+ Subjunctive)', 'Same Subject (+ Infinitive!)', 'Meaning'],
              rows: [
                { cols: ['pour que · afin que', 'pour · afin de + infinitive', 'so that / in order to'], audio: 'Je t’aide pour que tu réussisses. J’étudie pour réussir.' },
                { cols: ['avant que (optional ne explétif)', 'avant de + infinitive', 'before'], audio: 'Pars avant qu’il ne pleuve ! Finis avant de sortir.' },
                { cols: ['sans que', 'sans + infinitive', 'without'], audio: 'Il est entré sans qu’on le voie. Il est parti sans parler.' },
                { cols: ['à condition que', 'à condition de + infinitive', 'provided that'], audio: 'Tu peux venir à condition que tu sois prêt. Travaille à condition d’avoir le temps.' },
                { cols: ['jusqu’à ce que', 'jusqu’à + noun (no same-subj. inf.)', 'until'], audio: 'Attends jusqu’à ce qu’il revienne.' },
                { cols: ['bien que · quoique (+ subj. EVEN same subj.!)', 'malgré + NOUN (never *malgré que!)', 'although / despite'], audio: 'Bien qu’il soit fatigué, il travaille. Malgré sa fatigue, il travaille.' }
              ]
            },
            examples: [
              { fr: 'Je parle lentement pour que vous compreniez. vs. Je travaille beaucoup pour réussir au TCF.', en: 'Diff. subjects (je / vous) → pour que + subj. · Same subject (je / je) → pour + inf.', zh: '主语不同（我→你们）用 pour que + 虚拟式；同主语（我→我）必须用 pour + 原形（绝不说 *pour que je réussisse）！', tag: 'Diff vs. Same Subj.' },
              { fr: 'Bien qu’il soit fatigué, Tex finit son chapitre. (vs. Malgré sa fatigue...)', en: 'bien que ALWAYS takes Subjunctive (even same subject!); malgré ALWAYS takes a NOUN!', zh: '高频 B2 对比：bien que + 句子（虚拟式）；malgré + 名词（永远不能写 *malgré que 或 *malgré de）！', tag: 'bien que vs. malgré' }
            ],
            quickCheck: {
              prompt: 'How do you say "Call me before you leave!" (same person: "you" calls, "you" leaves)?',
              promptZh: '表达“你走之前给我打个电话！”（注意“打电话”和“离开”是同一个人 tu），选哪句？',
              options: [
                'Appelle-moi avant de partir ! (Same subject → avant de + inf.!)',
                'Appelle-moi avant que tu partes !',
                'Appelle-moi avant partir !',
                'Appelle-moi après de partir !'
              ],
              answerIdx: 0,
              explain: 'Same subject ("tu" does both actions) REQUIRES "avant de + infinitive" ("avant de partir"), NOT *avant que tu partes and NOT *avant partir (don’t forget "de"!).',
              explainZh: '主语相同（都是你）必须用 avant de + 原形：Appelle-moi avant de partir !（别漏掉 de，也不要用 *avant que tu partes）。'
            }
          }
        ],
        drills: [
          {
            id: 'dcj4_d1',
            kind: 'fib',
            prompt: 'Subjunctive trigger ("Although"): ___ il pleuve aujourd’hui, je vais me promener. (bien que + elision)',
            promptZh: '尽管（Although）今天下雨，我还是要去散步（bien que 在 il 前需省音，后接虚拟式 pleuve）：',
            answers: ['Bien qu’', "Bien qu'", 'bien qu’', "bien qu'", 'Quoiqu’', "Quoiqu'"],
            hint: 'Bien que + il → Bien qu’il pleuve.',
            audio: 'Bien qu’il pleuve aujourd’hui, je vais me promener.',
            explain: 'bien que / quoique + il elides to Bien qu’ / Quoiqu’ + Subjunctive.',
            explainZh: 'bien que / quoique + il 省音为 Bien qu’（引导让步虚拟式）。'
          },
          {
            id: 'dcj4_d2',
            kind: 'fib',
            prompt: 'Different subjects ("so that"): Le professeur explique lentement ___ tous les étudiants comprennent. (2 words)',
            promptZh: '老师慢条斯理地讲解，**以便（为了使）**所有学生都能听懂（主语不同，后接虚拟式 comprennent）：',
            answers: ['pour que', 'afin que'],
            hint: 'pour que / afin que + subjunctive.',
            audio: 'Le professeur explique lentement pour que tous les étudiants comprennent.',
            explain: 'Different subjects ("le prof" vs. "les étudiants") → pour que / afin que.',
            explainZh: '主从句主语不同且表目的，填 pour que 或 afin que。'
          },
          {
            id: 'dcj4_d3',
            kind: 'fib',
            prompt: 'Same subject ("before leaving"): N’oublie pas de fermer la fenêtre ___ partir ! (preposition + de)',
            promptZh: '走之前别忘了关窗！（主语都是你，因此用“在……之前 + de”配原形 partir）：',
            answers: ['avant de'],
            hint: 'Same subject → avant + de + infinitive!',
            audio: 'N’oublie pas de fermer la fenêtre avant de partir !',
            explain: 'Same subject ALWAYS uses "avant de + infinitive" (NEVER *avant partir without de).',
            explainZh: '同主语在不定式前务必加上 de → avant de partir！'
          },
          {
            id: 'dcj4_d4',
            kind: 'fib',
            prompt: 'Same subject ("without making"): Il est entré dans la salle ___ faire de bruit. (without — 1 word)',
            promptZh: '他一声不响地（没有弄出任何声音）走进了房间（同主语 + 原形 faire）：',
            answers: ['sans'],
            hint: '"sans" alone (NO extra *de before infinitive!).',
            audio: 'Il est entré dans la salle sans faire de bruit.',
            explain: 'sans takes an infinitive directly ("sans faire", NEVER *sans de faire!).',
            explainZh: '注意对比：avant de 需要 de，但 sans 后面直接加不定式（sans faire，不能加 *de）！'
          },
          {
            id: 'dcj4_d5',
            kind: 'fib',
            prompt: 'Same subject ("to get"): Elle apprend le français ___ obtenir la résidence permanente au Canada. (in order to — 1 word or 2)',
            promptZh: '她学法语是**为了**拿到加拿大永居（前后主语都是她，用目的介词 + 原形 obtenir）：',
            answers: ['pour', 'afin de', "afin d'"],
            hint: 'Same subject before infinitive → pour (or afin de). Wait: before vowel obtenir, afin d’!',
            audio: 'Elle apprend le français pour obtenir la résidence permanente.',
            explain: 'Same subject → "pour + infinitive" ("pour obtenir").',
            explainZh: '同主语目的状语：pour obtenir（若用 afin de 需省音为 afin d’）。'
          },
          {
            id: 'dcj4_d6',
            kind: 'choice',
            prompt: 'Why is "*Malgré qu’il soit fatigué, il continue" flagged in formal TCF grammar tests?',
            promptZh: '为什么 TCF 标准语法纠错中不建议写 “*Malgré qu’il soit fatigué, il continue”？',
            options: [
              '"malgré" MUST be followed by a NOUN ("Malgré sa fatigue"), whereas a clause requires "Bien qu’il soit fatigué".',
              'malgré takes an infinitive.',
              'bien que can only take a noun.',
              'fatigue should be plural.'
            ],
            answerIdx: 0,
            audio: 'Malgré sa fatigue, il continue. Bien qu’il soit fatigué, il continue.',
            explain: 'Golden B2 rule: malgré + NOUN ("malgré la pluie") vs. bien que / quoique + SUBJUNCTIVE CLAUSE ("bien qu’il pleuve")!',
            explainZh: '法语写作黄金铁律：malgré + 名词（Malgré sa fatigue）；bien que / quoique + 完整从句用虚拟式（Bien qu’il soit fatigué）！'
          },
          {
            id: 'dcj4_d7',
            kind: 'fib',
            prompt: 'Different subjects ("until"): Restez ici ___ votre tour arrive ! (jusqu’à ce que — watch elision before votre? No: your turn! Wait: "votre" starts with consonant!)',
            promptZh: '请留在这里**直到**轮到您（填写表“直到……”的虚拟式复合连词，4 个词）：',
            answers: ['jusqu’à ce que', "jusqu'à ce que"],
            hint: 'jusqu’à ce que + subjunctive.',
            audio: 'Restez ici jusqu’à ce que votre tour arrive !',
            explain: 'jusqu’à ce que triggers the subjunctive when awaiting a future/uncertain point.',
            explainZh: '“直到……为止”触发虚拟式：jusqu’à ce que。'
          },
          {
            id: 'dcj4_d8',
            kind: 'fib',
            prompt: 'Provided that ("à condition que" vs "à condition de"): Vous pouvez sortir ___ vous finissiez vos devoirs. (different/same with que + subj.)',
            promptZh: '你们可以出去，**只要**你们做完作业（后接虚拟式 finissiez）：',
            answers: ['à condition que'],
            hint: 'à condition que + subjunctive.',
            audio: 'Vous pouvez sortir à condition que vous finissiez vos devoirs.',
            explain: 'à condition que + Subjunctive ("provided that"). If using infinitive: "à condition de finir".',
            explainZh: '后接主语和虚拟式用 à condition que（同主语也可改成 à condition de finir）。'
          },
          {
            id: 'dcj4_d9',
            kind: 'choice',
            prompt: 'Which mood follows "après que" in standard academic French (contrasting with "avant que")?',
            promptZh: '与要求接虚拟式的 avant que 相反，表示已经发生事实的 après que（在……之后）在标准规范法语里应该接？',
            options: [
              'The INDICATIVE (e.g., "après qu’il est parti" — because the action already happened)',
              'Always the Subjunctive',
              'Always an Imperative',
              'Never takes a verb'
            ],
            answerIdx: 0,
            audio: 'Après qu’il est parti, nous avons rangé la salle.',
            explain: 'Standard prescriptive grammar uses INDICATIVE after "après que" (since the event is factual/completed) vs. Subjunctive after "avant que"!',
            explainZh: '考试标准语法中，avant que（还没发生）用虚拟式，而 après que（已经发生的事实）用**直陈式**（如 après qu’il est parti），同主语则用 après + 过去不定式（après être parti）！'
          },
          {
            id: 'dcj4_d10',
            kind: 'choice',
            prompt: 'Check the sentence using "sans que": "He left without anyone noticing him" (sans que + subjunctive):',
            promptZh: '主语不同（他离开，别人没察觉），表达“他悄悄走了，没让任何人发现”，选哪一句？',
            options: [
              'Il est parti sans que personne ne le remarque.',
              'Il est parti sans que personne le remarquait.',
              'Il est parti sans personne le remarquer.',
              'Il est parti sans de personne remarquer.'
            ],
            answerIdx: 0,
            audio: 'Il est parti sans que personne ne le remarque.',
            explain: 'sans que triggers the subjunctive ("remarque") — and notice "sans" ALREADY carries negative force, so no *pas*!',
            explainZh: '主语不同用 sans que + 虚拟式（注意 personne 前常带赘词 ne，且绝不加 pas！）。'
          },
          {
            id: 'dcj4_d11',
            kind: 'fib',
            prompt: 'Exception check: "Although I am tired, I am going out." (SAME subject "je"!) → ___ je sois fatigué, je sors.',
            promptZh: '例外提醒：即使主从句都是“我（je）”同一个主语，“尽管我很累”依然不能改不定式，必须照用“尽管（句首大写）”：',
            answers: ['Bien que', 'bien que', 'Quoique', 'quoique'],
            hint: 'Bien que keeps que + subjunctive even when subjects are identical!',
            audio: 'Bien que je sois fatigué, je sors.',
            explain: 'Unlike avant que/pour que/sans que, "bien que" / "quoique" NEVER convert to an infinitive form — always use Subjunctive!',
            explainZh: '记住唯一不转不定式的例外：bien que / quoique 哪怕前后都是同主语，照样接虚拟式！'
          },
          {
            id: 'dcj4_d12',
            kind: 'fib',
            prompt: 'Infinitive swap: Rewrite "Tu dois travailler afin que tu obtiennes le CLB 7" (same subject!) → Tu dois travailler ___ obtenir le CLB 7.',
            promptZh: '纠错改写：两个主语都是 tu，把 “*afin que tu obtiennes” 改为正确的同主语不定式形式（填入介词短语，注意省音与否）：',
            answers: ['pour', 'afin d’', "afin d'"],
            hint: 'before vowel "obtenir": pour obtenir OR afin d’obtenir!',
            audio: 'Tu dois travailler pour obtenir le CLB 7.',
            explain: 'Same subject → "pour obtenir" or "afin d’obtenir"!',
            explainZh: '同主语改写为 pour obtenir 或 afin d’obtenir！'
          }
        ],
        related: [
          { chapterId: 'ch9_conjunctions', pageId: 'cj_3', label: 'Back to 9.3 Subordinating Conjunctions' },
          { chapterId: 'ch9_conjunctions', pageId: 'cj_5', label: '9.5 TCF B2 Essay/Speaking Connectors & Review' }
        ]
      },

      /* =========================================================
         PAGE 9.5: TCF B2 LOGICAL CONNECTORS & CH 9 SYNTHESIS
      ========================================================= */
      {
        id: 'cj_5',
        code: '9.5',
        group: 'Subjunctive & B2',
        shortTitle: 'TCF B2 Connectors & Ch 9 Review',
        title: 'TCF B2 Logical Connectors: Concession, Cause, Consequence & Prepositions vs. Conjunctions',
        titleZh: 'TCF B2 写作与口语加分连接词全解 + 第九章综合实战',
        estMin: 4,
        summary: 'Upgrade basic A1 connectors ("mais, et, donc, parce que") to CLB 7 / B2 discourse markers for TCF Expression Écrite & Orale: (1) CONCESSION / CONTRAST: "cependant, pourtant, néanmoins, toutefois" ("however/nevertheless"), "en revanche / par contre" ("on the other hand"); (2) CAUSE: "en effet" ("indeed"), "à cause de + noun" (negative cause) vs. "grâce à + noun" (positive cause) vs. "en raison de + noun" (formal); (3) CONSEQUENCE: "c’est pourquoi", "par conséquent", "ainsi"; (4) STRUCTURAL GOLDEN RULE: NEVER follow a preposition (malgré, grâce à, à cause de, en raison de, pendant) with a conjugated verb — use a NOUN, whereas conjunctions (bien que, parce que, pendant que) take a CLAUSE!',
        summaryZh: '把低分段干巴巴的 `mais / et / donc / parce que` 升级为 **TCF 写作（EE）和口语（EO）稳拿 B2/CLB 7 的逻辑衔接词库**：① **让步/转折**：`cependant / pourtant / néanmoins`（然而/尽管如此）、`en revanche`（相比之下/反之，比 *par contre* 更书面优雅）；② **解释/因果**：`en effet`（确实，解释上一句）、`grâce à + 名词`（多亏了，正面原因）vs `à cause de + 名词`（由于，负面原因）；③ **结果**：`c’est pourquoi`（这就是为什么）、`par conséquent`（因此）；④ **核心语法红线**：区分**介词短语（+ 名词）**与**连词（+ 从句）**！',
        cheatSummary: [
          { label: 'Preposition (+ Noun) vs. Conjunction (+ Clause)', rule: 'PREPOSITIONS (+ NOUN ONLY): malgré, grâce à, à cause de, en raison de, pendant ("malgré la pluie", "pendant le film"). CONJUNCTIONS (+ VERB CLAUSE): bien que + subj., parce que + ind., pendant que + ind.', ruleZh: '介词与连词红线对比：malgré / grâce à / à cause de / en raison de / pendant 后面只加名词；bien que / parce que / pendant que 后面必须接主谓从句！' },
          { label: 'CLB 7 Connector Upgrade Kit', rule: 'mais → cependant / toutefois / néanmoins / en revanche ("on the other hand"). donc → par conséquent / c’est pourquoi / ainsi. parce que → en effet ("indeed — explains previous sentence!").', ruleZh: '高分升级替换：mais → cependant / néanmoins / en revanche；donc → par conséquent / c’est pourquoi；展开解释上一句用 En effet, ...！' }
        ],
        sections: [
          {
            id: 'cj5_b2_map',
            heading: '1. B2 Connector Map for TCF Writing (EE) & Speaking (EO)',
            headingZh: '一、TCF 写作与口语 B2 衔接词升级速查表',
            lead: 'Notice the exact grammar difference between "à cause de / grâce à" (always followed by a noun/pronoun) and "en effet" (which introduces an independent sentence explaining/confirming the previous claim):',
            leadZh: '背下这张“A1 词汇 → B2 高分升级表”，并在写作中确保**正负原因区分（grâce à 正 vs à cause de 负）**以及“名/句”界限不出错：',
            table: {
              headers: ['Logic Function', 'A1/A2 Basic', 'B2 Upgraded Connectors', 'Follows With... / Example'],
              rows: [
                { cols: ['Contrast / Concession', 'mais', 'cependant · pourtant · toutefois · néanmoins', 'Full sentence ("Cependant, il faut noter que...")'], audio: 'Cependant, il faut noter que la situation évolue.' },
                { cols: ['Two-Side Balance', 'mais (autrement)', 'en revanche · d’un côté... de l’autre...', '"En revanche, les coûts augmentent."'], audio: 'En revanche, le loyer reste élevé.' },
                { cols: ['Explanation / Proof', 'parce que', 'en effet ("indeed") · étant donné que + ind.', '"En effet, cette mesure facilite l’accès..."'], audio: 'En effet, cette mesure facilite l’intégration.' },
                { cols: ['Cause (+ Noun!)', '—', 'grâce à (positive) · à cause de (negative) · en raison de', 'NOUN only! ("grâce au français", "à cause du bruit")'], audio: 'Grâce au français, j’ai trouvé un emploi.' },
                { cols: ['Consequence', 'donc', 'c’est pourquoi · par conséquent · ainsi', 'Full sentence ("C’est pourquoi je propose...")'], audio: 'C’est pourquoi il convient d’agir vite.' },
                { cols: ['Enumeration / Sum-up', 'et / enfin', 'tout d’abord · ensuite · de plus · en conclusion', 'Organizes EE Task 3 & EO Task 3 cleanly'], audio: 'Tout d’abord, j’aimerais souligner un point essentiel.' }
              ]
            },
            examples: [
              { fr: 'Grâce à son travail, elle a réussi. vs. À cause de la neige, le train a du retard.', en: 'grâce à = positive cause ("thanks to") · à cause de = negative/neutral blame ("because of")', zh: '正向好结果用 grâce à（多亏了）；坏结果/故障用 à cause de（由于……的缘故）！', tag: 'grâce à vs. à cause de' },
              { fr: 'Le télétravail est très utile. En effet, il permet d’économiser du temps de transport.', en: 'en effet = "indeed" (starts a new sentence confirming & explaining the claim!)', zh: 'En effet（确实/事实上）绝不是“实际上转折（actually）”，而是顺承证明上一句话的理由！', tag: 'False Friend: en effet' },
              { fr: 'Pendant le film (noun) vs. Pendant que nous regardions le film (clause).', en: 'pendant + noun · pendant que + subject + verb', zh: '同理：pendant + 名词；pendant que + 句子；malgré + 名词；bien que + 从句（虚拟式）。', tag: 'Prep vs. Conj.' }
            ],
            quickCheck: {
              prompt: 'Spot the common TCF false-friend trap! What does "En effet" mean in French?',
              promptZh: '高分防坑：法语衔接词 “En effet,” 放在句首到底是什么意思？',
              options: [
                '"Indeed / That is true" — it CONFIRMS and explains the previous sentence.',
                '"However / On the contrary" — it opposes the previous sentence.',
                '"Actually / In fact, no" — like English "in fact" when contradicting.',
                '"Finally" — it ends an essay.'
              ],
              answerIdx: 0,
              explain: 'NEVER use "en effet" to mean "but/however"! En effet ALWAYS supports and proves the statement right before it (if contrasting, use "en fait" or "cependant")!',
              explainZh: '千万别把 En effet 当转折用！En effet 专门用来顺承印证前一句观点（“确实如此，因为……”）；要表达纠正/转折才用 en fait 或 cependant！'
            }
          }
        ],
        drills: [
          {
            id: 'dcj5_d1',
            kind: 'fib',
            prompt: 'Positive cause (+ noun): ___ ton aide précieuse, j’ai réussi mon examen ! (Thanks to — 2 words, capitalize)',
            promptZh: '正面原因（+ 名词）：“多亏了（Thanks to）”你的宝贵帮助，我通过了考试！（句首大写）：',
            answers: ['Grâce à', 'grâce à'],
            hint: 'Positive cause + noun = Grâce à.',
            audio: 'Grâce à ton aide précieuse, j’ai réussi mon examen !',
            explain: 'grâce à + noun introduces a positive cause ("thanks to").',
            explainZh: '好结果固定搭配 grâce à（不能用 *à cause de 表赞扬）。'
          },
          {
            id: 'dcj5_d2',
            kind: 'fib',
            prompt: 'Negative cause (+ noun): Le vol a été annulé ___ mauvais temps. (because of + le → contraction! — 3 words)',
            promptZh: '负面原因（+ 名词）：“由于（because of + le）”糟糕的天气，航班取消了（注意 à cause de + le 的缩合！）：',
            answers: ['à cause du'],
            hint: 'à cause de + le mauvais temps → à cause du!',
            audio: 'Le vol a été annulé à cause du mauvais temps.',
            explain: 'à cause de + le contracts to à cause du.',
            explainZh: '负面原因用 à cause de，遇到阳性 le 缩合成 à cause du。'
          },
          {
            id: 'dcj5_d3',
            kind: 'fib',
            prompt: 'Prep vs. Conj. 1: Il s’est endormi ___ la conférence. (during + NOUN — 1 word)',
            promptZh: '区分介词/连词：“在讲座（名词 la conférence）期间”，他睡着了（填入 1 个词）：',
            answers: ['pendant', 'durant'],
            hint: 'Followed by a NOUN (not a verb clause) → pendant (no que!).',
            audio: 'Il s’est endormi pendant la conférence.',
            explain: 'Noun follows → preposition "pendant" (NOT *pendant que!).',
            explainZh: '后面是名词 la conférence 而非句子，用介词 pendant（不加 que）！'
          },
          {
            id: 'dcj5_d4',
            kind: 'fib',
            prompt: 'Prep vs. Conj. 2 ("Despite" + NOUN): ___ la forte pluie, nous sommes sortis.',
            promptZh: '介词 + 名词：“尽管下着大雨（名词 la forte pluie）”，我们还是出门了（1 个词，句首大写）：',
            answers: ['Malgré', 'malgré'],
            hint: 'Followed by NOUN "la forte pluie" → Malgré.',
            audio: 'Malgré la forte pluie, nous sommes sortis.',
            explain: 'Followed by a noun → Malgré (never *Bien que la pluie!).',
            explainZh: '名词短语前只能用介词 Malgré（注意：malgré 后面不加 de！）。'
          },
          {
            id: 'dcj5_d5',
            kind: 'fib',
            prompt: 'TCF B2 Contrast ("On the other hand"): Le métro est rapide ; ___, il est très cher aux heures de pointe. (2 words)',
            promptZh: 'B2 写作加分对比连接词（“另一方面 / 相比之下”，比 par contre 更书面正式，2 词）：',
            answers: ['en revanche'],
            hint: 'en + r...',
            audio: 'Le métro est rapide ; en revanche, il est bondé aux heures de pointe.',
            explain: '"en revanche" is the preferred B2 written/formal connector for "on the other hand".',
            explainZh: '写议论文时用 en revanche 替代较口语的 par contre，稳妥拿高分！'
          },
          {
            id: 'dcj5_d6',
            kind: 'fib',
            prompt: 'TCF B2 Consequence ("Therefore / As a result"): Les loyers ont augmenté ; ___, beaucoup d’étudiants cherchent des colocations. (2 words)',
            promptZh: 'B2 高分结果连词（“因此 / 结果”，相当于正式版 donc，2 个词）：',
            answers: ['par conséquent', "c'est pourquoi", 'c’est pourquoi'],
            hint: 'par conséquent OR c’est pourquoi.',
            audio: 'Les loyers ont augmenté ; par conséquent, beaucoup d’étudiants partagent un appartement.',
            explain: '"par conséquent" or "c’est pourquoi" smoothly links cause to consequence.',
            explainZh: 'par conséquent 或 c’est pourquoi 均是议论文标准高分衔接词。'
          },
          {
            id: 'dcj5_d7',
            kind: 'choice',
            prompt: 'Ch 9 Synthesis 1 (or vs. ou): "Nous devons agir maintenant, ___ il sera trop tard." Which fits?',
            promptZh: '综合题 1：“我们必须现在行动，**否则（或者不然）**就太迟了。”应选哪一个词？',
            options: [
              'ou (meaning "or / otherwise" — or "sinon")',
              'or',
              'car',
              'tandis que'
            ],
            answerIdx: 0,
            audio: 'Nous devons agir maintenant, ou il sera trop tard.',
            explain: '"or (else) / otherwise" = ou (or sinon). Remember "or" means "however/now", NOT "otherwise"!',
            explainZh: '“或者/否则”是 ou（或 sinon），而不是书面逻辑转折词 or！'
          },
          {
            id: 'dcj5_d8',
            kind: 'choice',
            prompt: 'Ch 9 Synthesis 2 (Same-subject rule): Spot the ONLY grammatical sentence:',
            promptZh: '综合题 2（同主语判断）：下面哪一句完全符合法语主从与不定式规则？',
            options: [
              'Avant de commencer l’examen, lisez bien les consignes.',
              'Avant que vous commenciez à lire, faites-le avant commencer.',
              'Bien de travailler dur, il reste calme.',
              'Il part sans de dire au revoir.'
            ],
            answerIdx: 0,
            audio: 'Avant de commencer l’examen, lisez bien les consignes.',
            explain: '(1) Same subject before infinitive → avant de commencer! (2) *avant commencer misses de; *bien de is invalid; *sans de adds an invalid de.',
            explainZh: 'avant de + 原形正确！注意 *avant commencer 缺 de、*sans de 多了 de、*bien de 根本不存在！'
          },
          {
            id: 'dcj5_d9',
            kind: 'fib',
            prompt: 'Ch 9 Synthesis 3 (Confirmation): La ville devrait créer plus de pistes cyclables. ___, cela réduirait la pollution. ("Indeed" — 2 words, capitalize)',
            promptZh: '综合题 3：印证前文观点（“的确 / 事实上”，解释上一句为什么对，2 词大写）：',
            answers: ['En effet', 'en effet'],
            hint: 'En effet confirms the preceding claim.',
            audio: 'La ville devrait créer plus de pistes cyclables. En effet, cela réduirait la pollution.',
            explain: 'En effet confirms and illustrates why the previous statement is true.',
            explainZh: '用 En effet 引出支持前一句观点的论据，写作结构极清晰。'
          },
          {
            id: 'dcj5_d10',
            kind: 'choice',
            prompt: 'Ch 9 Synthesis 4 (puisque vs. depuis que): "___ nous sommes tous d’accord, passons au vote !"',
            promptZh: '综合题 4：“既然大家都同意，我们就开始投票吧！”选哪一项？',
            options: [
              'Puisque (known premise)',
              'Depuis que (time duration)',
              'Pendant que',
              'Bien que'
            ],
            answerIdx: 0,
            audio: 'Puisque nous sommes tous d’accord, passons au vote !',
            explain: '"Since we all agree" is a known logical premise → Puisque!',
            explainZh: '已知前提作原因用 Puisque；时间“自从”才用 Depuis que。'
          },
          {
            id: 'dcj5_d11',
            kind: 'fib',
            prompt: 'Ch 9 Synthesis 5 (donc / cependant): Il faisait très froid ; ___, tous les coureurs ont terminé la course. ("however / nevertheless" — 1 formal word)',
            promptZh: '综合题 5：天气严寒；**然而（尽管如此）**，所有选手都跑完了全程（1 个 B2 转折副词/连词）：',
            answers: ['cependant', 'pourtant', 'néanmoins', 'toutefois'],
            hint: 'cependant / pourtant / néanmoins / toutefois.',
            audio: 'Il faisait très froid ; cependant, tous les coureurs ont terminé la course.',
            explain: 'cependant, pourtant, néanmoins, or toutefois cleanly mark B2 concession between sentences.',
            explainZh: 'cependant / pourtant / néanmoins / toutefois 均为地道 B2 句间转折词。'
          },
          {
            id: 'dcj5_d12',
            kind: 'choice',
            prompt: 'Ch 9 Synthesis 6 (quand + Future): Complete "When she arrives in Quebec, she will call us":',
            promptZh: '综合题 6：“当她抵达魁北克时，她会给我们打电话。”选出时态正确的一句：',
            options: [
              'Lorsqu’elle arrivera au Québec, elle nous téléphonera.',
              'Lorsqu’elle arrive au Québec, elle nous téléphonera.',
              'Pendant qu’elle arrive au Québec, elle téléphonera.',
              'Depuis qu’elle arrivera au Québec, elle téléphonera.'
            ],
            answerIdx: 0,
            audio: 'Lorsqu’elle arrivera au Québec, elle nous téléphonera.',
            explain: 'After quand / lorsque talking about the future, use Futur Simple (arrivera), matching main clause téléphonera!',
            explainZh: 'quand / lorsque 从句指将来动作时必须跟主句一样用简单将来时：Lorsqu’elle arrivera…！'
          }
        ],
        related: [
          { chapterId: 'ch9_conjunctions', pageId: 'cj_4', label: 'Back to 9.4 Subjunctive Conjunctions' },
          { chapterId: 'ch6_prepositions', pageId: 'pr_1', label: 'Compare Ch 7 Prepositions' }
        ]
      }
    ]
  });
})();
