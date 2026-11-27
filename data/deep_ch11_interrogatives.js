(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch11_interrogatives',
    code: 'Ch 11',
    level: 'A1–B2',
    category: 'interrogatives',
    icon: '❓',
    title: 'Interrogatives: Les Questions (Full Mastery)',
    titleZh: '第十一章 · 疑问句全解（三种语域、倒装与加 t、quel、qui/que/quoi、lequel 与疑问副词）',
    subtitle: 'Tex-style deep mastery of Chapter 11 (int1–int7 across 7 bite-sized pages): yes/no vs. information questions, the 3 French registers (intonation / est-ce que / inversion + tag n’est-ce pas), subject-verb inversion rules (euphonic -t-, complex noun inversion, compound tenses, Est-ce / Y a-t-il), interrogative & exclamative quel(le)(s), the complete people/things matrix (qui / qui est-ce qui / que / qu’est-ce qui / quoi), lequel & à/de contractions, and all question adverbs (où, quand, comment, pourquoi, combien de) — with 11 original Tex cartoons & 84 drills.',
    subtitleZh: '对标 Tex 原版第十一章（int1–int7 共 7 个轻松小页）：是非问 vs 信息问、法语三种提问语域（语调/est-ce que/倒装 + 反意疑问 n’est-ce pas）、主谓倒装细则（加 -t- 连音、名词双主语倒装、复合时态助动词倒装、Est-ce 与 Y a-t-il）、疑问及感叹形容词 quel(le)(s)、人物疑问代词全景矩阵（qui / qu’est-ce qui / qu’est-ce que / quoi）、lequel 系列及 à/de 缩合，以及全部疑问副词（où / quand / comment / pourquoi / combien de），配 11 张原版卡通与 84 题专练。',
    pages: [
      /* =========================================================
         PAGE 11.1: INTRO TO INTERROGATIVES (int1)
      ========================================================= */
      {
        id: 'i11_1',
        code: '11.1',
        group: 'Question Foundations',
        shortTitle: 'Intro & 3 French Registers',
        title: 'Les Questions: Yes/No vs. Information Questions & the 3 French Registers',
        titleZh: '疑问句总纲：是非问 vs 信息问，以及法语三大提问语域',
        estMin: 3,
        summary: 'French classifies every question into TWO families: (1) YES/NO QUESTIONS ("Questions fermées"), answered simply by "oui / non / si"; and (2) INFORMATION QUESTIONS ("Questions ouvertes"), triggered by a question word like "qui, que, où, quand, comment, pourquoi, combien, quel, lequel". Unlike English (which inserts "do/does/did"), French has NO "do" helper — instead, speakers pick ONE OF THREE REGISTERS depending on formality: (A) INTONATION (casual speech: statement order + rising voice: "Vous parlez français ?"); (B) EST-CE QUE (standard universal register: "Est-ce que vous parlez français ?", works with EVERY subject incl. "je" and every question word!); (C) INVERSION (formal writing/speech: "Parlez-vous français ?"). Plus, add "..., n’est-ce pas ?" as a tag question expecting confirmation ("don’t you / isn’t it?").',
        summaryZh: '法语全部疑问句分为两大类：① **一般疑问句（是非问）**——只需回答 `oui / non / si`；② **特殊疑问句（信息问）**——用“谁/什么/哪里/何时/怎么/为什么/多少/哪一个”索取具体信息。和英语必须加助动词 `do / does / did` 不同，法语靠**三大提问语域**切换正式度：① **语调疑问（日常口语最常见）**：陈述句语序不动，句末声调上扬（*Vous parlez français ?*）；② **`Est-ce que`（全场景万能标准体）**：句首加 `Est-ce que / qu’`（*Est-ce que vous parlez français ?*），连主语 `je` 也能轻松提问、绝不出错；③ **主谓倒装（书面正式/TCF 高分体）**：*Parlez-vous français ?*。此外，句末加 **`…, n’est-ce pas ?`** 构成反意确认问句（“对吧 / 不是吗？”）。',
        cheatSummary: [
          { label: 'The 3 Registers for Any Question', rule: '(1) Spoken / Informal: "Vous parlez français ?" (rising intonation). (2) Universal / Neutral: "Est-ce que vous parlez français ?" (safe everywhere!). (3) Formal: "Parlez-vous français ?" (inversion).', ruleZh: '同一句话的三种问法：口语语调（Vous parlez français ?）· 标准万能（Est-ce que vous parlez français ?）· 正式倒装（Parlez-vous français ?）。' },
          { label: 'Two Question Types + Tag Question', rule: 'Yes/No = answered with oui/si/non. Info Q = contains qui/que/où/quand/comment/pourquoi/combien/quel/lequel. Tag = "..., n’est-ce pas ?" (confirms yes!).', ruleZh: '是非问用 oui/si/non 作答；信息问自带疑问词；想求对方点头附和就在陈述句尾加 , n’est-ce pas ?！' }
        ],
        sections: [
          {
            id: 'i11_1_overview',
            heading: '1. Yes/No vs. Information Questions & Register Ladder',
            headingZh: '一、三大提问语域阶梯与四大疑问词工具箱',
            lead: 'Compare all four ways Tex asks "Do you speak French?" — notice there is NEVER a French equivalent of English "do / does / did":',
            leadZh: '背熟下表四个句子，一口气分清“语调 / est-ce que / 倒装 / n’est-ce pas”四种句型：',
            cartoon: {
              src: './assets/tex_cartoons/int1_parlez.gif',
              alt: 'Est-ce que vous parlez français ? Parlez-vous français ? Vous parlez français, n’est-ce pas ?',
              caption: 'Four ways to ask "Do you speak French?": Vous parlez français ? · Est-ce que vous parlez français ? · Parlez-vous français ? · Vous parlez français, n’est-ce pas ?',
              captionZh: '同一个意思的四种问法：语调升调（Vous parlez français ?）· 标准体（Est-ce que vous parlez…）· 正式倒装（Parlez-vous…）· 反意确认（…, n’est-ce pas ?）！'
            },
            table: {
              headers: ['Register / Structure', 'French Model', 'When to Use'],
              rows: [
                { cols: ['Intonation (Casual)', 'Vous parlez français ? (same word order!)', 'Everyday speech with friends/family (voice rises at end).'], audio: 'Vous parlez français ?' },
                { cols: ['Est-ce que (Standard)', 'Est-ce que vous parlez français ?', 'Safe in 100% of spoken & TCF listening/speaking situations!'], audio: 'Est-ce que vous parlez français ?' },
                { cols: ['Inversion (Formal)', 'Parlez-vous français ?', 'Formal letters, news interviews, TCF B2 essay & polite requests.'], audio: 'Parlez-vous français ?' },
                { cols: ['Tag Confirmation', 'Vous parlez français, n’est-ce pas ?', 'Seeking agreement ("You speak French, don’t you?").'], audio: 'Vous parlez français, n’est-ce pas ?' },
                { cols: ['Information Tools (11.4–11.7)', 'quel · qui / que / quoi · lequel · où / quand / comment / pourquoi / combien', 'Requires specific facts — cannot be answered with just "oui/non"!'], audio: 'Qui est Tex ? Quand est-il venu et comment a-t-il appris le français ?' }
              ]
            },
            quickCheck: {
              prompt: 'Which register works UNIVERSALLY in everyday AND standard TCF speaking (including with "je") without inversion pitfalls?',
              promptZh: '在日常口语和 TCF 口试中，哪种提问句式最通用（连主语 `je` 也不会别扭，且绝不会漏掉连字符/加 `t`）？',
              options: [
                'Est-ce que + normal Subject-Verb order ("Est-ce que je peux vous aider ?")',
                'Subject-Verb inversion with every single verb ("Mange-je ?")',
                'Translating English "do" with "faites" ("Faites-vous parler français ?")',
                'Always using "quel" at the start of yes/no questions'
              ],
              answerIdx: 0,
              explain: '"Est-ce que" (or "Est-ce qu’") keeps normal subject-verb order and works cleanly for every person (especially "je")!',
              explainZh: 'Est-ce que 保持陈述句正语序，对所有人称（尤其是 je：Est-ce que je peux...）都百搭零失误！法语中绝对不要用 faire 去凑英语的 do/does。'
            }
          }
        ],
        drills: [
          {
            id: 'dt11_1_d1',
            kind: 'fib',
            prompt: 'Convert to standard question with est-ce que: Tu parles français ? => ___ tu parles français ?',
            promptZh: '改写为标准疑问体（句首大写）：___ tu parles français ?',
            answers: ['Est-ce que'],
            hint: 'Est-ce que (keeps normal "tu parles" word order!).',
            audio: 'Est-ce que tu parles français ?',
            explain: 'Est-ce que tu parles français ?',
            explainZh: '在陈述句最前面直接加 **Est-ce que**。'
          },
          {
            id: 'dt11_1_d2',
            kind: 'fib',
            prompt: 'Elision before vowel: Il habite à Austin ? => ___ il habite à Austin ?',
            promptZh: '遇元音必须省音（句首大写）：___ il habite à Austin ?',
            answers: ["Est-ce qu'", 'Est-ce qu’'],
            hint: 'Est-ce que → Est-ce qu’ before il/elle/on!',
            audio: 'Est-ce qu’il habite à Austin ?',
            explain: 'Est-ce qu’il habite à Austin ? (que elides before vowel "i").',
            explainZh: 'que 遇到 il/elle/on 的元音开头必缩为 **Est-ce qu’**！'
          },
          {
            id: 'dt11_1_d3',
            kind: 'fib',
            prompt: 'Confirmation tag: Tex est français, ___ ? (don’t you agree / isn’t he?)',
            promptZh: '加上法语通用的反意确认尾巴（“对吧 / 是不是？”）：Tex est français, ___ ?',
            answers: ["n'est-ce pas", 'n’est-ce pas'],
            hint: 'Fixed tag regardless of verb or tense: n’est-ce pas!',
            audio: 'Tex est français, n’est-ce pas ?',
            explain: 'n’est-ce pas never changes — it works with every verb and tense!',
            explainZh: '无论前面是什么人称或时态，反意确认永远只用 **n’est-ce pas**（不像英语还要变 aren’t you / didn’t he）。'
          },
          {
            id: 'dt11_1_d4',
            kind: 'mcq',
            prompt: 'How do you identify an "Information Question" vs. a "Yes/No Question"?',
            promptZh: '“信息疑问句（Information question）”与“是非疑问句（Yes/No）”最本质的区别是：',
            options: [
              'Information questions contain a specific question word (où, quand, qui, que, comment…) and cannot be answered by just "oui/non".',
              'Information questions always use rising intonation with no question word.',
              'Information questions always end with "n’est-ce pas ?".',
              'Information questions always put "est-ce que" at the end.'
            ],
            answer: 0,
            audio: 'Comment êtes-vous venu au Canada ?',
            explain: 'Information questions seek specific facts via interrogative words (qui, que, où, quand, comment, pourquoi, combien, quel, lequel).',
            explainZh: '信息疑问句包含具体疑问词（qui/où/quand/comment…），不能只用 oui/non 敷衍回答。'
          },
          {
            id: 'dt11_1_d5',
            kind: 'fib',
            prompt: 'Polite formal inversion (vous): Est-ce que vous habitez à Montréal ? => ___-vous à Montréal ?',
            promptZh: '改为正式书面倒装问句：___-vous à Montréal ?（动词首字母大写）',
            answers: ['Habitez'],
            hint: 'Swap vous + habitez → Habitez-vous.',
            audio: 'Habitez-vous à Montréal ?',
            explain: 'Habitez-vous à Montréal ?',
            explainZh: '把动词提前与主语代词 vous 用连字符接起来：Habitez-vous !'
          },
          {
            id: 'dt11_1_d6',
            kind: 'fib',
            prompt: 'Register with "je" (asking permission politely): ___ je peux entrer ? (standard est-ce que!)',
            promptZh: '用第一人称 je 礼貌询问（标准安全体，绝不用难听的“倒装 je”）：___ je peux entrer ?',
            answers: ['Est-ce que'],
            hint: 'Always prefer "Est-ce que je peux..." rather than inverting "je"!',
            audio: 'Est-ce que je peux entrer ?',
            explain: 'Est-ce que je peux entrer ? (avoiding awkward "je" inversion!).',
            explainZh: '对 je 提问最推荐使用 **Est-ce que je peux…**（或特例 Puis-je…，其他普通动词几乎从不倒装 je）。'
          },
          {
            id: 'dt11_1_d7',
            kind: 'fib',
            prompt: 'Polite special 1st-person inversion (pouvoir!): "May I come in?" (formal alternative to Est-ce que je peux) => ___-je entrer ?',
            promptZh: '法语极少数允许 `je` 倒装的高雅固定表达：“我可以进来吗？” => ___-je entrer ?（pouvoir 特殊倒装词形）',
            answers: ['Puis'],
            hint: 'Formal fixed form of pouvoir with je = Puis-je ! (NEVER "Peux-je")',
            audio: 'Puis-je entrer ?',
            explain: 'Puis-je... ? is the formal survival for "je peux" (used at reception desks and TCF formal speaking!).',
            explainZh: '高分亮点！“我可以……吗”正式倒装固定为 **Puis-je… ?**（绝对不说 *Peux-je*）。'
          },
          {
            id: 'dt11_1_d8',
            kind: 'fib',
            prompt: 'Casual intonation question check: Turn "Tu as fini." into a spoken intonation question by filling the same verb: Tu ___ fini ?',
            promptZh: '日常语调提问只需末尾声调上扬，词序完全不变：Tu ___ fini ?',
            answers: ['as'],
            hint: 'Intonation keeps exact statement order: Tu as fini ? (just voice rises!).',
            audio: 'Tu as fini ?',
            explain: 'Word order does not change at all in rising-intonation questions!',
            explainZh: '语调疑问句词序与陈述句百分之百相同，仅靠声调上扬与问号区分。'
          },
          {
            id: 'dt11_1_d9',
            kind: 'fib',
            prompt: 'Which question word asks "Where did Tex come from?" => D’___ vient Tex ?',
            promptZh: '信息提问：“Tex 是从哪儿来的？” => D’___ vient Tex ?',
            answers: ['où'],
            hint: 'where = où (don’t forget the grave accent ù!).',
            audio: 'D’où vient Tex ?',
            explain: 'où (with accent grave, unlike ou = "or"!).',
            explainZh: '哪里是 **où**（必须带重音符，不带音符的 ou 是“或者”）。'
          },
          {
            id: 'dt11_1_d10',
            kind: 'fib',
            prompt: 'Which question word asks "How are you?" (formal greeting!) => ___ allez-vous ?',
            promptZh: '正式问候（信息问）：“您近来好吗？” => ___ allez-vous ?',
            answers: ['Comment'],
            hint: 'how = Comment.',
            audio: 'Comment allez-vous ?',
            explain: 'Comment allez-vous ?',
            explainZh: '询问方式或状态“怎样”用 **Comment**。'
          },
          {
            id: 'dt11_1_d11',
            kind: 'fib',
            prompt: 'Answering a NEGATIVE question with YES! "Tu n’aimes pas le français ?" — "___, j’adore le français !"',
            promptZh: '回答否定提问的“不对，我喜欢的！”必须用哪一个词（不是 oui！）：Tu n’aimes pas le français ? — ___, j’adore le français !',
            answers: ['Si'],
            hint: '"Yes" contradicting a negative question = Si!',
            audio: 'Tu n’aimes pas le français ? Si, j’adore le français !',
            explain: 'Use "Si" (never "Oui") to contradict a negative yes/no question!',
            explainZh: '反驳否定疑问句（“你不……吗？”→“不，我……”）必须用 **Si**，不能用 oui！'
          },
          {
            id: 'dt11_1_d12',
            kind: 'mcq',
            prompt: 'Why is "Vous aimez-vous le café ?" WRONG?',
            promptZh: '为什么 `Vous aimez-vous le café ?` 这句话语法错误？',
            options: [
              'You repeated "vous" twice — inversion removes the front subject pronoun: "Aimez-vous le café ?"',
              'Because "vous" cannot be inverted with "-er" verbs.',
              'Because "le café" must go before the verb.',
              'Because "est-ce que" is missing after "aimez-vous".'
            ],
            answer: 0,
            audio: 'Aimez-vous le café ?',
            explain: 'With pronoun subjects, ONLY invert the pronoun behind the verb ("Aimez-vous...?"). Double pronoun is only for noun subjects ("Tex aime-t-il...?")!',
            explainZh: '人称代词（vous / tu / il）直接倒装到动词后面即可，前面不能再重复留一个代词！只有**名词**作主语时才保留名词并在动词后补代词（如 Tex aime-t-il...）。'
          }
        ],
        related: [
          { chapterId: 'ch10d_cond_disc_pass', pageId: 't10d_6', label: 'Back to 10D.6 Passive Voice' },
          { chapterId: 'ch11_interrogatives', pageId: 'i11_2', label: '11.2 Yes/No Questions (Est-ce que & N’est-ce pas)' }
        ]
      },

      /* =========================================================
         PAGE 11.2: YES/NO QUESTIONS (int2) - 2 SECTIONS FOR 2 CARTOONS!
      ========================================================= */
      {
        id: 'i11_2',
        code: '11.2',
        group: 'Yes/No Questions',
        shortTitle: 'Est-ce que & N’est-ce pas',
        title: 'Questions Fermées: Intonation, Est-ce que / Est-ce qu’, N’est-ce pas & Si',
        titleZh: '一般疑问句三大口语式：升调、Est-ce que、N’est-ce pas 与 Si 回答否定问',
        estMin: 4,
        summary: 'Three effortless ways to build any YES/NO question without inverting: (1) RISING INTONATION ("Tu connais Sartre ?") — pitch rises sharply at the end instead of falling like statements; (2) "EST-CE QUE / EST-CE QU’" placed directly before the statement ("Est-ce que tu aimes les films ?", "Est-ce qu’il vient ?" — note "que" elides to "qu’" ONLY before vowels, NEVER changing before consonants!); (3) TAG "N’EST-CE PAS ?" added at the very end when the speaker expects an affirmative "yes" ("Tu es d’accord, n’est-ce pas ?"). BONUS TRAP: When someone asks a NEGATIVE question ("Tu ne connais pas Yoda ?"), contradict it with "SI !" ("Ah si, je connais le petit philosophe !"), NOT "oui"!',
        summaryZh: '不倒装就能轻松造出所有一般疑问句（Yes/No）：① **升调提问（Intonation）**：句子结构不动，末尾声调上扬（*Tu connais Sartre ?*）；② **句首加 `Est-ce que / qu’`**：绝对安全的万能书面/口语体（注意只有在以元音或哑音 `h` 开头时才省音成 `Est-ce qu’`，如 *Est-ce qu’elle / qu’on / qu’il*，其余全写 `Est-ce que`）；③ **句尾加 `, n’est-ce pas ?`**：当说话人心里认定答案“是的”、向对方寻求附和时使用（*Tu connais « La Guerre des Étoiles », n’est-ce pas ?*）。🔥 **高频考点回顾**：面对**否定提问**（*Tu ne connais pas Yoda ?*），想回答“（不对，）我认识啊！”，必须回答 **`Si !`**，不能用 `Oui`！',
        cheatSummary: [
          { label: 'Est-ce que Elision Check', rule: 'Est-ce qu’ + vowel/silent h (Est-ce qu’elle / qu’on / qu’il / qu’Edouard). Est-ce que + consonant (Est-ce que tu / que Tex / que nous). NEVER combine est-ce que + inversion!', ruleZh: '缩合口诀：后面接 il/elle/on/元音写 Est-ce qu’；其余写 Est-ce que；绝对不能一边用 Est-ce que 一边还倒装！' },
          { label: 'N’est-ce pas & Contradicting Negative Questions with "Si"', rule: 'Tag at end: "..., n’est-ce pas ?". Negative Q contradiction: "Tu ne connais pas Yoda ?" → "Si, je le connais !"', ruleZh: '句尾附和加 , n’est-ce pas ?；被否定问句反问时（“难道你不……吗？”），肯定回答用 Si！' }
        ],
        sections: [
          {
            id: 'i11_2_estce',
            heading: '1. Intonation vs. Est-ce que (Philosophy & Film Chat)',
            headingZh: '一、升调疑问与 Est-ce que（Tex 与 Trey 聊萨特与电影）',
            lead: 'Listen to Trey and Tex switching smoothly between rising intonation ("Tu connais Sartre ?") and "Est-ce que... ?":',
            leadZh: '看表对比陈述降调与疑问升调，再读 Trey 和 Tex 聊萨特的小对话：',
            cartoon: {
              src: './assets/tex_cartoons/int2_estceque.gif',
              alt: 'Trey et Tex : Est-ce que tu aimes les films ? Tu connais Sartre ?',
              caption: 'Tex : Tu connais Sartre ? (Intonation!) — Trey : Et toi, est-ce que tu aimes les films ? Est-ce que tu connais Yoda ?',
              captionZh: 'Tex：你知道萨特吗？（声调上扬）— Trey：那你呢，你喜欢电影吗？（Est-ce que...）你认识尤达大师吗？'
            },
            table: {
              headers: ['Method', 'Pattern', 'Example'],
              rows: [
                { cols: ['Intonation', 'Statement + rising voice (?)', 'Trey, tu aimes la philosophie ? Tu connais Sartre ?'], audio: 'Trey, tu aimes la philosophie ? Tu connais Sartre ?' },
                { cols: ['Est-ce que', 'Est-ce que + consonant subject...', 'Est-ce que tu aimes les films ? Est-ce que Tex connaît Yoda ?'], audio: 'Est-ce que tu aimes les films ? Est-ce que tu connais Yoda ?' },
                { cols: ['Est-ce qu’', 'Est-ce qu’ + il/elle/on/vowel...', 'Est-ce qu’elle parle italien ? Est-ce qu’on mange ici ?'], audio: 'Est-ce qu’elle parle italien ? Est-ce qu’on mange ici ?' }
              ]
            }
          },
          {
            id: 'i11_2_yoda',
            heading: '2. Tag "N’est-ce pas ?" & Answering Negative Questions with "Si"',
            headingZh: '二、反意确认 n’est-ce pas 与否定提问的回答词 si（尤达大战萨特）',
            lead: 'Spot BOTH "..., n’est-ce pas ?" and Tex’s "Ah, si, si, si !" replying to Trey’s negative question "Tu ne connais pas Yoda ?":',
            leadZh: '读完下半段尤达大师对话，重点抓 `Tu ne connais pas Yoda ?` 后面 Tex 脱口而出的 `Ah, si, si, si !`：',
            cartoon: {
              src: './assets/tex_cartoons/int2_yoda.gif',
              alt: 'Trey : Tu ne connais pas Yoda ? — Tex : Ah si si si !',
              caption: 'Trey : Tu connais La Guerre des Étoiles, n’est-ce pas ? Tu ne connais pas Yoda ? — Tex : Ah, si, si, si, je connais le petit philosophe !',
              captionZh: 'Trey：你知道《星球大战》，对吧（n’est-ce pas）？你不认识尤达？— Tex：哎呀认识认识（反驳否定提问用 **si**）！'
            },
            dialogue: {
              title: 'Tex vs. Trey: Yoda vs. Jean-Paul Sartre',
              titleZh: '小对话：尤达大师 vs 萨特存在主义',
              lines: [
                { speaker: 'Trey', fr: 'Yoda est mon héros. Tu ne connais pas Yoda ?', en: 'Yoda is my hero. You don’t know Yoda?', zh: '带有否定的反问句：Tu **ne** connais **pas** Yoda ?。' },
                { speaker: 'Tex', fr: 'Ah, si, si, si, je connais le petit philosophe. Est-ce que tu es fou ? Yoda n’est pas Sartre !', en: 'Ah, yes, yes, yes, I DO know the little philosopher. Are you crazy? Yoda is not Sartre!', zh: '回应“你不认识吗”必须用 **si**（而不是 oui）表示“不，我认识”！' },
                { speaker: 'Trey', fr: 'La philosophie de Yoda est plus intéressante que La Nausée ! Tu es d’accord, n’est-ce pas ?', en: 'Yoda’s philosophy is more interesting than Nausea! You agree, don’t you?', zh: '明知故问、求赞同的句尾固定标签：**, n’est-ce pas ?**。' }
              ]
            },
            quickCheck: {
              prompt: 'Pick the sentence with ZERO question-formation or elision errors:',
              promptZh: '选出疑问句缩合与反意提问**完全正确**的一句：',
              options: [
                'Est-ce qu’on joue aux cartes aujourd’hui ? — Oui, on joue !',
                'Est-ce que ils habitent à Jester ?',
                'Est-ce qu’il aime-t-il les films ?',
                'Tu ne parles pas français ? — Oui, je parle très bien français !'
              ],
              answerIdx: 0,
              explain: '"Est-ce qu’on..." elides properly before "on"! Option 2 fails to elide before "ils"; Option 3 wrongly mixes "est-ce que" + inversion; Option 4 must answer "Si!" to contradict a negative question!',
              explainZh: 'Est-ce qu’on 省音正确且保持正语序。其余错误：① Est-ce qu’ils 漏缩音；② Est-ce que 与倒装不能混用；③ 否定疑问句肯定回答必须用 Si！'
            }
          }
        ],
        drills: [
          {
            id: 'dt11_2_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1 (n’est-ce pas): Bette : Tammy, tu aimes Tex, ___ ?',
            promptZh: 'Tex 原题 #1：Bette：Tammy，你喜欢 Tex，对吧？（填反意疑问短语）：',
            answers: ["n'est-ce pas", 'n’est-ce pas'],
            hint: 'Add tag "n’est-ce pas" at the end.',
            audio: 'Tammy, tu aimes Tex, n’est-ce pas ?',
            explain: 'n’est-ce pas.',
            explainZh: '句尾加反意确认标签：n’est-ce pas。'
          },
          {
            id: 'dt11_2_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2 (est-ce que): Tex : Tammy, tu n’aimes pas Bette ? => Tammy, ___ tu n’aimes pas Bette ?',
            promptZh: 'Tex 原题 #2：改用 est-ce que 提问（即使句中有否定 ne...pas 也不影响！）：Tammy, ___ tu n’aimes pas Bette ?',
            answers: ['est-ce que'],
            hint: 'est-ce que (lowercase after comma + "Tammy,"!).',
            audio: 'Tammy, est-ce que tu n’aimes pas Bette ?',
            explain: 'Tammy, est-ce que tu n’aimes pas Bette ?',
            explainZh: '注意逗号后小写 est-ce que，后面保留原句 tu n’aimes pas Bette。'
          },
          {
            id: 'dt11_2_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3 (est-ce que): Corey : Vous dansez ce soir ? => ___ vous dansez ce soir ?',
            promptZh: 'Tex 原题 #3：改用 est-ce que（句首大写）：___ vous dansez ce soir ?',
            answers: ['Est-ce que'],
            hint: 'Est-ce que (keeps "vous dansez" in normal order).',
            audio: 'Est-ce que vous dansez ce soir ?',
            explain: 'Est-ce que vous dansez ce soir ?',
            explainZh: '句首大写 Est-ce que。'
          },
          {
            id: 'dt11_2_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4 (n’est-ce pas): Edouard : On joue aux cartes aujourd’hui, ___ ?',
            promptZh: 'Tex 原题 #4：我们今天打牌，对吧？（反意确认）：',
            answers: ["n'est-ce pas", 'n’est-ce pas'],
            hint: 'n’est-ce pas.',
            audio: 'On joue aux cartes aujourd’hui, n’est-ce pas ?',
            explain: 'n’est-ce pas.',
            explainZh: 'n’est-ce pas。'
          },
          {
            id: 'dt11_2_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5 (n’est-ce pas): Tammy : Nous étudions ce soir, ___ ?',
            promptZh: 'Tex 原题 #5：我们今晚学习，是不是？（反意确认）：',
            answers: ["n'est-ce pas", 'n’est-ce pas'],
            hint: 'n’est-ce pas.',
            audio: 'Nous étudions ce soir, n’est-ce pas ?',
            explain: 'n’est-ce pas.',
            explainZh: 'n’est-ce pas。'
          },
          {
            id: 'dt11_2_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6 (est-ce que): Tammy : Tex aime Bette ? => ___ Tex aime Bette ?',
            promptZh: 'Tex 原题 #6：改用 est-ce que（注意 Tex 以辅音 T 开头）：___ Tex aime Bette ?',
            answers: ['Est-ce que'],
            hint: 'Consonant T → Est-ce que (no elision!).',
            audio: 'Est-ce que Tex aime Bette ?',
            explain: 'Est-ce que Tex aime Bette ?',
            explainZh: 'Tex 以辅音开头不缩音 → Est-ce que。'
          },
          {
            id: 'dt11_2_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7 (n’est-ce pas): Tex : Je suis un génie, ___ ?',
            promptZh: 'Tex 原题 #7：Tex：我是个天才，对吧？（反意确认）：',
            answers: ["n'est-ce pas", 'n’est-ce pas'],
            hint: 'n’est-ce pas.',
            audio: 'Je suis un génie, n’est-ce pas ?',
            explain: 'n’est-ce pas.',
            explainZh: 'n’est-ce pas。'
          },
          {
            id: 'dt11_2_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8 (est-ce que): Bette : Tex et Tammy voyagent ensemble ? => ___ Tex et Tammy voyagent ensemble ?',
            promptZh: 'Tex 原题 #8：改用 est-ce que：___ Tex et Tammy voyagent ensemble ?',
            answers: ['Est-ce que'],
            hint: 'Est-ce que.',
            audio: 'Est-ce que Tex et Tammy voyagent ensemble ?',
            explain: 'Est-ce que Tex et Tammy voyagent ensemble ?',
            explainZh: 'Est-ce que。'
          },
          {
            id: 'dt11_2_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9 (n’est-ce pas): Joe-Bob : On mange à MacDo, ___ ?',
            promptZh: 'Tex 原题 #9：我们去麦当劳吃，好不好？（反意确认）：',
            answers: ["n'est-ce pas", 'n’est-ce pas'],
            hint: 'n’est-ce pas.',
            audio: 'On mange à MacDo, n’est-ce pas ?',
            explain: 'n’est-ce pas.',
            explainZh: 'n’est-ce pas。'
          },
          {
            id: 'dt11_2_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10 (n’est-ce pas): Tammy : Ils habitent à Jester, ___ ?',
            promptZh: 'Tex 原题 #10：他们住在 Jester 宿舍，对吧？（反意确认）：',
            answers: ["n'est-ce pas", 'n’est-ce pas'],
            hint: 'n’est-ce pas.',
            audio: 'Ils habitent à Jester, n’est-ce pas ?',
            explain: 'n’est-ce pas.',
            explainZh: 'n’est-ce pas。'
          },
          {
            id: 'dt11_2_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11 (est-ce que): Bette : Tammy ne parle pas italien ? => ___ Tammy ne parle pas italien ?',
            promptZh: 'Tex 原题 #11：改用 est-ce que（注意 Tammy 以辅音开头）：___ Tammy ne parle pas italien ?',
            answers: ['Est-ce que'],
            hint: 'Est-ce que.',
            audio: 'Est-ce que Tammy ne parle pas italien ?',
            explain: 'Est-ce que Tammy ne parle pas italien ?',
            explainZh: 'Est-ce que。'
          },
          {
            id: 'dt11_2_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12 (est-ce que): Joe-Bob : Nous regardons la télé aujourd’hui ? => ___ nous regardons la télé aujourd’hui ?',
            promptZh: 'Tex 原题 #12：改用 est-ce que：___ nous regardons la télé aujourd’hui ?',
            answers: ['Est-ce que'],
            hint: 'Est-ce que.',
            audio: 'Est-ce que nous regardons la télé aujourd’hui ?',
            explain: 'Est-ce que nous regardons la télé aujourd’hui ?',
            explainZh: 'Est-ce que。'
          }
        ],
        related: [
          { chapterId: 'ch11_interrogatives', pageId: 'i11_1', label: 'Back to 11.1 Question Intro' },
          { chapterId: 'ch11_interrogatives', pageId: 'i11_3', label: '11.3 Subject-Verb Inversion' }
        ]
      },

      /* =========================================================
         PAGE 11.3: INVERSION (int3) - 2 SECTIONS FOR 2 CARTOONS!
      ========================================================= */
      {
        id: 'i11_3',
        code: '11.3',
        group: 'Yes/No & Formal Questions',
        shortTitle: 'Inversion & Euphonic -t-',
        title: 'L’Inversion: Pronoun Swap, Euphonic -t-, Complex Noun Inversion, Past & Est-ce/Y a-t-il',
        titleZh: '主谓倒装全规（L’inversion）：连字符、加 -t- 连音、名词双主语、复合时态与 Y a-t-il',
        estMin: 5,
        summary: 'Formal French forms questions via SUBJECT-VERB INVERSION, obeying SIX crisp mechanics: (1) PRONOUN SUBJECTS: swap verb + pronoun with a hyphen ("As-tu des idées ?", "Connaissez-vous... ?"); (2) EUPHONIC "-T-": in 3rd-person singular (il/elle/on), if the verb ends in a VOWEL (-e, -a), insert "-t-" between two hyphens ("Aime-t-il ?", "Va-t-il devenir médecin ?", "A-t-elle fini ?" — NEVER add -t- if the verb already ends in -t or -d, like "Est-il / Prend-il / Fait-il"!); (3) NOUN / NAME SUBJECTS (Complex Inversion): KEEP the noun at the front, invert a matching PRONOUN (il/elle/ils/elles) after the verb ("Les belles filles suivent-elles ce cours ?", "Tex aime-t-il Tammy ?"); (4) COMPOUND TENSES: invert the pronoun with the AUXILIARY ONLY, before the past participle ("As-tu suivi ce cours ?", NOT "As suivi-tu"); (5) NEGATION: wrap "ne ... pas" around the ENTIRE inverted verb-pronoun hyphenated block ("N’as-tu pas réussi ?"); (6) SPECIAL FORMS: "c’est → est-ce ?", "il y a → y a-t-il ? (n’y a-t-il pas ?)".',
        summaryZh: '正式书面和高级口语（如采访、信函、TCF B2 提问）大量使用**主谓倒装（Inversion）**，牢记六条机械规则零失分：① **人称代词主语**：直接调换为 `动词-代词`（*As-tu / Connaissez-vous*）；② **第三人称单数加 `-t-`**：当 `il / elle / on` 前面的动词以**元音（`-e / -a`）结尾**时，中间必须加 `-t-` 过渡连音（*Aime-t-il ? / Va-t-elle ? / A-t-il fini ?*；**注意**：动词本身已以 `-t` 或 `-d` 结尾则**绝不再加 `-t-`**，直接写 *Est-il ? / Fait-il ? / Comprend-il ?*！）；③ **名词或人名主语（复杂倒装！）**：绝不能把名词整体搬到动词后，必须让**名词留在句首**，动词后再**补上对应人称代词（il/elle/ils/elles）**（*Tex a-t-il du talent ? / Les filles suivent-elles ce cours ?*）；④ **复合过去时**：**只倒装助动词和代词**，过去分词留在最后（*As-tu suivi ce cours ?*）；⑤ **否定倒装**：`ne` 放最前，`pas/jamais` 放在整个“动词-代词”组合之后（*N’as-tu pas réussi ?*）；⑥ **高频特例**：`c’est` 倒装为 **`Est-ce ?`**；`il y a` 倒装为 **`Y a-t-il ?`**（否定 `N’y a-t-il pas ?`）！',
        cheatSummary: [
          { label: 'When to Add "-t-" vs. Never Add "-t-"', rule: 'Verb ends in -e or -a (a, va, aime, mange, parle): ADD -t- → A-t-il ? Va-t-elle ? Mange-t-il ? Verb ends in -t or -d (est, fait, sort, prend): NO -t- → Est-il ? Prend-il ?!', ruleZh: '加不加 -t- 一秒判断：动词结尾是 -a/-e 就加 -t-（Aime-t-il / A-t-elle / Va-t-il）；动词本来就以 -t/-d 结尾则不加（Est-il / Fait-il / Prend-il）！' },
          { label: 'Noun Subject = Keep Noun Front + Add Pronoun After Verb!', rule: 'WRONG: "Aime Tex Tammy ?" RIGHT: "Tex aime-t-il Tammy ?" / "Ce cours est-il difficile ?" Compound tense: "As-tu suivi ?" Negation: "N’as-tu pas réussi ?"', ruleZh: '人名/名词主语复杂倒装：名词原地不动，动词后面配相应代词 il/elle/ils/elles（Tex aime-t-il...）！' }
        ],
        sections: [
          {
            id: 'i11_3_rules',
            heading: '1. Pronoun, Euphonic -t- & Complex Noun Inversion (Joe-Bob & Corey)',
            headingZh: '一、代词倒装、加 -t- 连音与名词复杂倒装表',
            lead: 'Read Corey’s internal monologue as he recommends a totally questionable course to Joe-Bob ("Joe-Bob aime-t-il les lettres ? A-t-il envie...? Et les belles filles suivent-elles ce cours ?"):',
            leadZh: '读表里的六条铁律，再看 Corey 帮 Joe-Bob 选课时满篇精妙绝伦的倒装独白：',
            cartoon: {
              src: './assets/tex_cartoons/int3_idees.gif',
              alt: 'Joe-Bob : Corey, as-tu des idées ? Connaissez-vous de bons cours ?',
              caption: 'Joe-Bob : Corey, as-tu des idées ? Tammy et Bette, connaissez-vous de bons cours ? — Corey : Joe-Bob aime-t-il les lettres ? A-t-il envie... ?',
              captionZh: 'Joe-Bob：Corey，你有什么主意吗（as-tu）？Tammy 和 Bette，你们知道什么好课吗（connaissez-vous）？— Corey：他喜欢文学吗（aime-t-il）？'
            },
            table: {
              headers: ['Inversion Case', 'Rule', 'Authentic Tex Example'],
              rows: [
                { cols: ['Pronoun Subject', 'Verb + hyphen + pronoun', 'As-tu des idées ? Connaissez-vous de bons cours ?'], audio: 'As-tu des idées ? Connaissez-vous de bons cours ?' },
                { cols: ['Euphonic -t- (-e / -a ends)', 'Verb + -t- + il/elle/on', 'Aime-t-il les lettres ? Va-t-il devenir médecin ?'], audio: 'Aime-t-il les filles ? Va-t-il devenir médecin ?' },
                { cols: ['Noun / Name Subject', 'Keep NOUN first + verb-(t-)pronoun!', 'Les belles filles suivent-elles ce cours ? Ce cours est-il difficile ?'], audio: 'Les belles filles suivent-elles ce cours ? Ce cours est-il difficile ?' },
                { cols: ['Compound Tense (PC)', 'Invert AUXILIARY + pronoun only!', 'Corey, as-tu suivi ce cours ?'], audio: 'Corey, as-tu suivi ce cours ?' },
                { cols: ['Negative Inversion', 'Ne + [verb-pronoun] + pas!', 'Pourquoi n’as-tu pas réussi l’examen ?'], audio: 'Pourquoi n’as-tu pas réussi l’examen ?' },
                { cols: ['c’est / il y a', 'est-ce ? · y a-t-il ? · n’y a-t-il pas ?', 'Est-ce possible ? N’y a-t-il pas un seul cours facile ?'], audio: 'Est-ce possible ? N’y a-t-il pas un seul cours facile pour moi ?' }
              ]
            }
          },
          {
            id: 'i11_3_facile',
            heading: '2. Negative Inversion, "Est-ce" & "Y a-t-il"',
            headingZh: '二、否定倒装、Est-ce 与 Y a-t-il 专项（找一门水课！）',
            lead: 'Notice how both "est-ce" and "y a-t-il" work effortlessly inside Joe-Bob’s desperate question:',
            leadZh: '盯紧这组超级实用的句型转换：`c’est → est-ce` 与 `il y a → y a-t-il`（否定：`n’y a-t-il pas`）：',
            cartoon: {
              src: './assets/tex_cartoons/int3_facile.gif',
              alt: 'Joe-Bob : Est-ce possible ? N’y a-t-il pas un seul cours facile pour moi ?',
              caption: 'Joe-Bob : Est-ce possible ? N’y a-t-il pas un seul cours facile pour moi ? Pourquoi n’as-tu pas réussi l’examen ?',
              captionZh: 'Joe-Bob：这可能吗（Est-ce possible ?）？难道就没有哪怕一门对我来说容易的课吗（N’y a-t-il pas…）？'
            },
            quickCheck: {
              prompt: 'Turn "Les étudiants aiment la poésie." into a formal INVERTED question:',
              promptZh: '将 `Les étudiants aiment la poésie.` 正确改写为正式**名词倒装**疑问句：',
              options: [
                'Les étudiants aiment-ils la poésie ?',
                'Aiment les étudiants la poésie ?',
                'Les étudiants aiment-t-ils la poésie ?',
                'Aiment-ils les étudiants la poésie ?'
              ],
              answerIdx: 0,
              explain: 'Keep noun "Les étudiants" in front, and invert matching pronoun "ils" ("aiment-ils") — and NO "-t-" in the plural because "aiment" ends in -t already!',
              explainZh: '名词主语 Les étudiants 原位不动，动词后补复数代词 **-ils** → Les étudiants aiment-ils...（注意：复数 aiment 自带字母 t 且只对单数加 -t-，绝不写 aiment-t-ils！）。'
            }
          }
        ],
        drills: [
          {
            id: 'dt11_3_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1 (Pronoun swap): Bette : Tammy ! Fiona ! Vous dansez à ma soirée ? => ___ à ma soirée ?',
            promptZh: 'Tex 原题 #1：倒装改写：___ à ma soirée ?（填“动词-主语代词”，句首大写）',
            answers: ['Dansez-vous'],
            hint: 'Dansez + hyphen + vous!',
            audio: 'Dansez-vous à ma soirée ?',
            explain: 'Dansez-vous à ma soirée ?',
            explainZh: '代词直接与动词倒装：Dansez-vous。'
          },
          {
            id: 'dt11_3_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tex : Hé Tammy, tu adores le chocolat ? => Hé Tammy, ___ le chocolat ?',
            promptZh: 'Tex 原题 #2：倒装改写：Hé Tammy, ___ le chocolat ?（逗号后小写）',
            answers: ['adores-tu'],
            hint: 'adores + hyphen + tu!',
            audio: 'Hé Tammy, adores-tu le chocolat ?',
            explain: 'adores-tu (always keep the -s of "tu adores"!).',
            explainZh: 'tu adores 的结尾 -s 保留不动，直接连字符接 tu → adores-tu。'
          },
          {
            id: 'dt11_3_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3 (Complex Noun!): Corey : Les insectes sont intelligents ? => Les insectes ___ intelligents ?',
            promptZh: 'Tex 原题 #3：复杂倒装（名词主语 Les insectes 在前）：Les insectes ___ intelligents ?',
            answers: ['sont-ils'],
            hint: 'Les insectes (masc. pl.) = ils → sont-ils!',
            audio: 'Les insectes sont-ils intelligents ?',
            explain: 'Les insectes sont-ils intelligents ?',
            explainZh: 'les insectes 为阳性复数，对应补上代词 ils → sont-ils！'
          },
          {
            id: 'dt11_3_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4 (Complex Noun + -t-!): Edouard : Tammy aime la France ? => Tammy ___ la France ?',
            promptZh: 'Tex 原题 #4：人名复杂倒装 + 隔音字母：Tammy ___ la France ?',
            answers: ['aime-t-elle'],
            hint: 'Tammy (elle) + aime ends in vowel e → aime-t-elle!',
            audio: 'Tammy aime-t-elle la France ?',
            explain: 'Tammy aime-t-elle la France ? (don’t forget -t-!).',
            explainZh: 'aime 以元音 e 结尾，第三人称单数必须加 -t- → aime-t-elle！'
          },
          {
            id: 'dt11_3_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tammy : Tex et moi, nous allons en France cet été ? => Tex et moi, ___ en France cet été ?',
            promptZh: 'Tex 原题 #5：倒装改写：Tex et moi, ___ en France cet été ?',
            answers: ['allons-nous'],
            hint: 'allons-nous.',
            audio: 'Tex et moi, allons-nous en France cet été ?',
            explain: 'allons-nous.',
            explainZh: '倒装代词 nous → allons-nous。'
          },
          {
            id: 'dt11_3_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6 (Verb "a" + -t-!): Bette : Tex a du talent ? => Tex ___ du talent ?',
            promptZh: 'Tex 原题 #6：人名复杂倒装（动词 a 后面必须加什么？）：Tex ___ du talent ?',
            answers: ['a-t-il'],
            hint: 'a ends in vowel a → a-t-il!',
            audio: 'Tex a-t-il du talent ?',
            explain: 'Tex a-t-il du talent ?',
            explainZh: 'a 以元音 a 结尾，必须加 -t- → a-t-il！'
          },
          {
            id: 'dt11_3_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7 (Negative Inversion!): Tex : Tammy ma chérie, tu n’as pas envie d’habiter avec moi ? => Tammy ma chérie, ___ envie d’habiter avec moi ?',
            promptZh: 'Tex 原题 #7：否定倒装（n’ 与 pas 包住“动词-代词”！）：Tammy ma chérie, ___ envie d’habiter avec moi ?',
            answers: ["n'as-tu pas", 'n’as-tu pas'],
            hint: 'n’ + as-tu + pas!',
            audio: 'Tammy ma chérie, n’as-tu pas envie d’habiter avec moi ?',
            explain: 'n’as-tu pas.',
            explainZh: '否定包夹结构：n’as-tu pas！'
          },
          {
            id: 'dt11_3_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8 (Feminine Plural Noun!): Tammy : Les chattes mangent des souris ? => Les chattes ___ des souris ?',
            promptZh: 'Tex 原题 #8：阴性复数名词倒装（les chattes → elles）：Les chattes ___ des souris ?',
            answers: ['mangent-elles'],
            hint: 'les chattes = elles → mangent-elles (NO extra -t-!).',
            audio: 'Les chattes mangent-elles des souris ?',
            explain: 'Les chattes mangent-elles des souris ?',
            explainZh: 'les chattes 是阴性复数 → 补代词 elles → mangent-elles。'
          },
          {
            id: 'dt11_3_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Joe-Bob : Un écureuil aime être amoureux ? => Un écureuil ___ être amoureux ?',
            promptZh: 'Tex 原题 #9：阳性单数名词 + 元音结尾动词：Un écureuil ___ être amoureux ?',
            answers: ['aime-t-il'],
            hint: 'Un écureuil (il) + aime → aime-t-il!',
            audio: 'Un écureuil aime-t-il être amoureux ?',
            explain: 'Un écureuil aime-t-il être amoureux ?',
            explainZh: 'un écureuil（阳性单数 il）+ 元音 e 结尾 → aime-t-il！'
          },
          {
            id: 'dt11_3_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tammy : Hé Joe-Bob, tu parles français ? => Hé Joe-Bob, ___ français ?',
            promptZh: 'Tex 原题 #10：倒装改写：Hé Joe-Bob, ___ français ?',
            answers: ['parles-tu'],
            hint: 'parles-tu.',
            audio: 'Hé Joe-Bob, parles-tu français ?',
            explain: 'parles-tu.',
            explainZh: 'parles-tu。'
          },
          {
            id: 'dt11_3_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11 (il y a inverted!): Il y a des cowboys au Texas ? => ___ des cowboys au Texas ?',
            promptZh: 'Tex 原题 #11：将 `Il y a` 倒装（注意句首大写 + -t-）：___ des cowboys au Texas ?',
            answers: ['Y a-t-il'],
            hint: 'Il y a inverted = Y a-t-il!',
            audio: 'Y a-t-il des cowboys au Texas ?',
            explain: 'Y a-t-il des cowboys au Texas ? (memorize this fixed chunk!).',
            explainZh: '高频万能句型：il y a 倒装永远写 **Y a-t-il**！'
          },
          {
            id: 'dt11_3_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12 (c’est inverted!): C’est difficile d’apprendre le français ? => ___ difficile d’apprendre le français ?',
            promptZh: 'Tex 原题 #12：将 `C’est` 倒装（“……难吗？”）：___ difficile d’apprendre le français ?',
            answers: ['Est-ce'],
            hint: 'C’est inverted = Est-ce!',
            audio: 'Est-ce difficile d’apprendre le français ?',
            explain: 'Est-ce difficile d’apprendre le français ?',
            explainZh: '高频特例：C’est 倒装就是 **Est-ce**（注意不用加 -t-，已经和 ce 连写了）。'
          }
        ],
        related: [
          { chapterId: 'ch11_interrogatives', pageId: 'i11_2', label: 'Back to 11.2 Yes/No Questions' },
          { chapterId: 'ch11_interrogatives', pageId: 'i11_4', label: '11.4 Interrogative & Exclamative Quel' }
        ]
      },

      /* =========================================================
         PAGE 11.4: QUEL / QUELLE (int4) - 2 SECTIONS FOR 2 CARTOONS!
      ========================================================= */
      {
        id: 'i11_4',
        code: '11.4',
        group: 'Interrogative Adjectives',
        shortTitle: 'Quel / Quelle (Interr. & Excl.)',
        title: 'L’Adjectif Quel / Quelle / Quels / Quelles: Questions & Exclamations',
        titleZh: '疑问与感叹形容词（Quel / Quelle / Quels / Quelles）：与名词性数配合全规',
        estMin: 4,
        summary: 'QUEL ("what / which") is an ADJECTIVE — so it MUST ALWAYS agree in gender and number with the NOUN it modifies: Masculine sg. "quel", Masculine pl. "quels", Feminine sg. "quelle", Feminine pl. "quelles" (all FOUR sound identical /kɛl/ unless plural "-s" makes a /z/ liaison before a vowel, e.g. "quels animaux"!). Use it in TWO ways: (1) INTERROGATIVE: directly before a noun ("Quel âge a Tex ?", "Quelles langues parlez-vous ?") OR separated by "être" ("Quel est le nom de ce tatou ?", "Quelle est la date ?", "Quelles sont vos qualités ?"); (2) EXCLAMATIVE ("What a...!"): before a noun or adjective + noun ("Quel beau tatou !", "Quelle chatte méchante !"). NEVER put "un / une" after exclamative "quel" (WRONG: "Quel un beau jour !" → RIGHT: "Quel beau jour !")!',
        summaryZh: '`Quel` 本质上是一个**形容词**，因此**永远必须跟随它修饰的名词做阴阳性与单复数配合**：阳单 **`quel`**、阳复 **`quels`**、阴单 **`quelle`**、阴复 **`quelles`**（注意四个词单独念全发一样的音，唯有复数 `quels / quelles` 遇到元音开头单词时要连音 /z/，如 *quels animaux*！）。两大常见用法：① **疑问“哪个 / 什么”**：直接放名词前面（*Quel âge a Tex ? / Quelles langues ?*），或中间隔着动词 `être`（此时更要往后看清楚真正主语的性数！如 *Quelles sont les qualités de Tex ?*）；② **感叹句“多么……啊！”**：后接名词或“形容词 + 名词”（*Quel beau tatou ! / Quelle belle minette !*）。🚨 **高频英文直译错误**：法语感叹句 `Quel` 后面**绝不加不定冠词 `un / une`**！绝对不能说 *Quel un beau jour*，只能说 **Quel beau jour !**。',
        cheatSummary: [
          { label: '4 Forms of Quel (Look Forward Across "être"!)', rule: 'quel (m.sg.) · quels (m.pl.) · quelle (f.sg.) · quelles (f.pl.). Check the noun even across "être": "Quelle est la date ?", "Quelles sont les qualités ?"', ruleZh: '四格速查：quel(阳单) / quels(阳复) / quelle(阴单) / quelles(阴复)；遇到 Quel(le) est... 务必往后看名词本身性别（la date → Quelle est la date ?）！' },
          { label: 'Exclamative Trap: NO "un/une" After Quel!', rule: 'English: "What A nice day!" French: "Quel beau jour !" (NEVER "Quel un beau jour !"). Same for plural: "Quelles jolies affiches !"', ruleZh: '感叹句避坑：千万不要受英语 What a... 影响而在 quel 后加 un/une → 直接说 Quel beau jour !' }
        ],
        sections: [
          {
            id: 'i11_4_interr',
            heading: '1. Interrogative Quel (+ Noun or + Être + Noun)',
            headingZh: '一、疑问用法 quel（紧跟名词 vs 隔着 être 询问特征）',
            lead: 'Spot every form of "quel" agreeing across "être" or before a noun as little armadillos quiz Aunt Rita about Uncle Tex:',
            leadZh: '看小犰狳怎么向 Rita 姑妈打听 Tex 叔叔，顺便盯准 `quel / quelles` 如何配合后面的名词：',
            cartoon: {
              src: './assets/tex_cartoons/int4_nom.gif',
              alt: 'Petit tatou : Quel est le nom de ce tatou ? Quel âge a Tex ?',
              caption: 'Quel est le nom (m.sg.) de ce tatou ? Quel âge (m.sg.) a Tex ? Quelles sont les qualités (f.pl.) de Tex ?',
              captionZh: '这只犰狳叫什么名字（le nom 阳单 → Quel）？Tex 多大岁数（âge 阳单 → Quel）？Tex 有哪些优点（les qualités 阴复 → Quelles）？'
            },
            table: {
              headers: ['Gender / Number', 'Form', 'Interrogative & Exclamative Examples'],
              rows: [
                { cols: ['Masculine Sg.', 'quel', 'Quel est le nom de ce tatou ? Quel âge a Tex ? Quel beau tatou !'], audio: 'Quel est le nom de ce tatou ? Quel beau tatou !' },
                { cols: ['Feminine Sg.', 'quelle', 'Quelle est la date ? Quelle amie préfères-tu ? Quelle chatte méchante !'], audio: 'Quelle est la date aujourd’hui ? Quelle belle minette !' },
                { cols: ['Masculine Pl.', 'quels (liaison /z/!)', 'Quels sports aimes-tu ? Quels animaux absurdes !'], audio: 'Quels sports aimes-tu ? Quels animaux absurdes !' },
                { cols: ['Feminine Pl.', 'quelles (liaison /z/!)', 'Quelles sont les qualités de Tex ? Quelles jolies affiches !'], audio: 'Quelles sont les qualités de Tex ? Quelles langues parlez-vous ?' }
              ]
            }
          },
          {
            id: 'i11_4_excl',
            heading: '2. Exclamative Quel ("What a... !")',
            headingZh: '二、感叹用法：Quel tatou snob ! Quelle chatte méchante !',
            lead: 'Tammy and Joe-Bob trade sarcastic exclamations about Tex and Bette — notice ZERO "un/une" after "quel/quelle":',
            leadZh: '看 Tammy 和 Joe-Bob 互相吐槽对方心头好时的精彩感叹句：',
            cartoon: {
              src: './assets/tex_cartoons/int4_snob.gif',
              alt: 'Tammy : Quel beau tatou ! — Joe-Bob : Non, quel tatou snob !',
              caption: 'Tammy : Quel beau tatou ! — Joe-Bob : Non, quel tatou snob ! Quelle belle minette ! — Tammy : Quelle chatte méchante ! Quels animaux absurdes !',
              captionZh: 'Tammy：多帅的犰狳啊！（Quel beau tatou !）— Joe-Bob：才怪，多傲慢的犰狳啊（quel tatou snob）！多漂亮的小猫咪呀！（Quelle belle minette !）'
            },
            quickCheck: {
              prompt: 'Pick the sentence where BOTH forms of "quel" match gender and number correctly:',
              promptZh: '选出两个 `quel` 阴阳性与单复数配合**均完全正确**的一句：',
              options: [
                'Quels sont vos passe-temps préférés (m.pl.), et quelles langues parlez-vous (f.pl.) ?',
                'Quel est la date aujourd’hui, et quels affiches aimez-vous ?',
                'Quelle âge avez-vous, Tex ?',
                'Quel un magnifique poème tu as écrit !'
              ],
              answerIdx: 0,
              explain: 'le passe-temps (masc. pl.) → Quels; la langue (fem. pl.) → quelles! Note: la date → Quelle; une affiche → Quelles; un âge → Quel!',
              explainZh: 'le passe-temps 是阳性复数 → Quels；la langue 是阴性复数 → quelles！提醒易错性别：la date（阴）、une affiche（阴）、un âge（阳）、un problème（阳）。'
            }
          }
        ],
        drills: [
          {
            id: 'dt11_4_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Bette : Tex, ___ amie est-ce que tu préfères ? (une amie — f.sg.)',
            promptZh: 'Tex 原题 #1：Bette：Tex，你更喜欢哪位女性朋友？（amie 阴性单数）：',
            answers: ['quelle'],
            hint: 'amie is feminine singular (e ending!) → quelle.',
            audio: 'Tex, quelle amie est-ce que tu préfères ?',
            explain: 'une amie (fem. sg.) → quelle.',
            explainZh: 'amie 带阴性结尾 -e（女闺蜜）→ quelle。'
          },
          {
            id: 'dt11_4_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tex : ___ fille sexy ! (une fille — f.sg.)',
            promptZh: 'Tex 原题 #2：Tex：多性感的姑娘啊！（fille 阴性单数，句首大写）：',
            answers: ['Quelle'],
            hint: 'la fille (fem. sg.) → Quelle.',
            audio: 'Quelle fille sexy !',
            explain: 'la fille → Quelle.',
            explainZh: 'la fille 为阴性单数，句首大写 → Quelle。'
          },
          {
            id: 'dt11_4_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Corey : ___ sont vos passe-temps préférés ? (un passe-temps — m.pl.)',
            promptZh: 'Tex 原题 #3：Corey：你们最喜欢的业余爱好有哪些？（le passe-temps 阳性复数）：',
            answers: ['Quels'],
            hint: 'vos passe-temps (masc. pl.) → Quels.',
            audio: 'Quels sont vos passe-temps préférés ?',
            explain: 'le passe-temps (masc. pl.) → Quels.',
            explainZh: 'passe-temps 是阳性复数（préférés 无 e 提示阳性）→ Quels。'
          },
          {
            id: 'dt11_4_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Edouard : ___ mois est-ce que tu préfères ? (un mois — m.sg.)',
            promptZh: 'Tex 原题 #4：Edouard：你最喜欢哪个月？（le mois 词尾自带 s 但却是阳性单数！）：',
            answers: ['Quel'],
            hint: 'un mois = masculine singular (the -s is part of the spelling!) → Quel.',
            audio: 'Quel mois est-ce que tu préfères ?',
            explain: 'le mois is masculine SINGULAR here ("which month?") → Quel!',
            explainZh: '别被 mois 本身拼写结尾的 s 骗了！“哪一个月”是阳性单数 → Quel！'
          },
          {
            id: 'dt11_4_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tammy : ___ jolies affiches ! (une affiche — f.pl.)',
            promptZh: 'Tex 原题 #5：Tammy：多漂亮的海报呀！（une affiche 阴性复数，注意 jolies 也提示阴性！）：',
            answers: ['Quelles'],
            hint: 'une affiche + jolies (fem. pl.) → Quelles!',
            audio: 'Quelles jolies affiches !',
            explain: 'des affiches (fem. pl.) → Quelles.',
            explainZh: 'affiche 为阴性，复数加 s → Quelles！'
          },
          {
            id: 'dt11_4_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Bette : ___ est la date de l’anniversaire de Tex ? (la date — f.sg.)',
            promptZh: 'Tex 原题 #6：Bette：Tex 的生日是几月几号？（la date 阴性单数）：',
            answers: ['Quelle'],
            hint: 'la date (fem. sg.) → Quelle.',
            audio: 'Quelle est la date de l’anniversaire de Tex ?',
            explain: 'la date → Quelle est la date...',
            explainZh: 'la date 是阴性单数 → Quelle。'
          },
          {
            id: 'dt11_4_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tex : ___ âge a Paw-Paw ? (un âge — m.sg.)',
            promptZh: 'Tex 原题 #7：Tex：Paw-Paw 爷爷多大年纪了？（un âge 阳性单数）：',
            answers: ['Quel'],
            hint: 'un âge (masc. sg.) → Quel.',
            audio: 'Quel âge a Paw-Paw ?',
            explain: 'un âge → Quel âge...',
            explainZh: '年龄 un âge 为阳性单数 → Quel。'
          },
          {
            id: 'dt11_4_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Bette : Tex, ___ sports est-ce que tu aimes ? (le sport — m.pl.)',
            promptZh: 'Tex 原题 #8：Bette：Tex，你喜欢哪些运动？（sport 阳性复数）：',
            answers: ['quels'],
            hint: 'les sports (masc. pl.) → quels (lowercase after comma!).',
            audio: 'Tex, quels sports est-ce que tu aimes ?',
            explain: 'des sports (masc. pl.) → quels.',
            explainZh: 'sport 为阳性，复数 → quels（逗号后小写）。'
          },
          {
            id: 'dt11_4_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Joe-Bob : ___ est le secret de Tex ? (le secret — m.sg.)',
            promptZh: 'Tex 原题 #9：Joe-Bob：Tex 的秘密到底是什么？（le secret 阳性单数）：',
            answers: ['Quel'],
            hint: 'le secret (masc. sg.) → Quel.',
            audio: 'Quel est le secret de Tex ?',
            explain: 'le secret → Quel.',
            explainZh: 'le secret 是阳性单数 → Quel。'
          },
          {
            id: 'dt11_4_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tammy : Tex, ___ neveu est-ce que tu préfères ? (le neveu — m.sg.)',
            promptZh: 'Tex 原题 #10：Tammy：Tex，你最疼哪一个侄子？（le neveu 阳性单数）：',
            answers: ['quel'],
            hint: 'le neveu (masc. sg.) → quel.',
            audio: 'Tex, quel neveu est-ce que tu préfères ?',
            explain: 'un neveu → quel.',
            explainZh: 'un neveu 是阳性单数 → quel。'
          },
          {
            id: 'dt11_4_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Bette : ___ tatou adorable ! (un tatou — m.sg.)',
            promptZh: 'Tex 原题 #11：Bette：多可爱的小犰狳呀！（un tatou 阳性单数）：',
            answers: ['Quel'],
            hint: 'un tatou (masc. sg.) → Quel.',
            audio: 'Quel tatou adorable !',
            explain: 'un tatou → Quel.',
            explainZh: 'un tatou 为阳性单数 → Quel。'
          },
          {
            id: 'dt11_4_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Joe-Bob : ___ langues est-ce que vous parlez ? (une langue — f.pl.)',
            promptZh: 'Tex 原题 #12：Joe-Bob：您会说哪几门语言？（une langue 阴性复数）：',
            answers: ['Quelles'],
            hint: 'les langues (fem. pl.) → Quelles.',
            audio: 'Quelles langues est-ce que vous parlez ?',
            explain: 'une langue (fem. pl.) → Quelles.',
            explainZh: 'une langue 是阴性名词，复数 → Quelles！'
          }
        ],
        related: [
          { chapterId: 'ch11_interrogatives', pageId: 'i11_3', label: 'Back to 11.3 Inversion' },
          { chapterId: 'ch11_interrogatives', pageId: 'i11_5', label: '11.5 Interrogative Pronouns (qui/que/quoi)' }
        ]
      },

      /* =========================================================
         PAGE 11.5: INTERROGATIVE PRONOUNS (int5) - 2 SECTIONS FOR 2 CARTOONS!
      ========================================================= */
      {
        id: 'i11_5',
        code: '11.5',
        group: 'Interrogative Pronouns',
        shortTitle: 'Qui / Que / Quoi / Qu’est-ce qui',
        title: 'Pronoms Interrogatifs: Qui / Qui est-ce qui / Qu’est-ce qui / Que / Qu’est-ce que / Quoi',
        titleZh: '疑问代词全景矩阵：问人（qui）vs 问物（qu’est-ce qui / qu’est-ce que / quoi）',
        estMin: 5,
        summary: 'Use a clean 2×3 MATRIX to master EVERY interrogative pronoun for People vs. Things: (A) PEOPLE ("Who / Whom?"): Subject = "qui" or "qui est-ce qui" ("Qui est à la porte ? / Qui est-ce qui est à la porte ?"); Direct Object = "qui" (+ inversion) or "qui est-ce que" ("Qui cherches-tu ? / Qui est-ce que tu cherches ?"); After ANY Preposition = "qui" ("Avec qui est-elle partie ? Pour qui me prends-tu ?"). (B) THINGS ("What?"): Subject = ONLY "qu’est-ce qui" (THERE IS NO SHORT FORM! Never say "Que se passe ?" → ALWAYS "Qu’est-ce qui se passe ?"); Direct Object = "que" (+ inversion: "Que fais-tu ?") OR "qu’est-ce que" (+ normal order: "Qu’est-ce que tu fais ?"); After ANY Preposition = "quoi" ("De quoi tu parles ?", "À quoi penses-tu ?") — NEVER put "que" after a preposition!',
        summaryZh: '法语的“谁（人）”和“什么（物）”怎么变，记住这张**“人/物 × 主语/宾语/介词宾语”3×2 矩阵**就永不出错：① **问人（Who / Whom）**：作主语用 `qui` 或加强版 **`qui est-ce qui`**（*Qui / Qui est-ce qui est à la porte ?*）；作直宾用 `qui`（后加倒装）或 **`qui est-ce que`**（*Qui cherches-tu ? / Qui est-ce que tu cherches ?*）；跟在介词后（avec/pour/à/de）全部用 **`qui`**（*Avec qui est-elle partie ?*）；② **问物（What）**：作主语**只能**用 **`qu’est-ce qui`**（⚠️ 没有短形式，绝不能说 *Que se passe ?*，必须说 *Qu’est-ce qui se passe ?*！）；作直宾可用短形式 **`que`**（后必倒装：*Que dit-il ?*）或长形式 **`qu’est-ce que`**（正语序：*Qu’est-ce qu’il dit ?*）；跟在**任何介词后面一律必须变成 `quoi`**（*De quoi parles-tu ? / À quoi penses-tu ?*，绝不写 *De que*）！',
        cheatSummary: [
          { label: 'People (qui) vs. Things (qu’est-ce qui / que / quoi) Matrix', rule: 'PERSON Subject: qui / qui est-ce qui · Object: qui / qui est-ce que · Prep: prep + qui. THING Subject: qu’est-ce qui ONLY! · Object: que (+inv.) / qu’est-ce que · Prep: prep + quoi!', ruleZh: '铁记口诀：问人永远只用 qui（或 qui est-ce qui/que）；问物作主语只能 qu’est-ce qui，作直宾 que / qu’est-ce que，跟介词后面全变 quoi！' },
          { label: 'Two Classic Errors: Thing Subject & Preposition + What', rule: '(1) NEVER write "Que se passe ?" or "Qu’est-ce que se passe ?" → subject "what" = QU’EST-CE QUI! (2) NEVER write "De que" or "À que" → prep + what = QUOI ("De quoi parles-tu ?")!', ruleZh: '两大雷区：① 主语“什么事发生/什么促使……”永远用 Qu’est-ce qui（记住后面的 qui 代表主语）；② 介词后永远用 quoi（De quoi / À quoi / Avec quoi）。' }
        ],
        sections: [
          {
            id: 'i11_5_people',
            heading: '1. Questions About People: Qui / Qui est-ce qui / Qui est-ce que (At Bette’s Door)',
            headingZh: '一、问人系列：qui / qui est-ce qui / qui est-ce que（Bette 家门口连续敲门）',
            lead: 'Follow Bette opening her door twice — first to Tammy, then 5 minutes later to Tex — noticing how short "qui" and long "qui est-ce qui / qui est-ce que" match exact roles:',
            leadZh: '看下表人物六格对照，再读 Bette 连续开门撞见 Tammy 和 Tex 的经典对话：',
            cartoon: {
              src: './assets/tex_cartoons/int5_porte.gif',
              alt: 'Bette ouvre la porte : Qui est à la porte ? Qui cherches-tu ?',
              caption: 'Bette : Qui est à la porte ? Qui cherches-tu ? ... Qui est-ce qui est à la porte ? Qui est-ce que tu cherches ? Avec qui est-elle partie ?',
              captionZh: 'Bette：谁在门口（Qui / Qui est-ce qui）？你在找谁（Qui cherches-tu / Qui est-ce que tu cherches）？她和谁一起走了（Avec qui）？'
            },
            table: {
              headers: ['Grammatical Role', 'People (人)', 'Things / Facts (物/事)'],
              rows: [
                { cols: ['Subject (作主语)', 'qui · qui est-ce qui (Qui vient ?)', 'qu’est-ce qui ONLY (Qu’est-ce qui se passe ?)'], audio: 'Qui est à la porte ? Qu’est-ce qui se passe ?' },
                { cols: ['Direct Object (作直宾)', 'qui (+ inv.) · qui est-ce que', 'que (+ inv.) · qu’est-ce que (+ normal order)'], audio: 'Qui cherches-tu ? Qu’est-ce que tu fais ?' },
                { cols: ['Object of Preposition (介词后)', 'prep + qui (Avec qui ? Pour qui ?)', 'prep + quoi (De quoi ? À quoi ?)'], audio: 'Avec qui est-elle partie ? De quoi tu parles ?' }
              ]
            }
          },
          {
            id: 'i11_5_things',
            heading: '2. Questions About Things: Qu’est-ce qui / Qu’est-ce que / Quoi (Caught Together!)',
            headingZh: '二、问物系列：qu’est-ce qui / qu’est-ce que / quoi（抓包现场！）',
            lead: 'Catch Tammy walking in on Tex and Bette: "Qu’est-ce qui se passe ?" (subject) vs. "Qu’est-ce que tu fais ?" (direct object) vs. "De quoi tu parles ?" (after preposition "de"):',
            leadZh: '抓紧分辨下面这段抓包对话里的三大“什么”：`Qu’est-ce qui`（主语）vs `Qu’est-ce que`（宾语）vs `De quoi`（介词后）：',
            cartoon: {
              src: './assets/tex_cartoons/int5_elle.gif',
              alt: 'Tammy surprend Tex et Bette : Qu’est-ce qui se passe ? Qu’est-ce que tu fais avec elle ?',
              caption: 'Tammy : Qu’est-ce qui se passe, Tex ? Qu’est-ce que tu fais avec... elle ! — Tex : Oh, de quoi tu parles ?',
              captionZh: 'Tammy：发生什么事了（Qu’est-ce qui 作主语）？你在和……她干什么呢（Qu’est-ce que 作宾语）！— Tex：啊，你说什么呢（de quoi 跟在介词后）？'
            },
            quickCheck: {
              prompt: 'Complete accurately: "___ te fait peur (subj.), et ___ penses-tu (prep. à) ?"',
              promptZh: '同时选对“什么（主语）”与“介词 + 什么”：___ te fait peur, et ___ penses-tu ?',
              options: [
                'Qu’est-ce qui ... à quoi',
                'Qu’est-ce que ... à que',
                'Qui est-ce qui ... à quoi',
                'Que ... à quoi'
              ],
              answerIdx: 0,
              explain: 'Thing as subject ("What scares you?") = ONLY "Qu’est-ce qui"! After preposition "à" ("penser à"), use "quoi" → "à quoi penses-tu ?"',
              explainZh: '“什么事吓到了你”（事物作主语）只能用 Qu’est-ce qui；跟在介词 à 后面问物用 quoi → à quoi penses-tu ?！'
            }
          }
        ],
        drills: [
          {
            id: 'dt11_5_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1 (Use qui est-ce qui / qui est-ce que / qu’est-ce qui / qu’est-ce que): Bette : ___ tu préfères, Tex ? Moi ou Tammy ?',
            promptZh: 'Tex 原题 #1：Bette：Tex，你更喜欢谁呀？我还是 Tammy？（问人作直宾，用长形式 qui est-ce que）：',
            answers: ["Qui est-ce que", "qui est-ce que", 'Qui'],
            hint: 'Person as direct object (tu préfères ___): Qui est-ce que!',
            audio: 'Qui est-ce que tu préfères, Tex ? Moi ou Tammy ?',
            explain: 'Qui est-ce que (asking WHOM as direct object of préfères!).',
            explainZh: '指人作 préfères 的直接宾语 → Qui est-ce que（注意后面是主谓语序 tu préfères）。'
          },
          {
            id: 'dt11_5_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tex : ___ on mange ce soir ? (Use long form)',
            promptZh: 'Tex 原题 #2：Tex：今晚我们吃什么？（问物作直宾，用 qu’est-ce qu’）：',
            answers: ["Qu'est-ce qu'", "qu'est-ce qu'", 'Qu’est-ce qu’', 'qu’est-ce qu’', "Qu'est-ce que", 'Qu’est-ce que'],
            hint: 'Thing as direct object before vowel "on" = Qu’est-ce qu’!',
            audio: 'Qu’est-ce qu’on mange ce soir ?',
            explain: 'Qu’est-ce qu’on mange ce soir ? (elide -e before "on"!).',
            explainZh: '问食物作直宾，遇到元音 on 缩写为 Qu’est-ce qu’。'
          },
          {
            id: 'dt11_5_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Corey : ___ vient au cinéma avec moi ? (Use long form or short "Qui")',
            promptZh: 'Tex 原题 #3：Corey：谁和我一起去看电影呀？（问人作主语）：',
            answers: ['Qui est-ce qui', 'qui est-ce qui', 'Qui'],
            hint: 'Person as subject of "vient" = Qui est-ce qui (or Qui)!',
            audio: 'Qui est-ce qui vient au cinéma avec moi ?',
            explain: 'Qui est-ce qui (subject person!).',
            explainZh: '问人作主语 → Qui est-ce qui（或 Qui）。'
          },
          {
            id: 'dt11_5_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Tex : Tammy, ___ ne va pas ? (Thing as subject!)',
            promptZh: 'Tex 原题 #4：Tex：Tammy，怎么了 / 哪里不对劲？（事物作主语，只能填哪一个！）：',
            answers: ["qu'est-ce qui", "Qu'est-ce qui", 'qu’est-ce qui', 'Qu’est-ce qui'],
            hint: 'Thing as subject ("What is wrong?") = qu’est-ce qui!',
            audio: 'Tammy, qu’est-ce qui ne va pas ?',
            explain: 'qu’est-ce qui (subject of "ne va pas").',
            explainZh: '“什么事出问题了”作主语只能用 **qu’est-ce qui**！'
          },
          {
            id: 'dt11_5_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tammy : ___ aime le livre de Tex ? (Person as subject — long form)',
            promptZh: 'Tex 原题 #5：Tammy：谁喜欢 Tex 写的书啊？（问人作主语）：',
            answers: ['Qui est-ce qui', 'qui est-ce qui', 'Qui'],
            hint: 'Person as subject = Qui est-ce qui (or Qui).',
            audio: 'Qui est-ce qui aime le livre de Tex ?',
            explain: 'Qui est-ce qui.',
            explainZh: '问人作主语 → Qui est-ce qui。'
          },
          {
            id: 'dt11_5_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Bette : Pardon ? ___ Tex dit ? (Thing as direct object — long form!)',
            promptZh: 'Tex 原题 #6：Bette：不好意思？Tex 刚才说啥？（问物作直宾）：',
            answers: ["Qu'est-ce que", "qu'est-ce que", 'Qu’est-ce que', 'qu’est-ce que'],
            hint: 'Direct object thing before consonant Tex = Qu’est-ce que!',
            audio: 'Pardon ? Qu’est-ce que Tex dit ?',
            explain: 'Qu’est-ce que Tex dit ? ("que" cannot stand before non-inverted "Tex dit"!).',
            explainZh: '由于后面是正语序 Tex dit，只能用长形式 Qu’est-ce que（短形式 Que 必须配倒装 Que dit Tex ?）。'
          },
          {
            id: 'dt11_5_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tex : ___ j’ai fait ? (Thing as object — long form)',
            promptZh: 'Tex 原题 #7：Tex：我干了啥呀？（问物作直宾）：',
            answers: ["Qu'est-ce que", "qu'est-ce que", 'Qu’est-ce que', 'qu’est-ce que'],
            hint: 'Direct object thing before "j’ai fait" = Qu’est-ce que!',
            audio: 'Qu’est-ce que j’ai fait ?',
            explain: 'Qu’est-ce que j’ai fait ?',
            explainZh: 'Qu’est-ce que j’ai fait ?（问物作直宾）。'
          },
          {
            id: 'dt11_5_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Fiona : ___ aime Lyon ? (Person as subject — long form)',
            promptZh: 'Tex 原题 #8：Fiona：谁喜欢里昂这座城市？（问人作主语）：',
            answers: ['Qui est-ce qui', 'qui est-ce qui', 'Qui'],
            hint: 'Person as subject = Qui est-ce qui (or Qui).',
            audio: 'Qui est-ce qui aime Lyon ?',
            explain: 'Qui est-ce qui aime Lyon ?',
            explainZh: '问人作主语 → Qui est-ce qui。'
          },
          {
            id: 'dt11_5_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Joe-Bob : ___ tu vas acheter ? (Thing as object — long form)',
            promptZh: 'Tex 原题 #9：Joe-Bob：你打算买什么？（问物作直宾）：',
            answers: ["Qu'est-ce que", "qu'est-ce que", 'Qu’est-ce que', 'qu’est-ce que'],
            hint: 'Direct object thing = Qu’est-ce que.',
            audio: 'Qu’est-ce que tu vas acheter ?',
            explain: 'Qu’est-ce que tu vas acheter ?',
            explainZh: '问物作 acheter 的直宾 → Qu’est-ce que。'
          },
          {
            id: 'dt11_5_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tammy : ___ justifie mon amour pour Tex ? (Thing as subject!)',
            promptZh: 'Tex 原题 #10：Tammy：究竟是什么证明了我对 Tex 的爱？（事物作主语）：',
            answers: ["Qu'est-ce qui", "qu'est-ce qui", 'Qu’est-ce qui', 'qu’est-ce qui'],
            hint: 'Subject of "justifie" (a thing/reason) = Qu’est-ce qui!',
            audio: 'Qu’est-ce qui justifie mon amour pour Tex ?',
            explain: 'Qu’est-ce qui (subject thing!).',
            explainZh: '作动词 justifie 的主语（问事/原因），只能用 Qu’est-ce qui！'
          },
          {
            id: 'dt11_5_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Tex : ___ nous invitons ce soir ? (Person as object — long form!)',
            promptZh: 'Tex 原题 #11：Tex：我们今晚邀请谁呀？（问人作直宾，用长形式）：',
            answers: ['Qui est-ce que', 'qui est-ce que'],
            hint: 'Person as direct object ("whom") before "nous invitons" = Qui est-ce que!',
            audio: 'Qui est-ce que nous invitons ce soir ?',
            explain: 'Qui est-ce que nous invitons ce soir ?',
            explainZh: '问人作 invitons 的直接宾语 → Qui est-ce que！'
          },
          {
            id: 'dt11_5_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Joe-Bob : ___ motive les femmes ? (Thing as subject!)',
            promptZh: 'Tex 原题 #12：Joe-Bob：到底是什么打动/激励女性呀？（事物作主语）：',
            answers: ["Qu'est-ce qui", "qu'est-ce qui", 'Qu’est-ce qui', 'qu’est-ce qui'],
            hint: 'Subject of "motive" (non-person) = Qu’est-ce qui!',
            audio: 'Qu’est-ce qui motive les femmes ?',
            explain: 'Qu’est-ce qui motive les femmes ?',
            explainZh: '作 motive 的主语问“什么因素” → 只能用 Qu’est-ce qui！'
          }
        ],
        related: [
          { chapterId: 'ch11_interrogatives', pageId: 'i11_4', label: 'Back to 11.4 Adjective Quel' },
          { chapterId: 'ch11_interrogatives', pageId: 'i11_6', label: '11.6 Pronoun Lequel ("which one?")' }
        ]
      },

      /* =========================================================
         PAGE 11.6: LEQUEL / AUQUEL / DUQUEL (int6)
      ========================================================= */
      {
        id: 'i11_6',
        code: '11.6',
        group: 'Interrogative Pronouns',
        shortTitle: 'Lequel / Auquel / Duquel',
        title: 'Le Pronom Lequel: Replacing Quel + Noun & Contracting With À / De',
        titleZh: '代词 Lequel（哪一个 / 哪几个）：代替 quel+名词，以及与 à / de 的强制缩合',
        estMin: 4,
        summary: 'While QUEL is an adjective ("Quel livre ?"), LEQUEL / LAQUELLE / LESQUELS / LESQUELLES is a PRONOUN meaning "which one(s)?" — replacing "quel + noun" completely ("Lesquels tu aimes ?", "Tu préfères lequel ?"). Just like definite articles ("le, les") contract with "à" and "de", the masculine/plural forms of "lequel" MUST contract whenever preceded by "à" or "de": (1) WITH À: auquel, à laquelle, auxquels, auxquelles ("Tu penses à quel film ?" → "Auquel penses-tu ?"); (2) WITH DE: duquel, de laquelle, desquels, desquelles ("Tu parles de quelle fille ?" → "De laquelle parles-tu ?"). Note that feminine singular "laquelle" NEVER contracts ("à laquelle", "de laquelle")!',
        summaryZh: '区别很简单：`Quel` 是**形容词**，后面**必须跟名词**（*Quel film préfères-tu ?*）；而 **`Lequel / Laquelle / Lesquels / Lesquelles`** 是**代词**，直接**独立替代“哪个 + 名词”**（“哪一个 / 哪几个？”如 *Lesquels tu aimes ? / Tu préfères lequel ?*）。它必须记住先前代替的名词**阴阳性与单复数**；一旦前面撞上介词 **`à`** 或 **`de`**，阳性单数和所有复数形式**必须强制发生缩合**（只有阴性单数 `laquelle` 保持分写 `à laquelle` / `de laquelle`！）：① 搭配 **`à`**：`auquel`（阳单）、`à laquelle`（阴单）、`auxquels`（阳复）、`auxquelles`（阴复）；② 搭配 **`de`**：`duquel`（阳单）、`de laquelle`（阴单）、`desquels`（阳复）、`desquelles`（阴复）。',
        cheatSummary: [
          { label: 'Complete Contraction Grid of Lequel', rule: 'Base: lequel (m.sg) / laquelle (f.sg) / lesquels (m.pl) / lesquelles (f.pl). + À: auquel / à laquelle / auxquels / auxquelles. + DE: duquel / de laquelle / desquels / desquelles!', ruleZh: '缩合口诀：凡见 le/les 就合体——auquel / auxquels / auxquelles 与 duquel / desquels / desquelles；唯独阴性单数保持 à laquelle / de laquelle！' },
          { label: 'How to Pick the Preposition: Match the Verb!', rule: 'parler DE qqn/qqch → duquel / de laquelle. penser À / aller À → auquel / à laquelle. Stand-alone COD/Subject → lequel / laquelle / lesquels / lesquelles.', ruleZh: '先看动词搭配介词：parler DE → duquel/de laquelle；penser À / aller À → auquel/à laquelle；不带介词直接问“哪一个”就选 lequel 系列。' }
        ],
        sections: [
          {
            id: 'i11_6_grid',
            heading: '1. Complete Lequel / Auquel / Duquel Matrix & Corey’s Bug Movies',
            headingZh: '一、lequel 全变格缩合矩阵与昆虫电影对话',
            lead: 'Notice how Tammy asks Corey about bug movies ("les films" = masc. pl. → "Lesquels tu aimes ? Et tu préfères lequel ?"):',
            leadZh: '背熟下表三行四列全部缩合写法，再看 Tammy 和 Corey 聊昆虫电影时如何在 `lesquels / lequel` 间切换单复数：',
            cartoon: {
              src: './assets/tex_cartoons/int6_lequel.gif',
              alt: 'Corey : J’adore les films sur les insectes ! Tammy : Lesquels tu aimes ? Tu préfères lequel ?',
              caption: 'Corey : J’adore les films sur les insectes ! — Tammy : Lesquels tu aimes ? Et tu préfères lequel ?',
              captionZh: 'Corey：我超爱昆虫题材电影（les films 阳复）！— Tammy：你喜欢哪几部（Lesquels）？那你最喜欢哪一部（lequel）？'
            },
            table: {
              headers: ['Preposition', 'Masc. Sg.', 'Fem. Sg.', 'Masc. Pl.', 'Fem. Pl.'],
              rows: [
                { cols: ['None (Subject / COD)', 'lequel', 'laquelle', 'lesquels', 'lesquelles'], audio: 'Lesquels tu aimes ? Tu préfères lequel ?' },
                { cols: ['With à (penser à / aller à)', 'auquel', 'à laquelle', 'auxquels', 'auxquelles'], audio: 'Auquel penses-tu ? À laquelle vas-tu ?' },
                { cols: ['With de (parler de / besoin de)', 'duquel', 'de laquelle', 'desquels', 'desquelles'], audio: 'Duquel parles-tu ? De laquelle parles-tu ?' }
              ]
            },
            quickCheck: {
              prompt: 'Pick the sentence with ZERO pronoun or contraction errors:',
              promptZh: '选出 **`lequel` 缩合与性别配合**均完全正确的一句：',
              options: [
                'De mes deux tantes, de laquelle parles-tu ? Et de tes frères, duquel parles-tu ?',
                'À quel film penses-tu ? — À lequel penses-tu ?',
                'Entre ces deux robes, lequel préfères-tu ?',
                'Tu as parlé à des professeurs : auquel as-tu parlé ? (all masc. pl.)'
              ],
              answerIdx: 0,
              explain: 'la tante (fem. sg. + de) → de laquelle; le frère (masc. sg. + de) → duquel! Remember: "à + lequel" MUST contract to "auquel" (never "à lequel"), and "une robe" = laquelle!',
              explainZh: 'tante 阴单 + de = de laquelle；frère 阳单 + de = duquel！注意 à+lequel 必缩成 auquel（绝没有 à lequel），而 robe 是阴性！'
            }
          }
        ],
        drills: [
          {
            id: 'dt11_6_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Bette : Entre ces gâteaux, ___ choisis-tu ? (un gâteau — m.sg.)',
            promptZh: 'Tex 原题 #1：Bette：这几块蛋糕里，你挑哪一块？（le gâteau 阳性单数）：',
            answers: ['lequel'],
            hint: 'un gâteau (masc. sg., no prep.) → lequel.',
            audio: 'Entre ces gâteaux, lequel choisis-tu ?',
            explain: 'gâteau is masculine singular → lequel.',
            explainZh: '问哪“一个”蛋糕（le gâteau 阳单）→ lequel。'
          },
          {
            id: 'dt11_6_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tex : Mon admiratrice ? ___ parles-tu ? (parler de + fem. sg.)',
            promptZh: 'Tex 原题 #2：Tex：我的女粉丝？你说的是哪一位？（parler de + 阴性单数）：',
            answers: ['De laquelle', 'de laquelle'],
            hint: 'parler DE + une admiratrice (fem. sg.) → De laquelle!',
            audio: 'Mon admiratrice ? De laquelle parles-tu ?',
            explain: 'parler de + fem. sg. → De laquelle!',
            explainZh: 'parler de + 阴性单数 admiratrice → De laquelle。'
          },
          {
            id: 'dt11_6_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Corey : Tu veux voir un film ? ___ penses-tu ? (penser à + masc. sg.)',
            promptZh: 'Tex 原题 #3：Corey：你想看电影？你心仪哪一部呢？（penser à + le film，强制缩合！）：',
            answers: ['Auquel'],
            hint: 'penser À + un film (lequel) contracts → Auquel!',
            audio: 'Tu veux voir un film ? Auquel penses-tu ?',
            explain: 'à + lequel ALWAYS contracts to Auquel!',
            explainZh: 'penser à + lequel 强制缩合为 **Auquel**！'
          },
          {
            id: 'dt11_6_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Tex : Entre ces deux cravates, ___ dois-je porter ? (une cravate — f.sg.)',
            promptZh: 'Tex 原题 #4：Tex：这两条领带，我该系哪一条？（la cravate 阴性单数）：',
            answers: ['laquelle'],
            hint: 'une cravate (fem. sg.) → laquelle.',
            audio: 'Entre ces deux cravates, laquelle dois-je porter ?',
            explain: 'la cravate (fem. sg.) → laquelle.',
            explainZh: 'cravate 是阴性名词，挑一条 → laquelle。'
          },
          {
            id: 'dt11_6_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tex : Mon poème ? ___ parles-tu ? (parler de + un poème — m.sg.)',
            promptZh: 'Tex 原题 #5：Tex：我的诗？你说的是哪一首？（parler de + le poème，强制缩合！）：',
            answers: ['Duquel'],
            hint: 'parler DE + le poème (lequel) contracts → Duquel!',
            audio: 'Mon poème ? Duquel parles-tu ?',
            explain: 'de + lequel ALWAYS contracts to Duquel!',
            explainZh: 'parler de + lequel 强制缩合为 **Duquel**！'
          },
          {
            id: 'dt11_6_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Corey : Je vais à l’université Texas A&M. Et toi, ___ vas-tu ? (aller à + une université — f.sg.)',
            promptZh: 'Tex 原题 #6：Corey：我去农工大学，那你去哪一所大学呢？（aller à + une université 阴性单数）：',
            answers: ['à laquelle'],
            hint: 'aller à + l’université (fem. sg.) → à laquelle (does NOT contract!).',
            audio: 'Et toi, à laquelle vas-tu ?',
            explain: 'à + laquelle never contracts → à laquelle.',
            explainZh: 'aller à + 阴性单数 université 不缩合 → à laquelle。'
          },
          {
            id: 'dt11_6_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tex : Tammy, tu as lu mes livres. ___ est le meilleur ? (un livre — m.sg.)',
            promptZh: 'Tex 原题 #7：Tex：Tammy，你读了我的几本书，哪一本最好？（注意后面动词是单数 est！）：',
            answers: ['Lequel'],
            hint: 'Singular verb "est" ("which ONE") + un livre (masc. sg.) → Lequel!',
            audio: 'Lequel est le meilleur ?',
            explain: 'Lequel (masc. sg., matching "est le meilleur"!).',
            explainZh: '虽然前面说了 mes livres，但问句动词是单数 est（哪“一”本最好）→ Lequel！'
          },
          {
            id: 'dt11_6_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Fiona : Tammy ! Bette ! ___ de vous deux connaît Lyon ? (fem. sg. "which one")',
            promptZh: 'Tex 原题 #8：Fiona：Tammy！Bette！你们俩之中哪一位熟悉里昂？（女性“其中之一”）：',
            answers: ['Laquelle'],
            hint: 'Which ONE of two women + singular verb connaît → Laquelle!',
            audio: 'Laquelle de vous deux connaît Lyon ?',
            explain: 'Laquelle (fem. sg., paired with singular "connaît").',
            explainZh: '两位女性里问“哪一位（单数动词 connaît）” → Laquelle。'
          },
          {
            id: 'dt11_6_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tex : Tammy, tu ne peux pas acheter deux robes ! ___ préfères-tu ? (une robe — f.sg.)',
            promptZh: 'Tex 原题 #9：Tex：Tammy，你不能买两条裙子！你更喜欢哪一条？（la robe 阴性单数）：',
            answers: ['Laquelle'],
            hint: 'la robe (fem. sg.) → Laquelle.',
            audio: 'Laquelle préfères-tu ?',
            explain: 'Laquelle.',
            explainZh: 'la robe 阴性单数 → Laquelle。'
          },
          {
            id: 'dt11_6_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tammy : Tex, entre ces boucles d’oreilles, ___ dois-je porter ? (les boucles d’oreilles — f.pl.)',
            promptZh: 'Tex 原题 #10：Tammy：Tex，这几对耳环里，我该戴哪一对（或哪几只）？（les boucles 阴性复数）：',
            answers: ['lesquelles'],
            hint: 'les boucles d’oreilles = feminine PLURAL → lesquelles!',
            audio: 'Entre ces boucles d’oreilles, lesquelles dois-je porter ?',
            explain: 'une boucle d’oreille (fem. pl.) → lesquelles.',
            explainZh: 'boucles d’oreilles 是阴性复数 → lesquelles！'
          },
          {
            id: 'dt11_6_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Tex : Je veux acheter des lunettes de soleil ! ___ me conseilles-tu ? (les lunettes — f.pl.)',
            promptZh: 'Tex 原题 #11：Tex：我想买墨镜！你推荐哪一副？（les lunettes 永远是阴性复数！）：',
            answers: ['Lesquelles'],
            hint: 'des lunettes = ALWAYS feminine plural → Lesquelles!',
            audio: 'Je veux acheter des lunettes de soleil ! Lesquelles me conseilles-tu ?',
            explain: 'les lunettes is always feminine plural → Lesquelles!',
            explainZh: '高频名词性别：les lunettes（眼镜）永远按阴性复数配合 → Lesquelles！'
          },
          {
            id: 'dt11_6_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tex : Tu aimes les livres ? ___ préfères-tu ? Les romans d’amour ou les romans policiers ? (lesquels — m.pl.)',
            promptZh: 'Tex 原题 #12：Tex：你喜欢看书吗？你更喜欢哪几类？（阳性复数）：',
            answers: ['Lesquels'],
            hint: 'les livres / les romans (masc. pl.) → Lesquels!',
            audio: 'Lesquels préfères-tu ? Les romans d’amour ou les romans policiers ?',
            explain: 'Lesquels (masc. pl.).',
            explainZh: '问哪一类“书 / 小说（阳性复数）”→ Lesquels！'
          }
        ],
        related: [
          { chapterId: 'ch11_interrogatives', pageId: 'i11_5', label: 'Back to 11.5 Qui / Que / Quoi' },
          { chapterId: 'ch11_interrogatives', pageId: 'i11_7', label: '11.7 Question Words (où/quand/comment...)' }
        ]
      },

      /* =========================================================
         PAGE 11.7: INTERROGATIVE WORDS (int7)
      ========================================================= */
      {
        id: 'i11_7',
        code: '11.7',
        group: 'Question Words',
        shortTitle: 'Où, Quand, Comment, Pourquoi, Combien',
        title: 'Mots Interrogatifs: Où, Quand, Comment, Pourquoi, Combien (+ De + Noun)',
        titleZh: '核心疑问副词（où / quand / comment / pourquoi / combien de）：语序与无冠词铁律',
        estMin: 4,
        summary: 'French’s FIVE workhorse question adverbs — OÙ (where), QUAND (when), COMMENT (how), POURQUOI (why), and COMBIEN (how much) / COMBIEN DE (how many, ALWAYS followed directly by a plural noun WITHOUT des/les!) — combine cleanly with BOTH "est-ce que" ("Où est-ce que Tex est né ?") AND inversion ("Où Tex est-il né ?")! Watch THREE smart details: (1) With "est-ce que", the question word ALWAYS comes FIRST ("Combien de cigarettes est-ce qu’il fume ?", NOT "Est-ce que combien..."); (2) With short single verbs ("Où habites-tu ?", "Comment vas-tu ?"), inversion sounds sleek, EXCEPT "pourquoi" in complex inversion or "est-ce que" ("Pourquoi porte-t-il un béret ?"); (3) Standalone "Comment ?" also politely means "Pardon? / Say that again?" when you didn’t catch what someone said!',
        summaryZh: '法语五大高频信息疑问副词——**`Où`**（哪里）、**`Quand`**（什么时候）、**`Comment`**（怎样 / 没听清时单独说“您再说一遍？”）、**`Pourquoi`**（为什么，回答用 `parce que`）、**`Combien`**（多少钱 / 程度多少）及 **`Combien de + 复数名词`**（多少个……）——**既可接 `est-ce que` 也可接倒装**！只需盯死三个细节：① 无论哪种词，放在句首时 **`est-ce que` 永远在疑问词之后**（*Combien de cigarettes est-ce qu’il fume ?*，绝对不能说 *Est-ce que combien...*）；② **`Combien de`** 后面直接裸接复数名词，**绝不加冠词 `des / les`**（*Combien de cigarettes*）；③ 辨清 **`où`**（哪里，带重音符）与 **`ou`**（或者），以及 **`C’est quand ?`** 询问“是什么时候”的口语高频用法！',
        cheatSummary: [
          { label: 'The 5 Question Adverbs + Combien de Rule', rule: 'où (where) · quand (when) · comment (how / pardon?) · pourquoi (why → parce que) · combien (how much) · combien de + plural noun (NO "des"!).', ruleZh: '五大疑问副词：où（哪）/ quand（何时）/ comment（怎样）/ pourquoi（为何）/ combien (de)（多少，de 后直接接裸复数名词不加 des）！' },
          { label: 'Word Order With Est-ce que & Inversion', rule: '[Question Word] + est-ce que + Subject + Verb ("Quand est-ce qu’il est né ?") OR [Question Word] + Verb-Subject ("Quand est-il né ?"). NEVER put est-ce que BEFORE the question word!', ruleZh: '语序公式：[疑问词] + est-ce que + 主语 + 动词；或者 [疑问词] + 动词-主语！（注意：倒装时若前面有 pourquoi 等长词，更推荐结合人称或名词复指）。' }
        ],
        sections: [
          {
            id: 'i11_7_words',
            heading: '1. Où / Quand / Comment / Pourquoi / Combien (Inversion & Est-ce que)',
            headingZh: '一、五大疑问副词对比表与 Bette 打听 Tex 老底对话',
            lead: 'Listen to inquisitive Bette questioning Edouard twice for every single fact about Tex — first with formal inversion, then repeating with "est-ce que":',
            leadZh: '看 Bette 对 Edouard 展开五连追问：同一句话先用正式倒装说一遍，Edouard 装聋作哑问“Comment ?（啥？）”，Bette 又换 `est-ce que` 说一遍！',
            cartoon: {
              src: './assets/tex_cartoons/int7_combien.gif',
              alt: 'Bette : Combien est-il payé ? Combien de cigarettes fume-t-il ?',
              caption: 'Bette : Pourquoi porte-t-il un béret ? Combien est-il payé ? Combien de cigarettes fume-t-il par jour ? — Edouard : Comment ?',
              captionZh: 'Bette：他为什么总戴贝雷帽（Pourquoi）？他工资多少（Combien）？他每天抽多少支烟（Combien de cigarettes）？— Edouard：你说啥（Comment ?）？'
            },
            table: {
              headers: ['Question Word', 'Inversion Version', 'Est-ce que Version'],
              rows: [
                { cols: ['Où (where)', 'Où Tex est-il né ?', 'Où est-ce que Tex est né ?'], audio: 'Où Tex est-il né ? Où est-ce que Tex est né ?' },
                { cols: ['Quand (when)', 'Quand a-t-il rencontré Tammy ?', 'Quand est-ce qu’il a rencontré Tammy ?'], audio: 'Quand a-t-il rencontré Tammy ? C’est quand ?' },
                { cols: ['Comment (how / pardon?)', 'Comment est-il venu aux États-Unis ?', 'Comment est-ce qu’il est venu ? Comment vas-tu ?'], audio: 'Comment est-il venu ? Comment allez-vous ?' },
                { cols: ['Pourquoi (why)', 'Pourquoi porte-t-il toujours un béret ?', 'Pourquoi est-ce qu’il porte toujours un béret ?'], audio: 'Pourquoi porte-t-il toujours un béret ?' },
                { cols: ['Combien (how much)', 'Combien est-il payé ? Combien ça coûte ?', 'Combien est-ce qu’il est payé ? Combien est-ce que ça coûte ?'], audio: 'Combien est-ce qu’il est payé ? Combien ça coûte ?' },
                { cols: ['Combien de + Noun (how many)', 'Combien de cigarettes fume-t-il ?', 'Combien de cigarettes est-ce qu’il fume par jour ?'], audio: 'Combien de cigarettes est-ce qu’il fume par jour ?' }
              ]
            },
            dialogue: {
              title: 'Bette Grilling Edouard About Tex’s Past',
              titleZh: '小对话：Bette 查户口式连环追问',
              lines: [
                { speaker: 'Bette', fr: 'Comment est-il venu aux États-Unis ? — Edouard : Qu’est-ce que tu as dit ? — Bette : Comment est-ce qu’il est venu aux États-Unis ?', en: 'How did he come to the US? — Edouard: What did you say? — Bette: How did he come to the US?', zh: '倒装 Comment est-il venu 与口语 Comment est-ce qu’il est venu 完全同义，Edouard 故意逗她“Il a été expulsé de France !（被法国驱逐出境的！）”。' },
                { speaker: 'Bette', fr: 'Pourquoi porte-t-il toujours un béret ? — Edouard : Il n’a pas de cheveux ! Sans chapeau il risque des coups de soleil.', en: 'Why does he always wear a beret? — He has no hair! Without a hat he risks sunburn.', zh: '问理由用 Pourquoi，回答原因时常用 parce que 或直接陈述事实。' },
                { speaker: 'Bette', fr: 'Combien de cigarettes fume-t-il par jour ? — Edouard : Je ne sais pas, mais tu es bien curieuse !', en: 'How many cigarettes does he smoke per day? — I don’t know, but you’re very curious!', zh: '注意 Combien de 后面直接跟裸复数 cigarettes（不加 des！），整个“Combien de + 名词”短语一起放在 est-ce que 前面。' }
              ]
            },
            quickCheck: {
              prompt: 'Pick the sentence with ZERO word-order or article mistakes:',
              promptZh: '选出 **`Combien / Où / Pourquoi` 语序与冠词搭配**完全正确的一句：',
              options: [
                'Combien de langues parlez-vous ? / Où est-ce que tu vas cet été ?',
                'Combien des langues est-ce que vous parlez ?',
                'Est-ce que quand le train part ?',
                'Ou habite Tammy ? — A Lyon !'
              ],
              answerIdx: 0,
              explain: 'Use "Combien de" + bare plural noun ("Combien de langues", NEVER "des"), put question words BEFORE "est-ce que" ("Où est-ce que..."), and always write "Où" with the grave accent!',
              explainZh: 'Combien de 后接裸名词不加 des；疑问词永远放 est-ce que 前面；“哪里”必须写带重音符的 Où！'
            }
          }
        ],
        drills: [
          {
            id: 'dt11_7_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Bette : ___ est-ce que tu vas en vacances cet été ? En France ?',
            promptZh: 'Tex 原题 #1：Bette：你今年夏天去**哪里**度假？去法国吗？（句首大写）：',
            answers: ['Où'],
            hint: 'En France (a place) → Où!',
            audio: 'Où est-ce que tu vas en vacances cet été ? En France ?',
            explain: 'Où (where, with grave accent ù!).',
            explainZh: '询问地点用 **Où**（带重音符）。'
          },
          {
            id: 'dt11_7_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tex : ___ est-ce que je ne suis pas bigame ?',
            promptZh: 'Tex 原题 #2：Tex：**为什么**我就不能娶两个老婆（一夫多妻）呢？（句首大写）：',
            answers: ['Pourquoi'],
            hint: 'Asking for a reason ("Why am I not...?") = Pourquoi!',
            audio: 'Pourquoi est-ce que je ne suis pas bigame ?',
            explain: 'Pourquoi.',
            explainZh: '询问原因用 **Pourquoi**。'
          },
          {
            id: 'dt11_7_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tammy : ___ est-ce qu’on fait des crêpes ? J’ai besoin d’une recette.',
            promptZh: 'Tex 原题 #3：Tammy：可丽饼**怎么**做呀？我需要一个菜谱（句首大写）：',
            answers: ['Comment'],
            hint: 'Asking for a recipe / method ("How?") = Comment!',
            audio: 'Comment est-ce qu’on fait des crêpes ?',
            explain: 'Comment ("how").',
            explainZh: '询问方式方法用 **Comment**。'
          },
          {
            id: 'dt11_7_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Corey : ___ est-ce que le film commence ? À 9 heures ?',
            promptZh: 'Tex 原题 #4：Corey：电影**什么时候**开场？九点吗？（句首大写）：',
            answers: ['Quand'],
            hint: 'À 9 heures (a time) → Quand!',
            audio: 'Quand est-ce que le film commence ? À neuf heures ?',
            explain: 'Quand ("when").',
            explainZh: '询问时间用 **Quand**。'
          },
          {
            id: 'dt11_7_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tex : ___ est-ce que ça coûte ? 20 dollars ?',
            promptZh: 'Tex 原题 #5：Tex：这玩意儿**多少**钱？20 美元吗？（句首大写）：',
            answers: ['Combien'],
            hint: 'Asking price ("How much?") = Combien!',
            audio: 'Combien est-ce que ça coûte ? Vingt dollars ?',
            explain: 'Combien (no "de" when no noun follows!).',
            explainZh: '问价钱用 **Combien**（后面不接名词，不用加 de）。'
          },
          {
            id: 'dt11_7_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tammy : Tex, ___ est-ce que tu vas m’épouser ? En 2030 ?',
            promptZh: 'Tex 原题 #6：Tammy：Tex，你到底**什么时候**娶我呀？难道要到 2030 年吗？（逗号后小写）：',
            answers: ['quand'],
            hint: 'Asking for time ("when") → quand.',
            audio: 'Tex, quand est-ce que tu vas m’épouser ?',
            explain: 'quand.',
            explainZh: '询问时间，逗号后小写 → quand。'
          },
          {
            id: 'dt11_7_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tex : Tammy, ___ est-ce que tu trouves mes poèmes ? Bons ou mauvais ?',
            promptZh: 'Tex 原题 #7：Tex：Tammy，你觉得我的诗**怎么样**？好还是不好？（用法语“如何/怎样”问评价！）：',
            answers: ['comment'],
            hint: 'In French, "What do you think of...?" uses "Comment trouves-tu...?" → comment!',
            audio: 'Tammy, comment est-ce que tu trouves mes poèmes ?',
            explain: '"Comment trouves-tu... ?" = "How do you find / What do you think of... ?"',
            explainZh: '法语固定表达：“你觉得……怎么样”说 **Comment trouves-tu… ?**（不要直译成 Qu’est-ce que tu trouves…！）。'
          },
          {
            id: 'dt11_7_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Fiona : ___ est-ce que vous allez manger ce soir ? Au MacDo ?',
            promptZh: 'Tex 原题 #8：Fiona：你们今晚去**哪里**吃？麦当劳吗？（句首大写）：',
            answers: ['Où'],
            hint: 'Au MacDo (a place) → Où!',
            audio: 'Où est-ce que vous allez manger ce soir ?',
            explain: 'Où.',
            explainZh: '询问地点用 **Où**。'
          },
          {
            id: 'dt11_7_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Edouard : Ah Tex, bonjour. ___ vas-tu aujourd’hui ?',
            promptZh: 'Tex 原题 #9：Edouard：你好呀 Tex，你今天**怎么样**？（句首大写）：',
            answers: ['Comment'],
            hint: 'Comment vas-tu ? ("How are you?").',
            audio: 'Ah Tex, bonjour. Comment vas-tu aujourd’hui ?',
            explain: 'Comment vas-tu ?',
            explainZh: '日常寒暄“你好吗” → **Comment** vas-tu ?。'
          },
          {
            id: 'dt11_7_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tammy : ___ est-ce que Bette pèse ? Elle a grossi !',
            promptZh: 'Tex 原题 #10：Tammy：Bette 现在**有多**重啊？她胖了！（询问体重数值，句首大写）：',
            answers: ['Combien'],
            hint: 'Asking weight/measurement ("How much does she weigh?") = Combien!',
            audio: 'Combien est-ce que Bette pèse ? Elle a grossi !',
            explain: 'Combien (how much does she weigh).',
            explainZh: '询问重量或数额多少用 **Combien**。'
          },
          {
            id: 'dt11_7_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Tex : ___ est-ce qu’Edouard parle avec un accent français ? Parce qu’il est français !',
            promptZh: 'Tex 原题 #11：Tex：**为什么** Edouard 说英语带着法国口音？因为他是法国人嘛！（句首大写）：',
            answers: ['Pourquoi'],
            hint: 'Answer starts with "Parce que..." → question starts with Pourquoi!',
            audio: 'Pourquoi est-ce qu’Edouard parle avec un accent français ? Parce qu’il est français !',
            explain: 'Pourquoi ... ? Parce qu’il est français !',
            explainZh: '回答出现 Parce que（因为），问句必定是 **Pourquoi**（为什么）！'
          },
          {
            id: 'dt11_7_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tammy : C’est ___ l’anniversaire de Tex ?',
            promptZh: 'Tex 原题 #12：Tammy：Tex 的生日是**什么时候**？（口语高频短问句 C’est ___ ?）：',
            answers: ['quand'],
            hint: 'C’est quand ? ("When is...?")',
            audio: 'C’est quand, l’anniversaire de Tex ?',
            explain: 'C’est quand... ? (very common conversational question!).',
            explainZh: '极实用口语问句：C’est quand… ?（……是什么时候？）。'
          }
        ],
        related: [
          { chapterId: 'ch11_interrogatives', pageId: 'i11_6', label: 'Back to 11.6 Pronoun Lequel' },
          { chapterId: 'ch1_nouns', pageId: 'no_1_1', label: 'Full Tour Complete: Back to Ch 1 Nouns' }
        ]
      }
    ]
  });
})();
