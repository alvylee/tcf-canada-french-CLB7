(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch8a_pronouns_personal',
    code: 'Ch 8A',
    level: 'A1–B1',
    category: 'pronouns_a',
    icon: '👤',
    title: 'Pronouns I: Subject, Tonic & Object Pronouns',
    titleZh: '第八章 A · 核心人称与宾语代词（主语、c’est/il est、重读、COD/COI、y/en 与双宾语序）',
    subtitle: 'Tex-style slow-paced deep mastery of French personal & adverbial pronouns (pro1–pro9 split into 11 bite-sized pages): antecedents, subject pronouns & c’est vs. il/elle est, tonic/disjunctive pronouns, direct objects (COD) + past participle agreement, y & en, indirect objects (COI), and double object pronoun order in statements & imperatives — with 14 original Tex cartoons & 130 drills.',
    subtitleZh: '对标 Tex 第八章前半部分（pro1–pro9 原站精髓）拆分为 11 个轻松小页：先行词与九大代词地图、主语代词（含物主代替代词与男女混合）、c’est vs il/elle est、重读代词（8大场景）、直宾代词 COD 与复合过去时配合、地方代词 y、数量/de 代词 en、间宾代词 COI 与及物性陷阱、以及双宾语代词五槽语序与肯定/否定命令式，配 14 张原版卡通与 130 题专练。',
    pages: [
      /* =========================================================
         PAGE 8A.1: INTRO TO PRONOUNS & ANTECEDENTS (pro1)
      ========================================================= */
      {
        id: 'p8a_1',
        code: '8A.1',
        group: 'Intro & Subject',
        shortTitle: 'What Is a Pronoun? & Overview',
        title: 'Introduction to Pronouns: Antecedents & All 9 French Pronoun Families',
        titleZh: '代词入门：什么是先行词（Antecedent）？法语九大代词家族总览',
        estMin: 3,
        summary: 'Understand how French pronouns replace previously named nouns ("antecedents") to avoid clumsy repetition ("Tex a écrit un poème... il l’a envoyé à Tammy. Elle a été choquée quand elle l’a lu"), and survey all 9 French pronoun families organized by sentence job.',
        summaryZh: '理解代词的核心作用——替代前文已经出现过的名词（即“先行词” antecedent），避免啰嗦重复；通过“Tex 写诗给 Tammy 读”的经典例句看清主语代词与宾语代词的分工，并建立法语九大代词家族的全局地图。',
        cheatSummary: [
          { label: 'Core Principle: Antecedent First', rule: 'Every personal pronoun mirrors the gender, number, and grammatical role (subject, direct object, indirect object, place, or de-phrase) of its antecedent.', ruleZh: '代词先看两件事：① 它指代谁（性数保持一致）；② 它在句中充当什么成分（主语 / 直宾 / 间宾 / 地点 / de 引导短语）。' },
          { label: 'Word Order Shift vs. English/Chinese', rule: 'Subject pronouns go before verbs just like English, EXCEPT object pronouns (le, la, les, lui, leur, y, en) jump BEFORE the verb!', ruleZh: '汉语说“他读了**它**”（宾语在动词后），法语说“Il **l’**a lu”（绝大多数宾语代词要跳到变位动词或助动词**前面**）！' }
        ],
        sections: [
          {
            id: 'p8a1_antecedent',
            heading: '1. Antecedents in Action & Why Word Function Matters',
            headingZh: '一、先行词实战：一眼认出代词替代了谁',
            lead: 'A pronoun replaces a noun already mentioned in the context — called its antecedent. Look at how three pronouns keep Tex’s story flowing naturally without repeating "Tex", "un poème érotique", or "Tammy":',
            leadZh: '读懂这一句，你就看透了一半的法语代词体系：同一首诗、同一个人在不同位置要换穿不同的“制服”：',
            cartoon: {
              src: './assets/tex_cartoons/pro1_choquee.gif',
              alt: 'Tammy choquée en lisant le poème de Tex',
              caption: 'Tex a écrit un poème érotique, et puis il l’a envoyé à Tammy. Elle a été choquée quand elle l’a lu.',
              captionZh: 'Tex 写了一首情诗，然后他把它寄给了 Tammy。她读完时吓了一跳。'
            },
            examples: [
              { fr: 'Tex a écrit un poème érotique, et puis il l’a envoyé à Tammy.', en: 'Tex → il (subject); un poème érotique → l’ (direct object before auxiliary "a")', zh: 'il 指代主语 Tex；l’ 指代直宾 un poème（且提前到助动词 a 前面）。', tag: 'Subject + COD' },
              { fr: 'Elle a été choquée quand elle l’a lu.', en: 'Tammy → elle (feminine subject); un poème → l’ (masculine direct object)', zh: 'à Tammy 在后一句变成主语，所以改用阴性主语代词 elle。', tag: 'Antecedent Match' }
            ],
            quickCheck: {
              prompt: 'In "Elle a été choquée quand elle l’a lu", what does the pronoun "l’" refer back to?',
              promptZh: '在例句 “Elle a été choquée quand elle l’a lu.” 中，代词 l’ 指代前文的哪个名词？',
              options: [
                'un poème érotique (direct object of "lire")',
                'Tammy (indirect object)',
                'Tex (subject)',
                'choquée (adjective)'
              ],
              answerIdx: 0,
              explain: '"Elle l’a lu" = She read it ("un poème érotique"). That is why "lu" stays masculine singular!',
              explainZh: 'l’ 指代阳性单数直宾 un poème érotique（“读了它”），因此过去分词 lu 保持阳性单数不变。'
            }
          },
          {
            id: 'p8a1_overview',
            heading: '2. Complete Map of French Pronoun Families',
            headingZh: '二、法语九大代词家族总览表',
            lead: 'Tex organizes all French pronouns by their grammatical function. Notice that Ch 8A masters the first 6 core families below, while Ch 8B covers Relative, Demonstrative, Possessive & Indefinite pronouns:',
            leadZh: '先整体鸟瞰九大代词的功能分工（第 8A 章先逐个攻克前六大高频人称/副代词，第 8B 章再攻克关系/指示/物主/不定代词）：',
            table: {
              headers: ['Family', 'Core Forms', 'Replaces / Job', 'Example'],
              rows: [
                { cols: ['Subject (Sujet)', 'je, tu, il, elle, on, nous, vous, ils, elles', 'Verb subject (mandatory)', 'Elle parle français.'], audio: 'Elle parle français.' },
                { cols: ['Disjunctive (Tonique)', 'moi, toi, lui, elle, soi, nous, vous, eux, elles', 'After prepositions / stress / C’est...', 'Je viens avec lui.'], audio: 'Je viens avec lui.' },
                { cols: ['Direct Object (COD)', 'me, te, le, la, l’, nous, vous, les', 'Replaces noun with NO preposition', 'Je l’aime.'], audio: 'Je l’aime.' },
                { cols: ['Indirect Object (COI)', 'me, te, lui, nous, vous, leur', 'Replaces à + person', 'Tex lui offre des fleurs.'], audio: 'Tex lui offre des fleurs.' },
                { cols: ['Pronoun Y & EN', 'y (place / à + thing) · en (quantity / de + thing)', 'Replaces location / du, de + noun', 'J’y vais. · J’en veux.'], audio: 'J’y vais. J’en veux.' },
                { cols: ['Reflexive (Réfléchi)', 'me, te, se, nous, vous, se', 'Subject acts on itself / each other', 'Nous nous levons tôt.'], audio: 'Nous nous levons tôt.' },
                { cols: ['Interrogative / Relative (Ch 8B)', 'qui, que, où, dont, lequel / qui, que, quoi', 'Questions & clause connectors', 'le livre que je lis'], audio: 'le livre que je lis' },
                { cols: ['Dem. / Poss. / Indef. (Ch 8B)', 'celui / le mien / quelqu’un, quelque chose', 'This one / mine / someone', 'celui-ci est à moi'], audio: 'celui-ci est à moi' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'd8a1_d1',
            kind: 'choice',
            prompt: 'Which pronoun family replaces a noun after prepositions like "avec", "pour", or "sans"?',
            promptZh: '在介词 avec / pour / sans 后面指代“他、她、我”时，应该用哪一类代词？',
            options: ['Disjunctive / Tonic (moi, toi, lui, elle...)', 'Subject (je, tu, il, elle)', 'Pronoun y', 'Direct object (le, la, les)'],
            answerIdx: 0,
            audio: 'Elle ne peut pas vivre sans lui.',
            explain: 'Prepositions always trigger disjunctive (tonic/stressed) pronouns: sans lui, avec toi, pour eux.',
            explainZh: '介词后面必须用重读代词（例如 sans lui, avec moi, pour elles）。'
          },
          {
            id: 'd8a1_d2',
            kind: 'choice',
            prompt: 'Identify the antecedent of "lui" in: "Tammy invite Edouard, et elle lui offre du thé."',
            promptZh: '判断句中 lui 指代谁：“Tammy invite Edouard, et elle lui offre du thé.”',
            options: ['Edouard (à Edouard)', 'Tammy', 'du thé', 'elle'],
            answerIdx: 0,
            audio: 'Tammy invite Edouard, et elle lui offre du thé.',
            explain: '"offrir quelque chose à quelqu’un" → "à Edouard" becomes indirect object "lui".',
            explainZh: 'offrir qqch à qqn，所以 lui 指代 à Edouard。'
          },
          {
            id: 'd8a1_d3',
            kind: 'choice',
            prompt: 'Which pronoun replaces "à Montréal" (location) in "J’habite à Montréal"?',
            promptZh: '要替代地点短语 à Montréal，应使用哪个代词？',
            options: ['y (J’y habite.)', 'en (J’en habite.)', 'le (Je l’habite.)', 'lui (Je lui habite.)'],
            answerIdx: 0,
            audio: 'J’y habite.',
            explain: 'Preposition + place (à Montréal, en France, chez Paul) is replaced by "y".',
            explainZh: '地点介词短语（à/en/dans/sur + 地点）由副代词 y 替代。'
          },
          {
            id: 'd8a1_d4',
            kind: 'choice',
            prompt: 'Which pronoun replaces partitive/de-phrases like "du vin" or "beaucoup de livres"?',
            promptZh: '要替代部分冠词 du vin 或 de 引导的数量短语，应使用哪个代词？',
            options: ['en (J’en bois.)', 'y (J’y bois.)', 'lui (Je lui bois.)', 'ce (Je ce bois.)'],
            answerIdx: 0,
            audio: 'J’en bois.',
            explain: '"en" replaces du/de la/des + noun or nouns after numbers/quantities.',
            explainZh: 'en 专门替代 du / de la / des 或 de + 名词 / 数量词后的名词。'
          },
          {
            id: 'd8a1_d5',
            kind: 'choice',
            prompt: 'Where do French single object pronouns (le, la, lui, y, en) stand in a normal present or passé composé sentence?',
            promptZh: '在普通陈述句和复合过去时中，大多数法语宾语代词放在什么位置？',
            options: ['Directly before the conjugated verb or auxiliary', 'After the verb, just like in English', 'At the very end of the sentence', 'After the past participle'],
            answerIdx: 0,
            audio: 'Il l’a envoyé à Tammy.',
            explain: 'Except in affirmative imperatives, object pronouns go right BEFORE the conjugated verb or auxiliary ("Il l’a lu").',
            explainZh: '除了肯定命令式外，宾语代词一律放在变位动词或助动词（avoir/être）前面。'
          },
          {
            id: 'd8a1_d6',
            kind: 'fib',
            prompt: 'Replace the underlined direct object: Tex écrit un poème, puis il ___ envoie à Tammy. (le/la/l’)',
            promptZh: '把 un poème（阳性单数直宾）替换成代词，放在 envoie 前面（注意元音省音）：',
            answers: ["l'", 'l’'],
            hint: 'Masculine singular "le" elides to l’ before vowel "envoie"!',
            audio: 'Il l’envoie à Tammy.',
            explain: 'le → l’ before a vowel: "il l’envoie".',
            explainZh: 'le 在元音开头的动词 envoie 前必须省音成 l’。'
          },
          {
            id: 'd8a1_d7',
            kind: 'fib',
            prompt: 'Replace "Tammy" as subject: Tammy lit le poème → ___ a été choquée.',
            promptZh: '用主语代词替换阴性单数主语 Tammy：',
            answers: ['elle', 'Elle'],
            hint: 'Feminine singular subject pronoun.',
            audio: 'Elle a été choquée.',
            explain: 'Tammy → Elle.',
            explainZh: 'Tammy 为阴性单数，主语代词用 Elle。'
          },
          {
            id: 'd8a1_d8',
            kind: 'choice',
            prompt: 'What is the indirect object pronoun meaning "to them" (à mes amis / à mes parents)?',
            promptZh: '表示“给他们 / 对她们”（复数间接宾语 à + 复数人）用哪个代词？',
            options: ['leur', 'les', 'eux', 'leurs'],
            answerIdx: 0,
            audio: 'Je leur parle souvent.',
            explain: 'Indirect object pronoun "leur" ("to them") NEVER takes a final -s (unlike possessive "leurs livres").',
            explainZh: '间宾代词 leur 永远不加 -s（leurs 只作“他们的”形容词用）。'
          },
          {
            id: 'd8a1_d9',
            kind: 'choice',
            prompt: 'Which family do "celui-ci" and "celle-là" belong to?',
            promptZh: 'celui-ci（这一个）和 celle-là（那一个）属于哪一类代词？',
            options: ['Demonstrative pronouns (this one / that one)', 'Subject pronouns', 'Indirect object pronouns', 'Reflexive pronouns'],
            answerIdx: 0,
            audio: 'Celui-ci est meilleur.',
            explain: 'celui / celle / ceux / celles are demonstrative pronouns (covered in Ch 8B).',
            explainZh: 'celui 系列是指示代词（将在第八章 B 详细展开）。'
          },
          {
            id: 'd8a1_d10',
            kind: 'choice',
            prompt: 'Why is a subject pronoun mandatory in French?',
            promptZh: '为什么法语动词前面几乎不能省略主语代词？',
            options: [
              'Many conjugated verb endings sound identical aloud (parle/parles/parlent), so the pronoun identifies who acts.',
              'French verbs have no endings at all.',
              'Only il and elle need pronouns.',
              'French allows dropping je and tu freely like Spanish.'
            ],
            answerIdx: 0,
            audio: 'Je parle, tu parles, il parle.',
            explain: 'Unlike Spanish/Italian, French verb endings are mostly silent in speech, so subject pronouns are mandatory (except imperatives).',
            explainZh: '很多法语动词词尾读音相同，因此除命令式外，主语（或主语代词）必须显性写出。'
          }
        ],
        related: [
          { chapterId: 'ch6_prepositions', pageId: 'pr_11', label: 'Back to 7.11 Infinitives & après Past Inf.' },
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_2', label: '8A.2 Subject Pronouns (je, tu/vous, on, ils/elles)' }
        ]
      },

      /* =========================================================
         PAGE 8A.2: SUBJECT PRONOUNS (pro2)
      ========================================================= */
      {
        id: 'p8a_2',
        code: '8A.2',
        group: 'Intro & Subject',
        shortTitle: 'Subject Pronouns (je..ils/elles)',
        title: 'Subject Pronouns: je, tu vs. vous, on (= nous), Things as il/elle & Mixed ils',
        titleZh: '主语代词全解：je 大小写、tu/vous 礼貌界限、口语 on、物品分性 il/elle 与混合用 ils',
        estMin: 4,
        summary: 'Master all 9 French subject pronouns: "je" (lowercase mid-sentence), singular informal "tu" vs. plural/polite "vous", versatile "on" (general people / colloquial "we"), "il / elle" replacing objects by grammatical gender ("la musique → elle", "le juke-box → il"), and "elles" (100% feminine) vs. "ils" (any mixed group). Includes both Tex dialogues!',
        summaryZh: '吃透法语九大主语代词的五大关键规则：① `je` 在句中**不高大写**（与英语 `I` 不同）；② `tu` 对熟人/平辈/小孩，`vous` 对长辈/陌生人/上司或复数人群；③ `on` 既表“人们/大家”，更是法国与魁北克日常口语里最常用的 **nous（我们）**；④ 法语没有中性 it，物品全按阴阳性用 **`il` 或 `elle`**；⑤ 复数只要有哪怕**一个**阳性词或男性成员，就必须用 **`ils`**！',
        cheatSummary: [
          { label: 'tu vs. vous & on vs. nous', rule: 'tu = 1 close friend/child. vous = plural OR 1 person respectfully (Paw-Paw, boss, stranger). on = general "people/one" OR everyday "we" (takes 3rd sg. verb!).', ruleZh: 'tu 只对单一熟人/晚辈；vous 用于尊称单数或所有复数。口语“我们”常用 on + 第三人称单数动词（On y va ?）。' },
          { label: 'No "it" + Mixed Gender Rule', rule: 'le juke-box → il est cassé (masc. "it"). la musique → elle est bonne (fem. "it"). Mixed group (Bette + Tex) → ils s’entendent bien. All female → elles.', ruleZh: '物体也按性数选 il / elle / ils / elles！男女混合或阴阳名词混合，复数一律用 ils！' }
        ],
        sections: [
          {
            id: 'p8a2_table_nuance',
            heading: '1. Subject Pronoun Table & Key Contrastive Rules',
            headingZh: '一、主语代词表与四项容易忽视的细节',
            lead: 'Remember three surprises compared to English: "je" is NOT capitalized mid-sentence; "vous" handles both polite singular and plural "you"; and "on" takes a singular 3rd-person verb even when it means "we"!',
            leadZh: '背熟下表并留意右栏说明；尤其是老一辈长辈称呼孩子、晚辈敬称长辈的场景：',
            cartoon: {
              src: './assets/tex_cartoons/pro2_bonjour.gif',
              alt: 'Tammy salue Paw-Paw avec vous',
              caption: 'Tammy: Bonjour, Paw-Paw. Vous allez bien ? — Paw-Paw: Ah, oui ! Et vous, mes enfants, vous allez bien ?',
              captionZh: 'Tammy 礼貌问候爷爷用 vous（单数敬称）；爷爷问两个孩子也用 vous（复数“你们”）！'
            },
            table: {
              headers: ['Person', 'Singular', 'Plural', 'Key Rule & Contrast'],
              rows: [
                { cols: ['1st', 'je (j’ + vowel/h)', 'nous', 'je is lowercase inside a sentence ("Oui, je vais bien.")'], audio: 'je parle, nous parlons' },
                { cols: ['2nd', 'tu (1 close/kid)', 'vous (2+ OR formal 1)', 'Calling a boss/elder "tu" sounds disrespectful!'], audio: 'tu vas bien, vous allez bien' },
                { cols: ['3rd Masc.', 'il (he / masc. it)', 'ils (all M or mixed M+F)', 'Even 100 women + 1 man → ils!'], audio: 'il est cassé, ils sont là' },
                { cols: ['3rd Fem.', 'elle (she / fem. it)', 'elles (100% feminine)', 'Replaces all-feminine people or objects (la craie → elle)'], audio: 'elle est bonne, elles sont parties' },
                { cols: ['3rd Imp.', 'on (3rd sg. verb!)', '(replaces nous in speech)', '"On y va ?" (Shall we go?) · "Comme on dit" (As people say)'], audio: 'On y va ?' }
              ]
            },
            examples: [
              { fr: 'Bette : La musique est bonne, n’est-ce pas ? — Tex : Non, elle est terrible !', en: 'The music is good, isn’t it? — No, it’s terrible!', zh: 'la musique（阴性单数）→ 必须用 elle 替代英语的 it！', tag: 'Fem. Object = elle' },
              { fr: 'Bette : Le juke-box est cassé ? — Tex : Oui, il est cassé !', en: 'Is the jukebox broken? — Yes, it is broken!', zh: 'le juke-box（阳性单数）→ 必须用 il 替代英语的 it！', tag: 'Masc. Object = il' },
              { fr: 'Bette et Tex sont de bons amis. Normalement ils s’entendent bien.', en: 'Bette (f.) and Tex (m.) are good friends. Normally they get along.', zh: '一雌一雄混合主语，复数主语代词只能用 ils！', tag: 'Mixed = ils' }
            ]
          },
          {
            id: 'p8a2_dialogue',
            heading: '2. Dialogue: Fiona & Tex at the Broken Spoke (on, elles, il)',
            headingZh: '二、Tex 实景对话：品味口语里的 on、elles 与 il',
            lead: 'Listen closely to how Tex switches seamlessly between "on" (= Bette and I / people in general) and "elles" (= Tammy & Bette, all-feminine plural):',
            leadZh: '在 Fiona 和 Tex 的对话里观察 **on** 如何在同一段话里先后表示“我们俩（Bette et moi, on）”和“大家（on aime）”：',
            cartoon: {
              src: './assets/tex_cartoons/pro2_jukebox.gif',
              alt: 'Le juke-box est cassé à Broken Spoke',
              caption: 'Qu’est-ce qu’on aime la musique country au Texas ! (le juke-box → il · la musique → elle)',
              captionZh: '德克萨斯人真是爱死了乡村音乐！（口语感叹中常用泛指主语 on！）'
            },
            dialogue: {
              title: 'Fiona & Tex: Country Music & Friend Drama',
              titleZh: '小对话：吵架与音乐',
              lines: [
                { speaker: 'Fiona', fr: 'Bonjour Tex, tu vas bien ?', en: 'Hi Tex, are you doing well?', zh: '嗨 Tex，你还好吗？（平辈熟人用 tu）' },
                { speaker: 'Tex', fr: 'Pas du tout, je vais très mal. Et puis Bette et moi, on s’est disputé.', en: 'Not at all, I’m doing poorly. And Bette and I had a fight.', zh: '一点也不好，而且我跟 Bette 吵架了。（on = nous）' },
                { speaker: 'Fiona', fr: 'Ah bon ? Elle est toujours là ?', en: 'Oh really? Is she still here?', zh: '真的吗？她还在吗？' },
                { speaker: 'Tex', fr: 'Non. Elle est partie avec Tammy. Elles sont allées au Broken Spoke.', en: 'No. She left with Tammy. They went to the Broken Spoke.', zh: '不在了，她跟 Tammy 一起走了（两个都是女生，用 Elles）。' },
                { speaker: 'Fiona', fr: 'Tiens, nous y allons, toi et moi ?', en: 'Hey, why don’t you and I go there?', zh: '要不咱俩也去那儿吧？' },
                { speaker: 'Tex', fr: 'Beurk ! Qu’est-ce qu’on aime la musique country au Texas !', en: 'Argh! People really like country music in Texas!', zh: '真受不了！德州大家怎么这么喜欢乡村音乐！' }
              ]
            },
            quickCheck: {
              prompt: 'What replaces "la chaise et le bureau" ("the chair [f.] and the desk [m.]") as subject?',
              promptZh: '如果想用代词指代 “la chaise et le bureau（一把阴性椅子和一张阳性书桌）”，该选哪一个？',
              options: ['ils', 'elles', 'on', 'nous'],
              answerIdx: 0,
              explain: 'At least one noun is masculine ("le bureau"), so the plural pronoun MUST be masculine "ils"!',
              explainZh: '只要混入一个阳性名词（le bureau），复数就必须用阳性 ils！'
            }
          }
        ],
        drills: [
          {
            id: 'd8a2_d1',
            kind: 'fib',
            prompt: 'Edouard : ___ suis un escargot français. (I)',
            promptZh: 'Tex 原题 #1：我是一只法国蜗牛。（句首注意大写）',
            answers: ['Je', 'je'],
            hint: '1st person singular.',
            audio: 'Je suis un escargot français.',
            explain: 'Je = I.',
            explainZh: '第一人称单数 Je。'
          },
          {
            id: 'd8a2_d2',
            kind: 'fib',
            prompt: 'Tex : ___ m’appelle Tex. (I)',
            promptZh: 'Tex 原题 #2：我叫 Tex。',
            answers: ['Je', 'je'],
            hint: '1st person singular.',
            audio: 'Je m’appelle Tex.',
            explain: 'Je m’appelle Tex.',
            explainZh: 'Je 搭配 m’appelle。'
          },
          {
            id: 'd8a2_d3',
            kind: 'fib',
            prompt: 'Joe-Bob : Bonjour, Tammy, ___ vas bien ? (you, familiar)',
            promptZh: 'Tex 原题 #3：Joe-Bob 问好朋友 Tammy：“你好吗？”（亲近单数）',
            answers: ['tu'],
            hint: '2nd person singular informal.',
            audio: 'Bonjour Tammy, tu vas bien ?',
            explain: '"vas" is the "tu" conjugation.',
            explainZh: '好朋友单数且后接 vas，填 tu。'
          },
          {
            id: 'd8a2_d4',
            kind: 'fib',
            prompt: 'Corey : Tex, ___ es un tatou ? (you, familiar)',
            promptZh: 'Tex 原题 #4：Tex，你是一只犰狳吗？',
            answers: ['tu'],
            hint: 'Verb "es" matches tu.',
            audio: 'Tex, tu es un tatou ?',
            explain: 'tu es.',
            explainZh: '动词 es 对应主语 tu。'
          },
          {
            id: 'd8a2_d5',
            kind: 'fib',
            prompt: 'Tex ? ___ est professeur. (he)',
            promptZh: 'Tex 原题 #5：Tex？他是老师。',
            answers: ['Il', 'il'],
            hint: '3rd person masculine singular.',
            audio: 'Tex ? Il est professeur.',
            explain: 'Tex is masculine singular → Il.',
            explainZh: '阳性单数用 Il。'
          },
          {
            id: 'd8a2_d6',
            kind: 'fib',
            prompt: 'Tammy ? ___ est étudiante. (she)',
            promptZh: 'Tex 原题 #6：Tammy？她是大学生。',
            answers: ['Elle', 'elle'],
            hint: '3rd person feminine singular.',
            audio: 'Tammy ? Elle est étudiante.',
            explain: 'Tammy is feminine singular → Elle.',
            explainZh: '阴性单数用 Elle。'
          },
          {
            id: 'd8a2_d7',
            kind: 'fib',
            prompt: 'Tex : En France, ___ est content ? (one / people)',
            promptZh: 'Tex 原题 #7：在法国，大家开心吗？（泛指“人们”）',
            answers: ['on'],
            hint: 'Impersonal / general subject pronoun (takes 3rd sg. verb).',
            audio: 'En France, on est content ?',
            explain: 'on = people / one / colloquial we.',
            explainZh: '泛指大家/人们用 on。'
          },
          {
            id: 'd8a2_d8',
            kind: 'fib',
            prompt: 'La craie ? ___ est bleue. (it, feminine noun!)',
            promptZh: 'Tex 原题 #8：粉笔（la craie，阴性）？它是蓝色的。',
            answers: ['Elle', 'elle'],
            hint: 'la craie is feminine → do not use *il!',
            audio: 'La craie ? Elle est bleue.',
            explain: '"la craie" is feminine (and "bleue" ends in -e), so "it" = Elle.',
            explainZh: 'la craie 是阴性物品名词，替代“它”必须用 Elle。'
          },
          {
            id: 'd8a2_d9',
            kind: 'fib',
            prompt: 'Tex : Mes étudiants, ___ sommes français. (we)',
            promptZh: 'Tex 原题 #9：我的学生们，我们是法国人。',
            answers: ['nous'],
            hint: 'Verb "sommes" matches 1st person plural.',
            audio: 'Mes étudiants, nous sommes français.',
            explain: 'nous sommes.',
            explainZh: '后接 sommes，主语为 nous。'
          },
          {
            id: 'd8a2_d10',
            kind: 'fib',
            prompt: 'Joe-Bob : Bonjour, monsieur le professeur. Comment allez-___ ? (you, formal)',
            promptZh: 'Tex 原题 #10：教授先生您好！您近来可好？（敬称倒装）',
            answers: ['vous'],
            hint: 'Polite singular pronoun after allez-.',
            audio: 'Bonjour, monsieur le professeur. Comment allez-vous ?',
            explain: 'Formal address to a professor requires "vous".',
            explainZh: '敬称老师用 vous（Comment allez-vous ?）。'
          },
          {
            id: 'd8a2_d11',
            kind: 'fib',
            prompt: 'Corey et Joe-Bob ? ___ sont du Texas. (they, masc.)',
            promptZh: 'Tex 原题 #11：Corey 和 Joe-Bob？他们来自德州。',
            answers: ['Ils', 'ils'],
            hint: 'Masculine plural subject pronoun.',
            audio: 'Corey et Joe-Bob ? Ils sont du Texas.',
            explain: 'Two male characters → Ils.',
            explainZh: '两个男性/阳性主语用 Ils。'
          },
          {
            id: 'd8a2_d12',
            kind: 'fib',
            prompt: 'Tammy et Bette ? ___ sont étudiantes. (they, all fem.)',
            promptZh: 'Tex 原题 #12：Tammy 和 Bette？她们是大学生。',
            answers: ['Elles', 'elles'],
            hint: 'All-feminine plural subject pronoun.',
            audio: 'Tammy et Bette ? Elles sont étudiantes.',
            explain: 'All-feminine group → Elles.',
            explainZh: '全部为女性/阴性成员，复数用 Elles。'
          }
        ],
        related: [
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_1', label: 'Back to 8A.1 Intro to Pronouns' },
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_3', label: '8A.3 c’est vs. il/elle est' }
        ]
      },

      /* =========================================================
         PAGE 8A.3: C'EST VS. IL/ELLE EST (pro3)
      ========================================================= */
      {
        id: 'p8a_3',
        code: '8A.3',
        group: 'Intro & Subject',
        shortTitle: 'c’est vs. il/elle est',
        title: 'c’est / ce sont vs. il/elle est / ils/elles sont — Never Confuse Them Again',
        titleZh: '黄金高频对比：c’est / ce sont 与 il/elle est 的彻底分界线',
        estMin: 4,
        summary: 'Solve one of French learners’ #1 mistakes: use "c’est / ce sont" before ANY determined noun ("un tatou", "mes livres"), modified noun ("un petit tatou bilingue"), proper name ("C’est Tex"), tonic pronoun ("C’est moi"), date ("C’est le 14 juillet"), infinitive subject ("Vivre, c’est..."), or general/non-specific adjective ("C’est stupide!"). Use "il/elle est / ils/elles sont" ONLY before bare adjectives, professions/nationalities/religions without articles ("Il est poète / Il est américain").',
        summaryZh: '一次性根治法语最经典错误！只要后接**带限定词的名词**（`un tatou`、`des étudiantes`）、**专有名词**（`C’est Tex`）、**重读代词**（`C’est moi`）、**具体日期**、**不定式作主语**，或者**感叹一件事而非某个具体的人/物**（`C’est stupide !` 这事真蠢），全部用 **`c’est / ce sont`**；而当后接**孤零零的形容词**、**不加冠词的职业/国籍/身份**（`Il est poète`、`Elle est étudiante`）时，用 **`il / elle est`**！',
        cheatSummary: [
          { label: 'When to Use c’est / ce sont', rule: '1) + Determiner + noun ("C’est un tatou / Ce sont des tatous") · 2) + Proper noun ("C’est Tex") · 3) + Tonic pronoun ("C’est toi!") · 4) + Date · 5) + Infinitive ("Vivre, c’est parler français") · 6) Non-specific "That’s + adj." ("C’est génial !")', ruleZh: '看见后面有冠词/限定词（un, une, des, le, mon...）、人名、moi/toi、日期、原形动词，或泛指“这件事真……”→ 必选 c’est / ce sont！' },
          { label: 'When to Use il/elle est / ils/elles sont', rule: '1) + Bare Adjective referring to a specific noun ("Il est arrogant", "Elle est gentille") · 2) + Unmodified Profession / Nationality / Religion ("Il est médecin", "Elle est américaine"). Contrast: "Il est médecin." vs "C’est un bon médecin."!', ruleZh: '后面只有光杆形容词，或无冠词修饰的国籍/职业（Il est poète）→ 必选 il/elle est！注意对比：Il est professeur（职业无冠词） vs C’est un bon professeur（带冠词与修饰语）！' }
        ],
        sections: [
          {
            id: 'p8a3_rules',
            heading: '1. Side-by-Side Comparison Grid',
            headingZh: '一、c’est / ce sont vs. il/elle est 全景对比表',
            lead: 'Remember the two golden tests: (1) Look right after the verb — is there a determiner (un/une/des/le/mon)? Yes = c’est / ce sont! (2) Does the pronoun mean a specific person/thing ("he/she/it is stupid") or a general idea/situation ("that’s stupid")?',
            leadZh: '记住两个秒杀口诀：① 空格后面只要出现**冠词/限定词**（un, une, des, le, mon...），直接填 `c’est / ce sont`；② 如果空格后面是光杆职业/国籍或直接评价某个具体的人，就填 `il est / elle est / ils sont / elles sont`！',
            cartoon: {
              src: './assets/tex_cartoons/pro3_vivre.gif',
              alt: 'Tex déclare : Vivre, c’est parler français',
              caption: 'Tex : Vivre, c’est parler français ! (Infinitive as subject → always "c’est"!)',
              captionZh: 'Tex：活着，就是说法语！（动词原形作主语定义某事，固定用 c’est！）'
            },
            table: {
              headers: ['What Follows the Verb?', 'Use...', 'Examples from Tex'],
              rows: [
                { cols: ['Determiner + Noun (incl. adj.+noun)', 'c’est / ce sont (ce ne sont pas)', 'C’est un tatou. · Ce sont des tatous.'], audio: 'C’est un petit tatou bilingue. Ce sont des tatous.' },
                { cols: ['Proper Noun / Disjunctive Pronoun', 'c’est (never *il est moi)', 'C’est Tex. · C’est moi ! · C’est toi !'], audio: 'C’est Tex. Allô, c’est moi !' },
                { cols: ['Calendar Dates & Infinitive Subjects', 'c’est', 'C’est le quatorze juillet. · Vivre, c’est parler français.'], audio: 'C’est le quatorze juillet. Vivre, c’est parler français.' },
                { cols: ['Non-specific Reaction ("That’s...")', 'c’est + masc. sg. adj.', 'Ah c’est chouette ! · C’est incroyable ! · C’est stupide.'], audio: 'C’est chouette ! C’est incroyable !' },
                { cols: ['Bare Adjective (specific person/thing)', 'il / elle est · ils / elles sont', 'Il est arrogant. · Elle est gentille. · Ils sont texans.'], audio: 'Il est arrogant. Elle est gentille.' },
                { cols: ['Unmodified Profession / Nationality', 'il / elle est (NO un/une!)', 'Il est poète. · Il est musicien. · Elle est étudiante.'], audio: 'Il est poète. Elle est étudiante.' }
              ]
            },
            examples: [
              { fr: 'Il est stupide. vs. C’est stupide.', en: 'He is stupid. (specific person) vs. That is stupid. (general comment)', zh: 'Il est stupide 指“他（这个人）笨”；C’est stupide 指“那件事/话太愚蠢了”！', tag: 'Specific vs. General' },
              { fr: 'Trey ? Il est musicien. · C’est un très bon musicien.', en: 'He is a musician. (bare → Il est) · He is a very good musician. (article un → C’est)', zh: '职业词只要加上 un / une 和形容词修饰，就立刻从 Il est 变成 C’est！', tag: 'Profession Shift' },
              { fr: 'Tammy et Tex ? Non, ce ne sont pas des chats ! Ce sont des tatous.', en: 'No, they aren’t cats! They are armadillos.', zh: '复数名词 des tatous 前用 ce sont（否定 ce ne sont pas；口语也常见 c’est）。', tag: 'Plural ce sont' }
            ],
            quickCheck: {
              prompt: 'Pick the ONE grammatically correct sentence in standard French:',
              promptZh: '下面哪一句完全符合标准法语规则？',
              options: [
                'Fiona ? Elle est étudiante. C’est une étudiante très sérieuse.',
                'Fiona ? C’est étudiante. Il est une étudiante très sérieuse.',
                'Fiona ? Elle est une étudiante très sérieuse.',
                'Fiona ? Ce sont étudiante.'
              ],
              answerIdx: 0,
              explain: 'Bare profession "étudiante" → "Elle est étudiante". Modified noun with "une" → "C’est une étudiante très sérieuse".',
              explainZh: '不带冠词说“她是学生”用 Elle est étudiante；带了 une 和修饰形容词则换用 C’est une étudiante très sérieuse。'
            }
          }
        ],
        drills: [
          {
            id: 'd8a3_d1',
            kind: 'fib',
            prompt: 'Edouard ? ___ français. (national adjective alone → il/elle/c’est)',
            promptZh: 'Tex 原题 #1：Edouard？他是法国人。（后面是光杆国籍形容词）',
            answers: ['Il est', 'il est'],
            hint: 'Adjective/nationality alone for Edouard (masc.) → Il est.',
            audio: 'Edouard ? Il est français.',
            explain: 'Nationality without an article uses il est: "Il est français."',
            explainZh: '无冠词的国籍形容词用 Il est（对比：C’est un Français）。'
          },
          {
            id: 'd8a3_d2',
            kind: 'fib',
            prompt: 'Tex ? ___ un tatou. (determined noun)',
            promptZh: 'Tex 原题 #2：Tex？他是一只犰狳。（后接 un tatou）',
            answers: ["C'est", 'C’est', "c'est", 'c’est'],
            hint: 'Determined noun "un tatou" triggers c’est!',
            audio: 'Tex ? C’est un tatou.',
            explain: '"un tatou" has determiner "un" → C’est un tatou.',
            explainZh: '名词带不定冠词 un，必须用 C’est！'
          },
          {
            id: 'd8a3_d3',
            kind: 'fib',
            prompt: 'Bette ? ___ américaine. (nationality adjective alone)',
            promptZh: 'Tex 原题 #3：Bette？她是美国人。（阴性单数光杆形容词）',
            answers: ['Elle est', 'elle est'],
            hint: 'Feminine subject Bette + bare adjective.',
            audio: 'Bette ? Elle est américaine.',
            explain: 'Bette (fem.) + bare nationality → Elle est américaine.',
            explainZh: '女性主语 + 光杆国籍形容词 → Elle est。'
          },
          {
            id: 'd8a3_d4',
            kind: 'fib',
            prompt: 'Fiona ? ___ une fourmi. (determined noun)',
            promptZh: 'Tex 原题 #4：Fiona？她是一只蚂蚁。（后接 une fourmi）',
            answers: ["C'est", 'C’est', "c'est", 'c’est'],
            hint: 'Even for a female noun/character, "une fourmi" takes C’est!',
            audio: 'Fiona ? C’est une fourmi.',
            explain: 'Determiner "une" + noun → C’est une fourmi (never *elle est une...).',
            explainZh: '哪怕指代女性，只要后面带了 une fourmi，依然要用 C’est！'
          },
          {
            id: 'd8a3_d5',
            kind: 'fib',
            prompt: 'Bette et Tammy ? ___ intelligentes. (bare plural adjective)',
            promptZh: 'Tex 原题 #5：Bette 和 Tammy？她们很聪明。',
            answers: ['Elles sont', 'elles sont'],
            hint: 'All-feminine plural subject + bare adjective.',
            audio: 'Bette et Tammy ? Elles sont intelligentes.',
            explain: 'Two females + bare adjective → Elles sont intelligentes.',
            explainZh: '全女性主语 + 光杆形容词 → Elles sont。'
          },
          {
            id: 'd8a3_d6',
            kind: 'fib',
            prompt: 'Fiona et Bette ? ___ des étudiantes à l’université du Texas.',
            promptZh: 'Tex 原题 #6：Fiona 和 Bette？她们是德州大学的学生。（带冠词 des）',
            answers: ['Ce sont', 'ce sont'],
            hint: 'Determined plural noun "des étudiantes" → Ce sont!',
            audio: 'Fiona et Bette ? Ce sont des étudiantes.',
            explain: '"des étudiantes" has determiner "des" → Ce sont.',
            explainZh: '名词前带了复数不定冠词 des，必须用 Ce sont！'
          },
          {
            id: 'd8a3_d7',
            kind: 'fib',
            prompt: 'Corey et Joe-Bob ? ___ texans. (bare masc. plural adj.)',
            promptZh: 'Tex 原题 #7：Corey 和 Joe-Bob？他们是德州人。（无冠词复数形容词）',
            answers: ['Ils sont', 'ils sont'],
            hint: 'Two males + bare adjective.',
            audio: 'Corey et Joe-Bob ? Ils sont texans.',
            explain: 'Bare plural adjective → Ils sont texans.',
            explainZh: '两个阳性主语 + 光杆形容词 → Ils sont。'
          },
          {
            id: 'd8a3_d8',
            kind: 'fib',
            prompt: 'Étudier le français ? ___ amusant ! (infinitive subject / general idea)',
            promptZh: 'Tex 原题 #8：学法语？那真有意思！（泛指一件事 / 动词不定式）',
            answers: ["C'est", 'C’est', "c'est", 'c’est'],
            hint: 'General concept / infinitive subject → always C’est!',
            audio: 'Étudier le français ? C’est amusant !',
            explain: 'Non-specific idea / infinitive subject → C’est + masculine singular adjective.',
            explainZh: '评价泛指概念或动词不定式时，固定用 C’est + 阳性单数形容词！'
          },
          {
            id: 'd8a3_d9',
            kind: 'fib',
            prompt: 'Tex : La date de l’examen final ? ___ le 10 décembre.',
            promptZh: 'Tex 原题 #9：期末考试日期？是 12 月 10 号。（日期）',
            answers: ["C'est", 'C’est', "c'est", 'c’est'],
            hint: 'Dates always use c’est.',
            audio: 'La date de l’examen ? C’est le dix décembre.',
            explain: 'Calendar dates use "C’est le...".',
            explainZh: '说明具体日期固定用 C’est le...。'
          },
          {
            id: 'd8a3_d10',
            kind: 'fib',
            prompt: 'Qui est au téléphone ? ___ Paw-Paw. (proper noun)',
            promptZh: 'Tex 原题 #10：电话那头是谁呀？是爷爷 Paw-Paw。（专有名词）',
            answers: ["C'est", 'C’est', "c'est", 'c’est'],
            hint: 'Proper name → C’est.',
            audio: 'Qui est au téléphone ? C’est Paw-Paw.',
            explain: 'Identifying people by name uses "C’est + Name".',
            explainZh: '后接人名必用 C’est（不说 *Il est Paw-Paw）。'
          },
          {
            id: 'd8a3_d11',
            kind: 'fib',
            prompt: 'Qui est-ce ? ___ moi ! (tonic pronoun)',
            promptZh: 'Tex 原题 #11：是谁呀？是我！（重读代词 moi）',
            answers: ["C'est", 'C’est', "c'est", 'c’est'],
            hint: 'Followed by tonic pronoun "moi".',
            audio: 'Qui est-ce ? C’est moi !',
            explain: 'c’est + moi/toi/lui/elle.',
            explainZh: '重读代词 moi 前固定用 C’est。'
          },
          {
            id: 'd8a3_d12',
            kind: 'fib',
            prompt: 'Tex et Tammy ? ___ des tatous. (plural noun)',
            promptZh: 'Tex 原题 #12：Tex 和 Tammy？他们是犰狳。（复数名词带 des）',
            answers: ['Ce sont', 'ce sont'],
            hint: 'Plural determined noun "des tatous".',
            audio: 'Tex et Tammy ? Ce sont des tatous.',
            explain: 'Plural "des tatous" → Ce sont des tatous.',
            explainZh: '后接复数限定名词 des tatous，填 Ce sont。'
          }
        ],
        related: [
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_2', label: 'Back to 8A.2 Subject Pronouns' },
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_4', label: '8A.4 Disjunctive / Tonic Pronouns' }
        ]
      },

      /* =========================================================
         PAGE 8A.4: DISJUNCTIVE / TONIC PRONOUNS (pro4)
      ========================================================= */
      {
        id: 'p8a_4',
        code: '8A.4',
        group: 'Tonic Pronouns',
        shortTitle: 'Disjunctive / Tonic Pronouns',
        title: 'Disjunctive (Stressed) Pronouns: moi, toi, lui, elle, soi, nous, vous, eux, elles',
        titleZh: '重读人称代词（moi / toi / lui / eux）：介词后、孤立回答、强调与比较句全解',
        estMin: 4,
        summary: 'Master all 9 French disjunctive/tonic pronouns (moi, toi, lui, elle, soi, nous, vous, eux, elles) and all 8 authentic situations where subject pronouns cannot stand alone: (1) after ANY preposition ("sans lui, pour lui, avec lui"), (2) verb-less answers ("Moi !"), (3) with ne...que / ni...ni ("Je n’aime que toi"), (4) compound subjects ("Tex et moi, nous..."), (5) "moi aussi / pas moi / moi non plus", (6) contrast/emphasis ("Eux, ils..., mais vous, vous..."), (7) after c’est/ce sont ("C’est moi"), and (8) -même & comparisons ("sur toi-même", "plus pitoyable que moi").',
        summaryZh: '法语的 **je / tu / il / ils** 是“粘在动词身上的主语代词”，只要脱离变位动词（例如跟在介词后面、单独回答问题、表示“我也是/我也不是”、在 `C’est` 后面、`que` 比较级后面、或加重语气对比时），就必须换成独立强壮的**重读代词（moi, toi, lui, elle, soi, nous, vous, eux, elles）**！特别注意第三人称复数阳性是 **`eux`**（不是 *ils*）。',
        cheatSummary: [
          { label: 'The 9 Tonic Forms (Note: lui / eux!)', rule: 'moi, toi, lui (m.), elle (f.), soi (oneself) · nous, vous, eux (m. pl.), elles (f. pl.). Watch: "lui" = "him" (after preps/c’est), and "eux" = "them (m.)" (NOT *ils)!', ruleZh: '九个词形：moi, toi, lui, elle, soi · nous, vous, eux, elles。高频坑点：单数阳性重读是 lui，复数阳性重读是 eux（绝对不能说 *avec ils 或 *pour il）！' },
          { label: 'Top 4 Triggers on TCF', rule: '1) Prepositions (avec moi, sans lui, chez eux) · 2) Short answers (Moi aussi ! Pas moi ! Moi non plus !) · 3) Emphasis / Compound subjects (Toi et moi, nous... · Eux, ils...) · 4) After c’est or comparisons (C’est toi ! · plus grand que moi).', ruleZh: '四大必考场景：① 介词后（avec/sans/pour/chez）；② 孤立简答（Moi aussi / Moi non plus / Pas moi）；③ 主语并列/对比强调（Eux, ils...）；④ c’est 后面与比较词 que 后面。' }
        ],
        sections: [
          {
            id: 'p8a4_forms',
            heading: '1. All 9 Disjunctive Forms & First 4 Uses',
            headingZh: '一、九大重读代词表与前四种场景',
            lead: 'Look at how natural disjunctive pronouns sound in everyday French — especially after prepositions, in compound subjects, and in emphatic declarations:',
            leadZh: '背熟下表并留意 Tammy 在周六晚上的独白（连用三次 `sans lui / pour lui / avec lui`）：',
            cartoon: {
              src: './assets/tex_cartoons/pro4_boite.gif',
              alt: 'Tammy et Tex aiment aller en boîte',
              caption: 'Tammy : Tex et moi, nous aimons aller en boîte. Sans lui, pour lui, avec lui !',
              captionZh: 'Tammy：Tex 和我（Tex et moi）超爱去夜店。没有他不行（sans lui），一切为他（pour lui），跟他一起（avec lui）！'
            },
            table: {
              headers: ['Person', 'Singular', 'Plural', 'Classic Phrase'],
              rows: [
                { cols: ['1st', 'moi (me / I)', 'nous (us / we)', 'chez moi · avec nous'], audio: 'chez moi, avec nous' },
                { cols: ['2nd', 'toi (you)', 'vous (you)', 'pour toi · devant vous'], audio: 'pour toi, devant vous' },
                { cols: ['3rd Masc.', 'lui (him)', 'eux (them, masc./mixed)', 'sans lui · grâce à eux'], audio: 'sans lui, grâce à eux' },
                { cols: ['3rd Fem.', 'elle (her)', 'elles (them, fem.)', 'avec elle · derrière elles'], audio: 'avec elle, derrière elles' },
                { cols: ['General', 'soi (oneself, with on/chacun)', '—', 'Chacun pour soi !'], audio: 'Chacun pour soi !' }
              ]
            },
            examples: [
              { fr: 'Tammy adore Tex. Elle ne peut pas vivre sans lui. Elle vit pour lui. Elle veut se marier avec lui.', en: 'After prepositions (sans, pour, avec): ALWAYS disjunctive!', zh: '介词 sans / pour / avec 后必须接重读代词 lui。', tag: 'After Prepositions' },
              { fr: 'Corey : Qui sort avec Tammy ? — Tex : Moi ! · Je n’aime que toi, ma chérie.', en: 'Short answer with no verb (Moi!) & with ne...que / ni...ni (toi)', zh: '单独回答问题用 Moi !；限制句 ne...que / 否定并列 ni...ni 后也用重读代词。', tag: 'Short Answer / Que' },
              { fr: 'Tammy : Tex et moi, nous aimons aller en boîte.', en: 'Compound subject summary: "Tex and I, we..."', zh: '中文习惯说“他和**我**”，法语用并列重读代词 Tex et moi，后面通常可再接 nous 呼应动词！', tag: 'Compound Subject' }
            ]
          },
          {
            id: 'p8a4_contrast',
            heading: '2. Emphasis, Agreements ("Moi aussi / non plus"), -même & Comparisons',
            headingZh: '二、强调对比、同意/不同意、-même（自己）与比较句',
            lead: 'English stresses a pronoun simply with voice volume ("THEY have fun, YOU never go out"). French adds a disjunctive pronoun right in front or uses "moi non plus / pas moi / -même":',
            leadZh: '英语靠嗓门重读表示“**他们**玩得欢，而**你**从不出门”，法语则必须把重读代词放到逗号前或 `c’est` 后：',
            cartoon: {
              src: './assets/tex_cartoons/pro4_apitoyer.gif',
              alt: 'Tammy dit à Corey d’arrêter de s’apitoyer sur lui-même',
              caption: 'Tammy : Arrête de t’apitoyer sur toi-même ! — Corey : Personne n’est plus pitoyable que moi !',
              captionZh: 'Tammy：别再自怨自艾（sur toi-même）啦！— Corey：没人比我（que moi）更凄惨！'
            },
            examples: [
              { fr: 'Joe-Bob : Moi aussi ! — Corey : Pas moi ! — Fiona : Moi non plus !', en: 'Me too! · Not me! · Me neither! (verb-less agreements/disagreements)', zh: '口语三连：Moi aussi（我也是）、Pas moi（我才不）、Moi non plus（我也不是/也不去）！', tag: 'Agreements' },
              { fr: 'Eux, ils s’amusent, mais vous, vous ne sortez jamais.', en: 'THEY have fun, but YOU never go out. (contrast/emphasis)', zh: '对比两人：Eux, ils...（他们嘛……）vs vous, vous...（而你们呢……）。', tag: 'Contrast & Stress' },
              { fr: 'Corey : C’est moi le plus nul. Il n’y a personne plus pitoyable que moi !', en: 'After c’est + superlative & after comparative "que"', zh: 'c’est 后面和比较级 que 后面全都只能放 moi / toi / lui / eux！', tag: 'C’est + Comparison' }
            ],
            quickCheck: {
              prompt: 'How do you reply "Neither do I!" ("Me neither!") when someone says "Je ne vais pas au cinéma"?',
              promptZh: '别人说 “Je ne vais pas au cinéma.”（我不去看电影），你想附和说“我也不去！”，选哪句？',
              options: ['Moi non plus !', 'Moi aussi !', 'Pas je !', 'Je non plus !'],
              answerIdx: 0,
              explain: 'In French, agreeing with a NEGATIVE statement requires "Moi non plus !" (never *Moi aussi! or *Je non plus!).',
              explainZh: '附和肯定句用 Moi aussi !，附和**否定句**必须用 Moi non plus !'
            }
          }
        ],
        drills: [
          {
            id: 'd8a4_d1',
            kind: 'fib',
            prompt: 'Qui adore Bette ? Joe-Bob et Corey : ___, nous adorons Bette ! (we)',
            promptZh: 'Tex 原题 #1：谁迷恋 Bette？Joe-Bob 和 Corey：“我们啊，我们超喜欢她！”',
            answers: ['Nous', 'nous'],
            hint: 'Compound/emphatic "we" matching nous adorons.',
            audio: 'Nous, nous adorons Bette !',
            explain: 'Disjunctive pronoun for "nous" is "Nous".',
            explainZh: '“我们”的重读代词也是 Nous。'
          },
          {
            id: 'd8a4_d2',
            kind: 'fib',
            prompt: 'Fiona étudie beaucoup, mais pas Joe-Bob et Corey. ___, ils détestent étudier.',
            promptZh: 'Tex 原题 #2：Fiona 很用功，但 Joe-Bob 和 Corey 不是。“他们俩呀，最讨厌学习了。”',
            answers: ['Eux', 'eux'],
            hint: 'Masculine plural disjunctive pronoun (NOT *ils)!',
            audio: 'Eux, ils détestent étudier.',
            explain: '3rd person masc. plural disjunctive is "Eux" (Eux, ils...).',
            explainZh: '阳性复数重读代词是 Eux（不能写 *Ils, ils）。'
          },
          {
            id: 'd8a4_d3',
            kind: 'fib',
            prompt: 'Joe-Bob habite à Jester. Et Corey ? ___ aussi, il habite à Jester.',
            promptZh: 'Tex 原题 #3：Joe-Bob 住在 Jester，Corey 呢？“他也一样，住在 Jester。”',
            answers: ['Lui', 'lui'],
            hint: '3rd person masc. singular disjunctive pronoun (Corey).',
            audio: 'Lui aussi, il habite à Jester.',
            explain: 'Corey → Lui aussi (not *Il aussi).',
            explainZh: '阳性单数重读代词用 Lui（Lui aussi），不用 *il aussi。'
          },
          {
            id: 'd8a4_d4',
            kind: 'fib',
            prompt: 'Tammy aime Tex. Elle veut se marier avec ___.',
            promptZh: 'Tex 原题 #4：Tammy 爱 Tex，她想和他结婚。（介词 avec 后）',
            answers: ['lui'],
            hint: 'After preposition "avec", replace Tex (masc. sg.).',
            audio: 'Elle veut se marier avec lui.',
            explain: 'Preposition "avec" + masculine singular → avec lui.',
            explainZh: '介词 avec 后接阳性单数重读代词 lui。'
          },
          {
            id: 'd8a4_d5',
            kind: 'fib',
            prompt: 'Tammy : Tex, tu sors avec Bette ce soir ? Tu vas où avec ___ ?',
            promptZh: 'Tex 原题 #5：Tammy 问：“Tex，你今晚要和 Bette（女）出去吗？你要跟她去哪儿？”',
            answers: ['elle'],
            hint: 'After "avec", replace Bette (fem. sg.).',
            audio: 'Tu vas où avec elle ?',
            explain: 'Feminine singular disjunctive pronoun = elle.',
            explainZh: '阴性单数重读代词仍是 elle。'
          },
          {
            id: 'd8a4_d6',
            kind: 'fib',
            prompt: 'Joe-Bob : Je ne danse pas. — Corey : ___ non plus. Je ne danse jamais.',
            promptZh: 'Tex 原题 #6：我不会跳舞。— Corey：我也不跳（注意句首大写）。',
            answers: ['Moi', 'moi'],
            hint: 'Me neither = Moi non plus.',
            audio: 'Moi non plus. Je ne danse jamais.',
            explain: 'Agreement with negative statement → Moi non plus.',
            explainZh: '回答“我也不”用 Moi non plus。'
          },
          {
            id: 'd8a4_d7',
            kind: 'fib',
            prompt: 'Joe-Bob : Corey et ___, nous sommes de vrais Texans ! (me)',
            promptZh: 'Tex 原题 #7：Corey 和我，我们才是真正的德州人！',
            answers: ['moi'],
            hint: 'In compound subjects, use "moi" (not *je).',
            audio: 'Corey et moi, nous sommes de vrais Texans !',
            explain: 'Corey et moi (never *Corey et je!).',
            explainZh: '并列主语必须用重读代词 moi，绝对不能用 *je。'
          },
          {
            id: 'd8a4_d8',
            kind: 'fib',
            prompt: 'Corey : Les autres sortent beaucoup, mais pas ___ ! Je ne sors jamais.',
            promptZh: 'Tex 原题 #8：别人都常出去玩，但我不！我从不出门。',
            answers: ['moi'],
            hint: 'Not me = pas moi.',
            audio: 'Les autres sortent beaucoup, mais pas moi !',
            explain: 'Verb-less disagreement → pas moi !',
            explainZh: '表示“我才不”固定用 pas moi！'
          },
          {
            id: 'd8a4_d9',
            kind: 'fib',
            prompt: 'Bette : Qui est à la porte ? Oh, c’est ___, Tammy. (speaking directly: it’s you!)',
            promptZh: 'Tex 原题 #9：是谁在敲门？哦，原来是你呀，Tammy！（直接对 Tammy 说）',
            answers: ['toi'],
            hint: 'Talking to Tammy directly: "Oh, it’s you!"',
            audio: 'Oh, c’est toi, Tammy !',
            explain: 'After "c’est" when addressing someone with "tu" → c’est toi.',
            explainZh: '当面跟 Tammy 说话（你），c’est 后填 toi。'
          },
          {
            id: 'd8a4_d10',
            kind: 'fib',
            prompt: 'Tammy : Corey, nous allons à Barton Springs. Tu viens avec ___ ? (us)',
            promptZh: 'Tex 原题 #10：Corey，我们要去玩啦，你跟我们一起去吗？',
            answers: ['nous'],
            hint: 'After preposition "avec" (= us).',
            audio: 'Tu viens avec nous ?',
            explain: 'avec nous = with us.',
            explainZh: '“和我们” → avec nous。'
          },
          {
            id: 'd8a4_d11',
            kind: 'fib',
            prompt: 'Tammy étudie le français. Et Bette et Fiona ? ___ aussi.',
            promptZh: 'Tex 原题 #11：Tammy 学法语，那 Bette 和 Fiona 呢？“她们也是。”',
            answers: ['Elles', 'elles'],
            hint: 'All-feminine plural disjunctive pronoun.',
            audio: 'Et Bette et Fiona ? Elles aussi.',
            explain: 'Two women → Elles aussi.',
            explainZh: '两名女性复数 → Elles aussi。'
          },
          {
            id: 'd8a4_d12',
            kind: 'fib',
            prompt: 'Bette adore Tex. Elle pense souvent à ___. (Note: penser à + person = tonic!)',
            promptZh: 'Tex 原题 #12：Bette 迷恋 Tex，她常常想着他。（重要考点：penser à + 人不能用 y，要用重读代词！）',
            answers: ['lui'],
            hint: 'Tex = masculine singular after à (person!).',
            audio: 'Elle pense souvent à lui.',
            explain: 'Crucial rule: penser à + THING → "j’y pense", but penser à + PERSON → "à lui / à elle / à eux"!',
            explainZh: '超关键 TCF 考点：penser à + 事/物用 y；但 penser à + 人必须保留介词 à 加重读代词（à lui / à elle）！'
          }
        ],
        related: [
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_3', label: 'Back to 8A.3 c’est vs. il/elle est' },
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_5', label: '8A.5 Direct Object Pronouns (COD)' }
        ]
      },

      /* =========================================================
         PAGE 8A.5: DIRECT OBJECT PRONOUNS PART 1 (pro5 Part 1)
      ========================================================= */
      {
        id: 'p8a_5',
        code: '8A.5',
        group: 'Direct Object (COD)',
        shortTitle: 'COD Forms & Placement',
        title: 'Direct Object Pronouns (COD Part 1): le, la, les & Present / Infinitive Order',
        titleZh: '直宾代词（上）：me/te/le/la/nous/vous/les、中性 le 与否定/不定式语序',
        estMin: 4,
        summary: 'Learn the 7 direct object pronouns (me, te, le, la, nous, vous, les), elision (m’/t’/l’ before vowels or mute h), agreement with nouns ("le numéro → le", "Tammy → l’", "les numéros → les"), neuter invariant "le/l’" replacing adjectives or clauses ("Oui, ils le sont" / "Je vais le faire"), and exact placement BEFORE the conjugated verb (or BEFORE the infinitive in two-verb structures like "Tex va m’épouser", "ne veut pas t’épouser").',
        summaryZh: '直接宾语回答“动词直接作用于谁/什么”（中间**没有任何介词**）。掌握全套直宾代词 **me / te / le / la / nous / vous / les**，记住三大铁律：① 第三人称的 `le / la / les` 必须跟被替代名词的**性数一致**，而形容词或整件事用不变中性 **`le` / `l’`**；② 在陈述句与否定句中，代词贴在变位动词**前面**（`ne` 放在代词之前）；③ 遇双动词不定式结构，代词直接紧贴在**不定式前面**（`Tex va **m’**épouser`、`ne veut pas **t’**épouser`）！',
        cheatSummary: [
          { label: 'Direct Object Forms & Elision', rule: 'me (m’), te (t’), le/la (l’), nous, vous, les. Remember: le/la/l’ also replaces an adjective ("Amoureux ? Oui, ils le sont") or an action ("Je vais le faire").', ruleZh: '词形：me, te, le, la, nous, vous, les（元音/哑音 h 前变为 m’, t’, l’）。固定指“那样/这件事”或替代形容词时一律用阳性单数 le/l’！' },
          { label: '3 Placement Positions (Present / Negation / Infinitive)', rule: '1) Normal: Subject + COD + Verb ("Tex m’aime"). 2) Negative: ne + COD + Verb + pas ("Tex ne t’aime pas"). 3) Infinitive: Verb1 + COD + Infinitive ("Tex va m’épouser", "ne veut pas t’épouser").', ruleZh: '位置口诀：① 一般直宾放在变位动词前；② 否定时 ne 包住“代词+动词”（ne t’aime pas）；③ 有不定式时放不定式前面（va m’épouser）！' }
        ],
        sections: [
          {
            id: 'p8a5_forms',
            heading: '1. COD Forms, Gender Agreement & Neuter "le"',
            headingZh: '一、COD 词形表、性数呼应与中性替代词 le',
            lead: 'Direct objects answer "whom?" or "what?" with NO preposition after verbs like aimer, appeler, chercher, attendre, regarder, écouter, trouver, inviter. Look closely at how Tex chooses le / la / les vs. neuter le:',
            leadZh: '特别留意汉语里常误以为带介词但法语**直接及物（接 COD）**的动词：chercher（寻找）、attendre（等待）、écouter（听）、regarder（看）！',
            cartoon: {
              src: './assets/tex_cartoons/pro5_maime.gif',
              alt: 'Tammy et Bette parlent de l’amour de Tex',
              caption: 'Tammy : Tex m’aime. Il va m’épouser ! — Bette : Sois raisonnable, il ne veut pas t’épouser !',
              captionZh: 'Tammy：Tex 爱我（m’aime），他要娶我（va m’épouser）！— Bette：清醒点吧，他才不想娶你（ne veut pas t’épouser）！'
            },
            table: {
              headers: ['Direct Object', 'Elided Form', 'Meaning', 'Tex Example'],
              rows: [
                { cols: ['me · te', 'm’ · t’', 'me · you (sg.)', 'Tu m’appelles ? — Oui, je t’appelle.'], audio: 'Tu m’appelles ? Oui, je t’appelle.' },
                { cols: ['le (m.) · la (f.)', 'l’', 'him/it · her/it', 'Il trouve le numéro et il le note. Il l’appelle.'], audio: 'Il le trouve et il l’appelle.' },
                { cols: ['nous · vous', '—', 'us · you (pl./formal)', 'Tu nous appelles ? — Non, je ne vous appelle pas.'], audio: 'Tu nous appelles ? Non, je ne vous appelle pas.' },
                { cols: ['les (m./f. pl.)', '—', 'them', 'Il les trouve et il les appelle.'], audio: 'Il les trouve et il les appelle.' },
                { cols: ['Neuter le', 'l’', 'so / it (adj. or clause)', 'Amoureux ? Oui, ils le sont. · Je vais le faire.'], audio: 'Oui, ils le sont. Je vais le faire.' }
              ]
            },
            examples: [
              { fr: 'Tex cherche le numéro de téléphone de Tammy. Enfin il le trouve et il l’appelle.', en: 'le numéro (m.) → le · Tammy (f., before vowel) → l’', zh: '找号码是阳性 le，给 Tammy 打电话（appeler qqn 为直接及物！）在元音前用 l’。', tag: 'Gender Match' },
              { fr: 'Tex et Tammy sont amoureux ? Oui, ils le sont. · Tex est jaloux ? Oui, il l’est.', en: 'Neuter "le / l’" replaces an adjective (NEVER *les sont or *la est)!', zh: '代替形容词 amoureux / jaloux 时永远只用单数中性 le/l’（不能变成 *les）！', tag: 'Neuter le' },
              { fr: 'Tammy va m’épouser. · Tex ne veut pas t’épouser.', en: 'In infinitive constructions, COD sits directly before the infinitive!', zh: '遇到两个动词连用（aller/vouloir/pouvoir + 不定式），代词放不定式前面，不放助动词前。', tag: 'Infinitive Rule' }
            ],
            quickCheck: {
              prompt: 'How do you say "Wait for the bus → Edouard does not like waiting for it" (le bus = masc.)?',
              promptZh: '“Edouard 不喜欢等公交车”（attendre le bus → 用代词替代 le bus），哪一句语序完全正确？',
              options: [
                'Edouard n’aime pas l’attendre.',
                'Edouard ne l’aime pas attendre.',
                'Edouard n’aime pas attendre le.',
                'Edouard n’aime pas lui attendre.'
              ],
              answerIdx: 0,
              explain: 'In "aime + infinitive (attendre)", the object belongs to "attendre", so "le" goes right before "attendre" (eliding to l’): "n’aime pas l’attendre". Also remember attendre takes a DIRECT object!',
              explainZh: '两个关键点：① attendre 直接及物，不用 *lui；② “等待”的宾语属于不定式 attendre，因此代词紧贴不定式并省音：l’attendre。'
            }
          }
        ],
        drills: [
          {
            id: 'd8a5_d1',
            kind: 'fib',
            prompt: 'Replace LES FEUX D’ARTIFICE: Joe-Bob adore les feux d’artifice → Joe-Bob ___ adore.',
            promptZh: 'Tex 原题 #1：替换复数直宾 les feux d’artifice（放在 adore 前）：',
            answers: ['les'],
            hint: 'Masculine plural direct object pronoun.',
            audio: 'Joe-Bob les adore.',
            explain: '"les feux d’artifice" (pl.) → les.',
            explainZh: '复数直宾全部用 les 替代。'
          },
          {
            id: 'd8a5_d2',
            kind: 'fib',
            prompt: 'Replace BETTE: Tex drague Bette → Tex ___ drague.',
            promptZh: 'Tex 原题 #2：替换 Bette（阴性单数，“Tex 撩她”）：',
            answers: ['la'],
            hint: 'Feminine singular COD before consonant d-.',
            audio: 'Tex la drague.',
            explain: 'Bette (fem. sg.) → la (before consonant "drague").',
            explainZh: '阴性单数且后面以辅音 d 开头，不用省音，填 la。'
          },
          {
            id: 'd8a5_d3',
            kind: 'fib',
            prompt: 'Replace SES DEVOIRS (negative!): Joe-Bob ne finit pas ses devoirs → Joe-Bob ne ___ finit pas.',
            promptZh: 'Tex 原题 #4：替换复数直宾 ses devoirs（注意否定 ne...pas 位置）：',
            answers: ['les'],
            hint: 'Place pronoun between ne and finit.',
            audio: 'Joe-Bob ne les finit pas.',
            explain: 'ses devoirs (pl.) → Joe-Bob ne les finit pas.',
            explainZh: '复数 ses devoirs 用 les，置于 ne 与 finit 之间。'
          },
          {
            id: 'd8a5_d4',
            kind: 'fib',
            prompt: 'Replace LE BUS (infinitive!): Edouard n’aime pas attendre le bus → Edouard n’aime pas ___ attendre.',
            promptZh: 'Tex 原题 #5：把 le bus 换成直宾代词放进不定式前面（注意元音省音！）：',
            answers: ["l'", 'l’'],
            hint: 'le + attendre elides to l’attendre.',
            audio: 'Edouard n’aime pas l’attendre.',
            explain: 'le → l’ before infinitive "attendre".',
            explainZh: 'le 在元音开头的 attendre 前省音为 l’。'
          },
          {
            id: 'd8a5_d5',
            kind: 'fib',
            prompt: 'Replace TAMMY: Tex cherche Tammy → Tex ___ cherche.',
            promptZh: 'Tex 原题 #7：Tex 在找 Tammy（chercher 直接及物，没有介词）：',
            answers: ['la'],
            hint: 'Tammy is feminine singular before consonant ch-.',
            audio: 'Tex la cherche.',
            explain: 'chercher takes a direct object: Tex la cherche.',
            explainZh: 'chercher 直接加宾语，Tammy 为阴性单数 → la。'
          },
          {
            id: 'd8a5_d6',
            kind: 'fib',
            prompt: 'Replace LA TÉLÉVISION: Joe-Bob regarde la télévision → Joe-Bob ___ regarde.',
            promptZh: 'Tex 原题 #8：Joe-Bob 在看电视（替换阴性单数直宾）：',
            answers: ['la'],
            hint: 'la télévision (fem.) → la.',
            audio: 'Joe-Bob la regarde.',
            explain: 'regarder is directly transitive in French: "Il la regarde."',
            explainZh: 'regarder 直接及物，替代阴性名词 la télévision 用 la。'
          },
          {
            id: 'd8a5_d7',
            kind: 'fib',
            prompt: 'Replace LA MARSEILLAISE (infinitive!): Tammy va chanter la Marseillaise → Tammy va ___ chanter.',
            promptZh: 'Tex 原题 #9：Tammy 要唱《马赛曲》了 → 她要唱它（放在 chanter 前）：',
            answers: ['la'],
            hint: 'Infinitive construction: va + la + chanter.',
            audio: 'Tammy va la chanter.',
            explain: 'la goes right before infinitive "chanter".',
            explainZh: '近将来时 va + 不定式结构，把 la 放在不定式 chanter 前面。'
          },
          {
            id: 'd8a5_d8',
            kind: 'fib',
            prompt: 'Replace LA SAINT-SYLVESTRE: Tammy va fêter la Saint-Sylvestre → Tammy va ___ fêter.',
            promptZh: 'Tex 原题 #11：Tammy 准备庆祝除夕夜（阴性单数，放在 fêter 前）：',
            answers: ['la'],
            hint: 'la goes right before "fêter".',
            audio: 'Tammy va la fêter.',
            explain: 'fêter takes direct object → "va la fêter".',
            explainZh: '阴性单数 la 放在不定式 fêter 前。'
          },
          {
            id: 'd8a5_d9',
            kind: 'choice',
            prompt: 'Answer: "Tex et Tammy sont contents ?" using neuter pronoun le/la/les:',
            promptZh: '用代词简短回答“Tex 和 Tammy 开心吗？是的，他们很开心”：',
            options: ['Oui, ils le sont.', 'Oui, ils les sont.', 'Oui, ils en sont.', 'Oui, ils sont le.'],
            answerIdx: 0,
            audio: 'Oui, ils le sont.',
            explain: 'When replacing an adjective ("contents") with être, ALWAYS use invariant neuter "le" ("Oui, ils le sont"), never *les!',
            explainZh: '替换形容词时永远用不变阳性单数 le（即使主语是复数 ils），不可写成 *les！'
          },
          {
            id: 'd8a5_d10',
            kind: 'fib',
            prompt: 'Corey : Edouard et moi, tu ___ appelles ce soir, Tex ? (us)',
            promptZh: '课文原句：Tex，你今晚会给我们俩（Edouard 和我）打电话吗？',
            answers: ['nous'],
            hint: '1st person plural COD.',
            audio: 'Tu nous appelles ce soir, Tex ?',
            explain: 'appeler qqn is a direct object → tu nous appelles.',
            explainZh: 'appeler（打电话给某人）在法语里接直宾，“给我们打电话”用 nous。'
          },
          {
            id: 'd8a5_d11',
            kind: 'fib',
            prompt: 'Tex : Non, je ne ___ appelle pas ce soir. (you guys)',
            promptZh: '课文原句：不，我今晚不给你们打电话（注意否定 ne 之后）：',
            answers: ['vous'],
            hint: '2nd person plural COD.',
            audio: 'Non, je ne vous appelle pas ce soir.',
            explain: 'ne vous appelle pas.',
            explainZh: '在 ne 和 appelle 之间填入 vous。'
          },
          {
            id: 'd8a5_d12',
            kind: 'choice',
            prompt: 'Which French verb takes a DIRECT object (le/la/les) even though English adds a preposition ("look for", "wait for", "listen to")?',
            promptZh: '下面哪一组法语动词虽然英文/中文感觉带介词，但在法语里全部接直宾（le/la/les）？',
            options: [
              'chercher, attendre, écouter, regarder',
              'parler à, téléphoner à, répondre à',
              'penser à, s’intéresser à',
              'parler de, avoir besoin de'
            ],
            answerIdx: 0,
            audio: 'Je l’attends et je l’écoute.',
            explain: 'chercher, attendre, écouter, regarder, payer take direct objects in French (Je le cherche, Je l’attends, Je l’écoute).',
            explainZh: 'chercher / attendre / écouter / regarder 全部直接及物，不加 à，替代宾语用 le/la/les！'
          }
        ],
        related: [
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_4', label: 'Back to 8A.4 Disjunctive Pronouns' },
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_6', label: '8A.6 COD in Passé Composé & Imperatives' }
        ]
      },

      /* =========================================================
         PAGE 8A.6: COD PART 2 — PASSÉ COMPOSÉ AGREEMENT & IMPERATIVES (pro5 Part 2)
      ========================================================= */
      {
        id: 'p8a_6',
        code: '8A.6',
        group: 'Direct Object (COD)',
        shortTitle: 'COD Agreement & Imperatives',
        title: 'COD Mastery (Part 2): Passé Composé Agreement (m’a embrassée!) & Imperatives',
        titleZh: '直宾代词（下）：复合过去时性数配合铁律（m’a embrassée）与命令式词序',
        estMin: 4,
        summary: 'Conquer the most famous TCF B1–B2 grammar rule: in compound tenses (passé composé, plus-que-parfait), when a DIRECT object precedes "avoir", the past participle MUST agree in gender & number with that direct object ("Tex m’a embrassée", "Il ne m’avait pas rencontrée", "Tex les a invités"). Plus learn imperative placement: AFTER the verb with hyphen & me/te → moi/toi ("Embrasse-moi !") vs. normal pre-verb position in negatives ("Ne l’embrasse pas !").',
        summaryZh: '攻克法语复合过去时最高频的失分点：**直宾前置配合原则**！只要在用 `avoir` 作助动词的复合时态中，直宾代词（`me, te, le, la, l’, nous, vous, les`）跑到了过去分词**前面**，过去分词词尾就必须向这个直宾的性数看齐：**阴单 +e、阳复 +s、阴复 +es**！同时吃透命令式正反对比：肯定命令式把代词用连字符拖到后面且 **`me/te` 变 `-moi/-toi`**（`Embrasse-moi !`）；否定命令式回归动词前面（`Ne l’embrasse pas !`）。',
        cheatSummary: [
          { label: 'Passé Composé Agreement With Preceding COD', rule: 'With avoir: NO agreement when object follows verb ("Tex a embrassé Bette"). YES agreement when COD precedes auxiliary ("Tex l’a embrassée", "Tex m’a embrassée [Bette speaking]", "Les devoirs ? Il les a finis").', ruleZh: '助动词 avoir 遇到前置直宾必配合：Bette 说 Tex m’a embrassée（m’ 指女性+e）；Tammy 问 tu l’as embrassée（l’ 指 Bette+e）；男复数 les + -s；女复数 les + -es！' },
          { label: 'Affirmative vs. Negative Imperative', rule: 'Affirmative: Verb-pronoun, and me→moi, te→toi! ("Embrasse-moi !"). Negative: Ne + pronoun + verb + pas ("Ne l’embrasse pas !", "Ne me quitte pas !").', ruleZh: '命令式：肯定放动词后（me→moi / te→toi，如 Embrasse-moi !），否定回归正常语序放动词前（Ne l’embrasse pas !）！' }
        ],
        sections: [
          {
            id: 'p8a6_agreement',
            heading: '1. Preceding COD + Passé Composé Agreement Rules',
            headingZh: '一、复合过去时“直宾前置配合”全表',
            lead: 'Remember: this agreement happens ONLY with preceding DIRECT objects (never indirect objects *lui/leur*, never *y* or *en*). Watch what happens when Tammy confronts Tex about Bette:',
            leadZh: '看这段火药味十足的对话：同样是 `embrasser`，Bette（女）自述和 Tammy 质问都要加 **-e**，而 Tex 反咬 Bette 吻自己时却不加 -e（因为 `m’` 指的是男性 Tex）！',
            table: {
              headers: ['Preceding COD', 'Speaker / Antecedent', 'Past Participle Ending', 'Example'],
              rows: [
                { cols: ['l’ / le (masc. sg.)', 'Tex / un poème', 'Base form (no extra -e/-s)', 'Elle l’a embrassé. · Il l’a lu.'], audio: 'Elle l’a embrassé.' },
                { cols: ['l’ / la (fem. sg.)', 'Bette / une lettre', '+ e (note: s already stays for -is/-it)', 'Tu l’as embrassée ? · Je l’ai écrite.'], audio: 'Tu l’as embrassée, Bette ?' },
                { cols: ['m’ / t’ (fem. person)', 'Bette or Tammy', '+ e (matches person speaking/addressed!)', 'Tex m’a embrassée ! · Il ne m’avait pas rencontrée.'], audio: 'Tex m’a embrassée.' },
                { cols: ['les (masc./mixed pl.)', 'ses amis / les livres', '+ s (skip if ends in -s like appris/mis)', 'Il les a invités. · Ils les ont appris.'], audio: 'Tammy les a invités à dîner.' },
                { cols: ['les (all-fem. pl.)', 'les fleurs / les chansons', '+ es', 'Il les a chantées. · Il les a achetées.'], audio: 'Il les a achetées.' }
              ]
            },
            dialogue: {
              title: 'Bette, Tammy & Tex: Who Kissed Whom?',
              titleZh: '经典对峙：到底是谁亲了谁？',
              lines: [
                { speaker: 'Bette', fr: 'Tex, embrasse-moi !', en: 'Tex, kiss me!', zh: '肯定命令式：me 拖到动词后变 -moi！' },
                { speaker: 'Joe-Bob', fr: 'Attends, ne l’embrasse pas devant moi. Je m’en vais.', en: 'Wait, don’t kiss her in front of me. I’m leaving.', zh: '否定命令式：代词 l’ 乖乖回动词前面！' },
                { speaker: 'Bette', fr: 'Tammy ? Tu sais, Tex m’a embrassée.', en: 'Tammy? You know, Tex kissed me.', zh: 'Bette 是女生，m’ 代表女生 → embrassée（+e）！' },
                { speaker: 'Tammy', fr: 'Tex, tu l’as embrassée, Bette ?', en: 'Tex, did you kiss her, Bette?', zh: 'l’ 指 Bette（女生）→ embrassée（+e）！' },
                { speaker: 'Tex', fr: 'Mais non ! Je ne l’ai pas embrassée. C’est elle qui m’a embrassé ! PAF !', en: 'No! I didn’t kiss her. She’s the one who kissed me! POW!', zh: 'Tex 是男生，m’ 指男性 Tex → embrassé（不加 e）！' }
              ]
            },
            quickCheck: {
              prompt: 'Look closely at Tex Drill #10: "Les étudiants de Tex ont appris LEURS VERBES" → How do you rewrite it with "les"?',
              promptZh: '改写：“Les étudiants ont appris leurs verbes.” 当把 leurs verbes 换成 les 时，动词 appris 怎么写？',
              options: [
                'Les étudiants les ont appris. (appris already ends in -s!)',
                'Les étudiants les ont apprise.',
                'Les étudiants les ont apprises.',
                'Les étudiants ont les appris.'
              ],
              answerIdx: 0,
              explain: '"les verbes" is masculine plural (+s), and "appris" ALREADY ends in -s, so no extra -s is added ("les ont appris")! (Feminine plural would be "apprises").',
              explainZh: 'le verbe 是阳性词，且过去分词 appris 本身已经以 s 结尾，不再重复加 s，且代词 les 放助动词 ont 前面 → les ont appris！'
            }
          }
        ],
        drills: [
          {
            id: 'd8a6_d1',
            kind: 'fib',
            prompt: 'Tex Practice #3: Bette a embrassé Tex → Bette ___ embrassé.',
            promptZh: 'Tex 原题 #3：Bette 吻了 Tex → Bette 吻了他（直宾代词 + 助动词，注意 Tex 是男生）：',
            answers: ["l'a", 'l’a'],
            hint: 'le (Tex) elides to l’ before auxiliary a → l’a.',
            audio: 'Bette l’a embrassé.',
            explain: 'Tex is masculine singular → Bette l’a embrassé (no extra -e).',
            explainZh: 'Tex 为阳性单数，le 在 a 前省音为 l’a，过去分词不变：Bette l’a embrassé。'
          },
          {
            id: 'd8a6_d2',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tammy a invité ses amis à dîner → Tammy ___ à dîner. (les + a invité+s!)',
            promptZh: 'Tex 原题 #6：Tammy 邀请了她的朋友们吃晚饭 → 用 les 替代 ses amis，补全动词及配合（提示：les a + 过去分词）：',
            answers: ['les a invités'],
            hint: 'les (masc. plural) precedes "a" → add -s to invité!',
            audio: 'Tammy les a invités à dîner.',
            explain: 'Preceding direct object "les" (ses amis, masc. pl.) triggers -s agreement: "les a invités".',
            explainZh: '复数直宾 les 提前到助动词 a 前，过去分词 invité 必须加 -s → les a invités！'
          },
          {
            id: 'd8a6_d3',
            kind: 'fib',
            prompt: 'Tex Practice #10: Les étudiants ont appris leurs verbes → Les étudiants ___ appris.',
            promptZh: 'Tex 原题 #10：学生们学会了他们的动词（阳性复数）→ 填入“代词 + 助动词”：',
            answers: ['les ont'],
            hint: 'leurs verbes = masc. plural "les" + auxiliary "ont". (appris already ends in -s!)',
            audio: 'Les étudiants les ont appris.',
            explain: '"les" goes before "ont"; "appris" already ends in -s for masculine plural.',
            explainZh: 'les 放在助动词 ont 前；因为 les verbes 是阳性复数且 appris 已有 -s，词尾保持 appris！'
          },
          {
            id: 'd8a6_d4',
            kind: 'fib',
            prompt: 'Tex Practice #12: Fiona a étudié l’espagnol → Fiona ___ étudié.',
            promptZh: 'Tex 原题 #12：Fiona 学习了西班牙语（阳性单数 l’espagnol）→ 填入“代词 + 助动词”：',
            answers: ["l'a", 'l’a'],
            hint: 'l’espagnol is masculine → l’ + a.',
            audio: 'Fiona l’a étudié.',
            explain: 'le (l’espagnol) → Fiona l’a étudié.',
            explainZh: 'l’espagnol（语言名称均为阳性单数）用 l’ 替代 → l’a étudié。'
          },
          {
            id: 'd8a6_d5',
            kind: 'fib',
            prompt: 'Bette (speaking!) says: Tex kissed me! → Tex m’a ___.',
            promptZh: '对话实战：Bette（女性）说“Tex 吻了我！”，写出带性数配合的过去分词：',
            answers: ['embrassée'],
            hint: 'm’ refers to feminine Bette → add -e!',
            audio: 'Tex m’a embrassée.',
            explain: 'Direct object "m’" stands for female Bette → embrassée.',
            explainZh: '这里的 m’ 指女性 Bette 且放在助动词 a 前面，所以必须加阴性 -e → embrassée！'
          },
          {
            id: 'd8a6_d6',
            kind: 'fib',
            prompt: 'Tammy asks Tex about Bette: Did you kiss her? → Tu l’as ___ ?',
            promptZh: '对话实战：Tammy 问 Tex“你吻过她（Bette）了吗？”，写出配合后的过去分词：',
            answers: ['embrassée'],
            hint: 'l’ = Bette (fem. sg.) → add -e!',
            audio: 'Tu l’as embrassée ?',
            explain: 'l’ replaces Bette (fem. sg.) → embrassée.',
            explainZh: 'l’ 指代 Bette（阴性单数），过去分词加 -e → embrassée。'
          },
          {
            id: 'd8a6_d7',
            kind: 'fib',
            prompt: 'Negative passé composé + fem. object: "La lettre ? Je ne l’ai pas ___." (écrire)',
            promptZh: '这封信（la lettre，阴性）？我还没写呢。（écrit 遇前置阴性直宾怎么配合？）',
            answers: ['écrite'],
            hint: 'Past participle écrit + feminine -e = écrite!',
            audio: 'La lettre ? Je ne l’ai pas écrite.',
            explain: 'l’ (= la lettre, fem. sg.) precedes "ai" → écrit + e = écrite (audible /t/!).',
            explainZh: 'l’ 指代阴性 la lettre，所以 écrit 要加 -e 变成 écrite（t 要发音！）。'
          },
          {
            id: 'd8a6_d8',
            kind: 'fib',
            prompt: 'Feminine plural agreement: "Les chansons françaises ? Tammy les a ___." (chanter)',
            promptZh: '那些法语歌（la chanson，阴性复数）？Tammy 都唱过了！填入带配合的过去分词：',
            answers: ['chantées'],
            hint: 'les = feminine plural → add -es!',
            audio: 'Les chansons françaises ? Tammy les a chantées.',
            explain: 'la chanson is feminine, plural → les triggers -es: chantées.',
            explainZh: 'chanson 为阴性且复数，les 提前后词尾加 -es → chantées。'
          },
          {
            id: 'd8a6_d9',
            kind: 'fib',
            prompt: 'Affirmative imperative: "Kiss me!" (tu) → ___ ! (embrasser)',
            promptZh: '肯定命令式：快吻我！（提示：-er 动词 tu 命令式去掉 s，me 拖后变 -moi）：',
            answers: ['Embrasse-moi', 'embrasse-moi'],
            hint: 'Embrasse + hyphen + moi!',
            audio: 'Embrasse-moi !',
            explain: 'In affirmative imperatives, drop -s on -er (Embrasse), attach with hyphen, and change me → moi!',
            explainZh: 'embrasser 的 tu 命令式去 s 为 Embrasse，连字符接重读代词 moi → Embrasse-moi !'
          },
          {
            id: 'd8a6_d10',
            kind: 'fib',
            prompt: 'Negative imperative: "Don’t wait for me!" (tu) → Ne ___ attends pas !',
            promptZh: '否定命令式：别等我啦！（注意否定命令式代词放回动词前面且用 me/m’）：',
            answers: ["m'", 'm’'],
            hint: 'Negative imperative reverts to pre-verb me/m’ before "attends"!',
            audio: 'Ne m’attends pas !',
            explain: 'Negative imperative puts pronoun BEFORE verb using m’ (NOT moi!): "Ne m’attends pas !"',
            explainZh: '否定命令式代词回到动词前面，恢复为 m’（不用 moi）→ Ne m’attends pas !'
          },
          {
            id: 'd8a6_d11',
            kind: 'choice',
            prompt: 'When does the past participle NOT agree with a preceding pronoun + avoir?',
            promptZh: '下面哪一句虽然有前置代词，但过去分词**绝对不加 -e / -s**？',
            options: [
              'Tammy ? Je lui ai parlé. (lui is an INDIRECT object!)',
              'La voiture ? Je l’ai achetée.',
              'Les photos ? Nous les avons regardées.',
              'Bette ? Tex l’a invitée.'
            ],
            answerIdx: 0,
            audio: 'Tammy ? Je lui ai parlé.',
            explain: 'Past participles with avoir agree ONLY with preceding DIRECT objects — NEVER with indirect objects (lui/leur)!',
            explainZh: '助动词 avoir 只跟前置**直宾**配合；lui / leur 是间接宾语（parler à），因此 parlé 永远不加 -e！'
          },
          {
            id: 'd8a6_d12',
            kind: 'fib',
            prompt: 'Past conditional/pluperfect (Bette speaking): Il ne m’avait pas encore ___. (rencontrer)',
            promptZh: '对话回顾（Bette 说，愈过去时）：“那时他还没有遇见我呢。”写出带性数配合的过去分词：',
            answers: ['rencontrée'],
            hint: 'm’ = Bette (fem.) before "avait" → add -e!',
            audio: 'Il ne m’avait pas encore rencontrée.',
            explain: 'Same rule applies in ALL compound tenses (plus-que-parfait too): m’ (fem.) → rencontrée.',
            explainZh: '所有以 avoir 作助动词的复合时态同理：m’ 指女性 Bette，所以 rencontrée 加 -e。'
          }
        ],
        related: [
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_5', label: 'Back to 8A.5 COD Forms & Placement' },
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_7', label: '8A.7 The Pronoun Y (there / about it)' }
        ]
      },

      /* =========================================================
         PAGE 8A.7: THE PRONOUN Y (pro6)
      ========================================================= */
      {
        id: 'p8a_7',
        code: '8A.7',
        group: 'Pronouns Y & EN',
        shortTitle: 'Pronoun Y (Place & à + Thing)',
        title: 'The Pronoun y: Locations (+ chez), à + Idea/Thing Verbs & Person Trap',
        titleZh: '副代词 y 全解：地点（含 chez）、à + 事物/想法动词，以及“对人不能用 y”陷阱',
        estMin: 4,
        summary: 'Master "y" (= "there" / "about it"): (1) replaces ANY location preposition + place (à, en, dans, devant, derrière, sous, sur + noun, PLUS chez + person like "chez Bette"); (2) replaces "à + non-person thing/idea" with verbs like penser à, réfléchir à, s’intéresser à, répondre à, participer à, jouer à; (3) PERSON TRAP: for à + person, use disjunctive or COI ("Elle pense à lui", NOT *y)! Plus placement (before verb / auxiliary / infinitive, "Allons-y ! Vas-y !" + NO passé composé agreement).',
        summaryZh: '吃透高频副代词 **`y`** 的两大核心替代对象与四大规则：① 替代**方位介词 + 地点**（`à, en, dans, devant, derrière, sous, sur` 以及特殊人物住所 `chez Bette`）；② 替代固定搭配 **`à + 事物/抽象概念`**（如 `penser à, réfléchir à, s’intéresser à, répondre à, participer à, jouer à`）；③ **核心防坑**：如果 `penser à` 后面是**人**（如想着 Tex），绝不能用 `y`，要说 `Elle pense à lui`！④ 语序与其他宾语代词相同（不定式前、助动词前，肯定命令式放动词后：`Allons-y !` / `Vas-y !`），且复合过去时**绝对不做性数配合**！',
        cheatSummary: [
          { label: 'Two Uses of y (and the Person Trap)', rule: '1) Location prep + place ("à Waco, en France, chez Bette" → y). 2) "à + THING/IDEA" with penser/réfléchir/s’intéresser/répondre/participer à → y. TRAP: penser à + PERSON = "à lui / à elle", NOT *y!', ruleZh: 'y 的两大用途：① 地点介词短语（含 chez）；② penser / réfléchir / s’intéresser / répondre / participer à + 事物/想法。坑：à + 人不用 y（penser à lui）！' },
          { label: 'Placement & "-s" Return in Vas-y !', rule: 'Goes before verb / auxiliary / infinitive ("Je n’y suis jamais allé", "Tu veux y aller ?"). NO past participle agreement with y! In tu-imperative, -er/-va adds -s before y: Vas-y ! Penses-y !', ruleZh: 'y 放在变位动词、助动词或不定式前；复合过去时里 y 不引起分词配合（Je n’y suis pas allée 只看主语）。肯定命令式第二人称单数恢复 -s：Vas-y !（我们走：Allons-y !）。' }
        ],
        sections: [
          {
            id: 'p8a7_uses',
            heading: '1. Places, à + Thing Verbs & Disjunctive Contrast',
            headingZh: '一、y 的用法清单与人/物分流对比',
            lead: 'Look at the two Tex dialogues below: first Tammy & Bette talk about going to Waco ("on y va"); then Tex ponders philosophy vs. Bette thinking about Tex!',
            leadZh: '对比这两段原站对话，一眼分清什么时候用 `y`，什么时候只能用 `à lui`：',
            cartoon: {
              src: './assets/tex_cartoons/pro6_waco.gif',
              alt: 'Bette et Tammy parlent d’aller à Waco',
              caption: 'Bette : Tu vas à Waco ? — Tammy : Oui, j’y vais ce week-end ! — Bette : On n’y danse pas ? — Tammy : Mais si, on y va !',
              captionZh: '去韦科（à Waco）→ j’y vais；在那里跳舞 → y danser；我们去吧 → On y va !'
            },
            table: {
              headers: ['Pattern', 'Examples', 'With y or Tonic?', 'Result Sentence'],
              rows: [
                { cols: ['à / en / dans / chez + Place', 'à Waco · en France · dans un resto · chez Bette', '→ y (there)', 'J’y vais. · Elle n’y est pas allée.'], audio: 'Oui, j’y vais. Elle n’y est pas allée.' },
                { cols: ['penser à / réfléchir à + Thing', 'à l’existentialisme · à la philo', '→ y (about it)', 'Il y pense jour et nuit. · Elle y réfléchit.'], audio: 'Il y pense jour et nuit.' },
                { cols: ['s’intéresser à / participer à + Thing', 'à la culture française · au projet', '→ y (in it)', 'Tammy s’y intéresse énormément.'], audio: 'Tammy s’y intéresse énormément.' },
                { cols: ['répondre à / jouer à + Thing', 'à la lettre · aux cartes', '→ y (to it / it)', 'J’y réponds. · Tu y joues ?'], audio: 'Tu y joues ? Oui, j’y joue.' },
                { cols: ['penser à + PERSON (Trap!)', 'penser à Tex · à mes amis', 'NEVER *y → à lui / à eux', 'Elle pense souvent à lui.'], audio: 'Elle pense souvent à lui.' }
              ]
            },
            examples: [
              { fr: 'Tex s’intéresse à la philo. Il s’y intéresse énormément. Il pense toujours à l’existentialisme : il y pense jour et nuit.', en: 's’intéresser à + thing → s’y intéresser; penser à + idea → y penser', zh: '存在主义、哲学属于“事物/抽象概念”，所以用 s’y intéresser 和 y penser！', tag: 'à + Thing = y' },
              { fr: 'Bette pense souvent à Tex. Elle pense souvent à lui.', en: 'penser à + person → keeps à + disjunctive pronoun (à lui)', zh: 'Tex 是人！用 penser à / tenir à 等表达人时，只能写 à lui / à elle，绝不用 y！', tag: 'à + Person Trap' },
              { fr: 'Edouard : Je n’y suis jamais allé... Bon, attendez-moi, j’y vais aussi. Allons-y !', en: 'Before auxiliary (y suis allé), before infinitive (y aller), and after imperative (Allons-y !)', zh: '复合过去时放助动词前（Je n’y suis jamais allé），命令式连字符放后面：Allons-y ! / Vas-y !', tag: 'Placement & Allons-y' }
            ]
          },
          {
            id: 'p8a7_dialogue',
            heading: '2. Dialogue: Edouard Visits Waco & Imperative Liaison (Allons-y !)',
            headingZh: '二、对话精读：复合过去时与命令式中的 y',
            lead: 'Notice also why you say "aller" = "go" + y without repeating "là-bas": "Tu veux y aller avec nous ?" (Notice "y" goes BEFORE the infinitive "aller"!).',
            leadZh: '听 Edouard 和 Bette 聊起去 Waco 的对话，重点听清 `y aller`、`n’y suis jamais allé` 和 `Allons-y` 的位置与连音：',
            cartoon: {
              src: './assets/tex_cartoons/pro6_vais.gif',
              alt: 'Edouard dit : J’y vais aussi ! Allons-y !',
              caption: 'Edouard : Attendez-moi, j’y vais aussi ! Allons-y !',
              captionZh: 'Edouard：等等我，我也去（j’y vais）！我们出发吧（Allons-y）！'
            },
            dialogue: {
              title: 'Edouard & Bette: Trip to Waco',
              titleZh: '小对话：一起去韦科吧！',
              lines: [
                { speaker: 'Edouard', fr: 'Où allez-vous ?', en: 'Where are you going?', zh: '你们要去哪里？' },
                { speaker: 'Bette', fr: 'À Waco. Tu veux y aller avec nous ?', en: 'To Waco. Do you want to go there with us?', zh: '去 Waco。你想跟我们一起去那里（y aller）吗？' },
                { speaker: 'Edouard', fr: 'Je n’y suis jamais allé ! Mais nous allons voir le musée Dr. Pepper...', en: 'I’ve never been there! Wait—Dr. Pepper museum...', zh: '我从没去过那儿（n’y suis jamais allé）！' },
                { speaker: 'Bette', fr: 'Nous y allons tout de suite.', en: 'We’re going right away.', zh: '我们马上就出发去那儿。' },
                { speaker: 'Edouard', fr: 'Bon, attendez-moi, j’y vais aussi. Allons-y !', en: 'OK, wait for me, I’m going too. Let’s go!', zh: '等等我，我也去！出发吧（Allons-y）！' }
              ]
            },
            quickCheck: {
              prompt: 'How do you say "Go ahead!" / "Go there!" (tu affirmative imperative of aller + y)?',
              promptZh: '用 tu 肯定命令式对朋友说“去吧！/ 加油做吧！”（aller + y），正确拼写是？',
              options: [
                'Vas-y ! (-va adds an -s before y for smooth pronunciation)',
                'Va-y !',
                'Y va !',
                'Allons-te !'
              ],
              answerIdx: 0,
              explain: 'Normally tu imperative of aller is "Va", EXCEPT right before "y" (or "en"), it restores -s: "Vas-y !" (/vazi/).',
              explainZh: '单独命令式是 Va !，但在 y 或 en 前面为了避免元音相撞，恢复 -s 变成 Vas-y !（读 /vazi/）。'
            }
          }
        ],
        drills: [
          {
            id: 'd8a7_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Fiona passe ses après-midis à la bibliothèque → Elle ___ passe ses après-midis.',
            promptZh: 'Tex 原题 #1：在图书馆度过下午 → 用 y 替换 à la bibliothèque：',
            answers: ['y'],
            hint: 'Location phrase "à la bibliothèque" → y.',
            audio: 'Elle y passe ses après-midis.',
            explain: '"à la bibliothèque" is a location → Elle y passe ses après-midis.',
            explainZh: '地点短语 à la bibliothèque 替换为 y。'
          },
          {
            id: 'd8a7_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Bette va souvent au jardin public → Bette ___ souvent. (y + verb)',
            promptZh: 'Tex 原题 #2：Bette 常去公园（au jardin public）→ 填入“代词 + 动词”：',
            answers: ['y va'],
            hint: 'Place "y" before "va"!',
            audio: 'Bette y va souvent.',
            explain: 'Bette y va souvent.',
            explainZh: '用 y 替代 au jardin public，放到变位动词 va 前面：y va。'
          },
          {
            id: 'd8a7_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tex désire retourner à Lyon → Tex désire ___ retourner. (y before infinitive)',
            promptZh: 'Tex 原题 #3：Tex 渴望回到里昂 → 把“回那里”放到不定式 retourner 前面：',
            answers: ['y'],
            hint: 'y goes directly before infinitive "retourner".',
            audio: 'Tex désire y retourner.',
            explain: 'Two-verb structure: Tex désire y retourner.',
            explainZh: '不定式结构中，y 紧贴不定式 retourner 前面。'
          },
          {
            id: 'd8a7_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Edouard ne veut pas travailler dans un restaurant texan → Il ne veut pas ___ travailler.',
            promptZh: 'Tex 原题 #4：Edouard 不想在德州餐厅工作 → 用代词替换 dans un restaurant texan：',
            answers: ['y'],
            hint: 'dans + location → y before infinitive "travailler".',
            audio: 'Il ne veut pas y travailler.',
            explain: '"dans un restaurant texan" → Il ne veut pas y travailler.',
            explainZh: 'dans + 地点也用 y 替换，置于不定式 travailler 前面。'
          },
          {
            id: 'd8a7_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5 (Passé Composé!): Bette n’est pas encore allée en France → Elle ___ encore allée. (n’y + est)',
            promptZh: 'Tex 原题 #5：Bette 还没去过法国（en France）→ 填入完整“否定 + 代词 + 助动词”（n’y + est）：',
            answers: ["n'y est", 'n’y est'],
            hint: 'ne + y + est (elides to n’y est)!',
            audio: 'Elle n’y est pas encore allée.',
            explain: 'ne + y → n’y before auxiliary "est": Elle n’y est pas encore allée (note: allée agrees with subject Elle, NOT y!).',
            explainZh: '注意语序：n’y est pas encore allée（allée 加 -e 是因为主语 Elle + être 助动词，不是因为 y）。'
          },
          {
            id: 'd8a7_d6',
            kind: 'fib',
            prompt: 'Tex Practice #7: On va au cinéma ce week-end ? → On ___ ce week-end ? (y + verb)',
            promptZh: 'Tex 原题 #7：周末我们去电影院吗？→ 用代词替换 au cinéma（y + 动词）：',
            answers: ['y va'],
            hint: 'on y va = we’re going there.',
            audio: 'On y va ce week-end ?',
            explain: 'On y va ce week-end ?',
            explainZh: '用 y 替换 au cinéma：On y va。'
          },
          {
            id: 'd8a7_d7',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tammy s’intéresse à la culture française → Elle ___ énormément. (s’ + y + intéresse)',
            promptZh: 'Tex 原题 #8：Tammy 对法国文化很感兴趣（s’intéresser à + 事物）→ 填入“自反代词 + y + 动词”：',
            answers: ["s'y intéresse", 's’y intéresse'],
            hint: 'se + y + intéresse → s’y intéresse!',
            audio: 'Elle s’y intéresse énormément.',
            explain: 'Reflexive "se" precedes "y": s’y intéresse.',
            explainZh: '代动词加 y 时，反身代词放在 y 前面：Elle s’y intéresse。'
          },
          {
            id: 'd8a7_d8',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tex réfléchit beaucoup à la philosophie → Tex ___ réfléchit beaucoup.',
            promptZh: 'Tex 原题 #9：Tex 经常思考哲学问题（réfléchir à + 事物）：',
            answers: ['y'],
            hint: 'réfléchir à + abstract idea → y.',
            audio: 'Tex y réfléchit beaucoup.',
            explain: 'à la philosophie → y.',
            explainZh: 'réfléchir à + 抽象概念，用 y 替换。'
          },
          {
            id: 'd8a7_d9',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tex, tu joues aux cartes ? → Tu ___ joues ?',
            promptZh: 'Tex 原题 #10：Tex，你打牌吗（jouer à + 棋牌运动）？用代词简问：',
            answers: ['y'],
            hint: 'jouer à + game → jouer + y ("tu y joues ?").',
            audio: 'Tu y joues ?',
            explain: '"aux cartes" (= à + les cartes) → "Tu y joues ?" (Contrast: jouer DE an instrument takes "en"!).',
            explainZh: 'jouer à（玩游戏/运动）用 y 替换；而下文学的 jouer de（弹奏乐器）则要用 en！'
          },
          {
            id: 'd8a7_d10',
            kind: 'fib',
            prompt: 'Tex Practice #12: Edouard a immigré aux États-Unis → Edouard ___ immigré. (y + a)',
            promptZh: 'Tex 原题 #12：Edouard 移民到了美国（aux États-Unis）→ 填入“y + 助动词”：',
            answers: ['y a'],
            hint: 'y goes before auxiliary "a" (not *a y).',
            audio: 'Edouard y a immigré.',
            explain: 'aux États-Unis → y before auxiliary "a": "Edouard y a immigré."',
            explainZh: 'y 必须放在助动词 a 前面：Edouard y a immigré。'
          },
          {
            id: 'd8a7_d11',
            kind: 'choice',
            prompt: 'Replace "à mes grands-parents" in "Je téléphone à mes grands-parents" vs. "Je pense à mes grands-parents":',
            promptZh: '关键区分：“我给爷爷奶奶打电话（téléphoner à + 人）” vs “我想念爷爷奶奶（penser à + 人）”，分别换用哪个代词？',
            options: [
              'Je leur téléphone. (COI) · Je pense à eux. (à + tonic — NEVER *y!)',
              'J’y téléphone. · J’y pense.',
              'Je les téléphone. · Je les pense.',
              'Je pense leur. · Je leur téléphone.'
            ],
            answerIdx: 0,
            audio: 'Je leur téléphone et je pense à eux.',
            explain: 'téléphoner à (communication) takes COI leur; penser à + PERSON must keep à + tonic (à eux)!',
            explainZh: 'téléphoner à + 人用间宾 leur；penser à + 人属于不能把人塞进 verb 前的特例，必须写 à eux！'
          },
          {
            id: 'd8a7_d12',
            kind: 'choice',
            prompt: 'Passé Composé trap: How do you say "Are the letters on the table? — Yes, I put them there (sur la table)" without making an agreement error on "y"?',
            promptZh: '如果问“那封信（la lettre）在桌上吗？”不用 les，单独回答“我去过那里（Montréal）了”（说话者为女生 Tammy），怎么说？',
            options: [
              'Montréal ? Oui, j’y suis allée. (allée agrees with Tammy + être, NOT y)',
              'Les réponses à l’examen ? Oui, j’y ai répondues.',
              'Les cartes ? Nous y avons jouées.',
              'La philo ? Elle y a réfléchie.'
            ],
            answerIdx: 0,
            audio: 'Montréal ? Oui, j’y suis allée.',
            explain: '"y" NEVER triggers past participle agreement (*répondues, *jouées, *réfléchie are all WRONG with avoir!). In "j’y suis allée", the -e agrees with subject "je" (= Tammy) + être.',
            explainZh: '记住：用 avoir 时 y 绝对不让过去分词加 -e / -s（所以 répondu, joué, réfléchi 全部不变）；j’y suis allée 加 -e 是因为主语 Tammy + 助动词 être！'
          }
        ],
        related: [
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_6', label: 'Back to 8A.6 COD Agreement & Imperatives' },
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_8', label: '8A.8 The Pronoun EN (some / of it)' }
        ]
      },

      /* =========================================================
         PAGE 8A.8: THE PRONOUN EN (pro7)
      ========================================================= */
      {
        id: 'p8a_8',
        code: '8A.8',
        group: 'Pronouns Y & EN',
        shortTitle: 'Pronoun EN (de + Noun / Quantity)',
        title: 'The Pronoun en: Partitives, Numbers/Quantities & Verbs + de',
        titleZh: '副代词 en 全解：部分冠词、数量词保留法则、de + 事物动词与 il y en a',
        estMin: 4,
        summary: 'Master "en" (= "some / any / of it / of them"): (1) replaces du / de la / de l’ / des / de + noun ("Il y a du vin ? Oui, il y en a. Tu en veux ?"); (2) replaces nouns after numbers or quantity expressions — keeping the number/quantity at the end ("J’en ai assez", "J’en ai encore une tranche", "J’en ai trois"); (3) replaces "de + thing/place" with verbs like parler de, avoir besoin/envie de, s’occuper de, remercier de, venir/revenir de, jouer de (+ instrument); (4) PERSON TRAP: "de + person" keeps de + tonic ("Je parle de lui"); (5) NO passé composé agreement ("J’en ai écrit").',
        summaryZh: '副代词 **`en`** 是中文和英文极易漏掉的语法灵魂（英文常省略“of it / of them”不说，但法语里**绝对不能缺 `en`**）！吃透四大用法：① 替代部分/不定冠词 `du / de la / de l’ / des + 名词`（如 `Il y **en** a`、`Je n’**en** veux pas`）；② 替代“数词或数量副词后面的名词”，且把**数词/数量副词留在句末**（`J’**en** ai assez`、`J’**en** prends deux`）；③ 替代 `de + 事物/地点` 动词搭配（`parler de, avoir besoin de, avoir envie de, revenir de, jouer de + 乐器`）；④ 与 `y` 一样：**指人用 `de lui / d’elle`**，复合过去时里 **`en` 也不让分词配合**！',
        cheatSummary: [
          { label: 'Quantity Rule (Keep the Number/Quantifier!)', rule: 'When replacing a noun after a number or quantity (assez de, beaucoup de, un peu de, deux, trois), use EN before the verb AND keep the number/adverb at the end: "J’en ai assez", "Il en veut trois", "J’en ai encore une tranche".', ruleZh: '遇到数字或数量副词（beaucoup de, assez de, une tranche de...）：名词变成 en 放动词前，数字/数量词（不带 de）留在动词后！如：J’en ai beaucoup / J’en veux deux！' },
          { label: 'de + Verb List + No PC Agreement', rule: 'parler de, s’occuper de, remercier de, revenir/venir de, avoir besoin/envie de, jouer de (instrument), être fou/content de + THING → EN ("J’en reviens", "Parlons-en !"). Note il y a + en = "il y en a". Zero PC agreement ("Je n’en ai pas écrit").', ruleZh: '常见带 de 动词（parler de, avoir besoin de, revenir de...）遇事物用 en；il y a 加 en 固定变成 il y en a；复合过去时里 en 后面分词绝对不加 s/e（J’en ai lu beaucoup）！' }
        ],
        sections: [
          {
            id: 'p8a8_uses',
            heading: '1. Partitives, Numbers & de-Verbs ("Il y en a", "J’en ai assez")',
            headingZh: '一、en 的三大核心来源：部分冠词、数量短语、de 动词',
            lead: 'Listen to Tex, Tammy, and Edouard at the dinner table: notice how "Yes, there is some" = "Oui, il y en a", and "I have enough" MUST include en = "J’en ai assez"!',
            leadZh: '注意英语里常说 “I have enough” 或 “I want two”，不加 “of it”；但法语只要被省略的名词前面有 **du/des** 或 **数词/数量词**，动词前就**必写 `en`**：',
            cartoon: {
              src: './assets/tex_cartoons/pro7_soupe.gif',
              alt: 'Tammy, Edouard et Tex mangent de la soupe et du pain',
              caption: 'Tex : Il y a du vin ? — Tammy : Oui, il y en a. Tu en veux ? — Edouard : J’en ai assez !',
              captionZh: '有酒吗？— 有啊（il y en a）。你想来点吗（Tu en veux）？— 面包我吃够了（J’en ai assez）！'
            },
            table: {
              headers: ['Source Phrase', 'French with en', 'Key Pattern Note'],
              rows: [
                { cols: ['du vin · de la soupe · des idées', 'Il y en a. · Tu en veux ? · Oui, tu en as.', 'Replaces du / de la / de l’ / des / pas de'], audio: 'Il y en a. Tu en veux ?' },
                { cols: ['assez de pain · beaucoup d’argent', 'J’en ai assez. · Nous en avons beaucoup.', 'Quantity word stays AFTER verb (drop de!)'], audio: 'J’en ai assez. Nous en avons beaucoup.' },
                { cols: ['une tranche de pain · un poème', 'J’en ai encore une tranche. · J’en écris un.', 'Keep indefinite un/une/deux in AFFIRMATIVE only!'], audio: 'J’en ai encore une tranche.' },
                { cols: ['parler de · avoir besoin de · revenir de', 'Tu veux en parler ? · J’en ai besoin. · J’en reviens.', 'de + thing/place → en (person = de lui/d’elle!)'], audio: 'Tu veux en parler ? J’en reviens tout juste !' },
                { cols: ['il y a + du/des... · pas de...', 'Il y en a. · Il n’y en a pas.', 'y ALWAYS precedes en!'], audio: 'Il y en a. Il n’y en a pas.' }
              ]
            },
            examples: [
              { fr: 'Edouard : J’en reviens tout juste ! Tu veux en parler ? — J’ai envie de gagner plus d’argent, j’en ai vraiment besoin !', en: 'revenir de, parler de, avoir besoin de (+ money/interview)', zh: '刚从面试回来（revenir de l’interview → j’en reviens），非常需要钱（avoir besoin d’argent → j’en ai besoin）。', tag: 'de + Verb → en' },
              { fr: 'Tex : J’ai encore une tranche (de pain). · Negative: Non, je n’en ai pas.', en: 'Keep "une tranche" in positive, drop number in negative!', zh: '肯定句保留数词/量词（une tranche）；否定句连数词也一起省略：Je n’en ai pas！', tag: 'Quantity & Negative' },
              { fr: 'Edouard parle de Tex → Il parle de lui. (Person trap!)', en: 'de + person uses disjunctive pronoun (de lui / d’elle), NOT *en!', zh: '说某人（parler de Tex）是“de + 人”，日常标准语法保持 de lui / d’elle！', tag: 'de + Person Trap' }
            ]
          },
          {
            id: 'p8a8_placement',
            heading: '2. Dialogue: Tex’s New Poems (Negation, PC No-Agreement & Parlons-en !)',
            headingZh: '二、对话精读：复合过去时、否定与肯定命令式（Parlons-en !）',
            lead: 'Watch carefully: (1) "Ne m’en parle pas !" (negative imperative puts me + en BEFORE verb); (2) "Parlons-en !" (affirmative imperative puts -en AFTER verb); (3) "Je n’en ai pas écrit" (NO -s on écrit even though "des poèmes" is plural!):',
            leadZh: '仔细体会 Tex 和出版编辑关于新诗集的对话里三个高频用法（特别是“不配合的过去分词 écrit”）：',
            cartoon: {
              src: './assets/tex_cartoons/pro7_poemes.gif',
              alt: 'Tex et son éditeur parlent de nouveaux poèmes',
              caption: 'Tex : De nouveaux poèmes ? Ne m’en parle pas ! Je n’en ai pas écrit. — Éditeur : Mais si, parlons-en !',
              captionZh: '新诗（des poèmes）？别跟我提它们（Ne m’en parle pas）！— 编辑：来嘛，咱们聊聊（Parlons-en）！'
            },
            dialogue: {
              title: 'Tex & His Editor: Writer’s Block',
              titleZh: '小对话：灵感枯竭的诗人',
              lines: [
                { speaker: 'Tex', fr: 'De nouveaux poèmes ? Ne m’en parle pas !', en: 'New poems? Don’t talk to me about them!', zh: '别跟我提新诗了！（否定命令式：m’ + en 放动词前）' },
                { speaker: 'Éditeur', fr: 'Mais si, parlons-en !', en: 'Oh come on, let’s talk about them!', zh: '聊聊嘛！（肯定命令式：连字符放动词后 Parlons-en !）' },
                { speaker: 'Tex', fr: 'Je n’en ai pas écrit depuis longtemps et je ne vais plus en écrire.', en: 'I haven’t written any for a long time and I’m not going to write any more.', zh: '注意：en 不引发配合，所以 écrit 不加 s！第二句放不定式 écrire 前。' },
                { speaker: 'Éditeur', fr: 'Mais si tu en as ! Elles sont bizarres, tes idées, mais tu en as beaucoup quand même.', en: 'Yes you do! Your ideas are weird, but you still have a lot of them.', zh: '你还是有很多点子的（tu en as beaucoup）！' }
              ]
            },
            quickCheck: {
              prompt: 'How do you answer "Tu as acheté des pommes ?" with "Yes, I bought three"?',
              promptZh: '别人问“Tu as acheté des pommes ?（你买苹果了吗？）”，想答“对，我买了三个”，哪一句最地道且配合正确？',
              options: [
                'Oui, j’en ai acheté trois. (en triggers NO -es agreement on acheté!)',
                'Oui, j’en ai achetées trois.',
                'Oui, j’ai acheté trois.',
                'Oui, je les ai acheté trois.'
              ],
              answerIdx: 0,
              explain: 'Two golden rules at once: (1) use "en" before "ai" and keep "trois" at the end; (2) past participles with "avoir + en" do NOT agree (*achetées is wrong here!).',
              explainZh: '两条铁律一次考查：① 数字 trois 保留在句末的同时动词前必加 en；② 助动词 avoir + en 后面过去分词永远不变形，不加 -es！'
            }
          }
        ],
        drills: [
          {
            id: 'd8a8_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tammy, tu me demandes du gâteau ? → Oui, je ___ demande. (replace du gâteau)',
            promptZh: 'Tex 原题 #1：Tammy，你问我要巧克力蛋糕吗？→ 对，我向你要一些（用 en 替换 du gâteau）：',
            answers: ['ten', "t'en", 't’en'],
            hint: 'te (to you) + en (some) → t’en!',
            audio: 'Oui, je t’en demande.',
            explain: '"me" in question flips to "te" in answer: je t’en demande.',
            explainZh: '“向你要”是 t’，加上部分代词 en → je t’en demande！'
          },
          {
            id: 'd8a8_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Vous avez beaucoup d’argent ? → Oui, nous ___ beaucoup. (en + avons)',
            promptZh: 'Tex 原题 #2：你们有很多钱吗？→ 对，我们有很多（填入“en + 动词”）：',
            answers: ['en avons'],
            hint: 'Keep "beaucoup" at the end, put "en" before "avons".',
            audio: 'Oui, nous en avons beaucoup.',
            explain: 'nous en avons beaucoup (drop d’, keep beaucoup!).',
            explainZh: '名词 argent 变成 en 提前，数量副词 beaucoup 留在句末（去掉 d’）。'
          },
          {
            id: 'd8a8_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Fiona, tu bois du vin ? → Non merci, je ___ bois pas. (negative: n’en)',
            promptZh: 'Tex 原题 #3：Fiona，你喝酒吗？→ 谢谢不用了，我不喝（填入 n’ + en）：',
            answers: ["n'en", 'n’en'],
            hint: 'ne + en → n’en before verb "bois".',
            audio: 'Non merci, je n’en bois pas.',
            explain: 'je n’en bois pas.',
            explainZh: '否定句把 ne 和 en 缩合放 bois 前面：je n’en bois pas。'
          },
          {
            id: 'd8a8_d4',
            kind: 'fib',
            prompt: 'Tex Practice #5: Joe-Bob : Il y a du popcorn ? → Tammy : Oui, ___.',
            promptZh: 'Tex 原题 #5：有爆米花吗？→ 对，有（写出完整的 il y en a 句）：',
            answers: ['il y en a'],
            hint: 'il + y + en + a!',
            audio: 'Oui, il y en a.',
            explain: 'il y a + en ALWAYS inserts "en" between y and a: "il y en a".',
            explainZh: '存在句 il y a 加上 en 固定放在 y 和 a 之间：il y en a！'
          },
          {
            id: 'd8a8_d5',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tu as mangé assez de légumes ? → Oui, j’___ assez. (en + ai mangé)',
            promptZh: 'Tex 原题 #6：你吃够蔬菜了吗？→ 对，我吃够了（填入“en + ai mangé”）：',
            answers: ['en ai mangé', 'en ai mange'],
            hint: 'j’ + en + ai mangé + assez (no -s on mangé!).',
            audio: 'Oui, j’en ai mangé assez.',
            explain: 'j’en ai mangé assez (past participle does NOT agree with en!).',
            explainZh: 'en 放在助动词 ai 前，assez 留句尾；en 不引发过去分词加 -s！'
          },
          {
            id: 'd8a8_d6',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tu es folle de la cuisine d’Edouard ? → Oui, j’___ suis folle. (en)',
            promptZh: 'Tex 原题 #7：你迷恋 Edouard 的厨艺吗（être fou de + 事物）？→ 填入代词：',
            answers: ['en'],
            hint: 'de la cuisine → en before verb "suis".',
            audio: 'Oui, j’en suis folle.',
            explain: '"être fou/folle de qqch" → en.',
            explainZh: '形容词固定搭配 de + 事物，也用 en 替换（j’en suis folle）。'
          },
          {
            id: 'd8a8_d7',
            kind: 'fib',
            prompt: 'Tex Practice #8: Nous avons besoin de prendre des vacances ! → Tu as raison, nous ___ besoin. (en + avons)',
            promptZh: 'Tex 原题 #8：我们需要休假了！→ 你说得对，我们确实需要（avoir besoin de → 填入“en + 动词”）：',
            answers: ['en avons'],
            hint: 'avoir besoin de qqch → en + avons + besoin.',
            audio: 'Tu as raison, nous en avons besoin.',
            explain: 'avoir besoin de → nous en avons besoin.',
            explainZh: 'avoir besoin de 中的 de + 宾语整个变成 en 放到 avons 前！'
          },
          {
            id: 'd8a8_d8',
            kind: 'fib',
            prompt: 'Tex Practice #9: Est-ce que nous avons parlé de la guerre de 40 ? → Oui, nous ___ avons parlé.',
            promptZh: 'Tex 原题 #9：我们聊过二战吗（parler de）？→ 是的，我们聊过（填入 en）：',
            answers: ['en'],
            hint: 'parler de + thing → en before auxiliary "avons".',
            audio: 'Oui, nous en avons parlé.',
            explain: 'nous en avons parlé.',
            explainZh: 'parler de + 事物，把 de la guerre 换成 en 放在助动词 avons 前。'
          },
          {
            id: 'd8a8_d9',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tu joues du piano ? → Oui, j’___ joue.',
            promptZh: 'Tex 原题 #10：你弹钢琴吗（jouer de + 乐器）？→ 是的，我弹（填入代词）：',
            answers: ['en'],
            hint: 'jouer DE an instrument uses "en" (unlike jouer à → y!).',
            audio: 'Oui, j’en joue.',
            explain: 'jouer de + musical instrument → en ("j’en joue"). Compare: jouer à + sport/game → y ("j’y joue")!',
            explainZh: '弹奏乐器是 jouer de（用 en）；打球/下棋/玩游戏是 jouer à（用 y）！'
          },
          {
            id: 'd8a8_d10',
            kind: 'fib',
            prompt: 'Tex Practice #11: Joe-Bob : Je reviens de UT. → Tammy : Moi aussi, j’___ reviens.',
            promptZh: 'Tex 原题 #11：我刚从德州大学回来（revenir de + 地点）。→ Tammy：我也是，我刚从那儿回来（填入代词）：',
            answers: ['en'],
            hint: '"from a place" (de + place) uses "en" (NOT y!).',
            audio: 'Moi aussi, j’en reviens.',
            explain: 'Going TO/IN a place = y; coming FROM (de/du) a place = en!',
            explainZh: '去某地/在某地用 y（aller à）；“从某地回来”（venir/revenir de）必用 en！'
          },
          {
            id: 'd8a8_d11',
            kind: 'fib',
            prompt: 'Tex Practice #4 (Negative imperative): Parlons de notre mariage ! → Non, ___ ! (ne + en + parle + pas)',
            promptZh: 'Tex 原题 #4：聊聊我们的婚礼吧！→ 不，别聊这个！（写出完整否定命令式）：',
            answers: ["n'en parle pas", 'n’en parle pas'],
            hint: 'ne + en + parle + pas → n’en parle pas!',
            audio: 'Non, n’en parle pas !',
            explain: 'Negative imperative keeps pronouns before the verb: "n’en parle pas !"',
            explainZh: '否定命令式：n’en parle pas !'
          },
          {
            id: 'd8a8_d12',
            kind: 'fib',
            prompt: 'Affirmative imperative (nous): Parlons de ces poèmes ! → ___ ! (verb-en)',
            promptZh: '课文原句：咱们聊聊这些新诗吧！（nous 肯定命令式 + en）：',
            answers: ['Parlons-en', 'parlons-en'],
            hint: 'Affirmative imperative attaches "-en" after verb with hyphen.',
            audio: 'Parlons-en !',
            explain: 'Affirmative imperative: Parlons-en ! (And with tu -er verbs, keep -s: Parles-en !).',
            explainZh: '肯定命令式用连字符接在后面：Parlons-en !（如果是 tu 命令式还要加 s 连音：Parles-en !）。'
          }
        ],
        related: [
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_7', label: 'Back to 8A.7 The Pronoun Y' },
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_9', label: '8A.9 Indirect Object Pronouns (COI)' }
        ]
      },

      /* =========================================================
         PAGE 8A.9: INDIRECT OBJECT PRONOUNS — COI (pro8)
      ========================================================= */
      {
        id: 'p8a_9',
        code: '8A.9',
        group: 'Indirect Object (COI)',
        shortTitle: 'Indirect Object (lui / leur)',
        title: 'Indirect Object Pronouns (COI): me, te, lui, nous, vous, leur & COD vs. COI Traps',
        titleZh: '间接宾语代词（COI）：lui / leur 的“性别盲”、语序与英汉及物性对比陷阱',
        estMin: 4,
        summary: 'Master all 6 indirect object pronouns (me, te, lui, nous, vous, leur) replacing "à + PERSON": (1) "lui" means BOTH "to him" AND "to her" (gender-neutral!), and "leur" means "to them" (NEVER *leurs!); (2) placement BEFORE verb/auxiliary/infinitive, AFTER verb in affirmative imperatives with me/te → moi/toi ("Explique-moi !"); (3) NO past participle agreement with COI ("Je lui ai offert des fleurs"); (4) master COD vs. COI verb list (téléphoner à, parler à, répondre à, écrire à, offrir à, donner à, demander à, obéir à, ressembler à, plaire à).',
        summaryZh: '间接宾语专指 **`à + 人`**（给某人、向某人、对某人）。吃透四大高频铁律：① **`lui` 既指男也指女**（别把女性换成 *la*），**`leur` 绝对不加 -s**（绝不是 *leurs*）；② COI 在复合过去时里**永远不引起过去分词配合**（`Tu leur as offert...` 不加 s！）；③ 肯定命令式放动词后且 `me/te` 变 `moi/toi`（`Explique-moi !`）；④ 必须分清“假朋友”动词：英语说 *look for/wait for/listen to* 但法语全接直宾（`le/la/les`），而法语 **`téléphoner à / obéir à / plaire à / répondre à / parler à / écrire à / offrir à / demander à`**（接人时）全接间宾 **`lui / leur`**！',
        cheatSummary: [
          { label: 'Gender-Neutral lui & No-S leur', rule: 'à Tex → Tex lui parle ("to him"). à Tammy → Tex lui parle ("to her" — NEVER *la parle!). à Bette et Fiona → Tex leur parle (NEVER *leurs!). Zero past-participle agreement with lui/leur!', ruleZh: 'lui 男女通用，leur 不加 -s！助动词 avoir 后面遇 lui/leur 绝对不做过去分词配合（Je lui ai parlé，不是 *parlée）！' },
          { label: 'Classic COD vs. COI Verb Contrast', rule: 'DIRECT (le/la/les): chercher, attendre, écouter, regarder, aimer, inviter, appeler. INDIRECT (à + person → lui/leur): parler à, téléphoner à, offrir à, donner à, écrire à, répondre à, demander à, plaire à, ressembler à, obéir à.', ruleZh: '高频混淆对照：打电话用 appeler qqn (COD) vs téléphoner à qqn (COI)！听/等/看/找直接用 COD；回答/写信/送礼/说话/顺从/像某人用 COI！' }
        ],
        sections: [
          {
            id: 'p8a9_forms',
            heading: '1. COI Forms, Flower Confession & High-Frequency à-Verbs',
            headingZh: '一、COI 代词表与“给两位女生送花”实战对话',
            lead: 'Remember: indirect object pronouns (lui, leur) replace "à + PERSON". Watch how "lui" refers to Bette (feminine!) and "leur" refers to both Tammy and Bette:',
            leadZh: '看 Tex 给 Tammy 和 Bette 送花这段戏：对两个女生单数说 **à Bette → lui**，对两个女生复数说 **à toutes les deux → leur**：',
            cartoon: {
              src: './assets/tex_cartoons/pro8_fleurs.gif',
              alt: 'Tex offre des fleurs à Tammy et à Bette',
              caption: 'Tammy : À Bette, tu lui offres des fleurs aussi ! — Joe-Bob : Tu leur as offert des fleurs, à toutes les deux !',
              captionZh: '对女猫 Bette 送花也用 lui（不随性别变 la）；对她们俩说 Tu leur as offert（offert 不加 -s！）'
            },
            table: {
              headers: ['COI Form', 'Replaces', 'Key Contrast Example', 'Passé Composé (NO Agr.!)'],
              rows: [
                { cols: ['me (m’)', 'à moi (to me)', 'Tu m’offres des fleurs.', 'Quelqu’un m’a envoyé un cadeau.'], audio: 'Tu m’offres des fleurs. Quelqu’un m’a envoyé un cadeau.' },
                { cols: ['te (t’)', 'à toi (to you)', 'Je t’offre des fleurs plus souvent.', 'Je t’ai écrit une lettre.'], audio: 'Je t’offre des fleurs plus souvent.' },
                { cols: ['lui', 'à lui / à elle (M or F sg.!)', 'Tu lui offres des fleurs (à Bette / à Tex).', 'Je lui ai acheté un cadeau.'], audio: 'Tu lui offres des fleurs. Je lui ai acheté un cadeau.' },
                { cols: ['nous · vous', 'à nous · à vous', 'Donne-nous ton adresse ! Je vous réponds.', 'Il nous a téléphoné hier.'], audio: 'Il nous a téléphoné hier.' },
                { cols: ['leur (NEVER *leurs!)', 'à eux / à elles (M or F pl.)', 'Je leur écris. · Ne leur parle pas !', 'Tu leur as offert des fleurs !'], audio: 'Tu leur as offert des fleurs !' }
              ]
            },
            examples: [
              { fr: 'Tammy : Tex, tu m’offres des fleurs ? Et à Bette, tu lui offres des fleurs aussi ? — Tex : Oui, mais je t’offre des fleurs plus souvent.', en: 'm’ = to me · lui = to her (Bette!) · t’ = to you', zh: 'm’ / t’ 在元音前省音，à Bette 用男女通用的 lui。', tag: 'me / te / lui' },
              { fr: 'Joe-Bob : Tu leur as offert des fleurs, à toutes les deux ! Bravo, quel tombeur ! — Tammy : Paf !', en: '"leur" + "as offert": NEVER *offertes and NEVER *leurs!', zh: 'leur 永远不加 -s，而且 offert 在 leur 后面永远不加 -s 或 -es！', tag: 'No Agreement' }
            ]
          },
          {
            id: 'p8a9_dialogue',
            heading: '2. Champagne Mystery Dialogue: Imperatives & Pre-Verb Position',
            headingZh: '二、香槟礼品对话：COI 在命令式与不定式中的位置',
            lead: 'Notice the sharp contrast in Tammy’s confrontation: affirmative imperative "Explique-moi !" (-moi AFTER verb) vs. "aller lui parler" (lui BEFORE infinitive) vs. "Ne lui parle pas !" (lui BEFORE negative verb):',
            leadZh: '一段短剧练全 COI 的所有语序：`Explique-moi !`（肯定命令式）→ `Je vais lui parler`（不定式前）→ `Ne lui parle pas !`（否定命令式）：',
            cartoon: {
              src: './assets/tex_cartoons/pro8_cadeau.gif',
              alt: 'Tex et Tammy ouvrent une bouteille de champagne mystérieuse',
              caption: 'Tammy : Explique-moi ! Je vais lui parler. — Tex : Ne lui parle pas !',
              captionZh: 'Tammy：给我解释清楚（Explique-moi）！我要去跟她谈谈（lui parler）！— Tex：别跟她谈（Ne lui parle pas）！'
            },
            dialogue: {
              title: 'Tex, Tammy & the Anonymous Champagne',
              titleZh: '小对话：神秘的生日香槟',
              lines: [
                { speaker: 'Tex', fr: 'Regarde, quelqu’un m’a envoyé un cadeau.', en: 'Look, someone sent me a gift.', zh: '快看，有人寄给我（m’a envoyé）一份礼物。' },
                { speaker: 'Tammy', fr: 'Qui t’offre un cadeau ? … Pas de signature ! Eh bien, monsieur, explique-moi !', en: 'Who is giving you a gift? No signature! Well sir, explain (this to) me!', zh: '快跟我解释一下（Explique-moi !）！' },
                { speaker: 'Tammy', fr: 'C’est bien cette petite chatte maline, n’est-ce pas ? Je vais aller lui parler.', en: 'It’s that cunning little cat, isn’t it? I’m going to go talk to her.', zh: '就是那只精明小猫送的对吧？我这就去找她说话（lui parler）。' },
                { speaker: 'Tex', fr: 'Ne lui parle pas ! C’est une bagatelle, un petit rien...', en: 'Don’t talk to her! It’s a trifle, nothing at all...', zh: '别去跟她谈啊（Ne lui parle pas）！' },
                { speaker: 'Tammy', fr: 'Un petit rien ? Paf !', en: 'Nothing at all? Pow!', zh: '没啥大事？啪！' }
              ]
            },
            quickCheck: {
              prompt: 'How do you translate "I called my sister yesterday" using BOTH "appeler" (COD) and "téléphoner à" (COI)?',
              promptZh: '表达“我昨天给我姐姐打了电话”，以下哪个双动词对照完全正确？',
              options: [
                'Je l’ai appelée hier. (COD → +e) · Je lui ai téléphoné hier. (COI → NO -e)',
                'Je lui ai appelée hier. · Je l’ai téléphoné hier.',
                'Je l’ai appelé hier. · Je lui ai téléphonée hier.',
                'Je la ai appelée hier. · Je la ai téléphoné hier.'
              ],
              answerIdx: 0,
              explain: 'appeler qqn takes COD (l’ → appelée); téléphoner à qqn takes COI (lui → téléphoné, never agrees!).',
              explainZh: 'appeler 直接及物用 l’ 且要配合加 -e；téléphoner à 接间宾用 lui 且过去分词永远不变！'
            }
          }
        ],
        drills: [
          {
            id: 'd8a9_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Offre une bière à Joe-Bob → Allez, offre-___ une bière ! (to him)',
            promptZh: 'Tex 原题 #1：给 Joe-Bob 拿瓶啤酒 → 肯定命令式：快给他拿一瓶！（注意：只有 me/te 变 moi/toi，lui 不变）',
            answers: ['lui'],
            hint: '3rd sg. indirect object after imperative stays "lui" (offre-lui).',
            audio: 'Allez, offre-lui une bière !',
            explain: '"à Joe-Bob" → offre-lui (only me/te become moi/toi in imperatives).',
            explainZh: '只有 me/te 在肯定命令式后变 moi/toi，第三人称依然写 lui → offre-lui !'
          },
          {
            id: 'd8a9_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Ne donne pas ces roses à Fiona et Bette → Ne ___ donne pas de roses ! (to them)',
            promptZh: 'Tex 原题 #2：别把这些玫瑰送给 Fiona 和 Bette！→ 填入间宾代词：',
            answers: ['leur'],
            hint: 'Indirect object "to them" (NEVER *leurs!).',
            audio: 'Ne leur donne pas de roses !',
            explain: 'Plural "à Fiona et Bette" → leur (no -s!).',
            explainZh: 'à + 复数人物固定用 leur（永远不加 -s）。'
          },
          {
            id: 'd8a9_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Donne ta recette à Tex et Tammy → Donne-___ ta recette ! (to us)',
            promptZh: 'Tex 原题 #3：Edouard，我们爱吃你的可丽饼！把秘方给我们吧（肯定命令式 + 我们）：',
            answers: ['nous'],
            hint: '1st person plural indirect object after imperative.',
            audio: 'Donne-nous ta recette !',
            explain: 'Donne-nous ta recette !',
            explainZh: '肯定命令式后“给我们”用 -nous。'
          },
          {
            id: 'd8a9_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Tex : Tammy, je ___ envoie une carte de vœux ! (to you)',
            promptZh: 'Tex 原题 #4：Tammy，我给你寄了一张贺卡！（注意元音开头的 envoie！）',
            answers: ["t'", 't’'],
            hint: 'te elides to t’ before "envoie"!',
            audio: 'Tammy, je t’envoie une carte de vœux !',
            explain: 'te → t’ before vowel "envoie".',
            explainZh: 'te 在元音 envoie 前省音为 t’。'
          },
          {
            id: 'd8a9_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Joe-Bob : J’ai faim ! Tammy, tu ___ fais un hamburger ? (for me)',
            promptZh: 'Tex 原题 #5：我饿啦！Tammy，你给我做一个汉堡好吗？',
            answers: ['me'],
            hint: '1st sg. indirect object before "fais".',
            audio: 'Tammy, tu me fais un hamburger ?',
            explain: 'tu me fais = you make (for) me.',
            explainZh: '放在动词 fais 前面用 me。'
          },
          {
            id: 'd8a9_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tex : Tammy, j’ai faim ! Fais-___ un hamburger ! (for me — imperative)',
            promptZh: 'Tex 原题 #6：我饿了！给我做一个汉堡吧！（tu 肯定命令式 → me 变什么？）',
            answers: ['moi'],
            hint: 'In affirmative imperative, me → moi after hyphen!',
            audio: 'Fais-moi un hamburger !',
            explain: 'Fais-moi un hamburger !',
            explainZh: '肯定命令式连字符后面 me 必须变为 moi → Fais-moi !'
          },
          {
            id: 'd8a9_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tammy : Tex, tu pues. Achète-___ du déodorant ! (for yourself — wait: buy yourself deodorant!)',
            promptZh: 'Tex 原题 #7：Tammy 对 Tex 说：“你身上好臭！去给自己（à toi）买瓶止汗露吧！”（肯定命令式 te → ?）：',
            answers: ['toi'],
            hint: 'Affirmative imperative "te" → "-toi"!',
            audio: 'Achète-toi du déodorant !',
            explain: 'Buy (for) yourself → te changes to -toi in affirmative imperative: "Achète-toi !"',
            explainZh: '对朋友命令“给自己买（s’acheter）”时，te 拖到动词后变 -toi → Achète-toi !'
          },
          {
            id: 'd8a9_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: J’ai acheté un cadeau à Tex ! → Qu’est-ce que tu ___ acheté ? (lui + as)',
            promptZh: 'Tex 原题 #8：我给 Tex 买了份礼物！→ 你给他买了什么？（填入“代词 + 助动词”）：',
            answers: ['lui as'],
            hint: 'COI "lui" before auxiliary "as" (no -e/-s on acheté).',
            audio: 'Qu’est-ce que tu lui as acheté ?',
            explain: 'tu lui as acheté (COI precedes auxiliary "as").',
            explainZh: '间宾代词 lui 置于助动词 as 之前，且 acheté 不配合。'
          },
          {
            id: 'd8a9_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Je vais acheter un cadeau à Tex → Qu’est-ce que tu vas ___ acheter ?',
            promptZh: 'Tex 原题 #9：我打算去给 Tex 买礼物 → 你打算给他买什么？（置于不定式 acheter 前）',
            answers: ['lui'],
            hint: 'Before infinitive "acheter".',
            audio: 'Qu’est-ce que tu vas lui acheter ?',
            explain: 'vas lui acheter.',
            explainZh: '近将来时把 lui 放在不定式 acheter 前面。'
          },
          {
            id: 'd8a9_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: J’ai acheté des cadeaux pour mes neveux → Qu’est-ce que tu ___ acheté ? (leur + as)',
            promptZh: 'Tex 原题 #10：我给侄子们（复数）买了礼物 → 你给他们买了什么？（填入“代词 + 助动词”）：',
            answers: ['leur as'],
            hint: 'mes neveux = plural COI "leur" + auxiliary "as".',
            audio: 'Qu’est-ce que tu leur as acheté ?',
            explain: 'tu leur as acheté (NO -s on leur, NO -s on acheté!).',
            explainZh: 'mes neveux 为复数间宾，用 leur；leur as acheté 全程无额外 s！'
          },
          {
            id: 'd8a9_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: J’ai confessé mes sentiments à Tammy → Je ___ ai envoyé des fleurs !',
            promptZh: 'Tex 原题 #11：我向 Tammy（女）表白了，还给她送了花！（提示：envoyer à qqn 用男女通用的间宾）',
            answers: ['lui'],
            hint: 'à Tammy → lui (NOT *la or *l’)!',
            audio: 'Je lui ai envoyé des fleurs !',
            explain: '"à Tammy" (indirect object of envoyer) = lui (even though Tammy is female!).',
            explainZh: 'envoyer qqch à qqn，替代 à Tammy（女孩）用间宾 lui，不可用 *la / l’！'
          },
          {
            id: 'd8a9_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tammy m’adore. Elle ___ parle tous les jours. (to me)',
            promptZh: 'Tex 原题 #12：Tammy 崇拜我，她每天都跟我聊天（parler à moi → 填入代词）：',
            answers: ['me'],
            hint: '1st sg. COI before "parle".',
            audio: 'Elle me parle tous les jours.',
            explain: 'Elle me parle.',
            explainZh: 'parler à + moi → Elle me parle。'
          }
        ],
        related: [
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_8', label: 'Back to 8A.8 The Pronoun EN' },
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_10', label: '8A.10 Double Object Pronoun Order' }
        ]
      },

      /* =========================================================
         PAGE 8A.10: DOUBLE OBJECT PRONOUN ORDER (pro9 Part 1)
      ========================================================= */
      {
        id: 'p8a_10',
        code: '8A.10',
        group: 'Double Pronoun Order',
        shortTitle: 'Double Pronouns (5-Column Grid)',
        title: 'Double Object Pronouns (Part 1): The 5-Column Pre-Verb Grid & Negation / PC',
        titleZh: '双宾语代词（上）：五槽神表语序、me le vs. le lui、否定与复合过去时位置',
        estMin: 4,
        summary: 'Master placing TWO object pronouns together before a verb using the universal 5-column pre-verb chart: [1: me/te/se/nous/vous] → [2: le/la/les] → [3: lui/leur] → [4: y] → [5: en] → VERB. Notice the key twist: 1st/2nd person comes BEFORE le/la/les ("me le", "nous en"), while 3rd person le/la/les comes BEFORE lui/leur ("le lui", "les leur")! Also master negation ("ne" before BOTH pronouns) and compound tenses (both pronouns before the auxiliary).',
        summaryZh: '当一个句子里同时出现**两个**宾语代词（例如“他把书递**给我**”、“我把它送**给他**”）时，它们必须按照严格固定的 **五列语序** 排在动词前：**① me/te/se/nous/vous → ② le/la/les → ③ lui/leur → ④ y → ⑤ en → 动词**。死记住核心分界：**一二人称在 `le/la/les` 前**（`me le`），但 **第三人称的 `le/la/les` 反而在 `lui/leur` 前**（`le lui`、`les leur`）！否定句中 `ne` 放在两个代词最前面，复合过去时两个代词整体放在助动词前面！',
        cheatSummary: [
          { label: 'Pre-Verb 5-Slot Order Chart', rule: '[1] me / te / se / nous / vous → [2] le / la / les → [3] lui / leur → [4] y → [5] en → VERB. Never put two pronouns from Column 1+3 together (*me lui is impossible; use tonic: "Il me présente à lui").', ruleZh: '牢记五槽口诀：我你自我们你们（me/te/se/nous/vous）→ 它他她（le/la/les）→ 给TA/TA们（lui/leur）→ 那里（y）→ 一些（en）！绝不并排“1槽+3槽”（改说 Il me présente à lui）。' },
          { label: 'Key Contrast: me le vs. le lui', rule: 'Fiona ME LE donne ("to me it" = me before le). Fiona LE LUI donne ("it to him/her" = le before lui!). With negation/PC: "Fiona ne nous en a pas donné." (ne + BOTH pronouns + auxiliary).', ruleZh: '必记对照：给“我/你/我们”时说 me le / nous le；但给“他/她/他们”时次序倒转成 le lui / le leur！有 ne 和助动词时，ne 在最前、助动词在两个代词之后！' }
        ],
        sections: [
          {
            id: 'p8a10_grid',
            heading: '1. Joe-Bob’s 5-Slot Pre-Verb Grid & Examples With Parfum',
            headingZh: '一、陈述句 / 否定句 / 复合过去时双宾语五槽位置图',
            lead: 'Keep one rule in your head whenever two pronouns appear before the verb: match left-to-right across the 5 columns below, and NEVER break the order:',
            leadZh: '只要两个代词都要放在动词或助动词前面，严格按左到右 1 → 2 → 3 → 4 → 5 槽位排列即可：',
            cartoon: {
              src: './assets/tex_cartoons/pro9_parfum.gif',
              alt: 'Fiona, Tammy et Bette parlent de parfum au gymnase',
              caption: 'Tammy : Ton parfum, tu me le donnes ? Tu vas me le donner ? Donne-le-moi ! — Pourquoi ne nous en a-t-elle pas donné ?',
              captionZh: '香水：你把它给我吗（me le donnes）？快给我吧（Donne-le-moi）！— 她怎么没给我们留一点（ne nous en a pas donné）？'
            },
            table: {
              headers: ['Slot 1', 'Slot 2 (COD)', 'Slot 3 (COI)', 'Slot 4 + 5', 'Model Sentence'],
              rows: [
                { cols: ['me / te / nous / vous / se', 'le / la / les', '—', '—', 'Fiona me le donne. · Je te les montre.'], audio: 'Fiona me le donne. Je te les montre.' },
                { cols: ['—', 'le / la / les', 'lui / leur', '—', 'Fiona le lui donne. · Il les leur donne.'], audio: 'Fiona le lui donne. Il les leur donne.' },
                { cols: ['me / te / nous / vous / se', '—', '—', 'y / en', 'Tu m’en donnes ? · Elle nous y retrouve.'], audio: 'Tu m’en donnes ? Elle nous y retrouve.' },
                { cols: ['—', '—', 'lui / leur', 'en', 'Il lui en parle. · Ils leur en offrent.'], audio: 'Il lui en parle. Ils leur en offrent.' },
                { cols: ['Negation & PC Frame', 'ne + [Pron1 + Pron2]', '+ aux + pas + PP', '(y precedes en!)', 'Elle ne nous en a pas donné. · Il y en a.'], audio: 'Elle ne nous en a pas donné.' }
              ]
            },
            examples: [
              { fr: 'Fiona me le donne · te le donne · nous le donne · vous le donne.', en: '1st & 2nd person pronouns ALWAYS stand BEFORE le / la / les!', zh: '第一、二人称（me, te, nous, vous）永远排在 le / la / les 的左边！', tag: 'Slot 1 → Slot 2' },
              { fr: 'Fiona le lui donne · Fiona le leur donne.', en: '3rd person COD (le/la/les) reverses to stand BEFORE lui / leur!', zh: '一旦遇到第三人称 lui / leur，就变成 le / la / les 在左、lui / leur 在右！', tag: 'Slot 2 → Slot 3' },
              { fr: 'Pourquoi est-ce que Fiona ne nous en a pas donné ?', en: 'Negation + Passé Composé: ne + nous + en + auxiliary "a" + pas + past participle!', zh: '否定复合过去时：ne + 槽1 nous + 槽5 en + 助动词 a + pas + 过去分词（en 不引起配合）！', tag: 'Negation + PC' }
            ],
            quickCheck: {
              prompt: 'How do you rewrite "Tex offre son livre à Edouard" replacing BOTH objects?',
              promptZh: '同时替换句中的两个宾语：“Tex offre son livre（阳性单数直宾）à Edouard（单数人间宾）”，结果是？',
              options: [
                'Tex le lui offre. (Slot 2 le → Slot 3 lui!)',
                'Tex lui l’offre.',
                'Tex se l’offre.',
                'Tex l’en offre.'
              ],
              answerIdx: 0,
              explain: '"son livre" = le (Slot 2); "à Edouard" = lui (Slot 3). Before a verb, Slot 2 precedes Slot 3: "Tex le lui offre."',
              explainZh: 'son livre 变 2 槽的 le，à Edouard 变 3 槽的 lui，合起来必须按“2→3”排成 Tex le lui offre！'
            }
          }
        ],
        drills: [
          {
            id: 'd8a10_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex offre son livre à Edouard → Tex ___ offre. (2 pronouns)',
            promptZh: 'Tex 原题 #1：Tex 把他的书（le）送给 Edouard（lui）→ 填入两个代词：',
            answers: ['le lui'],
            hint: 'Slot 2 (le) + Slot 3 (lui) before verb.',
            audio: 'Tex le lui offre.',
            explain: 'son livre → le, à Edouard → lui: Tex le lui offre.',
            explainZh: '两第三人称代词连用，2 槽 le 在 3 槽 lui 前：le lui。'
          },
          {
            id: 'd8a10_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tex retrouve Tammy et Edouard au restaurant → Tex ___ retrouve. (them + there)',
            promptZh: 'Tex 原题 #2：Tex 在餐厅跟 Tammy 和 Edouard 碰面 → 替换“他们（les）+ 在那里（y）”：',
            answers: ['les y'],
            hint: 'Slot 2 (les) + Slot 4 (y).',
            audio: 'Tex les y retrouve.',
            explain: 'Tammy et Edouard (direct object) → les; au restaurant → y: Tex les y retrouve.',
            explainZh: 'retrouver qqn 接直宾（les），au restaurant 变成 y，按“2→4”排成 les y。'
          },
          {
            id: 'd8a10_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Edouard donne sa recette à Tex et Tammy → Edouard ___ donne. (la recette + to them)',
            promptZh: 'Tex 原题 #3：Edouard 把他的食谱（la recette）给 Tex 和 Tammy（复数间宾）→ 填入两个代词：',
            answers: ['la leur'],
            hint: 'sa recette (fem. sg. la) + à Tex et Tammy (leur).',
            audio: 'Edouard la leur donne.',
            explain: 'la (Slot 2) + leur (Slot 3) → Edouard la leur donne.',
            explainZh: 'la recette 为阴性单数（la），Tex et Tammy 为复数人（leur），按“2→3”排成 la leur。'
          },
          {
            id: 'd8a10_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Je dédicace mon livre à Tammy → Je ___ dédicace. (it + to her)',
            promptZh: 'Tex 原题 #4：我把我的书签赠给 Tammy → 填入两个代词：',
            answers: ['le lui'],
            hint: 'mon livre (le) + à Tammy (lui, gender-neutral!).',
            audio: 'Je le lui dédicace.',
            explain: 'Even though Tammy is female, the indirect object is "lui": Je le lui dédicace.',
            explainZh: 'mon livre 是 le，à Tammy 是男女通用的 lui → le lui。'
          },
          {
            id: 'd8a10_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: J’offre un peu de vin à mes amis → Je ___ offre un peu. (to them + some)',
            promptZh: 'Tex 原题 #5：我请朋友们喝一点酒 → 替换 à mes amis 与 de vin（填入“给他们 + 一些”）：',
            answers: ['leur en'],
            hint: 'Slot 3 (leur) + Slot 5 (en)! Keep "un peu" at end.',
            audio: 'Je leur en offre un peu.',
            explain: 'à mes amis → leur (Slot 3); de vin → en (Slot 5): Je leur en offre un peu.',
            explainZh: '3 槽 leur 排在 5 槽 en 前面：leur en（un peu 留在句末）。'
          },
          {
            id: 'd8a10_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: J’ai fait des crêpes pour vous → Je ___ ai fait. (to/for you + some — note NO -s on fait!)',
            promptZh: 'Tex 原题 #6：我给你们做了可丽饼 → 替换“给你们 + 一些”放在助动词 ai 前面：',
            answers: ['vous en'],
            hint: 'Slot 1 (vous) + Slot 5 (en).',
            audio: 'Je vous en ai fait.',
            explain: 'vous (Slot 1) + en (Slot 5) before "ai fait": Je vous en ai fait.',
            explainZh: '1 槽 vous + 5 槽 en → vous en（因为用 en，过去分词 fait 不变！）。'
          },
          {
            id: 'd8a10_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Il y a beaucoup de soleil → Il ___ a beaucoup. (y + en)',
            promptZh: 'Tex 原题 #7：阳光真充足 → 把 du soleil 换成 en（连同 y 一起填入）：',
            answers: ['y en'],
            hint: 'Slot 4 (y) ALWAYS precedes Slot 5 (en)!',
            audio: 'Il y en a beaucoup.',
            explain: 'y + en → Il y en a beaucoup.',
            explainZh: '4 槽 y 在 5 槽 en 前面：Il y en a beaucoup。'
          },
          {
            id: 'd8a10_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tammy et Tex parlent du mariage à Paw-Paw et Trey → Ils ___ parlent. (to them + about it)',
            promptZh: 'Tex 原题 #8：他们跟 Paw-Paw 和 Trey 聊起婚礼（parler de + à）→ 填入两个代词：',
            answers: ['leur en'],
            hint: 'Slot 3 (leur = to them) + Slot 5 (en = du mariage).',
            audio: 'Ils leur en parlent.',
            explain: 'à Paw-Paw et Trey → leur; du mariage → en: Ils leur en parlent.',
            explainZh: '对他们说（leur）+ 谈论婚礼（en）→ leur en。'
          },
          {
            id: 'd8a10_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tu me rejoins à la bibliothèque ? → Tu ___ rejoins ? (me + there)',
            promptZh: 'Tex 原题 #9：你去图书馆和我汇合吗？→ 替换“我 + 在那里”：',
            answers: ["m'y", 'm’y'],
            hint: 'me (Slot 1) + y (Slot 4) → m’y!',
            audio: 'Tu m’y rejoins ?',
            explain: 'me + y contracts smoothly to m’y: "Tu m’y rejoins ?"',
            explainZh: '1 槽 me 遇 4 槽 y 省音缩合为 m’y → Tu m’y rejoins ?'
          },
          {
            id: 'd8a10_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Je montre mes photos à mes neveux → Je ___ montre. (them [photos] + to them [nephews])',
            promptZh: 'Tex 原题 #10：我把照片（复数直宾）给侄子们看（复数间宾）→ 填入两个代词：',
            answers: ['les leur'],
            hint: 'Slot 2 (les = photos) + Slot 3 (leur = neveux).',
            audio: 'Je les leur montre.',
            explain: 'mes photos → les; à mes neveux → leur: Je les leur montre.',
            explainZh: 'les（照片）在 2 槽，leur（侄子们）在 3 槽，排成 les leur。'
          },
          {
            id: 'd8a10_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11 (Infinitive!): Je veux parler de mon livre à Tammy → Je veux ___ parler.',
            promptZh: 'Tex 原题 #11：我想跟 Tammy 聊聊我的书 → 把“给她 + 谈它”放在不定式 parler 前面：',
            answers: ['lui en'],
            hint: 'Both pronouns go right before infinitive "parler": Slot 3 (lui) + Slot 5 (en).',
            audio: 'Je veux lui en parler.',
            explain: 'In infinitive constructions, BOTH object pronouns precede the infinitive: "Je veux lui en parler."',
            explainZh: '不定式前并排放置：à Tammy（lui）在 de mon livre（en）前面 → lui en parler。'
          },
          {
            id: 'd8a10_d12',
            kind: 'choice',
            prompt: 'Negation + Passé Composé: "Did Fiona give us any perfume? — No, she didn’t give us any!"',
            promptZh: '复合过去时否定双宾语：“Fiona 没有给我们一点香水。”哪一句的语序最准确？',
            options: [
              'Non, Fiona ne nous en a pas donné.',
              'Non, Fiona ne nous a pas en donné.',
              'Non, Fiona nous n’en a pas donné.',
              'Non, Fiona ne nous en a pas données.'
            ],
            answerIdx: 0,
            audio: 'Non, Fiona ne nous en a pas donné.',
            explain: 'ne precedes BOTH pronouns (nous en), auxiliary "a" comes after them, followed by "pas" + invariant "donné"!',
            explainZh: '否定把 ne 放在两个代词最前面，两个代词整体在助动词 a 前，pas 在助动词后，且有 en 不做配合：ne nous en a pas donné！'
          }
        ],
        related: [
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_9', label: 'Back to 8A.9 Indirect Object (COI)' },
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_11', label: '8A.11 Imperatives & TCF Synthesis' }
        ]
      },

      /* =========================================================
         PAGE 8A.11: DOUBLE PRONOUNS IN IMPERATIVES + CH 8A SYNTHESIS (pro9 Part 2)
      ========================================================= */
      {
        id: 'p8a_11',
        code: '8A.11',
        group: 'Double Pronoun Order',
        shortTitle: 'Imperatives & Ch 8A Review',
        title: 'Double Pronouns in Imperatives ("Donne-le-moi !", "Donne-nous-en !") + Ch 8A TCF Synthesis',
        titleZh: '双宾语代词（下）：肯定命令式倒序法则（Donne-le-moi !）与第八章 A 综合实战',
        estMin: 4,
        summary: 'Master the flip in AFFIRMATIVE imperatives: (1) ALL pronouns move AFTER the verb with hyphens; (2) the order becomes STRICTLY [le / la / les] → [moi / toi / lui / nous / vous / leur] → [y / en] (so "me le" flips to "le-moi": "Donne-le-moi !"); (3) y & en stay LAST ("Donne-nous-en !", and "me/te + en" elides to "-m’en / -t’en" like "Va-t’en !" / "Donne-m’en !"); (4) NEGATIVE imperatives instantly snap back to the pre-verb 5-column chart ("Ne me le donne pas !"). Finish with a TCF CLB 7 synthesis challenge across all Ch 8A topics.',
        summaryZh: '攻克双宾语最后一关：**肯定命令式的“反序跳槽”**！在**肯定命令式**中：① 两个代词全部用连字符跳到动词后面；② 原本在最左边的 **`me / te / nous / vous`** 必须让位给 `le/la/les`，变成 **`VERB - le/la/les - moi/toi/lui/nous/vous/leur - y/en`**（比如陈述句说 `tu **me le** donnes`，肯定命令式必须翻成 `Donne-**le-moi** !`）；③ `y / en` 永远排在最后（`Donne-nous-en !`），且遇 `me/te + en` 缩合写连音 **`-m’en` / `-t’en`**（如 `Donne-m’en !`、`Va-t’en !`）。一旦变成**否定命令式**，瞬间退回正常的五槽前位：`Ne me le donne pas !`',
        cheatSummary: [
          { label: 'Affirmative vs. Negative Imperative Flip', rule: 'AFFIRMATIVE: Verb - [le/la/les] - [moi/toi/lui/nous/vous/leur] - [y/en]! ("Donne-le-moi !", "Donne-nous-en !", "Donne-m’en !"). NEGATIVE: reverts to normal pre-verb order: "Ne me le donne pas !", "Ne m’en parle pas !".', ruleZh: '肯定命令式后置顺序：动词 - le/la/les - moi/toi/lui/nous/vous/leur - y/en！（陈：me le → 命：-le-moi！）。否定命令式瞬间回归正常前置顺序：Ne me le donne pas !' },
          { label: 'Ch 8A Complete Diagnostic Checklist', rule: 'Ask 3 questions before picking a pronoun: (1) Preposition? (none → COD; à+person → COI; location/à+thing → y; de/quantity → en; other prep/c’est/stress → tonic). (2) Tense/Agreement? (preceding COD + avoir only!). (3) Position? (pre-verb 5-slot vs. aff. imperative).', ruleZh: '第八章 A 万能做题三步法：① 有无介词与指人/指物？（无介词→COD；à人→COI；地点/à物→y；de/数量→en；其他介词/孤立→重读代词）；② 有无直宾前置（avoir 是否配合？）；③ 放在动词前（五槽）还是肯定命令式后！' }
        ],
        sections: [
          {
            id: 'p8a11_imperative',
            heading: '1. Affirmative Imperative Pronoun Flip & Elided -m’en / -t’en',
            headingZh: '一、肯定命令式双代词后置倒序与缩合规则（-le-moi / -nous-en / -m’en）',
            lead: 'Notice why "me le" becomes "le-moi": in speech, French always puts the direct object ("le / la / les") right next to the imperative verb, followed by the stressed person ("-moi / -lui / -nous / -leur"), and leaves adverbial "y / en" at the very tail:',
            leadZh: '记住这一句就永不乱：`tu **me le** donnes`（给我它）→ `Donne-**le-moi** !`（把它给我！）；另外当 `moi / toi` 后面又跟着 `en`（或 `y`）时，它们缩回轻读的 **`-m’en` / `-t’en`**：',
            table: {
              headers: ['Statement / Neg. Imp.', 'Affirmative Imperative', 'Pattern Behind the Flip'],
              rows: [
                { cols: ['Tu me le donnes. / Ne me le donne pas !', 'Donne-le-moi !', 'le moves in front of moi!'], audio: 'Tu me le donnes ? Donne-le-moi !' },
                { cols: ['Vous la leur montrez. / Ne la leur montrez pas !', 'Montrez-la-leur !', 'la stays before leur!'], audio: 'Montrez-la-leur ! Ne la leur montrez pas !' },
                { cols: ['Tu nous en donnes. / Ne nous en donne pas !', 'Donne-nous-en !', 'y and en ALWAYS go last!'], audio: 'Donne-nous-en ! Ne nous en donne pas !' },
                { cols: ['Tu m’en donnes. / Ne m’en donne pas !', 'Donne-m’en ! (NOT *-moi-en)', 'moi + en elides to -m’en!'], audio: 'Donne-m’en ! Ne m’en donne pas !' },
                { cols: ['Tu y vas. / N’y va pas ! · N’en parle pas !', 'Vas-y ! · Parles-en !', '-er / va restores -s before y / en!'], audio: 'Vas-y ! N’y va pas ! Parles-en !' }
              ]
            },
            examples: [
              { fr: 'Tammy : Ton parfum, tu me le donnes ? Donne-le-moi ! — Ne me le donne pas si tu le gardes.', en: 'Statement/Neg. = me le · Affirmative Imperative = -le-moi!', zh: '陈述句与否定命令式是 me le；只有肯定命令式翻转并连字符写成 Donne-le-moi !', tag: 'me le ↔ -le-moi' },
              { fr: 'Bette : Allez, donne-nous-en ! — Mais si je t’en demande : donne-m’en un peu !', en: 'Give us some! (-nous-en) · Give me some! (-m’en, elided from moi+en)', zh: 'en 必须放在最后！nous-en 直接连；给“我一点”则要缩合为 Donne-m’en !', tag: '-nous-en / -m’en' }
            ]
          },
          {
            id: 'p8a11_synthesis',
            heading: '2. TCF CLB 7 Ch 8A Diagnostic: Avoid All 5 Common Traps',
            headingZh: '二、第八章 A 高分易错点终极排查清单',
            lead: 'Before moving on to Chapter 8B (Relative, Demonstrative & Possessive Pronouns), run through these 5 traps that cost TCF Canada candidates easy points in Listening & Reading Structure:',
            leadZh: '进入第八章 B（关系/指示/物主代词）前，再快速过一遍 TCF 语法与表达最常见的 5 个易错点：',
            examples: [
              { fr: 'C’est un bon livre. (vs. Il est intéressant.) · C’est lui / Ce sont eux.', en: 'Trap 1: Determined noun/name/tonic pronoun → c’est/ce sont; bare adj./job → il/elle est', zh: '陷阱 1：有冠词/人名/重读代词用 c’est；光杆形容词或无冠词职业国籍用 il/elle est。', tag: 'c’est vs. il est' },
              { fr: 'Il pense souvent à son examen → Il y pense. · Elle pense à Tex → Elle pense à lui.', en: 'Trap 2: à + thing → y; à + person (penser/tenir/s’intéresser à) → à + tonic!', zh: '陷阱 2：penser à 接事用 y，接人用 à lui / à elle。', tag: 'Thing vs. Person' },
              { fr: 'J’ai trouvé deux places → J’en ai trouvé deux. (NO -es on trouvé!)', en: 'Trap 3: Quantity/number kept at end + en before aux + NO PC agreement with en!', zh: '陷阱 3：数量留在句末 + en 放助动词前 + en 后过去分词永远不配合。', tag: 'Quantity + No Agr.' },
              { fr: 'La lettre que j’ai écrite · Tex l’a invitée (vs. Tex lui a téléphoné).', en: 'Trap 4: Past participle agrees with preceding COD, NEVER with COI (lui/leur)!', zh: '陷阱 4：复合过去时只配合前置直宾，不配合间宾 lui / leur。', tag: 'COD vs. COI Agr.' }
            ],
            quickCheck: {
              prompt: 'How do you convert "Tu ne me les montres pas" into an AFFIRMATIVE imperative ("Show them to me!")?',
              promptZh: '把 “Tu me les montres（你把它们给我看）” 改成肯定命令式“把它们给我看看！”，选哪一项？',
              options: [
                'Montre-les-moi !',
                'Montres-les-moi !',
                'Montre-moi-les !',
                'Me les montre !'
              ],
              answerIdx: 0,
              explain: '(1) Drop -s on -er verb in tu imperative ("Montre"); (2) move pronouns after verb with hyphens; (3) put COD "les" before stressed "moi": "Montre-les-moi !"',
              explainZh: '-er 动词 tu 命令式去 s（Montre），肯定命令式把 les 放在 moi 前面并用连字符连接 → Montre-les-moi !'
            }
          }
        ],
        drills: [
          {
            id: 'd8a11_d1',
            kind: 'fib',
            prompt: 'Affirmative imperative: "Give it (m.) to me!" → Donne-___ ! (le + moi)',
            promptZh: '肯定命令式：把它（阳性）给我！（填入连字符后的两个代词）：',
            answers: ['le-moi'],
            hint: 'COD (le) precedes stressed "moi" after imperative.',
            audio: 'Donne-le-moi !',
            explain: 'Affirmative imperative flips me le → le-moi: Donne-le-moi !',
            explainZh: '肯定命令式翻转次序，先放直宾 le 再放 moi → Donne-le-moi !'
          },
          {
            id: 'd8a11_d2',
            kind: 'fib',
            prompt: 'Negative imperative of "Donne-le-moi !": "Don’t give it (m.) to me!" → Ne ___ donne pas !',
            promptZh: '否定命令式：别把它（阳性）给我！（否定句恢复正常前位次序）：',
            answers: ['me le'],
            hint: 'Negative imperative flips back to pre-verb order: Slot 1 (me) + Slot 2 (le).',
            audio: 'Ne me le donne pas !',
            explain: 'Negatives follow standard pre-verb chart: Ne me le donne pas !',
            explainZh: '否定命令式立刻退回常规前置五槽语序：Ne me le donne pas !'
          },
          {
            id: 'd8a11_d3',
            kind: 'fib',
            prompt: 'Affirmative imperative: "Give us some (perfume)!" → Donne-___ ! (nous + en)',
            promptZh: '课文原句肯定命令式：给我们一点香水吧！（nous + en 放动词后）：',
            answers: ['nous-en'],
            hint: 'In imperatives too, "y" and "en" come LAST: nous-en!',
            audio: 'Donne-nous-en !',
            explain: 'Donne-nous-en !',
            explainZh: 'en 永远在最后，nous 后接 -en → Donne-nous-en !'
          },
          {
            id: 'd8a11_d4',
            kind: 'fib',
            prompt: 'Affirmative imperative: "Give me some!" → Donne-___ ! (m’ + en)',
            promptZh: '肯定命令式缩合：给我一点！（注意：moi + en 要省音缩合成 -m’en）：',
            answers: ["m'en", 'm’en'],
            hint: 'Before "en", moi shrinks cleanly to m’ → Donne-m’en !',
            audio: 'Donne-m’en !',
            explain: 'Never write *-moi-en; always elide to "-m’en": "Donne-m’en !"',
            explainZh: '在 en 前不用 moi，直接省音成 m’en → Donne-m’en !'
          },
          {
            id: 'd8a11_d5',
            kind: 'fib',
            prompt: 'Affirmative imperative: "Send it (f., la lettre) to them!" → Envoie-___ ! (la + leur)',
            promptZh: '肯定命令式：把这封信（la）寄给他们（leur）！（填入两个代词）：',
            answers: ['la-leur'],
            hint: 'Drop -s on envoie, then hyphenate la-leur!',
            audio: 'Envoie-la-leur !',
            explain: 'Envoie-la-leur !',
            explainZh: '直宾 la 在间宾 leur 之前，用连字符相连：Envoie-la-leur !'
          },
          {
            id: 'd8a11_d6',
            kind: 'fib',
            prompt: 'Affirmative imperative with -er + en: "Talk about it!" (parler, tu) → ___-en ! (restore -s before en!)',
            promptZh: '肯定命令式特殊规则：对朋友说“聊聊这事吧！”（tu 的 -er 动词在 y/en 前要恢复 -s 以便连音！）：',
            answers: ['Parles', 'parles'],
            hint: 'Add -s back onto parle before -en: Parles-en !',
            audio: 'Parles-en !',
            explain: 'Just like "Vas-y !", tu imperatives of -er verbs restore -s directly before y or en: "Parles-en !"',
            explainZh: '和 Vas-y 同理，parler 的 tu 命令式在 y 或 en 前要恢复 -s → Parles-en !'
          },
          {
            id: 'd8a11_d7',
            kind: 'choice',
            prompt: 'Synthesis 1 (c’est vs. il est): "My neighbor? He is an engineer. He is a very competent engineer."',
            promptZh: '综合题 1：表达“我的邻居？他是工程师，他是一位非常称职的工程师”，选哪句？',
            options: [
              'Il est ingénieur. C’est un ingénieur très compétent.',
              'C’est ingénieur. Il est un ingénieur très compétent.',
              'Il est un ingénieur. C’est ingénieur très compétent.',
              'C’est un ingénieur. Il est très compétent ingénieur.'
            ],
            answerIdx: 0,
            audio: 'Il est ingénieur. C’est un ingénieur très compétent.',
            explain: 'Unmodified profession → Il est ingénieur. Modified with article "un" → C’est un ingénieur très compétent.',
            explainZh: '光杆职业用 Il est ingénieur；出现不定冠词 un 和修饰语时换用 C’est un ingénieur très compétent。'
          },
          {
            id: 'd8a11_d8',
            kind: 'choice',
            prompt: 'Synthesis 2 (COD vs. COI agreement): "Here are the books I bought for my parents — I gave them to them this morning."',
            promptZh: '综合题 2：替换“我今天早上把书（les livres，阳性复数）送给了他们（父母）”，过去分词如何写？',
            options: [
              'Je les leur ai donnés ce matin. (les = masc. pl. → donnés)',
              'Je leur les ai donné ce matin.',
              'Je les leur ai donné ce matin.',
              'Je les leurs ai donnés ce matin.'
            ],
            answerIdx: 0,
            audio: 'Je les leur ai donnés ce matin.',
            explain: 'Slot 2 (les) precedes Slot 3 (leur); AND preceding direct object "les" (books, m. pl.) adds -s to "donnés"!',
            explainZh: '既要按“2→3”排成 les leur，又因为直宾 les 提前，donné 必须加 -s（与 les 配合，不与 leur 配合）→ Je les leur ai donnés！'
          },
          {
            id: 'd8a11_d9',
            kind: 'choice',
            prompt: 'Synthesis 3 (y/en person trap): Choose the natural French sentence for "We need her, so let’s talk to her!"',
            promptZh: '综合题 3：“我们需要她（avoir besoin de + 人），所以我们跟她谈谈吧！”哪句正确？',
            options: [
              'Nous avons besoin d’elle, alors parlons-lui !',
              'Nous en avons besoin, alors parlons-y !',
              'Nous avons besoin de lui, alors parlons-la !',
              'Nous lui avons besoin, alors parlons-elle !'
            ],
            answerIdx: 0,
            audio: 'Nous avons besoin d’elle, alors parlons-lui !',
            explain: 'Person after "de" (avoir besoin de + person) keeps tonic "d’elle"; parler à + person becomes COI "-lui" in affirmative imperative ("parlons-lui")!',
            explainZh: 'avoir besoin de 后面指人时保持 d’elle（也不用 en 混指人）；parler à 接人在肯定命令式里直接用 -lui → parlons-lui !'
          },
          {
            id: 'd8a11_d10',
            kind: 'fib',
            prompt: 'Synthesis 4 (Quantity + en): "Combien de cafés prends-tu ?" → "J’___ prends deux, s’il vous plaît."',
            promptZh: '综合题 4：点咖啡“您要几杯？”→ “我要两杯，谢谢。”（填入所缺副代词）：',
            answers: ['en'],
            hint: 'Counted noun after number "deux" triggers "en" before "prends"!',
            audio: 'J’en prends deux, s’il vous plaît.',
            explain: 'With numbers ("deux"), "en" is mandatory before the verb: J’en prends deux.',
            explainZh: '数字后面的名词被省略时，动词前必须补上 en：J’en prends deux。'
          },
          {
            id: 'd8a11_d11',
            kind: 'choice',
            prompt: 'Synthesis 5 (Disjunctive + Mixed Gender): "Marc and Claire? They love cooking, and I often eat at their place."',
            promptZh: '综合题 5：“Marc 和 Claire？他们俩喜欢做饭，我常去他们家吃饭。”选哪一项？',
            options: [
              'Ils adorent cuisiner, et je mange souvent chez eux.',
              'Elles adorent cuisiner, et je mange souvent chez elles.',
              'Ils adorent cuisiner, et je mange souvent chez ils.',
              'Eux adorent cuisiner, et j’y mange souvent.'
            ],
            answerIdx: 0,
            audio: 'Ils adorent cuisiner, et je mange souvent chez eux.',
            explain: 'Marc + Claire (mixed M+F) takes masculine plural subject "Ils" AND masculine plural tonic "chez eux"!',
            explainZh: '男女混合主语用 Ils，跟在介词 chez 后用阳性复数重读代词 eux（chez eux）！'
          },
          {
            id: 'd8a11_d12',
            kind: 'fib',
            prompt: 'Synthesis 6 (Pre-verb 3rd-person double): "Tu peux prêter ta voiture à Paul ?" → "Oui, je vais ___ prêter." (la + lui)',
            promptZh: '综合题 6：“你能把你的车（la voiture）借给 Paul 吗？”→ “能，我这就借给他。”（在不定式 prêter 前填入两个代词）：',
            answers: ['la lui'],
            hint: 'Before infinitive "prêter": Slot 2 (la = voiture) + Slot 3 (lui = Paul).',
            audio: 'Oui, je vais la lui prêter.',
            explain: 'Two-verb construction keeps both pronouns right before infinitive: je vais la lui prêter.',
            explainZh: '近将来时不改变双宾语相对顺序，整体放在不定式 prêter 前面：je vais la lui prêter。'
          }
        ],
        related: [
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_10', label: 'Back to 8A.10 Double Object Pronouns' },
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_1', label: 'Review 5C.1 Reflexive Pronouns' }
        ]
      }
    ]
  });
})();

