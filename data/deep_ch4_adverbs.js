(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch4_adverbs',
    code: 'Ch 3',
    level: 'A2',
    category: 'adverbs',
    icon: '⚡',
    title: 'Adverbs (Les Adverbes)',
    titleZh: '第三章 · 法语副词全掌握',
    subtitle: 'Tex-style slow-paced deep mastery: 7 bite-sized pages covering -ment formation, present & past tense placement, comparatives/superlatives, il y a (ago) vs. en, and tôt/tard vs. en retard — with 8 cartoons & 80 drills.',
    subtitleZh: '对标 Tex 深度拆分为 7 个轻松小页：副词定义与常用库、-ment 构成法则、现在时与复合过去时位置、比较级与最高级、il y a（以前）与 tôt/en retard 辨析，配 8 张原版卡通与 80 题专练。',
    pages: [
      /* =========================================================
         PAGE 4.1: INTRO TO ADVERBS & COMMON ADVERB BANK
      ========================================================= */
      {
        id: 'adv_4_1',
        code: '3.1',
        group: 'Intro to Adverbs',
        shortTitle: 'What Is an Adverb?',
        title: 'Introduction to Adverbs: What They Modify & Core Adverb Bank',
        titleZh: '副词入门：副词修饰什么（与形容词对比）+ 5 类高频基础副词',
        estMin: 3,
        summary: 'Understand how adverbs qualify verbs, adjectives, and other adverbs (never nouns!), spot why French never mixes up "bon" (adj.) and "bien" (adv.), and build your 5-category starter adverb bank.',
        summaryZh: '建立清晰界限：形容词修饰名词、副词修饰动词/形容词/其他副词且词形永不变；同时掌握方式、时间、地点、程度、顺序五大常用副词库。',
        cheatSummary: [
          { label: 'What Adverbs Do (Invariable!)', rule: 'Adverbs NEVER change for gender or number. They answer how? how much? when? where? and modify verbs (Écoute attentivement), adverbs (trop lentement), or adjectives (extrêmement silencieux).', ruleZh: '副词永远不变形（无阴阳性单复数）。它修饰动词、其他副词或形容词，回答怎么、多少、何时、何地。' },
          { label: 'Adverb vs. Adjective', rule: 'Unlike casual English ("writes real good"), French strictly separates them: adjective modifies a noun ("La poésie de Tex est bonne"), adverb modifies a verb ("Tex écrit bien").', ruleZh: '法语不混用形容词和副词：“诗很好（修饰名词）”用 bonne；“写得好（修饰动词）”必须用 bien！' }
        ],
        sections: [
          {
            id: 'adv_role',
            heading: '1. What Adverbs Modify + Strict French Adjective vs. Adverb Rule',
            headingZh: '一、副词的修饰对象（与形容词严格区分）',
            lead: 'An adverb qualifies the action of a verb—or fine-tunes an adjective or another adverb. Many French adverbs end in -ment (just like English -ly). Crucially, casual English often swaps adjectives for adverbs ("Tex writes real good"), whereas French strictly requires the adverb form for verbs!',
            leadZh: '许多法语副词像英语 -ly 一样以 -ment 结尾（lentement 慢慢地、attentivement 专心地）。口语英语常把形容词当副词使（"writes good"），但法语必须严格分开：修饰名词用形容词（bonne），修饰动词必须用副词（bien）！',
            cartoon: {
              src: './assets/tex_cartoons/adv1_ecrit.gif',
              alt: 'Tex écrit bien',
              caption: 'Tex écrit bien (adverb) vs. La poésie de Tex est bonne (adjective).',
              captionZh: 'Tex 写得好（副词 bien）vs Tex 的诗很好（形容词 bonne）。'
            },
            examples: [
              { fr: 'Écoute attentivement. / lentement / souvent', en: 'Listen carefully. (verb modified by adverb) · slowly · often', zh: '专心听。（副词修饰动词 écoute）· 慢慢地 · 经常', tag: 'Modifies Verb' },
              { fr: 'trop lentement / extrêmement silencieux', en: 'too slowly (adv. modifies adv.) · extremely quiet (adv. modifies adj.)', zh: '太慢了（修饰副词）· 极其安静（修饰形容词）', tag: 'Modifies Adv./Adj.' },
              { fr: 'Tex écrit bien. vs. La poésie de Tex est bonne.', en: 'Tex writes well (adverb modifies verb) vs. Tex’s poetry is good (adjective modifies noun).', zh: 'Tex 写得好（bien 修饰动词）vs Tex 的诗很好（bonne 修饰名词）。', tag: 'bien vs. bonne' }
            ]
          },
          {
            id: 'adv_bank',
            heading: '2. Tex’s 5-Category High-Frequency Adverb Bank',
            headingZh: '二、Tex 分类必备高频副词库（不用记变位，全都是不变词！）',
            lead: 'Because adverbs are 100% invariable, learning these core everyday words pays off immediately across listening, reading, and speaking:',
            leadZh: '所有副词都永远不用考虑阴阳性单复数配合，直接整词记牢即可：',
            table: {
              headers: ['Category', 'Key French Adverbs', 'Meaning'],
              rows: [
                { cols: ['Manner', 'bien · mal · vite · attentivement · lentement', 'well · badly · quickly · carefully · slowly'], audio: 'bien, mal, vite, attentivement, lentement' },
                { cols: ['Time', 'souvent · quelquefois · toujours · jamais · tôt · tard · bientôt · déjà · aujourd’hui · hier · maintenant · demain', 'often · sometimes · always · never · early · late · soon · already · today · yesterday · now · tomorrow'], audio: 'souvent, toujours, jamais, bientôt, déjà' },
                { cols: ['Place', 'dedans · dehors · ici · là · partout · quelque part', 'inside · outside · here · there · everywhere · somewhere'], audio: 'dedans, dehors, ici, là, partout' },
                { cols: ['Degree', 'beaucoup · très · trop · assez · peu · peut-être', 'a lot · very · too much · enough · little · maybe'], audio: 'beaucoup, très, trop, assez, peu' },
                { cols: ['Sequence', 'd’abord · puis · alors · donc · enfin', 'at first · then · so/then · thus · finally'], audio: 'd’abord, puis, alors, donc, enfin' }
              ]
            },
            quickCheck: {
              prompt: 'Pick the sentence where both "bonne" and "bien" are used correctly:',
              promptZh: '选出 bonne（形容词）和 bien（副词）都用对的句子：',
              options: [
                'Édouard cuisine bien et sa soupe est bonne.',
                'Édouard cuisine bonne et sa soupe est bien.',
                'Édouard cuisine bonnes.',
                'La cuisine est biens.'
              ],
              answerIdx: 0,
              explain: '"cuisine" is a verb → needs adverb "bien"; "sa soupe" is a feminine noun → needs feminine adjective "bonne".',
              explainZh: '“做菜”是动词，用副词 bien；“他的汤”是阴性名词，用形容词 bonne！'
            }
          }
        ],
        drills: [
          {
            id: 'd41_d1',
            kind: 'choice',
            prompt: 'Do French adverbs EVER add -e or -s to agree with a feminine/plural subject?',
            promptZh: '法语副词会因为主语是女性或复数而加 -e 或 -s 吗？',
            options: ['No — adverbs are 100% invariable.', 'Yes, always.', 'Only with plural verbs.', 'Only when ending in -ment.'],
            answerIdx: 0,
            audio: 'Tammy et Fiona chantent bien.',
            explain: 'Adverbs are strictly invariable (never add -e or -s!).',
            explainZh: '绝不变化！所有法语副词词形固定不变。'
          },
          {
            id: 'd41_d2',
            kind: 'choice',
            prompt: 'Which word modifies the verb in: "Il écoute attentivement."?',
            promptZh: '在 "Il écoute attentivement." 中，哪个词是副词？',
            options: ['attentivement (carefully)', 'écoute', 'Il', 'none'],
            answerIdx: 0,
            audio: 'Il écoute attentivement.',
            explain: '"attentivement" (-ment) modifies how he listens.',
            explainZh: '以 -ment 结尾的 "attentivement"（专心地）修饰动词 écoute。'
          },
          {
            id: 'd41_d3',
            kind: 'choice',
            prompt: 'What does "trop lentement" illustrate grammatically?',
            promptZh: '短语 "trop lentement"（太慢了）体现了副词的什么用法？',
            options: ['An adverb (trop) modifying another adverb (lentement)', 'An adjective modifying a noun', 'A verb modifying a noun', 'A preposition'],
            answerIdx: 0,
            audio: 'Il parle trop lentement.',
            explain: '"trop" is a degree adverb modifying the manner adverb "lentement".',
            explainZh: '程度副词 trop 在这里修饰方式副词 lentement。'
          },
          {
            id: 'd41_d4',
            kind: 'choice',
            prompt: 'Which pair means "inside / outside"?',
            promptZh: '地点副词“在里面 / 在外面”对应哪一对？',
            options: ['dedans / dehors', 'tôt / tard', 'ici / partout', 'd’abord / enfin'],
            answerIdx: 0,
            audio: 'dedans, dehors',
            explain: '"dedans" = inside; "dehors" = outside.',
            explainZh: 'dedans（在里面）、dehors（在外面）。'
          },
          {
            id: 'd41_d5',
            kind: 'fib',
            prompt: 'Adverb modifying verb: Tex écrit ___ ! (well)',
            promptZh: '副词填空：Tex 写得“好”（修饰动词 écrit）。',
            answers: ['bien'],
            hint: 'Adverb equivalent of "bon".',
            audio: 'Tex écrit bien !',
            explain: '"bien" modifies the verb "écrit".',
            explainZh: '修饰动词 écrit 用副词 "bien"。'
          },
          {
            id: 'd41_d6',
            kind: 'fib',
            prompt: 'Adjective modifying noun: La poésie de Tex est ___. (good — f.sg.)',
            promptZh: '形容词填空：Tex 的诗很“好”（修饰阴性名词 poésie）。',
            answers: ['bonne'],
            hint: 'Feminine adjective agreeing with "la poésie"!',
            audio: 'La poésie de Tex est bonne.',
            explain: '"la poésie" is feminine singular → adjective "bonne".',
            explainZh: '修饰阴性名词 poésie 必须用形容词阴性 "bonne"。'
          },
          {
            id: 'd41_d7',
            kind: 'fib',
            prompt: 'Fill the sequence adverb ("at first ... then ... finally"): ___ il lit le texte, puis il répond.',
            promptZh: '顺序副词填空：“首先”他阅读课文，然后回答问题。',
            answers: ["D'abord", "d'abord", 'D’abord', 'd’abord'],
            hint: 'd’abord = at first / first.',
            audio: 'D’abord il lit le texte, puis il répond.',
            explain: '"D’abord" introduces the first step.',
            explainZh: '“首先” = "D’abord"。'
          },
          {
            id: 'd41_d8',
            kind: 'fib',
            prompt: 'Fill the degree adverb: Édouard cuisine ___ bien ! (very)',
            promptZh: '程度副词填空：Édouard 做饭“非常”棒（修饰副词 bien）！',
            answers: ['très', 'tres'],
            hint: 'very = très.',
            audio: 'Édouard cuisine très bien !',
            explain: '"très" modifies adverbs and adjectives ("très bien").',
            explainZh: '修饰形容词或副词的“非常”用 "très"。'
          },
          {
            id: 'd41_d9',
            kind: 'fib',
            prompt: 'Fill the place adverb: Il y a du soleil ___. (everywhere)',
            promptZh: '地点副词填空：“到处”都有阳光。',
            answers: ['partout'],
            hint: 'par + tout = everywhere.',
            audio: 'Il y a du soleil partout.',
            explain: '"partout" = everywhere.',
            explainZh: '“到处” = "partout"。'
          },
          {
            id: 'd41_d10',
            kind: 'fib',
            prompt: 'Fill the time adverb: Nous avons ___ fini la leçon ! (already)',
            promptZh: '时间副词填空：我们“已经”学完这一课了！',
            answers: ['déjà', 'deja'],
            hint: 'already = déjà.',
            audio: 'Nous avons déjà fini la leçon !',
            explain: '"déjà" = already.',
            explainZh: '“已经” = "déjà"。'
          }
        ],
        related: [
          { chapterId: 'ch4_adverbs', pageId: 'adv_4_2', label: '3.2 Forming -ment Adverbs' },
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_9', label: '4.9 bon vs. bien' }
        ]
      },

      /* =========================================================
         PAGE 4.2: FORMING REGULAR & PATTERN -MENT ADVERBS
      ========================================================= */
      {
        id: 'adv_4_2',
        code: '3.2',
        group: 'Formation (-ment)',
        shortTitle: 'Forming -ment Adverbs',
        title: 'How to Build -ment Adverbs (4 Rules + Key Exceptions)',
        titleZh: '副词构成法（-ment 四大规律与常见特例）',
        estMin: 4,
        summary: 'Turn hundreds of French adjectives into adverbs cleanly: feminine + -ment, vowel-ending + -ment, -ent → -emment / -ant → -amment, and the acute-accent ément group.',
        summaryZh: '掌握从形容词变出 -ment 副词的四条核心路线：① 阴性形式 + -ment；② 元音结尾阳形直接 + -ment；③ -ent/-ant 变 -emment/-amment（都读 [-amɑ̃]！）；④ 带 é 的特例组。',
        cheatSummary: [
          { label: 'Rule 1 & Rule 2', rule: 'Default: feminine singular adj. + -ment (douce → doucement, heureuse → heureusement; EXCEPTION: gentil → gentiment). Vowel-ending masc. adj.: add -ment directly (poli → poliment, vrai → vraiment; EXCEPTION: gai → gaiement).', ruleZh: '常规：先变阴性再加 -ment（doucement, franchement；例外 gentiment）。如果阳性词尾已是元音（i/u/é），直接加 -ment（poliment, vraiment；例外 gaiement）。' },
          { label: 'Rule 3 (-ent / -ant) & Rule 4 (é)', rule: '-ent → -emment (récemment, fréquemment) & -ant → -amment (suffisamment, méchamment) — EXCEPTION: 1-syllable "lent" → lentement! Plus acute-é group: précisément, profondément, énormément.', ruleZh: '-ent → -emment，-ant → -amment（注意双写 m 前都读作 [a]；唯独单音节词 lent 用阴性 lentement！）。另有 é 组：précisément, profondément, énormément。' }
        ],
        sections: [
          {
            id: 'ment_rules',
            heading: '1. Four Clean Rules to Build -ment Adverbs',
            headingZh: '一、构成 -ment 副词的 4 条核心规则（含全部 Tex 例外）',
            lead: 'Instead of memorizing adverbs one by one, learn Tex’s 4 systematic formation rules:',
            leadZh: '记住这 4 条规律，以后认识一个形容词，几乎能立刻推导出对应的副词：',
            cartoon: {
              src: './assets/tex_cartoons/adv2_mange.gif',
              alt: 'Joe-Bob mange beaucoup',
              caption: 'doux/douce → doucement · poli → poliment · récent → récemment · profond → profondément',
              captionZh: '四大规则示例：doucement / poliment / récemment / profondément。'
            },
            table: {
              headers: ['Rule', 'How It Works', 'Examples (+ Exceptions!)'],
              rows: [
                { cols: ['1. Default (Consonant adj.)', 'Feminine singular + -ment', 'lent(e) → lentement · doux/douce → doucement · heureux/heureuse → heureusement · franc/franche → franchement (EXCEPT: gentil → gentiment)'], audio: 'lentement, doucement, heureusement, franchement, gentiment' },
                { cols: ['2. Ends in Vowel (i, u, é)', 'Masculine singular + -ment', 'poli → poliment · absolu → absolument · vrai → vraiment · modéré → modérément (EXCEPT: gai → gaiement)'], audio: 'poliment, absolument, vraiment, modérément, gaiement' },
                { cols: ['3. Ends in -ent / -ant', '-ent → -emment / -ant → -amment', 'récent → récemment · fréquent → fréquemment · suffisant → suffisamment · méchant → méchamment (NOTE: lent → lentement)'], audio: 'récemment, fréquemment, suffisamment, méchamment' },
                { cols: ['4. Acute Accent -ément Group', 'Silent -e becomes -é + -ment', 'précis(e) → précisément · profond(e) → profondément · énorme → énormément'], audio: 'précisément, profondément, énormément' }
              ]
            },
            tip: 'Surprise pronunciation tip: in BOTH "-emment" and "-amment", the first vowel sounds like /a/ (récemment = [ʁesamɑ̃], méchamment = [meʃamɑ̃])!',
            tipZh: '读音冷知识：-emment（如 récemment）和 -amment（如 méchamment）读音里的那个字母 e 都读作开放音 [a]！'
          }
        ],
        drills: [
          {
            id: 'd42_d1',
            kind: 'choice',
            prompt: 'How do you form the adverb from "poli" (ends in vowel -i)?',
            promptZh: '结尾已经是元音的 "poli"（礼貌的）怎么变成副词？',
            options: ['poliment (add -ment directly)', 'poliement', 'polissement', 'polimment'],
            answerIdx: 0,
            audio: 'poliment',
            explain: 'Adjectives ending in a vowel (poli, vrai, absolu) add -ment directly to the masculine form: "poliment".',
            explainZh: '元音结尾形容词直接加 -ment："poliment"。'
          },
          {
            id: 'd42_d2',
            kind: 'choice',
            prompt: 'Which adverb is the famous irregular exception from "gentil" (nice)?',
            promptZh: '温和有礼的 "gentil" 变成副词时是个著名例外，写法是：',
            options: ['gentiment', 'gentillement', 'gentilement', 'gentilment'],
            answerIdx: 0,
            audio: 'gentiment',
            explain: 'Exception: "gentil" drops the -l rather than using feminine "gentille": "gentiment".',
            explainZh: '例外词：不是 *gentillement*，而是去掉 l 直接变 "gentiment"。'
          },
          {
            id: 'd42_d3',
            kind: 'choice',
            prompt: 'Why is "lentement" (from lent) NOT spelled *lemment*?',
            promptZh: '为什么以 -ent 结尾的 "lent" 变副词是 "lentement" 而不是 *lemment*？',
            options: ['One-syllable "lent" takes the regular feminine rule: lente + ment.', 'Because all -ent words keep -ent.', 'It is irregular.', 'Because it ends in -t.'],
            answerIdx: 0,
            audio: 'lentement',
            explain: 'Multi-syllable -ent adjectives (récent, fréquent) use -emment, while 1-syllable "lent" takes feminine "lente + ment = lentement"!',
            explainZh: '只有单音节的 lent 走规则阴性路線：lente + ment = lentement；其他双音节以上的 -ent（如 récent/fréquent）走 -emment。'
          },
          {
            id: 'd42_d4',
            kind: 'fib',
            prompt: 'Build the adverb from "doux / douce" (soft): Il parle ___.',
            promptZh: '变副词（由 doux/douce）：他“轻声地 / 温柔地”说话。',
            answers: ['doucement'],
            hint: 'Feminine "douce" + -ment.',
            audio: 'Il parle doucement.',
            explain: 'Consonant-ending adj. → feminine "douce" + -ment = "doucement".',
            explainZh: '先变阴性 douce 再加 -ment → "doucement"。'
          },
          {
            id: 'd42_d5',
            kind: 'fib',
            prompt: 'Build the adverb from "heureux / heureuse": ___, il a réussi ! (fortunately)',
            promptZh: '变副词（由 heureux/heureuse）：“幸运地 / 还好”，他通过了！',
            answers: ['Heureusement', 'heureusement'],
            hint: 'Feminine "heureuse" + -ment.',
            audio: 'Heureusement, il a réussi !',
            explain: '"heureuse" + -ment = "heureusement".',
            explainZh: '阴性 heureuse + ment = "Heureusement"。'
          },
          {
            id: 'd42_d6',
            kind: 'fib',
            prompt: 'Build the adverb from "vrai" (true — ends in vowel): C’est ___ génial !',
            promptZh: '变副词（由 vrai）：这“真是”太棒了！',
            answers: ['vraiment'],
            hint: 'Ends in vowel -i → add -ment directly.',
            audio: 'C’est vraiment génial !',
            explain: '"vrai" ends in a vowel → "vraiment".',
            explainZh: 'vrai 以元音结尾直接加 -ment → "vraiment"。'
          },
          {
            id: 'd42_d7',
            kind: 'fib',
            prompt: 'Build the adverb from "récent" (-ent): Elle est arrivée ___ à Montréal.',
            promptZh: '变副词（由 récent，-ent 规则）：她“最近”刚到蒙特利尔。',
            answers: ['récemment', 'recemment'],
            hint: '-ent → -emment.',
            audio: 'Elle est arrivée récemment à Montréal.',
            explain: '"récent" → "récemment" (double m!).',
            explainZh: '-ent 结尾变 -emment（双写 m）："récemment"。'
          },
          {
            id: 'd42_d8',
            kind: 'fib',
            prompt: 'Build the adverb from "fréquent" (-ent): Tex porte ___ un béret.',
            promptZh: '变副词（由 fréquent）：Tex “经常/频繁地”戴贝雷帽。',
            answers: ['fréquemment', 'frequemment'],
            hint: '-ent → -emment.',
            audio: 'Tex porte fréquemment un béret.',
            explain: '"fréquent" → "fréquemment".',
            explainZh: '-ent 变 -emment："fréquemment"。'
          },
          {
            id: 'd42_d9',
            kind: 'fib',
            prompt: 'Build the adverb from "suffisant" (-ant): Il a ___ d’argent.',
            promptZh: '变副词（由 suffisant，-ant 规则）：他有“足够多的”钱。',
            answers: ['suffisamment'],
            hint: '-ant → -amment.',
            audio: 'Il a suffisamment d’argent.',
            explain: '"suffisant" → "suffisamment".',
            explainZh: '-ant 结尾变 -amment："suffisamment"。'
          },
          {
            id: 'd42_d10',
            kind: 'fib',
            prompt: 'Build the adverb from "énorme" (é-accent group): J’aime ___ le chocolat !',
            promptZh: '变副词（由 énorme，带 é 特例组）：我“极其/非常”喜欢巧克力！',
            answers: ['énormément', 'enormement'],
            hint: 'Final e changes to é + ment.',
            audio: 'J’aime énormément le chocolat !',
            explain: '"énorme" → "énormément" (just like précis → précisément, profond → profondément).',
            explainZh: 'énorme 词尾 e 变 é 再加 -ment："énormément"。'
          }
        ],
        related: [
          { chapterId: 'ch4_adverbs', pageId: 'adv_4_3', label: '3.3 Placement in Present Tense' },
          { chapterId: 'ch4_adverbs', pageId: 'adv_4_4', label: '3.4 Placement in Passé Composé' }
        ]
      },

      /* =========================================================
         PAGE 4.3: ADVERB PLACEMENT IN PRESENT TENSE & TEX ADV2 DRILLS
      ========================================================= */
      {
        id: 'adv_4_3',
        code: '3.3',
        group: 'Adverb Placement',
        shortTitle: 'Placement: Present Tense',
        title: 'Adverb Placement in Present Tense & All 12 Tex Drills',
        titleZh: '副词位置（一）：现在时句中的语序规律 + Tex 原版 12 题',
        estMin: 4,
        summary: 'Learn the 3 clear rules for adverb position (before adj./adv., right after the conjugated verb—even before the object!, and sentence-level flexibility), read Joe-Bob & Édouard, and finish all 12 Tex adv2 drills!',
        summaryZh: '一条口诀解决现在时副词语序：修饰形容词/副词放它前面；修饰动词放“变位动词后面、宾语前面”（不能像英语那样放句尾！）；评价整句则可放句首或句尾。配原版对话和 Tex 12 题。',
        cheatSummary: [
          { label: '1. Before Adj. or Other Adverb', rule: 'vraiment dégueulasse, très longtemps, extraordinairement sexy.', ruleZh: '修饰形容词或副词时，放在被修饰词“前面”（très longtemps, vraiment bon）。' },
          { label: '2. Right AFTER Conjugated Verb (Before Object!)', rule: 'NEVER put "beaucoup" or "toujours" at the end after a noun object! Say "J’aime beaucoup le ketchup" (NOT *J’aime le ketchup beaucoup*). Negative: after pas ("ne marche pas vite").', ruleZh: '修饰动词时紧跟在“变位动词之后、直接宾语之前”：J’aime beaucoup le ketchup（绝不要学英语放到句尾！）。否定句放在 pas 后面。' },
          { label: '3. Whole-Sentence Adverbs', rule: 'Sentence comments (malheureusement, sûrement, en plus) & some time/place words go at the start or end ("Malheureusement, on n’a pas assez d’argent").', ruleZh: '修饰整句话的评价词（Malheureusement 遗憾的是）可放句首或句尾。' }
        ],
        sections: [
          {
            id: 'adv_pos_pres',
            heading: '1. Where Does the Adverb Go? (Never Put beaucoup After the Object!)',
            headingZh: '一、三个黄金站位：为什么绝不能说 *J’aime le café beaucoup*？',
            lead: 'This is the #1 English-speaker word-order trap: in English you say "I like ketchup a lot" (at the END of the sentence). In French, adverbs modifying a verb ALWAYS step in front of the noun object, hugging the verb immediately ("J’aime beaucoup le ketchup")! In negative sentences, the adverb steps just past "pas" ("ne marche pas vite").',
            leadZh: '这是英语思维最容易踩的语序坑：英语习惯把 "a lot / very much / often" 扔到句末；而法语把修饰动词的副词紧紧黏在“变位动词正后方”，挡在宾语名词前面（J’aime beaucoup le ketchup）！否定句里则站在 pas 之后：',
            cartoon: {
              src: './assets/tex_cartoons/adv2_comprend.gif',
              alt: 'Édouard comprend mal les habitudes américaines',
              caption: 'Édouard comprend MAL les habitudes... / Il ne marche pas VITE.',
              captionZh: 'mal 紧跟动词 comprend（在宾语之前）；否定句里 vite 跟在 pas 后面。'
            },
            examples: [
              { fr: 'Adverb before adj./adv.: Le barbecue est vraiment dégueulasse ! / depuis très longtemps', en: 'Adverb goes directly BEFORE the adjective or adverb it modifies.', zh: '修饰形容词/副词 → 放前面。', tag: 'Before Adj/Adv' },
              { fr: 'Right after verb (before object!): J’aime beaucoup le ketchup ! / J’aime davantage le foie gras !', en: 'Verb + ADVERB + Object! (Never put beaucoup after ketchup!)', zh: '动词 + 副词 + 宾语名词（J’aime beaucoup le ketchup）！', tag: 'Verb + Adv + Obj' },
              { fr: 'After negative "pas": Édouard ne marche pas vite. / Ils exigent toujours du ketchup.', en: 'In negatives, put the adverb right after "pas": "ne marche pas vite".', zh: '否定句放在 pas 之后；肯定句放在动词后宾语前。', tag: 'Negative + pas' }
            ]
          },
          {
            id: 'adv_pos_dlg',
            heading: '2. Sentence Adverbs + Restaurant Dialogue (Joe-Bob & Édouard)',
            headingZh: '二、整句评价副词 + 餐厅对话',
            lead: 'Sentence-comment adverbs like malheureusement (unfortunately) or en plus can open the sentence. Listen to Joe-Bob and Édouard contrast sentence adverbs with verb-hugging adverbs:',
            leadZh: '像 malheureusement（遗憾的是）或 en plus（而且）这类修饰整句语气的副词常常领跑全句，来对话里感受两种位置的对比：',
            cartoon: {
              src: './assets/tex_cartoons/adv2_viens.gif',
              alt: 'Edouard refuse obstinément',
              caption: 'Malheureusement (whole sentence) vs. refuse obstinément (verb + adv.)',
              captionZh: 'Malheureusement 修饰整句放句首；obstinément 紧跟动词 refuse。'
            },
            dialogue: {
              title: 'Dialogue: Joe-Bob invite Édouard au Salt Lick',
              titleZh: '对话：美式烤肉店 vs 法国菜之争',
              lines: [
                { speaker: 'Joe-Bob', fr: 'Édouard, viens dîner avec nous ce soir !', en: 'Édouard, come out to eat with us this evening!', zh: 'Édouard，今晚跟我们一起出去吃晚饭吧！' },
                { speaker: 'Édouard', fr: 'Je n’aime pas dîner dans des restaurants américains parce que je trouve du ketchup partout. Vous allez sûrement au Salt Lick, et tu sais que je déteste le barbecue.', en: 'I don’t like eating in American restaurants because I find ketchup everywhere. You’re surely going to the Salt Lick, and you know I hate BBQ.', zh: '我不喜欢去美式餐厅，因为到处都是番茄酱！你们肯定要去 Salt Lick 烤肉店，你知道我最讨厌烤肉了。' },
                { speaker: 'Joe-Bob', fr: 'Malheureusement, on n’a pas assez d’argent pour aller dans un restaurant snob !', en: 'Unfortunately, we don’t have enough money to go to a snobby restaurant!', zh: '可惜我们没那么多钱去高级餐厅呀！' },
                { speaker: 'Édouard', fr: 'Tu m’invites souvent, mais toujours à l’américaine !', en: 'You invite me often, but always American-style!', zh: '你经常请我吃饭，但永远都是美式的！' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'd43_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12 — Put verb + adverb in the right French order: Tammy : Tu comprends la poésie de Tex ? Trey : Non, je ___. (comprends / mal)',
            promptZh: 'Tex 第 1 题（排列 动词+副词）：不，我不太懂（理解得差）。',
            options: ['comprends mal', 'mal comprends', 'comprends pas mal', 'mal je comprends'],
            answerIdx: 0,
            audio: 'Non, je comprends mal.',
            explain: 'Present-tense adverb goes immediately AFTER the conjugated verb: "je comprends mal".',
            explainZh: '现在时里副词紧跟变位动词之后："comprends mal"。'
          },
          {
            id: 'd43_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Tammy : Tu aimes le chocolat ? Tex : Oui, j’___ le chocolat ! (aime / énormément)',
            promptZh: 'Tex 第 2 题：是的，我极爱巧克力（记住副词放在宾语 le chocolat 前面！）。',
            options: ['aime énormément', 'le aime énormément (wait: aime)', 'énormément aime'],
            answerIdx: 0,
            audio: 'Oui, j’aime énormément le chocolat.',
            explain: 'Verb + adverb + noun object → "j’aime énormément le chocolat"!',
            explainZh: '结构为 动词 + 副词 + 宾语："aime énormément"。'
          },
          {
            id: 'd43_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Tammy : Comment va Rita ? Tex : Elle ___. (va / très bien)',
            promptZh: 'Tex 第 3 题：Rita 近况如何？她很好。',
            options: ['va très bien', 'très bien va', 'est très bien va', 'va bien très'],
            answerIdx: 0,
            audio: 'Elle va très bien.',
            explain: 'Verb "va" followed by "très bien" ("très" goes before "bien").',
            explainZh: '动词 va 后接 très bien（très 站在被修饰的 bien 前面）。'
          },
          {
            id: 'd43_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Tammy : Tu aimes le café ? Tex : Oui, j’___ le café. (aime / beaucoup)',
            promptZh: 'Tex 第 4 题：你喜欢咖啡吗？是的，我很喜欢咖啡。',
            options: ['aime beaucoup', 'beaucoup aime', 'a beaucoup aimer', 'aime pas beaucoup'],
            answerIdx: 0,
            audio: 'Oui, j’aime beaucoup le café.',
            explain: 'Place "beaucoup" right after "aime", before "le café": "j’aime beaucoup le café".',
            explainZh: 'beaucoup 紧贴在动词 aime 后面："aime beaucoup"。'
          },
          {
            id: 'd43_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Verb + adverb: Tammy : Tu penses à Bette ? Trey : Oui, je ___ à Bette. (pense + toujours)',
            promptZh: 'Tex 第 5 题（填 动词 + 副词）：是的，我一直都想着 Bette。',
            answers: ['pense toujours'],
            hint: 'Put "toujours" directly after "pense".',
            audio: 'Oui, je pense toujours à Bette.',
            explain: '"je pense toujours à Bette."',
            explainZh: '副词紧跟动词后："pense toujours"。'
          },
          {
            id: 'd43_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Verb + adverb BEFORE adjective!: Tammy : Bette est sexy ? Trey : Ah oui, elle ___ sexy ! (est + extraordinairement)',
            promptZh: 'Tex 第 6 题（填 动词 + 副词，位置在形容词 sexy 前！）：是的，她格外性感！',
            answers: ['est extraordinairement'],
            hint: '"est" + "extraordinairement" (right before adjective sexy).',
            audio: 'Ah oui, elle est extraordinairement sexy !',
            explain: 'After "est" and right BEFORE adjective "sexy": "est extraordinairement".',
            explainZh: '在系动词 est 之后、形容词 sexy 之前："est extraordinairement"。'
          },
          {
            id: 'd43_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Verb + adverb: Tammy : Tu aimes les noix ? Joe-Bob : Oui, j’___ les noix ! (aime + beaucoup)',
            promptZh: 'Tex 第 7 题：是的，我很喜欢坚果！',
            answers: ['aime beaucoup'],
            hint: 'aime + beaucoup.',
            audio: 'Oui, j’aime beaucoup les noix.',
            explain: '"j’aime beaucoup les noix."',
            explainZh: '"aime beaucoup"。'
          },
          {
            id: 'd43_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Verb + adverb: Tammy : Tu manges du chili ? Joe-Bob : Oui, je ___ du chili. (mange + souvent)',
            promptZh: 'Tex 第 8 题：是的，我经常吃辣肉酱（chili）。',
            answers: ['mange souvent'],
            hint: 'mange + souvent (before "du chili").',
            audio: 'Oui, je mange souvent du chili.',
            explain: '"je mange souvent du chili."',
            explainZh: '"mange souvent"。'
          },
          {
            id: 'd43_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Verb + adverb: Tammy : Tu aimes Sartre ? Tex : Oh oui, j’___ Sartre ! (aime + vraiment)',
            promptZh: 'Tex 第 9 题：噢是的，我真的很喜欢萨特！',
            answers: ['aime vraiment'],
            hint: 'aime + vraiment.',
            audio: 'Oh oui, j’aime vraiment Sartre !',
            explain: '"j’aime vraiment Sartre."',
            explainZh: '"aime vraiment"。'
          },
          {
            id: 'd43_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — Negative + adverb!: Tammy : Tex connaît Trey ? Tammy : Non, Tex ___ Trey. (ne connaît pas + bien)',
            promptZh: 'Tex 第 10 题（否定句语序！）：不，Tex 不太了解 Trey（ne connaît pas + bien）。',
            answers: ['ne connaît pas bien', 'ne connait pas bien'],
            hint: 'Put "bien" right AFTER "pas"!',
            audio: 'Non, Tex ne connaît pas bien Trey.',
            explain: 'In negative sentences, the adverb follows "pas": "ne connaît pas bien Trey".',
            explainZh: '否定句副词站在 pas 的正后方："ne connaît pas bien"。'
          },
          {
            id: 'd43_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Verb + adverb: Tammy : Tex est génial ! Bette : Oui, Tex ___ génial. (est + absolument)',
            promptZh: 'Tex 第 11 题：是的，Tex 绝对棒极了。',
            answers: ['est absolument'],
            hint: 'est + absolument (before "génial").',
            audio: 'Oui, Tex est absolument génial.',
            explain: '"Tex est absolument génial."',
            explainZh: '"est absolument"。'
          },
          {
            id: 'd43_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — Verb + adverb: Tammy : Tex porte un béret ? Édouard : Oui, Tex ___ un béret. (porte + fréquemment)',
            promptZh: 'Tex 第 12 题：是的，Tex 经常戴贝雷帽。',
            answers: ['porte fréquemment', 'porte frequemment'],
            hint: 'porte + fréquemment (before "un béret").',
            audio: 'Oui, Tex porte fréquemment un béret.',
            explain: 'Place "fréquemment" right after "porte", before "un béret".',
            explainZh: '"porte fréquemment"。'
          }
        ],
        related: [
          { chapterId: 'ch4_adverbs', pageId: 'adv_4_4', label: '3.4 Placement in Passé Composé' },
          { chapterId: 'ch4_adverbs', pageId: 'adv_4_2', label: '3.2 Forming -ment Adverbs' }
        ]
      },

      /* =========================================================
         PAGE 4.4: ADVERB PLACEMENT IN PASSÉ COMPOSÉ & FUTUR PROCHE
      ========================================================= */
      {
        id: 'adv_4_4',
        code: '3.4',
        group: 'Adverb Placement',
        shortTitle: 'Placement: Past & Futur Proche',
        title: 'Adverb Placement in Passé Composé & Futur Proche (All 12 Tex Drills)',
        titleZh: '副词位置（二）：复合过去时（夹在助动词与分词之间）与近将来时语序 + Tex 12 题',
        estMin: 5,
        summary: 'Master compound-tense adverb sandwiching ("J’ai trop mangé", "J’ai déjà lu"), longer -ment placement, futur proche ("Je vais immédiatement préparer"), negative "pas bien", Édouard’s fly-in-the-soup dialogue, and all 12 Tex adv3 drills!',
        summaryZh: '记住核心规律：复合过去时里常用短副词必须夹在“助动词与过去分词中间”（j’ai trop mangé），而部分较长 -ment 词放分词后亦可；近将来时里副词站在不定式前面！配“汤里有苍蝇”爆笑对话与 Tex 原版 12 题。',
        cheatSummary: [
          { label: 'Passé Composé Sandwich Rule', rule: 'Short / common adverbs (bien, mal, beaucoup, trop, déjà, toujours, encore) sit BETWEEN the auxiliary (avoir/être) and the past participle: "J’ai trop mangé", "Tu n’as pas beaucoup mangé", "J’ai déjà lu ce livre". (Longer -ment adverbs may sit either between OR after the past participle.)', ruleZh: '复合过去时“三明治位置”：高频短副词（trop, beaucoup, déjà, bien, mal, toujours, encore）插在助动词（avoir/être）与过去分词之间：J’ai trop mangé。较长 -ment 副词两者皆可。' },
          { label: 'Futur Proche (aller + inf.)', rule: 'Place the adverb directly BEFORE the infinitive (after "aller", or after "pas"): "Je ne vais pas bien dormir", "Je vais immédiatement te préparer...".', ruleZh: '近将来时（aller + 不定式）：副词站在原形动词前面（"Je vais immédiatement préparer..."；否定则紧跟 pas 后面："Je ne vais pas bien dormir"）。' }
        ],
        sections: [
          {
            id: 'adv_pc_rule',
            heading: '1. Passé Composé (Auxiliary + ADVERB + Participle) & Futur Proche',
            headingZh: '一、复合过去时（夹心位置）与近将来时语序规则',
            lead: 'Remember the simple golden rule: French adverbs stick directly to the CONJUGATED verb! So in the passé composé, the conjugated verb is the auxiliary (ai, as, a, suis, es...), which means short/common adverbs slide right between the auxiliary and the past participle! Similarly, in the futur proche (vais + infinitive), adverbs stand right after "vais" (before the infinitive).',
            leadZh: '记住同一条底层逻辑就能通杀全部时态：**法语副词永远粘在“助动词（变位动词）”后面！** 所以复合过去时里，副词自然钻进了“助动词和过去分词的中间”（就像夹心饼干一样）；而近将来时（vais + 原形）里，副词也自然站在 vais 后面、原形动词前面！',
            cartoon: {
              src: './assets/tex_cartoons/adv3_mouche.gif',
              alt: 'Une mouche dans la soupe',
              caption: 'J’ai TROP mangé (PC sandwich) · Je ne vais pas BIEN dormir (neg. futur proche).',
              captionZh: 'j’ai trop mangé（夹在助动词 ai 和 mangé 中间）；ne vais pas bien dormir（跟在 pas 后）。'
            },
            examples: [
              { fr: 'J’ai trop mangé. / Tu n’as pas beaucoup mangé ! / J’ai déjà lu ce livre.', en: 'Auxiliary + ADVERB + past participle ("pas" precedes the adverb in negatives).', zh: '助动词 + 副词 + 过去分词（否定句里 pas 站在副词前面：n’as pas beaucoup mangé）。', tag: 'Passé Composé' },
              { fr: 'Long -ment option: J’ai vraiment aimé OR J’ai aimé vraiment (both seen; between or after).', en: 'Longer -ment adverbs often follow the past participle (difficilement, immédiatement), though short/common ones sit inside.', zh: '较长 -ment 副词（如 difficilement, immédiatement）放在过去分词后面往往更地道。', tag: 'Long -ment' },
              { fr: 'Je ne vais pas bien dormir. / Je vais immédiatement te préparer une infusion.', en: 'Futur proche: aller + (pas) + ADVERB + infinitive.', zh: '近将来时：aller + (pas) + 副词 + 不定式（不隔开代词 te 的话就是 immédiatement te préparer）。', tag: 'Futur Proche' }
            ]
          },
          {
            id: 'adv_mouche_dlg',
            heading: '2. Dialogue: A Fly in Tex’s Soup (Édouard’s Restaurant)',
            headingZh: '二、原版幽默对话：Édouard 餐厅汤里的苍蝇',
            lead: 'Listen to how naturally "trop", "pas beaucoup", and "immédiatement" sit in conversation:',
            leadZh: '在真实对话里听清 trop、pas beaucoup、immédiatement 和 vite 在过去时、近将来和现在时中的站位：',
            dialogue: {
              title: 'Dialogue: Tex et Édouard',
              titleZh: 'Tex：我吃撑了！Édouard：才吃一点点汤啊？',
              lines: [
                { speaker: 'Tex', fr: 'Oh, j’ai trop mangé. Je ne vais pas bien dormir.', en: 'Oh, I ate too much. I’m not going to sleep well.', zh: '噢，我吃太多了。我今晚肯定睡不好了。' },
                { speaker: 'Édouard', fr: 'Mais tu n’as pas beaucoup mangé ! Juste de la soupe !', en: 'But you didn’t eat much! Just some soup!', zh: '哪有啊，你根本没吃多少！就喝了点汤而已！' },
                { speaker: 'Tex', fr: 'Oui, mais il y avait une mouche dans la soupe !', en: 'Yes, but there was a fly in the soup!', zh: '是啊，可汤里面有一只苍蝇！' },
                { speaker: 'Édouard', fr: 'Quoi ? Une mouche dans mon restaurant ! Pas possible ! Je vais immédiatement te préparer une infusion. Oh, tu sais, les mouches, ça se digère vite.', en: 'What? A fly in my restaurant! Impossible! I’ll immediately make you herbal tea. Oh you know, flies digest quickly.', zh: '什么？！我餐厅里有苍蝇！不可能！我马上去给你泡一杯花草茶。哦你知道的，苍蝇这东西很好消化的……' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'd44_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12 — Negative Passé Composé: Tammy : Tu as acheté mon cadeau ? Tex : Non, je ___ ton cadeau. (ne... pas + encore)',
            promptZh: 'Tex 第 1 题：不，我“还没有”买你的礼物（否定复合过去时 + encore）。',
            options: ['n’ai pas encore acheté', 'n’ai acheté pas encore', 'ai encore pas acheté', 'n’encore ai acheté'],
            answerIdx: 0,
            audio: 'Non, je n’ai pas encore acheté ton cadeau.',
            explain: '"pas encore" sits right between auxiliary "ai" and past participle "acheté".',
            explainZh: 'pas encore 夹在助动词 ai 和过去分词 acheté 中间："n’ai pas encore acheté"。'
          },
          {
            id: 'd44_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12 — Affirmative Passé Composé: Tammy : Tu as aimé le film ? Tex : Oui, j’___ le film. (beaucoup)',
            promptZh: 'Tex 第 2 题：是的，我非常喜欢这部电影（把 beaucoup 放到复合过去时正确位置）。',
            options: ['ai beaucoup aimé', 'ai aimé beaucoup', 'beaucoup ai aimé', 'ai beaucoup aimer'],
            answerIdx: 0,
            audio: 'Oui, j’ai beaucoup aimé le film.',
            explain: 'Short high-frequency adverbs like "beaucoup" ALWAYS sit between auxiliary and participle: "j’ai beaucoup aimé".',
            explainZh: 'beaucoup 必须夹在助动词 ai 和过去分词 aimé 之间："ai beaucoup aimé"。'
          },
          {
            id: 'd44_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Tammy : Tu as lu ce livre ? Tex : Oui, j’___ ce livre. (déjà)',
            promptZh: 'Tex 第 3 题：是的，我“已经”读过这本书了（déjà）。',
            options: ['ai déjà lu', 'ai lu déjà', 'déjà ai lu', 'ai déjà lire'],
            answerIdx: 0,
            audio: 'Oui, j’ai déjà lu ce livre.',
            explain: '"déjà" ALWAYS sits between auxiliary and past participle: "j’ai déjà lu".',
            explainZh: 'déjà 必须夹在助动词与分词之间："ai déjà lu"。'
          },
          {
            id: 'd44_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Tammy : Tu es monté en haut de la Tour Eiffel ? Tex : Oui, je ___ en haut ! (vraiment)',
            promptZh: 'Tex 第 4 题：是的，我“真的”登上了埃菲尔铁塔顶（注意助动词是 suis！）。',
            options: ['suis vraiment monté', 'ai vraiment monté', 'vraiment suis monté', 'suis monté vraiment pas'],
            answerIdx: 0,
            audio: 'Oui, je suis vraiment monté en haut de la Tour Eiffel.',
            explain: 'Place "vraiment" right after auxiliary "suis": "je suis vraiment monté".',
            explainZh: 'monter 用助动词 être，副词真的 vraiment 放在 suis 后面："suis vraiment monté"。'
          },
          {
            id: 'd44_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Futur Proche: Tammy : Tu vas être gentil ? Tex : Oui, je ___ gentil. (vais + être + très — place "très" right BEFORE "gentil"!)',
            promptZh: 'Tex 第 5 题（近将来时）：是的，我会变得“非常”友善（注意 très 修饰形容词 gentil，所以站在 gentil 前面！）。',
            answers: ['vais être très', 'vais etre tres'],
            hint: '"très" modifies adjective "gentil", NOT "être" → "vais être très"!',
            audio: 'Oui, je vais être très gentil.',
            explain: '"très" always stands directly before the adjective it modifies ("très gentil"), so: "je vais être très gentil".',
            explainZh: 'très 只修饰形容词 gentil，所以紧贴在 gentil 前面："vais être très"。'
          },
          {
            id: 'd44_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Futur Proche: Tammy : Tu vas aimer mon gâteau ? Trey : Oh oui, je ___ ton gâteau ! (vais + aimer + beaucoup)',
            promptZh: 'Tex 第 6 题（近将来时）：噢是的，我会非常喜欢你的蛋糕（在近将来时里放 beaucoup！）。',
            answers: ['vais beaucoup aimer', 'vais aimer beaucoup'],
            hint: 'Place "beaucoup" right before infinitive "aimer" (or after).',
            audio: 'Oh oui, je vais beaucoup aimer ton gâteau !',
            explain: 'In futur proche, adverbs like "beaucoup" usually stand right before the infinitive: "je vais beaucoup aimer".',
            explainZh: '近将来时里副词 beaucoup 通常放在不定式 aimer 前面："vais beaucoup aimer"。'
          },
          {
            id: 'd44_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Passé Composé: Tammy : Tu as mangé ? Joe-Bob : Oui, j’___. (ai + mangé + trop)',
            promptZh: 'Tex 第 7 题：是的，我吃太撑了（trop）。',
            answers: ['ai trop mangé', 'ai trop mange'],
            hint: 'Sandwich "trop" between "ai" and "mangé".',
            audio: 'Oui, j’ai trop mangé.',
            explain: '"j’ai trop mangé."',
            explainZh: 'trop 夹在助动词 ai 和 mangé 之间："ai trop mangé"。'
          },
          {
            id: 'd44_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Negative / Affirmative Passé Composé: Joe-Bob : Je ___ mes examens. (ai + rarement + réussi)',
            promptZh: 'Tex 第 8 题：我“很少”通过考试（注意：rarement 本身不含 pas，或按 Tex: ai rarement réussi）。',
            answers: ['ai rarement réussi', 'ai rarement reussi', "n'ai rarement réussi", 'n’ai rarement réussi'],
            hint: 'Sandwich "rarement" between "ai" and "réussi" (or after réussi).',
            audio: 'J’ai rarement réussi mes examens.',
            explain: 'Place "rarement" right after auxiliary "ai": "j’ai rarement réussi". (No "pas" needed with affirmative verb + rarement!)',
            explainZh: '把 rarement 放在助动词与分词之间："ai rarement réussi"。'
          },
          {
            id: 'd44_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Long -ment in Futur Proche: Tex : Trey ___ Sartre. (va + comprendre + difficilement)',
            promptZh: 'Tex 第 9 题（长 -ment 副词在近将来时里）：Trey 会“很费劲地”去理解萨特。',
            answers: ['va difficilement comprendre', 'va comprendre difficilement'],
            hint: 'Both "va difficilement comprendre" and "va comprendre difficilement" are accepted!',
            audio: 'Trey va comprendre difficilement Sartre.',
            explain: 'Long -ment adverbs work either right before or after the infinitive ("va comprendre difficilement" / "va difficilement comprendre").',
            explainZh: '较长的 -ment 副词放在不定式前面或后面都可以！'
          },
          {
            id: 'd44_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — Passé Composé: Tammy : Trey a rencontré Édouard ? Tex : Oui, Trey ___ Édouard. (a + rencontré + déjà)',
            promptZh: 'Tex 第 10 题：是的，Trey “已经”见过 Édouard 了（déjà）。',
            answers: ['a déjà rencontré', 'a deja rencontre'],
            hint: 'Sandwich "déjà" between "a" and "rencontré".',
            audio: 'Oui, Trey a déjà rencontré Édouard.',
            explain: '"déjà" sits inside the compound verb: "a déjà rencontré".',
            explainZh: 'déjà 必须夹在助动词 a 与分词之间："a déjà rencontré"。'
          },
          {
            id: 'd44_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Futur Proche: Bette : Oui, Tex ___ pour Paris. (va + partir + immédiatement)',
            promptZh: 'Tex 第 11 题：是的，Tex 马上就要去巴黎了（近将来 + immédiatement）。',
            answers: ['va immédiatement partir', 'va immediatement partir', 'va partir immédiatement', 'va partir immediatement'],
            hint: '"va immédiatement partir" or "va partir immédiatement".',
            audio: 'Oui, Tex va immédiatement partir pour Paris.',
            explain: 'Futur proche: "va immédiatement partir" (or "va partir immédiatement").',
            explainZh: '两种语序皆可：va immédiatement partir / va partir immédiatement。'
          },
          {
            id: 'd44_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — Passé Composé with être!: Édouard : Oui, Tex et Bette ___ amis. (sont + devenus + vite)',
            promptZh: 'Tex 第 12 题（助动词 être 复合过去时）：是的，Tex 和 Bette 很快成了朋友（注意配合 devenus！）。',
            answers: ['sont vite devenus', 'sont devenus vite'],
            hint: '"sont vite devenus" (or "sont devenus vite").',
            audio: 'Oui, Tex et Bette sont vite devenus amis.',
            explain: 'Short adverb "vite" normally precedes the past participle ("sont vite devenus"), and "devenus" agrees with plural Tex & Bette!',
            explainZh: '短副词 vite 常夹在 sont 与 devenus 中间："sont vite devenus"（同时注意 devenus 加 -s）。'
          }
        ],
        related: [
          { chapterId: 'ch4_adverbs', pageId: 'adv_4_3', label: '3.3 Placement in Present Tense' },
          { chapterId: 'ch4_adverbs', pageId: 'adv_4_5', label: '3.5 Adverb Comparatives & Superlatives' }
        ]
      },

      /* =========================================================
         PAGE 4.5: COMPARATIVE & SUPERLATIVE OF ADVERBS
      ========================================================= */
      {
        id: 'adv_4_5',
        code: '3.5',
        group: 'Comparison & Superlative',
        shortTitle: 'Comparatives & le plus (Adv.)',
        title: 'Comparative & Superlative of Adverbs (plus/moins/aussi, mieux & Invariable le)',
        titleZh: '副词的比较级与最高级（mieux 与永远不变的 le plus / le moins）+ Tex 12 题',
        estMin: 4,
        summary: 'Compare actions using plus/moins/aussi ... que, master irregular "mieux" (never *plus bien*), remember why adverb superlatives ALWAYS stay masculine singular "le plus / le moins / le mieux", read the snail race dialogue, and finish all 12 Tex adv4 drills!',
        summaryZh: '学会比较两个动作的快慢好坏（mieux = better，不能说 *plus bien*），牢记副词最高级前面定冠词永远只用阳性单数 le（即使主语是女生或复数也绝不变 la/les！）；含蜗牛赛跑对话与 Tex 原版 12 题。',
        cheatSummary: [
          { label: 'Comparative of Adverbs', rule: 'plus + adv + que (more... than) · moins + adv + que (less... than) · aussi + adv + que (as... as). IRREGULAR: bien → mieux que (NEVER *plus bien*), though "moins bien que" and "aussi bien que" are regular!', ruleZh: '副词比较级：plus/moins/aussi + 副词 + que。唯一特例：bien（好）的“更好”是不规则词 mieux que（绝不说 *plus bien*），但 moins bien que 与 aussi bien que 照常规则！' },
          { label: 'Superlative ALWAYS Uses "le"', rule: 'ALWAYS masculine singular "le": le plus + adv / le moins + adv / le mieux / le moins bien — NEVER "la" or "les", even for women or plural subjects! ("De toutes mes copines, Bette ment le plus souvent.")', ruleZh: '副词最高级永远不变：“最……”一律用 le plus + 副词 / le moins + 副词 / le mieux（永远只写 le，哪怕前面说的是“所有女生里”也绝不写 la 或 les！）。' }
        ],
        sections: [
          {
            id: 'adv_comp_sec',
            heading: '1. Comparing Actions (+ Irregular "mieux")',
            headingZh: '一、副词比较级：plus / moins / aussi ... que（重点盯住 mieux！）',
            lead: 'Use plus + adverb + que ("more ... than"), moins + adverb + que ("less ... than"), and aussi + adverb + que ("as ... as"). Just remember: NEVER say *plus bien* — use "mieux" (better)! By contrast, "moins bien" and "aussi bien" stay regular.',
            leadZh: '比形容词更容易，因为副词比较级完全不用管阴阳性配合！只需记住：bien（好）在表示“更好”时变成 mieux，而“不如……好 / 一样好”照常写 moins bien / aussi bien：',
            examples: [
              { fr: 'Joe-Bob court plus vite qu’Édouard. / Tex court moins vite que Joe-Bob. / Qui court aussi lentement qu’Édouard ?', en: 'faster than / less fast (slower) than / as slowly as', zh: '跑得更快 / 跑得更慢 / 跑得一样慢', tag: 'plus/moins/aussi' },
              { fr: 'Tex : Je vais mieux qu’hier. / Édouard : Je vais moins bien qu’hier. / Corey : Je vais aussi bien qu’hier.', en: 'better than yesterday (mieux!) · less well · as well as', zh: '状态比昨天更好（mieux！）· 不如昨天 · 跟昨天一样好', tag: 'mieux vs. bien' }
            ]
          },
          {
            id: 'adv_sup_sec',
            heading: '2. Superlative of Adverbs (Always Invariable "le"!) + Race Dialogue',
            headingZh: '二、副词最高级永远只用 "le"（哪怕说的是女生！）+ 赛跑对话',
            lead: 'Unlike adjectives (which change between le, la, and les), the superlative of an adverb ALWAYS uses masculine singular "le": le plus + adverb, le moins + adverb, le mieux ("best"), le moins bien ("worst/least well").',
            leadZh: '形容词最高级要跟名词变 le/la/les，但副词最高级**只可能有一种形式：永远是 le plus / le moins + 副词（以及 le mieux / le moins bien）**！哪怕主语是 Tammy 或 Bette（女性），前面也死守 "le"！',
            cartoon: {
              src: './assets/tex_cartoons/adv4_court.gif',
              alt: 'Course entre Joe-Bob, Tex, Corey et Edouard',
              caption: 'Je cours le plus vite · Il court le moins vite · Je cours le plus élégamment !',
              captionZh: '我跑得最快（le plus vite）· 他跑得最慢（le moins vite）· 我跑得最优雅（le plus élégamment）！'
            },
            dialogue: {
              title: 'Dialogue: La grande course (Joe-Bob, Corey et Édouard)',
              titleZh: '赛前嘴炮：谁跑得最快 / 最优雅？',
              lines: [
                { speaker: 'Corey', fr: 'Qui va gagner ?', en: 'Who is going to win?', zh: '谁会赢？' },
                { speaker: 'Joe-Bob', fr: 'Moi, bien sûr ! Je cours le plus vite et Édouard va être le dernier parce qu’il court le moins vite !', en: 'Me, of course! I run the fastest and Édouard is going to be last because he runs the least fast!', zh: '当然是我啦！我跑得最快，Édouard 肯定垫底，因为他跑得最慢！' },
                { speaker: 'Édouard (vexé)', fr: 'Tu dis ça parce que je suis un escargot ! Mais tout le monde sait que je cours le plus élégamment !', en: 'You say that because I’m a snail! But everyone knows I run the most elegantly!', zh: '（委屈）你这么说是因为我是蜗牛！但人人都知道我跑得最优雅！' }
              ]
            },
            quickCheck: {
              prompt: 'Tammy talks about all her female friends: "Of all my girlfriends, Bette lies ___." (+, souvent)',
              promptZh: 'Tammy 说所有闺蜜里“Bette 说谎最频繁”——注意前面就算都是女生，副词最高级依然怎么写？',
              options: ['le plus souvent', 'la plus souvent', 'les plus souvent', 'plus souvent'],
              answerIdx: 0,
              explain: 'Adverb superlatives ALWAYS take invariable masculine singular "le": "le plus souvent" — NEVER "la" or "les"!',
              explainZh: '副词最高级前面定冠词永远锁死 "le"（绝不跟女生变 la/les）："le plus souvent"！'
            }
          }
        ],
        drills: [
          {
            id: 'd45_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12 — Fill comparative/superlative: Tammy : Tex explique ___ Édouard. (+, clairement)',
            promptZh: 'Tex 第 1 题：Tex 比 Édouard 解释得“更清楚”（注意连接词 que！）。',
            options: ['plus clairement qu’', 'plus clairement de', 'le plus clairement que', 'aussi clairement que'],
            answerIdx: 0,
            audio: 'Tex explique plus clairement qu’Édouard.',
            explain: '"plus + clairement + que" (with "que" eliding to "qu’" before Édouard).',
            explainZh: '比较级“比……更清楚”用 plus clairement que（元音前缩音 qu’）。'
          },
          {
            id: 'd45_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Tammy : Tex lit ___ Joe-Bob. (+, rapidement)',
            promptZh: 'Tex 第 2 题：Tex 比 Joe-Bob 读得“更快”。',
            options: ['plus rapidement que', 'moins rapidement que', 'le plus rapidement', 'plus rapidement de'],
            answerIdx: 0,
            audio: 'Tex lit plus rapidement que Joe-Bob.',
            explain: '"plus rapidement que" = faster / more rapidly than.',
            explainZh: 'plus + rapidement + que。'
          },
          {
            id: 'd45_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Tammy : Je parle français ___ Bette. (=, bien)',
            promptZh: 'Tex 第 3 题：我法语说得跟 Bette “一样好”（= 与 bien）。',
            options: ['aussi bien que', 'aussi mieux que', 'si bien que', 'meilleur que'],
            answerIdx: 0,
            audio: 'Je parle français aussi bien que Bette.',
            explain: 'Equality comparison with "bien" stays regular: "aussi bien que".',
            explainZh: '“和……一样好”照常规则用 "aussi bien que"（不用 mieux）。'
          },
          {
            id: 'd45_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Tammy : Tex est le tatou qui embrasse ("kisses") ___. (superlative +, bien)',
            promptZh: 'Tex 第 4 题：Tex 是吻技“最好”的犰狳（最高级 + 与 bien）。',
            options: ['le mieux', 'le plus bien', 'le meilleur', 'la mieux'],
            answerIdx: 0,
            audio: 'Tex est le tatou qui embrasse le mieux.',
            explain: 'Adverb superlative of "bien" = "le mieux" (NEVER *le plus bien* or *le meilleur*).',
            explainZh: '动词 embrasse 要用副词，bien 的最高级不规则为 "le mieux"！'
          },
          {
            id: 'd45_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Comparative (-): Tammy : Corey travaille ___ Fiona. (-, fréquemment)',
            promptZh: 'Tex 第 5 题：Corey 工作频率“不如 Fiona 频繁”（- 与 fréquemment）。',
            answers: ['moins fréquemment que', 'moins frequemment que'],
            hint: 'moins + adverb + que.',
            audio: 'Corey travaille moins fréquemment que Fiona.',
            explain: '"moins fréquemment que".',
            explainZh: '"moins fréquemment que"。'
          },
          {
            id: 'd45_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Comparative (-): Tammy : Tex mange ___ moi. (-, poliment)',
            promptZh: 'Tex 第 6 题：Tex 吃饭没有我斯文（- 与 poliment）。',
            answers: ['moins poliment que'],
            hint: 'moins + poliment + que.',
            audio: 'Tex mange moins poliment que moi.',
            explain: '"moins poliment que moi."',
            explainZh: '"moins poliment que"。'
          },
          {
            id: 'd45_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Comparative (+): Tammy : Tex parle le français ___ moi. (+, couramment)',
            promptZh: 'Tex 第 7 题：Tex 法语说得比我“更流利”（+ 与 couramment）。',
            answers: ['plus couramment que'],
            hint: 'plus + couramment + que.',
            audio: 'Tex parle le français plus couramment que moi.',
            explain: '"plus couramment que moi."',
            explainZh: '"plus couramment que"。'
          },
          {
            id: 'd45_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Superlative (+, female subject!): Tammy : Fiona est l’étudiante qui réussit ___ à UT. (superlative +, brillamment)',
            promptZh: 'Tex 第 8 题（记住永远用 le！）：Fiona 是全校考得“最出色”的学生（最高级 + 与 brillamment）。',
            answers: ['le plus brillamment'],
            hint: 'Even for Fiona (f.), adverb superlatives ALWAYS take "le"!',
            audio: 'Fiona est l’étudiante qui réussit le plus brillamment à UT.',
            explain: 'Invariable "le" + plus + adverb: "le plus brillamment".',
            explainZh: '哪怕主语是 Fiona（女），副词最高级依然只用 "le"："le plus brillamment"！'
          },
          {
            id: 'd45_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Equality (=): Tammy : Joe-Bob chante ___ Tex. (=, mal)',
            promptZh: 'Tex 第 9 题：Joe-Bob 唱得跟 Tex “一样糟糕”（= 与 mal）。',
            answers: ['aussi mal que'],
            hint: 'aussi + mal + que.',
            audio: 'Joe-Bob chante aussi mal que Tex.',
            explain: '"aussi mal que".',
            explainZh: '"aussi mal que"。'
          },
          {
            id: 'd45_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — Comparative (-): Tammy : Corey apprend ___ Fiona. (-, vite)',
            promptZh: 'Tex 第 10 题：Corey 学得没有 Fiona 快（- 与 vite）。',
            answers: ['moins vite que'],
            hint: 'moins + vite + que.',
            audio: 'Corey apprend moins vite que Fiona.',
            explain: '"moins vite que".',
            explainZh: '"moins vite que"。'
          },
          {
            id: 'd45_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Superlative (-): Tammy : De toutes mes amies, Bette parle ___. (superlative -, honnêtement)',
            promptZh: 'Tex 第 11 题：在我所有朋友里，Bette 说话“最不诚实”（最高级 - 与 honnêtement）。',
            answers: ['le moins honnêtement', 'le moins honnetement'],
            hint: 'Always "le moins" + adverb!',
            audio: 'De toutes mes amies, Bette parle le moins honnêtement.',
            explain: 'Invariable "le moins honnêtement".',
            explainZh: '永远用阳单 le："le moins honnêtement"。'
          },
          {
            id: 'd45_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — Superlative (+): Tammy : De toutes mes copines, Bette ment ("lies") ___. (superlative +, souvent)',
            promptZh: 'Tex 第 12 题：在我所有女性朋友中，Bette 说谎“最频繁”（最高级 + 与 souvent）。',
            answers: ['le plus souvent'],
            hint: 'Always "le plus" + adverb!',
            audio: 'De toutes mes copines, Bette ment le plus souvent.',
            explain: '"le plus souvent" — invariable "le" even when referring to female friends!',
            explainZh: '哪怕前面有 de toutes mes copines，副词最高级还是永远写 "le plus souvent"！'
          }
        ],
        related: [
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_10', label: '4.10 le meilleur vs. le mieux' },
          { chapterId: 'ch4_adverbs', pageId: 'adv_4_6', label: '3.6 il y a ("ago") vs. en' }
        ]
      },

      /* =========================================================
         PAGE 4.6: IL Y A ('AGO') VS. EN (MONTHS/YEARS)
      ========================================================= */
      {
        id: 'adv_4_6',
        code: '3.6',
        group: 'Time Expressions',
        shortTitle: 'il y a ("ago") vs. en',
        title: 'Expressing "Ago" with il y a vs. Dates with en',
        titleZh: '时间副词短语：il y a（……之前 ago）vs en（某年/某月）+ Tex 12 题',
        estMin: 3,
        summary: 'Distinguish how long ago something happened ("il y a + duration") from when in the calendar it happened ("en + month / year / en l’an..."), read Tex & Joe-Bob’s dialogue, and finish all 12 Tex adv5 drills!',
        summaryZh: '清晰区分表示“距离现在多久以前”的 il y a + 时长（比如“十年前/三分钟前”）和表示“在某年/某月”的 en（如 en décembre, en 1998, en l’an...）。配原版对话与 Tex 12 题。',
        cheatSummary: [
          { label: 'il y a + Duration = "...ago"', rule: 'Used with lengths of time in the past: il y a un an (a year ago), il y a 10 minutes (10 minutes ago), il y a longtemps (a long time ago). Contrast with "il y a = there is"!', ruleZh: 'il y a + 时间段（只用于过去时态）= “……以前”（il y a trois jours 三天前，il y a longtemps 很久以前）。注意区分 il y a + 名词（有……）。' },
          { label: 'en + Month / Year = "in..."', rule: 'Used with calendar months and years: en janvier, en décembre, en 1998, en l’an 2026.', ruleZh: '具体到某个月份、某一年份时用介词 en：en janvier, en 1998, en l’an 2005。' }
        ],
        sections: [
          {
            id: 'ilya_ago_sec',
            heading: '1. il y a + Length of Time ("Ago") vs. en + Month / Year ("In")',
            headingZh: '一、il y a + 时长（……前）vs en + 月/年',
            lead: 'Earlier in Chapter 1 you saw "il y a + noun" meaning "there is / there are". When "il y a" is followed by a LENGTH OF TIME (une semaine, dix minutes, trois ans, longtemps) together with a past event, it switches meaning to "... ago"! When you give a calendar month or year instead of a duration, use "en".',
            leadZh: '在第一章里你学过 il y a + 名词 = “某地有……”。而当 il y a 后面跟着一段**时间长度**（une semaine, dix minutes, trois ans, longtemps）并搭配过去事件时，它就表示英语里的 **"... ago（……以前）"**！如果给的是具体的“几月”或“哪一年”，则用 **en**。',
            cartoon: {
              src: './assets/tex_cartoons/adv5_promis.gif',
              alt: 'Il y a un an j’ai promis...',
              caption: 'Il y a un an j’ai promis... · J’ai dépensé mes derniers sous il y a 10 minutes !',
              captionZh: '一年前（il y a un an）我答应过她…… · 十分钟前（il y a 10 minutes）我把钱全花光了！'
            },
            dialogue: {
              title: 'Dialogue: Tex cherche un cadeau pour la mère supérieure',
              titleZh: '对话：Tex 一年前答应给修道院院长寄德州纪念品，结果刚把零钱花光了',
              lines: [
                { speaker: 'Tex', fr: 'La mère supérieure m’a écrit récemment. Elle veut un souvenir du Texas ! Il y a un an j’ai promis de lui envoyer quelque chose, mais en ce moment je n’ai pas d’argent. Je viens de dépenser mes derniers sous il y a 10 minutes.', en: 'Mother Superior wrote to me recently. She wants a Texas souvenir! A year ago I promised to send her something, but right now I have no money. I just spent my last pennies 10 minutes ago.', zh: '修道院院长最近给我写信，想要份德州纪念品！一年前我就答应寄东西给她，可现在身无分文，十分钟前刚花完最后一点零钱。' },
                { speaker: 'Joe-Bob', fr: 'Pense à des souvenirs pas chers. Hmmm... mon ancien berceau, peut-être. C’est parfait pour une mère !', en: 'Think of cheap souvenirs. Hmm... my old crib, maybe. It’s perfect for a mother!', zh: '想想便宜点的纪念品呗。嗯……要不把我旧婴儿床送她？正适合给“母亲（Mother）”用！' }
              ]
            },
            quickCheck: {
              prompt: 'Match "three years ago" vs. "in 2023":',
              promptZh: '选择正确组合：“三年前” vs “在 2023 年”：',
              options: ['il y a trois ans / en 2023', 'en trois ans / il y a 2023', 'il y a 2023 / en trois ans', 'pendant trois ans / à 2023'],
              answerIdx: 0,
              explain: '"trois ans" is a duration ago → "il y a trois ans"; "2023" is a calendar year → "en 2023".',
              explainZh: '一段时间以前（三年）用 il y a trois ans；具体年份（2023）用 en 2023。'
            }
          }
        ],
        drills: [
          {
            id: 'd46_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12 — Fill "il y a" (ago) or "en" (date): Bette : Corey est né ___ 3 ans.',
            promptZh: 'Tex 第 1 题：Corey 是 3 年前出生的（时长 → il y a 或日期 → en？）。',
            options: ['il y a', 'en'],
            answerIdx: 0,
            audio: 'Corey est né il y a 3 ans.',
            explain: '"3 ans" is a duration back from now → "il y a 3 ans" (3 years ago).',
            explainZh: '“3 年（时长）”之前用 "il y a"。'
          },
          {
            id: 'd46_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Bette : Je suis arrivée à UT ___ un an.',
            promptZh: 'Tex 第 2 题：我是 1 年前来到 UT 的。',
            options: ['il y a', 'en'],
            answerIdx: 0,
            audio: 'Je suis arrivée à UT il y a un an.',
            explain: '"un an" = one year ago → "il y a un an".',
            explainZh: '“一年前”用 "il y a"。'
          },
          {
            id: 'd46_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Bette : J’ai rencontré Corey ___ 1998.',
            promptZh: 'Tex 第 3 题（Tex 第 5 原题）：我是在 1998 年认识 Corey 的（具体年份！）。',
            options: ['en', 'il y a'],
            answerIdx: 0,
            audio: 'J’ai rencontré Corey en 1998.',
            explain: 'Specific calendar year → "en 1998".',
            explainZh: '具体哪一年前面用 "en"：en 1998。'
          },
          {
            id: 'd46_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Bette : ___ décembre, je suis allée à Paris.',
            promptZh: 'Tex 第 4 题：在十二月，我去了巴黎（具体月份！）。',
            options: ['En', 'Il y a'],
            answerIdx: 0,
            audio: 'En décembre, je suis allée à Paris.',
            explain: 'Months always take "en": "En décembre".',
            explainZh: '月份前面固定用 "En"：En décembre。'
          },
          {
            id: 'd46_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Fill "il y a" or "en": Bette : J’ai rencontré Tammy ___ 12 mois.',
            promptZh: 'Tex 第 5 题：我 12 个月前遇见了 Tammy。',
            answers: ['il y a'],
            hint: 'Duration (12 months ago).',
            audio: 'J’ai rencontré Tammy il y a 12 mois.',
            explain: '"il y a 12 mois" = 12 months ago.',
            explainZh: '时长“12个月前”用 "il y a"。'
          },
          {
            id: 'd46_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Fill "il y a" or "en": Bette : Je suis tombée amoureuse de Tex ___ longtemps !',
            promptZh: 'Tex 第 6 题：我“很久以前”就爱上 Tex 了！',
            answers: ['il y a'],
            hint: 'Fixed phrase: ___ longtemps = a long time ago.',
            audio: 'Je suis tombée amoureuse de Tex il y a longtemps !',
            explain: '"il y a longtemps" = a long time ago.',
            explainZh: '固定短语 "il y a longtemps"（很久以前）。'
          },
          {
            id: 'd46_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Fill "il y a" or "en": Bette : ___ trois jours, Tex m’a embrassée !',
            promptZh: 'Tex 第 7 题：三天前，Tex 吻了我！',
            answers: ['Il y a', 'il y a'],
            hint: '3 days ago.',
            audio: 'Il y a trois jours, Tex m’a embrassée !',
            explain: '"Il y a trois jours" = three days ago.',
            explainZh: '“三天前”用 "Il y a"。'
          },
          {
            id: 'd46_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Fill "il y a" or "en": Bette : Je me suis disputée avec Tammy ___ deux semaines.',
            promptZh: 'Tex 第 8 题：我两周前跟 Tammy 吵了一架。',
            answers: ['il y a'],
            hint: '2 weeks ago.',
            audio: 'Je me suis disputée avec Tammy il y a deux semaines.',
            explain: '"il y a deux semaines" = two weeks ago.',
            explainZh: '“两周前”用 "il y a"。'
          },
          {
            id: 'd46_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Fill "il y a" or "en": Bette : Je suis née ___ 1997.',
            promptZh: 'Tex 第 9 题：我出生在 1997 年。',
            answers: ['en'],
            hint: 'Year.',
            audio: 'Je suis née en 1997.',
            explain: '"en 1997".',
            explainZh: '年份前用 "en"。'
          },
          {
            id: 'd46_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — Fill "il y a" or "en": Bette : J’ai vu Tammy ___ environ une heure.',
            promptZh: 'Tex 第 10 题：我大约 1 小时前刚看到 Tammy。',
            answers: ['il y a'],
            hint: 'About an hour ago.',
            audio: 'J’ai vu Tammy il y a environ une heure.',
            explain: '"il y a environ une heure" = about an hour ago.',
            explainZh: '时长“大约一小时前”，填 "il y a"。'
          },
          {
            id: 'd46_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Fill "il y a" or "en": Bette : J’ai fait du ski à Purgatory ___ janvier.',
            promptZh: 'Tex 第 11 题：我在一月去 Purgatory 滑了雪（月份）。',
            answers: ['en'],
            hint: 'Month.',
            audio: 'J’ai fait du ski à Purgatory en janvier.',
            explain: '"en janvier".',
            explainZh: '月份前填 "en"。'
          },
          {
            id: 'd46_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — Fill "il y a" or "en": Bette : ___ l’an 2005, je serai la femme de Tex !',
            promptZh: 'Tex 第 12 题：到 2005 年（年份），我就会成为 Tex 的妻子！',
            answers: ['En', 'en'],
            hint: 'Future year ("in the year 2005").',
            audio: 'En l’an 2005, je serai la femme de Tex !',
            explain: '"En l’an 2005" uses "en" before "l’an + year".',
            explainZh: '具体年份前用 "En"。'
          }
        ],
        related: [
          { chapterId: 'ch1_nouns', pageId: 'no_1_8', label: '1.8 il y a ("there is")' },
          { chapterId: 'ch4_adverbs', pageId: 'adv_4_7', label: '3.7 tôt, tard vs. en retard / à l’heure' }
        ]
      },

      /* =========================================================
         PAGE 4.7: TÔT, TARD VS. EN AVANCE, EN RETARD, À L'HEURE
      ========================================================= */
      {
        id: 'adv_4_7',
        code: '3.7',
        group: 'Time Expressions',
        shortTitle: 'tôt/tard vs. en retard/à l’heure',
        title: 'tôt / tard vs. en avance / en retard / à l’heure',
        titleZh: '最易混时间词：tôt / tard（天色早晚）vs en avance / en retard / à l’heure（日程准时与迟到）+ Tex 12 题',
        estMin: 4,
        summary: 'Stop mixing up "late at night" (il est tard) with "late for an appointment" (être en retard)! Master all 5 expressions, read Tex & Bette outside the library, and finish all 12 Tex adv6 drills!',
        summaryZh: '彻底分清英语统称 "early / late" 的两组法语表达：指天色、作息或人生阶段的“早晚（tôt / tard）” vs 指约定、班次或打卡的“提前 / 迟到 / 准时（en avance / en retard / à l’heure）”！含原版对话与 Tex 12 题。',
        cheatSummary: [
          { label: 'tôt / tard = General Time (Clock / Day / Life)', rule: 'Early or late in the day, morning/night, life, or stage of a situation ("Il est trop tôt / tard", "se coucher tôt / tard", "Mieux vaut tard que jamais").', ruleZh: 'tôt / tard（天色与抽象早晚）：早上起得早、夜里睡得晚、现在天黑了、结婚还太早、亡羊补牢（Mieux vaut tard que jamais）。' },
          { label: 'en avance / en retard / à l’heure = Schedule!', rule: 'Invariable phrases used with être & movement verbs (arriver, partir, rentrer) for appointments, trains, and deadlines ("Il est en retard", "Elle arrive à l’heure / en avance"). Placed at the end.', ruleZh: 'en avance（提前）/ en retard（迟到）/ à l’heure（准时）：永远指约定、班次或时间表！常接 être 或 arriver/partir/rentrer，放在句末。' }
        ],
        sections: [
          {
            id: 'tot_retard_sec',
            heading: '1. General Time (tôt / tard) vs. Schedule (en avance / en retard / à l’heure)',
            headingZh: '一、天色早晚（tôt / tard）vs 日程准点/迟到（à l’heure / en retard / en avance）',
            lead: 'English uses "early" and "late" for everything—which traps learners into saying "*Je suis tard*"! In French, NEVER use tôt or tard when you mean ahead of/behind a schedule ("I’m late for class" = "Je suis en retard", NOT *Je suis tard*). Think: tôt/tard = what time of day or stage it is; en avance / en retard / à l’heure = against a clock appointment or schedule!',
            leadZh: '英语都用 early / late，导致很多人误说 "*Je suis tard*"（直译其实成了“我很晚”，根本不是“我迟到了”！）。牢记这条界限：① 说今天天色早晚、睡得早晚、事情还太早 → **tôt / tard**；② 对照约会时间表、上课点名、火车航班 → **en avance（早到）/ à l’heure（准时）/ en retard（迟到）**！',
            cartoon: {
              src: './assets/tex_cartoons/adv6_retard.gif',
              alt: 'Édouard est en retard',
              caption: 'Édouard est EN RETARD (schedule) vs. Regarde l’heure, il est TARD (time of day).',
              captionZh: '人约会迟到用 en retard；天色已经很晚了用 il est tard！'
            },
            table: {
              headers: ['Phrase', 'Scope', 'Common Verbs & Examples'],
              rows: [
                { cols: ['tôt (early)', 'Time of day / stage', 'se lever tôt, se coucher tôt, il est trop tôt (it’s too early)'], audio: 'Elle se réveille tôt. Il est trop tôt.' },
                { cols: ['tard (late)', 'Time of day / stage', 'se coucher tard, il est tard, trop tard ! (too late!), mieux vaut tard que jamais'], audio: 'Il se couche tard. Mieux vaut tard que jamais.' },
                { cols: ['en avance (early)', 'Ahead of schedule', 'être / arriver en avance (ahead of meeting time)'], audio: 'J’arrive toujours en avance.' },
                { cols: ['en retard (late)', 'Behind schedule', 'être / arriver en retard (late for class / work / meeting)'], audio: 'Édouard est toujours en retard.' },
                { cols: ['à l’heure (on time)', 'Right on schedule', 'être / arriver à l’heure, juste à l’heure (just in time)'], audio: 'Je suis toujours à l’heure.' }
              ]
            },
            dialogue: {
              title: 'Dialogue: Tex et Bette attendent Édouard devant la bibliothèque',
              titleZh: '对话：在图书馆门口等迟到的 Édouard',
              lines: [
                { speaker: 'Bette', fr: 'Qui est-ce que tu attends, Tex ?', en: 'Who are you waiting for, Tex?', zh: 'Tex，你在等谁呢？' },
                { speaker: 'Tex', fr: 'Oh, comme d’habitude, j’attends Édouard. Il est en retard. Il n’est jamais à l’heure.', en: 'Oh, as usual, I’m waiting for Édouard. He is late. He is never on time.', zh: '嗨，跟平时一样等 Édouard 呗。他又迟到了，他从来不守时。' },
                { speaker: 'Bette', fr: 'Moi, je suis toujours à l’heure. Et j’arrive même en avance quand j’ai rendez-vous avec quelqu’un comme toi : digne, intelligent, beau...', en: 'Me, I’m always on time. And I even arrive early when I’m meeting someone like you: dignified, smart, handsome...', zh: '我可一向准时。要是跟像你这样体面、聪明又帅气的人约会，我还会早到呢……' },
                { speaker: 'Tex', fr: 'Bof... Tu crois qu’il est trop tôt pour parler mariage avec Tammy ?', en: 'Meh... Do you think it’s too early to talk about marriage with Tammy?', zh: '咳……你觉得现在跟 Tammy 聊结婚是不是太早了？' },
                { speaker: 'Bette', fr: 'Certainement ! Il est beaucoup trop tôt ! Regarde l’heure. Il est tard. On y va ?', en: 'Definitely! Way too early! Look at the time. It is late. Shall we go?', zh: '当然啦！太早太早了！看看表，天晚了，咱们走吧？' }
              ]
            },
            quickCheck: {
              prompt: 'You run into your French class 10 minutes after it started. What do you apologize with?',
              promptZh: '上课已经开始 10 分钟你才气喘吁吁推门进来，该说哪句道歉？',
              options: [
                'Excusez-moi, je suis en retard !',
                'Excusez-moi, je suis tard !',
                'Excusez-moi, il est en retard !',
                'Excusez-moi, j’arrive tard !'
              ],
              answerIdx: 0,
              explain: 'Being late against a class/work schedule ALWAYS takes "être en retard": "Je suis en retard !"',
              explainZh: '赶课、上班、赴约迟到永远用 "être en retard"："Excusez-moi, je suis en retard !"。'
            }
          }
        ],
        drills: [
          {
            id: 'd47_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12 — Choose en retard, à l’heure, tôt, or tard: Tex fait toujours la fête le soir : il se couche ___.',
            promptZh: 'Tex 第 1 题：Tex 晚上老是开派对，他“睡得很晚”（作息时间晚）。',
            options: ['tard', 'en retard', 'tôt', 'à l’heure'],
            answerIdx: 0,
            audio: 'Il se couche tard.',
            explain: 'Going to bed late at night (time of day, not an appointment) → "tard".',
            explainZh: '熬夜睡得晚是指一天中的时刻很晚，用 "tard"。'
          },
          {
            id: 'd47_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Tammy ne sort pas le soir : elle se couche ___.',
            promptZh: 'Tex 第 2 题：Tammy 晚上不出门，她“睡得很早”。',
            options: ['tôt', 'en retard', 'tard', 'à l’heure'],
            answerIdx: 0,
            audio: 'Elle se couche tôt.',
            explain: 'Going to bed early in the evening → "tôt".',
            explainZh: '早睡用 "tôt"。'
          },
          {
            id: 'd47_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Fiona se lève avec le soleil : elle se réveille ___.',
            promptZh: 'Tex 第 3 题：Fiona 日出而起，她“醒得很早”。',
            options: ['tôt', 'à l’heure', 'tard', 'en retard'],
            answerIdx: 0,
            audio: 'Elle se réveille tôt.',
            explain: 'Waking up early in the morning → "tôt".',
            explainZh: '清晨早醒用 "tôt"。'
          },
          {
            id: 'd47_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Édouard n’a pas de montre : il arrive toujours ___.',
            promptZh: 'Tex 第 4 题：Édouard 没有手表，他到哪儿总是“迟到”（日程落后）。',
            options: ['en retard', 'tard', 'à l’heure', 'tôt'],
            answerIdx: 0,
            audio: 'Il arrive toujours en retard.',
            explain: 'Arriving late against a schedule → "en retard".',
            explainZh: '赴约/上课迟到固定用 "en retard"。'
          },
          {
            id: 'd47_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Fill en retard / à l’heure / tôt / tard: Fiona est très ponctuelle : elle arrive toujours ___.',
            promptZh: 'Tex 第 5 题：Fiona 非常守时，她总是“准时”到达。',
            answers: ["à l'heure", 'à l’heure', "a l'heure", 'a l’heure'],
            hint: 'on time = à l’heure.',
            audio: 'Elle arrive toujours à l’heure.',
            explain: 'Punctual against a schedule → "à l’heure".',
            explainZh: '“准时” = "à l’heure"。'
          },
          {
            id: 'd47_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Fill en retard / à l’heure / tôt / tard: Corey est très lent. Il n’arrive jamais ___.',
            promptZh: 'Tex 第 6 题：Corey 动作极慢，他从不“准时”到。',
            answers: ["à l'heure", 'à l’heure', "a l'heure", 'a l’heure'],
            hint: 'Notice "jamais" = never (never on time!).',
            audio: 'Il n’arrive jamais à l’heure.',
            explain: '"Il n’arrive jamais à l’heure" = He never arrives on time.',
            explainZh: '否定句“从不准时”填 "à l’heure"。'
          },
          {
            id: 'd47_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Fill en retard / à l’heure / tôt / tard: Tammy est très ponctuelle : elle n’arrive jamais ___.',
            promptZh: 'Tex 第 7 题：Tammy 非常守时，她从不“迟到”。',
            answers: ['en retard'],
            hint: 'Never late for an appointment!',
            audio: 'Elle n’arrive jamais en retard.',
            explain: '"Elle n’arrive jamais en retard" = She is never late.',
            explainZh: '否定句“从不迟到”填 "en retard"。'
          },
          {
            id: 'd47_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Fill en retard / à l’heure / tôt / tard: Tammy : Tex, où étais-tu ? Il est ___, j’étais inquiète !',
            promptZh: 'Tex 第 8 题：Tex 你去哪儿了？“天很晚了（时间很晚）”，我都担心了！',
            answers: ['tard'],
            hint: '"Il est ___" referring to the hour of night!',
            audio: 'Il est tard, j’étais inquiète !',
            explain: '"Il est tard" = It is late (at night).',
            explainZh: '说“天晚了 / 夜深了”固定用 "Il est tard"。'
          },
          {
            id: 'd47_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Fill en retard / à l’heure / tôt / tard: Tammy : Tu veux de la glace ? Trop ___, je l’ai finie !',
            promptZh: 'Tex 第 9 题：你想吃冰淇淋吗？“太晚了”，我已经吃光啦！',
            answers: ['tard'],
            hint: 'too late = trop ___ (no schedule involved!).',
            audio: 'Trop tard, je l’ai finie !',
            explain: '"Trop tard !" = Too late!',
            explainZh: '“太迟了 / 晚了一步！”固定用 "Trop tard !"。'
          },
          {
            id: 'd47_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — Fill en retard / à l’heure / tôt / tard: Bette : Tex n’est pas encore amoureux de moi, c’est trop ___, il ne me connaît pas assez bien !',
            promptZh: 'Tex 第 10 题：现在还“太早了”（阶段太早）。',
            answers: ['tôt', 'tot'],
            hint: 'too early = trop ___.',
            audio: 'C’est trop tôt !',
            explain: '"c’est trop tôt" = it’s too early (stage of a relationship).',
            explainZh: '“还太早了”用 "tôt"（trop tôt）。'
          },
          {
            id: 'd47_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Proverb!: Bette : Mieux vaut ___ que jamais ! ("Better late than never!")',
            promptZh: 'Tex 第 11 题（法国谚语）：迟做总比不做好 / 亡羊补牢为时不晚！',
            answers: ['tard'],
            hint: 'Better ___ than never!',
            audio: 'Mieux vaut tard que jamais !',
            explain: 'Classic French proverb: "Mieux vaut tard que jamais !"',
            explainZh: '法语名谚："Mieux vaut tard que jamais !"。'
          },
          {
            id: 'd47_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — Fill en retard / à l’heure / tôt / tard: Bette : Je suis juste ___, le film va commencer !',
            promptZh: 'Tex 第 12 题：我刚好“准时”，电影正要开演呢！',
            answers: ["à l'heure", 'à l’heure', "a l'heure", 'a l’heure'],
            hint: 'right on time for the movie start = juste ___.',
            audio: 'Je suis juste à l’heure, le film va commencer !',
            explain: 'Catching a scheduled movie right on time → "juste à l’heure".',
            explainZh: '电影开场准时赶到用 "à l’heure"。'
          }
        ],
        related: [
          { chapterId: 'ch4_adverbs', pageId: 'adv_4_6', label: '3.6 il y a ("ago") vs. en' },
          { chapterId: 'ch1_nouns', pageId: 'no_1_11', label: '1.11 l’heure & la fois' },
          { chapterId: 'ch4_adverbs', pageId: 'adv_4_1', label: 'Back to 3.1 Intro to Adverbs' }
        ]
      }
    ]
  });
})();
