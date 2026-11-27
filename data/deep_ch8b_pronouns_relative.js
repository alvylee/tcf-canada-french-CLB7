(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch8b_pronouns_relative',
    code: 'Ch 8B',
    level: 'A2–B2',
    category: 'pronouns_b',
    icon: '🎯',
    title: 'Pronouns II: Relative, Demonstrative, Possessive & Indefinite',
    titleZh: '第八章 B · 进阶代词（不定代词、指示 celui、物主 le mien 与关系代词 qui/que/dont/où/lequel）',
    subtitle: 'Tex-style deep mastery completing Chapter 8 (pro10–pro12 & pror1–pror3 split into 8 bite-sized pages): indefinite pronouns (quelqu’un, chacun/aucun, plusieurs, tous/tout, n’importe qui), demonstrative (celui/celle/ceux/celles, ceci/cela/ça), possessive (le mien..le leur + idioms), and the complete TCF B2 relative clause toolkit (qui, que, ce qui, ce que, dont, où, lequel & ce dont / ce à quoi) — with 8 original Tex cartoons & 94 drills.',
    subtitleZh: '完成 Tex 第八章代词全部内容（pro10–pro12 与 pror1–pror3 共 8 个小页）：不定代词家族（quelqu’un + de + 形容词、chacun vs aucun、tous vs tout、n’importe quoi）、指示代词（celui 系列、ceci/cela/ça）、物主代词（le mien 系列及习惯用语）以及 TCF B2 阅读与写作核心关系从句（qui / que 及复合过去时配合、ce qui / ce que、dont / où 与 prep + lequel / ce dont / ce à quoi），配 8 张原版卡通与 94 题专练。',
    pages: [
      /* =========================================================
         PAGE 8B.1: INDEFINITE PRONOUNS I (pro10 Part 1)
      ========================================================= */
      {
        id: 'p8b_1',
        code: '8B.1',
        group: 'Indefinite Pronouns',
        shortTitle: 'quelqu’un / personne / chacun / aucun',
        title: 'Indefinite Pronouns (Part 1): quelqu’un, quelque chose + de, quelques-uns & chacun / aucun',
        titleZh: '不定代词（上）：quelqu’un / quelque chose + de + 形容词、quelques-uns 与 chacun / aucun',
        estMin: 4,
        summary: 'Master positive & negative indefinite pronouns: (1) quelqu’un (person) & quelque chose (thing) MUST insert "de" before an adjective ("quelque chose d’extraordinaire", "quelqu’un de légendaire"); (2) negatives personne & rien keep "ne" before the verb ("Personne ne veut me croire", "rien d’autre"); (3) plural quelques-uns / quelques-unes pronounce the liaison /z/; (4) chacun(e) (pronoun: "each one") vs. chaque (determiner before noun) & negative aucun(e) + ne ("aucun homme ne me résiste").',
        summaryZh: '攻克第一组不定代词的四大铁律：① `quelqu’un / quelque chose / personne / rien` 后面接形容词时**必须先加 `de`**（`quelque chose **d’**extraordinaire`、`rien **d’**autre`）；② 否定代词 `personne` 和 `rien` 需搭配 **`ne`**（且不用 `pas`！如 `Personne **ne** veut me croire`）；③ 复数 **`quelques-uns / quelques-unes`** 中的 `s` 要连诵读 /z/；④ 分清 **`chacun(e)`（代词，独立使用）** vs **`chaque`（限定词，后面必带名词）**，以及否定式 `ne…aucun(e)`（一个也没有，永远单数）！',
        cheatSummary: [
          { label: 'The "+ de + Adjective" Rule', rule: 'quelqu’un, quelque chose, personne, rien + DE + masculine singular adjective! ("quelque chose de bon", "quelqu’un d’autre", "rien de nouveau").', ruleZh: '重要结构：quelqu’un / quelque chose / personne / rien + de + 阳性单数形容词（如 rien d’intéressant / quelqu’un de sérieux）！' },
          { label: 'chacun(e) vs. chaque & aucun(e)', rule: 'chacun / chacune = pronoun ("un cadeau pour chacune"). chaque = determiner + noun ("chaque étudiant"). Negative: aucun / aucune + ne (no pas!): "Aucun ne me fait cet effet."', ruleZh: 'chacun(e) 作代词独立用；chaque 后必须紧跟单数名词；否定“毫无一个”用 ne...aucun(e)（不加 pas，动词用单数）！' }
        ],
        sections: [
          {
            id: 'p8b1_pairs',
            heading: '1. Positive / Negative Pairs & the Ricky Williams Dialogue',
            headingZh: '一、核心不定代词正反对照表与原版对话',
            lead: 'Listen to Tammy’s confession about meeting football star Ricky Williams — notice every "+ de + adjective", the negative "personne ne...", and the liaison in "quelques-unes":',
            leadZh: '看 Tammy 和 Tex 关于球星 Ricky Williams 的拌嘴，一口气掌握 **`+ de + 形容词`**、**`personne ne`** 与 **`quelques-uns / quelques-unes`** 的连诵读音：',
            cartoon: {
              src: './assets/tex_cartoons/pro10_ricky.gif',
              alt: 'Tammy rencontre Ricky Williams et Tex devient jaloux',
              caption: 'Tammy : Quelque chose d’extraordinaire est arrivé ! — Tex : Tu es amoureuse de lui ?! Alors c’est chacun sa vie maintenant ?!',
              captionZh: 'Tammy：今天发生了件超级不得了的事（quelque chose d’extraordinaire）！— Tex：各过各的（chacun sa vie）？！'
            },
            table: {
              headers: ['Affirmative', 'Negative (+ ne, NO pas!)', 'Key Rule / Meaning'],
              rows: [
                { cols: ['quelqu’un (person, M/F)', 'personne (...ne / ne...personne)', 'somebody / nobody ("Personne ne veut me croire.")'], audio: 'J’ai rencontré quelqu’un de légendaire. Personne ne veut me croire.' },
                { cols: ['quelque chose (thing)', 'rien (...ne / ne...rien)', 'something / nothing ("Tu ne me dis rien d’autre ?")'], audio: 'Quelque chose d’extraordinaire est arrivé. Tu ne me dis rien d’autre ?' },
                { cols: ['quelques-uns (M) / quelques-unes (F)', 'aucun(e) (+ ne)', 'a few (pronounce /z/ liaison!) / not a single one'], audio: 'Quelques-uns de mes amis me le disent. Parmi mes copines, quelques-unes sont folles de lui.' },
                { cols: ['chacun / chacune (pronoun)', 'aucun / aucune (pronoun or adj.)', 'each one (vs. chaque + noun!) / none'], audio: 'C’est chacun sa vie. Aucun ne me fait cet effet.' }
              ]
            },
            examples: [
              { fr: 'Tammy : Quelque chose d’extraordinaire est arrivé aujourd’hui. J’ai rencontré quelqu’un de légendaire.', en: 'Both "quelque chose" and "quelqu’un" insert "de/d’" before an adjective!', zh: '千万别漏掉 de/d’：不说 *quelque chose extraordinaire，必说 quelque chose d’extraordinaire！', tag: '+ de + Adj.' },
              { fr: 'Parmi mes copines, quelques-unes sont folles de lui. Mais aucun ne me fait cet effet.', en: 'quelques-unes (fem. pl. pronoun) · aucun (masc. sg. + ne)', zh: 'quelques-unes 照应阴性复数 copines；aucun 永远只配单数动词（aucun ne me fait）。', tag: 'Number & Liaison' }
            ],
            quickCheck: {
              prompt: 'How do you translate "I didn’t see anything interesting today"?',
              promptZh: '表达“我今天没看到什么有趣的东西（rien + intéressant）”，哪一句语法完全正确？',
              options: [
                'Je n’ai rien vu d’intéressant aujourd’hui.',
                'Je n’ai rien vu intéressant aujourd’hui.',
                'Je n’ai pas rien vu d’intéressant aujourd’hui.',
                'Je n’ai vu quelque chose d’intéressant.'
              ],
              answerIdx: 0,
              explain: '(1) Negation with "rien" drops "pas" (ne...rien); (2) "rien" precedes the past participle "vu"; (3) "d’" MUST connect "rien" and "intéressant"!',
              explainZh: '三大要点：① ne...rien 不再加 pas；② rien 放在过去分词 vu 前；③ 形容词前必加 d’ → d’intéressant！'
            }
          }
        ],
        drills: [
          {
            id: 'd8b1_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tammy : Je vais faire les courses, tu as besoin de ___ ? (something)',
            promptZh: 'Tex 原题 #1：我要去买菜了，你需要点什么东西吗？（something）：',
            answers: ['quelque chose'],
            hint: 'Affirmative/question pronoun for a thing.',
            audio: 'Tu as besoin de quelque chose ?',
            explain: 'avoir besoin de quelque chose = need something.',
            explainZh: '提问“需要什么东西吗”用 quelque chose。'
          },
          {
            id: 'd8b1_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tammy : ___ a téléphoné pour toi, Tex. (someone — capitalize)',
            promptZh: 'Tex 原题 #2：有人打电话找你，Tex。（someone，句首大写）：',
            answers: ['Quelqu’un', "Quelqu'un", 'quelqu’un', "quelqu'un"],
            hint: 'Pronoun for an unspecified person.',
            audio: 'Quelqu’un a téléphoné pour toi, Tex.',
            explain: 'Quelqu’un = somebody/someone.',
            explainZh: '“有人”作主语：Quelqu’un。'
          },
          {
            id: 'd8b1_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tu as lu des livres ? — Joe-Bob : Oui, ___. (a few, matching masc. pl. livres)',
            promptZh: 'Tex 原题 #3：你读过几本书吗（les livres，阳性复数）？→ 对，读过几本（注意阳性复数连字符）：',
            answers: ['quelques-uns'],
            hint: 'des livres = masculine plural → quelques-uns.',
            audio: 'Oui, quelques-uns.',
            explain: 'des livres (masc. pl.) → quelques-uns (pronounce /kɛlkəzœ̃/).',
            explainZh: '指代阳性复数“几本（书）”用 quelques-uns。'
          },
          {
            id: 'd8b1_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Fiona : Je suis solitaire, je n’ai ___ petit ami. (not a single)',
            promptZh: 'Tex 原题 #4：我很孤单，我一个男朋友也没有（阳性单数“没有一个”，与 ne 连用）：',
            answers: ['aucun'],
            hint: 'aucun (masc. sg.) goes after "je n’ai".',
            audio: 'Je n’ai aucun petit ami.',
            explain: 'je n’ai aucun petit ami (no "pas"!).',
            explainZh: '阳性单数“一个也没有”填 aucun（不加 pas）。'
          },
          {
            id: 'd8b1_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Bette : ___ ne m’aime, je suis si triste. (nobody — capitalize)',
            promptZh: 'Tex 原题 #5：没人爱我，我好伤心。（作主语置句首，大写）：',
            answers: ['Personne', 'personne'],
            hint: 'Negative pronoun "nobody" as subject + ne.',
            audio: 'Personne ne m’aime, je suis si triste.',
            explain: 'Personne ne m’aime.',
            explainZh: '作主语表示“没有人”：Personne ne...。'
          },
          {
            id: 'd8b1_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Un cadeau pour Tammy et un cadeau pour Bette : un cadeau pour ___. (each one, fem.)',
            promptZh: 'Tex 原题 #6：给 Tammy 一份礼物，给 Bette 一份礼物 → 给她们每个人各一份（两位女性，填阴性“每一位”）：',
            answers: ['chacune'],
            hint: 'Tammy and Bette are feminine → chacune (not *chaque)!',
            audio: 'Un cadeau pour chacune.',
            explain: 'After preposition "pour" with no following noun, use pronoun "chacune" (fem. sg.).',
            explainZh: '因为后面不接名词，且指两位女生，必须用阴性单数代词 chacune（不能用限定词 *chaque）。'
          },
          {
            id: 'd8b1_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tex : Ah, je n’ai ___ inspiration aujourd’hui ! (not any — Watch gender of inspiration!)',
            promptZh: 'Tex 原题 #7：唉，我今天一点儿灵感都没有！（注意 l’inspiration 是阴性名词！）：',
            answers: ['aucune'],
            hint: 'une inspiration (feminine) → aucune!',
            audio: 'Je n’ai aucune inspiration aujourd’hui !',
            explain: 'inspiration is feminine → aucune inspiration.',
            explainZh: 'inspiration 为阴性单数名词，修饰它时要用阴性 aucune。'
          },
          {
            id: 'd8b1_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tammy : Je ne connais ___ comme Tex. Il est unique. (anyone / nobody)',
            promptZh: 'Tex 原题 #8：我不认识任何像 Tex 一样的人（与 ne 连用，“没有人”）：',
            answers: ['personne'],
            hint: 'ne + verb + personne.',
            audio: 'Je ne connais personne comme Tex.',
            explain: 'Je ne connais personne comme Tex.',
            explainZh: '固定否定框架 ne connais personne（不加 pas）。'
          },
          {
            id: 'd8b1_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Des copines ? Oui, j’en ai ___. (a few, matching fem. pl. copines)',
            promptZh: 'Tex 原题 #9：女性朋友（des copines，阴性复数）？有啊，我有几个（填阴性复数“几个”）：',
            answers: ['quelques-unes'],
            hint: 'copines is feminine plural → quelques-unes.',
            audio: 'Des copines ? Oui, j’en ai quelques-unes.',
            explain: 'des copines (fem. pl.) → quelques-unes.',
            explainZh: '替代阴性复数名词，选 quelques-unes。'
          },
          {
            id: 'd8b1_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Bette : ___ homme ne me résiste. (no / not a single — masc. sg.)',
            promptZh: 'Tex 原题 #10：没有任何男人能抗拒我的魅力！（homme 为阳性单数，置于句首）：',
            answers: ['Aucun', 'aucun'],
            hint: 'Aucun + masc. sg. noun + ne.',
            audio: 'Aucun homme ne me résiste.',
            explain: 'Aucun homme ne me résiste.',
            explainZh: '与 ne 连用表示“没有任何一个男人”：Aucun homme ne...。'
          },
          {
            id: 'd8b1_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Joe-Bob : ___ ne va pas, Tammy ? (something — subject)',
            promptZh: 'Tex 原题 #11：Tammy，怎么了，出什么事了吗？（直译“有某件事不对劲吗？”）：',
            answers: ['Quelque chose', 'quelque chose'],
            hint: 'Quelque chose ne va pas ? (= Is something wrong?)',
            audio: 'Quelque chose ne va pas, Tammy ?',
            explain: 'In "Quelque chose ne va pas ?", "ne va pas" literally means "is not going well" (no *rien here!).',
            explainZh: '地道日常表达：Quelque chose ne va pas ? 意思是“有什么不对劲吗？/ 怎么啦？”。'
          },
          {
            id: 'd8b1_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tammy : ___ sonne à la porte. Va ouvrir, Tex. (someone)',
            promptZh: 'Tex 原题 #12：有人在按门铃呢，Tex 快去开门。（someone）：',
            answers: ['Quelqu’un', "Quelqu'un", 'quelqu’un', "quelqu'un"],
            hint: 'Someone is ringing the doorbell.',
            audio: 'Quelqu’un sonne à la porte.',
            explain: 'Quelqu’un sonne à la porte.',
            explainZh: '指代按门铃的人：Quelqu’un。'
          }
        ],
        related: [
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_11', label: 'Back to 8A.11 Imperatives & Synthesis' },
          { chapterId: 'ch8b_pronouns_relative', pageId: 'p8b_2', label: '8B.2 plusieurs, tous/tout, autre & n’importe qui' }
        ]
      },

      /* =========================================================
         PAGE 8B.2: MORE INDEFINITE PRONOUNS (pro10 Part 2)
      ========================================================= */
      {
        id: 'p8b_2',
        code: '8B.2',
        group: 'Indefinite Pronouns',
        shortTitle: 'tous / tout / autre / n’importe qui',
        title: 'Indefinite Pronouns (Part 2): plusieurs, certains, tous vs. tout, l’un et l’autre & n’importe qui',
        titleZh: '不定代词（下）：plusieurs、tous (/tus/) vs. tout、autre 系列与 n’importe qui/quoi',
        estMin: 3,
        summary: 'Complete the Tex indefinite pronoun toolkit: (1) plusieurs ("several" — invariant!), certains / certaines ("some"); (2) plural pronoun tous (pronounce the final -s: /tus/!) & toutes vs. singular neuter tout ("everything": "Tout va bien ?"); (3) autre family (un autre, d’autres, autre chose, l’un et l’autre, ni l’un ni l’autre); (4) n’importe qui / quoi & qui/quoi que ce soit; (5) quiconque ("whoever") and tel(le)(s) ("such": "Tel père, tel fils").',
        summaryZh: '掌握第二批高频不定代词与固定表达：① **`plusieurs`（好几个，永不变形）** 与 **`certains / certaines`（一部分）**；② 超级发音高频点：作**代词**的复数 **`tous`** 结尾的 **-s 必须读成 /tus/**（如 *Tous sont dingues*），而作“一切”讲的 **`tout`** 永远用单数（*Tout va bien ?*）；③ **`autre` 家族**（必须带限定词：`un autre / d’autres / l’un et l’autre / autre chose`）；④ 口语超高频 **`n’importe qui`（随便谁）**、**`n’importe quoi`（胡说/随便什么）** 与 **`quiconque`（无论谁）**、**`tel(le)`（如此……）**。',
        cheatSummary: [
          { label: 'Pronunciation & Number Trap: tous vs. tout', rule: 'Pronoun "tous" = "all of them (m.)" + plural verb + PRONOUNCE -s /tus/! Singular "tout" = "everything" + 3rd sg. verb ("Tout va bien ?", "C’est tout"). "plusieurs" has NO singular form.', ruleZh: 'tous 作代词（全员）配复数动词，且结尾 s 必发音 /tus/；tout 作“一切/所有事”配单数动词（Tout est prêt）；plusieurs（好几个）永远不变形！' },
          { label: 'n’importe qui / quoi & l’autre idioms', rule: 'n’importe qui = just anybody; n’importe quoi = nonsense / anything ("Tu racontes n’importe quoi !"). autre ALWAYS needs a determiner ("d’autres", "un autre", NEVER bare *autres).', ruleZh: 'Tu racontes n’importe quoi !（你简直胡说八道！）是极地道口语；autre 前面必带限定词（d’autres / un autre / les autres / autre chose）。' }
        ],
        sections: [
          {
            id: 'p8b2_indef_more',
            heading: '1. Plural Quantifiers, Singular "tout" & Idiomatic Pronouns',
            headingZh: '一、复数不定代词、tout（一切）与口语高频短语表',
            lead: 'Notice the contrast between Tex’s male friends ("Tous sont dingues de Bette", pronouncing the -s of tous!) and Tammy’s general question ("Tout va bien ?"):',
            leadZh: '结合 Tex 与 Tammy 争执里的原句，对比下面这组极其常用的口语与书面不定代词：',
            table: {
              headers: ['Pronoun / Phrase', 'Agreement & Sound', 'Meaning', 'Tex Example'],
              rows: [
                { cols: ['plusieurs', 'Always plural, NO fem. -e', 'several', 'Plusieurs sont folles de Ricky Williams.'], audio: 'Plusieurs sont folles de lui.' },
                { cols: ['certains / certaines', 'M. pl. / F. pl.', 'certain ones / some', 'Certains sont amoureux de Tammy.'], audio: 'Certains sont amoureux de Tammy.' },
                { cols: ['tous (/tus/) · toutes', 'Pronounce final -s on tous!', 'everyone / all of them', 'Tous sont dingues de Bette ! · Toutes sont là.'], audio: 'Tous sont dingues de Bette. Toutes sont folles de Tex.' },
                { cols: ['tout (singular!)', 'Silent -t; 3rd sg. verb', 'everything', 'Tex, tout va bien ? · C’est tout ?'], audio: 'Tex, tout va bien ?' },
                { cols: ['un autre / d’autres / l’un et l’autre', 'Determiner ALWAYS required', 'another / others / both', 'Il y a un autre dans ta vie !? · autre chose'], audio: 'Il y a un autre dans ta vie ?' },
                { cols: ['n’importe qui · n’importe quoi', 'Invariable (also qui/quoi que ce soit)', 'anybody · nonsense/anything', 'Je ne suis pas n’importe qui ! Tu racontes n’importe quoi !'], audio: 'Je ne suis pas n’importe qui ! Tu racontes n’importe quoi !' },
                { cols: ['quiconque · tel(s)/telle(s)', 'tel agrees in gender/num.', 'whoever · such (a)', 'Quiconque nous écoute... · Tel père, tel fils.'], audio: 'Tel père, tel fils. Une jalousie telle que la tienne !' }
              ]
            },
            examples: [
              { fr: 'Les copains de Tex ? Tous sont dingues de Bette. — Les copines de Tammy ? Toutes sont folles de Tex !', en: 'Pronounce the -s in "Tous" (/tus/) whenever it stands alone as a pronoun!', zh: '代词 tous 末尾 s 必须读音 /tus/（区别于形容词 tous les jours 里 s 不发音！）。', tag: 'Pronoun tous = /tus/' },
              { fr: 'Tex : Je ne suis pas n’importe qui ! — Tammy : Tu racontes n’importe quoi ! Quiconque nous écoute doit te trouver ridicule !', en: 'n’importe qui (just anybody), n’importe quoi (nonsense), quiconque (whoever)', zh: 'Je ne suis pas n’importe qui（我可不是随随便便的人）；raconter n’importe quoi（胡言乱语）；quiconque（无论谁）。', tag: 'Spoken & B2' }
            ],
            quickCheck: {
              prompt: 'When is the final "-s" of "tous" PRONOUNCED (/tus/)?',
              promptZh: '下面哪一句中的 tous 末尾字母 -s 必须清晰发音读作 /tus/？',
              options: [
                'Mes amis ? Tous sont arrivés à l’heure ! (Pronoun standing alone)',
                'Tous les étudiants aiment le cours de Tex. (Determiner before noun)',
                'Je travaille tous les matins.',
                'Nous y allons tous les deux ensemble (determiner before les deux).'
              ],
              answerIdx: 0,
              explain: 'Pronoun "tous" (not modifying a following noun phrase) pronounces /tus/! Determiner "tous les..." drops the -s (/tu/).',
              explainZh: '只有当 tous 作为独立代词（后面不接 les/mes + 名词）时，结尾 s 才发音 /tus/；修饰 tous les étudiants 时 s 不发音！'
            }
          }
        ],
        drills: [
          {
            id: 'd8b2_d1',
            kind: 'choice',
            prompt: 'Which is true about the indefinite pronoun "plusieurs"?',
            promptZh: '关于不定代词 plusieurs（好几个），以下说法哪项正确？',
            options: [
              'It is invariable (no feminine *plusieures) and always takes a plural verb.',
              'It changes to *plusieures for feminine nouns.',
              'It takes a singular verb like tout.',
              'It means "each one".'
            ],
            answerIdx: 0,
            audio: 'Plusieurs sont arrivées.',
            explain: '"plusieurs" NEVER adds an -e for feminine and always takes a plural verb.',
            explainZh: 'plusieurs 本身永远不加 -e（没有 *plusieures），且固定配复数动词。'
          },
          {
            id: 'd8b2_d2',
            kind: 'fib',
            prompt: 'Complete the common French phrase: "Stop talking nonsense!" → Arrête de raconter ___ !',
            promptZh: '填空地道口语：“别胡说八道啦！” → Arrête de raconter ___ !',
            answers: ['n’importe quoi', "n'importe quoi"],
            hint: 'raconter n’importe quoi = talk nonsense.',
            audio: 'Arrête de raconter n’importe quoi !',
            explain: 'n’importe quoi = anything / nonsense.',
            explainZh: 'n’importe quoi 表“胡说/随便什么东西”。'
          },
          {
            id: 'd8b2_d3',
            kind: 'fib',
            prompt: 'Feminine "all of them": "Mes copines ? ___ sont invitées ce soir !" (all, fem. pl.)',
            promptZh: '“我的女性朋友们？她们全都受邀今晚来了！”（阴性复数代词）：',
            answers: ['Toutes', 'toutes'],
            hint: 'Feminine plural of tous.',
            audio: 'Mes copines ? Toutes sont invitées ce soir !',
            explain: 'Mes copines (fem. pl.) → Toutes.',
            explainZh: '照应阴性复数 copines，填 Toutes。'
          },
          {
            id: 'd8b2_d4',
            kind: 'fib',
            prompt: 'Singular "everything": "Ne t’inquiète pas, ___ va très bien !"',
            promptZh: '“别担心，一切都很顺利！”（表示“一切”，单数）：',
            answers: ['tout'],
            hint: 'tout + singular verb "va".',
            audio: 'Ne t’inquiète pas, tout va très bien !',
            explain: 'tout (everything) is always singular.',
            explainZh: '“一切”用单数 tout。'
          },
          {
            id: 'd8b2_d5',
            kind: 'choice',
            prompt: 'Which expression uses "autre" grammatically to mean "Others prefer the beach"?',
            promptZh: '表达“还有些人（泛指‘其他人’）更喜欢海滩”，下面哪一种用法是法语标准写法？',
            options: [
              'D’autres préfèrent la plage.',
              'Autres préfèrent la plage.',
              'Les une autre préfèrent la plage.',
              'Autre préfèrent la plage.'
            ],
            answerIdx: 0,
            audio: 'D’autres préfèrent la plage.',
            explain: 'Indefinite "others" MUST have a determiner: "D’autres" (some others) or "Les autres" (the others), NEVER bare *autres!',
            explainZh: 'autre 必须带限定词，“另一些人/东西”是 D’autres（泛指），绝不裸用 *Autres。'
          },
          {
            id: 'd8b2_d6',
            kind: 'fib',
            prompt: 'Feminine agreement of "certains": "Parmi ces solutions, ___ sont très efficaces."',
            promptZh: '“在这些解决方案（une solution，阴性）中，有一部分非常有效。”填入阴性复数“有些”：',
            answers: ['certaines'],
            hint: 'certains matches feminine plural "solutions" → certaines.',
            audio: 'Parmi ces solutions, certaines sont très efficaces.',
            explain: 'une solution is feminine → certaines.',
            explainZh: 'solution 是阴性词，所以 certains 变阴性复数 certaines。'
          },
          {
            id: 'd8b2_d7',
            kind: 'fib',
            prompt: 'Formal B2 pronoun meaning "whoever": "___ souhaite participer doit s’inscrire avant vendredi."',
            promptZh: 'TCF B2 高级书面代词“无论谁 / 凡是……的人”（whoever）：',
            answers: ['Quiconque', 'quiconque'],
            hint: 'Starts with Q-, always takes singular verb.',
            audio: 'Quiconque souhaite participer doit s’inscrire avant vendredi.',
            explain: 'quiconque ("whoever / anyone who") is formal & always singular.',
            explainZh: 'quiconque 表“凡是……的人 / 无论谁”，书面语超高频，动词用单数。'
          },
          {
            id: 'd8b2_d8',
            kind: 'fib',
            prompt: 'Complete the proverb: "Like father, like son" → ___ père, tel fils !',
            promptZh: '补全谚语“有其父必有其子”：___ père, tel fils !',
            answers: ['Tel', 'tel'],
            hint: 'Masculine singular "tel".',
            audio: 'Tel père, tel fils !',
            explain: 'Tel père, tel fils (agreeing with masculine père / fils).',
            explainZh: '阳性单数一致：Tel père, tel fils。'
          },
          {
            id: 'd8b2_d9',
            kind: 'choice',
            prompt: 'What does "Il est prêt à accepter quoi que ce soit" mean?',
            promptZh: '句子 “Il est prêt à accepter quoi que ce soit.” 的准确中文意思是？',
            options: [
              'He is ready to accept anything at all (whatsoever).',
              'He does not accept anything.',
              'Whoever accepts it is ready.',
              'Nobody is ready to accept it.'
            ],
            answerIdx: 0,
            audio: 'Il est prêt à accepter quoi que ce soit.',
            explain: 'quoi que ce soit = anything whatsoever (and qui que ce soit = anybody at all).',
            explainZh: 'quoi que ce soit = 无论什么事/任何东西；qui que ce soit = 无论谁/任何人。'
          },
          {
            id: 'd8b2_d10',
            kind: 'fib',
            prompt: 'Complete the idiom meaning "neither one nor the other": "Ni ___ ni l’autre !"',
            promptZh: '固定搭配填空“两者都不（非此即彼都否定）”：Ni ___ ni l’autre !',
            answers: ["l'un", 'l’un'],
            hint: 'ni l’un ni l’autre = neither one nor the other.',
            audio: 'Ni l’un ni l’autre !',
            explain: 'ni l’un ni l’autre (masc.) / ni l’une ni l’autre (fem.).',
            explainZh: '“两者都不”固定写成 ni l’un ni l’autre。'
          }
        ],
        related: [
          { chapterId: 'ch8b_pronouns_relative', pageId: 'p8b_1', label: 'Back to 8B.1 Indefinite Pronouns I' },
          { chapterId: 'ch8b_pronouns_relative', pageId: 'p8b_3', label: '8B.3 Demonstrative Pronouns (celui / ceci / cela)' }
        ]
      },

      /* =========================================================
         PAGE 8B.3: DEMONSTRATIVE PRONOUNS (pro11)
      ========================================================= */
      {
        id: 'p8b_3',
        code: '8B.3',
        group: 'Demonstrative Pronouns',
        shortTitle: 'celui / celle / ceux / celles & cela',
        title: 'Demonstrative Pronouns: celui / celle / ceux / celles + de / -ci / qui-que-dont & ceci / cela / ça',
        titleZh: '指示代词全解：celui/celle/ceux/celles 的“不可单飞原则”与中性 ceci / cela / ça',
        estMin: 4,
        summary: 'Master variable demonstrative pronouns (celui, celle, ceux, celles — meaning "this/that one" or "these/those ones") AND invariable neuter pronouns (ceci, cela, ça): crucially, "celui / celle / ceux / celles" can NEVER stand completely alone — they MUST be followed by one of three partners: (1) de + noun ("celui de Tex" = Tex’s), (2) -ci / -là ("celle-ci ou celle-là"), or (3) a relative clause qui / que / dont ("ceux qui portent le béret", "celui que j’aime", "celui dont je parle"). Notice masculine plural is CEUX (never *ceuls)!',
        summaryZh: '攻克指示代词的两大家族：一、有性数变化的 **`celui（阳单）/ celle（阴单）/ ceux（阳复）/ celles（阴复）`**（相当于英文的 *the one / those / …’s*）。死记住：**它绝对不能光杆单独使用！后面必须跟三个尾巴之一**：① **`+ de` 表示所属**（*celui de Tex* = Tex 的那一个）；② **`-ci / -là`**（*celle-ci* 这张 / *celle-là* 那张）；③ **关系从句 `qui / que / dont`**（*ceux qui...* 那些……的人/物）。二、无性数变化的中性代词 **`ceci / cela / ça`**（指代一整个观点或情况，“这/那件事”）。',
        cheatSummary: [
          { label: 'Rule #1: celui Never Stands Alone!', rule: 'Always attach: (A) de + noun ("la voix d’Edouard vs. celle de Tex"), (B) -ci / -là ("celle-ci ou celle-là"), OR (C) relative qui / que / dont ("ceux qui...", "celui que...", "celui dont..."). Note plural = ceux / celles.', ruleZh: '铁律：celui/celle/ceux/celles 后必须接 ① de（所有格）；② -ci/-là（远近）；③ qui/que/dont（定语从句）。绝对不可单独只说 *J’aime celui！' },
          { label: 'Rule #2: Invariable Neuter ceci / cela / ça', rule: 'ceci ("this") / cela ("that" — formal/writing) / ça (everyday spoken/emphatic "that"): refer to whole ideas or unspecified things ("Cela me semble évident !", "Ça me fait de la peine !").', ruleZh: '当指代“一整个句子/想法/未指名物”时用不变中性代词：书面正式多用 cela / ceci；口语与强调常用 ça（Ça me fait de la peine !）。' }
        ],
        sections: [
          {
            id: 'p8b3_celui',
            heading: '1. The 4 Forms & 3 Mandatory Partners (+ Edouard Comparison)',
            headingZh: '一、celui 四大词形表与三种必需搭档结构',
            lead: 'Remember: do NOT say *celui’s or repeat the noun! Just match the gender & number of the missing noun (l’accent → celui, la voix → celle, les yeux → ceux, les oreilles → celles):',
            leadZh: '看 Bette 嫌弃 Edouard 的经典四连对比，体验怎样用 `celui/celle/ceux/celles de` 替代英文里加 `’s` 的“谁的那一个”：',
            cartoon: {
              src: './assets/tex_cartoons/pro11_edouard.gif',
              alt: 'Bette compare Edouard et Tex avec celui, celle, ceux, celles',
              caption: 'Bette : L’accent d’Edouard ? Je préfère celui de Tex ! La voix ? Celle de Tex ! Les yeux ? Ceux de Tex ! Les oreilles ? Celles de Tex !',
              captionZh: 'Bette：Edouard 的口音（阳单）？我更爱 Tex 的（celui de Tex）！嗓音（阴单）→ celle de！眼睛（阳复）→ ceux de！耳朵（阴复）→ celles de！'
            },
            table: {
              headers: ['Gender / Number', 'Form', 'With de / -ci / Relative', 'Example'],
              rows: [
                { cols: ['Masc. Sg.', 'celui', 'celui de · celui-ci · celui qui/que/dont', 'Je préfère celui de Tex. · Celui que j’aime...'], audio: 'Je préfère celui de Tex. Celui que j’aime ne m’aime pas.' },
                { cols: ['Fem. Sg.', 'celle', 'celle de · celle-là · celle qui/que/dont', 'Tu préfères celle-ci ou celle-là ?'], audio: 'Je préfère celle de Tex. Tu préfères celle-ci ou celle-là ?' },
                { cols: ['Masc. Pl.', 'ceux (NOT *ces!)', 'ceux de · ceux-ci · ceux qui/que/dont', 'Surtout ceux qui portent le béret.'], audio: 'Je préfère ceux de Tex. Surtout ceux qui portent le béret.' },
                { cols: ['Fem. Pl.', 'celles', 'celles de · celles-là · celles qui/que/dont', 'Je préfère celles de Tex (les oreilles).'], audio: 'Je préfère celles de Tex.' },
                { cols: ['Neuter (Ideas)', 'ceci · cela · ça', 'Followed directly by verb', 'Cela me semble évident ! · Ça me fait de la peine !'], audio: 'Cela me semble évident ! Ça me fait de la peine !' }
              ]
            },
            examples: [
              { fr: 'Bette : Moi, j’aime les tatous. — Tammy : Moi aussi, surtout ceux qui portent le béret.', en: 'ceux qui = "the ones (m. pl.) who..." (subject of "portent")', zh: 'ceux qui（后面接动词）指“那些戴贝雷帽的（犰狳们）”。', tag: 'celui qui' },
              { fr: 'Bette : Celui que j’aime ne m’aime pas ! Tu ne connais pas celui dont je parle !', en: 'celui que (object of "aime") · celui dont (parler de → dont)', zh: 'celui que（我爱的那个人）作宾语；因为动词是 parler de，所以后面搭配 dont（celui dont je parle）！', tag: 'celui que / dont' },
              { fr: 'Tammy : Tu es amoureuse de Tex, cela me semble évident !! — Bette : Ça me fait de la peine, ça !', en: 'cela (formal "that") vs. ça (conversational / emphatic)', zh: '整件事显而易见：cela me semble évident；口语情绪表达常重复 ça：Ça me fait de la peine, ça !', tag: 'cela vs. ça' }
            ],
            quickCheck: {
              prompt: 'Look at the gender traps: "Les oreilles" is feminine plural, and "les yeux" is masculine plural. Complete: "Tes yeux sont beaux, mais ___ de Bette aussi."',
              promptZh: '“你的眼睛（les yeux，阳性复数）很美，不过 Bette 的也不错。” 应该选哪个指示代词？',
              options: ['ceux', 'celles', 'celui', 'ces'],
              answerIdx: 0,
              explain: 'un œil → les yeux is MASCULINE plural, so "those of Bette" = ceux de Bette! (Note: "ces" is a determiner and CANNOT replace a noun without a noun after it!).',
              explainZh: 'les yeux（眼睛）是阳性复数，替代它用阳性复数指示代词 ceux（注意 ces 是限定词，后面没有名词时绝对不能用 ces de！）。'
            }
          }
        ],
        drills: [
          {
            id: 'd8b3_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tammy : ___ est complètement absurde ! (that — idea/statement, formal)',
            promptZh: 'Tex 原题 #1：这简直荒谬透顶！（指代一整件事/想法，句首大写，正式书面词）：',
            answers: ['Cela', 'cela', 'Ça', 'ça'],
            hint: 'Neuter demonstrative pronoun for an abstract statement.',
            audio: 'Cela est complètement absurde !',
            explain: 'Cela (or spoken Ça) refers to an entire statement or idea.',
            explainZh: '没有具体先行词的抽象论断，用中性指示代词 Cela（口语也可用 Ça）。'
          },
          {
            id: 'd8b3_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: La passion (f.) de Tex, c’est la poésie ; ___ de Trey, c’est la musique.',
            promptZh: 'Tex 原题 #2：Tex 的热爱（la passion，阴性单数）是诗歌；Trey 的热爱是音乐（填入阴单指示代词）：',
            answers: ['celle'],
            hint: 'la passion is feminine singular → celle.',
            audio: 'La passion de Tex, c’est la poésie ; celle de Trey, c’est la musique.',
            explain: 'la passion (fem. sg.) → celle de Trey.',
            explainZh: 'la passion 是阴性单数，用 celle 替代。'
          },
          {
            id: 'd8b3_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Le talent (m.) de Tex est extraordinaire ; ___ de Joe-Bob est limité.',
            promptZh: 'Tex 原题 #3：Tex 的才华（le talent，阳性单数）非凡；Joe-Bob 的则很有限：',
            answers: ['celui'],
            hint: 'le talent is masculine singular → celui.',
            audio: 'Le talent de Tex est extraordinaire ; celui de Joe-Bob est limité.',
            explain: 'le talent (masc. sg.) → celui de Joe-Bob.',
            explainZh: 'le talent 是阳性单数，用 celui 替代。'
          },
          {
            id: 'd8b3_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Les admiratrices (f. pl.) de Tex sont nombreuses ; ___ de Corey sont rares.',
            promptZh: 'Tex 原题 #4：Tex 的女粉丝们（les admiratrices，阴性复数）众多；Corey 的却寥寥无几：',
            answers: ['celles'],
            hint: 'les admiratrices is feminine plural → celles.',
            audio: 'Les admiratrices de Tex sont nombreuses ; celles de Corey sont rares.',
            explain: 'les admiratrices (fem. pl.) → celles de Corey.',
            explainZh: '阴性复数名词用 celles 替代。'
          },
          {
            id: 'd8b3_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: J’aime les tatous (m.), mais ___ que je préfère, c’est Tex. (the one)',
            promptZh: 'Tex 原题 #5：我喜欢犰狳们，但其中我最喜欢的那一只（阳性单数，因为后面特指 Tex）是 Tex：',
            answers: ['celui'],
            hint: 'Referring specifically to ONE male armadillo (Tex) → celui.',
            audio: 'J’aime les tatous, mais celui que je préfère, c’est Tex.',
            explain: 'Matches singular Tex → celui que je préfère, c’est Tex.',
            explainZh: '因为特指唯一的 Tex（阳性单数），所以选 celui que je préfère。'
          },
          {
            id: 'd8b3_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: J’apprécie les femmes. ___ que je préfère, c’est Tammy. (the one, fem. sg.)',
            promptZh: 'Tex 原题 #6：我很欣赏女性，但我最心仪的那一位（Tammy，阴单）是 Tammy：',
            answers: ['Celle', 'celle'],
            hint: 'Feminine singular pointing to Tammy.',
            audio: 'Celle que je préfère, c’est Tammy.',
            explain: 'Matches singular Tammy → Celle que je préfère.',
            explainZh: '特指 Tammy（阴性单数），句首大写 Celle。'
          },
          {
            id: 'd8b3_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: De tous mes amis, Edouard est ___ qui cuisine le mieux.',
            promptZh: 'Tex 原题 #7：在我所有朋友里，Edouard 是做饭最好吃的那个（阳性单数）：',
            answers: ['celui'],
            hint: 'Edouard (masc. sg.) + qui.',
            audio: 'Edouard est celui qui cuisine le mieux.',
            explain: 'Edouard → celui qui.',
            explainZh: 'Edouard 为阳性单数，用 celui qui。'
          },
          {
            id: 'd8b3_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: De toutes mes amies, Bette est ___ qui est la plus populaire.',
            promptZh: 'Tex 原题 #8：在我所有女性朋友里，Bette 是最受欢迎的那个（阴性单数）：',
            answers: ['celle'],
            hint: 'Bette (fem. sg.) + qui.',
            audio: 'Bette est celle qui est la plus populaire.',
            explain: 'Bette → celle qui.',
            explainZh: 'Bette 为阴性单数，用 celle qui。'
          },
          {
            id: 'd8b3_d9',
            kind: 'fib',
            prompt: 'Tex Practice #10: L’accent d’Edouard est sexy, mais ___ de Tex est plus sexy.',
            promptZh: 'Tex 原题 #10：Edouard 的口音（un accent，阳性单数）很迷人，但 Tex 的更迷人：',
            answers: ['celui'],
            hint: 'l’accent is masculine singular.',
            audio: 'L’accent d’Edouard est sexy, mais celui de Tex est plus sexy.',
            explain: 'un accent (masc.) → celui de Tex.',
            explainZh: 'accent 是阳性名词，因此用 celui de Tex。'
          },
          {
            id: 'd8b3_d10',
            kind: 'fib',
            prompt: 'Tex Practice #11: Les rollers (m. pl.) de Tex sont bien, mais ___ de Trey sont super.',
            promptZh: 'Tex 原题 #11：Tex 的旱冰鞋（les rollers，阳性复数）不错，但 Trey 的超级棒：',
            answers: ['ceux'],
            hint: 'les rollers is masculine plural → ceux.',
            audio: 'Les rollers de Tex sont bien, mais ceux de Trey sont super.',
            explain: 'rollers (masc. pl.) → ceux de Trey.',
            explainZh: '阳性复数用 ceux。'
          },
          {
            id: 'd8b3_d11',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tammy : ___ me semble évident ! (That seems obvious to me!)',
            promptZh: 'Tex 原题 #12：那对我来说再明显不过了！（指代整件事，句首大写）：',
            answers: ['Cela', 'cela', 'Ça', 'ça'],
            hint: 'cela / ça + verb "semble".',
            audio: 'Cela me semble évident !',
            explain: 'Cela me semble évident !',
            explainZh: '抽象情况作主语：Cela（或 Ça）me semble évident !'
          },
          {
            id: 'd8b3_d12',
            kind: 'choice',
            prompt: 'Contrast "-ci" vs. "-là": Looking at two photos (feminine: une photo), how do you ask "Do you prefer this one or that one?"',
            promptZh: '看着两张照片（la photo，阴性），怎么地道地问“你更喜欢这一张还是那一张”？',
            options: [
              'Tu préfères celle-ci ou celle-là ?',
              'Tu préfères celui-ci ou celui-là ?',
              'Tu préfères cette-ci ou cette-là ?',
              'Tu préfères ceci ou cela ?'
            ],
            answerIdx: 0,
            audio: 'Tu préfères celle-ci ou celle-là ?',
            explain: 'Replacing a known feminine noun ("une photo") requires "celle-ci / celle-là", NOT *cette-ci (determiner) and NOT neuter *ceci/cela!',
            explainZh: '有明确阴性先行词 photo 时必须用 celle-ci / celle-là；cette 不能带 -ci/-là，ceci/cela 只能指不知名事物或整句话。'
          }
        ],
        related: [
          { chapterId: 'ch8b_pronouns_relative', pageId: 'p8b_2', label: 'Back to 8B.2 Indefinite Pronouns II' },
          { chapterId: 'ch8b_pronouns_relative', pageId: 'p8b_4', label: '8B.4 Possessive Pronouns (le mien / le nôtre)' }
        ]
      },

      /* =========================================================
         PAGE 8B.4: POSSESSIVE PRONOUNS (pro12)
      ========================================================= */
      {
        id: 'p8b_4',
        code: '8B.4',
        group: 'Possessive Pronouns',
        shortTitle: 'le mien / la tienne / aux miens',
        title: 'Possessive Pronouns: le mien..le leur, Contractions (au / aux), être à + Tonic & Idioms',
        titleZh: '物主代词全解（le mien / le nôtre / le leur）、à 缩合规则与三大习语',
        estMin: 4,
        summary: 'Master all 24 French possessive pronouns ("mine, yours, his/hers, ours, yours, theirs"): (1) article + pronoun ALWAYS match the gender & number of the OBJECT possessed (NOT the owner — so "his sister" and "her sister" are BOTH "la sienne"!), and notice the circumflex accent + long /o/ on "le nôtre / le vôtre" (vs. determiner notre/votre); (2) le/les ALWAYS contract after à/de (au mien, aux miens, du nôtre); (3) express ownership via "être à + tonic" ("Elle est à moi"); (4) master idioms ("aux miens" = my folks, "être des nôtres", "y mettre du sien", "faire des siennes").',
        summaryZh: '攻克“我的 / 你的 / TA的 / 我们的 / 你们的 / 他们的（那个东西）”物主代词体系：① 和物主限定词一样，**词形由“被拥有物体的性数”决定，与主人男女无关**（无论“他的姐姐”还是“她的姐姐”都叫 **`la sienne`**）；② 注意 **`le nôtre / le vôtre`** 头上必带长音符 **`ô`**（读闭口 /o/，区别于限定词 `notre / votre`）；③ 前面遇介词 `à` 或 `de` 必须发生缩合（`penser **aux** miens`, `parler **du** vôtre`）；④ 极地道三大习语：`être des nôtres`（加入我们）、`y mettre du sien`（尽自己一份力）、`faire des siennes`（又调皮/闹腾起来了）！',
        cheatSummary: [
          { label: 'Core Rule: Agreement With the POSSESSED Item', rule: 'le/la/les + mien(ne)(s), tien(ne)(s), sien(ne)(s), nôtre(s), vôtre(s), leur(s). le sien = his OR hers (masc. item); la sienne = his OR hers (fem. item)! Circumflex on nôtre/vôtre; NO -s on sg. leur.', ruleZh: '核心原则：性数只看被拥有物的性数！le/les 前遇 à 必缩合成 au / aux（aux miens）。注意 le nôtre / le vôtre 有 ^ 符号，le leur 单数不加 s。' },
          { label: '3 Tex Idioms + "être à moi"', rule: 'Ownership without pronoun: "Cette photo ? Elle est à moi." Idioms: (1) être des nôtres ("join us"), (2) y mettre du sien ("do one’s share"), (3) faire des siennes ("be up to one’s old tricks").', ruleZh: '日常表归属最简句式：Cette photo est à moi（是我的）。三大习语：être des nôtres（入伙/一起来）、y mettre du sien（出力配合）、faire des siennes（又作妖/耍花招）。' }
        ],
        sections: [
          {
            id: 'p8b4_forms',
            heading: '1. Complete 6-Person Table & Contractions With à / de',
            headingZh: '一、六组物主代词全表与 à/de 缩合规则',
            lead: 'Remember: in French, "Ma sœur → La mienne" and "Ses parents → Les siens". When preceded by à or de, the definite article contracts just as usual (à + les miens → aux miens):',
            leadZh: '背熟下表（特别区分 `le nôtre / notre` 以及单数 `le leur` 与复数 `les leurs`），并读出 Tammy 和 Fiona 关于兄妹照片的小对话：',
            cartoon: {
              src: './assets/tex_cartoons/pro12_ressemble.gif',
              alt: 'Tex et sa sœur Rita sur une photo',
              caption: 'Fiona : À qui appartient cette photo ? — Tex : Elle est à moi. — Tammy : Oui, c’est la sienne, c’est sa sœur Rita !',
              captionZh: '这照片是谁的？— Tex：是我的（Elle est à moi）。— Tammy：对，是他的妹妹（la sienne）Rita！'
            },
            table: {
              headers: ['Owner', 'Masc. Sg.', 'Fem. Sg.', 'Masc. Pl.', 'Fem. Pl.'],
              rows: [
                { cols: ['Mine', 'le mien', 'la mienne', 'les miens', 'les miennes'], audio: 'le mien, la mienne, les miens, les miennes' },
                { cols: ['Yours (tu)', 'le tien', 'la tienne', 'les tiens', 'les tiennes'], audio: 'le tien, la tienne, les tiens, les tiennes' },
                { cols: ['His / Hers / Its', 'le sien', 'la sienne', 'les siens', 'les siennes'], audio: 'le sien, la sienne, les siens, les siennes' },
                { cols: ['Ours', 'le nôtre', 'la nôtre', 'les nôtres', 'les nôtres'], audio: 'le nôtre, la nôtre, les nôtres' },
                { cols: ['Yours (vous)', 'le vôtre', 'la vôtre', 'les vôtres', 'les vôtres'], audio: 'le vôtre, la vôtre, les vôtres' },
                { cols: ['Theirs', 'le leur', 'la leur', 'les leurs', 'les leurs'], audio: 'le leur, la leur, les leurs' }
              ]
            },
            examples: [
              { fr: 'Tex : C’est ton béret ? — Oui, c’est le mien. · Ma sœur est secrétaire. — La mienne est PDG.', en: 'Matches possessed item gender: le béret → le mien · ma sœur → la mienne', zh: '帽子阳性用 le mien，姐姐阴性用 la mienne！', tag: 'Possessed Match' },
              { fr: 'Tammy : Je pense souvent à mes neveux. — Tex : Je pense rarement aux miens.', en: 'à + les miens MUST contract to "aux miens" (NEVER *à les miens)!', zh: 'à + les 永远缩合成 aux → aux miens！同理 de + le → du mien。', tag: 'Contraction aux' }
            ]
          },
          {
            id: 'p8b4_idioms',
            heading: '2. "être à + Tonic" & Tex’s 3 Favorite Possessive Idioms',
            headingZh: '二、归属表达 "être à moi" 与三大地道习语',
            lead: 'Beyond simple possession, French uses plural & neuter possessive pronouns in colorful everyday idioms you will frequently encounter in listening & reading:',
            leadZh: '读完这三句超实用习语，Bette 在派对上的小伎俩一下子活灵活现：',
            cartoon: {
              src: './assets/tex_cartoons/pro12_siennes.gif',
              alt: 'Bette a encore fait des siennes en draguant Tex',
              caption: 'Tammy : Bette a encore fait des siennes ! J’espère que Tex va y mettre du tien. Fiona, tu es des nôtres ce soir ?',
              captionZh: 'Bette 又耍花招啦（faire des siennes）！希望大家出力配合（y mettre du sien），今晚一起来聚会（être des nôtres）！'
            },
            examples: [
              { fr: 'Quand j’étais à Lyon, je pensais souvent aux miens. · Tu es des nôtres ce soir ?', en: 'les miens = my folks/family · être des nôtres = join our group', zh: 'aux miens 指“想念我的亲友/家人”；Tu es des nôtres ?（你今晚来跟我们聚吗？）', tag: 'les miens / nôtres' },
              { fr: 'Nous avons des invités : j’espère que tu vas y mettre du tien !', en: 'y mettre du sien = do one’s share / pitch in', zh: 'y mettre du sien / du tien 表示“拿出干劲、尽自己的一份力”。', tag: 'y mettre du sien' },
              { fr: 'Bette a encore fait des siennes : elle a dragué Tex toute la soirée.', en: 'faire des siennes (miennes/tiennes...) = be up to one’s usual tricks', zh: 'faire des siennes（调皮捣蛋/重施故伎/又搞小动作）。', tag: 'faire des siennes' }
            ],
            quickCheck: {
              prompt: 'How do you say "To your health!" → "To yours!" (la santé = feminine)?',
              promptZh: '碰杯说“À ta santé !（祝你健康！la santé 阴性）”，对方回敬“也祝你健康！（À yours!）”，拼写哪个正确？',
              options: [
                'À la tienne ! (la santé is feminine!)',
                'À le tien !',
                'Au tien !',
                'À ta !'
              ],
              answerIdx: 0,
              explain: 'la santé is feminine singular, and à + la stays "à la": "À la tienne !" (Notice how common this French toast is!).',
              explainZh: 'la santé 是阴性单数，“祝你也健康”是法语干杯高频句：À la tienne !（或敬称 À la vôtre !）。'
            }
          }
        ],
        drills: [
          {
            id: 'd8b4_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Mon cours (m.) de français est intéressant. Et ___, Bette ? (yours — tu)',
            promptZh: 'Tex 原题 #1：我的法语课（le cours，阳性单数）很有趣。Bette，你的呢？',
            answers: ['le tien'],
            hint: 'le cours (m. sg.) + tu → le tien.',
            audio: 'Mon cours de français est intéressant. Et le tien, Bette ?',
            explain: 'le cours (masc. sg.) → le tien.',
            explainZh: 'le cours 是阳性单数，且对闺蜜用 tu，所以是 le tien。'
          },
          {
            id: 'd8b4_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Ma passion (f.), c’est la poésie. Et ___, Tammy ? (yours — tu)',
            promptZh: 'Tex 原题 #2：我的热情（la passion，阴性单数）是写诗。Tammy，你的呢？',
            answers: ['la tienne'],
            hint: 'la passion (f. sg.) + tu → la tienne.',
            audio: 'Ma passion, c’est la poésie. Et la tienne, Tammy ?',
            explain: 'la passion (fem. sg.) → la tienne.',
            explainZh: 'la passion 是阴性单数，填 la tienne。'
          },
          {
            id: 'd8b4_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tex, tes parents (m. pl.) sont américains ; ___ sont français ! (mine)',
            promptZh: 'Tex 原题 #3：Tex，你父母是美国人；我的（父母，阳性复数）是法国人！',
            answers: ['les miens'],
            hint: 'les parents (m. pl.) → les miens.',
            audio: 'Tes parents sont américains ; les miens sont français !',
            explain: 'les parents (masc. pl.) → les miens.',
            explainZh: 'les parents 为阳性复数，填 les miens。'
          },
          {
            id: 'd8b4_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Je vais ouvrir mes cadeaux (m. pl.). Et toi, tu vas ouvrir ___ ? (yours — tu)',
            promptZh: 'Tex 原题 #4：我要拆我的礼物（les cadeaux，阳性复数）了。你呢，你打算拆你的吗？',
            answers: ['les tiens'],
            hint: 'un cadeau → les cadeaux (masc. pl.) → les tiens.',
            audio: 'Tu vas ouvrir les tiens ?',
            explain: 'cadeaux (masc. pl.) → les tiens.',
            explainZh: 'cadeaux 阳性复数，“你的（礼物们）”填 les tiens。'
          },
          {
            id: 'd8b4_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: À ta santé (f.), Tex ! — À ___, Tammy ! (to yours — note: "À" is already before the blank)',
            promptZh: 'Tex 原题 #5：干杯，祝你健康（la santé 阴单）！→ 也祝你健康！（空格前已有 À，只需填 la tienne）：',
            answers: ['la tienne'],
            hint: 'la santé (f. sg.) → la tienne (after À).',
            audio: 'À la tienne, Tammy !',
            explain: 'À la tienne !',
            explainZh: 'la santé 为阴性单数，填 la tienne。'
          },
          {
            id: 'd8b4_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: J’ai acheté mes livres (m. pl.). Est-ce que Joe-Bob et Edouard ont acheté ___ ? (theirs)',
            promptZh: 'Tex 原题 #6：我买了我的书（les livres，复数）。Joe-Bob 和 Edouard 买他们的了吗？',
            answers: ['les leurs'],
            hint: 'Multiple owners (they) + plural books → les leurs.',
            audio: 'Est-ce qu’ils ont acheté les leurs ?',
            explain: 'Plural owned item with leur → les leurs.',
            explainZh: '多个主人+复数物品，用 les leurs。'
          },
          {
            id: 'd8b4_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Je n’ai pas connu mon frère (m. sg.), mais Rita et Trey connaissent ___. (theirs)',
            promptZh: 'Tex 原题 #7：我没见过我的哥哥（mon frère，阳性单数），但 Rita 和 Trey 认识他们的（哥哥）：',
            answers: ['le leur'],
            hint: 'Multiple owners (they), ONE brother (m. sg.) → le leur (no -s!).',
            audio: 'Rita et Trey connaissent le leur.',
            explain: 'Singular masc. item owned by "them" → le leur (no -s on leur!).',
            explainZh: '虽然主人是两个人，但“他们的哥哥”是单数阳性，填 le leur（不加 s）。'
          },
          {
            id: 'd8b4_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Je vois souvent ma mère (f. sg.), mais Tex et Rita ne voient jamais ___. (theirs)',
            promptZh: 'Tex 原题 #8：我常去看望我妈妈（ma mère，阴性单数），但 Tex 和 Rita 从不见他们的（妈妈）：',
            answers: ['la leur'],
            hint: 'ONE mother (fem. sg.) owned by them → la leur.',
            audio: 'Tex et Rita ne voient jamais la leur.',
            explain: 'la mère (fem. sg.) + plural owner → la leur.',
            explainZh: '母亲阴性单数，多个孩子共有的用 la leur。'
          },
          {
            id: 'd8b4_d9',
            kind: 'fib',
            prompt: 'Tex Practice #10: L’accent (m.) d’Edouard est sexy, mais ___ est plus sexy. (mine)',
            promptZh: 'Tex 原题 #10：Edouard 的口音（le accent，阳性单数）很迷人，但我的更迷人：',
            answers: ['le mien'],
            hint: 'l’accent (m. sg.) + mine → le mien.',
            audio: 'L’accent d’Edouard est sexy, mais le mien est plus sexy.',
            explain: 'l’accent (masc. sg.) → le mien.',
            explainZh: 'accent 是阳性单数，“我的”填 le mien。'
          },
          {
            id: 'd8b4_d10',
            kind: 'fib',
            prompt: 'Tex Practice #11: Vos amies (f. pl.) sont jolies, mais nous trouvons ___ plus jolies ! (ours)',
            promptZh: 'Tex 原题 #11：你们的女性朋友很漂亮，但我们觉得我们的更漂亮！（记得 nôtre 的长音符）：',
            answers: ['les nôtres'],
            hint: 'ours (plural) → les nôtres (circumflex ô!).',
            audio: 'Nous trouvons les nôtres plus jolies !',
            explain: 'les nôtres (plural, circumflex on ô).',
            explainZh: '复数且带长音符：les nôtres。'
          },
          {
            id: 'd8b4_d11',
            kind: 'fib',
            prompt: 'Tex Practice #12: Nous avons eu nos notes (f. pl.). Et vous, vous avez eu ___ ? (yours — vous)',
            promptZh: 'Tex 原题 #12：我们拿到成绩了。那你们呢，你们拿到你们的了吗？（记得 vôtre 的长音符）：',
            answers: ['les vôtres'],
            hint: 'vous + plural → les vôtres.',
            audio: 'Et vous, vous avez eu les vôtres ?',
            explain: 'les vôtres (always with circumflex ô!).',
            explainZh: '记住物主代词 vôtres 要加 ^：les vôtres。'
          },
          {
            id: 'd8b4_d12',
            kind: 'fib',
            prompt: 'Contraction drill: "Tu penses à tes cousins ?" → "Oui, je pense souvent ___ !" (à + les miens)',
            promptZh: '介词缩合考点：“你想念你的堂兄弟们吗？”→ “嗯，我经常想起我的家人们（à + les miens 缩合）！”：',
            answers: ['aux miens'],
            hint: 'à + les contracts to aux!',
            audio: 'Oui, je pense souvent aux miens !',
            explain: 'à + les miens contracts to aux miens (NEVER *à les miens).',
            explainZh: 'à 与 les 必须缩合成 aux → aux miens！'
          }
        ],
        related: [
          { chapterId: 'ch8b_pronouns_relative', pageId: 'p8b_3', label: 'Back to 8B.3 Demonstrative Pronouns' },
          { chapterId: 'ch8b_pronouns_relative', pageId: 'p8b_5', label: '8B.5 Relative Pronouns: qui & que (+ PC Agreement)' }
        ]
      },

      /* =========================================================
         PAGE 8B.5: RELATIVE PRONOUNS QUI & QUE (pror1)
      ========================================================= */
      {
        id: 'p8b_5',
        code: '8B.5',
        group: 'Relative Pronouns',
        shortTitle: 'Relative: qui & que',
        title: 'Relative Pronouns (1): qui (Subject) vs. que / qu’ (Direct Object) + Passé Composé Agreement',
        titleZh: '关系代词（一）：qui（作主语）vs. que / qu’（作宾语）与复合过去时性数配合铁律',
        estMin: 4,
        summary: 'Master French’s two foundational relative pronouns linking nouns ("antecedents") to descriptive clauses: (1) QUI functions ONLY as the SUBJECT inside the relative clause (works for BOTH people AND things — "who, which, that" — and NEVER elides before a vowel: "qui a combattu", "qui ont libéré"); (2) QUE (qu’ before vowel) functions as the DIRECT OBJECT inside the relative clause (MANDATORY in French — NEVER omitted like English "the book I’m writing" → "le livre que j’écris"); (3) in Passé Composé, preceding "que" triggers past-participle agreement with avoir ("la tarte que Tammy a faite", "les héros que j’ai vus")!',
        summaryZh: '吃透法语使用率最高的两个定语从句连接词 **`qui`** 和 **`que`**：① **`qui` 只看“从句内部角色”——在从句中作主语**（因此后紧跟变位动词，指人指物都可以，且**永远不省音**，如 *qui a / qui ont*）；② **`que` 在从句中作直接宾语**（后紧跟另一个主语+动词，元音前省音为 `qu’`；与英文可省略 *that* 不同，法语里的 `que` **绝对不能省**！）；③ 在复合过去时里，**`que` 作前置直宾必须让助动词 `avoir` 的过去分词与先行词做性数配合**（如 *une Parisienne **qu’**il a connu**e***、*les poésies **que** Tex a écrit**es***）！',
        cheatSummary: [
          { label: '1-Second Test: qui vs. que', rule: 'Look right after the gap! VERB immediately follows → QUI (subject, NEVER *qu’!). SUBJECT + VERB follows → QUE / QU’ (direct object, NEVER omitted!).', ruleZh: '一秒秒杀法：看空格后紧挨着谁！空格后直接是**变位动词** → 填 **qui**（绝不省音！）；空格后是“**名词/人称代词 + 动词**” → 填 **que / qu’**！' },
          { label: 'Passé Composé Agreement Rule', rule: 'With "que + avoir", the past participle agrees with the antecedent in gender/number ("la tarte que Tammy a faite", "les lunettes qu’elle a achetées"). With "qui + être", verb agrees with antecedent ("deux espions qui se sont rencontrés").', ruleZh: '配合铁律：先行词是阴性/复数时，que 后面 avoir 的过去分词要变阴/复数（faite / écrites / embrassée / achetées）；若是 qui + être，也随主语配合！' }
        ],
        sections: [
          {
            id: 'p8b5_qui_que',
            heading: '1. Grammatical Role (Not Human vs. Thing!) & WWII Novel Dialogue',
            headingZh: '一、qui 与 que 只按从句成分分工（不管指人还是指物）',
            lead: 'Important warning for English speakers: "qui" does NOT only mean "who" (people), and "que" does NOT only mean "which/that" (things)! BOTH refer freely to people OR things — their ONLY difference is subject vs. direct object inside the subordinate clause:',
            leadZh: '千万别受英语 *who/which* 影响！法语里指“书/小说”一样可以用 **qui**（只要它在从句里当主语），指“人”一样必须用 **que**（只要它在从句里当宾语）：',
            cartoon: {
              src: './assets/tex_cartoons/pror1_guerre.gif',
              alt: 'Paw-Paw et Tex parlent de Guerre et amour',
              caption: 'Paw-Paw : Une jolie Parisienne que j’ai connue est devenue ta grand-mère ! — Tex : Le livre que j’écris s’appelle Guerre et amour !',
              captionZh: '我当年认识的一位漂亮巴黎姑娘（que j’ai connue，+e！）成了你奶奶！— 我在写的书（le livre que j’écris，que 不能省！）叫《战争与爱》！'
            },
            table: {
              headers: ['Relative Pronoun', 'Job in Relative Clause', 'Elides?', 'Antecedent Match & Example'],
              rows: [
                { cols: ['qui', 'Subject (followed immediately by verb)', 'NEVER (*qu’il ≠ qui)', 'un roman qui s’appelle... · Paw-Paw qui a combattu...'], audio: 'Tex écrit un roman qui s’appelle Guerre et amour.' },
                { cols: ['que / qu’', 'Direct Object (followed by subject + verb)', 'qu’ before vowel / mute h', 'une Parisienne que j’ai connue · le livre qu’il écrit'], audio: 'Le livre que j’écris est une histoire de héros.' },
                { cols: ['PC + que (+ avoir)', 'Past participle agrees with antecedent!', '+e / +s / +es', 'les deux héros que j’ai vus · la tarte qu’elle a faite'], audio: 'Ce sont les deux héros que j’ai vus dans un rêve.' },
                { cols: ['PC + qui (+ être)', 'Past participle agrees with subject!', '+e / +s / +es', 'deux espions qui se sont rencontrés en mission'], audio: 'Ce sont deux espions qui se sont rencontrés.' }
              ]
            },
            examples: [
              { fr: 'Tex interviewe Paw-Paw qui a combattu pendant la guerre. J’étais avec des Américains qui ont libéré Paris.', en: 'qui = subject of "a combattu" / "ont libéré" (NEVER drops -i before a/o!)', zh: 'qui 即使遇到元音 a 或 ont 也绝对不能写成 *qu’（qu’ 只能是 que 的省音！）！', tag: 'qui = Subject' },
              { fr: 'Une jolie Parisienne que j’ai connue... · Le livre que j’écris... (NEVER *le livre j’écris)', en: 'que = COD (connue agrees with Parisienne +e; NEVER omitted in French!)', zh: '英文能说 *the book I write*，法语的 que 永远不能省略！且 que 提前让 connue 加阴性 -e！', tag: 'que + Agreement' }
            ],
            quickCheck: {
              prompt: 'Pick the sentence with ZERO relative pronoun or past participle errors:',
              promptZh: '选出关系代词与过去分词配合都完全正确的一句：',
              options: [
                'Voici la chanson que Tammy a écrite et qui parle de Paris.',
                'Voici la chanson qui Tammy a écrite et qu’a du succès.',
                'Voici la chanson Tammy a écrit et qui parle de Paris.',
                'Voici la chanson que Tammy a écrit et qu’est célèbre.'
              ],
              answerIdx: 0,
              explain: '(1) Subject+verb "Tammy a..." → que (+ fem. agreement écrite!); (2) immediate verb "parle" → qui (never *qu’)!',
              explainZh: '第一个从句主语是 Tammy → 缺直宾选 que 并让 écrite 加 -e；第二个从句直接接动词 parle → 选主语 qui（不可省音成 qu’）。'
            }
          }
        ],
        drills: [
          {
            id: 'd8b5_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex aime la tarte ___ Tammy a faite. (qui / que)',
            promptZh: 'Tex 原题 #1：Tex 喜欢 Tammy 做的那块派（空格后是 Tammy a faite，留意 faite 的 -e！）：',
            answers: ['que'],
            hint: '"Tammy" is the subject of "a faite", so the gap is direct object → que.',
            audio: 'Tex aime la tarte que Tammy a faite.',
            explain: 'la tarte is the direct object of Tammy a faite → que (also triggers fem. faite!).',
            explainZh: '从句已有主语 Tammy，派是宾语 → que（且引起 faite 加 -e）。'
          },
          {
            id: 'd8b5_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Bette ne sait pas ___ est le grand-père de Tex. (qui / que — "who")',
            promptZh: 'Tex 原题 #2：Bette 不知道谁是 Tex 的爷爷（空格后直接接动词 est）：',
            answers: ['qui'],
            hint: 'Immediately followed by verb "est" → qui.',
            audio: 'Bette ne sait pas qui est le grand-père de Tex.',
            explain: 'Subject of "est" → qui.',
            explainZh: '空格后直接接动词 est，作主语用 qui。'
          },
          {
            id: 'd8b5_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tex, ___ a écrit plusieurs livres, est un auteur célèbre.',
            promptZh: 'Tex 原题 #3：Tex——他写了好几本书——是个著名作家（空格后接动词 a écrit，绝不省音！）：',
            answers: ['qui'],
            hint: 'Subject of "a écrit" → qui (NEVER *qu’!).',
            audio: 'Tex, qui a écrit plusieurs livres, est un auteur célèbre.',
            explain: '"qui" NEVER elides before a vowel: "qui a écrit".',
            explainZh: '作从句主语用 qui，即使后面是 a 也绝不省音！'
          },
          {
            id: 'd8b5_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Tammy aime les romans ___ parlent d’amour.',
            promptZh: 'Tex 原题 #4：Tammy 喜欢讲爱情的小说（虽然指物 romans，但后面直接是动词 parlent）：',
            answers: ['qui'],
            hint: 'Verb "parlent" immediately follows → qui (works for things too!).',
            audio: 'Tammy aime les romans qui parlent d’amour.',
            explain: 'Subject of "parlent" (even for books!) → qui.',
            explainZh: '指物作主语一样用 qui！'
          },
          {
            id: 'd8b5_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Edouard est un escargot ___ je connais bien.',
            promptZh: 'Tex 原题 #5：Edouard 是一只我很熟悉的蜗牛（后面有主语 je + connais）：',
            answers: ['que'],
            hint: 'Direct object of "je connais" → que.',
            audio: 'Edouard est un escargot que je connais bien.',
            explain: '"je connais [un escargot]" → que.',
            explainZh: '作 je connais 的直宾（指人/动物也用 que！）→ que。'
          },
          {
            id: 'd8b5_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tammy va voir un film ___ vient de sortir.',
            promptZh: 'Tex 原题 #6：Tammy 准备去看一部刚上映的电影（空格后直接接动词 vient）：',
            answers: ['qui'],
            hint: 'Verb "vient" immediately follows → qui.',
            audio: 'Tammy va voir un film qui vient de sortir.',
            explain: 'Subject of "vient" → qui.',
            explainZh: '从句主语 → qui。'
          },
          {
            id: 'd8b5_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Bette est une étudiante ___ Tex a embrassée.',
            promptZh: 'Tex 原题 #7：Bette 是 Tex 吻过的那个女学生（从句主语是 Tex，注意 embrassée 加了 -e！）：',
            answers: ['que'],
            hint: 'Direct object of "Tex a embrassée" → que.',
            audio: 'Bette est une étudiante que Tex a embrassée.',
            explain: 'Tex is subject, une étudiante is COD → que (hence embrassée!).',
            explainZh: 'Tex 是施动主语，étudiante 是受动直宾 → que。'
          },
          {
            id: 'd8b5_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8 (Compare with #7!): Bette est une étudiante ___ a embrassé Tex.',
            promptZh: 'Tex 原题 #8（对比第 7 题！）：Bette 是主动亲了 Tex 的那个女学生（空格后直接接动词 a embrassé）：',
            answers: ['qui'],
            hint: 'Now Bette is the SUBJECT doing the kissing → qui!',
            audio: 'Bette est une étudiante qui a embrassé Tex.',
            explain: 'Verb "a embrassé" immediately follows → qui (and NO agreement on embrassé with avoir!).',
            explainZh: '这次女生是主语、空格后紧跟动词 a embrassé → 填 qui！'
          },
          {
            id: 'd8b5_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Paw-Paw est un ancien combattant ___ Tex admire beaucoup.',
            promptZh: 'Tex 原题 #9：Paw-Paw 是 Tex 非常敬仰的老兵（后接 Tex admire）：',
            answers: ['que'],
            hint: 'Direct object of "Tex admire" → que.',
            audio: 'Paw-Paw est un ancien combattant que Tex admire beaucoup.',
            explain: 'Tex admires Paw-Paw → direct object "que".',
            explainZh: '作 admirer 的直宾 → que。'
          },
          {
            id: 'd8b5_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tammy adore les poésies érotiques ___ Tex a écrites.',
            promptZh: 'Tex 原题 #10：Tammy 喜爱 Tex 写的情诗（阴性复数 poésies，后接 écrites）：',
            answers: ['que'],
            hint: 'Direct object of "Tex a écrites" → que.',
            audio: 'Tammy adore les poésies érotiques que Tex a écrites.',
            explain: 'que (+ écrites matching fem. pl. poésies).',
            explainZh: 'poésies 作从句直宾 → que。'
          },
          {
            id: 'd8b5_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Joe-Bob aime les noix ___ viennent du Brésil.',
            promptZh: 'Tex 原题 #11：Joe-Bob 喜欢来自巴西的坚果（空格后接动词 viennent）：',
            answers: ['qui'],
            hint: 'Verb "viennent" immediately follows → qui.',
            audio: 'Joe-Bob aime les noix qui viennent du Brésil.',
            explain: 'Subject of "viennent" → qui.',
            explainZh: '主语连接词 → qui。'
          },
          {
            id: 'd8b5_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tex aime les nouvelles lunettes de soleil ___ Tammy a achetées.',
            promptZh: 'Tex 原题 #12：Tex 喜欢 Tammy 买的新太阳镜（后接 Tammy a achetées）：',
            answers: ['que'],
            hint: 'Direct object of "Tammy a achetées" → que.',
            audio: 'Tex aime les nouvelles lunettes de soleil que Tammy a achetées.',
            explain: 'que (+ achetées matching fem. pl. lunettes).',
            explainZh: '太阳镜是被买的直宾 → que。'
          }
        ],
        related: [
          { chapterId: 'ch8b_pronouns_relative', pageId: 'p8b_4', label: 'Back to 8B.4 Possessive Pronouns' },
          { chapterId: 'ch8b_pronouns_relative', pageId: 'p8b_6', label: '8B.6 Relative Pronouns: ce qui & ce que' }
        ]
      },

      /* =========================================================
         PAGE 8B.6: CE QUI & CE QUE (pror2)
      ========================================================= */
      {
        id: 'p8b_6',
        code: '8B.6',
        group: 'Relative Pronouns',
        shortTitle: 'ce qui & ce que ("What...")',
        title: 'Antecedent-Less Relative Pronouns: ce qui & ce que / ce qu’ ("What..." / ", which...")',
        titleZh: '无先行词关系代词：ce qui 与 ce que / ce qu’（“……的东西”、强调句型与非限制“这一点”）',
        estMin: 4,
        summary: 'Master "ce qui" and "ce que / ce qu’" when there is NO concrete noun antecedent — equivalent to English "what" ("what is fascinating...", "what I don’t like...") or sentence-modifying ", which..." ("ce qui ne m’étonne pas", "ce que je trouve dommage"). Rule stays identical: ce qui = SUBJECT of the verb immediately following ("Ce qui est fascinant, c’est..."); ce que / ce qu’ = DIRECT OBJECT before subject + verb ("Ce que je n’aime pas, c’est..."). Also super common with "tout ce qui / tout ce que" ("everything that") and indirect questions!',
        summaryZh: '当句子里**没有一个具体的先行词名词**（我们要表达汉语里的“**什么** / **……的事**”，比如“令人着迷的**是**……”、“我所写**的**东西”、“一切……的事”，或者逗号后面总结整件事“**, 这**一点让我很惊讶”），就在 `qui / que` 前面加上 **`ce`**，变成 **`ce qui`** 和 **`ce que / ce qu’`**！分工依然一模一样：从句缺**主语**用 **`ce qui`**（后直接跟动词），从句缺**直宾**用 **`ce que / ce qu’`**（后跟“主语+动词”）！在 TCF 写作与口语高分强调句（*Ce qui est important, c’est... / Ce que je veux dire, c’est...*）中极核心！',
        cheatSummary: [
          { label: 'When to Add "ce" Before qui / que', rule: 'Noun present → qui / que ("le livre que je lis"). NO noun present ("what...", "everything that...", ", which...") → CE QUI (subject) / CE QUE (object)! Note "tout ce qui / tout ce que".', ruleZh: '前面有明确名词（le livre）用 qui / que；前面**没有具体名词**（或只有 tout / 整句话逗号引出“这一点”）→ 用 **ce qui**（作主语）或 **ce que / ce qu’**（作直宾）！' },
          { label: 'High-Value TCF Emphasis Frame', rule: '"Ce qui + VERB..., c’est..." ("Ce qui est fascinant, c’est...") and "Ce que + SUBJ + VERB..., c’est..." ("Ce que je n’aime pas, c’est..."). Also clause-final: ", ce qui m’étonne" / ", ce que je regrette".', ruleZh: 'CLB 7 写作/口语必备加分强调句型：Ce qui est essentiel, c’est de...（最重要的是……）；Ce que je reproche, c’est que...（我指责的是……）！' }
        ],
        sections: [
          {
            id: 'p8b6_cequi_ceque',
            heading: '1. Emphatic Frames, "tout ce..." & Edouard Reading Tex’s Novel',
            headingZh: '一、ce qui vs. ce que 实战语境：书评、感叹与一切',
            lead: 'Listen to Edouard and Tammy reviewing Tex’s WWII Resistance novel: watch "Ce qui est fascinant", "tout ce qui se rapporte", "ce qui ne m’étonne pas" vs. "Tout ce que Tex crée", "ce qu’il écrit", "ce que je trouve dommage":',
            leadZh: '在 Tammy 和 Edouard 聊小说的情景里，一次体会 **ce qui / ce que** 的三大高频用法：① 句首强调（Cleft）；② `tout ce qui / tout ce que`（一切）；③ 句尾评论整件事：',
            cartoon: {
              src: './assets/tex_cartoons/pror2_original.gif',
              alt: 'Tammy et Edouard lisent le roman de Tex sur la guerre',
              caption: 'Tammy : Tout ce que Tex crée est tellement original ! Ce que je n’aime pas, c’est la fin du livre.',
              captionZh: 'Tammy：Tex 创作的一切（tout ce qu’il crée）都好有创意！唯独我不喜欢的（ce que je n’aime pas），是书的结局。'
            },
            table: {
              headers: ['Role in Clause', 'Form', 'Emphatic / Tout Frame', 'Clause Commentary (", which...")'],
              rows: [
                { cols: ['Subject (+ verb)', 'ce qui (NEVER *ce qu’)', 'Ce qui est fascinant, c’est... · tout ce qui...', '..., ce qui ne m’étonne pas.'], audio: 'Ce qui est fascinant, c’est sa description. Tout ce qui s’y rapporte.' },
                { cols: ['Direct Object (+ subj. + verb)', 'ce que / ce qu’', 'Ce que je n’aime pas, c’est... · tout ce que...', '..., ce que je trouve dommage.'], audio: 'Ce que je n’aime pas, c’est la fin. Tout ce qu’il crée est original.' },
                { cols: ['Indirect Question ("what")', 'ce qui / ce que (NEVER *quoi)', 'Tu sais ce qui s’est passé ? · Tu sais ce qu’on fait ?', '(replaces "qu’est-ce qui / que" inside questions!)'], audio: 'Vous savez ce qu’on va faire ce soir ?' }
              ]
            },
            examples: [
              { fr: 'Ce qui est fascinant, c’est sa description. · J’adore tout ce qui se rapporte à la Résistance !', en: 'Verb "est" / "se rapporte" follows immediately → ce qui', zh: '空格后直接跟动词 est / se rapporte → 选 ce qui（绝不省音！）。', tag: 'ce qui (Subject)' },
              { fr: 'Tout ce que Tex crée est original ! · J’aime ce qu’il écrit. · Ce que je n’aime pas, c’est la fin.', en: 'Subject + verb (Tex crée / il écrit / je n’aime pas) follows → ce que / ce qu’', zh: '后面有“主语+动词”且缺直接宾语 → 选 ce que（元音前 ce qu’）！', tag: 'ce que (COD)' },
              { fr: 'Le héros meurt, ce que je trouve très dommage. (vs. ..., ce qui est dommage.)', en: 'Whole previous clause commentary: ", which I find..." vs. ", which is..."', zh: '总结前一整句话：如果紧跟动词 est（, ce qui est dommage）用 ce qui；如果跟 je trouve（, ce que je trouve dommage）用 ce que！', tag: 'Clause Sum-Up' }
            ],
            quickCheck: {
              prompt: 'How do you say "I don’t know what happened yesterday" (verb: se passer, subject missing)?',
              promptZh: '间接问句：“我不知道昨天发生了什么事”（动词为 se passer，前面没有具体名词），哪一句对？',
              options: [
                'Je ne sais pas ce qui s’est passé hier.',
                'Je ne sais pas ce que s’est passé hier.',
                'Je ne sais pas quoi s’est passé hier.',
                'Je ne sais pas qu’est-ce qui s’est passé hier.'
              ],
              answerIdx: 0,
              explain: 'In indirect questions ("Je ne sais pas..."), French NEVER keeps *qu’est-ce qui* — it becomes "ce qui" (subject) or "ce que" (object)!',
              explainZh: '在间接疑问句（Je ne sais pas...）中，不能保留 *qu’est-ce qui*，直接转化为 ce qui（主语）或 ce que（宾语）！'
            }
          }
        ],
        drills: [
          {
            id: 'd8b6_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex aime tout ___ Tammy fait. (ce qui / ce que)',
            promptZh: 'Tex 原题 #1：Tex 喜欢 Tammy 做的一切事情（tout 之后，后接 Tammy fait）：',
            answers: ['ce que'],
            hint: 'Tammy fait = subject + verb → direct object "ce que".',
            audio: 'Tex aime tout ce que Tammy fait.',
            explain: 'Tammy is subject of "fait", missing COD → tout ce que.',
            explainZh: 'fait 的宾语缺失，因此填 tout ce que。'
          },
          {
            id: 'd8b6_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: ___ est incroyable, c’est la rencontre de Tex et Tammy.',
            promptZh: 'Tex 原题 #2：令人难以置信的是 Tex 和 Tammy 的相遇（句首大写，后直接跟 est）：',
            answers: ['Ce qui', 'ce qui'],
            hint: 'Verb "est" immediately follows → Ce qui.',
            audio: 'Ce qui est incroyable, c’est la rencontre de Tex et Tammy.',
            explain: 'Subject of "est incroyable" → Ce qui.',
            explainZh: '直接接动词 est → Ce qui。'
          },
          {
            id: 'd8b6_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tex, ___ je n’aime pas chez toi, c’est ton snobisme !',
            promptZh: 'Tex 原题 #3：Tex，你身上我不喜欢的东西（后接 je n’aime pas），就是你的势利眼！',
            answers: ['ce que'],
            hint: 'Subject "je" + verb "n’aime pas" follows → ce que.',
            audio: 'Ce que je n’aime pas chez toi, c’est ton snobisme !',
            explain: 'Missing direct object of "je n’aime pas" → ce que.',
            explainZh: 'aime 的直宾缺失 → ce que。'
          },
          {
            id: 'd8b6_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Bette ne sait pas ___ a Tammy. ("what’s wrong with Tammy" — note inversion after what!)',
            promptZh: 'Tex 原题 #4：Bette 不知道 Tammy 怎么了（原文语序为 ___ a Tammy，即“什么东西折腾着 Tammy”，选直宾省音）：',
            answers: ["ce qu'", 'ce qu’'],
            hint: '"Qu’a Tammy ?" ("What does Tammy have?") in indirect form → ce qu’a Tammy!',
            audio: 'Bette ne sait pas ce qu’a Tammy.',
            explain: 'In "ce qu’a Tammy", "Tammy" is the inverted subject of "a", so missing COD = ce qu’!',
            explainZh: '这是“Qu’a Tammy ?（Tammy 怎么了？）”的倒装结构：Tammy 是主语，缺的是宾语 → ce qu’（在 a 前省音）！'
          },
          {
            id: 'd8b6_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Joe-Bob ne comprend pas ___ Tex et Tammy disent.',
            promptZh: 'Tex 原题 #5：Joe-Bob 听不懂 Tex 和 Tammy 在说什么（后接主语 Tex et Tammy）：',
            answers: ['ce que'],
            hint: 'Direct object of "disent" → ce que.',
            audio: 'Joe-Bob ne comprend pas ce que Tex et Tammy disent.',
            explain: 'ce que Tex et Tammy disent.',
            explainZh: '作 disent 的直接宾语 → ce que。'
          },
          {
            id: 'd8b6_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Je ne sais pas ___ rend Corey si triste.',
            promptZh: 'Tex 原题 #6：我不知道是什么让 Corey 如此难过（后直接跟动词 rend）：',
            answers: ['ce qui'],
            hint: 'Verb "rend" immediately follows → ce qui.',
            audio: 'Je ne sais pas ce qui rend Corey si triste.',
            explain: 'Subject of "rend" → ce qui.',
            explainZh: '缺少令他伤心的“主语” → ce qui。'
          },
          {
            id: 'd8b6_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Vous savez ___ on va faire ce soir ? (Watch vowel "on"!)',
            promptZh: 'Tex 原题 #7：你们知道我们今晚要干嘛吗？（后面是元音主语 on，记住省音！）：',
            answers: ["ce qu'", 'ce qu’'],
            hint: 'ce que + on elides to ce qu’on!',
            audio: 'Vous savez ce qu’on va faire ce soir ?',
            explain: 'ce que → ce qu’ before vowel "on": ce qu’on va faire.',
            explainZh: '缺 direct object 且后接元音 on，必须省音写成 ce qu’！'
          },
          {
            id: 'd8b6_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: ___ me surprend, c’est que Tex soit américain.',
            promptZh: 'Tex 原题 #8：让我惊讶的是，Tex 竟然是美国人（句首，后接 me surprend）：',
            answers: ['Ce qui', 'ce qui'],
            hint: 'Remember "me" is an object pronoun — the SUBJECT of "surprend" is still missing! → Ce qui.',
            audio: 'Ce qui me surprend, c’est que Tex soit américain.',
            explain: '"me" is an object pronoun before verb "surprend", so the subject slot is empty → Ce qui!',
            explainZh: '防坑题：me 是动词 surprend 的宾语代词，整句缺的是主语（“什么事让我惊讶”），所以用 Ce qui！'
          },
          {
            id: 'd8b6_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Paw-Paw a combattu dans la Seconde Guerre mondiale, ___ Tex admire beaucoup.',
            promptZh: 'Tex 原题 #9：Paw-Paw 参加过二战，这是 Tex 非常钦佩的事情（总结前面整句话，后接 Tex admire）：',
            answers: ['ce que'],
            hint: 'Direct object of "Tex admire" (referring to whole fact) → ce que.',
            audio: 'Paw-Paw a combattu pendant la guerre, ce que Tex admire beaucoup.',
            explain: 'Comma + whole clause sum-up + subject "Tex" + admire → ce que.',
            explainZh: '总结前一整件事且在从句作 admire 的宾语 → ce que。'
          },
          {
            id: 'd8b6_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tammy adore ___ Tex a écrit.',
            promptZh: 'Tex 原题 #10：Tammy 超爱 Tex 写的内容（后接 Tex a écrit）：',
            answers: ['ce que'],
            hint: 'Direct object of "Tex a écrit" → ce que.',
            audio: 'Tammy adore ce que Tex a écrit.',
            explain: 'ce que Tex a écrit (what Tex wrote).',
            explainZh: '缺直宾 → ce que。'
          },
          {
            id: 'd8b6_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: ___ est dommage, c’est que Paw-Paw habite si loin.',
            promptZh: 'Tex 原题 #11：遗憾的是 Paw-Paw 住得太远了（句首后接 est）：',
            answers: ['Ce qui', 'ce qui'],
            hint: 'Subject of "est dommage" → Ce qui.',
            audio: 'Ce qui est dommage, c’est que Paw-Paw habite si loin.',
            explain: 'Ce qui est dommage, c’est que...',
            explainZh: '句首作主语：Ce qui est dommage, c’est que...。'
          },
          {
            id: 'd8b6_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: ___ Tex regrette, c’est que Paw-Paw téléphone tout le temps.',
            promptZh: 'Tex 原题 #12：Tex 遗憾的是 Paw-Paw 老是打电话来（句首后接 Tex regrette）：',
            answers: ['Ce que', 'ce que'],
            hint: 'Direct object of "Tex regrette" → Ce que.',
            audio: 'Ce que Tex regrette, c’est que Paw-Paw téléphone tout le temps.',
            explain: 'Ce que Tex regrette = What Tex regrets.',
            explainZh: '后接“主语 Tex + 动词 regrette”，缺直宾 → Ce que。'
          }
        ],
        related: [
          { chapterId: 'ch8b_pronouns_relative', pageId: 'p8b_5', label: 'Back to 8B.5 qui & que' },
          { chapterId: 'ch8b_pronouns_relative', pageId: 'p8b_7', label: '8B.7 Relative Pronouns: dont & où' }
        ]
      },

      /* =========================================================
         PAGE 8B.7: RELATIVE PRONOUNS DONT & OÙ (pror3 Part 1)
      ========================================================= */
      {
        id: 'p8b_7',
        code: '8B.7',
        group: 'Relative Pronouns',
        shortTitle: 'Relative: dont & où',
        title: 'Relative Pronouns (2): dont (de-Phrases & "Whose") & où (Place AND Time "When")',
        titleZh: '关系代词（二）：dont（替换 de 与“它的/谁的”）与 où（地点“在那里”+ 时间“那一天”）',
        estMin: 4,
        summary: 'Master the two crucial B1–B2 relative connectors "dont" and "où": (1) DONT replaces "de + noun" whenever the subordinate clause needs "de" — either from verbs/adjectives ("parler de, avoir besoin de, avoir peur de, être fier de, être amoureux de, faire cadeau de") OR from noun possession "whose" (note strict word order: NEVER *dont son grand-père, ALWAYS keep definite article: "Tex, dont le grand-père a combattu..."); (2) OÙ replaces location prepositions (à, dans, sur, sous + place = "where/in which") AND time expressions ("when": "le jour où...", "l’année où..." — NEVER *le jour quand!).',
        summaryZh: '攻克 TCF B1–B2 阅读与作文的“拉开档次神器” **`dont`** 和 **`où`**：① **`dont` = `de + 先行词`**，涵盖两大高频用法：（A）从句里含有带 `de` 的动词或形容词（`parler de, avoir besoin de, avoir peur de, être fier de, être amoureux de, être l’auteur de`）；（B）**表所属“他的/其……”（英语 *whose*）**——超级注意语序与冠词：**`dont + 定冠词 le/la/les + 名词`**（如 `Tex, **dont le grand-père** a combattu` = 爷爷曾参战的 Tex，绝不能写成 *dont son grand-père* 且名词语序不前置！）；② **`où`** 不仅指地点（“在那里”，代替 *dans/à/sur + 地点*），还能替代**时间名词（那一天 / 那一年 / 那个年代）**（如 `le jour **où**...`，法语绝不说 *le jour quand*！）。',
        cheatSummary: [
          { label: 'Two Uses of dont (and Zero Possessive Adj.!)', rule: '1) Verb/adj. + DE: parler de, avoir besoin de, avoir peur de, être fier de, être amoureux de, être l’auteur de ("Le livre dont je suis l’auteur"). 2) Possession ("whose"): "Tex, dont le grand-père a combattu..." (ALWAYS dont + le/la/les + noun, NEVER *dont son)!', ruleZh: 'dont 两大场景：① 从句中缺“de + 宾语”（parler de, avoir peur de, être amoureux de...）；② “其……/谁的……”：必须写 **dont + le/la/les + 名词**，千万别写 *son/sa*！' },
          { label: 'où = Place AND Time (Never *quand!)', rule: 'Place ("where/in which"): "Paris, où l’histoire commence..." Time ("when"): "le jour où les Américains sont entrés", "au moment où", "l’année où..." (NEVER *le jour quand!).', ruleZh: 'où 双栖用法：地点（“在那个城市”）与时间先行词（le jour / le moment / l’année **où**... = “……的那天/时候”，绝不能用 *quand*！）。' }
        ],
        sections: [
          {
            id: 'p8b7_dont_ou',
            heading: '1. Both Jobs of dont & Place/Time où (+ Tex’s WWII Book)',
            headingZh: '一、dont（de-搭配与所属）及 où（空间与时间）全解',
            lead: 'Notice also why French distinguishes "dont" from "duquel": use simple "dont" for EVERY simple "de" (verbs/adjectives/possession), and save "duquel" for multi-word compound prepositions like "à côté de" or "près de" (covered on Page 8B.8!):',
            leadZh: '读 Tex 和 Edouard 谈论祖父战争经历的这两句名言，牢记 `dont` 后**保留主语原语序与定冠词 `le`**，以及 `le jour **où**` 的时间用法：',
            cartoon: {
              src: './assets/tex_cartoons/pror3_auteur.gif',
              alt: 'Tex présente le livre dont il est l’auteur',
              caption: 'Tex : Le livre dont je suis l’auteur... — Edouard : Tex, dont le grand-père a combattu en France en 40, a dédié ce livre à Paw-Paw.',
              captionZh: '我身为作者的这本书（l’auteur **de** ce livre → **dont** je suis l’auteur）；其祖父在法国战斗过的 Tex（**dont le** grand-père...）。'
            },
            table: {
              headers: ['Pronoun', 'Underlying Source', 'Structure Rule', 'Example'],
              rows: [
                { cols: ['dont (de + verb/adj.)', 'parler de · avoir besoin de · être fier de', 'Takes NO de again after the verb!', 'Le livre dont je parle. · Un héros dont je suis fier.'], audio: 'Le livre dont je suis l’auteur est un roman historique.' },
                { cols: ['dont ("whose")', 'le grand-père de Tex', 'dont + le/la/les + noun (NEVER *son/sa!)', 'Tex, dont le grand-père a combattu en France...'], audio: 'Tex, dont le grand-père a combattu en France, a dédié ce livre à Paw-Paw.' },
                { cols: ['où (Place)', 'à Paris · dans cette ville', 'Replaces à / dans / sur / sous + place', 'Paris, où l’histoire commence, va être libéré.'], audio: 'Paris, où l’histoire commence, va être libéré.' },
                { cols: ['où (Time "when")', 'ce jour-là · l’année où...', 'After time nouns (le jour / l’époque / la fois)', 'Le jour où les Américains sont entrés dans la ville.'], audio: 'C’était le jour où les Américains sont entrés.' }
              ]
            },
            examples: [
              { fr: 'Le livre dont je suis l’auteur · Le livre dont je parle · Le garçon dont Bette est amoureuse', en: 'Verb/noun phrase natively requires "de": l’auteur DE, parler DE, amoureux DE', zh: '检验办法：把先行词放回从句末尾还原！如果必须加 **de**（parler **de** ce livre / amoureux **de** lui），就用 dont！', tag: 'de-Phrase Test' },
              { fr: 'Tex, dont le grand-père a combattu... · Voici la fille dont j’ai oublié le nom.', en: 'Both subject ("dont le grand-père...") and object ("dont j’ai oublié le nom") work!', zh: '当“whose + 名词”在从句里作宾语（“我忘了**其**名字”）时，名词语序仍在动词后面：dont j’ai oublié le nom！', tag: 'Whose Word Order' },
              { fr: 'Paw-Paw était à Paris le jour où les Américains sont entrés dans la ville.', en: 'Time antecedent "le jour" takes "où", NEVER *quand or *que!', zh: '重要纠错：“……的那一天”用 le jour **où**，“……的时候”用 au moment **où**（绝不用 *quand）！', tag: 'Time = où' }
            ],
            quickCheck: {
              prompt: 'How do you translate "The movie whose ending (la fin) I liked" into standard French?',
              promptZh: '把 “The movie whose ending I liked（我喜欢它结局的那部电影）” 翻成标准法语（记住 `dont` 的宾语语序！）：',
              options: [
                'le film dont j’ai aimé la fin (keep "la fin" AFTER the verb!)',
                'le film dont la fin j’ai aimée',
                'le film dont j’ai aimé sa fin',
                'le film que j’ai aimé la fin'
              ],
              answerIdx: 0,
              explain: 'With "dont" = "whose", keep normal French SVO word order ("j’ai aimé la fin") and use definite article "la", NEVER *sa!',
              explainZh: '英语把 *whose ending* 提到一块，但法语只提 dont，从句里照常说 j’ai aimé la fin（且只用定冠词 la，不用 sa）！'
            }
          }
        ],
        drills: [
          {
            id: 'd8b7_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tammy : Lyon est la ville ___ Tex a grandi. (place: "where")',
            promptZh: 'Tex 原题 #1：里昂是 Tex 长大的城市（地点“在那里”）：',
            answers: ['où'],
            hint: 'Place ("dans la ville" = in which/where) → où.',
            audio: 'Lyon est la ville où Tex a grandi.',
            explain: 'Location where action happens → où.',
            explainZh: '“在某城市长大”（a grandi dans la ville）→ où。'
          },
          {
            id: 'd8b7_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Joe-Bob : Je n’ai pas lu le livre ___ tu parles. (parler de)',
            promptZh: 'Tex 原题 #2：我没读过你正在说的那本书（parler de qqch）：',
            answers: ['dont'],
            hint: 'Verb "parler de" needs "de" → dont.',
            audio: 'Je n’ai pas lu le livre dont tu parles.',
            explain: 'tu parles DE ce livre → dont.',
            explainZh: 'parler 固定搭配 de → dont。'
          },
          {
            id: 'd8b7_d3',
            kind: 'fib',
            prompt: 'Tex Practice #4: Fiona : Le garçon ___ Bette est amoureuse est... Tex ! (être amoureux de)',
            promptZh: 'Tex 原题 #4：Bette 迷恋上的那个男生（être amoureux de qqn）正是 Tex！',
            answers: ['dont'],
            hint: 'être amoureux DE quelqu’un → dont.',
            audio: 'Le garçon dont Bette est amoureuse est Tex.',
            explain: 'amoureuse DE ce garçon → dont.',
            explainZh: 'amoureuse 搭配介词 de → dont。'
          },
          {
            id: 'd8b7_d4',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tammy : Voici l’endroit ___ je veux me marier, Tex ! (place)',
            promptZh: 'Tex 原题 #7：Tex，这就是我想举办婚礼的地方！（表示地点）：',
            answers: ['où'],
            hint: 'l’endroit (place where) → où.',
            audio: 'Voici l’endroit où je veux me marier, Tex !',
            explain: 'Location → où.',
            explainZh: '先行词是地点 l’endroit → où。'
          },
          {
            id: 'd8b7_d5',
            kind: 'fib',
            prompt: 'Tex Practice #9: Paw-Paw est un ancien combattant ___ Tex est très fier. (être fier de)',
            promptZh: 'Tex 原题 #9：Paw-Paw 是位让 Tex 深感自豪的老兵（être fier de）：',
            answers: ['dont'],
            hint: 'être fier DE quelqu’un → dont.',
            audio: 'Paw-Paw est un ancien combattant dont Tex est très fier.',
            explain: 'Tex est fier DE lui → dont.',
            explainZh: 'être fier de（以……为骄傲）→ dont。'
          },
          {
            id: 'd8b7_d6',
            kind: 'fib',
            prompt: 'Tex Practice #10: Trey : Les chansons ___ je suis l’auteur sont au Top 20. (l’auteur de)',
            promptZh: 'Tex 原题 #10：我作词作曲的歌（l’auteur de）排进了前二十名！',
            answers: ['dont'],
            hint: 'l’auteur DE ces chansons → dont.',
            audio: 'Les chansons dont je suis l’auteur sont au Top 20.',
            explain: 'être l’auteur DE → dont.',
            explainZh: 'l’auteur de 替换为 dont。'
          },
          {
            id: 'd8b7_d7',
            kind: 'fib',
            prompt: 'Tex Practice #12: Le béret ___ j’ai fait cadeau à Tex est superbe. (faire cadeau de)',
            promptZh: 'Tex 原题 #12：我作为礼物送给 Tex 的那顶贝雷帽（faire cadeau de qqch à qqn）帅呆了！',
            answers: ['dont'],
            hint: 'Idiom: faire cadeau DE quelque chose à quelqu’un → dont!',
            audio: 'Le béret dont j’ai fait cadeau à Tex est superbe.',
            explain: 'Watch out: "faire cadeau DE qqch" uses "de", so its relative pronoun is "dont" (whereas "donner/offrir qqch" uses "que")!',
            explainZh: '精彩区分：offrir qqch 用 que；但固定短语 faire cadeau DE qqch 自带 de，因此必须用 dont！'
          },
          {
            id: 'd8b7_d8',
            kind: 'fib',
            prompt: 'Time relative (NOT *quand!): "Je me souviens très bien du jour ___ nous sommes arrivés au Canada."',
            promptZh: '时间先行词考点：“我清楚记得我们抵达加拿大的那一天”（记得用“在那个时间”，不用 *quand）：',
            answers: ['où'],
            hint: 'Time noun ("le jour") requires "où" in French!',
            audio: 'Je me souviens très bien du jour où nous sommes arrivés au Canada.',
            explain: 'After time antecedents (le jour, l’année, le moment, l’époque), always use "où"!',
            explainZh: 'le jour / le moment / l’année 等时间名词后引导定语从句，一律用 où！'
          },
          {
            id: 'd8b7_d9',
            kind: 'fib',
            prompt: 'Possession ("whose"): "C’est une amie ___ le frère travaille à Montréal."',
            promptZh: '所有格“whose”：“这是一位哥哥在蒙特利尔工作的朋友（注意后面的 le frère）”：',
            answers: ['dont'],
            hint: '"le frère de cette amie" → dont le frère.',
            audio: 'C’est une amie dont le frère travaille à Montréal.',
            explain: 'dont + definite article (le/la/les) expresses "whose".',
            explainZh: '“其哥哥 / 谁的哥哥”：dont le frère。'
          },
          {
            id: 'd8b7_d10',
            kind: 'choice',
            prompt: 'Pick the sentence with ZERO redundant prepositions or wrong pronouns ("dont" vs. "que"):',
            promptZh: '判断对错：表达“这是我非常害怕的一只狗”（avoir peur de），哪一句完全正确？',
            options: [
              'C’est un chien dont j’ai très peur.',
              'C’est un chien que j’ai très peur.',
              'C’est un chien dont j’en ai très peur.',
              'C’est un chien duquel j’ai très peur de.'
            ],
            answerIdx: 0,
            audio: 'C’est un chien dont j’ai très peur.',
            explain: 'avoir peur DE → dont replaces "de", so NEVER add extra *en or *de at the end!',
            explainZh: 'dont 自身已经包含了介词 de，千万不要再重复加 *en 或 *de！'
          },
          {
            id: 'd8b7_d11',
            kind: 'choice',
            prompt: 'Meaning check: When can "où" mean "from where" or "through which"?',
            promptZh: '扩展阅读：如果在阅读里遇到 “la ville d’où je viens” 或 “la rue par où je passe”，d’où / par où 怎么理解？',
            options: [
              'd’où = from where (origin, venir de); par où = through/by which (passer par)',
              'Both mean "at what time"',
              'd’où is the same as dont in every sentence',
              'par où can only refer to people'
            ],
            answerIdx: 0,
            audio: 'Voilà la ville d’où je viens.',
            explain: 'With prepositions de/par + location, où forms "d’où" (from where) and "par où" (through which)!',
            explainZh: 'où 可搭配 de / par 构成“我来自的那个城市（d’où je viens）”和“我经过的那条街（par où je passe）”。'
          },
          {
            id: 'd8b7_d12',
            kind: 'fib',
            prompt: 'TCF B2 high-frequency verb ("avoir besoin de"): "Voilà le document ___ vous avez besoin pour votre dossier."',
            promptZh: 'TCF 高频句型：“这就是您办手续所需要的（avoir besoin de）文件。”：',
            answers: ['dont'],
            hint: 'avoir besoin DE → dont.',
            audio: 'Voilà le document dont vous avez besoin pour votre dossier.',
            explain: 'avoir besoin de → dont.',
            explainZh: '看到 avoir besoin（或 avoir envie / parler / s’occuper）缺宾语直接填 dont！'
          }
        ],
        related: [
          { chapterId: 'ch8b_pronouns_relative', pageId: 'p8b_6', label: 'Back to 8B.6 ce qui & ce que' },
          { chapterId: 'ch8b_pronouns_relative', pageId: 'p8b_8', label: '8B.8 lequel, ce dont & ce à quoi + Review' }
        ]
      },

      /* =========================================================
         PAGE 8B.8: PREP + LEQUEL, CE DONT & CE À QUOI + SYNTHESIS (pror3 Part 2)
      ========================================================= */
      {
        id: 'p8b_8',
        code: '8B.8',
        group: 'Relative Pronouns',
        shortTitle: 'lequel, ce dont, ce à quoi',
        title: 'Relative Pronouns (3): prep + lequel, duquel vs. dont & Antecedent-Less ce dont / ce à quoi',
        titleZh: '关系代词（三）：介词 + lequel（auquel/duquel）与无先行词 ce dont / ce + 介词 + quoi',
        estMin: 4,
        summary: 'Complete the entire French relative & pronoun architecture at CLB 7 / B2 level: (1) use PREPOSITION + lequel / laquelle / lesquels / lesquelles (and contractions auquel / auxquels / auxquelles, duquel / desquels...) whenever a clause needs ANY preposition other than simple "de" ("dans lequel", "auxquels Tex s’identifie", "entre lesquelles", AND after compound prepositions containing de like "à côté duquel / près de laquelle"!); (2) NEVER strand a preposition at the end like English ("with whom" → "avec qui / avec lequel", NEVER *qui...avec); (3) when NO antecedent exists, use "ce dont" (de) and "ce + prep + quoi" ("ce à quoi je fais allusion / réfléchis / pense").',
        summaryZh: '冲刺 TCF B2/CLB 7 复杂长句最后两块拼图：① **介词 + `lequel / laquelle / lesquels / lesquelles`**：当从句动词需要用到 `de` 以外的介词（如 `dans, sur, avec, pour, parmi, entre, à`，以及合成介词 `à côté de, près de, grâce à`）时，把**介词直接放在 `lequel` 前面**（遇 `à/de` 必缩合：`auquel, auxquels, à côté duquel`），**绝对不能像英文把介词甩在句尾**（指人还常直接用 **`avec qui / pour qui`**）；② 当**没有先行词**且需要介词时：`de` 变成 **`ce dont`**，其余介词（尤其是 `à`）变成 **`ce + 介词 + quoi`**（如 `**ce à quoi** je pense`、`ce sur quoi je compte`）！',
        cheatSummary: [
          { label: 'preposition + lequel + Contractions', rule: 'lequel (m. sg.), laquelle (f. sg.), lesquels (m. pl.), lesquelles (f. pl.). Contractions: à + lequel/lesquels/lesquelles → auquel / auxquels / auxquelles; de + ... → duquel / desquels / desquelles (used after 2-word prepositions like à côté de, près de!). Note: NEVER strand prepositions at the end!', ruleZh: '介词必须放前面！遇 à 缩合：auquel / auxquels / auxquelles（阴单仍是 à laquelle）；遇复合介词如 à côté de / près de 时必用 duquel / de laquelle / desquels（简单 de 仍用 dont）！' },
          { label: 'No Antecedent: ce dont & ce à quoi', rule: 'Verb takes DE (avoir peur de, parler de, avoir besoin de) → CE DONT ("Ce dont j’ai peur..."). Verb takes À or other prep (penser à, réfléchir à, faire allusion à, compter sur) → CE + PREP + QUOI ("ce à quoi je réfléchis", "ce sur quoi il compte").', ruleZh: '无具体名词先行词时：需要 de → ce dont（如 Ce dont je parle...）；需要 à 或 sur/avec → ce à quoi / ce sur quoi（如 Tu sais ce à quoi je pense ?）！' }
        ],
        sections: [
          {
            id: 'p8b8_lequel',
            heading: '1. preposition + lequel (and Contractions) & "à côté duquel"',
            headingZh: '一、介词 + lequel 缩合规则与“禁止介词殿后”铁律',
            lead: 'Look carefully at Tex’s Resistance examples: "dans lequel", "auxquels" (= à + lesquels for s’identifier à), "entre lesquelles", and "à côté duquel" (why duquel instead of dont? Because "à côté de" is a compound preposition!):',
            leadZh: '看这段文学例句里 `lequel` 如何随先行词性别单复数变化，并且留意复合介词 `à côté **duquel**`（为什么不用 `dont`？因为 `dont` 不能拆开两词以上的复合介词 `à côté de`！）：',
            cartoon: {
              src: './assets/tex_cartoons/pror3_identifie.gif',
              alt: 'Ses personnages, auxquels Tex s’identifie',
              caption: 'Ses personnages (m. pl.), auxquels Tex s’identifie, sont des héros ! — L’homme à côté duquel elle est assise...',
              captionZh: '角色（les personnages，阳性复数）+ s’identifier à → auxquels；坐在他旁边（à côté de）的男人 → à côté duquel！'
            },
            table: {
              headers: ['Gender / Num.', 'Base (+ dans/avec...)', 'à + lequel', 'de + lequel (after à côté de...)'],
              rows: [
                { cols: ['Masc. Sg.', 'lequel', 'auquel', 'duquel'], audio: 'Le roman dans lequel il écrit. L’homme à côté duquel elle est assise.' },
                { cols: ['Fem. Sg.', 'laquelle', 'à laquelle (NO contraction!)', 'de laquelle'], audio: 'La raison pour laquelle je viens. La table près de laquelle nous sommes.' },
                { cols: ['Masc. Pl.', 'lesquels', 'auxquels', 'desquels'], audio: 'Ses personnages, auxquels Tex s’identifie.' },
                { cols: ['Fem. Pl.', 'lesquelles', 'auxquelles', 'desquelles'], audio: 'Les deux femmes entre lesquelles l’officier se trouve.' }
              ]
            },
            examples: [
              { fr: 'Ce roman, dans lequel Tex utilise les souvenirs de Paw-Paw, est réaliste.', en: 'le roman (m. sg.) + dans → dans lequel', zh: '介词 dans 放前面 + 阳性单数 lequel：dans lequel（绝不拆成 *le roman que Tex écrit dans）。', tag: 'dans lequel' },
              { fr: 'L’homme à côté duquel Marie-Tammy est assise · Les hommes parmi lesquels il se trouve.', en: 'Compound prep "à côté de" uses duquel/desquels; "parmi" + masc. pl. → parmi lesquels', zh: '双词介词 à côté de / près de / loin de 后面用 duquel / de laquelle / desquels；指人还可说 avec qui！', tag: 'Compound Prep.' },
              { fr: 'Tex, tu es le tatou avec qui / avec lequel je veux me marier !', en: 'For a PERSON after avec/pour/sans/chez, French loves BOTH "avec qui" and "avec lequel"!', zh: '当先行词是**人**时，介词后面（avec / pour / sans / chez）既可用 lequel 系列，口语和书面更常直接用 **qui**（如 avec qui）！', tag: 'Person = qui or lequel' }
            ]
          },
          {
            id: 'p8b8_cedont',
            heading: '2. Antecedent-Less "ce dont" & "ce à quoi"',
            headingZh: '二、无先行词升级版：ce dont 与 ce à quoi / ce + 介词 + quoi',
            lead: 'Just as qui/que gain "ce" when no noun exists (ce qui / ce que), "dont" becomes "ce dont" (for de), and "à lequel" becomes "ce à quoi" (for à / other prepositions!):',
            leadZh: '如果前面没有明确先行词名词（想说“我们害怕的事”、“我暗指的东西”、“我正在思考的问题”），就升级成 **`ce dont`** 与 **`ce à quoi`**：',
            examples: [
              { fr: 'On comprend ce dont les Parisiens avaient peur. · Ce dont je parle n’a rien à voir avec Tex.', en: 'avoir peur de / parler de (no noun antecedent) → ce dont', zh: '“（大家害怕的）事”、“（我说起的）事”，因为动词带 de 且没有先行词，用 ce dont！', tag: 'ce dont (de)' },
              { fr: 'Tout le monde comprend ce à quoi Tex fait allusion. · Tu sais ce à quoi je pense ?', en: 'faire allusion à / penser à / réfléchir à (no noun antecedent) → ce à quoi!', zh: '“他所暗示的事”（faire allusion à）、“我在想的事”（penser à），因为动词带 à 且没有先行词，用 ce à quoi！', tag: 'ce à quoi (à)' }
            ],
            quickCheck: {
              prompt: 'Pick the sentence that correctly replaces "You know what I am thinking about?" (penser à, no noun):',
              promptZh: '用关系代词表达“你知道我在想什么吗？（penser à，没有具体名词先行词）”，选哪一项？',
              options: [
                'Tu sais ce à quoi je pense ? (NO noun + penser à → ce à quoi!)',
                'Tu sais ce dont je pense ?',
                'Tu sais ce que je pense à ?',
                'Tu sais auquel je pense ?'
              ],
              answerIdx: 0,
              explain: '(1) No noun antecedent → needs "ce..."; (2) penser takes À (not *de* → not *ce dont); (3) preposition precedes "quoi": "ce à quoi je pense"!',
              explainZh: 'penser 搭配介词 à（不带 de 所以不是 ce dont），且没有具体先行词，因此用 ce à quoi je pense！（不能把 à 留在句尾）。'
            }
          }
        ],
        drills: [
          {
            id: 'd8b8_d1',
            kind: 'fib',
            prompt: 'Tex Practice #3: Le roman dans ___ Marie-Tammy apparaît s’appelle Guerre et amour.',
            promptZh: 'Tex 原题 #3：Marie-Tammy 出场的那本小说（le roman，阳性单数，介词 dans 已给出）叫《战争与爱》：',
            answers: ['lequel'],
            hint: 'le roman (masc. sg.) after preposition "dans" → lequel.',
            audio: 'Le roman dans lequel Marie-Tammy apparaît s’appelle Guerre et amour.',
            explain: 'dans + le roman (masc. sg.) → dans lequel.',
            explainZh: 'le roman 为阳性单数，介词 dans 后填 lequel。'
          },
          {
            id: 'd8b8_d2',
            kind: 'fib',
            prompt: 'Tex Practice #5: Bette : ___ je parle n’a rien à voir avec Tex. (no antecedent, parler de — capitalize)',
            promptZh: 'Tex 原题 #5：我正在说的事（无先行词，parler de）跟 Tex 毫无关系！（句首大写）：',
            answers: ['Ce dont', 'ce dont'],
            hint: 'No noun + parler de → Ce dont.',
            audio: 'Ce dont je parle n’a rien à voir avec Tex.',
            explain: 'parler de + no antecedent → Ce dont.',
            explainZh: '无先行词且动词是 parler de → Ce dont。'
          },
          {
            id: 'd8b8_d3',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tammy : Tex, tu sais ___ je pense ? (no antecedent, penser à)',
            promptZh: 'Tex 原题 #6：Tex，你知道我在想什么吗？（无先行词，penser à）：',
            answers: ['ce à quoi'],
            hint: 'No noun + penser à → ce à quoi.',
            audio: 'Tex, tu sais ce à quoi je pense ?',
            explain: 'penser à + no noun → ce à quoi.',
            explainZh: 'penser à 且无具体名词，用 ce à quoi。'
          },
          {
            id: 'd8b8_d4',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tammy : Tex, tu es le tatou avec ___ je veux me marier ! (person/tatou after avec)',
            promptZh: 'Tex 原题 #8：Tex，你就是我想与之结婚的那只犰狳！（le tatou 为阳性单数，avec 后面填 lequel 或 qui）：',
            answers: ['lequel', 'qui'],
            hint: 'le tatou (masc. sg.) after avec → lequel (or qui for a person/character!).',
            audio: 'Tu es le tatou avec lequel je veux me marier !',
            explain: 'Both "avec lequel" and "avec qui" are grammatically correct here!',
            explainZh: 'lequel（照应阳性单数 le tatou）与 qui（拟人/指人通用）在这里都正确！'
          },
          {
            id: 'd8b8_d5',
            kind: 'fib',
            prompt: 'Tex Practice #11: Tu me demandes ___ je réfléchis ? À mon prochain poème bien sûr !',
            promptZh: 'Tex 原题 #11：你问我在思考什么（réfléchir à，无先行词）？当然是我的下一首诗啦！：',
            answers: ['ce à quoi'],
            hint: 'réfléchir À (no noun) → ce à quoi.',
            audio: 'Tu me demandes ce à quoi je réfléchis ?',
            explain: 'réfléchir à + no noun antecedent → ce à quoi.',
            explainZh: 'réfléchir à 且无先行词 → ce à quoi。'
          },
          {
            id: 'd8b8_d6',
            kind: 'fib',
            prompt: 'Contraction à + lesquels: "Ce sont des valeurs (f. pl.) / principes (m. pl.)": Voici les principes ___ je tiens beaucoup. (tenir à)',
            promptZh: '缩合练习：“这些是我非常重视的原则（les principes，阳性复数，动词 tenir à）”→ 填入 à+lesquels 的缩合词：',
            answers: ['auxquels'],
            hint: 'à + lesquels contracts to auxquels.',
            audio: 'Voici les principes auxquels je tiens beaucoup.',
            explain: 'les principes (masc. pl.) + à (tenir à) → auxquels.',
            explainZh: 'à + 阳性复数 lesquels 必须缩合成 auxquels！'
          },
          {
            id: 'd8b8_d7',
            kind: 'fib',
            prompt: 'Feminine singular after pour: "Quelle est la raison pour ___ vous voulez immigrer au Canada ?"',
            promptZh: 'TCF EO/EE 真题高频：“这就是您想移民加拿大的原因（la raison，阴性单数，pour 已在空格前）”：',
            answers: ['laquelle'],
            hint: 'la raison is feminine singular → laquelle.',
            audio: 'Quelle est la raison pour laquelle vous voulez immigrer au Canada ?',
            explain: 'pour + la raison (fem. sg.) → pour laquelle.',
            explainZh: 'la raison 是阴性单数，pour 后面填 laquelle！'
          },
          {
            id: 'd8b8_d8',
            kind: 'fib',
            prompt: 'Compound preposition + de: "Le café près ___ j’habite sert d’excellents croissants." (près de + le café)',
            promptZh: '复合介词 près de 考点：“我住处附近的那家咖啡馆（le café，阳性单数）”，près 后面不能用 dont，填什么？',
            answers: ['duquel'],
            hint: 'After 2-word compound preposition "près de", de + lequel → duquel!',
            audio: 'Le café près duquel j’habite sert d’excellents croissants.',
            explain: 'Because "près de" is a compound preposition, NEVER split it with *dont — use "près duquel"!',
            explainZh: '遇到两词构成的复合介词（près de, à côté de, en face de）时，必须保留前面词并用 de+lequel 缩合：près duquel！'
          },
          {
            id: 'd8b8_d9',
            kind: 'choice',
            prompt: 'Pick the ONE grammatically valid French translation of "The friends I went out with" (sortir avec):',
            promptZh: '用标准法语表达“和我一起出去玩的那些朋友们（sortir avec，les amis 为阳性复数）”，选哪一项？',
            options: [
              'les amis avec lesquels / avec qui je suis sorti',
              'les amis que je suis sorti avec',
              'les amis qui je suis sorti avec',
              'les amis dont je suis sorti'
            ],
            answerIdx: 0,
            audio: 'Les amis avec qui je suis sorti sont sympas.',
            explain: 'French NEVER strands a preposition like "avec" at the end of a relative clause! Put it in front: "avec qui" or "avec lesquels".',
            explainZh: '法语绝对禁止把介词留在从句末尾（*que je suis sorti avec 绝对错！）！必须把介词提前，用 avec qui 或 avec lesquels。'
          },
          {
            id: 'd8b8_d10',
            kind: 'choice',
            prompt: 'Ch 8B Mixed Diagnostic 1 (celui vs. le mien vs. chacun): Which sentence has an error?',
            promptZh: '第八章 B 综合排错 1：下面哪一句存在**语法错误**？',
            options: [
              '*Chaque des étudiants a reçu son diplôme. (must use Chacun!)',
              'Chacun des étudiants a reçu son diplôme.',
              'Les étudiants ont chacun leur méthode.',
              'Ces résultats sont meilleurs que ceux de l’an dernier.'
            ],
            answerIdx: 0,
            audio: 'Chacun des étudiants a reçu son diplôme.',
            explain: '"Chaque" MUST modify a following noun ("Chaque étudiant"). Before "des étudiants", use pronoun "Chacun"!',
            explainZh: 'chaque 不能直接接 des / de，只能直接接单数名词；想说“学生中的每一个”，必须用代词 Chacun des étudiants！'
          },
          {
            id: 'd8b8_d11',
            kind: 'fib',
            prompt: 'Ch 8B Mixed Diagnostic 2 (ce dont): "On n’oublie jamais ___ on a besoin pour réussir." (avoir besoin de, no antecedent)',
            promptZh: '第八章 B 综合填空：“人永远不会忘记成功所需的（avoir besoin de，无具体名词先行词）东西”：',
            answers: ['ce dont'],
            hint: 'No noun + avoir besoin de → ce dont.',
            audio: 'On n’oublie jamais ce dont on a besoin pour réussir.',
            explain: 'avoir besoin DE + no noun antecedent → ce dont.',
            explainZh: '无先行词且动词搭配 de → ce dont。'
          },
          {
            id: 'd8b8_d12',
            kind: 'choice',
            prompt: 'Ch 8B Mixed Diagnostic 3 (Relative + PC Agreement): "Voici les décisions importantes ___ le gouvernement a prises récemment."',
            promptZh: '第八章 B 综合题：“以下是政府最近作出的重要决定（les décisions，阴性复数；注意 prises 加了 -es）”：',
            options: [
              'que (les décisions = preceding COD of a prises)',
              'qui (never precedes subject + verb)',
              'dont (prendre does not take de here)',
              'lesquelles (no preposition needed)'
            ],
            answerIdx: 0,
            audio: 'Voici les décisions que le gouvernement a prises récemment.',
            explain: '"prendre une décision" takes a direct object → "que", triggering fem. pl. "-es" on "prises"!',
            explainZh: 'prendre 直接及物（prendre des décisions），从句已有主语 le gouvernement → 填 que（同时让过去分词 prises 加阴复 -es！）。'
          }
        ],
        related: [
          { chapterId: 'ch8b_pronouns_relative', pageId: 'p8b_7', label: 'Back to 8B.7 dont & où' },
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_1', label: 'Review 8A.1 Complete Pronoun Map' }
        ]
      }
    ]
  });
})();
