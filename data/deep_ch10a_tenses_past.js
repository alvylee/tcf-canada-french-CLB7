(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch10a_tenses_past',
    code: 'Ch 10A',
    level: 'A1–B1',
    category: 'tense_mood_a',
    icon: '⏳',
    title: 'Tense & Mood I: Present, Recent Past, Passé Composé & Imparfait',
    titleZh: '第十章 A · 现在时与核心过去叙事（近过去、复合过去时 avoir/être/代动词 与 未完成过去时）',
    subtitle: 'Tex-style deep mastery of Chapter 10 Part A (ta1, tapr1, tap1–tap8 across 10 bite-sized pages): tense/aspect/mood/voice map, 3 nuances of French present (+ historical present), recent past (venir de), Passé Composé with avoir / être (Alamo d’Être) / pronominals, Imparfait formation & states/habits/wishes, and Passé Composé vs. Imparfait narrative architecture — with 13 original Tex cartoons & 118 drills.',
    subtitleZh: '对标 Tex 原版第十章前半部分（ta1, tapr1, tap1–tap8 共 10 个轻松小页）：四大概念（时态/体貌/语式/语态）、现在时三重译法与历史现在时、近过去时 venir de、复合过去时三大家族（avoir / être 阿拉莫山城 / 代动词性数配合全规）、未完成过去时构成与习惯/状态/愿望 Si seulement 用法，以及复合过去时 vs 未完成过去时叙事实战，配 13 张原版卡通与 118 题专练。',
    pages: [
      /* =========================================================
         PAGE 10A.1: INTRO TO TENSE, ASPECT, MOOD & VOICE (ta1)
      ========================================================= */
      {
        id: 't10a_1',
        code: '10A.1',
        group: 'Foundations & Present',
        shortTitle: 'Tense, Aspect, Mood & Voice',
        title: 'Foundations of French Verbs: Tense, Aspect, Mood & Voice',
        titleZh: '动词时态总纲：分清“时态（Tense）、体貌（Aspect）、语式（Mood）与语态（Voice）”',
        estMin: 3,
        summary: 'Understand the 4 dimensions that govern every French verb form: (1) TENSE locates events in time (present, past, future, or "anterior" before another past/future point — simple vs. compound tenses); (2) ASPECT contrasts ongoing/background ("imparfait": Tex regardait les filles) vs. sequential foreground events ("passé composé": Il a sorti une cigarette et l’a allumée); (3) MOOD shows speaker attitude across 4 French moods (Indicative = facts, Subjunctive = subjective feelings, Conditional = hypothetical, Imperative = orders); (4) VOICE marks who acts (Active vs. Passive).',
        summaryZh: '真正学懂法语时态系统前，先把这四个概念刻进脑海：① **时态（Tense）**定时间点（单一词叫“简单时态”，`助动词+过去分词` 叫“复合时态”）；② **体貌（Aspect）**最关键：同在过去，描述背景/持续用**未完成过去时**（*Tex regardait…*），推进故事情节用**复合过去时**（*Il a sorti… et l’a allumée*）；③ **语式（Mood）**表说话人态度：直陈（客观事实）、虚拟（主观评价/意愿）、条件（假设条件）、命令（直接要求）；④ **语态（Voice）**：主动 vs 被动！',
        cheatSummary: [
          { label: 'Aspect Contrast: Imparfait vs. Passé Composé', rule: 'Imparfait = background / ongoing ("Tex regardait", "quelque chose manquait"). Passé Composé = sequential plot actions ("Il a sorti une cigarette, il l’a allumée et il a tiré une bouffée").', ruleZh: '体貌核心对照：背景描写、正在进行、习惯动作 → Imparfait；推动剧情的一连串完成动作 → Passé Composé！' },
          { label: '4 Moods + Active vs. Passive Voice', rule: 'Indicative (facts: "Tammy se réveille"), Subjunctive (feelings/doubt: "...que ses parents soient morts"), Conditional (hypothetical: "Si Corey était beau, il aurait..."), Imperative ("Tex, réveille-toi !"). Passive uses être + PP.', ruleZh: '法语四大语式：直陈（陈述事实）、虚拟（遗憾/情绪等主观态度）、条件（假设结果）、命令（发指令）。被动语态则用 être + 过去分词。' }
        ],
        sections: [
          {
            id: 't10a1_pillars',
            heading: '1. The 4 Dimensions of the French Verb System',
            headingZh: '一、法语动词的四大支柱总览',
            lead: 'Look at Tex’s famous examples across all four moods — especially how subjective disappointment ("Il est dommage que...") triggers the Subjunctive "soient", while hypothetical "Si..." triggers the Conditional "aurait":',
            leadZh: '结合 Tex 遗憾父母离世的例句与咖啡馆抽烟场景，一次建立“时/体/式/态”的全局架构：',
            cartoon: {
              src: './assets/tex_cartoons/ta1_soient.gif',
              alt: 'Il est dommage que les parents de Tex soient morts',
              caption: 'Subjective feeling → Subjunctive mood: Il est dommage que les parents de Tex SOIENT morts !',
              captionZh: '主观遗憾情绪 → 触发虚拟式：真遗憾，Tex 的父母已经不在了（soient morts）！'
            },
            table: {
              headers: ['Dimension', 'Categories', 'What It Signals', 'Tex Example'],
              rows: [
                { cols: ['Tense (Time)', 'Past / Present / Future (+ Simple vs. Compound)', 'When action happens (or happened BEFORE another action = anterior)', 'plus-que-parfait · futur antérieur'], audio: 'Le passé composé est un temps composé.' },
                { cols: ['Aspect (Past View)', 'Imparfait (background) vs. Passé Composé (event)', 'Ongoing scenery vs. step-by-step plot action', 'Tex regardait les filles... Puis il a allumé une cigarette.'], audio: 'Tex regardait les filles. Il a allumé une cigarette.' },
                { cols: ['Mood (Attitude)', 'Indicative · Subjunctive · Conditional · Imperative', 'Facts vs. feelings vs. hypotheticals vs. commands', 'Si Corey était beau, il aurait une copine. · Réveille-toi !'], audio: 'Si Corey était beau, il aurait une copine. Réveille-toi !' },
                { cols: ['Voice (Role)', 'Active (subject acts) vs. Passive (subject receives)', 'Who performs the verb action', 'Tex a été expulsé de France par les autorités.'], audio: 'Tex a été expulsé de France par les autorités.' }
              ]
            },
            examples: [
              { fr: 'Installé au Cactus Café, Tex regardait les filles qui passaient. Il savourait son café, mais quelque chose manquait.', en: 'Background scenery & ongoing mood → Imparfait!', zh: '坐在咖啡馆看女生路过、享受咖啡——搭设背景舞台，全部用 Imparfait！', tag: 'Aspect: Background' },
              { fr: 'Tex a sorti une cigarette. Il l’a allumée et il a tiré une grande bouffée.', en: 'Completed sequential actions moving the story forward → Passé Composé!', zh: '掏出香烟 → 点燃 → 猛吸一口，一连串推进剧情的动作，全用 Passé Composé！', tag: 'Aspect: Plot Events' }
            ],
            quickCheck: {
              prompt: 'In "Les autorités ont expulsé Tex" → "Tex a été expulsé de France (par les autorités)", what grammatical category changes?',
              promptZh: '从 “Les autorités ont expulsé Tex.” 变成 “Tex a été expulsé par les autorités.”，发生改变的语法范畴是？',
              options: [
                'Voice (Active → Passive)',
                'Tense (Present → Future)',
                'Mood (Indicative → Subjunctive)',
                'Person (1st → 2nd)'
              ],
              answerIdx: 0,
              explain: 'Both sentences are in the past Indicative; changing who receives the action switches Active Voice → Passive Voice!',
              explainZh: '两句时态（过去）和语式（直陈）都没变，改变的是主语施动还是受动——即“语态（Voice：主动 → 被动）”！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10a1_d1',
            kind: 'choice',
            prompt: 'Which term refers to two-part verb forms made with avoir/être + past participle (like "passé composé" or "plus-que-parfait")?',
            promptZh: '由“助动词 avoir/être + 过去分词”两截构成的时态被称作？',
            options: ['Compound tense (temps composé)', 'Simple tense (temps simple)', 'Imperative mood', 'Passive voice only'],
            answerIdx: 0,
            audio: 'Le passé composé comprend un auxiliaire et un participe passé.',
            explain: 'Compound tenses ("temps composés") combine an auxiliary verb + a past participle.',
            explainZh: '两截构成的时态叫复合时态（temps composé）；单个词构成的如现在时/简单将来时叫简单时态（temps simple）。'
          },
          {
            id: 'dt10a1_d2',
            kind: 'choice',
            prompt: 'Which French mood is used to express subjective feelings, opinions, wishes, or doubt (e.g., "Il est dommage que...")?',
            promptZh: '哪一种法语语式（Mood）用来表达遗憾、意愿、情绪、怀疑等主观态度？',
            options: ['Subjunctive (le subjonctif)', 'Indicative (l’indicatif)', 'Imperative (l’impératif)', 'Infinitive'],
            answerIdx: 0,
            audio: 'Il est dommage que les parents de Tex soient morts.',
            explain: 'Indicative states objective facts; Subjunctive expresses subjective attitude, emotion, necessity, or doubt!',
            explainZh: '虚拟式（Subjonctif）表达主观评价与感受；直陈式表达客观事实。'
          },
          {
            id: 'dt10a1_d3',
            kind: 'choice',
            prompt: 'Which French mood is used in "Si Corey était beau, il aurait une copine"?',
            promptZh: '句子 “Si Corey était beau, il aurait une copine.” 中的 aurait 属于哪一种语式？',
            options: ['Conditional (le conditionnel)', 'Subjunctive (le subjonctif)', 'Imperative', 'Passé composé'],
            answerIdx: 0,
            audio: 'Si Corey était beau, il aurait une copine.',
            explain: 'Conditional expresses hypothetical or contrary-to-fact outcomes.',
            explainZh: '表示与事实相反的假设结果（“如果他帅的话，就会有女友”），用条件式（Conditionnel）。'
          },
          {
            id: 'dt10a1_d4',
            kind: 'choice',
            prompt: 'In "Tex regardait les filles qui passaient", why is "regardait" in the Imparfait?',
            promptZh: '例句 “Tex regardait les filles qui passaient.” 为什么用未完成过去时？',
            options: [
              'Aspect: it describes an ongoing background scene, not a completed plot step.',
              'It is a future anterior tense.',
              'It is a direct command.',
              'It is in passive voice.'
            ],
            answerIdx: 0,
            audio: 'Tex regardait les filles qui passaient.',
            explain: 'Ongoing background scenes in the past take the Imparfait aspect.',
            explainZh: '因为它在描绘当时正在持续的背景画面（Aspect：未完成体貌）。'
          },
          {
            id: 'dt10a1_d5',
            kind: 'choice',
            prompt: 'In "Il a sorti une cigarette, il l’a allumée et il a tiré une bouffée", why is Passé Composé used?',
            promptZh: '一连串动作 “掏烟、点烟、吸一口” 全部使用复合过去时（Passé Composé），因为它们属于？',
            options: [
              'Sequential completed plot-line events',
              'Ongoing habitual routines',
              'Hypothetical wishes',
              'Subjective feelings'
            ],
            answerIdx: 0,
            audio: 'Il a sorti une cigarette et il l’a allumée.',
            explain: 'Each event finishes before the next begins along the foreground plot line!',
            explainZh: '一个接一个推进故事主线的已完成动作（前景剧情事件），必须用复合过去时。'
          },
          {
            id: 'dt10a1_d6',
            kind: 'fib',
            prompt: 'Write the 1-word French grammar term for "a past action that happened BEFORE another past action" (e.g., plus-que-parfait = ___):',
            promptZh: '在语法术语里，表示“发生在另一过去动作之前的动作（如愈过去时）”叫做“先时性”，法语形容词是：___（以 a- 开头，共 9 个字母）。',
            answers: ['antérieur', 'antérieure'],
            hint: 'Also seen in "futur antérieur" / "passé antérieur"!',
            audio: 'Le plus-que-parfait exprime un fait antérieur.',
            explain: 'antérieur = happening prior to another reference point in time.',
            explainZh: 'antérieur（先前的），这也是 futur antérieur / passé antérieur 名称的由来！'
          },
          {
            id: 'dt10a1_d7',
            kind: 'choice',
            prompt: 'Which mood CANNOT be conjugated across different tenses — it has essentially one present command form?',
            promptZh: '在法语四大语式中，哪一个主要只有当前发号施令的命令形式，而没有过去/将来多套时态变化？',
            options: ['Imperative (l’impératif)', 'Indicative', 'Subjunctive', 'Conditional'],
            answerIdx: 0,
            audio: 'Tex, réveille-toi !',
            explain: 'Tex notes that Indicative, Subjunctive, and Conditional have multiple tenses, whereas Imperative only gives commands directly.',
            explainZh: '直陈、虚拟、条件都有不同时态，而命令式（Impératif）通常只针对当下发出直接指令。'
          },
          {
            id: 'dt10a1_d8',
            kind: 'choice',
            prompt: 'Identify the mood of "se réveille" in: "Tammy se réveille tôt le matin."',
            promptZh: '陈述客观日常事实 “Tammy se réveille tôt le matin.” 用的是什么语式？',
            options: ['Indicative (l’indicatif)', 'Subjunctive', 'Conditional', 'Imperative'],
            answerIdx: 0,
            audio: 'Tammy se réveille tôt le matin.',
            explain: 'Facts and routine statements always use the Indicative mood.',
            explainZh: '客观陈述事实和习惯使用直陈式（Indicatif）。'
          },
          {
            id: 'dt10a1_d9',
            kind: 'choice',
            prompt: 'Spot the PASSIVE voice sentence:',
            promptZh: '以下哪一句属于**被动语态（Passive voice）**？',
            options: [
              'Tex a été expulsé de France.',
              'Les autorités ont expulsé Tex.',
              'Tex regardait les filles.',
              'Tex, réveille-toi !'
            ],
            answerIdx: 0,
            audio: 'Tex a été expulsé de France.',
            explain: '"a été expulsé" (être + past participle) = was expelled (Passive voice).',
            explainZh: '主语 Tex 是“被驱逐”的对象（a été expulsé），属于被动语态！'
          },
          {
            id: 'dt10a1_d10',
            kind: 'fib',
            prompt: 'Imperative mood review: How does Tammy tell Tex "Wake up!" (se réveiller, tu)? → Tex, ___ !',
            promptZh: '命令式复习：对 Tex 说“快醒醒！”（se réveiller 的 tu 肯定命令式）：',
            answers: ['réveille-toi'],
            hint: 'Drop -s on -er verb + hyphen + toi!',
            audio: 'Tex, réveille-toi !',
            explain: 'Affirmative imperative of se réveiller (tu) = réveille-toi !',
            explainZh: 'se réveiller 的 tu 命令式：去 -s，连字符接重读代词 toi → réveille-toi !'
          }
        ],
        related: [
          { chapterId: 'ch9_conjunctions', pageId: 'cj_5', label: 'Back to 9.5 TCF B2 Connectors' },
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_2', label: '10A.2 Present Tense & Historical Narration' }
        ]
      },

      /* =========================================================
         PAGE 10A.2: PRESENT TENSE USES (tapr1)
      ========================================================= */
      {
        id: 't10a_2',
        code: '10A.2',
        group: 'Foundations & Present',
        shortTitle: 'Present Tense (3 Meanings & Past Narration)',
        title: 'The Present Tense (Le Présent): Habitual, Progressive, Emphatic & Historical Narration',
        titleZh: '法语现在时（Le Présent）：一形多义（正在/习惯/强调）与生动“历史现在时”',
        estMin: 4,
        summary: 'French has ONLY ONE present tense form ("Tex boit du café") covering ALL THREE English forms: habitual ("drinks"), progressive ("is drinking"), AND emphatic ("does drink"). French adds context cues like "toujours", "Regarde...", or "Mais si..." instead of changing the verb. Plus master the "historical present" (le présent historique) used vividly to narrate past biographies ("En 1975, Tex se perd... On le met... Il passe son enfance en France").',
        summaryZh: '法语现在时极其简洁强大：**一种变位形式同时包揽英语里的三种表达**（一般现在习惯 + 现在进行时 *be doing* + 助动词强调 *does do*）！千万别像英语一样把 *être* 加上去直译成 *il est buvant*！需要区分语气时，法语靠副词或语境提示（`toujours` 习惯、`Regarde...` 此刻、`Mais si...` 强调）。此外，法语讲故事或人物生平也超爱用**历史现在时**，让 1975 年发生的事读起来仿佛近在眼前！',
        cheatSummary: [
          { label: 'One Form = 3 Meanings (NO *je suis mangeant!)', rule: '"Tex mange un beignet" = (1) eats (habit), (2) is eating right now (progressive), OR (3) DOES eat (emphatic)! Use "toujours", "en ce moment", or "Mais si !" for nuance.', ruleZh: '绝不能自造英语进行时（*je suis mangeant* 绝对错！）！一句 Je mange 就能表达“我常吃 / 我正在吃 / 我确实吃了”；正做某事也可用 être en train de + 原形。' },
          { label: 'Historical / Narrative Present', rule: 'French loves using the present tense for lively biographies or storytelling even with past dates ("En 1975, Tex se perd à l’aéroport... On le met dans un avion...").', ruleZh: '即便句首出现了 En 1975 这样的过去年份，为了画面感，文章与新闻标题也常全程采用“历史现在时”。' }
        ],
        sections: [
          {
            id: 't10a2_uses',
            heading: '1. Three Meanings of Present Tense & Tex’s Doughnut Debate',
            headingZh: '一、现在时的三重含义与历史现在时实战',
            lead: 'Notice how Tex and Tammy use "toujours", "Regarde...", and "Mais si..." to show habit, immediate progressive action, and emphatic disagreement — all using simple Present Tense:',
            leadZh: '看 Tex 啃甜甜圈的对话以及他 1975 年阴差阳错飞往法国的童年故事，感受现在时如何一挑三：',
            cartoon: {
              src: './assets/tex_cartoons/tapr1_beignet.gif',
              alt: 'Tex mange un beignet pour le petit déjeuner',
              caption: 'Tex : Regarde, je mange un beignet ! — Mais si, ça compte !',
              captionZh: '看，我正在吃甜甜圈呢（进行义：je mange）！— 那当然算早饭啦（强调义：Mais si, ça compte）！'
            },
            table: {
              headers: ['Meaning Type', 'French Clue / Context', 'Example Sentence'],
              rows: [
                { cols: ['Habitual Action', 'toujours, souvent, le matin...', 'Tex oublie toujours de prendre un bon petit déjeuner.'], audio: 'Tex oublie toujours de prendre un bon petit déjeuner.' },
                { cols: ['Progressive (Right Now)', 'Regarde !, en ce moment...', 'Regarde, je mange un beignet.'], audio: 'Regarde, je mange un beignet.' },
                { cols: ['Emphatic / Contrastive', 'Mais si ! (contradicts negative)', 'Mais si, ça compte ! Du sucre et du beurre me font du bien.'], audio: 'Mais si, ça compte !' },
                { cols: ['Historical Narration', 'Past date (En 1975...) + present', 'En 1975, bébé, Tex se perd à l’aéroport de Houston. On le met dans un avion.'], audio: 'En 1975, Tex se perd à l’aéroport. On le met dans un avion.' }
              ]
            },
            examples: [
              { fr: 'La vie de Tex : En 1975, alors bébé, Tex se perd à l’aéroport Bush International à Houston. On le met par erreur avec les bagages...', en: 'Vivid historical present ("gets lost... is put...") used across past biography!', zh: '用一般现在时生动讲述 1975 年往事：se perd（走丢）、met（被放进）、rencontre（遇见）。', tag: 'Historical Present' },
              { fr: 'Un jour, on découvre que Tex n’a pas de passeport. Alors, il retourne au Texas. Malheureusement, il ne se sent pas chez lui.', en: 'Present tense continues through discovery and return!', zh: '动词虽全用现在时，但讲述的是已经发生的整段成长历程。', tag: 'Narrative Flow' }
            ],
            quickCheck: {
              prompt: 'How do you say "Wait a minute, Tex is drinking his coffee right now" in natural French?',
              promptZh: '用自然地道的法语表达“等一下，Tex 现在正在喝他的咖啡”，选哪一句？',
              options: [
                'Attends, Tex boit son café en ce moment. (or "est en train de boire")',
                'Attends, Tex est buvant son café.',
                'Attends, Tex est boit son café.',
                'Attends, Tex a bu son café maintenant.'
              ],
              answerIdx: 0,
              explain: 'Simply use Present tense ("boit") + optional "en ce moment" (or "est en train de + inf."), NEVER *est buvant!',
              explainZh: '直接用现在时 boit（可加 en ce moment 或 être en train de boire），千万不能模仿英语写成 *est buvant！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10a2_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex et Edouard ___ aux échecs. (jouer)',
            promptZh: 'Tex 原题 #1：Tex 和 Edouard 在下国际象棋（jouer）：',
            answers: ['jouent'],
            hint: '3rd person plural (-er ending: -ent).',
            audio: 'Tex et Edouard jouent aux échecs.',
            explain: 'Tex et Edouard (= ils) jouent.',
            explainZh: '复数主语用第三人称复数词尾 -ent → jouent。'
          },
          {
            id: 'dt10a2_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Edouard ___ le repas. (servir — drop -v- in singular!)',
            promptZh: 'Tex 原题 #2：Edouard 在端上饭菜（servir，单数去掉 v）：',
            answers: ['sert'],
            hint: 'servir (like partir/dormir): je sers, il sert!',
            audio: 'Edouard sert le repas.',
            explain: 'servir drops -v- in singular: il sert.',
            explainZh: 'servir 单数脱掉词干 v → Edouard sert。'
          },
          {
            id: 'dt10a2_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tammy : Je ___ un peu en été. (mincir — -iss- type -ir)',
            promptZh: 'Tex 原题 #3：我夏天会稍微瘦一点（mincir 属第二组规则 -ir）：',
            answers: ['mincis'],
            hint: 'Regular -ir like finir: je finis → je mincis.',
            audio: 'Je mincis un peu en été.',
            explain: 'je mincis.',
            explainZh: '第一人称单数规则 -ir 动词：je mincis。'
          },
          {
            id: 'dt10a2_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Joe-Bob ___ souvent sa collection de noix. (perdre)',
            promptZh: 'Tex 原题 #4：Joe-Bob 经常弄丢他的坚果收藏（perdre）：',
            answers: ['perd'],
            hint: 'Regular -re 3rd sg. takes no extra -t after -d: il perd.',
            audio: 'Joe-Bob perd souvent sa collection de noix.',
            explain: 'perdre → il perd (root already ends in -d!).',
            explainZh: '词干已以 d 结尾，第三人称单数不加 t → perd。'
          },
          {
            id: 'dt10a2_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tammy : Tex et moi, nous ___ à Opelousas. (s’amuser)',
            promptZh: 'Tex 原题 #5：Tex 和我，我们在 Opelousas 玩得很开心（代动词 s’amuser，填“反身代词 + 动词”）：',
            answers: ['nous amusons'],
            hint: 'nous + reflexive nous + amusons.',
            audio: 'Tex et moi, nous nous amusons à Opelousas.',
            explain: 'nous nous amusons.',
            explainZh: 'nous 必须带反身代词 nous → nous amusons。'
          },
          {
            id: 'dt10a2_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Fiona : Joe-Bob et Corey, est-ce que vous ___ Jester ? (aimer)',
            promptZh: 'Tex 原题 #6：Joe-Bob 和 Corey，你们喜欢 Jester 宿舍吗？（aimer）：',
            answers: ['aimez'],
            hint: 'vous ending = -ez.',
            audio: 'Est-ce que vous aimez Jester ?',
            explain: 'vous aimez.',
            explainZh: 'vous 对应 -ez → aimez。'
          },
          {
            id: 'dt10a2_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tammy et Bette ___ de l’aérobique ensemble. (faire)',
            promptZh: 'Tex 原题 #7：Tammy 和 Bette 一起跳有氧操（faire，3 复数）：',
            answers: ['font'],
            hint: 'Irregular ils/elles form of faire.',
            audio: 'Tammy et Bette font de l’aérobique ensemble.',
            explain: 'elles font.',
            explainZh: 'faire 的第三人称复数不规则：font。'
          },
          {
            id: 'dt10a2_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tammy : Edouard, est-ce que tu ___ les bouteilles de vin au restaurant ? (ouvrir)',
            promptZh: 'Tex 原题 #8：Edouard，你在餐厅开酒瓶吗？（ouvrir 像 -er 动词一样变位）：',
            answers: ['ouvres'],
            hint: 'ouvrir takes -er endings: j’ouvre, tu ouvres!',
            audio: 'Est-ce que tu ouvres les bouteilles de vin ?',
            explain: 'ouvrir conjugates like an -er verb in present tense: tu ouvres.',
            explainZh: 'ouvrir 在现在时按第一组规则词尾变化：tu ouvres。'
          },
          {
            id: 'dt10a2_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tex : Alors, est-ce que tout le monde ___ la leçon ? (comprendre)',
            promptZh: 'Tex 原题 #9：那么，大家（tout le monde）都听懂这课了吗？（comprendre 注意单数！）：',
            answers: ['comprend'],
            hint: 'tout le monde takes 3rd SINGULAR verb! (comprend, like prendre).',
            audio: 'Est-ce que tout le monde comprend la leçon ?',
            explain: '"tout le monde" ALWAYS takes a 3rd singular verb: comprend!',
            explainZh: '超高频陷阱：tout le monde 语法上永远是**第三人称单数** → comprend！'
          },
          {
            id: 'dt10a2_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tammy ___ les footballeurs au gymnase. (voir)',
            promptZh: 'Tex 原题 #10：Tammy 在体育馆看到了橄榄球员（voir，3 单）：',
            answers: ['voit'],
            hint: 'voir: je vois, tu vois, elle voit.',
            audio: 'Tammy voit les footballeurs au gymnase.',
            explain: 'elle voit.',
            explainZh: 'voir 第三人称单数：voit。'
          },
          {
            id: 'dt10a2_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Tammy : Tex, tu ne ___ jamais la table ! (mettre)',
            promptZh: 'Tex 原题 #11：Tex，你从来不摆桌子！（mettre 单数一个 t）：',
            answers: ['mets'],
            hint: 'mettre drops one t in singular: je mets, tu mets, il met.',
            audio: 'Tex, tu ne mets jamais la table !',
            explain: 'tu mets.',
            explainZh: 'mettre 单数只有一个 t → tu mets。'
          },
          {
            id: 'dt10a2_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Les enfants de Rita ___ leurs jouets partout. (laisser)',
            promptZh: 'Tex 原题 #12：Rita 的孩子们把玩具丢得到处都是（laisser）：',
            answers: ['laissent'],
            hint: 'Subject is "Les enfants" (plural) → -ent.',
            audio: 'Les enfants de Rita laissent leurs jouets partout.',
            explain: 'Les enfants (= ils) laissent.',
            explainZh: '主语中心词是复数 Les enfants，填 laissent。'
          }
        ],
        related: [
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_1', label: 'Back to 10A.1 Foundations' },
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_3', label: '10A.3 Recent Past (venir de)' }
        ]
      },

      /* =========================================================
         PAGE 10A.3: RECENT PAST — VENIR DE (tap1)
      ========================================================= */
      {
        id: 't10a_3',
        code: '10A.3',
        group: 'Foundations & Present',
        shortTitle: 'Recent Past (venir de)',
        title: 'The Recent Past (Le Passé Immédiat): venir de + Infinitive (Present & Imparfait)',
        titleZh: '最近过去时（Passé immédiat）：venir de + 动词原形（“刚刚做了 / 那时刚做了”）',
        estMin: 3,
        summary: 'Express "just did something" cleanly using "venir (Present) + de + infinitive" ("Tex et Tammy viennent de finir toute une bouteille de vin" = have just finished). Shift "venir" to the Imparfait ("venais, venait, venions, veniez, venaient + de + infinitive") to say "HAD just done something" right before another past event ("Tex et Tammy venaient de s’embrasser quand Bette est arrivée")!',
        summaryZh: '表达“**刚刚做完某事**”，法语无需复杂的完成时，直接套用公式 **`venir（现在时） + de + 动词原形`**！如果是讲过去的故事，想说“**当时刚做完某事（另一件事就突然发生了）**”，只要把 `venir` 换成**未完成过去时（`venais, venais, venait, venions, veniez, venaient`）+ de + 动词原形**即可，极其高频好用！',
        cheatSummary: [
          { label: 'Two Versions of venir de + Infinitive', rule: 'PRESENT ("have just..."): je viens de, tu viens de, il vient de, nous venons de, vous venez de, ils viennent de + INF. IMPARFAIT ("had just..."): je venais de, il venait de, nous venions de, ils venaient de + INF.', ruleZh: '两个时间轴：① 刚刚发生：je viens / tu viens / il vient / nous venons / vous venez / ils viennent + de + 原形；② 当时刚刚发生（紧接着发生另一过去事件）：je venais / il venait / nous venions / ils venaient + de + 原形！' },
          { label: 'Elision & Pronoun Placement Trap', rule: 'Before a vowel or mute h, "de" elides to "d’" ("On vient d’arriver"). Object/reflexive pronouns stay right before the INFINITIVE ("Ils venaient de s’embrasser")!', ruleZh: '细节提示：① 后面动词元音开头时 de 省音成 d’（Je viens d’arriver）；② 代动词反身代词/宾语代词放**不定式**前（Ils venaient de s’embrasser）！' }
        ],
        sections: [
          {
            id: 't10a3_venird',
            heading: '1. Present vs. Imparfait of "venir de" (+ The Interrupted Kiss)',
            headingZh: '一、现在时“刚……” vs. 过去时“那时刚……”对照',
            lead: 'Watch Bette interrupt Tex and Tammy’s wine evening: notice "viennent de finir" (right now just finished) vs. "venaient de s’embrasser" (had just kissed when Bette walked in):',
            leadZh: '读完 Tex 和 Tammy 喝完整瓶葡萄酒被打断的小故事，你会发现 `venir de` 在口语与叙事中无比顺手：',
            cartoon: {
              src: './assets/tex_cartoons/tap1_vin.gif',
              alt: 'Tex et Tammy viennent de finir toute une bouteille de vin',
              caption: 'Ils viennent de finir toute une bouteille de vin. Ils venaient de s’embrasser quand Bette est arrivée !',
              captionZh: '他们刚喝完一整瓶酒（viennent de finir）；Bette 进来时，他俩刚才刚好亲完（venaient de s’embrasser）！'
            },
            table: {
              headers: ['Person', 'Present ("have just...")', 'Imparfait ("had just...")', 'Model Note'],
              rows: [
                { cols: ['je · tu', 'je viens de · tu viens de', 'je venais de · tu venais de', 'd’ before vowel: je viens d’arriver'], audio: 'Je viens d’arriver. Je venais de finir.' },
                { cols: ['il / elle / on', 'vient de', 'venait de', 'On vient de regarder une vidéo.'], audio: 'On vient de regarder une vidéo.' },
                { cols: ['nous', 'nous venons de', 'nous venions de', 'Remember single -n- in nous/vous!'], audio: 'Nous venons de rentrer. Nous venions de partir.' },
                { cols: ['vous', 'vous venez de', 'vous veniez de', 'Vous venez de finir ?'], audio: 'Vous veniez de téléphoner.' },
                { cols: ['ils / elles', 'viennent de (double n!)', 'venaient de (single n!)', 'Double n ONLY in present "viennent"!'], audio: 'Ils viennent de finir. Ils venaient de s’embrasser.' }
              ]
            },
            examples: [
              { fr: 'Tex et Tammy viennent de regarder une vidéo romantique. Il n’en reste plus une goutte !', en: 'Present tense venir + de + inf. = action just completed now', zh: 'viennent 注意现在时第三人称复数是双写 nn；表示此刻刚刚发生。', tag: 'Present Recent Past' },
              { fr: 'Tex et Tammy venaient de s’embrasser quand Bette est arrivée.', en: 'Imparfait venir + de + inf. = past event completed just before another past event', zh: 'venaient 注意未完成过去时词干来自 nous venons → 单写 n（venaient）！', tag: 'Past Recent Past' }
            ],
            quickCheck: {
              prompt: 'Look carefully at spelling! Which 3rd-person plural form of "venir de" is spelled correctly?',
              promptZh: '拼写高频陷阱：对比“他们刚才（现在）到” vs “他们那时刚刚（未完成过去）到”，哪一组拼写都对？',
              options: [
                'Present: Ils viennent d’arriver. · Imparfait: Ils venaient d’arriver.',
                'Present: Ils venent d’arriver. · Imparfait: Ils viennaient d’arriver.',
                'Present: Ils viennent d’arriver. · Imparfait: Ils viennaient d’arriver.',
                'Present: Ils viens de arriver. · Imparfait: Ils venait de arriver.'
              ],
              answerIdx: 0,
              explain: 'Present plural is irregular stem "vienn-" (viennent), while Imparfait uses the "nous venons" stem "ven-" (venaient — SINGLE n)! And don’t forget d’!',
              explainZh: '现在时复数要变双 n（ils viennent）；而未完成过去时来自 nous venons 词干，只有单 n（ils venaient），且遇到 arriver 必须省音为 d’！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10a3_d1',
            kind: 'fib',
            prompt: 'Present Recent Past (Tex #1): Edouard ___ les clientes. (venir de servir)',
            promptZh: 'Tex 原题（现在时近过去）#1：Edouard 刚给女顾客上完菜（填 venir 的现在时 + de + 原形）：',
            answers: ['vient de servir'],
            hint: 'il vient + de + servir.',
            audio: 'Edouard vient de servir les clientes.',
            explain: 'vient de servir.',
            explainZh: '第三人称单数：vient de servir。'
          },
          {
            id: 'dt10a3_d2',
            kind: 'fib',
            prompt: 'Present Recent Past (Tex #2): Corey et Joe-Bob ___ un film. (venir de regarder)',
            promptZh: 'Tex 原题 #2：Corey 和 Joe-Bob 刚看完一部电影（注意 viennent 双写 n）：',
            answers: ['viennent de regarder'],
            hint: 'ils viennent + de + regarder.',
            audio: 'Corey et Joe-Bob viennent de regarder un film.',
            explain: 'viennent de regarder.',
            explainZh: '复数 viennent de regarder。'
          },
          {
            id: 'dt10a3_d3',
            kind: 'fib',
            prompt: 'Present Recent Past (Tex #3): Tammy : Je ___ mes devoirs. (venir de finir)',
            promptZh: 'Tex 原题 #3：我刚做完我的作业（je + venir de finir）：',
            answers: ['viens de finir'],
            hint: 'je viens de finir.',
            audio: 'Je viens de finir mes devoirs.',
            explain: 'je viens de finir.',
            explainZh: 'je viens de finir。'
          },
          {
            id: 'dt10a3_d4',
            kind: 'fib',
            prompt: 'Present Recent Past (Tex #4 — elision!): Bette : Tex, est-ce que tu ___ un poème ? (venir d’écrire)',
            promptZh: 'Tex 原题 #4：Tex，你是不是刚写完一首诗？（注意 écrire 元音开头，de 变 d’！）：',
            answers: ["viens d'écrire", 'viens d’écrire'],
            hint: 'tu viens + d’ + écrire!',
            audio: 'Tex, est-ce que tu viens d’écrire un poème ?',
            explain: 'de elides to d’ before vowel "écrire": viens d’écrire.',
            explainZh: 'écrire 元音开头，de 必须省音写成 viens d’écrire！'
          },
          {
            id: 'dt10a3_d5',
            kind: 'fib',
            prompt: 'Present Recent Past (Tex #6): Tex et Edouard : Nous ___ une bouteille de vin. (venir de boire)',
            promptZh: 'Tex 原题 #6：我们刚喝完一瓶红酒（nous）：',
            answers: ['venons de boire'],
            hint: 'nous venons (no i!) + de + boire.',
            audio: 'Nous venons de boire une bouteille de vin.',
            explain: 'nous venons de boire.',
            explainZh: 'nous 词干单写 n 无 i：venons de boire。'
          },
          {
            id: 'dt10a3_d6',
            kind: 'fib',
            prompt: 'Present Recent Past (Tex #8): Edouard : Bette et Tammy, est-ce que vous ___ du shopping ? (venir de faire)',
            promptZh: 'Tex 原题 #8：你们刚才去逛街购物了？（vous）：',
            answers: ['venez de faire'],
            hint: 'vous venez + de + faire.',
            audio: 'Est-ce que vous venez de faire du shopping ?',
            explain: 'vous venez de faire.',
            explainZh: 'vous 变位 venez de faire。'
          },
          {
            id: 'dt10a3_d7',
            kind: 'fib',
            prompt: 'Imparfait Recent Past (Tex #1): Tex ___ le paquet. (venait d’ouvrir — watch elision!)',
            promptZh: 'Tex 原题（过去近过去时）#1：Tex 当时刚打开包裹（Imparfait + ouvrir 省音！）：',
            answers: ["venait d'ouvrir", 'venait d’ouvrir'],
            hint: 'il venait + d’ + ouvrir!',
            audio: 'Tex venait d’ouvrir le paquet.',
            explain: 'venait d’ouvrir ("had just opened").',
            explainZh: '未完成过去时词干 venait，且 ouvrir 元音前省音为 d’ → venait d’ouvrir。'
          },
          {
            id: 'dt10a3_d8',
            kind: 'fib',
            prompt: 'Imparfait Recent Past (Tex #3): Tammy et Tex : Nous ___ visite à Paw-Paw. (venir de rendre — Imparfait)',
            promptZh: 'Tex 原题 #3：那时我们刚刚去探望完 Paw-Paw（nous 的 Imparfait）：',
            answers: ['venions de rendre'],
            hint: 'Imparfait of nous venons → nous venions + de rendre.',
            audio: 'Nous venions de rendre visite à Paw-Paw.',
            explain: 'nous venions de rendre.',
            explainZh: 'nous 的未完成过去时：venions de rendre。'
          },
          {
            id: 'dt10a3_d9',
            kind: 'fib',
            prompt: 'Imparfait Recent Past (Tex #4): Fiona : Joe-Bob et Corey, vous ___. (arriver — Imparfait)',
            promptZh: 'Tex 原题 #4：你们那时刚好刚到（vous 的 Imparfait + arriver 省音）：',
            answers: ["veniez d'arriver", 'veniez d’arriver'],
            hint: 'vous veniez + d’ + arriver.',
            audio: 'Vous veniez d’arriver.',
            explain: 'vous veniez d’arriver.',
            explainZh: 'vous veniez d’arriver。'
          },
          {
            id: 'dt10a3_d10',
            kind: 'fib',
            prompt: 'Imparfait Recent Past (Tex #7): Joe-Bob et Corey : Nous ___ un article choquant. (lire — Imparfait)',
            promptZh: 'Tex 原题 #7：那时我们刚读完一篇劲爆的文章（nous 的 Imparfait + lire）：',
            answers: ['venions de lire'],
            hint: 'nous venions de lire.',
            audio: 'Nous venions de lire un article choquant.',
            explain: 'nous venions de lire.',
            explainZh: 'venions de lire。'
          },
          {
            id: 'dt10a3_d11',
            kind: 'fib',
            prompt: 'Imparfait Recent Past (Tex #9 — watch single n + elision!): Tammy et Bette ___ des cadeaux à Tex. (offrir — Imparfait)',
            promptZh: 'Tex 原题 #9：Tammy 和 Bette 那时刚给 Tex 送完礼物（elles 的 Imparfait，单写 n + d’offrir）：',
            answers: ["venaient d'offrir", 'venaient d’offrir'],
            hint: 'elles venaient (single n!) + d’ + offrir.',
            audio: 'Tammy et Bette venaient d’offrir des cadeaux à Tex.',
            explain: 'venaient d’offrir.',
            explainZh: '未完成过去时第三人称复数单写 n（venaient），加 d’offrir。'
          },
          {
            id: 'dt10a3_d12',
            kind: 'choice',
            prompt: 'Reflexive placement inside recent past: "We had just woken up when the phone rang."',
            promptZh: '代动词放进近过去时里反身代词放在哪里？“电话响时我们刚才刚好醒来（se réveiller）”：',
            options: [
              'Nous venions de nous réveiller quand le téléphone a sonné.',
              'Nous nous venions de réveiller quand le téléphone a sonné.',
              'Nous venions nous de réveiller quand le téléphone a sonné.',
              'Nous sommes venus de nous réveiller.'
            ],
            answerIdx: 0,
            audio: 'Nous venions de nous réveiller quand le téléphone a sonné.',
            explain: 'Reflexive pronouns ALWAYS stick directly before the infinitive ("de nous réveiller"), NEVER before "venions"!',
            explainZh: '记住原则：反身代词紧贴不定式动词本身，放在 de 之后、réveiller 之前 → Nous venions de nous réveiller。'
          }
        ],
        related: [
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_2', label: 'Back to 10A.2 Present Tense' },
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_4', label: '10A.4 Passé Composé With avoir' }
        ]
      },

      /* =========================================================
         PAGE 10A.4: PASSÉ COMPOSÉ WITH AVOIR (tap2)
      ========================================================= */
      {
        id: 't10a_4',
        code: '10A.4',
        group: 'Passé Composé',
        shortTitle: 'Passé Composé (avoir)',
        title: 'Passé Composé With avoir: Regular (-é, -i, -u), 20 Core Irregulars & Negation',
        titleZh: '复合过去时（一）助动词 avoir：三大规则变化、20 个高频不规则过去分词与否定结构',
        estMin: 4,
        summary: 'Master the #1 French past tense for completed actions: Present tense of AVOIR ("ai, as, a, avons, avez, ont") + Past Participle. Learn all 3 regular rules (-er → -é [sounds identical to infinitive!], -ir → -i, -re → -u) AND all 20 Tex irregular past participles (eu, été, fait, ouvert, pris, mis, suivi, bu, cru, vu, su, connu, dit, lu, écrit, pu, voulu, dû, tenu, reçu). Negation wraps around AVOIR ONLY ("n’a pas mangé de viande" — remember the negative de-shift!).',
        summaryZh: '复合过去时是法语口语和叙事中使用频率第一的过去时态，由 **`avoir（现在时变位） + 过去分词`** 构成。规则变化只需记三步：`-er → -é`（注意 `parlé` 和 `parler` 发音一模一样！）、`-ir → -i`、`-re → -u`。重点要背透下面表格里的 **20 个不规则过去分词**（如 `avoir→eu / être→été / faire→fait / prendre→pris / devoir→dû`）。否定句时 **`ne...pas` 只能夹在助动词 `avoir` 两边**（`Tammy n’a pas mangé de viande`）！',
        cheatSummary: [
          { label: 'Regular + 20 Core Irregular Past Participles', rule: 'Regular: parler → parlé, finir → fini, perdre → perdu. Irregular Families: (1) -u: eu, bu, cru, vu, su, connu, lu, pu, voulu, dû, tenu, reçu; (2) -is/-it: pris, mis, dit, écrit; (3) other: été, fait, ouvert, suivi.', ruleZh: '三大规律分组背不规则：① -u 族：eu, bu, cru, vu, su, connu, lu, pu, voulu, dû（有^号！）, tenu, reçu；② -is/-it 族：pris, mis, dit, écrit；③ 独苗：été, fait, ouvert, suivi。' },
          { label: 'Negation Frame Around Auxiliary', rule: 'ne + AVOIR + pas + Past Participle ("Elle n’a pas mangé de viande", "Ils n’ont pas obéi"). Never put "pas" after the past participle!', ruleZh: '否定句夹心：ne 放在 avoir 前，pas 放在 avoir 后、过去分词前（且直接宾语不定/部分冠词需变 de：n’a pas mangé **de** viande）。' }
        ],
        sections: [
          {
            id: 't10a4_avoir_table',
            heading: '1. Regular Formations & Tex’s 20 Essential Irregulars',
            headingZh: '一、规则过去分词与 20 个必背高频不规则过去分词表',
            lead: 'Look at the two Tex cartoons below: Tex ate all the meat ("a mangé toute la viande") while vegetarian Tammy didn’t eat any ("n’a pas mangé de viande") — and then Tex got sick! Spot regular vs. irregular past participles in Joe-Bob’s dialogue:',
            leadZh: '背熟下表所有过去分词（特别注意 `dû` 的长音符、以及 `être → été` 绝对不变阴复数！），再读完 Joe-Bob 的悲剧小对话：',
            cartoon: {
              src: './assets/tex_cartoons/tap2_viande.gif',
              alt: 'Tex a mangé toute la viande',
              caption: 'Tex a mangé toute la viande ! Tammy, au contraire, n’a pas mangé de viande !',
              captionZh: 'Tex 把肉全吃光了（a mangé）；而素食主义 Tammy 一点肉也没吃（n’a pas mangé de viande）！'
            },
            table: {
              headers: ['Group', 'Infinitive → Past Participle', 'Sample Passé Composé'],
              rows: [
                { cols: ['Regular -er → -é', 'parler → parlé · manger → mangé · obéir → obéi (-ir)', 'j’ai parlé · ils ont obéi · nous avons fini'], audio: 'J’ai parlé, nous avons fini, j’ai perdu.' },
                { cols: ['Regular -re → -u', 'perdre → perdu · rendre → rendu · attendre → attendu', 'j’ai perdu ma collection de noix'], audio: 'J’ai perdu ma collection de noix.' },
                { cols: ['Core Short Irregulars', 'avoir → eu · être → été · faire → fait · ouvrir → ouvert', 'j’ai eu · il a été · elles ont fait · il a ouvert'], audio: 'J’ai eu, j’ai été, j’ai fait, j’ai ouvert.' },
                { cols: ['Irregular -is / -it', 'prendre → pris · mettre → mis · dire → dit · écrire → écrit', 'vous avez compris · j’ai écrit · il a dit'], audio: 'J’ai pris, j’ai mis, j’ai dit, j’ai écrit.' },
                { cols: ['Irregular -i', 'suivre → suivi · rire → ri · sourire → souri', 'nous avons suivi le cours'], audio: 'Nous avons suivi le cours.' },
                { cols: ['Irregular -u (Vowel)', 'boire → bu · croire → cru · voir → vu · savoir → su · connaître → connu · lire → lu', 'tu as bu · vous avez vu · il a lu'], audio: 'J’ai bu, j’ai cru, j’ai vu, j’ai su, j’ai connu, j’ai lu.' },
                { cols: ['Modals & Family -u', 'pouvoir → pu · vouloir → voulu · devoir → dû · tenir → tenu · recevoir → reçu', 'il a pu · elle a voulu · j’ai dû (with û!) · il a reçu'], audio: 'J’ai pu, j’ai voulu, j’ai dû, j’ai tenu, j’ai reçu.' }
              ]
            }
          },
          {
            id: 't10a4_dialogue',
            heading: '2. Dialogue: After Tex Finished All the Meat...',
            headingZh: '二、对话精读：Joe-Bob 的发现（日常高频复合过去时）',
            lead: 'Listen to how naturally passé composé links completed events ("j’ai perdu", "Tex a fini", "il a trop mangé", "tu as vu", "Tex a dégobillé"):',
            leadZh: '在 Joe-Bob 和 Tammy 的对话里把刚才背过的规则与不规则分词立刻串联进真句子：',
            cartoon: {
              src: './assets/tex_cartoons/tap2_puked.gif',
              alt: 'Tex a dégobillé partout après avoir mangé trop de viande',
              caption: 'Joe-Bob : Est-ce que tu as vu ? Tex a fini toute la viande et il a dégobillé partout !',
              captionZh: '你看到了吗（tu as vu）？Tex 把肉全炫完了，然后到处吐得一塌糊涂（a fini / a trop mangé / a dégobillé）！'
            },
            dialogue: {
              title: 'Joe-Bob & Tammy: Too Much Meat',
              titleZh: '小对话：食肉过量的后果',
              lines: [
                { speaker: 'Joe-Bob', fr: 'Tammy, j’ai perdu ma collection de noix. Est-ce que je peux dîner avec vous ?', en: 'Tammy, I lost my nut collection. Can I have dinner with you?', zh: '我把我的坚果收藏弄丢了（j’ai perdu），能跟你们一起吃晚饭吗？' },
                { speaker: 'Tammy', fr: 'Je suis désolée, Joe-Bob. Tex a fini toute la viande. À mon avis, il a trop mangé.', en: 'I’m sorry, Joe-Bob. Tex finished all the meat. In my opinion, he ate too much.', zh: '不好意思，Tex 把肉吃光了（a fini），要我说他吃得太猛了（a trop mangé，副词放中间）。' },
                { speaker: 'Joe-Bob', fr: 'Mon dieu, Tammy ! Est-ce que tu as vu ? Tex a dégobillé partout. C’est dégueulasse !', en: 'My god, Tammy! Have you seen? Tex threw up everywhere. It’s disgusting!', zh: '天哪 Tammy！你看见了没（tu as vu）？Tex 吐得到处都是！' }
              ]
            },
            quickCheck: {
              prompt: 'Check negation placement AND article change in Passé Composé: "Did Tex buy coffee? No, he didn’t buy any coffee."',
              promptZh: '同时检查复合过去时否定词位置 + 冠词变化：“不，他没买咖啡（du café）”，选哪一项？',
              options: [
                'Non, il n’a pas acheté de café.',
                'Non, il n’a acheté pas du café.',
                'Non, il a n’acheté pas de café.',
                'Non, il n’a pas acheté du café.'
              ],
              answerIdx: 0,
              explain: '(1) Negation brackets the auxiliary ONLY ("n’a pas acheté"); (2) partitive "du café" shifts to "de café" after pas!',
              explainZh: '双重规则：① ne...pas 夹住助动词 a（n’a pas acheté）；② 否定句后部分冠词 du 变成 de → de café！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10a4_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Fiona : Corey, est-ce que tu ___ de l’insecticide ? (boire)',
            promptZh: 'Tex 原题 #1：Corey，你喝杀虫剂了吗？（boire，tu）：',
            answers: ['as bu'],
            hint: 'tu as + irregular past participle "bu" (from boire).',
            audio: 'Corey, est-ce que tu as bu de l’insecticide ?',
            explain: 'boire → bu: tu as bu.',
            explainZh: 'boire 过去分词为 bu → as bu。'
          },
          {
            id: 'dt10a4_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tex : J’___ de nouveaux poèmes. (écrire — auxiliary + PP)',
            promptZh: 'Tex 原题 #2：我写了一些新诗（écrire，注意前面的 J’ 已省音，填 ai + 过去分词）：',
            answers: ['ai écrit'],
            hint: 'j’ai + écrit.',
            audio: 'J’ai écrit de nouveaux poèmes.',
            explain: 'écrire → écrit: J’ai écrit.',
            explainZh: 'écrire 的过去分词是 écrit → ai écrit。'
          },
          {
            id: 'dt10a4_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tex et Edouard ___ le match de foot. (regarder)',
            promptZh: 'Tex 原题 #3：Tex 和 Edouard 看了橄榄球赛（regarder）：',
            answers: ['ont regardé'],
            hint: 'ils ont + regardé.',
            audio: 'Tex et Edouard ont regardé le match de foot.',
            explain: 'ont regardé (NO -s on regardé with avoir!).',
            explainZh: '用 avoir 且无前置直宾，过去分词不加 -s → ont regardé。'
          },
          {
            id: 'dt10a4_d4',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tammy ___ beaucoup de crêpes pour la fête. (préparer)',
            promptZh: 'Tex 原题 #5：Tammy 为派对准备了好多可丽饼（préparer）：',
            answers: ['a préparé'],
            hint: 'elle a + préparé (no -e agreement with avoir!).',
            audio: 'Tammy a préparé beaucoup de crêpes pour la fête.',
            explain: 'avoir does NOT agree with the subject "Tammy": a préparé.',
            explainZh: 'avoir 作助动词绝对不随主语阴阳性变化 → a préparé。'
          },
          {
            id: 'dt10a4_d5',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tex ___ visite à Paw-Paw. (rendre)',
            promptZh: 'Tex 原题 #6：Tex 去探望了 Paw-Paw（rendre visite à）：',
            answers: ['a rendu'],
            hint: 'rendre → rendu (-re → -u).',
            audio: 'Tex a rendu visite à Paw-Paw.',
            explain: 'a rendu.',
            explainZh: '规则 -re 动词去词尾加 u → a rendu。'
          },
          {
            id: 'dt10a4_d6',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tammy et Bette ___ du shopping hier. (faire)',
            promptZh: 'Tex 原题 #7：Tammy 和 Bette 昨天去购物了（faire）：',
            answers: ['ont fait'],
            hint: 'faire → fait: elles ont fait.',
            audio: 'Tammy et Bette ont fait du shopping hier.',
            explain: 'ont fait (never *faites with avoir!).',
            explainZh: 'elles ont fait（faire 过去分词 fait 不随主语变）。'
          },
          {
            id: 'dt10a4_d7',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tammy : Corey et Joe-Bob, est-ce que vous ___ mes devoirs dans le frigo ? (voir)',
            promptZh: 'Tex 原题 #8：你们在冰箱里看到我的作业了吗？（voir，vous）：',
            answers: ['avez vu'],
            hint: 'voir → vu.',
            audio: 'Est-ce que vous avez vu mes devoirs dans le frigo ?',
            explain: 'avez vu.',
            explainZh: 'voir 过去分词为 vu → avez vu。'
          },
          {
            id: 'dt10a4_d8',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tammy et Bette : Nous ___ , n’est-ce pas, Tex ? (mincir)',
            promptZh: 'Tex 原题 #9：我们瘦了吧，对不对 Tex？（mincir，nous）：',
            answers: ['avons minci'],
            hint: 'Regular -ir → minci (no extra -s with avoir!).',
            audio: 'Nous avons minci, n’est-ce pas, Tex ?',
            explain: 'avons minci.',
            explainZh: '规则 -ir 动词去 r 为 minci，与 avoir 搭配不变形。'
          },
          {
            id: 'dt10a4_d9',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tammy : Joe-Bob, est-ce que tu ___ la leçon ? (comprendre)',
            promptZh: 'Tex 原题 #10：Joe-Bob，你听懂这节课了吗？（comprendre 与 prendre 同族）：',
            answers: ['as compris'],
            hint: 'prendre → pris, comprendre → compris.',
            audio: 'Joe-Bob, est-ce que tu as compris la leçon ?',
            explain: 'as compris.',
            explainZh: 'comprendre → compris，填 as compris。'
          },
          {
            id: 'dt10a4_d10',
            kind: 'fib',
            prompt: 'Tex Practice #11 (Negation!): Les étudiants ___ à Tex. (ne pas obéir)',
            promptZh: 'Tex 原题 #11：学生们没听 Tex 的话（否定复合过去时：n’ont pas + 过去分词）：',
            answers: ["n'ont pas obéi", 'n’ont pas obéi'],
            hint: 'ne + ont + pas + obéi!',
            audio: 'Les étudiants n’ont pas obéi à Tex.',
            explain: 'n’ont pas obéi (negation brackets auxiliary "ont").',
            explainZh: 'ne 和 pas 夹住助动词 ont → n’ont pas obéi。'
          },
          {
            id: 'dt10a4_d11',
            kind: 'fib',
            prompt: 'Irregular check ("devoir"): "Il ___ partir tôt ce matin." (had to — remember accent!)',
            promptZh: '高频不规则填空（devoir，记得必须带的长音符）：他今天一早只得早早出发：',
            answers: ['a dû'],
            hint: 'devoir → dû (with circumflex û on masculine singular!).',
            audio: 'Il a dû partir tôt ce matin.',
            explain: 'a dû (û distinguishes the participle from partitive "du").',
            explainZh: 'devoir 阳性单数过去分词必带长音符：a dû！'
          },
          {
            id: 'dt10a4_d12',
            kind: 'fib',
            prompt: 'Irregular check ("recevoir"): Nous ___ un e-mail de l’immigration. (have received)',
            promptZh: '高频不规则填空：“我们收到了一封移民局的电子邮件”（recevoir，nous）：',
            answers: ['avons reçu'],
            hint: 'recevoir → reçu (remember cedilla ç!).',
            audio: 'Nous avons reçu un e-mail de l’immigration.',
            explain: 'recevoir → reçu (with ç to keep soft /s/).',
            explainZh: 'recevoir 的过去分词：reçu（记得 ç 软音符！）。'
          }
        ],
        related: [
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_3', label: 'Back to 10A.3 Recent Past (venir de)' },
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_5', label: '10A.5 Passé Composé With être' }
        ]
      },

      /* =========================================================
         PAGE 10A.5: PASSÉ COMPOSÉ WITH ÊTRE (tap3)
      ========================================================= */
      {
        id: 't10a_5',
        code: '10A.5',
        group: 'Passé Composé',
        shortTitle: 'Passé Composé (être — Alamo)',
        title: 'Passé Composé With être: Alamo Verbs, 5 Irregulars, Subject Agreement & Dual-Auxiliary Trap',
        titleZh: '复合过去时（二）助动词 être：阿拉莫移动动词、五大不规则、主语配合与及物切换 avoir 陷阱',
        estMin: 4,
        summary: 'Master all intransitive motion/change-of-state verbs taking ÊTRE ("suis, es, est, sommes, êtes, sont") in Passé Composé (the Alamo d’Être / DR MRS VANDERTRAMP: aller/venir, arriver/partir, entrer/sortir, monter/descendre, rester/tomber, passer/retourner, naître/mourir + revenir/devenir/rentrer). Memorize the 5 irregular participles (venu/devenu/revenu, né, mort), the MANDATORY subject agreement (+e/+s/+es, "vous" agrees with actual people addressed!), AND the dual-auxiliary rule: sortir/monter/descendre/passer/retourner switch back to AVOIR whenever they take a direct object ("Tex a sorti la poubelle")!',
        summaryZh: '哪些动词不用 `avoir` 而用 **`être`** 作助动词？背熟 Tex 的“**阿拉莫城堡移动动词表（DR MRS VANDERTRAMP）**”（进出上下去留来生老死及派生词 `devenir / revenir / rentrer`）！记住四大核心规则：① 不规则过去分词只有 5 个：**`venu / devenu / revenu`、`né`、`mort`**；② **过去分词必须随时随主语性数配合**（阴单 `+e`、阳复 `+s`、阴复 `+es`；礼貌单数 `vous` 不加 `s`）；③ **跑、走并不属于此类**（*courir / marcher* 仍用 `avoir`！）；④ **及物转换铁律**：`sortir / monter / descendre / passer / retourner` 一旦后面接了直接宾语（如倒垃圾 `sortir **la poubelle**`），助动词立刻换回 **`avoir`**！',
        cheatSummary: [
          { label: 'Alamo Verbs + 5 Irregular Participles', rule: 'aller, arriver, descendre, devenir, entrer, monter, mourir (mort!), naître (né!), partir, passer, rentrer, rester, retourner, revenir (revenu!), sortir, tomber, venir (venu!). Agreement: +e / +s / +es with subject!', ruleZh: '17 个常见 être 动词（含派生词）；5 个不规则分词：venu, devenu, revenu, né, mort。过去分词永远配合主语性数！' },
          { label: 'Dual-Auxiliary Switch + courir/marcher Trap', rule: 'NO direct object → ÊTRE ("Tex est sorti", "Elle est descendue"). YES direct object → AVOIR ("Tex n’a pas sorti la poubelle", "J’ai monté les valises"). Note: courir & marcher ALWAYS use avoir!', ruleZh: '重要区分：① 不及物用 être（Tex est sorti），带直宾立刻换 avoir（Tex a sorti la poubelle）！② courir（跑）和 marcher（走）虽然表运动，但只用 avoir！' }
        ],
        sections: [
          {
            id: 't10a5_alamo',
            heading: '1. The Alamo d’Être, Agreement & Dual-Auxiliary Contrast',
            headingZh: '一、阿拉莫移动动词、主语配合与 dual-auxiliary 对比表',
            lead: 'Remember the Alamo! Look at how "venir, devenir, revenir, naître, mourir" form the 5 irregulars, and how "Tex est sorti" contrasts with "Tex n’a pas sorti la poubelle":',
            leadZh: '结合 Tex 去圣安东尼奥阿拉莫城堡的漫画与对白，把 `être` 助动词的主语配合与及物切换规则一网打尽：',
            cartoon: {
              src: './assets/tex_cartoons/tap3_alamo.gif',
              alt: 'L’Alamo d’Être : les verbes de mouvement avec être',
              caption: 'Tex est allé à l’Alamo. Tammy est devenue pâle et elle est tombée dans la rivière !',
              captionZh: '去过阿拉莫（est allé）、脸色突然发白（est devenue pâle）、掉进河里（est tombée）全用 être 且配合主语！'
            },
            table: {
              headers: ['Verb Pair / Family', 'Past Participle', 'Intransitive (être + Agreement)', 'Transitive Switch (avoir + COD!)'],
              rows: [
                { cols: ['aller ↔ venir (revenir/devenir)', 'allé · venu (devenu/revenu)', 'Il est allé. · Elle est devenue pâle.', '(always intransitive → always être)'], audio: 'Elle est allée à l’Alamo. Elle est devenue pâle.' },
                { cols: ['arriver ↔ partir', 'arrivé · parti', 'Nous sommes arrivés. · Tu es parti(e) ?', '(always intransitive → always être)'], audio: 'Nous sommes arrivés pour la sauver.' },
                { cols: ['entrer · rentrer ↔ rester · tomber', 'entré · rentré · resté · tombé', 'Elles sont restées. · Elle est tombée.', '(rentrer qqch can use avoir)'], audio: 'Tammy et Bette sont restées à San Antonio.' },
                { cols: ['naître ↔ mourir', 'né · mort (irregular!)', 'Ils sont nés en mai. · Elle n’est pas morte !', '(always intransitive → always être)'], audio: 'Les enfants sont nés en mai. Elle n’est pas morte.' },
                { cols: ['sortir · monter · descendre · passer · retourner', 'sorti · monté · descendu · passé · retourné', 'Tex est sorti. (NO direct object)', 'Tex n’a pas sorti la poubelle ! (COD → avoir!)'], audio: 'Tex est sorti. Tex n’a pas sorti la poubelle.' }
              ]
            }
          },
          {
            id: 't10a5_dialogue',
            heading: '2. San Antonio Rescue Dialogue (+ vous Agreement Rule)',
            headingZh: '二、圣安东尼奥救援对话与 vous 的配合细节',
            lead: 'Listen to Joe-Bob and Corey talking about San Antonio: notice "vous êtes rentrés" (plural male Tex + Corey = +s), "sont restées" (female Tammy + Bette = +es), and "sommes arrivés" (mixed/male Tex + Corey = +s):',
            leadZh: '听这段经典救援对话，细心观察每一处过去分词词尾是 `+e`、`+s` 还是 `+es`：',
            cartoon: {
              src: './assets/tex_cartoons/tap3_texestalle.gif',
              alt: 'Tex est allé à l’Alamo',
              caption: 'Joe-Bob : Vous êtes rentrés ? — Tex : Tammy et Bette sont restées. — Corey : Elle n’est pas morte !',
              captionZh: '你们回来了（rentrés +s）？— 她俩留下来（restées +es）！— 她没死（morte +e）！'
            },
            dialogue: {
              title: 'Rescue at the San Antonio River',
              titleZh: '小对话：河边惊险救援',
              lines: [
                { speaker: 'Joe-Bob', fr: 'Tex, Corey et toi, vous êtes rentrés de l’Alamo ?', en: 'Tex, did you and Corey come back from the Alamo?', zh: 'Tex 和 Corey（两名男生）→ rentrés（加 -s）！' },
                { speaker: 'Tex', fr: 'Oui. Mais Tammy et Bette sont restées à San Antonio pour faire des achats.', en: 'Yes. But Tammy and Bette stayed in San Antonio to go shopping.', zh: 'Tammy 和 Bette（两名女生）→ restées（加 -es）！' },
                { speaker: 'Corey', fr: 'Tout d’un coup Tammy est devenue toute pâle et elle est tombée dans la rivière !', en: 'All of a sudden Tammy turned very pale and fell in the river!', zh: 'Tammy（女生）→ devenue / tombée（加 -e）！' },
                { speaker: 'Corey', fr: 'Calme-toi. Elle n’est pas morte ! Tex et moi sommes arrivés pour la sauver !', en: 'Calm down. She didn’t die! Tex and I arrived to save her!', zh: 'Elle n’est pas morte（不规则 mort+e）；Tex et moi → arrivés（加 -s）！' }
              ]
            },
            quickCheck: {
              prompt: 'Pick the sentence where BOTH verbs are 100% grammatically right:',
              promptZh: '同时考察“及物切换 avoir”与“courir 不用 être”，下面哪一句完全正确？',
              options: [
                'Elle a descendu les escaliers en courant, puis elle est sortie.',
                'Elle est descendue les escaliers en courant, puis elle est sortie.',
                'Elle a couru au parc et puis elle a tombée.',
                'Elle est courue à la porte et elle a sorti.'
              ],
              answerIdx: 0,
              explain: '(1) "les escaliers" is a direct object of descendre → "Elle a descendu"; (2) "sortir" with no object → "elle est sortie" (+e). Note also courir always takes avoir ("a couru")!',
              explainZh: 'descendre 带了直宾 les escaliers 必须改用 avoir（a descendu）；sortir 后没有宾语保留 être 并加阴性 -e（est sortie）！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10a5_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tammy ___ en France il y a un an. (aller)',
            promptZh: 'Tex 原题 #1：Tammy（女性）一年前去了法国（aller，记得配合）：',
            answers: ['est allée'],
            hint: 'être + allé + feminine -e = est allée!',
            audio: 'Tammy est allée en France il y a un an.',
            explain: 'Tammy (fem. sg.) + aller (être) → est allée.',
            explainZh: 'Tammy 为阴性单数且 aller 用 être，需加 -e → est allée。'
          },
          {
            id: 'dt10a5_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Edouard ___ en retard, comme toujours. (arriver)',
            promptZh: 'Tex 原题 #2：Edouard 一如既往地迟到了（arriver）：',
            answers: ['est arrivé'],
            hint: 'Edouard (masc. sg.) → est arrivé.',
            audio: 'Edouard est arrivé en retard, comme toujours.',
            explain: 'est arrivé.',
            explainZh: '阳性单数 → est arrivé。'
          },
          {
            id: 'dt10a5_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Hier Tammy ___ dans le cours d’aérobique. (tomber)',
            promptZh: 'Tex 原题 #3：昨天 Tammy（女）在有氧操课上摔倒了（tomber）：',
            answers: ['est tombée'],
            hint: 'Tammy = feminine singular → est tombée!',
            audio: 'Hier Tammy est tombée dans le cours d’aérobique.',
            explain: 'tomber takes être; Tammy (fem.) → est tombée.',
            explainZh: 'tomber 用 être 且配合女性 Tammy → est tombée。'
          },
          {
            id: 'dt10a5_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Fiona (speaking!): Moi, je ___ à la maison hier soir. (rester — watch speaker gender!)',
            promptZh: 'Tex 原题 #4：Fiona（女性说话者）：“我昨晚待在家里了。”（rester，注意 je 指女生！）：',
            answers: ['suis restée'],
            hint: 'Fiona speaking ("je" = fem. sg.) → suis restée!',
            audio: 'Moi, je suis restée à la maison hier soir.',
            explain: 'je refers to female Fiona → suis restée.',
            explainZh: '说话者是女生 Fiona，je 配合阴性 -e → suis restée！'
          },
          {
            id: 'dt10a5_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Fiona : Corey et Joe-Bob, vous ___ très tard après la fête. (rentrer)',
            promptZh: 'Tex 原题 #5：Fiona 对 Corey 和 Joe-Bob（两位男生）说：“你们派对后很晚才回来。”：',
            answers: ['êtes rentrés'],
            hint: 'Two males ("vous") → êtes rentrés (+ -s)!',
            audio: 'Corey et Joe-Bob, vous êtes rentrés très tard.',
            explain: 'vous addresses two males → êtes rentrés (-s).',
            explainZh: '这里的 vous 指 Corey 和 Joe-Bob 两位男性，所以加 -s → êtes rentrés。'
          },
          {
            id: 'dt10a5_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tammy et Bette ___ ensemble. (venir — irregular + fem. pl.!)',
            promptZh: 'Tex 原题 #6：Tammy 和 Bette（两位女生）是一起来的（venir，不规则+阴复配合）：',
            answers: ['sont venues'],
            hint: 'venir → venu + feminine plural -es = sont venues!',
            audio: 'Tammy et Bette sont venues ensemble.',
            explain: 'venir takes être; fem. pl. → sont venues.',
            explainZh: 'venir 过去分词是 venu，加上 Tammy et Bette 阴性复数词尾 → sont venues！'
          },
          {
            id: 'dt10a5_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Les enfants de Rita ___ en mai. (naître — irregular!)',
            promptZh: 'Tex 原题 #7：Rita 的孩子们是五月份出生的（naître，不规则 + 复数）：',
            answers: ['sont nés'],
            hint: 'naître → né + plural -s = sont nés!',
            audio: 'Les enfants de Rita sont nés en mai.',
            explain: 'naître → né; Les enfants (masc. pl.) → sont nés.',
            explainZh: 'naître 过去分词为 né，加复数 -s → sont nés。'
          },
          {
            id: 'dt10a5_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tammy : Tex, pourquoi est-ce que tu ___ avec Bette ? (partir — tu = Tex)',
            promptZh: 'Tex 原题 #8：Tammy 问 Tex：“你为什么和 Bette 一起走了？”（partir，tu 指男生 Tex）：',
            answers: ['es parti'],
            hint: 'tu = Tex (masc. sg.) → es parti.',
            audio: 'Tex, pourquoi est-ce que tu es parti avec Bette ?',
            explain: 'tu = male Tex → es parti.',
            explainZh: '问的对象是男性 Tex，不用加 -e → es parti。'
          },
          {
            id: 'dt10a5_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tex : Mes parents ___ sur l’autoroute. (mourir — irregular!)',
            promptZh: 'Tex 原题 #9：我的父母在高速公路上去世了（mourir，不规则 + 复数）：',
            answers: ['sont morts'],
            hint: 'mourir → mort + plural -s = sont morts!',
            audio: 'Mes parents sont morts sur l’autoroute.',
            explain: 'mourir → mort; Mes parents (pl.) → sont morts.',
            explainZh: 'mourir 过去分词是 mort，父母复数 → sont morts。'
          },
          {
            id: 'dt10a5_d11_b',
            kind: 'fib',
            prompt: 'Tex Practice #11: Après la guerre, Paw-Paw ___ héros. (devenir — irregular!)',
            promptZh: 'Tex 原题 #11：战后，Paw-Paw 成了英雄（devenir）：',
            answers: ['est devenu'],
            hint: 'devenir (like venir) → devenu.',
            audio: 'Après la guerre, Paw-Paw est devenu héros.',
            explain: 'est devenu.',
            explainZh: 'devenir → devenu，填 est devenu。'
          },
          {
            id: 'dt10a5_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tex et Tammy ___ au rez-de-chaussée. (descendre — mixed M+F!)',
            promptZh: 'Tex 原题 #12：Tex（男）和 Tammy（女）一起下到了一楼（descendre，混合复数且无直宾）：',
            answers: ['sont descendus'],
            hint: 'Mixed Tex + Tammy = masc. pl. → sont descendus.',
            audio: 'Tex et Tammy sont descendus au rez-de-chaussée.',
            explain: 'Mixed gender subject takes masc. plural -s: sont descendus.',
            explainZh: '一男一女混合复数作阳性复数处理 → sont descendus。'
          },
          {
            id: 'dt10a5_d12_sw',
            kind: 'fib',
            prompt: 'Dual-auxiliary trap! "It’s trash day: Tammy ___ la poubelle ce matin." (sortir + direct object la poubelle!)',
            promptZh: '及物切换陷阱：今天收垃圾，“Tammy 今早把垃圾桶拿出去了”（sortir 后面紧跟直接宾语 la poubelle！）：',
            answers: ['a sorti'],
            hint: 'Direct object "la poubelle" AFTER sortir switches auxiliary to AVOIR (no agreement)!',
            audio: 'Tammy a sorti la poubelle ce matin.',
            explain: 'Whenever sortir, monter, descendre, passer, or retourner has a direct object after it, it switches to AVOIR: "Tammy a sorti la poubelle"!',
            explainZh: '重要规则：sortir 后接直接宾语 la poubelle 时，立刻改用 avoir 助动词且不做主语配合 → a sorti！'
          }
        ],
        related: [
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_4', label: 'Back to 10A.4 Passé Composé (avoir)' },
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_6', label: '10A.6 Pronominal Verbs in Passé Composé' }
        ]
      },

      /* =========================================================
         PAGE 10A.6: PASSÉ COMPOSÉ OF PRONOMINAL VERBS (tap4)
      ========================================================= */
      {
        id: 't10a_6',
        code: '10A.6',
        group: 'Passé Composé',
        shortTitle: 'Passé Composé (Pronominal Verbs)',
        title: 'Pronominal Verbs in Passé Composé: Always être, Body Parts Exception & Reciprocal Verbs',
        titleZh: '复合过去时（三）代动词（反身动词）：必用 être、身体部位不配合与相互动词不配合例外',
        estMin: 4,
        summary: 'Master pronominal (reflexive/idiomatic/reciprocal) verbs in Passé Composé: (1) ALL pronominal verbs use ÊTRE as auxiliary, with the reflexive pronoun before être ("elle s’est réveillée"); (2) negation puts "ne" before the reflexive pronoun and "pas" after être ("tu ne t’es pas rasé"); (3) agreement usually matches the reflexive pronoun/subject ("Je me suis lavée"), WITH TWO FAMOUS EXCEPTIONS (NO agreement!): (A) when a direct object follows the verb, notably a body part ("Je me suis lavé les cheveux"), and (B) reciprocal verbs where the underlying verb takes "à + person" ("se parler, se téléphoner, s’écrire, se sourire, se dire" → "nous nous sommes parlé", NO -s!).',
        summaryZh: '全部代动词（无论是自反、惯用还是相互类）在复合过去时中**一律以 `être` 作助动词**！记住核心规则与**两大超高频例外**：① 基本句型：`主语 + 反身代词 + être + 过去分词`，否定式把 `ne` 放反身代词前面、`pas` 放 `être` 后面（`Tu ne t’es pas rasé`）；② 默认情况随主语性数配合（`Je me suis lavée`），**但下面两种情况绝不配合（无 `-e` 无 `-s`！）**：（A）后面紧跟着**身体部位直宾**（`Je me suis **lavé** les cheveux`）；（B）相互代动词原本的动词搭配是 **`à + 人`**（`se parler, se téléphoner, s’écrire, se sourire, se dire`），即反身代词其实是间接宾语，因此 `Nous nous sommes **parlé**`（不加 `-s`）！',
        cheatSummary: [
          { label: 'Two Exceptions Where NO Agreement Happens!', rule: 'Normally agrees ("Tammy s’est réveillée"). NO AGREEMENT when: (1) direct object follows verb ("Elle s’est lavé les mains", "Il s’est brossé les dents"); (2) indirect reciprocal verbs taking à ("se parler, se téléphoner, s’écrire, se plaire" → "Elles se sont parlé", NO -es!).', ruleZh: '两个绝对不加 -e/-s 的例外：① 动词后面有身体部位作直接宾语（Elle s’est lavé les cheveux，不加 -e！）；② 底层结构带介词 à 的相互动词（se parler, se téléphoner, s’écrire, se sourire → Nous nous sommes parlé，不加 -s！）。' },
          { label: 'Negation & Word Order', rule: 'Subject + ne + reflexive pronoun (me/te/se/nous/vous) + être + pas + past participle ("Tu ne t’es pas rasé ?", "Nous ne nous sommes pas amusés").', ruleZh: '否定框架：ne 站在反身代词前面，pas 站在助动词 être 后面（Je ne me suis pas réveillée）。' }
        ],
        sections: [
          {
            id: 't10a6_pronom',
            heading: '1. Shaving Dialogue & All Agreement Rules Side by Side',
            headingZh: '一、剃须早起对话与“配合 vs. 不配合”对比全表',
            lead: 'Listen closely to Tammy and Tex’s morning exchange ("Tu ne t’es pas rasé ?", "tu t’es rasée ?"), and compare why Tammy’s "se laver" changes spelling the moment she adds "les cheveux":',
            leadZh: '读完早晨拌嘴对话，再对比下面表格里 `se laver`（洗自己 → 配合）vs `se laver les cheveux`（洗头发 → 不配合）的精妙区别：',
            cartoon: {
              src: './assets/tex_cartoons/tap4_rase.gif',
              alt: 'Tammy demande à Tex s’il s’est rasé ce matin',
              caption: 'Tammy : Tu ne t’es pas rasé ce matin ? — Tex : Non, et toi, tu t’es rasée ? — Tammy : Il s’est levé du pied gauche !',
              captionZh: '你今天没刮胡子吗（ne t’es pas rasé）？— 你今天刮了吗（tu t’es rasée，问女生加 -e！）？— 他今天起床气大着呢！'
            },
            table: {
              headers: ['Case Type', 'Example (Female / Plural Subject)', 'Agreement?', 'Why?'],
              rows: [
                { cols: ['Standard Reflexive / Idiomatic', 'Tammy : Je me suis réveillée tôt.', 'YES (+e)', 'Reflexive pronoun is direct object!'], audio: 'Je me suis réveillée très tôt ce matin.' },
                { cols: ['Negative Pronominal', 'Les filles ne se sont pas amusées.', 'YES (+es)', 'ne + se + sont + pas + amusées'], audio: 'Les filles ne se sont pas amusées.' },
                { cols: ['Followed by Body Part (COD)', 'Tammy : Je me suis lavé les cheveux.', 'NO (stay lavé!)', 'Direct object "les cheveux" comes AFTER the verb!'], audio: 'Je me suis lavée, et ensuite je me suis lavé les cheveux.' },
                { cols: ['Direct Reciprocal (aimer/embrasser qqch/qqn)', 'Elles se sont embrassées.', 'YES (+es)', 'embrasser qqn = direct object!'], audio: 'Elles se sont embrassées.' },
                { cols: ['Indirect Reciprocal (parler à qqn)', 'Bette et moi, nous nous sommes parlé.', 'NO (stay parlé!)', 'parler À qqn → "nous" is INDIRECT object!'], audio: 'Puis, Bette et moi, nous nous sommes parlé.' }
              ]
            },
            examples: [
              { fr: 'Tammy : Je me suis lavée. Et ensuite je me suis lavé les cheveux.', en: 'I washed (myself → +e). And then I washed my hair (COD after verb → NO -e!).', zh: '第一句洗自己，加 -e（lavée）；第二句后面多了直接宾语 les cheveux，所以不加 -e（lavé）！', tag: 'Body Part Exception' },
              { fr: 'Tammy : Puis, Bette et moi, nous nous sommes parlé.', en: 'Bette and I talked to each other (parler à → indirect object → NO -s!).', zh: 'parler à qqn 是间接宾语，因此两个女生互相交谈依然写 parlé（不能写成 *parlées）！', tag: 'Indirect Reciprocal' }
            ],
            quickCheck: {
              prompt: 'Pick the ONE sentence with 100% accurate French agreement:',
              promptZh: '选出代动词复合过去时配合完全正确的一句（特别小心身体部位与 se téléphoner）：',
              options: [
                'Elles se sont brossé les dents et elles se sont téléphoné.',
                'Elles se sont brossées les dents et elles se sont téléphonées.',
                'Elles se sont brossées les dents et elles se sont téléphoné.',
                'Elles ont brossé les dents et se sont téléphonées.'
              ],
              answerIdx: 0,
              explain: 'Both verbs have NO agreement: (1) "les dents" follows se brosser (→ brossé); (2) téléphoner À qqn is indirect (→ téléphoné)!',
              explainZh: '两处都不配合：① 后面带身体部位 les dents，所以用 brossé；② téléphoner à qqn 是间宾，所以用 téléphoné！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10a6_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tammy : Hier soir, Tex et moi, nous ___ près de la rivière. (se promener)',
            promptZh: 'Tex 原题 #1：昨晚 Tex（男）和 Tammy（女）在河边散步（se promener，混合复数）：',
            answers: ['nous sommes promenés'],
            hint: 'nous + sommes + promenés (mixed Tex + Tammy = +s).',
            audio: 'Hier soir, Tex et moi, nous nous sommes promenés près de la rivière.',
            explain: 'nous nous sommes promenés.',
            explainZh: '反身代词 nous + 助动词 sommes + promenés（一男一女用阳性复数 -s）。'
          },
          {
            id: 'dt10a6_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Corey ___ très vite ce matin. (s’habiller)',
            promptZh: 'Tex 原题 #2：Corey 今早穿衣服穿得飞快（s’habiller，il）：',
            answers: ["s'est habillé", 's’est habillé'],
            hint: 's’est habillé (Corey = masc. sg.).',
            audio: 'Corey s’est habillé très vite ce matin.',
            explain: 's’est habillé.',
            explainZh: '阳性单数：s’est habillé。'
          },
          {
            id: 'dt10a6_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Joe-Bob (male speaker): Je ___ en classe aujourd’hui. (s’endormir — irregular: endormi!)',
            promptZh: 'Tex 原题 #3：Joe-Bob（男）说：“我今天在课堂上睡着了。”（s’endormir）：',
            answers: ['me suis endormi'],
            hint: 'endormir → endormi (like dormir → dormi).',
            audio: 'Je me suis endormi en classe aujourd’hui.',
            explain: 'Je me suis endormi.',
            explainZh: 'endormir 的过去分词是 endormi → me suis endormi。'
          },
          {
            id: 'dt10a6_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Bette et Tammy ___ au gymnase. (s’amuser — two females!)',
            promptZh: 'Tex 原题 #4：Bette 和 Tammy（两位女生）在体育馆玩得很开心（s’amuser）：',
            answers: ['se sont amusées'],
            hint: 'Two females → se sont amusées (-es!).',
            audio: 'Bette et Tammy se sont amusées au gymnase.',
            explain: 'Bette et Tammy (fem. pl.) → se sont amusées.',
            explainZh: '两位女生主语加 -es → se sont amusées。'
          },
          {
            id: 'dt10a6_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Fiona : Tex et Tammy, est-ce que vous ___ ? (se marier — mixed M+F!)',
            promptZh: 'Tex 原题 #5：Fiona 问 Tex 和 Tammy（男女混合）：“你们结婚了吗？”（se marier）：',
            answers: ['vous êtes mariés'],
            hint: 'vous + êtes + mariés (mixed M+F = +s).',
            audio: 'Tex et Tammy, est-ce que vous vous êtes mariés ?',
            explain: 'vous vous êtes mariés.',
            explainZh: '男女复数加 -s → vous êtes mariés。'
          },
          {
            id: 'dt10a6_d6',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tammy ___ contre Tex à la fête. (se fâcher — female!)',
            promptZh: 'Tex 原题 #7：Tammy（女）在派对上生 Tex 的气了（se fâcher）：',
            answers: ["s'est fâchée", 's’est fâchée', "s'est fachée", 's’est fachée'],
            hint: 'Tammy (fem. sg.) → s’est fâchée (+e).',
            audio: 'Tammy s’est fâchée contre Tex à la fête.',
            explain: 'Tammy s’est fâchée.',
            explainZh: '阴性单数加 -e → s’est fâchée。'
          },
          {
            id: 'dt10a6_d7',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tammy : Qu’est-ce qui ___ à l’arrêt d’autobus ? (se passer — subject "qui" = 3rd sg. masc.)',
            promptZh: 'Tex 原题 #9：公交站发生什么事了？（Qu’est-ce qui 按阳性单数处理，se passer）：',
            answers: ["s'est passé", 's’est passé'],
            hint: 'Qu’est-ce qui → s’est passé.',
            audio: 'Qu’est-ce qui s’est passé à l’arrêt d’autobus ?',
            explain: 'Qu’est-ce qui s’est passé ?',
            explainZh: '常用句型 Qu’est-ce qui s’est passé ?（发生什么事了？）。'
          },
          {
            id: 'dt10a6_d8',
            kind: 'fib',
            prompt: 'Tex Practice #10 (Irregular!): Bette ___ à côté de Tex. (s’asseoir — past participle: assis + -e!)',
            promptZh: 'Tex 原题 #10：Bette（女）坐在了 Tex 旁边（s’asseoir 过去分词 assis，加阴性词尾）：',
            answers: ["s'est assise", 's’est assise'],
            hint: 'asseoir → assis + fem. -e = assise!',
            audio: 'Bette s’est assise à côté de Tex.',
            explain: 'Bette (fem.) → s’est assise.',
            explainZh: 's’asseoir 过去分词为 assis，阴性加 -e → s’est assise！'
          },
          {
            id: 'dt10a6_d9',
            kind: 'fib',
            prompt: 'Tex Practice #11: Bette (speaking!): Je ___ cent fois ce matin. (se laver — speaker is female!)',
            promptZh: 'Tex 原题 #11：Bette（女生）说：“我今早洗了一百遍澡！”（se laver，无后续身体部位）：',
            answers: ['me suis lavée'],
            hint: 'Female Bette speaking → me suis lavée (+e).',
            audio: 'Je me suis lavée cent fois ce matin.',
            explain: 'je = female Bette, no following COD → me suis lavée.',
            explainZh: '女生说话且后面没有其他宾语，需加 -e → me suis lavée。'
          },
          {
            id: 'dt10a6_d10',
            kind: 'fib',
            prompt: 'Body part exception! Tammy : Je me suis ___ les mains avant de dîner. (se laver)',
            promptZh: '身体部位例外：Tammy（女生）说：“我晚饭前洗了手（les mains 在动词后面）。”填入过去分词：',
            answers: ['lavé'],
            hint: 'Direct object "les mains" follows the verb → NO -e on lavé!',
            audio: 'Je me suis lavé les mains avant de dîner.',
            explain: 'When a body-part direct object follows the verb ("les mains"), the past participle does NOT agree → lavé!',
            explainZh: '后面有直接宾语 les mains，因此 lavé 保持原型不变！'
          },
          {
            id: 'dt10a6_d11',
            kind: 'fib',
            prompt: 'Indirect reciprocal exception! "Hier, Bette et Tammy se sont ___ pendant deux heures." (se parler)',
            promptZh: '相互动词例外：“昨天 Bette 和 Tammy 聊了整整两个小时（se parler ← parler à qqn）。”填入过去分词：',
            answers: ['parlé'],
            hint: 'parler À someone = indirect object → NO -es on parlé!',
            audio: 'Hier, Bette et Tammy se sont parlé pendant deux heures.',
            explain: 'Because "parler à" takes an indirect object, "se" is COI → NO agreement: parlé!',
            explainZh: 'parler à qqn 为间接宾语，相互动词 se parler 的过去分词永远不变 → parlé！'
          },
          {
            id: 'dt10a6_d12',
            kind: 'fib',
            prompt: 'Negative pronominal check: "Pourquoi est-ce que Tex et Corey ne ___ pas réveillés tôt ?" (s’être)',
            promptZh: '否定代动词填空：为什么 Tex 和 Corey 没早点醒来？（填入 ne 和 pas 之间的“反身代词 + 助动词”）：',
            answers: ['se sont'],
            hint: 'ne + se + sont + pas + réveillés.',
            audio: 'Pourquoi ne se sont-ils pas réveillés tôt ?',
            explain: 'ne se sont pas réveillés.',
            explainZh: 'ne 后填入反身代词 se 和助动词 sont。'
          }
        ],
        related: [
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_5', label: 'Back to 10A.5 Passé Composé (être)' },
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_7', label: '10A.7 Imparfait Formation' }
        ]
      },

      /* =========================================================
         PAGE 10A.7: IMPARFAIT FORMATION (tap5)
      ========================================================= */
      {
        id: 't10a_7',
        code: '10A.7',
        group: 'Imparfait & Narration',
        shortTitle: 'Imparfait: Stem & Endings',
        title: 'The Imparfait (1): One-Rule Stem From "nous" + Endings (-ais/-ais/-ait/-ions/-iez/-aient) & être Exception',
        titleZh: '未完成过去时（一）：万能构成公式（nous 词干 + 固定词尾）、唯一不规则 être 与拼写调音',
        estMin: 4,
        summary: 'Master the easiest regular pattern in French conjugation: (1) take the PRESENT "nous" form of ANY verb except être, drop "-ons", and get the stem for ALL 6 persons (parlons → parl-, finissons → finiss-, faisons → fais-, prenons → pren-, buvons → buv-, voulons → voul-); (2) ONLY "être" is irregular (ét-); (3) add endings -ais, -ais, -ait, -ions, -iez, -aient (all 4 boot forms sound identical: /ɛ/!); (4) spelling tweaks: -ger verbs keep "-e-" before a (je mangeais) and -cer verbs keep "-ç-" before a (nous → je commençais), while nous/vous keep regular i.',
        summaryZh: '未完成过去时（Imparfait）堪称法语**最有规律**的时态！记住万能公式：**拿任何动词现在时的 `nous` 变位形式去掉 `-ons`，再贴上固定六词尾 `-ais, -ais, -ait, -ions, -iez, -aient`**！全法语只有**唯一一个**不规则词干：**`être → ét-`**（`j’étais`）。重点注意两条发音/拼写规律：① 语音上，单数三格和复数第三格这四个“靴子位置（Boot）”全读作同一个音 **`/ɛ/`**；② `-ger` 动词在 a 前留 `-e-`（*je voyageais*），`-cer` 动词变 `-ç-`（*il commençait*），`nous/vous` 用 `-ions/-iez`！',
        cheatSummary: [
          { label: 'Universal Formula + Only 1 Irregular (être → ét-)', rule: 'Step 1: Present "nous" minus "-ons" (finissons → finiss-, faisons → fais-, prenons → pren-, buvons → buv-). Step 2: Add -ais, -ais, -ait, -ions, -iez, -aient. ONLY irregularity in French: être → j’étais, nous étions!', ruleZh: '全法语唯一词干例外只有 être（ét-）！其他再不规则的动词（aller, faire, prendre, boire, savoir...）一律从现在时 nous 去 ons 取词干！' },
          { label: 'Boot Sound + -ger / -cer / -ier Spelling', rule: '-ais, -ais, -ait, -aient ALL sound identical (/ɛ/)! Keep soft g/c before "a": je voyageais, il commençait (NO extra e/ç in nous voyagions). Notice verbs like étudier get double i in nous/vous: nous étudiions!', ruleZh: '拼写提醒：① -ger/-cer 在 a 前加 e 或变 ç（je mangeais, tu commençais）；② -ier 结尾动词的 nous/vous 会有双写 ii（nous étudiions, vous riiez）！' }
        ],
        sections: [
          {
            id: 't10a7_stem',
            heading: '1. From Present "nous" Stem to All 6 Endings',
            headingZh: '一、从现在时 nous 到 Imparfait 全词干对照与发音规律',
            lead: 'Listen to Tex explaining his morning to Joe-Bob ("Je voulais la voir... elle n’était pas chez elle... j’avais... je ne pouvais pas...") — every single background verb takes the exact same -ais / -ait endings:',
            leadZh: '看 Tex 讲述早上扑空的经历，再熟记这张“现在时 nous → 未完成过去时词干”转换表：',
            cartoon: {
              src: './assets/tex_cartoons/tap5_voulais.gif',
              alt: 'Tex voulait voir Tammy mais elle n’était pas chez elle',
              caption: 'Tex : Je voulais la voir, mais elle n’était pas chez elle. J’avais un cadeau, je ne pouvais pas le laisser là !',
              captionZh: '我本来想见她（voulais），但她不在家（n’était pas），我手里又有礼物（j’avais），实在不能放门口（pouvais）！'
            },
            table: {
              headers: ['Verb', 'Present "nous"', 'Imparfait Stem', 'Model Examples'],
              rows: [
                { cols: ['-er: parler · étudier', 'parlons · étudions', 'parl- · étudi-', 'je parlais · nous étudiions (double -ii-!)'], audio: 'Je parlais français. Nous étudiions ensemble.' },
                { cols: ['-ir: finir · servir', 'finissons · servons', 'finiss- · serv-', 'il finissait · vous finissiez · il servait'], audio: 'Nous finissions nos devoirs. Il servait le repas.' },
                { cols: ['-re: descendre · mettre', 'descendons · mettons', 'descend- · mett-', 'ils mettaient la table · tu attendais'], audio: 'Tex et Tammy mettaient la table.' },
                { cols: ['Irregulars: faire · prendre · boire', 'faisons · prenons · buvons', 'fais- (sounds /fəz/!) · pren- · buv-', 'elles faisaient · tu buvais'], audio: 'Je faisais du sport. Tu buvais du thé.' },
                { cols: ['Spelling -ger / -cer', 'voyageons · commençons', 'voyage- / voyag- · commenç- / commenc-', 'je voyageais · nous voyagions'], audio: 'Je voyageais souvent. Nous voyagions ensemble.' },
                { cols: ['ONLY irregular: être', '(nous sommes)', 'ét- (NOT *somm-!)', 'j’étais · elle était · nous étions'], audio: 'Elle n’était pas chez elle. Nous étions prêts.' }
              ]
            },
            examples: [
              { fr: 'Je voulais la voir, mais elle n’était pas chez elle. J’avais un cadeau ; je ne pouvais pas le laisser !', en: 'wanting, being absent, having, being able = Imparfait descriptions', zh: 'voulais（nous voulons 去 ons）、était（唯一不规则 ét-）、avais（avons 去 ons）、pouvais（pouvons 去 ons）。', tag: 'Tex’s Morning' },
              { fr: 'Je ne dansais pas. · Tu ne t’amusais pas.', en: 'Negation & pronominals: ne + (reflexive) + imparfait verb + pas', zh: '否定与代动词照常放在词前后：je m’amusais / je ne m’amusais pas。', tag: 'Neg. & Pronominal' }
            ],
            quickCheck: {
              prompt: 'Look carefully at "nous" and "vous" of -ier verbs like "étudier" and "rire" in the Imparfait:',
              promptZh: '拼写易错点：以 `-ier` 结尾的动词（如 `étudier`），遇到未完成过去时 `nous`（词尾 `-ions`）时会怎么写？',
              options: [
                'nous étudiions (keep stem "étudi-" + ending "-ions" = double i!)',
                'nous étudions (same as present tense)',
                'nous étudiyons',
                'nous étudiaions'
              ],
              answerIdx: 0,
              explain: 'Do NOT merge the two i’s! Stem is "étudi-" (from étudions minus -ons), and ending is "-ions" → "nous étudiions" (just like "nous riions", "vous oubliiez")!',
              explainZh: '千万不能合并成 *nous étudions（那是现在时！）；保留词干 étudi- 加上词尾 -ions，必须双写 ii → nous étudiions！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10a7_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex et Tammy ___ la table quand Paw-Paw a téléphoné. (mettre — imparfait)',
            promptZh: 'Tex 原题 #1：Paw-Paw 打电话来时，Tex 和 Tammy 正在摆桌子（mettre，未完成过去时）：',
            answers: ['mettaient'],
            hint: 'Present "nous mettons" → stem "mett-" + -aient.',
            audio: 'Tex et Tammy mettaient la table.',
            explain: 'ils mettaient (from nous mettons).',
            explainZh: '从 nous mettons 取词干 mett-，第三人称复数加 -aient → mettaient。'
          },
          {
            id: 'dt10a7_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tammy ___ la chimie avant la soirée. (étudier — imparfait)',
            promptZh: 'Tex 原题 #2：Tammy 在派对前正在学化学（étudier，3 单）：',
            answers: ['étudiait'],
            hint: 'nous étudions → stem "étudi-" + -ait.',
            audio: 'Tammy étudiait la chimie.',
            explain: 'Tammy (= elle) étudiait.',
            explainZh: '单数词干 étudi- + -ait → étudiait。'
          },
          {
            id: 'dt10a7_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Joe-Bob : Je ___ des noix quand il a commencé à pleuvoir. (ramasser — imparfait)',
            promptZh: 'Tex 原题 #3：开始下雨时我正在捡坚果（ramasser，je）：',
            answers: ['ramassais'],
            hint: 'je + stem ramass- + -ais.',
            audio: 'Je ramassais des noix quand il a commencé à pleuvoir.',
            explain: 'je ramassais.',
            explainZh: 'je ramassais。'
          },
          {
            id: 'dt10a7_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Fiona : J’___ la musique française quand Joe-Bob est arrivé. (écouter — imparfait)',
            promptZh: 'Tex 原题 #4：Joe-Bob 来时我正在听法语歌（écouter，je）：',
            answers: ['écoutais'],
            hint: 'j’ + écoutais.',
            audio: 'J’écoutais la musique française.',
            explain: 'J’écoutais.',
            explainZh: 'écoutais。'
          },
          {
            id: 'dt10a7_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Fiona et Bette : Nous ___ nos devoirs quand le cours a commencé. (finir — imparfait)',
            promptZh: 'Tex 原题 #5：上课时我们正在赶完作业（finir，nous，注意 -iss-！）：',
            answers: ['finissions'],
            hint: 'Present "nous finissons" → finiss- + -ions = finissions!',
            audio: 'Nous finissions nos devoirs.',
            explain: 'Stem finiss- + -ions → finissions.',
            explainZh: '第二组动词从 nous finissons 取词干 finiss-，加 -ions → finissions。'
          },
          {
            id: 'dt10a7_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Fiona : Corey, tu ___ de l’insecticide toute la soirée ? (boire — imparfait)',
            promptZh: 'Tex 原题 #6：Corey，你昨晚一整晚都在喝杀虫剂吗？（boire，tu）：',
            answers: ['buvais'],
            hint: 'Present "nous buvons" → stem "buv-" + -ais!',
            audio: 'Tu buvais de l’insecticide toute la soirée ?',
            explain: 'From nous buvons → buvais.',
            explainZh: '现在时是 nous buvons → 词干 buv- + -ais = buvais。'
          },
          {
            id: 'dt10a7_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tex : Joe-Bob et Corey, vous ___ des voix mystérieuses pendant le cours ? (entendre — imparfait)',
            promptZh: 'Tex 原题 #7：你们上课的时候听到神秘声音了吗？（entendre，vous）：',
            answers: ['entendiez'],
            hint: 'entend- + -iez = entendiez.',
            audio: 'Vous entendiez des voix mystérieuses ?',
            explain: 'vous entendiez.',
            explainZh: 'vous 词尾固定 -iez → entendiez。'
          },
          {
            id: 'dt10a7_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Bette ___ à l’amour de Tex quand Tammy est arrivée. (réfléchir — imparfait)',
            promptZh: 'Tex 原题 #8：Tammy 到来时，Bette 正在思索 Tex 的爱（réfléchir，3 单）：',
            answers: ['réfléchissait'],
            hint: 'réfléchissons → réfléchiss- + -ait!',
            audio: 'Bette réfléchissait à l’amour de Tex.',
            explain: 'Regular -ir takes -iss-: réfléchissait.',
            explainZh: '与 finir 同族带 -iss- 词干：réfléchissait。'
          },
          {
            id: 'dt10a7_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Edouard ___ le repas quand le client a commandé du ketchup. (servir — imparfait)',
            promptZh: 'Tex 原题 #9：客人点番茄酱时，Edouard 正在端菜（servir，3 单）：',
            answers: ['servait'],
            hint: 'nous servons → serv- + -ait (keeps -v-!).',
            audio: 'Edouard servait le repas.',
            explain: 'nous servons keeps v → il servait.',
            explainZh: 'servir 在 nous servons 里有 v，所以未完成过去时保留 v → servait。'
          },
          {
            id: 'dt10a7_d10',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tammy et Bette ___ du shopping quand Tammy est tombée. (faire — imparfait)',
            promptZh: 'Tex 原题 #12：Tammy 掉河里时，她俩正在逛街购物（faire，3 复数）：',
            answers: ['faisaient'],
            hint: 'nous faisons → fais- + -aient (pronounced /fəzɛ/!).',
            audio: 'Tammy et Bette faisaient du shopping.',
            explain: 'faisaient (spelled ai, pronounced /fəzɛ/).',
            explainZh: '从 nous faisons 取词干 fais-，加 -aient → faisaient。'
          },
          {
            id: 'dt10a7_d11',
            kind: 'fib',
            prompt: 'Spelling check (-ger): Avant, je ___ beaucoup en France. (voyager — imparfait)',
            promptZh: '拼写调音题（-ger 动词）：以前我经常在法国旅行（voyager，je，保持软音 g）：',
            answers: ['voyageais'],
            hint: 'Keep -e- after g before -ais → voyageais!',
            audio: 'Avant, je voyageais beaucoup en France.',
            explain: 'Insert "e" between g and a so g stays soft /ʒ/: voyageais.',
            explainZh: '-ger 动词遇 a 开头词尾需加 e 留软音 → voyageais。'
          },
          {
            id: 'dt10a7_d12',
            kind: 'fib',
            prompt: 'Only irregular stem ("être"): Autrefois, nous ___ étudiants à Montréal. (être — imparfait)',
            promptZh: '唯一不规则词干（être）：以前我们都是蒙特利尔的大学生（nous）：',
            answers: ['étions'],
            hint: 'Stem ét- + -ions = étions.',
            audio: 'Autrefois, nous étions étudiants à Montréal.',
            explain: 'être is the ONLY irregular Imparfait stem in French: ét- → nous étions.',
            explainZh: 'être 的词干永远是 ét-，nous 配 -ions → étions。'
          }
        ],
        related: [
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_6', label: 'Back to 10A.6 Pronominal Passé Composé' },
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_8', label: '10A.8 Imparfait Uses: States & Habits' }
        ]
      },

      /* =========================================================
         PAGE 10A.8: IMPARFAIT USES — STATES & HABITS (tap6)
      ========================================================= */
      {
        id: 't10a_8',
        code: '10A.8',
        group: 'Imparfait & Narration',
        shortTitle: 'Imparfait: States & Past Habits',
        title: 'Imparfait Uses: Describing States of Being, People/Weather & Repeated Past Habits ("used to / would")',
        titleZh: '未完成过去时（二）：过去状态描写（人/天气/心理）与习惯性重复动作（“过去常常”）',
        estMin: 3,
        summary: 'Learn the two core meanings of Imparfait: (1) STATES OF BEING / DESCRIPTION in the past — age, time, weather, emotions, appearance, and verbs like être, avoir, vouloir, pouvoir ("Quand Edouard était adolescent, il n’avait qu’un rêve : il voulait créer..."); (2) HABITUAL / REPEATED ACTIONS in the past — translated in English as "used to" or "would" ("On allait toujours à 10 heures chez Berthillon... on se promenait... on chantait"). Distinguish this habitual "would" (Imparfait) from hypothetical "would" (Conditional)!',
        summaryZh: '吃透未完成过去时（Imparfait）的两大核心用法：① **过去的背景与持续状态描写**：描述过去某时的天气（`il faisait chaud`）、人物年龄外貌、心情愿望（`être, avoir, vouloir, pouvoir` 等词极高频出现）；② **过去反复发生的习惯动作**：相当于英语里的 *used to* 或 *would*（“过去常常去 Berthillon 吃冰淇淋、去塞纳河边散步、唱歌”）。留意英语 *would* 在法语分两家：表“过去常做”用 **Imparfait**，表“如果……就会”才用**条件式（Conditionnel）**！',
        cheatSummary: [
          { label: 'Core Meaning 1: States, Age, Weather & Inner Feelings', rule: 'Use Imparfait for past descriptions: weather ("il faisait chaud"), age ("avait 16 ans"), places, and ongoing inner states (être, avoir, vouloir, pouvoir, aimer, adorer).', ruleZh: '静态描写用 Imparfait：天气温度、年龄外貌、环境场景、心理状态/偏好（était, avait, voulait, adorait）。' },
          { label: 'Core Meaning 2: Past Habits ("used to / would")', rule: 'Repeated routines marked by "toujours, tous les jours, chaque été, autrefois" take Imparfait ("On allait toujours chez Berthillon..."). Never use Conditional for past habits!', ruleZh: '习惯动作配时间线索词（toujours, tous les jours, chaque été, autrefois）：用 Imparfait 表示“过去总是/常常做某事”！' }
        ],
        sections: [
          {
            id: 't10a8_states_habits',
            heading: '1. Edouard’s Youth & Nostalgic Paris Summers',
            headingZh: '一、Edouard 的少年梦想与巴黎夏夜回忆',
            lead: 'Listen to how Edouard paints BOTH his teenage ambition (être, avoir, vouloir, adorer, fréquenter) AND his nostalgic summer routine along the Seine ("on allait", "on se promenait", "on voyait", "on chantait"):',
            leadZh: '读完 Edouard 对巴黎夏夜吃冰激凌、沿塞纳河散步背诗的回忆，感受 Imparfait 独特的怀旧画面感：',
            cartoon: {
              src: './assets/tex_cartoons/tap6_reve.gif',
              alt: 'Quand Edouard était adolescent, il rêvait de cuisine parisienne',
              caption: 'Quand Edouard était adolescent, il n’avait qu’un rêve. En été, il faisait chaud et on allait toujours chez Berthillon !',
              captionZh: '少年时他只有一个梦想（n’avait qu’un rêve）；夏天天气暖烘烘的（il faisait chaud），大家总去 Berthillon 吃雪糕！'
            },
            table: {
              headers: ['Usage Category', 'Typical Clues', 'Authentic Tex Examples'],
              rows: [
                { cols: ['Past States & Ambitions', 'être, avoir, vouloir, pouvoir, penser', 'Quand Edouard était adolescent, il voulait créer des chefs-d’œuvre.'], audio: 'Quand Edouard était adolescent, il voulait devenir chef.' },
                { cols: ['Weather / Scene Setting', 'il faisait..., il pleuvait, la Seine coulait', 'En été à Paris, il faisait chaud ; on voyait la Seine qui coulait.'], audio: 'En été à Paris, il faisait chaud.' },
                { cols: ['Repeated Past Habits', 'toujours, tous les jours, autrefois, chaque été', 'On allait toujours à 10 heures chez Berthillon. On se promenait, on chantait.'], audio: 'On allait toujours chez Berthillon et on se promenait.' },
                { cols: ['Habitual "would" vs. Conditional "would"', 'Past routine = Imparfait; Hypothetical = Conditional', '"We would sing every night" = On chantait (NOT *chanterait!).'], audio: 'Chaque soir, on chantait et on se récitait des vers.' }
              ]
            },
            examples: [
              { fr: 'Quand Edouard était adolescent, il fréquentait les meilleures tables de Paris.', en: 'fréquenter ("frequented" = regularly visited) → Imparfait!', zh: '常常光顾最好的巴黎餐馆——过去经常性动作，用 Imparfait！', tag: 'Past Habit' },
              { fr: 'On se promenait le long des quais, on chantait, on se récitait même des vers.', en: 'Repeated warm summer evenings ("we used to stroll... we would sing...")', zh: '连续一串过去习惯行为，统统用 Imparfait 营造回忆画卷。', tag: 'Imparfait Series' }
            ],
            quickCheck: {
              prompt: 'Translate the past habit: "When I lived in Paris, I would go to that bakery every morning."',
              promptZh: '把英语习惯句 “When I lived in Paris, I would go to that bakery every morning.” 翻成准确法语：',
              options: [
                'Quand j’habitais à Paris, j’allais à cette boulangerie tous les matins.',
                'Quand j’ai habité à Paris, j’irais à cette boulangerie tous les matins.',
                'Quand j’habiterais à Paris, je suis allé à cette boulangerie tous les matins.',
                'Quand j’habitais à Paris, je suis allé à cette boulangerie.'
              ],
              answerIdx: 0,
              explain: 'Both living there (ongoing state) AND "would go every morning" (repeated habit) take the Imparfait ("habitais... allais") — NEVER Conditional *irais!',
              explainZh: '英文这里的 would go 是“以前每天都会去”的过去习惯，而非条件假设，因此法语必须用 Imparfait：habitais + allais！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10a8_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: En France, Tammy ___ du shopping tous les jours. (faire — imparfait)',
            promptZh: 'Tex 原题 #1：在法国那会儿，Tammy 每天都要去逛街购物（faire，3 单）：',
            answers: ['faisait'],
            hint: 'tous les jours + faire → faisait.',
            audio: 'En France, Tammy faisait du shopping tous les jours.',
            explain: 'Daily past habit → faisait.',
            explainZh: '过去每天例行习惯 → faisait。'
          },
          {
            id: 'dt10a8_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Chez les nonnes, Tex ___ la Bible chaque jour. (lire — imparfait)',
            promptZh: 'Tex 原题 #2：在修道院里，Tex 每天都读圣经（lire，nous lisons → 词干 lis-）：',
            answers: ['lisait'],
            hint: 'nous lisons → lis- + -ait = lisait.',
            audio: 'Chez les nonnes, Tex lisait la Bible chaque jour.',
            explain: 'lire (nous lisons) → il lisait.',
            explainZh: 'lire 的 nous 词干有 s（lisons）→ lisait。'
          },
          {
            id: 'dt10a8_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Fiona : Joe-Bob, est-ce que tu ___ beaucoup dans ton enfance ? (chanter — imparfait)',
            promptZh: 'Tex 原题 #3：Joe-Bob，你小时候（dans ton enfance）经常唱歌吗？（chanter，tu）：',
            answers: ['chantais'],
            hint: 'tu chantais.',
            audio: 'Est-ce que tu chantais beaucoup dans ton enfance ?',
            explain: 'Childhood habit → tu chantais.',
            explainZh: '童年习惯用 Imparfait：chantais。'
          },
          {
            id: 'dt10a8_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Tex : En France, je ___ dans le parc après la messe. (se promener — imparfait)',
            promptZh: 'Tex 原题 #4：在法国时，我做完弥撒后常在公园散步（se promener，je，填反身代词+动词）：',
            answers: ['me promenais'],
            hint: 'je + me + promenais (no è in imparfait!).',
            audio: 'En France, je me promenais dans le parc après la messe.',
            explain: 'Imparfait keeps regular e from nous promenons: me promenais.',
            explainZh: '注意：从 nous promenons 衍生来的 Imparfait 不用变 è，写 me promenais。'
          },
          {
            id: 'dt10a8_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Fiona : Joe-Bob et Corey, est-ce que vous ___ à vos parents ? (obéir — imparfait)',
            promptZh: 'Tex 原题 #5：你们小时候听父母话吗？（obéir，vous，注意 -iss-！）：',
            answers: ['obéissiez'],
            hint: 'nous obéissons → obéiss- + -iez!',
            audio: 'Est-ce que vous obéissiez à vos parents ?',
            explain: 'Regular -ir → obéissiez.',
            explainZh: '第二组 -ir 保留 -iss-：obéissiez。'
          },
          {
            id: 'dt10a8_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tex : Rita, est-ce que nous ___ ensemble avant mon départ ? (jouer — imparfait)',
            promptZh: 'Tex 原题 #6：Rita，我离开前咱俩是不是经常一起玩耍？（jouer，nous）：',
            answers: ['jouions'],
            hint: 'jou- + -ions = jouions.',
            audio: 'Est-ce que nous jouions ensemble avant mon départ ?',
            explain: 'nous jouions.',
            explainZh: 'nous jouions。'
          },
          {
            id: 'dt10a8_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tammy et Bette ___ une vie heureuse avec un homme unique. (imaginer — imparfait)',
            promptZh: 'Tex 原题 #7：Tammy 和 Bette 那时经常幻想和同一个男人幸福生活（imaginer，3 复）：',
            answers: ['imaginaient'],
            hint: 'elles imaginaient.',
            audio: 'Tammy et Bette imaginaient une vie heureuse.',
            explain: 'elles imaginaient.',
            explainZh: 'imaginaient。'
          },
          {
            id: 'dt10a8_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8 (Negation!): Tex et Edouard ___ à obtenir des ingrédients français. (ne pas penser — imparfait)',
            promptZh: 'Tex 原题 #8：Tex 和 Edouard 当时根本没想过去买法式食材（否定 Imparfait：ne... pas）：',
            answers: ['ne pensaient pas'],
            hint: 'ne + pensaient + pas.',
            audio: 'Tex et Edouard ne pensaient pas à obtenir ces ingrédients.',
            explain: 'ne pensaient pas.',
            explainZh: '否定句夹在变位动词两边：ne pensaient pas。'
          },
          {
            id: 'dt10a8_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tammy : Bette ___ de mauvaise humeur hier soir ! (être — imparfait)',
            promptZh: 'Tex 原题 #9：Bette 昨晚心情超级差（描述情绪状态 être）：',
            answers: ['était'],
            hint: 'Mental/emotional state in the past → était.',
            audio: 'Bette était de mauvaise humeur hier soir !',
            explain: 'Mood / state of being in the past → était.',
            explainZh: '描述昨晚的持续情绪状态，用 était。'
          },
          {
            id: 'dt10a8_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tammy : Tex et moi, nous ___ très contents à Lyon. (être — imparfait)',
            promptZh: 'Tex 原题 #10：Tex 和我在里昂时都很开心（être，nous）：',
            answers: ['étions'],
            hint: 'nous étions.',
            audio: 'Tex et moi, nous étions très contents à Lyon.',
            explain: 'State of feeling → nous étions.',
            explainZh: '过去的状态感受用 nous étions。'
          },
          {
            id: 'dt10a8_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11 (Negation!): Edouard : En France, je ___ ! (ne jamais grossir — imparfait)',
            promptZh: 'Tex 原题 #11：在法国时，我吃多少都从来不长胖！（grossir，带 -iss- + ne... jamais）：',
            answers: ['ne grossissais jamais'],
            hint: 'ne + grossissais + jamais!',
            audio: 'En France, je ne grossissais jamais !',
            explain: 'grossir (nous grossissons) → je ne grossissais jamais.',
            explainZh: 'grossir 是规则 -ir，ne grossissais jamais。'
          },
          {
            id: 'dt10a8_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Dans son enfance, Joe-Bob ___ toujours ses devoirs. (perdre — imparfait)',
            promptZh: 'Tex 原题 #12：小时候，Joe-Bob 总是弄丢他的作业（perdre，3 单）：',
            answers: ['perdait'],
            hint: 'perd- + -ait = perdait.',
            audio: 'Dans son enfance, Joe-Bob perdait toujours ses devoirs.',
            explain: 'Childhood recurring habit → perdait.',
            explainZh: '童年习惯动作 → perdait。'
          }
        ],
        related: [
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_7', label: 'Back to 10A.7 Imparfait Formation' },
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_9', label: '10A.9 Imparfait Wishes & Suggestions' }
        ]
      },

      /* =========================================================
         PAGE 10A.9: IMPARFAIT IDIOMATIC USES (tap7)
      ========================================================= */
      {
        id: 't10a_9',
        code: '10A.9',
        group: 'Imparfait & Narration',
        shortTitle: 'Imparfait: Si on...? & Si seulement!',
        title: 'Idiomatic Imparfait: Suggestions ("Si on… ?"), Wishes ("Si seulement… !") & Past Duration (depuis)',
        titleZh: '未完成过去时（三）特殊高分用法：提建议（Si on… ?）、表感叹愿望（Si seulement… !）与 depuis 过去持续',
        estMin: 3,
        summary: 'Discover three surprising ways Imparfait talks about the PRESENT or FUTURE: (1) SUGGESTIONS with "Si on + Imparfait ?" ("What if we bought a Harley-Davidson?" → "Si on achetait une Harley ?"); (2) WISHES with "Si (seulement) + Imparfait !" ("If only we had more money!" → "Si seulement on avait plus d’argent !"); (3) CONTINUOUS DURATION IN THE PAST with "depuis" ("J’attendais depuis une heure" = had been waiting for an hour when...). Note question mark = suggestion vs. exclamation = wish!',
        summaryZh: '未完成过去时（Imparfait）不仅能讲过去，在法语口语和 TCF 听力/口语 Task 2 里还有三大**指代现在或将来**的地道习惯句式：① **`Si on + Imparfait ?`（表委婉提建议**，“要不咱们……怎么样？”）；② **`Si (seulement) + Imparfait !`（表强烈愿望或感叹**，“要是……该多好啊！”）；③ **`depuis + Imparfait`（表示在过去某时刻之前“已经持续了一段时间”**）！注意口语中只靠问号（建议）与感叹号（遗憾愿望）区分前两者！',
        cheatSummary: [
          { label: 'Suggestion vs. Wish With "si + Imparfait"', rule: 'SUGGESTION (?): "Si on allait au cinéma ?" ("What about going to the movies?"). WISH (!): "Si seulement j’avais plus de temps !" ("If only I had more time!"). Notice NEITHER needs a second conditional clause!', ruleZh: '两个不用主句的单独 si 从句：① 提议（问号）：Si on + Imparfait ?（“不如咱们……？”）；② 感叹愿望（叹号）：Si seulement + Imparfait !（“要是……就好了！”）。' },
          { label: 'depuis + Imparfait = "had been doing"', rule: 'Just as "depuis + Present" means "have been doing", "depuis + Imparfait" means "HAD been doing (up to a past point)": "Il pleuvait depuis deux heures quand nous sommes sortis."', ruleZh: '时间推移：depuis + 现在时 = 现在已经做了多久；depuis + Imparfait = 过去某时刻为止“已经持续了多久”！' }
        ],
        sections: [
          {
            id: 't10a9_idioms',
            heading: '1. Suggestions ("What if...?") vs. Wishes ("If only...!")',
            headingZh: '一、Si on… ? 提建议 与 Si seulement… ! 许愿望',
            lead: 'Listen carefully to Tammy and Tex’s wish-list banter: notice that even though they are daydreaming about RIGHT NOW or TOMORROW (a Suburban, a Harley, a tattoo), French puts the verb inside "si" in the Imparfait:',
            leadZh: '看 Tammy 和 Tex 异想天开买车、纹身的对话，记住 `si` 后面哪怕幻想“如果现在/将来”，也要放进 Imparfait 里：',
            cartoon: {
              src: './assets/tex_cartoons/tap7_harley.gif',
              alt: 'Tex et Tammy achètent ou rêvent d’une Harley Davidson',
              caption: 'Tammy : Si on achetait une grosse Suburban ? — Tex : Si on achetait une Harley Davidson ! Si seulement je pouvais avoir une moto !',
              captionZh: '要不咱们买辆大越野（Si on achetait… ?）？— 不如买辆哈雷（Harley）！要是能有辆摩托该多好啊（Si seulement je pouvais… !）！'
            },
            table: {
              headers: ['Structure', 'Punctuation / Tone', 'Meaning', 'Tex Example'],
              rows: [
                { cols: ['Si on + Imparfait ?', '? (rising question)', 'What if we...? / Shall we...?', 'Si on achetait une Harley Davidson ?'], audio: 'Si on achetait une Harley Davidson ?' },
                { cols: ['Si je / tu + Imparfait ?', '? (suggestion / idea)', 'What if I...? / What about...?', 'Si je me faisais tatouer ?'], audio: 'Si je me faisais tatouer ?' },
                { cols: ['Si (seulement) + subj. + Imparfait !', '! (wistful exclamation)', 'If only...!', 'Si seulement on avait plus d’argent !'], audio: 'Si seulement on avait plus d’argent !' },
                { cols: ['Imparfait + depuis + duration', 'Narrative past', 'had been doing... for...', 'J’habitais à Lyon depuis deux ans quand...'], audio: 'J’attendais depuis vingt minutes quand il est arrivé.' }
              ]
            },
            examples: [
              { fr: 'Tammy : Si on achetait une grosse Suburban ? — Ah, si seulement mes parents nous prêtaient de l’argent !', en: 'First = friendly proposal (?); second = wistful wish (!)', zh: '问句 Si on... ? 是极自然客气的提议（TCF 口语 Task 2 提方案神器！）；叹句 Si seulement... ! 表真希望现在就能……', tag: 'Proposal vs. Wish' },
              { fr: 'Tex : Si seulement je pouvais avoir une moto !', en: 'Same pattern feeds directly into Conditionnel in Ch 10D!', zh: '这其实也是后面将要学的“Si + Imparfait”虚拟/条件系统的简化独立版！', tag: 'Preview to Si-Clause' }
            ],
            quickCheck: {
              prompt: 'In TCF Speaking Task 2 (discussing options with a friend), how do you naturally propose "What if we went to a French restaurant tonight?"',
              promptZh: 'TCF 口语第二题跟朋友商量计划，想礼貌而自然地提议“要不我们今晚去吃法餐怎么样？”，选哪句最地道？',
              options: [
                'Si on allait dans un restaurant français ce soir ?',
                'Si nous irons dans un restaurant français ce soir ?',
                'Si on va aller dans un restaurant français ?',
                'Si seulement nous allons au restaurant !'
              ],
              answerIdx: 0,
              explain: '"Si on + Imparfait ?" ("Si on allait... ?") is THE most authentic everyday French way to make a friendly suggestion! Remember: NEVER put futur (*irons) right after "si"!',
              explainZh: '“Si on + Imparfait ?”（Si on allait... ?）是法语口语提议绝对高频金句！同时牢记：条件句的 si 后面**绝对不接将来时**（*Si nous irons 语法错）！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10a9_d1',
            kind: 'fib',
            prompt: 'Tex Wish #1 (on / regarder): Si seulement on ___ une vidéo !',
            promptZh: 'Tex 原题（愿望句）#1：要是咱们现在能看个录像该多好啊！（on + regarder）：',
            answers: ['regardait'],
            hint: 'on + Imparfait = regardait.',
            audio: 'Si seulement on regardait une vidéo !',
            explain: 'Si seulement on regardait...',
            explainZh: 'on 配第三人称单数 Imparfait → regardait。'
          },
          {
            id: 'dt10a9_d2',
            kind: 'fib',
            prompt: 'Tex Wish #2 (je / être): Ah, si seulement j’___ plus mince ! (être — irregular!)',
            promptZh: 'Tex 原题 #2：唉，要是我能再苗条点该多好！（je + être）：',
            answers: ['étais'],
            hint: 'j’ + être in Imparfait → étais!',
            audio: 'Ah, si seulement j’étais plus mince !',
            explain: 'être Imparfait stem ét- → j’étais.',
            explainZh: 'être 的未完成过去时第一人称单数：étais。'
          },
          {
            id: 'dt10a9_d3',
            kind: 'fib',
            prompt: 'Tex Wish #3 (nous / être): Si seulement nous ___ déjà en vacances !',
            promptZh: 'Tex 原题 #3：要是我们现在已经在度假就好了！（nous + être）：',
            answers: ['étions'],
            hint: 'nous étions.',
            audio: 'Si seulement nous étions déjà en vacances !',
            explain: 'nous étions.',
            explainZh: 'nous 配 étions。'
          },
          {
            id: 'dt10a9_d4',
            kind: 'fib',
            prompt: 'Tex Wish #4 (tu / venir): Si seulement tu ___ danser avec moi ! (venir)',
            promptZh: 'Tex 原题 #4：要是你能来跟我跳支舞就好了！（tu + venir）：',
            answers: ['venais'],
            hint: 'nous venons → ven- + -ais = venais!',
            audio: 'Si seulement tu venais danser avec moi !',
            explain: 'Single -n- in Imparfait: tu venais.',
            explainZh: 'venir 从 nous venons 取词干 ven-（单 n）→ venais。'
          },
          {
            id: 'dt10a9_d5',
            kind: 'fib',
            prompt: 'Tex Wish #5 (Tex / penser): Ah, si seulement Tex ___ à moi ! (penser)',
            promptZh: 'Tex 原题 #5：唉，要是 Tex 心里想着我就好了！（Tex + penser）：',
            answers: ['pensait'],
            hint: 'Tex (= il) + pensait.',
            audio: 'Ah, si seulement Tex pensait à moi !',
            explain: 'il pensait.',
            explainZh: '第三人称单数 pensait。'
          },
          {
            id: 'dt10a9_d6',
            kind: 'fib',
            prompt: 'Tex Wish #6 (je / avoir): Si seulement j’___ plus de temps ! (avoir)',
            promptZh: 'Tex 原题 #6：要是我有更多时间就好了！（je + avoir）：',
            answers: ['avais'],
            hint: 'nous avons → av- + -ais = avais.',
            audio: 'Si seulement j’avais plus de temps !',
            explain: 'j’avais.',
            explainZh: 'j’avais。'
          },
          {
            id: 'dt10a9_d7',
            kind: 'fib',
            prompt: 'Tex Wish #7 (vous / inviter): Si seulement vous ___ des amis à la maison ! (inviter)',
            promptZh: 'Tex 原题 #7：要是你们在家里多请些朋友来玩就好了！（vous + inviter）：',
            answers: ['invitiez'],
            hint: 'vous invitiez.',
            audio: 'Si seulement vous invitiez des amis à la maison !',
            explain: 'vous invitiez.',
            explainZh: 'vous 词尾固定 -iez → invitiez。'
          },
          {
            id: 'dt10a9_d8',
            kind: 'fib',
            prompt: 'Tex Wish #8 (on / se marier — watch -ier? on is 3rd sg.): Si seulement on ___ ! (se marier)',
            promptZh: 'Tex 原题 #8：要是我们能结婚就好了！（on + se marier）：',
            answers: ['se mariait'],
            hint: 'reflexive se + mariait (single i on 3rd sg.).',
            audio: 'Si seulement on se mariait !',
            explain: 'on se mariait.',
            explainZh: 'on 配反身代词 se，第三人称单数 → se mariait。'
          },
          {
            id: 'dt10a9_d9',
            kind: 'fib',
            prompt: 'Tex Wish #10 (Opelousas / se trouver): Si Opelousas ___ plus près d’Austin ! (se trouver)',
            promptZh: 'Tex 原题 #10：要是 Opelousas 小镇离奥斯汀再近一点就好了！（se trouver，3 单）：',
            answers: ['se trouvait'],
            hint: 'se trouvait.',
            audio: 'Si Opelousas se trouvait plus près d’Austin !',
            explain: 'Opelousas (= ville/sg.) → se trouvait.',
            explainZh: '城市单数作主语 → se trouvait。'
          },
          {
            id: 'dt10a9_d10',
            kind: 'fib',
            prompt: 'Tex Wish #11 (Corey / ne pas boire): Si seulement Corey ___ d’insecticide ! (ne pas boire)',
            promptZh: 'Tex 原题 #11：要是 Corey 不喝杀虫剂就好了！（否定 Imparfait：ne buvait pas）：',
            answers: ['ne buvait pas'],
            hint: 'ne + buvait + pas!',
            audio: 'Si seulement Corey ne buvait pas d’insecticide !',
            explain: 'ne buvait pas.',
            explainZh: 'ne buvait pas。'
          },
          {
            id: 'dt10a9_d11',
            kind: 'fib',
            prompt: 'Tex Wish #12 (les tatous / ne pas être): Si les tatous ___ snobs ! (ne pas être — plural)',
            promptZh: 'Tex 原题 #12：要是犰狳们没那么傲娇就好了！（les tatous 复数 + 否定 être）：',
            answers: ["n'étaient pas", 'n’étaient pas'],
            hint: 'ne + étaient + pas → n’étaient pas.',
            audio: 'Si les tatous n’étaient pas snobs !',
            explain: 'les tatous n’étaient pas snobs !',
            explainZh: '复数阴/阳性主语用 n’étaient pas。'
          },
          {
            id: 'dt10a9_d12',
            kind: 'choice',
            prompt: 'Meaning contrast: "Quand j’habitais à Montréal, il pleuvait depuis une heure quand je suis sorti." What does "pleuvait depuis une heure" mean?',
            promptZh: '理解过去时态时间跨度：“Il pleuvait depuis une heure quand je suis sorti.” 的正确意思是？',
            options: [
              'It had already been raining for an hour when I went out.',
              'It rained for one hour total after I went out.',
              'If only it would rain for one hour.',
              'It just stopped raining.'
            ],
            answerIdx: 0,
            audio: 'Il pleuvait depuis une heure quand je suis sorti.',
            explain: '"depuis + Imparfait" describes an action that started earlier and WAS STILL GOING ON at that past moment ("had been raining for an hour").',
            explainZh: 'depuis + Imparfait 表示“当我出门那一刻，雨已经持续下了一个小时了（当时仍在下）”！'
          }
        ],
        related: [
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_8', label: 'Back to 10A.8 Imparfait: States & Habits' },
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_10', label: '10A.10 Narration: Passé Composé vs. Imparfait' }
        ]
      },

      /* =========================================================
         PAGE 10A.10: PAST NARRATION — PC VS. IMPARFAIT (tap8)
      ========================================================= */
      {
        id: 't10a_10',
        code: '10A.10',
        group: 'Imparfait & Narration',
        shortTitle: 'Narration: PC vs. Imparfait',
        title: 'Past Narration Mastery: Foreground Events (Passé Composé) vs. Background Setting (Imparfait)',
        titleZh: '第十章 A 压轴：复合过去时 vs. 未完成过去时深度叙事法则（背景/中断/限定时长与词义转换）',
        estMin: 5,
        summary: 'Master the most important narrative distinction in French (tap8): (1) ASPECT: Imparfait = background ("What was going on / used to happen"), Passé Composé = foreground events ("What happened next"); (2) TRIGGER ADVERBS: toujours / chaque jour / d’habitude / autrefois (usually Imp.) vs. tout à coup / soudain / puis / enfin / un jour (usually PC — EXCEPT "un jour" sets a scene if describing an interrupted action: "Un jour, Tex vendait des T-shirts quand il a été arrêté!"); (3) DURATION: indefinite ("autrefois") = Imp. vs. exact measured length ("pendant un an", "de 1997 à 1998") = PC!; (4) VERB MEANING SHIFTS: "j’avais 15 ans" (was 15, Imp.) vs. "j’ai eu 18 ans" (turned 18, PC!).',
        summaryZh: '攻克法语 A2–B2 叙事与 TCF 听力/阅读最大难点——**`Passé Composé (PC)` 与 `Imparfait (Imp.)` 终极区分体系**：① **舞台与剧情法则**：`Imparfait` 负责铺背景、描写环境与习惯（当时正在干嘛）；`Passé Composé` 负责推进具体事件、打断动作（突然发生了什么）；② **精确时长 vs 模糊背景**：凡标明**具体起止或长度的时间段**（`pendant un an`、`de 1997 à 1998`、`deux heures`），哪怕看似“持续状态”，也一律改用 **PC**（`Il a été vendeur pendant un an`）！③ **特殊状态动词进 PC 会变“瞬间转换”**（如 `j’avais 15 ans` 我那时 15 岁 vs `j’ai eu 18 ans` 我**到了/年满** 18 岁那天！`savoir`: 以前知道 vs `j’ai su`: 突然得知！）；④ **全语境大于单个时间词**（例如 *un jour* 后面是正在卖衣服被打断，依然可用 Imparfait：`Un jour, Tex vendait des T-shirts quand il a été arrêté`）。',
        cheatSummary: [
          { label: '4 Narrative Discriminators (PC vs. Imp.)', rule: '1) Scene/Background/Habit = IMP; Sequential/Interrupting Event = PC. 2) Indefinite time ("autrefois") = IMP; Bounded duration ("pendant 2 ans", "de 1997 à 1998") = PC! 3) Verbs of state in PC signal a SUDDEN CHANGE ("avais 15 ans" vs "ai eu 18 ans"). 4) Always read full clause context!', ruleZh: '四大判别维度：① 背景/习惯用 Imp，推进/打断事件用 PC；② 模糊时期（autrefois）用 Imp，**明确边界时长（pendant 2 ans, de X à Y）改用 PC**！③ avoir/savoir/connaître 用 PC 表示“变态/瞬间得知/初次认识”；④ 看整句逻辑而非死背单个副词！' },
          { label: 'Adverb Signal Guide', rule: 'IMP helpers: autrefois, à l’époque, d’habitude, chaque jour, toujours, souvent. PC helpers: soudain, tout à coup, brusquement, tout de suite, d’abord, puis, ensuite, enfin.', ruleZh: '信号副词参考：习惯类（d’habitude, chaque jour, autrefois, à l’époque）多配 Imp；突转递进类（soudain, tout à coup, brusquement, puis, enfin）多配 PC。' }
        ],
        sections: [
          {
            id: 't10a10_contrast',
            heading: '1. Bounded Duration, State-Change Verbs & Context Over Keywords',
            headingZh: '一、明确时间段（PC）vs. 状态改变与《Tex 童年漂流记》',
            lead: 'Notice the sharp contrast in Tammy’s two birthdays ("Quand j’avais 15 ans..." vs. "Quand j’ai eu 18 ans...") AND in Tex’s two sentences starting with "Un jour":',
            leadZh: '看这两张漫画里的精妙对比——同一个动词、同一个副词 `un jour`，因为背后动作是“持续状态”还是“瞬间发生/转折”，时态立刻切换：',
            cartoon: {
              src: './assets/tex_cartoons/tap8_15-18.gif',
              alt: 'Quand Tammy avait 15 ans vs quand elle a eu 18 ans',
              caption: 'Tammy : Quand j’avais 15 ans, j’habitais à Fort Worth. Quand j’ai eu 18 ans, j’ai déménagé à Austin !',
              captionZh: '15 岁那会儿状态一直住在沃斯堡（avais / habitais，Imp）；年满 18 岁那一刻突然搬家去了奥斯汀（ai eu / ai déménagé，PC）！'
            },
            table: {
              headers: ['Dimension', 'Imparfait (Background / Ongoing)', 'Passé Composé (Event / Bounded)'],
              rows: [
                { cols: ['Core Question', 'What was going on? / How were things?', 'What happened? (next step)'], audio: 'Avant, Tammy habitait à Fort Worth, puis elle a déménagé.' },
                { cols: ['Time Duration', 'Indefinite: Avant, autrefois, quand il était enfant...', 'Exact start/end: Pendant un an, de 1997 à 1998, trois fois'], audio: 'De 1997 à 1998, Tex a été vendeur de T-shirts.' },
                { cols: ['State Verb Shift (avoir/savoir/connaître)', 'j’avais (was age) · je savais (knew) · je connaissais', 'j’ai eu 18 ans (turned 18) · j’ai su (found out!) · j’ai connu (met!)'], audio: 'Quand j’ai eu dix-huit ans, j’ai déménagé.' },
                { cols: ['Adverbs', 'toujours, souvent, chaque matin, d’habitude', 'soudain, tout à coup, brusquement, puis, enfin'], audio: 'Tout d’un coup, il est tombé.' },
                { cols: ['"Un jour" Context Test!', 'Un jour, Tex vendait des T-shirts quand il a été arrêté.', 'Un jour, les autorités ont expulsé Tex.'], audio: 'Un jour, Tex vendait des T-shirts quand il a été arrêté.' }
              ]
            }
          },
          {
            id: 't10a10_story',
            heading: '2. Story Reading: Tex’s French Childhood & 1998 Plot Twist',
            headingZh: '二、故事全景精读：背景与剧情线交织示范',
            lead: 'Read Tex’s real origin story below — watch how the Imparfait paints the opening landscape ("était", "habitait", "aimait") before the Passé Composé takes over the action ("s’est perdu", "a trouvé", "s’est précipité", "a pris", "est arrivé"), then shifts back to Imparfait teen views before 1998’s shock:',
            leadZh: '完整读一遍 Tex 童年被打包运往法国、长大成为萨特信徒、却在 1998 年突然发现自己是美国犰狳的故事，体会法语过去叙事的节奏韵律：',
            cartoon: {
              src: './assets/tex_cartoons/tap8_disciple.gif',
              alt: 'Quand Tex était adolescent en France, il se considérait comme un disciple de Sartre',
              caption: 'Quand il était adolescent, il se considérait comme un disciple de Sartre. Mais en 1998, sa vie a changé quand il a découvert la vérité !',
              captionZh: '青春期长期自诩为萨特门徒（était / se considérait / détestait，Imp）；1998 年真相大白改变了人生（a changé / a découvert，PC）！'
            },
            examples: [
              { fr: 'Quand Tex était tout petit, il habitait près de Houston. Ce petit tatou aimait faire de longues promenades.', en: 'Childhood scenery & habitual traits → Imparfait!', zh: '开头三连 Imparfait（était / habitait / aimait）勾勒温暖背景画卷。', tag: 'Opening Scene (Imp.)' },
              { fr: 'Un jour, il s’est perdu. Heureusement, il a trouvé l’aéroport. Tandis qu’il examinait un avion, un homme l’a brusquement pris et jeté avec les bagages !', en: 'examinait (ongoing) interrupted by s’est perdu / a trouvé / a pris / a jeté (PC)!', zh: '一边正在看飞机（examinait，Imp），突然一个人一把抓起扔进行李舱（a pris / a jeté，PC）！', tag: 'Interruption (Imp + PC)' },
              { fr: 'De 1997 à 1998, Tex a été vendeur. Ensuite en 1998, sa vie a changé quand il a découvert que ses parents étaient américains.', en: 'Exact span "De 1997 à 1998" = PC ("a été")! Sudden realization = PC ("a découvert") + underlying fact ("étaient", Imp.)!', zh: '明确起止年份（De 1997 à 1998）用 PC（a été）；1998 年突然发现（a découvert，PC）父母一直“是（étaient，Imp）”美国人！', tag: 'Duration & Discovery' }
            ],
            quickCheck: {
              prompt: 'Look at "Pendant trois ans, elle ___ au Québec, mais aujourd’hui elle habite à Ottawa." Even though living somewhere is a "state", why must we choose Passé Composé?',
              promptZh: '虽然“住在某地（habiter）”本身看似持续状态，但加上 “Pendant trois ans（整整三年，明确起止完结段）” 后，应该选哪句？',
              options: [
                'Pendant trois ans, elle a habité au Québec. (Exact bounded span = PC!)',
                'Pendant trois ans, elle habitait au Québec.',
                'Pendant trois ans, elle est habitée au Québec.',
                'Pendant trois ans, elle venait d’habiter au Québec.'
              ],
              answerIdx: 0,
              explain: 'A clearly bounded time period with a finished start and end ("pendant trois ans", "de 1997 à 1998") triggers Passé Composé ("a habité")!',
              explainZh: '这是 TCF 最爱考的规则之一：只要有明确的封闭时间长度（pendant trois ans / de X à Y / deux semaines），即使动词是 être/habiter/travailler，一律用 Passé Composé（a habité）！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10a10_d1',
            kind: 'choice',
            prompt: 'Meaning shift ("connaître"): "J’ai connu Paul en 2020" vs. "Je connaissais bien Paul". Which means "I MET Paul (for the first time) in 2020"?',
            promptZh: '动词词义转换（connaître）：哪一句表达的是“我在 2020 年（初次）认识了 Paul”？',
            options: [
              'J’ai connu Paul en 2020. (PC = first met)',
              'Je connaissais Paul en 2020.',
              'Je savais Paul en 2020.',
              'J’avais connu Paul.'
            ],
            answerIdx: 0,
            audio: 'J’ai connu Paul en 2020.',
            explain: '"connaître" in Imparfait = knew; in Passé Composé = met for the first time! Similarly: "savoir" in PC = found out!',
            explainZh: 'connaître 用 Imparfait 是“早就认识”；用 Passé Composé 则是“那年初次结识（met）”！同理 savoir 用 PC 表“当时突然得知”。'
          },
          {
            id: 'dt10a10_d2',
            kind: 'fib',
            prompt: 'Exact duration ("être"): De 2020 à 2023, il ___ professeur à Montréal. (être — PC or Imp.?)',
            promptZh: '明确年份跨度：“从 2020 年到 2023 年（已完结时段），他在蒙特利尔当老师”（填入 être 的正确过去时态）：',
            answers: ['a été'],
            hint: 'Closed period "De 2020 à 2023" → Passé Composé (a été)!',
            audio: 'De 2020 à 2023, il a été professeur à Montréal.',
            explain: 'Bounded start & end ("De 2020 à 2023") triggers Passé Composé: a été.',
            explainZh: '出现封闭起止时间段 De 2020 à 2023，必须用 Passé Composé → a été！'
          },
          {
            id: 'dt10a10_d3',
            kind: 'fib',
            prompt: 'Birthday milestone ("avoir"): Quand Tammy ___ dix-huit ans, elle a déménagé à Austin. (avoir — turning 18!)',
            promptZh: '课文原句：“当 Tammy 年满（变成）18 岁那天，她搬去了奥斯汀。”（avoir 表状态转折）：',
            answers: ['a eu'],
            hint: 'Turning 18 is a sudden event/change → Passé Composé (a eu)!',
            audio: 'Quand Tammy a eu dix-huit ans, elle a déménagé à Austin.',
            explain: 'j’avais 15 ans (state = Imp.) vs. j’ai eu 18 ans (turned 18 = PC!).',
            explainZh: '“当时 15 岁”是状态（avais），“年满 18 岁那一刻”用 Passé Composé（a eu）！'
          },
          {
            id: 'dt10a10_d4',
            kind: 'fib',
            prompt: 'Interrupted background: Un jour, Tex ___ des T-shirts à Paris quand il a été arrêté. (vendre)',
            promptZh: '虽有 un jour 但描绘被打断的背景动作：“那天 Tex 正在巴黎卖 T 恤时被抓了”（vendre）：',
            answers: ['vendait'],
            hint: 'Ongoing background interrupted by "a été arrêté" → Imparfait (vendait)!',
            audio: 'Un jour, Tex vendait des T-shirts à Paris quand il a été arrêté.',
            explain: 'Even with "un jour", selling T-shirts was ONGOING when interrupted → vendait!',
            explainZh: '不要只看 un jour 就无脑选 PC！卖 T 恤是正在进行时被打断的背景，用 vendait！'
          },
          {
            id: 'dt10a10_d5',
            kind: 'fib',
            prompt: 'Sudden interruption: Je dormais tranquillement quand le réveil ___ ! (sonner)',
            promptZh: '正在安睡时闹钟突然响了（sonner，打断动作）：',
            answers: ['a sonné'],
            hint: 'Sudden interrupting event → Passé Composé (a sonné)!',
            audio: 'Je dormais tranquillement quand le réveil a sonné.',
            explain: 'dormais (background Imp.) interrupted by a sonné (PC event).',
            explainZh: '打断正在进行的动作，用 Passé Composé：a sonné！'
          },
          {
            id: 'dt10a10_d6',
            kind: 'fib',
            prompt: 'Story opening (weather & childhood): Quand Tex ___ tout petit, il faisait souvent chaud à Houston. (être)',
            promptZh: '故事开头背景描写：“Tex 还很小的时候，休斯顿经常很热”（être）：',
            answers: ['était'],
            hint: 'Childhood background state → était.',
            audio: 'Quand Tex était tout petit, il faisait souvent chaud.',
            explain: 'Childhood state → était.',
            explainZh: '童年背景状态用 était。'
          },
          {
            id: 'dt10a10_d7',
            kind: 'fib',
            prompt: 'Story plot step: Tout d’un coup, l’homme ___ Tex et l’a jeté dans l’avion. (prendre)',
            promptZh: '故事推进动作：“突然之间（Tout d’un coup），那个男人一把抓起了 Tex……”（prendre）：',
            answers: ['a pris'],
            hint: '"Tout d’un coup" + plot event → Passé Composé (a pris).',
            audio: 'Tout d’un coup, l’homme a pris Tex.',
            explain: 'Sudden plot action → a pris.',
            explainZh: '突然发生的情节动作 → a pris。'
          },
          {
            id: 'dt10a10_d8',
            kind: 'fib',
            prompt: 'Realization vs. underlying fact: En 1998, Tex ___ que ses parents étaient américains ! (découvrir)',
            promptZh: '剧情转折：“1998 年，Tex 突然发现他的父母原来是美国人！”（découvrir，不规则过去分词 découvert）：',
            answers: ['a découvert'],
            hint: 'Sudden discovery in 1998 → Passé Composé (a découvert)!',
            audio: 'En 1998, Tex a découvert que ses parents étaient américains.',
            explain: 'a découvert (PC event) + étaient américains (Imp. ongoing fact).',
            explainZh: '发现那一刻是事件用 PC（a découvert），父母一直是美国人是背景真相用 Imp（étaient）。'
          },
          {
            id: 'dt10a10_d9',
            kind: 'choice',
            prompt: 'Which set of adverbs points MOST strongly toward Passé Composé?',
            promptZh: '下面哪一组时间副词最常伴随着**复合过去时（Passé Composé）**出现？',
            options: [
              'soudain, tout à coup, brusquement, puis, enfin',
              'autrefois, d’habitude, chaque matin, à l’époque',
              'toujours, tous les étés, généralement',
              'maintenant, en ce moment'
            ],
            answerIdx: 0,
            audio: 'Soudain, la porte s’est ouverte.',
            explain: 'soudain, tout à coup, brusquement, d’abord, puis, ensuite, enfin signal sudden or sequential PC events.',
            explainZh: 'soudain / tout à coup / brusquement（突然）和 puis / enfin（接着/终于）是复合过去时最典型信号。'
          },
          {
            id: 'dt10a10_d10',
            kind: 'fib',
            prompt: 'Ongoing vs. event ("savoir"): Hier soir, j’___ la bonne nouvelle par téléphone ! (savoir — "found out")',
            promptZh: '词义转换实战：“昨晚我通过电话**得知了**（found out）这个好消息！”（用 savoir 表“突然获悉”）：',
            answers: ['ai su'],
            hint: 'savoir in PC ("found out") → j’ai su!',
            audio: 'Hier soir, j’ai su la bonne nouvelle par téléphone !',
            explain: 'je savais (I knew) vs. j’ai su (I found out / learned at that moment).',
            explainZh: 'savais = 本就知道；ai su = 当时突然获知、听说！'
          },
          {
            id: 'dt10a10_d11',
            kind: 'fib',
            prompt: 'Double check pronoun agreement in narrative: "Tex a écrit une lettre, puis il l’___ à la poste." (poster — watch l’ = la lettre!)',
            promptZh: '叙事综合复习：“Tex 写了一封信（une lettre，阴性），然后把它寄出去了”（l’ 提前，注意 poster 配合）：',
            answers: ['a postée'],
            hint: 'l’ (= la lettre, fem. sg.) precedes "a" → a postée (+e)!',
            audio: 'Il l’a postée à la poste.',
            explain: 'Completed action (PC with avoir) + preceding fem. COD l’ → a postée.',
            explainZh: '顺次动作用复合过去时，且前置直宾 l’ 指阴性 une lettre，加 -e → a postée。'
          },
          {
            id: 'dt10a10_d12',
            kind: 'choice',
            prompt: 'Complete TCF B1 narrative: "Autrefois je ___ beaucoup de sucre, mais l’année dernière j’___ d’arrêter."',
            promptZh: '综合题：“以前我总是吃很多糖，但去年我决定戒掉了。”选出搭配完美的一项：',
            options: [
              'mangeais (Imp. past habit) ... ai décidé (PC decision event)',
              'ai mangé ... décidais',
              'mangeais ... décidais',
              'ai mangé ... ai décidé'
            ],
            answerIdx: 0,
            audio: 'Autrefois je mangeais beaucoup de sucre, mais l’année dernière j’ai décidé d’arrêter.',
            explain: '"Autrefois" (past habit) = Imparfait "mangeais"; "l’année dernière" (specific turning-point decision) = Passé Composé "ai décidé"!',
            explainZh: 'Autrefois 表过去长久习惯（mangeais，Imp），去年某个具体转折点做出决定（ai décidé，PC）！'
          }
        ],
        related: [
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_9', label: 'Back to 10A.9 Imparfait Wishes & Suggestions' },
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_1', label: 'Review 10A.1 Foundations' }
        ]
      }
    ]
  });
})();
