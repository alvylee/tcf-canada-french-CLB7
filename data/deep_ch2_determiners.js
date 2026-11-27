(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch2_determiners',
    code: 'Ch 2',
    level: 'A1',
    category: 'determiners',
    icon: '🏷️',
    title: 'Determiners & Articles (Les Déterminants)',
    titleZh: '第二章 · 限定词与冠词完全掌握',
    subtitle: 'Tex-style slow-paced deep mastery: 14 bite-sized pages covering definite, indefinite, partitive, possessive, demonstrative, quantities, tout & indefinites — with 20 cartoons & 150+ drills.',
    subtitleZh: '对标 Tex 深度拆分为 14 个轻松小页：涵盖定冠词、不定冠词、部分冠词、身体部位用法、物主/指示限定词、数量表达、tout 与不定限定词，配 20 张原版卡通与 150+ 单点专练。',
    pages: [
      /* =========================================================
         PAGE 2.1: INTRO TO DETERMINERS — THE 5 FAMILIES
      ========================================================= */
      {
        id: 'det_2_1',
        code: '2.1',
        group: 'Intro to Determiners',
        shortTitle: 'What Is a Determiner?',
        title: 'What Is a Determiner? The 5 Core Families',
        titleZh: '什么是限定词？名词前面永远只能带一个的“小标签”',
        estMin: 3,
        summary: 'Understand the golden rule of determiners (one per noun, placed in front, agrees in gender & number) and preview all three French article families plus demonstratives and possessives.',
        summaryZh: '从零认识限定词的三大铁律（永远在名词前、一个名词只带一个、性数必须一致），并一次认识法语三类冠词及指示/物主限定词。',
        cheatSummary: [
          { label: 'Two Golden Rules', rule: 'A determiner ALWAYS goes BEFORE the noun, agrees in gender (m./f.) and number (sg./pl.), and there is NEVER more than one determiner per noun.', ruleZh: '限定词永远放在名词前面、必须与名词性数一致，而且一个名词前面不能同时叠两个限定词（比如不能说 *mon le livre*）。' },
          { label: '5 Determiner Families', rule: 'Definite (le, la, l’, les = the) · Indefinite (un, une, des = a/some) · Partitive (du, de la, de l’ = some mass) · Demonstrative (ce, cet, cette, ces = this/that) · Possessive (mon, ma, mes... = my/your/his/her...).', ruleZh: '五大核心家族：定冠词（特指 the）、不定冠词（泛指可数 a/some）、部分冠词（不可数 some）、指示限定词（这/那）、物主限定词（我的/你的…）。' }
        ],
        sections: [
          {
            id: 'det_def',
            heading: '1. What Does a Determiner Do?',
            headingZh: '一、限定词的三大核心原则',
            lead: 'A determiner is a small word placed directly BEFORE a noun to clarify whether that noun is specific, unspecific, measured, pointed at, or owned by someone. Remember two non-negotiable French rules: (1) Determiners always match the noun’s gender and number; (2) NEVER stack two determiners before the same noun!',
            leadZh: '限定词（Determiner）是站在名词前面的“小助手”，用来说明这个名词是特指的、泛指的、定量的、指认的还是属于谁的。记住两条铁律：① 必须随名词变阴阳性与单复数；② 绝对不能在一个名词前连放两个限定词。',
            examples: [
              { fr: 'Le serveur donne la carte des vins à Tex.', en: 'The waiter gives the wine list to Tex. (Definite: specific)', zh: '服务员把酒水单递给 Tex。（定冠词：特指“那份酒单”）', tag: 'Definite' },
              { fr: 'Tex choisit un vin.', en: 'Tex chooses a wine. (Indefinite: one countable item)', zh: 'Tex 选了一款酒。（不定冠词：可数的一瓶/一款）', tag: 'Indefinite' },
              { fr: 'Tex boit du vin.', en: 'Tex drinks (some) wine. (Partitive: uncountable mass)', zh: 'Tex 在喝（一点）葡萄酒。（部分冠词：不可数物质）', tag: 'Partitive' }
            ]
          },
          {
            id: 'det_5_families',
            heading: '2. Demonstratives & Possessives (Pointing & Owning)',
            headingZh: '二、指示限定词（这个/那个）与物主限定词（我的/他的）',
            lead: 'Beyond the three article types (definite, indefinite, partitive), French uses demonstrative determiners to point out something in sight, and possessive determiners to mark ownership.',
            leadZh: '除了三大冠词家族，最常用的限定词还有两大家族：指着看的“指示限定词”和说明归属的“物主限定词”。注意它们都同样要替换掉 le/la/un/une！',
            cartoon: {
              src: './assets/tex_cartoons/det1_bassin.gif',
              alt: 'Ce bassin est Barton Springs',
              caption: 'Ce bassin (m.) est Barton Springs. Cette piscine (f.) s’appelle Deep Eddy.',
              captionZh: '这个泳池（阳性）是 Barton Springs，那个泳池（阴性）叫 Deep Eddy。'
            },
            examples: [
              { fr: 'Tex explique : Ce bassin est Barton Springs. Cette piscine s’appelle Deep Eddy.', en: 'Tex explains: This pool is Barton Springs. This swimming pool is called Deep Eddy.', zh: 'Tex 解释：这个天然泳池是 Barton Springs，那个游泳池叫 Deep Eddy。', tag: 'Demonstrative' },
              { fr: 'Tex présente sa famille : Voici mon frère Trey, ma sœur Rita avec ses enfants et leur chien Fido. Notre famille est formidable.', en: 'Tex introduces his family: Here is my brother Trey, my sister Rita with her children and their dog Fido. Our family is great.', zh: 'Tex 介绍家人：这是我哥哥 Trey、我姐姐 Rita 和她的孩子们，还有他们的狗 Fido。我们家棒极了。', tag: 'Possessive' }
            ],
            quickCheck: {
              prompt: 'Look closely at how Tex changes determiners for the exact same word "vin": "un vin" vs. "du vin". What is the difference?',
              promptZh: '对比同一页里同一个词 "vin" 的两种搭配："un vin" vs. "du vin"，区别是什么？',
              options: [
                '"un vin" picks one specific bottle/kind (countable); "du vin" means an undefined amount of wine (mass).',
                '"un vin" is feminine and "du vin" is masculine.',
                '"du vin" is plural.',
                'They mean completely different words.'
              ],
              answerIdx: 0,
              explain: 'Spot on! Choosing the determiner changes how you frame the noun: definite ("le vin"), countable item ("un vin"), or uncountable mass ("du vin").',
              explainZh: '很准！限定词不同，视角不同："un vin" 是“点一款/一瓶酒”（可数），"du vin" 是“喝一些酒水”（不可数液体）。'
            }
          }
        ],
        drills: [
          {
            id: 'd21_d1',
            kind: 'choice',
            prompt: 'Which golden rule is TRUE about French determiners?',
            promptZh: '关于法语限定词，哪条规则是完全正确的？',
            options: [
              'Only ONE determiner can go before a noun, and it agrees in gender & number.',
              'You can put both "mon" and "le" in front of a noun ("mon le livre").',
              'Determiners always go AFTER the noun.',
              'Determiners never change for feminine nouns.'
            ],
            answerIdx: 0,
            audio: 'Voici mon frère.',
            explain: 'Never stack determiners (no *mon le frère*)! Use ONE determiner before the noun and match its gender and number.',
            explainZh: '绝对不能叠用两个限定词（不能说 *mon le frère*），且必须放在名词前并保持性数一致。'
          },
          {
            id: 'd21_d2',
            kind: 'choice',
            prompt: 'Which family do "le, la, l’, les" belong to?',
            promptZh: '"le, la, l’, les" 属于哪一类限定词？',
            options: ['Definite articles (the — specific)', 'Indefinite articles (a/an/some)', 'Partitive articles (some mass)', 'Possessive determiners'],
            answerIdx: 0,
            audio: 'Le serveur donne la carte.',
            explain: '"le, la, l’, les" are definite articles.',
            explainZh: 'le, la, l’, les 是定冠词（Definite articles）。'
          },
          {
            id: 'd21_d3',
            kind: 'choice',
            prompt: 'Which family do "du, de la, de l’" belong to?',
            promptZh: '"du, de la, de l’"（如 du pain, de l’eau）属于哪一类？',
            options: ['Partitive articles (mass nouns)', 'Definite articles', 'Demonstrative determiners', 'Indefinite plural articles'],
            answerIdx: 0,
            audio: 'Tex boit du vin.',
            explain: '"du, de la, de l’" are partitive articles used with uncountable mass nouns.',
            explainZh: 'du, de la, de l’ 是部分冠词，用于不可数/物质名词。'
          },
          {
            id: 'd21_d4',
            kind: 'choice',
            prompt: 'Which sentence uses a DEMONSTRATIVE determiner ("this/that")?',
            promptZh: '下面哪句话使用了指示限定词（this / that）？',
            options: ['Ce bassin est Barton Springs.', 'Tex boit du vin.', 'Voici mon frère Trey.', 'Le serveur donne la carte.'],
            answerIdx: 0,
            audio: 'Ce bassin est Barton Springs.',
            explain: '"Ce" (m.), "cet" (m.+vowel), "cette" (f.), "ces" (pl.) are demonstrative determiners.',
            explainZh: 'ce / cet / cette / ces 用来指人或物（这个/那个）。'
          },
          {
            id: 'd21_d5',
            kind: 'choice',
            prompt: 'In "Tex présente sa famille", what does "sa" express?',
            promptZh: '在 "Tex présente sa famille." 中，"sa" 表达什么？',
            options: ['Possession ("his" — agreeing with feminine famille)', 'Pointing out ("this")', 'Partitive mass quantity', 'Plurality'],
            answerIdx: 0,
            audio: 'Tex présente sa famille.',
            explain: '"sa" is a possessive determiner agreeing in gender with "la famille" (even though the owner Tex is male!).',
            explainZh: '"sa" 是物主限定词（他的），注意它按后面拥有物 "famille" 的阴性决定用 sa，而不看 Tex 本人是男是女！'
          },
          {
            id: 'd21_d6',
            kind: 'choice',
            prompt: 'Spot the grammatical error in: "*C’est un mon livre."',
            promptZh: '找出 "*C’est un mon livre." 的语法错误：',
            options: [
              'Two determiners ("un" + "mon") are stacked before one noun.',
              '"livre" should be plural.',
              '"mon" should go after "livre".',
              'Nothing is wrong.'
            ],
            answerIdx: 0,
            audio: 'C’est mon livre.',
            explain: 'Never combine two determiners on the same noun! Say either "un livre" OR "mon livre".',
            explainZh: '同一个名词前绝不能放两个限定词（不能同时放 un 和 mon），二选一即可。'
          },
          {
            id: 'd21_d7',
            kind: 'fib',
            prompt: 'Definite article ("the" waiter, masc.): ___ serveur donne la carte des vins.',
            promptZh: '填定冠词（这位服务员，阳性）：',
            answers: ['Le', 'le'],
            hint: 'Masculine singular definite article.',
            audio: 'Le serveur donne la carte des vins.',
            explain: '"serveur" is masculine singular → "Le serveur".',
            explainZh: '阳性单数定冠词："Le serveur"。'
          },
          {
            id: 'd21_d8',
            kind: 'fib',
            prompt: 'Indefinite article ("a" wine, countable masc.): Tex choisit ___ vin.',
            promptZh: '填不定冠词（挑选一款酒，阳性）：',
            answers: ['un'],
            hint: 'Masculine singular indefinite article ("a").',
            audio: 'Tex choisit un vin.',
            explain: '"un vin" = a wine (one countable bottle/selection).',
            explainZh: '"un vin" 表示“一瓶/一款酒”。'
          },
          {
            id: 'd21_d9',
            kind: 'fib',
            prompt: 'Partitive article ("some" wine, mass masc.): Tex boit ___ vin.',
            promptZh: '填部分冠词（喝一些酒水，不可数液体）：',
            answers: ['du'],
            hint: 'Masculine partitive article = "du".',
            audio: 'Tex boit du vin.',
            explain: '"du vin" expresses an unspecified quantity of liquid wine.',
            explainZh: '"du vin" 表示“喝（一些）酒”。'
          },
          {
            id: 'd21_d10',
            kind: 'fib',
            prompt: 'Possessive determiner ("my" brother / "my" sister): Voici ___ frère et ___ sœur.',
            promptZh: '填入两个物主限定词（我的哥哥、我的妹妹）：',
            answers: ['mon / ma'],
            hint: '"frère" is masculine (mon), "sœur" is feminine (ma).',
            audio: 'Voici mon frère et ma sœur.',
            explain: '"mon frère" (m.) and "ma sœur" (f.).',
            explainZh: '哥哥阳性用 mon，妹妹阴性用 ma："mon frère et ma sœur"。'
          }
        ],
        related: [
          { chapterId: 'ch2_determiners', pageId: 'det_2_2', label: '2.2 Definite Articles: Forms & Liaison' },
          { chapterId: 'ch1_nouns', pageId: 'no_1_1', label: '1.1 Count vs. Mass Nouns' }
        ]
      },

      /* =========================================================
         PAGE 2.2: DEFINITE ARTICLES — FORMS, ELISION, LIAISON & GENERAL TRUTHS
      ========================================================= */
      {
        id: 'det_2_2',
        code: '2.2',
        group: 'Definite Articles (le, la, l’, les)',
        shortTitle: 'Definite: Forms, l’ & Truths',
        title: 'Definite Articles (Part 1): Forms, Elision (l’), Liaison & General Truths',
        titleZh: '定冠词（一）：四大形式、省音 l’、强制联诵与泛指真理',
        estMin: 4,
        summary: 'Master le, la, l’, and les—how l’ drops vowels, when les makes a /z/ liaison sound, and why French adds le/la/les to abstract truths like money, love, and health.',
        summaryZh: '掌握定冠词四种形式、元音/哑音 h 前省音规则、les 的 /z/ 联诵，以及为什么法语说“金钱、爱情、健康”也要加定冠词。',
        cheatSummary: [
          { label: '4 Forms', rule: 'le (m.sg.) · la (f.sg.) · l’ (m. or f. before vowel / silent h) · les (m. & f. pl.).', ruleZh: '四种形式：le（阳单）、la（阴单）、l’（元音/哑音h开头不论阴阳单数）、les（所有复数）。' },
          { label: 'Elision & Liaison', rule: 'l’ drops -e/-a (l’escargot, l’université, l’homme). "les" never contracts, and makes a compulsory /z/ sound before vowels/silent h (les_animaux, les_hommes).', ruleZh: '省音与联诵：le/la 变成 l’；les 不缩写，但在元音或哑音 h 前必须把 s 读成 /z/（les_insectes, les_hommes）。' },
          { label: 'Specific vs. General Truths', rule: 'Identifies specific nouns ("la tour de l’Université") AND general/abstract concepts where English has no "the" ("L’argent, l’amour, la santé").', ruleZh: '既特指“那座塔”，也表达“金钱/爱情/健康/动物”等总称泛指真理（此时英语不加 the，但法语必须加 le/la/les！）。' }
        ],
        sections: [
          {
            id: 'def_forms',
            heading: '1. Forms, Elision (l’), and Compulsory Liaison (les + vowel)',
            headingZh: '一、四种形式、省音（l’）与强制联诵（les_）',
            lead: 'Le (m.) and la (f.) BOTH contract to l’ before a vowel or silent h (this is called elision). In contrast, les NEVER drops its vowel—instead, before a vowel or silent h you pronounce the normally silent s as a smooth /z/ link (compulsory liaison)! (Only "aspirate h" words like "le héros" block elision/liaison.)',
            leadZh: '单数 le 和 la 遇到元音或哑音 h 开头词都会缩写成 l’（称为“省音 Elision”）；而复数 les 从不缩写，遇元音或哑音 h 时反而要把原本不读的 -s 连读成轻柔的 /z/ 音（强制联诵 Liaison）！',
            examples: [
              { fr: 'Tex le tatou · Joe-Bob l’écureuil · Bette la chatte · l’Université du Texas', en: 'masculine le (l’) · feminine la (l’)', zh: '阳性 le（元音前 l’）· 阴性 la（元音前 l’）', tag: 'Singular' },
              { fr: 'les insectes · les animaux · les hommes (compulsory /z/ liaison!)', en: 'insects · animals · men (/lezɛ̃sɛkt/, /lezanimo/, /lezɔm/)', zh: '元音与哑音 h 前必须读出 /z/ 联诵！', tag: 'Liaison /z/' },
              { fr: 'les tatous · les fourmis (NO liaison before consonants)', en: 'armadillos · ants (final s stays silent: /le tatu/)', zh: '辅音前绝不联诵，-s 保持静音！', tag: 'No Liaison' }
            ],
            tip: 'Most words starting with h in French have a silent h and trigger elision/liaison: l’homme / les hommes, l’hiver / les hivers, l’hôpital / les hôpitaux.',
            tipZh: '大多数 h 开头法语词都是哑音 h，需要省音和联诵：l’homme, les hommes, l’hiver, les hôpitaux。只有少数“嘘音 h”（如 le héros, la haine）例外。'
          },
          {
            id: 'def_specific',
            heading: '2. Identifying Specific Nouns',
            headingZh: '二、指代具体、特定的事物（同英语 the）',
            lead: 'Just like English "the", use le/la/l’/les for something unique or already identified in context:',
            leadZh: '和英语 the 最像的一类用法：特指双方都知道、或者独一无二的事物。',
            cartoon: {
              src: './assets/tex_cartoons/det2_6.gif',
              alt: 'La Sixième rue',
              caption: 'La Sixième rue, c’est les Champs-Élysées d’Austin !',
              captionZh: '第六街，就是奥斯汀的香榭丽舍大道！'
            },
            examples: [
              { fr: 'Corey : Tu connais la tour de l’Université du Texas ? — Tex : Bien sûr, c’est le symbole de l’Université !', en: 'Do you know the UT Tower? — Of course, it’s the symbol of the University!', zh: '你认识德州大学的钟楼吗？——当然，它是学校的象征！', tag: 'Specific' },
              { fr: 'Corey : Et la Sixième rue ? — Tex : Eh bien, c’est les Champs-Élysées d’Austin !', en: 'What about Sixth Street? — Well, it’s the Champs-Élysées of Austin!', zh: '那第六街呢？——嗨，那就是奥斯汀的“香榭丽舍”！', tag: 'Specific Landmark' }
            ]
          },
          {
            id: 'def_general',
            heading: '3. General Truths & Abstract Concepts (Where English Uses NO Article!)',
            headingZh: '三、总称概念与泛指真理（最易忘：英语零冠词，法语必加！）',
            lead: 'This is a huge English-speaker trap: English says "Money can’t buy happiness" or "Love and health are important" with NO article. French ALWAYS puts a definite article (le, la, l’, les) before general concepts, abstractions, and whole categories!',
            leadZh: '这是初学最容易漏掉冠词的地方！英语里说泛指概念（钱、爱情、健康、人类、全体动物）时不加 the，但法语必须老老实实加上定冠词 le / la / l’ / les：',
            cartoon: {
              src: './assets/tex_cartoons/det2_video.gif',
              alt: 'L’argent ne rend pas l’homme heureux',
              caption: 'L’argent ne rend pas l’homme heureux !',
              captionZh: '金钱并不能使人幸福！（l’argent / l’homme 都必须带定冠词）'
            },
            examples: [
              { fr: 'Tex : L’argent ne rend pas l’homme heureux !', en: 'Money does not make man happy!', zh: '金钱不能令人快乐！', tag: 'General Concept' },
              { fr: 'Tammy : Tu as raison. L’amour et la santé sont plus importants !', en: 'You are right. Love and health are more important!', zh: '你说得对，爱情与健康更重要！', tag: 'Abstract Nouns' },
              { fr: 'Tex : Bien sûr, pour les insectes et les animaux, l’argent n’existe pas ! Mais l’amour est aussi important pour nous que pour les humains.', en: 'For insects and animals, money doesn’t exist! But love is as important for us as for humans.', zh: '当然，对昆虫和动物来说金钱不存在！但爱情对我们和人类一样重要。', tag: 'Whole Classes' }
            ],
            quickCheck: {
              prompt: 'Translate "Health is important." into natural French:',
              promptZh: '把英语泛指概念 "Health is important." 译成地道法语：',
              options: ['La santé est importante.', 'Santé est importante.', 'Une santé est importante.', 'De la santé est importante.'],
              answerIdx: 0,
              explain: 'Abstract concepts and general truths take a definite article in French: "La santé est importante." (literally "The health...").',
              explainZh: '抽象总称概念必须用定冠词，而且 santé（健康）是阴性："La santé est importante."。'
            }
          }
        ],
        drills: [
          {
            id: 'd22_d1',
            kind: 'choice',
            prompt: 'Which pair has COMPULSORY /z/ liaison between the article and noun?',
            promptZh: '下列哪一组名词前“必须读出 /z/ 联诵”？',
            options: ['les animaux & les hommes', 'les tatous & les fourmis', 'la tour & le symbole', 'les chattes & les étudiants (wait: chattes)'],
            answerIdx: 0,
            audio: 'les animaux, les hommes',
            explain: '"les" triggers compulsory /z/ liaison before a vowel ("les_animaux") or silent h ("les_hommes").',
            explainZh: 'les 遇到元音（animaux）或哑音 h（hommes）时，s 必须连读成 /z/。'
          },
          {
            id: 'd22_d2',
            kind: 'choice',
            prompt: 'What happens to "le" or "la" before a noun starting with a vowel or silent h?',
            promptZh: 'le 或 la 遇到元音/哑音 h 开头名词时变成什么？',
            options: ['Both contract to l’ (elision)', 'le stays le, only la becomes l’', 'Both change to les', 'Both drop completely'],
            answerIdx: 0,
            audio: 'l’université, l’homme',
            explain: 'Both masculine "le" and feminine "la" contract to "l’": "l’écureuil" (m.), "l’université" (f.).',
            explainZh: '无论阳性还是阴性，单数在元音/哑音 h 前一律省音写成 l’。'
          },
          {
            id: 'd22_d3',
            kind: 'choice',
            prompt: 'How do you say "Love is important." (general concept)?',
            promptZh: '怎么表达泛指概念“爱是重要的”？',
            options: ['L’amour est important.', 'Amour est important.', 'Du amour est important.', 'Les amours est important.'],
            answerIdx: 0,
            audio: 'L’amour est important.',
            explain: 'General truth / abstract noun → definite article ("L’amour", masc. singular).',
            explainZh: '抽象概念需要定冠词，amour 为阳性单数且元音开头，用 "L’amour"。'
          },
          {
            id: 'd22_d4',
            kind: 'choice',
            prompt: 'In Tex’s sentence "Pour les insectes et ___ animaux, l’argent n’existe pas", what fills the blank?',
            promptZh: '补全泛指整类生物：“对昆虫和动物而言，金钱不存在” →',
            options: ['les', 'un', 'de', 'l’'],
            answerIdx: 0,
            audio: 'Pour les insectes et les animaux, l’argent n’existe pas.',
            explain: 'Whole categories in general statements require "les": "les insectes et les animaux".',
            explainZh: '泛指整体类别（全体动物），用复数定冠词 "les"。'
          },
          {
            id: 'd22_d5',
            kind: 'fib',
            prompt: 'Write the definite article (le / la / l’ / les): ___ écureuil (the squirrel — masc., starts with vowel)',
            promptZh: '填定冠词（le / la / l’ / les）：松鼠（元音开头）',
            answers: ["l'", 'l’'],
            hint: 'Elision before vowel é.',
            audio: 'l’écureuil',
            explain: '"le" elides to "l’" before vowel é: "l’écureuil".',
            explainZh: '元音前省音，填 "l’"。'
          },
          {
            id: 'd22_d6',
            kind: 'fib',
            prompt: 'Write the definite article (le / la / l’ / les): ___ hiver (winter — silent h)',
            promptZh: '填定冠词（le / la / l’ / les）：冬天（哑音 h 开头）',
            answers: ["l'", 'l’'],
            hint: 'Silent h triggers elision.',
            audio: 'l’hiver',
            explain: 'Silent h takes elision: "l’hiver".',
            explainZh: '哑音 h 前同样要省音："l’hiver"。'
          },
          {
            id: 'd22_d7',
            kind: 'fib',
            prompt: 'Write the definite article (general truth): ___ argent ne rend pas l’homme heureux ! (m., vowel)',
            promptZh: '填定冠词（泛指真理，元音开头）：金钱并不能让人幸福。',
            answers: ["L'", "l'", 'L’', 'l’'],
            hint: 'L’ + argent.',
            audio: 'L’argent ne rend pas l’homme heureux !',
            explain: '"L’argent" uses the definite article for the general concept "money".',
            explainZh: '泛指抽象名词前面要用定冠词，省音写成 "L’"（L’argent）。'
          },
          {
            id: 'd22_d8',
            kind: 'fib',
            prompt: 'Fill in the two definite articles: ___ amour et ___ santé sont importants !',
            promptZh: '填入两个定冠词：爱情（阳性元音）与健康（阴性）很重要！',
            answers: ["L' / la", 'L’ / la', "l' / la", 'l’ / la'],
            hint: 'First elides before a-; second is feminine la.',
            audio: 'L’amour et la santé sont importants !',
            explain: '"L’amour" (m., vowel elision) and "la santé" (f.).',
            explainZh: '第一空元音省音 L’，第二空阴性 la。'
          },
          {
            id: 'd22_d9',
            kind: 'fib',
            prompt: 'Plural definite article (with liaison!): Tex porte beaucoup de cadeaux pour ___ hommes et ___ animaux.',
            promptZh: '两空都填复数定冠词：给所有人和所有动物。',
            answers: ['les / les'],
            hint: '"les" for both masculine and feminine plurals.',
            audio: 'les hommes et les animaux',
            explain: 'Plural definite article is always "les" (pronounced with /z/ before "hommes" and "animaux").',
            explainZh: '复数定冠词一律用 les，并且这两处都读 /z/ 联诵！'
          },
          {
            id: 'd22_d10',
            kind: 'fib',
            prompt: 'Specific noun: Tu connais ___ tour de l’Université ? (la tour — feminine)',
            promptZh: '填定冠词：你认识大学的那座钟楼（阴性 tour）吗？',
            answers: ['la'],
            hint: 'Feminine singular definite article.',
            audio: 'Tu connais la tour de l’Université ?',
            explain: '"tour" (tower) is feminine → "la tour".',
            explainZh: 'tower 是阴性名词，特指用 "la tour"。'
          }
        ],
        related: [
          { chapterId: 'ch2_determiners', pageId: 'det_2_3', label: '2.3 Likes, Habits & Tex 12-Q Review' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_4', label: '2.4 Body Parts & Physical Traits' }
        ]
      },

      /* =========================================================
         PAGE 2.3: DEFINITE ARTICLES — LIKES, HABITS, SERIES, NO ARTICLE & TEX REVIEW
      ========================================================= */
      {
        id: 'det_2_3',
        code: '2.3',
        group: 'Definite Articles (le, la, l’, les)',
        shortTitle: 'Definite: Likes, Habits & Review',
        title: 'Definite Articles (Part 2): Likes/Dislikes, Habits, Series, Zero-Article & Tex Review',
        titleZh: '定冠词（二）：喜好动词、每周习惯、列举重复、省略规则与 Tex 12 题总测',
        estMin: 5,
        summary: 'Finish every remaining definite-article rule from Tex: aimer/préférer/détester, habitual routines ("le matin, le lundi, l’été"), repeating articles in lists, when to drop articles (cities, months, one-time days), plus all 12 Tex drills!',
        summaryZh: '补全定冠词其余 4 大实战用法：喜好（aimer/détester 必加定冠词）、习惯性周期、列举逐个重复、城市/月份/单次星期不加冠词，配 Tex 原版对话和 12 道练习。',
        cheatSummary: [
          { label: 'Likes & Dislikes', rule: 'ALWAYS use le/la/l’/les after aimer, adorer, préférer, détester, apprécier (Tex adore les croissants; Tammy n’aime pas le café).', ruleZh: 'aimer / adorer / préférer / détester / apprécier 后面说喜欢/讨厌某类事物，永远加定冠词！' },
          { label: 'Habitual vs. One-Time', rule: 'Habitual = definite article ("Le lundi, Tex fait son jogging" = every Monday; "Le matin", "L’été"). One-time day OR month OR city = NO article ("Lundi, il a rendez-vous"; "en mars", "à Paris").', ruleZh: '规律习惯加定冠词（Le lundi = 每周一，Le matin = 每天早上）；单次日期、月份、城市不加冠词（Lundi = 这周一，mars，à Austin）。' },
          { label: 'Series & Countries', rule: 'Repeat the article on every item in a list ("les assiettes, les couteaux, les verres..."). Continents/countries/regions take articles ("la France, le Texas") — except small islands like Haïti, Israël, Madagascar.', ruleZh: '并列名词必须逐项重复冠词；大洲/国家/省份带冠词，大多数城市和少数岛国（Haïti, Israël, Madagascar）不带。' }
        ],
        sections: [
          {
            id: 'def_likes',
            heading: '1. Expressing Likes & Dislikes (aimer, adorer, préférer, détester)',
            headingZh: '一、表达好恶（aimer / préférer / détester 必须带定冠词）',
            lead: 'With preference verbs (aimer, adorer, préférer, détester, apprécier), French ALWAYS uses a definite article—even though English omits it! Watch out: even in negative sentences like "n’aime pas", you KEEP the definite article ("n’aime pas le café", NOT *pas de café*).',
            leadZh: '表示喜欢、偏爱、讨厌、欣赏某物时，法语动词后面永远带定冠词 le / la / l’ / les！特别注意：就算是否定句“不喜欢咖啡”，也依然保留 le（Tammy n’aime pas le café），不会变成 de！',
            examples: [
              { fr: 'Tex adore les croissants. Joe-Bob préfère les doughnuts.', en: 'Tex loves croissants. Joe-Bob prefers doughnuts.', zh: 'Tex 超爱羊角包；Joe-Bob 更喜欢甜甜圈。', tag: 'Preferences' },
              { fr: 'Tammy n’aime pas le café.', en: 'Tammy does not like coffee. (KEEP "le" even in negative!)', zh: 'Tammy 不喜欢咖啡。（即使否定也保留 le！）', tag: 'Neg + Likes' },
              { fr: 'Édouard apprécie la bonne cuisine française.', en: 'Édouard appreciates good French cuisine.', zh: 'Édouard 很欣赏正宗法国美食。', tag: 'Quality' }
            ],
            quickCheck: {
              prompt: 'How do you say "I don’t like spiders (araignées, f.pl.)."?',
              promptZh: '“我不喜欢蜘蛛（araignées，阴复）。”怎么说？',
              options: ['Je n’aime pas les araignées.', 'Je n’aime pas d’araignées.', 'Je n’aime pas araignées.', 'Je n’aime pas des araignées.'],
              answerIdx: 0,
              explain: 'With preference verbs (aimer, détester, préférer), ALWAYS keep "le / la / l’ / les" even in negative sentences!',
              explainZh: '记住金规：aimer / préférer / détester 遇到否定也永远保持定冠词 les，绝不改成 de！'
            }
          },
          {
            id: 'def_habits_series',
            heading: '2. Habitual Recurrence ("Every...") & Repeating Articles in a Series',
            headingZh: '二、每周/每季固定习惯 + 并列清单逐项重复冠词',
            lead: 'Put a definite article before times of day, days of the week, or seasons to mean "every..." / "on ...s". Also, when listing items in French, repeat the article in front of EVERY item rather than dropping it after the first word!',
            leadZh: '在一天中的时段、星期或季节前面加 le/l’，表达“每天早上 / 每周一 / 每年夏天”。另外列举多个物品时，英语只写一个 the，法语却要每一个词前面都重贴一遍冠词！',
            cartoon: {
              src: './assets/tex_cartoons/det2_matin.gif',
              alt: 'Le matin Tammy va en cours',
              caption: 'Le matin, Tammy va en cours. (Every morning)',
              captionZh: '每天早上，Tammy 都去上课（固定习惯加 le）。'
            },
            examples: [
              { fr: 'Le matin, Tammy va en cours. L’après-midi, elle va à la bibliothèque.', en: 'Every morning, Tammy goes to class. Every afternoon, she goes to the library.', zh: '每天早上 Tammy 去上课，每天下午她去图书馆。', tag: 'Habitual Time' },
              { fr: 'Le lundi, Tex fait son jogging. L’été, il se baigne ; l’hiver, il skie.', en: 'On Mondays (every Monday), Tex jogs. Every summer he swims; every winter he skis.', zh: '每周一 Tex 去慢跑；每年夏天游泳，每年冬天滑雪。', tag: 'Habitual Day/Season' },
              { fr: 'Tammy : Apporte les assiettes, les couteaux, les verres, les serviettes et le vin.', en: 'Bring the plates, knives, glasses, napkins, and wine. (Repeat "les/le" for each!)', zh: '把盘子、刀、杯子、餐巾纸和葡萄酒都拿过来！（每个词都要带冠词！）', tag: 'Series' }
            ]
          },
          {
            id: 'def_no_article',
            heading: '3. When There Is NO Article (Cities, Months, One-Time Days & Islands)',
            headingZh: '三、什么时候反而“不加冠词”？+ Tammy 与 Bette 对话',
            lead: 'Drop the definite article for: (1) almost all cities (à Austin, à Paris), (2) months (janvier, mars), (3) non-habitual single days (Lundi = this Monday), and (4) a few island countries (Haïti, Israël, Madagascar) — whereas continents, countries, regions, and oceans keep their article (l’Afrique, la France, le Texas, la Bourgogne, l’Atlantique).',
            leadZh: '以下四类情况不用冠词：① 城市名（à Austin, Paris）；② 月份（janvier, mars）；③ 只指这一次的某天（Lundi = 这周一）；④ 少数岛国如 Haïti、Israël、Madagascar。但大洲、国家、省份、大洋仍带冠词。',
            examples: [
              { fr: 'Tex habite à Austin, mais il préfère Paris.', en: 'Tex lives in Austin, but he prefers Paris. (No article for cities!)', zh: 'Tex 住在奥斯汀，但他更喜欢巴黎。（城市不带冠词）', tag: 'Cities' },
              { fr: 'Cependant Tex adore mars à Austin.', en: 'Nevertheless Tex adores March in Austin. (No article for months!)', zh: '不过 Tex 超爱奥斯汀的三月。（月份不带冠词）', tag: 'Months' },
              { fr: 'Lundi, il a rendez-vous avec Tammy. (Contrast: Le lundi = every Monday)', en: 'On Monday (this one Monday), he has a date with Tammy.', zh: '这周一他和 Tammy 有约。（对比：Le lundi = 每周一）', tag: '1-Time Day' },
              { fr: 'l’Afrique · la France · le Texas · la Bourgogne · l’Atlantique (EXCEPT: Haïti, Israël, Madagascar)', en: 'Continents, countries, states, oceans keep an article; certain islands drop it.', zh: '大洲/国家/州/大洋加冠词；海地、以色列、马达加斯加等少数岛国省略。', tag: 'Geography' }
            ],
            dialogue: {
              title: 'Dialogue: Tammy et Bette sur la langue française',
              titleZh: '对话：Tammy 聊法语和戴贝雷帽的法国男生',
              lines: [
                { speaker: 'Tammy', fr: 'J’aime beaucoup le français. C’est la langue de Molière et de Hugo, et surtout c’est la langue maternelle de Tex !', en: 'I like French a lot. It is the language of Molière and Hugo, and above all it’s Tex’s mother tongue!', zh: '我非常喜欢法语！这是莫里哀和雨果的语言，更重要的是这是 Tex 的母语！' },
                { speaker: 'Bette', fr: 'Alors comme ça Tammy, tu aimes bien les Français ?', en: 'So Tammy, you really like French people / men?', zh: '哦这么说，Tammy，你很喜欢法国人咯？' },
                { speaker: 'Tammy', fr: 'Oh oui ! Surtout les Français qui portent le béret !', en: 'Oh yes! Especially French men who wear a beret!', zh: '那当然！尤其是戴贝雷帽的法国男生！' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'd23_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12 — Fill the definite article: Tex : J’adore ___ chattes ! (f.pl.)',
            promptZh: 'Tex 第 1 题（好恶动词）：Tex 超爱母猫！（chattes 阴复）',
            options: ['les', 'la', 'des', 'le'],
            answerIdx: 0,
            audio: 'J’adore les chattes !',
            explain: 'With "adorer", use definite article "les" for plural nouns.',
            explainZh: 'adorer 后面用定冠词，复数选 "les"。'
          },
          {
            id: 'd23_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Corey : J’adore ___ odeur des pesticides ! (f.sg., starts with vowel)',
            promptZh: 'Tex 第 2 题：Corey 喜爱杀虫剂的气味（odeur 元音开头）。',
            options: ['l’', 'la', 'le', 'les'],
            answerIdx: 0,
            audio: 'J’adore l’odeur des pesticides !',
            explain: '"odeur" starts with vowel o-, so "la" elides to "l’": "l’odeur".',
            explainZh: '元音开头单数省音为 "l’"。'
          },
          {
            id: 'd23_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Tammy : ___ femmes sont sensibles. (f.pl., general group)',
            promptZh: 'Tex 第 3 题（泛指概念）：女性都很细腻敏感。',
            options: ['Les', 'La', 'Des', 'Le'],
            answerIdx: 0,
            audio: 'Les femmes sont sensibles.',
            explain: 'General categories require plural definite article "Les".',
            explainZh: '泛指整体人群（所有女性），用 "Les"。'
          },
          {
            id: 'd23_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Corey : Je déteste ___ professeur de maths. (m.sg.)',
            promptZh: 'Tex 第 4 题：Corey 讨厌这位数学老师（阳性单数）。',
            options: ['le', 'la', 'l’', 'les'],
            answerIdx: 0,
            audio: 'Je déteste le professeur de maths.',
            explain: '"professeur" is masculine singular → "le professeur".',
            explainZh: '阳性单数用 "le"。'
          },
          {
            id: 'd23_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Definite article: Tammy : ___ salle de classe est romantique ! (salle is f.sg.)',
            promptZh: 'Tex 第 5 题（定冠词）：教室（salle 阴单）好浪漫！',
            answers: ['La', 'la'],
            hint: '"salle" is feminine singular.',
            audio: 'La salle de classe est romantique !',
            explain: '"salle" is feminine singular → "La salle de classe".',
            explainZh: 'salle 是阴性名词，填 "La"。'
          },
          {
            id: 'd23_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Definite article (with elision!): Tammy : ___ affiche de Paris est super ! (starts with a-)',
            promptZh: 'Tex 第 6 题（省音）：巴黎的海报（affiche 元音开头）棒极了！',
            answers: ["L'", 'L’', "l'", 'l’'],
            hint: 'Starts with vowel a-.',
            audio: 'L’affiche de Paris est super !',
            explain: '"affiche" is feminine singular starting with a vowel → "L’affiche".',
            explainZh: '元音开头省音为 "L’"。'
          },
          {
            id: 'd23_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Definite article: Corey regarde ___ télévision. (-sion ending!)',
            promptZh: 'Tex 第 7 题（定冠词）：Corey 在看电视（-sion 阴性）。',
            answers: ['la'],
            hint: 'Recall Chapter 1 suffix rule: -sion is feminine!',
            audio: 'Corey regarde la télévision.',
            explain: '"télévision" ends in -sion → feminine → "la télévision".',
            explainZh: '第一章学过 -sion 为阴性，因此填 "la"。'
          },
          {
            id: 'd23_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Definite article: Tex déteste ___ Texas. (U.S. state, m.sg.)',
            promptZh: 'Tex 第 8 题（州名定冠词）：Tex 讨厌德克萨斯（阳性）。',
            answers: ['le'],
            hint: 'Regions/states take a definite article; "Texas" is masculine.',
            audio: 'Tex déteste le Texas.',
            explain: 'Most U.S. states ending in -s or consonant are masculine: "le Texas".',
            explainZh: '州名带定冠词，Texas 为阳性，填 "le"。'
          },
          {
            id: 'd23_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Definite article: Tammy : ___ tatous sont intelligents ! (plural)',
            promptZh: 'Tex 第 9 题（复数泛指）：犰狳很聪明！',
            answers: ['Les', 'les'],
            hint: 'Plural general truth.',
            audio: 'Les tatous sont intelligents !',
            explain: 'Plural general statement → "Les tatous".',
            explainZh: '复数泛指，填 "Les"。'
          },
          {
            id: 'd23_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — Definite article: Tex : ___ dictionnaire est intéressant ! (m.sg.)',
            promptZh: 'Tex 第 10 题：这本词典（阳性）很有趣！',
            answers: ['Le', 'le'],
            hint: '"dictionnaire" is masculine.',
            audio: 'Le dictionnaire est intéressant !',
            explain: '"dictionnaire" is masculine singular → "Le dictionnaire".',
            explainZh: 'dictionnaire 是阳性名词，填 "Le"。'
          },
          {
            id: 'd23_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Definite article (vowel elision!): Tammy est ___ amie de Tex.',
            promptZh: 'Tex 第 11 题：Tammy 是 Tex 的朋友（amie 元音开头）。',
            answers: ["l'", 'l’'],
            hint: 'Vowel a- triggers l’.',
            audio: 'Tammy est l’amie de Tex.',
            explain: '"la" contracts to "l’" before "amie": "l’amie de Tex".',
            explainZh: 'amie 以元音开头，冠词省音填 "l’"。'
          },
          {
            id: 'd23_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — Definite article (vowel elision!): Tex est prof à ___ université.',
            promptZh: 'Tex 第 12 题：Tex 是这所大学的教授（université 元音开头）。',
            answers: ["l'", 'l’'],
            hint: 'à + l’ before université.',
            audio: 'Tex est prof à l’université.',
            explain: '"la" becomes "l’" before "université": "à l’université".',
            explainZh: 'université 以元音开头，因此是 à "l’" université。'
          }
        ],
        related: [
          { chapterId: 'ch2_determiners', pageId: 'det_2_2', label: '2.2 Definite Articles Part 1' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_4', label: '2.4 Body Parts & Physical Traits' }
        ]
      },

      /* =========================================================
         PAGE 2.4: DEFINITE ARTICLES WITH PHYSICAL CHARACTERISTICS
      ========================================================= */
      {
        id: 'det_2_4',
        code: '2.4',
        group: 'Physical Characteristics',
        shortTitle: 'Body Parts & Physical Traits',
        title: 'Describing Physical Characteristics: Body Parts with le/la/les vs. un/une/de',
        titleZh: '描述外貌与身体部位：什么时候用定冠词，形容词前置怎么改？',
        estMin: 4,
        summary: 'Learn the core French pattern for describing eyes, hair, faces, and bodies: avoir + le/la/les (+ noun + adj.) vs. avoir + un/une/de (+ adj. BEFORE noun). Finish all 12 Tex det3 drills!',
        summaryZh: '掌握法语描述眼睛、头发、五官的核心公式：正常用 avoir + 定冠词（哪怕形容词在后面）；但形容词跑到身体名词“前面”时，改用不定冠词 un / une / de！配 Tex 原版 12 题。',
        cheatSummary: [
          { label: 'Default Formula: avoir + le/la/les + part (+ adj.)', rule: 'French uses the DEFINITE article (NOT mon/ma/mes) for body parts with avoir: Tu as les yeux brûlants, la bouche pulpeuse, les cheveux doux.', ruleZh: '标准公式：avoir + 定冠词 le/la/l’/les + 身体部位（哪怕后面跟着颜色等形容词！），不用英语的 "your/her"。' },
          { label: 'Adjective BEFORE Part → un / une / de', rule: 'If an adjective sits BEFORE the body part (like petit, grand, joli, beau), switch to un (m.), une (f.), or de (plural!): un petit nez, une jolie bouche, de jolies jambes.', ruleZh: '前置形容词变化：一旦形容词放在身体名词前面（如 petit / grand / joli / beau），立刻改用 un（阳单）、une（阴单）或 de（复数：des → de）！' }
        ],
        sections: [
          {
            id: 'body_def',
            heading: '1. avoir + Definite Article (le, la, les) for Body Parts',
            headingZh: '一、标准表达：avoir + 定冠词（不用“我的/你的”）',
            lead: 'Whereas English says "She has brown eyes" (no article) or "Brush your hair", French almost always uses the verb avoir + the DEFINITE article (le, la, l’, les) for parts of the body—as long as there is no adjective placed BEFORE the noun! (Notice how you also use definite articles with reflexive verbs like "se laver les mains".)',
            leadZh: '英语说“蓝眼睛”不带冠词，说“你的眼睛”用物主代词，但法语习惯用 avoir + 定冠词（le / la / l’ / les）。只要形容词没站在名词前面（站在后面可以！），一律保持定冠词：',
            cartoon: {
              src: './assets/tex_cartoons/det3_olympia.gif',
              alt: 'Tex rêve de Tammy (Olympia)',
              caption: 'Tex rêve : Ah, Tammy ! Tu as les yeux brûlants, la bouche pulpeuse, les cheveux si doux...',
              captionZh: 'Tex 做梦都在夸：你有着炽热的双眼、丰润的嘴唇、如此柔顺的长发……'
            },
            examples: [
              { fr: 'Tu as les yeux brûlants, la bouche pulpeuse, les cheveux si doux...', en: 'You have fiery eyes, full lips, such soft hair... (= Your eyes are fiery, your hair so soft!)', zh: '你有着炽热的眼睛、丰满的嘴唇、如此柔顺的头发……（形容词在名词后面，用定冠词！）', tag: 'With avoir + le/la/les' },
              { fr: 'Equivalent with Être: Ton regard est brûlant, ta bouche pulpeuse, tes cheveux si doux.', en: 'When using "be" instead of "have", you CAN switch to possessive ton/ta/tes.', zh: '换成动词 être 当主语时，才用物主限定词 ton/ta/tes。', tag: 'Possessive Equivalent' },
              { fr: 'Pronominal verb preview: Je me brosse les dents / les cheveux.', en: 'I brush my teeth / my hair (reflexive verbs also take le/la/les!).', zh: '以后学自反动词时也一样：Je me lave les mains（我洗手，不用 mes）。', tag: 'Reflexive Note' }
            ]
          },
          {
            id: 'body_indef',
            heading: '2. CRITICAL RULE: Adjective BEFORE Body Part → un / une / de',
            headingZh: '二、关键切换：形容词放在“名词前面”时，改用 un / une / de！',
            lead: 'The moment a descriptive adjective (like petit, grand, joli, beau) comes BEFORE the body-part noun, the definite article drops out! Use "un" (masc. sg.), "une" (fem. sg.), or "de" (plural—because "des" simplifies to "de" before a plural adjective!).',
            leadZh: '只要出现放在名词前面的短小形容词（如 petit, grand, joli, beau），就不能再用定冠词 le/la/les！单数改用 un / une，复数则直接用 de（因为 des 在复数形容词前要变成 de）！',
            examples: [
              { fr: 'Tammy, tu as un petit nez pointu et de grandes oreilles décollées...', en: 'Tammy, you have a little pointed nose and big sticking-out ears...', zh: 'Tammy，你有个小巧的尖鼻子和一对大招风耳……', tag: 'Adj BEFORE Noun!' },
              { fr: 'Compare: Tex a les yeux bleus. (adj. AFTER) vs. Tex a de beaux yeux. (adj. BEFORE)', en: 'eyes blue → les yeux bleus · beautiful eyes → de beaux yeux', zh: '对比：名词+颜色在后用 les yeux bleus；形容词在前用 de beaux yeux！', tag: 'Contrast' }
            ],
            quickCheck: {
              prompt: 'Contrast: "Corey a ___ yeux bleus" vs. "Tex a ___ jolie bouche" vs. "Tammy a ___ jolies jambes":',
              promptZh: '一眼分辨：形容词在后 vs 在前：',
              options: [
                'les yeux bleus / une jolie bouche / de jolies jambes',
                'de yeux bleus / la jolie bouche / les jolies jambes',
                'des yeux bleus / la jolie bouche / des jolies jambes',
                'les yeux bleus / la jolie bouche / les jolies jambes'
              ],
              answerIdx: 0,
              explain: 'Exactly right! Adjective AFTER → "les yeux bleus"; singular adjective BEFORE → "une jolie bouche"; plural adjective BEFORE → "de jolies jambes".',
              explainZh: '完全准确！① bleus 在后 → les；② jolie 在单数 bouche 前 → une；③ jolies 在复数 jambes 前 → de！'
            }
          }
        ],
        drills: [
          {
            id: 'd24_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12: Corey a ___ yeux bleus. (blue eyes)',
            promptZh: 'Tex 第 1 题：Corey 有双蓝眼睛（形容词 bleus 在名词后面）。',
            options: ['les', 'des', 'de', 'le'],
            answerIdx: 0,
            audio: 'Corey a les yeux bleus.',
            explain: 'Adjective "bleus" comes AFTER "yeux" → use definite article "les".',
            explainZh: '颜色形容词 bleus 放在名词后面，因此用定冠词 "les"。'
          },
          {
            id: 'd24_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Tex a ___ poil gris. (grey coat/fur — poil m.sg.)',
            promptZh: 'Tex 第 2 题：Tex 有一身灰毛（形容词 gris 在后，poil 阳性单数）。',
            options: ['le', 'un', 'la', 'de'],
            answerIdx: 0,
            audio: 'Tex a le poil gris.',
            explain: '"gris" comes AFTER "poil" (m.sg.) → use "le".',
            explainZh: 'gris 在后，poil 为阳性单数，用 "le"。'
          },
          {
            id: 'd24_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Tammy a ___ jolie bouche. (pretty mouth — adj. BEFORE noun)',
            promptZh: 'Tex 第 3 题：Tammy 有张漂亮的嘴（形容词 jolie 在名词前！）。',
            options: ['une', 'la', 'un', 'de'],
            answerIdx: 0,
            audio: 'Tammy a une jolie bouche.',
            explain: 'Adjective "jolie" comes BEFORE feminine "bouche" → switch to "une"!',
            explainZh: 'jolie 在阴性单数名词前面，切换为 "une"！'
          },
          {
            id: 'd24_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Tex a ___ jolies jambes. (pretty legs — plural adj. BEFORE noun)',
            promptZh: 'Tex 第 4 题：Tex 有双好看的腿（复数形容词 jolies 在名词前！）。',
            options: ['de', 'les', 'des', 'une'],
            answerIdx: 0,
            audio: 'Tex a de jolies jambes.',
            explain: 'Plural adjective "jolies" comes BEFORE "jambes" → use "de" (des changes to de before a plural adj.).',
            explainZh: '复数形容词在前面时，用 "de"（des → de）："de jolies jambes"。'
          },
          {
            id: 'd24_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Fill le / la / les / un / une / de: Bette a ___ visage noir. (black face — -age m.sg.)',
            promptZh: 'Tex 第 5 题：Bette 有一张黑脸（noir 在后，visage 阳性）。',
            answers: ['le'],
            hint: '"noir" is AFTER "visage" (-age ending = masculine).',
            audio: 'Bette a le visage noir.',
            explain: 'Adjective after noun + masculine "-age" → "le visage noir".',
            explainZh: '形容词在后且 visage 阳性，填 "le"。'
          },
          {
            id: 'd24_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Fill le / la / les / un / une / de: Tammy a ___ cheveux bouclés. (curly hair — pl.)',
            promptZh: 'Tex 第 6 题：Tammy 有一头卷发（bouclés 在后，cheveux 复数）。',
            answers: ['les'],
            hint: '"bouclés" is AFTER "cheveux" (plural).',
            audio: 'Tammy a les cheveux bouclés.',
            explain: 'Adjective after plural body part → "les cheveux bouclés".',
            explainZh: 'bouclés 在名词后面，填定冠词 "les"。'
          },
          {
            id: 'd24_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Fill le / la / les / un / une / de: Tex a toujours ___ corps luisant. (glistening body — m.sg.)',
            promptZh: 'Tex 第 7 题：Tex 总是有一副油亮光滑的身体（luisant 在后，corps 阳性）。',
            answers: ['le'],
            hint: '"luisant" is AFTER masculine "corps".',
            audio: 'Tex a toujours le corps luisant.',
            explain: '"corps" is masculine singular with adjective after → "le corps luisant".',
            explainZh: 'corps 为阳性单数，形容词在后，填 "le"。'
          },
          {
            id: 'd24_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Fill le / la / les / un / une / de: Joe-Bob a ___ joues joufflues. (plump cheeks — pl.)',
            promptZh: 'Tex 第 8 题：Joe-Bob 有着胖嘟嘟的脸颊（joufflues 在后，复数）。',
            answers: ['les'],
            hint: '"joufflues" is AFTER plural "joues".',
            audio: 'Joe-Bob a les joues joufflues.',
            explain: 'Adjective after plural noun → "les joues joufflues".',
            explainZh: '形容词在后，复数填 "les"。'
          },
          {
            id: 'd24_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Fill le / la / les / un / une / de: Fiona a ___ taille fine. (thin waist — "fine" agrees fem.)',
            promptZh: 'Tex 第 9 题：Fiona 腰身纤细（fine 在后、提示了阴性）。',
            answers: ['la'],
            hint: 'Feminine adjective "fine" AFTER "taille"!',
            audio: 'Fiona a la taille fine.',
            explain: '"fine" shows "taille" is feminine, and the adjective follows the noun → "la taille fine".',
            explainZh: 'fine 提示 taille 为阴性，且在名词后面，填 "la"。'
          },
          {
            id: 'd24_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — Fill le / la / les / un / une / de: Tammy a ___ teint rose. (rosy complexion — m.sg.)',
            promptZh: 'Tex 第 10 题：Tammy 脸色红润（teint 阳性，rose 在后）。',
            answers: ['le'],
            hint: '"teint" is masculine; "rose" follows it.',
            audio: 'Tammy a le teint rose.',
            explain: '"teint" is masculine singular, adjective after → "le teint rose".',
            explainZh: 'teint 阳性、rose 在后，填 "le"。'
          },
          {
            id: 'd24_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Fill le / la / les / un / une / de: Bette a ___ peau douce. (soft skin — f.sg.)',
            promptZh: 'Tex 第 11 题：Bette 皮肤柔滑（douce 阴性，且在后）。',
            answers: ['la'],
            hint: '"douce" shows "peau" is feminine; adjective follows noun.',
            audio: 'Bette a la peau douce.',
            explain: '"peau" is feminine singular, adjective after → "la peau douce".',
            explainZh: 'douce 为阴性提示 peau 阴性，且在后，填 "la"。'
          },
          {
            id: 'd24_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — Fill le / la / les / un / une / de: Tex a ___ beau nez texan. (beautiful Texan nose — adj. BEFORE!)',
            promptZh: 'Tex 第 12 题：Tex 有个帅气的德州鼻子（beau 跑到名词前了！）。',
            answers: ['un'],
            hint: '"beau" is masculine singular AND stands BEFORE "nez"!',
            audio: 'Tex a un beau nez texan.',
            explain: '"beau" stands BEFORE masculine singular "nez" → switch from "le" to "un": "un beau nez texan".',
            explainZh: '注意陷阱！beau 放在了阳性单数名词 nez 的前面，必须用 "un"！'
          }
        ],
        related: [
          { chapterId: 'ch2_determiners', pageId: 'det_2_5', label: '2.5 Indefinite Articles: un, une, des' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_9', label: '2.9 Possessive Determiners' }
        ]
      },

      /* =========================================================
         PAGE 2.5: INDEFINITE ARTICLES — FORMS, LIAISON & USES
      ========================================================= */
      {
        id: 'det_2_5',
        code: '2.5',
        group: 'Indefinite Articles (un, une, des)',
        shortTitle: 'Indefinite: un, une, des',
        title: 'Indefinite Articles (Part 1): un, une, des, Liaison & Core Uses',
        titleZh: '不定冠词（一）：un, une, des 的形式、联诵与英语不加但法语必加的 des',
        estMin: 3,
        summary: 'Learn un (m.), une (f.), and des (pl.), hear their vowel liaisons (un_écureuil, des_écureuils), and see why French NEVER drops plural "des" where English drops "some".',
        summaryZh: '掌握不定冠词 un / une / des 的基本写法、元音前联诵发音差异，以及为什么复数“一些（des）”在法语里不能像英语那样省略。',
        cheatSummary: [
          { label: 'Forms & Liaison', rule: 'un (m.sg., nasal [œ̃], liaises as [œ̃n] before vowel: un_écureuil) · une (f.sg.) · des (all plurals; silent s, liaises as /z/ before vowel: des_écureuils).', ruleZh: 'un（阳单，元音前鼻音变 [n] 联诵）、une（阴单）、des（复数通用，元音前 s 读 /z/）。' },
          { label: 'Mandatory "des"', rule: 'English drops "some" ("They are roommates"), but French NEVER leaves plural nouns bare: "Ils sont des camarades de chambre."', ruleZh: '英语常省略复数前的 some，但法语必须写出 des！' }
        ],
        sections: [
          {
            id: 'indef_forms',
            heading: '1. Forms & Pronunciation (Notice the Liaison!)',
            headingZh: '一、un / une / des 形式与听力联诵',
            lead: 'Indefinite articles introduce countable nouns that are NOT yet specified: un (masculine singular), une (feminine singular), and des (plural for both genders). Listen carefully to how "un" and "des" sound before a consonant vs. a vowel!',
            leadZh: '不定冠词用来介绍还没有特指过的可数名词：un（阳单 = a/an/one）、une（阴单）、des（复数 = 一些）。请对比听元音前后的读音差异：',
            cartoon: {
              src: './assets/tex_cartoons/det4_chatte.gif',
              alt: 'Bette est une chatte',
              caption: 'Bette est une chatte. Tex est un tatou.',
              captionZh: 'Bette 是一只（母）猫，Tex 是一只犰狳。'
            },
            examples: [
              { fr: 'Tex est un tatou. · Joe-Bob est un écureuil. (liaison /n/!)', en: 'Tex is an armadillo. · Joe-Bob is a squirrel.', zh: 'Tex 是一只犰狳。· Joe-Bob 是一只松鼠（un écureuil 发生 /n/ 联诵）。', tag: 'Masc. un' },
              { fr: 'Bette est une chatte. · UT est une université.', en: 'Bette is a cat (f.). · UT is a university (f.).', zh: 'Bette 是只猫。· UT 是一所大学。', tag: 'Fem. une' },
              { fr: 'des tatous · des chats · des écureuils · des universités (liaison /z/!)', en: '(some) armadillos · cats · squirrels · universities', zh: '一些犰狳、猫 · 一些松鼠、大学（元音前 /z/ 联诵）', tag: 'Plural des' }
            ]
          },
          {
            id: 'indef_uses',
            heading: '2. Indefinite vs. Definite Contrast + Mandatory "des"',
            headingZh: '二、泛指（初次提到）→ 特指（已知）的过渡，以及必须写 des',
            lead: 'Notice the natural story flow: introduce something new with un / une ("a room in a dorm"), then refer back to that specific one with le / la / les ("the room #1735 in Jester"). And remember: where English says "They are roommates" with zero word, French MUST include "des"!',
            leadZh: '看下面这组连贯场景：第一次提到用不定冠词 une chambre / une résidence，紧接着特指刚才那间房号时就变成 la chambre / la résidence！另外英语“他们是室友”不加冠词，法语复数必须带上 des：',
            cartoon: {
              src: './assets/tex_cartoons/det4_jester.gif',
              alt: 'La résidence Jester',
              caption: 'Ils ont une chambre dans une résidence → la chambre n° 1735 dans la résidence Jester !',
              captionZh: '从“一间宿舍（une）”切换到“1735 号那间房（la）”！'
            },
            examples: [
              { fr: 'Joe-Bob et Corey ont une chambre dans une résidence universitaire à Austin.', en: 'Joe-Bob and Corey have a (one) room in a residence hall in Austin.', zh: 'Joe-Bob 和 Corey 在奥斯汀的一栋学生宿舍里有一间房。', tag: 'First Mention' },
              { fr: 'Ils ont la chambre numéro 1735 dans la résidence Jester.', en: 'They have (the) room #1735 in the Jester residence hall.', zh: '他们住的是 Jester 宿舍楼 1735 号房间（特指！）。', tag: 'Now Specific' },
              { fr: 'Joe-Bob et Corey sont des camarades de chambre.', en: 'Joe-Bob and Corey are roommates! (NEVER omit "des"!)', zh: 'Joe-Bob 和 Corey 是室友！（绝对不能漏掉 des！）', tag: 'Mandatory des' }
            ],
            quickCheck: {
              prompt: 'How do you translate "They are armadillos." (general group)?',
              promptZh: '把 "They are armadillos." 译成法语（记住不能省略复数不定冠词）：',
              options: ['Ce sont des tatous.', 'Ce sont tatous.', 'Ils sont un tatou.', 'Ce sont de tatou.'],
              answerIdx: 0,
              explain: 'French cannot leave a plural noun bare here: always use "des" ("Ce sont des tatous.").',
              explainZh: '法语复数名词前必须保留不定冠词 des："Ce sont des tatous."。'
            }
          }
        ],
        drills: [
          {
            id: 'd25_d1',
            kind: 'choice',
            prompt: 'Which sentence has /n/ liaison after the indefinite article?',
            promptZh: '下面哪句话在不定冠词后面会发生 /n/ 联诵？',
            options: ['Joe-Bob est un écureuil.', 'Tex est un tatou.', 'Bette est une chatte.', 'Voici des tatous.'],
            answerIdx: 0,
            audio: 'Joe-Bob est un écureuil.',
            explain: '"un" + vowel sound ("écureuil") links with a clear /n/ sound!',
            explainZh: 'un 遇到元音开头名词时会连读出清晰的 /n/ 音：un_écureuil。'
          },
          {
            id: 'd25_d2',
            kind: 'choice',
            prompt: 'What is the plural indefinite article ("some" / bare plural in English)?',
            promptZh: 'un 和 une 对应的复数不定冠词是什么？',
            options: ['des', 'les', 'du', 'de la'],
            answerIdx: 0,
            audio: 'des universités',
            explain: '"un" and "une" both become "des" in the plural.',
            explainZh: '不论阳性还是阴性，不定冠词复数统一为 "des"。'
          },
          {
            id: 'd25_d3',
            kind: 'choice',
            prompt: 'Contrast indefinite vs. definite: "Ils ont ___ chambre → C’est ___ chambre 1735."',
            promptZh: '对比泛指与特指：“他们有[一间]房 → 就是[那间]1735号房”：',
            options: ['une / la', 'la / une', 'des / les', 'une / une'],
            answerIdx: 0,
            audio: 'Ils ont une chambre. C’est la chambre 1735.',
            explain: 'Unidentified first mention uses "une"; specific identified #1735 uses "la".',
            explainZh: '首次泛指“有一间房”用 une；后面明确指明 1735 号那间就换成特指 la。'
          },
          {
            id: 'd25_d4',
            kind: 'choice',
            prompt: 'Choose the right sentence for "Montréal is a great city." (ville is f.):',
            promptZh: '选择正确句子：“蒙特利尔是一座很棒的城市。”（ville 阴性）',
            options: ['Montréal est une grande ville.', 'Montréal est un grand ville.', 'Montréal est grande ville.', 'Montréal est des grandes villes.'],
            answerIdx: 0,
            audio: 'Montréal est une grande ville.',
            explain: '"ville" is feminine singular, so use "une".',
            explainZh: 'ville 是阴性单数，用 "une"。'
          },
          {
            id: 'd25_d5',
            kind: 'fib',
            prompt: 'Fill un / une / des: Tex est ___ tatou amusant. (m.sg.)',
            promptZh: '填不定冠词（un / une / des）：Tex 是一只有趣的犰狳（阳性）。',
            answers: ['un'],
            hint: '"tatou" is masculine singular.',
            audio: 'Tex est un tatou amusant.',
            explain: 'Masculine singular indefinite → "un tatou".',
            explainZh: '阳性单数用 "un"。'
          },
          {
            id: 'd25_d6',
            kind: 'fib',
            prompt: 'Fill un / une / des: UT est ___ grande université. (f.sg.)',
            promptZh: '填不定冠词：UT 是一所大型大学（阴性）。',
            answers: ['une'],
            hint: '"université" is feminine singular.',
            audio: 'UT est une grande université.',
            explain: 'Feminine singular indefinite → "une grande université".',
            explainZh: '阴性单数用 "une"。'
          },
          {
            id: 'd25_d7',
            kind: 'fib',
            prompt: 'Fill un / une / des: Joe-Bob et Corey sont ___ camarades de chambre. (pl.)',
            promptZh: '填不定冠词：Joe-Bob 和 Corey 是室友（复数）。',
            answers: ['des'],
            hint: 'Plural indefinite article — cannot be omitted!',
            audio: 'Joe-Bob et Corey sont des camarades de chambre.',
            explain: 'Plural countable noun → "des camarades de chambre".',
            explainZh: '复数可数名词前不可省略，填 "des"。'
          },
          {
            id: 'd25_d8',
            kind: 'fib',
            prompt: 'Fill un / une / des: Je voudrais ___ café noir, s’il vous plaît. (m.sg., one coffee)',
            promptZh: '填不定冠词（一杯黑咖啡，阳性）：',
            answers: ['un'],
            hint: 'One cup of coffee ("café" is masculine).',
            audio: 'Je voudrais un café noir, s’il vous plaît.',
            explain: 'Ordering one coffee → "un café noir".',
            explainZh: '点“一杯咖啡”作可数单位，café 为阳性，填 "un"。'
          },
          {
            id: 'd25_d9',
            kind: 'fib',
            prompt: 'Fill un / une / des: Il y a ___ écureuils dans le parc. (pl.)',
            promptZh: '填不定冠词：公园里有一些松鼠（复数）。',
            answers: ['des'],
            hint: 'Plural indefinite (pronounce the /z/ liaison!).',
            audio: 'Il y a des écureuils dans le parc.',
            explain: 'Plural indefinite article before vowel → "des écureuils".',
            explainZh: '复数不定冠词填 "des"（记得读 /z/ 联诵）。'
          },
          {
            id: 'd25_d10',
            kind: 'fib',
            prompt: 'Fill un / une / des: Tammy regarde ___ affiche intéressante. (affiche is f.sg.)',
            promptZh: '填不定冠词：Tammy 在看一张有趣的海报（affiche 阴性，记住 un/une 不省音！）。',
            answers: ['une'],
            hint: 'Does "une" contract to *u’*? NO — keep full "une"!',
            audio: 'Tammy regarde une affiche intéressante.',
            explain: 'Never contract "un" or "une" before a vowel! Keep full "une affiche".',
            explainZh: '牢记：只有 le/la 会省音成 l’，un/une 遇到元音绝对不省音，完整写 "une"！'
          }
        ],
        related: [
          { chapterId: 'ch2_determiners', pageId: 'det_2_6', label: '2.6 Indefinite Exceptions & Tex Review' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_7', label: '2.7 Partitive Articles: du, de la, de l’' }
        ]
      },

      /* =========================================================
         PAGE 2.6: INDEFINITE ARTICLES — NEGATIVE DE, PLURAL ADJ, PROFESSIONS & TEX REVIEW
      ========================================================= */
      {
        id: 'det_2_6',
        code: '2.6',
        group: 'Indefinite Articles (un, une, des)',
        shortTitle: 'Indefinite: Traps & Tex Review',
        title: 'Indefinite Articles (Part 2): Negative de, Plural Adjectives, Professions & Tex Review',
        titleZh: '不定冠词（二）：否定变 de（être 例外）、复数形容词前变 de、职业省略与 Tex 12 题总测',
        estMin: 5,
        summary: 'Master the 3 classic indefinite-article traps (negative "de" vs. être exception, "des → de" before plural adjectives, no article for professions/nationalities/religions after être/devenir), read Bette & Tammy, and finish all 12 Tex drills!',
        summaryZh: '一次性搞定不定冠词三大高频考题：① 否定句改 de（但 être 后面不改！）；② 复数形容词前置时 des → de；③ 职业/国籍/宗教在 être/devenir 后不加冠词。含原版对话与 Tex 12 题。',
        cheatSummary: [
          { label: '1. Negative → de / d’ (EXCEPT être)', rule: 'Je n’ai pas de chien / pas d’amis (un/une/des → de/d’). EXCEPTION after être: Ce n’est pas un tatou ! Ce ne sont pas des escargots !', ruleZh: '否定后 un/une/des 改 de/d’；唯一例外是动词 être 后面保持不变（Ce n’est pas un tatou / des escargots）。' },
          { label: '2. Plural Adjective Before Noun → de', rule: 'des → de before a plural adjective BEFORE the noun ("de charmants amoureux", "de bons amis", "de vieilles amies"). Keep "des" if adj. is AFTER ("des tatous parfaits").', ruleZh: '复数形容词在名词前面时，des 变成 de（de bons amis）；形容词在名词后面则保持 des（des tatous parfaits）。' },
          { label: '3. Professions / Nationality / Religion', rule: 'Omit the article after être / devenir: "Tex est professeur, il est américain, il n’est pas catholique." (Add un/une back ONLY after "C’est..." or when modified: "C’est un bon prof.")', ruleZh: '主语为人 + être/devenir 后直接接职业、国籍、宗教时不加冠词！只有用 C’est 或带形容词修饰时才加回 un/une。' }
        ],
        sections: [
          {
            id: 'indef_neg',
            heading: '1. "de / d’" After a Negative (Plus the être Exception!)',
            headingZh: '一、否定句变成 de / d’（但 être 之后保持不变！）',
            lead: 'In negative sentences, un, une, and des normally turn into de (or d’ before a vowel/silent h). HOWEVER, following the verb être (e.g. Ce n’est pas / Ce ne sont pas), keep un, une, and des unchanged!',
            leadZh: '绝大多数动词变否定后，un / une / des 统统变成 de（元音前 d’）。唯一的特例是动词 être（尤其是 Ce n’est pas / Ce ne sont pas）：此时保留完整的 un / une / des！',
            examples: [
              { fr: 'Joe-Bob : Mais non ! Je n’ai pas de chien. — Corey : Je n’ai pas d’amis.', en: 'I don’t have a dog. — I don’t have any friends. (un/des → de/d’)', zh: '我没有狗。——我没有朋友。（avoir 否定后改 de / d’）', tag: 'Verb ≠ être → de' },
              { fr: 'Édouard : Joe-Bob, c’est un écureuil. Ce n’est pas un tatou !', en: 'Joe-Bob is a squirrel. He is NOT an armadillo! (KEEP "un" after être!)', zh: 'Joe-Bob 是只松鼠，他不是一只犰狳！（être 后保留 un！）', tag: 'After être → KEEP' },
              { fr: 'Tex et Tammy, ce sont des tatous. Ce ne sont pas des escargots.', en: 'Tex and Tammy are armadillos. They are NOT snails! (KEEP "des" after être!)', zh: 'Tex 和 Tammy 是犰狳，他们不是蜗牛！（être 后保留 des！）', tag: 'After être → KEEP' }
            ]
          },
          {
            id: 'indef_pl_adj',
            heading: '2. "des → de" Before a Plural Adjective (+ Professions Rule)',
            headingZh: '二、复数形容词前置 des→de + 职业/国籍/宗教零冠词规则',
            lead: 'First rule: when a plural adjective stands BEFORE the noun (like bons, charmants, vieilles, bonnes), des normally simplifies to de; when it follows the noun, keep des. Second rule: after être or devenir, professions, nationalities, and religions behave like adjectives and take NO article (unless introduced by C’est or modified)!',
            leadZh: '① 复数形容词跑到名词前面时（如 bons, charmants, vieilles），前面的 des 要缩成 de；在名词后面则保持 des。② 职业、国籍、宗教跟在 il/elle est 或 devenir 后不加冠词（除非用 C’est 或带有修饰词）！',
            cartoon: {
              src: './assets/tex_cartoons/det4_parfait.gif',
              alt: 'Des tatous parfaits l’un pour l’autre',
              caption: 'de charmants amoureux (adj. before → de) vs. des tatous parfaits (adj. after → des)',
              captionZh: '前用 de（de charmants amoureux），后用 des（des tatous parfaits）！'
            },
            examples: [
              { fr: 'Tex et Tammy sont de charmants amoureux. / Ce ne sont pas seulement de bons amis ?', en: 'Adjective BEFORE plural noun → "de charmants amoureux", "de bons amis".', zh: '形容词在名词前面 → 缩为 de：de charmants amoureux / de bons amis。', tag: 'Adj. BEFORE → de' },
              { fr: 'Tex et Tammy sont des tatous parfaits l’un pour l’autre.', en: 'Adjective AFTER plural noun → keep "des": "des tatous parfaits".', zh: '形容词在名词后面 → 保留 des：des tatous parfaits。', tag: 'Adj. AFTER → des' },
              { fr: 'Édouard : Tex devient professeur ; il est américain ; il n’est pas catholique.', en: 'Tex becomes a professor; he is American; he is not Catholic. (NO article!)', zh: 'Tex 当上了教授；他是美国人；他不是天主教徒。（全都不加冠词！）', tag: 'No Article' },
              { fr: 'Compare: Tex est professeur. vs. Tex est un professeur intelligent. (or C’est un prof.)', en: 'Add "un/une" back once you add C’est or an adjective like "intelligent"!', zh: '一旦换成 C’est 或后面加了形容词（un prof. intelligent），就必须加回 un/une！', tag: 'Modified → un' }
            ],
            dialogue: {
              title: 'Dialogue: Bette et Tammy parlent entre femmes',
              titleZh: '女生私房话对话：Bette 与 Tammy',
              lines: [
                { speaker: 'Bette', fr: 'Je n’ai pas de véritables amis ! Tout le monde pense que je suis une méchante chatte.', en: 'I have no real friends! Everybody thinks I’m a wicked cat.', zh: '我没有真正的朋友！大家总觉得我是只坏猫。' },
                { speaker: 'Tammy', fr: 'Mais non Bette ! Toi et moi nous sommes de vieilles amies !', en: 'That’s not true, Bette! You and I are old friends!', zh: '哪有啊 Bette！咱俩可是老朋友啦！' },
                { speaker: 'Bette', fr: 'Oui, mais toi tu as un petit ami tandis que moi je n’ai pas de petit ami !', en: 'Yes, but you have a boyfriend whereas I don’t have any boyfriend!', zh: '对呀，可你有男朋友，而我连个男朋友都没有！' },
                { speaker: 'Tammy', fr: 'Tu sais Bette, avoir un petit ami ce n’est pas toujours une partie de plaisir, surtout quand il s’appelle Tex !', en: 'You know Bette, having a boyfriend isn’t always a picnic, especially when his name is Tex!', zh: 'Bette 你要知道，有个男朋友也不全是乐子，尤其是当他名叫 Tex 的时候！' }
              ]
            },
            quickCheck: {
              prompt: 'Contrast: "Tex est ___ professeur" vs. "Tex est ___ professeur intelligent."',
              promptZh: '对比这两句，选出最准确的一组：',
              options: [
                '(no article) / un',
                'un / (no article)',
                'le / du',
                'des / un'
              ],
              answerIdx: 0,
              explain: 'Bare profession after être takes NO article ("Tex est professeur"); once modified by "intelligent", add "un" ("Tex est un professeur intelligent").',
              explainZh: '光杆职业在 être 后不加冠词（Tex est professeur）；被形容词 intelligent 修饰后加回 un（Tex est un professeur intelligent）。'
            }
          }
        ],
        drills: [
          {
            id: 'd26_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12 — Fill un, une, des, or de: Tex : Je voudrais ___ café (masc.).',
            promptZh: 'Tex 第 1 题：我想要一杯咖啡（阳性）。',
            options: ['un', 'une', 'des', 'de'],
            answerIdx: 0,
            audio: 'Je voudrais un café.',
            explain: 'Countable singular masculine noun → "un café".',
            explainZh: '阳性单数，选 "un"。'
          },
          {
            id: 'd26_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Tammy et Tex sont ___ amis. (no adjective before amis)',
            promptZh: 'Tex 第 2 题：Tammy 和 Tex 是朋友（前面没有形容词）。',
            options: ['des', 'de', 'un', 'les'],
            answerIdx: 0,
            audio: 'Tammy et Tex sont des amis.',
            explain: 'No adjective precedes "amis" → keep plural indefinite "des".',
            explainZh: '名词前无复数形容词，用 "des"。'
          },
          {
            id: 'd26_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Tammy et Fiona sont ___ bonnes amies. ("bonnes" BEFORE noun!)',
            promptZh: 'Tex 第 3 题：Tammy 和 Fiona 是好朋友（复数形容词 bonnes 在前！）。',
            options: ['de', 'des', 'les', 'une'],
            answerIdx: 0,
            audio: 'Tammy et Fiona sont de bonnes amies.',
            explain: 'Plural adjective "bonnes" stands BEFORE "amies" → "des" shifts to "de"!',
            explainZh: '复数形容词 bonnes 在名词前面，des 必须变成 "de"！'
          },
          {
            id: 'd26_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Tammy est ___ fille (fem.) merveilleuse.',
            promptZh: 'Tex 第 4 题：Tammy 是个很棒的女孩（阴性）。',
            options: ['une', 'un', 'des', 'de'],
            answerIdx: 0,
            audio: 'Tammy est une fille merveilleuse.',
            explain: 'Feminine singular indefinite → "une fille merveilleuse".',
            explainZh: '阴性单数用 "une"。'
          },
          {
            id: 'd26_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Fill un / une / des / de: Tex est ___ prof. intelligent. (modified masc. profession!)',
            promptZh: 'Tex 第 5 题：Tex 是位聪明的教授（被 intelligent 修饰！）。',
            answers: ['un'],
            hint: 'Because "intelligent" modifies "prof.", bring back the indefinite article!',
            audio: 'Tex est un prof intelligent.',
            explain: 'Modified profession noun → "Tex est un prof. intelligent."',
            explainZh: '带形容词修饰时要加回不定冠词，prof 阳性用 "un"。'
          },
          {
            id: 'd26_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Fill un / une / des / de: Fiona est ___ fourmi (fem.) loyale.',
            promptZh: 'Tex 第 6 题：Fiona 是只忠诚的蚂蚁（fourmi 阴性）。',
            answers: ['une'],
            hint: '"fourmi" is always feminine.',
            audio: 'Fiona est une fourmi loyale.',
            explain: 'Feminine singular → "une fourmi loyale".',
            explainZh: 'fourmi 为阴性，填 "une"。'
          },
          {
            id: 'd26_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Fill un / une / des / de: Joe-Bob et Corey sont ___ animaux ridicules.',
            promptZh: 'Tex 第 7 题：Joe-Bob 和 Corey 是荒唐的动物（形容词 ridicules 在名词后面！）。',
            answers: ['des'],
            hint: 'Notice "ridicules" is AFTER "animaux"!',
            audio: 'Joe-Bob et Corey sont des animaux ridicules.',
            explain: 'Adjective comes AFTER the noun → keep full "des": "des animaux ridicules".',
            explainZh: '形容词 ridicules 在名词后面，因此保持 "des"！'
          },
          {
            id: 'd26_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Fill un / une / des / de: Tex, Trey, et Rita sont ___ tatous typiques au Texas.',
            promptZh: 'Tex 第 8 题：他们三只都是典型的德州犰狳（形容词在后）。',
            answers: ['des'],
            hint: '"typiques" follows "tatous".',
            audio: 'Tex, Trey et Rita sont des tatous typiques au Texas.',
            explain: 'Adjective after noun → "des tatous typiques".',
            explainZh: '形容词在后，复数填 "des"。'
          },
          {
            id: 'd26_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Fill un / une / des / de: Corey est ___ ami de Tex. (masc. vowel — no contraction!)',
            promptZh: 'Tex 第 9 题：Corey 是 Tex 的男性朋友（ami 阳性）。',
            answers: ['un'],
            hint: 'Does "un" ever turn into l’? Never!',
            audio: 'Corey est un ami de Tex.',
            explain: '"ami" is masculine singular → "un ami de Tex".',
            explainZh: '阳性朋友填 "un"（记得加 /n/ 联诵）。'
          },
          {
            id: 'd26_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — Fill un / une / des / de: Tex est ___ tatou (masc.) amusant.',
            promptZh: 'Tex 第 10 题：Tex 是只风趣的犰狳。',
            answers: ['un'],
            hint: '"tatou" is masculine.',
            audio: 'Tex est un tatou amusant.',
            explain: '"tatou" is masculine singular → "un".',
            explainZh: '阳性单数，填 "un"。'
          },
          {
            id: 'd26_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Fill un / une / des / de: Bette est ___ étudiante à UT. (fem.)',
            promptZh: 'Tex 第 11 题：Bette 是 UT 的女学生（阴性）。',
            answers: ['une'],
            hint: '"étudiante" is feminine (remember the -e!).',
            audio: 'Bette est une étudiante à UT.',
            explain: '"étudiante" is feminine → "une étudiante".',
            explainZh: '阴性 étudiante，填 "une"。'
          },
          {
            id: 'd26_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — BONUS Negation Trap: Corey n’a pas ___ amis, mais ce ne sont pas ___ escargots !',
            promptZh: 'Tex 第 12 题（否定双杀辨析）：Corey 没有朋友（d’），但他们不是蜗牛（être 后保留 des）！',
            answers: ["d' / des", 'd’ / des'],
            hint: 'First blank: "avoir" negative before vowel "amis"; second blank: "être" negative!',
            audio: 'Corey n’a pas d’amis, mais ce ne sont pas des escargots !',
            explain: '"n’a pas" shifts des → "d’" ("d’amis"), whereas "ce ne sont pas" keeps "des" ("des escargots")!',
            explainZh: '完美对照：一般动词否定变 "d’"（d’amis），être 否定保留 "des"（des escargots）！'
          }
        ],
        related: [
          { chapterId: 'ch2_determiners', pageId: 'det_2_5', label: '2.5 Indefinite Forms' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_8', label: '2.8 Partitive Negation & Contrast' }
        ]
      },

      /* =========================================================
         PAGE 2.7: PARTITIVE ARTICLES — DU, DE LA, DE L' VS. LE / UN
      ========================================================= */
      {
        id: 'det_2_7',
        code: '2.7',
        group: 'Partitive Articles (du, de la, de l’)',
        shortTitle: 'Partitive: du, de la, de l’',
        title: 'Partitive Articles (Part 1): du, de la, de l’ & Comparing le / un / du',
        titleZh: '部分冠词（一）：du / de la / de l’ 与定冠词・不定冠词三方视角对比',
        estMin: 3,
        summary: 'Learn the 3 partitive articles for uncountable mass nouns (food, drinks, weather, abstract qualities) and see how le, un, and du transform the very same noun ("vin").',
        summaryZh: '掌握不可数食物/饮品/抽象特质专用的部分冠词（du / de la / de l’），看懂同一个词“葡萄酒”如何随定冠词、不定冠词、部分冠词切换含义。',
        cheatSummary: [
          { label: '3 Partitive Forms ("some / any")', rule: 'du (masc.: du pain, du fromage) · de la (fem.: de la viande, de la chance) · de l’ (vowel/silent h: de l’ail, de l’eau).', ruleZh: '三种形式：阳性 du、阴性 de la、元音或哑音 h 前 de l’（相当于英语的 some）。' },
          { label: 'Partitive vs. Definite vs. Indefinite', rule: 'du vin = some wine (unspecified mass) · Le vin = wine in general / the whole category · un vin = one wine / selection on the list.', ruleZh: 'du vin（喝一些酒，部分）vs le vin（葡萄酒总称 / 喜好）vs un vin（一瓶/一款酒，可数单位）。' }
        ],
        sections: [
          {
            id: 'part_forms',
            heading: '1. Forms & Uncountable Mass Uses',
            headingZh: '一、三种形式（du / de la / de l’）与不可数用法',
            lead: 'Partitive articles express an unspecified portion ("some") of something you cannot count individually—food, liquids, ingredients, weather, sports, or abstract qualities like luck and patience. While English routinely omits "some" ("He eats meat"), French NEVER drops du / de la / de l’!',
            leadZh: '部分冠词表达“一些、一部分”无法按个拆分的物质、饮食、天气或抽象名词（运气、勇气等）。英语可以说 "eat meat"，但法语绝不能漏掉 du / de la / de l’！',
            cartoon: {
              src: './assets/tex_cartoons/det5_viande.gif',
              alt: 'Joe-Bob mange de la viande',
              caption: 'Joe-Bob mange de la viande. (Feminine mass → de la)',
              captionZh: 'Joe-Bob 在吃肉（viande 阴性不可数 → de la）。'
            },
            examples: [
              { fr: 'du pain · du vin · du fromage (masculine)', en: '(some) bread · (some) wine · (some) cheese', zh: '（一些）面包 · 葡萄酒 · 奶酪（阳性 du）', tag: 'du (m.)' },
              { fr: 'de la viande · de la chance · de la glace (feminine)', en: '(some) meat · luck · ice cream', zh: '（一些）肉 · 运气 · 冰淇淋（阴性 de la）', tag: 'de la (f.)' },
              { fr: 'de l’ail (m.) · de l’eau (f.) (before vowel/silent h)', en: '(some) garlic · (some) water', zh: '（一些）大蒜 · 水（元音/哑音 h 前不分阴阳性，统一用 de l’）', tag: 'de l’ (vowel)' },
              { fr: 'Édouard : Comme dessert, nous avons de la mousse au chocolat, de la glace parfumée à la vanille et du sorbet à l’ananas.', en: 'For dessert, we have chocolate mousse, vanilla ice cream, and pineapple sorbet.', zh: 'Édouard：甜点我们有巧克力慕斯、香草冰淇淋和菠萝雪葩。', tag: 'Partitive Foods' }
            ]
          },
          {
            id: 'part_vs_other',
            heading: '2. Same Noun, 3 Articles: du vin vs. le vin vs. un vin',
            headingZh: '二、同词三变：部分冠词 vs 定冠词 vs 不定冠词',
            lead: 'Think of the definite article as pointing to the WHOLE category, the partitive as taking a SLICE/PORTION of that mass, and the indefinite as counting ONE distinct bottle or type:',
            leadZh: '通过“葡萄酒（vin）”看懂三种冠词的视角分工——整体用 le，喝一点用 du，点一瓶/一款用 un：',
            cartoon: {
              src: './assets/tex_cartoons/det5_vin.gif',
              alt: 'Le vin: partitive, definite, indefinite',
              caption: 'Vous prenez du vin ? (some) · Le vin rouge est bon. (in general) · Voici un Médoc. (one bottle/type)',
              captionZh: '喝点酒吗（部分 du）· 红酒有益健康（总称 le）· 我们有一款 Médoc（一款酒 un）'
            },
            examples: [
              { fr: 'Édouard : Vous prenez du vin, n’est-ce pas ?', en: 'You are having (some) wine, aren’t you? (Partitive: unspecified portion)', zh: '您要喝点葡萄酒吧？（部分冠词：不确定数量）', tag: 'Partitive du' },
              { fr: 'Le vin rouge est bon pour la santé !', en: 'Red wine is healthy! (Definite: wine in general / whole concept)', zh: '红葡萄酒有益健康！（定冠词：整体概念）', tag: 'Definite le' },
              { fr: 'Nous avons un Beaujolais nouveau, un Chambertin, ou j’ai un excellent Médoc pour vous !', en: 'We have a Beaujolais nouveau, a Chambertin, or an excellent Médoc! (Indefinite: distinct wine-list items)', zh: '我们有一款博若莱新酒、一款香贝丹，还有一款很棒的梅多克！（不定冠词：酒单上的具体款）', tag: 'Indefinite un' }
            ],
            quickCheck: {
              prompt: 'Match "water" (eau, f.): "I drink water every day" vs. "I love water!"',
              promptZh: '对比这两句里的“水（eau，阴性元音开头）”：① 我喝些水 vs ② 我超爱水：',
              options: [
                'Je bois de l’eau. / J’adore l’eau !',
                'Je bois l’eau. / J’adore de l’eau !',
                'Je bois de la eau. / J’adore la eau !',
                'Je bois une eau. / J’adore du eau !'
              ],
              answerIdx: 0,
              explain: 'Drinking an undefined amount uses partitive "de l’eau"; preference verb "adorer" takes definite "l’eau"!',
              explainZh: '“喝些水”用部分冠词 de l’eau；而喜好动词 adorer 后永远用定冠词 l’eau！'
            }
          }
        ],
        drills: [
          {
            id: 'd27_d1',
            kind: 'choice',
            prompt: 'Which article form introduces a FEMININE mass noun starting with a consonant?',
            promptZh: '辅音开头的阴性不可数名词用哪个部分冠词？',
            options: ['de la', 'du', 'de l’', 'des'],
            answerIdx: 0,
            audio: 'de la viande',
            explain: 'Feminine consonant-initial mass noun → "de la" (e.g. "de la viande", "de la chance").',
            explainZh: '辅音开头阴性不可数名词用 "de la"。'
          },
          {
            id: 'd27_d2',
            kind: 'choice',
            prompt: 'Which sentence expresses "wine in GENERAL" (whole concept)?',
            promptZh: '下面哪句话是泛指“葡萄酒（这一整体概念）”？',
            options: ['Le vin rouge est bon pour la santé.', 'Vous prenez du vin ?', 'Nous avons un Médoc.', 'Je n’ai pas de vin.'],
            answerIdx: 0,
            audio: 'Le vin rouge est bon pour la santé.',
            explain: 'General truths use definite article "Le vin".',
            explainZh: '泛指整体概念用定冠词 "Le vin"。'
          },
          {
            id: 'd27_d3',
            kind: 'choice',
            prompt: 'Choose the correct partitive article before "eau" (f., starts with vowel):',
            promptZh: '给阴性元音名词 eau 选择正确的部分冠词：',
            options: ['de l’', 'de la', 'du', 'de le'],
            answerIdx: 0,
            audio: 'de l’eau',
            explain: 'Before any vowel or silent h (m. or f.), use "de l’": "de l’eau".',
            explainZh: '不论阴性阳性，元音或哑音 h 前的部分冠词统一写作 "de l’"。'
          },
          {
            id: 'd27_d4',
            kind: 'choice',
            prompt: 'Spot the mistake: "*Au petit déjeuner, je mange pain et confiture."',
            promptZh: '为什么 "*je mange pain et confiture" 在法语里不自然？',
            options: [
              'French cannot drop partitive articles — say "du pain et de la confiture".',
              'pain must be plural.',
              'mange should be bois.',
              'Nothing is missing.'
            ],
            answerIdx: 0,
            audio: 'Au petit déjeuner, je mange du pain et de la confiture.',
            explain: 'Unlike English ("I eat bread and jam"), French requires partitive articles: "du pain et de la confiture".',
            explainZh: '法语物质名词绝不能省略冠词，应说 "du pain et de la confiture"。'
          },
          {
            id: 'd27_d5',
            kind: 'fib',
            prompt: 'Fill du / de la / de l’: Joe-Bob mange ___ viande. (meat, f.)',
            promptZh: '填部分冠词（du / de la / de l’）：Joe-Bob 在吃肉（阴性）。',
            answers: ['de la'],
            hint: '"viande" is feminine.',
            audio: 'Joe-Bob mange de la viande.',
            explain: 'Feminine partitive → "de la viande".',
            explainZh: 'viande 是阴性，填 "de la"。'
          },
          {
            id: 'd27_d6',
            kind: 'fib',
            prompt: 'Fill du / de la / de l’: Édouard ajoute ___ ail dans la sauce. (garlic, m., vowel)',
            promptZh: '填部分冠词：Édouard 往酱汁里加了点蒜（元音开头）。',
            answers: ["de l'", 'de l’'],
            hint: '"ail" starts with a vowel.',
            audio: 'Édouard ajoute de l’ail dans la sauce.',
            explain: 'Before a vowel → "de l’ail".',
            explainZh: '元音开头用 "de l’"。'
          },
          {
            id: 'd27_d7',
            kind: 'fib',
            prompt: 'Fill du / de la / de l’: Nous avons ___ sorbet à l’ananas. (sorbet, m.)',
            promptZh: '填部分冠词：我们有菠萝雪葩（阳性）。',
            answers: ['du'],
            hint: '"sorbet" is masculine.',
            audio: 'Nous avons du sorbet à l’ananas.',
            explain: 'Masculine partitive → "du sorbet".',
            explainZh: 'sorbet 阳性，填 "du"。'
          },
          {
            id: 'd27_d8',
            kind: 'fib',
            prompt: 'Fill du / de la / de l’: Ils prennent ___ mousse au chocolat. (mousse, f.)',
            promptZh: '填部分冠词：他们点了巧克力慕斯（阴性）。',
            answers: ['de la'],
            hint: '"mousse" is feminine.',
            audio: 'Ils prennent de la mousse au chocolat.',
            explain: 'Feminine partitive → "de la mousse".',
            explainZh: 'mousse 阴性，填 "de la"。'
          },
          {
            id: 'd27_d9',
            kind: 'fib',
            prompt: 'Fill du / de la / de l’: Elle achète ___ fromage québécois. (m., -age)',
            promptZh: '填部分冠词：她买了点魁北克奶酪（-age 阳性）。',
            answers: ['du'],
            hint: '-age ending = masculine!',
            audio: 'Elle achète du fromage québécois.',
            explain: 'Masculine partitive → "du fromage".',
            explainZh: '-age 词尾阳性，填 "du"。'
          },
          {
            id: 'd27_d10',
            kind: 'fib',
            prompt: 'Contrast definite vs. partitive: J’aime ___ chocolat, donc je prends ___ chocolat chaud.',
            promptZh: '填入两空（喜好 vs 部分）：我喜欢巧克力（le），所以我来点热巧克力（du）。',
            answers: ['le / du'],
            hint: 'Preference verb (aimer) takes le; consuming some takes du.',
            audio: 'J’aime le chocolat, donc je prends du chocolat chaud.',
            explain: '"J’aime le chocolat" (general preference) vs. "je prends du chocolat chaud" (partitive portion).',
            explainZh: '好恶用 le（J’aime le chocolat），消费喝一点用 du（du chocolat chaud）。'
          }
        ],
        related: [
          { chapterId: 'ch2_determiners', pageId: 'det_2_8', label: '2.8 Partitive Negation, Crêpes & Review' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_11', label: '2.11 Expressions of Quantity' }
        ]
      },

      /* =========================================================
         PAGE 2.8: PARTITIVE ARTICLES — NEGATION, CONTRAST, CREPES DIALOGUE & TEX REVIEW
      ========================================================= */
      {
        id: 'det_2_8',
        code: '2.8',
        group: 'Partitive Articles (du, de la, de l’)',
        shortTitle: 'Partitive: Negation & Review',
        title: 'Partitive Articles (Part 2): Negative de, Contrast Exception, Crêpes Recipe & Tex Review',
        titleZh: '部分冠词（二）：否定变 de（对比例外）、做可丽饼配方对话与 Tex 12 题总测',
        estMin: 5,
        summary: 'Learn how negatives flatten du/de la/de l’/des to simple "de" (except direct positive contrasts like "du poulet, pas des escargots!"), read Tammy & Édouard’s crêpes dialogue, and finish all 12 Tex det5 drills!',
        summaryZh: '掌握否定句里部分冠词统一变 de/d’、以及“不是A而是B”强调对比时保留冠词的精细规律；精读可丽饼食谱对话并完成 Tex 原版 12 题。',
        cheatSummary: [
          { label: 'Negation → de / d’', rule: 'In negative sentences, du / de la / de l’ / des → de (or d’): pas de viande, jamais de café, plus de vin.', ruleZh: '否定句（ne... pas / jamais / plus）里，du / de la / de l’ / des 统统简化成 de（元音前 d’）。' },
          { label: 'Contrastive Exception', rule: 'Keep du / de la / de l’ / des in a negative ONLY when explicitly contrasting with the positive noun ("ce n’est pas de l’amitié, c’est de l’amour !", "du poulet, pas des escargots !").', ruleZh: '唯一不简化情况：“不是 A，而是 B” 对比强调时保留原冠词（如 pas des escargots !）。' }
        ],
        sections: [
          {
            id: 'part_neg',
            heading: '1. After Negatives (pas de, jamais de, plus de) + Contrast Exception',
            headingZh: '一、否定后的 de 规则 + “不是A而是B”对比例外',
            lead: 'In standard negative sentences, ALL partitive and indefinite articles (du, de la, de l’, des) flatten to simple de (or d’ before a vowel). Only ONE exception exists: when you negate something to contrast it directly with a positive noun ("not X, it’s Y!").',
            leadZh: '在常规否定句（pas / jamais / plus）后面，部分冠词（du, de la, de l’）与复数不定冠词（des）全部压平变成光杆 de 或 d’！唯有直接对比“不是这个而是那个”时才保留完整冠词：',
            cartoon: {
              src: './assets/tex_cartoons/det5_cafe.gif',
              alt: 'Tammy ne boit jamais de café',
              caption: 'Tex boit du café. ↔ Tammy ne boit jamais de café !',
              captionZh: '肯定：du café ↔ 否定：jamais de café！'
            },
            examples: [
              { fr: 'Joe-Bob mange de la viande. → Tammy ne mange pas de viande.', en: 'Joe-Bob eats meat. → Tammy does not eat meat.', zh: 'Joe-Bob 吃肉。→ Tammy 不吃肉。（de la → de）', tag: 'pas de' },
              { fr: 'Tex boit du café. → Tammy ne boit jamais de café.', en: 'Tex drinks coffee. → Tammy never drinks coffee.', zh: 'Tex 喝咖啡。→ Tammy 从不喝咖啡。（du → de）', tag: 'jamais de' },
              { fr: 'Il y a encore du vin. → Il n’y a plus de vin.', en: 'There is still wine. → There isn’t any wine left.', zh: '还有点酒。→ 没酒了。（du → de）', tag: 'plus de' },
              { fr: 'Contrast Exception: Entre Tex et Tammy, ce n’est pas de l’amitié, c’est de l’amour ! / Édouard sert du poulet, pas des escargots !', en: 'Between Tex & Tammy, it’s NOT friendship, it’s LOVE! / Chicken, NOT snails!', zh: '对比强调时保留原形：这不是友情，这是爱情！上的是鸡肉，不是蜗牛！', tag: 'Contrast Keep' }
            ],
            quickCheck: {
              prompt: 'Pick the negative counterpart of "Je prends de l’eau." (vowel-initial water):',
              promptZh: '把肯定句 "Je prends de l’eau."（我喝点水）变成常规否定句：',
              options: ["Je ne prends pas d’eau.", "Je ne prends pas de l’eau.", "Je ne prends pas de la eau.", "Je ne prends pas l’eau."],
              answerIdx: 0,
              explain: 'Partitive "de l’" flattens to "d’" after a regular negative: "Je ne prends pas d’eau."',
              explainZh: '常规否定后，de l’ 要进一步简化成 "d’"："Je ne prends pas d’eau."。'
            }
          },
          {
            id: 'part_crepes',
            heading: '2. Dialogue in Context: Tammy’s Crêpes Recipe (Food Partitives Everywhere!)',
            headingZh: '二、情景食谱对话：用部分冠词做一顿法式可丽饼',
            lead: 'Listen to how seamlessly indefinite plural (des œufs, des cèpes) and partitive (de la farine, du lait, du sel, de l’huile, du fromage râpé, du jambon, du cidre) work together—plus negative "pas de vin"!',
            leadZh: '在真实法语做饭场景里听听复数 des 和部分冠词 du / de la / de l’ 怎么自然配合（还有结尾的否定 pas de vin）：',
            dialogue: {
              title: 'Tammy est au téléphone avec Édouard',
              titleZh: 'Tammy 打电话向 Édouard 请教可丽饼做法',
              lines: [
                { speaker: 'Tammy', fr: 'Allô, Édouard ? Je reçois des amis ce soir. Je voudrais faire des crêpes, mais j’ai oublié la recette. Tu peux m’aider ?', en: 'Hello, Édouard? I’m having some friends over tonight and want to make crêpes, but I forgot the recipe. Can you help?', zh: '喂，Édouard？我今晚请朋友来家里，想做可丽饼，可我忘了配方。能帮我吗？' },
                { speaker: 'Édouard', fr: 'Rien de plus facile ! Tu mélanges de la farine et des œufs. Tu ajoutes ensuite du lait, du sel et de l’huile.', en: 'Nothing easier! Mix some flour and eggs. Then add milk, salt, and oil.', zh: '再简单不过了！把面粉和鸡蛋拌匀，再加牛奶、盐和油。' },
                { speaker: 'Édouard', fr: 'Quand la pâte est cuite, tu garnis la crêpe avec du fromage râpé, du jambon, ou des cèpes. Mais n’oublie pas Tammy, avec des crêpes, on ne boit pas de vin. Il faut boire du cidre !', en: 'When the batter is cooked, fill the crêpe with grated cheese, ham, or mushrooms. And don’t forget: with crêpes you don’t drink wine—you must drink cider!', zh: '饼煎好后放上刨丝奶酪、火腿或者牛肝菌。不过别忘了 Tammy，吃可丽饼不喝葡萄酒，得喝苹果酒（cidre）！' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'd28_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12 — Fill du, de la, or de l’: Tex : Je voudrais ___ vin rouge.',
            promptZh: 'Tex 第 1 题：我想要些红酒（vin 阳性）。',
            options: ['du', 'de la', 'de l’', 'des'],
            answerIdx: 0,
            audio: 'Je voudrais du vin rouge.',
            explain: '"vin" is masculine singular → "du vin rouge".',
            explainZh: 'vin 是阳性单数，用 "du"。'
          },
          {
            id: 'd28_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Tammy : Je vais prendre ___ soupe aux oignons. (f.)',
            promptZh: 'Tex 第 2 题：我要点些法式洋葱汤（soupe 阴性）。',
            options: ['de la', 'du', 'de l’', 'des'],
            answerIdx: 0,
            audio: 'Je vais prendre de la soupe aux oignons.',
            explain: '"soupe" is feminine → "de la soupe aux oignons".',
            explainZh: 'soupe 为阴性，选 "de la"。'
          },
          {
            id: 'd28_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Tex : Tammy, est-ce qu’il reste ___ omelette ? (starts with o-)',
            promptZh: 'Tex 第 3 题：Tammy，还剩点煎蛋卷吗（omelette 元音开头）？',
            options: ['de l’', 'de la', 'du', 'd’'],
            answerIdx: 0,
            audio: 'Est-ce qu’il reste de l’omelette ?',
            explain: 'Affirmative question before vowel o- → "de l’omelette".',
            explainZh: '肯定疑问句，元音前部分冠词用 "de l’"。'
          },
          {
            id: 'd28_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Tammy : Je vais acheter ___ pain. (m.)',
            promptZh: 'Tex 第 4 题：我去买点面包（pain 阳性）。',
            options: ['du', 'de la', 'de l’', 'des'],
            answerIdx: 0,
            audio: 'Je vais acheter du pain.',
            explain: '"pain" is masculine → "du pain".',
            explainZh: 'pain 为阳性，选 "du"。'
          },
          {
            id: 'd28_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Fill du / de la / de l’: Tammy : Tex, je vais boire ___ eau.',
            promptZh: 'Tex 第 5 题（填部分冠词）：我要喝点水（eau 元音开头）。',
            answers: ["de l'", 'de l’'],
            hint: '"eau" starts with a vowel.',
            audio: 'Je vais boire de l’eau.',
            explain: 'Before vowel → "de l’eau".',
            explainZh: 'eau 元音开头，填 "de l’"。'
          },
          {
            id: 'd28_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Fill du / de la / de l’: Tammy : Je vais faire ___ crème brûlée (fem.).',
            promptZh: 'Tex 第 6 题（填部分冠词）：我要做焦糖布蕾（阴性）。',
            answers: ['de la'],
            hint: 'Feminine mass noun.',
            audio: 'Je vais faire de la crème brûlée.',
            explain: '"crème" is feminine → "de la crème brûlée".',
            explainZh: '阴性填 "de la"。'
          },
          {
            id: 'd28_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Fill du / de la / de l’: Joe-Bob boit ___ bière. (f.)',
            promptZh: 'Tex 第 7 题（填部分冠词）：Joe-Bob 在喝啤酒（bière 阴性）。',
            answers: ['de la'],
            hint: 'Recall "la bière" from Chapter 1!',
            audio: 'Joe-Bob boit de la bière.',
            explain: '"bière" is feminine → "de la bière".',
            explainZh: 'bière 是阴性（la bière），因此部分冠词用 "de la"。'
          },
          {
            id: 'd28_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Fill du / de la / de l’: Corey : Tex, tu as ___ pesticide (masc.) ?',
            promptZh: 'Tex 第 8 题（填部分冠词）：Tex，你有杀虫剂吗（阳性）？',
            answers: ['du'],
            hint: '"pesticide" is masculine.',
            audio: 'Tex, tu as du pesticide ?',
            explain: '"pesticide" is masculine → "du pesticide".',
            explainZh: '阳性填 "du"。'
          },
          {
            id: 'd28_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Fill du / de la / de l’: Tammy : Tex, tu fais ___ sport aujourd’hui ? (m.)',
            promptZh: 'Tex 第 9 题（填部分冠词）：Tex，你今天做运动吗（faire + sport 阳性）？',
            answers: ['du'],
            hint: '"faire + sport" uses masculine partitive.',
            audio: 'Tex, tu fais du sport aujourd’hui ?',
            explain: 'Activities with "faire" take the partitive: "faire du sport".',
            explainZh: 'faire + 运动项目用部分冠词，sport 阳性 → "du"。'
          },
          {
            id: 'd28_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — Fill du / de la / de l’: Tex : Tammy, tu fais ___ aérobic aujourd’hui ? (vowel)',
            promptZh: 'Tex 第 10 题（填部分冠词）：Tammy，你今天练有氧操吗（aérobic 元音开头）？',
            answers: ["de l'", 'de l’'],
            hint: 'Before vowel a-!',
            audio: 'Tammy, tu fais de l’aérobic aujourd’hui ?',
            explain: '"faire de l’aérobic" uses "de l’" before vowel a-.',
            explainZh: '元音开头，填 "de l’"。'
          },
          {
            id: 'd28_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Fill du / de la / de l’: Bette prend ___ thon le matin. (tuna, m.)',
            promptZh: 'Tex 第 11 题（填部分冠词）：Bette 早上吃金枪鱼（thon 阳性）。',
            answers: ['du'],
            hint: '"thon" is masculine.',
            audio: 'Bette prend du thon le matin.',
            explain: '"thon" is masculine → "du thon".',
            explainZh: 'thon 阳性，填 "du"。'
          },
          {
            id: 'd28_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — Fill du / de la / de l’: Fiona a ___ chance ("luck", fem.).',
            promptZh: 'Tex 第 12 题（填部分冠词）：Fiona 运气很好（chance 阴性）。',
            answers: ['de la'],
            hint: '"avoir ___ chance" = to be lucky!',
            audio: 'Fiona a de la chance.',
            explain: 'Remember "-ance" ending is feminine → "avoir de la chance"!',
            explainZh: '-ance 阴性，固定表达 "avoir de la chance"（走运），填 "de la"。'
          }
        ],
        related: [
          { chapterId: 'ch2_determiners', pageId: 'det_2_7', label: '2.7 Partitive Basics' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_11', label: '2.11 Expressions of Quantity (beaucoup de)' }
        ]
      },

      /* =========================================================
         PAGE 2.9: POSSESSIVE DETERMINERS (MON, MA, MES... LEUR, LEURS)
      ========================================================= */
      {
        id: 'det_2_9',
        code: '2.9',
        group: 'Possessive Determiners',
        shortTitle: 'Possessives: mon, ma, mes...',
        title: 'Possessive Determiners (mon/ma/mes … leur/leurs) & the Feminine Vowel Rule',
        titleZh: '物主限定词（我的/你的/他·她的/我们的/你们的/他们的）与阴性元音转 mon/ton/son',
        estMin: 5,
        summary: 'Master the complete 6-owner possessive table, learn why "sa" can mean his OR her depending on the noun’s gender, apply the crucial vowel rule (mon amie), and complete all 12 Tex det6 drills!',
        summaryZh: '背熟六组物主限定词（永远只看“被拥有物”的阴阳性，不看主人性别！），攻克阴性元音前 ma→mon 高频考点（mon amie），并完成 Tex 12 题。',
        cheatSummary: [
          { label: 'Agree With the Thing Owned!', rule: 'French possessives match the NOUN OWNED, not the owner: mon/ton/son (m.sg.), ma/ta/sa (f.sg.), mes/tes/ses (pl.); notre/votre/leur (sg.), nos/vos/leurs (pl.). So "sa famille" can mean HIS family OR HER family!', ruleZh: '物主词看后面“东西/人”的性数，不看主人男女！所以儿子、女儿的“家（la famille）”都用 sa famille！' },
          { label: 'Feminine Vowel Trap + Liaison', rule: 'Replace ma/ta/sa with mon/ton/son before ANY feminine noun starting with a vowel or silent h: mon amie (NOT *ma amie*), ton histoire, son université. Always pronounce /z/ liaison after mes/tes/ses/nos/vos/leurs + vowel!', ruleZh: '重要规律：阴性名词以元音/哑音 h 开头时，把 ma/ta/sa 换成 mon/ton/son（如 mon amie），为了避免元音连读难听。' }
        ],
        sections: [
          {
            id: 'poss_table',
            heading: '1. Complete Table & Agreement Rule (Look at the Noun, Not the Owner!)',
            headingZh: '一、完整对照表与“只看物不看人”核心铁律',
            lead: 'In English, "his" vs. "her" depends on the owner’s gender. In French, "son" vs. "sa" depends ONLY on the gender of the noun that follows! Because "famille" is feminine, Tex introduces HIS family as "sa famille"—and because "frère" is masculine, Rita also says "son frère" for HER brother!',
            leadZh: '英语区分 his 和 her 看“主人是谁”，法语则完全不看主人是谁，只看后面的“拥有物”是阳性还是阴性、单数还是复数！因此 Tex（男）说“他的家庭”用阴性 sa famille；女生说“她的哥哥”也用阳性 son frère！',
            cartoon: {
              src: './assets/tex_cartoons/det6_famille.gif',
              alt: 'Tex présente sa famille',
              caption: 'Tex présente SA famille (f.): mon frère, ma sœur, ses enfants, leur chien Fido, notre famille.',
              captionZh: 'Tex 介绍“他的”大家庭：虽然主人 Tex 是男的，但 famille 是阴性所以用 SA famille！'
            },
            table: {
              headers: ['Owner', 'Masc. sg.', 'Fem. sg. (consonant)', 'Plural (m. & f.)', 'Meaning'],
              rows: [
                { cols: ['je (I)', 'mon', 'ma (mon + vowel)', 'mes', 'my'], audio: 'mon frère, ma sœur, mes enfants' },
                { cols: ['tu (you sg.)', 'ton', 'ta (ton + vowel)', 'tes', 'your (familiar)'], audio: 'ton livre, ta visite, tes amis' },
                { cols: ['il / elle / on', 'son', 'sa (son + vowel)', 'ses', 'his / her / its'], audio: 'son père, sa famille, ses promesses' },
                { cols: ['nous (we)', 'notre', 'notre', 'nos', 'our'], audio: 'notre famille, nos amis' },
                { cols: ['vous (you)', 'votre', 'votre', 'vos', 'your (formal / pl.)'], audio: 'votre visite, vos amies' },
                { cols: ['ils / elles', 'leur', 'leur', 'leurs', 'their'], audio: 'leur chien, leurs parents' }
              ]
            },
            examples: [
              { fr: 'Tex présente sa famille : Voici mon frère Trey, ma sœur Rita avec ses enfants et leur chien Fido. Notre famille est formidable !', en: 'Tex introduces his family: Here is my brother Trey, my sister Rita with her children and their dog Fido. Our family is great!', zh: 'Tex 介绍家人：这是我哥哥 Trey，我妹妹 Rita 和她的孩子，还有他们的狗 Fido。我们的家太棒了！', tag: 'Possessive Mix' }
            ]
          },
          {
            id: 'poss_liaison',
            heading: '2. Feminine Vowel Rule (ma/ta/sa → mon/ton/son) & Plural Liaison',
            headingZh: '二、阴性元音转 mon/ton/son 规则 + 复数 /z/ 联诵',
            lead: 'French hates awkward vowel clashes like "*ma amie*". So before ANY feminine singular word starting with a vowel or silent h (amie, université, église, histoire), replace ma, ta, sa with mon, ton, son! Also make sure to pronounce the /z/ liaison after mes, tes, ses, nos, vos, leurs before vowels.',
            leadZh: '法语不喜欢两个元音撞车（*ma amie* 很难连读）。只要阴性名词以元音或哑音 h 开头（如 amie, université, histoire），物主词必须借用阳性的 mon / ton / son！另记得 mes / ses / nos / vos / leurs 遇元音要读 /z/ 联诵：',
            cartoon: {
              src: './assets/tex_cartoons/det6_ami.gif',
              alt: 'Tammy, mon amie',
              caption: 'Voici Tammy, MON amie (f. + vowel!), et ses amies Bette et Fiona.',
              captionZh: 'amie 是阴性但以元音开头 → 必须用 mon amie，不能说 *ma amie*！'
            },
            examples: [
              { fr: 'Tex : Voici Tammy, mon amie, et ses amies Bette et Fiona, c’est-à-dire nos amies.', en: 'Here is Tammy, my (female) friend, and her (female) friends Bette and Fiona, that is to say, our friends.', zh: '这是 Tammy，我的女性朋友，还有她的朋友们 Bette 和 Fiona，也就是我们的朋友。', tag: 'mon amie /z/' }
            ],
            dialogue: {
              title: 'Dialogue: Tammy est furieuse avec Bette',
              titleZh: '小对话：Tammy 气坏了',
              lines: [
                { speaker: 'Tammy', fr: 'Tex n’est plus mon ami ! Il a complètement oublié mon cadeau et notre anniversaire ! Il a oublié toutes ses promesses ! Quel nul !', en: 'Tex isn’t my friend anymore! He completely forgot my present and our anniversary! He forgot all his promises. What a loser!', zh: 'Tex 再也不是我朋友了！他把我的礼物和我们的纪念日全忘了！连他自己所有承诺都忘了！真是个大笨蛋！' }
              ]
            },
            quickCheck: {
              prompt: 'How do you say "his university" ("université" is feminine, starts with u-)?',
              promptZh: '怎么说“他的大学”（université 阴性、元音 u 开头）？',
              options: ['son université', 'sa université', 'ses université', 'leur universités'],
              answerIdx: 0,
              explain: 'Because "université" starts with vowel u-, feminine "sa" switches to "son" for smooth pronunciation: "son université"!',
              explainZh: '虽然 université 是阴性，但因元音开头，sa 必须改用 "son"："son université"！'
            }
          }
        ],
        drills: [
          {
            id: 'd29_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12 — Fill the possessive determiner: Tex : ___ famille est intéressante. ("my" — famille f.sg.)',
            promptZh: 'Tex 第 1 题：我的家人很有趣（my + 阴性 famille）。',
            options: ['Ma', 'Mon', 'Mes', 'Sa'],
            answerIdx: 0,
            audio: 'Ma famille est intéressante.',
            explain: '"famille" is feminine singular starting with consonant f- → "Ma famille".',
            explainZh: 'famille 是辅音开头的阴性单数，“我的”用 "Ma"。'
          },
          {
            id: 'd29_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Tammy : Tex, ___ neveux sont ici. ("your" familiar — plural)',
            promptZh: 'Tex 第 2 题：Tex，你的侄子们都在这儿呢（your + 复数）。',
            options: ['tes', 'ton', 'ta', 'vos'],
            answerIdx: 0,
            audio: 'Tex, tes neveux sont ici.',
            explain: 'Familiar "your" (Tammy talking to Tex) + plural "neveux" → "tes neveux".',
            explainZh: '熟人对话用 tu 系列，复数侄子们用 "tes"。'
          },
          {
            id: 'd29_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Tex et Tammy : Bette, Corey et Joe-Bob sont ___ amis. ("our" — plural)',
            promptZh: 'Tex 第 3 题：Tex 和 Tammy 说“他们是我们的朋友”（our + 复数）。',
            options: ['nos', 'notre', 'mes', 'leurs'],
            answerIdx: 0,
            audio: 'Bette, Corey et Joe-Bob sont nos amis.',
            explain: '"our" + plural "amis" → "nos amis" (with /z/ liaison!).',
            explainZh: '“我们的”加复数用 "nos"（nos_amis 读 /z/ 联诵）。'
          },
          {
            id: 'd29_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Tammy et Tex : ___ amour est éternel. ("our" — singular)',
            promptZh: 'Tex 第 4 题：Tammy 和 Tex 说“我们的爱是永恒的”（our + 单数）。',
            options: ['Notre', 'Nos', 'Mon', 'Leur'],
            answerIdx: 0,
            audio: 'Notre amour est éternel.',
            explain: '"our" + singular "amour" → "Notre amour".',
            explainZh: '“我们的”加单数名词用 "Notre"。'
          },
          {
            id: 'd29_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Fill the possessive: Paw-Paw : Bonjour Tex, bonjour Tammy ! ___ visite me fait plaisir. ("your" plural — visite f.sg.)',
            promptZh: 'Tex 第 5 题（Paw-Paw 对两个人说）：你们的来访（单数）让我很开心。',
            answers: ['Votre', 'votre'],
            hint: 'Addressing TWO people (Tex + Tammy) + singular "visite".',
            audio: 'Votre visite me fait plaisir.',
            explain: '"your" (addressing multiple people: vous) + singular "visite" → "Votre visite".',
            explainZh: '面对两个人（vous），单数用 "Votre"。'
          },
          {
            id: 'd29_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Fill the possessive: Tammy : Tex oublie souvent ___ livre. ("his" — livre m.sg.)',
            promptZh: 'Tex 第 6 题：Tex 经常忘带他的书（his + 阳性单数 livre）。',
            answers: ['son'],
            hint: 'his/her + masculine singular.',
            audio: 'Tex oublie souvent son livre.',
            explain: '"livre" is masculine singular → "son livre".',
            explainZh: 'livre 为阳性单数，“他的”填 "son"。'
          },
          {
            id: 'd29_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Fill the possessive: Tammy : Ah Tex, ___ amour ! ("my" — amour is m.sg.)',
            promptZh: 'Tex 第 7 题：啊 Tex，我的爱人！（my + 单数 amour）',
            answers: ['mon'],
            hint: '"my" + singular vowel word.',
            audio: 'Ah Tex, mon amour !',
            explain: '"mon amour" = my love!',
            explainZh: '常用称呼 "mon amour"！'
          },
          {
            id: 'd29_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Feminine Vowel Rule!: Tex : Tammy est ___ amie. ("my" — amie is f.sg., starts with a-!)',
            promptZh: 'Tex 第 8 题（阴性元音重点题）：Tammy 是我的女朋友（amie 阴性，但元音开头！）。',
            answers: ['mon'],
            hint: 'NEVER *ma amie*! Vowel rule shifts ma → mon!',
            audio: 'Tammy est mon amie.',
            explain: 'Because "amie" begins with vowel a-, "ma" shifts to "mon": "mon amie".',
            explainZh: 'amie 以元音 a 开头，禁止说 *ma amie*，必须换成 "mon"！'
          },
          {
            id: 'd29_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Fill the possessive: Tammy : Tex, Trey et Rita ? ___ grand-père est adorable. ("their" — sg.)',
            promptZh: 'Tex 第 9 题：Tex、Trey 和 Rita（他们三兄妹）的爷爷很可爱（their + 单数）。',
            answers: ['Leur', 'leur'],
            hint: '3 owners sharing 1 grandfather → singular "leur" (no -s!).',
            audio: 'Leur grand-père est adorable.',
            explain: 'Multiple owners ("their") + ONE singular grandfather → "Leur grand-père" (no -s!).',
            explainZh: '多个主人共享一个爷爷，leur 保持单数不加 -s："Leur grand-père"。'
          },
          {
            id: 'd29_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — Fill the possessive: Corey et Joe-Bob aiment Tammy et Tex. Ils sont ___ amis. ("their" — plural)',
            promptZh: 'Tex 第 10 题：Corey 和 Joe-Bob 很喜欢他们俩。他们（两对人）是好朋友（their + 复数）。',
            answers: ['leurs'],
            hint: '"their" + plural "amis" → add -s!',
            audio: 'Ils sont leurs amis.',
            explain: 'Because "amis" is plural, "leur" takes an -s: "leurs amis".',
            explainZh: '后面的朋友是复数 amis，因此 leur 必须加 -s："leurs amis"。'
          },
          {
            id: 'd29_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Fill the possessive: Tammy : J’aime la sœur de Tex, mais ___ frère est bizarre. ("his" — m.sg.)',
            promptZh: 'Tex 第 11 题：我喜欢 Tex 的妹妹，但他的哥哥很怪（his + 阳性单数 frère）。',
            answers: ['son'],
            hint: 'his + masculine "frère".',
            audio: 'J’aime la sœur de Tex, mais son frère est bizarre.',
            explain: '"frère" is masculine singular → "son frère".',
            explainZh: 'frère 为阳性单数，“他的”填 "son"。'
          },
          {
            id: 'd29_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — Agreement Trap!: Bette : La famille de Tammy aime Tex, surtout ___ parents. ("her" — plural)',
            promptZh: 'Tex 第 12 题（阴阳性与单复数判断）：Tammy 的家人喜欢 Tex，尤其是她的父母（plural）。',
            answers: ['ses'],
            hint: 'One owner (Tammy: son/sa/ses) + PLURAL "parents"!',
            audio: 'La famille de Tammy aime Tex, surtout ses parents.',
            explain: 'One person (Tammy) + plural "parents" → "ses parents"!',
            explainZh: '主人只有 Tammy 一人（单数主人），拥有的 parents 是复数，因此填 "ses"！'
          }
        ],
        related: [
          { chapterId: 'ch2_determiners', pageId: 'det_2_10', label: '2.10 Demonstratives: ce, cet, cette, ces' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_4', label: '2.4 Body Parts (Why NOT mon/ma/mes)' }
        ]
      },

      /* =========================================================
         PAGE 2.10: DEMONSTRATIVE DETERMINERS (CE, CET, CETTE, CES + -CI / -LÀ)
      ========================================================= */
      {
        id: 'det_2_10',
        code: '2.10',
        group: 'Demonstrative Determiners',
        shortTitle: 'Demonstratives: ce, cet, cette, ces',
        title: 'Demonstrative Determiners (ce, cet, cette, ces) & -ci / -là',
        titleZh: '指示限定词：ce, cet, cette, ces 的 4 种形式与近指 -ci / 远指 -là',
        estMin: 4,
        summary: 'Point out people and objects accurately using ce, cet (masc. before vowel/silent h!), cette (fem.), and ces (plural), distinguish near/far with -ci vs. -là, and finish all 12 Tex det7 drills!',
        summaryZh: '精准区分 ce（阳）、cet（阳性元音/哑音h）、cette（阴）和 ces（复数，读 /z/ 联诵），学会在名词后挂 -ci（这）和 -là（那）作对比，并完成 Tex 原版 12 题。',
        cheatSummary: [
          { label: '4 Demonstrative Forms', rule: 'ce (m.sg. consonant: ce tatou) · cet (m.sg. vowel / silent h: cet écureuil, cet homme) · cette (f.sg.: cette chatte, cette étoile) · ces (all plurals: ces tatous, ces_écureuils with /z/).', ruleZh: '四种写法：ce（阳单辅音）、cet（阳单元音/哑音h）、cette（所有阴单）、ces（所有复数，元音前读 /z/ 联诵）。' },
          { label: '-ci (Near) vs. -là (Far)', rule: 'Both "ce/cette/ces" mean "this" or "that". Add -ci after the noun for "this (right here)" and -là for "that (over there)": cette étoile-ci vs. ces étoiles-là.', ruleZh: 'ce 系列本身可译“这”也可译“那”。需要强调对比时，名词后加 -ci 表近（这），加 -là 表远（那）。' }
        ],
        sections: [
          {
            id: 'dem_forms',
            heading: '1. The 4 Forms: Watch Out for Masculine Vowel "cet"!',
            headingZh: '一、四种形式（重点盯住阳性元音前的 cet！）',
            lead: 'Demonstrative determiners ("this / that / these / those") point out someone or something you can see or refer to in conversation. Notice the special masculine form "cet" before a vowel or silent h—whereas feminine is ALWAYS "cette" whether vowel or consonant!',
            leadZh: '指示限定词（这个 / 那个 / 这些 / 那些）也必须跟着名词的阴阳性单复数走。重点记这个坑：阳性单数遇到元音或哑音 h，ce 会变成带 t 的 "cet"（注意读音和阴性 cette 差不多，但拼写只有 1 个 t！）。',
            cartoon: {
              src: './assets/tex_cartoons/det7_bassin.gif',
              alt: 'Ce bassin, cette piscine',
              caption: 'Ce bassin (m.), c’est Barton Springs. Cette piscine (f.) s’appelle Deep Eddy.',
              captionZh: '这个泳池（阳 ce）· 这座泳池（阴 cette）。'
            },
            table: {
              headers: ['Gender & Number', 'Form', 'Examples (Listen!)'],
              rows: [
                { cols: ['Masc. sg. + consonant', 'ce', 'ce tatou, ce maillot, ce week-end'], audio: 'ce tatou, ce matin' },
                { cols: ['Masc. sg. + vowel / silent h', 'cet', 'cet écureuil, cet été, cet escargot, cet homme'], audio: 'cet écureuil, cet été, cet animal' },
                { cols: ['Fem. sg. (always!)', 'cette', 'cette chatte, cette couleur, cette après-midi, cette étoile'], audio: 'cette chatte, cette couleur' },
                { cols: ['Plural (m. & f.)', 'ces', 'ces tatous, ces écureuils (/z/ liaison!), ces enfants'], audio: 'ces tatous, ces écureuils' }
              ]
            }
          },
          {
            id: 'dem_ci_la',
            heading: '2. Distinguishing "This" (-ci) vs. "That" (-là) + Shopping Dialogue',
            headingZh: '二、如何区分“这一个”和“那一个”：后缀 -ci 与 -là',
            lead: 'By itself, "ce maillot" can mean either "this bathing suit" or "that bathing suit". When you compare two items, attach -ci ("ici" = here) to the closer one and -là ("là" = there) to the farther one!',
            leadZh: '平时 ce / cette / ces 既能指“这”，也能指“那”。当面前摆着两个东西需要比一比时，在近的那个词后面连字符加 -ci，在远的那个词后面加 -là：',
            cartoon: {
              src: './assets/tex_cartoons/det7_bikini.gif',
              alt: 'Ce maillot-ci ou ce bikini ?',
              caption: 'Qu’est-ce que tu penses de ce maillot-ci ? Et ce bikini ?',
              captionZh: 'Tammy 试衣：你觉得这件泳衣怎么样？那件比基尼呢？'
            },
            examples: [
              { fr: 'Tex : Tu vois Tammy, cette étoile-ci s’appelle Vénus. Mais ces étoiles-là, c’est la Voie lactée.', en: 'See Tammy, this star here is called Venus. But those stars over there are the Milky Way.', zh: '你看 Tammy，眼前这颗星叫金星，而那边那些星星是银河。', tag: '-ci vs. -là' }
            ],
            dialogue: {
              title: 'Dialogue: Tex et Tammy chez J.C. Penney',
              titleZh: '购物对话：Tammy 挑泳衣，Tex 吐槽时尚品味',
              lines: [
                { speaker: 'Tammy', fr: 'Qu’est-ce que tu penses de ce maillot-ci ?', en: 'What do you think of this bathing suit?', zh: '你觉得手里这件泳衣怎么样？' },
                { speaker: 'Tex', fr: 'Ah non ! Je n’aime pas du tout cette couleur.', en: 'Oh no! I don’t like this color at all.', zh: '噢不！我一点也不喜欢这个颜色。' },
                { speaker: 'Tammy', fr: 'Et ce bikini ? Ce sera parfait pour cet été. Tu ne trouves pas ?', en: 'And this bikini? It’ll be perfect for this summer, don’t you think?', zh: '那这件比基尼呢？这个夏天穿最完美了，你不觉得吗？' },
                { speaker: 'Tex', fr: 'Quelle horreur ! Ce tissu est complètement démodé !', en: 'How awful! This fabric is completely out of style!', zh: '天哪太吓人了！这种布料完全过时啦！' },
                { speaker: 'Tammy', fr: 'Mais Tex, tu n’as aucun goût ! Tu crois que ce vieux béret que tu portes est à la mode ?', en: 'Tex, you have zero taste! You think that old beret you’re wearing is fashionable?', zh: 'Tex 你才毫无品味呢！你以为你头上戴的那顶旧贝雷帽很时髦吗？' }
              ]
            },
            quickCheck: {
              prompt: 'Contrast: "this summer" (été, m. vowel) vs. "this winter" (hiver, m. silent h) vs. "this autumn" (automne, m. vowel):',
              promptZh: '四季中“这个夏天 / 这个冬天 / 这个秋天”都以元音或哑音 h 开头且全是阳性，它们前面全用：',
              options: ['cet été / cet hiver / cet automne', 'ce été / ce hiver / ce automne', 'cette été / cette hiver / cette automne', 'ces été / ces hiver / ces automne'],
              answerIdx: 0,
              explain: 'All three seasons are masculine singular starting with a vowel or silent h → "cet été, cet hiver, cet automne"!',
              explainZh: '夏、冬、秋全部是阳性单数且元音/哑音 h 开头，因此一律用 "cet"！'
            }
          }
        ],
        drills: [
          {
            id: 'd210_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12 — Fill ce, cet, cette, or ces: Tex : Tammy, tu as vu le journal ___ matin ? (matin m.sg.)',
            promptZh: 'Tex 第 1 题：今天早上（matin 阳性单数辅音开头）你看到报纸了吗？',
            options: ['ce', 'cet', 'cette', 'ces'],
            answerIdx: 0,
            audio: 'Tu as vu le journal ce matin ?',
            explain: '"matin" is masculine singular starting with consonant m- → "ce matin".',
            explainZh: '阳性单数辅音开头用 "ce"：ce matin。'
          },
          {
            id: 'd210_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Tammy : Tex est beau ! Je suis folle de ___ animal ! (m.sg., starts with a-)',
            promptZh: 'Tex 第 2 题：我爱死这只动物了（animal 阳性单数、元音开头！）。',
            options: ['cet', 'ce', 'cette', 'ces'],
            answerIdx: 0,
            audio: 'Je suis folle de cet animal !',
            explain: '"animal" is masculine singular starting with a vowel → "cet animal"!',
            explainZh: '阳性单数 + 元音开头必须用带 t 的 "cet"：cet animal！'
          },
          {
            id: 'd210_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Corey : Qui est ___ jolie fille ? (f.sg.)',
            promptZh: 'Tex 第 3 题：这个漂亮的女孩是谁（阴性单数）？',
            options: ['cette', 'ce', 'cet', 'ces'],
            answerIdx: 0,
            audio: 'Qui est cette jolie fille ?',
            explain: 'Feminine singular → "cette jolie fille".',
            explainZh: '阴性单数用 "cette"。'
          },
          {
            id: 'd210_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Édouard : Que faites-vous ___ après-midi ? (can be m. or f., starts with a-!)',
            promptZh: 'Tex 第 4 题：今天下午你们干什么（après-midi 可作阳性也可作阴性，最稳妥用 cet 或 cette）：',
            options: ['cet (or cette)', 'ce', 'ces'],
            answerIdx: 0,
            audio: 'Que faites-vous cet après-midi ?',
            explain: '"après-midi" can be treated as masculine ("cet après-midi") or feminine ("cette après-midi") — never "ce"!',
            explainZh: 'après-midi 阴阳性皆可，但因元音开头，阳性用 cet、阴性用 cette，绝不能用 ce！'
          },
          {
            id: 'd210_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Fill ce / cet / cette / ces: Paw-Paw : ___ enfants sont naïfs ! (plural)',
            promptZh: 'Tex 第 5 题：这些孩子太天真了（复数）！',
            answers: ['Ces', 'ces'],
            hint: 'Plural demonstrative (with /z/ liaison before enfants!).',
            audio: 'Ces enfants sont naïfs !',
            explain: 'Plural demonstrative is always "Ces".',
            explainZh: '复数统一用 "Ces"（记得与 enfants 读 /z/ 联诵）。'
          },
          {
            id: 'd210_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Fill ce / cet / cette / ces: Tammy : ___ bonbons sont délicieux ! (plural)',
            promptZh: 'Tex 第 6 题：这些糖果好好吃（复数）！',
            answers: ['Ces', 'ces'],
            hint: 'Plural.',
            audio: 'Ces bonbons sont délicieux !',
            explain: 'Plural → "Ces bonbons".',
            explainZh: '复数用 "Ces"。'
          },
          {
            id: 'd210_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Fill ce / cet / cette / ces: Édouard : Hmm... ___ glace au chocolat est très bonne. (f.sg.)',
            promptZh: 'Tex 第 7 题：嗯……这杯巧克力冰淇淋真棒（bonne 提示阴性）。',
            answers: ['cette', 'Cette'],
            hint: 'Notice feminine "très bonne"!',
            audio: 'Cette glace au chocolat est très bonne.',
            explain: '"glace" is feminine singular → "cette glace".',
            explainZh: 'glace 为阴性，填 "cette"。'
          },
          {
            id: 'd210_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Fill ce / cet / cette / ces: Tex : ___ week-end, Tammy et moi allons à San Antonio. (m.sg.)',
            promptZh: 'Tex 第 8 题：这个周末（week-end 阳性）我和 Tammy 去圣安东尼奥。',
            answers: ['Ce', 'ce'],
            hint: '"week-end" is masculine singular starting with consonant w-.',
            audio: 'Ce week-end, Tammy et moi allons à San Antonio.',
            explain: '"week-end" is masculine singular → "Ce week-end".',
            explainZh: 'week-end 阳性单数辅音开头，填 "Ce"。'
          },
          {
            id: 'd210_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Fill ce / cet / cette / ces: Bette : Tex, que penses-tu de ___ mini-jupe (fem.) ?',
            promptZh: 'Tex 第 9 题：Tex，你觉得这条迷你裙（阴性）怎么样？',
            answers: ['cette'],
            hint: 'Feminine singular.',
            audio: 'Tex, que penses-tu de cette mini-jupe ?',
            explain: '"mini-jupe" is feminine singular → "cette mini-jupe".',
            explainZh: '阴性单数，填 "cette"。'
          },
          {
            id: 'd210_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — Fill ce / cet / cette / ces: Tammy : ___ escargot est snob. (m.sg., starts with e-!)',
            promptZh: 'Tex 第 10 题：这只蜗牛（阳性、元音 e 开头！）好势利眼。',
            answers: ['Cet', 'cet'],
            hint: 'Masculine singular starting with vowel e-!',
            audio: 'Cet escargot est snob.',
            explain: '"escargot" is masculine singular starting with e- → "Cet escargot"!',
            explainZh: 'escargot 阳性且元音开头，填 "Cet"！'
          },
          {
            id: 'd210_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Fill ce / cet / cette / ces: Tammy : ___ Français sont vraiment sexy. (plural)',
            promptZh: 'Tex 第 11 题：这些法国男生真是性感（plural）！',
            answers: ['Ces', 'ces'],
            hint: 'Notice plural verb "sont"!',
            audio: 'Ces Français sont vraiment sexy.',
            explain: 'Plural verb "sont" confirms plural → "Ces Français".',
            explainZh: '动词 sont 提示复数，填 "Ces"。'
          },
          {
            id: 'd210_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — Fill ce / cet / cette / ces: Tammy : Tex, ___ cadeau est pour toi. (m.sg., -eau)',
            promptZh: 'Tex 第 12 题：Tex，这份礼物（-eau 阳性）是给你的。',
            answers: ['ce'],
            hint: '-eau ending = masculine singular!',
            audio: 'Tex, ce cadeau est pour toi.',
            explain: '"cadeau" is masculine singular → "ce cadeau".',
            explainZh: '-eau 词尾为阳性单数，填 "ce"。'
          }
        ],
        related: [
          { chapterId: 'ch2_determiners', pageId: 'det_2_1', label: '2.1 Intro to Determiners' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_11', label: '2.11 Expressions of Quantity' }
        ]
      },

      /* =========================================================
         PAGE 2.11: EXPRESSIONS OF QUANTITY (BEAUCOUP DE, MEASURES, CONTRACTION DU/DES)
      ========================================================= */
      {
        id: 'det_2_11',
        code: '2.11',
        group: 'Quantity & Measures',
        shortTitle: 'Quantity: beaucoup de & Measures',
        title: 'Expressions of Quantity (beaucoup de, assez de), Containers & Specific du / des',
        titleZh: '数量表达：beaucoup de 副词（否定不变）、容器度量表与特指收缩 du/des',
        estMin: 5,
        summary: 'Learn adverbial quantities (beaucoup de, assez de, trop de, peu de...) that always take bare "de/d’", master Tex’s 16 kitchen/shopping measures, see when "de + le/les → du/des" for specific items, and complete all 12 Tex det8 drills!',
        summaryZh: '记住数量副词永远只接光杆 de/d’（否定也不变、复数也不变 des！）；掌握 16 个常见食物量词；理解特指具体某物时何时才会变成 du/des；配 Tex 原版 12 题。',
        cheatSummary: [
          { label: 'Quantity Adverbs Always Take Bare de / d’', rule: 'assez de, beaucoup de, (un) peu de, plein de, trop de, un tas de + noun — NEVER *beaucoup des* for general nouns, and NEVER change in negative sentences ("pas trop de crêpes").', ruleZh: '数量副词后永远用光杆 de / d’（元音前），千万别说 *beaucoup des amis*！即使否定也保持 de。' },
          { label: 'Specific Item → Contraction du / de la / des', rule: 'ONLY when talking about a SPECIFIC known item ("some of THE cake Édouard made", "many of THE guests here") use de + le/la/les → "un morceau du gâteau", "beaucoup des invités".', ruleZh: '只有明确说“那个已知特定东西的一部分”（……中的许多/一块）时，才加定冠词并缩合：un morceau du gâteau / beaucoup des invités。' }
        ],
        sections: [
          {
            id: 'qty_adv',
            heading: '1. Adverbial Quantities (+ Bare de / d’ Always!)',
            headingZh: '一、数量副词 + 光杆 de / d’（千万别加 s，否定也不用改！）',
            lead: 'Adverbs and noun-expressions of quantity are followed by bare de (or d’ before a vowel/silent h)—NEVER "des", "du", or "de la" for general nouns! Even in negative sentences, they stay unchanged.',
            leadZh: '法语数量表达后面一般紧接介词 de（元音或哑音 h 前变 d’）再直接加名词——即使后面的名词是复数，也不变成 des（要说 beaucoup de crêpes，不能说 *beaucoup des crêpes*）！否定句里也完全不变：',
            cartoon: {
              src: './assets/tex_cartoons/det8_crepe.gif',
              alt: 'Une douzaine de crêpes',
              caption: 'Une douzaine de crêpes ? Mais non, il faut préparer beaucoup de crêpes !',
              captionZh: '一打可丽饼太多了吗？才没有，要做很多可丽饼才行！'
            },
            table: {
              headers: ['Expression', 'Meaning', 'Example'],
              rows: [
                { cols: ['assez de', 'enough (of) · 足够的', 'Je n’ai pas assez d’argent. / Ce n’est pas assez.'], audio: 'Je n’ai pas assez d’argent.' },
                { cols: ['beaucoup de', 'a lot of / many · 很多', 'Il faut préparer beaucoup de crêpes.'], audio: 'Il faut préparer beaucoup de crêpes.' },
                { cols: ['peu de / un peu de', 'few, little / a little · 很少 / 一点点', 'J’ai peu d’amis. / Un peu de sel, s’il vous plaît.'], audio: 'J’ai peu d’amis.' },
                { cols: ['trop de', 'too much / too many · 太多', 'On ne prépare jamais trop de crêpes !'], audio: 'On ne prépare jamais trop de crêpes !' },
                { cols: ['plein de / un tas de', 'full of / heaps of (informal) · 大量/一堆', 'Il y a plein de monde / un tas de livres.'], audio: 'Il y a plein de monde.' }
              ]
            }
          },
          {
            id: 'qty_measures',
            heading: '2. Containers, Weights & Measures + Specific "du / des" Contraction',
            headingZh: '二、16 个高频容器度量表 + 特指已知物时的 du/des 缩合',
            lead: 'Just like English ("a cup of tea", "a slice of bread"), French connects container/weight nouns to the item with de (or d’). HOWEVER, if you refer to a SPECIFIC known item ("of THE cake Édouard baked", "of THE red wine"), add the definite article (de + le = du, de + les = des)!',
            leadZh: '表示容器、重量、数量单位时同样用“单位词 + de/d’ + 名词”。只有一种情况要缩合成 du / de la / de l’ / des：当你明确特指“某件特定东西（比如 Edouard 刚烤的那块蛋糕）的一部分”！',
            cartoon: {
              src: './assets/tex_cartoons/det8_legume.gif',
              alt: 'Arrête de faire le légume devant la télé',
              caption: 'Le bouquet de roses et la bouteille de cidre sont sur la table !',
              captionZh: '那一束玫瑰花（de roses）和那瓶苹果酒（de cidre）都在桌上啦！'
            },
            table: {
              headers: ['Measure (Set 1)', 'English / 中文', 'Measure (Set 2)', 'English / 中文'],
              rows: [
                { cols: ['une boîte de', 'a can / box of · 一罐/盒', 'une livre de', 'a pound of · 一磅（约 500g）'], audio: 'une boîte de tomates, une livre de beurre' },
                { cols: ['un bol de', 'a bowl of · 一碗', 'un morceau de', 'a piece of · 一块'], audio: 'un bol de soupe, un morceau de fromage' },
                { cols: ['un bout de', 'a bit / end of · 一小截', 'une part de', 'a serving/slice of · 一份'], audio: 'une part de tarte' },
                { cols: ['une bouteille de', 'a bottle of · 一瓶', 'une pincée de', 'a pinch of · 一撮'], audio: 'une bouteille de cidre, une pincée de sel' },
                { cols: ['une cuillère de', 'a spoonful of · 一勺', 'une tasse de', 'a cup of · 一杯（热饮）'], audio: 'une cuillère d’huile, une tasse de café' },
                { cols: ['une douzaine de', 'a dozen · 一打（12个）', 'une tranche de', 'a slice of · 一片'], audio: 'une douzaine de crêpes, une tranche de jambon' },
                { cols: ['50 grammes de', '50 grams of · 50 克', 'un verre de', 'a glass of · 一杯（玻璃杯）'], audio: 'un verre de vin, 400 grammes de farine' },
                { cols: ['un kilo / un litre de', 'a kilo / liter of · 一公斤/一升', 'un bouquet de', 'a bouquet / bunch of · 一束'], audio: 'un litre de lait, un bouquet de roses' }
              ]
            },
            examples: [
              { fr: 'Specific: un morceau du gâteau qu’Édouard a préparé', en: 'a piece of THE cake that Édouard made (de + le = du!)', zh: 'Édouard 做的那块蛋糕中的一块（特指那个蛋糕 → du！）', tag: 'Specific du' },
              { fr: 'Specific: un verre du vin rouge, pas du blanc', en: 'a glass of THE red wine, not THE white one', zh: '那瓶红酒的一杯，不是白的那瓶', tag: 'Specific du' },
              { fr: 'Specific: beaucoup des invités parlent français', en: 'many of THE guests (at this party) speak French (de + les = des!)', zh: '（现场这批）客人里有很多人会说法语（特指 → des！）', tag: 'Specific des' }
            ],
            dialogue: {
              title: 'Dialogue: Tammy lit la recette (et Tex regarde la télé !)',
              titleZh: '生活对话：Tammy 念配方做饭，Tex 在沙发躺平',
              lines: [
                { speaker: 'Tammy', fr: 'Pour une douzaine de crêpes, mélanger 400 grammes de farine et deux œufs. Ajouter ensuite un demi-litre de lait, une cuillère de sel et une cuillère d’huile.', en: 'For a dozen crêpes, mix 400 grams of flour and two eggs. Then add half a liter of milk, a spoonful of salt, and a spoonful of oil.', zh: '一打可丽饼：拌 400 克面粉和 2 个鸡蛋，再加半升牛奶、一勺盐和一勺油。' },
                { speaker: 'Tammy', fr: 'Dis, Tex ! Arrête de faire le légume devant la télé ! Viens m’aider !', en: 'Hey Tex! Stop vegging out in front of the TV! Come help me!', zh: '我说 Tex！别像棵植物一样瘫在电视机前啦！快来搭把手！' },
                { speaker: 'Tex', fr: 'Comment ? J’ai fait mon travail, moi ! Le bouquet de roses et la bouteille de cidre sont sur la table !', en: 'What? I did my job! The bouquet of roses and the bottle of cider are on the table!', zh: '啥？我的任务完成了啊！玫瑰花束和苹果酒我都放桌子上了！' }
              ]
            },
            quickCheck: {
              prompt: 'Compare: "Many students love coffee" vs. "Many OF THE students in this room love coffee":',
              promptZh: '对比泛指数量与特指其中一部分：① 很多学生 vs ② 教室里的这些学生中的很多人：',
              options: [
                'beaucoup d’étudiants / beaucoup des étudiants dans cette salle',
                'beaucoup des étudiants / beaucoup d’étudiants dans cette salle',
                'beaucoup les étudiants / beaucoup de les étudiants',
                'beaucoup de étudiants / beaucoup du étudiants'
              ],
              answerIdx: 0,
              explain: 'General quantity always uses "de / d’" ("beaucoup d’étudiants"); "many OF THE specific students" contracts de + les → "beaucoup des étudiants".',
              explainZh: '泛指数量用 "beaucoup d’étudiants"；特指“那批已知学生当中的很多人”才缩成 "beaucoup des étudiants"。'
            }
          }
        ],
        drills: [
          {
            id: 'd211_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12: Joe-Bob : Tu as 1 dollar, Tex ? Je n’ai pas ___ argent pour mon doughnut ! (enough)',
            promptZh: 'Tex 第 1 题：我没有“足够的”钱（argent 元音开头）。',
            options: ['assez d’', 'assez des', 'beaucoup des', 'peu de'],
            answerIdx: 0,
            audio: 'Je n’ai pas assez d’argent pour acheter mon doughnut !',
            explain: '"assez de" elides to "assez d’" before vowel-initial "argent".',
            explainZh: '“足够的” = assez de，元音前省音为 "assez d’"。'
          },
          {
            id: 'd211_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Tex : Je suis un grand poète. J’ai ___ talent. (a lot of)',
            promptZh: 'Tex 第 2 题：我有“很多”才华。',
            options: ['beaucoup de', 'beaucoup du', 'assez du', 'peu des'],
            answerIdx: 0,
            audio: 'J’ai beaucoup de talent.',
            explain: 'Quantity adverbs always take bare "de": "beaucoup de talent" (NEVER *du*).',
            explainZh: '数量副词后只接光杆 de，不接 du："beaucoup de talent"。'
          },
          {
            id: 'd211_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Corey : Je suis seul ("alone"). J’ai ___ amis. (few)',
            promptZh: 'Tex 第 3 题：我孤单一人，我“几乎没有/很少有”朋友。',
            options: ['peu d’', 'peu des', 'trop de', 'beaucoup d’'],
            answerIdx: 0,
            audio: 'J’ai peu d’amis.',
            explain: '"peu de" = few / not many; elides to "peu d’" before "amis".',
            explainZh: '“很少（偏否定）” = peu de，元音前省音为 "peu d’"。'
          },
          {
            id: 'd211_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Édouard : Je prends toujours ___ café après le repas. (a cup of)',
            promptZh: 'Tex 第 4 题：饭后我总是喝“一杯（咖啡杯）”咖啡。',
            options: ['une tasse de', 'un verre du', 'une tasse du', 'beaucoup des'],
            answerIdx: 0,
            audio: 'Je prends toujours une tasse de café après le repas.',
            explain: 'Hot coffee comes in "une tasse de" (using bare "de", not "du").',
            explainZh: '热咖啡用“一杯（杯子 tasse）”：une tasse de café。'
          },
          {
            id: 'd211_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Fill the quantity phrase: Paw-Paw : Je bois ___ à tous les repas. (a glass of wine)',
            promptZh: 'Tex 第 5 题（填 数量+词，含 wine）：我每顿饭都喝一杯葡萄酒（un verre de vin）。',
            answers: ['un verre de vin'],
            hint: 'un verre de + vin (not a hot cup!).',
            audio: 'Je bois un verre de vin à tous les repas.',
            explain: 'Wine is served in a glass: "un verre de vin".',
            explainZh: '葡萄酒用玻璃杯："un verre de vin"。'
          },
          {
            id: 'd211_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Fill the quantity phrase: Tammy : Je suis grosse parce que je mange ___ bonbons. (too many)',
            promptZh: 'Tex 第 6 题：我胖是因为我吃了“太多的”糖果（2 words）。',
            answers: ['trop de'],
            hint: '"too many" + bare "de" (never des!).',
            audio: 'Je mange trop de bonbons.',
            explain: '"trop de bonbons" = too many candies.',
            explainZh: '“太多”用 "trop de"（记住别用 des！）。'
          },
          {
            id: 'd211_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Fill the quantity phrase: Tex : ___ s’il vous plaît. (a bouquet of roses)',
            promptZh: 'Tex 第 7 题：请给我“一束玫瑰花”（4 words）。',
            answers: ['Un bouquet de roses', 'un bouquet de roses'],
            hint: 'un bouquet de + roses.',
            audio: 'Un bouquet de roses s’il vous plaît.',
            explain: '"Un bouquet de roses" = a bouquet of roses.',
            explainZh: '“一束玫瑰花”："Un bouquet de roses"。'
          },
          {
            id: 'd211_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Fill the quantity phrase: Tammy : Tex, quand tu bois ___, tu es arrogant ! (too much wine)',
            promptZh: 'Tex 第 8 题：Tex，当你喝了“太多葡萄酒”时就会变得傲慢（3 words）。',
            answers: ['trop de vin'],
            hint: 'trop de + vin.',
            audio: 'Quand tu bois trop de vin, tu es arrogant !',
            explain: '"trop de vin" = too much wine.',
            explainZh: '"trop de vin"。'
          },
          {
            id: 'd211_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Fill the quantity phrase: Tammy : J’ai ___ d’être la copine de Tex ! (a lot of luck)',
            promptZh: 'Tex 第 9 题：做 Tex 的女朋友我真是“很有”福气（3 words）。',
            answers: ['beaucoup de chance'],
            hint: 'beaucoup de + chance (drop "de la"!).',
            audio: 'J’ai beaucoup de chance d’être la copine de Tex !',
            explain: 'Quantity phrase replaces partitive "de la": "beaucoup de chance".',
            explainZh: '数量词取代部分冠词 de la，说 "beaucoup de chance"。'
          },
          {
            id: 'd211_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — Fill the quantity phrase: Tammy : Tu passes ___ sur le campus ! (too much time)',
            promptZh: 'Tex 第 10 题：你在校园里待“太久”时间了（3 words）。',
            answers: ['trop de temps'],
            hint: 'trop de + temps.',
            audio: 'Tu passes trop de temps sur le campus !',
            explain: '"trop de temps" = too much time.',
            explainZh: '“太多时间”："trop de temps"。'
          },
          {
            id: 'd211_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Fill the quantity phrase: Bette : Tex est original. Il y a ___ comme lui ! (few armadillos)',
            promptZh: 'Tex 第 11 题：Tex 很特别，像他这样的犰狳“寥寥无几”（3 words）。',
            answers: ['peu de tatous'],
            hint: 'peu de + tatous.',
            audio: 'Il y a peu de tatous comme lui !',
            explain: '"peu de tatous" = few armadillos.',
            explainZh: '“很少（数量稀少）”用 "peu de tatous"。'
          },
          {
            id: 'd211_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — Fill the quantity phrase: Joe-Bob : Il n’y a pas ___ dans ce hamburger ! (enough ketchup)',
            promptZh: 'Tex 第 12 题：这个汉堡里没有“足够的番茄酱”（2 words）。',
            answers: ['assez de ketchup'],
            hint: 'assez de + ketchup (unchanged in negative!).',
            audio: 'Il n’y a pas assez de ketchup dans ce hamburger !',
            explain: '"assez de ketchup" stays unchanged inside "il n’y a pas...".',
            explainZh: '否定句里数量短语不变形，填 "assez de ketchup"。'
          }
        ],
        related: [
          { chapterId: 'ch2_determiners', pageId: 'det_2_7', label: '2.7 Partitive Articles' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_12', label: '2.12 tout Part 1 (Adj. & Pronoun)' }
        ]
      },

      /* =========================================================
         PAGE 2.12: TOUT PART 1 — ADJECTIVE, PRONOUN & SPOKEN TOUS
      ========================================================= */
      {
        id: 'det_2_12',
        code: '2.12',
        group: 'tout (All / Every / Everything)',
        shortTitle: 'tout (1): Adj., Pronoun & Sound',
        title: 'Tout (Part 1): Adjective, Pronoun & When to Pronounce the -s in "tous"',
        titleZh: 'tout 专题（一）：形容词四形变化、代词“一切/全部”，以及 tous 尾音读不读 /s/？',
        estMin: 4,
        summary: 'Learn the 4 adjective forms of tout (tout, tous, toute, toutes), contrast them with the pronouns tout ("everything") and tous/toutes ("all of them"), and hear Tex’s essential spoken distinction for "tous".',
        summaryZh: '攻克百变词 tout：作形容词随名词变 tout/tous/toute/toutes（含诗句朗读）；作代词指代“一切（tout）”或“他们全部（tous/toutes）”；并听清什么时候 tous 的结尾 -s 必须发音！',
        cheatSummary: [
          { label: '1. Adjective: tout / tous / toute / toutes', rule: 'Modifies a noun ("all / every"): tout le temps (m.sg.), toute la journée (f.sg.), tous les soirs (m.pl.), toutes les nuits (f.pl.). Can also skip the article for "every": Tout tatou est poète !', ruleZh: '修饰名词有四形：阳单 tout、阴单 toute、阳复 tous、阴复 toutes（可接 le/la/les 或物主词，也可直接跟单数表“每一个”）。' },
          { label: '2. Pronoun & Spoken -s Rule!', rule: 'Invariable "tout" = everything ("Tout s’est bien passé ?"). Plural pronouns "tous / toutes" replace plural nouns ("je les déteste tous"). KEY SOUND: Adjective tous = silent s [tu]; Pronoun tous = PRONOUNCED s [tus]!', ruleZh: '作代词：tout（一切）；tous / toutes（他们/她们全部）。重要口语区分：形容词 tous 尾音 -s 静音（tous les soirs [tu]），代词 tous 尾音 -s 必须大声读出 [tus]！' }
        ],
        sections: [
          {
            id: 'tout_adj',
            heading: '1. "tout" as a Determiner / Adjective (tout · tous · toute · toutes)',
            headingZh: '一、作限定词/形容词：四形变位 + Tex 抒情诗',
            lead: 'When tout modifies a noun, it means "all" or "every" and takes 4 forms matching that noun’s gender and number. Most often an article or possessive sits between tout and the noun (tous mes poèmes, toute sa vie)—or you can drop the article with singular tout/toute to mean "every".',
            leadZh: '修饰名词表达“所有 / 整个 / 每一个”时，tout 必须配合后面名词的阴阳性单复数变出四种写法。最常和定冠词/物主限定词连用，或者直接放在单数名词前表示“每一个”：',
            cartoon: {
              src: './assets/tex_cartoons/det9_tout.gif',
              alt: 'Tout le temps, toute la journée',
              caption: 'tout le temps · toute la journée · tous les soirs · toutes les nuits',
              captionZh: '四个核心搭配，记住四格形式与读音！'
            },
            table: {
              headers: ['Masc. sg.', 'Masc. pl.', 'Fem. sg.', 'Fem. pl.'],
              rows: [
                { cols: ['tout', 'tous', 'toute', 'toutes'], audio: 'tout le temps, tous les soirs, toute la journée, toutes les nuits' }
              ]
            },
            examples: [
              { fr: 'Malgré toutes les filles que j’ai connues, je pense à toi tout le temps, toute la journée, tous les soirs, toutes les nuits.', en: 'In spite of all the girls I’ve known, I think of you all the time, all day long, every evening, every night.', zh: '尽管我认识过那么多女孩，我还是时时刻刻、整日、每晚、每个深夜都在想你。', tag: 'All 4 tout Forms' },
              { fr: 'Tout tatou est poète ! / toute sa vie / tous mes poèmes', en: 'Every armadillo is a poet! / all his life / all my poems', zh: '每一只犰狳都是诗人！/ 她的一生 / 我所有的诗', tag: 'No Article / Poss.' }
            ]
          },
          {
            id: 'tout_pro',
            heading: '2. "tout" as a Pronoun — Listen to the Pronounced -s in "tous" [tus]!',
            headingZh: '二、作代词（everything / all of them）与发音对比',
            lead: 'When standing alone instead of modifying a noun, "tout" (invariable) means "everything" or "all", while "tous" and "toutes" replace a plural noun ("all of them"). CRUCIAL PRONUNCIATION RULE: In adjective "tous les soirs", the -s is SILENT [tu]; in pronoun "je les déteste tous", you PRONOUNCE the -s [tus]!',
            leadZh: '当 tout 不修饰后面的名词、而是自己独立做代词时：单数 invariable "tout" = 一切/所有事情；复数 "tous / toutes" 指代前面提过的复数人或物（他们全部）。超级重要的听力口语区别：形容词 tous 读 [tu]（-s 哑巴），代词 tous 读 [tus]（-s 清晰发音）！',
            cartoon: {
              src: './assets/tex_cartoons/det9_tous.gif',
              alt: 'Je les déteste tous !',
              caption: 'Je les déteste TOUS ! (Pronoun tous → -s IS pronounced [tus]!)',
              captionZh: '我讨厌他们所有人！（这里 tous 单独代指“全部人”，结尾 -s 要大声读出 [tus]！）'
            },
            examples: [
              { fr: 'Tammy : Tex, tu as vu ton éditeur ? Tout s’est bien passé ?', en: 'Did everything go well? ("Tout" = everything, invariable singular)', zh: 'Tammy：一切都顺利吗？（tout = 一切）', tag: 'everything' },
              { fr: 'Tex : Les éditeurs sont des idiots, je les déteste tous ! Les maisons d’édition ne comprennent pas mon art. Toutes refusent mes poèmes !', en: 'Editors are fools, I hate them all! [tus] Publishing houses don’t understand my art. All (of them, f.) refuse my poems!', zh: '出版商都是蠢货，我讨厌他们全部 [tus]！出版社（阴复）不懂我的艺术，全都拒绝我的诗！', tag: 'Pronoun tous/toutes' }
            ],
            quickCheck: {
              prompt: 'In which sentence is the final -s of "tous" PRONOUNCED [tus]?',
              promptZh: '在哪句话里，"tous" 结尾的 -s 必须清晰读出来 [tus]？',
              options: [
                'Je les invite tous à mon anniversaire. (pronoun)',
                'Je vais en cours tous les matins. (adjective before les matins)',
                'Tous les grands poètes sont incompris. (adjective)',
                'Tous mes amis parlent français. (adjective)'
              ],
              answerIdx: 0,
              explain: 'In "Je les invite tous", "tous" stands alone as a pronoun ("all of them"), so pronounce the -s clearly: [tus]!',
              explainZh: '“我邀请他们全部”里的 tous 是独立代词（没有接名词），所以读音带 s：[tus]！'
            }
          }
        ],
        drills: [
          {
            id: 'd212_d1',
            kind: 'choice',
            prompt: 'Which 4 forms match: m.sg. / m.pl. / f.sg. / f.pl. of "tout"?',
            promptZh: '选出 tout 修饰名词时“阳单 / 阳复 / 阴单 / 阴复”的正确四形：',
            options: ['tout / tous / toute / toutes', 'tout / touts / toute / toutes', 'tous / tout / toutes / toute', 'tout / tous / tout / toutes'],
            answerIdx: 0,
            audio: 'tout, tous, toute, toutes',
            explain: 'Notice masculine plural drops the final t to become "tous" (not *touts*).',
            explainZh: '唯一去掉字母 t 的是阳性复数 "tous"（别写成 *touts*）！'
          },
          {
            id: 'd212_d2',
            kind: 'choice',
            prompt: 'Translate "Did everything go well?" using invariable pronoun "tout":',
            promptZh: '用代词 tout 表达“一切都好吗 / 一切顺利吗？”：',
            options: ['Tout va bien ? / Tout s’est bien passé ?', 'Tous va bien ?', 'Toute va bien ?', 'Toutes va bien ?'],
            answerIdx: 0,
            audio: 'Tout s’est bien passé ?',
            explain: '"everything" as an indefinite pronoun is always singular masculine "tout".',
            explainZh: '泛指“一切事物”永远用不可变阳单 "Tout"。'
          },
          {
            id: 'd212_d3',
            kind: 'choice',
            prompt: 'Choose the right form for "all evening / all day long" ("la journée" is f.sg.):',
            promptZh: '搭配阴性单数 "la journée"（整整一天）：',
            options: ['toute la journée', 'tout la journée', 'toutes la journée', 'tous la journée'],
            answerIdx: 0,
            audio: 'toute la journée',
            explain: '"la journée" is feminine singular → "toute la journée".',
            explainZh: 'journée 为阴性单数，“整天”用 "toute la journée"。'
          },
          {
            id: 'd212_d4',
            kind: 'choice',
            prompt: 'Choose the right form for "every student" (no article, m.sg. "étudiant"):',
            promptZh: '不加定冠词直接说“每一个男学生”：',
            options: ['tout étudiant', 'tous étudiant', 'toute étudiant', 'toutes étudiant'],
            answerIdx: 0,
            audio: 'tout étudiant',
            explain: 'Singular "tout + noun" (no article) means "every": "tout étudiant".',
            explainZh: '无冠词直接加单数名词表示“每一个”，阳单用 "tout étudiant"。'
          },
          {
            id: 'd212_d5',
            kind: 'fib',
            prompt: 'Fill tout / tous / toute / toutes: Je pense à toi ___ le temps. (le temps m.sg.)',
            promptZh: '填空：我一直想着你（temps 阳单）。',
            answers: ['tout'],
            hint: 'Masculine singular.',
            audio: 'Je pense à toi tout le temps.',
            explain: '"temps" is masculine singular → "tout le temps".',
            explainZh: 'temps 为阳性单数，填 "tout"。'
          },
          {
            id: 'd212_d6',
            kind: 'fib',
            prompt: 'Fill tout / tous / toute / toutes: ___ les nuits, il regarde les étoiles. (la nuit f.pl.)',
            promptZh: '填空：每个夜晚他都在看星星（nuit 阴性复数）。',
            answers: ['Toutes', 'toutes'],
            hint: '"nuit" is feminine plural!',
            audio: 'Toutes les nuits, il regarde les étoiles.',
            explain: '"les nuits" is feminine plural → "Toutes les nuits".',
            explainZh: 'nuit 是阴性复数，填 "Toutes"。'
          },
          {
            id: 'd212_d7',
            kind: 'fib',
            prompt: 'Fill tout / tous / toute / toutes: Il écrit ___ les soirs. (le soir m.pl.)',
            promptZh: '填空：他每天晚上都写作（soir 阳性复数）。',
            answers: ['tous'],
            hint: 'Masculine plural (remember the -s is silent here!).',
            audio: 'Il écrit tous les soirs.',
            explain: '"les soirs" is masculine plural → "tous les soirs".',
            explainZh: 'soir 阳性复数，填 "tous"（这里 s 不发音）。'
          },
          {
            id: 'd212_d8',
            kind: 'fib',
            prompt: 'Pronoun form (m.pl.): Les éditeurs sont idiots — je les déteste ___ ! (them all)',
            promptZh: '代词填空：出版商都是笨蛋——我讨厌他们所有人！（此处 -s 要读出来）',
            answers: ['tous'],
            hint: 'Replaces masculine plural "les éditeurs".',
            audio: 'Je les déteste tous !',
            explain: '"les éditeurs" (m.pl.) → pronoun "tous" (pronounced [tus]!).',
            explainZh: '指代阳性复数 les éditeurs，填代词 "tous"（读作 [tus]）。'
          },
          {
            id: 'd212_d9',
            kind: 'fib',
            prompt: 'Pronoun form (f.pl.): Les maisons d’édition refusent mes poèmes. ___ les refusent ! (All of them, f.)',
            promptZh: '代词填空：各家出版社（阴复 maisons）全都拒绝了我的诗！',
            answers: ['Toutes', 'toutes'],
            hint: '"maisons d’édition" is feminine plural.',
            audio: 'Toutes les refusent !',
            explain: '"maisons" is feminine plural → "Toutes".',
            explainZh: '指代阴性复数 maisons，填 "Toutes"。'
          },
          {
            id: 'd212_d10',
            kind: 'fib',
            prompt: 'Fill tout / tous / toute / toutes: Elle travaille ___ sa vie à Montréal. (sa vie f.sg.)',
            promptZh: '填空：她一生都在蒙特利尔工作（vie 阴性单数）。',
            answers: ['toute'],
            hint: '"vie" is feminine singular.',
            audio: 'Elle travaille toute sa vie à Montréal.',
            explain: '"sa vie" is feminine singular → "toute sa vie".',
            explainZh: 'vie 阴性单数，填 "toute"。'
          }
        ],
        related: [
          { chapterId: 'ch2_determiners', pageId: 'det_2_13', label: '2.13 tout Part 2: Adverb, 16 Idioms & Tex Review' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_14', label: '2.14 Indefinite Determiners' }
        ]
      },

      /* =========================================================
         PAGE 2.13: TOUT PART 2 — ADVERB RULE, 16 IDIOMS & TEX REVIEW
      ========================================================= */
      {
        id: 'det_2_13',
        code: '2.13',
        group: 'tout (All / Every / Everything)',
        shortTitle: 'tout (2): Adverb, Idioms & Review',
        title: 'Tout (Part 2): Adverb Agreement, 16 Essential Idioms & Full Tex Review',
        titleZh: 'tout 专题（二）：副词变位奇规则、16 个必背固定短语与 Tex 12 题总测',
        estMin: 5,
        summary: 'Learn the subtle adverb rule for "tout" ("completely/quite": "tout nouveaux" & "tout excitée" vs. "toute moderne"), master all 16 high-frequency French idioms with tout, and finish all 12 Tex det9 drills!',
        summaryZh: '看懂高级加分规则“副词 tout”（在阴性辅音形容词前要破例变 toute/toutes，而在阴性元音形容词如 tout excitée 前却保持不变！）；背熟 16 个 TCF 读写高频短语并完成 Tex 原版 12 题。',
        cheatSummary: [
          { label: 'Adverb "tout" ("completely/quite")', rule: 'Normally INVARIABLE (tout): before masc. adj. (tout nouveaux) AND feminine VOWEL/silent-h adj. (tout excitée, tout heureuse). EXCEPT: agrees as toute/toutes before a feminine CONSONANT adj. (toute moderne, toute petite)!', ruleZh: '作副词表示“完全/非常”：通常不变（包括阳复 tout nouveaux，以及阴性元音开头如 tout excitée！）。唯一变性数情况：站在以“辅音”或嘘音 h 开头的阴性形容词前，变成 toute / toutes（toute moderne）！' },
          { label: 'Top TCF Idioms', rule: 'tout le monde (everyone), tout de suite (right away), pas du tout (not at all), tout à fait (completely), tout à coup (suddenly), tout à l’heure (in a bit / earlier), malgré tout (in spite of everything), en tout cas (anyway).', ruleZh: 'TCF 听力写作神短语：tout le monde（大家）、tout de suite（立刻）、pas du tout（根本不）、tout à fait（完全同意）、tout à coup（突然）、en tout cas（无论如何）。' }
        ],
        sections: [
          {
            id: 'tout_adv',
            heading: '1. "tout" as an Adverb ("Completely / Quite") — The Consonant Sound Trap!',
            headingZh: '一、副词 tout（表示“完全 / 非常”）：唯一看辅音发音的法语规则',
            lead: 'When tout modifies an adjective or adverb ("completely", "very", "quite"), it is normally INVARIABLE ("tout")—even before masculine plurals ("tout nouveaux") and EVEN before feminine adjectives starting with a vowel ("tout excitée")! For sound reasons only, tout changes to toute / toutes ONLY in front of a feminine adjective starting with a consonant or aspirate h ("toute moderne", "toutes petites").',
            leadZh: '表示“完全地 / 十分地”修饰形容词时，tout 本质是个副词，原则上不变形（阳性复数写 tout nouveaux，阴性元音开头也写 tout excitée！）。唯独当它站在以“辅音”开头的阴性形容词前时，为了读音顺口，居然会破例配合变成 toute / toutes！',
            examples: [
              { fr: 'Tex : Mes thèmes sont tout nouveaux. (masc. pl. → invariable tout!)', en: 'My themes are completely new. (Not *tous nouveaux*!)', zh: '我的主题全是崭新的。（修饰阳性复数形容词时不加 s：tout nouveaux）', tag: 'Invariable m.pl.' },
              { fr: 'Tammy : Je suis tout excitée ! (fem. + VOWEL e- → invariable tout!)', en: 'I am completely excited! (Vowel e- → keep "tout"!)', zh: '我好兴奋！（excitée 虽然阴性但元音开头，不加 e：tout excitée！）', tag: 'Invariable f.+vowel' },
              { fr: 'Tex : Et ma poésie est toute moderne. (fem. + CONSONANT m- → toute!)', en: 'And my poetry is completely modern. (Feminine consonant m- triggers "toute"!)', zh: '我的诗歌非常现代。（moderne 是辅音开头阴性形容词，破例加 e：toute moderne！）', tag: 'Agreement f.+cons.' }
            ],
            quickCheck: {
              prompt: 'Tammy (f.) says: "I am completely happy/excited!" → Choose the accurate spelling:',
              promptZh: '女生 Tammy 说“我非常激动（excitée）/ 非常开心（heureuse，哑音 h）”，怎么写？',
              options: ['Je suis tout excitée / tout heureuse.', 'Je suis toute excitée / toute heureuse.', 'Je suis tous excitée.', 'Je suis toutes heureuse.'],
              answerIdx: 0,
              explain: 'Both "excitée" (vowel e-) and "heureuse" (silent h) start with a vowel sound — so adverb "tout" stays invariable ("tout excitée", "tout heureuse")!',
              explainZh: 'excitée（元音）与 heureuse（哑音 h）均以元音音素开头，因此副词 tout 保持原型不加 e！'
            }
          },
          {
            id: 'tout_idioms',
            heading: '2. All 16 High-Frequency Idiomatic Phrases with "tout" (Plus Dialogue)',
            headingZh: '二、Tex 全套 16 个高频固定短语（TCF 读写听力全覆盖）+ 对话',
            lead: 'Learn these 16 everyday expressions from Tex—almost every TCF Canada listening and reading section contains several of them:',
            leadZh: '这 16 个含 tout 的日常固定短语几乎每次 TCF 考试都会出现好几个，点击声音熟悉它们的地道节奏：',
            table: {
              headers: ['Phrase (Set 1)', 'Meaning', 'Phrase (Set 2)', 'Meaning'],
              rows: [
                { cols: ['pas du tout', 'not at all · 一点也不', 'en tout cas', 'in any case · 无论如何'], audio: 'pas du tout, en tout cas' },
                { cols: ['tout de suite', 'right away · 马上/立刻', 'malgré tout', 'in spite of everything · 尽管如此'], audio: 'tout de suite, malgré tout' },
                { cols: ['tout le monde', 'everyone (takes sg. verb!) · 大家', 'tout à l’heure', 'in a little while / earlier · 一会儿/刚才'], audio: 'tout le monde, tout à l’heure' },
                { cols: ['tout le temps', 'all the time · 一直/总是', 'tout à coup', 'all of a sudden · 突然'], audio: 'tout le temps, tout à coup' },
                { cols: ['tous les jours', 'every day · 每天', 'tout à fait', 'completely · 完全地/确实'], audio: 'tous les jours, tout à fait' },
                { cols: ['tous / toutes les deux', 'both · 两者都', 'tout droit', 'straight ahead · 一直往前'], audio: 'tous les deux, tout droit' },
                { cols: ['tous les deux / trois jours', 'every 2 / 3 days · 每隔两天/三天', 'tout de même', 'just the same · 仍然/照样'], audio: 'tous les deux jours, tout de même' },
                { cols: ['toutes les deux semaines', 'every other week · 每两周', 'tout en + part. prés.', 'all the while (doing...) · 一边……一边'], audio: 'toutes les deux semaines' }
              ]
            },
            dialogue: {
              title: 'Dialogue: Tammy et Tex sur son recueil de poèmes',
              titleZh: '对话：Tex 的诗集又被拒稿了',
              lines: [
                { speaker: 'Tammy', fr: 'Alors Tex, tu as bientôt fini ton recueil de poèmes ?', en: 'So Tex, have you almost finished your poetry collection?', zh: '那么 Tex，你的诗集快写完了吗？' },
                { speaker: 'Tex', fr: 'Oh ne m’en parle pas ! J’ai perdu tout mon enthousiasme ! J’ai toutes sortes de problèmes avec mon éditeur. Il refuse tous mes poèmes récents.', en: 'Oh don’t ask! I’ve lost all my enthusiasm! I have all kinds of problems with my publisher. He refuses all my recent poems.', zh: '别提了！我所有的热情都没了！跟编辑有一堆破事，他把我最近写的诗全都退稿了。' },
                { speaker: 'Tammy', fr: 'Ne t’inquiète pas ! Tous les grands poètes sont incompris !', en: 'Don’t worry! All great poets are misunderstood!', zh: '别难过！所有伟大的诗人一开始都不被理解的！' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'd213_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12 — Fill the right form of tout: Tex : ___ les Américaines sont jolies ! (f.pl.)',
            promptZh: 'Tex 第 1 题：所有美国女生都很漂亮（les Américaines 阴性复数）。',
            options: ['Toutes', 'Tous', 'Toute', 'Tout'],
            answerIdx: 0,
            audio: 'Toutes les Américaines sont jolies !',
            explain: '"les Américaines" is feminine plural → "Toutes les Américaines".',
            explainZh: 'Américaines 是阴性复数，选 "Toutes"。'
          },
          {
            id: 'd213_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Tex : Les amis, je vous invite ___ à mon anniversaire. (pronoun: you all)',
            promptZh: 'Tex 第 2 题：朋友们，我邀请你们大家来参加生日派对（独立代词 tous！）。',
            options: ['tous', 'tout', 'toutes', 'toute'],
            answerIdx: 0,
            audio: 'Je vous invite tous à mon anniversaire.',
            explain: 'Plural pronoun referring to "les amis" (m.pl.) → "tous" (pronounced [tus]!).',
            explainZh: '指代 les amis 作代词，填 "tous"（记得读 [tus]！）。'
          },
          {
            id: 'd213_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Corey : Je m’ennuie ___ le temps.',
            promptZh: 'Tex 第 3 题：我一直觉得无聊（tout le temps）。',
            options: ['tout', 'tous', 'toute', 'toutes'],
            answerIdx: 0,
            audio: 'Je m’ennuie tout le temps.',
            explain: '"le temps" is masculine singular → "tout le temps".',
            explainZh: '固定短语 "tout le temps"。'
          },
          {
            id: 'd213_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Édouard : À Austin, il fait beau ___ les jours. (le jour m.pl.)',
            promptZh: 'Tex 第 4 题：奥斯汀每天天气都很好（les jours 阳复）。',
            options: ['tous', 'tout', 'toutes', 'toute'],
            answerIdx: 0,
            audio: 'À Austin, il fait beau tous les jours.',
            explain: '"les jours" is masculine plural → "tous les jours".',
            explainZh: 'jour 为阳性，“每天”固定是 "tous les jours"。'
          },
          {
            id: 'd213_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Adverb Trap!: Tammy : Je suis ___ excitée ! ("completely excited" — f.+vowel)',
            promptZh: 'Tex 第 5 题（重点副词考点！）：Tammy（女）说“我激动极了”（excitée 元音开头！）。',
            answers: ['tout'],
            hint: 'Adverb "tout" stays INVARIABLE before a vowel (even with feminine "excitée")!',
            audio: 'Je suis tout excitée !',
            explain: 'Because "excitée" begins with vowel e-, adverb "tout" stays invariable: "tout excitée" (NOT *toute*).',
            explainZh: '虽然 Tammy 是女生，但 excitée 以元音开头，副词 tout 保持原形不加 e！'
          },
          {
            id: 'd213_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Fill tout / tous / toute / toutes: Tex : ___ poète est sensible. (every poet, m.sg.)',
            promptZh: 'Tex 第 6 题：每一位诗人（阳性单数无冠词）都很感性。',
            answers: ['Tout', 'tout'],
            hint: 'Singular masculine without article = "every".',
            audio: 'Tout poète est sensible.',
            explain: '"Tout poète" (m.sg., no article) means "every poet".',
            explainZh: '阳性单数不加冠词，“每一位”填 "Tout"。'
          },
          {
            id: 'd213_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Fill tout / tous / toute / toutes: Tex : Je me rase ___ les quatre jours. (every 4 days)',
            promptZh: 'Tex 第 7 题：我每四天刮一次胡子（les quatre jours 阳复）。',
            answers: ['tous'],
            hint: '"jours" is masculine plural.',
            audio: 'Je me rase tous les quatre jours.',
            explain: '"tous les quatre jours" = every four days.',
            explainZh: 'jour 为阳性复数，每隔几天用 "tous"：tous les quatre jours。'
          },
          {
            id: 'd213_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Fill tout / tous / toute / toutes: Bette : ___ le monde aime Tex ! (everyone)',
            promptZh: 'Tex 第 8 题：人人都喜欢 Tex（tout le monde）。',
            answers: ['Tout', 'tout'],
            hint: '"le monde" is masculine singular (and takes 3rd sg. verb "aime"!).',
            audio: 'Tout le monde aime Tex !',
            explain: '"Tout le monde" = everyone (always masculine singular!).',
            explainZh: '“大家”固定是单数阳性的 "Tout le monde"。'
          },
          {
            id: 'd213_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Fill tout / tous / toute / toutes: Joe-Bob : Je ne parle pas du ___ français ! (not at all)',
            promptZh: 'Tex 第 9 题：我根本一点法语都不会说（pas du tout）！',
            answers: ['tout'],
            hint: 'Idiom: pas du ___ = not at all.',
            audio: 'Je ne parle pas du tout français !',
            explain: 'Fixed idiom: "pas du tout".',
            explainZh: '固定习语 "pas du tout"（一点也不）。'
          },
          {
            id: 'd213_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — Fill tout / tous / toute / toutes: Tammy : Bette, regarde ___ mes photos de Tex ! (la photo f.pl.)',
            promptZh: 'Tex 第 10 题：看我所有 Tex 的照片（photo 是阴性 la photo！）。',
            answers: ['toutes'],
            hint: '"photo" is FEMININE (even though it ends in -o! Think: photographie!).',
            audio: 'Regarde toutes mes photos de Tex !',
            explain: '"photo" (short for photographie) is feminine plural → "toutes mes photos"!',
            explainZh: '高频提醒：la photo 虽然以 -o 结尾，但却是阴性（photographie 缩写）！因此用 "toutes"。'
          },
          {
            id: 'd213_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Fill tout / tous / toute / toutes: Bette : ___ les chattes détestent l’eau. (f.pl.)',
            promptZh: 'Tex 第 11 题：所有母猫都讨厌水（chattes 阴复）。',
            answers: ['Toutes', 'toutes'],
            hint: 'Feminine plural.',
            audio: 'Toutes les chattes détestent l’eau.',
            explain: '"les chattes" is feminine plural → "Toutes les chattes".',
            explainZh: 'chattes 为阴性复数，填 "Toutes"。'
          },
          {
            id: 'd213_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — Fill tout / tous / toute / toutes: Joe-Bob : Je t’ai cherché ___ la journée ! (f.sg.)',
            promptZh: 'Tex 第 12 题：我找了你一整天（journée 阴单）！',
            answers: ['toute'],
            hint: '"journée" is feminine singular.',
            audio: 'Je t’ai cherché toute la journée !',
            explain: '"la journée" is feminine singular → "toute la journée".',
            explainZh: 'journée 为阴性单数，填 "toute"。'
          }
        ],
        related: [
          { chapterId: 'ch2_determiners', pageId: 'det_2_12', label: '2.12 tout Part 1' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_14', label: '2.14 Indefinite Determiners' }
        ]
      },

      /* =========================================================
         PAGE 2.14: INDEFINITE DETERMINERS (AUCUN, CHAQUE, PLUSIEURS, QUELQUES...)
      ========================================================= */
      {
        id: 'det_2_14',
        code: '2.14',
        group: 'Indefinite Determiners',
        shortTitle: 'aucun, chaque, plusieurs, quelques',
        title: 'Indefinite Determiners: aucun(e), chaque, plusieurs, quelques, certains & Tex Review',
        titleZh: '不定限定词（一个也不 aucun / 每一个 chaque / 几个 plusieurs / 一些 quelques）与 Tex 12 题总测',
        estMin: 4,
        summary: 'Master the 8 essential indefinite determiners—knowing which are ALWAYS singular (chaque, aucun/e) vs. ALWAYS plural (plusieurs, quelques)—read Bette & Tammy’s sharp dialogue, and finish all 12 Tex det10 drills!',
        summaryZh: '掌握法语 8 个核心不定限定词，一眼看清哪些“永远跟单数”（chaque, aucun/aucune 搭配 ne）、哪些“永远跟复数”（plusieurs, quelques, certains），并完成 Tex 终章 12 题。',
        cheatSummary: [
          { label: 'Always SINGULAR + Noun', rule: 'chaque (each/every — invariable: chaque jour, chaque semaine) · aucun / aucune (+ ne: not a single — aucun ami, aucune inspiration).', ruleZh: '永远接单数：chaque（每个，词形永不变），aucun / aucune（一个也不，常配合 ne：aucun ami / aucune idée）。' },
          { label: 'Always PLURAL + Noun', rule: 'plusieurs (several — invariable: plusieurs défauts), quelques (a few — quelques qualités), certains/certaines (certain), différents/différentes & divers/diverses (various).', ruleZh: '永远接复数：plusieurs（好几个，末尾自带 s 不再变）、quelques（几个/少数）、certains/certaines（某些）、différents/divers（各种）。' }
        ],
        sections: [
          {
            id: 'indef_det_table',
            heading: '1. The 8 Common Indefinite Determiners (Singular vs. Plural)',
            headingZh: '一、8 个常用不定限定词一览表（盯准单复数！）',
            lead: 'Indefinite determiners express unspecific quality or quantity ("each", "not one", "several", "a few", "certain"). Pay close attention to number: "chaque" and "aucun(e)" ALWAYS take a SINGULAR noun, while "plusieurs" and "quelques" ALWAYS take a PLURAL noun!',
            leadZh: '不定限定词用来模糊限定质量或数量（每一个 / 毫无 / 好几个 / 几个 / 某些）。做题最关键是分清“跟单数”还是“跟复数”：chaque 和 aucun(e) 后面只能跟单数名词；而 plusieurs 和 quelques 后面只能跟复数名词！',
            cartoon: {
              src: './assets/tex_cartoons/det10_plusieurs.gif',
              alt: 'Plusieurs défauts, quelques qualités',
              caption: 'Ton futur mari a plusieurs défauts... mais aussi quelques qualités !',
              captionZh: '你未来的老公有“好几个”缺点……但也有“几个”优点嘛！'
            },
            table: {
              headers: ['Determiner', 'Number & Gender', 'Meaning'],
              rows: [
                { cols: ['aucun (m.) / aucune (f.)', 'Singular (+ ne)', 'not one, not a single, no · 没有任何（一……也不）'], audio: 'aucun doute, aucune chatte' },
                { cols: ['chaque', 'Singular only (invariable!)', 'each, every · 每一个'], audio: 'chaque jour, chaque semaine' },
                { cols: ['quelques', 'Plural only', 'a few, some · 几个、少数几个'], audio: 'quelques qualités, quelques amis' },
                { cols: ['plusieurs', 'Plural only (invariable!)', 'several · 好几个（几名）'], audio: 'plusieurs défauts' },
                { cols: ['certains / certaines', 'Plural (or sg. rare)', 'certain, some · 某些'], audio: 'certains éditeurs' },
                { cols: ['différents / différentes', 'Plural', 'various, different · 不同的/各种'], audio: 'différents pays' },
                { cols: ['divers / diverses', 'Plural', 'diverse, various · 多样的/各式'], audio: 'diverses idées' },
                { cols: ['tout / toute / tous / toutes', 'Sg. or Pl.', 'all, every · 全部/所有'], audio: 'tout le monde, tous les jours' }
              ]
            },
            tip: 'Important contrast: "aucun / aucune" replaces "pas de" when you want extra emphasis ("none at all / not even one") — and remember to put "ne" before the verb, with NO "pas" ("Je n’ai aucun ami", NOT *pas aucun*).',
            tipZh: '易错提醒：aucun / aucune 自带否定含义，动词前配一个 ne（或 n’）即可，绝不能再多加一个 pas（正确：Je n’ai aucun ami，错误：*pas aucun*）！'
          },
          {
            id: 'indef_det_dlg',
            heading: '2. Dialogue: Bette & Tammy Debate Tex’s Future',
            headingZh: '二、原版对话：毒舌 Bette 吐槽 Tex，Tammy 极力护夫',
            lead: 'Listen to how naturally aucun, chaque, plusieurs, quelques, and certains drop into everyday French conversation:',
            leadZh: '在真实对话里听听 aucun / chaque / plusieurs / quelques / certains 如何用得犀利又自然：',
            dialogue: {
              title: 'Bette et Tammy parlent du futur mari de Tammy',
              titleZh: 'Bette 和 Tammy 聊“未来老公”',
              lines: [
                { speaker: 'Bette', fr: 'Il n’y a aucun doute. Tu finiras mère au foyer !', en: 'There is no doubt at all. You’ll end up a stay-at-home mom!', zh: '毫无疑问，你将来肯定变成全职家庭主妇！' },
                { speaker: 'Tammy', fr: 'Chaque jour, tu trouves une méchanceté à dire. Aucune chatte n’est aussi désagréable que toi !', en: 'Every day you find something nasty to say. No cat is as unpleasant as you!', zh: '你每天都能找出一句难听话来说！没有哪只猫像你这么讨人厌！' },
                { speaker: 'Bette', fr: 'Mais ouvre les yeux Tammy ! Ton futur mari a plusieurs défauts. Il est snob, prétentieux et veut toujours avoir raison.', en: 'Open your eyes Tammy! Your future husband has several flaws. He’s snobbish, pretentious, and always wants to be right.', zh: '睁大眼睛吧 Tammy！你未婚夫有一堆缺点：又势利眼、又自大，还总想证明自己是对的。' },
                { speaker: 'Tammy', fr: 'Mais il a aussi quelques qualités : il est beau et talentueux. Certains éditeurs pensent qu’il est le prochain prix Goncourt !', en: 'But he also has a few good qualities: he’s handsome and talented. Certain publishers think he’s the next Goncourt Prize winner!', zh: '但他也有不少优点呀：他又帅又有才华。有些出版商还认为他是下一届龚古尔文学奖得主呢！' },
                { speaker: 'Bette (tout bas)', fr: 'Tu parles !', en: '(Under her breath): Yeah, right!', zh: '（小声嘀咕）拉倒吧你！' }
              ]
            },
            quickCheck: {
              prompt: 'Pick the sentence where number agreement is 100% CORRECT:',
              promptZh: '选出单复数搭配完全正确的一句：',
              options: [
                'Chaque matin, je lis quelques articles et je n’ai aucun doute.',
                'Chaque matins, je lis quelque articles.',
                'Je n’ai pas aucun doute sur plusieurs sujet.',
                'Plusieurs étudiant aiment ce cours.'
              ],
              answerIdx: 0,
              explain: '"Chaque" → singular ("matin"); "quelques" → plural ("articles"); "ne... aucun" (NO "pas"!) → singular ("doute").',
              explainZh: 'chaque + 单数（matin）、quelques + 复数（articles）、ne... aucun（不加 pas）+ 单数（doute），全对！'
            }
          }
        ],
        drills: [
          {
            id: 'd214_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12 — Choose aucun, aucune, chaque, or quelques: Bette : ___ matin, je fais mon jogging. (every morning)',
            promptZh: 'Tex 第 1 题：“每天”早上我去慢跑（matin 单数）。',
            options: ['Chaque', 'Quelques', 'Aucun', 'Aucune'],
            answerIdx: 0,
            audio: 'Chaque matin, je fais mon jogging.',
            explain: '"Chaque" = each/every + singular noun.',
            explainZh: '“每天早上”用 chaque + 单数："Chaque matin"。'
          },
          {
            id: 'd214_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Tex : Je n’ai ___ inspiration aujourd’hui ! (not any — -tion is f.sg.)',
            promptZh: 'Tex 第 2 题：我今天“毫无”灵感！（-tion 为阴性单数）',
            options: ['aucune', 'aucun', 'chaque', 'quelques'],
            answerIdx: 0,
            audio: 'Je n’ai aucune inspiration aujourd’hui !',
            explain: '"ne... aucune" (since "-tion" is feminine) = not a single bit of inspiration.',
            explainZh: '-tion 结尾为阴性，搭配否定 ne 用 "aucune"。'
          },
          {
            id: 'd214_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Corey : Je n’ai ___ ami ! (not even one friend — m.sg.)',
            promptZh: 'Tex 第 3 题：我“一个朋友也没有”（ami 阳性单数）！',
            options: ['aucun', 'aucune', 'quelques', 'chaque'],
            answerIdx: 0,
            audio: 'Je n’ai aucun ami !',
            explain: '"ami" is masculine singular → "Je n’ai aucun ami" (remember /n/ liaison!).',
            explainZh: 'ami 阳性单数，“一个也没有”填 "aucun"（记得读 /n/ 联诵）。'
          },
          {
            id: 'd214_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Édouard : Je connais ___ recettes texanes. (a few recipes — pl.)',
            promptZh: 'Tex 第 4 题：我知道“几个”德州菜谱（recettes 复数）。',
            options: ['quelques', 'chaque', 'aucune', 'aucun'],
            answerIdx: 0,
            audio: 'Je connais quelques recettes texanes.',
            explain: '"quelques" = a few + plural noun ("recettes").',
            explainZh: '“几个/一些”加复数名词用 "quelques"。'
          },
          {
            id: 'd214_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Fill aucun / aucune / chaque / quelques: Tammy : J’ai ___ admirateurs ! (a few — pl.)',
            promptZh: 'Tex 第 5 题：我有“好几个 / 一些”仰慕者（复数）！',
            answers: ['quelques'],
            hint: 'Only one of the 4 choices works with plural "admirateurs"!',
            audio: 'J’ai quelques admirateurs !',
            explain: '"admirateurs" is plural → "quelques admirateurs".',
            explainZh: '4 个候选词里只有 "quelques" 后面接复数名词！'
          },
          {
            id: 'd214_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Fill aucun / aucune / chaque / quelques: Bette : ___ homme ne me résiste ! (not a single — m.sg.)',
            promptZh: 'Tex 第 6 题：没有“任何一个”男人能抵挡得住我（homme 阳性单数 + ne）！',
            answers: ['Aucun', 'aucun'],
            hint: 'Notice "ne" before the verb + masculine singular "homme".',
            audio: 'Aucun homme ne me résiste !',
            explain: '"Aucun homme ne..." = Not a single man... ("ne" signals negative "aucun"!).',
            explainZh: '动词前有 ne，且 homme 阳性单数，“没有任何人”填 "Aucun"。'
          },
          {
            id: 'd214_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Fill aucun / aucune / chaque / quelques: Tex : J’écris un nouveau poème ___ semaine. (every week — sg.)',
            promptZh: 'Tex 第 7 题：我“每个”星期都写一首新诗（semaine 单数）。',
            answers: ['chaque'],
            hint: 'Invariable word for "each / every" (never changes even for feminine "semaine"!).',
            audio: 'J’écris un nouveau poème chaque semaine.',
            explain: '"chaque" stays identical for both masculine and feminine singular nouns: "chaque semaine".',
            explainZh: 'chaque 阴阳性同形且永不变形，表示“每周”填 "chaque"。'
          },
          {
            id: 'd214_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Fill aucun / aucune / chaque / quelques: Bette : J’ai ___ doutes sur l’amour de Tex et Tammy. (a few — pl.)',
            promptZh: 'Tex 第 8 题：我对 Tex 和 Tammy 的爱情有“一些”怀疑（doutes 复数）。',
            answers: ['quelques'],
            hint: 'Notice plural "-s" on "doutes" and affirmative verb "ai"!',
            audio: 'J’ai quelques doutes sur l’amour de Tex et Tammy.',
            explain: 'Plural "doutes" in an affirmative sentence → "quelques doutes".',
            explainZh: '肯定句 + 复数 doutes，填 "quelques"。'
          },
          {
            id: 'd214_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Fill aucun / aucune / chaque / quelques: Joe-Bob : À ___ jour suffit sa peine ! ("To each day...")',
            promptZh: 'Tex 第 9 题（法国谚语）：每一天自有一天的烦忧 / 今日事今日忧（each）。',
            answers: ['chaque'],
            hint: 'French proverb: "Each/Every day has enough trouble of its own."',
            audio: 'À chaque jour suffit sa peine !',
            explain: 'Famous proverb: "À chaque jour suffit sa peine."',
            explainZh: '经典法语谚语：À chaque jour suffit sa peine。'
          },
          {
            id: 'd214_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — Fill aucun / aucune / chaque / quelques: Tammy : Tex a ___ amis en France. (a few — pl.)',
            promptZh: 'Tex 第 10 题：Tex 在法国有“几个”朋友（amis 复数）。',
            answers: ['quelques'],
            hint: 'Affirmative + plural "amis".',
            audio: 'Tex a quelques amis en France.',
            explain: 'Plural "amis" → "quelques amis".',
            explainZh: '复数朋友，填 "quelques"。'
          },
          {
            id: 'd214_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Fill aucun / aucune / chaque / quelques: Bette : Tammy n’a ___ charme ! (none at all — charme m.sg.)',
            promptZh: 'Tex 第 11 题：Tammy “一点魅力也没有”（charme 阳性单数 + n’）！',
            answers: ['aucun'],
            hint: '"charme" is masculine singular; "n’" marks negative!',
            audio: 'Tammy n’a aucun charme !',
            explain: '"charme" is masculine singular → "aucun charme".',
            explainZh: 'charme 为阳性单数，与否定 n’ 配合填 "aucun"。'
          },
          {
            id: 'd214_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — Fill aucun / aucune / chaque / quelques: Joe-Bob : Tex, tu me donnes ___ dollars ? (a few — pl.)',
            promptZh: 'Tex 第 12 题：Tex，你能给我“几”块钱吗（dollars 复数）？',
            answers: ['quelques'],
            hint: 'Plural "dollars".',
            audio: 'Tex, tu me donnes quelques dollars ?',
            explain: 'Plural "dollars" → "quelques dollars".',
            explainZh: '复数美元，填 "quelques"。'
          }
        ],
        related: [
          { chapterId: 'ch2_determiners', pageId: 'det_2_13', label: '2.13 tout (2): Adverb & Idioms' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_1', label: 'Back to 2.1 Intro to Determiners' },
          { chapterId: 'ch1_nouns', pageId: 'no_1_8', label: '1.8 il y a Negatives' }
        ]
      }
    ]
  });
})();
