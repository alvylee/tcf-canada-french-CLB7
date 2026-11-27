(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch5c_verbs_constructions',
    code: 'Ch 5C',
    level: 'A2–B1',
    category: 'verbs_c',
    icon: '🧩',
    title: 'Verbs III: Pronominals, Modals & Constructions',
    titleZh: '第五章 C · 专项动词结构（代动词、情态、无人称、不定式、使役 faire 与现在分词）',
    subtitle: 'Tex-style slow-paced deep mastery: 11 bite-sized pages covering French pronominal verbs (reflexive, idiomatic, reciprocal & imperatives), modal verbs (vouloir/pouvoir/devoir), impersonal il expressions (weather, il faut, il s’agit de), 4 verbs for "to leave", infinitive & past-infinitive constructions, causative faire, transitivity (REDCAP & à verbs), and present participles — with 16 original Tex cartoons & 122 drills.',
    subtitleZh: '对标 Tex 第五章“专项动词结构”（8 篇原站精髓）拆分为 11 个轻松小页：代动词全体系（自反/惯用/相互/命令式）、三大情态动词、无人称 il 结构、四种“离开”辨析、不定式与否定/过去不定式、使役 faire / se faire、及物与不及物（REDCAP 与 à 介词动词）、以及现在分词与 gérondif，配 16 张原版卡通与 122 题专练。',
    pages: [
      /* =========================================================
         PAGE 5C.1: PRONOMINAL VERBS I — REFLEXIVE, NEGATION, BODY PARTS (vpr1 Part 1)
      ========================================================= */
      {
        id: 'v5c_1',
        code: '5C.1',
        group: 'Pronominal Verbs',
        shortTitle: 'Reflexive Verbs, Body Parts & Negation',
        title: 'Pronominal Verbs (Part 1): Reflexive Pronouns, Body Parts (le/la/les) & Negation',
        titleZh: '代动词（上）：自反代词、身体部位用定冠词（不用主有词！）与否定语序',
        estMin: 4,
        summary: 'Learn the 6 reflexive pronouns (me, te, se, nous, vous, se), all 10 everyday reflexive verbs (s’asseoir, s’appeler, s’arrêter, se brosser, se coucher, s’habiller, se laver, se lever, se promener, se réveiller), reflexive vs. non-reflexive contrast (Tex se rase vs. Il rase Joe-Bob), infinitive agreement (Je déteste me raser), negation bracketing (ne before pronoun, pas after verb), and definite articles before body parts (Tex se lave les mains).',
        summaryZh: '掌握代动词（附带自反代词 **me / te / se / nous / vous / se**）的两大核心法则：① 动作施于自己才用代动词（`Tex se rase` 刮自己胡子），作用于别人就是普通及物动词（`Il rase Joe-Bob` 帮别人剃）；② 否定夹心把 `ne` 放在自反代词前，`pas` 放在变位动词后；遇到身体部位时**只用定冠词（le / la / les）**而不用主有词（Tex se lave **les** mains）；不定式前的自反代词仍须与主语人称保持一致（Je déteste **me** raser）！',
        cheatSummary: [
          { label: 'Reflexive Pronouns + Negation', rule: 'me, te, se, nous, vous, se (elide to m’/t’/s’ before vowel/mute h). Negation: ne + pronoun + verb + pas ("je ne me rase pas").', ruleZh: '自反代词：me, te, se, nous, vous, se（元音/哑音 h 前省音 m’/t’/s’）。否定结构：ne + 自反代词 + 变位动词 + pas。' },
          { label: 'Body Parts + Infinitive Rule', rule: 'With body parts use THE (le/la/les), NOT possessive! ("Tex se lave les mains", "nous nous lavons le visage"). Pronoun matches subject even on infinitives ("Je déteste me raser").', ruleZh: '洗脸洗手刷牙不用 mon/ta/ses，一律用定冠词（se laver les mains / nous nous lavons le visage）！两动词连用时，不定式前的反身代词仍要随主语变（tu vas te reposer）。' }
        ],
        sections: [
          {
            id: 'v5c1_reflexive',
            heading: '1. Paradigm ("se raser"), 10 Reflexive Verbs & Body Parts',
            headingZh: '一、se raser 变位表、10 个日常自反动词与身体部位法则',
            lead: 'Remember: English often leaves reflexive meaning unspoken ("I shave"), but French MUST include the reflexive pronoun whenever the subject acts on itself—otherwise it implies shaving someone else!',
            leadZh: '看 Joe-Bob 和 Edouard 关于刮胡子的对话，牢记 10 个最常用的日常生活自反动词与身体部位用法：',
            cartoon: {
              src: './assets/tex_cartoons/vpr1joe-bob.gif',
              alt: 'Joe-Bob et Edouard parlent de se raser',
              caption: 'Joe-Bob: Edouard, est-ce que tu te rases ? Edouard: Non, les escargots ne se rasent pas. Nous nous lavons le visage !',
              captionZh: 'Joe-Bob：你刮胡子吗？Edouard：不刮，不过我们每天都洗脸（nous nous lavons le visage）！Joe-Bob：我讨厌刮胡子（Je déteste me raser）！'
            },
            table: {
              headers: ['Person', 'se raser (to shave oneself)', 'Reflexive Verbs (10 Tex Core)', 'Meaning'],
              rows: [
                { cols: ['je / tu', 'je me rase · tu te rases', 's’asseoir · s’appeler · s’arrêter', 'to sit down · be called · stop'], audio: 'je me rase, tu te rases' },
                { cols: ['il / elle / on', 'il/elle/on se rase', 'se brosser · se coucher · s’habiller', 'to brush · go to bed · get dressed'], audio: 'il se rase, Tex se lave les mains' },
                { cols: ['nous', 'nous nous rasons', 'se laver · se lever', 'to wash · get up'], audio: 'nous nous rasons, nous nous lavons le visage' },
                { cols: ['vous', 'vous vous rasez', 'se promener · se réveiller', 'to take a walk · wake up'], audio: 'vous vous rasez' },
                { cols: ['ils / elles', 'ils/elles se rasent', 'Non-reflexive: Il rase Joe-Bob.', 'Tex shaves Joe-Bob (not himself!).'], audio: 'ils se rasent, Il rase Joe-Bob.' }
              ]
            },
            examples: [
              { fr: 'Est-ce que Tex se rase ? Mais non, Tex, c’est un tatou. Il n’a pas de cheveux. Il rase Joe-Bob pour l’été.', en: 'Does Tex shave? Why no, Tex is an armadillo. He’s shaving Joe-Bob for the summer.', zh: 'Tex 给别人剃毛时不用 se，直接说 Il rase Joe-Bob！', tag: 'Reflexive vs. Direct' },
              { fr: 'Joe-Bob : Edouard, est-ce que tu te rases ? — Edouard : Non, je ne me rase pas. Pourtant, nous nous lavons le visage tous les jours.', en: 'Do you shave? — No, I don’t shave. However, we wash our faces every day.', zh: '洗脸说 nous nous lavons **le** visage（不是 *notre visage）！', tag: 'Negation + Body Part' },
              { fr: 'Joe-Bob : Je déteste me raser. · Tex se lave les mains.', en: 'I hate to shave. · Tex washes his hands.', zh: '不定式前自反代词跟着主语变（je → me raser）；洗手用 **les** mains。', tag: 'Infinitive Agreement' }
            ],
            quickCheck: {
              prompt: 'How do you say "My friends and I never brush our hair" (plural nous)?',
              promptZh: '“我和朋友们从不梳头发（se brosser les cheveux）”应该选哪一句？',
              options: [
                'Mes amis et moi, nous ne nous brossons jamais les cheveux.',
                'Mes amis et moi, nous ne se brossons jamais nos cheveux.',
                'Mes amis et moi, ne nous brossons jamais les cheveux.',
                'Mes amis et moi, nous nous brossons ne jamais les cheveux.'
              ],
              answerIdx: 0,
              explain: 'Keep BOTH "nous" (subject + reflexive pronoun), put "ne" BEFORE the reflexive pronoun, and use definite "les cheveux" (NOT "nos cheveux")!',
              explainZh: '第一是“nous + nous”（主语+自反代词），第二是 ne 放在自反代词前面，第三是身体部位只用定冠词 les cheveux！'
            }
          }
        ],
        drills: [
          {
            id: 'd5c1_d1',
            kind: 'fib',
            prompt: 'Tammy dit à Fiona : Tu ne vas pas ___ ? (se reposer — watch pronoun agreement with tu!)',
            promptZh: 'Tex 原题 #3：Tammy 问 Fiona：“你不去休息一下吗？”（注意搭配主语 tu 的自反代词 + 不定式）：',
            answers: ['te reposer'],
            hint: 'subject "tu" + future "vas" → te + infinitive reposer!',
            audio: 'Tu ne vas pas te reposer ?',
            explain: 'With an auxiliary like aller/détester, the reflexive pronoun still matches the subject ("tu" → te): te reposer.',
            explainZh: '虽然动词是原形 reposer，但前面的自反代词必须随主语 tu 变成 te → te reposer！'
          },
          {
            id: 'd5c1_d2',
            kind: 'fib',
            prompt: 'Tex et Tammy ___ à Zilker Park. (se promener — watch boot stem e → è!)',
            promptZh: 'Tex 原题 #4：Tex 和 Tammy 在公园散步（se promener，记得靴内 e→è！）：',
            answers: ['se promènent'],
            hint: 'pronoun "se" + stem-changing promènent (like acheter)!',
            audio: 'Tex et Tammy se promènent à Zilker Park.',
            explain: 'se + promènent (e → è inside the boot!).',
            explainZh: '自反代词 se 加上靴形变位 promènent（第二个 e 变 è）。'
          },
          {
            id: 'd5c1_d3',
            kind: 'fib',
            prompt: 'Bette ___ toujours pour Tex. (se maquiller)',
            promptZh: 'Tex 原题 #6：Bette 总是为了 Tex 化妆（se maquiller）：',
            answers: ['se maquille'],
            hint: '3rd sg. pronoun se + maquille.',
            audio: 'Bette se maquille toujours pour Tex.',
            explain: 'Bette (= elle) se maquille.',
            explainZh: '第三人称单数：se maquille。'
          },
          {
            id: 'd5c1_d4',
            kind: 'fib',
            prompt: 'Tex : Je ne ___ pas. Je n’ai pas de cheveux. (se raser)',
            promptZh: 'Tex 原题 #7：我不刮胡子，我没毛发（填入自反代词 + 动词）：',
            answers: ['me rase'],
            hint: 'je ne + me rase + pas.',
            audio: 'Je ne me rase pas.',
            explain: 'je ne me rase pas.',
            explainZh: 'ne 之后填 me rase。'
          },
          {
            id: 'd5c1_d5',
            kind: 'fib',
            prompt: 'Bette demande à Fiona : Est-ce que tu ___ à minuit ? (se coucher)',
            promptZh: 'Tex 原题 #8：Bette 问 Fiona：“你半夜睡觉吗？”（se coucher）：',
            answers: ['te couches'],
            hint: 'tu + te + couches.',
            audio: 'Est-ce que tu te couches à minuit ?',
            explain: 'tu te couches.',
            explainZh: 'tu 对应 te couches。'
          },
          {
            id: 'd5c1_d6',
            kind: 'fib',
            prompt: 'Corey : Mes amis et moi, nous ne ___ jamais les cheveux. (se brosser)',
            promptZh: 'Tex 原题 #9：我和朋友们从不梳头（填入 ne 后面的自反代词 + 动词）：',
            answers: ['nous brossons'],
            hint: 'second "nous" + brossons!',
            audio: 'Nous ne nous brossons jamais les cheveux.',
            explain: 'nous ne nous brossons jamais.',
            explainZh: 'nous 的自反代词还是 nous → nous brossons。'
          },
          {
            id: 'd5c1_d7',
            kind: 'fib',
            prompt: 'Edouard, à quelle heure est-ce que vous ___ le week-end ? (se lever)',
            promptZh: 'Tex 原题 #10：Edouard，您周末几点起床（se lever，注意 vous 在靴外）：',
            answers: ['vous levez'],
            hint: 'vous + vous levez (NO è outside boot!).',
            audio: 'À quelle heure est-ce que vous vous levez le week-end ?',
            explain: 'vous vous levez (vous is outside the boot, so NO grave accent!).',
            explainZh: 'vous 对应 vous levez（靴外不加重音符号！）。'
          },
          {
            id: 'd5c1_d8',
            kind: 'fib',
            prompt: 'Corey ne ___ jamais avant midi. (se réveiller)',
            promptZh: 'Tex 原题 #11：Corey 中午之前从不醒（se réveiller）：',
            answers: ['se réveille', 'se reveille'],
            hint: 'il ne + se réveille + pas/jamais.',
            audio: 'Corey ne se réveille jamais avant midi.',
            explain: 'Corey (= il) se réveille.',
            explainZh: '第三人称单数：se réveille。'
          },
          {
            id: 'd5c1_d9',
            kind: 'choice',
            prompt: 'Which sentence correctly translates "Tex washes his hands"?',
            promptZh: '“Tex 洗手”地道正确的法语写法是：',
            options: [
              'Tex se lave les mains.',
              'Tex se lave ses mains.',
              'Tex lave ses mains.',
              'Tex me lave les mains.'
            ],
            answerIdx: 0,
            audio: 'Tex se lave les mains.',
            explain: 'Pronominal verb + body part → ALWAYS definite article (les mains), never possessive (*ses mains)!',
            explainZh: '代动词搭配身体部位时不用主有限定词 ses，直接用定冠词 les：Tex se lave les mains。'
          },
          {
            id: 'd5c1_d10',
            kind: 'choice',
            prompt: 'Contrast: "Il se rase" vs. "Il rase Joe-Bob". Which verb is NON-reflexive?',
            promptZh: '下面哪一句说明动作是施加在“别人”身上（非自反）？',
            options: [
              'Il rase Joe-Bob. (Tex shaves Joe-Bob for the summer.)',
              'Il se rase.',
              'Je me rase.',
              'Nous nous lavons le visage.'
            ],
            answerIdx: 0,
            audio: 'Il rase Joe-Bob.',
            explain: 'No reflexive pronoun = the subject performs the action on someone else (Joe-Bob)!',
            explainZh: '去掉自反代词 se 后，动作对象变成了别人（Joe-Bob）。'
          }
        ],
        related: [
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_12', label: 'Back to 5B.12 dire, lire, écrire' },
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_2', label: '5C.2 Idiomatic, Reciprocal & Imperatives' }
        ]
      },

      /* =========================================================
         PAGE 5C.2: PRONOMINAL VERBS II — IDIOMATIC, RECIPROCAL & IMPERATIVES (vpr1 Part 2)
      ========================================================= */
      {
        id: 'v5c_2',
        code: '5C.2',
        group: 'Pronominal Verbs',
        shortTitle: 'Idiomatic, Reciprocal & Imperatives',
        title: 'Pronominal Verbs (Part 2): 14 Idiomatic Verbs, 9 Reciprocal Verbs & Imperatives (Dépêche-toi!)',
        titleZh: '代动词（下）：14 个惯用代动词、9 个相互动词与代动词命令式（te → toi）',
        estMin: 4,
        summary: 'Master idiomatic pronominal verbs where "se" shifts the meaning rather than being literally "oneself" (all 14 Tex verbs: s’amuser, se dépêcher, s’endormir, s’ennuyer, s’entendre, se fâcher, se marier, se passer, se reposer, se sentir, se souvenir de, se taire, se tromper, se trouver), reciprocal "each other" verbs (9 Tex verbs: s’aimer, se disputer, s’embrasser...), and affirmative pronominal imperatives (te → toi attached with a hyphen: Dépêche-toi! Assieds-toi et tais-toi!).',
        summaryZh: '攻克代动词另两大重要家族与命令式：① **惯用代动词**（14 个高频词，`se` 不再直译为“自己”，而是表达某种状态或心理，如 *s’amuser 玩得开心、s’ennuyer 感到无聊、se dépêcher 赶快、se souvenir de 记得、se tromper 弄错、se trouver 位于*）；② **相互代动词**（9 个复数双向动作，如 *s’aimer 相爱、se disputer 吵架、se téléphoner 互相打电话*）；③ **肯定命令式规则**：把代词连字符移到动词右侧，且 **`te` 必须重读变为 `toi`**（*Dépêche-toi ! Assieds-toi et tais-toi !*）！',
        cheatSummary: [
          { label: 'Idiomatic vs. Reciprocal Pronominals', rule: 'Idiomatic = fixed meaning (s’ennuyer, se fâcher, se souvenir de, se tromper). Reciprocal = plural subjects acting on EACH OTHER (s’aimer, se disputer, se parler, se retrouver).', ruleZh: '惯用类看整体词义；相互类只有复数主语才能表“互相……（each other）”。' },
          { label: 'Affirmative Imperative Rule (te → -toi!)', rule: 'Drop subject, hyphenate pronoun AFTER verb, change te → -toi: Dépêche-toi ! Souvenons-nous ! Amusez-vous ! ("Assieds-toi et tais-toi !")', ruleZh: '肯定命令式：动词后加连字符连接代词，且 tu 的 te 必须变 -toi（Dépêche-toi !）；nous/vous 直接接 -nous / -vous。' }
        ],
        sections: [
          {
            id: 'v5c2_idiomatic_reciprocal',
            heading: '1. All 14 Idiomatic & 9 Reciprocal Verbs on Tex',
            headingZh: '一、14 个惯用代动词与 9 个相互代动词全表',
            lead: 'Notice that reciprocal actions logically involve two or more people (nous, vous, ils, elles). In idiomatic verbs, comparing pairs helps: ennuyer = bore someone vs. s’ennuyer = be bored; tromper = deceive vs. se tromper = make a mistake:',
            leadZh: '背熟这两张高频表（特别留意 `se souvenir de` 固定带 `de`，`se passer` 表“发生”，`se trouver` 表“位于某处”）：',
            table: {
              headers: ['Idiomatic (14 Tex Verbs)', 'Meaning', 'Reciprocal (9 Tex Verbs)', 'Meaning (each other)'],
              rows: [
                { cols: ['s’amuser · se dépêcher', 'to have fun · to hurry', 's’aimer · se détester', 'to love · hate each other'], audio: 's’amuser, se dépêcher, s’aimer' },
                { cols: ['s’endormir · s’ennuyer', 'to fall asleep · be bored', 'se disputer · s’embrasser', 'to argue · kiss each other'], audio: 's’endormir, s’ennuyer, se disputer' },
                { cols: ['s’entendre · se fâcher', 'to get along · get angry', 'se parler · se quitter', 'to talk to · leave each other'], audio: 's’entendre, se fâcher, se parler' },
                { cols: ['se marier · se passer', 'to get married · happen', 'se regarder · se retrouver', 'to look at · meet each other'], audio: 'se marier, se retrouver' },
                { cols: ['se reposer · se sentir', 'to rest · feel', 'se téléphoner', 'to telephone each other'], audio: 'se reposer, se souvenir de' },
                { cols: ['se souvenir de · se taire · se tromper · se trouver', 'remember · be silent · err · be situated', 'Note: NO -s on -er 2nd sg. imperatives (Dépêche-toi!)', 'Except non-hyphenated normal rules'], audio: 'se taire, se tromper, se trouver' }
              ]
            }
          },
          {
            id: 'v5c2_imperatives_dialogue',
            heading: '2. Pronominal Imperatives & Tammy Describing Her Relationship With Tex',
            headingZh: '二、代动词肯定命令式（Dépêche-toi !）与 Tammy 的感情独白',
            lead: 'Listen to how Tammy uses BOTH idiomatic (s’entendre, se fâcher, se marier), reciprocal (s’aimer, se disputer), AND imperative forms ("Assieds-toi et tais-toi !"):',
            leadZh: '读完 Tammy 这段超经典恋爱独白，一次把惯用、相互、命令式全部吃透：',
            cartoon: {
              src: './assets/tex_cartoons/vpr1tammy.gif',
              alt: 'Tammy décrit ses rapports avec Tex',
              caption: 'Tammy: Nous nous entendons très bien, sauf quand il se fâche (« Assieds-toi et tais-toi ! »). Nous allons nous marier !',
              captionZh: 'Tammy：我们相处得很融洽（nous nous entendons），除了他生气冲我喊“坐下闭嘴！（Assieds-toi et tais-toi）”的时候！'
            },
            examples: [
              { fr: 'Tammy : Nous nous entendons très bien, sauf quand il se fâche.', en: 'Usually we get along very well except when he gets angry.', zh: 'nous nous entendons（相处融洽）；il se fâche（他生气）。', tag: 'Idiomatic' },
              { fr: 'Il me dit : « Assieds-toi et tais-toi, ma petite. »', en: 'He tells me: "Sit down and shut up, little one!"', zh: '双命令式：Assieds-toi（坐下）与 tais-toi（闭嘴）全部连字符+toi！', tag: 'Imperative -toi' },
              { fr: 'Mais nous nous aimons même si nous nous disputons un peu. Nous allons nous marier un jour.', en: 'But we love each other even if we fight a little. We’re going to get married someday.', zh: '虽然偶尔小吵，但我们彼此相爱，总有一天要结婚！', tag: 'Reciprocal + Futur' },
              { fr: 'Imperative Trio: Dépêche-toi ! · Souvenons-nous. · Amusez-vous !', en: 'Hurry up! · Let’s remember. · Have fun!', zh: '三格肯定命令式总览：Dépêche-toi（-er 去 s！）、Souvenons-nous、Amusez-vous！', tag: '3 Imperatives' }
            ],
            quickCheck: {
              prompt: 'How do you write the affirmative "tu" imperative of "se dépêcher" ("Hurry up!")?',
              promptZh: '对好朋友说“快点！”（se dépêcher 的 tu 肯定命令式），下面哪个拼写正确？',
              options: [
                'Dépêche-toi ! (-er imperative drops -s; te becomes -toi)',
                'Dépêches-toi !',
                'Dépêche-te !',
                'Te dépêche !'
              ],
              answerIdx: 0,
              explain: 'In affirmative imperatives: (1) drop -s on -er verbs (dépêche), (2) move pronoun after verb with hyphen, (3) change te → toi: Dépêche-toi !',
              explainZh: '-er 动词 tu 命令式先去掉 -s（dépêche），再加连字符和重读代词 toi → Dépêche-toi !'
            }
          }
        ],
        drills: [
          {
            id: 'd5c2_d1',
            kind: 'fib',
            prompt: 'Tex et Tammy ne ___ pas avec leurs amis. (s’ennuyer — watch -uyer → -uient!)',
            promptZh: 'Tex 原题 #1：Tex 和 Tammy 跟朋友在一起从不觉得无聊（s’ennuyer，靴内 y→i！）：',
            answers: ["s'ennuient", 's’ennuient'],
            hint: 'pronoun s’ + ennuient (y → i inside the boot!).',
            audio: 'Tex et Tammy ne s’ennuient pas avec leurs amis.',
            explain: 'ils ne s’ennuient pas (both -ayer and -uyer/-oyer switch y → i inside the boot!).',
            explainZh: '-uyer 动词在靴内把 y 改成 i → s’ennuient！'
          },
          {
            id: 'd5c2_d2',
            kind: 'fib',
            prompt: 'Fiona dit à Tex : Tu ___, mais moi, je vais travailler. (s’amuser)',
            promptZh: 'Tex 原题 #2：Fiona 对 Tex 说：“你玩得倒开心，但我得去工作了。”（s’amuser）：',
            answers: ["t'amuses", 't’amuses'],
            hint: 'tu + t’amuses (elision before vowel!).',
            audio: 'Tu t’amuses, mais moi, je vais travailler.',
            explain: 'tu t’amuses (te elides to t’ before amuses).',
            explainZh: 'tu 对应自反代词 t’（元音省音）+ amuses → t’amuses。'
          },
          {
            id: 'd5c2_d3',
            kind: 'fib',
            prompt: 'Tex : Tammy ne ___ jamais avec moi. (se fâcher)',
            promptZh: 'Tex 原题 #5：Tammy 从来不生我的气（se fâcher）：',
            answers: ['se fâche', 'se fache'],
            hint: 'elle ne + se fâche + jamais.',
            audio: 'Tammy ne se fâche jamais avec moi.',
            explain: 'Tammy (= elle) se fâche.',
            explainZh: '第三人称单数：se fâche。'
          },
          {
            id: 'd5c2_d4',
            kind: 'fib',
            prompt: 'Edouard : Je ne ___ pas. Je suis un escargot. (se dépêcher)',
            promptZh: 'Tex 原题 #12：我才不着急呢，我是蜗牛啊（填入 ne 后面的代词 + 动词）：',
            answers: ['me dépêche', 'me depeche'],
            hint: 'je ne + me dépêche + pas.',
            audio: 'Je ne me dépêche pas. Je suis un escargot.',
            explain: 'je ne me dépêche pas.',
            explainZh: 'je 对应 me dépêche。'
          },
          {
            id: 'd5c2_d5',
            kind: 'fib',
            prompt: 'Affirmative imperative (vous): Have fun! : ___ ! (s’amuser)',
            promptZh: '命令式填空：祝大家玩得开心！（s’amuser 的 vous 命令式）：',
            answers: ['Amusez-vous', 'amusez-vous'],
            hint: 'verb + hyphen + vous.',
            audio: 'Amusez-vous !',
            explain: 'Amusez-vous !',
            explainZh: '肯定命令式连字符后置：Amusez-vous !'
          },
          {
            id: 'd5c2_d6',
            kind: 'fib',
            prompt: 'Affirmative imperative (tu): Sit down! : ___ ! (s’asseoir — look at Tex dialogue)',
            promptZh: '命令式填空（出自 Tex 对 Tammy 说的话）：坐下！（s’asseoir 的 tu 命令式）：',
            answers: ['Assieds-toi', 'assieds-toi'],
            hint: 'Assieds + hyphen + toi.',
            audio: 'Assieds-toi !',
            explain: 'Assieds-toi ! (standard singular imperative of s’asseoir).',
            explainZh: 's’asseoir 的 tu 肯定命令式：Assieds-toi !'
          },
          {
            id: 'd5c2_d7',
            kind: 'fib',
            prompt: 'Affirmative imperative (tu): Shut up / be quiet! : ___ ! (se taire)',
            promptZh: '命令式填空（出自 Tex 对 Tammy 说的话）：闭嘴/安静！（se taire 的 tu 命令式）：',
            answers: ['Tais-toi', 'tais-toi'],
            hint: 'Tais + hyphen + toi.',
            audio: 'Tais-toi !',
            explain: 'Tais-toi ! (from se taire).',
            explainZh: 'se taire 的 tu 肯定命令式：Tais-toi !'
          },
          {
            id: 'd5c2_d8',
            kind: 'fib',
            prompt: 'Reciprocal ("each other"): Nous ___ même si nous nous disputons un peu. (s’aimer)',
            promptZh: '相互代动词填空：哪怕拌几句嘴，我们依然彼此相爱（s’aimer，填入 nous 后的反身代词 + 动词）：',
            answers: ['nous aimons'],
            hint: 'nous + nous aimons.',
            audio: 'Nous nous aimons même si nous nous disputons un peu.',
            explain: 'nous nous aimons.',
            explainZh: '相互代词同自反代词写法：nous aimons。'
          },
          {
            id: 'd5c2_d9',
            kind: 'choice',
            prompt: 'Which idiomatic pronominal verb requires the preposition "de" ("to remember something")?',
            promptZh: '下面哪一个惯用代动词固定搭配介词 de 表示“记得某事”？',
            options: ['se souvenir de', 'se marier de', 's’amuser de', 'se taire de'],
            answerIdx: 0,
            audio: 'Je me souviens de toi.',
            explain: 'se souvenir DE quelque chose / quelqu’un = to remember (vs. se rappeler with NO de!).',
            explainZh: 'se souvenir 固定搭配 de：Je me souviens de Paris！'
          },
          {
            id: 'd5c2_d10',
            kind: 'choice',
            prompt: 'What does "Opelousas se trouve au centre de la Louisiane" mean?',
            promptZh: '句子里的惯用代动词 "se trouver" 是什么意思？',
            options: ['is situated / is located', 'looks for itself', 'finds each other', 'gets angry'],
            answerIdx: 0,
            audio: 'Opelousas se trouve au centre de la Louisiane.',
            explain: '"se trouver" = to be located / situated (just like "être situé").',
            explainZh: 'se trouver（常考地理描述动词）表示“位于……地方”。'
          }
        ],
        related: [
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_1', label: '5C.1 Reflexive Verbs & Body Parts' },
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_3', label: '5C.3 Modal Verbs (vouloir, pouvoir, devoir)' }
        ]
      },

      /* =========================================================
         PAGE 5C.3: MODAL VERBS VOULOIR, POUVOIR, DEVOIR (vm1.html)
      ========================================================= */
      {
        id: 'v5c_3',
        code: '5C.3',
        group: 'Modals & Impersonals',
        shortTitle: 'Modals: vouloir, pouvoir, devoir',
        title: 'Modal Verbs: "vouloir" (want), "pouvoir" (can/may) & "devoir" (must / owe)',
        titleZh: '情态动词三巨头：vouloir（想）、pouvoir（能/可以）、devoir（必须 / 欠债）',
        estMin: 4,
        summary: 'Master France’s 3 irregular modal semi-auxiliaries—all sharing the classic "boot" stem pattern where ONLY nous & vous change stems! Learn vouloir (veux, voulons, veulent; p.p. voulu; vouloir bien = be willing), pouvoir (peux, pouvons, peuvent; p.p. pu; vs. savoir), and devoir (dois, devons, doivent; p.p. dû; + noun = "to owe"!).',
        summaryZh: '攻克最高频的三枚情态助动词，三者全员遵循**靴形变化规律（只有 nous 和 vous 词干不同）**：① **vouloir**（`veux, veux, veut / voulons, voulez / veulent`，过去分词 **voulu**，搭配 `vouloir bien` 表“乐意”）；② **pouvoir**（`peux, peux, peut / pouvons, pouvez / peuvent`，过去分词 **pu**，表“能够/被允许”，注意区分 *savoir*“会某技能”）；③ **devoir**（`dois, dois, doit / devons, devez / doivent`，过去分词 **dû**，加动词原形表“必须/应当”，直接加名词则意思是“欠某人多少钱”！）。礼貌请求常把三者改用条件式（*je voudrais / pourrais / devrais*）。',
        cheatSummary: [
          { label: 'Boot Modal Trio (1st/2nd Sg. take -x or -s)', rule: 'vouloir (voulu): veux, veux, veut · voulons, voulez, veulent. pouvoir (pu): peux, peux, peut · pouvons, pouvez, peuvent. devoir (dû): dois, dois, doit · devons, devez, doivent.', ruleZh: '单数一二人称：veux / peux 用 -x 结尾，dois 用 -s 结尾！复数第一二词干分别切为 voul- / pouv- / dev-，ils/elles 恢复靴内双元音！' },
          { label: 'Key Nuances & Polite Conditional', rule: 'pouvoir (ability/permission) vs. savoir (learned skill). devoir + noun = "to owe" ("Je dois 10 dollars"). Present "je veux" feels abrupt → polite requests use conditional (je voudrais, pourriez-vous).', ruleZh: '两个重要区别：① devoir + 名词 = 欠钱/欠情；② vouloir bien = 很乐意；日常礼貌提要求多用条件式 je voudrais（我想），少直说 je veux！' }
        ],
        sections: [
          {
            id: 'v5c3_modals_table',
            heading: '1. Conjugation Table + Tammy, Bette & Tex Dialogue',
            headingZh: '一、三大情态动词变位对照与情景对话',
            lead: 'Notice how vouloir and pouvoir both end in -x, -x, -t in the singular, while devoir ends in -s, -s, -t—and ALL THREE use -eu- / -oi- inside the boot and -ou- / -e- outside the boot in nous/vous:',
            leadZh: '看三者精妙的对称结构，再结合 Tammy 想逛街、Bette 提醒 Tex 辅导学生的对话对比语气：',
            cartoon: {
              src: './assets/tex_cartoons/vm1_choices.gif',
              alt: 'Tex choisit entre Tammy et ses étudiants',
              caption: 'Tammy: Je veux faire du shopping. Bette: Mais Tex, tu ne peux pas ! Tes étudiants doivent réviser pour l’examen.',
              captionZh: 'Tammy：我想逛街（je veux）。Bette：Tex 你不能去（tu ne peux pas），学生们必须复习考试（doivent）！'
            },
            table: {
              headers: ['Person', 'vouloir (want — p.p. voulu)', 'pouvoir (can/may — p.p. pu)', 'devoir (must/owe — p.p. dû)'],
              rows: [
                { cols: ['je / tu', 'je veux · tu veux (-x!)', 'je peux · tu peux (-x!)', 'je dois · tu dois (-s!)'], audio: 'je veux, je peux, je dois' },
                { cols: ['il / elle / on', 'il veut', 'il peut', 'il doit'], audio: 'il veut, il peut, il doit' },
                { cols: ['nous', 'nous voulons (-ou-!)', 'nous pouvons (-ou-!)', 'nous devons (-e-!)'], audio: 'nous voulons, nous pouvons, nous devons' },
                { cols: ['vous', 'vous voulez (-ou-!)', 'vous pouvez (-ou-!)', 'vous devez (-e-!)'], audio: 'vous voulez, vous pouvez, vous devez' },
                { cols: ['ils / elles', 'ils veulent (-eu-!)', 'ils peuvent (-eu-!)', 'ils doivent (-oi-!)'], audio: 'ils veulent, ils peuvent, ils doivent' }
              ]
            },
            examples: [
              { fr: 'Tammy : Je veux faire du shopping. Tex, tu veux venir avec moi ?', en: 'Tammy: I want to go shopping. Tex, do you want to come with me?', zh: 'Tammy：我想去逛街，你要跟我一起吗？', tag: 'vouloir' },
              { fr: 'Bette : Mais Tex, tu ne peux pas. Tes étudiants doivent réviser pour l’examen de français.', en: 'Bette: But Tex, you can’t. Your students have to review for the French exam.', zh: 'Bette：你可不能去！你的学生得准备法语考试呢。', tag: 'pouvoir / devoir' },
              { fr: 'Tex : Est-ce que je peux m’asseoir ? · Je veux bien ! · Je dois 10 dollars.', en: 'May I sit down? · I’d be glad to! · I owe $10.', zh: '求许可（pouvoir）、表示乐意（vouloir bien）、表“欠钱”（devoir + 名词）。', tag: 'Idioms' }
            ],
            quickCheck: {
              prompt: 'In "Joe-Bob ___ beaucoup d’argent à la banque", which modal means "owes money to the bank"?',
              promptZh: '“Joe-Bob 欠银行很多钱”（后接名词钱数，不接动词原形），该用哪个词？',
              options: [
                'doit (from devoir — followed by a noun, devoir means "to owe"!)',
                'veut (from vouloir)',
                'peut (from pouvoir)',
                'devons'
              ],
              answerIdx: 0,
              explain: 'Followed by an infinitive, devoir = must/have to; followed directly by a NOUN (devoir + argent à qqn), it means "to owe"!',
              explainZh: 'devoir 接不定式是“必须”，直接接金钱/恩情名词是“欠（to owe）” → Joe-Bob doit beaucoup d’argent à la banque。'
            }
          }
        ],
        drills: [
          {
            id: 'd5c3_d1',
            kind: 'fib',
            prompt: 'Tex ___ une cigarette. (want: vouloir)',
            promptZh: 'Tex 原题 #1：Tex 想要一根香烟（vouloir）：',
            answers: ['veut'],
            hint: '3rd sg. of vouloir.',
            audio: 'Tex veut une cigarette.',
            explain: 'Tex (= il) veut.',
            explainZh: '第三人称单数：veut。'
          },
          {
            id: 'd5c3_d2',
            kind: 'fib',
            prompt: 'Bette ___ sortir avec Tex. (wants: vouloir)',
            promptZh: 'Tex 原题 #2：Bette 想和 Tex 出去约会（vouloir）：',
            answers: ['veut'],
            hint: '3rd sg. of vouloir.',
            audio: 'Bette veut sortir avec Tex.',
            explain: 'Bette (= elle) veut.',
            explainZh: '第三人称单数：veut。'
          },
          {
            id: 'd5c3_d3',
            kind: 'fib',
            prompt: 'Joe-Bob ___ beaucoup d’argent à la banque. (owes: devoir)',
            promptZh: 'Tex 原题 #3：Joe-Bob 欠银行一大笔钱（devoir + 名词）：',
            answers: ['doit'],
            hint: 'devoir + noun = to owe (3rd sg.).',
            audio: 'Joe-Bob doit beaucoup d’argent à la banque.',
            explain: 'Joe-Bob (= il) doit.',
            explainZh: 'devoir 第三人称单数：doit。'
          },
          {
            id: 'd5c3_d4',
            kind: 'fib',
            prompt: 'Edouard ne ___ pas courir très vite. (cannot: pouvoir)',
            promptZh: 'Tex 原题 #4：Edouard 蜗牛跑不快（pouvoir）：',
            answers: ['peut'],
            hint: '3rd sg. of pouvoir.',
            audio: 'Edouard ne peut pas courir très vite.',
            explain: 'Edouard (= il) peut.',
            explainZh: 'pouvoir 第三人称单数：peut。'
          },
          {
            id: 'd5c3_d5',
            kind: 'fib',
            prompt: 'Les étudiants ___ comprendre le français de Tex. (must / ought to: devoir)',
            promptZh: 'Tex 原题 #5：学生们必须听懂 Tex 说的法语（devoir）：',
            answers: ['doivent'],
            hint: '3rd pl. inside boot (-oi-!).',
            audio: 'Les étudiants doivent comprendre le français de Tex.',
            explain: 'ils doivent.',
            explainZh: '第三人称复数靴内恢复 oi：doivent。'
          },
          {
            id: 'd5c3_d6',
            kind: 'fib',
            prompt: 'Tex ___ écrire une carte postale aux nonnes (« nuns ») de Lyon. (must: devoir)',
            promptZh: 'Tex 原题 #6：Tex 得给里昂的修女们写一张明信片（devoir）：',
            answers: ['doit'],
            hint: '3rd sg. = doit.',
            audio: 'Tex doit écrire une carte postale.',
            explain: 'il doit.',
            explainZh: '第三人称单数：doit。'
          },
          {
            id: 'd5c3_d7',
            kind: 'fib',
            prompt: 'Corey et Fiona ne ___ pas vivre sous l’eau. (cannot: pouvoir)',
            promptZh: 'Tex 原题 #7：Corey（蟑螂）和 Fiona（苍蝇）不能在水下生活（pouvoir）：',
            answers: ['peuvent'],
            hint: '3rd pl. inside boot (-eu-!).',
            audio: 'Corey et Fiona ne peuvent pas vivre sous l’eau.',
            explain: 'ils peuvent.',
            explainZh: '复数靴内用 eu：peuvent。'
          },
          {
            id: 'd5c3_d8',
            kind: 'fib',
            prompt: 'Corey ___ voler mais pas Fiona. (can fly — wait: only insects! Actually Corey can fly? No, check pouvoir!)',
            promptZh: 'Tex 原题 #8：Corey 能飞吗？（按原题要求用 pouvoir 第三人称单数填空）：',
            answers: ['peut'],
            hint: '3rd sg. of pouvoir.',
            audio: 'Corey peut voler.',
            explain: 'Corey (= il) peut (physical ability = pouvoir).',
            explainZh: '表达有能力做到：peut。'
          },
          {
            id: 'd5c3_d9',
            kind: 'fib',
            prompt: 'Nous ___ respecter les animaux. (must: devoir)',
            promptZh: 'Tex 原题 #9：我们应当/必须尊重动物（devoir）：',
            answers: ['devons'],
            hint: 'nous outside boot drops -oi- → dev- + -ons.',
            audio: 'Nous devons respecter les animaux.',
            explain: 'nous devons.',
            explainZh: 'nous 在靴外用 dev- → devons。'
          },
          {
            id: 'd5c3_d10',
            kind: 'fib',
            prompt: 'Les amis ___ aller à la plage tous les week-ends. (want to: vouloir)',
            promptZh: 'Tex 原题 #10：朋友们每个周末都想去海滩（vouloir）：',
            answers: ['veulent'],
            hint: '3rd pl. inside boot (-eu-!).',
            audio: 'Les amis veulent aller à la plage.',
            explain: 'ils veulent.',
            explainZh: '第三人称复数靴内用 eu：veulent。'
          },
          {
            id: 'd5c3_d11',
            kind: 'fib',
            prompt: 'Edouard : Eh, les copains ! Qu’est-ce que vous ___ faire ce soir ? (want: vouloir)',
            promptZh: 'Tex 原题 #11：嘿朋友们！你们今晚想干嘛（vouloir）：',
            answers: ['voulez'],
            hint: 'vous outside boot (-ou-!).',
            audio: 'Qu’est-ce que vous voulez faire ce soir ?',
            explain: 'vous voulez.',
            explainZh: 'vous 在靴外用 ou：voulez。'
          },
          {
            id: 'd5c3_d12',
            kind: 'fib',
            prompt: 'Probability! Tex n’est pas en classe aujourd’hui ; il ___ être malade. (must be / probably is: devoir)',
            promptZh: 'Tex 原题 #12：Tex 今天没来上课；他肯定是病了（devoir 表推测）：',
            answers: ['doit'],
            hint: 'devoir expresses probability ("must be sick")!',
            audio: 'Tex n’est pas en classe aujourd’hui ; il doit être malade.',
            explain: 'il doit être malade = he must be (probably is) sick!',
            explainZh: 'devoir 也可表有把握的推测（must be）：il doit être malade。'
          }
        ],
        related: [
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_2', label: '5C.2 Idiomatic, Reciprocal & Imperatives' },
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_4', label: '5C.4 Impersonal Verbs (il faut, il s’agit de)' }
        ]
      },

      /* =========================================================
         PAGE 5C.4: IMPERSONAL VERBS & EXPRESSIONS (vim1.html)
      ========================================================= */
      {
        id: 'v5c_4',
        code: '5C.4',
        group: 'Modals & Impersonals',
        shortTitle: 'Impersonals: il faut, il s’agit de...',
        title: 'Impersonal Verbs & Expressions: "il faut" (4 Structures), Weather, "il est + adj. + de" & "il s’agit de"',
        titleZh: '无人称结构体系：il faut 四大句型、自然天气、il est + adj. + de 及 il s’agit de',
        estMin: 4,
        summary: 'Use the dummy subject "il" (strictly 3rd-person singular in all tenses!) across 4 domains: (1) 5 weather verbs (pleuvoir/neiger/grêler/geler/bruiner) + il fait; (2) falloir ("il faut") in 4 patterns (+ infinitive, + noun, + que subjunctive, or + indirect pronoun il nous faut to avoid subjunctive!); (3) il est + adjective + DE + infinitive; (4) il y a, il est (clock time), il s’agit de (is about/a matter of), and il vaut mieux (better to).',
        summaryZh: '形式主语 **il**（dummy subject）没有任何人或物指代对象，无论什么时态都**只能用第三人称单数**：① 5 个天然气象动词（`il pleut / neige / grêle / gèle / bruine`）及 `il fait`；② **falloir（必须/需要，只存在 il faut 形式）四大用法**：直接接不定式、直接接名词、接 `que + 虚拟式`、或加间接宾语代词（`il nous faut des preuves` 巧妙避开虚拟式！）；③ **il est + 形容词 + de + 不定式**；④ 实用四大表达：**il y a**、**il est + 几点钟**、**il s’agit de（关于/涉及）**、**il vaut mieux（最好还是）**。',
        cheatSummary: [
          { label: 'falloir (il faut) 4 Patterns', rule: '1) il faut + inf. (Il faut te calmer). 2) il faut + noun (Il faut une enquête). 3) indirect pron. + faut (Il nous faut des preuves). 4) il faut que + subjunctive (Il faut que nous sachions).', ruleZh: 'il faut 四种用法：① +不定式；② +名词；③ il nous/te/lui faut + 名词（需要）；④ il faut que + 虚拟式（必须某人做某事）。' },
          { label: 'High-Value Impersonals (TCF Must)', rule: 'il est + adj. + DE + inf. ("Il est difficile de comprendre") · il est + time ("Il est 18 h") · il s’agit de ("it’s a matter of/about") · il vaut mieux + inf. ("it’s better to").', ruleZh: '必背结构：Il est + 形容词 + DE + 不定式；il est + 时间；il s’agit de（涉及/讲的是）；il vaut mieux + 原形（最好……）。' }
        ],
        sections: [
          {
            id: 'v5c4_weather_falloir',
            heading: '1. Natural Weather Verbs & the 4 Faces of "il faut"',
            headingZh: '一、五大自然天气动词与 il faut 的四种接法',
            lead: 'Weather verbs only ever exist in the "il" form: pleuvoir → il pleut, neiger → il neige, grêler → il grêle (sleet/hail), geler → il gèle (freeze), bruiner → il bruine (drizzle). Now watch how falloir works with all 4 complements in Tammy & Tex’s political scandal debate:',
            leadZh: '看 Tex 遇雨场景与 Tammy 就克林顿丑闻的吐槽，一次见齐 `il faut` 的全部 4 种结构（a/b/c/d）：',
            cartoon: {
              src: './assets/tex_cartoons/vim1_pleut.gif',
              alt: 'Tex: Tiens, il pleut très fort !',
              caption: 'Tex: Tiens, il pleut très fort ! ("il" = dummy subject with zero real-world person — only 3rd-person singular exists!).',
              captionZh: 'Tex：哇，雨下得真大（il pleut）！天气主语 il 是没有具体指代的“形式主语”。'
            },
            table: {
              headers: ['falloir Pattern', 'Tex Example', 'Meaning & Grammar Trick'],
              rows: [
                { cols: ['(a) il faut que + subjunctive', 'Il faut que nous sachions la vérité.', 'We must know the truth (requires subjunctive!).'], audio: 'Il faut que nous sachions la vérité.' },
                { cols: ['(b) il + i.o. pronoun + faut + N', 'Il nous faut des preuves.', 'We need evidence (cleverly avoids subjunctive!).'], audio: 'Il nous faut des preuves.' },
                { cols: ['(c) il faut + noun', 'Il faut une enquête.', 'An investigation is necessary.'], audio: 'Il faut une enquête.' },
                { cols: ['(d) il faut + infinitive', 'Il faut te calmer.', 'You have to calm down (general rule).'], audio: 'Il faut te calmer.' }
              ]
            },
            cartoon2_unused: null
          },
          {
            id: 'v5c4_clinton_scandal',
            heading: '2. Tammy’s "il faut" Scene (vim1_clinton)',
            headingZh: '二、Tammy 的 il faut 情景（含虚拟式 vs 间接宾语避坑）',
            lead: 'See how Tammy jumps seamlessly between "Il faut que nous sachions...", "Il nous faut des preuves", and "Il faut te calmer":',
            leadZh: '结合漫画再巩固一遍“需要某物”的超级地道句式 `Il nous faut des preuves`：',
            cartoon: {
              src: './assets/tex_cartoons/vim1_clinton.gif',
              alt: 'Tammy regarde les infos: Il nous faut des preuves',
              caption: 'Tammy: Il faut que nous sachions la vérité ! Il nous faut des preuves ! Tex: Il faut te calmer.',
              captionZh: 'Tammy：我们必须知道真相（il faut que + 虚拟式），我们需要证据（il nous faut + 名词）！Tex：你得冷静（il faut te calmer）。'
            },
            examples: [
              { fr: 'Il pleut · Il neige · Il grêle (sleet/hail) · Il gèle (freezing) · Il bruine (drizzling).', en: 'The 5 dedicated French weather verbs (all strictly 3rd-person singular!).', zh: '五大专用天气动词：下雨/下雪/冰雹/结冰/毛毛雨，统统只有 il 这一格。', tag: '5 Weather Verbs' }
            ]
          },
          {
            id: 'v5c4_etre_other',
            heading: '3. "il est + adj. + de + inf.", "il s’agit de" & "il vaut mieux"',
            headingZh: '三、il est + adj. + de + 不定式、il s’agit de 与 il vaut mieux',
            lead: 'Remember: after impersonal "Il est + adjective", French ALWAYS links the infinitive with "de" (Il est difficile DE comprendre). Also master two TCF listening/reading staples: il s’agit de ("it’s about") and il vaut mieux ("it’s better to"):',
            leadZh: '听 Tammy 和 Tex 看新闻的对话，记牢**il s’agit de**（讲述的是/问题是）与**il vaut mieux**（最好……）：',
            cartoon: {
              src: './assets/tex_cartoons/vim1_tourmentor.gif',
              alt: 'Tex et Tammy regardent le journal télévisé',
              caption: 'Tammy: Il est 18 h. Tex: Il s’agit seulement de tourmenter les présidents et les tatous ! Il vaut mieux changer de chaîne !',
              captionZh: 'Tammy：现在 6 点了（Il est 18 h）。Tex：内容净是折磨总统和犰狳（Il s’agit de）！最好还是换个台（Il vaut mieux）！'
            },
            examples: [
              { fr: 'Tex : Il est amusant de lire les journaux américains ! — Tammy : Il est difficile de comprendre ton humour.', en: 'It’s fun to read American newspapers! — It is difficult to understand your sense of humor.', zh: '形式主语公式：Il est + 形容词 + **de** + 动词原形！', tag: 'Il est + adj + de' },
              { fr: 'Tammy : Il est 18 h. Regardons le journal télévisé. Il y a un reportage sur l’infidélité.', en: 'It’s 6 o’clock. Let’s watch the news. There’s a report on infidelity.', zh: '报时间用 Il est（如 Il est 8 heures / Il est jour 天亮了）。', tag: 'il est (time/day)' },
              { fr: 'Tex : Il s’agit seulement de tourmenter les présidents et les tatous ! Il vaut mieux changer de chaîne !', en: 'It’s only about tormenting presidents and armadillos! It’s better to change the channel!', zh: 'il s’agit de（涉及/关于……）；il vaut mieux + 原形（最好……）。', tag: 's’agit de / vaut mieux' }
            ],
            quickCheck: {
              prompt: 'What is missing in "Il est important ___ protéger l’environnement" vs. "C’est un problème difficile ___ résoudre"?',
              promptZh: '对照两句：“Il est important ___ protéger...” 与 “C’est difficile ___ résoudre” 应该分别填哪两个介词？',
              options: [
                'de (for impersonal Il est + adj. + de) vs. à (for C’est + adj. + à)',
                'à vs. de',
                'pour vs. sans',
                'de vs. de'
              ],
              answerIdx: 0,
              explain: 'Impersonal "Il est + adj. + DE + infinitive" vs. referring back "C’est + adj. + À + infinitive"!',
              explainZh: '形式主语引导下文用 **Il est + adj. + de**；指代具体前文事物用 **C’est + adj. + à**！'
            }
          }
        ],
        drills: [
          {
            id: 'd5c4_d1',
            kind: 'fib',
            prompt: 'Tammy : En été, au Texas, ___ très chaud. (impersonal: il fait / il est / il y a)',
            promptZh: 'Tex 原题 #1：夏天德州天气很热（填入两个词的无人称短语，注意小写）：',
            answers: ['il fait'],
            hint: 'weather temperature uses faire.',
            audio: 'En été, au Texas, il fait très chaud.',
            explain: 'il fait très chaud.',
            explainZh: '天气热用 il fait。'
          },
          {
            id: 'd5c4_d2',
            kind: 'fib',
            prompt: 'Tex : Oh ! ___ du vent. Mon béret s’est envolé ! (capitalize at start)',
            promptZh: 'Tex 原题 #2：噢！刮风了（il fait / il y a / il pleut 中选一）：',
            answers: ['Il fait', 'il fait', 'Il y a', 'il y a'],
            hint: 'impersonal weather with "du vent".',
            audio: 'Oh ! Il fait du vent. Mon béret s’est envolé !',
            explain: 'Tex uses "Il fait du vent" (and il y a du vent is also natural).',
            explainZh: '刮风在 Tex 里主打 Il fait du vent（日常也常见 il y a du vent）。'
          },
          {
            id: 'd5c4_d3',
            kind: 'fib',
            prompt: 'Tammy : J’aime quand ___ à Noël. J’adore les Noëls blancs. (it snows)',
            promptZh: 'Tex 原题 #3：我喜欢圣诞节下雪的时候（填两个词）：',
            answers: ['il neige'],
            hint: 'weather verb neiger.',
            audio: 'J’aime quand il neige à Noël.',
            explain: 'quand il neige = when it snows.',
            explainZh: '下雪：il neige。'
          },
          {
            id: 'd5c4_d4',
            kind: 'fib',
            prompt: 'Edouard : Les escargots et les canards aiment l’eau. Ils aiment quand ___. (it rains)',
            promptZh: 'Tex 原题 #4：蜗牛和鸭子喜欢水，它们喜欢下雨的时候（填两个词）：',
            answers: ['il pleut'],
            hint: 'weather verb pleuvoir.',
            audio: 'Ils aiment quand il pleut.',
            explain: 'quand il pleut = when it rains.',
            explainZh: '下雨：il pleut。'
          },
          {
            id: 'd5c4_d5',
            kind: 'fib',
            prompt: 'Tammy : Quand ___ au Colorado, je vais skier. (it snows)',
            promptZh: 'Tex 原题 #5：科罗拉多下雪时我就去滑雪（填两个词）：',
            answers: ['il neige'],
            hint: 'skiing weather = il neige.',
            audio: 'Quand il neige au Colorado, je vais skier.',
            explain: 'il neige.',
            explainZh: '下雪：il neige。'
          },
          {
            id: 'd5c4_d6',
            kind: 'fib',
            prompt: 'Tammy : Quand ___, on fait du patin à glace sur le lac. (it freezes)',
            promptZh: 'Tex 原题 #6：结冰/上冻的时候大家就在湖上滑冰（geler，填两个词）：',
            answers: ['il gèle', 'il gele'],
            hint: 'geler (e → è!) in 3rd sg.',
            audio: 'Quand il gèle, on fait du patin à glace sur le lac.',
            explain: 'il gèle = it’s freezing (note accent grave è!).',
            explainZh: '结冰：il gèle（注意重音 è）。'
          },
          {
            id: 'd5c4_d7',
            kind: 'fib',
            prompt: 'Bette : Tu as l’heure ? Oh, non, ___ déjà 8 heures !',
            promptZh: 'Tex 原题 #7：天哪，已经 8 点了！（报时间，填两个词）：',
            answers: ['il est'],
            hint: 'clock time always uses être!',
            audio: 'Oh, non, il est déjà huit heures !',
            explain: 'il est + clock time.',
            explainZh: '时间几点永远用 il est。'
          },
          {
            id: 'd5c4_d8',
            kind: 'fib',
            prompt: 'Joe-Bob : ___ visiter l’Alamo une fois dans sa vie ! (One must / has to...)',
            promptZh: 'Tex 原题 #8：人一辈子必须参观一次阿拉莫！（填“必须/需要”的无人称表达）：',
            answers: ['Il faut', 'il faut'],
            hint: 'necessity + infinitive = Il faut.',
            audio: 'Il faut visiter l’Alamo une fois dans sa vie !',
            explain: 'Il faut + infinitive = one must / it is necessary to.',
            explainZh: '必须/有必要做某事：Il faut。'
          },
          {
            id: 'd5c4_d9',
            kind: 'fib',
            prompt: 'Tammy : À UT, ___ environ 50 000 étudiants. (there are)',
            promptZh: 'Tex 原题 #9：在德克萨斯大学大约有 5 万名学生（存在句，填 3 个词）：',
            answers: ['il y a'],
            hint: 'there is/are = il y a.',
            audio: 'À UT, il y a environ cinquante mille étudiants.',
            explain: 'il y a = there are.',
            explainZh: '存在句：il y a。'
          },
          {
            id: 'd5c4_d10',
            kind: 'fib',
            prompt: 'Tex : Oh, c’est tard, ___ rentrer. Tammy ne va pas être contente. (we have to / must)',
            promptZh: 'Tex 原题 #10：太晚了，必须回家了！（填“必须”）：',
            answers: ['il faut'],
            hint: 'necessity = il faut.',
            audio: 'Oh, c’est tard, il faut rentrer.',
            explain: 'il faut rentrer.',
            explainZh: 'il faut rentrer（必须回家）。'
          },
          {
            id: 'd5c4_d11',
            kind: 'fib',
            prompt: 'Tammy : Regarde, ___ jour, le soleil se lève ! (it is daytime)',
            promptZh: 'Tex 原题 #11：快看，天亮了，太阳升起来了！（il est jour，填两个词）：',
            answers: ['il est'],
            hint: '"il est jour" / "il est nuit" uses être.',
            audio: 'Regarde, il est jour, le soleil se lève !',
            explain: 'il est jour (vs. il fait beau/jour — Tex teaches il est here!).',
            explainZh: '天亮了/天黑了：il est jour / il est nuit。'
          },
          {
            id: 'd5c4_d12',
            kind: 'fib',
            prompt: 'Tammy : ___ difficile de comprendre Tex. (impersonal adjective + de)',
            promptZh: 'Tex 原题 #12：很难理解 Tex（il est + adj. + de，填两个词）：',
            answers: ['Il est', 'il est'],
            hint: 'Il est + adj. + de + infinitive.',
            audio: 'Il est difficile de comprendre Tex.',
            explain: 'Il est difficile de comprendre Tex.',
            explainZh: 'Il est + 形容词 + de + 不定式！'
          }
        ],
        related: [
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_3', label: '5C.3 Modal Verbs' },
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_5', label: '5C.5 partir, sortir, quitter, laisser' }
        ]
      },

      /* =========================================================
         PAGE 5C.5: QUITTER, PARTIR, SORTIR, LAISSER (vl1.html)
      ========================================================= */
      {
        id: 'v5c_5',
        code: '5C.5',
        group: '4 Verbs for "to leave"',
        shortTitle: 'quitter, partir, sortir & laisser',
        title: 'Four Ways to Say "to leave": partir, sortir, quitter & laisser (Transitivity Split!)',
        titleZh: '四大“离开”终极辨析：partir（动身）、sortir（出门）、quitter（离开某地/人）与 laisser（落下/留下）',
        estMin: 4,
        summary: 'Never mix up the 4 English translations of "to leave"! Check transitivity first: partir (leave FOR a destination: "Je pars pour la France") and sortir (go out / exit FROM an enclosed space: "Corey sort de sa chambre") are INTRANSITIVE (NO direct object!). By contrast, quitter (leave someone/a place directly: "Tu me quittes ?") and laisser (leave something/someone behind: "J’ai laissé mes cigarettes") are TRANSITIVE and require a direct object!',
        summaryZh: '英语一个 "to leave" 在法语里要根据**是否及物**精准拆成四个动词：① **partir**（不及物，常接 `pour`：出发去某地）；② **sortir**（不及物，常接 `de`：从房间/房子走出去，或晚上出去玩）；③ **quitter**（**必须及物**！直接接某人或某地点，如“抛弃我 / 离开奥斯汀”）；④ **laisser**（**必须及物**！把某物落在某处，或“别打扰我 `laisse-moi tranquille`”）！',
        cheatSummary: [
          { label: 'Intransitive (NO Direct Object!)', rule: 'partir (+ pour destination: "Je pars pour Lyon") · sortir (+ de enclosed space / alone: "Je sors de l’appartement", "Je vais sortir ce soir").', ruleZh: '不及物二人组（绝不能直接加人名或地名！）：出发去某地用 **partir (pour)**；从室内走出/出去玩用 **sortir (de)**。' },
          { label: 'Transitive (Direct Object REQUIRED!)', rule: 'quitter + person/place ("Rita quitte son mari", "quitter la France") · laisser + thing/person left behind ("J’ai laissé mes clés", "Laisse-moi tranquille !").', ruleZh: '及物二人组（必须直接带宾语！）：离开人/地点用 **quitter**；遗落物品/让人清静用 **laisser**！' }
        ],
        sections: [
          {
            id: 'v5c5_4verbs',
            heading: '1. The 4-Verb Comparison & Tammy’s Nightmare Dialogue',
            headingZh: '一、四大动词结构对比与 Tammy 噩梦全情景',
            lead: 'Notice carefully: you NEVER say *Je pars la maison or *Je quitte pour la France! Read all 4 verbs inside Tammy’s dramatic nightmare below—and notice how être appears with passé composé of partir/sortir ("est déjà parti") while avoir appears with quitter/laisser ("a quitté / a laissé"):',
            leadZh: '看准“是否有直接宾语”与“介词搭配”，在 Tammy 梦到 Tex 离开的戏剧性场景里彻底掌握这四个动词（顺便留意及物动词用 avoir 构成过去时，而 partir/sortir 不及物时用 être！）：',
            cartoon: {
              src: './assets/tex_cartoons/vl1_part.gif',
              alt: 'Tex part pour la France dans le cauchemar de Tammy',
              caption: 'Tex: Tammy, je pars maintenant pour la France. (partir pour + destination — INTRANSITIVE!)',
              captionZh: 'Tex：Tammy，我现在就动身去法国（je pars pour la France — 不及物动词加 pour！）'
            },
            table: {
              headers: ['Verb & Group', 'Transitivity & Pattern', 'Tex Examples'],
              rows: [
                { cols: ['partir (irreg. -ir, p.p. parti)', 'Intransitive (+ pour dest. / alone)', 'Je pars pour College Station. · Le bus est déjà parti.'], audio: 'Je pars pour la France. Le dernier autobus est déjà parti.' },
                { cols: ['sortir (irreg. -ir, p.p. sorti)', 'Intransitive (+ de place / go out)', 'Je vais sortir ce soir. · Corey sort de sa chambre.'], audio: 'Je vais sortir ce soir. Corey sort de sa chambre.' },
                { cols: ['quitter (reg. -er, p.p. quitté)', 'Transitive (+ direct person/place!)', 'Tammy quitte la maison. · Rita quitte son mari. · Tu me quittes ?'], audio: 'Tammy quitte la maison à huit heures. Tu me quittes ?' },
                { cols: ['laisser (reg. -er, p.p. laissé)', 'Transitive (+ thing/person left behind)', 'J’ai laissé mes cigarettes dans la cuisine. · Laisse-moi tranquille !'], audio: 'J’ai laissé mes cigarettes dans la cuisine. Laisse-moi tranquille !' }
              ]
            },
            cartoon2_placeholder: null
          },
          {
            id: 'v5c5_nightmare_scene',
            heading: '2. "Tu me quittes ?" & Leaving Objects Behind (vl1_quitte)',
            headingZh: '二、quitter（直接离开人/地）与 laisser（落下东西/别管我）',
            lead: 'Watch all 4 verbs appear back-to-back as Tex exits Tammy’s apartment in her nightmare:',
            leadZh: '一段短剧情同时用齐 `partir → quitter → sortir de → laisser → quitter`：',
            cartoon: {
              src: './assets/tex_cartoons/vl1_quitte.gif',
              alt: 'Tammy: Tu me quittes mon chéri ?',
              caption: 'Tammy: Tu me quittes ? · Tex sort de l’appartement... « J’ai laissé mes cigarettes. » Puis il quitte l’appartement.',
              captionZh: 'Tammy：你抛弃我了？（quitter 直接带人 me）。Tex 走出公寓（sort de l’appartement），回来拿落下的烟（j’ai laissé），随后永久离开公寓（quitte l’appartement）。'
            },
            examples: [
              { fr: 'Tammy : Tu me quittes mon chéri ? — Tex : Oui, Tammy c’est fini.', en: 'You’re leaving me, darling? — Yes, Tammy, it’s over.', zh: '离开/分手对象直接及物 → quitter！', tag: 'quitter + person' },
              { fr: 'Tex sort de l’appartement de Tammy. Mais il revient : « J’ai laissé mes cigarettes dans la cuisine. » Puis il quitte l’appartement pour toujours.', en: 'Tex steps out of the apartment, returns ("I left my cigarettes in the kitchen"), then leaves the apartment forever.', zh: '走出封闭空间（sort de），留下物品（laisser + 名词），离开地点（quitter + 地点）。', tag: 'sortir / laisser / quitter' }
            ],
            quickCheck: {
              prompt: 'Look closely at "Tex était triste de ___ la France." — notice there is NO preposition before "la France"!',
              promptZh: '注意看句子："Tex était triste de ___ la France." 空格后直接接宾语 la France（无任何介词）！选哪一个？',
              options: [
                'quitter (because "la France" is a DIRECT object!)',
                'partir (intransitive — would need pour/de)',
                'sortir (would need de)',
                'laisser (would mean "leaving France behind on a table")'
              ],
              answerIdx: 0,
              explain: 'Whenever you "leave a person or a place" as a DIRECT object (no de/pour), ONLY quitter works!',
              explainZh: '名词“法国（la France）”紧接在后面作直接宾语（没有加 de），所以必须是及物动词 **quitter**！'
            }
          }
        ],
        drills: [
          {
            id: 'd5c5_d1',
            kind: 'fib',
            prompt: 'Rita à son mari : « ___ ! Je ne t’aime plus. » (tu imperative: go away! — intransitive)',
            promptZh: 'Tex 原题 #1：Rita 对丈夫怒吼：“滚开/走吧！我不爱你了！”（不及物、无宾语，tu 命令式）：',
            answers: ['Pars', 'pars', 'Sors', 'sors'],
            hint: 'intransitive imperative of partir (or sortir)!',
            audio: 'Pars ! Je ne t’aime plus.',
            explain: 'No direct object → intransitive "Pars !" (or "Sors !" — leave the room!).',
            explainZh: '后面没有直接宾语，用不及物动词命令式 Pars !（或 Sors ! 出去！）。'
          },
          {
            id: 'd5c5_d2',
            kind: 'fib',
            prompt: 'Rita à son ex-mari : « ___-moi seule. » (imperative: leave me alone!)',
            promptZh: 'Tex 原题 #2：Rita 对前夫说：“让我一个人清静清静！”（laisser 的 tu 命令式，去 -s！）：',
            answers: ['Laisse', 'laisse'],
            hint: 'leave someone alone = laisser (regular -er drops -s in tu imp.!).',
            audio: 'Laisse-moi seule.',
            explain: 'Laisse-moi seule / tranquille! (Note -er imperative drops -s → Laisse).',
            explainZh: '让某人独自待着固定用 laisser；第一组动词 tu 命令式去掉 -s → Laisse-moi seule。'
          },
          {
            id: 'd5c5_d3',
            kind: 'fib',
            prompt: 'Tex était triste de ___ la France. (infinitive + direct object "la France")',
            promptZh: 'Tex 原题 #3：离开法国让 Tex 很伤心（不定式 + 直接宾语 la France）：',
            answers: ['quitter'],
            hint: 'direct object place (no "de") → quitter!',
            audio: 'Tex était triste de quitter la France.',
            explain: 'quitter + direct place ("la France").',
            explainZh: '直接及物接地点：quitter la France。'
          },
          {
            id: 'd5c5_d4',
            kind: 'fib',
            prompt: 'Tex ___ souvent avec Tammy. (present: goes out / dates Tammy)',
            promptZh: 'Tex 原题 #4：Tex 经常和 Tammy 一起出去玩/约会（sortir 第三人称单数）：',
            answers: ['sort'],
            hint: 'sortir (go out with someone, intransitive + avec) = il sort.',
            audio: 'Tex sort souvent avec Tammy.',
            explain: 'sortir avec quelqu’un = to go out with / date someone (il sort).',
            explainZh: '和某人出去约会用不及物动词 sortir avec → sort。'
          },
          {
            id: 'd5c5_d5',
            kind: 'fib',
            prompt: 'Corey ne ___ jamais de sa chambre pendant la journée. (present: exits FROM his room)',
            promptZh: 'Tex 原题 #5：Corey 白天从不走出他的房间（注意后面的介词 de！）：',
            answers: ['sort'],
            hint: 'exit from an enclosed space (+ de) = sortir → il sort.',
            audio: 'Corey ne sort jamais de sa chambre pendant la journée.',
            explain: 'sortir de + enclosed space → Corey ne sort jamais de sa chambre.',
            explainZh: '从封闭空间出去固定搭配 sortir de → sort。'
          },
          {
            id: 'd5c5_d6',
            kind: 'fib',
            prompt: 'Tex et ses amis ___ pour Opelousas. (present: leave FOR Opelousas)',
            promptZh: 'Tex 原题 #6：Tex 和朋友们动身去 Opelousas（注意后面的介词 pour！）：',
            answers: ['partent'],
            hint: 'leave for a destination (+ pour) = partir → 3rd pl. partent!',
            audio: 'Tex et ses amis partent pour Opelousas.',
            explain: 'partir pour + destination → ils partent.',
            explainZh: '出发去某地（partir pour）复数第三人称：partent。'
          },
          {
            id: 'd5c5_d7',
            kind: 'fib',
            prompt: 'Joe-Bob ___ souvent ses devoirs à la maison. (present: leaves his homework behind)',
            promptZh: 'Tex 原题 #7：Joe-Bob 经常把作业忘/落在家里（laisser）：',
            answers: ['laisse'],
            hint: 'leave an object behind = laisser (3rd sg.).',
            audio: 'Joe-Bob laisse souvent ses devoirs à la maison.',
            explain: 'laisser + forgotten object → laisse.',
            explainZh: '把物品遗留在某处用 laisser → laisse。'
          },
          {
            id: 'd5c5_d8',
            kind: 'fib',
            prompt: 'Watch "va + inf."! On se demande si Rita va ___ son mari. (infinitive: leave her husband)',
            promptZh: 'Tex 原题 #8（前面已有 va！）：大家猜测 Rita 是否会离开她的丈夫（及物）：',
            answers: ['quitter'],
            hint: 'near future "va" + INFINITIVE + direct object "son mari" → quitter!',
            audio: 'On se demande si Rita va quitter son mari.',
            explain: 'va + INFINITIVE quitter (direct person object "son mari").',
            explainZh: '前面已有 va，且宾语 son mari 是直接宾语，因此用原形 **quitter**。'
          },
          {
            id: 'd5c5_d9',
            kind: 'fib',
            prompt: 'Tex à Trey : « Où as-tu ___ mon manuscrit ? » (past participle: left)',
            promptZh: 'Tex 原题 #9（前面已有 as-tu！）：你把我的手稿放在哪儿了（laisser 的过去分词）：',
            answers: ['laissé', 'laisse'],
            hint: 'passé composé "as" + past participle of laisser!',
            audio: 'Où as-tu laissé mon manuscrit ?',
            explain: 'as-tu laissé (leave behind + past participle!).',
            explainZh: '复合过去时，把某物落/留在某地用 laisser 的过去分词 **laissé**。'
          },
          {
            id: 'd5c5_d10',
            kind: 'fib',
            prompt: 'Les parents de Tex ont ___ cette vie après un accident sur l’autoroute. (past participle: left this life)',
            promptZh: 'Tex 原题 #10（前面已有 ont！）：Tex 的父母在车祸后离开了人世（quitter 过去分词）：',
            answers: ['quitté', 'quitte'],
            hint: 'direct object "cette vie" + passé composé with "ont" → quitté!',
            audio: 'Les parents de Tex ont quitté cette vie après un accident.',
            explain: 'ont quitté ("quitter cette vie" = euphemism for pass away; takes avoir + direct object!).',
            explainZh: 'quitter cette vie（离世），用助动词 ont + 过去分词 **quitté**。'
          },
          {
            id: 'd5c5_d11',
            kind: 'fib',
            prompt: 'Les chattes ___ la nuit. (present: go out at night — no direct object!)',
            promptZh: 'Tex 原题 #11：母猫们晚上会出门闲逛（la nuit 是时间状语，没有直接宾语！）：',
            answers: ['sortent'],
            hint: 'go out at night = sortir (3rd pl. sortent)!',
            audio: 'Les chattes sortent la nuit.',
            explain: '"la nuit" means "at night" (time adverbial), NOT a direct object! Going out = sortent.',
            explainZh: '注意陷阱！la nuit 是“在夜间”的时间状语而不是宾语，“晚上出门”用不及物 **sortent**。'
          },
          {
            id: 'd5c5_d12',
            kind: 'fib',
            prompt: 'Tex : Le dernier autobus est déjà ___. (past participle with est!)',
            promptZh: 'Tex 原题 #12（前面是 est！）：最后一班公交车已经开走了（partir 过去分词）：',
            answers: ['parti'],
            hint: 'partir uses être in passé composé → masc. sg. parti!',
            audio: 'Le dernier autobus est déjà parti.',
            explain: 'est déjà parti (partir + masculine singular le dernier autobus → parti).',
            explainZh: '汽车“已经出发开走了”用 partir（助动词 est + 阳性单数 parti）。'
          }
        ],
        related: [
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_4', label: '5C.4 Impersonals' },
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_6', label: '5C.6 Infinitive Constructions I' }
        ]
      },

      /* =========================================================
         PAGE 5C.6: INFINITIVE CONSTRUCTIONS I (vinf1 Part 1 — ROLES, PREPOSITIONS & À/DE LISTS)
      ========================================================= */
      {
        id: 'v5c_6',
        code: '5C.6',
        group: 'Infinitive Constructions',
        shortTitle: 'Infinitive Roles, Prepositions & à/de Verbs',
        title: 'Infinitive Constructions (Part 1): Noun/Sign Roles, Verbs, Prepositions & à vs. de Lists',
        titleZh: '不定式结构（上）：作主语/标语命令式、五大直接后续动词、介词与 à/de 清单',
        estMin: 5,
        summary: 'See all core roles of the French infinitive: (1) noun/subject (often EN -ing: "Étudier n’est pas facile !"); (2) public sign command ("Ne pas marcher sur l’herbe"); (3) directly after 5 verb classes (movement, preference, opinion, perception, modals + faillir / avoir beau); (4) after prepositions (pour, afin de, avant de, sans, commencer/finir par — whereas EN takes -ant!); and (5) Tex’s complete à + inf. (16) & de + inf. (19) verb lists.',
        summaryZh: '全面掌握法语不定式的五大主干用法：① 作主语或名物化（常对应英语 -ing，如 *Étudier n’est pas facile*）；② 公共场所标语禁止式（*Ne pas marcher sur l’herbe*）；③ 直接紧接在五大类动词后（移动/偏好/观点/感官/情态，记住 **faillir 险些…** 与 **avoir beau 徒劳…**）；④ 除 **en** 外几乎所有介词（*pour, afin de, avant de, sans, commencer/finir par*）后全部接不定式；⑤ 熟背 Tex 精选 **16 个接 à 动词** 与 **19 个接 de 动词**！',
        cheatSummary: [
          { label: 'Core Infinitive Roles + Prepositions', rule: 'Subject ("Étudier n’est pas facile") · Sign ("Ne pas marcher") · Prepositions: pour, afin de, avant de, sans, par (NEVER after en, which takes -ant!).', ruleZh: '除了介词 en 后面用现在分词（en sortant）外，pour / avant de / sans / par 全部直接接不定式！' },
          { label: 'Key Preposition Pairs: à (16) vs. de (19)', rule: 'Verb + à: aider à, apprendre à, arriver à, chercher à, commencer à, hésiter à, se mettre à, réussir à, tenir à. Verb + de: arrêter de, décider de, essayer de, finir de, oublier de, promettre de, refuser de, rêver de.', ruleZh: '高频接 **à**：aider, apprendre, arriver, commencer, hésiter, se mettre, réussir, tenir；高频接 **de**：arrêter, décider, essayer, finir, oublier, permettre, promettre, refuser, rêver！' }
        ],
        sections: [
          {
            id: 'v5c6_noun_sign_verbs',
            heading: '1. As a Noun, Public Sign Imperative & After 5 Verb Classes',
            headingZh: '一、作主语、标语命令式与直接跟在五大类动词后',
            lead: 'Notice that English translates subject infinitives as "-ing" ("Studying is not easy"), while French uses the bare infinitive! Also notice Edouard’s "J’ai failli manger un hamburger" (faillir = almost did something):',
            leadZh: '看三幅 Tex 幽默漫画，记住：`Étudier`（作主语）= 英语动名词 "Studying"；标语用 `Ne pas + 不定式`；`faillir + 不定式` = 险些做某事：',
            cartoon: {
              src: './assets/tex_cartoons/vinf1_beavis.gif',
              alt: 'Joe-Bob: Étudier n’est pas facile !',
              caption: 'Joe-Bob: Étudier n’est pas facile ! (Infinitive acting as the noun subject of the sentence.)',
              captionZh: 'Joe-Bob：学习可真不容易啊（Étudier 充当全句主语，对应英语 Studying）！'
            },
            table: {
              headers: ['Verb Group Directly Before Infinitive', 'Tex Verb List', 'Dialogue / Grammar Example'],
              rows: [
                { cols: ['1. Movement (purpose)', 'aller, descendre, partir, rentrer, retourner, revenir, sortir, venir', 'Tex et ses amis sortent dîner.'], audio: 'Tex et ses amis sortent dîner.' },
                { cols: ['2. Preference', 'adorer, aimer, désirer, détester, préférer, vouloir', 'Joe-Bob veut manger un hamburger.'], audio: 'Joe-Bob veut manger un hamburger.' },
                { cols: ['3. Opinion', 'compter, croire, espérer, nier, penser, valoir mieux', 'Tex compte savourer un bon dîner français.'], audio: 'Tex compte savourer un bon dîner.' },
                { cols: ['4. Perception', 'écouter, entendre, regarder, sentir, voir', 'Edouard les écoute discuter un moment.'], audio: 'Edouard les écoute discuter.' },
                { cols: ['5. Ability / Obligation / Almost', 'avoir beau (in vain), devoir, faillir (almost), falloir, pouvoir, savoir', 'J’ai failli manger un hamburger une fois !'], audio: 'J’ai failli manger un hamburger une fois !' }
              ]
            }
          },
          {
            id: 'v5c6_herbe_failli',
            heading: '2. Sign Imperative ("Ne pas marcher...") & "faillir"',
            headingZh: '二、公共警示标语（Ne pas + 原形）与险些动词 faillir',
            lead: 'On public signs with no personal addressee ("Keep off the grass", "Do not enter"), French places "Ne pas" directly before the infinitive:',
            leadZh: '没有具体听众对象的标语用不定式命令式（如 *Ne pas marcher sur l’herbe* / *Prière de ne pas entrer*）：',
            cartoon: {
              src: './assets/tex_cartoons/vinf1_herbe.gif',
              alt: 'Ne pas marcher sur l’herbe',
              caption: 'Ne pas marcher sur l’herbe. (Public sign imperative = ne pas + infinitive!)',
              captionZh: '公共告示牌“请勿踩踏草坪”：Ne pas marcher sur l’herbe（直接用不定式！）。'
            },
            examples: [
              { fr: 'Edouard : J’ai failli manger un hamburger une fois. Non, je ne peux pas faire ça, tout de même. Il faut trouver un vrai restaurant français.', en: 'I almost ate a hamburger once. No, I really can’t do that. We have to find a real French restaurant.', zh: 'faillir + 不定式 = 差一点儿就做了某事（常用于复合过去时 j’ai failli...）。', tag: 'faillir + inf.' }
            ]
          },
          {
            id: 'v5c6_prep_lists',
            heading: '3. After Prepositions + Tex’s 16 "à" & 19 "de" Verbs',
            headingZh: '三、介词后用不定式（含 en + -ant 例外）与 à / de 动词总表',
            lead: 'Compare Tammy’s restaurant scene ("Avant de partir... Elle commence par suggérer... parlent sans écouter... finit par comprendre") with the warning on "en + -ant" ("En sortant, Joe-Bob a dit au revoir"). Notice also "de" after nouns/adjectives ("content de manger") vs. passive/functional "à" ("C’est bon à manger", "une salle à manger", "de l’eau à boire")!',
            leadZh: '看 Edouard 差点吃汉堡的漫画并熟背下列高频搭配（重点分清 **commencer à / finir de** 表开始/做完，而 **commencer par / finir par** 表“首先做… / 最终还是…”）：',
            cartoon: {
              src: './assets/tex_cartoons/vinf1_failli.gif',
              alt: 'Edouard: J’ai failli manger un hamburger une fois',
              caption: 'Tammy arrive pour sortir... Avant de partir... Elle commence par suggérer... Elle finit par comprendre.',
              captionZh: '为了出去（pour sortir），出发之前（avant de partir），不听（sans écouter），最终明白（finit par comprendre）！'
            },
            table: {
              headers: ['Verb + à + Infinitive (All 16 Tex Verbs)', 'Verb + de + Infinitive (All 19 Tex Verbs)'],
              rows: [
                { cols: ['aider à (help) · s’amuser à (have fun) · apprendre à (learn) · arriver à (manage to)', '(s’)arrêter de (stop) · conseiller de (advise) · se contenter de (make do) · décider de (decide)'], audio: 'apprendre à, arriver à, décider de' },
                { cols: ['s’attendre à (expect) · chercher à (try/attempt) · commencer à (start) · se décider à (make up mind)', 's’efforcer de (try hard) · essayer de (try) · s’excuser de (apologize) · finir de (finish)'], audio: 'chercher à, essayer de, finir de' },
                { cols: ['encourager à (encourage) · s’habituer à (get used to) · hésiter à (hesitate) · inviter à (invite)', 'mériter de (deserve) · oublier de (forget) · permettre (à qqn) de (permit) · persuader de (persuade)'], audio: 'hésiter à, oublier de, permettre de' },
                { cols: ['se mettre à (start to) · se préparer à (prepare) · renoncer à (give up) · réussir à (succeed) · servir à (be used for) · tenir à (be eager to)', 'se presser de (hurry) · promettre de (promise) · proposer de (propose) · refuser de (refuse) · rêver de (dream) · se soucier de (care) · se souvenir de (remember)'], audio: 'réussir à, se mettre à, promettre de, rêver de' }
              ]
            },
            quickCheck: {
              prompt: 'Complete: "Avant de ___ (leave), ils parlent sans ___ (listen)." vs. "En ___ (leaving), il dit au revoir."',
              promptZh: '介词后用动词的铁律：avant de / sans 后面用____，而 en 后面必须用____：',
              options: [
                'partir / écouter (infinitives) vs. sortant (present participle after "en"!)',
                'partant / écoutant vs. sortir',
                'partir / écoutant vs. sortir',
                'partant / écouter vs. sortant'
              ],
              answerIdx: 0,
              explain: 'In French, almost EVERY preposition (pour, afin de, avant de, sans, par) takes the INFINITIVE—EXCEPT "en", which takes the present participle (-ant)!',
              explainZh: '口诀：除 **en** 后接 `-ant`（gérondif）外，**pour / avant de / sans / par** 全部接动词原形（不定式）！'
            }
          }
        ],
        drills: [
          {
            id: 'd5c6_d1',
            kind: 'fib',
            prompt: 'Tex adore ___ au café. (going: aller)',
            promptZh: 'Tex 原题 #1：Tex 特别喜欢去咖啡馆（注意前面已有 adore！）：',
            answers: ['aller'],
            hint: 'preference verb adorer + INFINITIVE (even though English says "going")!',
            audio: 'Tex adore aller au café.',
            explain: 'adore + INFINITIVE → aller (French uses the infinitive, never *-ant, after adorer!).',
            explainZh: '法语动词后不加现在分词，直接接不定式 **aller**。'
          },
          {
            id: 'd5c6_d2',
            kind: 'fib',
            prompt: '___ est bon pour le cœur et la ligne. (dancing — subject of sentence!)',
            promptZh: 'Tex 原题 #2：跳舞有益心脏和身材（句首主语，用原形还是 -ant？）：',
            answers: ['Danser', 'danser'],
            hint: 'subject role ("Dancing...") uses the French INFINITIVE!',
            audio: 'Danser est bon pour le cœur et la ligne.',
            explain: 'Danser (French uses the infinitive where English uses "-ing" as a subject!).',
            explainZh: '动词原形直接作全句主语：Danser！'
          },
          {
            id: 'd5c6_d3',
            kind: 'fib',
            prompt: 'Ce soir les amis sortent pour ___. (to have dinner)',
            promptZh: 'Tex 原题 #4：今晚朋友们出去吃晚饭（dîner）：',
            answers: ['dîner', 'diner'],
            hint: 'after pour → infinitive.',
            audio: 'Ce soir les amis sortent pour dîner.',
            explain: 'pour + infinitive dîner.',
            explainZh: 'pour 后面接原形：dîner。'
          },
          {
            id: 'd5c6_d4',
            kind: 'fib',
            prompt: 'Tex écoute ___ Serge Gainsbourg. (singing)',
            promptZh: 'Tex 原题 #5：Tex 听 Serge Gainsbourg 唱歌（感官动词 écoute + 原形）：',
            answers: ['chanter'],
            hint: 'perception verb écouter + INFINITIVE!',
            audio: 'Tex écoute chanter Serge Gainsbourg.',
            explain: 'écoute chanter (perception verbs take the bare infinitive!).',
            explainZh: '感官动词 écouter/entendre/voir 后接不定式原形：chanter。'
          },
          {
            id: 'd5c6_d5',
            kind: 'fib',
            prompt: 'Trey espère ___ une petite amie bientôt. (to find)',
            promptZh: 'Tex 原题 #6：Trey 希望很快找到一位女朋友（trouver）：',
            answers: ['trouver'],
            hint: 'espérer + bare infinitive (NO de!).',
            audio: 'Trey espère trouver une petite amie bientôt.',
            explain: 'espérer + bare infinitive trouver (do NOT add "de"!).',
            explainZh: 'espérer 直接加不定式（不要加 de）：trouver。'
          },
          {
            id: 'd5c6_d6',
            kind: 'fib',
            prompt: 'Vous devez vérifier votre argent avant de ___. (ordering)',
            promptZh: 'Tex 原题 #7：点菜前要先数清自己的钱（avant de + 点菜 commander）：',
            answers: ['commander'],
            hint: 'after avant de → infinitive ("to order").',
            audio: 'Vous devez vérifier votre argent avant de commander.',
            explain: 'avant de + infinitive commander.',
            explainZh: 'avant de 后接原形：commander。'
          },
          {
            id: 'd5c6_d7',
            kind: 'fib',
            prompt: 'Commençons par ___ un hors-d’œuvre. (ordering)',
            promptZh: 'Tex 原题 #8：咱们先从点一份开胃前菜开始吧（par + 点菜 commander）：',
            answers: ['commander'],
            hint: 'commencer par + infinitive.',
            audio: 'Commençons par commander un hors-d’œuvre.',
            explain: 'commencer par + infinitive commander.',
            explainZh: 'commencer par 后接原形：commander。'
          },
          {
            id: 'd5c6_d8',
            kind: 'fib',
            prompt: 'On ne fête pas son anniversaire sans ___ un morceau de gâteau. (having)',
            promptZh: 'Tex 原题 #9：过生日哪能不吃一块蛋糕呢（sans + avoir）：',
            answers: ['avoir'],
            hint: 'after sans → infinitive (never -ant)!',
            audio: 'On ne fête pas son anniversaire sans avoir un morceau de gâteau.',
            explain: 'sans + infinitive avoir.',
            explainZh: 'sans 后接原形：avoir。'
          },
          {
            id: 'd5c6_d9',
            kind: 'fib',
            prompt: 'Edouard ! N’oublie pas d’___ le ketchup. (to bring)',
            promptZh: 'Tex 原题 #10：Edouard！别忘了带番茄酱（apporter）：',
            answers: ['apporter'],
            hint: 'oublier de/d’ + infinitive ("to bring" = apporter).',
            audio: 'N’oublie pas d’apporter le ketchup.',
            explain: 'oublier de + infinitive apporter.',
            explainZh: '带物品用 apporter：N’oublie pas d’apporter...。'
          },
          {
            id: 'd5c6_d10',
            kind: 'choice',
            prompt: 'Which preposition completes "Edouard aime aider ses amis ___ choisir le vin" vs. "Ils décident ___ rester"?',
            promptZh: '对比固定搭配：“aider à” 与 “décider ___” 分别用哪个介词接不定式？',
            options: ['à / de', 'de / à', 'pour / par', 'par / pour'],
            answerIdx: 0,
            audio: 'Il décide de rester.',
            explain: 'aider À faire qqch vs. décider DE faire qqch!',
            explainZh: '记住搭配清单：**aider à**（帮助做）vs. **décider de**（决定做）！'
          }
        ],
        related: [
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_5', label: '5C.5 partir, sortir, quitter, laisser' },
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_7', label: '5C.7 Negative & Past Infinitives' }
        ]
      },

      /* =========================================================
         PAGE 5C.7: INFINITIVE CONSTRUCTIONS II (vinf1 Part 2 — NEGATION, PAST INFINITIVE, DILEMMA)
      ========================================================= */
      {
        id: 'v5c_7',
        code: '5C.7',
        group: 'Infinitive Constructions',
        shortTitle: 'Negative & Past Infinitives (après avoir...)',
        title: 'Infinitive Constructions (Part 2): Negative Infinitives (ne pas + inf.) & Past Infinitives (après)',
        titleZh: '不定式结构（下）：否定不定式（ne pas 并排前置！）与 après 过去不定式',
        estMin: 3,
        summary: 'Master 4 essential intermediate structures: (1) Avoiding the subjunctive with impersonal "Il est + adj. + de + inf."; (2) Dilemma questions/exclamations ("Quel restaurant choisir ? Où aller ? Que faire ?"); (3) Negating infinitives by putting BOTH words side-by-side BEFORE the infinitive (ne pas, ne plus, ne rien, ne jamais — EXCEPT ne ... personne which straddles the verb!); and (4) Past infinitive after "après" (après avoir/être + p.p., with agreement on être verbs!).',
        summaryZh: '攻克中级写作/阅读四大高分点：① 无人称句 `Il est + adj. + de + inf.` 替代虚拟式；② 犹豫/感叹不定式短句（`Que faire ? Où aller ?`）；③ **不定式否定语序超级规则**：`ne pas / ne plus / ne rien / ne jamais` **两个词必须抱团一起放在不定式前面**（*de ne pas se disputer*），唯独 **ne ... personne 要一前一后夹住不定式**（*de ne se battre avec personne*）；④ **après + 过去不定式**：用 `après avoir / être + 过去分词`，助动词为 `être` 时别忘了性数配合（*Après être arrivés*）！',
        cheatSummary: [
          { label: 'Negation of Infinitives (Word Order Trap!)', rule: 'ne pas / ne plus / ne rien / ne jamais stand TOGETHER BEFORE the infinitive ("de ne pas se disputer"). ONLY ne ... personne splits around it ("de ne se battre avec personne").', ruleZh: '不定式否定：ne pas / ne plus / ne rien / ne jamais 并排放在动词原形前；唯有 ne ... personne 分开夹住动词（及介词）！' },
          { label: 'Past Infinitive After "après"', rule: 'NEVER *après + present infinitive! Always "après avoir / être + past participle", agreeing when auxiliary is être ("Après être arrivés au restaurant").', ruleZh: 'après 后绝不能直接接普通动词原形！必须用 **après avoir / être + 过去分词**（être 作助动词时配合主语性数！）。' }
        ],
        sections: [
          {
            id: 'v5c7_neg_dilemma',
            heading: '1. Dilemma Phrases, Subjunctive Avoidance & Negating Infinitives',
            headingZh: '一、不定式疑难句与否定不定式语序（及省略 pas 文学用法）',
            lead: 'Notice two subtle rules: (1) With a reflexive infinitive, "ne pas" STILL stays together BEFORE the reflexive pronoun ("de ne pas se disputer"); (2) In formal/literary French after savoir, pouvoir, oser, cesser, "pas" may be omitted ("ne savent que faire", "n’ose parler")!',
            leadZh: '看 Edouard 的吐槽漫画，掌握不定式否定语序与四个高频可省略 pas 的动词（savoir, pouvoir, oser, cesser）：',
            cartoon: {
              src: './assets/tex_cartoons/vinf1_decadence.gif',
              alt: 'Edouard: Il est barbare de manger des hamburgers !',
              caption: 'Edouard: Il est tout à fait barbare de manger des hamburgers ! · Après être arrivés, Joe-Bob et Corey commandent des hamburgers.',
              captionZh: 'Edouard：吃汉堡太野蛮了（Il est barbare de...）！结果刚到餐厅（Après être arrivés），他俩还是固执地点了汉堡！'
            },
            examples: [
              { fr: 'Edouard : Il est tout à fait barbare de manger des hamburgers !', en: 'It is completely uncivilized to eat hamburgers!', zh: '无须指明特定主体时，用 Il est + adj. + de + 不定式，优雅避开虚拟式。', tag: 'Impersonal de' },
              { fr: 'Tex se demande : Quel restaurant choisir ? Où aller ? Que faire ? · Oh ! Être en France !', en: 'Which restaurant to choose? Where to go? What to do? · Oh, to be in France!', zh: '疑问/感叹犹豫短句直接用不定式！', tag: 'Dilemma / Exclam.' },
              { fr: 'Tammy demande aux autres de ne pas se disputer.', en: 'Tammy asks the others not to fight.', zh: 'ne pas 并排放在自反代词 se 和动词 disputer 前面！', tag: 'ne pas + inf.' },
              { fr: 'Tex promet de ne se battre avec personne.', en: 'Tex promises not to fight with anyone.', zh: '唯一例外：ne ... personne 要分开前后包夹动词！', tag: 'ne ... personne' },
              { fr: 'Tex et ses amis ne savent que faire et Tammy n’ose parler.', en: 'Tex and his friends don’t know what to do and Tammy doesn’t dare speak.', zh: 'savoir, pouvoir, oser, cesser 后可书面省略 pas。', tag: 'Omit pas' }
            ]
          },
          {
            id: 'v5c7_past_infinitive',
            heading: '2. Past Infinitive: "après avoir / être + Past Participle"',
            headingZh: '二、过去不定式：après 后面为什么不能接普通原形？',
            lead: 'Unlike avant de (which takes a simple infinitive: "avant de partir"), French "après" describes an action ALREADY completed before the main verb, so it MUST use the past infinitive (avoir/être + past participle, agreeing on être verbs!):',
            leadZh: '死记硬背一条黄金公式：`avant de + 普通原形` vs. **`après + avoir / être + 过去分词`**！若用的是 `être` 类运动/代动词，过去分词要随主句主语做性数配合：',
            table: {
              headers: ['Auxiliary', 'Tex Past Infinitive Example', 'Agreement Check'],
              rows: [
                { cols: ['avoir verb', 'Après avoir suggéré plusieurs restaurants, ils choisissent un restaurant français.', 'avoir → no agreement on suggéré'], audio: 'Après avoir suggéré plusieurs restaurants, ils choisissent un restaurant français.' },
                { cols: ['être verb (masc. pl.)', 'Après être arrivés au restaurant, Joe-Bob et Corey commandent des hamburgers.', 'être + masc. pl. → arrivés (-s!)'], audio: 'Après être arrivés au restaurant, Joe-Bob et Corey commandent des hamburgers.' },
                { cols: ['Pronominal (être!)', 'Après s’être levée, Tammy prend un café.', 'être + fem. sg. → levée (-e!)'], audio: 'Après s’être levée, Tammy prend un café.' }
              ]
            },
            quickCheck: {
              prompt: 'How do you translate "After having finished dinner" ("Après ___ le dîner")?',
              promptZh: '“吃完晚饭之后”（après + 过去不定式），下面哪一句完全正确？',
              options: [
                'Après avoir fini le dîner',
                'Après finir le dîner',
                'Après de finir le dîner',
                'Après être fini le dîner'
              ],
              answerIdx: 0,
              explain: 'après takes the PAST INFINITIVE (avoir or être + past participle): "finir" uses avoir → Après avoir fini le dîner!',
              explainZh: 'après 后接过去不定式；finir 用 avoir 作助动词 → Après avoir fini！'
            }
          }
        ],
        drills: [
          {
            id: 'd5c7_d1',
            kind: 'fib',
            prompt: 'Prière de ___. (do not enter — 3 words!)',
            promptZh: 'Tex 原题 #3：请勿入内（Prière de + 否定不定式“不进入”）：',
            answers: ['ne pas entrer'],
            hint: 'ne pas stands TOGETHER before "entrer"!',
            audio: 'Prière de ne pas entrer.',
            explain: 'ne pas + infinitive → Prière de ne pas entrer.',
            explainZh: 'ne pas 并排放在原形 entrer 前面：ne pas entrer。'
          },
          {
            id: 'd5c7_d2',
            kind: 'fib',
            prompt: 'Après ___ le dîner, nous irons danser. (having finished — 2 words!)',
            promptZh: 'Tex 原题 #11：吃完晚饭后，我们会去跳舞（après + 过去不定式）：',
            answers: ['avoir fini'],
            hint: 'avoir + past participle of finir!',
            audio: 'Après avoir fini le dîner, nous irons danser.',
            explain: 'Après + past infinitive → Après avoir fini.',
            explainZh: 'après 后接过去不定式：avoir fini。'
          },
          {
            id: 'd5c7_d3',
            kind: 'fib',
            prompt: 'Que ___ ? (to do — dilemma question)',
            promptZh: 'Tex 原题 #12：该怎么办呢？（疑问词后的不定式“做”）：',
            answers: ['faire'],
            hint: 'to do = faire.',
            audio: 'Que faire ?',
            explain: 'Que faire ? = What to do?',
            explainZh: 'Que faire ? = 该怎么办？'
          },
          {
            id: 'd5c7_d4',
            kind: 'choice',
            prompt: 'How do you negate the reflexive infinitive "se disputer" in "Tammy demande aux autres de ___"?',
            promptZh: '“Tammy 叫大家不要吵架”（se disputer 的否定不定式）语序正确的是：',
            options: [
              'ne pas se disputer',
              'ne se pas disputer',
              'se ne pas disputer',
              'ne se disputer pas'
            ],
            answerIdx: 0,
            audio: 'Tammy demande aux autres de ne pas se disputer.',
            explain: 'ne pas stays TOGETHER before BOTH the reflexive pronoun and the infinitive: de ne pas se disputer!',
            explainZh: 'ne pas 抱团一起站在最前面（甚至在自反代词 se 之前）：de ne pas se disputer！'
          },
          {
            id: 'd5c7_d5',
            kind: 'choice',
            prompt: 'Which negative infinitive correctly BREAKS the "together before the verb" rule (straddling the verb)?',
            promptZh: '下面哪个否定词结构在修饰不定式时必须“拆开”，一前一后夹住不定式？',
            options: [
              'ne ... personne (Tex promet de ne se battre avec personne.)',
              'ne ... pas',
              'ne ... jamais',
              'ne ... plus'
            ],
            answerIdx: 0,
            audio: 'Tex promet de ne se battre avec personne.',
            explain: 'ne pas, ne plus, ne rien, ne jamais sit together BEFORE the infinitive; ONLY ne ... personne straddles it!',
            explainZh: '唯有 personne（以及 aucun）不能前置，必须写成 de ne [动词...] personne！'
          },
          {
            id: 'd5c7_d6',
            kind: 'fib',
            prompt: 'Past infinitive with être (Tammy, fem. sg.!): Après être ___ au café, Tammy lit un roman. (arriver)',
            promptZh: '过去不定式性数配合填空（主语是女性 Tammy！）：到咖啡馆后，Tammy 看起了小说：',
            answers: ['arrivée', 'arrivee'],
            hint: 'arriver uses être → add -e for Tammy!',
            audio: 'Après être arrivée au café, Tammy lit un roman.',
            explain: 'arriver takes être → agrees with Tammy → arrivée.',
            explainZh: 'arriver 是 être 类动词，配合阴性 Tammy 加 -e → arrivée！'
          },
          {
            id: 'd5c7_d7',
            kind: 'fib',
            prompt: 'Past infinitive with être (Joe-Bob et Corey, masc. pl.!): Après être ___ de Jester, ils prennent le bus. (sortir)',
            promptZh: '过去不定式配合填空（主语是复数男生 Joe-Bob et Corey）：走出宿舍之后：',
            answers: ['sortis'],
            hint: 'sortir uses être → masc. pl. adds -s!',
            audio: 'Après être sortis de Jester, ils prennent le bus.',
            explain: 'sortir (intransitive) uses être → masc. pl. sortis.',
            explainZh: 'sortir 用 être 作助动词，配合阳性复数加 -s → sortis。'
          },
          {
            id: 'd5c7_d8',
            kind: 'fib',
            prompt: 'Negative infinitive with "never": Il m’a dit de ___ mentir. (never — 2 words)',
            promptZh: '否定不定式语序（“永远不要说谎”）：ne + jamais 并排前置：',
            answers: ['ne jamais'],
            hint: 'ne jamais together before mentir!',
            audio: 'Il m’a dit de ne jamais mentir.',
            explain: 'de ne jamais mentir.',
            explainZh: 'ne jamais 并排放在 mentir 前：ne jamais。'
          },
          {
            id: 'd5c7_d9',
            kind: 'choice',
            prompt: 'After which 4 verbs can French omit "pas" with an infinitive (e.g., "Ils ne savent que faire", "Elle n’ose parler")?',
            promptZh: '书面法语中，哪四个动词在否定搭配不定式时常可以省略 "pas"？',
            options: [
              'savoir, pouvoir, oser, cesser',
              'aimer, adorer, détester, préférer',
              'aller, venir, partir, sortir',
              'faire, dire, lire, écrire'
            ],
            answerIdx: 0,
            audio: 'Tex et ses amis ne savent que faire.',
            explain: 'savoir, pouvoir, oser (dare), and cesser (cease) allow formal/literary omission of "pas"!',
            explainZh: '经典书面语法点：**savoir / pouvoir / oser / cesser** 四动词可省 pas！'
          },
          {
            id: 'd5c7_d10',
            kind: 'fib',
            prompt: 'Sign imperative ("Do not smoke"): ___ fumer. (2 words before fumer)',
            promptZh: '公共禁止标语“请勿吸烟”：___ fumer.',
            answers: ['Ne pas', 'ne pas'],
            hint: 'ne pas + infinitive.',
            audio: 'Ne pas fumer.',
            explain: 'Ne pas fumer.',
            explainZh: '标语“请勿吸烟”固定写作 Ne pas fumer。'
          }
        ],
        related: [
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_6', label: '5C.6 Infinitive Constructions I' },
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_8', label: '5C.8 Causative faire + Infinitive' }
        ]
      },

      /* =========================================================
         PAGE 5C.8: CAUSATIVE FAIRE (virr7.html)
      ========================================================= */
      {
        id: 'v5c_8',
        code: '5C.8',
        group: 'Causative faire',
        shortTitle: 'Causative faire & se faire + Infinitive',
        title: 'Causative "faire" (faire + infinitive): Making/Having Things Done & "se faire"',
        titleZh: '使役结构 faire + 不定式：请别人做某事、双宾语 à 与被动意义 se faire（过去分词 fait 永不变！）',
        estMin: 4,
        summary: 'Use faire (in ANY tense) + infinitive when the subject causes someone else to act ("Tex fait réparer sa voiture au garage"). Master the 1-object vs. 2-object rule (1 object = direct: "fait chanter Tammy"; 2 objects = direct thing + À indirect agent: "fait chanter la Marseillaise à Tammy"), object pronoun placement before faire (except affirmative imperative: "Fais-la chanter !"), and "se faire + infinitive" (both intentional "s’est fait faire une robe" & unfortunate accidents "se sont fait écraser"). Crucial rule: past participle FAIT is ALWAYS invariable here!',
        summaryZh: 'B1 极核心高分结构 **faire + 动词原形**（请/让/使某人做某事）：① 单宾语直接及物（*Tex fait chanter Tammy*），**双宾语时原本执行动作的人必须变成 `à + 人`**（*Tex fait chanter la Marseillaise **à Tammy***）；② 代词（le/la/lui...）一律放到 **faire 前面**，唯独肯定命令式放到 faire 后面加连字符（*Fais-la chanter !*）；③ **se faire + 不定式**既可表“给自己定做/理发”，也常表**不幸遭殃（近乎被动）**（*Mes parents se sont fait écraser par un camion*）；④ 铁律：使役结构里的过去分词 **fait 永远不变形**（绝不能写 *faite / faits）！',
        cheatSummary: [
          { label: '1 Object vs. 2 Objects (à Agent!)', rule: '1 object (direct): Tex fait chanter Tammy. 2 objects (thing = DO, person doing it = À + IO): Tex fait chanter la Marseillaise À Tammy.', ruleZh: '只有一个宾语放原形后面；有两个宾语时，动作内容作直接宾语，执行动作的“人”前面必须加 **à**！' },
          { label: 'se faire + INVARIABLE "fait"!', rule: 'Pronouns go before faire ("Tex la fait chanter", "Fais-la chanter !"). se faire = intentional or accidental ("Rita s’est fait faire une robe" / "Mes parents se sont fait écraser"). Past participle FAIT NEVER agrees!', ruleZh: '过去分词 **fait** 在使役结构中**永不性数配合**（哪怕前面是女性主语 Rita s’est **fait** 或复数父母 se sont **fait**！）！' }
        ],
        sections: [
          {
            id: 'v5c8_causative_core',
            heading: '1. Causative "faire", Objects (1 vs. 2) & Pronoun Placement',
            headingZh: '一、faire + 原形、双宾语转换与代词位置',
            lead: 'Contrast doing something yourself ("Tex répare sa voiture ?") vs. paying/having a mechanic do it ("Tex fait réparer sa voiture au garage"). Notice the pronoun position rule too:',
            leadZh: '看准“亲自动手”和“叫人代办/迫使某人做某事”的区别，以及命令式肯定/否定代词位置对比：',
            cartoon: {
              src: './assets/tex_cartoons/virr7_chanter.gif',
              alt: 'Tex fait chanter la Marseillaise à Tammy',
              caption: 'Tex fait chanter Tammy. → Tex fait chanter la Marseillaise À Tammy ! · Corey: Fais-la chanter ! Joe-Bob: Ne la fais pas chanter !',
              captionZh: '双宾语：Tex 让 Tammy 唱《马赛曲》（la Marseillaise à Tammy）；代词位置：Fais-la chanter ! / Ne la fais pas chanter !'
            },
            table: {
              headers: ['Pattern', 'Tex Example', 'Grammar Note'],
              rows: [
                { cols: ['Subject acts alone', 'Tex répare sa voiture ?', 'Present tense direct action'], audio: 'Tex répare sa voiture ?' },
                { cols: ['Causative (any tense)', 'Tex fait / va faire / a fait réparer sa voiture au garage.', 'A mechanic fixes it!'], audio: 'Tex fait réparer sa voiture au garage.' },
                { cols: ['1 Object (DO)', 'Tex fait chanter Tammy. → Tex la fait chanter.', 'Tammy = direct object (la before fait!)'], audio: 'Tex fait chanter Tammy. Tex la fait chanter.' },
                { cols: ['2 Objects (DO + À IO)', 'Tex fait chanter la Marseillaise à Tammy.', 'Person performing action takes "à"!'], audio: 'Tex fait chanter la Marseillaise à Tammy.' },
                { cols: ['Affirmative vs. Negative Imp.', 'Corey : Fais-la chanter ! · Joe-Bob : Ne la fais pas chanter !', 'Pronoun follows ONLY affirmative imperative'], audio: 'Fais-la chanter ! Ne la fais pas chanter !' }
              ]
            }
          },
          {
            id: 'v5c8_se_faire',
            heading: '2. "se faire + infinitive" (Intentional vs. Accidental) & Invariable "fait"',
            headingZh: '二、se faire + 不定式与过去分词 fait 永不配合规则',
            lead: 'Warning! Even though "se faire" uses être in the passé composé, French grammar makes the past participle FAIT 100% INVARIABLE whenever it precedes an infinitive ("Rita s’est fait...", "Mes parents se sont fait..."):',
            leadZh: '死记硬背一条高阶考点：**se faire + 不定式**的过去分词永远写作 **fait**（哪怕 Rita 是女生、Mes parents 是复数，也绝不加 -e 或 -s！）：',
            cartoon: {
              src: './assets/tex_cartoons/virr7_ecraser.gif',
              alt: 'Tex: Mes parents se sont fait écraser par un camion',
              caption: 'Tex: Mes parents se sont fait écraser par un camion. (Inadvertent "se faire" — note invariable "fait"!)',
              captionZh: 'Tex：我父母被卡车碾压致死了（se sont **fait** écraser — 注意 fait 不加 s！）'
            },
            examples: [
              { fr: 'Rita s’est fait faire une robe noire pour l’enterrement de ses parents.', en: 'Rita had a black dress made (for herself) for her parents’ funeral.', zh: '主动为自己定做：se faire faire une robe（注意 fait 不变性数！）。', tag: 'Intentional se faire' },
              { fr: 'Tex : Mes parents se sont fait écraser par un camion.', en: 'Tex: My parents got run over (killed) by a truck.', zh: '意外遭殃/被动含义：se sont fait écraser par...（fait 仍然不加 s！）。', tag: 'Accidental se faire' }
            ],
            quickCheck: {
              prompt: 'Look at "Pauvre Tex, il ___ en France. (se faire arrêter — passé composé)" — wait, what about feminine "Tammy s’est ___ arrêter"?',
              promptZh: '在 "Tammy s’est ___ arrêter"（Tammy 被抓了）中，过去分词 fait 要加 -e 变成 faite 吗？',
              options: [
                'NO — it stays "fait" (invariable in causative constructions!).',
                'Yes — "faite" for Tammy.',
                'Yes — "faits" for plural.',
                'It becomes "faisant".'
              ],
              answerIdx: 0,
              explain: 'In ALL French causative faire/se faire + infinitive constructions, the past participle "fait" is ALWAYS invariable!',
              explainZh: '在使役结构（faire / se faire + 不定式）中，过去分词 **fait 永远不变**！这是法语语法重大改革及 B1/B2 必考点。'
            }
          }
        ],
        drills: [
          {
            id: 'd5c8_d1',
            kind: 'fib',
            prompt: 'Mes parents ___ une maison à la campagne. (faire construire — present, 2 words)',
            promptZh: 'Tex 原题 #1：我父母在乡下让人建了一栋房子（现在时，2 词）：',
            answers: ['font construire'],
            hint: 'ils font + infinitive construire.',
            audio: 'Mes parents font construire une maison à la campagne.',
            explain: 'mes parents (= ils) font construire.',
            explainZh: 'faire 用复数 font + 原形 construire。'
          },
          {
            id: 'd5c8_d2',
            kind: 'fib',
            prompt: 'Tex ___ les verbes aux étudiants. (faire étudier — present, 2 words)',
            promptZh: 'Tex 原题 #2：Tex 让学生们学习动词（现在时，2 词）：',
            answers: ['fait étudier', 'fait etudier'],
            hint: 'il fait + infinitive étudier (notice "aux étudiants" takes à because there are 2 objects!).',
            audio: 'Tex fait étudier les verbes aux étudiants.',
            explain: 'Tex fait étudier (les verbes = DO, aux étudiants = IO!).',
            explainZh: 'fait étudier（双宾语，所以学生前面用 aux！）。'
          },
          {
            id: 'd5c8_d3',
            kind: 'fib',
            prompt: 'Rita ___ la chambre aux enfants. (faire ranger — passé composé, 3 words)',
            promptZh: 'Tex 原题 #3：Rita 让孩子们整理了房间（复合过去时，3 词）：',
            answers: ['a fait ranger'],
            hint: 'a + invariable fait + ranger.',
            audio: 'Rita a fait ranger la chambre aux enfants.',
            explain: 'Rita a fait ranger.',
            explainZh: 'a fait ranger。'
          },
          {
            id: 'd5c8_d4',
            kind: 'fib',
            prompt: 'Nous ___ des fleurs à Fiona. (faire envoyer — simple future, 2 words)',
            promptZh: 'Tex 原题 #4：我们将派人给 Fiona 送花（简单将来时 ferons + envoyer，2 词）：',
            answers: ['ferons envoyer'],
            hint: 'future stem of faire is fer- → ferons + envoyer!',
            audio: 'Nous ferons envoyer des fleurs à Fiona.',
            explain: 'nous ferons envoyer (future stem fer- + -ons + inf.).',
            explainZh: 'faire 的将来时词干是 fer-：ferons envoyer。'
          },
          {
            id: 'd5c8_d5',
            kind: 'fib',
            prompt: 'Rita et ses enfants ___ leur maison. (faire vendre — futur proche, 3 words)',
            promptZh: 'Tex 原题 #5：Rita 和孩子们准备把房子卖掉（近将来时 vont + faire vendre，3 词）：',
            answers: ['vont faire vendre'],
            hint: 'aller (ils vont) + faire + vendre!',
            audio: 'Rita et ses enfants vont faire vendre leur maison.',
            explain: 'vont faire vendre.',
            explainZh: 'vont faire vendre。'
          },
          {
            id: 'd5c8_d6',
            kind: 'fib',
            prompt: 'Bette et Tammy, ___ tout de suite les valises ! (faire descendre — vous imperative, 2 words)',
            promptZh: 'Tex 原题 #6：Bette 和 Tammy，马上让人把行李箱搬下来！（vous 命令式，2 词）：',
            answers: ['faites descendre', 'Faites descendre'],
            hint: 'vous imperative of faire is FAITES (not *faisez!) + descendre.',
            audio: 'Bette et Tammy, faites descendre tout de suite les valises !',
            explain: 'faites descendre.',
            explainZh: '记住 faire 的 vous 形式是 faites → faites descendre！'
          },
          {
            id: 'd5c8_d7',
            kind: 'fib',
            prompt: 'Corey est très malade. Donc, il ___ le médecin. (faire venir — present, 2 words)',
            promptZh: 'Tex 原题 #7：Corey 病得很重，于是请医生过来（现在时，2 词）：',
            answers: ['fait venir'],
            hint: 'il fait + venir (= sends for the doctor).',
            audio: 'Il fait venir le médecin.',
            explain: 'faire venir le médecin = to send for / call in the doctor.',
            explainZh: 'fait venir（请医生上门）。'
          },
          {
            id: 'd5c8_d8',
            kind: 'fib',
            prompt: 'Joe-Bob, est-ce que tu ___ les cheveux ? (se faire couper — futur proche, 4 words!)',
            promptZh: 'Tex 原题 #8：Joe-Bob，你打算去剪头发吗（近将来时，4 词：vas + se faire couper 随 tu 变！）：',
            answers: ['vas te faire couper'],
            hint: 'tu vas + reflexive TE + faire + couper!',
            audio: 'Joe-Bob, est-ce que tu vas te faire couper les cheveux ?',
            explain: 'Remember reflexive pronoun agreement with "tu": vas TE faire couper!',
            explainZh: '注意自反代词随主语 tu 变为 te：vas te faire couper！'
          },
          {
            id: 'd5c8_d9',
            kind: 'fib',
            prompt: 'Je ___ une robe pour Tammy. (faire faire — present, 2 words)',
            promptZh: 'Tex 原题 #9：我找人给 Tammy 做了一条裙子（现在时，2 词）：',
            answers: ['fais faire'],
            hint: 'je fais + infinitive faire.',
            audio: 'Je fais faire une robe pour Tammy.',
            explain: 'je fais faire = I am having (something) made.',
            explainZh: 'fais faire = 找人做……'
          },
          {
            id: 'd5c8_d10',
            kind: 'fib',
            prompt: 'Tammy ___ des chansons acadiennes à Paw-Paw. (faire chanter — simple future, 2 words)',
            promptZh: 'Tex 原题 #10：Tammy 会请 Paw-Paw 唱阿卡迪亚民歌（简单将来时 fera + chanter，2 词）：',
            answers: ['fera chanter'],
            hint: '3rd sg. future stem fer- + -a → fera + chanter.',
            audio: 'Tammy fera chanter des chansons acadiennes à Paw-Paw.',
            explain: 'elle fera chanter.',
            explainZh: '第三人称单数将来时：fera chanter。'
          },
          {
            id: 'd5c8_d11',
            kind: 'fib',
            prompt: 'Pauvre Tex, il ___ en France. (se faire arrêter — passé composé, 4 words!)',
            promptZh: 'Tex 原题 #11：可怜的 Tex 在法国被逮捕了（se faire arrêter 复合过去时，4 词）：',
            answers: ["s'est fait arrêter", 's’est fait arrêter', "s'est fait arreter", 's’est fait arreter'],
            hint: 'se faire takes être + INVARIABLE "fait" + arrêter!',
            audio: 'Pauvre Tex, il s’est fait arrêter en France.',
            explain: 'il s’est fait arrêter = he got arrested (in France for selling T-shirts without a permit!).',
            explainZh: 's’est fait arrêter（被逮捕，fait 不变）。'
          },
          {
            id: 'd5c8_d12',
            kind: 'fib',
            prompt: 'Rita ___ une lettre aux enfants pour l’anniversaire de Paw-Paw. (faire écrire — passé composé, 3 words)',
            promptZh: 'Tex 原题 #12：Rita 让孩子们给 Paw-Paw 写了一封生日信（复合过去时，3 词）：',
            answers: ['a fait écrire', 'a fait ecrire'],
            hint: 'a + invariable fait + écrire.',
            audio: 'Rita a fait écrire une lettre aux enfants.',
            explain: 'Rita a fait écrire.',
            explainZh: 'a fait écrire。'
          }
        ],
        related: [
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_7', label: '5C.7 Negative & Past Infinitives' },
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_9', label: '5C.9 Transitivity: REDCAP & à Verbs' }
        ]
      },

      /* =========================================================
         PAGE 5C.9: TRANSITIVITY I — DEFINITIONS, REDCAP & FR-À VERBS (vti1 Part 1)
      ========================================================= */
      {
        id: 'v5c_9',
        code: '5C.9',
        group: 'Transitivity',
        shortTitle: 'Transitivity, REDCAP & French à Verbs',
        title: 'Transitive vs. Intransitive (Part 1): Direct/Indirect, REDCAP Mnemonic & French-à Verbs',
        titleZh: '动词及物性（上）：直接及物 vs 间接及物、REDCAP 零介词口诀与 8 个必带 à 动词',
        estMin: 4,
        summary: 'Distinguish transitive-direct (no preposition: "Tex entend le téléphone"), transitive-indirect (with preposition: "Joe-Bob parle à Tex"), and intransitive (no object at all: "Joe-Bob dort au volant"). Memorize the REDCAP 6 where French takes a DIRECT object while English adds at/to/for (Regarder, Écouter, Demander, Chercher, Attendre, Payer), plus 8 common verbs where French requires "à" while English takes a direct object (obéir à, répondre à, téléphoner à, ressembler à...).',
        summaryZh: '彻底搞懂“及物与不及物”，这是法语直接宾语代词（le/la/les）与间接宾语代词（lui/leur）分家的总开关！背熟两大必考清单：① **REDCAP 零介词六剑客**（**R**egarder 看、**É**couter 听、**D**emander 要求、**C**hercher 找、**A**ttendre 等、**P**ayer 付账 —— 法语全直接及物，绝不加介词！）；② **英语直接但法语必须加 à 的 8 大动词**（**obéir à, pardonner à, rendre visite à, renoncer à, répondre à, résister à, ressembler à, téléphoner à** —— 代词化全部变 lui / leur！）。',
        cheatSummary: [
          { label: 'REDCAP = Direct Object in French! (NO à/pour)', rule: 'Regarder (look AT), Écouter (listen TO), Demander (ask FOR), Chercher (look FOR), Attendre (wait FOR), Payer (pay FOR) → direct object, NO preposition!', ruleZh: 'REDCAP 六大动词在法语里全部是“直接及物”（直接加名词，中间绝不能加 à 或 pour）！' },
          { label: '8 French "à" Verbs (EN Zero Prep.)', rule: 'obéir à (obey), pardonner à (forgive), rendre visite à (visit person), renoncer à (give up), répondre à (answer), résister à (resist), ressembler à (resemble), téléphoner à (call).', ruleZh: '以下 8 个动词法语必须带 **à**（遇人变 lui/leur）：obéir à, pardonner à, rendre visite à, renoncer à, répondre à, résister à, ressembler à, téléphoner à。' }
        ],
        sections: [
          {
            id: 'v5c9_def_redcap',
            heading: '1. Three Types + Joe-Bob’s REDCAP Traffic Accident Story',
            headingZh: '一、三大分类与 Joe-Bob 交通罚单中的 REDCAP 口诀',
            lead: 'Remember: adverbs or prepositional phrases ("dort souvent au volant") do NOT make an intransitive verb transitive—dormir still has NO object! Now watch Joe-Bob use ALL SIX REDCAP verbs back-to-back in one hilarious police story:',
            leadZh: '读完 Joe-Bob 被交警拦下的搞笑自白，一次记住全部 6 个 REDCAP 直接及物动词（红色重点：一个介词都不加！）：',
            cartoon: {
              src: './assets/tex_cartoons/vti1_gendarme.gif',
              alt: 'Joe-Bob a un accident de voiture avec la police',
              caption: 'Joe-Bob: Je regardais les filles... J’écoutais la radio... le flic m’a demandé mes papiers... j’ai cherché ma carte... j’attends mon avocat... tu vas payer la contravention !',
              captionZh: 'REDCAP 六连击：看女生（regarder）、听广播（écouter）、要证件（demander）、找身份证（chercher）、等律师（attendre）、付罚单（payer）全不加介词！'
            },
            examples: [
              { fr: 'Transitive-direct: Tex entend le téléphone. · Tex mange un croissant.', en: 'Direct object receives the action with no preposition.', zh: '直接及物：动词直接加名词宾语。', tag: 'Direct' },
              { fr: 'Transitive-indirect: Joe-Bob parle à Tex. · Joe-Bob téléphone à Tex.', en: 'Object follows a preposition (à / de).', zh: '间接及物：必须经过介词（如 à）连接宾语。', tag: 'Indirect' },
              { fr: 'Intransitive: Joe-Bob dort souvent au volant.', en: 'No object at all (only adverb/place phrase!).', zh: '不及物：绝对不接宾语（au volant 是地点状语）。', tag: 'Intransitive' },
              { fr: 'REDCAP Story: Je regardais les filles · J’écoutais de la musique · Il m’a demandé mes papiers · J’ai cherché ma carte · J’attends mon avocat · Tu vas payer la contravention !', en: 'Look AT, listen TO, ask FOR, look FOR, wait FOR, pay FOR — ALL direct in French!', zh: '所有英语带 at / to / for 的这六个动词，法语全部直接接名词！', tag: 'REDCAP ×6' }
            ]
          },
          {
            id: 'v5c9_fr_a_verbs',
            heading: '2. Eight Verbs Requiring "à" in French (Direct in English)',
            headingZh: '二、法语必须加介词 à 的 8 大高频动词',
            lead: 'Flip side of REDCAP! In all 8 verbs below, English uses a bare noun, while French REQUIRES à (so when replaced by a pronoun, these take lui / leur!):',
            leadZh: '恰恰相反，下面这 8 个动词法语里必须带 à（接物通常用 y，接人则变间接宾语代词 lui / leur）：',
            table: {
              headers: ['Verb + à', 'English Equivalent', 'Verb + à', 'English Equivalent'],
              rows: [
                { cols: ['obéir à', 'to obey (someone/rule)', 'répondre à', 'to answer (a question/someone)'], audio: 'obéir à, répondre à' },
                { cols: ['pardonner à', 'to forgive / pardon', 'résister à', 'to resist (temptation)'], audio: 'pardonner à, résister à' },
                { cols: ['rendre visite à', 'to visit (a PERSON)', 'ressembler à', 'to resemble / look like'], audio: 'rendre visite à, ressembler à' },
                { cols: ['renoncer à', 'to give up / renounce', 'téléphoner à', 'to telephone / call'], audio: 'renoncer à, téléphoner à' }
              ]
            },
            quickCheck: {
              prompt: 'Look at "Joe-Bob ne répond jamais ___ questions du prof" vs. "J’attends ___ bus". What goes in each blank?',
              promptZh: '对比这两句："Joe-Bob ne répond jamais ___ questions" 与 "J’attends ___ bus"，应填：',
              options: [
                'aux (répondre À + les = aux) vs. le (attendre takes NO preposition!)',
                'les vs. au',
                'des vs. pour le',
                'à les vs. à le'
              ],
              answerIdx: 0,
              explain: 'répondre À (indirect → à + les = aux questions) vs. attendre (REDCAP direct → le bus, NO preposition!).',
              explainZh: 'répondre 属“法语带 à 动词”（à + les 缩合为 aux）；attendre 属 REDCAP（直接接 le bus）！'
            }
          }
        ],
        drills: [
          {
            id: 'd5c9_d1',
            kind: 'choice',
            prompt: 'In the acronym REDCAP (FR direct / EN preposition), what do all 6 letters stand for?',
            promptZh: '口诀 REDCAP 代表哪六个“法语直接及物（无介词）、英语却常加 at/to/for”的动词？',
            options: [
              'Regarder, Écouter, Demander, Chercher, Attendre, Payer',
              'Répondre, Entendre, Donner, Connaître, Aller, Partir',
              'Ressembler, Écrire, Dire, Choisir, Avoir, Prendre',
              'Rêver, Essayer, Devoir, Courir, Arriver, Pouvoir'
            ],
            answerIdx: 0,
            audio: 'regarder, écouter, demander, chercher, attendre, payer',
            explain: 'R-E-D-C-A-P = Regarder, Écouter, Demander, Chercher, Attendre, Payer!',
            explainZh: 'REDCAP：Regarder, Écouter, Demander, Chercher, Attendre, Payer！'
          },
          {
            id: 'd5c9_d2',
            kind: 'choice',
            prompt: 'Complete: "J’ai cherché ___ carte d’identité, mais je ne l’ai pas trouvée."',
            promptZh: 'Joe-Bob 故事填空：“我在找我的身份证”（chercher 属 REDCAP）：',
            options: ['ma (NO preposition!)', 'pour ma', 'à ma', 'de ma'],
            answerIdx: 0,
            audio: 'J’ai cherché ma carte d’identité.',
            explain: 'chercher = direct object → J’ai cherché ma carte d’identité.',
            explainZh: 'chercher 直接接宾语 ma carte d’identité，不加 pour！'
          },
          {
            id: 'd5c9_d3',
            kind: 'choice',
            prompt: 'Complete: "Tex, j’espère que tu vas payer ___ contravention !"',
            promptZh: 'Joe-Bob 故事填空：“Tex，希望你会替我交罚单”（payer 属 REDCAP）：',
            options: ['la (NO "pour"!)', 'pour la', 'à la', 'de la'],
            answerIdx: 0,
            audio: 'J’espère que tu vas payer la contravention.',
            explain: 'payer la contravention (in French, the thing paid for is a direct object!).',
            explainZh: 'payer + 被买/付的东西 直接及物（无 pour）：payer la contravention。'
          },
          {
            id: 'd5c9_d4',
            kind: 'fib',
            prompt: 'Visit a PERSON ("à"): Tex rend visite ___ Paw-Paw.',
            promptZh: '“拜访某人”（rendre visite 必须带哪个介词）：Tex rend visite ___ Paw-Paw.',
            answers: ['à', 'a'],
            hint: 'rendre visite + preposition + person.',
            audio: 'Tex rend visite à Paw-Paw.',
            explain: 'rendre visite À quelqu’un.',
            explainZh: '固定搭配：rendre visite à + 人。'
          },
          {
            id: 'd5c9_d5',
            kind: 'fib',
            prompt: 'Resemble someone ("à"): Trey ressemble beaucoup ___ Tex.',
            promptZh: '“长相/性格像某人”（ressembler 固定介词）：Trey ressemble beaucoup ___ Tex.',
            answers: ['à', 'a'],
            hint: 'ressembler takes à.',
            audio: 'Trey ressemble beaucoup à Tex.',
            explain: 'ressembler À quelqu’un.',
            explainZh: '固定搭配：ressembler à。'
          },
          {
            id: 'd5c9_d6',
            kind: 'fib',
            prompt: 'Obey someone ("à"): Les enfants obéissent ___ leur mère.',
            promptZh: '“听从/服从某人”（obéir 固定介词）：Les enfants obéissent ___ leur mère.',
            answers: ['à', 'a'],
            hint: 'obéir takes à.',
            audio: 'Les enfants obéissent à leur mère.',
            explain: 'obéir À quelqu’un.',
            explainZh: '固定搭配：obéir à。'
          },
          {
            id: 'd5c9_d7',
            kind: 'fib',
            prompt: 'Answer a question (à + la!): Tu réponds ___ question du prof ?',
            promptZh: '“回答问题”（à + la，两词）：Tu réponds ___ question du prof ?',
            answers: ['à la', 'a la'],
            hint: 'répondre à + la.',
            audio: 'Tu réponds à la question du prof ?',
            explain: 'répondre à la question.',
            explainZh: 'répondre à + 阴性单数：à la。'
          },
          {
            id: 'd5c9_d8',
            kind: 'fib',
            prompt: 'Wait for (REDCAP — NO pour!): J’attends ___ avocat au commissariat. (my lawyer — m.sg.)',
            promptZh: 'REDCAP 填空（绝不加 pour！）：我在警察局等我的律师（my lawyer，阳性单数）：',
            answers: ['mon'],
            hint: 'attendre takes direct "mon"!',
            audio: 'J’attends mon avocat au commissariat.',
            explain: 'attendre takes a direct object → J’attends mon avocat.',
            explainZh: 'attendre 不加介词，直接填物主词 mon。'
          },
          {
            id: 'd5c9_d9',
            kind: 'choice',
            prompt: 'In "Joe-Bob dort souvent au volant", why is "dort" still INTRANSITIVE despite "au volant"?',
            promptZh: '在 "Joe-Bob dort souvent au volant" 中，明明后面有 au volant，为什么 dormir 还是不及物动词？',
            options: [
              '"au volant" is an adverbial place phrase ("at the wheel"), NOT an object!',
              'Because dormir takes a direct object.',
              'Because souvent is a pronoun.',
              'Because au is a direct article.'
            ],
            answerIdx: 0,
            audio: 'Joe-Bob dort souvent au volant.',
            explain: 'Adverbs and prepositional place/time phrases modify the verb without acting as grammatical objects!',
            explainZh: '副词或时间/地点介词短语（au volant 在方向盘前）只是状语修饰，而不是动词宾语！'
          },
          {
            id: 'd5c9_d10',
            kind: 'choice',
            prompt: 'Which classification matches "Joe-Bob parle à Tex" vs. "Tex entend le téléphone"?',
            promptZh: '"Joe-Bob parle à Tex" 和 "Tex entend le téléphone" 分别属于哪种及物类型？',
            options: [
              'parle à Tex = transitive-indirect; entend le téléphone = transitive-direct',
              'Both are intransitive',
              'parle à Tex = transitive-direct; entend le téléphone = transitive-indirect',
              'Both are transitive-indirect'
            ],
            answerIdx: 0,
            audio: 'Joe-Bob parle à Tex. Tex entend le téléphone.',
            explain: 'Direct = no preposition (entend le téléphone); Indirect = preposition + object (parle à Tex).',
            explainZh: '有介词连接宾语的是间接及物（parle à Tex），无介词直接接名词的是直接及物（entend le téléphone）。'
          }
        ],
        related: [
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_8', label: '5C.8 Causative faire' },
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_10', label: '5C.10 Transitivity II (Auxiliaries & 12 Tex Drills)' }
        ]
      },

      /* =========================================================
         PAGE 5C.10: TRANSITIVITY II — AUXILIARY SWITCH & ALL 12 TEX DRILLS (vti1 Part 2)
      ========================================================= */
      {
        id: 'v5c_10',
        code: '5C.10',
        group: 'Transitivity',
        shortTitle: 'Dual Verbs (est sorti vs. a sorti) & Bivalent',
        title: 'Transitive vs. Intransitive (Part 2): Auxiliary Switch (être vs. avoir), Dual Verbs & Practice',
        titleZh: '动词及物性（下）：同词及物与不及物切换（est sorti vs a sorti）、双重宾语与 12 题实战',
        estMin: 4,
        summary: 'See why transitivity dictates passé composé auxiliaries: (1) implied objects (il chante / il chante Freebird) still use avoir; (2) motion verbs like marcher/courir are intransitive yet use avoir ("Tex a marché vite"); (3) dual-use Alamo verbs SWITCH auxiliaries—intransitive uses être ("Joe-Bob est sorti"), while transitive + direct object uses avoir ("Joe-Bob a sorti son camion")!; (4) English "return/leave" split into distinct transitive vs. intransitive French verbs; plus all 16 common bivalent verbs (DO + IO).',
        summaryZh: '真正把“及物性”用进复合过去时的四大机制：① **省去不说的隐含宾语**（*il chante*）仍按及物用 `avoir`；② 运动动词 `marcher / courir` 虽然不及物，但也用 `avoir`（*Tex a marché vite*）；③ **可及物可不及物的 Alamo 动词（如 sortir, monter, descendre, rentrer, retourner, passer）一换及物性就换助动词**：无宾语外出用 `être`（`est sorti`），后面带出名词东西用 `avoir`（`a sorti son camion` 把卡车开出来）！④ 掌握 16 个常见同时带直接+间接宾语的双价动词（donner/expliquer/prêter qqch à qqn）。',
        cheatSummary: [
          { label: 'Auxiliary Switch Trap (sortir / monter...)', rule: 'Intransitive (NO DO) → ÊTRE ("Joe-Bob est sorti", "la tension monte"). Transitive (+ DO) → AVOIR ("Joe-Bob a sorti son beau camion", "Joe-Bob monte l’escalier").', ruleZh: '同一词在复合过去时里的助动词切换：**不及物外出用 être**（est sorti）；**及物“拿出/搬上某物”用 avoir**（a sorti son camion / a monté les valises）！' },
          { label: 'EN Split + 16 Bivalent Verbs', rule: 'EN "to return" splits: retourner (intrans. go back) vs. rendre (trans. give back). Bivalent verbs take DO + à IO: donner, prêter, expliquer, montrer, promettre, envoyer, vendre, offrir...', ruleZh: '英语 return 在法语分两词（retourner 返回 vs. rendre 归还）；双价动词常用于“给某人某物”：donner, prêter, expliquer, envoyer, offrir...。' }
        ],
        sections: [
          {
            id: 'v5c10_dual_bivalent',
            heading: '1. Implied Objects, Motion with "avoir", Dual Auxiliaries & 16 Bivalent Verbs',
            headingZh: '一、隐含宾语、助动词切换对比与 16 个双价动词',
            lead: 'Even when an object is dropped because it is obvious ("Il chante" instead of "Il chante Freebird"), the verb remains conceptually transitive and uses avoir. Watch the dual-use switch on sortir and monter carefully:',
            leadZh: '看清下面两张表里的对比（尤其是 **est sorti** vs. **a sorti son beau camion**，绝对是中级法语最经典考点之一）：',
            table: {
              headers: ['Pattern', 'Intransitive Example', 'Transitive Example'],
              rows: [
                { cols: ['Implied vs. Stated Object', 'En voiture, Joe-Bob chante toujours.', 'En voiture, Joe-Bob chante toujours Freebird.'], audio: 'En voiture, Joe-Bob chante toujours Freebird.' },
                { cols: ['Dual sortir (Aux Switch!)', 'Le week-end passé, Joe-Bob est sorti. (être)', 'Le week-end passé, Joe-Bob a sorti son beau camion. (avoir!)'], audio: 'Joe-Bob est sorti. Joe-Bob a sorti son beau camion.' },
                { cols: ['Dual monter', 'La tension de Joe-Bob monte. (no object)', 'Joe-Bob monte l’escalier. (direct object l’escalier)'], audio: 'La tension monte. Joe-Bob monte l’escalier.' },
                { cols: ['Intransitive Motion + avoir', 'Tex a marché vite. Les enfants ont couru.', 'English splits: return (retourner/rendre) · leave (partir/quitter/laisser)'], audio: 'Tex a marché vite. Les enfants de Rita ont couru.' }
              ]
            },
            examples: [
              { fr: 'Tex donne des conseils à Joe-Bob. (Direct = des conseils; Indirect = à Joe-Bob)', en: 'Bivalent verb with both direct and indirect objects.', zh: '双价动词（同时接直接宾语 + à 间接宾语）典型例句。', tag: 'Bivalent' },
              { fr: 'All 16 Tex Bivalent Verbs: acheter, apporter, apprendre, demander, donner, écrire, emprunter, envoyer, expliquer, montrer, offrir, prêter, promettre, rendre, servir, vendre.', en: 'All 16 regularly take a thing (DO) + person (à/de IO). Note: emprunter/demander take à or de depending on person.', zh: 'Tex 精选 16 个双价动词（买/带/教/问/给/写/借入/寄/解释/展示/送/借出/承诺/还/端上/卖）。', tag: '16 Bivalent Verbs' }
            ],
            quickCheck: {
              prompt: 'Look at all 12 Tex exercise items below: how do you test whether a verb in a given sentence is Transitive vs. Intransitive?',
              promptZh: '判定具体句子里的动词“及物还是不及物”，最稳的一步检查法是：',
              options: [
                'Ask "verb WHAT / WHOM (or TO/FOR whom)?" — if an object receives the action (not just time/place/manner adverbs!), it is transitive.',
                'Check if it ends in -er or -ir.',
                'Check if the subject is plural.',
                'Check whether it has an adverb like souvent.'
              ],
              answerIdx: 0,
              explain: 'In Tex’s exercise, "Bette ronronne souvent" / "Edouard arrive en retard" / "Corey nage beaucoup" have ONLY adverbs or prepositional place/manner phrases (no object!), so they are intransitive!',
              explainZh: '区分“宾语”与“状语”：如 en retard（方式）、beaucoup（程度）、ensemble（一起）、sur l’autoroute（地点）全都是状语而不是动作宾语，因此这些句子都是不及物！'
            }
          }
        ],
        drills: [
          {
            id: 'd5c10_d1',
            kind: 'choice',
            prompt: 'Tex Exercise #1: « Tammy lit un roman. » — Transitive or Intransitive?',
            promptZh: 'Tex 原题 #1：Tammy lit un roman.（Tammy 在读一本小说）是及物还是不及物？',
            options: ['Transitive (un roman = direct object)', 'Intransitive'],
            answerIdx: 0,
            audio: 'Tammy lit un roman.',
            explain: '"un roman" receives the action of reading → Transitive!',
            explainZh: 'un roman 是直接宾语 → 及物（Transitive）。'
          },
          {
            id: 'd5c10_d2',
            kind: 'choice',
            prompt: 'Tex Exercise #2: « Tex écrit un poème. » — Transitive or Intransitive?',
            promptZh: 'Tex 原题 #2：Tex écrit un poème.（Tex 在写一首诗）：',
            options: ['Transitive (un poème = direct object)', 'Intransitive'],
            answerIdx: 0,
            audio: 'Tex écrit un poème.',
            explain: '"un poème" = direct object → Transitive.',
            explainZh: 'un poème 是直接宾语 → 及物（Transitive）。'
          },
          {
            id: 'd5c10_d3',
            kind: 'choice',
            prompt: 'Tex Exercise #3: « Tex et Tammy partent ensemble. » — Transitive or Intransitive?',
            promptZh: 'Tex 原题 #3：Tex et Tammy partent ensemble.（两人一起动身，注意 ensemble 是副词）：',
            options: ['Intransitive (ensemble = adverb, no object!)', 'Transitive'],
            answerIdx: 0,
            audio: 'Tex et Tammy partent ensemble.',
            explain: '"partir" is intransitive and "ensemble" ("together") is an adverb, not an object!',
            explainZh: 'ensemble 是“一起”（副词），没有任何宾语 → 不及物（Intransitive）。'
          },
          {
            id: 'd5c10_d4',
            kind: 'choice',
            prompt: 'Tex Exercise #4: « Bette ronronne souvent. » — Transitive or Intransitive?',
            promptZh: 'Tex 原题 #4：Bette ronronne souvent.（Bette 经常打呼噜，souvent 是副词）：',
            options: ['Intransitive (souvent = adverb, no object!)', 'Transitive'],
            answerIdx: 0,
            audio: 'Bette ronronne souvent.',
            explain: '"souvent" is an adverb; ronronner (to purr) takes no object → Intransitive.',
            explainZh: 'souvent 是频度副词，无宾语 → 不及物（Intransitive）。'
          },
          {
            id: 'd5c10_d5',
            kind: 'choice',
            prompt: 'Tex Exercise #5: « Edouard arrive en retard. » — Transitive or Intransitive?',
            promptZh: 'Tex 原题 #5：Edouard arrive en retard.（Edouard 迟到了，en retard 是状语）：',
            options: ['Intransitive (arriver takes no object; en retard = adverbial)', 'Transitive'],
            answerIdx: 0,
            audio: 'Edouard arrive en retard.',
            explain: '"arriver" is intransitive (uses être in passé composé; "en retard" is an adverbial phrase).',
            explainZh: 'arriver 是经典不及物动词（en retard 表方式/时间状态）→ 不及物（Intransitive）。'
          },
          {
            id: 'd5c10_d6',
            kind: 'choice',
            prompt: 'Tex Exercise #6: « Corey nage beaucoup. » — Transitive or Intransitive?',
            promptZh: 'Tex 原题 #6：Corey nage beaucoup.（Corey 游很多泳，beaucoup 是程度副词）：',
            options: ['Intransitive (beaucoup = adverb, no object!)', 'Transitive'],
            answerIdx: 0,
            audio: 'Corey nage beaucoup.',
            explain: '"nager" takes no object here ("beaucoup" is an adverb) → Intransitive.',
            explainZh: 'beaucoup 只是副词“很多”，并非名词宾语 → 不及物（Intransitive）。'
          },
          {
            id: 'd5c10_d7',
            kind: 'choice',
            prompt: 'Tex Exercise #7: « Tex prend un café. » — Transitive or Intransitive?',
            promptZh: 'Tex 原题 #7：Tex prend un café.（Tex 喝一杯咖啡）：',
            options: ['Transitive (un café = direct object)', 'Intransitive'],
            answerIdx: 0,
            audio: 'Tex prend un café.',
            explain: '"un café" = direct object → Transitive.',
            explainZh: 'un café 是直接宾语 → 及物（Transitive）。'
          },
          {
            id: 'd5c10_d8',
            kind: 'choice',
            prompt: 'Tex Exercise #8: « Fiona écoute la radio. » — Transitive or Intransitive?',
            promptZh: 'Tex 原题 #8：Fiona écoute la radio.（Fiona 在听广播）：',
            options: ['Transitive (REDCAP: la radio = direct object!)', 'Intransitive'],
            answerIdx: 0,
            audio: 'Fiona écoute la radio.',
            explain: 'Remember REDCAP! "écouter" is transitive-direct in French ("la radio" = direct object).',
            explainZh: 'écouter 属 REDCAP，直接接宾语 la radio → 及物（Transitive）。'
          },
          {
            id: 'd5c10_d9',
            kind: 'choice',
            prompt: 'Tex Exercise #9: « Tammy achète une nouvelle robe. » — Transitive or Intransitive?',
            promptZh: 'Tex 原题 #9：Tammy achète une nouvelle robe.（Tammy 买了一件新连衣裙）：',
            options: ['Transitive (une nouvelle robe = direct object)', 'Intransitive'],
            answerIdx: 0,
            audio: 'Tammy achète une nouvelle robe.',
            explain: '"une nouvelle robe" = direct object → Transitive.',
            explainZh: 'une nouvelle robe 是直接宾语 → 及物（Transitive）。'
          },
          {
            id: 'd5c10_d10',
            kind: 'choice',
            prompt: 'Tex Exercise #10: « Corey aime l’insecticide. » — Transitive or Intransitive?',
            promptZh: 'Tex 原题 #10：Corey aime l’insecticide.（Corey 喜欢杀虫剂）：',
            options: ['Transitive (l’insecticide = direct object)', 'Intransitive'],
            answerIdx: 0,
            audio: 'Corey aime l’insecticide.',
            explain: '"l’insecticide" = direct object → Transitive.',
            explainZh: 'l’insecticide 是直接宾语 → 及物（Transitive）。'
          },
          {
            id: 'd5c10_d11',
            kind: 'choice',
            prompt: 'Tex Exercise #11: « Tex réfléchit souvent. » — Transitive or Intransitive?',
            promptZh: 'Tex 原题 #11：Tex réfléchit souvent.（Tex 经常思考）：',
            options: ['Intransitive (souvent = adverb, no object here)', 'Transitive'],
            answerIdx: 0,
            audio: 'Tex réfléchit souvent.',
            explain: 'No object here (souvent is an adverb) → Intransitive.',
            explainZh: '此处无任何宾语（souvent 为副词）→ 不及物（Intransitive）。'
          },
          {
            id: 'd5c10_d12',
            kind: 'choice',
            prompt: 'Tex Exercise #12: « Les parents de Tex sont morts sur l’autoroute. » — Transitive or Intransitive?',
            promptZh: 'Tex 原题 #12：Les parents de Tex sont morts sur l’autoroute.（sur l’autoroute 是地点状语）：',
            options: ['Intransitive (mourir takes être and no object!)', 'Transitive'],
            answerIdx: 0,
            audio: 'Les parents de Tex sont morts sur l’autoroute.',
            explain: '"mourir" (to die) is intransitive and takes être; "sur l’autoroute" is a place phrase → Intransitive!',
            explainZh: 'mourir 用 être 且不能带动作宾语，sur l’autoroute 是地点状语 → 不及物（Intransitive）。'
          }
        ],
        related: [
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_9', label: '5C.9 Transitivity I (REDCAP & à Verbs)' },
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_11', label: '5C.11 Present Participle & Gérondif' }
        ]
      },

      /* =========================================================
         PAGE 5C.11: PRESENT PARTICIPLE & GÉRONDIF (vpp1.html)
      ========================================================= */
      {
        id: 'v5c_11',
        code: '5C.11',
        group: 'Present Participle',
        shortTitle: 'Present Participle (-ant) & en / tout en',
        title: 'Present Participle (-ant) & Gerund (en + -ant): Formation, 3 Irregulars & Traps',
        titleZh: '现在分词（-ant）与副动词（en + -ant）：nous 词干法则、三大不规则与 -ing 辨析',
        estMin: 4,
        summary: 'Form ANY regular present participle in 1 second: take the NOUS present tense stem, drop -ons, and add invariable -ant (chantant, finissant, buvant, suivant, commençant, mangeant, se lavant). Only THREE verbs are irregular: être → étant, avoir → ayant, savoir → sachant! Use bare -ant to replace "qui" / "puisque" clauses; use "en + -ant" (or "tout en + -ant") for simultaneous/means actions by the SAME subject; and watch English "-ing" traps (use infinitive after avant de & être en train de!).',
        summaryZh: '第五章最终章收官掌握法语现在分词！① **构成万能公式**：写出陈述式现在时 **nous** 变位，去掉 `-ons`，加上**永远不变形**的 **`-ant`**（包括 *finissant, buvant, commençant, mangeant, se lavant*！）；② **全法语唯独三个不规则**：**être → étant**、**avoir → ayant**、**savoir → sachant**；③ 句法三大功用：替代 `qui` 或 `puisque` 从句；搭配 **en** 组成副动词（gérondif），表**同一主语同时做两件事（while）或通过某种方式（by）**，或用 **tout en**（注意 `/t/ 联诵`）强调同时/转折；④ 英语 `-ing` 避坑：*avant de* 和 *être en train de* 后面仍用原形！',
        cheatSummary: [
          { label: 'nous -ons → -ant + ONLY 3 Irregulars', rule: 'Take nous form, drop -ons, add -ant (keeps -ss-, -ç-, -ge- automatically!): finissant, commençant, mangeant, buvant. Irregulars: étant, ayant, sachant!', ruleZh: 'nous 去 -ons 加 -ant（自动保留 ss / ç / ge：finissant, commençant, mangeant, buvant）。唯一三大不规则：**étant / ayant / sachant**！' },
          { label: 'en / tout en + -ant vs. English -ing Trap', rule: 'en + -ant = while/by (SAME subject!). tout en + -ant = all the while (t liaison!). English -ing after "before" or "be ...ing" = infinitive ("avant de venir", "est en train de changer").', ruleZh: '同主语同时做/凭借：**en + -ant**（或加强语气 **tout en**）。切忌把英语的 "before coming / is changing" 翻成现在分词，法语分别用 **avant de venir** 与 **est en train de changer**！' }
        ],
        sections: [
          {
            id: 'v5c11_formation',
            heading: '1. Formation (nous Stem + -ant) & the ONLY 3 Irregulars',
            headingZh: '一、现在分词构成（nous 词干）与三大不规则',
            lead: 'Why does the "nous" rule automatically handle -iss-, -ç-, -ge-, and boire/suivre? Because nous finissons, nous commençons, nous mangeons, nous buvons, nous suivons ALREADY carry those exact stem adjustments! Only être, avoir, and savoir deviate:',
            leadZh: '只要找准 **nous** 的词干，所有词干拼写特征（`finiss- / commenç- / mange- / buv-`）全都会自动继承下来！唯一要死记的就是 `étant, ayant, sachant`：',
            table: {
              headers: ['Verb (nous form)', 'Present Participle', 'Category'],
              rows: [
                { cols: ['chanter (nous chantons) · finir (nous finissons)', 'chantant · finissant', 'Regular -er / -ir (-iss- kept!)'], audio: 'chantant, finissant' },
                { cols: ['lire (nous lisons) · boire (nous buvons) · suivre (nous suivons)', 'lisant · buvant · suivant', 'Regular -re / irregular stem from nous'], audio: 'lisant, buvant, suivant' },
                { cols: ['commencer (nous commençons) · manger (nous mangeons)', 'commençant · mangeant', 'Keeps ç and e automatically!'], audio: 'commençant, mangeant' },
                { cols: ['se laver (nous nous lavons)', 'se lavant', 'Pronominal base uses se!'], audio: 'se lavant' },
                { cols: ['être · avoir · savoir (ONLY 3 IRREGULARS!)', 'étant · ayant · sachant', 'Memorize all three!'], audio: 'étant, ayant, sachant' }
              ]
            }
          },
          {
            id: 'v5c11_uses_traps',
            heading: '2. Uses (qui / puisque / en / tout en) & English -ing Traps',
            headingZh: '二、替代从句、en / tout en 副动词与英语 -ing 陷阱',
            lead: 'Remember: as a verb/gerund, the present participle is 100% INVARIABLE (note: when used purely as a descriptive adjective like "animaux fascinants" from 5A.2, it agrees—as a verb form it NEVER agrees!). Enjoy Tex’s convertible flirting scene:',
            leadZh: '注意：**现在分词与 `en + -ant` 作为动词结构时词尾永不配合**（只有纯粹转化作形容词时才配合）；另外千万别漏掉 `tout en` 中间的 /t/ 联诵（读作 `/tu tɑ̃/`）：',
            cartoon: {
              src: './assets/tex_cartoons/vpp1_drague.gif',
              alt: 'Tex drague les filles en conduisant sa décapotable',
              caption: 'Tex drague les filles en conduisant sa décapotable. Tex drague Bette tout en pensant à Tammy !',
              captionZh: 'Tex 一边开敞篷车一边撩妹（en conduisant）；撩 Bette 的同时心里还想着 Tammy（tout en pensant à Tammy）！'
            },
            examples: [
              { fr: 'Les tatous ayant une voiture ont beaucoup de succès (= qui ont une voiture).', en: 'Armadillos who have a car are very successful with girls.', zh: '单独使用现在分词（此处用不规则 ayant），等价于关系从句 qui ont...。', tag: '= qui' },
              { fr: 'Tammy étant absente, je peux t’emmener faire une balade en voiture, Bette (= Puisque Tammy est absente).', en: 'Since Tammy is not here, I can take you for a ride, Bette.', zh: '独立分句解释原因（用不规则 étant），等价于 puisque 从句！', tag: '= puisque' },
              { fr: 'Tex conduit en écoutant la radio. · Tex siffle tout en conduisant. · Tex drague Bette tout en pensant à Tammy.', en: 'Tex drives while listening to the radio. · Tex whistles and drives at the same time (note /t/ liaison in tout en!).', zh: '同主语同时做/凭借用 **en + -ant**；加强“一面…同时又…”或轻微对立用 **tout en + -ant**。', tag: 'en / tout en' },
              { fr: 'EN -ing traps: Avant de venir au Texas (NOT *avant venant) · Mais Tex est en train de changer d’avis.', en: 'Before coming to Texas... · But Tex is changing his mind.', zh: '英语 "before coming" → **avant de venir**；进行时 "is changing" → **est en train de changer**！', tag: 'No -ing Trap!' }
            ],
            quickCheck: {
              prompt: 'Look at "nous avons", "nous sommes", "nous savons". Why can’t you use the "nous -ons" rule on être, avoir, savoir?',
              promptZh: '为什么不能直接套用 "nous 去 -ons 加 -ant" 的规则来造 être, avoir, savoir 的现在分词？',
              options: [
                'Those 3 are the ONLY irregular present participles in French: étant, ayant, sachant!',
                'Because only -er verbs follow the nous rule.',
                'Because savoir drops -ons to become *savant as a verb.',
                'Because être becomes *sommant.'
              ],
              answerIdx: 0,
              explain: 'Literally EVERY other verb in French (even faire → faisant, prendre → prenant, aller → allant, boire → buvant!) obeys nous -ons → -ant—EXCEPT étant, ayant, sachant!',
              explainZh: '全法语除了 **étant（être）、ayant（avoir）、sachant（savoir）** 这三颗独苗之外，其余全部动词百分百遵循“nous 去 -ons 加 -ant”！'
            }
          }
        ],
        drills: [
          {
            id: 'd5c11_d1',
            kind: 'fib',
            prompt: 'Tex mange en ___ la poésie. (écrire)',
            promptZh: 'Tex 原题 #1：Tex 一边吃东西一边写诗（écrire → nous écrivons）：',
            answers: ['écrivant', 'ecrivant'],
            hint: 'nous écrivons → drop -ons + -ant!',
            audio: 'Tex mange en écrivant la poésie.',
            explain: 'nous écrivons → écrivant.',
            explainZh: '由 nous écrivons 去掉 -ons 加 -ant → écrivant。'
          },
          {
            id: 'd5c11_d2',
            kind: 'fib',
            prompt: 'Tammy chante en ___ dans le parc. (se promener — keep "se"!)',
            promptZh: 'Tex 原题 #2：Tammy 一边在公园散步一边唱歌（代动词现在分词保留 se！）：',
            answers: ['se promenant'],
            hint: 'pronominal participle uses "se" + promenant!',
            audio: 'Tammy chante en se promenant dans le parc.',
            explain: 'Even when Tammy is the subject, a pronominal verb after "en" uses "se" + -ant (see Tex model "se lavant"!) → se promenant.',
            explainZh: '与不定式不同，代动词现在分词或加 en 后面通常保留 **se**（参见 Tex 范例 se lavant）→ se promenant！'
          },
          {
            id: 'd5c11_d3',
            kind: 'fib',
            prompt: 'Tex et Edouard boivent en ___ le match de foot. (regarder)',
            promptZh: 'Tex 原题 #3：Tex 和 Edouard 一边看足球赛一边喝酒（regarder）：',
            answers: ['regardant'],
            hint: 'nous regardons → regardant.',
            audio: 'Tex et Edouard boivent en regardant le match de foot.',
            explain: 'regardant.',
            explainZh: 'regardons → regardant。'
          },
          {
            id: 'd5c11_d4',
            kind: 'fib',
            prompt: 'Fiona écoute de la musique en ___ ses devoirs. (faire — watch "nous faisons" stem!)',
            promptZh: 'Tex 原题 #4：Fiona 一边听音乐一边做作业（faire → nous faisons）：',
            answers: ['faisant'],
            hint: 'nous faisons (NOT *fe-) → drop -ons + -ant!',
            audio: 'Fiona écoute de la musique en faisant ses devoirs.',
            explain: 'nous faisons → faisant (pronounced /fəzɑ̃/!).',
            explainZh: '由 nous faisons 去 -ons 加 -ant → faisant（注意读音也是 /fəzɑ̃/！）。'
          },
          {
            id: 'd5c11_d5',
            kind: 'fib',
            prompt: 'Corey et Joe-Bob regardent la télé en ___. (étudier)',
            promptZh: 'Tex 原题 #5：Corey 和 Joe-Bob 一边学习一边看电视（étudier）：',
            answers: ['étudiant', 'etudiant'],
            hint: 'nous étudions → étudiant.',
            audio: 'Corey et Joe-Bob regardent la télé en étudiant.',
            explain: 'nous étudions → étudiant.',
            explainZh: 'étudions → étudiant（正好也是名词“大学生”一词同源！）。'
          },
          {
            id: 'd5c11_d6',
            kind: 'fib',
            prompt: 'Joe-Bob siffle en ___ de la guitare. (jouer)',
            promptZh: 'Tex 原题 #6：Joe-Bob 一边弹吉他一边吹口哨（jouer）：',
            answers: ['jouant'],
            hint: 'nous jouons → jouant.',
            audio: 'Joe-Bob siffle en jouant de la guitare.',
            explain: 'jouant.',
            explainZh: 'jouons → jouant。'
          },
          {
            id: 'd5c11_d7',
            kind: 'fib',
            prompt: 'Edouard parle aux clients en ___ les repas. (servir — watch nous servons!)',
            promptZh: 'Tex 原题 #7：Edouard 一边端上饭菜一边和客人聊天（servir → nous servons）：',
            answers: ['servant'],
            hint: 'nous servons → servant.',
            audio: 'Edouard parle aux clients en servant les repas.',
            explain: 'servir = nous servons (just like partir/sortir) → servant.',
            explainZh: 'servir 的 nous 词干是 servons（保留 v），因此现在分词是 servant。'
          },
          {
            id: 'd5c11_d8',
            kind: 'fib',
            prompt: 'Bette embrasse Tex en ___. (sortir — watch nous sortons!)',
            promptZh: 'Tex 原题 #8：Bette 出门时亲了 Tex 一口（sortir → nous sortons）：',
            answers: ['sortant'],
            hint: 'nous sortons → sortant.',
            audio: 'Bette embrasse Tex en sortant.',
            explain: 'nous sortons → sortant.',
            explainZh: 'sortons → sortant。'
          },
          {
            id: 'd5c11_d9',
            kind: 'fib',
            prompt: 'Tex réfléchit en ___ la bouteille de vin. (ouvrir)',
            promptZh: 'Tex 原题 #9：Tex 一边开葡萄酒瓶一边思考（ouvrir → nous ouvrons）：',
            answers: ['ouvrant'],
            hint: 'nous ouvrons → ouvrant.',
            audio: 'Tex réfléchit en ouvrant la bouteille de vin.',
            explain: 'nous ouvrons → ouvrant.',
            explainZh: 'ouvrons → ouvrant。'
          },
          {
            id: 'd5c11_d10',
            kind: 'fib',
            prompt: 'Tammy lit en ___ l’escalier. (descendre)',
            promptZh: 'Tex 原题 #10：Tammy 一边下楼梯一边看书（descendre → nous descendons）：',
            answers: ['descendant'],
            hint: 'nous descendons → descendant.',
            audio: 'Tammy lit en descendant l’escalier.',
            explain: 'nous descendons → descendant.',
            explainZh: 'descendons → descendant。'
          },
          {
            id: 'd5c11_d11',
            kind: 'fib',
            prompt: 'Corey tremble en ___ la vérité. (dire — watch nous disons!)',
            promptZh: 'Tex 原题 #11：Corey 说真话的时候浑身发抖（dire → nous disons）：',
            answers: ['disant'],
            hint: 'nous disons → drop -ons + -ant!',
            audio: 'Corey tremble en disant la vérité.',
            explain: 'nous disons → disant.',
            explainZh: 'disons → disant。'
          },
          {
            id: 'd5c11_d12',
            kind: 'fib',
            prompt: 'Bette se fâche en ___ Tammy. (entendre)',
            promptZh: 'Tex 原题 #12：Bette 一听到 Tammy 的声音就来气（entendre）：',
            answers: ['entendant'],
            hint: 'nous entendons → entendant.',
            audio: 'Bette se fâche en entendant Tammy.',
            explain: 'entendant! Congratulations—you have completed ALL 3 parts (5A, 5B, 5C / 28 Tex pages) of Chapter 5 Verbs!',
            explainZh: 'entendant！恭喜你全部通关 Tex 第五章（5A + 5B + 5C 完整 28 篇动词体系）！'
          }
        ],
        related: [
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_1', label: 'Back to 5C.1 Pronominal Verbs' },
          { chapterId: 'ch5_negation', pageId: 'neg_5_1', label: 'Continue to Ch 6 Negation' }
        ]
      }
    ]
  });
})();
