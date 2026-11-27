(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch5a_verbs_regular',
    code: 'Ch 5A',
    level: 'A1',
    category: 'verbs_a',
    icon: '🔤',
    title: 'Verbs I: Intro & -ER / -IR / -RE Families',
    titleZh: '第五章 A · 动词入门与三大动词族（-er / -ir / -re）',
    subtitle: 'Tex-style slow-paced deep mastery: 13 bite-sized pages covering verb fundamentals (infinitives, paradigms, participles, modals, transitivity & EN particle traps), regular & stem-changing -ER verbs (elision & liaison!), and the regular + irregular -IR and -RE families — with 12 original Tex cartoons & 152 drills.',
    subtitleZh: '对标 Tex 第五章前半部（10 篇原站精髓）拆分为 13 个轻松小页：法语动词入门全概念（不定式、变位范式、分词、助动词、情态动词、及物性、英语短语动词陷阱）、第一组 -er 规则动词（靴形静音规则、省音与联诵）、六大 -er 词干拼写变化、以及 -ir 与 -re 规则及高频不规则家族，配 12 张原版卡通与 152 题专练。',
    pages: [
      /* =========================================================
         PAGE 5A.1: INTRO TO VERBS I (DEFINITION, INFINITIVE & 3 CLASSES)
      ========================================================= */
      {
        id: 'v5a_1',
        code: '5A.1',
        group: 'Intro to Verbs',
        shortTitle: 'Infinitives & 3 Verb Classes',
        title: 'Introduction to Verbs (Part 1): Infinitives, Conjugation Paradigms & the 3 Regular Classes',
        titleZh: '动词入门（上）：词性判断、不定式 vs 变位范式与三大动词组',
        estMin: 3,
        summary: 'Learn how sentence role determines whether a word is a noun or verb ("access"), distinguish timeless infinitives from finite/conjugated forms (past, present, future), read a 6-person conjugation paradigm, and identify French’s 3 regular verb classes (-er, -ir, -re).',
        summaryZh: '理解“不定式（原形，不受时间限制）”与“限定式/变位形式（锚定过去/现在/将来时间）”的区别；学会看懂 6 个人称的“变位范式表（paradigm）”；掌握法语动词按词尾划分的三大变位组：第一组 -er、第二组 -ir、第三组 -re。',
        cheatSummary: [
          { label: 'Infinitive vs. Conjugated (Finite)', rule: 'Infinitive = base timeless form ("parler" / "to speak"). Conjugated = finite form anchored in tense, person & number ("je parle", "nous parlons").', ruleZh: '不定式（parler）不限时态与人称；变位形式（je parle / nous parlons）则通过词尾锚定时间、人称与单复数。' },
          { label: 'Three Regular Conjugation Classes', rule: '1st conjugation: -er (danser, regarder). 2nd conjugation: -ir (finir, obéir). 3rd conjugation: -re (vendre, entendre).', ruleZh: '法语动词三大阵营：第一组 -er（数量最多，最规则）、第二组 -ir（finir, obéir）、第三组 -re（vendre, entendre）。' }
        ],
        sections: [
          {
            id: 'v5a1_role_infinitive',
            heading: '1. Verbs by Role, Infinitives & Time-Anchored Conjugations',
            headingZh: '一、词性看语境、不定式与变位时态',
            lead: 'A verb is the action (or state) word of a sentence—the exact same spelling can act as a noun or a verb depending on its role (e.g. "Never give strangers access" [noun] vs. "If you can’t access the web pages" [verb]). Infinitives (like "to eat, to drink, to sleep") are unbound by time; conjugated (finite) forms anchor events in past, present, or future.',
            leadZh: '判断一个词是不是动词要看它在句中的功能（比如英语 "access" 既可作名词也可作动词）。不定式（to eat / parler）不受时间束缚；而把动词“变位（conjugate）”后就成为受时间、人称约束的限定形式：',
            cartoon: {
              src: './assets/tex_cartoons/v1_diedofboredom_75.gif',
              alt: 'Grammar boredom cartoon from Tex v1',
              caption: 'Grammar without confusion: understand WHY French verbs change endings by tense, person, and number!',
              captionZh: '搞清不定式、人称范式与三大后缀分组，动词变位就不再枯燥或混乱！'
            },
            table: {
              headers: ['Concept', 'English Example', 'French / Grammar Takeaway'],
              rows: [
                { cols: ['Noun vs. Verb Role', 'give access (N) vs. access pages (V)', 'Role in the sentence decides the part of speech.'] },
                { cols: ['Infinitive (Timeless)', 'to eat, to drink, to sleep, to study', 'French infinitives end in -er, -ir, or -re (no "to").'] },
                { cols: ['Past Finite Form', 'I studied French in high school.', 'Anchored in past tense.'], audio: 'J’ai étudié le français.' },
                { cols: ['Present Finite Form', 'I am studying French this semester.', 'Anchored in present tense.'], audio: 'J’étudie le français.' },
                { cols: ['Future Finite Form', 'I will study French next year.', 'Anchored in future tense.'], audio: 'J’étudierai le français.' }
              ]
            }
          },
          {
            id: 'v5a1_paradigm_classes',
            heading: '2. Conjugation Paradigm ("parler") & the 3 Regular Classes',
            headingZh: '二、六人称变位范式表（parler）与三大动词组',
            lead: 'Verbs are always listed in a 6-slot pattern (paradigm) by person (1st, 2nd, 3rd) and number (singular vs. plural), followed by their regular class group:',
            leadZh: '所有法语动词变位表都严格按照“第一/二/三人称 × 单/复数”共 6 格排列，并根据不定式最后两个字母分成三大规则组：',
            table: {
              headers: ['Person', 'Singular (parler — to speak)', 'Plural (parler — to speak)'],
              rows: [
                { cols: ['1st Person', 'je parle (I speak)', 'nous parlons (we speak)'], audio: 'je parle, nous parlons' },
                { cols: ['2nd Person', 'tu parles (you speak)', 'vous parlez (you speak)'], audio: 'tu parles, vous parlez' },
                { cols: ['3rd Person', 'il / elle / on parle (he/she/one speaks)', 'ils / elles parlent (they speak)'], audio: 'il parle, ils parlent' }
              ]
            },
            examples: [
              { fr: '1st conjugation (-er verbs): parler, danser (to dance), regarder (to watch)', en: 'The largest and most productive regular French verb class.', zh: '第一变位组（-er）：最常见、最规则（90% 新动词都在这一组）。', tag: '-ER Class' },
              { fr: '2nd conjugation (-ir verbs): finir (to finish), obéir (to obey)', en: 'Regular -ir family (distinct from irregular -ir verbs like ouvrir/partir).', zh: '第二变位组（-ir）：完成类动作、以 -issons 复数变化为特征。', tag: '-IR Class' },
              { fr: '3rd conjugation (-re verbs): vendre (to sell), entendre (to hear)', en: 'Regular -re family (note: Tex glosses entendre as hear/listen here).', zh: '第三变位组（-re）：词干往往在第三人称单数不加额外词尾。', tag: '-RE Class' }
            ],
            quickCheck: {
              prompt: 'In the conjugation paradigm for "parler", which two dimensions organize the 6 forms?',
              promptZh: '动词变位范式表的 6 个格子是由哪两个语法维度组成的？',
              options: [
                'Person (1st, 2nd, 3rd) and Number (singular vs. plural)',
                'Gender (masc. vs. fem.) and Case (nominative vs. accusative)',
                'Mood (indicative vs. imperative) and Aspect (perfect vs. imperfect)',
                'Article (definite vs. partitive) and Elision'
              ],
              answerIdx: 0,
              explain: 'Conjugation tables are organized by person (1st, 2nd, 3rd) × number (singular, plural).',
              explainZh: '传统变位表由“人称（第一/二/三人称）× 单复数”共 6 格组成。'
            }
          }
        ],
        drills: [
          {
            id: 'd5a1_d1',
            kind: 'choice',
            prompt: 'Why is the base form "parler" called an INFINITIVE (from "infinity")?',
            promptZh: '为什么词典原形 parler 被称为“不定式（infinitive）”？',
            options: [
              'It is not bound by time (tense) or a specific grammatical subject.',
              'It has infinitely many irregular endings.',
              'It can only be used in the future tense.',
              'It requires an auxiliary verb every time.'
            ],
            answerIdx: 0,
            audio: 'parler, danser, regarder',
            explain: 'Like infinity, an infinitive is unbound by time (past/present/future) or person.',
            explainZh: '不定式不绑定具体时间或人称，就像英文的 "to speak"。'
          },
          {
            id: 'd5a1_d2',
            kind: 'choice',
            prompt: 'Which term describes a conjugated verb form anchored in time (past, present, or future)?',
            promptZh: '已经被“锚定在过去、现在或将来时间中”的变位动词叫什么形式？',
            options: ['Finite form (conjugated form)', 'Infinitive', 'Definite article', 'Preposition'],
            answerIdx: 0,
            audio: 'je parle',
            explain: 'Finite (conjugated) forms refer to events anchored in time and tied to a subject.',
            explainZh: '与 infinitive 相对，变位后的动词形式称为 finite form（限定式）。'
          },
          {
            id: 'd5a1_d3',
            kind: 'choice',
            prompt: 'In "Never give strangers access to your account", what part of speech is "access"?',
            promptZh: '在 "Never give strangers access..." 中，access 充当什么词性？',
            options: ['Noun (something you give)', 'Verb (an action)', 'Adverb', 'Modal'],
            answerIdx: 0,
            explain: 'Its role in the sentence ("give strangers access") makes it a noun here.',
            explainZh: '此处作 give 的直接宾语“东西/权限”，因此是名词。'
          },
          {
            id: 'd5a1_d4',
            kind: 'choice',
            prompt: 'Which pair belongs to French’s FIRST conjugation (-er verbs)?',
            promptZh: '以下哪一组属于法语第一变位组（-er 动词）？',
            options: ['danser, regarder', 'finir, obéir', 'vendre, entendre', 'être, avoir'],
            answerIdx: 0,
            audio: 'danser, regarder',
            explain: 'First conjugation = infinitives ending in -er (parler, danser, regarder).',
            explainZh: '以 -er 结尾的规则动词为第一组（danser, regarder）。'
          },
          {
            id: 'd5a1_d5',
            kind: 'choice',
            prompt: 'Which pair belongs to French’s SECOND conjugation (-ir verbs)?',
            promptZh: '以下哪一组属于法语第二变位组（-ir 规则动词）？',
            options: ['finir, obéir', 'danser, regarder', 'vendre, entendre', 'aller, faire'],
            answerIdx: 0,
            audio: 'finir, obéir',
            explain: 'Second conjugation = regular -ir verbs like finir (to finish) and obéir (to obey).',
            explainZh: '规则 -ir 动词（如 finir, obéir）属于第二变位组。'
          },
          {
            id: 'd5a1_d6',
            kind: 'choice',
            prompt: 'Which pair belongs to French’s THIRD conjugation (-re regular verbs)?',
            promptZh: '以下哪一组属于法语第三变位组（-re 规则动词）？',
            options: ['vendre, entendre', 'parler, danser', 'finir, obéir', 'partir, dormir'],
            answerIdx: 0,
            audio: 'vendre, entendre',
            explain: 'Third conjugation regular pattern = -re verbs like vendre (to sell) and entendre (to hear).',
            explainZh: '规则 -re 动词（vendre, entendre）属于第三组。'
          },
          {
            id: 'd5a1_d7',
            kind: 'fib',
            prompt: '1st person plural of "parler": nous ___ (we speak)',
            promptZh: '填空：我们说话（第一人称复数）：nous ___',
            answers: ['parlons'],
            hint: 'nous ending for -er verbs is -ons.',
            audio: 'nous parlons',
            explain: '1st person plural takes -ons → nous parlons.',
            explainZh: '第一人称复数 nous 对应 -ons 词尾：nous parlons。'
          },
          {
            id: 'd5a1_d8',
            kind: 'fib',
            prompt: '2nd person plural of "parler": vous ___ (you speak)',
            promptZh: '填空：你们/您说话（第二人称复数）：vous ___',
            answers: ['parlez'],
            hint: 'vous ending is -ez.',
            audio: 'vous parlez',
            explain: '2nd person plural takes -ez → vous parlez.',
            explainZh: '第二人称复数 vous 对应 -ez 词尾：vous parlez。'
          },
          {
            id: 'd5a1_d9',
            kind: 'fib',
            prompt: '3rd person plural of "parler": ils ___ (they speak)',
            promptZh: '填空：他们说话（第三人称复数）：ils ___',
            answers: ['parlent'],
            hint: 'ils/elles ending is silent -ent.',
            audio: 'ils parlent',
            explain: '3rd person plural takes silent -ent → ils parlent.',
            explainZh: '第三人称复数 ils/elles 词尾是静音的 -ent：ils parlent。'
          },
          {
            id: 'd5a1_d10',
            kind: 'fib',
            prompt: '2nd person singular of "parler": tu ___ (you speak)',
            promptZh: '填空：你说话（第二人称单数）：tu ___',
            answers: ['parles'],
            hint: 'tu ALWAYS loves -s!',
            audio: 'tu parles',
            explain: '2nd person singular takes -es → tu parles.',
            explainZh: '第二人称单数 tu 固定带 -s：tu parles。'
          }
        ],
        related: [
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_2', label: '5A.2 Intro II: Participles, Modals & Phrasal Traps' }
        ]
      },

      /* =========================================================
         PAGE 5A.2: INTRO TO VERBS II (PARTICIPLES, AUXILIARIES, MODALS, TRANSITIVITY & GET-TRAPS)
      ========================================================= */
      {
        id: 'v5a_2',
        code: '5A.2',
        group: 'Intro to Verbs',
        shortTitle: 'Participles, Modals & "to get" Traps',
        title: 'Introduction to Verbs (Part 2): Participles, Auxiliaries, Modals, Transitivity & English Particle Traps',
        titleZh: '动词入门（下）：现在/过去分词、助动词与复合时态、情态动词、及物性及英语 "get" 陷阱',
        estMin: 4,
        summary: 'Distinguish present (-ant) and past participles (used in compound tenses like passé composé or as agreeing adjectives), simple vs. compound tenses (avoir/être), modal urgency (peut / devrait / doit), transitive vs. intransitive verbs, and why English "get + particle" verbs translate as single distinct French verbs.',
        summaryZh: '掌握法语动词最核心的五大概念：① 现在分词（-ant）与过去分词（组成复合时态或作形容词性数配合）；② 简单时态 vs 助动词 avoir/être 构成的复合时态；③ 情态动词表说话人态度与紧急程度（peut / devrait / doit）；④ 及物动词 vs 不及物动词；⑤ 英语动词+小品词（如 to get about/better/out/up）必须整体翻译成不同法语动词！',
        cheatSummary: [
          { label: 'Two Participles (Non-Conjugated)', rule: 'Present (-ant, often adj.: "des animaux fascinants") & Past (compound tense "Tex a perdu une lettre" OR agreeing adj. "la lettre perdue").', ruleZh: '现在分词（-ant，常作形容词并与名词配合）与过去分词（既用于 passé composé 等复合时态，也可作形容词性数配合）。' },
          { label: 'Never Split EN "verb + particle"', rule: 'to get about → se déplacer · to get better → se remettre · to get out → sortir / descendre · to get up → se lever.', ruleZh: '英语 "get + 介词/副词" 要作为一个整体意群去对应完全不同的法语动词，绝对不能拆词直译！' }
        ],
        sections: [
          {
            id: 'v5a2_participles_aux',
            heading: '1. Present & Past Participles · Simple vs. Compound Tenses',
            headingZh: '一、现在分词与过去分词 · 简单时态 vs 复合时态',
            lead: 'Unlike 6-person conjugations, participles have two forms derived from the infinitive. Auxiliary ("helping") verbs avoir and être combine with a past participle to build compound tenses (such as the passé composé):',
            leadZh: '分词不是按六个人称变位，而是由不定式衍生出的两类特殊形式；普通助动词 avoir 与 être 则负责和过去分词搭档组成复合时态：',
            examples: [
              { fr: 'Les tatous sont des animaux fascinants.', en: 'Armadillos are fascinating animals.', zh: '现在分词 fascinant（词尾 -ant）用作形容词时，必须与复数名词 animaux 配合加 -s！', tag: 'Present Participle' },
              { fr: 'Tex a perdu une lettre d’amour de Bette.', en: 'Tex lost a love letter from Bette.', zh: '复合过去时：助动词 avoir (a) + 过去分词 perdu（不作形容词配合）。', tag: 'Past Participle (Verb)' },
              { fr: 'Et Tammy a trouvé la lettre perdue !', en: 'And Tammy found the lost letter!', zh: '过去分词用作形容词修饰阴性 la lettre 时，必须配合加 -e → perdue！', tag: 'Past Participle (Adj.)' },
              { fr: 'Simple: Joe-Bob écoute de la musique country. vs. Compound: Joe-Bob a écouté de la musique country.', en: 'Simple present (1 verb word) vs. Compound past (auxiliary a + past participle écouté).', zh: '只有主动词 = 简单时态；助动词 + 过去分词 = 复合时态。', tag: 'Simple vs. Compound' }
            ]
          },
          {
            id: 'v5a2_modals_trans_get',
            heading: '2. Modals ("Moody Verbs"), Transitivity & English "get + Particle" Traps',
            headingZh: '二、情态动词的语气梯度、及物性及英语 "get" 短语对照',
            lead: 'Modal verbs show the speaker’s attitude or urgency (likelihood vs. moral obligation). Transitive verbs transfer action to a direct object (S + V + DO), while intransitive verbs allow no direct object. Crucially, English phrasal verbs like "to get + particle" must be translated as a single unit in French!',
            leadZh: '情态动词表达可能性或义务紧迫感；及物动词必须带直接宾语，不及物动词不能带直接宾语；英语“动词 + 小品词”千万别逐词直译：',
            cartoon: {
              src: './assets/tex_cartoons/v1_quitter.gif',
              alt: 'Tex peut / devrait / doit quitter la France',
              caption: 'Increasing modal urgency: Tex peut quitter la France (can) → devrait (should) → doit (must!!).',
              captionZh: '情态动词语气递进：peut（可以）→ devrait（应该！）→ doit（必须！！）。'
            },
            table: {
              headers: ['Category', 'Example / Contrast', 'Meaning & Grammar Rule'],
              rows: [
                { cols: ['Modals (Urgency)', 'Tex peut / devrait / doit quitter la France.', 'can / should! / must!! (speaker’s attitude)'], audio: 'Tex peut quitter la France. Tex devrait quitter la France. Tex doit quitter la France.' },
                { cols: ['Transitive', 'Tex (S) écrit un poème (DO).', 'Requires a direct object receiving the action.'], audio: 'Tex écrit un poème.' },
                { cols: ['Intransitive', 'Tex (S) sort.', 'No direct object permitted.'], audio: 'Tex sort.' },
                { cols: ['to get about', 'se déplacer', 'to move around (translate as ONE unit!)'], audio: 'se déplacer' },
                { cols: ['to get better', 'se remettre', 'to recover (NEVER "obtenir mieux"!)'], audio: 'se remettre' },
                { cols: ['to get out', 'sortir, descendre', 'to leave / step out / get off'], audio: 'sortir, descendre' },
                { cols: ['to get up', 'se lever', 'to get out of bed'], audio: 'se lever' }
              ]
            },
            quickCheck: {
              prompt: 'Why is "Je dois étudier" a modal construction, whereas "J’ai étudié" is a compound tense?',
              promptZh: '为什么 "Je dois étudier" 是情态结构，而 "J’ai étudié" 是复合助动词结构？',
              options: [
                'Modals (devoir/pouvoir/vouloir) express speaker attitude + infinitive; common auxiliaries (avoir/être) form tenses + past participle.',
                'Modals never conjugate; avoir never combines with verbs.',
                'Modals require a direct object; avoir is always intransitive.',
                'Both mean the exact same thing.'
              ],
              answerIdx: 0,
              explain: 'Common auxiliaries (avoir/être) form compound tenses (+ past participle); modals ("moody verbs") express necessity/possibility/ability (+ infinitive).',
              explainZh: '普通助动词（avoir/être + 过去分词）构建复合时态；情态动词（+ 不定式）表达说话人的态度、能力或义务。'
            }
          }
        ],
        drills: [
          {
            id: 'd5a2_d1',
            kind: 'choice',
            prompt: 'In "Les tatous sont des animaux fascinants", why does the present participle end in -ants?',
            promptZh: '在 "des animaux fascinants" 中，现在分词为什么末尾有 -s？',
            options: [
              'When used as an adjective, a present participle (-ant) agrees in gender & number with its noun.',
              'All French verbs take -s in the plural.',
              'It is conjugated with ils.',
              'It is a typo for fascinant.'
            ],
            answerIdx: 0,
            audio: 'Les tatous sont des animaux fascinants.',
            explain: 'Used adjectivally, "fascinant" agrees with masculine plural "des animaux" → fascinants.',
            explainZh: '分词用作形容词时，必须与所修饰名词（animaux，阳性复数）进行性数配合。'
          },
          {
            id: 'd5a2_d2',
            kind: 'choice',
            prompt: 'Why is it "Tex a perdu une lettre" (no -e) vs. "la lettre perdue" (-e added)?',
            promptZh: '为什么第一句写 perdu 而第二句写 perdue？',
            options: [
              'In "a perdu" it forms the compound past verb; in "la lettre perdue" it acts as an adjective agreeing with feminine "la lettre".',
              'Tammy is talking in the second sentence so every word gets -e.',
              '"une lettre" is masculine and "la lettre" is feminine.',
              'Past participles never take -e after avoir.'
            ],
            answerIdx: 0,
            audio: 'Tex a perdu une lettre. Tammy a trouvé la lettre perdue.',
            explain: 'Adjectival past participles agree with the noun they qualify (la lettre → perdue).',
            explainZh: 'a perdu 是复合过去时动词结构（有直接宾语在后，不加 e）；la lettre perdue 中 perdue 作定语形容词，配合阴性 lettre 加 e。'
          },
          {
            id: 'd5a2_d3',
            kind: 'choice',
            prompt: 'Which sentence is in a COMPOUND tense (verb + auxiliary)?',
            promptZh: '下面哪一句使用了“复合时态”（助动词 + 主动词过去分词）？',
            options: [
              'Joe-Bob a écouté de la musique country.',
              'Joe-Bob écoute de la musique country.',
              'Tex sort.',
              'Nous parlons français.'
            ],
            answerIdx: 0,
            audio: 'Joe-Bob a écouté de la musique country.',
            explain: '"a écouté" combines the auxiliary "avoir" (a) with the past participle "écouté".',
            explainZh: 'a（avoir 助动词）+ écouté（过去分词）= 复合过去时。'
          },
          {
            id: 'd5a2_d4',
            kind: 'choice',
            prompt: 'Rank Tex’s modals from lowest to highest urgency:',
            promptZh: '将以下三个情态动词按紧急程度从低到高排序：',
            options: [
              'peut (can) < devrait (should) < doit (must)',
              'doit < peut < devrait',
              'devrait < doit < peut',
              'peut < doit < devrait'
            ],
            answerIdx: 0,
            audio: 'Tex peut quitter la France. Tex devrait quitter la France. Tex doit quitter la France.',
            explain: 'Possibility (peut) → recommendation (devrait) → strong obligation (doit).',
            explainZh: '可能/可以（peut）< 建议/应当（devrait）< 必须（doit）。'
          },
          {
            id: 'd5a2_d5',
            kind: 'choice',
            prompt: 'Which sentence uses an INTRANSITIVE verb (no direct object)?',
            promptZh: '哪一句使用的是不及物动词（后不接直接宾语）？',
            options: [
              'Tex sort.',
              'Tex écrit un poème.',
              'Tex a perdu une lettre.',
              'Joe-Bob écoute la radio.'
            ],
            answerIdx: 0,
            audio: 'Tex sort.',
            explain: 'Transitive verbs transfer action to a direct object ("un poème"); intransitive "sortir" takes none here.',
            explainZh: 'Tex sort 没有动作承受对象，是不及物动词。'
          },
          {
            id: 'd5a2_d6',
            kind: 'choice',
            prompt: 'How do you translate English "to get up" (out of bed) into French?',
            promptZh: '英语 "to get up（起床）" 应该整体对应哪一个法语动词？',
            options: ['se lever', 'se déplacer', 'se remettre', 'obtenir haut'],
            answerIdx: 0,
            audio: 'se lever',
            explain: 'Never translate "get + up" word-for-word! English phrasal verbs map to distinct French verbs (se lever).',
            explainZh: '千万别拆开直译 get 和 up，法语用单一反身动词 se lever。'
          },
          {
            id: 'd5a2_d7',
            kind: 'fib',
            prompt: 'Complete the agreeing past participle (adj.): Tammy a trouvé la lettre ___ ! (perdre)',
            promptZh: '形容词性过去分词配合填空（阴性单数 la lettre）：Tammy a trouvé la lettre ___ !',
            answers: ['perdue'],
            hint: 'perdu + feminine -e.',
            audio: 'Tammy a trouvé la lettre perdue !',
            explain: 'la lettre (feminine singular) → perdue.',
            explainZh: 'la lettre 是阴性单数，perdu 加 -e 变成 perdue。'
          },
          {
            id: 'd5a2_d8',
            kind: 'fib',
            prompt: 'Modal urgency ("must"): Tex ___ quitter la France !! (devoir, 3rd sg.)',
            promptZh: '填空（“必须”离开法国）：Tex ___ quitter la France !!',
            answers: ['doit'],
            hint: 'il/Tex form of devoir.',
            audio: 'Tex doit quitter la France !',
            explain: 'il doit = he must.',
            explainZh: 'devoir 第三人称单数为 doit。'
          },
          {
            id: 'd5a2_d9',
            kind: 'fib',
            prompt: 'Translate "to get better / recover" as one French pronominal verb: se ___',
            promptZh: '英语短语 "to get better（康复/好转）" 对应的法语动词：se ___',
            answers: ['remettre'],
            hint: 'starts with r..., ends in -mettre.',
            audio: 'se remettre',
            explain: 'to get better (recover) = se remettre.',
            explainZh: 'to get better = se remettre。'
          },
          {
            id: 'd5a2_d10',
            kind: 'fib',
            prompt: 'Translate "to get about / move around": se ___',
            promptZh: '英语短语 "to get about（四处走动）" 对应的法语动词：se ___',
            answers: ['déplacer', 'deplacer'],
            hint: 'starts with d..., related to "place".',
            audio: 'se déplacer',
            explain: 'to get about (move around) = se déplacer.',
            explainZh: 'to get about = se déplacer。'
          }
        ],
        related: [
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_1', label: '5A.1 Intro I: Infinitives & Classes' },
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_3', label: '5A.3 Regular -ER Verbs & the Boot Pattern' }
        ]
      },

      /* =========================================================
         PAGE 5A.3: REGULAR -ER VERBS I (BOOT PATTERN & 21 CORE VERBS)
      ========================================================= */
      {
        id: 'v5a_3',
        code: '5A.3',
        group: 'Regular -er Verbs',
        shortTitle: '-ER Endings, Boot Pattern & 21 Verbs',
        title: 'Regular -ER Verbs (Part 1): Endings, the 4-Form Silent "Boot" & 21 Core Verbs',
        titleZh: '第一组规则 -er 动词（上）：词尾、四格同音“靴子规律”与 21 个核心动词',
        estMin: 4,
        summary: 'Form the stem by dropping -er and adding -e, -es, -e, -ons, -ez, -ent. Master French’s biggest pronunciation secret: all 4 endings inside the "boot" (-e, -es, -e, -ent) are completely silent, so je parle, tu parles, il parle, and ils parlent sound identical! Plus memorize all 21 essential Tex -er verbs.',
        summaryZh: '掌握数量最庞大的第一变位组（-er）：去掉 -er 得词干，加上 -e, -es, -e, -ons, -ez, -ent。记住最大发音秘密：“靴子区域”内的四个词尾（je, tu, il, ils）全部不发音，因此 parle / parles / parle / parlent 读音完全一样！只有 nous (-ons) 和 vous (-ez) 读出词尾。同时掌握 Tex 精选的 21 个日常 -er 动词。',
        cheatSummary: [
          { label: 'How to Conjugate Regular -ER', rule: 'Drop -er → stem + (-e, -es, -e, -ons, -ez, -ent). Past participle = stem + -é (parlé).', ruleZh: '去 -er 加词尾：-e, -es, -e, -ons, -ez, -ent；过去分词把 -er 换成 -é（parlé）。' },
          { label: 'The Silent "Boot" Shape', rule: 'je parle, tu parles, il parle, ils parlent ALL sound like /paʁl/! ONLY nous parlons (/ɔ̃/) and vous parlez (/e/) sound the ending.', ruleZh: '靴形同音记忆：je / tu / il / ils 四个词尾全哑巴，只有靴子外面的 nous (-ons) 和 vous (-ez) 词尾发音！' }
        ],
        sections: [
          {
            id: 'v5a3_boot',
            heading: '1. The -ER Endings & the 4-Silent-Ending "Boot" Pattern',
            headingZh: '一、-er 变位词尾与“靴形静音规律”',
            lead: 'Listen to how je parle, tu parles, il/elle/on parle, and ils/elles parlent all sound identical even though they are spelled differently—only nous (-ons) and vous (-ez) pronounce their endings:',
            leadZh: '看下方靴子图：je / tu / il / ils 这四格连起来像一只靴子，它们虽然拼写不同，但词尾全都静音！',
            cartoon: {
              src: './assets/tex_cartoons/ver1_boot.gif',
              alt: 'The -ER boot conjugation pattern',
              caption: 'Four silent endings form a boot: -e, -es, -e, and -ent are ALL silent! Only -ons and -ez are pronounced.',
              captionZh: '四个静音词尾（-e, -es, -e, -ent）正好构成一只靴子；唯有 nous (-ons) 和 vous (-ez) 读出词尾。'
            },
            table: {
              headers: ['Person', 'Singular (parler — p.p. parlé)', 'Plural (parler)', 'Ending Sound'],
              rows: [
                { cols: ['1st', 'je parle', 'nous parlons', 'sg: silent -e · pl: /ɔ̃/ (-ons)'], audio: 'je parle, nous parlons' },
                { cols: ['2nd', 'tu parles', 'vous parlez', 'sg: silent -es · pl: /e/ (-ez)'], audio: 'tu parles, vous parlez' },
                { cols: ['3rd', 'il/elle/on parle', 'ils/elles parlent', 'BOTH sg & pl end silent!'], audio: 'il parle, ils parlent' }
              ]
            },
            examples: [
              { fr: 'Tex, il parle français ? Mais c’est un tatou.', en: 'Tex speaks French? But he’s an armadillo.', zh: '他讲法语？可他是只犰狳啊！', tag: 'il parle' },
              { fr: 'Tex : Bien sûr je parle français et Tammy, elle aussi, elle parle français.', en: 'Tex: Of course, I speak French and Tammy, too, she speaks French.', zh: '当然我说法语，Tammy 也说法语。', tag: 'je / elle parle' },
              { fr: 'Eh bien dis donc, même les tatous parlent français au Texas ?', en: 'Well, I’ll be, even the armadillos speak French in Texas?', zh: '天哪，连德州的犰狳都说法语？！（注意 parle 与 parlent 同音！）', tag: 'parlent' }
            ]
          },
          {
            id: 'v5a3_21verbs',
            heading: '2. Tex’s 21 Essential Regular -ER Verbs',
            headingZh: '二、Tex 必背 21 个常用第一组 -er 动词',
            lead: 'All 21 verbs below follow the exact same -e, -es, -e, -ons, -ez, -ent pattern in the present tense (and note that chercher, écouter, regarder take DIRECT objects with NO preposition!):',
            leadZh: '下面这 21 个核心动词现在时完全套用 parler 的变位规则（特别注意 chercher / écouter / regarder 直接接宾语不加介词）：',
            table: {
              headers: ['Verb & Meaning', 'Verb & Meaning', 'Verb & Meaning'],
              rows: [
                { cols: ['adorer — to adore', 'donner — to give', 'présenter — to introduce'], audio: 'adorer, donner, présenter' },
                { cols: ['aimer — to like / love', 'écouter — to listen to', 'regarder — to watch / look at'], audio: 'aimer, écouter, regarder' },
                { cols: ['aimer mieux — to prefer', 'étudier — to study', 'rencontrer — to meet (by chance)'], audio: 'aimer mieux, étudier, rencontrer' },
                { cols: ['chanter — to sing', 'habiter — to live (reside)', 'rester — to stay / remain'], audio: 'chanter, habiter, rester' },
                { cols: ['chercher — to look for', 'jouer — to play', 'téléphoner (à) — to telephone'], audio: 'chercher, jouer, téléphoner' },
                { cols: ['danser — to dance', 'montrer — to show', 'travailler — to work'], audio: 'danser, montrer, travailler' },
                { cols: ['demander — to ask', 'détester — to hate / detest', 'trouver — to find'], audio: 'demander, détester, trouver' }
              ]
            },
            quickCheck: {
              prompt: 'Do "il parle" and "ils parlent" sound different when spoken aloud?',
              promptZh: '读出来时，“il parle” 和 “ils parlent” 听起来有区别吗？',
              options: [
                'No — both -e and -ent are completely silent, so both sound like /il paʁl/.',
                'Yes — -ent is pronounced like /ɑ̃t/.',
                'Yes — ils parlent is pronounced /paʁlɛ/.',
                'Yes — you always pronounce the -t in -ent.'
              ],
              answerIdx: 0,
              explain: 'Both -e (il parle) and -ent (ils parlent) are silent! That is why liaison/context matters so much (covered in 5A.4).',
              explainZh: '-e 和 -ent 都完全不发音，所以读音相同——因此遇到元音开头动词时的“联诵”就成了听辨单复数的关键线索！'
            }
          }
        ],
        drills: [
          {
            id: 'd5a3_d1',
            kind: 'choice',
            prompt: 'In regular -er present tense, which two subject forms actually pronounce their verb endings?',
            promptZh: '规则 -er 动词现在时中，哪两个人称的词尾是真正“读出来”的？',
            options: ['nous (-ons) & vous (-ez)', 'je (-e) & tu (-es)', 'il (-e) & ils (-ent)', 'tu (-es) & ils (-ent)'],
            answerIdx: 0,
            audio: 'nous parlons, vous parlez',
            explain: 'Only nous (-ons) and vous (-ez) are outside the silent boot.',
            explainZh: '只有靴子外面的 nous (-ons) 和 vous (-ez) 会读出词尾音节。'
          },
          {
            id: 'd5a3_d2',
            kind: 'choice',
            prompt: 'What is the past participle of any regular -er verb like "parler"?',
            promptZh: '规则 -er 动词（如 parler）的过去分词是怎么构成的？',
            options: ['parlé (drop -er, add -é)', 'parlu', 'parli', 'parlent'],
            answerIdx: 0,
            audio: 'parlé',
            explain: 'All regular -er verbs form their past participle with -é (parlé, dansé, regardé).',
            explainZh: '去掉 -er 加 -é：parlé, dansé, regardé。'
          },
          {
            id: 'd5a3_d3',
            kind: 'choice',
            prompt: 'Which regular -er verb means "to prefer" (literally "to like better")?',
            promptZh: '哪个常用 -er 动词短语意思是“更喜欢 / 宁愿（prefer）”？',
            options: ['aimer mieux', 'aimer beaucoup', 'trouver mieux', 'chercher mieux'],
            answerIdx: 0,
            audio: 'aimer mieux',
            explain: '"aimer mieux" = to prefer (alongside préférer on 5A.5).',
            explainZh: 'aimer mieux（直译“更喜欢”）= to prefer。'
          },
          {
            id: 'd5a3_d4',
            kind: 'choice',
            prompt: 'Which regular -er verb means "to stay / remain" (a classic false friend vs. English "rest")?',
            promptZh: '哪个 -er 动词表示“待在某处 / 停留”（注意不是“休息”！）？',
            options: ['rester', 'rencontrer', 'montrer', 'chercher'],
            answerIdx: 0,
            audio: 'rester',
            explain: '"rester" = to stay/remain (NOT "to rest", which is se reposer!).',
            explainZh: 'rester = 待着/留下（典型假朋友，休息是 se reposer）。'
          },
          {
            id: 'd5a3_d5',
            kind: 'choice',
            prompt: 'Which -er verb means "to meet (especially by chance)"?',
            promptZh: '表示“遇见 / 碰见某人”的 -er 动词是：',
            options: ['rencontrer', 'regarder', 'demander', 'trouver'],
            answerIdx: 0,
            audio: 'rencontrer',
            explain: '"rencontrer quelqu’un" = to meet someone.',
            explainZh: 'rencontrer = 遇见，碰面。'
          },
          {
            id: 'd5a3_d6',
            kind: 'fib',
            prompt: '1st person sg. of "danser": je ___ (I dance)',
            promptZh: '填空：我跳舞（danser）：je ___',
            answers: ['danse'],
            hint: 'stem dans- + -e.',
            audio: 'je danse',
            explain: 'danser → je danse.',
            explainZh: '去掉 -er 加 -e：je danse。'
          },
          {
            id: 'd5a3_d7',
            kind: 'fib',
            prompt: '3rd person pl. of "regarder": elles ___ la télé. (they watch TV)',
            promptZh: '填空：她们看电视（regarder）：elles ___ la télé.',
            answers: ['regardent'],
            hint: 'stem regard- + -ent.',
            audio: 'elles regardent la télé.',
            explain: 'elles regardent (silent -ent!).',
            explainZh: 'elles + -ent → regardent。'
          },
          {
            id: 'd5a3_d8',
            kind: 'fib',
            prompt: '1st person pl. of "travailler": nous ___ beaucoup. (we work a lot)',
            promptZh: '填空：我们工作很努力（travailler）：nous ___ beaucoup.',
            answers: ['travaillons'],
            hint: 'stem travaill- + -ons.',
            audio: 'nous travaillons beaucoup.',
            explain: 'nous travaillons.',
            explainZh: 'nous + -ons → travaillons。'
          },
          {
            id: 'd5a3_d9',
            kind: 'fib',
            prompt: '2nd person pl. of "chercher": vous ___ vos clés ? (are you looking for your keys?)',
            promptZh: '填空：您在找钥匙吗（chercher）：vous ___ vos clés ?',
            answers: ['cherchez'],
            hint: 'stem cherch- + -ez.',
            audio: 'vous cherchez vos clés ?',
            explain: 'vous cherchez.',
            explainZh: 'vous + -ez → cherchez。'
          },
          {
            id: 'd5a3_d10',
            kind: 'fib',
            prompt: '2nd person sg. of "montrer": tu ___ la photo à Tex. (you show the photo)',
            promptZh: '填空：你给 Tex 看照片（montrer）：tu ___ la photo à Tex.',
            answers: ['montres'],
            hint: 'stem montr- + -es.',
            audio: 'tu montres la photo à Tex.',
            explain: 'tu montres.',
            explainZh: 'tu + -es → montres。'
          },
          {
            id: 'd5a3_d11',
            kind: 'fib',
            prompt: '3rd person sg. of "demander": il ___ une question. (he asks a question)',
            promptZh: '填空：他问了一个问题（demander）：il ___ une question.',
            answers: ['demande'],
            hint: 'stem demand- + -e.',
            audio: 'il demande une question.',
            explain: 'il demande.',
            explainZh: 'il + -e → demande。'
          },
          {
            id: 'd5a3_d12',
            kind: 'fib',
            prompt: 'Past participle of "étudier": Tammy a beaucoup ___ ! (has studied)',
            promptZh: '填空：Tammy 学了很多（étudier 过去分词）：Tammy a beaucoup ___ !',
            answers: ['étudié', 'etudie'],
            hint: 'drop -er, add -é.',
            audio: 'Tammy a beaucoup étudié !',
            explain: 'étudier → past participle étudié.',
            explainZh: '规则 -er 过去分词：étudié。'
          }
        ],
        related: [
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_4', label: '5A.4 Regular -ER: Élision & Liaison' }
        ]
      },

      /* =========================================================
         PAGE 5A.4: REGULAR -ER VERBS II (ÉLISION, LIAISON & ALL 12 TEX DRILLS)
      ========================================================= */
      {
        id: 'v5a_4',
        code: '5A.4',
        group: 'Regular -er Verbs',
        shortTitle: '-ER Élision (j’) & Liaison (/z/)',
        title: 'Regular -ER Verbs (Part 2): Élision (je → j’) & Plural Liaison (il aime vs. ils aiment)',
        titleZh: '第一组规则 -er 动词（下）：省音（j’adore）与复数联诵（监听单复数关键）',
        estMin: 4,
        summary: 'Master élision (je → j’ before a vowel or silent h: j’adore, j’habite) and plural liaison (final -s of nous, vous, ils, elles is pronounced /z/ before vowel-initial verbs: ils écoutent, nous adorons). Use liaison as your listening superpower to distinguish singular "il écoute" from plural "ils écoutent"!',
        summaryZh: '攻克第一组动词两大核心语音规则：① 省音（Élision）：je 遇元音或哑音 h 开头动词必须省音作 j’（j’adore, j’habite, j’écoute）；② 联诵（Liaison）：nous / vous / ils / elles 结尾平时不发音的 -s，在元音或哑音 h 开头动词前会连读成清脆的 /z/！这就是法语听力中分辨 il parle 类单复数“唯一的听觉线索”。',
        cheatSummary: [
          { label: 'Élision: je → j’', rule: 'Before a vowel or silent h, "je" drops -e and becomes j’: "j’adore la musique rap", "j’écoute", "j’habite à Austin".', ruleZh: 'je 遇元音或哑音 h → 省音 j’：j’adore / j’écoute / j’habite（不能写成 je adore！）。' },
          { label: 'Liaison (-s → /z/) Solves Sg vs. Pl!', rule: '"il écoute" (/il ekut/) vs. "ils écoutent" (/il zekut/)! The /z/ liaison in nous / vous / ils / elles ONLY happens before vowel/silent-h verbs, NOT before consonants ("nous dansons").', ruleZh: '平时 il 和 ils 词尾 s 都静音，唯有遇元音/哑音 h 时，复数 ils écoutent 多出 /z/ 联诵音（而 nous dansons 因 d 是辅音，无联诵）。' }
        ],
        sections: [
          {
            id: 'v5a4_elision',
            heading: '1. Élision: "je" Changes to "j’" Before a Vowel or Silent h',
            headingZh: '一、省音规则（Élision）：j’adore 与 j’écoute',
            lead: 'Listen to Tex talking about his love of rap music—notice élision in j’adore and j’écoute (because adorer and écouter start with vowels), vs. full "je" before consonants (je chante, je danse):',
            leadZh: '看 Tex 聊饶舌音乐：adore 和 écoute 以元音开头，所以 je 缩为 j’；而 chante 和 danse 以辅音开头，保持 je：',
            cartoon: {
              src: './assets/tex_cartoons/ver1_rap.gif',
              alt: 'Tex: J’adore la musique rap',
              caption: 'Tex: J’adore la musique rap et j’écoute souvent de la musique dans les clubs. Je chante et je danse aussi.',
              captionZh: '元音/哑音 h 前用 j’（j’adore, j’écoute, j’habite）；辅音前保留 je（je chante, je danse）。'
            },
            examples: [
              { fr: 'Tex : J’adore la musique rap et j’écoute souvent de la musique dans les clubs.', en: 'I love rap music and I often listen to music in clubs.', zh: 'j’adore / j’écoute 发生省音；注意 écouter 后面直接接名词！', tag: 'Élision (vowel)' },
              { fr: 'J’habite à Austin. (h is silent!)', en: 'I live in Austin.', zh: 'habiter 以哑音 h 开头，同样触发省音：j’habite。', tag: 'Élision (silent h)' },
              { fr: 'Je chante et je danse aussi.', en: 'I sing and I dance, too.', zh: 'ch 和 d 都是辅音，保持 je。', tag: 'No Élision' }
            ]
          },
          {
            id: 'v5a4_liaison',
            heading: '2. Plural Liaison (-s → /z/): Hearing Singular vs. Plural',
            headingZh: '二、复数主语代词的联诵（/z/ 音）',
            lead: 'The final -s in plural pronouns (nous, vous, ils, elles) is normally silent, EXCEPT when followed by a verb starting with a vowel sound or silent h—then -s becomes /z/ and links directly to the verb:',
            leadZh: 'nous, vous, ils, elles 末尾的 -s 平时不发音，只有紧接元音或哑音 h 开头的动词时，才连读为 /z/ 音：',
            cartoon: {
              src: './assets/tex_cartoons/ver1_dansent.gif',
              alt: 'Tex et Tammy dansent',
              caption: 'Liaison in "ils écoutent" (/il zekut/) and "nous adorons" (/nu zadɔʁɔ̃/) vs. NO liaison in "nous dansons".',
              captionZh: 'ils écoutent 和 nous adorons 都有明显的 /z/ 联诵音；nous dansons 因 d 是辅音，无联诵。'
            },
            examples: [
              { fr: 'Tex et Tammy, ils écoutent de la musique cadienne avec Paw-Paw !', en: 'Tex and Tammy, they listen to Cajun music with Paw-Paw!', zh: 'ils écoutent → /il zekut/（靠 /z/ 音听出是复数！）。', tag: 'Liaison /z/' },
              { fr: 'Tammy : Nous adorons danser.', en: 'Tammy: We love to dance.', zh: 'Nous adorons → /nu zadɔʁɔ̃/（/z/ 联诵）。', tag: 'Liaison /z/' },
              { fr: 'Tex : Oui, oui, c’est vrai. Nous dansons beaucoup.', en: 'Tex: Yes, yes, that’s true. We dance a lot.', zh: 'Nous dansons → d 为辅音，s 静音（无联诵）。', tag: 'No Liaison' }
            ],
            quickCheck: {
              prompt: 'For a verb starting with a CONSONANT (like "il chante" vs. "ils chantent"), can you hear whether the subject is singular or plural out loud?',
              promptZh: '如果动词以辅音开头（如 il chante vs ils chantent），只听读音能分辨是单数还是复数吗？',
              options: [
                'Impossible to tell out loud — both /il ʃɑ̃t/ sound identical without liaison or context!',
                'Yes — ils chantent adds a /z/ sound before ch-.',
                'Yes — -ent adds an extra syllable.',
                'Yes — ils drops the -l- sound.'
              ],
              answerIdx: 0,
              explain: 'In Tex’s listening drill, if the verb starts with a consonant ("il/ils parle", "il/ils chante"), singular vs. plural sounds 100% identical ("impossible à distinguer")! With vowel-initial verbs ("il aime" vs "ils aiment"), the /z/ liaison reveals plural.',
              explainZh: '辅音开头动词没有联诵，il chante 与 ils chantent 读音 100% 一样（无法单凭读音区分），只能靠语境或冠词区分！'
            }
          }
        ],
        drills: [
          {
            id: 'd5a4_d1',
            kind: 'fib',
            prompt: 'Tex et Tammy, ils ___ à Austin. (habiter)',
            promptZh: 'Tex 原题 #1：Tex 和 Tammy 住在奥斯汀（habiter）：',
            answers: ['habitent'],
            hint: 'ils ending is -ent (bonus: silent h triggers /z/ liaison: ils habitent!).',
            audio: 'Tex et Tammy, ils habitent à Austin.',
            explain: 'ils habitent (with /z/ liaison across the silent h!).',
            explainZh: 'ils 对应 -ent → habitent（口语中因哑音 h 连读为 /il zabit/）。'
          },
          {
            id: 'd5a4_d2',
            kind: 'fib',
            prompt: 'Tammy ___ le français. (étudier)',
            promptZh: 'Tex 原题 #2：Tammy 学习法语（étudier）：',
            answers: ['étudie', 'etudie'],
            hint: 'stem étudi- + -e (don’t forget final -e after -i!).',
            audio: 'Tammy étudie le français.',
            explain: 'étudier stem = étudi- + -e → étudie.',
            explainZh: '词干是 étudi-，加上第三人称单数词尾 -e → étudie。'
          },
          {
            id: 'd5a4_d3',
            kind: 'fib',
            prompt: 'Je ___ un peu. (chanter)',
            promptZh: 'Tex 原题 #3：我唱一点歌（chanter）：',
            answers: ['chante'],
            hint: 'stem chant- + -e.',
            audio: 'Je chante un peu.',
            explain: 'je chante.',
            explainZh: 'je + -e → chante。'
          },
          {
            id: 'd5a4_d4',
            kind: 'fib',
            prompt: 'J’___ la musique française. (adorer — elision already shown!)',
            promptZh: 'Tex 原题 #4（注意前面已经写出 J’）：我非常喜欢法国音乐（adorer）：',
            answers: ['adore'],
            hint: 'just the verb form (J’ is already printed!).',
            audio: 'J’adore la musique française.',
            explain: 'J’adore (élision of je before vowel a-).',
            explainZh: '因为前文已有 J’，空里只填 adore。'
          },
          {
            id: 'd5a4_d5',
            kind: 'fib',
            prompt: 'Nous ___ au foot. (jouer)',
            promptZh: 'Tex 原题 #5：我们踢足球（jouer）：',
            answers: ['jouons'],
            hint: 'stem jou- + -ons.',
            audio: 'Nous jouons au foot.',
            explain: 'nous jouons (jouer + -ons).',
            explainZh: '词干 jou- 加 -ons → jouons。'
          },
          {
            id: 'd5a4_d6',
            kind: 'fib',
            prompt: 'Vous ___ la musique texane ? (aimer)',
            promptZh: 'Tex 原题 #6：你们喜欢德州音乐吗（aimer）：',
            answers: ['aimez'],
            hint: 'stem aim- + -ez (triggers /z/ liaison: vous aimez!).',
            audio: 'Vous aimez la musique texane ?',
            explain: 'vous aimez (with /z/ liaison!).',
            explainZh: 'vous + -ez → aimez（口语联诵 vous aimez）。'
          },
          {
            id: 'd5a4_d7',
            kind: 'fib',
            prompt: 'Quelle sorte de musique est-ce que tu ___ ? (aimer)',
            promptZh: 'Tex 原题 #7：你喜欢哪种音乐（aimer）：',
            answers: ['aimes'],
            hint: 'tu ending is -es.',
            audio: 'Quelle sorte de musique est-ce que tu aimes ?',
            explain: 'tu aimes.',
            explainZh: 'tu 必须加 -es → aimes。'
          },
          {
            id: 'd5a4_d8',
            kind: 'fib',
            prompt: 'Tammy ___ les sports. (détester)',
            promptZh: 'Tex 原题 #8：Tammy 讨厌体育运动（détester）：',
            answers: ['déteste', 'deteste'],
            hint: 'stem détest- + -e.',
            audio: 'Tammy déteste les sports.',
            explain: 'Tammy (= elle) déteste.',
            explainZh: 'Tammy 第三人称单数 → déteste。'
          },
          {
            id: 'd5a4_d9',
            kind: 'fib',
            prompt: 'Joe-Bob ___ de la guitare. (jouer)',
            promptZh: 'Tex 原题 #9：Joe-Bob 弹吉他（jouer）：',
            answers: ['joue'],
            hint: 'stem jou- + -e.',
            audio: 'Joe-Bob joue de la guitare.',
            explain: 'Joe-Bob (= il) joue (note jouer de + instrument vs. jouer à + sport!).',
            explainZh: 'joue（乐器用 jouer de，运动用 jouer à）。'
          },
          {
            id: 'd5a4_d10',
            kind: 'fib',
            prompt: 'Est-ce que tu ___ du piano ? (jouer)',
            promptZh: 'Tex 原题 #10：你弹钢琴吗（jouer）：',
            answers: ['joues'],
            hint: 'tu ending is -es.',
            audio: 'Est-ce que tu joues du piano ?',
            explain: 'tu joues.',
            explainZh: 'tu + -es → joues。'
          },
          {
            id: 'd5a4_d11',
            kind: 'fib',
            prompt: 'Joe-Bob ___ son ami Corey. (chercher)',
            promptZh: 'Tex 原题 #11：Joe-Bob 在找他的朋友 Corey（chercher）：',
            answers: ['cherche'],
            hint: 'no preposition after chercher!',
            audio: 'Joe-Bob cherche son ami Corey.',
            explain: 'Joe-Bob cherche.',
            explainZh: 'chercher 后直接接宾语，第三人称单数写作 cherche。'
          },
          {
            id: 'd5a4_d12',
            kind: 'fib',
            prompt: 'Tammy et Bette ___ la télévision. (regarder)',
            promptZh: 'Tex 原题 #12：Tammy 和 Bette 在看电视（regarder）：',
            answers: ['regardent'],
            hint: 'plural sujet = elles → -ent.',
            audio: 'Tammy et Bette regardent la télévision.',
            explain: 'Tammy et Bette (= elles) regardent.',
            explainZh: '两人并列作复数主语，用 -ent → regardent。'
          }
        ],
        related: [
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_3', label: '5A.3 Regular -ER Boot & 21 Verbs' },
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_5', label: '5A.5 Stem-Changing -ER (I): Double l/t, é→è, e→è' }
        ]
      },

      /* =========================================================
         PAGE 5A.5: STEM-CHANGING -ER VERBS I (BOOT SPELLINGS: l/t DOUBLE, é→è, e→è)
      ========================================================= */
      {
        id: 'v5a_5',
        code: '5A.5',
        group: 'Stem-Changing -er',
        shortTitle: 'Stem Changes I (appeler, préférer, acheter)',
        title: 'Stem-Changing -ER Verbs (Part 1): Boot Changes (Double -l/-t, é → è & e → è)',
        titleZh: '拼写变化 -er 动词（上）：靴形区三大换干（双写 l/t、é→è、e→è）',
        estMin: 4,
        summary: 'French alters the stem spelling inside the "boot" (je, tu, il, ils) to match the open vowel pronunciation—while nous and vous NEVER change! Learn the first 3 boot patterns: (1) doubling -l/-t (appeler, rappeler, jeter), (2) é → è (préférer, espérer, répéter...), and (3) unaccented e → è (acheter, amener, emmener, lever, mener, peser).',
        summaryZh: '法语动词拼写变化完全是为了“配合发音”！前三类全部遵循**靴子规律（boot pattern）**：只在 je / tu / il / ils 四个单数+第三人称复数里变词干，而 **nous 与 vous 永远保持原词干不变**：① 双写 l/t（appeler → j’appelle, jeter → je jette）；② 闭音 é 变开音 è（préférer → je préfère，注意过去分词 préfér**é** 不变）；③ 无重音 e 变 è（acheter → j’achète）。',
        cheatSummary: [
          { label: 'Boot Rule: nous & vous Stay Original!', rule: 'In groups 1–4, stem changes happen ONLY in je, tu, il/elle/on, ils/elles. nous and vous keep the regular infinitive stem!', ruleZh: '铁律：靴形变位中，nous 和 vous 的词干永远跟原形一致（nous appelons / nous préférons / nous achetons）！' },
          { label: '3 Boot Patterns (Part 1)', rule: '1) -l-/-t- → -ll-/-tt- (appeler → j’appelle, jeter → je jette). 2) é → è (préférer → je préfère, p.p. préféré!). 3) e → è (acheter → j’achète).', ruleZh: '① appeler / rappeler / jeter 双写 l/t；② préférer 类把最后一个 é 改成 è（但过去分词仍是 préféré）；③ acheter / amener / lever 类把 e 改成 è。' }
        ],
        sections: [
          {
            id: 'v5a5_double_lt',
            heading: '1. Doubling -l or -t Inside the Boot: appeler, rappeler, jeter',
            headingZh: '一、词干双写 -l 或 -t（appeler, rappeler, jeter）',
            lead: 'You already saw s’appeler in "Je m’appelle...". For appeler (to call), rappeler (to call back), and jeter (to throw), double the -l or -t in the boot (je/tu/il/ils), but keep a SINGLE -l/-t in nous & vous:',
            leadZh: '你早就会说的 "Je m’appelle..." 就是这类动词！在靴子内部双写 l 或 t（发 /ɛ/ 音），到了 nous 和 vous 恢复单写（发哑音 e /ə/）：',
            table: {
              headers: ['Person', 'appeler (to call)', 'jeter (to throw)', 'Boot Status'],
              rows: [
                { cols: ['je', 'j’appelle', 'je jette', 'In Boot → double l / t'], audio: 'j’appelle, je jette' },
                { cols: ['tu', 'tu appelles', 'tu jettes', 'In Boot → double l / t'], audio: 'tu appelles, tu jettes' },
                { cols: ['il / elle / on', 'il appelle', 'il jette', 'In Boot → double l / t'], audio: 'il appelle, il jette' },
                { cols: ['nous', 'nous appelons', 'nous jetons', 'Outside Boot → single!'], audio: 'nous appelons, nous jetons' },
                { cols: ['vous', 'vous appelez', 'vous jetez', 'Outside Boot → single!'], audio: 'vous appelez, vous jetez' },
                { cols: ['ils / elles', 'ils appellent', 'ils jettent', 'In Boot → double l / t'], audio: 'ils appellent, ils jettent' }
              ]
            }
          },
          {
            id: 'v5a5_e_acute_grave',
            heading: '2. é → è (préférer Family) & Mute e → è (acheter Family)',
            headingZh: '二、闭音 é → è（préférer 族）与无重音 e → è（acheter 族）',
            lead: 'Watch carefully: both families switch the last vowel of the stem to è (/ɛ/) in the boot, while nous, vous, and the past participle keep the original vowel (nous préférons / préféré; nous achetons / acheté):',
            leadZh: '留意这两大家族同样遵循靴形规则——且过去分词也保留原形重音（préféré, acheté）：',
            table: {
              headers: ['Type & Verbs', 'Boot Forms (je / tu / il / ils)', 'nous / vous + Past Participle'],
              rows: [
                { cols: ['é → è: préférer (to prefer)', 'je préfère, tu préfères, il préfère, ils préfèrent', 'nous préférons, vous préférez · p.p. préféré'], audio: 'je préfère, nous préférons, ils préfèrent' },
                { cols: ['Also like préférer (5 verbs)', 'considérer (consider), espérer (hope), régler (settle/pay), répéter (repeat), sécher (dry/skip class)', 'Keep é in nous/vous & past participle!'], audio: 'espérer, répéter, régler' },
                { cols: ['e → è: acheter (to buy)', 'j’achète, tu achètes, il achète, ils achètent', 'nous achetons, vous achetez · p.p. acheté'], audio: 'j’achète, nous achetons, ils achètent' },
                { cols: ['Also like acheter (5 verbs)', 'amener (bring along), emmener (take along), lever (lift/raise), mener (lead), peser (weigh)', 'Keep mute e in nous/vous & p.p.!'], audio: 'amener, emmener, lever, peser' }
              ]
            },
            quickCheck: {
              prompt: 'Look closely at "nous préférons" vs. "ils préfèrent" — why is the second accent different?',
              promptZh: '对比 "nous préférons" 与 "ils préfèrent"，为什么第二个 e 的重音符号方向不同？',
              options: [
                'nous is outside the boot (keeps closed é); ils is inside the boot (changes to open è before silent -ent).',
                'nous always uses acute accents on every verb.',
                'ils always drops accents in French.',
                'Both should be spelled with è.'
              ],
              answerIdx: 0,
              explain: 'In préférer, ONLY the final é of the stem turns to è inside the boot (je préfère, ils préfèrent); nous préférons and vous préférez keep both é accents!',
              explainZh: '在靴子里的 je/tu/il/ils 把词干最后一个 é 改成开音 è；在靴子外的 nous/vous 和过去分词 préfér**é** 保持原始的 é！'
            }
          }
        ],
        drills: [
          {
            id: 'd5a5_d1',
            kind: 'fib',
            prompt: 'Tex : Je ___ parler français. (préférer)',
            promptZh: 'Tex 原题：我更喜欢说法语（préférer，注意两个不同重音）：',
            answers: ['préfère'],
            hint: 'first accent é, second accent è.',
            audio: 'Je préfère parler français.',
            explain: 'Inside boot: é → è on last stem syllable → préfère.',
            explainZh: '第一个仍为 é，第二个变为 è：préfère。'
          },
          {
            id: 'd5a5_d2',
            kind: 'fib',
            prompt: 'Tammy, ___-vous le prof de français ou le prof d’italien ? (préférer)',
            promptZh: 'Tex 原题：Tammy，您更喜欢法语老师还是意大利语老师（注意 vous 在靴子外！）：',
            answers: ['préférez'],
            hint: 'vous is OUTSIDE the boot → keeps é!',
            audio: 'Tammy, préférez-vous le prof de français ?',
            explain: 'vous préférez stays outside the boot and keeps BOTH é accents!',
            explainZh: 'vous 在靴子外面，保持原本两个 é：préférez！'
          },
          {
            id: 'd5a5_d3',
            kind: 'fib',
            prompt: 'Tex : Mon amie ___ Tammy. (s’appeler)',
            promptZh: 'Tex 原题：我的女性朋友名叫 Tammy（s’appeler）：',
            answers: ["s'appelle", 's’appelle'],
            hint: 'reflexive s’ + double -ll-!',
            audio: 'Mon amie s’appelle Tammy.',
            explain: 'Inside boot: appeler doubles the -l → s’appelle.',
            explainZh: '第三人称单数在靴子内，双写 l：s’appelle。'
          },
          {
            id: 'd5a5_d4',
            kind: 'fib',
            prompt: 'Joe-Bob ___ faire de la planche à voile demain. (espérer)',
            promptZh: 'Tex 原题：Joe-Bob 希望明天去玩帆板（espérer，同 préférer 族）：',
            answers: ['espère'],
            hint: 'é → è inside the boot!',
            audio: 'Joe-Bob espère faire de la planche à voile demain.',
            explain: 'Like préférer, espérer changes é → è → espère.',
            explainZh: 'espérer 在靴子内把第二个 é 改成 è → espère。'
          },
          {
            id: 'd5a5_d5',
            kind: 'fib',
            prompt: 'Tammy ___ beaucoup au mall. (acheter)',
            promptZh: 'Tex 原题：Tammy 在商场买很多东西（acheter）：',
            answers: ['achète'],
            hint: 'unaccented e → è in the boot!',
            audio: 'Tammy achète beaucoup au mall.',
            explain: 'Inside boot: acheter adds grave accent → achète.',
            explainZh: 'acheter 在靴子内把 e 变 è → achète。'
          },
          {
            id: 'd5a5_d6',
            kind: 'fib',
            prompt: 'Tex : J’___ Tammy au cinéma ce soir. (amener)',
            promptZh: 'Tex 原题：我今晚带 Tammy 去电影院（amener，同 acheter 族）：',
            answers: ['amène'],
            hint: 'like acheter: e → è.',
            audio: 'J’amène Tammy au cinéma ce soir.',
            explain: 'amener follows acheter → j’amène.',
            explainZh: 'amener 同 acheter，第三项 e → è：amène。'
          },
          {
            id: 'd5a5_d7',
            kind: 'fib',
            prompt: 'Tex : Mes chers étudiants, ___, s’il vous plaît. (répéter — vous form)',
            promptZh: 'Tex 原题：亲爱的同学们，请跟读/重复（répéter 的 vous 命令式，靴子外！）：',
            answers: ['répétez'],
            hint: 'vous is outside the boot → keep both é!',
            audio: 'Mes chers étudiants, répétez, s’il vous plaît.',
            explain: 'vous form (including imperative!) stays outside the boot → répétez.',
            explainZh: 'vous 形式（含命令式）在靴子外，保留两个 é → répétez。'
          },
          {
            id: 'd5a5_d8',
            kind: 'fib',
            prompt: 'Tex Listening item: Joe-Bob ___ ses devoirs à la poubelle. (jeter)',
            promptZh: 'Tex 听力题改编：Joe-Bob 把作业扔进垃圾桶（jeter）：',
            answers: ['jette'],
            hint: 'jeter doubles -t inside the boot!',
            audio: 'Joe-Bob jette ses devoirs à la poubelle.',
            explain: 'jeter → il jette (double -tt-).',
            explainZh: 'jeter 在靴子内双写 t → jette。'
          },
          {
            id: 'd5a5_d9',
            kind: 'fib',
            prompt: 'Rita ___ ses enfants à la piscine. (emmener)',
            promptZh: 'Tex 课文句：Rita 带孩子们去游泳池（emmener，同 acheter）：',
            answers: ['emmène'],
            hint: 'emmener follows acheter: second e → è.',
            audio: 'Rita emmène ses enfants à la piscine.',
            explain: 'Rita (= elle) emmène.',
            explainZh: 'emmener 词干中第二个 e 变 è → emmène。'
          },
          {
            id: 'd5a5_d10',
            kind: 'fib',
            prompt: 'Nous ___ des fleurs pour la fête. (acheter — outside boot!)',
            promptZh: '靴外对照填空：我们买花过节（acheter 的 nous 形式）：',
            answers: ['achetons'],
            hint: 'nous is outside the boot — NO accent!',
            audio: 'Nous achetons des fleurs pour la fête.',
            explain: 'nous achetons (no grave accent outside the boot!).',
            explainZh: 'nous 在靴子外，不要写 è！直接写作 achetons。'
          },
          {
            id: 'd5a5_d11',
            kind: 'fib',
            prompt: 'Les étudiants ___ leurs mains pour répondre. (lever)',
            promptZh: '填空：学生们举手回答（lever 的复数）：',
            answers: ['lèvent'],
            hint: 'ils/elles IS inside the boot → e → è!',
            audio: 'Les étudiants lèvent leurs mains.',
            explain: 'ils/elles lèvent (inside the boot → grave accent è!).',
            explainZh: '第三人称复数在靴子里面，把 e 变 è → lèvent。'
          },
          {
            id: 'd5a5_d12',
            kind: 'choice',
            prompt: 'Which conjugation of "appeler" (to call) correctly keeps a SINGLE -l-?',
            promptZh: '以下 appeler 的哪个变位正确保留了单个 -l-？',
            options: ['nous appelons / vous appelez', 'j’appele / tu appeles', 'ils appelent', 'il appele'],
            answerIdx: 0,
            audio: 'nous appelons, vous appelez',
            explain: 'Only nous & vous keep the single -l (nous appelons, vous appelez).',
            explainZh: '只有靴外人称 nous 和 vous 保留单写 l：nous appelons, vous appelez。'
          }
        ],
        related: [
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_4', label: '5A.4 Regular -ER: Élision & Liaison' },
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_6', label: '5A.6 Stem-Changing -ER (II): -ayer, -ger, -cer' }
        ]
      },

      /* =========================================================
         PAGE 5A.6: STEM-CHANGING -ER VERBS II (-ayer, -ger, -cer)
      ========================================================= */
      {
        id: 'v5a_6',
        code: '5A.6',
        group: 'Stem-Changing -er',
        shortTitle: 'Stem Changes II (-ayer, -ger, -cer)',
        title: 'Stem-Changing -ER Verbs (Part 2): -ayer (y → i) & Soft Consonant Fixes (-ger / -cer)',
        titleZh: '拼写变化 -er 动词（下）：-ayer（y→i）与 nous 保音规则（-geons / -çons）',
        estMin: 4,
        summary: 'Master the remaining 3 stem-changing -er groups: (4) -ayer verbs (essayer, payer) switch y → i inside the boot (j’essaie, papa paie); (5) -ger verbs add a silent -e- in the nous form ONLY (nous voyageons, nous mangeons) to keep a soft g; and (6) -cer verbs change c → ç in the nous form ONLY (nous commençons) to keep a soft c!',
        summaryZh: '攻克剩余三类高频拼写变化：① **-ayer（如 essayer / payer）**：仍按靴形规律在靴内 y → i（j’essaie, papa paie）；② **-ger 与 -cer 反过来，只有 nous 一格变**！因为在字母 o 前面 g/c 会变成硬音 /g/ 或 /k/，所以 -ger 词在 nous 中加哑音 **e**（nous voyageons, nous mangeons），-cer 词把 c 改成软音符 **ç**（nous commençons）！',
        cheatSummary: [
          { label: '-ayer (Boot y → i)', rule: 'essayer / payer: y → i in je, tu, il, ils ("j’essaie", "papa paie"), keep y in nous/vous ("nous essayons").', ruleZh: '-ayer 属靴形变化：靴内 y→i（j’essaie, il paie），靴外保留 y（nous essayons, vous payez）。' },
          { label: '-ger & -cer (ONLY nous Changes!)', rule: 'Before -ons, keep soft sound: -ger adds -e- ("nous voyageons", "nous mangeons"); -cer swaps c → ç ("nous commençons"). All other 5 forms are normal!', ruleZh: '-ger 与 -cer 仅在 nous 变形保软音：voyager → nous voyageons；commencer → nous commençons；其余五个人称全按普通规则写！' }
        ],
        sections: [
          {
            id: 'v5a6_ayer',
            heading: '1. -ayer Verbs (y → i in Boot): essayer & payer',
            headingZh: '一、-ayer 动词（靴内 y → i）：essayer, payer',
            lead: 'In -ayer verbs like essayer (to try) and payer (to pay), the y changes to i in all forms except nous and vous (note also that the old y spelling j’essaye / je paye exists as an option, while Tex teaches j’essaie / papa paie):',
            leadZh: 'essayer（尝试）和 payer（付款）在靴子内部 y 变为 i，在 nous 和 vous 保留 y：',
            table: {
              headers: ['Person', 'essayer (to try — p.p. essayé)', 'payer (to pay — p.p. payé)', 'Boot Rule'],
              rows: [
                { cols: ['je / tu', 'j’essaie · tu essaies', 'je paie · tu paies', 'In Boot: y → i'], audio: 'j’essaie, je paie' },
                { cols: ['il / elle / on', 'il essaie', 'il paie', 'In Boot: y → i'], audio: 'il essaie, papa paie' },
                { cols: ['nous / vous', 'nous essayons · vous essayez', 'nous payons · vous payez', 'Outside Boot: keep y!'], audio: 'nous essayons, vous payez' },
                { cols: ['ils / elles', 'ils essaient', 'ils paient', 'In Boot: y → i'], audio: 'ils essaient, ils paient' }
              ]
            }
          },
          {
            id: 'v5a6_ger_cer',
            heading: '2. Soft Sound Savers in nous ONLY: -ger (-geons) & -cer (-çons)',
            headingZh: '二、仅在 nous 保软音：-ger（加 e）与 -cer（c 变 ç）',
            lead: 'In French, g before o sounds hard /g/, and c before o sounds hard /k/. To preserve the soft /ʒ/ and /s/ sounds in nous, add e after g (nous voyageons) or put a cedilla under c (nous commençons)! Every other form stays 100% regular:',
            leadZh: '为了防止 g+o、c+o 变成硬音，只有在 nous 的 -ons 前，-ger 要插一个不发音的 e，-cer 要把 c 改成 ç：',
            cartoon: {
              src: './assets/tex_cartoons/ver2.gif',
              alt: 'Rita, children and Tammy summer dialogue',
              caption: 'Rita: J’emmène mes enfants... Ses enfants: Nous nageons et nous mangeons de la glace! Tammy: Papa paie tout.',
              captionZh: '一段对话集齐 emmener（j’emmène）、nager/manger（nous nageons / mangeons）和 payer（papa paie）！'
            },
            table: {
              headers: ['Person', 'voyager (to travel)', 'commencer (to start)', 'Other -ger Verbs on Tex (8)'],
              rows: [
                { cols: ['je / tu / il', 'je voyage · tu voyages · il voyage', 'je commence · tu commences · il commence', 'corriger (correct), exiger (demand)'], audio: 'je voyage, je commence' },
                { cols: ['nous (SPECIAL!)', 'nous voyageons (+ e!)', 'nous commençons (c → ç!)', 'manger (eat), nager (swim), partager (share)'], audio: 'nous voyageons, nous commençons, nous mangeons' },
                { cols: ['vous / ils', 'vous voyagez · ils voyagent', 'vous commencez · ils commencent', 'ranger (tidy), rédiger (compose), songer (dream)'], audio: 'vous voyagez, ils commencent' }
              ]
            },
            examples: [
              { fr: 'Rita : J’emmène mes enfants à la piscine.', en: 'Rita: I take my children to the pool.', zh: 'Rita：我带孩子们去游泳池。', tag: 'emmener' },
              { fr: 'Ses enfants : Nous nageons et nous mangeons de la glace.', en: 'Her children: We swim and we eat ice cream.', zh: '孩子们：我们游泳还吃冰淇淋！（注意 nageons / mangeons）', tag: '-ger in nous' },
              { fr: 'Tammy : Moi, je préfère faire du shopping. J’achète beaucoup et papa paie tout.', en: 'Tammy: Me, I prefer shopping. I buy lots and daddy pays for everything.', zh: 'Tammy：我更喜欢逛街。我买很多，老爸付全款！', tag: 'préférer / acheter / payer' }
            ],
            quickCheck: {
              prompt: 'What happens to "manger" in the "vous" and "ils" forms?',
              promptZh: '像 manger 这样的 -ger 动词，在 vous 和 ils 形式里还需要加字母 e 吗？',
              options: [
                'No — only "nous" (nous mangeons) adds -e-. "Vous mangez" and "ils mangent" already have -e-!',
                'Yes — ils mangeent.',
                'Yes — vous mangeez.',
                'Yes — je mangee.'
              ],
              answerIdx: 0,
              explain: 'The endings -ez and -ent ALREADY start with "e", so the g stays naturally soft! Only -ons starts with "o", so ONLY nous adds -e- → nous mangeons.',
              explainZh: '因为 -e, -es, -ez, -ent 本身就是 e 开头（g 已经发软音），只有 -ons 是 o 开头，所以“唯独 nous”需要加 -e-！'
            }
          }
        ],
        drills: [
          {
            id: 'd5a6_d1',
            kind: 'fib',
            prompt: 'Joe-Bob : Corey et moi, nous ___ à adorer le français. (commencer)',
            promptZh: 'Tex 原题：我和 Corey 开始爱上法语了（commencer）：',
            answers: ['commençons'],
            hint: 'nous + -cer → change c to ç before -ons!',
            audio: 'Nous commençons à adorer le français.',
            explain: 'commencer (nous) → nous commençons (ç keeps the soft /s/ sound).',
            explainZh: 'nous 前的 c 必须改成软音 ç：commençons！'
          },
          {
            id: 'd5a6_d2',
            kind: 'fib',
            prompt: 'Bette : Fiona et moi, nous ___ au Mexique en été. (voyager)',
            promptZh: 'Tex 原题：Fiona 和我夏天去墨西哥旅行（voyager）：',
            answers: ['voyageons'],
            hint: 'nous + -ger → keep -e- after g!',
            audio: 'Nous voyageons au Mexique en été.',
            explain: 'voyager (nous) → nous voyageons (-geons keeps the soft /ʒ/ sound).',
            explainZh: 'nous 前要在 g 后保留哑音 e：voyageons！'
          },
          {
            id: 'd5a6_d3',
            kind: 'fib',
            prompt: 'Joe-Bob et Corey ___ à Barton Springs. (nager)',
            promptZh: 'Tex 原题：Joe-Bob 和 Corey 在巴顿泉游泳（注意主语是 ils，不是 nous！）：',
            answers: ['nagent'],
            hint: '3rd pl. does NOT add extra e — just nagent!',
            audio: 'Joe-Bob et Corey nagent à Barton Springs.',
            explain: 'Only nous adds -e- (nous nageons); ils/elles stays regular → nagent.',
            explainZh: '只有 nous 才加 e 写成 nageons；ils 直接去 -er 加 -ent → nagent！'
          },
          {
            id: 'd5a6_d4',
            kind: 'fib',
            prompt: 'Tammy : Tex et moi, nous ___ un ordinateur. (partager)',
            promptZh: 'Tex 原题：Tex 和我共用一台电脑（partager）：',
            answers: ['partageons'],
            hint: 'Tex et moi = nous + -ger → -geons!',
            audio: 'Tex et moi, nous partageons un ordinateur.',
            explain: '"Tex et moi, nous" → nous partageons.',
            explainZh: 'Tex et moi 就是 nous，partager 要写作 partageons！'
          },
          {
            id: 'd5a6_d5',
            kind: 'fib',
            prompt: 'Rita, est-ce que tes enfants ___ de parler français ? (essayer)',
            promptZh: 'Tex 原题：Rita，你的孩子们在试着说法语吗（essayer）：',
            answers: ['essaient'],
            hint: 'ils/elles inside the boot: y → i + -ent!',
            audio: 'Est-ce que tes enfants essaient de parler français ?',
            explain: 'tes enfants (= ils) essaient (y → i inside the boot).',
            explainZh: 'tes enfants（= ils）在靴子内部，y 变 i 加 -ent → essaient。'
          },
          {
            id: 'd5a6_d6',
            kind: 'fib',
            prompt: 'Tammy : J’achète beaucoup et papa ___ tout ! (payer)',
            promptZh: 'Tex 课文句：我买很多东西，老爸付全款（payer）：',
            answers: ['paie'],
            hint: '3rd sg. inside boot: y → i.',
            audio: 'Papa paie tout.',
            explain: 'papa (= il) paie.',
            explainZh: 'papa 第三人称单数，y 变 i → paie。'
          },
          {
            id: 'd5a6_d7',
            kind: 'fib',
            prompt: 'Est-ce que nous ___ notre chambre ? (ranger)',
            promptZh: 'Tex 听力题改编：我们要整理房间吗（ranger）：',
            answers: ['rangeons'],
            hint: 'nous + -ger → -geons!',
            audio: 'Est-ce que nous rangeons notre chambre ?',
            explain: 'nous rangeons.',
            explainZh: '-ger 遇 nous → rangeons。'
          },
          {
            id: 'd5a6_d8',
            kind: 'fib',
            prompt: 'Nous ___ toujours des examens de grammaire. (corriger)',
            promptZh: '练习（corriger 批改）：我们总是在批改语法试卷：',
            answers: ['corrigeons'],
            hint: 'corriger + nous → corrigeons.',
            audio: 'Nous corrigeons toujours des examens.',
            explain: 'corriger (nous) → corrigeons.',
            explainZh: 'g 后留 e：corrigeons。'
          },
          {
            id: 'd5a6_d9',
            kind: 'fib',
            prompt: 'Nous ___ l’addition au restaurant. (payer — outside boot!)',
            promptZh: '靴外对照（payer 的 nous 形式）：我们在餐厅付账单：',
            answers: ['payons'],
            hint: 'nous keeps y → payons!',
            audio: 'Nous payons l’addition au restaurant.',
            explain: 'nous and vous keep the y: nous payons, vous payez.',
            explainZh: 'nous 在靴子外，保留字母 y：payons！'
          },
          {
            id: 'd5a6_d10',
            kind: 'fib',
            prompt: 'Nous ___ souvent au café après les cours. (manger)',
            promptZh: '填空：我们下课后经常在咖啡馆吃东西（manger）：',
            answers: ['mangeons'],
            hint: 'add -e- before -ons!',
            audio: 'Nous mangeons souvent au café.',
            explain: 'nous mangeons.',
            explainZh: '加 e 保软音：mangeons。'
          },
          {
            id: 'd5a6_d11',
            kind: 'fib',
            prompt: 'Tex : J’___ de parler lentement en classe. (essayer)',
            promptZh: '填空：我在课上尽量慢点讲（essayer）：',
            answers: ['essaie'],
            hint: 'inside boot: y → i.',
            audio: 'J’essaie de parler lentement en classe.',
            explain: 'j’essaie.',
            explainZh: '靴内 y → i：j’essaie。'
          },
          {
            id: 'd5a6_d12',
            kind: 'choice',
            prompt: 'Why do French -ger and -cer verbs change ONLY in the "nous" form?',
            promptZh: '为什么 -ger 和 -cer 动词偏偏“只在 nous 这一格”变拼写？',
            options: [
              'Because -ons starts with "o", which would turn g/c hard (/g/, /k/) without an extra e or cedilla ç!',
              'Because nous is irregular in every French verb.',
              'Because ils/elles already has an extra vowel -e- after -ent.',
              'Because -e and -es are always hard.'
            ],
            answerIdx: 0,
            audio: 'nous voyageons, nous commençons',
            explain: 'Before "o" (-ons), g → hard /g/ and c → hard /k/; adding "e" (-geons) or cedilla (-çons) preserves the soft /ʒ/ and /s/ sounds.',
            explainZh: '只有 -ons 以字母 o 开头（会令 g/c 变硬），所以只有 nous 需要加 e 或变 ç 来维持软音！'
          }
        ],
        related: [
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_5', label: '5A.5 Stem-Changing -ER (I): Boot l/t, é→è, e→è' },
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_7', label: '5A.7 Regular -IR Verbs (finir)' }
        ]
      },

      /* =========================================================
         PAGE 5A.7: REGULAR -IR VERBS (vir1.html — finir + 12 VERBS)
      ========================================================= */
      {
        id: 'v5a_7',
        code: '5A.7',
        group: '-ir Verb Family',
        shortTitle: 'Regular -IR Verbs (finir + 12 Verbs)',
        title: 'Regular -IR Verbs (2nd Conjugation): finir, the -iss- Plural Bridge & 12 Core Verbs',
        titleZh: '第二组规则 -ir 动词：finir 变位（-issons 复数）、单双 s 读音与 12 个核心词',
        estMin: 4,
        summary: 'Drop -ir and add -is, -is, -it, -issons, -issez, -issent (past participle -i: fini). Unlike -er verbs, you CAN clearly hear singular vs. plural in 3rd person: il finit (/fini/) vs. ils finissent (/finis/)! Master Tex’s 12 common regular -ir verbs and the /z/ vs. /s/ rule in choisir.',
        summaryZh: '第二组规则 -ir 动词（以 finir 为代表）词尾为 **-is, -is, -it, -issons, -issez, -issent**，过去分词去 r 即可（**fini**）。与 -er 动词不同，这组在听力中非常容易区分单复数：**il finit** 词尾不发音，而 **ils finissent** 有清晰的 /s/ 结尾！同时学完 choisir（单 s 读 /z/，双 ss 读 /s/）和 Tex 精选 12 个规则 -ir 动词。',
        cheatSummary: [
          { label: 'Regular -IR Endings (2nd Conj.)', rule: 'Drop -ir → -is, -is, -it, -issons, -issez, -issent. Past participle = stem + -i (fini, choisi).', ruleZh: '去 -ir 加词尾：-is, -is, -it, -issons, -issez, -issent；复数全员自带 -iss-！过去分词以 -i 结尾（fini）。' },
          { label: 'Clear Audio Clue: finit vs. finissent', rule: 'il finit (/fini/) ends in a vowel vs. ils finissent (/finis/) ends in a sharp /s/! Warning: ouvrir, partir, sortir, dormir are IRREGULAR (5A.8–5A.9).', ruleZh: '听力辨别利器：il finit 无尾音，ils finissent 末尾清晰发出 /s/！（注意 ouvrir、partir、sortir、dormir 不属此类，下两页学。）' }
        ],
        sections: [
          {
            id: 'v5a7_finir',
            heading: '1. Conjugating "finir" & Single-s /z/ vs. Double-ss /s/ ("choisir")',
            headingZh: '一、finir 变位范式与 choisir 的 /z/ vs /s/ 发音对照',
            lead: 'Listen to how singular forms end cleanly on the stem vowel (-i), while plural forms insert -iss- (/s/). In choisir (to choose), notice the stem already ends in one s between vowels (/z/: il choisit), whereas plural -iss- sounds like sharp /s/ (nous choisissons)!',
            leadZh: '看 finir 的单复数对比，并特别留意 choisir 里的发音细节：单写 s 在元音之间发浊音 /z/（il choisit），复数插入的双写 ss 发清音 /s/（nous choisissons）：',
            cartoon: {
              src: './assets/tex_cartoons/vir1.gif',
              alt: 'Tex et Tammy choisissent du vin rouge',
              caption: 'Tex et Tammy réunissent des copains. Tammy: Quel vin tu choisis ? Tex: Nous choisissons toujours du rouge.',
              captionZh: 'tu choisis（词干单 s 读 /z/）vs. nous choisissons（复数双 ss 读 /s/）！'
            },
            table: {
              headers: ['Person', 'Singular (finir — p.p. fini)', 'Plural (finir)', 'Dialogue Highlight'],
              rows: [
                { cols: ['1st', 'je finis', 'nous finissons', 'je finis (/i/) vs. nous finissons (/sɔ̃/)'], audio: 'je finis, nous finissons' },
                { cols: ['2nd', 'tu finis', 'vous finissez', 'tu finis (/i/) vs. vous finissez (/se/)'], audio: 'tu finis, vous finissez' },
                { cols: ['3rd', 'il/elle/on finit', 'ils/elles finissent', 'il finit (/fini/) vs. ils finissent (/finis/)!'], audio: 'il finit, ils finissent' }
              ]
            },
            examples: [
              { fr: 'Tex et Tammy réunissent des copains ce soir.', en: 'Tex and Tammy are getting friends together this evening.', zh: 'Tex 和 Tammy 今晚邀请朋友聚会（réunissent 读出 /s/）。', tag: 'Plural -issent' },
              { fr: 'Tammy : Quel vin tu choisis, Tex ?', en: 'Tammy: What wine do you choose, Tex?', zh: 'Tammy：Tex，你选哪款酒？（choisis 单 s 读 /z/）', tag: 'Single s /z/' },
              { fr: 'Tex réfléchit un moment, et puis il choisit un bon vin rouge.', en: 'Tex reflects a moment and then he chooses a good red wine.', zh: 'Tex 思考了一会儿，然后挑了一瓶好红酒。', tag: 'Singular -it' },
              { fr: 'Tex : Nous choisissons toujours du rouge. C’est bon pour la santé.', en: 'Tex: We always choose red (wine). It’s good for (one’s) health.', zh: 'Tex：我们总是选红葡萄酒，对健康有好处。（-ss- 读 /s/）', tag: 'Double ss /s/' }
            ]
          },
          {
            id: 'v5a7_12verbs',
            heading: '2. Tex’s 12 Common Regular -IR Verbs (+ Irregular Teaser)',
            headingZh: '二、Tex 精选 12 个规则 -ir 动词（+ 两类不规则预告）',
            lead: 'Notice how many -ir verbs describe growth, change of state, or mental action! Remember: ouvrir, partir, sortir, and dormir do NOT follow finir:',
            leadZh: '许多描述体型/年龄变化或思考的动词都在第二组（注意 obéir 接人用 à，réussir 接事物/考试用 à）：',
            table: {
              headers: ['Verb', 'Meaning', 'Verb', 'Meaning'],
              rows: [
                { cols: ['choisir', 'to choose', 'obéir (à quelqu’un)', 'to obey (someone)'], audio: 'choisir, obéir' },
                { cols: ['établir', 'to establish', 'réagir', 'to react'], audio: 'établir, réagir' },
                { cols: ['grandir', 'to grow (up)', 'réfléchir', 'to think, reflect'], audio: 'grandir, réfléchir' },
                { cols: ['grossir', 'to gain weight', 'réunir', 'to get together, assemble'], audio: 'grossir, réunir' },
                { cols: ['maigrir', 'to lose weight', 'réussir (à)', 'to succeed (at)'], audio: 'maigrir, réussir' },
                { cols: ['mincir', 'to get slimmer', 'vieillir', 'to grow old'], audio: 'mincir, vieillir' }
              ]
            },
            quickCheck: {
              prompt: 'In Tex’s listening test, you hear /ilfinis/ ("they finish" vs. "he finishes"). Which subject is it?',
              promptZh: '听力里听到末尾清清楚楚发出 /s/ 音的 /finɪs/，一定是单数还是复数？',
              options: [
                'Plural ("ils finissent" — Joe-Bob et Corey)! Singular "il finit" ends in silent -t (/fini/).',
                'Singular ("il finit" — Tex), because -t sounds like /s/.',
                'Impossible to tell.',
                'Always "nous".'
              ],
              answerIdx: 0,
              explain: 'In regular -ir verbs, 3rd singular ends silently (-it → /i/), whereas 3rd plural sounds the -ss- before silent -ent (-issent → /is/)!',
              explainZh: 'il finit 的 t 静音；ils finissent 发 /finis/，这是第二组 -ir 动词最明显的复数特征！'
            }
          }
        ],
        drills: [
          {
            id: 'd5a7_d1',
            kind: 'fib',
            prompt: 'Tex ___ beaucoup. (réfléchir)',
            promptZh: 'Tex 原题 #1：Tex 想很多（réfléchir）：',
            answers: ['réfléchit', 'reflechit'],
            hint: 'il/Tex takes -it.',
            audio: 'Tex réfléchit beaucoup.',
            explain: 'réfléchir (il) → réfléchit.',
            explainZh: '第三人称单数加 -it → réfléchit。'
          },
          {
            id: 'd5a7_d2',
            kind: 'fib',
            prompt: 'Les enfants de Rita ___. (grandir)',
            promptZh: 'Tex 原题 #2：Rita 的孩子们在长高（grandir）：',
            answers: ['grandissent'],
            hint: '3rd pl. takes -issent!',
            audio: 'Les enfants de Rita grandissent.',
            explain: 'les enfants (= ils) grandissent.',
            explainZh: '复数主语加 -issent → grandissent。'
          },
          {
            id: 'd5a7_d3',
            kind: 'fib',
            prompt: 'Tammy : Je ___ en hiver. (grossir)',
            promptZh: 'Tex 原题 #3：Tammy 说我冬天会发胖（grossir）：',
            answers: ['grossis'],
            hint: 'je takes -is.',
            audio: 'Je grossis en hiver.',
            explain: 'je grossis.',
            explainZh: 'je + -is → grossis。'
          },
          {
            id: 'd5a7_d4',
            kind: 'fib',
            prompt: 'Corey : Je ___ des amis pour manger une pizza. (réunir)',
            promptZh: 'Tex 原题 #4：Corey 召集朋友一起吃披萨（réunir）：',
            answers: ['réunis', 'reunis'],
            hint: 'je takes -is.',
            audio: 'Je réunis des amis pour manger une pizza.',
            explain: 'je réunis.',
            explainZh: 'je + -is → réunis。'
          },
          {
            id: 'd5a7_d5',
            kind: 'fib',
            prompt: 'Les enfants de Rita : Nous ___ à notre mère. (obéir)',
            promptZh: 'Tex 原题 #5：Rita 的孩子们说我们听妈妈的话（obéir）：',
            answers: ['obéissons', 'obeissons'],
            hint: 'nous takes -issons.',
            audio: 'Nous obéissons à notre mère.',
            explain: 'nous obéissons.',
            explainZh: 'nous + -issons → obéissons。'
          },
          {
            id: 'd5a7_d6',
            kind: 'fib',
            prompt: 'Joe-Bob et Corey ___ toujours leurs pizzas. (finir)',
            promptZh: 'Tex 原题 #6：Joe-Bob 和 Corey 总是吃光他们的披萨（finir）：',
            answers: ['finissent'],
            hint: '3rd pl. takes -issent.',
            audio: 'Joe-Bob et Corey finissent toujours leurs pizzas.',
            explain: 'ils finissent.',
            explainZh: '第三人称复数加 -issent → finissent。'
          },
          {
            id: 'd5a7_d7',
            kind: 'fib',
            prompt: 'Fiona, tu ___ trop ! (réfléchir)',
            promptZh: 'Tex 原题 #7：Fiona，你想太多了（réfléchir）：',
            answers: ['réfléchis', 'reflechis'],
            hint: 'tu takes -is.',
            audio: 'Fiona, tu réfléchis trop !',
            explain: 'tu réfléchis.',
            explainZh: 'tu + -is → réfléchis。'
          },
          {
            id: 'd5a7_d8',
            kind: 'fib',
            prompt: 'Bette ___ parce qu’elle mange peu. (maigrir)',
            promptZh: 'Tex 原题 #8：Bette 变瘦了，因为她吃得很少（maigrir）：',
            answers: ['maigrit'],
            hint: 'elle takes -it.',
            audio: 'Bette maigrit parce qu’elle mange peu.',
            explain: 'Bette (= elle) maigrit.',
            explainZh: '第三人称单数 + -it → maigrit。'
          },
          {
            id: 'd5a7_d9',
            kind: 'fib',
            prompt: 'Tex ne ___ pas à Paw-Paw. (obéir — negative with n’/ne)',
            promptZh: 'Tex 原题 #9：Tex 不听 Paw-Paw 的话（obéir）：',
            answers: ['obéit', 'obeit'],
            hint: 'il takes -it.',
            audio: 'Tex n’obéit pas à Paw-Paw.',
            explain: 'Tex (= il) obéit.',
            explainZh: 'obéit（注：书面实际写作 n’obéit pas）。'
          },
          {
            id: 'd5a7_d10',
            kind: 'fib',
            prompt: 'Joe-Bob, pourquoi est-ce que tu ne ___ pas tes devoirs ? (finir)',
            promptZh: 'Tex 原题 #10：Joe-Bob，你为什么不写完作业（finir）：',
            answers: ['finis'],
            hint: 'tu takes -is.',
            audio: 'Joe-Bob, pourquoi est-ce que tu ne finis pas tes devoirs ?',
            explain: 'tu finis.',
            explainZh: 'tu + -is → finis。'
          },
          {
            id: 'd5a7_d11',
            kind: 'fib',
            prompt: 'Edouard, vous ne ___ pas. (maigrir)',
            promptZh: 'Tex 原题 #11：Edouard，您并没有变瘦啊（maigrir）：',
            answers: ['maigrissez'],
            hint: 'vous takes -issez.',
            audio: 'Edouard, vous ne maigrissez pas.',
            explain: 'vous maigrissez.',
            explainZh: 'vous + -issez → maigrissez。'
          },
          {
            id: 'd5a7_d12',
            kind: 'fib',
            prompt: 'Fiona et Tammy, vous ___ toujours du vin blanc. (choisir)',
            promptZh: 'Tex 原题 #12：Fiona 和 Tammy，你们总是选白葡萄酒（choisir）：',
            answers: ['choisissez'],
            hint: 'vous takes -issez.',
            audio: 'Fiona et Tammy, vous choisissez toujours du vin blanc.',
            explain: 'vous choisissez.',
            explainZh: 'vous + -issez → choisissez。'
          }
        ],
        related: [
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_6', label: '5A.6 Stem-Changing -ER (II)' },
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_8', label: '5A.8 Irregular -IR Like ouvrir' }
        ]
      },

      /* =========================================================
         PAGE 5A.8: IRREGULAR -IR LIKE OUVRIR (vir2.html)
      ========================================================= */
      {
        id: 'v5a_8',
        code: '5A.8',
        group: '-ir Verb Family',
        shortTitle: 'Irregular -IR: ouvrir, offrir, souffrir',
        title: 'Irregular -IR Verbs Like "ouvrir": Conjugated Exactly Like -ER Verbs!',
        titleZh: '不规则 -ir 动词（一）：ouvrir 等 5 个动词按 -er 规律变位',
        estMin: 3,
        summary: 'A compact family of 5 -ir verbs—ouvrir (open), couvrir (cover), découvrir (discover), offrir (offer/give a gift), souffrir (suffer)—ignore regular -ir endings completely and conjugate just like -ER verbs in the present tense AND imperative (Ouvre le paquet, Tex — NO -s!). Watch their irregular past participle: ouvert, offert, souffert...',
        summaryZh: '有一个超好用的 5 词小家族：虽然不定式以 **-ir** 结尾（**ouvrir / couvrir / découvrir / offrir / souffrir**），但现在时却**完全按第一组 -er 的词尾（-e, -es, -e, -ons, -ez, -ent）来变位**！甚至连 **tu 命令式也像 -er 动词一样去掉 -s**（Ouvre le paquet!）。注意它们的过去分词是 `-ert`（ouvert, offert, découvert, souffert, couvert）。',
        cheatSummary: [
          { label: 'ouvrir Family (5 Verbs = Fake -ER!)', rule: 'ouvrir, couvrir, découvrir, offrir, souffrir take -e, -es, -e, -ons, -ez, -ent (j’ouvre, tu ouvres, il ouvre, nous ouvrons, vous ouvrez, ils ouvrent)!', ruleZh: '假装是 -er 动词：ouvrir / couvrir / découvrir / offrir / souffrir 词尾用 -e, -es, -e, -ons, -ez, -ent（绝不能加 -iss-！）。' },
          { label: 'tu Imperative Drops -s + -ert P.P.', rule: 'Imperative "tu" drops final -s just like parler: "Ouvre le paquet !" Past participles end in -ert: ouvert, couvert, découvert, offert, souffert.', ruleZh: 'tu 命令式去 -s（Ouvre le paquet! 打开包裹！）。过去分词全部以 -ert 结尾：ouvert, offert, souffert。' }
        ],
        sections: [
          {
            id: 'v5a8_ouvrir',
            heading: '1. Paradigm of "ouvrir" + the 5-Verb Family & No-s Imperative',
            headingZh: '一、ouvrir 变位表、同族 5 词与无 -s 命令式',
            lead: 'Compare j’ouvre / ils ouvrent side-by-side with j’offre / ils offrent—every single ending matches regular -er verbs (and remember: NEVER write *j’ouvris or *nous ouvrissons in the present tense!).',
            leadZh: '对照 ouvrir 的六个人称和同族 5 词，注意 Bette 给 Tex 送生日礼物时的命令式 "Ouvre le paquet!" 没有 -s：',
            cartoon: {
              src: './assets/tex_cartoons/vir2.gif',
              alt: 'Bette offre un cadeau à Tex',
              caption: 'Bette offre un cadeau à Tex. Bette: Ouvre le paquet, Tex ! (tu imperative drops -s, just like -er verbs!).',
              captionZh: 'Bette 送礼物给 Tex（offrir → offre），并说：“Ouvre le paquet !（打开包裹，tu 命令式去掉 s！）”。'
            },
            table: {
              headers: ['Person', 'ouvrir (to open — p.p. ouvert)', 'offrir (to offer/give gift)', 'All 5 Family Verbs'],
              rows: [
                { cols: ['je', 'j’ouvre', 'j’offre', 'ouvrir — to open (p.p. ouvert)'], audio: 'j’ouvre, j’offre' },
                { cols: ['tu', 'tu ouvres (imp. Ouvre !)', 'tu offres (imp. Offre !)', 'couvrir — to cover (p.p. couvert)'], audio: 'tu ouvres, Ouvre le paquet !' },
                { cols: ['il / elle / on', 'il ouvre', 'il offre', 'découvrir — to discover (p.p. découvert)'], audio: 'il ouvre, Bette offre un cadeau à Tex.' },
                { cols: ['nous / vous', 'nous ouvrons · vous ouvrez', 'nous offrons · vous offrez', 'offrir — to offer/give a gift (p.p. offert)'], audio: 'nous ouvrons, vous ouvrez' },
                { cols: ['ils / elles', 'ils ouvrent', 'ils offrent', 'souffrir — to suffer (p.p. souffert)'], audio: 'ils ouvrent, ils offrent' }
              ]
            },
            examples: [
              { fr: 'Bette offre un cadeau à Tex. C’est son anniversaire aujourd’hui !', en: 'Bette is giving Tex a gift. It’s his birthday today!', zh: 'Bette 送给 Tex 一份礼物，今天是他的生日！', tag: 'offrir (il/elle)' },
              { fr: 'Bette : Ouvre le paquet, Tex !', en: 'Bette: Open the package, Tex!', zh: 'Bette：打开包裹吧，Tex！（注意 Ouvre 没有 s！）', tag: 'tu Imperative' }
            ],
            quickCheck: {
              prompt: 'How do you tell a friend (tu): "Open the window!"?',
              promptZh: '用 tu 对朋友说“打开窗户！”，哪个拼写完全正确？',
              options: [
                'Ouvre la fenêtre ! (no -s, because ouvrir mimics regular -er verbs)',
                'Ouvres la fenêtre !',
                'Ouvris la fenêtre !',
                'Ouvrir la fenêtre !'
              ],
              answerIdx: 0,
              explain: 'Because ouvrir conjugates like an -er verb, its affirmative "tu" imperative drops the final -s → Ouvre !',
              explainZh: '凡按 -er 规则变位的动词（包括 ouvrir 一族），tu 命令式一律去掉词尾 -s：Ouvre！'
            }
          }
        ],
        drills: [
          {
            id: 'd5a8_d1',
            kind: 'fib',
            prompt: 'Tex ___ la musique cadienne. (découvrir)',
            promptZh: 'Tex 原题：Tex 发现了卡津音乐（découvrir）：',
            answers: ['découvre', 'decouvre'],
            hint: 'il + -e (like -er verbs!).',
            audio: 'Tex découvre la musique cadienne.',
            explain: 'découvrir → il découvre.',
            explainZh: '像 -er 动词一样加 -e → découvre。'
          },
          {
            id: 'd5a8_d2',
            kind: 'fib',
            prompt: 'Tammy : Tu ___ un cadeau à Tex, Bette ? (offrir)',
            promptZh: 'Tex 原题：Tammy 问：“Bette，你给 Tex 送礼物吗？”（offrir）：',
            answers: ['offres'],
            hint: 'question with tu → keeps -s (offres)!',
            audio: 'Tu offres un cadeau à Tex, Bette ?',
            explain: 'In indicative statements/questions, tu takes -es → tu offres.',
            explainZh: '陈述句与疑问句里 tu 带 -es → offres（仅命令式去 s）。'
          },
          {
            id: 'd5a8_d3',
            kind: 'fib',
            prompt: 'Tammy ___ les yeux pendant les films d’horreur. (couvrir)',
            promptZh: 'Tex 原题：看恐怖片时 Tammy 蒙上眼睛（couvrir）：',
            answers: ['couvre'],
            hint: 'elle + -e.',
            audio: 'Tammy couvre les yeux pendant les films d’horreur.',
            explain: 'couvrir (elle) → couvre.',
            explainZh: '第三人称单数写作 couvre。'
          },
          {
            id: 'd5a8_d4',
            kind: 'fib',
            prompt: 'Fiona et Corey ___ d’un complexe. (souffrir)',
            promptZh: 'Tex 原题：Fiona 和 Corey 有自卑情结（souffrir，注意复数不加 -iss-！）：',
            answers: ['souffrent'],
            hint: '3rd pl. -ent (NOT -issent!).',
            audio: 'Fiona et Corey souffrent d’un complexe.',
            explain: 'souffrir (ils) → souffrent (like -er!).',
            explainZh: '第三人称复数写作 souffrent（千万别写 souffrissent！）。'
          },
          {
            id: 'd5a8_d5',
            kind: 'fib',
            prompt: 'Tex dit aux étudiants : ___ vos livres, s’il vous plaît ! (ouvrir — vous imperative)',
            promptZh: 'Tex 原题：Tex 对全班学生说：“请打开你们的书！”（vous 命令式）：',
            answers: ['Ouvrez', 'ouvrez'],
            hint: 'vous imperative = ouvrez.',
            audio: 'Ouvrez vos livres, s’il vous plaît !',
            explain: 'vous form → Ouvrez.',
            explainZh: 'vous 形式直接用 Ouvrez。'
          },
          {
            id: 'd5a8_d6',
            kind: 'fib',
            prompt: 'Fiona dit à ses amis : Vous ___ Sixth Street, moi j’étudie ! (découvrir)',
            promptZh: 'Tex 原题：Fiona 对朋友们说：“你们去逛/探索 Sixth Street，我学习！”（découvrir）：',
            answers: ['découvrez', 'decouvrez'],
            hint: 'vous + -ez.',
            audio: 'Vous découvrez Sixth Street.',
            explain: 'vous découvrez.',
            explainZh: 'vous 词尾为 -ez → découvrez。'
          },
          {
            id: 'd5a8_d7',
            kind: 'fib',
            prompt: 'Corey : Je ___ d’un mal de tête. (souffrir)',
            promptZh: 'Tex 原题：Corey 说：“我头疼得厉害。”（souffrir）：',
            answers: ['souffre'],
            hint: 'je + -e.',
            audio: 'Je souffre d’un mal de tête.',
            explain: 'je souffre (NO -s on je!).',
            explainZh: '按 -er 词尾：je souffre（不要加 s！）。'
          },
          {
            id: 'd5a8_d8',
            kind: 'fib',
            prompt: 'Watch "aller + infinitive"! Edouard : Chez moi vous allez ___ la bonne cuisine française. (découvrir)',
            promptZh: 'Tex 陷阱题（aller + 不定式）：在我家你们将会领略正宗法国美食（注意前面有 allez！）：',
            answers: ['découvrir', 'decouvrir'],
            hint: 'after conjugated "allez", keep the INFINITIVE!',
            audio: 'Chez moi vous allez découvrir la bonne cuisine française.',
            explain: 'Near future "vous allez" is ALREADY conjugated → découvrir stays in the infinitive!',
            explainZh: '前面已经有变位动词 allez（将要），所以后面保留动词原形 découvrir！'
          },
          {
            id: 'd5a8_d9',
            kind: 'fib',
            prompt: 'Bette (to Tex): ___ ton cadeau, Tex ! (ouvrir — tu imperative!)',
            promptZh: 'Tex 原题：Bette 对 Tex 说：“打开你的礼物吧！”（tu 命令式，小心 s！）：',
            answers: ['Ouvre', 'ouvre'],
            hint: 'drop -s in tu imperative (like -er!).',
            audio: 'Ouvre ton cadeau, Tex !',
            explain: 'Because ouvrir conjugates like -er, tu imperative drops -s → Ouvre !',
            explainZh: '记住：tu 命令式去掉 -s → Ouvre！'
          },
          {
            id: 'd5a8_d10',
            kind: 'fib',
            prompt: 'Nous ___ souvent d’allergies à Austin. (souffrir)',
            promptZh: 'Tex 原题：我们在奥斯汀经常过敏（souffrir）：',
            answers: ['souffrons'],
            hint: 'nous + -ons (NO -iss-!).',
            audio: 'Nous souffrons souvent d’allergies à Austin.',
            explain: 'nous souffrons.',
            explainZh: 'nous + -ons → souffrons。'
          },
          {
            id: 'd5a8_d11',
            kind: 'fib',
            prompt: 'Les enfants de Rita lui ___ des fleurs pour la fête des mères. (offrir)',
            promptZh: 'Tex 原题：母亲节时 Rita 的孩子们送给她花（offrir）：',
            answers: ['offrent'],
            hint: '3rd pl. + -ent.',
            audio: 'Les enfants lui offrent des fleurs.',
            explain: 'les enfants (= ils) offrent.',
            explainZh: '复数第三人称 → offrent。'
          },
          {
            id: 'd5a8_d12',
            kind: 'choice',
            prompt: 'What is the past participle of "ouvrir" and "offrir"?',
            promptZh: 'ouvrir 和 offrir 的过去分词分别是什么？',
            options: ['ouvert, offert', 'ouvri, offri', 'ouvré, offré', 'ouvru, offru'],
            answerIdx: 0,
            audio: 'ouvert, offert',
            explain: 'All 5 verbs in the ouvrir family form irregular past participles ending in -ert (ouvert, couvert, découvert, offert, souffert).',
            explainZh: '这 5 个动词过去分词全以 -ert 结尾：ouvert, couvert, découvert, offert, souffert。'
          }
        ],
        related: [
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_7', label: '5A.7 Regular -IR Verbs (finir)' },
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_9', label: '5A.9 Irregular -IR: partir, sortir, dormir' }
        ]
      },

      /* =========================================================
         PAGE 5A.9: IRREGULAR -IR PARTIR, SORTIR, DORMIR (vir3.html)
      ========================================================= */
      {
        id: 'v5a_9',
        code: '5A.9',
        group: '-ir Verb Family',
        shortTitle: 'Irregular -IR: partir, sortir, dormir',
        title: 'Irregular -IR Verbs: "partir", "sortir" & "dormir" (Drop Consonant in Singular!)',
        titleZh: '不规则 -ir 动词（二）：partir, sortir, dormir（单数丢辅音、复数留辅音）',
        estMin: 3,
        summary: 'Master the 3 most common irregular -ir verbs: partir (leave), sortir (go out / exit), and dormir (sleep). Their golden rule: DROP the final consonant of the stem (-t or -m) in ALL singular forms (je pars, tu sors, il dort), and BRING IT BACK cleanly in all plural forms (nous partons, vous sortez, ils dorment)!',
        summaryZh: '攻克最高频的三剑客 **partir（离开/出发）、sortir（出去）、dormir（睡觉）**：它们既不加 `-iss-`，也不是 `-er` 词尾！核心绝招只有一句：**单数删掉词干尾辅音（t 或 m），只留两个字母加 `-s / -s / -t`（je pars, je sors, je dors）；复数把辅音 t / m 请回来再加 `-ons / -ez / -ent`（ils partent, ils sortent, ils dorment）！** 因此单复数读音一眼听出！',
        cheatSummary: [
          { label: 'Two-Stem Secret (Short Sg. / Full Pl.)', rule: 'Singular drops stem consonant -t/-m + (-s, -s, -t): je pars / sors / dors, il part / sort / dort. Plural restores stem consonant + (-ons, -ez, -ent): ils partent / sortent / dorment!', ruleZh: '单数“短词干”（丢掉 t/m）：je pars / il part；复数“长词干”（保留 t/m 并发音）：nous partons / ils partent！' },
          { label: 'Past Participles + Listening Clue', rule: 'parti, sorti, dormi (take être for partir/sortir in passé composé!). In 3rd person, "il dort" (/il dɔʁ/) has NO -t vs. "ils dorment" (/il dɔʁm/) clearly sounds /m/!', ruleZh: '过去分词分别为 parti, sorti, dormi（注意 partir 与 sortir 在复合过去时用 être）。听力上复数会清晰念出 t 或 m！' }
        ],
        sections: [
          {
            id: 'v5a9_paradigms',
            heading: '1. Conjugation Tables: partir, sortir & dormir',
            headingZh: '一、三大不规则 -ir 动词全变位对比表',
            lead: 'Listen closely to 3rd singular vs. 3rd plural: in il part / il sort / il dort the final -t is SILENT; in ils partent / ils sortent / ils dorment you clearly pronounce the consonant /t/ or /m/ before silent -ent!',
            leadZh: '看准“单数丢 t/m、复数留 t/m”的清晰对比：',
            cartoon: {
              src: './assets/tex_cartoons/vir3.gif',
              alt: 'Tex et Tammy sortent danser en Louisiane',
              caption: 'Tammy: Je pars pour la Louisiane avec Tex. Samedi soir nous sortons danser. Paw-Paw préfère dormir.',
              captionZh: 'Tammy：我周末出发去路易斯安那（je pars），周六晚上我们出去跳舞（nous sortons），Paw-Paw 宁可待在家睡觉（dormir）。'
            },
            table: {
              headers: ['Person', 'partir (p.p. parti)', 'sortir (p.p. sorti)', 'dormir (p.p. dormi)'],
              rows: [
                { cols: ['je / tu', 'je pars · tu pars', 'je sors · tu sors', 'je dors · tu dors'], audio: 'je pars, je sors, je dors' },
                { cols: ['il / elle / on', 'il part (silent -t)', 'il sort (silent -t)', 'il dort (silent -t)'], audio: 'il part, il sort, il dort' },
                { cols: ['nous', 'nous partons (/t/)', 'nous sortons (/t/)', 'nous dormons (/m/)'], audio: 'nous partons, nous sortons, nous dormons' },
                { cols: ['vous', 'vous partez (/t/)', 'vous sortez (/t/)', 'vous dormez (/m/)'], audio: 'vous partez, vous sortez, vous dormez' },
                { cols: ['ils / elles', 'ils partent (/t/!)', 'ils sortent (/t/!)', 'ils dorment (/m/!)'], audio: 'ils partent, ils sortent, ils dorment' }
              ]
            },
            examples: [
              { fr: 'Bette : Tammy, tu pars ce week-end ?', en: 'Bette: Tammy, are you leaving this weekend?', zh: 'Bette：Tammy，你这周末出发吗？', tag: 'tu pars' },
              { fr: 'Tammy : Oui, je pars pour la Louisiane avec Tex. Samedi soir nous sortons danser.', en: 'Tammy: Yes, I’m leaving for Louisiana with Tex. Saturday night we’re going out to dance.', zh: 'Tammy：是的，我和 Tex 去路易斯安那，周六晚上出去跳舞。', tag: 'je pars / nous sortons' },
              { fr: 'Bette : Et Paw-Paw, il sort avec vous ? — Tammy : Non, il préfère rester à la maison pour dormir.', en: 'Bette: And does Paw-Paw go out with you? — Tammy: No, he prefers to stay home and sleep.', zh: 'Bette：Paw-Paw 也跟你们出去吗？— 不，他更喜欢待在家睡觉。', tag: 'il sort / dormir' }
            ],
            quickCheck: {
              prompt: 'Out loud, how can you distinguish "Tammy dort" (singular) from "Tammy et Bette dorment" (plural)?',
              promptZh: '读出来时，“Tammy dort” 和 “Tammy et Bette dorment” 怎么用耳朵一眼分清？',
              options: [
                '"Tammy dort" ends in /dɔʁ/ (silent -t), while "dorment" pronounces the /m/ sound (/dɔʁm/)!',
                'Both sound identical.',
                '"Tammy dort" sounds the -t (/dɔʁt/).',
                '"dorment" adds -iss-.'
              ],
              answerIdx: 0,
              explain: 'In singular, "dort" ends in silent -t (/dɔʁ/); in plural, "dorment" puts the -m- stem back so you clearly hear /m/!',
              explainZh: '单数 dort 末尾 t 静音（只读到 /dɔʁ/）；复数 dorment 把词干辅音 m 念出来了（/dɔʁm/）！'
            }
          }
        ],
        drills: [
          {
            id: 'd5a9_d1',
            kind: 'fib',
            prompt: 'Paw-Paw ne ___ pas parce qu’il aime rester à la maison. (sortir)',
            promptZh: 'Tex 原题 #1：Paw-Paw 不出门（sortir）：',
            answers: ['sort'],
            hint: '3rd sg. short stem + -t.',
            audio: 'Paw-Paw ne sort pas.',
            explain: 'Paw-Paw (= il) sort.',
            explainZh: '第三人称单数丢掉后面再加 -t → sort。'
          },
          {
            id: 'd5a9_d2',
            kind: 'fib',
            prompt: 'Nous ___ beaucoup le week-end. (dormir)',
            promptZh: 'Tex 原题 #2：我们周末睡很多觉（dormir，注意恢复 -m-！）：',
            answers: ['dormons'],
            hint: 'plural restores -m- → dormons.',
            audio: 'Nous dormons beaucoup le week-end.',
            explain: 'nous dormons.',
            explainZh: '复数找回辅音 m：dormons。'
          },
          {
            id: 'd5a9_d3',
            kind: 'fib',
            prompt: 'Watch "aiment + inf."! Bette et Tammy aiment ___ avec leurs amis. (sortir)',
            promptZh: 'Tex 原题 #3（注意前面已经有了变位动词 aiment！）：Bette 和 Tammy 喜欢和朋友出去玩：',
            answers: ['sortir'],
            hint: 'Two-verb rule: "aiment" is conjugated, so keep the INFINITIVE!',
            audio: 'Bette et Tammy aiment sortir avec leurs amis.',
            explain: 'Watch out! "aiment" is already conjugated, so the second verb stays in the infinitive: sortir.',
            explainZh: '陷阱警告：前面已有变位动词 aiment（喜欢），第二个动词保持不定式原形 **sortir**！'
          },
          {
            id: 'd5a9_d4',
            kind: 'fib',
            prompt: 'Corey ne ___ pas beaucoup parce qu’il préfère regarder la télé. (dormir)',
            promptZh: 'Tex 原题 #4：Corey 睡得不多（dormir，第三人称单数）：',
            answers: ['dort'],
            hint: '3rd sg. drops -m- and adds -t → dort!',
            audio: 'Corey ne dort pas beaucoup.',
            explain: 'Corey (= il) dort (no -m-!).',
            explainZh: 'dormir 丢掉 m 加 t → dort！'
          },
          {
            id: 'd5a9_d5',
            kind: 'fib',
            prompt: 'Joe-Bob, est-ce que tu ___ ce week-end ? (partir)',
            promptZh: 'Tex 原题 #5：Joe-Bob，你这周末离开吗（partir）：',
            answers: ['pars'],
            hint: 'tu drops -t- and adds -s!',
            audio: 'Joe-Bob, est-ce que tu pars ce week-end ?',
            explain: 'tu pars.',
            explainZh: 'tu 丢掉 t 加 s → pars。'
          },
          {
            id: 'd5a9_d6',
            kind: 'fib',
            prompt: 'Rita et les enfants, vous ___ ce soir ? (sortir)',
            promptZh: 'Tex 原题 #6：Rita 和孩子们，你们今晚出去吗（sortir）：',
            answers: ['sortez'],
            hint: 'vous restores -t- + -ez.',
            audio: 'Rita et les enfants, vous sortez ce soir ?',
            explain: 'vous sortez.',
            explainZh: '复数保留 t：sortez。'
          },
          {
            id: 'd5a9_d7',
            kind: 'fib',
            prompt: 'Josh et Tex ___ pour le film à sept heures. (partir)',
            promptZh: 'Tex 原题 #7：Josh 和 Tex 七点出发去看电影（partir）：',
            answers: ['partent'],
            hint: 'ils restores -t- + -ent.',
            audio: 'Josh et Tex partent pour le film à sept heures.',
            explain: 'Josh et Tex (= ils) partent.',
            explainZh: '第三人称复数保留 t 加 -ent → partent。'
          },
          {
            id: 'd5a9_d8',
            kind: 'fib',
            prompt: 'Tammy : Je ___ beaucoup après un examen. (dormir)',
            promptZh: 'Tex 原题 #8：考完试后我大睡一觉（dormir）：',
            answers: ['dors'],
            hint: 'je drops -m- and adds -s.',
            audio: 'Je dors beaucoup après un examen.',
            explain: 'je dors.',
            explainZh: 'je 丢掉 m 加 s → dors。'
          },
          {
            id: 'd5a9_d9',
            kind: 'fib',
            prompt: 'Tammy et Tex : Nous ___ pour les cours à 10 heures. (partir)',
            promptZh: 'Tex 原题 #9：我们 10 点出发去上课（partir）：',
            answers: ['partons'],
            hint: 'nous restores -t- + -ons.',
            audio: 'Nous partons pour les cours à dix heures.',
            explain: 'nous partons.',
            explainZh: '复数恢复 t → partons。'
          },
          {
            id: 'd5a9_d10',
            kind: 'fib',
            prompt: 'Fiona, pourquoi est-ce que tu ne ___ pas avec nous ? (sortir)',
            promptZh: 'Tex 原题 #10：Fiona，你为什么不和我们一起出去（sortir）：',
            answers: ['sors'],
            hint: 'tu drops -t- and adds -s.',
            audio: 'Fiona, pourquoi est-ce que tu ne sors pas avec nous ?',
            explain: 'tu sors.',
            explainZh: '单数丢 t 加 s → sors。'
          },
          {
            id: 'd5a9_d11',
            kind: 'fib',
            prompt: 'Edouard ___ pour son travail à cinq heures. (partir)',
            promptZh: 'Tex 原题 #11：Edouard 五点出发去上班（partir）：',
            answers: ['part'],
            hint: 'il/Edouard drops stem -t- then adds ending -t → part.',
            audio: 'Edouard part pour son travail à cinq heures.',
            explain: 'Edouard (= il) part.',
            explainZh: '第三人称单数以 -t 结尾：part。'
          },
          {
            id: 'd5a9_d12',
            kind: 'fib',
            prompt: 'Joe-Bob et Corey ne ___ pas souvent de Jester. (sortir)',
            promptZh: 'Tex 原题 #12：Joe-Bob 和 Corey 不常走出 Jester 宿舍（sortir）：',
            answers: ['sortent'],
            hint: '3rd pl. restores -t- + -ent.',
            audio: 'Joe-Bob et Corey ne sortent pas souvent de Jester.',
            explain: 'ils sortent.',
            explainZh: '复数保留 t 加 -ent → sortent。'
          }
        ],
        related: [
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_8', label: '5A.8 Irregular -IR Like ouvrir' },
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_10', label: '5A.10 Regular -RE Verbs (descendre + 9 Verbs)' }
        ]
      },

      /* =========================================================
         PAGE 5A.10: REGULAR -RE VERBS (vre1.html — descendre + 9 VERBS)
      ========================================================= */
      {
        id: 'v5a_10',
        code: '5A.10',
        group: '-re Verb Family',
        shortTitle: 'Regular -RE Verbs (descendre + 9 Verbs)',
        title: 'Regular -RE Verbs (3rd Conjugation): Endings (-s, -s, —), Silent -d vs. Pronounced /d/ & 9 Core Verbs',
        titleZh: '第三组规则 -re 动词：零词尾第三人称单数（descend）、/d/ 听辨线索与 9 个核心词',
        estMin: 4,
        summary: 'Drop -re and add -s, -s, — (ZERO ending!), -ons, -ez, -ent (past participle -u: descendu). Because il/elle/on adds NOTHING to the -d stem (il descend), the final -d and -ds are silent in singular—but in 3rd person plural (ils descendent), the /d/ is clearly pronounced before silent -ent!',
        summaryZh: '第三组规则 -re 动词（代表词 descendre）去掉 -re 后加 **-s, -s, —（空/零词尾！）, -ons, -ez, -ent**，过去分词换 **-u**（**descendu**）。记住发音规律：单数（descends / descends / descend）词尾 **-d/-ds 全部静音**；只有复数 **ils/elles descendent** 会把字母 **d** 清清楚楚念出来（/desɑ̃d/）！同时熟背 Tex 9 个高频规则 -re 动词（包括 attendre 直接及物、répondre 与 rendre visite à）。',
        cheatSummary: [
          { label: 'Regular -RE Endings (3rd Conj.)', rule: 'Drop -re → -s, -s, — (NOTHING added to il/elle/on!), -ons, -ez, -ent. P.p. = stem + -u (descendu, attendu, vendu).', ruleZh: '去 -re 加词尾：-s, -s, ∅（第三人称单数什么都不加！）, -ons, -ez, -ent；过去分词以 -u 结尾（descendu）。' },
          { label: 'Audio Clue: il descend vs. ils descendent', rule: 'Singular -d/-ds are SILENT ("il descend" = /desɑ̃/), whereas plural -dent PRONOUNCES /d/ ("ils descendent" = /desɑ̃d/)!', ruleZh: '单数 d 不发音（il descend /desɑ̃/），第三人称复数清晰发出 /d/ 音（ils descendent /desɑ̃d/）！' }
        ],
        sections: [
          {
            id: 'v5a10_descendre',
            heading: '1. Paradigm of "descendre" & 9 Common Regular -RE Verbs',
            headingZh: '一、descendre 变位表与 9 个常用规则 -re 动词',
            lead: 'Notice carefully: "il/elle/on descend" adds ZERO ending—never write *il descende or *il descendt! Listen to the cop & Tex dialogue and memorize all 9 Tex regular -re verbs below:',
            leadZh: '记住第三人称单数绝不加 t 或 e（直接就以词干 d 结尾：il descend, il attend, il répond）。另外注意 **rendre visite à quelqu’un** 才指“拜访某人”（visiter 只用于参观地点！）：',
            cartoon: {
              src: './assets/tex_cartoons/vre1.gif',
              alt: 'Un flic descend la rue. Tex vend des T-shirts sans permis.',
              caption: 'Un flic descend la rue: Monsieur, vous vendez des T-shirts ? Tex répond: Euh, oui, monsieur l’agent.',
              captionZh: '警察走下街来（descend）问 Tex：“先生，您在卖 T 恤吗（vous vendez）？” Tex 回答（répond）：“嗯，是的。”'
            },
            table: {
              headers: ['Person', 'Singular (descendre — p.p. descendu)', 'Plural (descendre)', 'Pronunciation Note'],
              rows: [
                { cols: ['1st', 'je descends', 'nous descendons', 'sg: silent -ds · pl: /dɔ̃/'], audio: 'je descends, nous descendons' },
                { cols: ['2nd', 'tu descends', 'vous descendez', 'sg: silent -ds · pl: /de/'], audio: 'tu descends, vous descendez' },
                { cols: ['3rd', 'il/elle/on descend (ZERO ending!)', 'ils/elles descendent', 'sg: silent -d (/desɑ̃/) vs. pl: /d/ (/desɑ̃d/)!'], audio: 'il descend, ils descendent' }
              ]
            },
            table2: null,
            examples: [
              { fr: 'attendre (to wait for — NO pour!) · dépendre de (to depend on) · entendre (to hear)', en: 'Remember: attendre takes a direct object (attendre le bus).', zh: 'attendre（等，不加 pour）、dépendre de（取决于）、entendre（听见）。', tag: 'Core -RE #1–3' },
              { fr: 'pendre (to hang) · perdre (to lose) · rendre (to hand in, give back)', en: 'Tex et Tammy perdent leurs clés; le prof rend les examens.', zh: 'pendre（悬挂）、perdre（丢失/输掉）、rendre（归还/交还）。', tag: 'Core -RE #4–6' },
              { fr: 'rendre visite à quelqu’un (to visit someone) · répondre (à) (to answer) · vendre (to sell)', en: 'Warning: visit a place = visiter; visit a PERSON = rendre visite à!', zh: 'rendre visite à + 人（拜访某人）、répondre（回答）、vendre（卖）。', tag: 'Core -RE #7–9' }
            ],
            quickCheck: {
              prompt: 'What is the correct 3rd person singular ("il / Joe-Bob") form of "répondre"?',
              promptZh: '“Joe-Bob 回答”对应第三人称单数，répondre 应该写成哪一个？',
              options: [
                'Joe-Bob répond (ZERO ending after -d!)',
                'Joe-Bob répondt',
                'Joe-Bob répons',
                'Joe-Bob réponde'
              ],
              answerIdx: 0,
              explain: 'In regular -re verbs, the 3rd person singular has NO ending at all — just drop -re: répond, descend, attend, vend, perd!',
              explainZh: '规则 -re 动词第三人称单数“零词尾”，去掉 -re 就完事了：répond, descend, attend, vend！'
            }
          }
        ],
        drills: [
          {
            id: 'd5a10_d1',
            kind: 'fib',
            prompt: 'Corey ___ son vélo pour avoir de l’argent. (vendre)',
            promptZh: 'Tex 原题 #1：Corey 卖掉他的自行车换钱（vendre）：',
            answers: ['vend'],
            hint: '3rd sg. regular -re = zero ending (just drop -re)!',
            audio: 'Corey vend son vélo pour avoir de l’argent.',
            explain: 'Corey (= il) vend.',
            explainZh: '规则 -re 第三人称单数零词尾：vend。'
          },
          {
            id: 'd5a10_d2',
            kind: 'fib',
            prompt: 'Fiona, tu ___ la musique ? (entendre)',
            promptZh: 'Tex 原题 #2：Fiona，你听见音乐声了吗（entendre）：',
            answers: ['entends'],
            hint: 'tu ending = -s.',
            audio: 'Fiona, tu entends la musique ?',
            explain: 'tu entends.',
            explainZh: 'tu 加 -s → entends。'
          },
          {
            id: 'd5a10_d3',
            kind: 'fib',
            prompt: 'Joe-Bob demande au prof : Est-ce que vous ___ nos examens aujourd’hui ? (rendre)',
            promptZh: 'Tex 原题 #3：您今天发回/归还我们的试卷吗（rendre）：',
            answers: ['rendez'],
            hint: 'vous ending = -ez.',
            audio: 'Est-ce que vous rendez nos examens aujourd’hui ?',
            explain: 'vous rendez.',
            explainZh: 'vous + -ez → rendez。'
          },
          {
            id: 'd5a10_d4',
            kind: 'fib',
            prompt: 'Tex ___ la rue Guadalupe. (descendre)',
            promptZh: 'Tex 原题 #4：Tex 沿着 Guadalupe 街走下去（descendre）：',
            answers: ['descend'],
            hint: '3rd sg. = zero ending!',
            audio: 'Tex descend la rue Guadalupe.',
            explain: 'Tex (= il) descend.',
            explainZh: '第三人称单数零词尾：descend。'
          },
          {
            id: 'd5a10_d5',
            kind: 'fib',
            prompt: 'Joe-Bob et Corey ___ souvent leurs devoirs. (perdre)',
            promptZh: 'Tex 原题 #5：Joe-Bob 和 Corey 经常弄丢作业（perdre）：',
            answers: ['perdent'],
            hint: '3rd pl. = -ent (pronounces the /d/!).',
            audio: 'Joe-Bob et Corey perdent souvent leurs devoirs.',
            explain: 'ils perdent.',
            explainZh: '复数加 -ent 并读出 /d/ → perdent。'
          },
          {
            id: 'd5a10_d6',
            kind: 'fib',
            prompt: 'Watch "aller + infinitive"! Tex et Tammy vont ___ visite à Paw-Paw. (rendre)',
            promptZh: 'Tex 原题 #6（注意前面已经有 vont！）：Tex 和 Tammy 将要去拜访 Paw-Paw：',
            answers: ['rendre'],
            hint: 'near future "vont" is already conjugated → keep the INFINITIVE!',
            audio: 'Tex et Tammy vont rendre visite à Paw-Paw.',
            explain: '"vont rendre visite" = aller + INFINITIVE!',
            explainZh: '前面已有变位动词 vont（将要），所以后面保留不定式 **rendre**！'
          },
          {
            id: 'd5a10_d7',
            kind: 'fib',
            prompt: 'Tex : J’___ mes étudiants à Quacks. (attendre)',
            promptZh: 'Tex 原题 #7：我在 Quacks 咖啡馆等我的学生（attendre）：',
            answers: ['attends'],
            hint: 'je ending = -s.',
            audio: 'J’attends mes étudiants à Quacks.',
            explain: 'j’attends.',
            explainZh: 'je 加 -s → attends。'
          },
          {
            id: 'd5a10_d8',
            kind: 'fib',
            prompt: 'Corey à Tex : Nous ___ visite à Joe-Bob. Tu viens ? (rendre)',
            promptZh: 'Tex 原题 #8：我们去探望 Joe-Bob，你来吗（rendre）：',
            answers: ['rendons'],
            hint: 'nous ending = -ons.',
            audio: 'Nous rendons visite à Joe-Bob.',
            explain: 'nous rendons.',
            explainZh: 'nous + -ons → rendons。'
          },
          {
            id: 'd5a10_d9',
            kind: 'fib',
            prompt: 'Joe-Bob et Corey : Nous ___ le week-end avec impatience. (attendre)',
            promptZh: 'Tex 原题 #9：我们迫不及待地期盼周末（attendre）：',
            answers: ['attendons'],
            hint: 'nous + -ons.',
            audio: 'Nous attendons le week-end avec impatience.',
            explain: 'nous attendons.',
            explainZh: 'nous + -ons → attendons。'
          },
          {
            id: 'd5a10_d10',
            kind: 'fib',
            prompt: 'Corey, pourquoi est-ce que tu ne ___ pas ? (répondre)',
            promptZh: 'Tex 原题 #10：Corey，你为什么不回答（répondre）：',
            answers: ['réponds', 'reponds'],
            hint: 'tu ending = -s.',
            audio: 'Corey, pourquoi est-ce que tu ne réponds pas ?',
            explain: 'tu réponds.',
            explainZh: 'tu 加 -s → réponds。'
          },
          {
            id: 'd5a10_d11',
            kind: 'fib',
            prompt: 'Joe-Bob ne ___ jamais aux questions du prof. (répondre)',
            promptZh: 'Tex 原题 #11：Joe-Bob 从不回答老师的问题（répondre）：',
            answers: ['répond', 'repond'],
            hint: '3rd sg. = zero ending.',
            audio: 'Joe-Bob ne répond jamais aux questions du prof.',
            explain: 'Joe-Bob (= il) répond.',
            explainZh: '第三人称单数零词尾：répond。'
          },
          {
            id: 'd5a10_d12',
            kind: 'fib',
            prompt: 'Tex et Tammy, vous ___ ? (entendre)',
            promptZh: 'Tex 原题 #12：Tex 和 Tammy，你们听见了吗（entendre）：',
            answers: ['entendez'],
            hint: 'vous + -ez (with /z/ liaison!).',
            audio: 'Tex et Tammy, vous entendez ?',
            explain: 'vous entendez.',
            explainZh: 'vous + -ez → entendez。'
          }
        ],
        related: [
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_9', label: '5A.9 Irregular -IR: partir, sortir, dormir' },
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_11', label: '5A.11 Irregular -RE Like prendre' }
        ]
      },

      /* =========================================================
         PAGE 5A.11: IRREGULAR -RE LIKE PRENDRE (vre2.html)
      ========================================================= */
      {
        id: 'v5a_11',
        code: '5A.11',
        group: '-re Verb Family',
        shortTitle: 'Irregular -RE: prendre, apprendre, comprendre',
        title: 'Irregular -RE Verbs Like "prendre": Drops -d- in Plural & Doubles -nn- in ils/elles!',
        titleZh: '不规则 -re 动词（一）：prendre 家族（复数丢 d，ils 双写 nn）',
        estMin: 3,
        summary: 'Verbs in the prendre family—prendre (take), apprendre (learn/teach), comprendre (understand), surprendre (surprise), reprendre (take again/resume)—conjugate just like regular -re verbs in the singular (prends, prends, prend), but DROP the "d" in all plural forms (prenons, prenez) and DOUBLE the "n" in 3rd plural (ils prennent)! Past participle: pris.',
        summaryZh: '超级高频的 **prendre 家族**（含 **apprendre 学习/教、comprendre 理解、surprendre 使惊讶、reprendre 再拿**）记住三步诀：① **单数完全按规则 -re**，保留 d（`je prends, tu prends, il prend`）；② **复数全部把 d 踢掉**（`nous prenons, vous prenez`）；③ **ils/elles 还要双写 n**（`ils prennent`）！过去分词为 **pris**（compris, appris, surpris）。',
        cheatSummary: [
          { label: 'prendre 3-Step Pattern (p.p. pris)', rule: 'Sg. keeps d: je prends, tu prends, il prend. Pl. DROPS d: nous prenons, vous prenez, ils prennent (double -nn-!).', ruleZh: '单数有 d（prends / prends / prend）；复数丢 d（prenons / prenez）；ils 双写 nn（prennent）！' },
          { label: 'Clear Listening Contrast: prend vs. prennent', rule: 'il prend (/il pʁɑ̃/, nasal vowel only) vs. ils prennent (/il pʁɛn/, clear /n/ ending)! Family: apprendre, comprendre, surprendre, reprendre.', ruleZh: '听力单复数极其好分：il prend 是鼻化元音 /ɑ̃/，ils prennent 变成 /ɛn/，末尾清楚念出 n！' }
        ],
        sections: [
          {
            id: 'v5a11_prendre',
            heading: '1. Paradigm of "prendre" & Its 4 Compound Verbs',
            headingZh: '一、prendre 变位表与同族复合动词',
            lead: 'Notice the plural stem switches from prend- to pren- (no "d"!) and adds a second "n" in ils/elles prennent—listening to il prend vs. ils prennent makes singular vs. plural unmistakable!',
            leadZh: '单数词尾 d 静音且前面发鼻元音；复数全员去 d，ils/elles 更因双写 nn 发出清脆的 /n/ 音：',
            cartoon: {
              src: './assets/tex_cartoons/vre2.gif',
              alt: 'Edouard et Tammy surprennent Tex',
              caption: 'Edouard et Tammy surprennent Tex: Pourquoi tu prends un taxi ? Aujourd’hui mes étudiants apprennent la Marseillaise !',
              captionZh: 'Edouard 和 Tammy 吓了 Tex 一跳（surprennent）：“你干嘛坐出租车（tu prends）？” Tex：“我的学生在学唱《马赛曲》（apprennent）！”'
            },
            table: {
              headers: ['Person', 'prendre (to take — p.p. pris)', 'comprendre (to understand)', 'Family List (p.p. -is)'],
              rows: [
                { cols: ['je / tu', 'je prends · tu prends', 'je comprends · tu comprends', 'prendre (take) → pris'], audio: 'je prends, tu comprends' },
                { cols: ['il / elle / on', 'il prend (keeps d, ZERO ending)', 'il comprend', 'apprendre (learn/teach) → appris'], audio: 'il prend, il comprend' },
                { cols: ['nous', 'nous prenons (NO d!)', 'nous comprenons', 'comprendre (understand) → compris'], audio: 'nous prenons, nous comprenons' },
                { cols: ['vous', 'vous prenez (NO d!)', 'vous comprenez', 'surprendre (surprise) → surpris'], audio: 'vous prenez, vous comprenez' },
                { cols: ['ils / elles', 'ils prennent (NO d, DOUBLE nn!)', 'ils comprennent', 'reprendre (take more/resume) → repris'], audio: 'ils prennent, ils comprennent' }
              ]
            },
            examples: [
              { fr: 'Edouard et Tammy surprennent Tex.', en: 'Edouard and Tammy surprise Tex.', zh: 'Edouard 和 Tammy 让 Tex 大吃一惊（第三人称复数，去 d 双写 nn）。', tag: 'surprennent' },
              { fr: 'Tammy : Qu’est-ce que tu fais, Tex ? Tu vas où ? Pourquoi tu prends un taxi ?', en: 'Tammy: What are you doing, Tex? Where are you going? Why are you taking a taxi?', zh: 'Tammy：你在干嘛？为什么打车？', tag: 'tu prends' },
              { fr: 'Tex : Aujourd’hui mes étudiants apprennent à chanter la Marseillaise !', en: 'Tex: Today my students are learning to sing the Marseillaise!', zh: 'Tex：今天我的学生要学唱《马赛曲》！（注意 apprendre à + 不定式）', tag: 'apprennent' }
            ],
            quickCheck: {
              prompt: 'Look at the plural forms of "comprendre". Which option gets ALL THREE plural forms right?',
              promptZh: '下面哪一组完全写对了 comprendre 的三个复数形式（nous / vous / ils）？',
              options: [
                'nous comprenons · vous comprenez · ils comprennent',
                'nous comprendons · vous comprendez · ils comprendent',
                'nous comprennons · vous comprennez · ils comprenent',
                'nous prenons · vous prenez · ils prendent'
              ],
              answerIdx: 0,
              explain: 'Drop the -d- in ALL plural forms, and double the -n- ONLY in 3rd person plural: comprenons, comprenez, comprennent!',
              explainZh: '全员复数都去掉 d；并且只有第三人称复数双写 n：comprenons, comprenez, comprennent！'
            }
          }
        ],
        drills: [
          {
            id: 'd5a11_d1',
            kind: 'fib',
            prompt: 'Tex, tu ___ un grand café ? (prendre)',
            promptZh: 'Tex 原题 #1：Tex，你喝一大杯咖啡吗（prendre）：',
            answers: ['prends'],
            hint: 'singular keeps d + -s.',
            audio: 'Tex, tu prends un grand café ?',
            explain: 'tu prends.',
            explainZh: '单数保留 d：tu prends。'
          },
          {
            id: 'd5a11_d2',
            kind: 'fib',
            prompt: 'Tammy et Bette, elles ne ___ pas ça. (comprendre)',
            promptZh: 'Tex 原题 #2：Tammy 和 Bette 不理解这个（comprendre）：',
            answers: ['comprennent'],
            hint: '3rd pl. drops d and doubles nn!',
            audio: 'Tammy et Bette, elles ne comprennent pas ça.',
            explain: 'elles comprennent.',
            explainZh: '复数去 d、ils/elles 双写 nn → comprennent！'
          },
          {
            id: 'd5a11_d3',
            kind: 'fib',
            prompt: 'Corey et Joe-Bob ___ le français. (apprendre)',
            promptZh: 'Tex 原题 #3：Corey 和 Joe-Bob 在学法语（apprendre）：',
            answers: ['apprennent'],
            hint: '3rd pl. drops d and doubles nn!',
            audio: 'Corey et Joe-Bob apprennent le français.',
            explain: 'ils apprennent.',
            explainZh: '去 d 并双写 nn → apprennent！'
          },
          {
            id: 'd5a11_d4',
            kind: 'fib',
            prompt: 'Tex ___ souvent Tammy, il aime faire des surprises. (surprendre)',
            promptZh: 'Tex 原题 #4：Tex 经常给 Tammy 惊喜（surprendre）：',
            answers: ['surprend'],
            hint: '3rd sg. keeps d, ZERO ending!',
            audio: 'Tex surprend souvent Tammy.',
            explain: 'Tex (= il) surprend.',
            explainZh: '第三人称单数留 d 无后缀：surprend。'
          },
          {
            id: 'd5a11_d5',
            kind: 'fib',
            prompt: 'Tex : Tammy et moi, nous ___ souvent un taxi. (prendre)',
            promptZh: 'Tex 原题 #5：Tammy 和我经常打出租车（prendre）：',
            answers: ['prenons'],
            hint: 'nous drops d and keeps ONE n!',
            audio: 'Tammy et moi, nous prenons souvent un taxi.',
            explain: 'nous prenons (NO d!).',
            explainZh: 'nous 去 d 留单 n：prenons！'
          },
          {
            id: 'd5a11_d6',
            kind: 'fib',
            prompt: 'Tammy ___ à faire du ski. (apprendre)',
            promptZh: 'Tex 原题 #6：Tammy 在学滑雪（apprendre）：',
            answers: ['apprend'],
            hint: '3rd sg. keeps d, zero ending.',
            audio: 'Tammy apprend à faire du ski.',
            explain: 'Tammy (= elle) apprend.',
            explainZh: '第三人称单数写作 apprend。'
          },
          {
            id: 'd5a11_d7',
            kind: 'fib',
            prompt: 'Edouard ne ___ pas pourquoi les Américains aiment le ketchup. (comprendre)',
            promptZh: 'Tex 原题 #7：Edouard 不明白为什么美国人爱吃番茄酱（comprendre）：',
            answers: ['comprend'],
            hint: '3rd sg. keeps d, zero ending.',
            audio: 'Edouard ne comprend pas.',
            explain: 'Edouard (= il) comprend.',
            explainZh: '第三人称单数写作 comprend。'
          },
          {
            id: 'd5a11_d8',
            kind: 'fib',
            prompt: 'Trey : Moi, je suis vraiment cool, et j’___ à Tex la vraie musique. (apprendre = teach)',
            promptZh: 'Tex 原题 #8：我来教 Tex 什么是真正的音乐（apprendre à qqn）：',
            answers: ['apprends'],
            hint: 'je keeps d + -s.',
            audio: 'J’apprends à Tex la vraie musique.',
            explain: 'j’apprends (note: apprendre à quelqu’un = to teach someone!).',
            explainZh: 'je 加 -s → apprends（拓展：apprendre qqch à qqn 表示“教某人某事”）。'
          },
          {
            id: 'd5a11_d9',
            kind: 'fib',
            prompt: 'Watch "aller + infinitive"! Un jour, c’est sûr, Bette va ___ Tammy ! (surprendre)',
            promptZh: 'Tex 原题 #9（注意前面已经有 va！）：总有一天 Bette 会吓 Tammy 一跳：',
            answers: ['surprendre'],
            hint: 'near future "va" + INFINITIVE!',
            audio: 'Un jour, Bette va surprendre Tammy !',
            explain: 'Watch out for "va"! Since "va" is conjugated, keep the infinitive: surprendre.',
            explainZh: '陷阱！前面有近将来助动词 va，这里保持原形不定式 **surprendre**！'
          },
          {
            id: 'd5a11_d10',
            kind: 'fib',
            prompt: 'Corey et Joe-Bob, vous ___ votre temps, n’est-ce pas ? (prendre)',
            promptZh: 'Tex 原题 #10：Corey 和 Joe-Bob，你们真是慢慢来啊（prendre）：',
            answers: ['prenez'],
            hint: 'vous drops d, keeps ONE n!',
            audio: 'Vous prenez votre temps, n’est-ce pas ?',
            explain: 'vous prenez (NO d!).',
            explainZh: 'vous 去 d 留单 n：prenez。'
          },
          {
            id: 'd5a11_d11',
            kind: 'fib',
            prompt: 'Tammy : Je ne ___ pas pourquoi Bette est agressive ! (comprendre)',
            promptZh: 'Tex 原题 #11：我不明白为什么 Bette 这么咄咄逼人（comprendre）：',
            answers: ['comprends'],
            hint: 'je keeps d + -s.',
            audio: 'Je ne comprends pas pourquoi Bette est agressive !',
            explain: 'je comprends.',
            explainZh: 'je + -s → comprends。'
          },
          {
            id: 'd5a11_d12',
            kind: 'fib',
            prompt: 'Paw-Paw à Tammy et Tex : Vous ___ des beignets ? Ils sont tout chauds. (reprendre)',
            promptZh: 'Tex 原题 #12：Paw-Paw 对大家说：“你们再来点炸面圈吗？”（reprendre）：',
            answers: ['reprenez'],
            hint: 're + prenez (NO d!).',
            audio: 'Vous reprenez des beignets ?',
            explain: 'vous reprenez.',
            explainZh: 'vous 去 d → reprenez。'
          }
        ],
        related: [
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_10', label: '5A.10 Regular -RE Verbs' },
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_12', label: '5A.12 Irregular -RE Like mettre' }
        ]
      },

      /* =========================================================
         PAGE 5A.12: IRREGULAR -RE LIKE METTRE (vre3.html)
      ========================================================= */
      {
        id: 'v5a_12',
        code: '5A.12',
        group: '-re Verb Family',
        shortTitle: 'Irregular -RE: mettre & Its Expressions',
        title: 'Irregular -RE Verbs Like "mettre": Single -t in Singular, Double -tt- in Plural (+ Idioms)',
        titleZh: '不规则 -re 动词（二）：mettre 家族（单数单 t、复数双 tt）与四大日常习语',
        estMin: 3,
        summary: 'Conjugate mettre (place/put/put on/turn on) and its family (admettre, commettre, permettre, promettre, remettre): use a SINGLE silent -t in the singular (je mets, tu mets, il met), and DOUBLE -tt- in ALL plural forms (nous mettons, vous mettez, ils mettent), sounding /t/ clearly in the plural! Past participle: mis.',
        summaryZh: '掌握万能日常动词 **mettre** 及其大家族（**admettre 承认/接纳、permettre 允许、promettre 承诺、remettre 交还/推迟、commettre 犯错/犯罪**）：规律极简单——**单数只有一个 t 且静音**（`je mets, tu mets, il met`，无额外后缀），**复数全部双写 tt 并发音**（`nous mettons, vous mettez, ils mettent`）！过去分词是 **mis**。必背三大习语：**摆桌子、穿衣服、开电器**！',
        cheatSummary: [
          { label: 'mettre Pattern: 1 t (Sg.) vs. 2 tt (Pl.)', rule: 'je mets, tu mets, il met (single silent -t) vs. nous mettons, vous mettez, ils mettent (double -tt-, /t/ sounded!). P.p.: mis.', ruleZh: '单数单 t 不发音（mets / mets / met），复数全部双写 tt 读 /t/（mettons / mettez / mettent）；过去分词 mis。' },
          { label: 'Three Everyday mettre Idioms', rule: '1) mettre la table / le couvert (set the table) · 2) mettre + clothing (put on boots/sweater) · 3) mettre + electrical item (turn on radio/light/alarm).', ruleZh: '三大高频场景：① 摆餐具（mettre la table）；② 穿戴衣物（mettre un pull/ses bottes）；③ 打开电器（mettre le réveil/la radio/la lumière）。' }
        ],
        sections: [
          {
            id: 'v5a12_mettre',
            heading: '1. Conjugating "mettre", Idioms & Family Verbs',
            headingZh: '一、mettre 变位表、三大习语与同族 5 动词',
            lead: 'Listen to how singular je mets / il met ends in /mɛ/ (silent -ts / -t), while plural nous mettons / ils mettent clearly pronounces the /t/. Also watch the Tammy & Tex party dialogue:',
            leadZh: '看准“单 t 静音、双 tt 读 /t/”的听力线索，并通过 Tammy 与 Tex 谁来摆餐具的小对话巩固用法：',
            cartoon: {
              src: './assets/tex_cartoons/vre3.gif',
              alt: 'Tammy met la table pour la soirée',
              caption: 'Tammy: Tex, tu mets la table pour la soirée ? Tex: Non, je n’ai pas envie. Tammy: C’est toujours moi qui mets la table.',
              captionZh: 'Tammy：Tex，你今晚摆餐桌吗（tu mets la table）？Tex：不想动。Tammy：每次都是我来摆桌！'
            },
            table: {
              headers: ['Person', 'mettre (p.p. mis)', 'promettre (to promise)', 'Idiom / Compound Verb'],
              rows: [
                { cols: ['je / tu', 'je mets · tu mets (/mɛ/)', 'je promets · tu promets', 'mettre la table / le couvert (set table)'], audio: 'je mets, tu mets la table' },
                { cols: ['il / elle / on', 'il met (silent -t, /mɛ/)', 'il promet', 'mettre un pull / des bottes (put on)'], audio: 'il met, il met un pull' },
                { cols: ['nous', 'nous mettons (double -tt-!)', 'nous promettons', 'mettre la radio / la lumière (turn on)'], audio: 'nous mettons, nous promettons' },
                { cols: ['vous', 'vous mettez (double -tt-!)', 'vous promettez', 'admettre (admit), commettre (commit)'], audio: 'vous mettez, vous promettez' },
                { cols: ['ils / elles', 'ils mettent (/mɛt/!)', 'ils promettent', 'permettre (permit), remettre (hand in/postpone)'], audio: 'ils mettent, ils promettent' }
              ]
            },
            examples: [
              { fr: 'Tammy : Tex, tu mets la table pour la soirée ?', en: 'Tammy: Tex, are you setting the table for the party?', zh: 'Tammy：Tex，你给聚会摆好餐具了吗？', tag: 'mettre la table' },
              { fr: 'Tex : Non, je n’ai pas envie. — Tammy : Ça alors. C’est toujours moi qui mets la table.', en: 'Tex: No, I don’t feel like it. — Tammy: Come on, I’m always the one who sets the table.', zh: 'Tex：没兴致。— Tammy：真是的，每次都是“我”来摆桌（c’est moi qui mets）！', tag: 'c’est moi qui mets' }
            ],
            quickCheck: {
              prompt: 'In Tex’s listening test, you hear /il mɛt/ ("puts on"). Is the subject singular (Tex / Tammy) or plural (Tex et Tammy)?',
              promptZh: '听力中如果听见动词末尾发出了清晰 /t/ 音的 /mɛt/，主语一定是单数还是复数？',
              options: [
                'Plural ("Tex et Tammy mettent") — because singular "met" has a silent -t (/mɛ/)!',
                'Singular masculin ("Tex met").',
                'Singular féminin ("Tammy met").',
                'Impossible to distinguish.'
              ],
              answerIdx: 0,
              explain: 'In singular "il/elle met", the single -t is completely silent (/mɛ/). In plural "ils/elles mettent", the -t- sound is clearly pronounced before silent -ent (/mɛt/)!',
              explainZh: '单数 il/elle met 结尾 t 不发音（/mɛ/）；复数 ils/elles mettent 会把 t 读出来（/mɛt/）！'
            }
          }
        ],
        drills: [
          {
            id: 'd5a12_d1',
            kind: 'fib',
            prompt: 'Joe-Bob ___ le réveil (« alarm »), mais il ne se lève pas. (mettre)',
            promptZh: 'Tex 原题 #1：Joe-Bob 设好了闹钟但还是不起床（mettre）：',
            answers: ['met'],
            hint: '3rd sg. = single -t (met).',
            audio: 'Joe-Bob met le réveil, mais il ne se lève pas.',
            explain: 'Joe-Bob (= il) met.',
            explainZh: '第三人称单数单写 t 且不加额外词尾：met。'
          },
          {
            id: 'd5a12_d2',
            kind: 'fib',
            prompt: 'Tammy : Tex, tu ___ la table pour dîner ? (mettre)',
            promptZh: 'Tex 原题 #2：Tex，你摆晚饭桌子吗（mettre）：',
            answers: ['mets'],
            hint: 'tu = single -t + -s (mets).',
            audio: 'Tex, tu mets la table pour dîner ?',
            explain: 'tu mets.',
            explainZh: 'tu 加 -s → mets。'
          },
          {
            id: 'd5a12_d3',
            kind: 'fib',
            prompt: 'Rita dit à ses enfants : ___ vos pulls. Il fait froid. (mettre — vous imperative)',
            promptZh: 'Tex 原题 #3：Rita 对孩子们说：“穿上毛衣，天冷了。”（vous 命令式）：',
            answers: ['Mettez', 'mettez'],
            hint: 'vous doubles -tt- + -ez!',
            audio: 'Mettez vos pulls. Il fait froid.',
            explain: 'vous imperative → Mettez.',
            explainZh: 'vous 双写 tt → Mettez。'
          },
          {
            id: 'd5a12_d4',
            kind: 'fib',
            prompt: 'Les étudiants de Tex : Nous ___ de faire nos devoirs. (promettre)',
            promptZh: 'Tex 原题 #4：我们保证写作业（promettre）：',
            answers: ['promettons'],
            hint: 'nous doubles -tt- + -ons.',
            audio: 'Nous promettons de faire nos devoirs.',
            explain: 'nous promettons.',
            explainZh: 'nous 双写 tt → promettons。'
          },
          {
            id: 'd5a12_d5',
            kind: 'fib',
            prompt: 'Joe-Bob et Corey ___ leurs santiags (cowboy boots) pour aller danser. (mettre)',
            promptZh: 'Tex 原题 #5：Joe-Bob 和 Corey 穿上牛仔靴去跳舞（mettre）：',
            answers: ['mettent'],
            hint: '3rd pl. doubles -tt- + -ent.',
            audio: 'Joe-Bob et Corey mettent leurs santiags pour aller danser.',
            explain: 'ils mettent.',
            explainZh: '第三人称复数双写 tt → mettent。'
          },
          {
            id: 'd5a12_d6',
            kind: 'fib',
            prompt: 'Corey : Je n’___ pas inhaler des pesticides. (admettre)',
            promptZh: 'Tex 原题 #6：我不承认自己吸了杀虫剂（admettre）：',
            answers: ['admets'],
            hint: 'je = single -t + -s.',
            audio: 'Je n’admets pas inhaler des pesticides.',
            explain: 'j’admets.',
            explainZh: 'je 单写 t 加 s → admets。'
          },
          {
            id: 'd5a12_d7',
            kind: 'fib',
            prompt: 'Tammy et Fiona ne ___ jamais leurs devoirs en retard. (remettre)',
            promptZh: 'Tex 原题 #7：Tammy 和 Fiona 从不迟交作业（remettre）：',
            answers: ['remettent'],
            hint: 'elles = double -tt- + -ent.',
            audio: 'Tammy et Fiona ne remettent jamais leurs devoirs en retard.',
            explain: 'elles remettent.',
            explainZh: 'elles 双写 tt → remettent。'
          },
          {
            id: 'd5a12_d8',
            kind: 'fib',
            prompt: 'Les membres de Sigma Upsilon Eta : Nous ___ Tammy à notre club. (admettre)',
            promptZh: 'Tex 原题 #8：我们接纳 Tammy 加入社团（admettre）：',
            answers: ['admettons'],
            hint: 'nous = double -tt- + -ons.',
            audio: 'Nous admettons Tammy à notre club.',
            explain: 'nous admettons.',
            explainZh: 'nous 双写 tt → admettons。'
          },
          {
            id: 'd5a12_d9',
            kind: 'fib',
            prompt: 'Rita ___ à ses enfants de nager à Barton Springs. (permettre)',
            promptZh: 'Tex 原题 #9：Rita 允许孩子们在巴顿泉游泳（permettre）：',
            answers: ['permet'],
            hint: '3rd sg. = single -t.',
            audio: 'Rita permet à ses enfants de nager à Barton Springs.',
            explain: 'Rita (= elle) permet.',
            explainZh: '第三人称单数写作 permet。'
          },
          {
            id: 'd5a12_d10',
            kind: 'fib',
            prompt: 'Rita : Trey, ___-moi de ne jamais te percer la langue. (promettre — tu imperative!)',
            promptZh: 'Tex 原题 #10：Rita 对儿子 Trey 说：“答应我永远不要穿舌环。”（tu 命令式）：',
            answers: ['promets'],
            hint: 'tu imperative of -re verbs KEEPS the -s (only -er & ouvrir drop it)!',
            audio: 'Trey, promets-moi de ne jamais te percer la langue.',
            explain: 'Note: ONLY -er verbs (and ouvrir) drop -s in the "tu" imperative! Regular/irregular -re verbs like promettre KEEP the -s: promets-moi!',
            explainZh: '关键对比：只有第一组 -er 和 ouvrir 家族在 tu 命令式丢 s；-re 动词保留 s → promets-moi！'
          },
          {
            id: 'd5a12_d11',
            kind: 'fib',
            prompt: 'Fiona ___ un crime quand elle pique les enfants de Rita. (commettre)',
            promptZh: 'Tex 原题 #11：Fiona 蛰 Rita 孩子时简直是在犯罪（commettre）：',
            answers: ['commet'],
            hint: '3rd sg. = single -t.',
            audio: 'Fiona commet un crime.',
            explain: 'Fiona (= elle) commet.',
            explainZh: '第三人称单数写作 commet。'
          },
          {
            id: 'd5a12_d12',
            kind: 'fib',
            prompt: 'Paw-Paw : Je ___ mes bottes quand je vais dans un marécage. (mettre)',
            promptZh: 'Tex 原题 #12：我进沼泽时会穿上靴子（mettre）：',
            answers: ['mets'],
            hint: 'je = single -t + -s.',
            audio: 'Je mets mes bottes quand je vais dans un marécage.',
            explain: 'je mets.',
            explainZh: 'je → mets。'
          }
        ],
        related: [
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_11', label: '5A.11 Irregular -RE Like prendre' },
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_13', label: '5A.13 Irregular -RE: suivre & vivre' }
        ]
      },

      /* =========================================================
         PAGE 5A.13: IRREGULAR -RE SUIVRE & VIVRE (vre4.html)
      ========================================================= */
      {
        id: 'v5a_13',
        code: '5A.13',
        group: '-re Verb Family',
        shortTitle: 'Irregular -RE: suivre & vivre',
        title: 'Irregular -RE Verbs: "suivre" (to follow) & "vivre" (to live / be alive)',
        titleZh: '不规则 -re 动词（三）：suivre（跟随 / 选修课程）与 vivre（生活 / 活着）',
        estMin: 4,
        summary: 'Master two high-frequency irregular -re verbs: suivre (follow — je suis, tu suis, il suit, nous suivons, vous suivez, ils suivent; p.p. suivi) and vivre (live/be alive — je vis, tu vis, il vit, nous vivons, vous vivez, ils vivent; p.p. vécu). Watch the famous homonym "je suis" ("I follow" vs. "I am"), idiom "suivre un cours", "Vive la France!", and "vivre" vs. "habiter".',
        summaryZh: '收官第一部，攻克高频不规则动词 **suivre（跟随 / 上课）** 与 **vivre（生活 / 活着）**：两者套路完全一样——**单数丢掉 v**（`je suis / il suit`, `je vis / il vit`），**复数找回 v 并加规则词尾**（`nous suivons / ils suivent`, `nous vivons / ils vivent`）。避开最大同形词坑：**je suis** 既可以是 être“我是”，也可以是 suivre“我跟随/我在修课”；同时记住 **vivre（生存/怎么生活）vs habiter（居住地址）** 及 **vécu** 过去分词！',
        cheatSummary: [
          { label: 'suivre & vivre: Drop v in Sg., Restore v in Pl.', rule: 'suivre (p.p. suivi): je suis, tu suis, il suit · nous suivons, vous suivez, ils suivent. vivre (p.p. vécu!): je vis, tu vis, il vit · nous vivons, vous vivez, ils vivent.', ruleZh: '单数丢掉 v 加 -s/-s/-t；复数请回 v 并加 -ons/-ez/-ent！注意 vivre 的过去分词很特别：vécu！' },
          { label: 'Homonym + Vocabulary Traps', rule: '"je suis" = BOTH "I am" (être) AND "I follow / I’m taking" (suivre un cours)! "vivre" = to be alive / how you live ("Vive la France!"), vs. "habiter" = street/city residence.', ruleZh: '① "je suis" 歧义：“我是”还是“我跟随/我选修（suivre un cours）”全看后面宾语！② habiter 表“住在哪”，vivre 表“活着/生活方式/万岁（Vive...!）”。' }
        ],
        sections: [
          {
            id: 'v5a13_suivre_vivre',
            heading: '1. Conjugating "suivre" & "vivre" + "habiter" vs. "vivre"',
            headingZh: '一、suivre 与 vivre 全变位表、习语与词汇辨析',
            lead: 'Look carefully at the plural endings: once you put the "v" back, listening to il suit (/sɥi/) vs. ils suivent (/sɥiv/) and il vit (/vi/) vs. ils vivent (/viv/) makes singular vs. plural crystal clear! Enjoy Edouard’s slow French restaurant dialogue:',
            leadZh: '听力辨别一如既往地清晰：单数 t 静音，复数发出清脆的 /v/ 音（ils suivent, ils vivent）。阅读 Edouard 在餐厅招呼客人的经典对话（`vre4` 原站本页无配图）：',
            table: {
              headers: ['Person', 'suivre (to follow — p.p. suivi)', 'vivre (to live/be alive — p.p. vécu!)', 'Sound Clue (3rd Sg vs Pl)'],
              rows: [
                { cols: ['je', 'je suis (WATCH: homonym of être!)', 'je vis', 'silent final -s'], audio: 'je suis un cours, je vis au Texas' },
                { cols: ['tu', 'tu suis (imp. Suis !)', 'tu vis', 'silent final -s'], audio: 'tu suis, tu vis' },
                { cols: ['il / elle / on', 'il suit', 'il vit', 'NO /v/, silent -t! (/sɥi/, /vi/)'], audio: 'il suit, il vit' },
                { cols: ['nous', 'nous suivons', 'nous vivons', 'restores /v/ + -ons'], audio: 'nous suivons, nous vivons' },
                { cols: ['vous', 'vous suivez (imp. Suivez-moi !)', 'vous vivez', 'restores /v/ + -ez'], audio: 'vous suivez, vous vivez' },
                { cols: ['ils / elles', 'ils suivent', 'ils vivent', 'clearly sounds /v/! (/sɥiv/, /viv/)'], audio: 'ils suivent, ils vivent' }
              ]
            },
            examples: [
              { fr: 'Edouard : Bonsoir. Suivez-moi, s’il vous plaît.', en: 'Edouard: Good evening. Follow me, please.', zh: 'Edouard：晚上好，请跟我来（Suivez-moi）。', tag: 'suivre (imp.)' },
              { fr: 'Client : Excusez-moi, mais le service est vraiment très lent.', en: 'Client: Excuse me, but the service is really very slow.', zh: '顾客：抱歉，这里上菜实在太慢了！', tag: 'Dialogue' },
              { fr: 'Edouard : La qualité, ça prend du temps, monsieur. Les fastfoods, quelle horreur. Vive la cuisine française !', en: 'Edouard: Quality takes time, monsieur. Fast food, how dreadful. Long live French cuisine!', zh: 'Edouard：好品质需要时间嘛，先生！快餐真是恐怖。法国美食万岁（Vive la cuisine française）！', tag: 'Vive...!' },
              { fr: 'Idioms: suivre un cours (to take a course) · la vie (life) · vivre (to be alive / live a lifestyle) vs. habiter (to reside at an address)', en: 'Use "suivre un cours" (NOT prendre!) for taking a class, and note p.p. "vécu" (J’ai vécu à Paris).', zh: '重要搭配：“选修一门课”法语说 suivre un cours；vive 来自虚拟式感叹“……万岁”。', tag: 'Tex Must-Know' }
            ],
            quickCheck: {
              prompt: 'What does "Je suis un cours de français" mean?',
              promptZh: '"Je suis un cours de français" 是什么意思（千万别翻成“我是一门法语课”！）？',
              options: [
                'I am taking a French course (je suis = 1st person sg. of SUIVRE!).',
                'I am a French teacher.',
                'I am French.',
                'I live in a French class.'
              ],
              answerIdx: 0,
              explain: 'Classic French trap! "je suis" is the 1st-person present form of BOTH "être" (to be) AND "suivre" (to follow / take a course)!',
              explainZh: '超级经典双关梗！je suis 既是 être（我是），也是 suivre（我跟随 / 我正在上……课）！'
            }
          }
        ],
        drills: [
          {
            id: 'd5a13_d1',
            kind: 'fib',
            prompt: 'Joe-Bob : Corey et moi, nous ___ un cours de français. (suivre)',
            promptZh: 'Tex 原题 #1：我和 Corey 在上一门法语课（suivre）：',
            answers: ['suivons'],
            hint: 'nous restores -v- + -ons.',
            audio: 'Corey et moi, nous suivons un cours de français.',
            explain: 'nous suivons (and idiom "suivre un cours" = to take a course!).',
            explainZh: '复数恢复 v：suivons（记住：上课用 suivre un cours）。'
          },
          {
            id: 'd5a13_d2',
            kind: 'fib',
            prompt: 'Les clients au restaurant ___ Edouard. (suivre)',
            promptZh: 'Tex 原题 #2：餐厅的客人们跟着 Edouard 走（suivre）：',
            answers: ['suivent'],
            hint: '3rd pl. restores -v- + -ent.',
            audio: 'Les clients au restaurant suivent Edouard.',
            explain: 'les clients (= ils) suivent.',
            explainZh: '复数恢复 v 加 -ent → suivent。'
          },
          {
            id: 'd5a13_d3',
            kind: 'fib',
            prompt: 'Edouard ne ___ pas les matchs de football. Il n’aime pas les sports. (suivre)',
            promptZh: 'Tex 原题 #3：Edouard 不看/不追橄榄球比赛（suivre）：',
            answers: ['suit'],
            hint: '3rd sg. drops -v- + -t.',
            audio: 'Edouard ne suit pas les matchs de football.',
            explain: 'Edouard (= il) suit.',
            explainZh: '单数丢掉 v 加 -t → suit。'
          },
          {
            id: 'd5a13_d4',
            kind: 'fib',
            prompt: 'Tex : Je ___ au Texas, mais je préfère la France. (vivre)',
            promptZh: 'Tex 原题 #4：我生活在德州，但我更喜欢法国（vivre）：',
            answers: ['vis'],
            hint: 'je drops -v- + -s.',
            audio: 'Je vis au Texas, mais je préfère la France.',
            explain: 'je vis.',
            explainZh: '单数丢掉 v 加 -s → vis。'
          },
          {
            id: 'd5a13_d5',
            kind: 'fib',
            prompt: 'Tex demande à Edouard : Pourquoi est-ce que nous ___ au Texas ? (vivre)',
            promptZh: 'Tex 原题 #5：为什么我们生活在德州（vivre）：',
            answers: ['vivons'],
            hint: 'nous restores -v- + -ons.',
            audio: 'Pourquoi est-ce que nous vivons au Texas ?',
            explain: 'nous vivons.',
            explainZh: '复数恢复 v → vivons。'
          },
          {
            id: 'd5a13_d6',
            kind: 'fib',
            prompt: 'Tammy demande à Bette : Pourquoi est-ce que tu ___ Tex tout le temps ? (suivre)',
            promptZh: 'Tex 原题 #6：你为什么老是跟着 Tex（suivre）：',
            answers: ['suis'],
            hint: 'tu = suis.',
            audio: 'Pourquoi est-ce que tu suis Tex tout le temps ?',
            explain: 'tu suis.',
            explainZh: 'tu 写作 suis。'
          },
          {
            id: 'd5a13_d7',
            kind: 'fib',
            prompt: 'Tammy demande à Paw-Paw : Est-ce que vous ___ la politique cadienne ? (suivre)',
            promptZh: 'Tex 原题 #7：您关注卡津政治吗（suivre）：',
            answers: ['suivez'],
            hint: 'vous restores -v- + -ez.',
            audio: 'Est-ce que vous suivez la politique cadienne ?',
            explain: 'vous suivez.',
            explainZh: '复数恢复 v → suivez。'
          },
          {
            id: 'd5a13_d8',
            kind: 'fib',
            prompt: 'Paw-Paw est vieux, mais il ___ toujours ! (vivre)',
            promptZh: 'Tex 原题 #8：Paw-Paw 年纪大了，但他依然健在（vivre）：',
            answers: ['vit'],
            hint: '3rd sg. drops -v- + -t.',
            audio: 'Paw-Paw est vieux, mais il vit toujours !',
            explain: 'il vit.',
            explainZh: '第三人称单数写作 vit。'
          },
          {
            id: 'd5a13_d9',
            kind: 'fib',
            prompt: 'Corey et Joe-Bob ___ les X-Files avec passion. (suivre)',
            promptZh: 'Tex 原题 #9：Corey 和 Joe-Bob 狂热追剧《X 档案》（suivre）：',
            answers: ['suivent'],
            hint: '3rd pl. restores -v- + -ent.',
            audio: 'Corey et Joe-Bob suivent les X-Files avec passion.',
            explain: 'ils suivent.',
            explainZh: '复数第三人称 → suivent。'
          },
          {
            id: 'd5a13_d10',
            kind: 'fib',
            prompt: 'Joe-Bob, est-ce que tu ___ des cours à A&M ? (suivre)',
            promptZh: 'Tex 原题 #10：Joe-Bob，你在农工大学上课吗（suivre）：',
            answers: ['suis'],
            hint: 'tu drops -v- + -s.',
            audio: 'Est-ce que tu suis des cours à A&M ?',
            explain: 'tu suis.',
            explainZh: 'tu → suis。'
          },
          {
            id: 'd5a13_d11',
            kind: 'fib',
            prompt: 'Edouard : Je ___ pour manger. (vivre)',
            promptZh: 'Tex 原题 #11：Edouard 名言：“我活着就是为了吃。”（vivre）：',
            answers: ['vis'],
            hint: 'je drops -v- + -s.',
            audio: 'Je vis pour manger.',
            explain: 'je vis (vs. je mange pour vivre!).',
            explainZh: 'je → vis。'
          },
          {
            id: 'd5a13_d12',
            kind: 'fib',
            prompt: 'Bette se demande : Est-ce que Tex et Tammy ___ ensemble ? (vivre)',
            promptZh: 'Tex 原题 #12：Bette 琢磨着：Tex 和 Tammy 住在一起吗？（vivre）：',
            answers: ['vivent'],
            hint: '3rd pl. restores -v- + -ent.',
            audio: 'Est-ce que Tex et Tammy vivent ensemble ?',
            explain: 'Tex et Tammy (= ils) vivent.',
            explainZh: '复数恢复 v → vivent！恭喜通关 Tex 第五章 A（三大动词族 13 页全通）！'
          }
        ],
        related: [
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_1', label: 'Back to 5A.1 Intro to Verbs' },
          { chapterId: 'ch5_negation', pageId: 'neg_5_1', label: 'Continue to Ch 6 Negation' }
        ]
      }
    ]
  });
})();
