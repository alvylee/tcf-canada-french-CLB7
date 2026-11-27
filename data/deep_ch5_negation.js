(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch5_negation',
    code: 'Ch 6',
    level: 'A1',
    category: 'negation',
    icon: '🚫',
    title: 'Negation (La Négation)',
    titleZh: '第六章 · 法语否定句全掌握',
    subtitle: 'Tex-style slow-paced deep mastery: 7 bite-sized pages covering the ne...pas sandwich, alternate negatives (jamais/plus/rien/personne), personne & rien as subjects, ne...aucun(e), ne...ni...ni, ne...que ("only"), and oui vs. si — with 6 cartoons & 80 drills.',
    subtitleZh: '对标 Tex 深度拆分为 7 个轻松小页：基本双词否定 ne...pas、延伸否定词（jamais/plus/rien/personne/pas du tout）、personne 与 rien 作主语/宾语、ne...aucun(e) 与 ne...ni...ni、限制表达 ne...que（仅仅）与回答词 oui vs si，配 6 张原版卡通与 80 题专练。',
    pages: [
      /* =========================================================
         PAGE 5.1: INTRO TO NEGATION & THE FRENCH TWO-WORD SANDWICH
      ========================================================= */
      {
        id: 'neg_5_1',
        code: '6.1',
        group: 'Intro to Negation',
        shortTitle: 'What Is Negation?',
        title: 'Introduction to Negation: Two-Word Sandwich vs. English One-Word Negatives',
        titleZh: '否定句入门：为什么法语总是“两个词夹住动词”？',
        estMin: 3,
        summary: 'See the big picture of French negation: English inserts one word (not / don’t), while French wraps TWO words around the conjugated verb (ne...pas), with n’ elision and a preview of alternate negative pairs.',
        summaryZh: '先看懂整体逻辑：英语否定一般放一个词（not / don’t），法语标准否定则像三明治一样用前后两个词（ne ... pas 等）夹住变位动词，遇到元音或哑音 h 时 ne 缩合为 n’。',
        cheatSummary: [
          { label: 'Two-Word Bracket', rule: 'English uses ONE negative word (not / don’t / never); French wraps TWO words around the conjugated verb: ne (or n’ before vowel) + pas / jamais / rien / plus / personne / que.', ruleZh: '法语否定标准结构是“前后夹心”：ne / n’ + 变位动词 + pas（或其他第二部分如 jamais, rien, plus, personne, que）。' },
          { label: 'Negating Verbs vs. Nouns/Frequency', rule: 'Different second words contradict different parts of the sentence: ne...jamais (never), ne...que (only), ne...rien (nothing), personne ne... (nobody).', ruleZh: '替换 pas 就能精准否定不同侧面：从不（jamais）、仅仅（que）、什么都不（rien）、没有人（personne ne...）。' }
        ],
        sections: [
          {
            id: 'neg_intro_sandwich',
            heading: '1. Basic Two-Word Bracket (ne ... pas) & Vowel Elision (n’)',
            headingZh: '一、法语否定入门：双词夹住变位动词（及元音省音 n’）',
            lead: 'Negation is the grammatical way of contradicting some or all of an affirmative (positive) sentence. In English, you usually insert a single word (not, don’t, didn’t, won’t). In French, you wrap TWO words around the conjugated verb: ne ... pas (becoming n’ before a vowel or mute h).',
            leadZh: '在英语里，否定通常只要加一个词（not, don’t）；而在法语书面和标准表达里，要把“ne”放在变位动词前面、把“pas”放在变位动词后面。遇到元音开头动词（如 aime），ne 缩合成 n’。',
            examples: [
              { fr: 'Joe-Bob, l’écureuil, court vite. → Édouard, l’escargot, ne court pas vite.', en: 'Joe-Bob the squirrel runs fast. → Édouard the snail doesn’t run fast.', zh: '松鼠 Joe-Bob 跑得快。→ 蜗牛 Édouard 跑得不快。', tag: 'ne + verb + pas' },
              { fr: 'Trey aime le rap. → Joe-Bob n’aime pas le rap.', en: 'Trey likes rap. → Joe-Bob doesn’t like rap.', zh: 'Trey 喜欢说唱。→ Joe-Bob 不喜欢说唱。（aime 元音开头 → n’）', tag: 'n’ + vowel verb + pas' }
            ]
          },
          {
            id: 'neg_intro_preview',
            heading: '2. Preview: Alternate Negative Expressions (Tex’s Country Music Quartet)',
            headingZh: '二、多种否定视角预览：不只是“不”，还有“从不 / 只 / 没有东西 / 没有人”',
            lead: 'Beyond basic ne...pas, French uses different second elements to contradict frequency, quantity, objects, or people—sometimes placing the negative word right at the start as the subject!',
            leadZh: '法语可以通过更换第二部分或把否定代词放在主语位置，表达丰富多样的否定含义（下面是下一节即将精讲的 4 种核心形态）：',
            cartoon: {
              src: './assets/tex_cartoons/neg1_country.gif',
              alt: 'Joe-Bob écoute de la musique country',
              caption: 'Joe-Bob listens to country. Tex NEVER does. Trey ONLY listens to rap. Fiona listens to NOTHING!',
              captionZh: '同一个句型换上不同否定搭配：jamais（从不）/ que（只）/ rien（什么都不）/ personne（没有人）。'
            },
            examples: [
              { fr: 'Joe-Bob écoute de la musique country.', en: 'Joe-Bob listens to country music. (Affirmative baseline)', zh: '肯定句基准：Joe-Bob 听乡村音乐。', tag: 'Affirmative' },
              { fr: 'Tex n’écoute jamais de musique country.', en: 'Tex never listens to country. (negates frequency)', zh: 'Tex 从不听乡村音乐。', tag: 'ne...jamais' },
              { fr: 'Trey n’écoute que du rap.', en: 'Trey only listens to rap. (restriction = only)', zh: 'Trey 只听说唱。（注意 que 前后保留 du！）', tag: 'ne...que' },
              { fr: 'Fiona n’écoute rien.', en: 'Fiona listens to nothing. (direct object)', zh: 'Fiona 什么都不听。', tag: 'ne...rien' },
              { fr: 'Presque personne n’écoute de musique country en France.', en: 'Almost nobody listens to country music in France. (subject position)', zh: '在法国几乎没有人听乡村音乐。（personne 作主语放句首，后面仍加 n’！）', tag: 'Personne ne...' }
            ],
            quickCheck: {
              prompt: 'How does "ne" change before a verb starting with a vowel (like "écoute" or "aime")?',
              promptZh: '在元音开头的动词（如 écoute, aime）前，ne 要怎么写？',
              options: ["n’", 'ne', 'non', 'pas'],
              answerIdx: 0,
              explain: 'Before a vowel or mute h, "ne" elides to "n’": Tex n’écoute jamais / Joe-Bob n’aime pas.',
              explainZh: '在元音或哑音 h 开头的动词前，ne 必须省音为 n’（如 n’aime pas）。'
            }
          }
        ],
        drills: [
          {
            id: 'd51_d1',
            kind: 'choice',
            prompt: 'Compared with English ("does not run"), how is standard French negation structured?',
            promptZh: '相比英语用一个词否定（not / don’t），标准法语否定怎么排列？',
            options: ['Two words wrapping the conjugated verb (ne ... pas)', 'One word placed at the very end of the sentence', 'One word placed before the subject', 'Replacing the verb ending'],
            answerIdx: 0,
            audio: 'Édouard ne court pas vite.',
            explain: 'French wraps TWO words around the conjugated verb: ne (or n’) BEFORE it, pas (or another negative word) AFTER it.',
            explainZh: '标准法语否定是用“两个词”夹住变位动词：ne/n’ 在前，pas 等在后。'
          },
          {
            id: 'd51_d2',
            kind: 'choice',
            prompt: 'Negate: "Trey aime le rap." → "Joe-Bob ___"',
            promptZh: '选出“Joe-Bob 不喜欢说唱”的正确法语：',
            options: ["n’aime pas le rap.", 'ne aime pas le rap.', 'aime ne pas le rap.', 'pas aime le rap.'],
            answerIdx: 0,
            audio: 'Joe-Bob n’aime pas le rap.',
            explain: '"aime" begins with vowel a- → ne becomes n’!',
            explainZh: '动词 aime 以元音开头，所以 ne 必须省音为 n’：n’aime pas。'
          },
          {
            id: 'd51_d3',
            kind: 'choice',
            prompt: 'What does "Tex n’écoute jamais de musique country" mean?',
            promptZh: '句子 "Tex n’écoute jamais de musique country." 的意思是：',
            options: ['Tex never listens to country music.', 'Tex only listens to country music.', 'Tex always listens to country music.', 'Tex no longer listens to country music.'],
            answerIdx: 0,
            audio: 'Tex n’écoute jamais de musique country.',
            explain: '"ne ... jamais" = never.',
            explainZh: 'ne ... jamais 表示“从不”。'
          },
          {
            id: 'd51_d4',
            kind: 'choice',
            prompt: 'Which sentence translates "Trey only listens to rap"?',
            promptZh: '哪一句表示“Trey 只听（仅听）说唱”？',
            options: ['Trey n’écoute que du rap.', 'Trey n’écoute pas du rap.', 'Trey n’écoute rien.', 'Trey n’écoute plus le rap.'],
            answerIdx: 0,
            audio: 'Trey n’écoute que du rap.',
            explain: '"ne ... que" restricts the meaning to "only".',
            explainZh: 'ne ... que 意为“仅仅、只”。'
          },
          {
            id: 'd51_d5',
            kind: 'choice',
            prompt: 'Translate: "Fiona listens to nothing."',
            promptZh: '翻译：“Fiona 什么都不听。”',
            options: ['Fiona n’écoute rien.', 'Fiona n’écoute personne.', 'Fiona n’écoute jamais.', 'Fiona écoute rien.'],
            answerIdx: 0,
            audio: 'Fiona n’écoute rien.',
            explain: '"ne ... rien" = nothing / not anything.',
            explainZh: 'ne ... rien 表示“什么都不”。'
          },
          {
            id: 'd51_d6',
            kind: 'fib',
            prompt: 'Complete the bracket around "court": Édouard ___ court ___ vite. (does not)',
            promptZh: '双空夹心填空：蜗牛 Édouard 跑得“不”快。',
            answers: ['ne / pas'],
            hint: 'First word: ne · Second word: pas.',
            audio: 'Édouard ne court pas vite.',
            explain: '"ne" goes before "court", "pas" goes right after "court".',
            explainZh: '标准夹心结构：ne court pas。'
          },
          {
            id: 'd51_d7',
            kind: 'fib',
            prompt: 'Watch vowel elision: Joe-Bob ___aime ___ le rap.',
            promptZh: '省音夹心填空：Joe-Bob “不喜欢”说唱（前面空填省音形式）。',
            answers: ["n' / pas", 'n’ / pas'],
            hint: '"aime" starts with a vowel!',
            audio: 'Joe-Bob n’aime pas le rap.',
            explain: 'Before "aime", use "n’" (n’aime pas).',
            explainZh: '元音前用 n’ / pas。'
          },
          {
            id: 'd51_d8',
            kind: 'fib',
            prompt: 'Fill the missing word for "never": Tex n’écoute ___ de musique country.',
            promptZh: '填入“从不”对应的否定词：',
            answers: ['jamais'],
            hint: 'never = jamais.',
            audio: 'Tex n’écoute jamais de musique country.',
            explain: '"ne ... jamais" = never.',
            explainZh: 'ne ... jamais = 从不。'
          },
          {
            id: 'd51_d9',
            kind: 'fib',
            prompt: 'Fill the missing word for "only": Trey n’écoute ___ du rap.',
            promptZh: '填入表示“仅仅、只”的词：',
            answers: ['que'],
            hint: 'ne ... que = only.',
            audio: 'Trey n’écoute que du rap.',
            explain: '"ne ... que" = only.',
            explainZh: 'ne ... que = 只、仅仅。'
          },
          {
            id: 'd51_d10',
            kind: 'fib',
            prompt: 'Fill the subject word for "Nobody": Presque ___ n’écoute de musique country en France.',
            promptZh: '填入表示“没有人”的主语词：',
            answers: ['personne'],
            hint: 'nobody / no one = personne.',
            audio: 'Presque personne n’écoute de musique country en France.',
            explain: '"Personne" (with ne before the verb) means "nobody / no one".',
            explainZh: 'personne 作主语 + 动词前 ne/n’ 表示“没有人”。'
          }
        ],
        related: [
          { chapterId: 'ch5_negation', pageId: 'neg_5_2', label: '6.2 Basic Negation: ne...pas & Tenses' }
        ]
      },

      /* =========================================================
         PAGE 5.2: BASIC NEGATION NE...PAS (SIMPLE, COMPOUND & SPOKEN)
      ========================================================= */
      {
        id: 'neg_5_2',
        code: '6.2',
        group: 'Basic ne...pas',
        shortTitle: 'Basic ne...pas & Compound Tenses',
        title: 'Basic Negation (ne...pas): Present, Passé Composé, Futur Proche & Spoken French',
        titleZh: '基本否定 ne...pas：现在时、复合过去、近将来、de 变化与口语省 ne',
        estMin: 5,
        summary: 'Master where ne...pas goes in present tense, passé composé (around the auxiliary avoir/être!), futur proche (around aller), why un/une/des turns into pas de, how spoken French drops "ne", and practice all 12 Tex neg2 sentences.',
        summaryZh: '吃透 ne...pas 的全部语法细节：简单时态夹变位动词、复合过去夹助动词 avoir/être、近将来夹 aller、否定句里 un/une/des 变 de，以及日常口语如何省掉 ne、把 tu es 说成 t’es！含全部 12 道 Tex 原题。',
        cheatSummary: [
          { label: 'Present vs. Compound / Future', rule: 'Present: ne + verb + pas (Je ne vais pas). Passé composé: ne + AUXILIARY (avoir/être) + pas + past participle (Tex n’a pas été...). Futur proche: ne + aller + pas + infinitive (Tammy ne va pas passer...).', ruleZh: '夹心永远夹“第一格变位词”：现在时夹动词，复合过去夹助动词（a / est 等），近将来夹 aller。' },
          { label: 'Indefinite/Partitive de-Shift & Spoken Drop', rule: 'In negative sentences (except with être!), un / une / des / du / de la shift to "de/d’" (Tu n’as pas de chance!). Definite articles le/la/l’/les NEVER change (n’aime pas le rap). In casual speech, "ne" often drops: "T’es pas très gentil."', ruleZh: '重要联动：否定后不定冠词/部分冠词（un/une/des/du/de la）变 de（être 除外），但定冠词 le/la/les 永远不变！口语中常省略 ne（t’es pas）。' }
        ],
        sections: [
          {
            id: 'neg_basic_present_dialogue',
            heading: '1. Present Tense Bracket + Indefinite Article de-Shift',
            headingZh: '一、现在时基本否定与伴随的“de”变化（对话精读）',
            lead: 'Place ne/n’ before the conjugated verb and pas right after it. Watch "Tu n’as pas de chance!" in the dialogue below—when negating "Tu as de la chance / une chance", the article shifts to "de" (or "d’" before a vowel)!',
            leadZh: '在现在时中，ne/n’ 夹住变位动词。注意对话里的 "Tu n’as pas de chance !"（复习第二章：否定句中非 être 动词后的不定/部分冠词一律改用 de / d’！）。',
            cartoon: {
              src: './assets/tex_cartoons/neg2_cours.gif',
              alt: 'Tu ne vas pas en cours aujourd’hui, Tammy?',
              caption: 'Tex & Tammy: ne/n’ wraps each conjugated verb (ne vas pas, ne peux pas, n’as pas, n’es pas).',
              captionZh: 'Tammy 头痛不去上课，每一句否定都由 ne/n’ + 变位动词 + pas 构成。'
            },
            dialogue: {
              title: 'Tex & Tammy: Tu ne vas pas en cours aujourd’hui ?',
              titleZh: '原版对话：生病没去上课',
              lines: [
                { speaker: 'Tex', fr: 'Tu ne vas pas en cours aujourd’hui, Tammy ?', en: 'You’re not going to class today, Tammy?', zh: 'Tammy，你今天不去上课吗？' },
                { speaker: 'Tammy', fr: 'Non. Je ne vais pas bien. Je ne peux pas manger et j’ai mal à la tête.', en: 'No. I am not well. I cannot eat and I have a headache.', zh: '不去了，我不舒服。我吃不下东西，而且头疼。' },
                { speaker: 'Tex', fr: 'Tu n’as pas de chance ! Ce soir, il y a une fête chez Édouard !', en: 'That’s too bad (you have no luck)! Tonight there is a party at Édouard’s!', zh: '你真倒霉！今晚 Édouard 家有派对呢！' },
                { speaker: 'Tammy', fr: 'Tu n’es pas d’un grand réconfort, tu sais !', en: 'You are not a lot of comfort, you know!', zh: '你还真不太会安慰人呢！' }
              ]
            }
          },
          {
            id: 'neg_compound_spoken',
            heading: '2. Compound Tenses (Passé Composé / Futur Proche) & Spoken French',
            headingZh: '二、复合过去时（Passé Composé）、近将来与口语省略规则',
            lead: 'In compound tenses like the passé composé, ne ... pas wraps ONLY the conjugated auxiliary (avoir or être), sitting BEFORE the past participle! In the periphrastic future (futur proche), ne ... pas wraps aller. Meanwhile, in everyday spoken French, speakers frequently drop "ne / n’" and even contract "tu es" → "t’es"!',
            leadZh: '到了复合过去时（Passé Composé），ne ... pas **只夹助动词（avoir 或 être）**，过去分词放在 pas 后面；近将来（aller + 不定式）也只夹 aller。此外，真实法国和魁北克口语里常常省略 ne，甚至把 tu + 元音缩成 t’！',
            table: {
              headers: ['Structure', 'Rule', 'Tex Example'],
              rows: [
                { cols: ['Passé Composé', 'ne/n’ + auxiliary + pas + past participle', 'Tex n’a pas été très gentil. (not *n’a été pas*)'], audio: 'Tex n’a pas été très gentil.' },
                { cols: ['Futur Proche', 'ne/n’ + aller + pas + infinitive', 'Tammy ne va pas passer la soirée chez Édouard.'], audio: 'Tammy ne va pas passer la soirée chez Édouard.' },
                { cols: ['Spoken Informal', 'Often drops ne/n’; tu es → t’es', 'Tammy: Tex, t’es pas très gentil !'], audio: 'Tex, t’es pas très gentil.' }
              ]
            },
            tip: 'For TCF Canada: RECOGNIZE dropped "ne" in Listening (CO) when you hear "J’peux pas" or "T’es pas gentil", but ALWAYS WRITE full "ne ... pas" in TCF Writing (EE)!',
            tipZh: 'TCF 备考必记：听力（CO）里经常听到省掉 ne 的“t’es pas / je sais pas”；但写作（EE）和正式考试作答务必写全 ne ... pas！'
          }
        ],
        drills: [
          {
            id: 'd52_d1',
            kind: 'fib',
            prompt: 'Tex Practice 1/12 — Negate with ne...pas: Tammy aime les tatous musclés. → Tammy ___ les tatous musclés.',
            promptZh: 'Tex 第 1 题：把动词否定为“不喜欢”（注意 aime 元音开头）。',
            answers: ["n'aime pas", 'n’aime pas'],
            hint: 'aime starts with vowel a → n’aime pas.',
            audio: 'Tammy n’aime pas les tatous musclés.',
            explain: '"Tammy n’aime pas les tatous musclés." ("les" is definite, so it stays "les").',
            explainZh: '元音动词用 n’aime pas；定冠词 les 在否定后保持不变。'
          },
          {
            id: 'd52_d2',
            kind: 'fib',
            prompt: 'Tex Practice 2/12 — Negate: Rita voyage souvent. → Rita ___ souvent.',
            promptZh: 'Tex 第 2 题：Rita 不常旅行（填写否定动词部分）。',
            answers: ['ne voyage pas'],
            hint: 'ne + voyage + pas.',
            audio: 'Rita ne voyage pas souvent.',
            explain: '"Rita ne voyage pas souvent."',
            explainZh: '夹住变位动词 voyage："ne voyage pas"。'
          },
          {
            id: 'd52_d3',
            kind: 'fib',
            prompt: 'Tex Practice 3/12 — Negate: Corey et Joe-Bob étudient beaucoup. → Corey et Joe-Bob ___ beaucoup.',
            promptZh: 'Tex 第 3 题：Corey 和 Joe-Bob 不怎么学习（注意 étudient 元音开头）。',
            answers: ["n'étudient pas", 'n’étudient pas', "n'etudient pas", 'n’etudient pas'],
            hint: 'n’ + étudient + pas.',
            audio: 'Corey et Joe-Bob n’étudient pas beaucoup.',
            explain: '"étudient" begins with é → "n’étudient pas".',
            explainZh: 'étudient 元音开头 → "n’étudient pas"。'
          },
          {
            id: 'd52_d4',
            kind: 'fib',
            prompt: 'Tex Practice 4/12 — Negate: Édouard adore le barbecue. → Édouard ___ le barbecue.',
            promptZh: 'Tex 第 4 题：Édouard 不喜欢烧烤。',
            answers: ["n'adore pas", 'n’adore pas'],
            hint: 'n’ + adore + pas.',
            audio: 'Édouard n’adore pas le barbecue.',
            explain: '"Édouard n’adore pas le barbecue."',
            explainZh: 'adore 元音开头 → "n’adore pas"。'
          },
          {
            id: 'd52_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5–6/12 — Negate: Tex adore Bette / Joe-Bob déteste le ketchup. → Joe-Bob ___ le ketchup.',
            promptZh: 'Tex 第 6 题：否定“讨厌”：Joe-Bob 不讨厌番茄酱。',
            answers: ['ne déteste pas', 'ne deteste pas'],
            hint: 'Consonant d → ne déteste pas.',
            audio: 'Joe-Bob ne déteste pas le ketchup.',
            explain: '"Joe-Bob ne déteste pas le ketchup." (and for #5: "Tex n’adore pas Bette.").',
            explainZh: '辅音开头动词用 ne ... pas："ne déteste pas"。'
          },
          {
            id: 'd52_d6',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Negate: Tex et Tammy jouent aux cartes. → Tex et Tammy ___ aux cartes.',
            promptZh: 'Tex 第 7 题：Tex 和 Tammy 不打牌。',
            answers: ['ne jouent pas'],
            hint: 'ne + jouent + pas.',
            audio: 'Tex et Tammy ne jouent pas aux cartes.',
            explain: '"Tex et Tammy ne jouent pas aux cartes."',
            explainZh: '复数变位同样直接夹住："ne jouent pas"。'
          },
          {
            id: 'd52_d7',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Negate: Trey a envie d’aller en France. → Trey ___ envie d’aller en France.',
            promptZh: 'Tex 第 8 题：Trey 不想去法国（注意 a 元音开头）。',
            answers: ["n'a pas", 'n’a pas'],
            hint: 'n’ + a + pas.',
            audio: 'Trey n’a pas envie d’aller en France.',
            explain: '"Trey n’a pas envie d’aller en France."',
            explainZh: 'a 是元音开头 → "n’a pas"。'
          },
          {
            id: 'd52_d8',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Negate: Corey et Joe-Bob habitent à New York. → Corey et Joe-Bob ___ à New York.',
            promptZh: 'Tex 第 9 题：Corey 和 Joe-Bob 不住在纽约（注意 mute h 也要省音！）。',
            answers: ["n'habitent pas", 'n’habitent pas'],
            hint: 'habiter starts with a mute h → n’!',
            audio: 'Corey et Joe-Bob n’habitent pas à New York.',
            explain: 'Mute h behaves like a vowel → "n’habitent pas".',
            explainZh: 'habitent 以哑音 h 开头，同样需要省音 → "n’habitent pas"。'
          },
          {
            id: 'd52_d9',
            kind: 'fib',
            prompt: 'Tex Practice 10–12/12 — Negate: Tammy chante bien la Marseillaise. → Tammy ___ bien la Marseillaise.',
            promptZh: 'Tex 第 11 题：Tammy《马赛曲》唱得不好（注意 bien 放在 pas 后面！）。',
            answers: ['ne chante pas'],
            hint: 'Short adverb "bien" stays AFTER pas: ne chante pas bien!',
            audio: 'Tammy ne chante pas bien la Marseillaise.',
            explain: 'Short adverbs like "bien" follow "pas": "Tammy ne chante pas bien la Marseillaise." (Also #10 "n’étudie pas la cuisine texane", #12 "n’adore pas Tammy").',
            explainZh: '短副词 bien 放在 pas 后面："ne chante pas bien"。'
          },
          {
            id: 'd52_d10',
            kind: 'choice',
            prompt: 'How do you put "Tex a été très gentil" into the negative passé composé?',
            promptZh: '复合过去时句子 "Tex a été très gentil" 的正确否定语序是：',
            options: ['Tex n’a pas été très gentil.', 'Tex n’a été pas très gentil.', 'Tex a ne pas été très gentil.', 'Tex ne été pas a très gentil.'],
            answerIdx: 0,
            audio: 'Tex n’a pas été très gentil.',
            explain: 'In passé composé, ne...pas wraps the AUXILIARY (a), NOT the past participle (été).',
            explainZh: '复合过去时的否定只夹助动词（a）：Tex n’a pas été très gentil。'
          },
          {
            id: 'd52_d11',
            kind: 'choice',
            prompt: 'Negate the futur proche: "Tammy va passer la soirée chez Édouard."',
            promptZh: '近将来时 "Tammy va passer la soirée chez Édouard" 的正确否定是：',
            options: [
              'Tammy ne va pas passer la soirée chez Édouard.',
              'Tammy va ne passer pas la soirée chez Édouard.',
              'Tammy ne passer pas va la soirée chez Édouard.',
              'Tammy va passer ne pas la soirée chez Édouard.'
            ],
            answerIdx: 0,
            audio: 'Tammy ne va pas passer la soirée chez Édouard.',
            explain: 'In futur proche, wrap ONLY the conjugated verb "aller": "ne va pas passer".',
            explainZh: '近将来时只夹变位的 aller："Tammy ne va pas passer..."。'
          },
          {
            id: 'd52_d12',
            kind: 'choice',
            prompt: 'Look at the article change: "Tu as de la chance." → Negative:',
            promptZh: '注意冠词联动："Tu as de la chance." 变成否定后怎么说？',
            options: ["Tu n’as pas de chance !", "Tu n’as pas de la chance !", "Tu n’as pas la chance !", "Tu n’as pas des chances !"],
            answerIdx: 0,
            audio: 'Tu n’as pas de chance !',
            explain: 'Partitive/indefinite articles after a negated verb (except être) shift to "de": "pas de chance".',
            explainZh: '否定后（非 être）部分冠词 de la 变为 de："Tu n’as pas de chance !"。'
          }
        ],
        related: [
          { chapterId: 'ch5_negation', pageId: 'neg_5_3', label: '6.3 Alternate Negatives (jamais, plus, pas encore...)' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_8', label: 'Review 2.8: Negative pas de Rule' }
        ]
      },

      /* =========================================================
         PAGE 5.3: ALTERNATE NEGATIVES (JAMAIS, PLUS, PAS ENCORE, PAS DU TOUT...)
      ========================================================= */
      {
        id: 'neg_5_3',
        code: '6.3',
        group: 'Alternate Negatives I',
        shortTitle: 'jamais, plus, pas encore, pas du tout',
        title: 'Alternate Forms (1): jamais, pas encore, rien, personne, plus & pas du tout',
        titleZh: '延伸否定（一）：从不 / 还没 / 不再 / 一点也不 + 对称问答搭配 + 叠加否定',
        estMin: 5,
        summary: 'Learn the 6 essential negative pairs that replace ne...pas, match each affirmative clue (toujours → jamais, déjà → pas encore, encore → plus, tout à fait → pas du tout), see how French combines negatives (plus jamais / jamais rien), and practice with Tex’s Sunday dialogue.',
        summaryZh: '记住 6 个最常用的延伸否定词，精准配对肯定词与否定词（déjà ↔ pas encore，encore ↔ plus，toujours ↔ jamais，tout à fait ↔ pas du tout），学会在复合过去时把它们放在助动词后面，甚至叠加使用“再也从不（plus jamais）”！',
        cheatSummary: [
          { label: 'The 4 Affirmative → Negative Pairs', rule: 'toujours / souvent (always/often) → ne...jamais (never) | déjà (already) → ne...pas encore (not yet) | encore (still/again) → ne...plus (no longer/anymore) | tout à fait (quite) → ne...pas du tout (not at all).', ruleZh: '考试黄金配对：toujours ↔ ne...jamais（从不）| déjà ↔ ne...pas encore（还没）| encore ↔ ne...plus（不再）| tout à fait ↔ ne...pas du tout（一点也不）。' },
          { label: 'Word Order & Double Negatives', rule: 'The second element goes right after the conjugated verb (before object or past participle: "je n’ai pas encore fini"). French allows stacking negatives harmoniously: "plus jamais" (never again), "jamais rien" (never anything).', ruleZh: '位置与规则：放在变位动词后（复合过去时置于助动词与过去分词之间，如 "n’ai pas encore fini"）。英语忌讳双重否定，但法语可以自然叠加："ne ... plus jamais"（再也不）、"ne ... jamais rien"（从不……任何东西）。' }
        ],
        sections: [
          {
            id: 'neg_alt1_table',
            heading: '1. The 6 Essential Negative Expressions + Affirmative Triggers',
            headingZh: '一、6 个核心延伸否定表达与对应的肯定触发词',
            lead: 'Different nuances of negation replace "pas" with a specific word. Note that "ne" still becomes "n’" before a vowel, and in casual speech "ne/n’" may drop. Pay close attention to which affirmative clue triggers each negative word!',
            leadZh: '换掉 pas 就能表达不同程度的否定（ne 在元音前仍变成 n’）。看懂下面右边的“肯定提示词”，做题就不会选错：',
            table: {
              headers: ['French Negative', 'Meaning', 'Common Affirmative Question Clue'],
              rows: [
                { cols: ['ne ... jamais', 'never, not ever', 'toujours / souvent / déjà (ever)'], audio: 'Je ne peux jamais dormir.' },
                { cols: ['ne ... pas encore', 'not yet', 'déjà (already finished?)'], audio: 'Je n’ai pas encore fini.' },
                { cols: ['ne ... rien', 'nothing, not anything', 'quelque chose / tout'], audio: 'Je ne veux rien.' },
                { cols: ['ne ... personne', 'nobody, no one, not anybody', 'quelqu’un / tout le monde'], audio: 'Il ne veut voir personne.' },
                { cols: ['ne ... plus', 'no more, not any longer', 'encore (still?)'], audio: 'Je ne dors plus.' },
                { cols: ['ne ... pas du tout', 'not at all', 'tout à fait / vraiment'], audio: 'Je n’ai pas du tout faim.' }
              ]
            },
            cartoon: {
              src: './assets/tex_cartoons/neg3_rien.gif',
              alt: 'Tex ne veut rien le dimanche matin',
              caption: 'C’est dimanche matin: Je ne dors plus! Je ne veux rien! Je n’ai pas du tout faim!',
              captionZh: '周日早晨被吵醒的 Tex 一连甩出四个否定式：ne dors plus, ne peux jamais, ne veux rien, n’ai pas du tout faim。'
            }
          },
          {
            id: 'neg_alt1_dialogue_combo',
            heading: '2. Sunday Morning Dialogue & Combining Negatives (plus jamais, jamais rien)',
            headingZh: '二、周日早晨对话 + 法语独特的“叠加否定（plus jamais / jamais rien）”',
            lead: 'Notice where the second negative word sits: right after the conjugated verb and before the object or adjective ("Je n’ai pas du tout faim"). Also notice how French happily combines negatives—unlike formal English ("I will never make breakfast again" = ne ... plus jamais)!',
            leadZh: '细看对话里“再也不（plus jamais）”与“从不……任何东西（jamais rien）”怎么叠在一起用——这是法语非常地道且高频的写法：',
            dialogue: {
              title: 'C’est dimanche matin : Tammy & Tex',
              titleZh: '原版对话：周日早上的起床气',
              lines: [
                { speaker: 'Tammy', fr: 'Tex, tu es réveillé ?', en: 'Tex, are you awake?', zh: 'Tex，你醒了吗？' },
                { speaker: 'Tex', fr: 'Non, je ne suis pas réveillé.', en: 'No, I am not awake.', zh: '没呢，我还没醒。' },
                { speaker: 'Tammy', fr: 'Tu dors encore ?', en: 'Are you still asleep?', zh: '你还在睡啊？' },
                { speaker: 'Tex', fr: 'Maintenant, je ne dors plus ! Avec toi, je ne peux jamais faire la grasse matinée !', en: 'Now I am no longer asleep! With you I can never sleep in!', zh: '现在不再睡了！跟你在一起我永远别想睡懒觉！' },
                { speaker: 'Tammy', fr: 'Mais regarde, je t’apporte une tasse de café et un croissant.', en: 'But look, I’m bringing you a cup of coffee and a croissant.', zh: '可是你看，我给你端来了一杯咖啡和一个羊角包。' },
                { speaker: 'Tex', fr: 'Non merci, je ne veux rien. Je n’ai pas du tout faim.', en: 'No thanks, I don’t want anything. I am not hungry at all.', zh: '不用了谢谢，我什么都不想要。我一点儿都不饿。' },
                { speaker: 'Tammy', fr: 'Eh bien, tu es charmant ce matin. Je ne te ferai plus jamais le petit-déjeuner.', en: 'Well, aren’t you charming this morning. I will never make your breakfast again.', zh: '好啊，你今早可真迷人。我再也不给你做早饭了。' },
                { speaker: 'Tex', fr: 'Mais Tammy, tu sais que je ne prends jamais rien au petit-déjeuner.', en: 'But Tammy, you know I never have anything for breakfast.', zh: '可是 Tammy，你知道我早饭向来什么都不吃的。' }
              ]
            },
            tip: 'Word order note for short compounds: "pas encore", "jamais", "plus", "rien" go BEFORE the past participle in passé composé ("Je n’ai pas encore fini"), whereas "personne" always goes AFTER the past participle ("Je n’ai vu personne"—next page!).',
            tipZh: '复合过去时词序提前剧透：pas encore / jamais / plus / rien 挟在“助动词和过去分词之间”（如 je n’ai pas encore fini）；唯有 personne 永远放过去分词后面！'
          }
        ],
        drills: [
          {
            id: 'd53_d1',
            kind: 'fib',
            prompt: 'Tex Practice (neg3 #1) — Choose jamais, pas encore, pas du tout, plus, rien, personne: Tammy: As-tu déjà fini ton roman ? Tex: Non, je n’ai ___ fini mon roman.',
            promptZh: 'Tex 第 1 题：你“已经（déjà）”写完小说了吗？不，我“还没”写完。',
            answers: ['pas encore'],
            hint: '"déjà" (already) ↔ "not yet".',
            audio: 'Non, je n’ai pas encore fini mon roman.',
            explain: '"déjà" is negated by "ne ... pas encore" (not yet). Note placement between auxiliary "ai" and participle "fini".',
            explainZh: '问句里出现 déjà（已经），否定答“还没有”用 pas encore。'
          },
          {
            id: 'd53_d2',
            kind: 'fib',
            prompt: 'Tex Practice (neg3 #2): Tammy: Tu veux quelque chose, chéri ? Tex: Non, je ne veux ___ !',
            promptZh: 'Tex 第 2 题：你想吃“点什么（quelque chose）”吗？不，我“什么都不要”。',
            answers: ['rien'],
            hint: '"quelque chose" (something) ↔ nothing.',
            audio: 'Non, je ne veux rien !',
            explain: '"quelque chose" → "ne ... rien".',
            explainZh: 'quelque chose（某物）对应的否定代词是 rien（什么都不）。'
          },
          {
            id: 'd53_d3',
            kind: 'fib',
            prompt: 'Tex Practice (neg3 #3): Joe-Bob: Ce hamburger est tout à fait délicieux ! Édouard: Ah non ! Ce n’est ___ acceptable.',
            promptZh: 'Tex 第 3 题：完全（tout à fait）好吃？才怪，这“根本 / 一点也不”可接受！',
            answers: ['pas du tout'],
            hint: 'not at all = pas du tout.',
            audio: 'Ah non ! Ce n’est pas du tout acceptable.',
            explain: '"tout à fait" (completely) contrasts with "ne ... pas du tout" (not at all).',
            explainZh: '“一点也不”固定用 pas du tout（回应 tout à fait）。'
          },
          {
            id: 'd53_d4',
            kind: 'fib',
            prompt: 'Tex Practice (neg3 #5): Tammy: Est-ce que tu écris encore tes poèmes érotiques ? Tex: Non, on m’a censuré. Je n’écris ___ de poèmes.',
            promptZh: 'Tex 第 5 题：你“还（encore）”写情诗吗？不，我“不再”写诗了。',
            answers: ['plus'],
            hint: '"encore" (still) ↔ no longer.',
            audio: 'Je n’écris plus de poèmes.',
            explain: '"encore" (still) flips to "ne ... plus" (no longer). Notice "des poèmes" also shifts to "de poèmes"!',
            explainZh: 'encore（还在……）对应的否定是 plus（不再），并且后面脱掉复数冠词变成 plus de poèmes。'
          },
          {
            id: 'd53_d5',
            kind: 'fib',
            prompt: 'Tex Practice (neg3 #7): Tammy: Bette m’a dit que tu fumes encore ! Tex: Mais non ! Je ne fume ___.',
            promptZh: 'Tex 第 7 题：Bette 说你“还在”抽烟！哪有的事，我“早就戒了 / 不再抽了”！',
            answers: ['plus'],
            hint: '"fumes encore" → no longer.',
            audio: 'Mais non ! Je ne fume plus.',
            explain: 'Stopping a past habit ("still?") takes "ne ... plus".',
            explainZh: '不再继续原来的习惯，固定用 "ne ... plus"。'
          },
          {
            id: 'd53_d6',
            kind: 'fib',
            prompt: 'Tex Practice (neg3 #8): Tammy: Le professeur a l’air tout à fait charmant. Tex: Mais non, c’est un imbécile. Il n’est ___ charmant.',
            promptZh: 'Tex 第 8 题：教授看起来挺迷人的？胡说，他“一点儿也不”迷人。',
            answers: ['pas du tout'],
            hint: 'not at all.',
            audio: 'Il n’est pas du tout charmant.',
            explain: '"tout à fait charmant" → "Il n’est pas du tout charmant."',
            explainZh: '强调“一点也不”填 pas du tout。'
          },
          {
            id: 'd53_d7',
            kind: 'fib',
            prompt: 'Tex Practice (neg3 #9): Tammy: Est-ce que Bette dit toujours la vérité ? Tex: Ha ! Elle ne dit ___ la vérité.',
            promptZh: 'Tex 第 9 题：Bette “总是（toujours）”说真话吗？呵，她“从来不说”真话！',
            answers: ['jamais'],
            hint: '"toujours" (always) ↔ never.',
            audio: 'Elle ne dit jamais la vérité.',
            explain: '"toujours" (always) flips to "ne ... jamais" (never).',
            explainZh: 'toujours（总是）的完美反义否定是 jamais（从不）。'
          },
          {
            id: 'd53_d8',
            kind: 'fib',
            prompt: 'Tex Practice (neg3 #11): Tammy: Tex, tu es toujours impoli. Tex: Non, je ne suis ___ impoli.',
            promptZh: 'Tex 第 11 题：你“总是”没礼貌！不，我“从来不”没礼貌（或选 jamais）。',
            answers: ['jamais', 'pas du tout'],
            hint: 'Triggered by "toujours" → jamais.',
            audio: 'Non, je ne suis jamais impoli.',
            explain: 'Matching "toujours" → "jamais" ("je ne suis jamais impoli").',
            explainZh: '回应 toujours 用 jamais（也可用 pas du tout 强调）。'
          },
          {
            id: 'd53_d9',
            kind: 'fib',
            prompt: 'Tex Practice (neg3 #12): Tammy: Tex, as-tu déjà bu ton café ? Tex: Non, je n’ai ___ bu mon café.',
            promptZh: 'Tex 第 12 题：你“已经（déjà）”喝咖啡了吗？不，我“还没”喝。',
            answers: ['pas encore'],
            hint: '"déjà" → not yet.',
            audio: 'Non, je n’ai pas encore bu mon café.',
            explain: '"déjà" → "pas encore" (between auxiliary "ai" and participle "bu").',
            explainZh: 'déjà → pas encore，位于助动词 ai 和过去分词 bu 之间。'
          },
          {
            id: 'd53_d10',
            kind: 'choice',
            prompt: 'How do you say "I will never make your breakfast again" in natural French?',
            promptZh: '“我再也不给你做早饭了”怎么用叠加否定表达？',
            options: [
              'Je ne te ferai plus jamais le petit-déjeuner.',
              'Je ne te ferai pas toujours le petit-déjeuner.',
              'Je ne te ferai rien le petit-déjeuner.',
              'Je ne te ferai encore le petit-déjeuner.'
            ],
            answerIdx: 0,
            audio: 'Je ne te ferai plus jamais le petit-déjeuner.',
            explain: 'Combine "plus" + "jamais" to express "never again".',
            explainZh: 'plus + jamais 连用表示“再也不、永远不再”。'
          },
          {
            id: 'd53_d11',
            kind: 'choice',
            prompt: 'Which stacked negative means "never anything" (e.g. for breakfast)?',
            promptZh: '表达“（早饭）向来什么都不吃”应该如何叠加否定词？',
            options: [
              'Je ne prends jamais rien au petit-déjeuner.',
              'Je ne prends rien pas au petit-déjeuner.',
              'Je ne prends plus pas au petit-déjeuner.',
              'Je ne prends pas rien au petit-déjeuner.'
            ],
            answerIdx: 0,
            audio: 'Je ne prends jamais rien au petit-déjeuner.',
            explain: 'NEVER combine "pas" with "rien/jamais", but DO combine "jamais" + "rien": "ne prends jamais rien".',
            explainZh: '注意不能把 pas 和 jamais/rien 混用，但可以把 jamais + rien 叠加（never anything）！'
          },
          {
            id: 'd53_d12',
            kind: 'choice',
            prompt: 'Quick match: Which affirmative word does "ne ... pas encore" answer in negative replies?',
            promptZh: '看到问句里出现哪个提示词时，否定回答优先选 "ne ... pas encore"（还没有）？',
            options: ['déjà (already)', 'encore (still)', 'quelqu’un (someone)', 'rien (nothing)'],
            answerIdx: 0,
            audio: 'As-tu déjà fini ?',
            explain: '"déjà" = already → "pas encore" = not yet. ("encore" = still → "ne...plus" = no longer!)',
            explainZh: '极易混淆！déjà（已经）配 pas encore（还没）；而 encore（仍然）配 plus（不再）！'
          }
        ],
        related: [
          { chapterId: 'ch5_negation', pageId: 'neg_5_4', label: '6.4 Negative Pronouns: personne & rien' }
        ]
      },

      /* =========================================================
         PAGE 5.4: NEGATIVE PRONOUNS PERSONNE & RIEN (OBJECT, PREP, SUBJECT)
      ========================================================= */
      {
        id: 'neg_5_4',
        code: '6.4',
        group: 'personne & rien',
        shortTitle: 'personne & rien (Object vs. Subject)',
        title: 'Negative Pronouns (personne & rien): Direct Object, Prepositional Object & Sentence Subject',
        titleZh: '否定代词精讲（personne 与 rien）：作宾语、介词后宾语及句首作主语',
        estMin: 4,
        summary: 'Understand why personne and rien are true pronouns: use them after prepositions (penser à rien, parler à personne), put them at the FRONT as sentence subjects (Personne n’aime... / Rien n’est pire), and avoid the #1 passé composé trap with personne!',
        summaryZh: '真正理解 personne（没有人）与 rien（没有事物）为什么叫“否定代词”：它们不仅跟在动词后，还能跟在介词 à/de 后面（parler à personne / penser à rien），更能冲到句首作主语（后面依然必须带 ne！）。同时攻克复合过去时中 rien vs personne 的站位差异！',
        cheatSummary: [
          { label: '1. As Direct or Prepositional Object', rule: 'Direct object: "ne veut voir personne" (anyone). Prepositional object: placed AFTER the preposition! "Il ne veut parler à personne." / "Il ne pense à rien." Note: "ne" stays in front of the conjugated verb.', ruleZh: '作动词或介词宾语：放动词或介词之后（ne 仍在变位动词前）：Il ne veut parler à personne. / Il ne pense à rien.（跟英语一样，personne/rien 直接替换介词后的 somebody/something）。' },
          { label: '2. As Sentence Subject + Past Tense Trap', rule: 'Subject at sentence start: "Personne n’aime se lever tôt." / "Rien n’est pire." ("ne/n’" MUST stay before the verb!). Passé composé: "rien" goes BETWEEN aux & participle ("n’a rien vu"), while "personne" goes AFTER participle ("n’a vu personne")!', ruleZh: '放句首作主语：Personne n’aime... / Rien n’est pire（动词前必须加 ne/n’！）。复合过去时必考差：n’a rien vu（在分词前） vs n’a vu personne（personne 永远放分词后）！' }
        ],
        sections: [
          {
            id: 'neg_pron_roles',
            heading: '1. Three Grammatical Roles of personne & rien',
            headingZh: '一、personne 与 rien 的三大语法位置（特别是句首主语 & 介词后）',
            lead: 'Personne and rien are full negative pronouns: they can act as direct objects, objects after prepositions (à, de, pour, avec...), OR as the subject at the very beginning of a sentence—where "ne/n’" MUST still follow them before the verb!',
            leadZh: 'personne（无人）和 rien（无物）是名副其实的“代词”，可以在句子里担任三种角色：直接宾语、介词宾语，甚至句首主语：',
            cartoon: {
              src: './assets/tex_cartoons/neg3_personne.gif',
              alt: 'Personne n’aime se lever tôt un dimanche',
              caption: 'Subject position: "Personne n’aime se lever tôt" (Notice n’ BEFORE aime—NO pas!).',
              captionZh: 'personne 放在句首作主语："Personne n’aime se lever tôt"（动词前仍有 n’，且不加 pas！）。'
            },
            table: {
              headers: ['Role', 'Pattern', 'Tex Examples'],
              rows: [
                { cols: ['Direct Object (infinitive)', 'ne + conj. verb + inf. + personne', 'Ce matin, Tex ne veut voir personne.'], audio: 'Ce matin, Tex ne veut voir personne.' },
                { cols: ['After a Preposition', 'ne + verb + prep + personne/rien', 'Il ne veut parler à personne. · Il ne pense à rien.'], audio: 'Il ne veut parler à personne. Il ne pense à rien.' },
                { cols: ['Subject (Front of sentence)', 'Personne / Rien + ne/n’ + verb', 'Personne n’aime se lever tôt un dimanche. · Rien n’est pire.'], audio: 'Personne n’aime se lever tôt un dimanche. Rien n’est pire.' }
              ]
            }
          },
          {
            id: 'neg_pron_pc_trap',
            heading: '2. Passé Composé Word-Order Trap: n’a rien vu vs. n’a vu personne',
            headingZh: '二、复合过去时站位陷阱：rien 站过去分词前，personne 站过去分词后！',
            lead: 'In compound tenses (passé composé), "rien" hops neatly BETWEEN the auxiliary and the past participle just like "pas" or "jamais"—whereas "personne" ALWAYS stays AFTER the past participle (right where a person noun object sits!).',
            leadZh: '背下这条绝招就不会出错：复合过去时里，**rien** 和 pas/jamais 一样夹在助动词与过去分词中间；而 **personne** 永远像正常人名宾语一样站在过去分词后面！',
            examples: [
              { fr: 'Je n’ai rien dit. / Je n’ai rien vu.', en: 'I said nothing. / I saw nothing. (rien BEFORE past participle)', zh: 'rien 在过去分词前面：n’ai rien dit / n’ai rien vu。', tag: 'rien before PP' },
              { fr: 'Je n’ai vu personne. / Je n’ai parlé à personne.', en: 'I saw nobody. / I spoke to nobody. (personne AFTER past participle)', zh: 'personne 永远在过去分词后面：n’ai vu personne。', tag: 'personne after PP' }
            ],
            quickCheck: {
              prompt: 'How do you translate "Nobody appreciates my poetry" (starting with "Nobody")?',
              promptZh: '翻译：“没有人欣赏我的诗。”',
              options: [
                'Personne n’apprécie ma poésie.',
                'Personne apprécie pas ma poésie.',
                'Ne personne apprécie ma poésie.',
                'Pas personne apprécie ma poésie.'
              ],
              answerIdx: 0,
              explain: 'Subject "Personne" comes first, followed by "n’" before the verb (never add "pas")!',
              explainZh: 'personne 作主语放句首，后面动词前必须保留 ne/n’，而且绝不加 pas！'
            }
          }
        ],
        drills: [
          {
            id: 'd54_d1',
            kind: 'fib',
            prompt: 'Tex Practice (neg3 #4) — Subject position!: Tammy: Quelqu’un lisait mon journal intime ! Tex: Calme-toi. ___ ne lisait ton journal intime.',
            promptZh: 'Tex 第 4 题（主语位）：冷静点，“没有人”偷看你的日记（首字母大写）。',
            answers: ['Personne', 'personne'],
            hint: 'Subject pronoun "Nobody" followed by "ne lisait".',
            audio: 'Personne ne lisait ton journal intime.',
            explain: 'Opposite of "Quelqu’un" (someone) in subject position → "Personne ne lisait..."',
            explainZh: 'Quelqu’un（某人）作主语变否定 → "Personne ne..."。'
          },
          {
            id: 'd54_d2',
            kind: 'fib',
            prompt: 'Tex Practice (neg3 #6) — After preposition à!: Tammy: Il est temps de penser à notre mariage. Tex: Pas maintenant ! Je ne veux penser à ___.',
            promptZh: 'Tex 第 6 题（介词 à 后）：我现在不想思考“任何事”（= nothing）。',
            answers: ['rien'],
            hint: 'Thinking about nothing = penser à rien.',
            audio: 'Je ne veux penser à rien.',
            explain: 'After preposition "à", "rien" replaces "any thing": "penser à rien".',
            explainZh: '在介词 à 后面指事物用 rien：penser à rien。'
          },
          {
            id: 'd54_d3',
            kind: 'fib',
            prompt: 'Tex Practice (neg3 #10) — Subject position!: Tammy: Tout le monde apprécie ta poésie, Tex. Tex: Au contraire ! ___ n’apprécie ma poésie.',
            promptZh: 'Tex 第 10 题（主语位）：恰恰相反！“没有人”欣赏我的诗（注意句首大写）。',
            answers: ['Personne', 'personne'],
            hint: 'Opposite of "Tout le monde" (everyone) at start of sentence.',
            audio: 'Personne n’apprécie ma poésie.',
            explain: '"Tout le monde" (everyone) → "Personne n’apprécie..."',
            explainZh: 'Tout le monde 作主语的否定就是 "Personne n’..."。'
          },
          {
            id: 'd54_d4',
            kind: 'fib',
            prompt: 'Complete subject + ne: ___ n’est pire qu’un lundi sans café. (Nothing is worse...)',
            promptZh: '句首主语填空：“没有什么”比周一没咖啡更糟了。',
            answers: ['Rien', 'rien'],
            hint: 'Subject "Nothing" = Rien.',
            audio: 'Rien n’est pire qu’un lundi sans café.',
            explain: '"Rien" can stand at the front as a subject followed by "n’": "Rien n’est pire."',
            explainZh: 'rien 作主语放句首："Rien n’est pire..."。'
          },
          {
            id: 'd54_d5',
            kind: 'fib',
            prompt: 'Direct object after infinitive: Ce matin, Tex ne veut voir ___. (nobody)',
            promptZh: '不定式后宾语填空：今天早晨 Tex 谁都不想见。',
            answers: ['personne'],
            hint: 'Direct object "anyone/nobody" = personne.',
            audio: 'Ce matin, Tex ne veut voir personne.',
            explain: 'Direct object "personne" follows the verb/infinitive "voir": "ne veut voir personne".',
            explainZh: '在 voir 后作直接宾语填 personne。'
          },
          {
            id: 'd54_d6',
            kind: 'fib',
            prompt: 'After preposition "à" (people): Il ne veut parler à ___. (anybody)',
            promptZh: '介词 à 后（对人）：他不想和“任何人”说话。',
            answers: ['personne'],
            hint: 'To anybody = à personne.',
            audio: 'Il ne veut parler à personne.',
            explain: '"parler à personne" = to speak to nobody / not anybody.',
            explainZh: 'parler à + personne 表示“不和任何人说话”。'
          },
          {
            id: 'd54_d7',
            kind: 'choice',
            prompt: 'Which passé composé sentence is grammatically CORRECT for "I saw nobody"?',
            promptZh: '复合过去时“我谁也没看见”哪一句语序完全正确？',
            options: ['Je n’ai vu personne.', 'Je n’ai personne vu.', 'Personne j’ai vu.', 'Je n’ai pas vu personne.'],
            answerIdx: 0,
            audio: 'Je n’ai vu personne.',
            explain: '"personne" ALWAYS stays AFTER the past participle in compound tenses: "Je n’ai vu personne."',
            explainZh: 'personne 在复合过去时中必须放在过去分词后面：Je n’ai vu personne。'
          },
          {
            id: 'd54_d8',
            kind: 'choice',
            prompt: 'Which passé composé sentence is grammatically CORRECT for "I saw nothing"?',
            promptZh: '复合过去时“我什么也没看见”哪一句语序完全正确？',
            options: ['Je n’ai rien vu.', 'Je n’ai vu rien.', 'Je n’ai pas vu rien.', 'Rien je n’ai vu.'],
            answerIdx: 0,
            audio: 'Je n’ai rien vu.',
            explain: '"rien" sits BETWEEN the auxiliary and past participle: "Je n’ai rien vu."',
            explainZh: '与 personne 不同，rien 要挟在助动词和过去分词中间：Je n’ai rien vu。'
          },
          {
            id: 'd54_d9',
            kind: 'fib',
            prompt: 'Watch the mandatory "ne/n’": Personne ___’écoute jamais mes conseils !',
            promptZh: '别漏掉主体前后的联动否定词：Personne ___’écoute...（只填缩合字母）。',
            answers: ['n'],
            hint: 'Before vowel é, ne becomes n.',
            audio: 'Personne n’écoute jamais mes conseils !',
            explain: 'Even with subject "Personne", French MUST keep "ne / n’" before the verb.',
            explainZh: 'Personne 作主语时，变位动词前绝不可省掉 n’。'
          },
          {
            id: 'd54_d10',
            kind: 'fib',
            prompt: 'Complete two-blank subject negation: ___ ___ s’est passé hier. (Nothing happened yesterday.)',
            promptZh: '双空填空：“昨天什么事也没发生。”（Rien + ne/n’）',
            answers: ['Rien / ne'],
            hint: 'Nothing + ne (before se).',
            audio: 'Rien ne s’est passé hier.',
            explain: '"Rien ne s’est passé hier."',
            explainZh: '主语 Rien + 动词前 ne：Rien ne s’est passé。'
          },
          {
            id: 'd54_d11',
            kind: 'choice',
            prompt: 'Why is *"Je n’ai pas vu rien"* incorrect in standard French?',
            promptZh: '为什么 *"Je n’ai pas vu rien"* 是错句？',
            options: [
              '"pas" and "rien" are never combined—use "Je n’ai rien vu."',
              '"rien" cannot be used in the past tense.',
              '"vu" should be infinitive.',
              'You must put "pas" after "rien".'
            ],
            answerIdx: 0,
            audio: 'Je n’ai rien vu.',
            explain: '"rien" REPLACES "pas" (never write pas + rien together!).',
            explainZh: 'rien 自己就是第二否定词，已经替代了 pas，绝不能把 pas 和 rien 写在同一句里。'
          },
          {
            id: 'd54_d12',
            kind: 'fib',
            prompt: 'Preposition "de" + nothing: Je n’ai besoin de ___. (I don’t need anything.)',
            promptZh: '介词 de 之后：我不需要“任何东西”。',
            answers: ['rien'],
            hint: 'avoir besoin de + rien.',
            audio: 'Je n’ai besoin de rien.',
            explain: 'After preposition "de", use "rien": "Je n’ai besoin de rien."',
            explainZh: 'avoir besoin de 后面指物填 rien。'
          }
        ],
        related: [
          { chapterId: 'ch5_negation', pageId: 'neg_5_5', label: '6.5 ne...aucun(e) & ne...ni...ni' }
        ]
      },

      /* =========================================================
         PAGE 5.5: NE...AUCUN(E) & NE...NI...NI
      ========================================================= */
      {
        id: 'neg_5_5',
        code: '6.5',
        group: 'aucun & ni...ni',
        shortTitle: 'ne...aucun(e) & ne...ni...ni',
        title: 'ne...aucun(e) ("Not a Single") & ne...ni...ni ("Neither...Nor")',
        titleZh: '强力零数量与并列否定：ne...aucun(e)（一个也没有）与 ne...ni...ni（既不…也不…）',
        estMin: 5,
        summary: 'Agree aucun / aucune in gender with its singular noun (even without a verb: "Aucune idée!"), negate two items/subjects/verbs with ne...ni...ni (always keeping "ne" before the verb!), and drop indefinite/partitive articles after ni.',
        summaryZh: '掌握两个高级否定结构：① **ne ... aucun(e)**（一个也没有），aucun/aucune 必须随单数名词变阴阳性，还可放句首作主语；② **ne ... ni ... ni**（既不……也不……），千万别忘了变位动词前面的 ne/n’！同时完成 Tex neg4 的第 1–8 题练习。',
        cheatSummary: [
          { label: 'ne ... aucun / aucune + Singular Noun', rule: 'Means "not a single / no ... at all". Agrees in gender (aucun coup de téléphone vs. aucune nouvelle). Usually singular! Can stand alone ("Aucune idée !") or act as subject ("Aucune femme ne peut...").', ruleZh: '后接单数名词表示“丝毫没有 / 没有任何一个”：随名词阴阳性变 aucun / aucune。常用于短语 "Aucune idée !"（毫无头绪），也可放句首作主语（Aucun éditeur n’a...）。' },
          { label: 'ne ... ni ... ni (Always Keep ne!)', rule: 'Translates "neither ... nor", and works for objects ("ni hier ni aujourd’hui"), two verbs ("ne m’a ni téléphoné ni écrit"), or two subjects ("Ni moi ni Fiona n’avons vu..."). Indefinite/partitive articles (un/des/du) vanish after ni, while definite articles (le/la/les) stay!', ruleZh: '表示“既不……也不……”：**动词前永远必须保留 ne/n’**！可连接宾语、两个动作，或放句首连接两个主语（Ni... ni... + ne + 复数动词）。注意 ni 后省略不定/部分冠词，定冠词 le/la/les 保留！' }
        ],
        sections: [
          {
            id: 'neg_aucun_sec',
            heading: '1. ne ... aucun(e): "Absolutely No / Not a Single"',
            headingZh: '一、ne ... aucun(e) + 单数名词：一个也没有（注意阴阳性配合！）',
            lead: 'Ne / n’ ... aucun(e) + singular noun conveys "absolutely no / not a single". Aucun agrees in gender with the noun it modifies (aucun masc. / aucune fem.). It can even stand at the start of a sentence as the subject ("Aucun éditeur n’a publié...").',
            leadZh: 'aucun（阳性单数）/ aucune（阴性单数）表示彻底的“零数量 / 没有任何”。它可以作宾语，也可以直接跟名词作主语（句首仍需配合动词前的 ne）：',
            examples: [
              { fr: 'Bette : Alors Tex, Tammy est malade ? — Tex : Aucune idée.', en: 'Bette: So Tex, is Tammy ill? — Tex: No idea (fem. l’idée → aucune).', zh: 'Tammy 生病了吗？—— 毫不知情。（idée 是阴性 → Aucune idée）', tag: 'Standalone Feminine' },
              { fr: 'Je n’ai reçu aucun coup de téléphone et aucune nouvelle depuis deux jours.', en: 'I haven’t received a single phone call (m.) and any news (f.) for two days.', zh: 'un coup（阳）→ aucun coup；une nouvelle（阴）→ aucune nouvelle。', tag: 'aucun vs aucune' },
              { fr: 'Aucune femme ne peut résister au charme de Tex.', en: 'Not a single woman can resist Tex’s charm. (subject position)', zh: '没有一个女人能抵挡 Tex 的魅力。（作主语，后接 ne peut）', tag: 'Subject aucun(e)' }
            ]
          },
          {
            id: 'neg_nini_sec',
            heading: '2. ne ... ni ... ni ("Neither ... Nor") Across Objects, Verbs & Subjects',
            headingZh: '二、ne ... ni ... ni（既不……也不……）连接宾语、动词与双主语',
            lead: 'Unlike English "neither ... nor", French REQUIRES "ne" (or "n’") in front of the verb! Watch Bette and Tex use ni...ni with time adverbs, two past participles, and two subjects at the start of the sentence:',
            leadZh: '用 ni...ni 时最常犯的错就是漏掉动词前面的 **ne / n’**！看下面对话里的三种连接方式：时间、动词动作、以及句首两个主语：',
            cartoon: {
              src: './assets/tex_cartoons/neg4_ni.gif',
              alt: 'Ni moi ni Fiona n’avons vu Tammy hier',
              caption: 'Notice mandatory "n’" even when "Ni moi ni Fiona" starts the sentence!',
              captionZh: '就算把 "Ni moi ni Fiona" 放句首，后面动词前也必须带 n’（n’avons vu）！'
            },
            dialogue: {
              title: 'Dialogue: Bette & Tex s’inquiètent pour Tammy',
              titleZh: '原版对话：到处找不到 Tammy',
              lines: [
                { speaker: 'Bette', fr: 'Et moi, je n’ai vu Tammy ni hier ni aujourd’hui.', en: 'And me, I saw Tammy neither yesterday nor today.', zh: '我也是，昨天和今天都没见到 Tammy。' },
                { speaker: 'Tex', fr: 'Ni moi ni Fiona n’avons vu Tammy hier. Et aujourd’hui, Tammy ne m’a ni téléphoné ni écrit un e-mail. Je m’inquiète. Tu crois qu’elle est partie avec un autre tatou ?', en: 'Neither I nor Fiona saw her yesterday. And today, Tammy neither called me nor wrote me an e-mail. I am worried. Do you think she left with another armadillo?', zh: '我和 Fiona 昨天也都没见着她。而且今天 Tammy 既没给我打电话也没发邮件。我好担心，你说她会不会跟别的犰狳跑了？' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'd55_d1',
            kind: 'fib',
            prompt: 'Tex Practice 1/8 (neg4 #1) — Negate with ne...ni...ni: Tex aime le rap et le rock. → Tex ___ ni le rap ___ le rock.',
            promptZh: 'Tex 第 1 题（双空）：Tex 既不喜欢说唱也不喜欢摇滚（保留定冠词 le）。',
            answers: ["n'aime / ni", 'n’aime / ni'],
            hint: 'First blank: n’aime (no pas!) · Second blank: ni.',
            audio: 'Tex n’aime ni le rap ni le rock.',
            explain: '"Tex n’aime ni le rap ni le rock." Definite articles (le/la/les) stay after ni!',
            explainZh: '记住不加 pas：Tex n’aime ni le rap ni le rock。'
          },
          {
            id: 'd55_d2',
            kind: 'fib',
            prompt: 'Tex Practice 2/8 (neg4 #2) — Negate with ni...ni: Tammy et Bette comprennent la poésie. → ___ Tammy ___ Bette ne comprennent la poésie de Tex.',
            promptZh: 'Tex 第 2 题（句首双主语）：Tammy 和 Bette 都不懂 Tex 的诗（首字母大写）。',
            answers: ['Ni / ni'],
            hint: 'Ni X ni Y + ne + plural verb.',
            audio: 'Ni Tammy ni Bette ne comprennent la poésie de Tex.',
            explain: '"Ni Tammy ni Bette ne comprennent la poésie de Tex."',
            explainZh: '句首“既非……也非……”用 Ni ... ni ... + ne。'
          },
          {
            id: 'd55_d3',
            kind: 'fib',
            prompt: 'Tex Practice 3/8 (neg4 #3) — Negate two verbs with ni...ni (note avoir stays once!): Fiona a bu et a fumé. → Fiona ___ ___ bu ___ fumé à la fête.',
            promptZh: 'Tex 第 3 题（连接两个过去分词）：Fiona 在派对上既没喝酒也没抽烟（n’a / ni / ni）。',
            answers: ["n'a / ni / ni", 'n’a / ni / ni'],
            hint: 'Wrap a single auxiliary: n’a + ni + bu + ni + fumé.',
            audio: 'Fiona n’a ni bu ni fumé à la fête.',
            explain: 'Share one auxiliary "n’a": "Fiona n’a ni bu ni fumé à la fête."',
            explainZh: '共有一个助动词："Fiona n’a ni bu ni fumé..."（前面不放 pas）。'
          },
          {
            id: 'd55_d4',
            kind: 'fib',
            prompt: 'Tex Practice 4/8 (neg4 #4) — Negate subjects: Le baseball et le basket font plaisir à Tex. → ___ le baseball ___ le basket ne font plaisir à Tex.',
            promptZh: 'Tex 第 4 题：棒球和篮球都不让 Tex 开心（句首 Ni / ni）。',
            answers: ['Ni / ni'],
            hint: 'Ni le baseball ni le basket ne font...',
            audio: 'Ni le baseball ni le basket ne font plaisir à Tex.',
            explain: '"Ni le baseball ni le basket ne font plaisir à Tex."',
            explainZh: 'Ni le baseball ni le basket ne font...'
          },
          {
            id: 'd55_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/8 (neg4 #5) — Negate with ne...aucun: Un éditeur a publié la poésie de Tex. → ___ éditeur ___ publié la poésie de Tex.',
            promptZh: 'Tex 第 5 题（主语 aucun + 助动词前省音）：没有任何一家出版社出版了 Tex 的诗（éditeur 阳性）。',
            answers: ["Aucun / n'a", 'Aucun / n’a'],
            hint: 'éditeur is masc. → Aucun + n’a.',
            audio: 'Aucun éditeur n’a publié la poésie de Tex.',
            explain: '"Un éditeur" → "Aucun éditeur n’a publié..."',
            explainZh: 'éditeur 为阳性 → "Aucun éditeur n’a publié..."。'
          },
          {
            id: 'd55_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/8 (neg4 #6) — Negate with ne...aucun(e): Bette a reçu une invitation. → Bette n’a reçu ___ invitation.',
            promptZh: 'Tex 第 6 题（l’invitation 阴性）：Bette 没收到任何一封邀请函。',
            answers: ['aucune'],
            hint: 'invitation is feminine → aucune!',
            audio: 'Bette n’a reçu aucune invitation.',
            explain: '"une invitation" (fem.) → "Bette n’a reçu aucune invitation."',
            explainZh: 'une invitation 是阴性 → 用阴性 "aucune"。'
          },
          {
            id: 'd55_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/8 (neg4 #7) — Negate with ne...aucun(e): Une femme peut résister au charme de Tex. → ___ femme ___ peut résister au charme de Tex.',
            promptZh: 'Tex 第 7 题（femme 阴性作主语）：没有一个女人能抵挡 Tex 的魅力。',
            answers: ['Aucune / ne'],
            hint: 'femme (fem.) → Aucune ... ne.',
            audio: 'Aucune femme ne peut résister au charme de Tex.',
            explain: '"Une femme" → "Aucune femme ne peut résister au charme de Tex."',
            explainZh: '阴性主语："Aucune femme ne peut..."。'
          },
          {
            id: 'd55_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/8 (neg4 #8) — Negate with ne...aucun(e): Édouard mange un hamburger. → Édouard ne mange ___ hamburger.',
            promptZh: 'Tex 第 8 题（hamburger 阳性）：Édouard 一个汉堡也不吃。',
            answers: ['aucun'],
            hint: 'hamburger is masculine → aucun.',
            audio: 'Édouard ne mange aucun hamburger.',
            explain: '"un hamburger" (masc.) → "Édouard ne mange aucun hamburger."',
            explainZh: 'un hamburger 为阳性 → "aucun hamburger"。'
          },
          {
            id: 'd55_d9',
            kind: 'choice',
            prompt: 'What happens to indefinite/partitive articles ("du vin, une bière") after "ni ... ni"?',
            promptZh: '在 "ni ... ni" 后面遇到不定冠词或部分冠词（如 du vin / une bière）时应该怎么办？',
            options: [
              'They drop completely: "Il ne boit ni vin ni bière."',
              'They stay unchanged: "Il ne boit ni du vin ni une bière."',
              'They shift to "des".',
              'You add "pas" before each ni.'
            ],
            answerIdx: 0,
            audio: 'Il ne boit ni vin ni bière.',
            explain: 'Indefinite and partitive articles disappear after ni...ni ("ni vin ni bière"), whereas definite articles remain ("ni le rap ni le rock").',
            explainZh: '口诀：ni...ni 后面“去不留定”——不定/部分冠词省略，定冠词（le/la/les）保留！'
          },
          {
            id: 'd55_d10',
            kind: 'choice',
            prompt: 'Notice verb agreement when two singular subjects use "Ni A ni B": "Ni Tex ni Édouard ___ venus."',
            promptZh: '两个单数名词用 "Ni Tex ni Édouard" 作主语时，动词通常用什么数？',
            options: ['Plural ("ne sont venus")', 'Singular ("n’est venu") only', 'No verb needed', 'Infinitive'],
            answerIdx: 0,
            audio: 'Ni Tex ni Édouard ne sont venus.',
            explain: 'Two distinct people/things joined by "Ni A ni B" take a plural verb + "ne": "Ni moi ni Fiona n’avons vu..."',
            explainZh: '并列两个主语（均未……）通常跟复数变位动词（如对话里的 Ni moi ni Fiona n’avons vu...）。'
          },
          {
            id: 'd55_d11',
            kind: 'fib',
            prompt: 'Quick response for "No idea!" (from féminin "une idée"): ___ idée !',
            promptZh: '常见高频口语回答：“毫无头绪 / 不知道！”（根据 idée 阴阳性填空）：',
            answers: ['Aucune', 'aucune'],
            hint: 'une idée → fem.!',
            audio: 'Aucune idée !',
            explain: '"une idée" is feminine → "Aucune idée !"',
            explainZh: 'idée 是阴性名词，所以固定说 "Aucune idée !"。'
          },
          {
            id: 'd55_d12',
            kind: 'fib',
            prompt: 'Notice "aucun" position in passé composé: Je n’ai reçu ___ nouvelle. (not a single piece of news — f.sg.)',
            promptZh: '复合过去时里 aucun 的位置（在过去分词 reçu 后面修饰名词 nouvelle）：',
            answers: ['aucune'],
            hint: 'nouvelle is feminine singular!',
            audio: 'Je n’ai reçu aucune nouvelle.',
            explain: 'Like a determiner, "aucun(e)" sits right before its noun (even after a past participle): "n’ai reçu aucune nouvelle".',
            explainZh: 'aucun/aucune 本身是限定词，永远紧贴在它修饰的名词前面（不插到助动词和过去分词之间！）。'
          }
        ],
        related: [
          { chapterId: 'ch5_negation', pageId: 'neg_5_6', label: '6.6 Restriction: ne...que ("Only")' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_13', label: 'Review 2.13: aucun vs. quelque' }
        ]
      },

      /* =========================================================
         PAGE 5.6: RESTRICTION NE...QUE ("ONLY")
      ========================================================= */
      {
        id: 'neg_5_6',
        code: '6.6',
        group: 'ne...que ("Only")',
        shortTitle: 'ne...que ("Only")',
        title: 'Restriction: ne...que ("Only") — Placement & Why Articles Don’t Shift to de!',
        titleZh: '限制表达 ne...que（“只 / 仅仅”）：重点词放 que 后面 & 不变 de 的大陷阱！',
        estMin: 3,
        summary: 'Stop confusing ne...pas with ne...que! Learn how "que" behaves like "seulement" (only), always goes directly BEFORE the restricted item, and NEVER triggers the negative de-shift (Trey n’écoute que DU rap!).',
        summaryZh: 'ne...que 外表长得像否定句，实质上是“肯定里的限制（仅仅 = seulement）”！因此它有一个极其关键的考点：**它后面的 un/une/des/du/de la 绝对不变成 de**（Trey 只听 du rap，不是 *de rap*）。含 Tex neg4 第 9–12 题与高阶对比。',
        cheatSummary: [
          { label: 'Rule 1: ne...que = seulement ("Only")', rule: 'Place "que / qu’" IMMEDIATELY before the specific noun, number, or phrase being restricted ("cela ne fait qu’un an", "Il n’y a que toi").', ruleZh: '结构实质：“只有 / 仅仅”，相当于 seulement。要把 que / qu’ 紧贴在你想限制的词前面（如 "cela ne fait qu’un an" 才仅过了一年）。' },
          { label: 'Rule 2: NO de-Shift with ne...que!', rule: 'Because ne...que is a positive restriction (you DO listen to rap—just ONLY rap!), indefinite & partitive articles STAY: "Trey n’écoute que DU rap" / "Je n’ai qu’UNE sœur" (NEVER *de!).', ruleZh: '考试必抓陷阱：因为 ne...que 实际上表示“还是有，只是仅此而已”，所以后面 **保留 un / une / des / du / de la**，绝不能像 ne...pas 那样改成 de！' }
        ],
        sections: [
          {
            id: 'neg_que_rule',
            heading: '1. Placement of que & Preserving du / un / des',
            headingZh: '一、que 的站位（紧贴被限制项）+ 绝对不变 de 规则',
            lead: 'Ne ... que is used to express a restriction ("only"). Notice how Bette and Tex say "only a year" (qu’un an) and "only you" (que toi) in the dialogue—and notice in Tex’s opening example "Trey n’écoute que du rap" that "du" does NOT change to "de"!',
            leadZh: '把 que / qu’ 放在你真正想“限定”的成分前面；在复合过去时里，que 通常跨在过去分词后面、紧挨被限制的宾语（Je n’ai bu qu’un café）！而且永远保留原冠词（du / un / une / des）。',
            dialogue: {
              title: 'Bette & Tex: ne ... que in Action',
              titleZh: '原版对话：才一年 / 只有你',
              lines: [
                { speaker: 'Bette', fr: 'Peut-être... Après tout, cela ne fait qu’un an que vous êtes ensemble...', en: 'Maybe... After all it has only been a year that you’ve been together...', zh: '也许吧……毕竟你们俩在一起才不过一年嘛……' },
                { speaker: 'Tex', fr: 'Oh, merci Bette ! Il n’y a que toi pour dire des choses pareilles !', en: 'Oh, thanks Bette! Only you can say such things!', zh: '哎哟谢谢你啊 Bette！也就只有你能说出这种话了！' }
              ]
            },
            examples: [
              { fr: 'Trey n’écoute que du rap. (vs. Tex n’écoute pas de rap.)', en: 'Trey only listens to rap (keeps "du"!) vs. Tex doesn’t listen to rap (shifts to "de").', zh: '对比：n’écoute que DU rap（保留 du） vs n’écoute pas DE rap（变 de）。', tag: 'Critical Contrast!' },
              { fr: 'J’ai mangé seulement une pomme. → Je n’ai mangé qu’une pomme.', en: 'In passé composé, qu’ stays AFTER "mangé", right before "une pomme"!', zh: '复合过去时注意：qu’ 放在过去分词 mangé 后面、名词 une pomme 前面！', tag: 'Passé Composé Order' }
            ],
            quickCheck: {
              prompt: 'Translate: "I only drink coffee (never tea)." Watch the partitive article!',
              promptZh: '翻译：“我只喝咖啡（不喝茶）。” 注意冠词变不变！',
              options: [
                'Je ne bois que du café.',
                'Je ne bois que de café.',
                'Je ne bois pas que du café.',
                'Je bois que du café.'
              ],
              answerIdx: 0,
              explain: 'In standard French: keep "ne" before verb + keep partitive "du" after "que": "Je ne bois que du café."',
              explainZh: 'ne...que 后面保留部分冠词 du："Je ne bois que du café."！'
            }
          }
        ],
        drills: [
          {
            id: 'd56_d1',
            kind: 'fib',
            prompt: 'Tex Practice (neg4 #9) — Rewrite with ne...que: Joe-Bob choisit les cours faciles. → Joe-Bob ne choisit ___ les cours faciles.',
            promptZh: 'Tex 第 9 题：Joe-Bob 只选简单的课。',
            answers: ['que'],
            hint: 'only = ne ... que.',
            audio: 'Joe-Bob ne choisit que les cours faciles.',
            explain: '"Joe-Bob ne choisit que les cours faciles."',
            explainZh: '动词后填 que，表示“只选”。'
          },
          {
            id: 'd56_d2',
            kind: 'fib',
            prompt: 'Tex Practice (neg4 #10) — ne...que: Édouard mange la cuisine française. → Édouard ne mange ___ la cuisine française.',
            promptZh: 'Tex 第 10 题：Édouard 只吃法国菜。',
            answers: ['que'],
            hint: 'only = ne ... que.',
            audio: 'Édouard ne mange que la cuisine française.',
            explain: '"Édouard ne mange que la cuisine française."',
            explainZh: '“只吃法国菜” → "ne mange que la cuisine française"。'
          },
          {
            id: 'd56_d3',
            kind: 'fib',
            prompt: 'Tex Practice (neg4 #11) — ne...que: Tammy adore Tex. → Tammy ___ Tex.',
            promptZh: 'Tex 第 11 题：Tammy 只爱慕 Tex（记住 adore 元音开头！）。',
            answers: ["n'adore que", 'n’adore que'],
            hint: 'n’ + adore + que.',
            audio: 'Tammy n’adore que Tex.',
            explain: '"adore" begins with a- → "Tammy n’adore que Tex."',
            explainZh: '元音动词省音："n’adore que"。'
          },
          {
            id: 'd56_d4',
            kind: 'fib',
            prompt: 'Tex Practice (neg4 #12) — ne...que: Tex lit la philosophie. → Tex ___ la philosophie.',
            promptZh: 'Tex 第 12 题：Tex 只读哲学书。',
            answers: ['ne lit que'],
            hint: 'ne + lit + que.',
            audio: 'Tex ne lit que la philosophie.',
            explain: '"Tex ne lit que la philosophie."',
            explainZh: 'Tex ne lit que la philosophie。'
          },
          {
            id: 'd56_d5',
            kind: 'fib',
            prompt: 'Dialogue drill (vowel elision before "un"): Après tout, cela ne fait ___ un an. (use qu’ without space? Check: blank replaces que/qu’ before "un")',
            promptZh: '对白原句填空（元音前省音）：毕竟才一年…… cela ne fait ___’un an（填两个字母）。',
            answers: ['qu'],
            hint: 'que before vowel u → qu.',
            audio: 'Cela ne fait qu’un an.',
            explain: 'Before "un", "que" elides to "qu’": "cela ne fait qu’un an".',
            explainZh: 'que 在元音（如 un, une, à）前缩合为 qu’（填 qu）。'
          },
          {
            id: 'd56_d6',
            kind: 'choice',
            prompt: 'Which sentence is grammatically RIGHT for "She only has one brother"?',
            promptZh: '“她只有一个哥哥/弟弟”哪句正确？',
            options: ["Elle n’a qu’un frère.", "Elle n’a que de frère.", "Elle n’a pas qu’un frère.", "Elle a qu’un frère."],
            answerIdx: 0,
            audio: 'Elle n’a qu’un frère.',
            explain: 'Keep "un" after "qu’" (never change it to "de" with ne...que!).',
            explainZh: 'ne...que 保留不定冠词 un："Elle n’a qu’un frère."。'
          },
          {
            id: 'd56_d7',
            kind: 'choice',
            prompt: 'Wait—what does "Elle n’a PAS QU’un frère" mean if someone DOES put "pas" before "que"?',
            promptZh: '如果真有人说了 "Elle n’a pas qu’un frère"（在 que 前加了个 pas），意思反而变成了什么？',
            options: [
              'She does NOT ONLY have one brother (= she has more/others too!).',
              'She has no brothers at all.',
              'She only has one brother.',
              'It is always meaningless.'
            ],
            answerIdx: 0,
            audio: 'Elle n’a pas qu’un frère.',
            explain: '"pas que..." literally negates "only" = "not only...". So for plain "only", NEVER include "pas"!',
            explainZh: 'n’... pas que = “不仅仅……”；单纯想说“只有”时千万别加 pas！'
          },
          {
            id: 'd56_d8',
            kind: 'choice',
            prompt: 'Where does "que" go in the passé composé: "I only invited my best friend."?',
            promptZh: '复合过去时“我只邀请了我最好的朋友”，que 应该放在哪里？',
            options: [
              'Je n’ai invité que mon meilleur ami.',
              'Je n’ai que invité mon meilleur ami.',
              'Je n’ai pas invité que mon meilleur ami.',
              'Je que n’ai invité mon meilleur ami.'
            ],
            answerIdx: 0,
            audio: 'Je n’ai invité que mon meilleur ami.',
            explain: 'Unlike "pas/rien/jamais", "que" moves AFTER the past participle to stand right in front of the restricted item ("que mon meilleur ami").',
            explainZh: '重要规则！因为 que 必须紧贴着被限制的对象，所以在复合过去时里它跨过过去分词，紧贴名词："n’ai invité que mon meilleur ami"！'
          },
          {
            id: 'd56_d9',
            kind: 'fib',
            prompt: 'Spotlight on "only you": Il n’y a ___ toi pour dire des choses pareilles !',
            promptZh: '高频口语句：“也就只有你会说这种话！”',
            answers: ['que'],
            hint: 'Il n’y a que toi...',
            audio: 'Il n’y a que toi pour dire des choses pareilles !',
            explain: '"Il n’y a que toi..." = There’s only you / Only you...',
            explainZh: '固定实用句式：Il n’y a que toi（只有你）。'
          },
          {
            id: 'd56_d10',
            kind: 'choice',
            prompt: 'Contrast pair: "Tex n’a bu ___ eau, mais Tammy n’a bu ___ vin." ("no water, only wine")',
            promptZh: '终极对比：“Tex 一点水也没喝，而 Tammy 只喝了酒。” 两个空格分别怎么选？',
            options: [
              'pas d’ / que du',
              'pas de l’ / que de',
              'que d’ / pas du',
              'pas d’ / que de'
            ],
            answerIdx: 0,
            audio: 'Tex n’a bu pas d’eau, mais Tammy n’a bu que du vin.',
            explain: 'True negation (pas) shifts partitive to d’ ("pas d’eau"); restriction (que) keeps "du" ("que du vin")!',
            explainZh: '完美对照：真否定 pas 变 d’（pas d’eau），限制词 que 保留 du（que du vin）！'
          }
        ],
        related: [
          { chapterId: 'ch5_negation', pageId: 'neg_5_7', label: '6.7 One-Word Sentences: oui vs. si, non, jamais!' }
        ]
      },

      /* =========================================================
         PAGE 5.7: ONE-WORD SENTENCES (OUI VS. SI, NON, PAS, RIEN...)
      ========================================================= */
      {
        id: 'neg_5_7',
        code: '6.7',
        group: 'One-Word Answers',
        shortTitle: 'oui vs. si & One-Word Negatives',
        title: 'One-Word Responses: oui vs. si, non vs. pas & Standalone rien / personne / jamais!',
        titleZh: '单词短句与高频考点：oui vs si（反驳否定问句！）、non vs pas 与独立回答',
        estMin: 4,
        summary: 'Master the #1 French conversation superpower: why you say SI (never oui!) to say "Yes, I do!" against a negative question ("Tu ne m’aimes plus ? — Si!"), distinguish Non vs. Pas vraiment, answer in one word (Rien ! / Personne ! / Jamais !), and complete all 12 Tex neg5 items!',
        summaryZh: '攻克法语最地道的交际核心：**si**（用来反驳带否定的疑问句：“你不爱我了吗？—— 爱啊！用 Si!”）vs **oui**（肯定问句的“是”）；**non** vs **pas（Pas vraiment 不算吧）**；以及直接用一个词干脆作答：**Rien ! / Personne ! / Jamais !**（不带 ne）。含 Tex neg5 全 12 题。',
        cheatSummary: [
          { label: 'oui vs. si ("Yes" Rule!)', rule: 'Affirmative question ("Tu es là ?") → OUI. Negative question ("Tu ne m’aimes PLUS ?") → SI ("Yes I DO!" contradicting the negative premise). Saying "oui" here sounds confusing!', ruleZh: '核心必考规则：对方问**肯定句**（你在吗？）答 **Oui**；对方问**否定句**（你不爱我了吗？）你要说是/才不是，必须用 **Si**！' },
          { label: 'One-Word Negatives (No ne!)', rule: 'Non = No (full sentence). Pas + adv/phrase negates part of a sentence ("Pas vraiment"). Standalone Rien ! / Personne ! / Jamais ! drop "ne" when standing alone as crisp answers!', ruleZh: '单独回答时**不用加 ne**：Non!（不）、Pas vraiment（不算/不怎么）、Rien!（没什么）、Personne!（没人）、Jamais!（决不）。' }
        ],
        sections: [
          {
            id: 'neg_oneword_si_non',
            heading: '1. Answering Affirmative vs. Negative Questions (oui / si / non / pas)',
            headingZh: '一、回答肯定问句与否定问句（oui vs si，non vs pas）',
            lead: 'French splits English "yes" into TWO words depending on whether the question was positive or negative. And "pas" without "ne" negates just a fragment like "Pas vraiment" (Not really).',
            leadZh: '英语的“Yes”在法语里一分为二：**oui** 回答肯定问句；**si** 专门用来推翻带有否定的问句（相当于“不，我爱啊 / 有的”）。此外 **pas** 可以单独修饰副词或短语：',
            cartoon: {
              src: './assets/tex_cartoons/neg5_non.gif',
              alt: 'Chez Tammy: Oui, Si, Non, Rien, Personne, Jamais!',
              caption: 'Chez Tammy: Tu ne m’aimes plus ? — Si, un peu. / Tu es fâchée ? — Pas vraiment.',
              captionZh: '看 Tex 怎么把“Tu ne m’aimes plus?”和“Qu’est-ce que tu fais? — Rien!”一次演活。'
            },
            dialogue: {
              title: 'Chez Tammy: Interrogatoire rapide',
              titleZh: '原版对话：灵魂连环七问',
              lines: [
                { speaker: 'Tex', fr: 'Tammy, tu es là ?', en: 'Tammy, are you there? (affirmative question)', zh: 'Tammy，你在家吗？' },
                { speaker: 'Tammy', fr: 'Oui.', en: 'Yes. (affirming a positive question → oui)', zh: '在啊。' },
                { speaker: 'Tex', fr: 'Tu ne m’aimes plus ?', en: 'You don’t love me anymore? (NEGATIVE question!)', zh: '你不再爱我了吗？' },
                { speaker: 'Tammy', fr: 'Si, un peu.', en: 'Yes (I do!), a little. (contradicting a negative → si!)', zh: '爱呀，有一点儿。（反驳否定问句用 Si！）' },
                { speaker: 'Tex', fr: 'Tammy, tu es malade ?', en: 'Tammy, are you sick?', zh: 'Tammy，你生病了吗？' },
                { speaker: 'Tammy', fr: 'Non !', en: 'No!', zh: '没有！' },
                { speaker: 'Tex', fr: 'Tu es fâchée ?', en: 'Are you mad?', zh: '你生气啦？' },
                { speaker: 'Tammy', fr: 'Pas vraiment.', en: 'Not really. (pas negates a single phrase)', zh: '也不算很气。' },
                { speaker: 'Tex', fr: 'Tammy, qu’est-ce que tu fais ? — Qui est avec toi ? — Tu vas me quitter pour un autre ?', en: 'What are you doing? — Who is with you? — Going to leave me?', zh: '你在干嘛呢？—— 谁和你在一起？—— 你会离开我找别人吗？' },
                { speaker: 'Tammy', fr: 'Rien ! — Personne ! — Jamais !', en: 'Nothing! — No one! — Never! (one-word negatives without "ne")', zh: '什么也没干！—— 没人！—— 决不会！（单词直答，不加 ne）' }
              ]
            },
            quickCheck: {
              prompt: 'Your French friend asks (negatively!): "Tu n’aimes pas le sirop d’érable ?" You DO love maple syrup! How do you answer?',
              promptZh: '朋友否定地问你：“你不喜欢枫糖浆吗（Tu n’aimes pas...）？” 其实你超爱！怎么回答“喜欢啊！”？',
              options: ['Si ! J’adore ça !', 'Oui ! J’adore ça !', 'Non !', 'Jamais !'],
              answerIdx: 0,
              explain: 'The question has a negative ("n’...pas"), and you are contradicting it with "Yes, I do!" → ALWAYS use "Si !"',
              explainZh: '对方问句带有否定（n’...pas），你要反驳并说“喜欢的！”时，必须说 **Si !**！'
            }
          }
        ],
        drills: [
          {
            id: 'd57_d1',
            kind: 'fib',
            prompt: 'Tex Practice 1/12 (neg5 #1) — One-word answer (rien, personne, jamais, oui, non, si): Qu’est-ce que Joe-Bob étudie ? ___.',
            promptZh: 'Tex 第 1 题：Joe-Bob 在学什么？（他啥也没学 → “什么也没有”）',
            answers: ['Rien', 'rien'],
            hint: 'Qu’est-ce que (what thing) → Rien.',
            audio: 'Qu’est-ce que Joe-Bob étudie ? Rien.',
            explain: 'Answering "What?" with a one-word negative → "Rien."',
            explainZh: '针对“学什么”回答“什么都没”填 Rien。'
          },
          {
            id: 'd57_d2',
            kind: 'fib',
            prompt: 'Tex Practice 2/12 (neg5 #2): Qu’est-ce que Tex fait pour encourager ses étudiants ? ___.',
            promptZh: 'Tex 第 2 题：Tex 做些什么来鼓励学生？（什么也不做）',
            answers: ['Rien', 'rien'],
            hint: 'Nothing = Rien.',
            audio: 'Qu’est-ce que Tex fait pour encourager ses étudiants ? Rien.',
            explain: 'What does Tex do? "Rien." (Nothing.)',
            explainZh: '“做了什么？” → "Rien."。'
          },
          {
            id: 'd57_d3',
            kind: 'fib',
            prompt: 'Tex Practice 3/12 (neg5 #3): Qui déteste Fiona ? ___. (everyone likes sweet Fiona!)',
            promptZh: 'Tex 第 3 题：谁讨厌 Fiona？（“没有人”讨厌她）',
            answers: ['Personne', 'personne'],
            hint: 'Qui (who) → Personne.',
            audio: 'Qui déteste Fiona ? Personne.',
            explain: 'Answering "Who?" with "Nobody" → "Personne."',
            explainZh: '针对“谁（Qui）”的单词否定回答填 Personne。'
          },
          {
            id: 'd57_d4',
            kind: 'fib',
            prompt: 'Tex Practice 4/12 (neg5 #4): Qui comprend l’esprit d’un tatou existentialiste ? ___.',
            promptZh: 'Tex 第 4 题：谁能理解存在主义犰狳的内心世界？（“没有人”）',
            answers: ['Personne', 'personne'],
            hint: 'Nobody = Personne.',
            audio: 'Qui comprend l’esprit d’un tatou existentialiste ? Personne.',
            explain: '"Personne." (No one understands an existentialist armadillo!)',
            explainZh: '同样针对 Qui（谁）回答“没人懂” → "Personne."。'
          },
          {
            id: 'd57_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 (neg5 #5): Quand est-ce que Joe-Bob va finir son diplôme ? ___.',
            promptZh: 'Tex 第 5 题：Joe-Bob 什么时候才能拿完学位？（“永远不会！”）',
            answers: ['Jamais', 'jamais'],
            hint: 'Quand (when) → Jamais.',
            audio: 'Quand est-ce que Joe-Bob va finir son diplôme ? Jamais.',
            explain: 'Answering "When?" with "Never" → "Jamais."',
            explainZh: '针对“什么时候（Quand）”填 "Jamais."。'
          },
          {
            id: 'd57_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 (neg5 #6): Quand est-ce que Tex va s’arrêter de fumer ? ___.',
            promptZh: 'Tex 第 6 题：Tex 什么时候戒烟？（“决不 / 永远不”）',
            answers: ['Jamais', 'jamais'],
            hint: 'Never = Jamais.',
            audio: 'Quand est-ce que Tex va s’arrêter de fumer ? Jamais.',
            explain: '"Jamais." (French existentialist armadillo never quits smoking!)',
            explainZh: '针对 Quand（何时戒烟）回答 "Jamais."。'
          },
          {
            id: 'd57_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 (neg5 #7 — Negative question!): Tex et Tammy ne sont plus amoureux ? ___ ! (Yes they ARE in love!)',
            promptZh: 'Tex 第 7 题：Tex 和 Tammy 不再相爱了吗？（不，人家可恩爱着呢！怎么答？）',
            answers: ['Si', 'si'],
            hint: 'Contradicting a NEGATIVE question ("ne sont plus")!',
            audio: 'Tex et Tammy ne sont plus amoureux ? Si !',
            explain: 'Negative question + "Yes they are!" → ALWAYS "Si !"',
            explainZh: '否定问句 + 肯定反驳（是的，依然相爱！）必须填 **Si**！'
          },
          {
            id: 'd57_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 (neg5 #8 — Negative question!): Édouard ne mange jamais trop ? ___ ! (Yes he DOES eat too much!)',
            promptZh: 'Tex 第 8 题：Édouard 从不吃太多吗？（才不是，他吃得可多着呢！怎么答？）',
            answers: ['Si', 'si'],
            hint: 'Contradicting a NEGATIVE question ("ne mange jamais")!',
            audio: 'Édouard ne mange jamais trop ? Si !',
            explain: 'Negative question ("ne...jamais") contradicted with "Yes he does!" → "Si !"',
            explainZh: '否定问句反驳“才怪，有的！”依然必须用 **Si**！'
          },
          {
            id: 'd57_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 (neg5 #9 — Affirmative question): Selon Tex, est-ce que Tammy est belle ? ___. (Yes)',
            promptZh: 'Tex 第 9 题（肯定问句）：依 Tex 看来，Tammy 漂亮吗？（答“是”）',
            answers: ['Oui', 'oui'],
            hint: 'Affirmative question + Yes → Oui.',
            audio: 'Selon Tex, est-ce que Tammy est belle ? Oui.',
            explain: 'Positive question + Yes → "Oui."',
            explainZh: '肯定问句答“是”用 "Oui."。'
          },
          {
            id: 'd57_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 (neg5 #10 — Affirmative question): Tex, est-il égoïste ? ___ ! (Yes, very selfish!)',
            promptZh: 'Tex 第 10 题（肯定问句）：Tex 自私吗？（答“是的！”）',
            answers: ['Oui', 'oui'],
            hint: 'Positive question + Yes → Oui.',
            audio: 'Tex, est-il égoïste ? Oui !',
            explain: 'Affirmative question answered "Yes" → "Oui !"',
            explainZh: '肯定问句（不含 ne...pas）回答“是的”用 "Oui !"。'
          },
          {
            id: 'd57_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 (neg5 #11 — Affirmative question): Tex et Tammy s’entendent toujours bien ? ___. (Actually no, they argue a lot!)',
            promptZh: 'Tex 第 11 题：Tex 和 Tammy 总是相处融洽吗？（其实并没有 → “不”）',
            answers: ['Non', 'non'],
            hint: 'One-word negative "No" = Non.',
            audio: 'Tex et Tammy s’entendent toujours bien ? Non.',
            explain: 'One-word "No" → "Non."',
            explainZh: '表示否定的“不”直接答 "Non."。'
          },
          {
            id: 'd57_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 (neg5 #12 — Affirmative question): Édouard aime le ketchup ? ___ ! (French chef hates ketchup → No!)',
            promptZh: 'Tex 第 12 题：法国大厨 Édouard 喜欢番茄酱吗？（“才不呢！”）',
            answers: ['Non', 'non'],
            hint: 'No! = Non.',
            audio: 'Édouard aime le ketchup ? Non !',
            explain: 'Answering "No!" → "Non !"',
            explainZh: '回答“不！”填 "Non !"。'
          }
        ],
        related: [
          { chapterId: 'ch5_negation', pageId: 'neg_5_1', label: 'Back to 6.1 Intro to Negation' },
          { chapterId: 'ch6_prepositions', pageId: 'pre_6_1', label: 'Continue → Ch 7 Prepositions (A2)' }
        ]
      }
    ]
  });
})();
