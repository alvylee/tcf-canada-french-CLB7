(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch5b_verbs_irregular',
    code: 'Ch 5B',
    level: 'A1–A2',
    category: 'verbs_b',
    icon: '🔑',
    title: 'Verbs II: Core Irregular Verbs & Idioms',
    titleZh: '第五章 B · 核心高频不规则动词与习语',
    subtitle: 'Tex-style slow-paced deep mastery: 12 bite-sized pages covering French’s essential irregular pillars (être, avoir + 12 idioms & il y a, aller, faire + weather/sports/chores), venir family, boire/croire/voir, savoir vs. connaître, and dire/lire/écrire — with 15 original Tex cartoons & 140 drills.',
    subtitleZh: '对标 Tex 第五章“高频不规则动词”（10 篇原站精髓）拆分为 12 个轻松小页：法语四大支柱动词（être、avoir 与 il y a / 12 个习语、aller、faire 与天气/运动/家务表达）、venir 家族、boire / croire / voir、核心易混 savoir vs. connaître，以及 dire / lire / écrire，配 15 张原版卡通与 140 题专练。',
    pages: [
      /* =========================================================
         PAGE 5B.1: ÊTRE (virr1.html)
      ========================================================= */
      {
        id: 'v5b_1',
        code: '5B.1',
        group: 'Core Pillars: être & avoir',
        shortTitle: 'être ("to be") & Liaison',
        title: 'être ("to be"): Irregular Present Tense, vous êtes Liaison & Compound Auxiliary',
        titleZh: '核心支柱动词 ①：être（是）不规则变位、vous êtes 联诵与助动词角色',
        estMin: 4,
        summary: 'Master être in the present tense (je suis, tu es, il/elle/on est, nous sommes, vous êtes, ils/elles sont; past participle: été), hear the /z/ liaison in "vous êtes", distinguish "c’est / ce sont" (identifying people/things), and recognize être as a key compound-tense auxiliary.',
        summaryZh: '背熟法语最核心的不规则动词 **être**（`suis / es / est / sommes / êtes / sont`，过去分词 **été**）。特别注意 **vous êtes** 中间有清晰的 **/z/** 联诵；另外 **être** 既是常见介绍句型 `c’est / ce sont` 的核心，也是反身动词和部分位移类动词在复合过去时中的助动词！',
        cheatSummary: [
          { label: 'Present Tense of être (p.p. été)', rule: 'je suis · tu es · il/elle/on est · nous sommes · vous êtes (/vu zɛt/ liaison!) · ils/elles sont.', ruleZh: '现在时六格：je suis, tu es, il/elle/on est, nous sommes, vous êtes（读 /vu zɛt/！）, ils/elles sont；过去分词 été。' },
          { label: 'Two Special Roles', rule: '1) C’est / Ce sont introduces/describes people & nouns. 2) être acts as compound auxiliary (passé composé of motion verbs & all pronominals).', ruleZh: '两大延伸功用：① C’est / Ce sont 介绍人物与事物；② 复合时态（如 passé composé 与愈过去时）里的关键助动词。' }
        ],
        sections: [
          {
            id: 'v5b1_paradigm',
            heading: '1. Paradigm of "être" & Liaison in "vous êtes"',
            headingZh: '一、être 六格变位与 vous êtes 联诵',
            lead: 'Listen closely to "vous êtes": the normally silent -s of vous links as /z/ onto the vowel ê! Note also that "vous êtes" is one of ONLY THREE French verbs whose vous form does NOT end in -ez (alongside vous faites and vous dites).',
            leadZh: '记住：法语唯独三个常用动词的 vous 形式不以 -ez 结尾——vous êtes、vous faites、vous dites！其中 vous êtes 还必须读出 /z/ 联诵：',
            cartoon: {
              src: './assets/tex_cartoons/virr1joe.gif',
              alt: 'Edouard: Mais non, Joe-Bob, tu n’es pas un tatou !',
              caption: 'Edouard: Mais non, Joe-Bob, tu n’es pas un tatou ! Toi, tu es un écureuil et moi, je suis un escargot français.',
              captionZh: 'Edouard：Joe-Bob，你不是犰狳（tu n’es pas），你是松鼠（tu es），我是法国蜗牛（je suis）！'
            },
            table: {
              headers: ['Person', 'Singular (être — p.p. été)', 'Plural (être)', 'Pronunciation & Rule'],
              rows: [
                { cols: ['1st', 'je suis (I am)', 'nous sommes (we are)', 'Note: je suis = I am OR I follow (suivre)!'], audio: 'je suis, nous sommes' },
                { cols: ['2nd', 'tu es (you are)', 'vous êtes (you are)', 'vous êtes → mandatory /z/ liaison!'], audio: 'tu es, vous êtes' },
                { cols: ['3rd', 'il/elle/on est (he/she/one is)', 'ils/elles sont (they are)', 'No liaison between est and a consonant; ils sont (/il sɔ̃/) vs. ils ont (/il zɔ̃/)!'], audio: 'il est, ils sont' }
              ]
            }
          },
          {
            id: 'v5b1_dialogue',
            heading: '2. Edouard & Joe-Bob Dialogue + Compound Auxiliary Role',
            headingZh: '二、角色对话与助动词身份',
            lead: 'See how Tex uses être to introduce species/nationalities (c’est / ce sont) and prepare for compound tenses (passé composé with être, pronominal verbs, plus-que-parfait):',
            leadZh: '看 Edouard 与 Tex、Tammy 的身份对话，记住“是某种职业/身份”通常不加不定冠词（je suis étudiante）：',
            cartoon: {
              src: './assets/tex_cartoons/virr1tex.gif',
              alt: 'Tex est un tatou. Tex et Tammy sont des tatous.',
              caption: 'Tex est un tatou. Tex et Tammy sont des tatous. Toi et moi, nous ne sommes pas des tatous.',
              captionZh: 'Tex 是一只犰狳（est）；Tex 和 Tammy 都是犰狳（sont）；你和我都不是犰狳（nous ne sommes pas）。'
            },
            examples: [
              { fr: 'Edouard : Mais non, Joe-Bob, tu n’es pas un tatou !', en: 'Edouard: But no, Joe-Bob, you are not an armadillo!', zh: 'Edouard：哎呀，Joe-Bob，你可不是犰狳！', tag: 'tu n’es pas' },
              { fr: 'Tex est un tatou. Tex et Tammy sont des tatous.', en: 'Tex is an armadillo. Tex and Tammy are armadillos.', zh: 'Tex 是犰狳，Tex 和 Tammy 都是犰狳。', tag: 'est / sont' },
              { fr: 'Toi et moi, nous ne sommes pas des tatous. Toi, tu es un écureuil et moi, je suis un escargot français.', en: 'You and I, we aren’t armadillos. You’re a squirrel and I’m a French snail.', zh: '你我（toi et moi → nous sommes）不是犰狳：你是松鼠，我是法国蜗牛。', tag: 'toi et moi → nous' }
            ],
            quickCheck: {
              prompt: 'How do you hear the difference between "ils sont" (être) and "ils ont" (avoir)?',
              promptZh: '听力里怎么把 "ils sont"（他们是）和 "ils ont"（他们有）区分开来？',
              options: [
                '"ils sont" has a sharp voiceless /s/ (/il sɔ̃/); "ils ont" has a voiced /z/ liaison (/il zɔ̃/)!',
                'Both are pronounced identically.',
                '"ils sont" uses /z/ liaison and "ils ont" uses /s/.',
                '"ils ont" ends in a clear /t/.'
              ],
              answerIdx: 0,
              explain: 'Voiceless /s/ = sont (être); buzzing voiced /z/ liaison = ont (avoir)! A super high-frequency TCF listening contrast.',
              explainZh: '清音 /s/ 是 sont（是）；浊音嗡嗡响的 /z/ 联诵才是 ils ont（有）！这是 TCF 听力超高频辨音点。'
            }
          }
        ],
        drills: [
          {
            id: 'd5b1_d1',
            kind: 'fib',
            prompt: 'Edouard ___ un escargot français. (être)',
            promptZh: 'Tex 原题 #1：Edouard 是一只法国蜗牛（être）：',
            answers: ['est'],
            hint: '3rd person singular.',
            audio: 'Edouard est un escargot français.',
            explain: 'Edouard (= il) est.',
            explainZh: '第三人称单数：est。'
          },
          {
            id: 'd5b1_d2',
            kind: 'fib',
            prompt: 'Tex et Tammy ___ des tatous. (être)',
            promptZh: 'Tex 原题 #2：Tex 和 Tammy 是犰狳（être）：',
            answers: ['sont'],
            hint: '3rd person plural.',
            audio: 'Tex et Tammy sont des tatous.',
            explain: 'Tex et Tammy (= ils) sont.',
            explainZh: '第三人称复数：sont。'
          },
          {
            id: 'd5b1_d3',
            kind: 'fib',
            prompt: 'Les étudiants de Tex : Nous ne ___ pas français. (être)',
            promptZh: 'Tex 原题 #3：Tex 的学生们说“我们不是法国人”（être）：',
            answers: ['sommes'],
            hint: 'nous form of être.',
            audio: 'Nous ne sommes pas français.',
            explain: 'nous sommes.',
            explainZh: 'nous 对应 sommes。'
          },
          {
            id: 'd5b1_d4',
            kind: 'fib',
            prompt: 'Tammy : Je ___ étudiante à l’université du Texas. (être)',
            promptZh: 'Tex 原题 #4：Tammy 说“我是德克萨斯大学的女学生”（être）：',
            answers: ['suis'],
            hint: 'je form of être.',
            audio: 'Je suis étudiante à l’université du Texas.',
            explain: 'je suis.',
            explainZh: 'je 对应 suis。'
          },
          {
            id: 'd5b1_d5',
            kind: 'fib',
            prompt: 'Joe-Bob demande : Tu ___ américain ? (être)',
            promptZh: 'Tex 原题 #5：Joe-Bob 问：“你是美国人吗？”（être）：',
            answers: ['es'],
            hint: 'tu form of être (NO -t!).',
            audio: 'Tu es américain ?',
            explain: 'tu es (while il/elle is est).',
            explainZh: 'tu 对应 es（注意别写成 est！）。'
          },
          {
            id: 'd5b1_d6',
            kind: 'fib',
            prompt: 'Tex, vous ___ professeur ? (être)',
            promptZh: 'Tex 原题 #6：Tex，您是教授吗（être）：',
            answers: ['êtes', 'etes'],
            hint: 'vous form has circumflex ê and does NOT end in -ez!',
            audio: 'Tex, vous êtes professeur ?',
            explain: 'vous êtes (remember /z/ liaison!).',
            explainZh: 'vous 对应 êtes（非 -ez 词尾三大特殊动词之一）。'
          },
          {
            id: 'd5b1_d7',
            kind: 'fib',
            prompt: 'Joe-Bob : Tu ___ d’où ? (être)',
            promptZh: 'Tex 原题 #7：你来自哪里（être）：',
            answers: ['es'],
            hint: 'tu es.',
            audio: 'Tu es d’où ?',
            explain: 'tu es d’où ? = Where are you from?',
            explainZh: 'tu es d’où = 你是哪里人？'
          },
          {
            id: 'd5b1_d8',
            kind: 'fib',
            prompt: 'Tex : Je ___ intelligent. (être)',
            promptZh: 'Tex 原题 #8：Tex 自夸“我很聪明”（être）：',
            answers: ['suis'],
            hint: 'je suis.',
            audio: 'Je suis intelligent.',
            explain: 'je suis.',
            explainZh: 'je suis。'
          },
          {
            id: 'd5b1_d9',
            kind: 'fib',
            prompt: 'Joe-Bob et Corey, vous n’___ pas des dentistes ! (être)',
            promptZh: 'Tex 原题 #9：Joe-Bob 和 Corey，你们可不是牙医（只需填动词本身）：',
            answers: ['êtes', 'etes'],
            hint: 'verb only after vous n’!',
            audio: 'Joe-Bob et Corey, vous n’êtes pas des dentistes !',
            explain: 'vous n’êtes pas.',
            explainZh: '因为前文已给出 n’，空内只填 êtes。'
          },
          {
            id: 'd5b1_d10',
            kind: 'fib',
            prompt: 'Joe-Bob et Corey ___ américains. (être)',
            promptZh: 'Tex 原题 #10：Joe-Bob 和 Corey 是美国人（être）：',
            answers: ['sont'],
            hint: '3rd person plural.',
            audio: 'Joe-Bob et Corey sont américains.',
            explain: 'ils sont.',
            explainZh: '第三人称复数：sont。'
          },
          {
            id: 'd5b1_d11',
            kind: 'fib',
            prompt: 'Joe-Bob ___ de College Station. (être)',
            promptZh: 'Tex 原题 #11：Joe-Bob 来自 College Station（être）：',
            answers: ['est'],
            hint: '3rd person singular.',
            audio: 'Joe-Bob est de College Station.',
            explain: 'il est.',
            explainZh: '第三人称单数：est。'
          },
          {
            id: 'd5b1_d12',
            kind: 'fib',
            prompt: 'Rita : Je ne ___ pas coiffeuse. (être)',
            promptZh: 'Tex 原题 #12：Rita 说“我不是理发师”（être）：',
            answers: ['suis'],
            hint: 'je suis.',
            audio: 'Je ne suis pas coiffeuse.',
            explain: 'je ne suis pas.',
            explainZh: 'je ne suis pas。'
          }
        ],
        related: [
          { chapterId: 'ch5a_verbs_regular', pageId: 'v5a_13', label: 'Back to 5A.13 suivre (je suis homonym!)' },
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_2', label: '5B.2 avoir ("to have") & Age' }
        ]
      },

      /* =========================================================
         PAGE 5B.2: AVOIR (virr2.html)
      ========================================================= */
      {
        id: 'v5b_2',
        code: '5B.2',
        group: 'Core Pillars: être & avoir',
        shortTitle: 'avoir ("to have"), Age & Liaison',
        title: 'avoir ("to have"): Irregular Conjugation, Plural /z/ Liaison & Expressing Age',
        titleZh: '核心支柱动词 ②：avoir（有）、复数 /z/ 联诵与法语“年龄”表达',
        estMin: 3,
        summary: 'Master avoir in the present tense (j’ai, tu as, il/elle/on a, nous avons, vous avez, ils/elles ont; past participle: eu /y/), hear the essential /z/ liaison in nous avons / vous avez / ils ont (vs. ils sont!), recognize avoir as the primary compound auxiliary, and ALWAYS use avoir (NEVER être!) to express age.',
        summaryZh: '背熟法语另一大支柱 **avoir**（`ai / as / a / avons / avez / ont`，过去分词 **eu**，读音 /y/）。记住两大考试重灾区：① 复数 **nous avons / vous avez / ils ont** 全员发生 **/z/** 联诵，借此把 **ils ont**（有）和 **ils sont**（是）彻底听清；② 法语表示**年龄**必须用 **avoir ... ans**（直译“拥有……岁”），绝对不能套用英语用 être！',
        cheatSummary: [
          { label: 'Present Tense of avoir (p.p. eu)', rule: 'j’ai · tu as · il/elle/on a · nous avons (/z/) · vous avez (/z/) · ils/elles ont (/z/!).', ruleZh: '现在时六格：j’ai, tu as, il/elle/on a, nous avons, vous avez, ils/elles ont；过去分词 eu（读 /y/）。' },
          { label: 'Age = avoir + Number + ans', rule: '"Quel âge as-tu ?" — "J’ai 26 ans. Ma sœur Rita a 30 ans." NEVER translate "I am 26" with être (*je suis 26 ans = WRONG)!', ruleZh: '年龄固定公式：**avoir + 数字 + ans**（绝不能说 je suis 26 ans，也不可以省略 ans！）。' }
        ],
        sections: [
          {
            id: 'v5b2_paradigm',
            heading: '1. Paradigm of "avoir", Liaison & Expressing Age',
            headingZh: '一、avoir 变位表、复数联诵与年龄对话',
            lead: 'Notice j’ai triggers élision (je → j’), while nous avons, vous avez, and ils/elles ont all trigger /z/ liaison! Besides ownership and auxiliary use (passé composé, plus-que-parfait, futur antérieur), avoir always expresses age:',
            leadZh: '单数 j’ai 发生省音，复数 nous avons / vous avez / ils ont 全部因为元音开头发生 /z/ 联诵（注意 `ils ont` 与 `ils sont` 的清浊对立）：',
            cartoon: {
              src: './assets/tex_cartoons/virr2.gif',
              alt: 'Tex parle de son frère Trey et de sa soeur Rita',
              caption: 'Tex: Oui, j’ai une sœur et un frère. Ma sœur Rita a 30 ans et mon frère Trey a 16 ans.',
              captionZh: 'Tex：我有一个姐姐和一个弟弟。姐姐 Rita 30 岁（a 30 ans），弟弟 Trey 16 岁（a 16 ans）。'
            },
            table: {
              headers: ['Person', 'Singular (avoir — p.p. eu)', 'Plural (avoir)', 'Key Contrasts'],
              rows: [
                { cols: ['1st', 'j’ai (/ʒe/)', 'nous avons (/nu zavɔ̃/)', 'élision j’ai · /z/ liaison in nous avons'], audio: 'j’ai, nous avons' },
                { cols: ['2nd', 'tu as (/ty a/)', 'vous avez (/vu zave/)', 'tu as (has -s) vs. vous avez (/z/)'], audio: 'tu as, vous avez' },
                { cols: ['3rd', 'il/elle/on a (/il a/)', 'ils/elles ont (/il zɔ̃/)', 'il a (NO -t!) vs. ils ont (/z/ ≠ ils sont /s/!)'], audio: 'il a, ils ont' }
              ]
            },
            examples: [
              { fr: 'Tex, tu as des frères et des sœurs ?', en: 'Tex, do you have brothers and sisters?', zh: 'Tex，你有兄弟姐妹吗？', tag: 'tu as' },
              { fr: 'Tex : Oui, j’ai une sœur et un frère.', en: 'Tex: Yes, I have a sister and a brother.', zh: 'Tex：有啊，我有一个姐姐和一个弟弟。', tag: 'j’ai' },
              { fr: 'Quel âge ont-ils ?', en: 'How old are they?', zh: '他们几岁了？（注意倒装 ont-ils！）', tag: 'quel âge + avoir' },
              { fr: 'Tex : Ma sœur Rita a 30 ans et mon frère Trey a 16 ans.', en: 'Tex: My sister Rita is 30 and my brother Trey is 16.', zh: 'Tex：姐姐 Rita 30 岁，弟弟 Trey 16 岁。', tag: 'Age = avoir' }
            ],
            quickCheck: {
              prompt: 'How do you ask a friend "How old are you?" in French?',
              promptZh: '用 tu 问朋友“你几岁了？”，哪一句完全正确？',
              options: [
                'Quel âge as-tu ?',
                'Quel âge es-tu ?',
                'Quel âge as-il ?',
                'Combien es-tu ?'
              ],
              answerIdx: 0,
              explain: 'In French you "have" an age: Quel âge as-tu ? / Quel âge avez-vous ?',
              explainZh: '法语年龄永远搭配 avoir：Quel âge as-tu ? / Quel âge avez-vous ?'
            }
          }
        ],
        drills: [
          {
            id: 'd5b2_d1',
            kind: 'fib',
            prompt: 'Tex ___ une sœur et un frère. (avoir)',
            promptZh: 'Tex 原题 #1：Tex 有一个姐姐和一个弟弟（avoir）：',
            answers: ['a'],
            hint: '3rd sg. is a single letter!',
            audio: 'Tex a une sœur et un frère.',
            explain: 'Tex (= il) a.',
            explainZh: '第三人称单数只是单独一个字母 a（别忘了没有重音符号，à 才是介词！）。'
          },
          {
            id: 'd5b2_d2',
            kind: 'fib',
            prompt: 'Tex et Tammy ___ beaucoup d’amis. (avoir)',
            promptZh: 'Tex 原题 #2：Tex 和 Tammy 有很多朋友（avoir）：',
            answers: ['ont'],
            hint: '3rd pl. = ont.',
            audio: 'Tex et Tammy ont beaucoup d’amis.',
            explain: 'Tex et Tammy (= ils) ont.',
            explainZh: '第三人称复数：ont。'
          },
          {
            id: 'd5b2_d3',
            kind: 'fib',
            prompt: 'Bette : Tex, quel âge ___-tu ? (avoir)',
            promptZh: 'Tex 原题 #3：Tex，你几岁了（avoir）：',
            answers: ['as'],
            hint: 'tu form = as.',
            audio: 'Tex, quel âge as-tu ?',
            explain: 'tu as → inverted as-tu.',
            explainZh: 'tu 对应 as（带 s）。'
          },
          {
            id: 'd5b2_d4',
            kind: 'fib',
            prompt: 'Tex : J’___ 26 ans. (avoir — J’ already printed)',
            promptZh: 'Tex 原题 #4：我 26 岁（只需填 J’ 后面的动词）：',
            answers: ['ai'],
            hint: 'je/j’ form = ai.',
            audio: 'J’ai vingt-six ans.',
            explain: 'J’ai 26 ans.',
            explainZh: '空里填 ai → J’ai 26 ans。'
          },
          {
            id: 'd5b2_d5',
            kind: 'fib',
            prompt: 'Rita, est-ce que vous ___ des enfants ? — Oui, j’en ai 4. (avoir)',
            promptZh: 'Tex 原题 #5：Rita，您有孩子吗（avoir）：',
            answers: ['avez'],
            hint: 'vous form = avez.',
            audio: 'Rita, est-ce que vous avez des enfants ?',
            explain: 'vous avez.',
            explainZh: 'vous 对应 avez。'
          },
          {
            id: 'd5b2_d6',
            kind: 'fib',
            prompt: 'Tammy : Tex, nous ___ besoin d’étudier ce soir. (avoir)',
            promptZh: 'Tex 原题 #6：Tex，我们今晚需要学习（avoir）：',
            answers: ['avons'],
            hint: 'nous form = avons.',
            audio: 'Nous avons besoin d’étudier ce soir.',
            explain: 'nous avons.',
            explainZh: 'nous 对应 avons。'
          },
          {
            id: 'd5b2_d7',
            kind: 'fib',
            prompt: 'Tex ___ une petite amie, Tammy. (avoir)',
            promptZh: 'Tex 原题 #7：Tex 有个女朋友叫 Tammy（avoir）：',
            answers: ['a'],
            hint: '3rd sg. = a.',
            audio: 'Tex a une petite amie, Tammy.',
            explain: 'il a.',
            explainZh: '第三人称单数：a。'
          },
          {
            id: 'd5b2_d8',
            kind: 'fib',
            prompt: 'Joe-Bob et Corey ___ envie de regarder la télé. (avoir)',
            promptZh: 'Tex 原题 #8：Joe-Bob 和 Corey 想看电视（avoir）：',
            answers: ['ont'],
            hint: '3rd pl. = ont.',
            audio: 'Joe-Bob et Corey ont envie de regarder la télé.',
            explain: 'ils ont.',
            explainZh: '第三人称复数：ont。'
          },
          {
            id: 'd5b2_d9',
            kind: 'fib',
            prompt: 'Corey : Tex, est-ce que tu ___ une télévision ? (avoir)',
            promptZh: 'Tex 原题 #9：Tex，你有电视机吗（avoir）：',
            answers: ['as'],
            hint: 'tu = as.',
            audio: 'Est-ce que tu as une télévision ?',
            explain: 'tu as.',
            explainZh: 'tu 对应 as。'
          },
          {
            id: 'd5b2_d10',
            kind: 'fib',
            prompt: 'Tex : J’___ rendez-vous avec Tammy. (avoir)',
            promptZh: 'Tex 原题 #10：我和 Tammy 有约（avoir）：',
            answers: ['ai'],
            hint: 'j’ + ai.',
            audio: 'J’ai rendez-vous avec Tammy.',
            explain: 'j’ai rendez-vous.',
            explainZh: 'j’ai rendez-vous（约会/预约）。'
          },
          {
            id: 'd5b2_d11',
            kind: 'fib',
            prompt: 'Bette : Tex et Tammy, vous ___ de la chance (« luck »). (avoir)',
            promptZh: 'Tex 原题 #11：Tex 和 Tammy，你们运气真好（avoir）：',
            answers: ['avez'],
            hint: 'vous = avez.',
            audio: 'Vous avez de la chance.',
            explain: 'vous avez de la chance.',
            explainZh: 'vous avez de la chance = 你们真幸运。'
          },
          {
            id: 'd5b2_d12',
            kind: 'fib',
            prompt: 'Tammy et Bette étudient : Nous ___ beaucoup de devoirs. (avoir)',
            promptZh: 'Tex 原题 #12：我们有很多作业（avoir）：',
            answers: ['avons'],
            hint: 'nous = avons.',
            audio: 'Nous avons beaucoup de devoirs.',
            explain: 'nous avons.',
            explainZh: 'nous 对应 avons。'
          }
        ],
        related: [
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_1', label: '5B.1 être ("to be")' },
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_3', label: '5B.3 il y a & 12 avoir Expressions' }
        ]
      },

      /* =========================================================
         PAGE 5B.3: AVOIR EXPRESSIONS & IL Y A (virr3.html)
      ========================================================= */
      {
        id: 'v5b_3',
        code: '5B.3',
        group: 'Core Pillars: être & avoir',
        shortTitle: 'il y a & 12 avoir Idioms (faim, besoin...)',
        title: 'avoir Expressions: "il y a / il n’y a pas de" + 12 Essential Body & Mind Idioms',
        titleZh: '核心支柱动词 ③：il y a / il n’y a pas de 与 12 个必考 avoir 习语（冷热饥渴对错疼）',
        estMin: 4,
        summary: 'Learn the existential idiom il y a ("there is / there are") and its negative shift il n’y a pas DE/D’ ("there aren’t any"), plus all 12 core avoir expressions where English uses "to be" (faim, soif, chaud, froid, sommeil, raison, tort, peur de, honte de, besoin de, envie de, l’intention de, mal à...).',
        summaryZh: '掌握用法语高频冠词+存在表达 **il y a**（有……），注意否定句 **il n’y a pas** 后原本的 `un / une / des` 全都要降格成 **de / d’**！接着一口气记牢英语用 "to be" 但法语必须用 **avoir** 的 12 个生理心理习语（**饥饿 faim、口渴 soif、冷 froid、热 chaud、困 sommeil、有理 raison、理亏 tort、需要 besoin de、想做 envie de、打算 l’intention de、羞愧 honte de、痛 mal à...、害怕 peur de**）！',
        cheatSummary: [
          { label: 'il y a → il n’y a pas de/d’', rule: 'il y a + un/une/des ("Il y a des châteaux"). Negative: il n’y a pas DE/D’ ("Il n’y a pas de châteaux"). Never changes plural *ils y ont!', ruleZh: '肯定：il y a un/une/des...；否定：il n’y a pas de / d’...（固定无人称单数，单复数通用！）。' },
          { label: 'English "to be" → French "avoir"!', rule: 'NEVER say *je suis faim / *je suis chaud (= vulgar in French!). Always: j’ai faim, j’ai soif, j’ai chaud/froid, j’ai raison/tort, j’ai peur/besoin/envie de.', ruleZh: '警示：热、冷、饿、渴、困、怕、对、错全用 **avoir**（万万不可说 *je suis chaud(e)，在法语里含不当歧义！）。' }
        ],
        sections: [
          {
            id: 'v5b3_ilya',
            heading: '1. Existence: "il y a" & Negative "il n’y a pas de"',
            headingZh: '一、存在句 il y a 与否定 de 转化',
            lead: 'Il y a makes an inventory of what exists (usually paired with indefinite un, une, des). In the negative (il n’y a pas), un / une / des becomes de or d’ ("any"):',
            leadZh: '看 Tex 和 Tammy 对比巴黎与德州的对话，注意肯定句用 des 而否定句变 de：',
            cartoon: {
              src: './assets/tex_cartoons/virr3mais.gif',
              alt: 'Au Texas il n’y a pas de cathédrales, mais il y a une tour à UT Austin',
              caption: 'Tex: En France il y a des châteaux... Au Texas il n’y a pas de châteaux. Tammy: Mais il y a une tour à UT Austin !',
              captionZh: 'Tex：法国有城堡（il y a des châteaux），德州没有（il n’y a pas de châteaux）。Tammy：但 UT 奥斯汀校区有钟楼！'
            },
            examples: [
              { fr: 'Tex : À Paris il y a une tour, la Tour Eiffel. En France il y a des cathédrales, des châteaux, des monuments anciens...', en: 'In Paris there is a tower, the Eiffel Tower. In France there are cathedrals, castles, ancient monuments...', zh: '肯定句 il y a 后通常接 un / une / des。', tag: 'il y a + des' },
              { fr: 'Tex : Au Texas il n’y a pas de cathédrales, il n’y a pas de châteaux, il n’y a pas de monuments anciens.', en: 'In Texas, there aren’t any cathedrals, castles, or ancient monuments.', zh: '否定句 il n’y a pas 后，des 降格为 de！', tag: 'pas de' },
              { fr: 'Tammy : Mais il y a une tour à l’Université du Texas à Austin !', en: 'Tammy: But there is a tower at the University of Texas at Austin!', zh: 'Tammy 机智反驳：但在德州大学奥斯汀分校也有一座塔！', tag: 'il y a une tour' }
            ]
          },
          {
            id: 'v5b3_idioms',
            heading: '2. The 12+ Essential "avoir" Expressions (+ Bette/Tex/Tammy Scene)',
            headingZh: '二、全部 12+ 个 avoir 习语总表与三人情景对话',
            lead: 'Notice there are NO articles before faim, soif, chaud, froid, raison, tort, sommeil, peur, honte, besoin, envie—and remember besoin/envie/intention/peur/honte link with "de" before nouns or infinitives:',
            leadZh: '这些固定名词（faim, soif, chaud, froid, sommeil, raison, tort...）前都不加冠词，直接跟在 avoir 后面：',
            cartoon: {
              src: './assets/tex_cartoons/virr3allons.gif',
              alt: 'Bette: Tex, j’ai faim. Tex: Il y a un café à côté.',
              caption: 'Bette: Tex, j’ai faim. Tex: Il y a un café à côté. Tammy: J’ai envie, mais nous avons besoin d’étudier — et j’ai toujours froid !',
              captionZh: 'Bette：我饿了（j’ai faim）。Tex：隔壁有家咖啡馆（Il y a un café）。Tammy：我想去但要学习，而且那儿总让我觉得冷！'
            },
            table: {
              headers: ['French Idiom', 'English Meaning', 'Chinese + Key Grammar Note'],
              rows: [
                { cols: ['avoir besoin de (+ N/inf.)', 'to need (to)', '需要（记住加 de：besoin d’étudier）'], audio: 'Nous avons besoin d’étudier.' },
                { cols: ['avoir envie de (+ N/inf.)', 'to want / feel like doing', '想做某事（比 vouloir 更柔和随性）'], audio: 'J’ai envie de vous accompagner.' },
                { cols: ['avoir l’intention de (+ inf.)', 'to intend to', '打算 / 意图做某事'], audio: 'J’ai l’intention de manger.' },
                { cols: ['avoir faim / avoir soif', 'to be hungry / thirsty', '饿 / 渴'], audio: 'J’ai faim. J’ai soif.' },
                { cols: ['avoir chaud / avoir froid', 'to be hot / cold', '（人感到）热 / 冷'], audio: 'J’ai toujours froid dans ce café.' },
                { cols: ['avoir honte (de) / avoir peur (de)', 'to be ashamed (of) / afraid (of)', '羞愧 / 害怕（常考！）'], audio: 'J’ai honte de mon frère. Elle a peur de l’eau.' },
                { cols: ['avoir mal à (la tête / gorge / aux yeux)', 'to have a headache / sore throat / sore eyes', '身体某部位疼（à + 定冠词缩合）'], audio: 'Ils ont mal à la tête.' },
                { cols: ['avoir raison / avoir tort', 'to be right / to be wrong', '有道理、对 / 理亏、错'], audio: 'Tu as raison ! Tex n’a jamais tort.' },
                { cols: ['avoir sommeil', 'to be sleepy', '困了、想睡觉'], audio: 'Edouard se couche parce qu’il a sommeil.' }
              ]
            },
            quickCheck: {
              prompt: 'How do you say "Tammy puts on a sweater because she is cold"?',
              promptZh: '“Tammy 穿上毛衣因为她觉得冷”，下面哪句才地道正确？',
              options: [
                'Tammy met un pull parce qu’elle a froid.',
                'Tammy met un pull parce qu’elle est froid.',
                'Tammy met un pull parce qu’elle fait froid.',
                'Tammy met un pull parce qu’il a froid.'
              ],
              answerIdx: 0,
              explain: 'Person feels hot/cold → avoir chaud / avoir froid (elle a froid); weather is hot/cold → il fait chaud / il fait froid!',
              explainZh: '人感觉冷/热用 **avoir froid / chaud**（elle a froid）；天气冷/热才用 **il fait froid / chaud**！'
            }
          }
        ],
        drills: [
          {
            id: 'd5b3_d1',
            kind: 'choice',
            prompt: 'Tammy met un pull et un manteau parce qu’elle ___.',
            promptZh: 'Tex 原题 #1：Tammy 穿上毛衣和大衣，因为她觉得冷：',
            options: ['a froid', 'a chaud', 'est froide', 'fait froid'],
            answerIdx: 0,
            audio: 'Tammy met un pull parce qu’elle a froid.',
            explain: 'She puts on a sweater/coat because she is cold → elle a froid.',
            explainZh: '穿上毛衣大衣说明她感到冷：elle a froid。'
          },
          {
            id: 'd5b3_d2',
            kind: 'choice',
            prompt: 'Tex et Edouard prennent de l’aspirine parce qu’ils ___ à la tête.',
            promptZh: 'Tex 原题 #2：Tex 和 Edouard 吃阿司匹林，因为他们头疼：',
            options: ['ont mal', 'ont soif', 'ont sommeil', 'sont mal'],
            answerIdx: 0,
            audio: 'Ils prennent de l’aspirine parce qu’ils ont mal à la tête.',
            explain: 'avoir mal à la tête = to have a headache.',
            explainZh: 'avoir mal à + 身体部位 = 哪里疼（ils ont mal à la tête）。'
          },
          {
            id: 'd5b3_d3',
            kind: 'choice',
            prompt: 'Edouard se couche parce qu’il ___.',
            promptZh: 'Tex 原题 #3：Edouard 上床躺下了，因为他困了：',
            options: ['a sommeil', 'a raison', 'a tort', 'a faim'],
            answerIdx: 0,
            audio: 'Edouard se couche parce qu’il a sommeil.',
            explain: 'avoir sommeil = to be sleepy.',
            explainZh: 'avoir sommeil = 犯困。'
          },
          {
            id: 'd5b3_d4',
            kind: 'choice',
            prompt: 'Bette ne nage pas parce qu’elle ___ de l’eau.',
            promptZh: 'Tex 原题 #4：Bette 不去游泳，因为她怕水：',
            options: ['a peur', 'a sommeil', 'a raison', 'a faim'],
            answerIdx: 0,
            audio: 'Bette ne nage pas parce qu’elle a peur de l’eau.',
            explain: 'avoir peur de = to be afraid of.',
            explainZh: 'avoir peur de = 害怕……。'
          },
          {
            id: 'd5b3_d5',
            kind: 'choice',
            prompt: 'Tex n’a jamais tort donc il ___.',
            promptZh: 'Tex 原题 #5：Tex 从来不出错，也就是说他总是有道理（对的）：',
            options: ['a raison', 'a chaud', 'a tort', 'a honte'],
            answerIdx: 0,
            audio: 'Tex n’a jamais tort donc il a raison.',
            explain: 'Opposite of avoir tort (to be wrong) is avoir raison (to be right).',
            explainZh: 'avoir tort（错）的反义词是 avoir raison（对）。'
          },
          {
            id: 'd5b3_d6',
            kind: 'fib',
            prompt: 'Tammy : Bette, tu ___ de draguer Tex à la soirée ? (intend to = avoir l’intention)',
            promptZh: 'Tex 原题 #6（补全两个词）：Tammy 问 Bette：“你打算在派对上撩 Tex 吗？”（avoir l’intention）：',
            answers: ["as l'intention", 'as l’intention'],
            hint: 'tu form of avoir + l’intention.',
            audio: 'Bette, tu as l’intention de draguer Tex à la soirée ?',
            explain: 'tu as l’intention de = you intend to.',
            explainZh: 'tu as l’intention de = 你打算……'
          },
          {
            id: 'd5b3_d7',
            kind: 'fib',
            prompt: 'Tex : Quelquefois, j’___ de mon frère, Trey. (feel ashamed = avoir honte)',
            promptZh: 'Tex 原题 #7：有时候我觉得弟弟 Trey 真让人丢脸（补全 J’ 后的动词+名词）：',
            answers: ['ai honte'],
            hint: 'j’ + ai honte.',
            audio: 'Quelquefois, j’ai honte de mon frère, Trey.',
            explain: 'j’ai honte de = I am ashamed of.',
            explainZh: 'j’ai honte de = 对……感到羞愧/丢脸。'
          },
          {
            id: 'd5b3_d8',
            kind: 'fib',
            prompt: 'Tex et Edouard ___ donc ils ouvrent une bouteille de vin. (are thirsty = avoir soif)',
            promptZh: 'Tex 原题 #8：Tex 和 Edouard 口渴了，所以开了一瓶酒（avoir soif）：',
            answers: ['ont soif'],
            hint: 'ils ont + soif.',
            audio: 'Tex et Edouard ont soif donc ils ouvrent une bouteille de vin.',
            explain: 'ils ont soif.',
            explainZh: 'ils ont soif。'
          },
          {
            id: 'd5b3_d9',
            kind: 'fib',
            prompt: 'Joe-Bob ___ donc il trouve des noix. (is hungry = avoir faim)',
            promptZh: 'Tex 原题 #9：Joe-Bob 饿了，于是找些坚果吃（avoir faim）：',
            answers: ['a faim'],
            hint: 'il a + faim.',
            audio: 'Joe-Bob a faim donc il trouve des noix.',
            explain: 'il a faim.',
            explainZh: 'il a faim。'
          },
          {
            id: 'd5b3_d10',
            kind: 'fib',
            prompt: 'Bette : Nous ___ de danser ce soir. (feel like = avoir envie)',
            promptZh: 'Tex 原题 #10：我们今晚好想跳舞（avoir envie）：',
            answers: ['avons envie'],
            hint: 'nous avons + envie.',
            audio: 'Nous avons envie de danser ce soir.',
            explain: 'nous avons envie de = we feel like.',
            explainZh: 'nous avons envie de。'
          },
          {
            id: 'd5b3_d11',
            kind: 'fib',
            prompt: 'Bette : Tammy, est-ce que tu ___ de faire tes devoirs ? (need = avoir besoin)',
            promptZh: 'Tex 原题 #11：Tammy，你需要做作业吗（avoir besoin）：',
            answers: ['as besoin'],
            hint: 'tu as + besoin.',
            audio: 'Est-ce que tu as besoin de faire tes devoirs ?',
            explain: 'tu as besoin de.',
            explainZh: 'tu as besoin de。'
          },
          {
            id: 'd5b3_d12',
            kind: 'fib',
            prompt: 'Corey : Je vais souvent à Barton Springs quand j’___. (am hot = avoir chaud)',
            promptZh: 'Tex 原题 #12：我热的时候常去巴顿泉游泳（J’ 后面补全）：',
            answers: ['ai chaud'],
            hint: 'j’ + ai chaud.',
            audio: 'Je vais souvent à Barton Springs quand j’ai chaud.',
            explain: 'j’ai chaud (note: NEVER say *je suis chaud!).',
            explainZh: 'j’ai chaud（切记不要误用 être！）。'
          }
        ],
        related: [
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_2', label: '5B.2 avoir & Age' },
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_4', label: '5B.4 aller ("to go") & Near Future' }
        ]
      },

      /* =========================================================
         PAGE 5B.4: ALLER (virr4.html)
      ========================================================= */
      {
        id: 'v5b_4',
        code: '5B.4',
        group: 'Core Pillars: aller & faire',
        shortTitle: 'aller ("to go"), Health & Near Future',
        title: 'aller ("to go"): Conjugation, Liaison, Salutations (Comment allez-vous?) & Futur Proche',
        titleZh: '核心支柱动词 ④：aller（去）变位、联诵、寒暄问候与近将来时（aller + 不定式）',
        estMin: 3,
        summary: 'Master aller despite its -er spelling (je vais, tu vas, il/elle/on va, nous allons, vous allez, ils/elles vont; past participle: allé), hear /z/ liaison in nous allons and vous allez, distinguish literal movement (aller à/au) from health greetings (Comment allez-vous ? / Ça va), and use aller + infinitive for the near future!',
        summaryZh: '虽然 **aller** 以 -er 结尾，但它**是百分百的不规则动词**（`vais / vas / va / allons / allez / vont`，过去分词 **allé**，用 être 作助动词）。留意 `nous allons` 和 `vous allez` 必读 **/z/** 联诵。三大常用功用：① 物理移动“去某地”；② 日常问好（*Comment allez-vous ? / Ça va bien*）；③ 最实用的**近将来时**：`aller + 动词原形`（“马上要/打算去……”）！',
        cheatSummary: [
          { label: 'Present Tense of aller (p.p. allé)', rule: 'je vais · tu vas · il/elle/on va · nous allons (/z/) · vous allez (/z/) · ils/elles vont. Takes être in passé composé!', ruleZh: '六格：je vais, tu vas, il/elle/on va, nous allons, vous allez, ils/elles vont；过去分词 allé（用 être）。' },
          { label: '3 Uses: Place, Greeting & Near Future', rule: '1) Place: Je vais au café. 2) Greeting: Comment allez-vous ? / Ça va bien. 3) Futur proche: Je vais étudier (= I’m going to study).', ruleZh: '三大场景：① 去哪里（Je vais au café）；② 问好（Comment allez-vous ?）；③ 近将来（aller + 不定式，表示“将要……”）。' }
        ],
        sections: [
          {
            id: 'v5b4_paradigm',
            heading: '1. Conjugating "aller" & Corey / Joe-Bob Skipping-Class Dialogue',
            headingZh: '一、aller 变位表与“跷课遇到教授”对话',
            lead: 'Listen to how nous allons (/nu zalɔ̃/) and vous allez (/vu zale/) link with /z/, and notice in the dialogue below how Joe-Bob switches abruptly from "tu vas" (casual buddy) to "Comment allez-vous ?" (formal greeting) when the professor walks up!',
            leadZh: '看一段超级传神的校园对话：Joe-Bob 前一秒还在吐槽教授很可怕，下一秒教授出现立刻切到“您好吗（Comment allez-vous ?）”：',
            cartoon: {
              src: './assets/tex_cartoons/virr4.gif',
              alt: 'Joe-Bob et Corey parlent de leur professeur',
              caption: 'Joe-Bob: Le prof est horrible! Corey: Attention! Il arrive! Joe-Bob: Ah, bonjour monsieur. Comment allez-vous ?',
              captionZh: 'Joe-Bob：老师糟糕透了！Corey：小心他来了！Joe-Bob：哎呀教授您好，您今天好吗（Comment allez-vous）？'
            },
            table: {
              headers: ['Person', 'Singular (aller — p.p. allé)', 'Plural (aller)', 'Pronunciation & Meaning'],
              rows: [
                { cols: ['1st', 'je vais', 'nous allons', 'nous allons → /z/ liaison!'], audio: 'je vais, nous allons' },
                { cols: ['2nd', 'tu vas', 'vous allez', 'vous allez → /z/ liaison!'], audio: 'tu vas, vous allez' },
                { cols: ['3rd', 'il/elle/on va', 'ils/elles vont', 'Compare: ils vont, ils sont, ils font!'], audio: 'il va, ils vont' }
              ]
            },
            examples: [
              { fr: 'Corey : Salut, Joe-Bob, où vas-tu ? — Joe-Bob : Je vais au café.', en: 'Hey, Joe-Bob, where are you going? — I’m going to a coffee shop.', zh: 'Corey：去哪儿呀？— 我去咖啡馆。', tag: 'Literal Going' },
              { fr: 'Joe-Bob : Oui, mais le prof est horrible, vraiment horrible ! — Corey : Attention ! Il arrive !', en: 'Yes, but the prof is horrible, really horrible! — Watch out! He’s coming!', zh: '糟了，教授走过来了！', tag: 'Campus Scene' },
              { fr: 'Joe-Bob : Ah, bonjour monsieur le professeur. Comment allez-vous aujourd’hui ?', en: 'Oh, hello, professor. How are you today?', zh: '一秒变脸：“教授您好，您今天身体好吗？”', tag: 'Health Salutation' }
            ],
            quickCheck: {
              prompt: 'Look at the two sentences: "Nous allons au parc" vs. "Nous adorons aller chez Paw-Paw". Why is the second one "aller" instead of "allons"?',
              promptZh: '为什么 "Nous adorons aller chez Paw-Paw" 里不用 allons，而保留原形 aller？',
              options: [
                '"adorons" is ALREADY conjugated with nous, so the second verb stays in the INFINITIVE ("aller")!',
                'aller never conjugates after adorer.',
                'chez triggers the infinitive.',
                'nous adorons takes a past participle.'
              ],
              answerIdx: 0,
              explain: 'Two-verb French rule: conjugate the FIRST verb (adorons), keep the SECOND verb in the infinitive (aller)!',
              explainZh: '两个连续动词规则：第一个动词（adorons）变位，第二个动词保持不定式原形 **aller**！'
            }
          }
        ],
        drills: [
          {
            id: 'd5b4_d1',
            kind: 'fib',
            prompt: 'Joe-Bob ___ au parc pour jouer au foot. (aller)',
            promptZh: 'Tex 原题 #1：Joe-Bob 去公园踢足球（aller）：',
            answers: ['va'],
            hint: '3rd person singular.',
            audio: 'Joe-Bob va au parc pour jouer au foot.',
            explain: 'Joe-Bob (= il) va.',
            explainZh: '第三人称单数：va。'
          },
          {
            id: 'd5b4_d2',
            kind: 'fib',
            prompt: 'Joe-Bob et Corey : Nous n’___ pas en classe aujourd’hui. (aller)',
            promptZh: 'Tex 原题 #2：我们今天不去上课（aller）：',
            answers: ['allons'],
            hint: 'nous = allons.',
            audio: 'Nous n’allons pas en classe aujourd’hui.',
            explain: 'nous allons.',
            explainZh: 'nous 对应 allons。'
          },
          {
            id: 'd5b4_d3',
            kind: 'fib',
            prompt: 'Joe-Bob dit au professeur : Comment ___-vous ? (aller)',
            promptZh: 'Tex 原题 #3：您好吗（aller）：',
            answers: ['allez'],
            hint: 'vous = allez.',
            audio: 'Comment allez-vous ?',
            explain: 'vous allez.',
            explainZh: 'vous 对应 allez。'
          },
          {
            id: 'd5b4_d4',
            kind: 'fib',
            prompt: 'Tex et Tammy, est-ce que vous ___ au restaurant ce soir ? (aller)',
            promptZh: 'Tex 原题 #4：你们今晚去餐厅吗（aller）：',
            answers: ['allez'],
            hint: 'vous = allez.',
            audio: 'Est-ce que vous allez au restaurant ce soir ?',
            explain: 'vous allez.',
            explainZh: 'vous 对应 allez。'
          },
          {
            id: 'd5b4_d5',
            kind: 'fib',
            prompt: 'Rita, est-ce que tu ___ souvent à Wal-Mart ? (aller)',
            promptZh: 'Tex 原题 #5：Rita，你经常去沃尔玛吗（aller）：',
            answers: ['vas'],
            hint: 'tu = vas (with -s!).',
            audio: 'Rita, est-ce que tu vas souvent à Wal-Mart ?',
            explain: 'tu vas.',
            explainZh: 'tu 对应 vas（千万别忘了 -s！）。'
          },
          {
            id: 'd5b4_d6',
            kind: 'fib',
            prompt: 'Corey, pourquoi est-ce que tu ne ___ pas en classe ? (aller)',
            promptZh: 'Tex 原题 #6：Corey，你为什么不去上课（aller）：',
            answers: ['vas'],
            hint: 'tu = vas.',
            audio: 'Corey, pourquoi est-ce que tu ne vas pas en classe ?',
            explain: 'tu vas.',
            explainZh: 'tu 对应 vas。'
          },
          {
            id: 'd5b4_d7',
            kind: 'fib',
            prompt: 'Quand Tammy chante, Bette ne ___ pas bien. (aller)',
            promptZh: 'Tex 原题 #7：Tammy 唱歌时 Bette 就不太舒服（aller）：',
            answers: ['va'],
            hint: 'elle = va.',
            audio: 'Quand Tammy chante, Bette ne va pas bien.',
            explain: 'Bette (= elle) va (aller bien = to feel well/be fine).',
            explainZh: '第三人称单数：va。'
          },
          {
            id: 'd5b4_d8',
            kind: 'fib',
            prompt: 'Tex et Edouard ___ souvent au café Quackenbush’s. (aller)',
            promptZh: 'Tex 原题 #8：Tex 和 Edouard 常去 Quacks 咖啡馆（aller）：',
            answers: ['vont'],
            hint: '3rd pl. = vont.',
            audio: 'Tex et Edouard vont souvent au café.',
            explain: 'ils vont.',
            explainZh: '第三人称复数：vont。'
          },
          {
            id: 'd5b4_d9',
            kind: 'fib',
            prompt: 'Tammy : On ___ au cinéma ce soir ? (aller)',
            promptZh: 'Tex 原题 #9：我们今晚去看电影好不好（主语是 on！）：',
            answers: ['va'],
            hint: '"on" ALWAYS conjugates like il/elle!',
            audio: 'On va au cinéma ce soir ?',
            explain: '"on" ALWAYS uses the 3rd person singular verb → on va.',
            explainZh: '虽然意译为“咱们”，但语法上 on 永远按第三人称单数变位：va！'
          },
          {
            id: 'd5b4_d10',
            kind: 'fib',
            prompt: 'Joe-Bob : Salut, Tammy, comment ___-tu ? (aller)',
            promptZh: 'Tex 原题 #10：你好 Tammy，最近怎么样（aller）：',
            answers: ['vas'],
            hint: 'tu = vas.',
            audio: 'Salut, Tammy, comment vas-tu ?',
            explain: 'comment vas-tu ? = How are you?',
            explainZh: 'tu 对应 vas → comment vas-tu ?'
          },
          {
            id: 'd5b4_d11',
            kind: 'fib',
            prompt: 'Tex : Je ne ___ jamais à MacDo (« McDonald’s ») ! (aller)',
            promptZh: 'Tex 原题 #11：Tex 说“我绝对不去麦当劳！”（aller）：',
            answers: ['vais'],
            hint: 'je = vais.',
            audio: 'Je ne vais jamais à MacDo !',
            explain: 'je vais.',
            explainZh: 'je 对应 vais。'
          },
          {
            id: 'd5b4_d12',
            kind: 'fib',
            prompt: 'Watch "adorons + inf."! Les enfants de Rita : Nous adorons ___ chez Paw-Paw en Louisiane. (aller)',
            promptZh: 'Tex 原题 #12（小心前面已有变位动词 adorons！）：我们最喜欢去路易斯安那 Paw-Paw 家：',
            answers: ['aller'],
            hint: 'Two-verb trap: adorons is conjugated → keep INFINITIVE!',
            audio: 'Nous adorons aller chez Paw-Paw en Louisiane.',
            explain: '"adorons" is already conjugated, so the second verb stays in the infinitive: aller!',
            explainZh: '前面已有 adorons，第二个动词保留不定式 **aller**！'
          }
        ],
        related: [
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_3', label: '5B.3 il y a & avoir Idioms' },
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_5', label: '5B.5 faire ("to do / make")' }
        ]
      },

      /* =========================================================
         PAGE 5B.5: FAIRE (virr5.html)
      ========================================================= */
      {
        id: 'v5b_5',
        code: '5B.5',
        group: 'Core Pillars: aller & faire',
        shortTitle: 'faire ("to do / make") & vous faites!',
        title: 'faire ("to do, to make"): Irregular Forms, vous faites vs. -ez & the -ont Trio',
        titleZh: '核心支柱动词 ⑤：faire（做/制造）变位、vous faites 例外与 -ont 三兄弟',
        estMin: 3,
        summary: 'Master faire (je fais, tu fais, il/elle/on fait, nous faisons, vous faites, ils/elles font; past participle: fait). Notice the pronunciation trap in "nous faisons" (/fəzɔ̃/, NOT /fɛzɔ̃/), remember the ONLY 3 verbs with non-ez vous forms (êtes, faites, dites), and group the 3rd-plural -ont trio (ils vont, ils sont, ils font)!',
        summaryZh: '攻克高频超级动词 **faire**（`fais / fais / fait / faisons / faites / font`，过去分词 **fait**）。必记三大要点：① **vous faites** 是全法语唯独三个不以 -ez 结尾的 vous 形式之一；② **nous faisons** 里的 `ai` 读短弱元音 **/fəzɔ̃/**（不读 /fɛ/）；③ 第三人称复数 `-ont` 三兄弟：`ils vont / ils sont / ils font`！',
        cheatSummary: [
          { label: 'Present Tense of faire (p.p. fait)', rule: 'je fais · tu fais · il/elle/on fait · nous faisons (/fəzɔ̃/) · vous faites! · ils/elles font.', ruleZh: '六格：je fais, tu fais, il fait, nous faisons（读 /fəzɔ̃/）, vous faites, ils font；过去分词 fait。' },
          { label: 'Two Classic Irregular Families', rule: 'ONLY 3 non-ez vous verbs: vous êtes, vous faites, vous dites. 3rd pl. -ont trio: ils vont, ils sont, ils font (+ ont from avoir!).', ruleZh: '三大特殊 vous：êtes / faites / dites。-ont 复数军团：ils vont（去）、sont（是）、font（做）、ont（有）。' }
        ],
        sections: [
          {
            id: 'v5b5_paradigm',
            heading: '1. Paradigm of "faire" & Question-Answer Freedom',
            headingZh: '一、faire 变位与问答灵活性',
            lead: 'Remember: even when a question asks "Qu’est-ce que tu fais ?" ("What are you doing?"), your reply does NOT have to repeat faire ("Je regarde un film"), though faire itself stars in weather, sports, and household chores (5B.6–5B.7)!',
            leadZh: '用 "Qu’est-ce qu’on fait ?" 问“大家在干嘛”时，回答既可以用 faire（Nous ne faisons rien），也可以直接换成具体动作动词：',
            cartoon: {
              src: './assets/tex_cartoons/virr5.gif',
              alt: 'Tex: Qu’est-ce qu’on fait ? Fiona: Nous ne faisons rien.',
              caption: 'Tex: Salut tout le monde. Qu’est-ce qu’on fait ? Corey: Pas grand-chose. Fiona: Nous ne faisons rien, absolument rien.',
              captionZh: 'Tex：大家好，大伙儿在忙啥呢？Corey：没啥事。Fiona：我们啥也没干（Nous ne faisons rien），彻彻底底躺平！'
            },
            table: {
              headers: ['Person', 'Singular (faire — p.p. fait)', 'Plural (faire)', 'Must-Know Note'],
              rows: [
                { cols: ['1st', 'je fais', 'nous faisons', 'nous faisons sounds /nu fəzɔ̃/ (like fe-sons)'], audio: 'je fais, nous faisons' },
                { cols: ['2nd', 'tu fais', 'vous faites', 'One of ONLY 3 non-ez vous forms (êtes, faites, dites)!'], audio: 'tu fais, vous faites' },
                { cols: ['3rd', 'il/elle/on fait', 'ils/elles font', 'Matches aller (vont) & être (sont)!'], audio: 'il fait, ils font' }
              ]
            },
            quickCheck: {
              prompt: 'Which set lists ALL THREE French verbs whose present "vous" form does NOT end in -ez?',
              promptZh: '下面哪一组完整列出了法语仅有的三个 vous 形式不以 -ez 结尾的动词？',
              options: [
                'être (vous êtes), faire (vous faites), dire (vous dites)',
                'avoir (vous avez), aller (vous allez), faire (vous faites)',
                'prendre (vous prenez), mettre (vous mettez), dire (vous dites)',
                'boire (vous buvez), voir (vous voyez), être (vous êtes)'
              ],
              answerIdx: 0,
              explain: 'The exclusive 3-verb club: vous êtes, vous faites, vous dites! All other regular & irregular verbs in the present tense use -ez (or -issez).',
              explainZh: '全法语陈述式现在时唯独这三个：**vous êtes / vous faites / vous dites**（绝对不能写成 *faisez 或 *disez！）！'
            }
          }
        ],
        drills: [
          {
            id: 'd5b5_d1',
            kind: 'fib',
            prompt: 'Tex ne ___ pas de sport. (faire)',
            promptZh: 'Tex 原题 #1：Tex 不做运动（faire）：',
            answers: ['fait'],
            hint: '3rd sg. = fait.',
            audio: 'Tex ne fait pas de sport.',
            explain: 'Tex (= il) fait.',
            explainZh: '第三人称单数：fait。'
          },
          {
            id: 'd5b5_d2',
            kind: 'fib',
            prompt: 'Tammy et Bette, elles ___ des cours ensemble. (faire)',
            promptZh: 'Tex 原题 #2：Tammy 和 Bette 一起上课（faire）：',
            answers: ['font'],
            hint: '3rd pl. = font.',
            audio: 'Tammy et Bette font des cours ensemble.',
            explain: 'elles font.',
            explainZh: '第三人称复数：font。'
          },
          {
            id: 'd5b5_d3',
            kind: 'fib',
            prompt: 'Corey, est-ce que tu ___ tes devoirs ? (faire)',
            promptZh: 'Tex 原题 #3：Corey，你在写作业吗（faire）：',
            answers: ['fais'],
            hint: 'tu = fais.',
            audio: 'Corey, est-ce que tu fais tes devoirs ?',
            explain: 'tu fais.',
            explainZh: 'tu 对应 fais。'
          },
          {
            id: 'd5b5_d4',
            kind: 'fib',
            prompt: 'Fiona : Je ne ___ rien ! (faire)',
            promptZh: 'Tex 原题 #4：Fiona 说“我什么也没做！”（faire）：',
            answers: ['fais'],
            hint: 'je = fais.',
            audio: 'Je ne fais rien !',
            explain: 'je fais.',
            explainZh: 'je 对应 fais。'
          },
          {
            id: 'd5b5_d5',
            kind: 'fib',
            prompt: 'Corey : Joe-Bob et moi, nous ___ de la planche à voile ! (faire)',
            promptZh: 'Tex 原题 #5：Joe-Bob 和我玩帆板（faire）：',
            answers: ['faisons'],
            hint: 'nous = faisons.',
            audio: 'Nous faisons de la planche à voile !',
            explain: 'nous faisons.',
            explainZh: 'nous 对应 faisons。'
          },
          {
            id: 'd5b5_d6',
            kind: 'fib',
            prompt: 'Edouard, vous ___ une promenade ? (faire)',
            promptZh: 'Tex 原题 #6：Edouard，您在散步吗（faire）：',
            answers: ['faites'],
            hint: 'irregular vous form — NOT *faisez!',
            audio: 'Edouard, vous faites une promenade ?',
            explain: 'vous faites!',
            explainZh: '千万别错写成 *faisez：vous 固定是 faites！'
          },
          {
            id: 'd5b5_d7',
            kind: 'fib',
            prompt: 'Joe-Bob : Je ___ du ski nautique au lac Travis. (faire)',
            promptZh: 'Tex 原题 #7：我在特拉维斯湖玩滑水（faire）：',
            answers: ['fais'],
            hint: 'je = fais.',
            audio: 'Je fais du ski nautique au lac Travis.',
            explain: 'je fais.',
            explainZh: 'je 对应 fais。'
          },
          {
            id: 'd5b5_d8',
            kind: 'fib',
            prompt: 'Rita et ses enfants, ils ___ des randonnées. (faire)',
            promptZh: 'Tex 原题 #8：Rita 和孩子们去徒步（faire）：',
            answers: ['font'],
            hint: 'ils = font.',
            audio: 'Rita et ses enfants font des randonnées.',
            explain: 'ils font.',
            explainZh: '第三人称复数：font。'
          },
          {
            id: 'd5b5_d9',
            kind: 'fib',
            prompt: 'Joe-Bob, il ne ___ pas ses devoirs ! (faire)',
            promptZh: 'Tex 原题 #9：Joe-Bob 不写他的作业（faire）：',
            answers: ['fait'],
            hint: 'il = fait.',
            audio: 'Joe-Bob ne fait pas ses devoirs !',
            explain: 'il fait.',
            explainZh: '第三人称单数：fait。'
          },
          {
            id: 'd5b5_d10',
            kind: 'fib',
            prompt: 'Tex et Tammy, est-ce que vous ___ du ski ? (faire)',
            promptZh: 'Tex 原题 #10：Tex 和 Tammy，你们滑雪吗（faire）：',
            answers: ['faites'],
            hint: 'vous = faites.',
            audio: 'Est-ce que vous faites du ski ?',
            explain: 'vous faites.',
            explainZh: 'vous 对应 faites。'
          },
          {
            id: 'd5b5_d11',
            kind: 'fib',
            prompt: 'Joe-Bob, qu’est-ce que tu ___ à UT ? (faire)',
            promptZh: 'Tex 原题 #11：Joe-Bob，你在德克萨斯大学干嘛呢（faire）：',
            answers: ['fais'],
            hint: 'tu = fais.',
            audio: 'Joe-Bob, qu’est-ce que tu fais à UT ?',
            explain: 'tu fais.',
            explainZh: 'tu 对应 fais。'
          },
          {
            id: 'd5b5_d12',
            kind: 'fib',
            prompt: 'Watch "adorons + inf."! Les enfants de Rita : Nous adorons ___ du vélo. (faire)',
            promptZh: 'Tex 原题 #12（小心前面已有变位动词 adorons！）：我们超喜欢骑自行车：',
            answers: ['faire'],
            hint: 'adorons is conjugated → keep INFINITIVE!',
            audio: 'Nous adorons faire du vélo.',
            explain: 'Two-verb rule: adorons + INFINITIVE faire!',
            explainZh: '前面已有 adorons，第二个动词保留原形 **faire**！'
          }
        ],
        related: [
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_4', label: '5B.4 aller ("to go")' },
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_6', label: '5B.6 faire Weather Expressions' }
        ]
      },

      /* =========================================================
         PAGE 5B.6: FAIRE EXPRESSIONS I — WEATHER (virr6.html Part 1)
      ========================================================= */
      {
        id: 'v5b_6',
        code: '5B.6',
        group: 'faire Idioms',
        shortTitle: 'Weather: il fait vs. il pleut / il y a',
        title: 'faire Expressions (Part 1): Talking About the Weather (il fait vs. Non-faire)',
        titleZh: 'faire 固定表达（上）：全部法语天气句型（il fait vs il y a / pleut / neige）',
        estMin: 3,
        summary: 'Ask "Quel temps fait-il ?" and describe any weather cleanly: use impersonal "il fait + adj./du..." for temperature and sky mood (beau, chaud, frais, froid, mauvais, du brouillard, du soleil, du vent), vs. "il y a" (nuages, orage[s]) and standalone weather verbs ("il pleut" = rain, "il neige" = snow).',
        summaryZh: '掌握地道询问天气句：**Quel temps fait-il ?**（今天天气怎么样？）。天气形容词和大部分气候现象用无人称 **il fait ...**（如 `il fait beau / chaud / froid / mauvais / du soleil / du vent / du brouillard`）；但要注意**云和雷暴用 `il y a`（des nuages, de l’orage）**，而**下雨和下雪有专属动词（`il pleut / il neige`）**，千万别说成 *il fait pluie！',
        cheatSummary: [
          { label: 'il fait Weather (8 Core Tex Items)', rule: 'il fait + adj. (beau, chaud, frais, froid, mauvais) OR il fait + du (du brouillard, du soleil, du vent). Always impersonal "il"!', ruleZh: '温度/晴阴/风雾用 il fait：beau（晴朗）, chaud（热）, frais（凉爽）, froid（冷）, mauvais（坏天）, du soleil, du vent, du brouillard。' },
          { label: '5 Non-faire Weather Expressions', rule: 'il y a des nuages (cloudy), il y a des orages / de l’orage (stormy), il pleut (raining — pleuvoir), il neige (snowing — neiger).', ruleZh: '不用 faire 的五个天气：il y a des nuages（多云），il y a de l’orage / des orages（暴风雨），il pleut（下雨），il neige（下雪）。' }
        ],
        sections: [
          {
            id: 'v5b6_faire_weather',
            heading: '1. Asking the Weather & "il fait" (Temperature, Sun, Wind, Fog)',
            headingZh: '一、问天气与 il fait 八大高频表达',
            lead: 'Even when snow is falling or the sun shines, French temperature/sky adjectives use "il fait" (never *il est chaud for weather!). Compare hot/cold weather ("il fait chaud") vs. feeling hot/cold ("j’ai chaud"):',
            leadZh: '记住：**il fait chaud / froid** 说天气冷热；**j’ai chaud / froid** 说人的体感冷热；**c’est chaud / froid** 说物体温度（如热汤）：',
            cartoon: {
              src: './assets/tex_cartoons/virr6chaud.gif',
              alt: 'Il fait chaud au Texas',
              caption: 'Quel temps fait-il ? Il fait chaud ! (Compare: Corey met son maillot de bain parce qu’il fait chaud.)',
              captionZh: '天气好热（Il fait chaud）！Corey 换上泳衣去玩水。'
            },
            table: {
              headers: ['il fait Expression', 'Meaning', 'Contrast Note'],
              rows: [
                { cols: ['Quel temps fait-il ?', 'What’s the weather like?', 'Standard question (note liaison temps + il → /tɑ̃/ without -s, -t links! Or "Quel temps il fait ?")'], audio: 'Quel temps fait-il ?' },
                { cols: ['Il fait beau. / Il fait mauvais.', 'It’s nice/beautiful. / It’s bad weather.', 'General pleasant vs. nasty weather'], audio: 'Il fait beau. Il fait mauvais.' },
                { cols: ['Il fait chaud. / Il fait frais. / Il fait froid.', 'It’s hot. / It’s cool. / It’s cold.', 'Never use être here!'], audio: 'Il fait chaud. Il fait frais. Il fait froid.' },
                { cols: ['Il fait du soleil. / Il fait du vent.', 'It’s sunny. / It’s windy.', 'Uses partitive "du"'], audio: 'Il fait du soleil. Il fait du vent.' },
                { cols: ['Il fait du brouillard.', 'It’s foggy.', 'Partitive "du" + brouillard'], audio: 'Il fait du brouillard.' }
              ]
            }
          },
          {
            id: 'v5b6_nonfaire_weather',
            heading: '2. Rain, Snow, Clouds & Storms (il pleut / il neige / il y a)',
            headingZh: '二、不用 faire 的天气：下雨、下雪、多云与雷暴',
            lead: 'Watch the two cartoons below carefully—when it rains or when sunset clouds roll in, French switches to "il pleut", "il neige", or "il y a des nuages / de l’orage":',
            leadZh: '下雨、下雪要用各自专门的无人称动词（il pleut / il neige），多云与雷雨则用存在句 il y a：',
            cartoon: {
              src: './assets/tex_cartoons/virr6pleut.gif',
              alt: 'Il pleut — Edouard prend son parapluie',
              caption: 'Il pleut ! Edouard prend son parapluie parce qu’il pleut.',
              captionZh: '下雨了（Il pleut）！Edouard 赶紧拿上雨伞。'
            },
            table: {
              headers: ['Non-faire Expression', 'Meaning', 'Literal Structure'],
              rows: [
                { cols: ['Il pleut.', 'It’s raining.', 'Verb pleuvoir (impersonal: only il pleut!)'], audio: 'Il pleut.' },
                { cols: ['Il neige.', 'It’s snowing.', 'Verb neiger (impersonal: only il neige!)'], audio: 'Il neige.' },
                { cols: ['Il y a des nuages.', 'It’s cloudy.', 'There are clouds (plural)'], audio: 'Il y a des nuages.' },
                { cols: ['Il y a de l’orage. / Il y a des orages.', 'It’s stormy. / There are storms.', 'uncountable de l’orage vs. plural des orages'], audio: 'Il y a de l’orage. Il y a des orages.' }
              ]
            }
          },
          {
            id: 'v5b6_sun_scene',
            heading: '3. Sunny Walk Scene (virr6sunset)',
            headingZh: '三、Tex 与 Tammy 的晴日漫步场景',
            lead: 'Read how Tex contrasts sunny weather ("il fait du soleil") with bad weather ("il fait mauvais") inside the original Tex story:',
            leadZh: '结合原版卡通感受 "il fait du soleil" 与散步句型：',
            cartoon: {
              src: './assets/tex_cartoons/virr6sunset.gif',
              alt: 'Quand il fait du soleil, Tex et Tammy font une promenade',
              caption: 'Quand il fait du soleil, Tex et Tammy font une promenade dans le parc.',
              captionZh: '阳光明媚（il fait du soleil）时，Tex 和 Tammy 去公园散步（font une promenade）。'
            },
            examples: [
              { fr: 'Quand il fait du soleil, Tex et Tammy font une promenade dans le parc.', en: 'When it’s sunny, Tex and Tammy take a walk in the park.', zh: '出太阳的时候，Tex 和 Tammy 在公园散步。', tag: 'il fait du soleil' }
            ],
            quickCheck: {
              prompt: 'How do you say "It’s snowing and it’s cloudy" in French?',
              promptZh: '“正在下雪，而且天上有很多云”，哪一句地道？',
              options: [
                'Il neige et il y a des nuages.',
                'Il fait neige et il fait nuages.',
                'Il est neigé et il fait des nuages.',
                'Il fait de la neige et il pleut des nuages.'
              ],
              answerIdx: 0,
              explain: 'Snow uses its own verb (il neige) and clouds use il y a (il y a des nuages)—NOT faire!',
              explainZh: '下雪用独立动词 il neige，多云用存在句 il y a des nuages，都不能套 il fait！'
            }
          }
        ],
        drills: [
          {
            id: 'd5b6_d1',
            kind: 'choice',
            prompt: 'Fiona ne peut pas voir clairement la tour parce qu’il ___.',
            promptZh: 'Tex 原题 #8：Fiona 看不清钟楼，因为今天有大雾：',
            options: ['fait du brouillard', 'fait beau', 'fait du soleil', 'pleut du brouillard'],
            answerIdx: 0,
            audio: 'Fiona ne peut pas voir la tour parce qu’il fait du brouillard.',
            explain: 'il fait du brouillard = it’s foggy.',
            explainZh: '有雾 = il fait du brouillard。'
          },
          {
            id: 'd5b6_d2',
            kind: 'choice',
            prompt: 'Corey met son maillot de bain parce qu’il ___.',
            promptZh: 'Tex 原题 #9：Corey 穿上泳裤，因为天气很热：',
            options: ['fait chaud', 'fait mauvais', 'fait froid', 'neige'],
            answerIdx: 0,
            audio: 'Corey met son maillot de bain parce qu’il fait chaud.',
            explain: 'il fait chaud = it’s hot (weather).',
            explainZh: '天气热 = il fait chaud。'
          },
          {
            id: 'd5b6_d3',
            kind: 'choice',
            prompt: 'Edouard prend son parapluie parce qu’il ___.',
            promptZh: 'Tex 原题 #10：Edouard 带上雨伞，因为下雨了：',
            options: ['pleut', 'fait frais', 'fait du vent', 'fait beau'],
            answerIdx: 0,
            audio: 'Edouard prend son parapluie parce qu’il pleut.',
            explain: 'il pleut = it’s raining (NEVER *il fait pleut!).',
            explainZh: '下雨用专用动词：il pleut。'
          },
          {
            id: 'd5b6_d4',
            kind: 'choice',
            prompt: 'Tammy met des gants parce qu’il ___.',
            promptZh: 'Tex 原题 #11：Tammy 戴上手套，因为天气很冷：',
            options: ['fait froid', 'fait chaud', 'fait du soleil', 'y a du soleil'],
            answerIdx: 0,
            audio: 'Tammy met des gants parce qu’il fait froid.',
            explain: 'il fait froid = it’s cold (weather).',
            explainZh: '天气冷 = il fait froid。'
          },
          {
            id: 'd5b6_d5',
            kind: 'choice',
            prompt: 'Bette met des bottes parce qu’il ___.',
            promptZh: 'Tex 原题 #12：Bette 穿上靴子，因为下雪了：',
            options: ['neige', 'fait du vent', 'fait chaud', 'fait beau'],
            answerIdx: 0,
            audio: 'Bette met des bottes parce qu’il neige.',
            explain: 'il neige = it’s snowing.',
            explainZh: '下雪用专用动词：il neige。'
          },
          {
            id: 'd5b6_d6',
            kind: 'fib',
            prompt: 'What’s the weather like? : Quel temps ___-il ?',
            promptZh: '填空：问天气固定句型“天气怎么样？”：Quel temps ___-il ?',
            answers: ['fait'],
            hint: '3rd sg. of faire.',
            audio: 'Quel temps fait-il ?',
            explain: 'Quel temps fait-il ? = What’s the weather like?',
            explainZh: '固定句型：Quel temps fait-il ?'
          },
          {
            id: 'd5b6_d7',
            kind: 'fib',
            prompt: 'It’s sunny (with partitive): Quand il fait ___ soleil, Tex et Tammy se promènent.',
            promptZh: '介词/冠词填空：“出太阳的时候”（il fait ___ soleil）：',
            answers: ['du'],
            hint: 'masculine partitive article.',
            audio: 'Quand il fait du soleil, Tex et Tammy font une promenade.',
            explain: 'il fait DU soleil (same for du vent, du brouillard!).',
            explainZh: '太阳、风、雾这三个阳性天气名词搭配部分冠词 du：il fait du soleil / vent / brouillard。'
          },
          {
            id: 'd5b6_d8',
            kind: 'fib',
            prompt: 'It’s cool (autumn breeze): En octobre à Montréal, il fait ___. (frais / froid)',
            promptZh: '词汇填空：十月的蒙特利尔气候“凉爽”（不是严寒 froid）：',
            answers: ['frais'],
            hint: 'cool = frais.',
            audio: 'En octobre, il fait frais.',
            explain: 'il fait frais = it’s cool/chilly (vs. froid = cold).',
            explainZh: '凉爽用 frais（注意阴阳性不变因为主语是无人称 il）。'
          },
          {
            id: 'd5b6_d9',
            kind: 'fib',
            prompt: 'It’s cloudy (non-faire!): Aujourd’hui, il ___ des nuages.',
            promptZh: '句型填空（注意不用 faire！）：今天多云（il ___ des nuages）：',
            answers: ['y a'],
            hint: 'existential expression "there are".',
            audio: 'Aujourd’hui, il y a des nuages.',
            explain: 'il y a des nuages = it’s cloudy.',
            explainZh: '多云用 il y a：il y a des nuages。'
          },
          {
            id: 'd5b6_d10',
            kind: 'fib',
            prompt: 'It’s stormy: Attention, il y a de l’___ ! (storm)',
            promptZh: '词汇填空：要打雷暴了！（il y a de l’___ ）：',
            answers: ['orage'],
            hint: 'storm = orage.',
            audio: 'Attention, il y a de l’orage !',
            explain: 'il y a de l’orage / il y a des orages = it’s stormy.',
            explainZh: '暴风雨：il y a de l’orage / des orages。'
          }
        ],
        related: [
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_5', label: '5B.5 faire Conjugation' },
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_7', label: '5B.7 faire Sports & Chores' }
        ]
      },

      /* =========================================================
         PAGE 5B.7: FAIRE EXPRESSIONS II — SPORTS, LEISURE & CHORES (virr6.html Part 2)
      ========================================================= */
      {
        id: 'v5b_7',
        code: '5B.7',
        group: 'faire Idioms',
        shortTitle: 'faire + Sports, Leisure & Chores',
        title: 'faire Expressions (Part 2): Sports & Leisure (du ski, du vélo) + Household Chores (le ménage)',
        titleZh: 'faire 固定表达（下）：体育休闲活动（faire du ski/vélo）与家务日常（做饭/洗衣/打扫）',
        estMin: 3,
        summary: 'Learn Tex’s 9 essential "faire de + sport/leisure" phrases (ski, vélo, bicyclette, bateau, voile, planche à voile, randonnées, lecture, une promenade) and 8 everyday household chore idioms (achats/shopping, cuisine, courses, lessive, lit, marché, ménage, vaisselle).',
        summaryZh: '掌握体育运动、休闲消遣与日常家务最离不开的 **faire** 短语库！做某项个人/自然运动习惯用 **faire de + 缩合冠词（du / de la / de l’ / des）**；而具体家务活往往固定搭配定冠词或部分冠词（`faire la cuisine / la lessive / le lit / le ménage / la vaisselle / des courses`）。',
        cheatSummary: [
          { label: 'Sports & Leisure: faire + de (9 Tex Items)', rule: 'de la bicyclette, du bateau, de la lecture, de la planche à voile, des randonnées, du ski, du vélo, de la voile, une promenade.', ruleZh: '休闲运动：骑车（du vélo / de la bicyclette）、滑雪（du ski）、徒步（des randonnées）、帆船/帆板（de la voile / planche à voile）、散步（une promenade）、阅读（de la lecture）。' },
          { label: 'Household Chores: faire + Article (8 Tex Items)', rule: 'des achats (du shopping), la cuisine, des courses, la lessive (laundry), le lit, le marché, le ménage (housework), la vaisselle (dishes).', ruleZh: '八大家务：做饭（la cuisine）、洗衣（la lessive）、洗碗（la vaisselle）、扫除（le ménage）、铺床（le lit）、买菜采购（le marché / des courses）、购物（du shopping / des achats）。' }
        ],
        sections: [
          {
            id: 'v5b7_sports',
            heading: '1. Sports & Leisure with "faire" (9 Tex Expressions)',
            headingZh: '一、体育与休闲活动（9 项 Tex 必背表达）',
            lead: 'French uses "faire de + activity" (du / de la / des) for many sports and outdoor pastimes—note that "une promenade" (to take a walk) uses une instead of de:',
            leadZh: '记住 faire 搭配绝大多数个人运动与户外消遣时接介词 de 缩合冠词（du / de la / des），唯独散步用 une promenade：',
            cartoon: {
              src: './assets/tex_cartoons/virr6ski.gif',
              alt: 'Tex et Tammy font du ski',
              caption: 'faire du ski (skiing), faire du vélo, faire de la voile, faire des randonnées, faire une promenade.',
              captionZh: '滑雪（du ski）、骑行（du vélo）、帆船（de la voile）、徒步（des randonnées）全都用 faire！'
            },
            table: {
              headers: ['Expression', 'English Meaning', 'Article / Grammar Note'],
              rows: [
                { cols: ['faire du ski / du vélo / du bateau', 'to ski / cycle / go boating', 'Masculine singular → du (de + le)'], audio: 'faire du ski, faire du vélo, faire du bateau' },
                { cols: ['faire de la bicyclette / de la voile / de la planche à voile', 'to cycle / go sailing / windsurfing', 'Feminine singular → de la'], audio: 'faire de la planche à voile, faire de la voile' },
                { cols: ['faire de la lecture', 'to read (do some reading)', 'Feminine singular → de la'], audio: 'faire de la lecture' },
                { cols: ['faire des randonnées', 'to go hiking', 'Feminine plural → des (de + les)'], audio: 'faire des randonnées' },
                { cols: ['faire une promenade', 'to take a walk', 'Indefinite article une'], audio: 'faire une promenade' }
              ]
            }
          },
          {
            id: 'v5b7_chores',
            heading: '2. Household Chores & Bad-Weather Scene (8 Tex Expressions)',
            headingZh: '二、八大家务高频短语与坏天气在家场景',
            lead: 'Notice the handy pair: "faire la lessive" = wash clothes, "faire la vaisselle" = wash dishes, "faire le ménage" = clean the house, and "faire des courses / le marché" = run errands / buy groceries!',
            leadZh: '分清最容易混淆的家务双胞胎：**la lessive（洗衣服）vs. la vaisselle（洗碗）**；**le ménage（做家务大扫除）vs. les courses（日常采购）**：',
            cartoon: {
              src: './assets/tex_cartoons/virr6menage.gif',
              alt: 'Quand il fait mauvais, Tex fait le ménage et Tammy fait de la lecture',
              caption: 'Quand il fait mauvais, Tex fait le ménage et Tammy fait de la lecture.',
              captionZh: '天气不好时（il fait mauvais），Tex 在家做打扫（fait le ménage），Tammy 宅家看书（fait de la lecture）。'
            },
            table: {
              headers: ['Chore Expression', 'Meaning', 'Chore Expression', 'Meaning'],
              rows: [
                { cols: ['faire des achats / du shopping', 'to go shopping', 'faire la lessive', 'to do the laundry'], audio: 'faire du shopping, faire la lessive' },
                { cols: ['faire la cuisine', 'to do the cooking', 'faire le lit', 'to make the bed'], audio: 'faire la cuisine, faire le lit' },
                { cols: ['faire des courses', 'to run errands / shop', 'faire le marché', 'to do grocery shopping'], audio: 'faire des courses, faire le marché' },
                { cols: ['faire le ménage', 'to do the housework', 'faire la vaisselle', 'to do the dishes'], audio: 'faire le ménage, faire la vaisselle' }
              ]
            },
            quickCheck: {
              prompt: 'What is the difference between "faire la lessive" and "faire la vaisselle"?',
              promptZh: '“faire la lessive” 和 “faire la vaisselle” 千万别搞混，它们分别指：',
              options: [
                'la lessive = laundry (clothes); la vaisselle = dishes (plates/cups).',
                'la lessive = dishes; la vaisselle = laundry.',
                'la lessive = cooking; la vaisselle = sweeping.',
                'Both mean grocery shopping.'
              ],
              answerIdx: 0,
              explain: 'Corey fait la lessive parce que ses vêtements sont sales (dirty clothes = la lessive!). Dirty plates = la vaisselle.',
              explainZh: 'clothes（衣服）用 **la lessive**，dishes（碗盘）用 **la vaisselle**！'
            }
          }
        ],
        drills: [
          {
            id: 'd5b7_d1',
            kind: 'choice',
            prompt: 'Corey : Je ___ parce que mes vêtements sont sales.',
            promptZh: 'Tex 原题 #1：Corey 说“我得去洗衣服，因为衣服都脏了”：',
            options: ['fais la lessive', 'fais la vaisselle', 'fais le marché', 'fais la cuisine'],
            answerIdx: 0,
            audio: 'Je fais la lessive parce que mes vêtements sont sales.',
            explain: 'Dirty clothes → faire la lessive (do the laundry).',
            explainZh: '衣服脏了要洗衣服 → faire la lessive。'
          },
          {
            id: 'd5b7_d2',
            kind: 'choice',
            prompt: 'Tammy ___ parce que Tex a faim.',
            promptZh: 'Tex 原题 #2：因为 Tex 饿了，Tammy 下厨做饭：',
            options: ['fait la cuisine', 'fait le ménage', 'fait la lessive', 'fait des randonnées'],
            answerIdx: 0,
            audio: 'Tammy fait la cuisine parce que Tex a faim.',
            explain: 'hungry Tex → faire la cuisine (cooking).',
            explainZh: '饿了就要做饭 → faire la cuisine。'
          },
          {
            id: 'd5b7_d3',
            kind: 'choice',
            prompt: 'Au désert, Corey et Joe-Bob ___.',
            promptZh: 'Tex 原题 #3：在沙漠里，Corey 和 Joe-Bob 去徒步远足（总不能玩帆板吧！）：',
            options: ['font des randonnées', 'font de la planche à voile', 'font du bateau', 'font du ski nautique'],
            answerIdx: 0,
            audio: 'Au désert, Corey et Joe-Bob font des randonnées.',
            explain: 'No water in the desert! They go hiking → font des randonnées.',
            explainZh: '沙漠里没有水，当然是徒步远足：font des randonnées。'
          },
          {
            id: 'd5b7_d4',
            kind: 'choice',
            prompt: 'Fiona : Tammy, est-ce que tu ___ à la bibliothèque ?',
            promptZh: 'Tex 原题 #4：在图书馆里当然是在做功课（而不是滑雪！）：',
            options: ['fais tes devoirs', 'fais du ski', 'fais la vaisselle', 'fais de la voile'],
            answerIdx: 0,
            audio: 'Tammy, est-ce que tu fais tes devoirs à la bibliothèque ?',
            explain: 'At the library → faire ses devoirs.',
            explainZh: '在图书馆写作业：fais tes devoirs。'
          },
          {
            id: 'd5b7_d5',
            kind: 'choice',
            prompt: 'Joe-Bob : Nous rangeons notre chambre. Donc, nous ___.',
            promptZh: 'Tex 原题 #5：我们在整理卧室，所以我们在叠被铺床：',
            options: ['faisons le lit', 'faisons du vélo', 'faisons la vaisselle', 'faisons du bateau'],
            answerIdx: 0,
            audio: 'Nous rangeons notre chambre. Donc, nous faisons le lit.',
            explain: 'Tidying the bedroom → faire le lit (make the bed).',
            explainZh: '整理房间对应铺床：faisons le lit。'
          },
          {
            id: 'd5b7_d6',
            kind: 'choice',
            prompt: 'Tammy cherche une nouvelle robe. Donc, elle ___.',
            promptZh: 'Tex 原题 #6：Tammy 在挑新裙子，所以她在逛街购物：',
            options: ['fait du shopping', 'fait du bateau', 'fait la lessive', 'fait des randonnées'],
            answerIdx: 0,
            audio: 'Tammy cherche une nouvelle robe. Donc, elle fait du shopping.',
            explain: 'Looking for a new dress → fait du shopping (or fait des achats).',
            explainZh: '买新裙子就是逛街购物：fait du shopping。'
          },
          {
            id: 'd5b7_d7',
            kind: 'choice',
            prompt: 'Edouard cherche des provisions. Donc, il ___.',
            promptZh: 'Tex 原题 #7：Edouard 去采买食物原料，所以他在逛市场买菜：',
            options: ['fait le marché', 'fait de la voile', 'fait du ski', 'fait la lessive'],
            answerIdx: 0,
            audio: 'Edouard cherche des provisions. Donc, il fait le marché.',
            explain: 'Shopping for food supplies → fait le marché.',
            explainZh: '采购食材对应去市场买菜：fait le marché。'
          },
          {
            id: 'd5b7_d8',
            kind: 'fib',
            prompt: 'Clean the house: Quand il fait mauvais, Tex fait le ___.',
            promptZh: '词汇填空：坏天气待在家里“做大扫除”（faire le ___）：',
            answers: ['ménage', 'menage'],
            hint: 'housework = le ménage.',
            audio: 'Quand il fait mauvais, Tex fait le ménage.',
            explain: 'faire le ménage = to do housework/cleaning.',
            explainZh: '做家务大扫除：faire le ménage。'
          },
          {
            id: 'd5b7_d9',
            kind: 'fib',
            prompt: 'Do the dishes: Après le dîner, nous faisons la ___.',
            promptZh: '词汇填空：晚饭后我们“洗碗”（faire la ___）：',
            answers: ['vaisselle'],
            hint: 'dishes = la vaisselle.',
            audio: 'Après le dîner, nous faisons la vaisselle.',
            explain: 'faire la vaisselle = to do the dishes.',
            explainZh: '洗碗：faire la vaisselle。'
          },
          {
            id: 'd5b7_d10',
            kind: 'fib',
            prompt: 'Take a walk: Quand il fait du soleil, Tex et Tammy font une ___ dans le parc.',
            promptZh: '词汇填空：晴天的时候他们在公园“散步”（faire une ___）：',
            answers: ['promenade'],
            hint: 'walk = une promenade.',
            audio: 'Tex et Tammy font une promenade dans le parc.',
            explain: 'faire une promenade = to take a walk.',
            explainZh: '散步：faire une promenade。'
          }
        ],
        related: [
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_6', label: '5B.6 faire Weather Expressions' },
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_8', label: '5B.8 venir ("to come") & Family' }
        ]
      },

      /* =========================================================
         PAGE 5B.8: VENIR (virr8.html — NO CARTOON ON TEX)
      ========================================================= */
      {
        id: 'v5b_8',
        code: '5B.8',
        group: 'High-Frequency Irregulars',
        shortTitle: 'venir ("to come"), tenir & Nasal Clue',
        title: 'venir ("to come"): Nasal vs. Non-Nasal Audio Clue & Family (devenir, revenir, tenir)',
        titleZh: '高频不规则动词 ①：venir（来）及同族词（devenir / revenir / tenir）与鼻音辨析',
        estMin: 4,
        summary: 'Conjugate venir (je viens, tu viens, il/elle/on vient, nous venons, vous venez, ils/elles viennent; past participle: venu — takes être!). Hear the razor-sharp singular vs. plural contrast: nasal vowel in 3rd sg. (il vient /vjɛ̃/) vs. non-nasal vowel + /n/ in 3rd pl. (ils viennent /vjɛn/)! Master devenir, revenir, tenir, and tenir à.',
        summaryZh: '背熟极高频的 **venir**（`viens / viens / vient / venons / venez / viennent`，过去分词 **venu**，助动词用 être）及同族家族（**devenir 变成、revenir 回来、tenir 拿着/坚持、tenir à 珍视/执意做**）。记住一耳朵就能分清单复数的语音技巧：**单数 vient 发鼻元音 /vjɛ̃/**，而**第三人称复数 viennent 变成双写 nn，不鼻化并发出清晰 /n/ 音（/vjɛn/）**！（`virr8` 原站本页无配图。）',
        cheatSummary: [
          { label: 'Present Tense of venir (p.p. venu)', rule: 'je viens · tu viens · il/elle/on vient (/vjɛ̃/) · nous venons (/vənɔ̃/) · vous venez (/vəne/) · ils/elles viennent (/vjɛn/!).', ruleZh: '六格：viens, viens, vient, venons, venez, viennent（注意单数有 i，nous/vous 没有 i，ils 复数加倍 nn！）。' },
          { label: 'Same Pattern (4 Family Verbs)', rule: 'devenir (become), revenir (come back), tenir (hold/keep), tenir à (value / be anxious to + inf.). Watch: "tout le monde" is ALWAYS singular (vient)!', ruleZh: '同族：devenir（变成）、revenir（回来）、tenir（拿着）、tenir à（看重/迫切想……）。另外注意 tout le monde 永远搭配单数 vient！' }
        ],
        sections: [
          {
            id: 'v5b8_paradigm',
            heading: '1. Paradigm of "venir" · Nasal vs. Double-nn Oral Sound',
            headingZh: '一、venir 变位表、同族动词与单复数听辨',
            lead: 'Look carefully at the stem vowels across the table: singular inserts -ie- (nasal /jɛ̃/); nous & vous drop the -i- (venons, venez); 3rd plural brings -ie- back and doubles -nn- so the nasal disappears and /n/ rings out clearly (/vjɛn/)!',
            leadZh: '看准词干变化：单数加 i 并带鼻音，nous / vous 不加 i（venons / venez），ils / elles 恢复 i 并双写 nn（鼻音消失，读出 /n/）：',
            table: {
              headers: ['Person', 'venir (to come — p.p. venu)', 'tenir (to hold — p.p. tenu)', 'Audio & Meaning Clue'],
              rows: [
                { cols: ['je / tu', 'je viens · tu viens', 'je tiens · tu tiens', 'Nasal /ɛ̃/, silent -s'], audio: 'je viens, je tiens' },
                { cols: ['il / elle / on', 'il vient', 'il tient', 'Nasal /vjɛ̃/, silent -t!'], audio: 'il vient, tout le monde vient' },
                { cols: ['nous', 'nous venons', 'nous tenons', 'NO "i" in nous! (/vənɔ̃/)'], audio: 'nous venons, nous tenons' },
                { cols: ['vous', 'vous venez', 'vous tenez', 'NO "i" in vous! (/vəne/)'], audio: 'vous venez, vous tenez' },
                { cols: ['ils / elles', 'ils viennent', 'ils tiennent', 'Double -nn- → oral /vjɛn/, NOT nasal!'], audio: 'ils viennent, ils tiennent' }
              ]
            },
            examples: [
              { fr: 'Bette : Tiens, Tammy, qu’est-ce que tu deviens ?', en: 'Bette: Hey, Tammy, what have you been up to? (literally: what are you becoming?)', zh: 'Bette：嗨，Tammy，你最近怎么样？（Tiens! 是“嗨/瞧”；qu’est-ce que tu deviens? = 你近况如何？）', tag: 'Tiens! / devenir' },
              { fr: 'Tammy : Oh, je prépare une grande fête pour l’anniversaire de Tex. Corey et Joe-Bob, ils viennent. Tout le monde vient, bien sûr, sauf Fiona.', en: 'Tammy: I’m preparing a big party for Tex’s birthday. Corey and Joe-Bob are coming. Everyone’s coming, of course, except Fiona.', zh: 'Tammy：我正在筹备 Tex 的生日大派对！Corey 和 Joe-Bob 要来（ils viennent），所有人都会来（Tout le monde vient），除了 Fiona。', tag: 'ils viennent vs. tout le monde vient' }
            ],
            quickCheck: {
              prompt: 'Look closely at "Tout le monde ___ chez Tammy ce soir." (venir). Should the verb be singular or plural?',
              promptZh: '"Tout le monde"（所有人）虽然意思指很多人，但法语里后面动词必须配单数还是复数？',
              options: [
                'Singular: Tout le monde VIENT (because "le monde" is a 3rd-person singular noun)!',
                'Plural: Tout le monde viennent.',
                '1st person plural: Tout le monde venons.',
                'Both vient and viennent are equally standard.'
              ],
              answerIdx: 0,
              explain: 'In French, "tout le monde" (literally "all the world") is grammatically 3rd-person SINGULAR → Tout le monde vient !',
              explainZh: '超级高频陷阱！tout le monde 字面是阳性单数名词 le monde，因此**永远只能跟第三人称单数动词**：Tout le monde vient！'
            }
          }
        ],
        drills: [
          {
            id: 'd5b8_d1',
            kind: 'fib',
            prompt: 'Paw-Paw ___ de Louisiane. (venir)',
            promptZh: 'Tex 原题 #1：Paw-Paw 来自路易斯安那（venir）：',
            answers: ['vient'],
            hint: '3rd sg. = vient.',
            audio: 'Paw-Paw vient de Louisiane.',
            explain: 'Paw-Paw (= il) vient.',
            explainZh: '第三人称单数：vient。'
          },
          {
            id: 'd5b8_d2',
            kind: 'fib',
            prompt: 'Tex et Edouard ___ de France ? (venir)',
            promptZh: 'Tex 原题 #2：Tex 和 Edouard 来自法国吗（venir）：',
            answers: ['viennent'],
            hint: '3rd pl. doubles -nn-!',
            audio: 'Tex et Edouard viennent de France ?',
            explain: 'ils viennent (double -nn-).',
            explainZh: '第三人称复数双写 nn：viennent。'
          },
          {
            id: 'd5b8_d3',
            kind: 'fib',
            prompt: 'Tammy, tu ___ d’où ? (venir)',
            promptZh: 'Tex 原题 #3：Tammy，你从哪儿来的（venir）：',
            answers: ['viens'],
            hint: 'tu = viens.',
            audio: 'Tammy, tu viens d’où ?',
            explain: 'tu viens.',
            explainZh: 'tu 对应 viens。'
          },
          {
            id: 'd5b8_d4',
            kind: 'fib',
            prompt: 'Joe-Bob : Je ___ de College Station. (venir)',
            promptZh: 'Tex 原题 #4：我来自 College Station（venir）：',
            answers: ['viens'],
            hint: 'je = viens.',
            audio: 'Je viens de College Station.',
            explain: 'je viens.',
            explainZh: 'je 对应 viens。'
          },
          {
            id: 'd5b8_d5',
            kind: 'fib',
            prompt: 'Bette, qu’est-ce que tu ___ ? (devenir)',
            promptZh: 'Tex 原题 #5：Bette，你近来如何（devenir）：',
            answers: ['deviens'],
            hint: 'de + viens.',
            audio: 'Bette, qu’est-ce que tu deviens ?',
            explain: 'tu deviens.',
            explainZh: 'tu 对应 deviens。'
          },
          {
            id: 'd5b8_d6',
            kind: 'fib',
            prompt: 'Watch "va + inf."! Trey va ___ psychologue. (devenir)',
            promptZh: 'Tex 原题 #6（小心前面已经有 va！）：Trey 将要成为心理学家：',
            answers: ['devenir'],
            hint: 'near future "va" is already conjugated → keep the INFINITIVE!',
            audio: 'Trey va devenir psychologue.',
            explain: 'va + INFINITIVE → devenir!',
            explainZh: '前面已有近将来助动词 va，因此保留动词原形 **devenir**！'
          },
          {
            id: 'd5b8_d7',
            kind: 'fib',
            prompt: 'Corey, toi et Joe-Bob, vous ___ ce soir, n’est-ce pas ? (revenir)',
            promptZh: 'Tex 原题 #7：你们今晚会回来，对吧（revenir）：',
            answers: ['revenez'],
            hint: 'NO "i" in vous form!',
            audio: 'Vous revenez ce soir, n’est-ce pas ?',
            explain: 'vous revenez (drop the -i-!).',
            explainZh: 'vous 形式去掉 i：revenez。'
          },
          {
            id: 'd5b8_d8',
            kind: 'fib',
            prompt: 'Tex et Tammy : Nous ___ à habiter en France un jour. (tenir)',
            promptZh: 'Tex 原题 #8：我们执意/非常盼望有一天去法国住（tenir à + inf.）：',
            answers: ['tenons'],
            hint: 'NO "i" in nous form!',
            audio: 'Nous tenons à habiter en France un jour.',
            explain: 'nous tenons (tenir à + inf. = to be anxious/eager to).',
            explainZh: 'nous 形式去掉 i：tenons。'
          },
          {
            id: 'd5b8_d9',
            kind: 'fib',
            prompt: 'Rita et ses enfants ___ de H.E.B. (revenir)',
            promptZh: 'Tex 原题 #9：Rita 和孩子们从超市回来了（revenir）：',
            answers: ['reviennent'],
            hint: '3rd pl. doubles -nn-!',
            audio: 'Rita et ses enfants reviennent de H.E.B.',
            explain: 'ils reviennent.',
            explainZh: '复数第三人称双写 nn：reviennent。'
          },
          {
            id: 'd5b8_d10',
            kind: 'fib',
            prompt: 'Joe-Bob et Corey ne ___ pas toujours en classe. (venir)',
            promptZh: 'Tex 原题 #10：Joe-Bob 和 Corey 并不总是来上课（venir）：',
            answers: ['viennent'],
            hint: '3rd pl. doubles -nn-!',
            audio: 'Joe-Bob et Corey ne viennent pas toujours en classe.',
            explain: 'ils viennent.',
            explainZh: '复数第三人称双写 nn：viennent。'
          },
          {
            id: 'd5b8_d11',
            kind: 'fib',
            prompt: 'Watch "tout le monde"! Tout le monde ___ chez Tammy ce soir. (venir)',
            promptZh: 'Tex 原题 #11（注意主语 tout le monde 语法上永远是单数！）：今晚大家都来 Tammy 家：',
            answers: ['vient'],
            hint: 'tout le monde takes 3rd SINGULAR!',
            audio: 'Tout le monde vient chez Tammy ce soir.',
            explain: 'Tout le monde = singular → vient!',
            explainZh: 'tout le monde 必须接单数：vient！'
          },
          {
            id: 'd5b8_d12',
            kind: 'fib',
            prompt: 'Tammy : Tex, tu ___ mon sac un instant ? (tenir)',
            promptZh: 'Tex 原题 #12：Tex，你帮我拿一下包好吗（tenir）：',
            answers: ['tiens'],
            hint: 'tu = tiens.',
            audio: 'Tex, tu tiens mon sac un instant ?',
            explain: 'tu tiens.',
            explainZh: 'tu 对应 tiens。'
          }
        ],
        related: [
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_7', label: '5B.7 faire Sports & Chores' },
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_9', label: '5B.9 boire, croire & voir' }
        ]
      },

      /* =========================================================
         PAGE 5B.9: BOIRE, CROIRE, VOIR (virr9.html)
      ========================================================= */
      {
        id: 'v5b_9',
        code: '5B.9',
        group: 'High-Frequency Irregulars',
        shortTitle: 'boire, croire & voir (Boot Pattern!)',
        title: 'Irregular Trio: "boire" (drink), "croire" (believe) & "voir" (see)',
        titleZh: '高频不规则动词 ②：boire（喝）、croire（相信）、voir（看见）三兄弟',
        estMin: 3,
        summary: 'See the clean boot symmetry shared by boire (p.p. bu), croire (p.p. cru), and voir (p.p. vu): singular uses -s, -s, -t; croire and voir swap -i- → -y- in nous/vous (croyons, voyez) then switch back to -ient in ils/elles (croient, voient), while boire transforms its stem in nous/vous to buv- (buvons, buvez) and adds -v- in ils/elles boivent!',
        summaryZh: '把 **boire / croire / voir** 放在一起背省一半力气！它们的单数一模一样（`-s, -s, -t`：`bois / crois / vois`），而且全是**靴形规律**：① **croire & voir** 在靴外 nous / vous 把 `i` 改成 `y`（`nous croyons / vous voyez`），到了 ils / elles 变回 `i` 加 `-ent`（`ils croient / ils voient`）；② **boire** 更特别，在 nous / vous 词干换成 **buv-**（`buvons / buvez`），ils / elles 恢复 `boi-` 加 `v`（`boivent`）！过去分词也押韵：**bu / cru / vu**。',
        cheatSummary: [
          { label: 'croire & voir (i → y in nous / vous!)', rule: 'croire (cru): crois, crois, croit · croyons, croyez, croient. voir (vu): vois, vois, voit · voyons, voyez, voient.', ruleZh: 'croire & voir 完全同款：靴内保留 i（croient / voient），靴外 nous/vous 用 y（croyons / voyez）！过去分词 cru, vu。' },
          { label: 'boire (Stem Shift in Plurals, p.p. bu)', rule: 'je bois, tu bois, il boit · nous buvons, vous buvez, ils/elles boivent (clear /v/ sound!).', ruleZh: 'boire（喝）：单数 bois/bois/boit，复数一二换成 buvons/buvez，复数三找回 v 写成 boivent（读出 /v/ 音）！过去分词 bu。' }
        ],
        sections: [
          {
            id: 'v5b9_trio',
            heading: '1. Side-by-Side Table: boire, croire & voir + Fiona/Corey Scene',
            headingZh: '一、三词对比变位表与 Fiona 救治 Corey 对话',
            lead: 'Notice how past participles rhyme too (bu, cru, vu), and how the boot pattern explains why "ils croient" and "ils voient" keep -i- while "nous croyons" and "nous voyons" switch to -y-:',
            leadZh: '对比下方三列，一眼掌握三词同异；再读 Fiona 发现 Corey 喝了不该喝的东西时的搞笑独白：',
            cartoon: {
              src: './assets/tex_cartoons/virr9.gif',
              alt: 'Fiona s’inquiète pour Corey: Qu’est-ce que tu bois ?',
              caption: 'Fiona: Corey, tu as l’air malade ! Mais qu’est-ce que tu bois ? Tu me vois ? Je crois qu’il va crever !',
              captionZh: 'Fiona：Corey 你脸色好差！你在喝什么（tu bois）？你看得见我吗（tu me vois）？我看（je crois）他要挂了！'
            },
            table: {
              headers: ['Person', 'boire (drink — p.p. bu)', 'croire (believe — p.p. cru)', 'voir (see — p.p. vu)'],
              rows: [
                { cols: ['je / tu', 'je bois · tu bois', 'je crois · tu crois', 'je vois · tu vois'], audio: 'je bois, je crois, je vois' },
                { cols: ['il / elle / on', 'il boit', 'il croit', 'il voit'], audio: 'il boit, il croit, il voit' },
                { cols: ['nous', 'nous buvons (buv-!)', 'nous croyons (-y-!)', 'nous voyons (-y-!)'], audio: 'nous buvons, nous croyons, nous voyons' },
                { cols: ['vous', 'vous buvez (buv-!)', 'vous croyez (-y-!)', 'vous voyez (-y-!)'], audio: 'vous buvez, vous croyez, vous voyez' },
                { cols: ['ils / elles', 'ils boivent (/vwav/)', 'ils croient (back to -i-!)', 'ils voient (back to -i-!)'], audio: 'ils boivent, ils croient, ils voient' }
              ]
            },
            examples: [
              { fr: 'Fiona : Corey, tu as l’air malade ! Mais qu’est-ce que tu bois ?', en: 'Fiona: Corey, you look sick! What are you drinking?', zh: 'Fiona：Corey 你看起来病了！你在喝啥呢？', tag: 'tu bois' },
              { fr: 'Hé, tu m’entends ? Tu me vois ? Oh, là, là, je crois qu’il va crever !', en: 'Hey, do you hear me? Do you see me? Omigod, I think he’s gonna croak!', zh: '喂你听得见吗？看得见我吗？天哪，我看他快不行了！', tag: 'vois / crois' }
            ],
            quickCheck: {
              prompt: 'Look carefully at 3rd person plural ("ils / elles") of boire, croire, and voir. Which row is 100% accurate?',
              promptZh: '第三人称复数（ils/elles）中，以下哪一行把 boire, croire, voir 全部拼对了？',
              options: [
                'ils boivent · ils croient · ils voient',
                'ils buvent · ils croyent · ils voyent',
                'ils boient · ils croient · ils voyent',
                'ils buvent · ils croient · ils voient'
              ],
              answerIdx: 0,
              explain: 'Inside the boot (ils/elles): boire adds -v- (boivent), while croire and voir keep -i- (croient, voient)—never *croyent/*voyent!',
              explainZh: 'ils/elles 在靴子里面：boire 用 boivent（不写 *buvent），croire 和 voir 恢复 i 写作 croient 和 voient！'
            }
          }
        ],
        drills: [
          {
            id: 'd5b9_d1',
            kind: 'fib',
            prompt: 'Joe-Bob et Corey ___ beaucoup de bière. (boire)',
            promptZh: 'Tex 原题 #1：Joe-Bob 和 Corey 喝很多啤酒（boire）：',
            answers: ['boivent'],
            hint: '3rd pl. = boivent (NOT *buvent!).',
            audio: 'Joe-Bob et Corey boivent beaucoup de bière.',
            explain: 'ils boivent.',
            explainZh: '第三人称复数：boivent。'
          },
          {
            id: 'd5b9_d2',
            kind: 'fib',
            prompt: 'Tex ___ qu’il est français. (croire)',
            promptZh: 'Tex 原题 #2：Tex 以为自己是法国人（croire）：',
            answers: ['croit'],
            hint: '3rd sg. = croit.',
            audio: 'Tex croit qu’il est français.',
            explain: 'Tex (= il) croit.',
            explainZh: '第三人称单数：croit。'
          },
          {
            id: 'd5b9_d3',
            kind: 'fib',
            prompt: 'Fiona dit à Corey : Je ne te ___ pas ! (croire)',
            promptZh: 'Tex 原题 #3：Fiona 对 Corey 说：“我不相信你！”（croire）：',
            answers: ['crois'],
            hint: 'je = crois.',
            audio: 'Je ne te crois pas !',
            explain: 'je crois.',
            explainZh: 'je 对应 crois。'
          },
          {
            id: 'd5b9_d4',
            kind: 'fib',
            prompt: 'Nous ___ que Corey est fou. (croire)',
            promptZh: 'Tex 原题 #4：我们觉得 Corey 疯了（croire，注意 nous 变 y！）：',
            answers: ['croyons'],
            hint: 'nous outside boot switches i → y!',
            audio: 'Nous croyons que Corey est fou.',
            explain: 'nous croyons.',
            explainZh: 'nous 把 i 换 y → croyons。'
          },
          {
            id: 'd5b9_d5',
            kind: 'fib',
            prompt: 'Fiona ne ___ jamais d’alcool. (boire)',
            promptZh: 'Tex 原题 #5：Fiona 从不喝酒（boire）：',
            answers: ['boit'],
            hint: '3rd sg. = boit.',
            audio: 'Fiona ne boit jamais d’alcool.',
            explain: 'elle boit.',
            explainZh: '第三人称单数：boit。'
          },
          {
            id: 'd5b9_d6',
            kind: 'fib',
            prompt: 'Edouard et Tex ___ que Bette est gentille. (croire)',
            promptZh: 'Tex 原题 #6：Edouard 和 Tex 相信 Bette 很善良（croire）：',
            answers: ['croient'],
            hint: '3rd pl. keeps -i-!',
            audio: 'Edouard et Tex croient que Bette est gentille.',
            explain: 'ils croient.',
            explainZh: 'ils 恢复 i → croient。'
          },
          {
            id: 'd5b9_d7',
            kind: 'fib',
            prompt: 'Vous ___ Tex et Tammy danser ? (voir)',
            promptZh: 'Tex 原题 #7：您看见 Tex 和 Tammy 在跳舞吗（voir，注意 vous 变 y！）：',
            answers: ['voyez'],
            hint: 'vous outside boot switches i → y!',
            audio: 'Vous voyez Tex et Tammy danser ?',
            explain: 'vous voyez.',
            explainZh: 'vous 把 i 换 y → voyez。'
          },
          {
            id: 'd5b9_d8',
            kind: 'fib',
            prompt: 'Tex, est-ce que tu ___ du café ? (boire)',
            promptZh: 'Tex 原题 #8：Tex，你喝咖啡吗（boire）：',
            answers: ['bois'],
            hint: 'tu = bois.',
            audio: 'Tex, est-ce que tu bois du café ?',
            explain: 'tu bois.',
            explainZh: 'tu 对应 bois。'
          },
          {
            id: 'd5b9_d9',
            kind: 'fib',
            prompt: 'Tu ___ que Fiona aime Corey ? (croire)',
            promptZh: 'Tex 原题 #9：你觉得 Fiona 喜欢 Corey 吗（croire）：',
            answers: ['crois'],
            hint: 'tu = crois.',
            audio: 'Tu crois que Fiona aime Corey ?',
            explain: 'tu crois.',
            explainZh: 'tu 对应 crois。'
          },
          {
            id: 'd5b9_d10',
            kind: 'fib',
            prompt: 'À UT on ___ des tatous qui parlent français. (voir)',
            promptZh: 'Tex 原题 #10：在德克萨斯大学能看到会说法语的犰狳（主语是 on！）：',
            answers: ['voit'],
            hint: 'on conjugates like il/elle → voit!',
            audio: 'À UT on voit des tatous qui parlent français.',
            explain: 'on voit.',
            explainZh: 'on 用第三人称单数：voit。'
          },
          {
            id: 'd5b9_d11',
            kind: 'fib',
            prompt: 'Bette et Tammy, vous ___ trop de vin blanc ! (boire)',
            promptZh: 'Tex 原题 #11：Bette 和 Tammy，你们喝太多白葡萄酒了（boire，注意 vous 用 buv-！）：',
            answers: ['buvez'],
            hint: 'vous stem switches to buv- + -ez!',
            audio: 'Vous buvez trop de vin blanc !',
            explain: 'vous buvez.',
            explainZh: 'vous 词干换成 buv- → buvez！'
          },
          {
            id: 'd5b9_d12',
            kind: 'fib',
            prompt: 'Les enfants de Rita ne ___ pas souvent leur père. (voir)',
            promptZh: 'Tex 原题 #12：Rita 的孩子们不常常见到他们的爸爸（voir）：',
            answers: ['voient'],
            hint: '3rd pl. keeps -i- + -ent.',
            audio: 'Les enfants de Rita ne voient pas souvent leur père.',
            explain: 'ils voient.',
            explainZh: 'ils 恢复 i → voient。'
          }
        ],
        related: [
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_8', label: '5B.8 venir & Family' },
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_10', label: '5B.10 savoir vs. connaître (Forms)' }
        ]
      },

      /* =========================================================
         PAGE 5B.10: SAVOIR VS. CONNAÎTRE PART 1 (virr10.html Part 1)
      ========================================================= */
      {
        id: 'v5b_10',
        code: '5B.10',
        group: 'savoir vs. connaître',
        shortTitle: 'savoir vs. connaître (Forms & Core Split)',
        title: 'savoir vs. connaître (Part 1): Irregular Forms & Two Ways of Knowing',
        titleZh: '核心辨析 savoir vs. connaître（上）：变位对比与“事实/技能 vs 熟人/地点”分工',
        estMin: 4,
        summary: 'Both mean "to know", yet French draws a strict line: savoir (je sais, nous savons, ils savent; p.p. su) is for facts, things learned by heart, clauses (que/où/si), and skills ("savoir + infinitive"); connaître (je connais, nous connaissons, ils connaissent; p.p. connu) is for people, places, and personal familiarity.',
        summaryZh: '法语把“知道/认识”一分为二，**绝不可混用**：① **savoir**（`sais, sais, sait, savons, savez, savent`，过去分词 **su**）指“**知道某事/事实/从句（que / où / si）**”以及“**会某项技能（后直接加动词原形）**”；② **connaître**（`connais, connais, connaît, connaissons, connaissez, connaissent`，注意第三人称单数带 `î`，过去分词 **connu**）指“**认识某人、熟悉某个地方/文化事物**”！',
        cheatSummary: [
          { label: 'Conjugations: savoir (su) & connaître (connu)', rule: 'savoir: sais, sais, sait · savons, savez, savent. connaître: connais, connais, connaît (î!) · connaissons, connaissez, connaissent.', ruleZh: 'savoir 复数去 i（savons/savent）；connaître 按类似 -ir 的双 s 复数变（connaissons / connaissent），单三写 connaît。' },
          { label: 'Tex’s Golden Split', rule: 'savoir = FACTS, clauses (que/si/où), & HOW TO (+ infinitive: "je sais jouer de la guitare"). connaître = PEOPLE, PLACES & familiarity ("je connais Tammy, la France et la Tour Eiffel").', ruleZh: '核心口诀：事实、整句话（que/si/où）、“会做某事（+ 原形）”用 **savoir**；认人、认地点、熟知事物名用 **connaître**！' }
        ],
        sections: [
          {
            id: 'v5b10_forms',
            heading: '1. Conjugation Comparison & Joe-Bob / Tex Dialogue',
            headingZh: '一、两大“知道”动词变位对照与经典对话',
            lead: 'Notice how connaître keeps -ss- in plural forms just like finir (nous connaissons, ils connaissent), whereas savoir shortens to sav- in plural forms (nous savons, ils savent):',
            leadZh: '背熟两张表后再读 Joe-Bob 请教 Tex 两者区别的对话（注意：`je sais jouer` 会弹吉他，`je sais où se trouve...` 知道在哪，`je connais la Tour Eiffel` 认识/熟悉埃菲尔铁塔）：',
            cartoon: {
              src: './assets/tex_cartoons/virr10.gif',
              alt: 'Joe-Bob et Tex: savoir vs connaître',
              caption: 'Tex: On sait des faits, mais on connaît des gens et des endroits ! Joe-Bob: Moi, je sais jouer de la guitare !',
              captionZh: 'Tex：事实与技能用 savoir；认识人与地点用 connaître！Joe-Bob：哈哈，我会弹吉他（je sais jouer）！'
            },
            table: {
              headers: ['Person', 'savoir (know fact/skill — p.p. su)', 'connaître (know person/place — p.p. connu)', 'Core Difference'],
              rows: [
                { cols: ['je / tu', 'je sais · tu sais', 'je connais · tu connais', 'savoir = fact/how-to · connaître = person/place'], audio: 'je sais, je connais' },
                { cols: ['il / elle / on', 'il sait', 'il connaît (î before t)', 'Traditional spelling keeps circumflex î on connaît'], audio: 'il sait, il connaît' },
                { cols: ['nous', 'nous savons', 'nous connaissons', 'savons (1 word) vs. connaissons (-ss-)'], audio: 'nous savons, nous connaissons' },
                { cols: ['vous', 'vous savez', 'vous connaissez', 'savez vs. connaissez'], audio: 'vous savez, vous connaissez' },
                { cols: ['ils / elles', 'ils savent', 'ils connaissent', 'savent (/sav/) vs. connaissent (/kɔnɛs/)'], audio: 'ils savent, ils connaissent' }
              ]
            },
            examples: [
              { fr: 'Joe-Bob : Tex, explique-moi la différence entre savoir et connaître. Je ne comprends pas.', en: 'Tex, explain the difference between savoir and connaître to me. I don’t understand.', zh: 'Joe-Bob：Tex 给我讲讲 savoir 和 connaître 的区别吧。', tag: 'Question' },
              { fr: 'Tex : On sait des faits mais on connaît des gens et des endroits. Par exemple, je connais Tammy, la France et la Tour Eiffel.', en: 'One knows (with savoir) facts, but one knows (with connaître) people and places. For example, I know Tammy, France, the Eiffel Tower.', zh: '事实用 savoir；人名（Tammy）、国家（la France）、地标（la Tour Eiffel）必须用 connaître！', tag: 'People & Places' },
              { fr: 'Joe-Bob : Oh, OK, et moi, je sais jouer de la guitare et je sais où se trouve l’université du Texas.', en: 'Oh, OK, and I know how to play the guitar and I know where the University of Texas is located.', zh: '我“会”弹吉他（+ 不定式 jouer），且“知道……在哪里”（+ 疑问从句 où se trouve...），两个都用 savoir！', tag: 'Skill & Clause' }
            ],
            quickCheck: {
              prompt: 'Even when asking about a PLACE location ("where Austin is"), which verb goes before "où se trouve Austin"?',
              promptZh: '虽然涉及地点，但后面接的是“疑问词从句 + 动词”（où se trouve Austin，Austin 在哪儿），要用哪一个？',
              options: [
                'savoir (Je sais où se trouve Austin.) — because "où se trouve..." is a clause / fact!',
                'connaître (Je connais où se trouve Austin.)',
                'Either one before où',
                'pouvoir'
              ],
              answerIdx: 0,
              explain: 'Crucial distinction: "Je connais Austin" (direct place noun = connaître) vs. "Je sais où se trouve Austin" (indirect question clause = savoir)!',
              explainZh: '天壤之别：直接熟悉奥斯汀这座城市（名词）用 **Je connais Austin**；要知道“它在哪儿”（整个从句）用 **Je sais où se trouve Austin**！'
            }
          }
        ],
        drills: [
          {
            id: 'd5b10_d1',
            kind: 'fib',
            prompt: 'Edouard ___ cuisiner. (savoir)',
            promptZh: 'Tex 原题 #1：Edouard 会做菜（savoir）：',
            answers: ['sait'],
            hint: '3rd sg. of savoir.',
            audio: 'Edouard sait cuisiner.',
            explain: 'Edouard (= il) sait (+ infinitive skill).',
            explainZh: '第三人称单数：sait（+ 不定式表“会做某事”）。'
          },
          {
            id: 'd5b10_d2',
            kind: 'fib',
            prompt: 'Joe-Bob ___ College Station. (connaître)',
            promptZh: 'Tex 原题 #2：Joe-Bob 熟悉 College Station 这座城（connaître）：',
            answers: ['connaît', 'connait'],
            hint: '3rd sg. of connaître (with î!).',
            audio: 'Joe-Bob connaît College Station.',
            explain: 'Joe-Bob (= il) connaît (+ place).',
            explainZh: '第三人称单数写作 connaît。'
          },
          {
            id: 'd5b10_d3',
            kind: 'fib',
            prompt: 'Joe-Bob demande à Tex : Est-ce que tu ___ le président de la République française ? (connaître)',
            promptZh: 'Tex 原题 #3：你认识法国总统吗（connaître）：',
            answers: ['connais'],
            hint: 'tu form of connaître.',
            audio: 'Est-ce que tu connais le président de la République française ?',
            explain: 'tu connais (+ person).',
            explainZh: 'tu 对应 connais。'
          },
          {
            id: 'd5b10_d4',
            kind: 'fib',
            prompt: 'Bette demande à Fiona : Tu ___ où habite le grand-père de Tex ? (savoir)',
            promptZh: 'Tex 原题 #4：你知道 Tex 的爷爷住在哪儿吗（savoir）：',
            answers: ['sais'],
            hint: 'tu form of savoir.',
            audio: 'Tu sais où habite le grand-père de Tex ?',
            explain: 'tu sais (+ où clause).',
            explainZh: 'tu 对应 sais。'
          },
          {
            id: 'd5b10_d5',
            kind: 'fib',
            prompt: 'Tammy et Bette ___ Tex. (connaître)',
            promptZh: 'Tex 原题 #5：Tammy 和 Bette 认识 Tex（connaître）：',
            answers: ['connaissent'],
            hint: '3rd pl. of connaître.',
            audio: 'Tammy et Bette connaissent Tex.',
            explain: 'elles connaissent.',
            explainZh: '第三人称复数：connaissent。'
          },
          {
            id: 'd5b10_d6',
            kind: 'fib',
            prompt: 'Tex et Edouard ___ parler français. (savoir)',
            promptZh: 'Tex 原题 #6：Tex 和 Edouard 会说法语（savoir）：',
            answers: ['savent'],
            hint: '3rd pl. of savoir.',
            audio: 'Tex et Edouard savent parler français.',
            explain: 'ils savent (+ infinitive!).',
            explainZh: '第三人称复数：savent。'
          },
          {
            id: 'd5b10_d7',
            kind: 'fib',
            prompt: 'Joe-Bob et Corey : Nous ___ que Tex est un tatou. (savoir)',
            promptZh: 'Tex 原题 #7：我们知道 Tex 是一只犰狳（savoir）：',
            answers: ['savons'],
            hint: 'nous form of savoir.',
            audio: 'Nous savons que Tex est un tatou.',
            explain: 'nous savons (+ que clause).',
            explainZh: 'nous 对应 savons。'
          },
          {
            id: 'd5b10_d8',
            kind: 'fib',
            prompt: 'Edouard et Tex : Malheureusement, nous ___ bien le Texas. (connaître)',
            promptZh: 'Tex 原题 #8：很遗憾，我们对德克萨斯州太熟悉了（connaître）：',
            answers: ['connaissons'],
            hint: 'nous form of connaître.',
            audio: 'Malheureusement, nous connaissons bien le Texas.',
            explain: 'nous connaissons.',
            explainZh: 'nous 对应 connaissons。'
          },
          {
            id: 'd5b10_d9',
            kind: 'fib',
            prompt: 'Fiona : Est-ce que vous ___ si Corey est malade ? (savoir)',
            promptZh: 'Tex 原题 #9：你们知道 Corey 是不是病了吗（savoir）：',
            answers: ['savez'],
            hint: 'vous form of savoir.',
            audio: 'Est-ce que vous savez si Corey est malade ?',
            explain: 'vous savez (+ si clause).',
            explainZh: 'vous 对应 savez。'
          },
          {
            id: 'd5b10_d10',
            kind: 'fib',
            prompt: 'Edouard : Vous ne ___ pas un bon restaurant ? Venez avec moi. (connaître)',
            promptZh: 'Tex 原题 #10：你们不知道一家好餐厅吗？跟我来吧（connaître）：',
            answers: ['connaissez'],
            hint: 'vous form of connaître.',
            audio: 'Vous ne connaissez pas un bon restaurant ?',
            explain: 'vous connaissez (+ place noun!).',
            explainZh: 'vous 对应 connaissez。'
          },
          {
            id: 'd5b10_d11',
            kind: 'fib',
            prompt: 'Joe-Bob : Je ne ___ jamais la réponse. (savoir — note: both possible for a noun, use savoir!)',
            promptZh: 'Tex 原题 #11：我从来不知道答案（用 savoir）：',
            answers: ['sais'],
            hint: 'je form of savoir.',
            audio: 'Je ne sais jamais la réponse.',
            explain: 'je sais (here "la réponse" can take savoir for knowing the fact or connaître for being familiar with it).',
            explainZh: 'je 对应 sais（回答“不知道答案/不知道时间”常用 je ne sais pas）。'
          },
          {
            id: 'd5b10_d12',
            kind: 'fib',
            prompt: 'Tammy : Je ___ Ricky Williams. Il est dans mon cours de psychologie. (connaître)',
            promptZh: 'Tex 原题 #12：我认识 Ricky Williams，他和我上同一节心理学课（connaître）：',
            answers: ['connais'],
            hint: 'je form of connaître.',
            audio: 'Je connais Ricky Williams.',
            explain: 'je connais (+ person).',
            explainZh: '认识具体某人：je connais。'
          }
        ],
        related: [
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_9', label: '5B.9 boire, croire, voir' },
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_11', label: '5B.11 savoir vs. connaître Decision Practice' }
        ]
      },

      /* =========================================================
         PAGE 5B.11: SAVOIR VS. CONNAÎTRE PART 2 (virr10.html Part 2 — DECISION TREE & NO-HINT DRILLS)
      ========================================================= */
      {
        id: 'v5b_11',
        code: '5B.11',
        group: 'savoir vs. connaître',
        shortTitle: 'savoir vs. connaître (Decision Mastery)',
        title: 'savoir vs. connaître (Part 2): Rapid Grammar Decision Tree (No Hints!)',
        titleZh: '核心辨析 savoir vs. connaître（下）：语法结构秒判法与无提示实战',
        estMin: 4,
        summary: 'Test your reflexes without parentheses hints! Look strictly at what follows the blank: an INFINITIVE or CLAUSE (que, si, où, pourquoi, quand, combien) ALWAYS demands savoir; a direct NOUN for a person, city, country, restaurant, or book/film ALWAYS demands connaître!',
        summaryZh: '脱离括号提示进行考场级实战！记住一个**“秒杀结构判断法”**：① 空格后紧接**动词原形（表“会做”）**或**从句（que / si / où / pourquoi / comment...）** → 100% 用 **savoir**；② 空格后直接是**名词（某人、某城市、国家、餐馆、某人的名字/作品）**，中间没有疑问词或动词 → 几乎全用 **connaître**！（注：`la réponse / la vérité / son numéro` 等极少数纯事实名词可用 savoir。）',
        cheatSummary: [
          { label: 'Grammar Trigger Check (1-Second Rule!)', rule: 'Verb infinitive (parler/cuisiner) OR Clause word (que / si / où / comment / pourquoi) → SAVOIR. Direct Person/Place/Thing Noun (Tex / Paris / Opelousas / un restaurant) → CONNAÎTRE.', ruleZh: '先看空后面第一个词：是“动词原形”或“que/si/où 等连词” → 直接选 **savoir**；直接是“人名/地名/实体名词” → 直接选 **connaître**！' },
          { label: 'Never Use *connaître + Infinitive!', rule: 'French NEVER puts an infinitive directly after connaître (*je connais nager = WRONG!). Always "je sais nager".', ruleZh: '红线警告：connaître 后面绝对不能直接加动词原形（绝不可写 *je connais faire du ski）！会做某事永远用 **savoir**！' }
        ],
        sections: [
          {
            id: 'v5b11_tree',
            heading: '1. The 1-Second Structural Decision Table',
            headingZh: '一、一秒钟结构判定对照表',
            lead: 'Before you look at the meaning, scan the very first word right after the verb blank:',
            leadZh: '在 TCF 语法填空里，看清空格后面的结构特征就能 100% 拿分：',
            table: {
              headers: ['What Follows the Verb?', 'Must Use', 'Tex Example'],
              rows: [
                { cols: ['Person (Tex, Tammy, Rita, son grand-père)', 'connaître', 'Je connais Tex et Tammy. / Il connaît son grand-père ?'], audio: 'Je connais Tex et Tammy.' },
                { cols: ['Place / Landmark (Paris, Opelousas, un restaurant)', 'connaître', 'Est-ce que vous connaissez Opelousas ?'], audio: 'Est-ce que vous connaissez Opelousas ?' },
                { cols: ['Skill (+ Infinitive: parler, cuisiner, faire du ski)', 'savoir', 'Bette, est-ce que tu sais parler français ?'], audio: 'Bette, est-ce que tu sais parler français ?' },
                { cols: ['Indirect Clause (si..., où..., que...)', 'savoir', 'Je ne sais pas si Tex va venir. / Il ne sait pas où se trouve Paris.'], audio: 'Je ne sais pas si Tex va venir.' }
              ]
            },
            quickCheck: {
              prompt: 'Look at "Est-ce que vous ___ faire du ski ?" — NO parentheses hint. Choose and conjugate!',
              promptZh: '没有括号提示，凭结构秒判：“Est-ce que vous ___ faire du ski ?”',
              options: [
                'savez (followed by infinitive "faire"!)',
                'connaissez (followed by sport)',
                'savons',
                'connaître'
              ],
              answerIdx: 0,
              explain: 'Followed by the infinitive "faire du ski" (knowing HOW to ski) → ONLY savoir works: vous savez !',
              explainZh: '后面是动词原形 faire du ski（会不会滑雪），只能用 savoir → savez！'
            }
          }
        ],
        drills: [
          {
            id: 'd5b11_d1',
            kind: 'fib',
            prompt: 'Je ___ Tex et Tammy. (person → choose savoir or connaître & conjugate)',
            promptZh: 'Tex 无提示挑战 #1：我认识 Tex 和 Tammy：',
            answers: ['connais'],
            hint: 'People → connaître (je form).',
            audio: 'Je connais Tex et Tammy.',
            explain: 'Direct people (Tex et Tammy) → je connais.',
            explainZh: '认识具体某人 → je connais。'
          },
          {
            id: 'd5b11_d2',
            kind: 'fib',
            prompt: 'Je ne ___ pas si Tex va venir à la fête. (+ clause "si...")',
            promptZh: 'Tex 无提示挑战 #2：我不知道 Tex 是否会来派对：',
            answers: ['sais'],
            hint: 'Followed by clause "si..." → savoir!',
            audio: 'Je ne sais pas si Tex va venir à la fête.',
            explain: 'Clause introduced by "si" → je ne sais pas.',
            explainZh: '后接 si 引导的从句 → je sais。'
          },
          {
            id: 'd5b11_d3',
            kind: 'fib',
            prompt: 'Tex, est-ce qu’il ___ son grand-père ? (person)',
            promptZh: 'Tex 无提示挑战 #3：Tex，他认识他爷爷吗：',
            answers: ['connaît', 'connait'],
            hint: 'Person (son grand-père) → connaître (il form).',
            audio: 'Tex, est-ce qu’il connaît son grand-père ?',
            explain: 'Direct person → il connaît.',
            explainZh: '认识某人 → il connaît。'
          },
          {
            id: 'd5b11_d4',
            kind: 'fib',
            prompt: 'Joe-Bob ne ___ pas où se trouve Paris. (+ clause "où...")',
            promptZh: 'Tex 无提示挑战 #4：Joe-Bob 不知道巴黎在哪里（小心后面有 où！）：',
            answers: ['sait'],
            hint: 'Followed by clause "où se trouve..." → savoir!',
            audio: 'Joe-Bob ne sait pas où se trouve Paris.',
            explain: 'Not knowing the place directly, but knowing WHERE it is (où clause) → il sait!',
            explainZh: '有疑问从句 où se trouve... 时是知道事实，用 il sait！'
          },
          {
            id: 'd5b11_d5',
            kind: 'fib',
            prompt: 'Bette, est-ce que tu ___ parler français ? (+ infinitive)',
            promptZh: 'Tex 无提示挑战 #5：Bette，你会说法语吗：',
            answers: ['sais'],
            hint: 'Skill + infinitive "parler" → savoir (tu form).',
            audio: 'Bette, est-ce que tu sais parler français ?',
            explain: '+ infinitive → tu sais.',
            explainZh: '后接动词原形 → tu sais。'
          },
          {
            id: 'd5b11_d6',
            kind: 'fib',
            prompt: 'Tammy, est-ce que tu ___ Rita, la sœur de Tex ? (person)',
            promptZh: 'Tex 无提示挑战 #6：Tammy，你认识 Tex 的姐姐 Rita 吗：',
            answers: ['connais'],
            hint: 'Person → connaître (tu form).',
            audio: 'Tammy, est-ce que tu connais Rita, la sœur de Tex ?',
            explain: 'Direct person (Rita) → tu connais.',
            explainZh: '认识人 → tu connais。'
          },
          {
            id: 'd5b11_d7',
            kind: 'fib',
            prompt: 'Nous ___ Tex et ses amis. (people)',
            promptZh: 'Tex 无提示挑战 #7：我们认识 Tex 和他的朋友们：',
            answers: ['connaissons'],
            hint: 'People → connaître (nous form).',
            audio: 'Nous connaissons Tex et ses amis.',
            explain: 'People → nous connaissons.',
            explainZh: '认识人 → nous connaissons。'
          },
          {
            id: 'd5b11_d8',
            kind: 'fib',
            prompt: 'Nous ___ que Tex n’est pas très optimiste. (+ clause "que...")',
            promptZh: 'Tex 无提示挑战 #8：我们知道 Tex 不太乐观：',
            answers: ['savons'],
            hint: 'Fact / "que..." clause → savoir (nous form).',
            audio: 'Nous savons que Tex n’est pas très optimiste.',
            explain: '+ que clause → nous savons.',
            explainZh: '后接 que 从句 → nous savons。'
          },
          {
            id: 'd5b11_d9',
            kind: 'fib',
            prompt: 'Tammy et Bette, est-ce qu’elles ___ cuisiner ? (+ infinitive)',
            promptZh: 'Tex 无提示挑战 #9：Tammy 和 Bette 会做饭吗：',
            answers: ['savent'],
            hint: 'Skill + infinitive "cuisiner" → savoir (3rd pl.).',
            audio: 'Tammy et Bette, est-ce qu’elles savent cuisiner ?',
            explain: '+ infinitive → elles savent.',
            explainZh: '后接动词原形 cuisiner → elles savent。'
          },
          {
            id: 'd5b11_d10',
            kind: 'fib',
            prompt: 'Rita et ses enfants ne ___ pas Paris. (place)',
            promptZh: 'Tex 无提示挑战 #10：Rita 和她的孩子们对巴黎不熟 / 没去过巴黎：',
            answers: ['connaissent'],
            hint: 'City/place → connaître (3rd pl.).',
            audio: 'Rita et ses enfants ne connaissent pas Paris.',
            explain: 'Direct city (Paris) → ils connaissent.',
            explainZh: '熟悉/了解城市本身 → ils connaissent。'
          },
          {
            id: 'd5b11_d11',
            kind: 'fib',
            prompt: 'Vous ___ faire du ski ? (+ infinitive)',
            promptZh: 'Tex 无提示挑战 #11：您会滑雪吗：',
            answers: ['savez'],
            hint: 'Skill + infinitive "faire" → savoir (vous form).',
            audio: 'Vous savez faire du ski ?',
            explain: '+ infinitive → vous savez.',
            explainZh: '后接动词原形 → vous savez。'
          },
          {
            id: 'd5b11_d12',
            kind: 'fib',
            prompt: 'Est-ce que vous ___ Opelousas ? (place)',
            promptZh: 'Tex 无提示挑战 #12：您知道/熟悉 Opelousas 这座小镇吗：',
            answers: ['connaissez'],
            hint: 'Town/place → connaître (vous form).',
            audio: 'Est-ce que vous connaissez Opelousas ?',
            explain: 'Direct town (Opelousas) → vous connaissez.',
            explainZh: '熟悉某地名 → vous connaissez。'
          }
        ],
        related: [
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_10', label: '5B.10 savoir vs. connaître Forms' },
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_12', label: '5B.12 dire, lire & écrire' }
        ]
      },

      /* =========================================================
         PAGE 5B.12: DIRE, LIRE, ÉCRIRE (virr11.html)
      ========================================================= */
      {
        id: 'v5b_12',
        code: '5B.12',
        group: 'High-Frequency Irregulars',
        shortTitle: 'dire, lire & écrire (vous dites!)',
        title: 'Irregular Trio: "dire" (say), "lire" (read) & "écrire" (write)',
        titleZh: '高频不规则动词 ③：dire（说）、lire（读）、écrire（写）与 vous dites 例外',
        estMin: 4,
        summary: 'Complete Ch 5B with three everyday communication verbs: dire (dis, dis, dit, disons, vous dites!, disent; p.p. dit), lire (lis, lis, lit, lisons, lisez, lisent; p.p. lu), and écrire (écris, écris, écrit, écrivons, écrivez, écrivent; p.p. écrit) plus décrire & s’inscrire. Contrast dire ("to say/tell") vs. parler ("to speak"), and review the 3 non-ez vous verbs!',
        summaryZh: '第五章 B 收官掌握三大交流核心词：**dire（说，过去分词 dit）**、**lire（阅读，过去分词 lu）**、**écrire（写作，过去分词 écrit；同族 décrire 描述、s’inscrire 报名注册）**。记住两大黄金规则：① `vous dites` 是法语唯独三个不以 -ez 结尾的 vous 形式中最后一个（与 `vous êtes`、`vous faites` 齐名），而 `vous lisez` 与 `vous écrivez` 则正常以 -ez 结尾；② `dire`（说具体内容 / 告诉某人）vs. `parler`（说话 / 讲某种语言）。',
        cheatSummary: [
          { label: 'dire · lire · écrire (Sing. = -s, -s, -t)', rule: 'dire (dit): dis, dis, dit · disons, VOUS DITES!, disent. lire (lu): lis, lis, lit · lisons, lisez, lisent. écrire (écrit): écris, écris, écrit · écrivons, écrivez, écrivent.', ruleZh: '单数三词同款（-s, -s, -t）。复数：dire 变 disons / VOUS DITES / disent；lire 加单 s（lisons/lisent）；écrire 请回 v（écrivons/écrivez/écrivent）！' },
          { label: 'Idioms + dire vs. parler', rule: 'Comment dit-on... ? (How do you say...?) · Qu’est-ce que ça veut dire ? (What does that mean?) · Dis, Tex... (Hey, Tex...) · dire (say/tell something) vs. parler (speak a language / talk to).', ruleZh: '高频口语：Comment dit-on...?（怎么说？）、Qu’est-ce que ça veut dire ?（什么意思？）、Dis, Tex...（喂 Tex…）。' }
        ],
        sections: [
          {
            id: 'v5b12_trio',
            heading: '1. Conjugating "dire", "lire", "écrire" (+ décrire, s’inscrire)',
            headingZh: '一、dire / lire / écrire 对比变位与同族词',
            lead: 'Watch the ONLY trap among the three plural columns: dire uses "vous dites" (NOT *disez!), whereas lire uses normal "vous lisez" and écrire uses "vous écrivez" (putting -v- back in all plural forms, just like suivre/vivre!).',
            leadZh: '看准三列差异：**dire** 在 vous 必须写 **vous dites**（绝对不能写 *disez！）；**lire** 复数夹着单写 s（读音 /z/：lisons, lisez, lisent）；**écrire** 复数必须恢复字母 **v**（écrivons, écrivez, écrivent）：',
            cartoon: {
              src: './assets/tex_cartoons/virr11.gif',
              alt: 'Tex lit de la poésie, Tammy lit des romans',
              caption: 'Tammy: Dis, Tex, qu’est-ce que tu lis ? Tex: Je lis de la poésie. Les poètes disent toujours la vérité. J’écris aussi des poèmes.',
              captionZh: 'Tammy：喂 Tex（Dis），你在读啥呢（tu lis）？Tex：我在读诗。诗人总说真话（disent），我也写诗（j’écris）。'
            },
            table: {
              headers: ['Person', 'dire (say — p.p. dit)', 'lire (read — p.p. lu)', 'écrire (write — p.p. écrit)'],
              rows: [
                { cols: ['je / tu', 'je dis · tu dis', 'je lis · tu lis', 'j’écris · tu écris'], audio: 'je dis, je lis, j’écris' },
                { cols: ['il / elle / on', 'il dit', 'il lit', 'il écrit'], audio: 'il dit, il lit, il écrit' },
                { cols: ['nous', 'nous disons', 'nous lisons', 'nous écrivons (-v-!)'], audio: 'nous disons, nous lisons, nous écrivons' },
                { cols: ['vous', 'vous dites (NO -ez!)', 'vous lisez (-ez)', 'vous écrivez (-v- + -ez)'], audio: 'vous dites, vous lisez, vous écrivez' },
                { cols: ['ils / elles', 'ils disent (/z/)', 'ils lisent (/z/)', 'ils écrivent (/v/!)'], audio: 'ils disent, ils lisent, ils écrivent' }
              ]
            },
            examples: [
              { fr: 'Tammy : Dis, Tex, qu’est-ce que tu lis ?', en: 'Tammy: Say, Tex, what are you reading?', zh: 'Tammy：嗨 Tex，你在看什么书呢？（Dis 放句首引起注意）', tag: 'Dis, ...' },
              { fr: 'Tex : Je lis de la poésie. Les poètes disent toujours la vérité. J’écris aussi des poèmes.', en: 'Tex: I’m reading poetry. Poets always tell the truth. I also write poems.', zh: 'Tex：我在读诗，诗人永远说真话，我也写诗。', tag: 'lis / disent / écris' },
              { fr: 'Family verbs like écrire: décrire (to describe — p.p. décrit) · s’inscrire (to register — p.p. inscrit)', en: 'Bette décrit sa famille; je m’inscris au club français.', zh: '同族词：**décrire**（描述）与 **s’inscrire**（注册报名）完全套用 écrire！', tag: 'Like écrire' }
            ],
            quickCheck: {
              prompt: 'Look closely at all three "vous" forms of dire, lire, and écrire. Which row is 100% right?',
              promptZh: '下面哪一组完全正确写出了 dire, lire, écrire 的 vous 形式？',
              options: [
                'vous dites · vous lisez · vous écrivez',
                'vous disez · vous lisez · vous écrivez',
                'vous dites · vous lites · vous écrivez',
                'vous disons · vous lisez · vous écris'
              ],
              answerIdx: 0,
              explain: 'ONLY dire breaks the -ez rule (vous dites!); lire and écrire keep regular -ez endings (vous lisez, vous écrivez)!',
              explainZh: '只有 dire 是特例（vous dites）；lire 和 écrire 老老实实用 -ez（lisez, écrivez）！'
            }
          }
        ],
        drills: [
          {
            id: 'd5b12_d1',
            kind: 'fib',
            prompt: 'Est-ce que tu ___ le Daily Texan ? (lire)',
            promptZh: 'Tex 原题 #1：你看《Daily Texan》校报吗（lire）：',
            answers: ['lis'],
            hint: 'tu = lis.',
            audio: 'Est-ce que tu lis le Daily Texan ?',
            explain: 'tu lis.',
            explainZh: 'tu 对应 lis。'
          },
          {
            id: 'd5b12_d2',
            kind: 'fib',
            prompt: 'Qu’est-ce que vous ___ ? (dire)',
            promptZh: 'Tex 原题 #2：您说什么（dire — 警惕 vous 特殊词尾！）：',
            answers: ['dites'],
            hint: 'dire is one of ONLY 3 verbs without -ez in vous!',
            audio: 'Qu’est-ce que vous dites ?',
            explain: 'vous dites (NEVER *disez!).',
            explainZh: '务必记住：vous dites（不能写 *disez！）。'
          },
          {
            id: 'd5b12_d3',
            kind: 'fib',
            prompt: 'Bette ___ sa famille à Tex. (décrire)',
            promptZh: 'Tex 原题 #3：Bette 向 Tex 描述她的家人（décrire，同 écrire）：',
            answers: ['décrit', 'decrit'],
            hint: '3rd sg. like écrit → décrit.',
            audio: 'Bette décrit sa famille à Tex.',
            explain: 'Bette (= elle) décrit.',
            explainZh: '第三人称单数同 écrit：décrit。'
          },
          {
            id: 'd5b12_d4',
            kind: 'fib',
            prompt: 'Edouard ___ un journal parisien. (lire)',
            promptZh: 'Tex 原题 #4：Edouard 读一份巴黎报纸（lire）：',
            answers: ['lit'],
            hint: '3rd sg. = lit.',
            audio: 'Edouard lit un journal parisien.',
            explain: 'Edouard (= il) lit.',
            explainZh: '第三人称单数：lit。'
          },
          {
            id: 'd5b12_d5',
            kind: 'fib',
            prompt: 'Joe-Bob et Corey ne ___ rien. (lire)',
            promptZh: 'Tex 原题 #5：Joe-Bob 和 Corey 啥书也不读（lire）：',
            answers: ['lisent'],
            hint: '3rd pl. = lisent (single s!).',
            audio: 'Joe-Bob et Corey ne lisent rien.',
            explain: 'ils lisent.',
            explainZh: '第三人称复数单写 s：lisent。'
          },
          {
            id: 'd5b12_d6',
            kind: 'fib',
            prompt: 'Bette et Tammy ___ au revoir à Tex. (dire)',
            promptZh: 'Tex 原题 #6：Bette 和 Tammy 向 Tex 道别（dire）：',
            answers: ['disent'],
            hint: '3rd pl. = disent.',
            audio: 'Bette et Tammy disent au revoir à Tex.',
            explain: 'elles disent.',
            explainZh: '第三人称复数：disent。'
          },
          {
            id: 'd5b12_d7',
            kind: 'fib',
            prompt: 'Tex et moi, nous ___ des cartes postales. (écrire)',
            promptZh: 'Tex 原题 #7：Tex 和我在写明信片（écrire，复数找回 v！）：',
            answers: ['écrivons', 'ecrivons'],
            hint: 'nous restores -v- → écrivons!',
            audio: 'Nous écrivons des cartes postales.',
            explain: 'nous écrivons.',
            explainZh: '复数恢复 v → écrivons。'
          },
          {
            id: 'd5b12_d8',
            kind: 'fib',
            prompt: 'Je ___ au club français. (s’inscrire)',
            promptZh: 'Tex 原题 #8：我报名加入法语社团（s’inscrire，注意 Je 后面要带反身代词 m’！）：',
            answers: ["m'inscris", 'm’inscris'],
            hint: 'je m’ + inscris (like écris)!',
            audio: 'Je m’inscris au club français.',
            explain: 'je m’inscris (pronominal verb like écrire!).',
            explainZh: '代动词别忘了第一人称反身代词 m’：je m’inscris！'
          },
          {
            id: 'd5b12_d9',
            kind: 'fib',
            prompt: 'Joe-Bob ___ mal. (écrire)',
            promptZh: 'Tex 原题 #9：Joe-Bob 写作/字写得很差（écrire）：',
            answers: ['écrit', 'ecrit'],
            hint: '3rd sg. = écrit.',
            audio: 'Joe-Bob écrit mal.',
            explain: 'Joe-Bob (= il) écrit.',
            explainZh: '第三人称单数：écrit。'
          },
          {
            id: 'd5b12_d10',
            kind: 'fib',
            prompt: 'Watch "aimes + inf."! Qu’est-ce que tu aimes ___ ? (lire)',
            promptZh: 'Tex 原题 #10（陷阱题！前面已有变位动词 aimes）：你喜欢读什么？',
            answers: ['lire'],
            hint: 'Two-verb rule: "aimes" is conjugated → keep the INFINITIVE!',
            audio: 'Qu’est-ce que tu aimes lire ?',
            explain: 'Watch out! "aimes" is conjugated, so keep the second verb in the infinitive: lire!',
            explainZh: '陷阱！前面已有变位动词 aimes，后面直接用原形 **lire**！'
          },
          {
            id: 'd5b12_d11',
            kind: 'fib',
            prompt: 'Fiona ne ___ pas beaucoup. (dire)',
            promptZh: 'Tex 原题 #11：Fiona 话不多（dire）：',
            answers: ['dit'],
            hint: '3rd sg. = dit.',
            audio: 'Fiona ne dit pas beaucoup.',
            explain: 'Fiona (= elle) dit.',
            explainZh: '第三人称单数：dit。'
          },
          {
            id: 'd5b12_d12',
            kind: 'fib',
            prompt: 'J’___ des messages électroniques. (écrire — J’ already printed)',
            promptZh: 'Tex 原题 #12：我在写电子邮件（只填 J’ 后面的动词）：',
            answers: ['écris', 'ecris'],
            hint: 'je/j’ = écris.',
            audio: 'J’écris des messages électroniques.',
            explain: 'J’écris.',
            explainZh: 'J’ 后面只填 écris！恭喜通关 Tex 第五章 B 全套高频不规则动词！'
          }
        ],
        related: [
          { chapterId: 'ch5b_verbs_irregular', pageId: 'v5b_1', label: 'Back to 5B.1 être' },
          { chapterId: 'ch5c_verbs_constructions', pageId: 'v5c_1', label: 'Continue to Ch 5C (5C.1 Pronominal Verbs)' },
          { chapterId: 'ch5_negation', pageId: 'neg_5_1', label: 'Jump to Ch 6 Negation' }
        ]
      }
    ]
  });
})();
