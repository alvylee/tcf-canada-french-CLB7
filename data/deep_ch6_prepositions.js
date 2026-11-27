(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch6_prepositions',
    code: 'Ch 7',
    level: 'A2',
    category: 'prepositions',
    icon: '🧭',
    title: 'Prepositions (Les Prépositions)',
    titleZh: '第七章 · 法语介词全掌握',
    subtitle: 'Tex-style slow-paced deep mastery: 11 bite-sized pages covering 35+ common prepositions (A–V), contractions (au/aux/du/des), places & countries (à/en/au/aux & de/du/des), time prepositions (depuis / pendant / pour / il y a...que / imparfait), and infinitive constructions (à vs. de & après past infinitive) — with 19 cartoons & 128 drills.',
    subtitleZh: '对标 Tex 深度拆分为 11 个轻松小页：35+ 个高频空间/逻辑介词精讲（A–V）、à/de 缩合（au/du/aux/des）、地理国名与城市介词（往来两套）、时间四姐妹（depuis/pendant/pour/il y a...que 与未完成过去时）、以及“动词/形容词 + à/de + 不定式”与 après 过去不定式，配 19 张原版卡通与 128 题专练。',
    pages: [
      /* =========================================================
         PAGE 6.1: INTRO TO PREPOSITIONS & EN/FR MISMATCHES
      ========================================================= */
      {
        id: 'pre_6_1',
        code: '7.1',
        group: 'Intro to Prepositions',
        shortTitle: 'What Is a Preposition?',
        title: 'Introduction to Prepositions: Relationships & English–French Mismatches',
        titleZh: '介词入门：空间/时间桥梁与英语直译大坑（téléphoner à vs attendre）',
        estMin: 3,
        summary: 'Understand what prepositions link (nouns, verbs, clauses), remember they are 100% invariable (except à/de contractions!), and stop translating English prepositions word-for-word (fâchée contre, téléphoner à, attendre/écouter with NO preposition).',
        summaryZh: '法语介词词形永远不变（仅 à 与 de 遇定冠词 le/les 缩合）。最关键的习惯是：千万不能按英语直译介词（angry at = fâchée contre；call someone = téléphoner à quelqu’un；wait for = attendre，listen to = écouter，无任何介词！）。',
        cheatSummary: [
          { label: 'Core Rule & Invariable Form', rule: 'Prepositions link nouns, verbs, and parts of a sentence (space, time, logic). They are invariable—EXCEPT à and de contract with le / les (au, aux, du, des).', ruleZh: '介词本身永不变形（无阴阳性单复数），唯一例外是 à 和 de 遇定冠词 le / les 缩合为 au, aux, du, des。' },
          { label: 'Never Translate Literally!', rule: 'Different preposition: "être fâchée CONTRE" (angry at), "téléphoner À" (telephone someone). NO preposition in French: "attendre le bus" (wait FOR), "écouter la radio" (listen TO), "regarder" (look AT), "chercher" (look FOR).', ruleZh: '不能靠英语语感蒙：① 换介词：fâché contre（对…生气）、téléphoner à（给…打电话）；② 法语不加介词直接及物：attendre le bus（等车）、écouter la radio（听收音机）、chercher（找）、regarder（看）。' }
        ],
        sections: [
          {
            id: 'pre_intro_mismatch',
            heading: '1. What Prepositions Do + Classic Translation Mismatches',
            headingZh: '一、介词的作用与最常见的英语直译错误',
            lead: 'Prepositions establish spatial, temporal, or logical relationships between nouns and verbs. Always memorize French prepositions as fixed verb/adjective pairings rather than guessing from English—some verbs add a French preposition English lacks, while others drop a preposition English requires!',
            leadZh: '介词把名词、动词与时间/地点关系串在一起。学会把介词当作“动词/形容词固定搭配词汇”来背，才能彻底避开直译错误：',
            cartoon: {
              src: './assets/tex_cartoons/pre1_telephone.gif',
              alt: 'Tex téléphone à Joe-Bob',
              caption: 'Tex téléphone à Joe-Bob (needs à!) vs. Fiona attend le bus (NO preposition!).',
              captionZh: '法语说 téléphoner à（必须带 à），而 attendre / écouter 后面直接接名词（不加任何介词）！'
            },
            table: {
              headers: ['Mismatch Type', 'French Sentence', 'Literal vs. Natural English'],
              rows: [
                { cols: ['Different Preposition', 'Bette est fâchée contre Tammy.', 'Literally "angry against" → Bette is angry at Tammy.'], audio: 'Bette est fâchée contre Tammy.' },
                { cols: ['FR Needs à (EN Zero)', 'Tex téléphone à Joe-Bob.', 'Literally "telephones to" → Tex calls Joe-Bob.'], audio: 'Tex téléphone à Joe-Bob.' },
                { cols: ['FR Zero (EN Needs "for")', 'Fiona attend le bus.', 'Literally "waits the bus" → Fiona waits for the bus.'], audio: 'Fiona attend le bus.' },
                { cols: ['FR Zero (EN Needs "to")', 'Joe-Bob écoute la radio.', 'Literally "listens the radio" → Joe-Bob listens to the radio.'], audio: 'Joe-Bob écoute la radio.' }
              ]
            },
            quickCheck: {
              prompt: 'How do you say "I am waiting for the bus and listening to music"?',
              promptZh: '选出地道且完全正确的句子：“我在等公交车并且听音乐。”',
              options: [
                'J’attends le bus et j’écoute la musique.',
                'J’attends pour le bus et j’écoute à la musique.',
                'J’attends à le bus et j’écoute pour la musique.',
                'J’attends de le bus et j’écoute de la musique.'
              ],
              answerIdx: 0,
              explain: 'Both "attendre" (to wait for) and "écouter" (to listen to) take a DIRECT object with NO preposition in French!',
              explainZh: 'attendre（等）和 écouter（听）在法语里都是直接及物动词，后面绝对不加 pour 或 à！'
            }
          }
        ],
        drills: [
          {
            id: 'd61_d1',
            kind: 'choice',
            prompt: 'Which preposition follows "être fâché" ("angry at someone") in French?',
            promptZh: '“对某人生气”（être fâché）后面要接哪个介词？',
            options: ['contre (Bette est fâchée contre Tammy.)', 'à', 'pour', 'sur'],
            answerIdx: 0,
            audio: 'Bette est fâchée contre Tammy.',
            explain: 'être fâché(e) CONTRE quelqu’un = to be angry at/with someone.',
            explainZh: '固定搭配：être fâché(e) contre quelqu’un。'
          },
          {
            id: 'd61_d2',
            kind: 'choice',
            prompt: 'Which sentence is RIGHT for "Tex calls Joe-Bob on the phone"?',
            promptZh: '“Tex 给 Joe-Bob 打电话”哪一句是对的？',
            options: ['Tex téléphone à Joe-Bob.', 'Tex téléphone Joe-Bob.', 'Tex téléphone pour Joe-Bob.', 'Tex téléphone contre Joe-Bob.'],
            answerIdx: 0,
            audio: 'Tex téléphone à Joe-Bob.',
            explain: '"téléphoner à quelqu’un" ALWAYS requires "à" in French!',
            explainZh: 'téléphoner 必须接 à（所以代词化会用 lui：Il lui téléphone）。'
          },
          {
            id: 'd61_d3',
            kind: 'choice',
            prompt: 'Complete: "Fiona attend ___ bus." (waits for the bus)',
            promptZh: '选择正确填空：“Fiona 在等公交车。”',
            options: ['le (no preposition!)', 'pour le', 'à le', 'du'],
            answerIdx: 0,
            audio: 'Fiona attend le bus.',
            explain: '"attendre" already includes "for" → "Fiona attend le bus."',
            explainZh: 'attendre 直接接宾语 le bus（绝不加 pour！）。'
          },
          {
            id: 'd61_d4',
            kind: 'choice',
            prompt: 'Complete: "Joe-Bob écoute ___ radio." (listens to the radio)',
            promptZh: '选择正确填空：“Joe-Bob 在听广播。”',
            options: ['la (no preposition!)', 'à la', 'pour la', 'sur la'],
            answerIdx: 0,
            audio: 'Joe-Bob écoute la radio.',
            explain: '"écouter" already includes "to" → "Joe-Bob écoute la radio."',
            explainZh: 'écouter 直接接宾语 la radio（不加 à！）。'
          },
          {
            id: 'd61_d5',
            kind: 'choice',
            prompt: 'Do French prepositions ever take masculine/feminine or plural endings?',
            promptZh: '法语介词本身会有阴阳性或单复数变化吗？',
            options: [
              'No — prepositions are invariable (except à/de contracting with le/les).',
              'Yes — they agree with the following noun.',
              'Only temporal prepositions agree.',
              'Plural nouns add -s to "avec".'
            ],
            answerIdx: 0,
            audio: 'sur, sous, avec, sans',
            explain: 'Prepositions never agree for gender or number; only à and de contract with le/les.',
            explainZh: '介词本身词形固定不变，只有 à 和 de 遇定冠词 le/les 会缩合。'
          },
          {
            id: 'd61_d6',
            kind: 'fib',
            prompt: 'Angry at someone: Bette est fâchée ___ Tammy.',
            promptZh: '固定介词填空：Bette 生 Tammy 的气了。',
            answers: ['contre'],
            hint: 'literally "against" = contre.',
            audio: 'Bette est fâchée contre Tammy.',
            explain: '"être fâché(e) contre" = angry at.',
            explainZh: '记住搭配：être fâché(e) contre。'
          },
          {
            id: 'd61_d7',
            kind: 'fib',
            prompt: 'Call someone: Tex téléphone ___ Joe-Bob.',
            promptZh: '介词填空：Tex 给 Joe-Bob 打电话。',
            answers: ['à', 'a'],
            hint: 'téléphoner + ___ + person.',
            audio: 'Tex téléphone à Joe-Bob.',
            explain: '"téléphoner à quelqu’un".',
            explainZh: 'téléphoner à + 人名。'
          },
          {
            id: 'd61_d8',
            kind: 'fib',
            prompt: 'Wait for (direct!): Nous attendons ___ train. (the train — m.sg., NO preposition!)',
            promptZh: '零介词填空（不要加 pour！）：我们在等那趟火车。',
            answers: ['le'],
            hint: 'attendre takes direct definite article "le".',
            audio: 'Nous attendons le train.',
            explain: '"attendre le train" (no preposition!).',
            explainZh: '直接填定冠词 le：attendre le train。'
          },
          {
            id: 'd61_d9',
            kind: 'fib',
            prompt: 'Listen to (direct!): J’écoute ___ professeur. (the professor — m.sg., NO preposition!)',
            promptZh: '零介词填空（不要加 à！）：我在听教授讲课。',
            answers: ['le'],
            hint: 'écouter takes direct object "le professeur".',
            audio: 'J’écoute le professeur.',
            explain: '"écouter le professeur" (no preposition!).',
            explainZh: '直接填定冠词 le：écouter le professeur。'
          },
          {
            id: 'd61_d10',
            kind: 'choice',
            prompt: 'Same English-trap pattern! Which verb ALSO needs NO preposition for "for" ("I’m looking for my keys")?',
            promptZh: '举一反三：英语 "look for（寻找）" 到法语里同样不用加 pour 的动词是：',
            options: ['chercher (Je cherche mes clés.)', 'chercher pour mes clés', 'chercher à mes clés', 'parler mes clés'],
            answerIdx: 0,
            audio: 'Je cherche mes clés.',
            explain: '"chercher" = to look for (direct object, no "pour"); "regarder" = to look at (direct object, no "à").',
            explainZh: '“四大零介词常考动词”：attendre（等）、écouter（听）、chercher（找）、regarder（看）全都不加介词直接接名词！'
          }
        ],
        related: [
          { chapterId: 'ch6_prepositions', pageId: 'pre_6_2', label: '7.2 Common Prepositions A–C' }
        ]
      },

      /* =========================================================
         PAGE 6.2: COMMON PREPOSITIONS A–C (CH14 KEY ITEMS + 3 CARTOONS)
      ========================================================= */
      {
        id: 'pre_6_2',
        code: '7.2',
        group: 'Common Prepositions A–C',
        shortTitle: 'Prepositions A–C (chez, à cause de...)',
        title: 'Common Prepositions (A–C): à, à cause de, au milieu de, avant, avec, chez & contre',
        titleZh: '常用介词（A–C 组）：à cause de vs parce que、chez 的三层用法与周边方位',
        estMin: 5,
        summary: 'Learn all 14 Tex A–C prepositions with Louisiana birthday story scenes: à cause de (+ noun) vs. parce que (+ clause), spatial positions (à côté de / à droite de / à gauche de / autour de / au milieu de), avec + noun = -ly adverb, and chez (home / shop / among).',
        summaryZh: '跟着 Paw-Paw 的路易斯安那州生日之旅一次学会 14 个 A–C 组介词：**à cause de（+ 名词，因为）**、全套周围方位（à côté de / à droite de / à gauche de / au centre de / au milieu de / autour de）、**avec + 抽象名词 = 副词**（avec joie = 欢乐地），以及超级实用的 **chez**（去谁家 / 去什么店 / 在…人群之中）。',
        cheatSummary: [
          { label: 'à cause de vs. parce que + avec + Noun', rule: 'à cause de + NOUN ("à cause de la fête") vs. parce que + CLAUSE ("parce qu’il pleut"). Avec + abstract noun acts like an -ly adverb ("avec joie" = joyfully).', ruleZh: 'à cause de 后接名词或代词（因为……），而 parce que 后接完整主谓句。avec + 名词常等价英语 -ly 副词（avec joie 愉快地）。' },
          { label: 'The Three Meanings of chez', rule: '1) At/to someone’s home ("chez Paw-Paw"). 2) At/to someone’s shop ("chez le boulanger" = at the baker’s). 3) Among a people/group ("chez les Texans" = among Texans / in Texan culture).', ruleZh: 'chez 三大场景：① 在某人家（chez Paw-Paw）；② 在某人店里/诊所（chez le boulanger 面包店 / chez le médecin）；③ 在某群体/文化中（chez les Texans）。' }
        ],
        sections: [
          {
            id: 'pre_abc_places',
            heading: '1. Prepositions A–B: Direction, Cause & Positions Around a Room',
            headingZh: '一、A–B 组：方向、原因与空间位置介词（Opelousas 之旅）',
            lead: 'Tex and his friends travel to Opelousas, Louisiana, for Paw-Paw’s birthday. Note "avant" here means "before" in TIME (contrast with "devant" = in front of in space on Page 6.3!).',
            leadZh: '看 Tex 一行去 Opelousas 过生日的故事，记住这些精准短语介词（注意 avant 专指时间上的“在……之前”）：',
            cartoon: {
              src: './assets/tex_cartoons/pre1a_opelousas.gif',
              alt: 'Opelousas se trouve au centre de la Louisiane',
              caption: 'à · à cause de la fête · au centre de · à côté de · à droite / gauche de · au milieu de · autour de',
              captionZh: '中心（au centre de）、旁边（à côté de）、左右（à droite/gauche de）、中间（au milieu de）、周围（autour de）。'
            },
            table: {
              headers: ['Preposition (A–B)', 'Meaning & Usage Note', 'Tex Example'],
              rows: [
                { cols: ['à', 'to, at', 'Tex parle à ses amis au café. Ils vont à Opelousas.'], audio: 'Tex parle à ses amis au café. Ils vont à Opelousas.' },
                { cols: ['à cause de', 'because of (+ noun, NOT clause)', 'Ils vont en Louisiane à cause de la fête.'], audio: 'Ils vont en Louisiane à cause de la fête.' },
                { cols: ['au centre de', 'at the center of', 'Opelousas se trouve au centre de la Louisiane.'], audio: 'Opelousas se trouve au centre de la Louisiane.' },
                { cols: ['à côté de', 'beside / next to', 'Bette veut s’asseoir à côté de Tex.'], audio: 'Bette veut s’asseoir à côté de Tex.' },
                { cols: ['à droite / gauche de', 'to the right / left of', 'Tammy est à droite de Paw-Paw. Tex est à gauche de Paw-Paw.'], audio: 'Tammy est à droite de Paw-Paw. Tex est à gauche de Paw-Paw.' },
                { cols: ['après / avant', 'after / before (TEMPORAL time)', 'Après le dîner, ils dansent. Pas avant cinq heures du matin.'], audio: 'Après le dîner, ils vont danser.' },
                { cols: ['à travers', 'across, through', 'Tammy voit Bette à travers la foule.'], audio: 'Tammy voit Bette à travers la foule.' },
                { cols: ['au milieu de', 'in the middle of', 'Paw-Paw danse au milieu de la salle.'], audio: 'Paw-Paw danse au milieu de la salle.' },
                { cols: ['au sujet de / à propos de', 'on the subject of / about', 'Paw-Paw parle au sujet de la Résistance et à propos de sa vie.'], audio: 'Paw-Paw parle à propos de sa vie.' },
                { cols: ['autour de', 'surrounding, around', 'Les amis sont assis autour de la table.'], audio: 'Les amis sont assis autour de la table.' },
                { cols: ['avec', 'with (avec + noun = -ly adverb)', 'Ils dansent avec joie à l’anniversaire de Paw-Paw.'], audio: 'Ils dansent avec joie.' }
              ]
            }
          },
          {
            id: 'pre_chez_contre',
            heading: '2. "chez" (Home / Shop / Among) & "contre" (Against / Angry At)',
            headingZh: '二、chez（家/店/人群中）与 contre（紧贴着/反对/对…生气）',
            lead: 'Both "chez" and "contre" carry idiomatic meanings you hear daily in French. Notice "chez le boulanger" = at the baker’s, "chez les Texans" = among Texans, and "contre" works physically, politically/legally, and emotionally!',
            leadZh: 'chez 不止表示“在某人家”，去面包店/理发店/看医生都用 chez + 职业；而在表示“在某个群体或文化里”也用 chez！contre 则同时涵盖身体靠着、立场反对以及情绪生气：',
            cartoon: {
              src: './assets/tex_cartoons/pre1a_bigamie.gif',
              alt: 'Tammy est contre la bigamie',
              caption: 'Bette a dansé tout contre Tex. Tammy est contre la bigamie (et en colère contre Bette!).',
              captionZh: '身体紧贴着（tout contre）、生气（en colère contre）、坚决反对（contre la bigamie）。'
            },
            examples: [
              { fr: 'Ils vont acheter des croissants chez le boulanger.', en: 'They are going to buy croissants at the baker’s (shop).', zh: '去面包店（“在面包师那里”）买牛角包。', tag: 'chez = shop' },
              { fr: 'Tout le monde a adoré le séjour chez Paw-Paw.', en: 'Everyone loved the stay at Paw-Paw’s (home).', zh: '在 Paw-Paw 家里住。', tag: 'chez = home' },
              { fr: 'Tex se sent vraiment à l’aise chez les Texans.', en: 'Tex really feels at ease among Texans (in Texas culture).', zh: '在德州人中间 / 德州文化中感觉很自在。', tag: 'chez = among' },
              { fr: 'Bette a dansé tout contre Tex. · Tammy est en colère contre Bette.', en: 'Bette danced right against Tex. · Tammy is mad at Bette.', zh: '贴紧跳舞（tout contre）；生某人的气（en colère contre）。', tag: 'contre idioms' }
            ]
          },
          {
            id: 'pre_pawpaw_scene',
            heading: '3. Birthday Scene in Opelousas (au milieu de · avec joie)',
            headingZh: '三、生日舞会场景：au milieu de 与 avec joie',
            lead: 'Watch Paw-Paw dance in the middle of the hall while Tex talks about his long life ("au sujet de / à propos de"):',
            leadZh: '看 Paw-Paw 在大厅中央欢快跳舞，一次锁定 au milieu de 与 avec joie：',
            cartoon: {
              src: './assets/tex_cartoons/pre1a_pawpawdanse.gif',
              alt: 'Paw-Paw danse au milieu de la salle',
              caption: 'Paw-Paw danse au milieu de la salle. Ils dansent avec joie à l’anniversaire de Paw-Paw.',
              captionZh: 'Paw-Paw 在大厅中央跳舞；朋友们欢乐地共舞。'
            },
            examples: [
              { fr: 'Paw-Paw danse au milieu de la salle.', en: 'Paw-Paw is dancing in the middle of the room.', zh: 'Paw-Paw 在大厅中央跳舞。', tag: 'au milieu de' },
              { fr: 'Ils dansent avec joie à l’anniversaire de Paw-Paw.', en: 'They are dancing joyfully at Paw-Paw’s birthday.', zh: '他们在 Paw-Paw 的生日派对上欢快起舞。', tag: 'avec joie' }
            ]
          }
        ],
        drills: [
          {
            id: 'd62_d1',
            kind: 'choice',
            prompt: 'Complete: "___ la pluie, le pique-nique est annulé." (+ noun!)',
            promptZh: '后面接的是名词 "la pluie"，该用“因为”哪一个？',
            options: ['À cause de (À cause de la pluie...)', 'Parce que', 'Au milieu de', 'Chez'],
            answerIdx: 0,
            audio: 'À cause de la pluie, le pique-nique est annulé.',
            explain: '"à cause de" precedes a noun ("la pluie"); "parce que" precedes a full verb clause.',
            explainZh: '后接名词/代词必须用介词短语 À cause de；parce que 必须接句子！'
          },
          {
            id: 'd62_d2',
            kind: 'choice',
            prompt: 'Which sentence correctly means "at the baker’s (shop)"?',
            promptZh: '“去面包店买羊角包”地道法语怎么说？',
            options: [
              'Ils achètent des croissants chez le boulanger.',
              'Ils achètent des croissants au boulanger.',
              'Ils achètent des croissants dans le boulanger.',
              'Ils achètent des croissants contre le boulanger.'
            ],
            answerIdx: 0,
            audio: 'Ils achètent des croissants chez le boulanger.',
            explain: 'For people’s professions/shops (boulanger, médecin, coiffeur), ALWAYS use "chez"!',
            explainZh: '去某人职业店铺或诊所（面包师、医生、理发师）固定用 **chez le ...**！'
          },
          {
            id: 'd62_d3',
            kind: 'choice',
            prompt: 'What does "avec joie" mean in "Ils dansent avec joie"?',
            promptZh: '介词短语 "avec joie" 在句子里的意思相当于英语副词：',
            options: ['joyfully (with joy)', 'without joy', 'after joy', 'against joy'],
            answerIdx: 0,
            audio: 'Ils dansent avec joie.',
            explain: '"avec + abstract noun" commonly replaces a "-ly" adverb ("joyfully").',
            explainZh: 'avec + 抽象名词（joie 喜悦、patience 耐心）= 副词“欢乐地 / 耐心地”。'
          },
          {
            id: 'd62_d4',
            kind: 'choice',
            prompt: 'What does "chez les Texans" mean in "Chez nous les Texans, on adore la sauce piquante"?',
            promptZh: '句首 "Chez nous les Texans" 里的 chez 表示：',
            options: ['among us Texans (in our community/culture)', 'inside Texas buildings', 'against Texans', 'across Texans'],
            answerIdx: 0,
            audio: 'Chez nous les Texans, on adore la sauce piquante.',
            explain: '"chez + group/nationality" means "among / in the customs of".',
            explainZh: 'chez + 民族或人群（chez les Français / chez les Texans）= 在……人群/文化当中。'
          },
          {
            id: 'd62_d5',
            kind: 'fib',
            prompt: 'Beside / next to: Bette veut s’asseoir à ___ de Tex.',
            promptZh: '方位短语填空：Bette 想坐在 Tex “旁边”（à ___ de）。',
            answers: ['côté', 'cote'],
            hint: 'beside = à côté de.',
            audio: 'Bette veut s’asseoir à côté de Tex.',
            explain: '"à côté de" = beside / next to.',
            explainZh: '固定短语：à côté de（在……旁边）。'
          },
          {
            id: 'd62_d6',
            kind: 'fib',
            prompt: 'In the middle of: Paw-Paw danse au ___ de la salle.',
            promptZh: '方位短语填空：Paw-Paw 在大厅“中央”（au ___ de）跳舞。',
            answers: ['milieu'],
            hint: 'middle = milieu.',
            audio: 'Paw-Paw danse au milieu de la salle.',
            explain: '"au milieu de" = in the middle of.',
            explainZh: '固定短语：au milieu de（在……中央）。'
          },
          {
            id: 'd62_d7',
            kind: 'fib',
            prompt: 'Around: Les amis sont assis ___ de la table.',
            promptZh: '方位短语填空：朋友们围坐在桌子“周围”。',
            answers: ['autour'],
            hint: 'around = autour de.',
            audio: 'Les amis sont assis autour de la table.',
            explain: '"autour de" = around / surrounding.',
            explainZh: '固定短语：autour de（围着 / 在……周围）。'
          },
          {
            id: 'd62_d8',
            kind: 'fib',
            prompt: 'Through (the crowd): Tammy voit Bette à ___ la foule.',
            promptZh: '介词填空：Tammy 透过/穿过人群看到了 Bette。',
            answers: ['travers'],
            hint: 'through = à travers.',
            audio: 'Tammy voit Bette à travers la foule.',
            explain: '"à travers" = across / through (note NO "de" after à travers!).',
            explainZh: '注意 à travers 后面直接接名词，不加 de！'
          },
          {
            id: 'd62_d9',
            kind: 'fib',
            prompt: 'To the left of: Tex est à ___ de Paw-Paw.',
            promptZh: '方位填空：Tex 在 Paw-Paw 的“左边”。',
            answers: ['gauche'],
            hint: 'left = gauche.',
            audio: 'Tex est à gauche de Paw-Paw.',
            explain: '"à gauche de" = to the left of ("à droite de" = to the right of).',
            explainZh: '左 à gauche de / 右 à droite de。'
          },
          {
            id: 'd62_d10',
            kind: 'fib',
            prompt: 'About / on the subject of: Paw-Paw parle à ___ de sa longue vie.',
            promptZh: '“关于……”短语填空：à ___ de（= au sujet de）。',
            answers: ['propos'],
            hint: 'about = à propos de.',
            audio: 'Paw-Paw parle à propos de sa longue vie.',
            explain: '"à propos de" = about / regarding (synonym of "au sujet de").',
            explainZh: 'à propos de = au sujet de（关于……）。'
          },
          {
            id: 'd62_d11',
            kind: 'fib',
            prompt: 'Temporal before: Ils ne vont pas se coucher ___ cinq heures du matin.',
            promptZh: '时间“在……之前”填空（非空间 davanti）：',
            answers: ['avant'],
            hint: 'before in TIME = avant.',
            audio: 'Ils ne vont pas se coucher avant cinq heures du matin.',
            explain: '"avant" = before (in time).',
            explainZh: '时间上“在……以前”固定用 avant。'
          },
          {
            id: 'd62_d12',
            kind: 'fib',
            prompt: 'Mad at / against: Tammy est en colère ___ Bette et elle est ___ la bigamie ! (same word!)',
            promptZh: '双空同一词填空（用 / 分隔）：对某人发火 & 反对（一夫多妻）：',
            answers: ['contre / contre'],
            hint: 'against = contre (both blanks take "contre").',
            audio: 'Tammy est en colère contre Bette et elle est contre la bigamie.',
            explain: '"contre" means against (both physically/ideologically and in "en colère contre").',
            explainZh: '“生某人气 / 反对某事”两空都用 contre！'
          }
        ],
        related: [
          { chapterId: 'ch6_prepositions', pageId: 'pre_6_3', label: '7.3 Common Prepositions D–F' }
        ]
      },

      /* =========================================================
         PAGE 6.3: COMMON PREPOSITIONS D–F (DANS VS EN, DEVANT VS AVANT, ENTRE VS PARMI, ENVERS VS VERS)
      ========================================================= */
      {
        id: 'pre_6_3',
        code: '7.3',
        group: 'Common Prepositions D–F',
        shortTitle: 'dans vs. en, devant vs. avant, entre',
        title: 'Common Prepositions (D–F): dans vs. en, devant vs. avant, entre vs. parmi & envers',
        titleZh: '常用介词（D–F 组）：三大高频辨析（dans vs en / devant vs avant / entre vs parmi / envers vs vers）',
        estMin: 5,
        summary: 'Stop mixing up French twins! Contrast dans (+ article, "in 1 hour" countdown) vs. en (no article, vehicles, seasons), devant (spatial in front) vs. avant (temporal before), entre (between 2) vs. parmi (among 3+), and envers (attitude toward) vs. vers (physical/clock direction), plus 3 Tex cartoons.',
        summaryZh: '这一页专治 D–F 组四大最易混对：① **dans（后必须有限定词；用于“过多久之后”）vs en（直接裸接名词、交通工具、月份季节）**；② **devant（空间在…前面）vs avant（时间在…之前）**；③ **entre（两者之间）vs parmi（三者及以上之中）**；④ **envers（抽象态度“对某人”）vs vers（物理方向或“大约几点”）**。',
        cheatSummary: [
          { label: 'dans vs. en ("in")', rule: 'DANS always takes a determiner ("dans la cuisine", "dans un bar", "dans une heure" = 1 hour from now). EN skips the determiner directly ("en France", "en voiture", "en vélo", "en automne", "en août", "en gentleman").', ruleZh: 'dans 后面必须带冠词/限定词（dans la cuisine；时间上表“过…之后” dans une heure）；en 后面直接裸接名词，不加冠词（en France, en voiture, en août, en automne）。' },
          { label: 'Spatial/Relational Pairs', rule: 'devant = in front of (SPACE) vs. avant = before (TIME). entre = between (2) vs. parmi = among (3+). envers = figurative attitude toward ("antipathie envers Bette") vs. vers = physical/temporal toward ("vers midi", "vers Austin").', ruleZh: '三大高频辨析：devant（地点前方）vs avant（时间之前）；entre（2个之间）vs parmi（3个以上之中）；envers（心理情感上对某人）vs vers（物理朝向/约几点）。' }
        ],
        sections: [
          {
            id: 'pre_def_core',
            heading: '1. Core D–F Prepositions (d’après, derrière, devant, de l’autre côté de)',
            headingZh: '一、D–F 组基础空间与来源介词（Austin 约会故事）',
            lead: 'Follow Tex and Tammy in Austin along with Édouard’s culinary opinion to lock in "d’après", "de l’autre côté de", "derrière", and spatial "devant".',
            leadZh: '结合 Édouard 的美食吐槽和 Austin 约会场景，记住 d’après（据……说）、de l’autre côté de（在……对岸/另一边）、derrière（在……后面）和 devant（在……前面）：',
            cartoon: {
              src: './assets/tex_cartoons/pre1a_mangent.gif',
              alt: 'D’après Édouard, les Américains mangent très mal',
              caption: 'D’après Édouard... (according to) · dans la cuisine · devant le Capitole · derrière les collines.',
              captionZh: '根据某人的说法：d’après（第 6.4 课也会学到同义词 selon）。'
            },
            table: {
              headers: ['Preposition (D–F)', 'Meaning & Usage', 'Tex Example'],
              rows: [
                { cols: ['dans', 'in (+ determiner! / future time "in 1h")', 'Tammy est dans la cuisine. Tex arrive dans une heure.'], audio: 'Tammy est dans la cuisine. Tex arrive dans une heure.' },
                { cols: ['d’après', 'according to', 'D’après Édouard, les Américains mangent très mal.'], audio: 'D’après Édouard, les Américains mangent très mal.' },
                { cols: ['de l’autre côté de', 'on the other side of', 'Ils regardent les gratte-ciel de l’autre côté du fleuve.'], audio: 'De l’autre côté du fleuve.' },
                { cols: ['derrière', 'behind (space)', 'Le soleil se couche derrière les collines.'], audio: 'Le soleil se couche derrière les collines.' },
                { cols: ['devant', 'in front of (SPACE — vs. avant time)', 'Ils s’embrassent passionnément devant le Capitole.'], audio: 'Ils s’embrassent devant le Capitole.' },
                { cols: ['en', 'in / by (NO determiner! places, vehicles, months)', 'en France · en voiture · en vélo · en automne · en août · en gentleman'], audio: 'Tex roule en voiture. Trey vient en vélo. En automne, en août.' }
              ]
            }
          },
          {
            id: 'pre_en_phrases',
            heading: '2. "en..." Compound Prepositions + "entre" vs. "envers"',
            headingZh: '二、en 开头的常用组合介词 + entre（两者之间）与 envers（态度朝向）',
            lead: 'Notice the sharp opposition between "en haut de" (top of) vs. "en bas de" (bottom/end of), plus "entre" (strictly 2 items/people!) and "envers" (attitude toward someone).',
            leadZh: '一组超实用的 en 开头短语，外加 entre（两者之间）与 envers（情感态度“针对/对待某人”）：',
            cartoon: {
              src: './assets/tex_cartoons/pre1a_depit.gif',
              alt: 'En dépit de l’alcool, Tex se conduit en gentleman',
              caption: 'En dépit de l’alcool (in spite of) · en face de · en haut de · entre Tammy et Tex · antipathie envers Bette.',
              captionZh: '注意 en dépit de = malgré（尽管）；en face de（在……对面）；entre 只能用于“两个”之间。'
            },
            table: {
              headers: ['Expression', 'Meaning', 'Tex Example'],
              rows: [
                { cols: ['en bas de / en haut de', 'at the bottom (end) of / at the top of', 'en bas de la cinquième rue · Bette apparaît en haut de l’escalier.'], audio: 'En haut de l’escalier. En bas de la rue.' },
                { cols: ['en dehors de', 'outside of, excluding', 'En dehors de Tammy, Tex ne connaît pas beaucoup de Texans.'], audio: 'En dehors de Tammy.' },
                { cols: ['en dépit de', 'in spite of (same as malgré)', 'En dépit de l’alcool, Tex se conduit en gentleman.'], audio: 'En dépit de l’alcool, Tex se conduit en gentleman.' },
                { cols: ['en face de', 'across from, facing', 'Tex est assis en face de Tammy.'], audio: 'Tex est assis en face de Tammy.' },
                { cols: ['entre', 'between (2 people/things)', 'Elle vient s’asseoir entre Tammy et Tex.'], audio: 'Entre Tammy et Tex.' },
                { cols: ['envers', 'toward (figurative attitude/feeling)', 'Tammy ressent une certaine antipathie envers Bette.'], audio: 'Tammy ressent une certaine antipathie envers Bette.' }
              ]
            }
          },
          {
            id: 'pre_tnt_scene',
            heading: '3. Watch the Geometry: en face de · en haut de · entre · envers',
            headingZh: '三、看图牢记：对面、楼梯顶与“两人之间”的三角关系',
            lead: 'Remember "entre" (between Tammy and Tex — strictly TWO!) and "envers" (Bette/Tammy feelings toward each other):',
            leadZh: '这张经典的 Bette 乱入图让你永远忘不了 en face de、entre 和 envers：',
            cartoon: {
              src: './assets/tex_cartoons/pre1a_tnt.gif',
              alt: 'Bette vient s’asseoir entre Tammy et Tex',
              caption: 'Tex en face de Tammy · Bette entre Tammy et Tex · antipathie envers Bette!',
              captionZh: '对面（en face de）、两人中间（entre）、心怀敌意（antipathie envers）。'
            },
            examples: [
              { fr: 'Elle vient s’asseoir entre Tammy et Tex.', en: 'She comes and sits down between Tammy and Tex.', zh: '她偏偏走过来坐到 Tammy 和 Tex 中间。', tag: 'entre (2)' },
              { fr: 'Tammy ressent une certaine antipathie envers Bette.', en: 'Tammy feels a certain animosity toward Bette.', zh: 'Tammy 对 Bette 心怀强烈的反感。', tag: 'envers' }
            ]
          }
        ],
        drills: [
          {
            id: 'd63_d1',
            kind: 'choice',
            prompt: 'Fill in "dans" vs. "en": "Trey arrive à l’université ___ vélo." (bare noun, transport!)',
            promptZh: '选择 "dans" 或 "en"：Trey 骑自行车（不带冠词）来学校。',
            options: ['en (en vélo)', 'dans (dans vélo)', 'devant', 'à travers'],
            answerIdx: 0,
            audio: 'Trey vient en vélo.',
            explain: 'No determiner → "en" (transport, countries like en France, seasons like en automne, months like en août). ("en/à vélo" — Tex uses "en vélo").',
            explainZh: '交通工具前无冠词，用 en（en voiture, en vélo, en bus）。'
          },
          {
            id: 'd63_d2',
            kind: 'choice',
            prompt: 'Fill in "dans" vs. "en": "Tammy prépare le dîner ___ la cuisine." (has determiner "la"!)',
            promptZh: '选择 "dans" 或 "en"：在“厨房”里面（后面有定冠词 la）。',
            options: ['dans (dans la cuisine)', 'en (en la cuisine)', 'chez', 'par'],
            answerIdx: 0,
            audio: 'Tammy est dans la cuisine.',
            explain: 'Because "la cuisine" has a determiner ("la"), you MUST use "dans", never "en"!',
            explainZh: '只要名词前带有冠词或限定词（la, un, mon），表示“在里面”必须用 dans！'
          },
          {
            id: 'd63_d3',
            kind: 'choice',
            prompt: 'Spatial vs. Temporal: "Les amoureux s’embrassent ___ le Capitole." ("in front of" the building)',
            promptZh: '选出空间“在国会大厦前面”：',
            options: ['devant (spatial)', 'avant (temporal)', 'd’après', 'envers'],
            answerIdx: 0,
            audio: 'Ils s’embrassent devant le Capitole.',
            explain: '"devant" = in front of (physical location). "avant" = before (time!).',
            explainZh: '地点在……前面用 **devant**；时间在……以前用 **avant**！'
          },
          {
            id: 'd63_d4',
            kind: 'choice',
            prompt: 'Attitude vs. Physical direction: "Tammy est très gentille ___ ses amis." ("toward" people — attitude)',
            promptZh: '表示对人的态度/情感“友好对待 / 心怀敌意”时，“对/朝向某人”必须用：',
            options: ['envers (figurative attitude)', 'vers (spatial/time only)', 'entre', 'devant'],
            answerIdx: 0,
            audio: 'Tammy est très gentille envers ses amis.',
            explain: 'Figurative/emotional attitude toward someone takes "envers" (e.g., antipathie envers, gentil envers). Physical/time direction takes "vers".',
            explainZh: '心理态度/情感针对某人必须用 **envers**；物理走向某地或“大概几点”才用 **vers**！'
          },
          {
            id: 'd63_d5',
            kind: 'choice',
            prompt: '2 items vs. 3+ items: "Bette s’assoit ___ Tammy et Tex."',
            promptZh: '在“两个人（Tammy 和 Tex）之间”坐下，用哪个词？',
            options: ['entre (2 people/things)', 'parmi (3+ people/things)', 'autour de', 'en face de'],
            answerIdx: 0,
            audio: 'Bette vient s’asseoir entre Tammy et Tex.',
            explain: 'Strictly TWO items/people → "entre" ("entre Tammy et Tex"). Three or more → "parmi".',
            explainZh: '两者之间固定用 **entre**；三者以上或人群之中才用 **parmi**！'
          },
          {
            id: 'd63_d6',
            kind: 'fib',
            prompt: 'According to: ___ Édouard, les Américains mangent très mal.',
            promptZh: '填空：“根据” Édouard 的看法（D’___）：',
            answers: ["D'après", 'D’après', "D'apres", 'D’apres', "d'après", 'd’après'],
            hint: 'According to = D’après.',
            audio: 'D’après Édouard, les Américains mangent très mal.',
            explain: '"D’après" = According to.',
            explainZh: '表示“据某人所说/依据”：D’après。'
          },
          {
            id: 'd63_d7',
            kind: 'fib',
            prompt: 'Behind (space): Le soleil se couche ___ les collines.',
            promptZh: '空间方位填空：太阳落山到山丘“后面”。',
            answers: ['derrière', 'derriere'],
            hint: 'behind = derrière.',
            audio: 'Le soleil se couche derrière les collines.',
            explain: '"derrière" = behind (opposite of "devant").',
            explainZh: '在……后面：derrière（反义词是 devant）。'
          },
          {
            id: 'd63_d8',
            kind: 'fib',
            prompt: 'Across from / facing: Tex est assis en ___ de Tammy.',
            promptZh: '方位短语填空：Tex 坐在 Tammy “对面”（en ___ de）。',
            answers: ['face'],
            hint: 'across from = en face de.',
            audio: 'Tex est assis en face de Tammy.',
            explain: '"en face de" = across from / facing.',
            explainZh: '在……对面：en face de。'
          },
          {
            id: 'd63_d9',
            kind: 'fib',
            prompt: 'At the top of: Bette apparaît en ___ de l’escalier.',
            promptZh: '方位短语填空：Bette 出现在楼梯“顶端”（en ___ de）。',
            answers: ['haut'],
            hint: 'top = haut (opposite of "en bas de").',
            audio: 'Bette apparaît en haut de l’escalier.',
            explain: '"en haut de" = at the top of; "en bas de" = at the bottom/end of.',
            explainZh: '上方顶端 en haut de / 下方底端 en bas de。'
          },
          {
            id: 'd63_d10',
            kind: 'fib',
            prompt: 'On the other side of: Ils regardent les gratte-ciel de l’autre ___ du fleuve.',
            promptZh: '短语填空：在河的“另一边 / 对岸”（de l’autre ___ du）。',
            answers: ['côté', 'cote'],
            hint: 'side = côté.',
            audio: 'De l’autre côté du fleuve.',
            explain: '"de l’autre côté de" = on the other side of.',
            explainZh: '在……的另一边：de l’autre côté de。'
          },
          {
            id: 'd63_d11',
            kind: 'fib',
            prompt: 'Future time countdown ("in one hour"): Tex arrive ___ une heure.',
            promptZh: '时间填空：Tex “一小时后”到（注意：表将来多久之后，不看有没有定冠词也要用它！）。',
            answers: ['dans'],
            hint: 'in X time (countdown from now) = dans.',
            audio: 'Tex arrive dans une heure.',
            explain: 'For future duration from now ("in an hour"), ALWAYS use "dans une heure" (while "en une heure" means how fast it takes to finish!).',
            explainZh: '时间区分考点：“一小时后才到达”用 **dans une heure**（而 en une heure 意思是“用一小时做完某事”）。'
          },
          {
            id: 'd63_d12',
            kind: 'fib',
            prompt: 'In spite of / excluding: En ___ de l’alcool, il est gentil. / En ___ de Tammy, il ne connaît personne.',
            promptZh: '双空填空（用 / 分隔）：第一空“尽管”（en ___ de = malgré）；第二空“除…之外”（en ___ de）：',
            answers: ['dépit / dehors', 'depit / dehors'],
            hint: '1st: en dépit de = in spite of · 2nd: en dehors de = outside/excluding.',
            audio: 'En dépit de l’alcool, Tex se conduit en gentleman. En dehors de Tammy, Tex ne connaît pas beaucoup de Texans.',
            explain: '"en dépit de" = in spite of (synonym of "malgré"); "en dehors de" = excluding/outside of.',
            explainZh: '第一空“尽管” = en dépit de；第二空“除了…之外” = en dehors de。'
          }
        ],
        related: [
          { chapterId: 'ch6_prepositions', pageId: 'pre_6_4', label: '7.4 Common Prepositions G–V & Tex Exercise' }
        ]
      },

      /* =========================================================
         PAGE 6.4: COMMON PREPOSITIONS G–V + TEX PRE1A 12 DRILLS
      ========================================================= */
      {
        id: 'pre_6_4',
        code: '7.4',
        group: 'Common Prepositions G–V',
        shortTitle: 'Prepositions G–V (grâce à, malgré, sans...)',
        title: 'Common Prepositions (G–V): grâce à, malgré, par, parmi, sans, sous, sur, vers & Tex Practice',
        titleZh: '常用介词（G–V 组）：grâce à vs à cause de、malgré、parmi、sans、sous/sur 与全套 Tex 12 题',
        estMin: 5,
        summary: 'Complete the A–V preposition bank with Tex’s Louisiana & restaurant stories: grâce à ("thanks to" + positive) vs. à cause de ("because of" + negative/neutral), hors de question, malgré (NEVER "malgré de"!), parmi (3+), sans + noun = "-less/un-", selon, sous la pluie, and complete all 12 Tex pre1a drills!',
        summaryZh: '收官全部常用介词 G–V 组：**grâce à**（多亏了——正面原因，对比 **à cause de** 负面原因）、**malgré**（尽管——后面绝不加 de！）、**parmi**（三者以上之中）、**par**（乘被动/经过/每）、**sans**（常译作 -less 无……）、**selon**（据……）、**sous la pluie**（在雨中）、**vers**（朝向/大约几点）。内含 Tex `pre1a` 全部 12 题。',
        cheatSummary: [
          { label: 'grâce à vs. à cause de & NO "malgré de"!', rule: 'grâce à = thanks to (POSITIVE credit: "grâce à l’album"). à cause de = because of (negative/neutral: "à cause du trafic"). malgré = in spite of (NEVER write *malgré de*!).', ruleZh: '高频辨析：① 好结果“多亏了”用 **grâce à**，坏结果“都怪/由于”用 **à cause de**；② **malgré** 后面直接加名词，**绝对不能加 de**（常见错误 *malgré de*）！' },
          { label: 'par / parmi / sans / sous / vers', rule: 'par = by/through/once per ("une fois par mois", "passe par Houston"). parmi = among 3+. sans = without ("sans effort" = effortless). sous = under / "in" rain ("sous la pluie"). vers = toward(s) in space OR "around" in time ("vers midi").', ruleZh: 'par：每（par mois）/ 经过（par Houston）/ 被动；parmi：三者以上；sans：无（常当英语 -less）；sous la pluie：在雨中；vers：空间朝向某地或时间“大约”两点（vers midi）。' }
        ],
        sections: [
          {
            id: 'pre_gv_bank',
            heading: '1. Prepositions G–V: Thanks, Distance, Despite, Among & Idioms',
            headingZh: '一、G–V 组高频介词与惯用表达（含 3 张路易斯安那漫画）',
            lead: 'Study Tex’s final two alphabetical groups (g–l and m–v), noting especially "grâce à" (positive thanks to), "malgré" (followed directly by a noun, NO "de"!), and "selon" (same meaning as d’après).',
            leadZh: '记住这两组极高频词，尤其是 sans + 名词的构词魅力和 vers 的时空双义：',
            cartoon: {
              src: './assets/tex_cartoons/pre1a_loin.gif',
              alt: 'Tex habite loin de son grand-père Paw-Paw Louis',
              caption: 'grâce à · hors de · jusqu’à · loin de · près de · malgré la distance.',
              captionZh: '距离远近：loin de（离…远）/ près de（离…近）/ jusqu’à（一直到）；感谢：grâce à；尽管：malgré。'
            },
            table: {
              headers: ['Preposition (G–V)', 'Meaning & Usage Note', 'Tex Example'],
              rows: [
                { cols: ['grâce à', 'thanks to (positive result)', 'Tex a découvert son grand-père grâce à l’album de photos de Rita.'], audio: 'Grâce à l’album de photos de Rita.' },
                { cols: ['hors de', 'outside of / out of (idiom)', 'Il est hors de question que Tex vive à Opelousas.'], audio: 'Il est hors de question.' },
                { cols: ['jusqu’à', 'until / as far as (+ noun)', 'Tex et Tammy vont jusqu’à Opelousas.'], audio: 'Ils vont jusqu’à Opelousas.' },
                { cols: ['loin de / près de', 'far from / near to', 'loin de Paw-Paw · Opelousas est près de Baton Rouge.'], audio: 'Opelousas est près de Baton Rouge.' },
                { cols: ['malgré', 'in spite of / despite (NO de!)', 'Malgré la distance, Tex aime aller voir son grand-père.'], audio: 'Malgré la distance.' },
                { cols: ['par', 'by (passive), through, per', 'une fois par mois · invité par Paw-Paw · passe par Houston'], audio: 'Une fois par mois. Il passe par Houston.' },
                { cols: ['parmi', 'among (3+ people/things)', 'Tex compte beaucoup de Cajuns parmi ses cousins.'], audio: 'Parmi ses cousins.' },
                { cols: ['pendant / pour', 'during (for) / for (in favor of)', 'Pendant son séjour · Paw-Paw est pour la défense du cajun.'], audio: 'Pendant son séjour, pour la défense du cajun.' },
                { cols: ['quant à', 'as for', 'Quant à Tex, il est heureux de parler français.'], audio: 'Quant à Tex, il est heureux.' },
                { cols: ['sans / sauf', 'without (-less) / except', 'Sans doute · sans effort · Toute sa famille, sauf oncle Elmer.'], audio: 'Sans doute. Toute sa famille sauf oncle Elmer.' },
                { cols: ['selon', 'according to', 'Selon Paw-Paw, Tex a un drôle d’accent français.'], audio: 'Selon Paw-Paw.' },
                { cols: ['sous / sur', 'under ("in" rain/sun) / on, out of', 'sous un pont · sous la pluie · un sur deux · directement sur la table'], audio: 'Un alligator sous un pont. Sous la pluie.' },
                { cols: ['vers', 'toward(s) (space) / around (time)', 'Vers midi, Tex et Tammy repartent vers Austin.'], audio: 'Vers midi, ils repartent vers Austin.' }
              ]
            }
          },
          {
            id: 'pre_restaurant_story',
            heading: '2. Story: Double Date Drama at the Restaurant (Space Prepositions Review)',
            headingZh: '二、情景故事复习：餐厅撞车约会（空间介词串联）',
            lead: 'Read how Bette and Tammy accidentally both arrange a date with Tex—every highlighted preposition sets up the geometry of the scene!',
            leadZh: '读完这段 Bette 和 Tammy 不约而同同时约 Tex 的修罗场短文，瞬间复习完 7 个核心空间介词：',
            cartoon: {
              src: './assets/tex_cartoons/pre1a_sansdoute.gif',
              alt: 'Sans doute, le français se parle dans sa famille',
              caption: 'dans un restaurant · sans le savoir · autour de la salle · vers lui · à droite / gauche de · malgré le drame.',
              captionZh: '结合具体动作记忆：dans（进入…里）、sans（不知情地）、autour de（环顾四周）、vers（走向他）、à droite/gauche de（坐左右两侧）、malgré（尽管）。'
            },
            examples: [
              { fr: 'Bette et Tammy entrent dans un restaurant ensemble. Elles ont toutes les deux pris rendez-vous avec Tex sans le savoir !', en: 'Bette and Tammy enter a restaurant together. Unknowingly, they both have a date with Tex.', zh: 'Bette 和 Tammy 一起走进一家餐厅。她们俩居然都在不知情的情况下约了 Tex！', tag: 'dans · sans' },
              { fr: 'Elles regardent autour de la salle... Elles se précipitent vers lui... Tammy s’assied à droite de Tex et Bette à gauche de lui. Tex s’amuse malgré le drame entre Bette et Tammy.', en: 'They look around the room... rush toward him... Tammy sits to Tex’s right and Bette to his left. Tex has fun despite the drama between Bette and Tammy.', zh: '她们环顾大厅、朝他冲过去，分别坐到他左边和右边；尽管她们俩之间剑拔弩张，Tex 却看热闹看得很开心！', tag: 'autour · vers · malgré · entre' }
            ]
          },
          {
            id: 'pre_alligator_scene',
            heading: '3. On the Road: sous un pont · sur la table · vers Austin',
            headingZh: '三、桥下与餐桌上的小龙虾：sous · sur · vers',
            lead: 'Remember "sous" (under a bridge / sous la pluie = in the rain), "sur" (on the table / un sur deux = one out of two), and "vers" (both physical direction and clock time "vers midi"):',
            leadZh: '从路上的桥下鳄鱼到餐桌上的小龙虾，牢记 sous、sur 与 vers 的常见习惯用法：',
            cartoon: {
              src: './assets/tex_cartoons/pre1a_alligator.gif',
              alt: 'Un alligator sous un pont',
              caption: 'En route pour Opelousas, Tex et Tammy ont vu un alligator sous un pont.',
              captionZh: '在去 Opelousas 的路上，Tex 和 Tammy 在桥下看到一条鳄鱼（sous un pont）。'
            },
            examples: [
              { fr: 'En route pour Opelousas, Tex et Tammy ont vu un alligator sous un pont.', en: 'On the way to Opelousas, Tex and Tammy saw an alligator under a bridge.', zh: '在去 Opelousas 途中，他们在桥下看到一条短吻鳄。', tag: 'pour · sous' },
              { fr: 'En Louisiane, on sert souvent des écrevisses directement sur la table, sans assiette.', en: 'In Louisiana, crawfish are often served right on the table, with no plate.', zh: '在路易斯安那州，小龙虾常直接端在桌上，不配盘子（sans assiette）。', tag: 'sur · sans' }
            ]
          }
        ],
        drills: [
          {
            id: 'd64_d1',
            kind: 'fib',
            prompt: 'Tex Practice 1/12 (pre1a #1): Tex et Tammy vont ___ Opelousas pour rendre visite à Paw-Paw. (à / de / pour)',
            promptZh: 'Tex 第 1 题：前往某座城市 Opelousas 用哪个介词？（à / de / pour）',
            answers: ['à', 'a'],
            hint: 'Going TO a city = à.',
            audio: 'Tex et Tammy vont à Opelousas.',
            explain: 'Cities always take "à" for to/in: "à Opelousas".',
            explainZh: '“去某城市”用 à（下两课会专讲地点介词）。'
          },
          {
            id: 'd64_d2',
            kind: 'fib',
            prompt: 'Tex Practice 2/12 (pre1a #2): Opelousas se trouve ___ la Louisiane. (à droite de / au centre de / devant)',
            promptZh: 'Tex 第 2 题：Opelousas 位于路易斯安那州的“中心”。',
            answers: ['au centre de'],
            hint: 'at the center of = au centre de.',
            audio: 'Opelousas se trouve au centre de la Louisiane.',
            explain: '"au centre de" = at the center of.',
            explainZh: '处于……中央：au centre de。'
          },
          {
            id: 'd64_d3',
            kind: 'fib',
            prompt: 'Tex Practice 3/12 (pre1a #3): Bette adore danser ___ Tex. (à / avec / par)',
            promptZh: 'Tex 第 3 题：Bette 超喜欢“和” Tex 一起跳舞。',
            answers: ['avec'],
            hint: 'with = avec.',
            audio: 'Bette adore danser avec Tex.',
            explain: '"danser avec quelqu’un" = to dance with someone.',
            explainZh: '“和某人一起”用 avec。'
          },
          {
            id: 'd64_d4',
            kind: 'fib',
            prompt: 'Tex Practice 4/12 (pre1a #4): ___ Paw-Paw, le français est la plus belle langue du monde. (sauf / selon / vers)',
            promptZh: 'Tex 第 4 题：“根据” Paw-Paw 的说法，法语是世界上最美的语言（句首大写）。',
            answers: ['Selon', 'selon'],
            hint: 'according to = Selon.',
            audio: 'Selon Paw-Paw, le français est la plus belle langue du monde.',
            explain: '"Selon Paw-Paw" = According to Paw-Paw.',
            explainZh: '表示“据某人观点”：Selon。'
          },
          {
            id: 'd64_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 (pre1a #5): Tammy se fâche ___ Tex, quand il offre des fleurs à Bette. (à / de / contre)',
            promptZh: 'Tex 第 5 题：看到他送花给 Bette，Tammy “对” Tex 发火了。',
            answers: ['contre'],
            hint: 'angry with / mad at = se fâcher contre.',
            audio: 'Tammy se fâche contre Tex.',
            explain: '"se fâcher contre quelqu’un" = to get angry with someone.',
            explainZh: 'se fâcher contre = 生某人的气。'
          },
          {
            id: 'd64_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 (pre1a #6): Opelousas se trouve ___ Baton Rouge. (dans / derrière / près de)',
            promptZh: 'Tex 第 6 题：Opelousas 就在 Baton Rouge “附近”。',
            answers: ['près de', 'pres de'],
            hint: 'near to = près de.',
            audio: 'Opelousas se trouve près de Baton Rouge.',
            explain: '"près de" = near to.',
            explainZh: '靠近/在……附近：près de。'
          },
          {
            id: 'd64_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 (pre1a #7): Édouard prend toujours un café ___ son dîner. (après / dans / devant)',
            promptZh: 'Tex 第 7 题：Édouard 总是晚饭“之后”喝一杯咖啡。',
            answers: ['après', 'apres'],
            hint: 'after = après.',
            audio: 'Édouard prend toujours un café après son dîner.',
            explain: '"après" = after (temporal).',
            explainZh: '“在……之后”填 après。'
          },
          {
            id: 'd64_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 (pre1a #8): Paw-Paw parle souvent ___ ses aventures. (à / de / avec)',
            promptZh: 'Tex 第 8 题：Paw-Paw 经常“谈论起”（谈论关于某事）他的冒险经历（parler + ？）。',
            answers: ['de'],
            hint: 'parler DE = to talk about!',
            audio: 'Paw-Paw parle souvent de ses aventures.',
            explain: '"parler de quelque chose" = to talk about something (whereas "parler à quelqu’un" = talk TO a person!).',
            explainZh: '区别记忆：parler à + 人（跟谁说）；parler de + 事（谈论关于什么）。'
          },
          {
            id: 'd64_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 (pre1a #9): Édouard est serveur. Il travaille ___ un restaurant français. (dans / en / sur)',
            promptZh: 'Tex 第 9 题：他在一家法国餐厅“里”工作（注意有不定冠词 un！）。',
            answers: ['dans'],
            hint: 'Determiner "un" follows → dans!',
            audio: 'Il travaille dans un restaurant français.',
            explain: 'Determiner "un" requires "dans" ("dans un restaurant").',
            explainZh: '后面有冠词 un，必须填 dans！'
          },
          {
            id: 'd64_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 (pre1a #10): Il y a un écureuil et un escargot ___ les copains de Tex. (parmi / pour / quant à)',
            promptZh: 'Tex 第 10 题：在 Tex 的（一群）朋友“当中”，有一只松鼠和一只蜗牛。',
            answers: ['parmi'],
            hint: 'among 3+ friends = parmi.',
            audio: 'Il y a un écureuil et un escargot parmi les copains de Tex.',
            explain: 'Among a group of 3 or more → "parmi".',
            explainZh: '复数人群之中（3 个以上）用 parmi。'
          },
          {
            id: 'd64_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 (pre1a #11): Paw-Paw arrose des fleurs qui poussent dans le jardin ___ sa maison. (avant / devant / entre)',
            promptZh: 'Tex 第 11 题：浇屋“前面”（空间！）花园里开着的花。',
            answers: ['devant'],
            hint: 'in front of (spatial!) = devant.',
            audio: 'Dans le jardin devant sa maison.',
            explain: 'Physical location "in front of his house" → "devant".',
            explainZh: '房子正前方（空间地点）用 devant。'
          },
          {
            id: 'd64_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 (pre1a #12): Tex et ses amis restent ___ Paw-Paw en Louisiane. (à / chez / vers)',
            promptZh: 'Tex 第 12 题：Tex 和朋友们住在 Paw-Paw “家里”。',
            answers: ['chez'],
            hint: 'at someone’s house = chez.',
            audio: 'Tex et ses amis restent chez Paw-Paw en Louisiane.',
            explain: '"chez Paw-Paw" = at Paw-Paw’s house.',
            explainZh: '“在某人家”固定用 chez。'
          }
        ],
        related: [
          { chapterId: 'ch6_prepositions', pageId: 'pre_6_5', label: '7.5 Contractions of à & de (au, aux, du, des)' }
        ]
      },

      /* =========================================================
         PAGE 6.5: CONTRACTIONS OF À AND DE WITH DEFINITE ARTICLES
      ========================================================= */
      {
        id: 'pre_6_5',
        code: '7.5',
        group: 'Contractions (à / de)',
        shortTitle: 'Contractions: au, aux, du, des',
        title: 'Contractions of à & de with Definite Articles (au, aux, du, des vs. à la / de l’)',
        titleZh: '缩合冠词全攻克：à / de 遇到 le / les 必变 au / aux / du / des（及复合介词联动）',
        estMin: 4,
        summary: 'Master the 4 mandatory French contractions (de+le=du, de+les=des, à+le=au, à+les=aux), keep à la / de la / à l’ / de l’ uncontracted, apply the rule inside multi-word prepositions (près du, à côté des, loin de la), and finish all 12 Tex pre2 café drills!',
        summaryZh: '背熟法语拼写最核心的 4 条必变公式：**de+le = du、de+les = des、à+le = au、à+les = aux**；而 **la 和 l’ 绝对不缩合**（à la / de la / à l’ / de l’）。更关键的是，所有以 à 或 de 结尾的短语介词（près de, à côté de, loin de, jusqu’à 等）同样触发缩合！含咖啡馆对话与 12 题专练。',
        cheatSummary: [
          { label: 'The 4 Mandatory Contractions (NO Exceptions)', rule: 'à + le = AU | à + les = AUX | de + le = DU | de + les = DES. You can NEVER write *à le*, *à les*, *de le*, or *de les*! Meanwhile, "la" and "l’" NEVER contract (à la vanille, à l’université, de la tour, de l’école).', ruleZh: '铁律四条：à+le→**au**，à+les→**aux**，de+le→**du**，de+les→**des**（书面与口语永不允许出现 *à le / de les*！）。而阴性 la 和元音省音 l’ 永远保留原样（à la, de l’）。' },
          { label: 'Multi-Word Prepositions Ending in à / de', rule: 'Multi-word prepositions contract the exact same way! près de + le campus → près DU campus | à côté de + les commerces → à côté DES commerces | jusqu’à + les vacances → jusqu’AUX vacances.', ruleZh: '重点延伸：别光盯着单个 à / de，只要是 de/à 结尾的短语介词（près de, à côté de, loin de, jusqu’à），后面遇 le/les 一样要缩合（près du campus, à côté des commerces）！' }
        ],
        sections: [
          {
            id: 'pre_contractions_core',
            heading: '1. Four Contraction Equations + Compound Prepositions & Café Dialogue',
            headingZh: '一、四大缩合公式 + 咖啡馆点单实战（含风味表达 à la / au / aux）',
            lead: 'Look closely at how food/drink flavors work in French too: "thé à la vanille" (no contraction for la), "muffin au chocolat" (à + le), "biscuit aux amandes" (à + les almonds)! Remember this whenever ordering in a French or Québécois café.',
            leadZh: '在法式点餐和生活里，“什么口味/加什么配料”也全部靠 **à + 定冠词** 表达（如奶茶里的巧克力味 **au chocolat**，香草味 **à la vanille**，杏仁饼干 **aux amandes**）！',
            cartoon: {
              src: './assets/tex_cartoons/pre2_cafe.gif',
              alt: 'Au café près du campus',
              caption: 'près du campus · à côté des commerces · loin de la tour · au chocolat · aux amandes · au lait.',
              captionZh: '一张图看全四类用法：près DU / à côté DES / loin DE LA / au chocolat / aux amandes。'
            },
            table: {
              headers: ['Combo', 'Result', 'Multi-Word & Café Examples'],
              rows: [
                { cols: ['de + le', 'du', 'près du campus (near the campus) · le gâteau du chef'], audio: 'près du campus, à côté du cinéma' },
                { cols: ['de + les', 'des', 'à côté des commerces (next to the shops) · la photo des enfants'], audio: 'à côté des commerces, les enfants' },
                { cols: ['à + le', 'au', 'au gymnase · un muffin au chocolat · un café au lait'], audio: 'un muffin au chocolat, un café au lait, au gymnase' },
                { cols: ['à + les', 'aux', 'un biscuit aux amandes · expliquer aux étudiants'], audio: 'un biscuit aux amandes, aux étudiants' },
                { cols: ['à / de + la (NO change)', 'à la / de la', 'pas loin de la tour · un thé à la vanille · à la bibliothèque'], audio: 'pas loin de la tour, un thé à la vanille' },
                { cols: ['à / de + l’ (NO change)', 'à l’ / de l’', 'pas loin de l’université · à l’aéroport · de l’hôtel'], audio: 'pas loin de l’université, à l’aéroport' }
              ]
            },
            dialogue: {
              title: 'Tammy & Bette au café près du campus',
              titleZh: '原版对话：校园旁的咖啡馆点单',
              lines: [
                { speaker: 'Tammy', fr: 'Je vais prendre un thé à la vanille et un muffin au chocolat. Et toi ?', en: 'I’m going to have a vanilla tea and a chocolate muffin. What about you?', zh: '我要一杯香草茶和一个巧克力麦芬。你呢？' },
                { speaker: 'Bette', fr: 'Pour moi, un biscuit aux amandes et un café au lait.', en: 'For me, an almond cookie and a latte (coffee with milk).', zh: '我要一块杏仁曲奇配一杯拿铁（牛奶咖啡）。' },
                { speaker: 'Tammy', fr: 'Bon, demain on va au gymnase, hein ?', en: 'Okay, tomorrow we’ll go to the gym, eh?', zh: '好，明天咱俩去健身房，行吧？' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'd65_d1',
            kind: 'fib',
            prompt: 'Tex Practice 1/12 (pre2 #1): Édouard travaille dans un restaurant français pas loin ___ université. (de + l’université)',
            promptZh: 'Tex 第 1 题：在“离大学不远”的地方（de + l’）：',
            answers: ["de l'", 'de l’'],
            hint: 'de + l’ does NOT contract!',
            audio: 'Pas loin de l’université.',
            explain: '"l’université" begins with a vowel → keep "de l’".',
            explainZh: '遇 l’ 不缩合，写作 de l’。'
          },
          {
            id: 'd65_d2',
            kind: 'fib',
            prompt: 'Tex Practice 2/12 (pre2 #2): Tammy rencontre Tex dans un café près ___ campus. (le campus — m.sg.)',
            promptZh: 'Tex 第 2 题：在“校园（阳性）附近”的咖啡馆（près de + le）：',
            answers: ['du'],
            hint: 'de + le = du.',
            audio: 'Dans un café près du campus.',
            explain: '"près de" + "le campus" contracts to "près du campus".',
            explainZh: 'près de + le = près du。'
          },
          {
            id: 'd65_d3',
            kind: 'fib',
            prompt: 'Tex Practice 3/12 (pre2 #3): Tex et ses amis adorent parler ___ vacances. (de + les vacances)',
            promptZh: 'Tex 第 3 题：喜欢谈论“假期”（parler de + 复数 les vacances）：',
            answers: ['des'],
            hint: 'de + les = des.',
            audio: 'Ils adorent parler des vacances.',
            explain: '"parler de" + "les vacances" contracts to "parler des vacances".',
            explainZh: 'de + les = des。'
          },
          {
            id: 'd65_d4',
            kind: 'fib',
            prompt: 'Tex Practice 4/12 (pre2 #4): Joe-Bob adore le gâteau ___ chocolat. (à + le chocolat)',
            promptZh: 'Tex 第 4 题：巧克力味蛋糕（à + le chocolat）：',
            answers: ['au'],
            hint: 'à + le = au.',
            audio: 'Joe-Bob adore le gâteau au chocolat.',
            explain: '"à + le chocolat" → "au chocolat".',
            explainZh: 'à + le = au（gâteau au chocolat）。'
          },
          {
            id: 'd65_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 (pre2 #5): Tex passe ses après-midis ___ café. (à + le café)',
            promptZh: 'Tex 第 5 题：在“咖啡馆”（à + le café）度过下午：',
            answers: ['au'],
            hint: 'à + le = au.',
            audio: 'Tex passe ses après-midis au café.',
            explain: '"à + le café" → "au café".',
            explainZh: 'à + le = au café。'
          },
          {
            id: 'd65_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 (pre2 #6): Fiona est sérieuse. Elle passe des heures ___ bibliothèque. (à + la bibliothèque)',
            promptZh: 'Tex 第 6 题：在“图书馆（阴性）”里待好几个小时（à + la）：',
            answers: ['à la', 'a la'],
            hint: 'à + la does NOT contract!',
            audio: 'Elle passe des heures à la bibliothèque.',
            explain: '"la" never contracts → "à la bibliothèque".',
            explainZh: '阴性 à la 绝对不缩合！'
          },
          {
            id: 'd65_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 (pre2 #7): Tex réfléchit beaucoup ___ existentialisme. (à + l’existentialisme)',
            promptZh: 'Tex 第 7 题：思考“存在主义”（réfléchir à + 元音开头的 l’）：',
            answers: ["à l'", 'à l’', "a l'", 'a l’'],
            hint: 'à + l’ does NOT contract!',
            audio: 'Tex réfléchit beaucoup à l’existentialisme.',
            explain: '"l’" never contracts → "à l’existentialisme".',
            explainZh: '遇 l’ 不缩合：à l’。'
          },
          {
            id: 'd65_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 (pre2 #8): Tex explique la culture française ___ étudiants américains. (à + les étudiants)',
            promptZh: 'Tex 第 8 题：向“美国学生们”（à + 复数 les）讲解法国文化：',
            answers: ['aux'],
            hint: 'à + les = aux.',
            audio: 'Tex explique la culture française aux étudiants américains.',
            explain: '"à + les étudiants" contracts to "aux étudiants" (even before a vowel! Make liaison [oz-étudiants]).',
            explainZh: '复数无论是辅音还是元音开头，à + les 一律缩合成 **aux**（并做联诵 [oz]）！'
          },
          {
            id: 'd65_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 (pre2 #9): Tammy étudie à l’université ___ Texas. (de + le Texas)',
            promptZh: 'Tex 第 9 题：“德克萨斯（阳性 le Texas）”大学（de + le）：',
            answers: ['du'],
            hint: 'de + le = du.',
            audio: 'à l’université du Texas.',
            explain: '"de + le Texas" → "du Texas".',
            explainZh: 'de + le Texas 缩合为 du Texas。'
          },
          {
            id: 'd65_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 (pre2 #10): Joe-Bob, tu vas ___ restaurant avec Corey ce soir ? (à + le restaurant)',
            promptZh: 'Tex 第 10 题：今晚你和 Corey 去“餐厅”吗（à + le）？',
            answers: ['au'],
            hint: 'à + le = au.',
            audio: 'Tu vas au restaurant avec Corey ce soir ?',
            explain: '"aller à + le restaurant" → "aller au restaurant".',
            explainZh: 'à + le = au restaurant。'
          },
          {
            id: 'd65_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 (pre2 #11): Voici une photo ___ enfants de Rita. (de + les enfants)',
            promptZh: 'Tex 第 11 题：这是 Rita 的“孩子们”的照片（de + 复数 les）：',
            answers: ['des'],
            hint: 'de + les = des.',
            audio: 'Voici une photo des enfants de Rita.',
            explain: '"de + les enfants" → "des enfants" (with [z] liaison).',
            explainZh: '复数无论是元音还是辅音开头，de + les 一律缩合为 **des**！'
          },
          {
            id: 'd65_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 (pre2 #12): La bibliothèque UGL se trouve à côté ___ tour. (de + la tour)',
            promptZh: 'Tex 第 12 题：图书馆在“主楼塔（la tour 阴性）”旁边：',
            answers: ['de la'],
            hint: 'de + la does NOT contract!',
            audio: 'La bibliothèque se trouve à côté de la tour.',
            explain: '"la" never contracts → "à côté de la tour".',
            explainZh: '阴性 de la 不缩合，填 de la。'
          }
        ],
        related: [
          { chapterId: 'ch6_prepositions', pageId: 'pre_6_6', label: '7.6 Places I: To / In (à, en, au, aux)' },
          { chapterId: 'ch2_determiners', pageId: 'det_2_6', label: 'Review 2.6: Partitive du / de la vs. Contraction' }
        ]
      },

      /* =========================================================
         PAGE 6.6: PREPOSITIONS WITH PLACES I (TO / IN)
      ========================================================= */
      {
        id: 'pre_6_6',
        code: '7.6',
        group: 'Places (To / In)',
        shortTitle: 'Places I: à, en, au, aux',
        title: 'Prepositions with Places (Part 1 — To / In): Cities, Islands, Countries, States & Provinces',
        titleZh: '地点介词（上 · 在/去某地）：城市小岛 à · 阴性/元音国名 en · 阳性 au · 复数 aux',
        estMin: 4,
        summary: 'Use Tex’s geographic grid to pick à, en, au, or aux effortlessly for any city, island, country, province, state, or continent—spot the famous exception "au Mexique", handle masculine vowel-initial "en Iran / en Ontario", and master all 12 Tex pre3 Ex.1 drills!',
        summaryZh: '去/在加拿大（**au Canada**）、在安大略省（**en Ontario**）、去美国（**aux États-Unis**）、去巴黎（**à Paris**）、去法国/中国（**en France / en Chine**）——一张表搞定全球地名“在/去”！特别注意例外 **le Mexique → au Mexique**。含 Tex `pre3` 第一组全部 12 题。',
        cheatSummary: [
          { label: 'Cities & Islands vs. Countries/Regions', rule: 'CITIES & ISLANDS → ALWAYS À (à Paris, à Austin, à Montréal, à Cuba). FEMININE countries/states/provinces (mostly ending in -e) & ALL CONTINENTS → EN (en France, en Californie, en Bourgogne, en Europe).', ruleZh: '城市与小岛一律用 **à**（à Paris, à Montréal, à Cuba）；以 -e 结尾的阴性国家、州、省以及所有大洲，全用 **en**（en France, en Californie, en Europe）。' },
          { label: 'Masculine, Masc.-Vowel & Plural', rule: 'MASCULINE singular (consonant start) → AU (au Canada, au Texas, au Colorado, EXCEPTION: au Mexique even though it ends in -e!). MASCULINE starting with VOWEL → EN (en Iran, en Ontario!). PLURAL → AUX (aux États-Unis).', ruleZh: '辅音开头阳性单数 → **au**（au Canada, au Japon，例外：le Mexique 虽然 -e 结尾但是阳性 → **au Mexique**！）；元音开头阳性单数 → **en**（en Iran, **en Ontario**！）；复数 → **aux**（aux États-Unis）。' }
        ],
        sections: [
          {
            id: 'pre_places_to_in',
            heading: '1. Complete "To / In" Place Matrix (à · en · au · aux)',
            headingZh: '一、完整地点“在 / 去”矩阵（城市 · 小岛 · 国家 · 省州 · 大洲）',
            lead: 'Unlike English ("in Texas, in France, in Paris, in the US"—all "in"!), French shifts prepositions by geography type, gender, initial sound, and number:',
            leadZh: '英语不管大洲国家城市统统一个 in / to，法语则精准区分 5 种情况（加拿大考题极高频出现 au Canada 与 en Ontario）：',
            cartoon: {
              src: './assets/tex_cartoons/pre3_chars1.gif',
              alt: 'À Paris, au Texas, en Europe, aux États-Unis',
              caption: 'à Paris · en France · au Canada / au Texas · en Ontario · aux États-Unis.',
              captionZh: '记住代表例词：à Paris / en France / au Canada / en Ontario / aux États-Unis。'
            },
            table: {
              headers: ['Geographic Category', 'To / In', 'Tex Examples'],
              rows: [
                { cols: ['Cities & Small Islands', 'à', 'à Paris · à Londres · à Austin · à Cuba · à Tahiti'], audio: 'à Paris, à Austin, à Cuba, à Tahiti' },
                { cols: ['Feminine (mostly ends in -e) & Continents', 'en', 'en France · en Californie · en Bourgogne · en Bretagne · en Europe'], audio: 'en France, en Californie, en Bourgogne, en Europe' },
                { cols: ['Masculine (consonant start)', 'au', 'au Canada · au Texas · au Colorado · au Japon · EXCEPTION: au Mexique!'], audio: 'au Canada, au Texas, au Japon, au Mexique' },
                { cols: ['Masculine starting with a Vowel', 'en', 'en Iran · en Ontario · en Israël'], audio: 'en Iran, en Ontario' },
                { cols: ['Plural Countries & Regions', 'aux', 'aux États-Unis · aux Philippines'], audio: 'aux États-Unis' }
              ]
            },
            tip: 'How to tell if a country is feminine? Almost every country ending in "-e" is feminine (la France, la Suisse, la Chine, l’Espagne, l’Australie), with 4 key masculine "-e" exceptions to remember: le Mexique, le Cambodge, le Mozambique, le Zaïre/Zimbabwe (→ au Mexique!).',
            tipZh: '快速判断国名阴阳性规律：95% 以 -e 结尾的都是阴性（en France, en Chine, en Espagne），只需死记 **le Mexique（墨西哥）** 是阳性（**au Mexique**）！其余非 -e 结尾大都是阳性（au Canada, au Japon）。'
          }
        ],
        drills: [
          {
            id: 'd66_d1',
            kind: 'fib',
            prompt: 'Tex Practice 1/12 (pre3 Ex.1 #1): Tex et Tammy vont passer les vacances ___ Espagne. (l’Espagne — fem., vowel)',
            promptZh: 'Tex 第 1 题：去“西班牙”（阴性国名 Espagne）度假：',
            answers: ['en'],
            hint: 'Feminine country → en.',
            audio: 'Ils vont passer les vacances en Espagne.',
            explain: 'Feminine countries (ending in -e, e.g. Espagne) always take "en": "en Espagne".',
            explainZh: '阴性国家（-e 结尾，无论是否元音开头）一律用 **en**：en Espagne。'
          },
          {
            id: 'd66_d2',
            kind: 'fib',
            prompt: 'Tex Practice 2/12 (pre3 Ex.1 #2): Tammy et Bette étudient ___ Austin. (city)',
            promptZh: 'Tex 第 2 题：在“奥斯汀（城市）”读书：',
            answers: ['à', 'a'],
            hint: 'City → à.',
            audio: 'Tammy et Bette étudient à Austin.',
            explain: 'Cities always take "à": "à Austin".',
            explainZh: '城市面前永远用 **à**。'
          },
          {
            id: 'd66_d3',
            kind: 'fib',
            prompt: 'Tex Practice 3/12 (pre3 Ex.1 #3): Édouard n’aime pas travailler ___ Texas. (le Texas — m.sg.)',
            promptZh: 'Tex 第 3 题：不喜欢在“德克萨斯（阳性）”工作：',
            answers: ['au'],
            hint: 'Masculine state → au.',
            audio: 'Édouard n’aime pas travailler au Texas.',
            explain: '"le Texas" (masc.) takes "au".',
            explainZh: '阳性州/国（辅音开头）用 **au**：au Texas。'
          },
          {
            id: 'd66_d4',
            kind: 'fib',
            prompt: 'Tex Practice 4/12 (pre3 Ex.1 #4): Tex : Il fait beau tout le temps ___ France.',
            promptZh: 'Tex 第 4 题：在“法国”（阴性）天气总是很好：',
            answers: ['en'],
            hint: 'Feminine country → en.',
            audio: 'Il fait beau tout le temps en France.',
            explain: '"la France" (fem.) → "en France".',
            explainZh: '阴性国名 → **en France**。'
          },
          {
            id: 'd66_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 (pre3 Ex.1 #5 — Exception!): Fiona : Il y a beaucoup de monuments intéressants ___ Mexique ? (le Mexique!)',
            promptZh: 'Tex 第 5 题（经典例外！）：在“墨西哥”（以 -e 结尾但是阳性 le Mexique！）：',
            answers: ['au'],
            hint: 'Careful! le Mexique is MASCULINE despite ending in -e!',
            audio: 'Beaucoup de monuments intéressants au Mexique.',
            explain: 'Classic trap: "le Mexique" is masculine → "au Mexique"!',
            explainZh: '必记例外：le Mexique 是阳性国家，所以必须说 **au Mexique**！'
          },
          {
            id: 'd66_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 (pre3 Ex.1 #6): Bette a envie de faire du shopping ___ Japon. (le Japon)',
            promptZh: 'Tex 第 6 题：想去“日本（le Japon 阳性）”逛街：',
            answers: ['au'],
            hint: 'le Japon (masc.) → au.',
            audio: 'Faire du shopping au Japon.',
            explain: '"le Japon" (masc.) → "au Japon".',
            explainZh: '阳性国名 le Japon → **au Japon**。'
          },
          {
            id: 'd66_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 (pre3 Ex.1 #7): Tammy aime faire du ski ___ Suisse. (la Suisse)',
            promptZh: 'Tex 第 7 题：喜欢在“瑞士（la Suisse 阴性）”滑雪：',
            answers: ['en'],
            hint: 'la Suisse (fem.) → en.',
            audio: 'Faire du ski en Suisse.',
            explain: '"la Suisse" (fem.) → "en Suisse".',
            explainZh: '阴性国名 la Suisse → **en Suisse**。'
          },
          {
            id: 'd66_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 (pre3 Ex.1 #8): Rita va aller au cinéma ___ San Antonio. (city)',
            promptZh: 'Tex 第 8 题：在“圣安东尼奥（城市）”看电影：',
            answers: ['à', 'a'],
            hint: 'City → à.',
            audio: 'Au cinéma à San Antonio.',
            explain: 'City → "à San Antonio".',
            explainZh: '城市名称用 **à**。'
          },
          {
            id: 'd66_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 (pre3 Ex.1 #9): Édouard : J’adore le cidre ___ Bretagne. (la Bretagne — fem. region)',
            promptZh: 'Tex 第 9 题：喜欢在“布列塔尼大区（la Bretagne 阴性）”喝苹果酒：',
            answers: ['en'],
            hint: 'Feminine province/region → en.',
            audio: 'En Bretagne.',
            explain: '"la Bretagne" (fem.) → "en Bretagne".',
            explainZh: '阴性大区/省（la Bretagne）→ **en Bretagne**。'
          },
          {
            id: 'd66_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 (pre3 Ex.1 #10): Paw-Paw va au parc tous les jours ___ Opelousas. (city)',
            promptZh: 'Tex 第 10 题：在“Opelousas（小镇/城市）”的公园：',
            answers: ['à', 'a'],
            hint: 'Town / city → à.',
            audio: 'Tous les jours à Opelousas.',
            explain: 'Towns and cities always take "à": "à Opelousas".',
            explainZh: '城市/城镇都用 **à**。'
          },
          {
            id: 'd66_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 (pre3 Ex.1 #11): Rita adore les plages ___ Floride. (la Floride — fem. state)',
            promptZh: 'Tex 第 11 题：喜欢“佛罗里达州（la Floride 阴性）”的海滩：',
            answers: ['en'],
            hint: 'Feminine state (-e) → en.',
            audio: 'Les plages en Floride.',
            explain: '"la Floride" (fem.) → "en Floride".',
            explainZh: '阴性州名 la Floride → **en Floride**。'
          },
          {
            id: 'd66_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 (pre3 Ex.1 #12): Trey a envie d’aller ___ Australie. (l’Australie — fem.)',
            promptZh: 'Tex 第 12 题：想去“澳大利亚（l’Australie 阴性）”：',
            answers: ['en'],
            hint: 'Feminine country/continent (-e) → en.',
            audio: 'Trey a envie d’aller en Australie.',
            explain: '"l’Australie" (fem.) → "en Australie".',
            explainZh: '阴性大洲/国家 Australie → **en Australie**。'
          }
        ],
        related: [
          { chapterId: 'ch6_prepositions', pageId: 'pre_6_7', label: '7.7 Places II: From (de, d’, du, des)' }
        ]
      },

      /* =========================================================
         PAGE 6.7: PREPOSITIONS WITH PLACES II (FROM + TEX STORY + EX.2)
      ========================================================= */
      {
        id: 'pre_6_7',
        code: '7.7',
        group: 'Places (From)',
        shortTitle: 'Places II: de, d’, du, des ("From")',
        title: 'Prepositions with Places (Part 2 — Coming From): de / d’, du & des + Mixed Practice',
        titleZh: '地点介词（下 · 来自/从某地）：de / d’（城市·阴性·元音阳性）vs du（辅音阳性）vs des（复数）',
        estMin: 4,
        summary: 'Complete the geographic circle with "from" prepositions: cities & feminine/vowel-initial places drop the article completely (de France, d’Europe, d’Ontario—NEVER *de la France!), masculine consonant places take DU (du Canada, du Texas), and plurals take DES (des États-Unis), plus Tex’s deportation story and all 12 Tex pre3 Ex.2 drills!',
        summaryZh: '说出“我从哪儿来（venir de）”时最容易出错的是把阴性定冠词留下来！记住：**城市、小岛、所有阴性国名、元音开头阳性国名/省**一律光杆 **de / d’**（如 **de France, de Chine, d’Ontario**，绝对不是 *de la France*！）；唯有**辅音开头阳性**用 **du**（du Canada, du Mexique），**复数**用 **des**（des États-Unis）。含 Tex 被驱逐出境故事 + 12 道综合练习！',
        cheatSummary: [
          { label: 'The "From" Rule (No la / l’ Left Behind!)', rule: 'CITIES, ISLANDS, ALL FEMININE places, & VOWEL MASCULINE places → DE / D’ ONLY (de Paris, de Tahiti, de France, d’Europe, d’Ontario — NEVER *de la France*!).', ruleZh: '“来自……”脱冠词规则：城市（de Paris）、小岛（de Tahiti）、所有阴性国省（**de France, de Californie** —— 绝对不加 la！）、元音开头阳性（d’Iran, d’Ontario）统统只用 **de / d’**！' },
          { label: 'Masculine Consonant & Plural', rule: 'MASCULINE CONSONANT → DU (du Canada, du Texas, du Colorado, du Mexique!). PLURAL → DES (des États-Unis).', ruleZh: '辅音开头阳性国/州 → **du**（du Canada, du Texas, du Mexique）；复数国 → **des**（des États-Unis）。' }
        ],
        sections: [
          {
            id: 'pre_places_from_story',
            heading: '1. Coming "From" Matrix + Tex’s Deportation Story',
            headingZh: '一、“来自（From）”对照表与 Tex 的法美历险故事',
            lead: 'Follow Tex’s wild biography from Houston to Paris and Lyon and back to Texas—every single sentence combines both directions ("To/In" vs. "From") cleanly!',
            leadZh: '读完 Tex 在德州出生、误飞法国修道院、又被驱逐回德州的故事，把去（à/en/au/aux）和来（de/d’/du/des）彻底融会贯通：',
            cartoon: {
              src: './assets/tex_cartoons/pre3_chars2.gif',
              alt: 'Expulsé de France, il est retourné au Texas',
              caption: 'arriver à Paris (en France) · venir des États-Unis · arriver de Houston · expulsé de France → au Texas.',
              captionZh: '故事里的全部地点搭配：arrivaient de Houston / voyage aux États-Unis / expulsé de France / au Texas。'
            },
            table: {
              headers: ['Geographic Category', 'From', 'Examples'],
              rows: [
                { cols: ['Cities & Islands', 'de / d’', 'd’Austin · de Houston · de Tahiti'], audio: 'Il vient d’Austin et de Houston.' },
                { cols: ['Feminine (drops "la"!) & Continents', 'de / d’', 'de France · de Californie · de Bourgogne · d’Europe'], audio: 'expulsé de France, il vient de Bourgogne et d’Europe' },
                { cols: ['Masculine Vowel-Initial', 'd’', 'd’Iran · d’Ontario'], audio: 'Elle vient d’Ontario et d’Iran.' },
                { cols: ['Masculine Consonant', 'du', 'du Canada · du Texas · du Colorado · du Mexique'], audio: 'Il vient du Canada et du Texas.' },
                { cols: ['Plural', 'des', 'des États-Unis'], audio: 'Elles viennent des États-Unis.' }
              ]
            },
            examples: [
              { fr: 'Tex est né au Texas, bien sûr. Mais par accident il a grandi en Europe.', en: 'Tex was born in Texas, of course. But by accident he grew up in Europe.', zh: 'Tex 当然生在德克萨斯，却意外在欧洲长大。', tag: 'au / en' },
              { fr: 'Son avion est arrivé à Paris (en France) où il a rencontré des nonnes françaises qui venaient de faire un voyage aux États-Unis. Elles arrivaient de Houston, elles aussi.', en: 'His plane arrived in Paris (in France) where he met French nuns who had just visited the United States. They were arriving from Houston, too.', zh: '他的飞机抵达法国巴黎，在那里遇见刚去美国旅行回来的法国修女——她们居然也是从休斯顿来的！', tag: 'à / en / aux / de' },
              { fr: 'Tex a vécu heureux chez les nonnes pendant plusieurs années. Malheureusement, un jour il a été expulsé de France, et il est retourné dans son pays natal, c’est-à-dire au Texas !', en: 'Tex lived happily with the nuns for several years. Unfortunately, one day he was deported from France and returned to his native country, namely to Texas!', zh: '他在修女们那儿幸福地生活了好几年；不幸的是有一天他被法国驱逐出境，遣返回了祖国——德克萨斯！', tag: 'chez / de / au' }
            ]
          }
        ],
        drills: [
          {
            id: 'd67_d1',
            kind: 'fib',
            prompt: 'Tex Practice 1/12 (pre3 Ex.2 #1 — Mix à/en/au/aux/de/du/des): Tex habitait ___ Lyon. (city)',
            promptZh: 'Tex 第 1 题：Tex 曾住在“里昂（城市）”：',
            answers: ['à', 'a'],
            hint: 'Live IN a city = à.',
            audio: 'Tex habitait à Lyon.',
            explain: 'Cities take "à": "habiter à Lyon".',
            explainZh: '住在某城市用 **à**。'
          },
          {
            id: 'd67_d2',
            kind: 'fib',
            prompt: 'Tex Practice 2/12 (pre3 Ex.2 #2): Tex est né ___ États-Unis. (plural country)',
            promptZh: 'Tex 第 2 题：Tex 出生在“美国（复数）”：',
            answers: ['aux'],
            hint: 'Born IN a plural country = aux.',
            audio: 'Tex est né aux États-Unis.',
            explain: '"être né aux États-Unis" (in the plural US).',
            explainZh: '在复数国家用 **aux**：aux États-Unis。'
          },
          {
            id: 'd67_d3',
            kind: 'fib',
            prompt: 'Tex Practice 3/12 (pre3 Ex.2 #3): Tex a été expulsé ___ France. (from feminine country!)',
            promptZh: 'Tex 第 3 题：Tex 被从“法国（阴性）”驱逐出境（不保留 la！）：',
            answers: ['de'],
            hint: 'FROM a feminine country drops "la" → de!',
            audio: 'Tex a été expulsé de France.',
            explain: 'After "de", feminine countries drop the article: "expulsé de France" (NOT *de la France*).',
            explainZh: '来自阴性国家不加 la，直接用 **de France**！'
          },
          {
            id: 'd67_d4',
            kind: 'fib',
            prompt: 'Tex Practice 4/12 (pre3 Ex.2 #4): Tammy a grandi ___ Fort Worth. (city)',
            promptZh: 'Tex 第 4 题：Tammy 在“沃斯堡（城市）”长大：',
            answers: ['à', 'a'],
            hint: 'City = à.',
            audio: 'Tammy a grandi à Fort Worth.',
            explain: 'Cities take "à": "à Fort Worth".',
            explainZh: '城市名称用 **à**。'
          },
          {
            id: 'd67_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 (pre3 Ex.2 #5): Joe-Bob, tu viens ___ College Station, n’est-ce pas ? (from a city)',
            promptZh: 'Tex 第 5 题：Joe-Bob，你是从“College Station（城市）”来的吧？',
            answers: ['de'],
            hint: 'FROM a city (consonant start) = de.',
            audio: 'Tu viens de College Station ?',
            explain: '"venir de" + city = "de College Station".',
            explainZh: '来自某辅音开头城市用 **de**。'
          },
          {
            id: 'd67_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 (pre3 Ex.2 #6): Édouard a passé quelques années ___ Paris. (city)',
            promptZh: 'Tex 第 6 题：Édouard 在“巴黎”待过几年：',
            answers: ['à', 'a'],
            hint: 'In a city = à.',
            audio: 'Édouard a passé quelques années à Paris.',
            explain: '"à Paris".',
            explainZh: '在巴黎：à Paris。'
          },
          {
            id: 'd67_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 (pre3 Ex.2 #7 — Exception!): Les parents de Fiona sont mexicains. Ils viennent ___ Mexique. (from masc. country!)',
            promptZh: 'Tex 第 7 题（注意 venir de！）：Fiona 父母来自“墨西哥（阳性 le Mexique）”：',
            answers: ['du'],
            hint: 'FROM masculine "le Mexique" → de + le = du!',
            audio: 'Ils viennent du Mexique.',
            explain: 'Because "le Mexique" is masculine, "from Mexico" contracts to "du Mexique"!',
            explainZh: '因为 Mexique 是阳性国名，所以来自墨西哥要缩合为 **du Mexique**！'
          },
          {
            id: 'd67_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 (pre3 Ex.2 #8): Édouard vient ___ Bourgogne. (from feminine region!)',
            promptZh: 'Tex 第 8 题：Édouard 来自“勃艮第（la Bourgogne 阴性大区）”：',
            answers: ['de'],
            hint: 'FROM feminine region drops "la" → de!',
            audio: 'Édouard vient de Bourgogne.',
            explain: '"la Bourgogne" is feminine → "venir de Bourgogne" (drops "la").',
            explainZh: '来自阴性省区脱去冠词：de Bourgogne。'
          },
          {
            id: 'd67_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 (pre3 Ex.2 #9): Tammy a fait un voyage ___ Europe. (continent)',
            promptZh: 'Tex 第 9 题：Tammy 去“欧洲（大洲）”旅行了：',
            answers: ['en'],
            hint: 'To a continent = en.',
            audio: 'Tammy a fait un voyage en Europe.',
            explain: 'Continents take "en": "en Europe".',
            explainZh: '去/在大洲用 **en**：en Europe。'
          },
          {
            id: 'd67_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 (pre3 Ex.2 #10): Bette est allée ___ Canada l’été passé. (to masc. country)',
            promptZh: 'Tex 第 10 题（加拿大必会！）：Bette 去年夏天去了“加拿大”：',
            answers: ['au'],
            hint: 'To masculine le Canada = au.',
            audio: 'Bette est allée au Canada l’été passé.',
            explain: '"aller au Canada" (and "coming from Canada" = "venir du Canada"!).',
            explainZh: '去/在加拿大用 **au Canada**；来自加拿大用 **du Canada**！'
          },
          {
            id: 'd67_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 (pre3 Ex.2 #11): Corey a des parents qui habitent ___ Californie. (in fem. state)',
            promptZh: 'Tex 第 11 题：Corey 有亲戚住在“加利福尼亚（阴性）州”：',
            answers: ['en'],
            hint: 'In feminine state = en.',
            audio: 'Qui habitent en Californie.',
            explain: '"habiter en Californie".',
            explainZh: '住在阴性州用 **en**：en Californie。'
          },
          {
            id: 'd67_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 (pre3 Ex.2 #12): Tex et ses amis rendent visite à Paw-Paw ___ Louisiane. (in fem. state)',
            promptZh: 'Tex 第 12 题：去“路易斯安那（阴性）州”看望 Paw-Paw：',
            answers: ['en'],
            hint: 'In feminine state = en.',
            audio: 'Rendent visite à Paw-Paw en Louisiane.',
            explain: '"la Louisiane" (fem.) → "en Louisiane".',
            explainZh: '阴性州名 la Louisiane → **en Louisiane**。'
          }
        ],
        related: [
          { chapterId: 'ch6_prepositions', pageId: 'pre_6_8', label: '7.8 Time I: depuis & il y a / ça fait ... que' }
        ]
      },

      /* =========================================================
         PAGE 6.8: TIME I: DEPUIS + PRESENT & IL Y A / ÇA FAIT / VOILÀ ... QUE
      ========================================================= */
      {
        id: 'pre_6_8',
        code: '7.8',
        group: 'Time (depuis + Present)',
        shortTitle: 'depuis vs. il y a / ça fait ... que',
        title: 'Time (1): depuis ("For/Since") with Present Tense vs. il y a / ça fait / voilà ... que',
        titleZh: '时间介词（一）：正在进行的动作必须用现在时 + depuis / il y a ... que / ça fait ... que',
        estMin: 5,
        summary: 'Grasp why French uses PRESENT TENSE (never passé composé!) with depuis when an action is still happening now, tell duration ("for") vs. starting point ("since"), ask "Depuis combien de temps / Depuis quand ?", notice negative depuis (present vs. PC), and convert "il y a / ça fait / voilà ... que" sentences into "depuis"!',
        summaryZh: '攻克英语母语者和双语者最常错的时态点：事情从过去开始、**到现在还在持续**（如“我来加拿大两年了”），法语动词**必须用现在时（不能用过去时！）**，配 **depuis**；注意区别持续时长（for）与起点时间（since）、句首独立词 **Depuis,**（从那以后）、以及句首句型 **il y a / ça fait / voilà + 时长 + que**！含 Tex `pred1` 全套练习。',
        cheatSummary: [
          { label: 'Present Tense + depuis (Action STILL Going On!)', rule: 'Ongoing action from past to now → PRESENT tense + depuis (NOT passé composé!): "Tex sort avec Tammy depuis un an" (duration = FOR 1 year) | "depuis septembre" (starting point = SINCE Sept). Questions: "Depuis combien de temps...?" / "Depuis quand...?"', ruleZh: '核心铁律：从过去延续到现在还在进行的动作，**动词用现在时 + depuis**！接时长表示“已经……久了”，接时间点表示“自从……以来”。提问：Depuis combien de temps / Depuis quand ? 句首加逗号单独用 "Depuis," = 从那以后。' },
          { label: 'il y a / ça fait / voilà ... que (+ Future Rule)', rule: 'Express DURATION ONLY (never starting dates!) and ALWAYS stand at the FRONT: "Voilà un an que j’enseigne..." / "Ça fait deux ans que..." / "Il y aura deux ans demain que je connais Tammy." (Main clause after "que" stays PRESENT!).', ruleZh: 'il y a...que / ça fait...que / voilà...que 只能接“时长（多久）”，且必须放在句子最前面！即使前面变成将来时（Il y aura deux ans demain que...），que 后面的动作依然用现在时！' }
        ],
        sections: [
          {
            id: 'pre_depuis_present_sec',
            heading: '1. depuis + Present Tense (Duration vs. Starting Point + Negative Trap)',
            headingZh: '一、depuis 搭配现在时：时长 vs 起点、独立 Depuis 以及否定两用',
            lead: 'Look carefully at NEGATIVE sentences with depuis: if you’re STILL here ("I haven’t been in Texas for long"), use PRESENT ("Je ne suis pas au Texas depuis longtemps"). If an action has STOPPED completely ("I haven’t been back to France since last summer"), use PASSÉ COMPOSÉ ("Je ne suis pas allé en France depuis l’été dernier")!',
            leadZh: '看清 depuis 在否定句里的精妙区分：① 人还在这里（“我来德州还不久”）→ 现在时；② 某事好久没做过了（“我去年夏天之后就再没去过法国”）→ 复合过去时！',
            cartoon: {
              src: './assets/tex_cartoons/pred1_texas.gif',
              alt: 'Depuis quand es-tu au Texas ?',
              caption: 'Je suis au Texas depuis 1998 (ongoing → present) vs. Je ne suis pas allé en France depuis l’été dernier (non-action → PC).',
              captionZh: '持续到现在用现在时（je suis depuis 1998）；一直没发生用过去时（je ne suis pas allé depuis...）。'
            },
            table: {
              headers: ['Use of depuis', 'Pattern / Question', 'Tex Example'],
              rows: [
                { cols: ['Duration ("for")', 'Depuis combien de temps... ? · depuis + length of time', 'depuis un an · depuis deux minutes · depuis une éternité'], audio: 'Tex sort avec Tammy depuis un an.' },
                { cols: ['Starting Point ("since")', 'Depuis quand... ? · depuis + date/moment', 'depuis septembre · depuis le 20 août · depuis lundi · depuis toujours'], audio: 'Depuis le 20 août, depuis lundi.' },
                { cols: ['Standalone "Since then"', 'Depuis, + clause', 'Bette a vu Tex et depuis, elle n’arrête pas de penser à lui.'], audio: 'Et depuis, elle n’arrête pas de penser à lui.' },
                { cols: ['Negative (Ongoing vs. Stopped)', 'Present (still there) vs. PC (hasn’t happened)', 'Je ne suis pas au Texas depuis longtemps. vs. Je ne suis pas allé en France depuis l’été dernier.'], audio: 'Je ne suis pas allé en France depuis l’été dernier.' }
              ]
            },
            dialogue: {
              title: 'Bette & Tex : Depuis quand es-tu au Texas ?',
              titleZh: '原版对话：你来德州多久了？',
              lines: [
                { speaker: 'Bette', fr: 'Tex, depuis quand es-tu au Texas ?', en: 'How long have you been in Texas?', zh: 'Tex，你来德州多久了？' },
                { speaker: 'Tex', fr: 'Je ne suis pas au Texas depuis longtemps. Je suis au Texas depuis 1998.', en: 'I haven’t been in Texas for long. I’ve been in Texas since 1998.', zh: '我在德州待得还不久，1998 年过来的。' },
                { speaker: 'Bette', fr: 'Depuis quand connais-tu Tammy ? — Depuis quand veux-tu devenir poète ?', en: 'How long have you known Tammy? — How long have you wanted to be a poet?', zh: '你认识 Tammy 多久了？—— 你想当诗人多久了？' },
                { speaker: 'Tex', fr: 'Je connais Tammy depuis deux ans. — Oh, depuis toujours !', en: 'I’ve known Tammy for two years. — Oh, forever!', zh: '认识两年了。—— 哦，打从有记忆起一直想！' },
                { speaker: 'Bette', fr: 'Depuis quand n’es-tu pas allé en France ? Et toi, depuis quand as-tu ce tatouage ?', en: 'How long haven’t you been to France? And since when do you have that tattoo?', zh: '你多久没回法国了？（反问）你这纹身什么时候纹的？' },
                { speaker: 'Tex / Bette', fr: 'Je ne suis pas allé en France depuis l’été dernier. — Oh, depuis lundi. Depuis, les mecs ne me quittent pas des yeux !', en: 'Haven’t been since last summer. — Since Monday. Since then, guys can’t take their eyes off me!', zh: '去年夏天后就没回去过。—— 周一纹的！打那以后男生们眼睛都直了！' }
              ]
            }
          },
          {
            id: 'pre_ilyaque_sec',
            heading: '2. Sentence-Initial Alternatives: il y a ... que / ça fait ... que / voilà ... que',
            headingZh: '二、句首等价替换：il y a ... que / ça fait ... que / voilà ... que',
            lead: 'Want to start the sentence with the duration instead? Use il y a ... que, ça fait ... que, or (more emphatic) voilà ... que—these ONLY express duration (never a date!) and ALWAYS open the sentence. Even with future "il y aura... que", the verb after "que" stays in the PRESENT!',
            leadZh: '在口语和考试里，把时间段提前到句首也超常见：il y a / ça fait / voilà + 时长 + que + 现在时（只能接“多久”，不能接具体日期或几点钟！）：',
            cartoon: {
              src: './assets/tex_cartoons/pred1_longtemps.gif',
              alt: 'Ça fait longtemps que tu enseignes le français ?',
              caption: 'Voilà un an que j’enseigne = J’enseigne depuis un an. (And: Il y aura 2 ans demain que je CONNAIS Tammy!).',
              captionZh: '两者完美互换：Voilà 1 an que j’enseigne... ↔ J’enseigne depuis 1 an。'
            },
            examples: [
              { fr: 'Voilà un an que j’enseigne le français. = J’enseigne le français depuis un an.', en: 'I’ve been teaching French for a year.', zh: '我教法语已经一年了。', tag: 'voilà ... que = depuis' },
              { fr: 'Il y aura deux ans demain que je connais Tammy.', en: 'Tomorrow it will be two years that I have known Tammy. (Notice present "connais"!)', zh: '到明天我认识 Tammy 就整整两年了。（que 后仍用现在时 connais！）', tag: 'Future Matrix + Present' }
            ]
          }
        ],
        drills: [
          {
            id: 'd68_d1',
            kind: 'fib',
            prompt: 'Tex Practice 1/12 (pred1 #1) — Restate with depuis: Il y a deux ans qu’Édouard est au Texas. → Édouard est au Texas ___ deux ans.',
            promptZh: 'Tex 第 1 题：把 Il y a deux ans que 改写为 depuis（注意动词保持现在时）：',
            answers: ['depuis'],
            hint: 'subject + verb + depuis + duration.',
            audio: 'Édouard est au Texas depuis deux ans.',
            explain: '"Édouard est au Texas depuis deux ans."',
            explainZh: '动词后接 depuis + 时长。'
          },
          {
            id: 'd68_d2',
            kind: 'fib',
            prompt: 'Tex Practice 2/12 (pred1 #2) — Restate with depuis: Il y a un an que Tex et Tammy sortent ensemble. → Tex et Tammy ___ ensemble depuis un an.',
            promptZh: 'Tex 第 2 题：Tex 和 Tammy 在一起谈恋爱“已经一年了”（填写现在时动词）：',
            answers: ['sortent'],
            hint: 'Present tense of sortir (plural)!',
            audio: 'Tex et Tammy sortent ensemble depuis un an.',
            explain: 'Ongoing action → present tense: "sortent ensemble depuis un an".',
            explainZh: '持续至今的关系用现在时 sortent。'
          },
          {
            id: 'd68_d3',
            kind: 'fib',
            prompt: 'Tex Practice 3/12 (pred1 #3) — Restate: Il y a cinq ans que Tammy étudie le français. → Tammy ___ le français depuis cinq ans.',
            promptZh: 'Tex 第 3 题：Tammy 学法语“已经五年了”：',
            answers: ['étudie', 'etudie'],
            hint: 'Present tense of étudier!',
            audio: 'Tammy étudie le français depuis cinq ans.',
            explain: 'Present tense "étudie depuis cinq ans".',
            explainZh: '现在还在学，动词用现在时 étudie。'
          },
          {
            id: 'd68_d4',
            kind: 'fib',
            prompt: 'Tex Practice 4/12 (pred1 #4–5) — Restate: Voilà un an que Tex enseigne le français. → Tex ___ depuis un an.',
            promptZh: 'Tex 第 5 题：改写句型（教书：enseigner le français）：',
            answers: ['enseigne le français', 'enseigne le francais'],
            hint: 'enseigner le français.',
            audio: 'Tex enseigne le français depuis un an.',
            explain: '"Tex enseigne le français depuis un an." (And #4: "Bette connaît Tex depuis six mois.")',
            explainZh: 'enseigne le français depuis un an。'
          },
          {
            id: 'd68_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 (pred1 #7) — Restate: Voilà quelques mois que Joe-Bob habite à Austin. → Joe-Bob habite à Austin ___ quelques mois.',
            promptZh: 'Tex 第 7 题：Joe-Bob 住在 Austin “几个月了”：',
            answers: ['depuis'],
            hint: 'for = depuis.',
            audio: 'Joe-Bob habite à Austin depuis quelques mois.',
            explain: '"Joe-Bob habite à Austin depuis quelques mois."',
            explainZh: '填 depuis。'
          },
          {
            id: 'd68_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 (pred1 #9–10) — Restate: Ça fait trois ans que Bette et Tammy sont amies. → Bette et Tammy sont amies depuis ___.',
            promptZh: 'Tex 第 9 题：Bette 和 Tammy 是朋友“已经三年了”：',
            answers: ['trois ans', '3 ans'],
            hint: 'three years = trois ans.',
            audio: 'Bette et Tammy sont amies depuis trois ans.',
            explain: '"Bette et Tammy sont amies depuis trois ans." (Also #8: "Tammy est amoureuse de Tex depuis un an.", #10: "Corey habite à Jester depuis deux mois.")',
            explainZh: '填 depuis 后面的时长：trois ans。'
          },
          {
            id: 'd68_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 (pred1 #11 — Negative!): Ça fait un an que Tex n’est pas allé en France. → Tex ___ en France depuis un an.',
            promptZh: 'Tex 第 11 题（否定没回去过 → 用复合过去时！）：Tex 已经一年没去法国了。',
            answers: ["n'est pas allé", 'n’est pas allé', "n'est pas alle", 'n’est pas alle'],
            hint: 'Negated non-action → passé composé with être!',
            audio: 'Tex n’est pas allé en France depuis un an.',
            explain: 'Non-action ("hasn’t gone for a year") keeps negative passé composé: "n’est pas allé".',
            explainZh: '否定“多久没去过某地”保持复合过去时否定：n’est pas allé。'
          },
          {
            id: 'd68_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 (pred1 #12): Ça fait un jour que Bette a un tatouage. → Bette ___ un tatouage depuis un jour.',
            promptZh: 'Tex 第 12 题：Bette 纹了这个纹身有一整天了（填写现在时动词）。',
            answers: ['a'],
            hint: 'Present tense of avoir (3rd sg.)!',
            audio: 'Bette a un tatouage depuis un jour.',
            explain: '"Bette a un tatouage depuis un jour."',
            explainZh: '现在时动词 a。'
          },
          {
            id: 'd68_d9',
            kind: 'choice',
            prompt: 'How do you say in natural French: "I have been living in Canada since 2023" (and you STILL live here)?',
            promptZh: '“我自 2023 年以来一直住在加拿大”（现在仍住着）最地道正确的法语是：',
            options: [
              'J’habite au Canada depuis 2023.',
              'J’ai habité au Canada depuis 2023.',
              'Il y a 2023 que j’habite au Canada.',
              'J’habiterai au Canada depuis 2023.'
            ],
            answerIdx: 0,
            audio: 'J’habite au Canada depuis 2023.',
            explain: 'Action ongoing into the present MUST use Present Tense + depuis (and "2023" is a date, so il y a...que cannot be used!).',
            explainZh: '持续到现在的动作必须用现在时 + depuis；而且 il y a...que 不能跟具体年份/日期！'
          },
          {
            id: 'd68_d10',
            kind: 'choice',
            prompt: 'Which tense goes in the que-clause here: "Il y aura deux ans demain que je ___ Tammy."?',
            promptZh: '尽管前半句用了将来时 "Il y aura deux ans demain que..."，后面认识（connaître）要用什么时态？',
            options: ['connais (present tense!)', 'connaîtrai (future)', 'ai connu (passé composé)', 'connaissais (imperfect)'],
            answerIdx: 0,
            audio: 'Il y aura deux ans demain que je connais Tammy.',
            explain: 'After "il y aura ... que" / "ça fera ... que", the subordinate verb stays in the PRESENT tense!',
            explainZh: '记住 Tex 原话规则：il y aura...que 后面的动词永远保持**现在时**！'
          },
          {
            id: 'd68_d11',
            kind: 'fib',
            prompt: 'Ask "How long...?" with depuis: Depuis ___ de temps êtes-vous à Montréal ?',
            promptZh: '问对方“你来蒙特利尔多久了？”：Depuis ___ de temps...？',
            answers: ['combien'],
            hint: 'how long = depuis combien de temps.',
            audio: 'Depuis combien de temps êtes-vous à Montréal ?',
            explain: '"Depuis combien de temps... ?" asks for duration; "Depuis quand... ?" asks for a starting point.',
            explainZh: '问多久：Depuis combien de temps...？ 问从什么时候起：Depuis quand...？'
          },
          {
            id: 'd68_d12',
            kind: 'choice',
            prompt: 'What does standalone "Depuis," at the start of a clause mean ("Et depuis, elle pense à lui")?',
            promptZh: '句首加逗号单独用的 "Depuis,"（如 "et depuis, elle n’arrête pas..."）意思是：',
            options: ['Since then', 'During two years', 'Before', 'Right now'],
            answerIdx: 0,
            audio: 'Et depuis, elle n’arrête pas de penser à lui.',
            explain: '"Depuis," at the start of a clause means "Since then,"!',
            explainZh: '独立放在句首加逗号的 Depuis, 相当于英语的 "Since then（打那以后）"。'
          }
        ],
        related: [
          { chapterId: 'ch6_prepositions', pageId: 'pre_6_9', label: '7.9 Time II: depuis + Imperfect & pendant / pour' }
        ]
      },

      /* =========================================================
         PAGE 6.9: TIME II: DEPUIS + IMPERFECT & DEPUIS / PENDANT / POUR
      ========================================================= */
      {
        id: 'pre_6_9',
        code: '7.9',
        group: 'Time (Imperfect & pendant/pour)',
        shortTitle: 'depuis+Imparfait & depuis/pendant/pour',
        title: 'Time (2): depuis with Imparfait ("Had Been...") & Choosing depuis vs. pendant vs. pour',
        titleZh: '时间介词（二）：depuis 搭未完成过去时 + depuis / pendant / pour 三选一铁律',
        estMin: 5,
        summary: 'Complete the French "for / since" system: pair depuis + imparfait to say what HAD BEEN happening when a past event interrupted ("J’attendais depuis 30 min quand..."), plus il y avait / cela faisait ... que; then lock in depuis vs. pendant (completed duration!) vs. pour (future duration) and practice all 12 Tex prep1 + pred2 drills!',
        summaryZh: '解决法语时间“for”三兄弟终极混淆：① 过去某刻“那时已经持续了多久（突然发生某事）” → **imparfait + depuis**（或 Il y avait / Cela faisait... que）；② 区分 **depuis**（至今还在继续，用现在时/未完成过去时）、**pendant**（纯粹一段时长，已结束的复合过去时只能用 pendant！）与 **pour**（预计将来的计划时长，常跟 partir / aller）。含 Tex 原版全题训练。',
        cheatSummary: [
          { label: 'depuis + Imparfait ("Had Been Doing...")', rule: 'Ongoing background in the PAST interrupted by an event → IMPARFAIT + depuis: "Tammy attendait Tex depuis une heure quand il est entré." Also at front: "Il y avait / Cela faisait / Voilà une heure que Tammy attendait..."', ruleZh: '过去时背景延续（“那时已经等了一小时，这时他进来了”）→ **未完成过去时 imparfait + depuis**；句首等价替换改为过去式：Il y avait / Cela faisait + 时长 + que + imparfait！' },
          { label: 'depuis vs. pendant vs. pour ("For")', rule: 'DEPUIS = started in past, STILL going on (present / imparfait). PENDANT = completed duration in the past (passé composé! NEVER use depuis for finished actions!), routine ("tous les jours pendant 1h"), or future stay. POUR = projected future duration after partir / aller ("Je pars pour deux jours").', ruleZh: '三兄弟铁律：**depuis**（现在还在持续/过去那刻还在持续）| **pendant**（已彻底结束的过去时段用 passé composé + pendant！每天固定多久或将来停留期间也可用 pendant）| **pour**（将来计划出发/前往多久：partir / aller + pour + 时长）。' }
        ],
        sections: [
          {
            id: 'pre_depuis_imparfait',
            heading: '1. depuis + Imparfait ("Had Been...") & Tex’s Terrible Day',
            headingZh: '一、depuis + 未完成过去时：过去那刻已经持续了多久',
            lead: 'Just like present + depuis expresses what IS still happening now, imparfait + depuis expresses what HAD BEEN going on in the past up to a past interruption ("when he walked in / when the fire alarm rang").',
            leadZh: '逻辑和现在时一模一样，只是时间轴整体往左推到过去某一点：一直处于背景中的长动作用 **imparfait + depuis**，突然打断的事件用 passé composé：',
            cartoon: {
              src: './assets/tex_cartoons/pred2_attendait.gif',
              alt: 'Tammy attendait Tex depuis une heure quand il est entré',
              caption: 'Ongoing past ("attendait depuis 1h") + sudden event ("quand il est entré"). Or: Il y avait / Cela faisait 1h que...',
              captionZh: '过去背景延续（imparfait + depuis） + 突然打断（passé composé）。'
            },
            dialogue: {
              title: 'Dialogue: Quelle journée catastrophique pour Tex !',
              titleZh: '原版对话：Tex 倒霉的一天（imparfait + depuis 实战）',
              lines: [
                { speaker: 'Tammy', fr: 'Salut, Tex. Ça va ?', en: 'Hi, Tex. How are you?', zh: '嗨 Tex，还好吗？' },
                { speaker: 'Tex', fr: 'Non ! Hier, j’étais à la bibliothèque depuis deux minutes quand l’alarme à incendie a sonné. Je n’ai pas pu travailler ! Ensuite à la cafétéria, je faisais la queue depuis une demi-heure, lorsqu’ils ont annoncé qu’il n’y avait plus de sandwiches ! Je suis allé faire cours sans avoir mangé !', en: 'Not well! Yesterday, I’d been in the library for 2 minutes when the fire alarm rang... Then at the cafeteria, I’d been waiting in line for half an hour when they announced they ran out of sandwiches!', zh: '糟透了！昨天我在图书馆才待了两分钟火警就响了！后来去食堂排队排了半小时，他们宣布三明治卖光了！我饿着肚子去上的课！' },
                { speaker: 'Tammy', fr: 'Pour moi non plus, rien ne va comme je veux ! Depuis lundi je voulais te parler, mais ce matin tu as dit que tu avais trop de travail !', en: 'Nothing’s going my way either! Since Monday I’d been wanting to talk to you, but this morning you said you had too much work!', zh: '我也事事不顺！打周一起我就一直想跟你聊聊，可今早你说工作太多！' }
              ]
            }
          },
          {
            id: 'pre_depuis_pendant_pour_sec',
            heading: '2. The "For" Trio: depuis vs. pendant vs. pour',
            headingZh: '二、英语都叫 "for"，法语怎么分 depuis / pendant / pour？',
            lead: 'This 3-way distinction appears on virtually every TCF grammar/listening exam. Remember: if an event happened in the passé composé and is completely OVER now ("J’ai attendu le bus pendant une heure"), NEVER use depuis—use PENDANT! And with partir / aller for a planned trip ("Je pars pour le week-end"), use POUR!',
            leadZh: '记住三个动作画面就能秒选：① 动作还在继续 → **depuis**；② 动作彻底过去了（passé composé）或强调“那段时间全程” → **pendant**；③ 出发去待几天（partir/aller） → **pour**！',
            cartoon: {
              src: './assets/tex_cartoons/prep1_ensemble.gif',
              alt: 'Nous sortons ensemble depuis un an',
              caption: 'depuis (1 year and still together!) · pendant (waited 1 hour this morning — done!) · pour (leaving for the weekend!).',
              captionZh: '对白一口气用全三个：pars pour le week-end · j’ai attendu pendant une heure · sortons depuis un an！'
            },
            table: {
              headers: ['Preposition', 'When to Use', 'Tex Contrast Examples'],
              rows: [
                { cols: ['depuis', 'Started in past, STILL happening now (present) or then (imparfait)', 'Tex et moi sommes ensemble depuis un an.'], audio: 'Tex et moi sommes ensemble depuis un an.' },
                { cols: ['pendant', 'Completed duration (passé composé!), daily routines, or future stay', 'J’ai attendu Édouard pendant une heure. · Je parle avec Tammy pendant une heure tous les jours.'], audio: 'J’ai attendu Édouard pendant une heure.' },
                { cols: ['pour', 'Intended/projected future duration after partir or aller (present or future tense)', 'Je pars pour le week-end. · Nous allons chez moi pour deux semaines. · Nous partirons pour deux longues semaines.'], audio: 'Je pars pour le week-end. Nous partirons pour deux semaines.' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'd69_d1',
            kind: 'fib',
            prompt: 'Tex Practice 1/12 (prep1 #1): Tex est resté au café ___ une heure. (completed action in passé composé!)',
            promptZh: 'Tex 第 1 题（复合过去时已结束！）：Tex 在咖啡馆待了一个小时。',
            answers: ['pendant'],
            hint: 'Completed past event (est resté) → NEVER depuis!',
            audio: 'Tex est resté au café pendant une heure.',
            explain: 'Completed duration in the passé composé ("est resté") MUST use "pendant"!',
            explainZh: '动作已结束（复合过去时 est resté）绝不能用 depuis，必须填 **pendant**！'
          },
          {
            id: 'd69_d2',
            kind: 'fib',
            prompt: 'Tex Practice 2/12 (prep1 #2): Tex et Tammy sortent ensemble ___ un an. (still going on!)',
            promptZh: 'Tex 第 2 题：Tex 和 Tammy 交往“已经一年了”（现在还在交往）。',
            answers: ['depuis'],
            hint: 'Present tense "sortent" ongoing → depuis.',
            audio: 'Tex et Tammy sortent ensemble depuis un an.',
            explain: 'Action started 1 year ago and continuing in present ("sortent") → "depuis".',
            explainZh: '现在还在持续 → **depuis**。'
          },
          {
            id: 'd69_d3',
            kind: 'fib',
            prompt: 'Tex Practice 3/12 (prep1 #3): Édouard est serveur ___ longtemps. (still a waiter!)',
            promptZh: 'Tex 第 3 题：Édouard 当服务员“好久了”（现在还是）。',
            answers: ['depuis'],
            hint: 'Present tense ongoing → depuis.',
            audio: 'Édouard est serveur depuis longtemps.',
            explain: 'Still working as a waiter now ("est serveur") → "depuis".',
            explainZh: '现在仍在继续 → **depuis**。'
          },
          {
            id: 'd69_d4',
            kind: 'fib',
            prompt: 'Tex Practice 4/12 (prep1 #4): Tammy a connu Tex ___ ses études à Lyon. ("during" her studies!)',
            promptZh: 'Tex 第 4 题：Tammy “在（她于里昂读书）期间”认识了 Tex。',
            answers: ['pendant'],
            hint: 'during a finished past period = pendant.',
            audio: 'Tammy a connu Tex pendant ses études à Lyon.',
            explain: 'Past completed period ("during her studies") → "pendant".',
            explainZh: '在某段已结束时期“期间”填 **pendant**。'
          },
          {
            id: 'd69_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 (prep1 #5): Tex connaît Joe-Bob ___ son arrivée à Austin. ("since" his arrival!)',
            promptZh: 'Tex 第 5 题：Tex “自从”到达奥斯汀起就认识 Joe-Bob（现在还认识）。',
            answers: ['depuis'],
            hint: 'Starting point ("since") with present "connaît" → depuis.',
            audio: 'Tex connaît Joe-Bob depuis son arrivée à Austin.',
            explain: 'Starting point in the past continuing into present → "depuis".',
            explainZh: '从过去起点持续到现在的“自从” → **depuis**。'
          },
          {
            id: 'd69_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 (prep1 #6): Tammy étudie le français ___ cinq ans. (still studying!)',
            promptZh: 'Tex 第 6 题：Tammy 学法语“五年了”（现在还在学）。',
            answers: ['depuis'],
            hint: 'Present tense "étudie" ongoing → depuis.',
            audio: 'Tammy étudie le français depuis cinq ans.',
            explain: 'Ongoing present study → "depuis".',
            explainZh: '仍在学（现在时 étudie）→ **depuis**。'
          },
          {
            id: 'd69_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 (prep1 #7): Tammy a voyagé en France ___ deux mois. (completed past trip!)',
            promptZh: 'Tex 第 7 题：Tammy 以前在法国旅行了两个月（已结束，a voyagé）。',
            answers: ['pendant'],
            hint: 'Finished trip in passé composé → pendant.',
            audio: 'Tammy a voyagé en France pendant deux mois.',
            explain: 'Finished past trip → "pendant".',
            explainZh: '已完成的历史动作（a voyagé）→ **pendant**。'
          },
          {
            id: 'd69_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 (prep1 #8): Tous les jours, Tex reste au café ___ deux heures pour écrire des poèmes.',
            promptZh: 'Tex 第 8 题：“每天”在咖啡馆待上两小时写诗（日常固定时段长度）。',
            answers: ['pendant'],
            hint: 'Daily routine duration ("each day for 2 hours") → pendant!',
            audio: 'Tous les jours Tex reste au café pendant deux heures.',
            explain: 'Each day’s bounded duration (from start to finish of his café session) → "pendant"!',
            explainZh: '每天一次、每次从头到尾持续 2 小时（不是从过去延续至今！），用 **pendant**。'
          },
          {
            id: 'd69_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 (prep1 #9): Tex va aller en Louisiane ___ deux jours. (aller + future plan!)',
            promptZh: 'Tex 第 9 题：Tex 打算去路易斯安那州待两天（计划去多久：aller + ？）。',
            answers: ['pour'],
            hint: 'Future trip duration with "aller" → pour.',
            audio: 'Tex va aller en Louisiane pour deux jours.',
            explain: 'Projected stay after "aller / partir" → "pour".',
            explainZh: '搭配 aller / partir 表计划未来的停留时间，用 **pour**。'
          },
          {
            id: 'd69_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 (prep1 #10): Tex : Tammy et moi partirons chez ses parents ___ deux longues semaines.',
            promptZh: 'Tex 第 10 题：我们要动身去她父母家待上整整两周（partir + ？）。',
            answers: ['pour'],
            hint: 'Future trip after "partir" → pour.',
            audio: 'Nous partirons chez ses parents pour deux longues semaines.',
            explain: '"partir ... pour + duration" → "pour deux longues semaines".',
            explainZh: 'partir 接预期未来停留时长 → **pour**。'
          },
          {
            id: 'd69_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11–12/12 (prep1 #11–12): Tammy : Je suis amoureuse de Tex ___ un an ! / Fiona a étudié ___ cinq heures hier soir.',
            promptZh: '对比第 11–12 题（双空，用 / 分隔）：Tammy 现在仍爱着他（__）；Fiona 昨晚学习了五小时（__）。',
            answers: ['depuis / pendant'],
            hint: '1st (still in love, present): depuis · 2nd (finished last night, passé composé): pendant.',
            audio: 'Je suis amoureuse de Tex depuis un an. Fiona a étudié pendant cinq heures hier soir.',
            explain: 'Ongoing present → "depuis"; finished last night ("a étudié") → "pendant".',
            explainZh: '完美对照：正在延续（je suis amoureuse）填 depuis；昨晚学完结束了（a étudié）填 pendant！'
          },
          {
            id: 'd69_d12',
            kind: 'fib',
            prompt: 'Tex Imparfait Rewrite (pred2): Cela faisait dix minutes que Corey attendait le bus. → Corey ___ le bus depuis dix minutes.',
            promptZh: 'Tex `pred2` 改写：把 Cela faisait dix minutes que 改写为 imparfait + depuis（填写动词）：',
            answers: ['attendait'],
            hint: 'Imparfait of attendre (3rd sg.)!',
            audio: 'Corey attendait le bus depuis dix minutes.',
            explain: 'Past ongoing action → imparfait "attendait" + "depuis dix minutes".',
            explainZh: '过去正持续进行的动作维持未完成过去时 **attendait** + depuis！'
          }
        ],
        related: [
          { chapterId: 'ch6_prepositions', pageId: 'pre_6_10', label: '7.10 Infinitives I: Verbs + à vs. de' }
        ]
      },

      /* =========================================================
         PAGE 6.10: PREPOSITIONS + INFINITIVE I (VERBS + À VS. DE & AVOIR IDIOMS)
      ========================================================= */
      {
        id: 'pre_6_10',
        code: '7.10',
        group: 'Infinitives (à vs. de)',
        shortTitle: 'Verbs + à / de + Infinitive',
        title: 'Prepositions with Infinitives (1): Verbs Taking à vs. de + Avoir Idioms',
        titleZh: '介词接不定式（上）：常考“动词 + à”vs“动词 + de”完整清单与 avoir 习语必用 de',
        estMin: 5,
        summary: 'Whenever a preposition links to a French verb, use the INFINITIVE! Learn Tex’s complete high-frequency lists of 19 verbs + à (aider à, apprendre à, commencer à, réussir à, hésiter à...) vs. 20 verbs + de (essayer de, décider de, oublier de, finir de, rêver de...), plus the 7 avoir-idioms that take de, and solve all 12 Tex pre4 drills!',
        summaryZh: '法语动词后面紧跟另一个动词时（除了能直接加不定式的少数动词外），中间要用介词 **à** 或 **de / d’** 搭桥（而且**后面永远用动词原形**！）。这一页收齐 Tex 原版 **19 个接 à 的动词**、**20 个接 de 的动词**、两个都可以的 **continuer à/de**，以及 **avoir peur / envie / besoin / honte / tort / raison / l’air + DE**！含全部 12 题专练。',
        cheatSummary: [
          { label: '19 Key Verbs + À + Infinitive', rule: 'aider à, s’amuser à, apprendre à, arriver à (manage to), s’attendre à, avoir du mal à, chercher à, commencer à, se décider à, encourager à, s’habituer à, hésiter à, inviter à, se mettre à, se préparer à, renoncer à, réussir à, servir à, tenir à. (And continuer à OR de!)', ruleZh: '重要 à 家族：开始/学习/准备/鼓励/邀请/尝试努力/成功/习惯（commencer à, se mettre à, apprendre à, aider à, inviter à, encourager à, réussir à, hésiter à, avoir du mal à 等）。continuer 可接 à 或 de。' },
          { label: '20 Key Verbs + DE + Infinitive + Avoir Idioms', rule: '(s’)arrêter de, choisir de, conseiller de, se contenter de, décider de, s’efforcer de, essayer de, s’excuser de, finir de, mériter de, oublier de, permettre à qqn de, persuader de, se presser de, promettre de, proposer de, refuser de, rêver de, se soucier de, se souvenir de. PLUS all avoir idioms: avoir l’air / peur / envie / besoin / honte / tort / raison DE + inf.!', ruleZh: '重要 de 家族：停止/选择/建议/决定/尝试/道歉/完成/忘记/允许/承诺/拒绝/梦想/记得，以及**几乎所有 avoir 习语**（l’air de, peur de, envie de, besoin de, honte de, tort de, raison de）。' }
        ],
        sections: [
          {
            id: 'pre_inf_lists',
            heading: '1. Complete Reference: Verbs Taking à vs. Verbs Taking de (+ continuer à/de)',
            headingZh: '一、完整对比清单：必加 à 的动词 vs 必加 de 的动词',
            lead: 'Remember: the verb that follows a preposition is in the INFINITIVE. In many cases, à vs. de before an infinitive is purely idiomatic—group them mentally ("helping/starting/pushing toward something = often à"; "stopping/refusing/avoiding/inner mental feelings = often de") and verify with Tex’s reference table below:',
            leadZh: '记忆小窍门：鼓励、邀请、开始、习惯、向往达成某个目标的动作多用 **à**（方向感）；而停止、拒绝、完成、忘记、答应、做梦等内部决定或退出动作多用 **de**。背下这两栏就能秒杀绝大多数选择题：',
            cartoon: {
              src: './assets/tex_cartoons/pre4_rever.gif',
              alt: 'Tex arrête d’écrire parce qu’il rêve d’embrasser Tammy',
              caption: 'a du mal à trouver (à) vs. arrête d’écrire, rêve d’embrasser (de / d’)!',
              captionZh: 'avoir du mal À trouver（好不容易找到）vs arrêter DE écrire / rêver DE embrasser！'
            },
            table: {
              headers: ['Group', 'Complete Tex Verb + Preposition List'],
              rows: [
                { cols: ['Verb + à + inf. (19)', 'aider à · s’amuser à · apprendre à · arriver à · s’attendre à · avoir du mal à · chercher à · commencer à · se décider à · encourager à · s’habituer à · hésiter à · inviter à · se mettre à · se préparer à · renoncer à · réussir à · servir à · tenir à'], audio: 'Tex a du mal à trouver l’inspiration. Il réussit à écrire.' },
                { cols: ['Either à OR de', 'continuer à / continuer de (to continue to)'], audio: 'Il continue à écrire. Il continue de rêver.' },
                { cols: ['Verb + de + inf. (20)', '(s’)arrêter de · choisir de · conseiller de · se contenter de · décider de · s’efforcer de · essayer de · s’excuser de · finir de · mériter de · oublier de · permettre (à qqn) de · persuader de · se presser de · promettre de · proposer de · refuser de · rêver de · se soucier de · se souvenir de'], audio: 'Tex arrête d’écrire parce qu’il rêve d’embrasser Tammy.' }
              ]
            }
          },
          {
            id: 'pre_avoir_idioms_de',
            heading: '2. Avoir Expressions + de + Infinitive (All 7 High-Frequency Idioms)',
            headingZh: '二、avoir 惯用语家族：一律接 de (d’) + 动词原形',
            lead: 'Almost every common idiomatic expression with avoir takes DE (or d’ before a vowel/mute h) before an infinitive:',
            leadZh: '只要看见 avoir peur / envie / besoin / honte / tort / raison / l’air，后面接动作时几乎清一色用 **de / d’**：',
            cartoon: {
              src: './assets/tex_cartoons/pre4_honte.gif',
              alt: 'Tex a honte d’être américain',
              caption: 'a l’air de · a peur de · a envie de · a besoin de · a honte d’ · a tort d’ · a raison d’!',
              captionZh: '7 个最实用口语/写作句：好像/害怕/想/需要/羞耻/错了/对了 + de (d’) + 动词原形。'
            },
            examples: [
              { fr: 'Tex a l’air de rêver. · Tex a peur de se réveiller.', en: 'Tex seems to be dreaming. · Tex is afraid of waking up.', zh: '好像在……（avoir l’air de）；害怕做……（avoir peur de）。', tag: 'l’air de / peur de' },
              { fr: 'Tex a envie de dormir. · Tex a besoin de se reposer.', en: 'Tex feels like sleeping. · Tex needs to rest.', zh: '很想做……（avoir envie de）；需要……（avoir besoin de）。', tag: 'envie de / besoin de' },
              { fr: 'Tex a honte d’être américain. · Tex a tort d’être susceptible. · Tex a raison d’être fier.', en: 'Tex is ashamed of being American. · wrong to be touchy. · right to be proud.', zh: '以……为耻（honte d’）；错了（tort d’）；有道理（raison d’）。', tag: 'honte / tort / raison' }
            ]
          }
        ],
        drills: [
          {
            id: 'd610_d1',
            kind: 'fib',
            prompt: 'Tex Practice 1/12 (pre4 #1): Tex se met ___ travailler tous les soirs à 7 heures. (à / de)',
            promptZh: 'Tex 第 1 题：每晚 7 点“开始”学习（se mettre ___）：',
            answers: ['à', 'a'],
            hint: 'se mettre à = start to.',
            audio: 'Tex se met à travailler tous les soirs à sept heures.',
            explain: '"se mettre à" + infinitive = to start doing something.',
            explainZh: '固定搭配：se mettre **à** + 不定式（开始做某事）。'
          },
          {
            id: 'd610_d2',
            kind: 'fib',
            prompt: 'Tex Practice 2/12 (pre4 #2): Tex et Tammy s’amusent ___ écouter de la musique cadienne. (à / de)',
            promptZh: 'Tex 第 2 题：乐在其中地听卡真音乐（s’amuser ___）：',
            answers: ['à', 'a'],
            hint: 's’amuser à = to have fun doing.',
            audio: 'Tex et Tammy s’amusent à écouter de la musique cadienne.',
            explain: '"s’amuser à" + infinitive (remember "à" does NOT elide before a vowel!).',
            explainZh: 's’amuser **à** + 不定式（注意：介词 à 在元音前不省音！永远写 à écouter）。'
          },
          {
            id: 'd610_d3',
            kind: 'fib',
            prompt: 'Tex Practice 3/12 (pre4 #3): Tex aide ses étudiants ___ apprendre le français. (à / de)',
            promptZh: 'Tex 第 3 题：帮助学生学习法语（aider qqn ___）：',
            answers: ['à', 'a'],
            hint: 'aider à = help to.',
            audio: 'Tex aide ses étudiants à apprendre le français.',
            explain: '"aider quelqu’un à faire quelque chose".',
            explainZh: 'aider quelqu’un **à** + 不定式。'
          },
          {
            id: 'd610_d4',
            kind: 'fib',
            prompt: 'Tex Practice 4/12 (pre4 #4): Tammy invite ses amis ___ dîner chez elle. (à / de)',
            promptZh: 'Tex 第 4 题：邀请朋友们来家里吃晚饭（inviter qqn ___）：',
            answers: ['à', 'a'],
            hint: 'inviter à = invite to.',
            audio: 'Tammy invite ses amis à dîner chez elle.',
            explain: '"inviter quelqu’un à + inf."',
            explainZh: 'inviter quelqu’un **à** + 不定式。'
          },
          {
            id: 'd610_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 (pre4 #5): Tex encourage ses étudiants ___ parler français. (à / de)',
            promptZh: 'Tex 第 5 题：鼓励学生说法语（encourager qqn ___）：',
            answers: ['à', 'a'],
            hint: 'encourager à = encourage to.',
            audio: 'Tex encourage ses étudiants à parler français.',
            explain: '"encourager quelqu’un à + inf."',
            explainZh: 'encourager quelqu’un **à** + 不定式。'
          },
          {
            id: 'd610_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 (pre4 #6): Édouard a du mal ___ comprendre les habitudes culinaires des Américains. (à / de)',
            promptZh: 'Tex 第 6 题：Édouard 很难理解美国人的饮食习惯（avoir du mal ___）：',
            answers: ['à', 'a'],
            hint: 'avoir du mal à = find it difficult to.',
            audio: 'Édouard a du mal à comprendre les Américains.',
            explain: '"avoir du mal à + inf." (exception among avoir-noun idioms—uses à!).',
            explainZh: '注意例外！虽然多数 avoir 习语接 de，但 **avoir du mal**（觉得吃力/难以做到）必须接 **à**！'
          },
          {
            id: 'd610_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 (pre4 #7): Tex promet ___ rendre visite à Paw-Paw. (à / de)',
            promptZh: 'Tex 第 7 题：Tex 答应去看望 Paw-Paw（promettre ___）：',
            answers: ['de'],
            hint: 'promettre de = promise to.',
            audio: 'Tex promet de rendre visite à Paw-Paw.',
            explain: '"promettre de + inf."',
            explainZh: 'promettre **de** + 不定式。'
          },
          {
            id: 'd610_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 (pre4 #8): Bette essaie ___ draguer Tex. (à / de)',
            promptZh: 'Tex 第 8 题：Bette 试图搭讪 Tex（essayer ___）：',
            answers: ['de'],
            hint: 'essayer de = try to.',
            audio: 'Bette essaie de draguer Tex.',
            explain: '"essayer de + inf."',
            explainZh: 'essayer **de** + 不定式（注意区别：chercher **à**，但 essayer **de**）。'
          },
          {
            id: 'd610_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 (pre4 #9): Édouard refuse ___ manger des hamburgers. (à / de)',
            promptZh: 'Tex 第 9 题：Édouard 拒绝吃汉堡（refuser ___）：',
            answers: ['de'],
            hint: 'refuser de = refuse to.',
            audio: 'Édouard refuse de manger des hamburgers.',
            explain: '"refuser de + inf."',
            explainZh: 'refuser **de** + 不定式。'
          },
          {
            id: 'd610_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 (pre4 #10 — Watch Elision!): Tex a honte ___être américain. (d’ / à)',
            promptZh: 'Tex 第 10 题（注意省音！）：Tex 以自己是个美国人为耻（avoir honte ___）：',
            answers: ["d'", 'd’'],
            hint: 'avoir honte de + vowel → d’!',
            audio: 'Tex a honte d’être américain.',
            explain: '"avoir honte de" before vowel être → "d’être".',
            explainZh: 'avoir honte 接 **de**，遇元音 être 缩合为 **d’**。'
          },
          {
            id: 'd610_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 (pre4 #11): Édouard propose à ses amis ___ dîner au restaurant français. (à / de)',
            promptZh: 'Tex 第 11 题：Édouard 提议大家去法餐馆吃晚饭（proposer à qqn ___）：',
            answers: ['de'],
            hint: 'proposer de = propose to.',
            audio: 'Édouard propose à ses amis de dîner au restaurant français.',
            explain: '"proposer (à quelqu’un) de faire quelque chose".',
            explainZh: 'proposer à quelqu’un **de** + 不定式。'
          },
          {
            id: 'd610_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 (pre4 #12 — Watch Elision!): Joe-Bob oublie toujours ___étudier. (d’ / à)',
            promptZh: 'Tex 第 12 题（注意省音！）：Joe-Bob 总是忘记学习（oublier ___）：',
            answers: ["d'", 'd’'],
            hint: 'oublier de + vowel → d’!',
            audio: 'Joe-Bob oublie toujours d’étudier.',
            explain: '"oublier de" before étudier → "d’étudier".',
            explainZh: 'oublier **de** 遇元音缩合为 **d’**。'
          }
        ],
        related: [
          { chapterId: 'ch6_prepositions', pageId: 'pre_6_11', label: '7.11 Infinitives II: Adj. + de/à, pour/sans/avant de & après' }
        ]
      },

      /* =========================================================
         PAGE 6.11: INFINITIVES II (ADJ. + DE/À, POUR/AVANT DE/SANS/PAR & APRÈS PAST INF.)
      ========================================================= */
      {
        id: 'pre_6_11',
        code: '7.11',
        group: 'Infinitives (Adj. & Clauses)',
        shortTitle: 'Adj. + de/à, sans/avant de, après',
        title: 'Infinitives (2): Adjectives + de vs. à, pour / avant de / sans / par & après Past Infinitive',
        titleZh: '介词接不定式（下）：形容词后 de vs à、pour/avant de/sans/par 句式与 après 过去不定式',
        estMin: 4,
        summary: 'Finish Prepositions cleanly at B1-ready precision: tell when adjectives/nouns take DE ("content de voir") vs. passive/functional À ("difficile à dire / bonne à boire"), use pour/afin de, avant de, sans (+ -ing), commencer/finir par, and build "après avoir/être + past participle" (with être agreement!).',
        summaryZh: '掌握高分写作与阅读的关键加分句型：① **形容词 + de vs à**（个人情绪/看法一般接 **de**，如 content de voir；事物被动/功能特点如“适合饮用/很难说”接 **à**，如 bonne à boire, difficile à dire）；② **pour / afin de（为了）、avant de（在…之前）、sans（没…就…）、commencer/finir par（以…开始/告终）**；③ **après + avoir / être + 过去分词**（表示做完某事之后，注意 être 要配合！）。',
        cheatSummary: [
          { label: 'Adjectives/Nouns: de vs. Passive à', rule: 'Default: adj/noun + DE + inf ("content de voir", "il est difficile de comprendre"). Passive/functional sense after specific noun: À + inf ("cette eau est bonne à boire", "ce livre est amusant à lire", "c’est triste à voir / difficile à dire").', ruleZh: '① 主语是人表达情绪（content de）或泛指（il est + 形容词 + de）用 **de**；② 强调前面具体东西“用来被…… / 读起来……（被动功能义）”时用 **à**（eau bonne à boire 饮用水、c’est difficile à dire 真难说）。' },
          { label: 'pour / avant de / sans / par / après', rule: 'pour / afin de (in order to) · avant de (before doing) · sans (without doing — NOT sans de!) · commencer/finir par (start/end up by doing). APRÈS takes the PAST INFINITIVE: après + avoir/être + past participle (with être agreement: "Après être devenue...").', ruleZh: '记住 **sans** 后面直接接不定式（不加 de！）；**pour / avant de / afin de / par** 后也接原形。唯有 **après（在……之后）** 必须接“**过去不定式**”：après avoir rêvé / après être devenue（带 être 时过去分词要性数配合！）。' }
        ],
        sections: [
          {
            id: 'pre_adj_de_a',
            heading: '1. Adjectives/Nouns + Infinitive: Default "de" vs. Functional/Passive "à"',
            headingZh: '一、形容词/名词接不定式：常规用 de vs 事物“被动功能感”用 à',
            lead: 'Most adjectives and nouns take DE before an infinitive ("Tex est content de voir Tammy"). However, when the adjective describes a passive quality or practical function of the subject ("water good TO BE drunk", "hard TO BE said"), French uses À + infinitive!',
            leadZh: '看清下面两类对比，以后再也不会搞混 C’est facile à faire 和 Il est facile de faire le devoir：',
            examples: [
              { fr: 'Tex est content de voir Tammy dans ses rêves.', en: 'Tex is glad to see Tammy in his dreams. (personal emotion → de)', zh: '人的感受 + de + 动词原形（content de, heureux de, triste de）。', tag: 'Emotion → de' },
              { fr: 'Cette eau est bonne à boire. · Ce livre est amusant à lire. · C’est triste à voir. · C’est difficile à dire.', en: 'Drinking water (good to drink). · Fun book to read. · Sorry sight to see. · Difficult to say. (passive/functional → à)', zh: '具体事物的功能或被动感知（喝起来/读起来/看起来/说起来……）用 **à**！', tag: 'Passive Function → à' }
            ]
          },
          {
            id: 'pre_clause_infs',
            heading: '2. pour / afin de, avant de, sans, par & après + Past Infinitive',
            headingZh: '二、四大高频连句介词 + après 过去不定式（B1/CLB 7 写作神器）',
            lead: 'English often translates "avant de" and "sans" with "-ing" ("before going to sleep", "without dreaming")—in French, ALL of these take the INFINITIVE! Notice especially "après": because the action happened BEFORE the main verb, French uses après + avoir/être + past participle (making sure to agree if using être!).',
            leadZh: '英语说 without dreaming / before going to sleep / after dreaming 都要用 -ing，法语这里统统用**不定式（原形或过去不定式）**——特别适合用在 TCF 书面写作里拿高分：',
            table: {
              headers: ['Preposition', 'English Equivalent', 'Tex Example'],
              rows: [
                { cols: ['pour / afin de + inf.', 'to / in order to (purpose)', 'Tex s’allonge sur son lit pour lire.'], audio: 'Tex s’allonge sur son lit pour lire.' },
                { cols: ['avant de + inf.', 'before ...-ing', 'Avant de s’endormir, Tex lit toujours un poème.'], audio: 'Avant de s’endormir, Tex lit un poème.' },
                { cols: ['sans + inf. (NO de!)', 'without ...-ing', 'Il ne peut pas dormir sans rêver de Tammy.'], audio: 'Il ne peut pas dormir sans rêver de Tammy.' },
                { cols: ['commencer / finir par + inf.', 'start / end up by ...-ing', 'Il finit par rêver de Tammy toute la nuit.'], audio: 'Il finit par rêver de Tammy toute la nuit.' },
                { cols: ['après + avoir/être + PP', 'after having done...', 'Après avoir rêvé de Tammy, Tex retrouve son inspiration. · Après être devenue la muse de Tex, Tammy est passée à la postérité !'], audio: 'Après avoir rêvé de Tammy. Après être devenue sa muse.' }
              ]
            },
            quickCheck: {
              prompt: 'Pick the ONLY grammatically correct sentence for "After arriving in Montreal, Tammy called Tex":',
              promptZh: '选出“到达（arriver 用 être！）蒙特利尔之后，Tammy 给 Tex 打了电话”唯一正确的一句：',
              options: [
                'Après être arrivée à Montréal, Tammy a téléphoné à Tex.',
                'Après arriver à Montréal, Tammy a téléphoné à Tex.',
                'Après avoir arrivé à Montréal, Tammy a téléphoné à Tex.',
                'Après être arrivé à Montréal, Tammy a téléphoné à Tex.'
              ],
              answerIdx: 0,
              explain: 'après takes PAST INFINITIVE (être arrivée, agreeing feminine with Tammy!), NOT bare infinitive *arriver*!',
              explainZh: '两个考点一次考到：① après 后要用过去不定式 **être arrivé**；② Tammy 是女性，配合加 e → **Après être arrivée**！'
            }
          }
        ],
        drills: [
          {
            id: 'd611_d1',
            kind: 'choice',
            prompt: 'Complete: "C’est un livre très intéressant ___ lire." (functional/passive sense!)',
            promptZh: '这书“读起来很有趣”（具体某本书的被动功能评价）：',
            options: ['à', 'de', 'pour', 'sans'],
            answerIdx: 0,
            audio: 'C’est un livre très intéressant à lire.',
            explain: 'Adjective describing a specific concrete noun in passive sense ("a book interesting TO read") → "à".',
            explainZh: '形容具体某个名词“读起来/喝起来/看起来……”用 **à**：intéressant à lire。'
          },
          {
            id: 'd611_d2',
            kind: 'choice',
            prompt: 'Complete: "Je suis vraiment content ___ vous rencontrer." (personal emotion!)',
            promptZh: '人作主语表达开心：“我很高兴见到你们。”',
            options: ['de', 'à', 'par', 'pour'],
            answerIdx: 0,
            audio: 'Je suis vraiment content de vous rencontrer.',
            explain: 'Personal emotion adjectives ("content, heureux, triste, fier") take "de" + infinitive.',
            explainZh: '个人情感形容词后接 **de**：content de vous rencontrer。'
          },
          {
            id: 'd611_d3',
            kind: 'choice',
            prompt: 'Which is RIGHT for "She left without saying goodbye"?',
            promptZh: '“她没说再见就走了”（without + -ing）：',
            options: [
              'Elle est partie sans dire au revoir.',
              'Elle est partie sans de dire au revoir.',
              'Elle est partie sans disant au revoir.',
              'Elle est partie avant dire au revoir.'
            ],
            answerIdx: 0,
            audio: 'Elle est partie sans dire au revoir.',
            explain: '"sans" directly takes the infinitive (NO "de", and NOT a present participle)!',
            explainZh: 'sans 后面既不加 de，也不用现在分词，直接加动词原形：sans dire au revoir！'
          },
          {
            id: 'd611_d4',
            kind: 'choice',
            prompt: 'Which preposition completes "Il a fini ___ accepter" ("He ended up agreeing")?',
            promptZh: '“他最终还是同意了”（finir + ？ + 不定式表“最终以……告终”）：',
            options: ['par (finir par)', 'de (finir de)', 'à', 'sans'],
            answerIdx: 0,
            audio: 'Il a fini par accepter.',
            explain: '"finir par + inf." = to end up doing something (vs. "finir de + inf." = to finish doing an activity!).',
            explainZh: '重要区分：**finir par** = 最终还是/结果（end up）；**finir de** = 做完手头的事（finish）。'
          },
          {
            id: 'd611_d5',
            kind: 'fib',
            prompt: 'Before doing: Avant ___’endormir, Tex lit toujours un poème. (watch s’!) ',
            promptZh: '句首连词填空：“在入睡之前（avant ___ + s’endormir）”（填 1 个介词）：',
            answers: ['de'],
            hint: 'before + inf. = avant de.',
            audio: 'Avant de s’endormir, Tex lit toujours un poème.',
            explain: 'Remember: "avant" (before a noun) vs. "avant de" (before an infinitive!).',
            explainZh: '加动词原形必须用完整形式 **avant de**！'
          },
          {
            id: 'd611_d6',
            kind: 'fib',
            prompt: 'Purpose ("in order to"): Tex s’allonge sur son lit ___ lire. (pour / par / sans)',
            promptZh: '表达目的“为了看书”：',
            answers: ['pour', 'afin de'],
            hint: 'in order to = pour.',
            audio: 'Tex s’allonge sur son lit pour lire.',
            explain: '"pour" (or more formal "afin de") expresses purpose before an infinitive.',
            explainZh: '表示目的“为了……”用 **pour**（书面或强调也可用 afin de）。'
          },
          {
            id: 'd611_d7',
            kind: 'fib',
            prompt: 'Passive/functional adj.: Cette eau est bonne ___ boire !',
            promptZh: '功能感搭配：“这水适合饮用 / 能喝”：',
            answers: ['à', 'a'],
            hint: 'bonne ___ boire = good to drink.',
            audio: 'Cette eau est bonne à boire.',
            explain: '"bonne à boire", "facile à faire", "difficile à dire" take "à".',
            explainZh: '直接评价某个具体物体的功用：“能喝/好吃/难说”用 **à**。'
          },
          {
            id: 'd611_d8',
            kind: 'fib',
            prompt: 'Past infinitive after "après" (avoir verb): Après ___ rêvé de Tammy, Tex retrouve son inspiration.',
            promptZh: '过去不定式（rêver 用 avoir 作助动词）：在梦见 Tammy 之后……',
            answers: ['avoir'],
            hint: 'après + infinitive of avoir + past participle.',
            audio: 'Après avoir rêvé de Tammy, Tex retrouve son inspiration.',
            explain: '"Après + avoir + past participle" = After having dreamed...',
            explainZh: 'après 后接过去不定式：après **avoir** rêvé。'
          },
          {
            id: 'd611_d9',
            kind: 'fib',
            prompt: 'Past infinitive with être & feminine agreement (Tammy!): Après être ___ la muse de Tex, Tammy est passée à la postérité !',
            promptZh: '注意 être 过去不定式的性数配合：成了 Tex 的缪斯（devenir 的过去分词，配合女性 Tammy）：',
            answers: ['devenue'],
            hint: 'devenir → devenu + -e for Tammy!',
            audio: 'Après être devenue la muse de Tex, Tammy est passée à la postérité !',
            explain: 'Because "devenir" uses être and Tammy is feminine, "devenu" agrees → "devenue".',
            explainZh: 'devenir 用 être 作助动词，且主语 Tammy 为阴性，所以必须配合加 e 写作 **devenue**！'
          },
          {
            id: 'd611_d10',
            kind: 'fib',
            prompt: 'Notice the "il est" impersonal contrast vs. concrete subject: C’est difficile ___ dire (concrete!), mais il est facile ___ comprendre ce cours.',
            promptZh: '终极双空对照（填 à 或 de，用 / 分隔）：具体事物“很难说”（__）vs 形式主语“理解本课很容易”（__）。',
            answers: ['à / de', 'a / de'],
            hint: 'C’est + adj + À + inf. vs. Il est + adj + DE + inf.',
            audio: 'C’est difficile à dire, mais il est facile de comprendre ce cours.',
            explain: '"C’est + adj + à + inf." (referring back to something mentioned) vs. "Il est + adj + de + inf." (impersonal intro)!',
            explainZh: '口诀：**C’est** + 形容词 + **à** + 不定式（指代前文）；**Il est** + 形容词 + **de** + 不定式（引导下文内容）！'
          }
        ],
        related: [
          { chapterId: 'ch6_prepositions', pageId: 'pre_6_1', label: 'Back to 7.1 Intro to Prepositions' },
          { chapterId: 'ch5_negation', pageId: 'neg_5_1', label: 'Review Ch 6 Negation' }
        ]
      }
    ]
  });
})();
