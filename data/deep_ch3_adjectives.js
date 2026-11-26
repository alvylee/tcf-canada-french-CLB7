(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch3_adjectives',
    code: 'Ch 3',
    level: 'A1',
    category: 'adjectives',
    icon: '🎨',
    title: 'Adjectives (Les Adjectifs)',
    titleZh: '第三章 · 法语形容词完全掌握',
    subtitle: 'Tex-style slow-paced deep mastery: 11 bite-sized pages covering agreement, BANGS pre-noun placement, irregular stems, placement-meaning shifts, comparatives, superlatives, bon vs. bien & participles — with 17 cartoons & 126 drills.',
    subtitleZh: '对标 Tex 深度拆分为 11 个轻松小页：性数配合、常规后置与 BANGS 前置、不规则形容词、位置改变词义、比较级最高级、bon/meilleur vs bien/mieux 与分词作形容词，配 17 张原版卡通与 126 题专练。',
    pages: [
      /* =========================================================
         PAGE 3.1: INTRO TO ADJECTIVES
      ========================================================= */
      {
        id: 'adj_3_1',
        code: '3.1',
        group: 'Intro to Adjectives',
        shortTitle: 'What Is an Adjective?',
        title: 'Introduction to Adjectives: Agreement, Placement & Adj. vs. Adv.',
        titleZh: '形容词入门：两大中西/英法核心差异（性数配合 + 后置）及副词辨析',
        estMin: 3,
        summary: 'Learn the two big shifts from English: French adjectives usually follow the noun AND agree in gender and number—while strictly staying separate from adverbs (bonne vs. bien).',
        summaryZh: '从零掌握法语形容词与英语的两大本质差异：① 通常放在名词后面；② 必须配合名词变阴阳性与单复数。同时区分形容词与副词（bonne vs bien）。',
        cheatSummary: [
          { label: 'Two Core Rules', rule: '1. Placement: French adjectives usually go AFTER the noun ("un tatou philosophique", "un escargot raffiné"). 2. Agreement: Adjectives match gender (m./f.) and number (sg./pl.): travailleur (m.) / travailleuse (f.).', ruleZh: '两条铁律：① 默认放在名词“后面”（un escargot raffiné）；② 必须随名词配合阴阳性与单复数（travailleur → travailleuse）。' },
          { label: 'Adjective vs. Adverb', rule: 'Adjectives modify NOUNS ("La poésie de Tex est bonne"); adverbs modify VERBS/adj./adv. ("Tex écrit bien"). French does not swap them like casual English ("writes good").', ruleZh: '形容词修饰名词（La poésie est bonne）；副词修饰动词（Tex écrit bien），二者不能互换！' }
        ],
        sections: [
          {
            id: 'adj_intro_def',
            heading: '1. Describing Nouns: Agreement + Post-Noun Placement',
            headingZh: '一、修饰名词：配合阴阳性单复数 + 默认站在名词后面',
            lead: 'An adjective describes a noun or pronoun. Unlike English adjectives (invariable and placed before nouns), French adjectives change form for masculine/feminine/singular/plural AND usually follow the noun they describe.',
            leadZh: '英语形容词永远不变形且站在名词前面（a friendly squirrel）；而法语形容词绝大多数站在名词“后面”（un écureuil aimable），并且随名词性别数量一起变！',
            cartoon: {
              src: './assets/tex_cartoons/adj1_aimable.gif',
              alt: 'Joe-Bob est un écureuil aimable',
              caption: 'Joe-Bob est un écureuil aimable (adj. AFTER noun). Fiona est travailleuse (f.) vs. Joe-Bob n’est pas travailleur (m.).',
              captionZh: '形容词 aimable 站在名词 écureuil 后面；Fiona 阴性用 travailleuse，Joe-Bob 阳性用 travailleur！'
            },
            examples: [
              { fr: 'Tex est un tatou philosophique. · Édouard est un escargot raffiné.', en: 'Tex is a philosophical armadillo. · Édouard is a refined snail.', zh: 'Tex 是哲学系犰狳。· Édouard 是高雅的蜗牛。', tag: 'After Noun' },
              { fr: 'Joe-Bob est un écureuil aimable. · Bette est une chatte capricieuse. · Corey est un cafard ivre.', en: 'friendly squirrel · temperamental cat · intoxicated cockroach', zh: '友善的松鼠 · 善变的母猫 · 醉醺醺的蟑螂', tag: 'Characters' },
              { fr: 'Fiona est travailleuse (f.). Mais Joe-Bob n’est pas travailleur (m.).', en: 'Fiona is hard-working (f.). But Joe-Bob isn’t hard-working (m.).', zh: 'Fiona 很勤奋（阴性 -euse）。可 Joe-Bob 一点也不勤奋（阳性 -eur）。', tag: 'Gender Match' }
            ]
          },
          {
            id: 'adj_vs_adv_intro',
            heading: '2. Adjective vs. Adverb (Why You Can’t Say *"writes good"* in French)',
            headingZh: '二、形容词 vs 副词：修饰名词用 bonne，修饰动词用 bien',
            lead: 'Informal English often uses adjectives in place of adverbs ("Tex writes real good", "walks real slow"). French keeps them strictly apart: adjectives describe NOUNS; adverbs describe VERBS, adjectives, or other adverbs.',
            leadZh: '英语口语常混用形容词和副词（writes good），但在法语里绝对不行：修饰“动作（动词）”必须用副词（bien），修饰“人或物（名词）”才用形容词（bon / bonne）。',
            examples: [
              { fr: 'Tex écrit bien. (adverb "bien" modifies verb "écrit")', en: 'Tex writes well.', zh: 'Tex 写得很好。（bien 修饰动词 écrit）', tag: 'Adverb' },
              { fr: 'La poésie de Tex est bonne. (adjective "bonne" modifies feminine noun "la poésie")', en: 'Tex’s poetry is good.', zh: 'Tex 的诗很好。（bonne 修饰阴性名词 la poésie）', tag: 'Adjective' }
            ],
            quickCheck: {
              prompt: 'Pick the sentence with BOTH correct placement and correct gender agreement:',
              promptZh: '选出语序和阴阳性配合都正确的一句：',
              options: [
                'Bette est une chatte capricieuse.',
                'Bette est une capricieuse chatte.',
                'Bette est une chatte capricieux.',
                'Bette est un chatte capricieuse.'
              ],
              answerIdx: 0,
              explain: 'Most descriptive adjectives follow the noun, and feminine "chatte" requires feminine "-euse": "une chatte capricieuse".',
              explainZh: '常规形容词放在名词后面，且阴性 chatte 配阴性 -euse："une chatte capricieuse"。'
            }
          }
        ],
        drills: [
          {
            id: 'd31_d1',
            kind: 'choice',
            prompt: 'Where do MOST French descriptive adjectives stand relative to the noun?',
            promptZh: '大多数法语描述性形容词放在名词的什么位置？',
            options: ['After the noun (e.g. un écureuil aimable)', 'Before the noun always', 'Only at the end of the paragraph', 'Before the verb'],
            answerIdx: 0,
            audio: 'Joe-Bob est un écureuil aimable.',
            explain: 'Most French adjectives follow the noun ("un tatou philosophique", "un escargot raffiné").',
            explainZh: '大多数法语形容词站在名词后面。'
          },
          {
            id: 'd31_d2',
            kind: 'choice',
            prompt: 'Which word modifies the NOUN "la musique" in: "La musique est ___." (good, f.sg.)',
            promptZh: '修饰名词 "la musique"（音乐，阴性单数）应该用哪个词？',
            options: ['bonne (feminine adjective)', 'bien (adverb)', 'bon (masculine adjective)', 'mieux'],
            answerIdx: 0,
            audio: 'La musique est bonne.',
            explain: '"la musique" is a feminine noun → use feminine adjective "bonne".',
            explainZh: '修饰阴性名词必须用阴性形容词 "bonne"。'
          },
          {
            id: 'd31_d3',
            kind: 'choice',
            prompt: 'Which word modifies the VERB "chante" in: "Tammy chante ___." (well)',
            promptZh: '修饰动词 "chante"（唱）应该用哪个词？',
            options: ['bien (adverb)', 'bonne (adjective)', 'bon (adjective)', 'bonnes'],
            answerIdx: 0,
            audio: 'Tammy chante bien.',
            explain: 'Verbs are modified by adverbs → "Tammy chante bien."',
            explainZh: '修饰动词必须用副词 "bien"。'
          },
          {
            id: 'd31_d4',
            kind: 'choice',
            prompt: 'Match the feminine partner of "travailleur" (hard-working, masc.):',
            promptZh: '"travailleur"（勤奋的，阳性）对应的阴性形式是什么？',
            options: ['travailleuse', 'travailleure', 'travailleux', 'travailleurse'],
            answerIdx: 0,
            audio: 'Fiona est travailleuse.',
            explain: '-eur adjectives typically change to -euse in the feminine: "travailleur → travailleuse".',
            explainZh: '-eur 结尾形容词通常变为 -euse："travailleuse"。'
          },
          {
            id: 'd31_d5',
            kind: 'fib',
            prompt: 'Place the adjective AFTER the noun: Tex est ___ . (un tatou + philosophique)',
            promptZh: '按“冠词 + 名词 + 形容词”语序写出：Tex 是一只有哲学气质的犰狳（3 words）。',
            answers: ['un tatou philosophique'],
            hint: 'Keep "philosophique" AFTER "tatou".',
            audio: 'Tex est un tatou philosophique.',
            explain: 'Adjective follows the noun: "un tatou philosophique".',
            explainZh: '法语默认名词在前、形容词在后："un tatou philosophique"。'
          },
          {
            id: 'd31_d6',
            kind: 'fib',
            prompt: 'Gender agreement: Fiona est ___ . (travailleur, f.sg.)',
            promptZh: '阴性形容词填空：Fiona（女性）很勤奋（travailleur）。',
            answers: ['travailleuse'],
            hint: '-eur → -euse.',
            audio: 'Fiona est travailleuse.',
            explain: '"Fiona est travailleuse."',
            explainZh: 'Fiona 为阴性，用 "travailleuse"。'
          },
          {
            id: 'd31_d7',
            kind: 'fib',
            prompt: 'Gender agreement: Joe-Bob n’est pas ___. (travailleur, m.sg.)',
            promptZh: '阳性形容词填空：Joe-Bob（男性）不勤奋。',
            answers: ['travailleur'],
            hint: 'Masculine singular stays "travailleur".',
            audio: 'Joe-Bob n’est pas travailleur.',
            explain: 'Masculine singular → "travailleur".',
            explainZh: 'Joe-Bob 为阳性，保持 "travailleur"。'
          },
          {
            id: 'd31_d8',
            kind: 'fib',
            prompt: 'Adjective vs. Adverb: Tex écrit ___ ! (well)',
            promptZh: '填空（修饰动词）：Tex 写得“很好”。',
            answers: ['bien'],
            hint: 'Adverb modifying verb "écrit".',
            audio: 'Tex écrit bien !',
            explain: '"Tex écrit bien !"',
            explainZh: '修饰动词 écrit 用副词 "bien"。'
          },
          {
            id: 'd31_d9',
            kind: 'fib',
            prompt: 'Adjective vs. Adverb: La poésie de Tex est ___. (good)',
            promptZh: '填空（修饰名词 la poésie）：Tex 的诗很“好”。',
            answers: ['bonne'],
            hint: 'Feminine adjective agreeing with "la poésie".',
            audio: 'La poésie de Tex est bonne.',
            explain: '"La poésie de Tex est bonne."',
            explainZh: '修饰阴性名词 la poésie 用 "bonne"。'
          },
          {
            id: 'd31_d10',
            kind: 'fib',
            prompt: 'Place the adjective AFTER the noun: Édouard est ___. (un escargot + raffiné)',
            promptZh: '写出短语“一只高雅的蜗牛”（3 words，注意形容词位置）：',
            answers: ['un escargot raffiné', 'un escargot raffine'],
            hint: 'un escargot + raffiné.',
            audio: 'Édouard est un escargot raffiné.',
            explain: '"raffiné" follows "escargot": "un escargot raffiné".',
            explainZh: '"un escargot raffiné"。'
          }
        ],
        related: [
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_2', label: '3.2 Regular Formation & Placement' },
          { chapterId: 'ch4_adverbs', pageId: 'adv_4_1', label: '4.1 Intro to Adverbs' }
        ]
      },

      /* =========================================================
         PAGE 3.2: REGULAR FORMATION & PLACEMENT + TEX ADJ2 DRILLS
      ========================================================= */
      {
        id: 'adj_3_2',
        code: '3.2',
        group: 'Regular Agreement & Placement',
        shortTitle: 'Regular +e / +s & Placement',
        title: 'Regular Adjective Formation (+e, +s, +es) & Post-Noun Placement',
        titleZh: '常规形容词变化（+e / +s / +es · 混合性别规则）与后置对话 + Tex 12 题',
        estMin: 4,
        summary: 'Master regular 4-form adjective endings (petit / petite / petits / petites), the mixed-gender masculine plural rule ("Tammy et Tex sont petits"), post-noun placement examples, the Gregory Gym dispute dialogue, and all 12 Tex adj2 drills!',
        summaryZh: '掌握规则形容词“男单/女单/男复/女复”四格变化（并听辨复数 -s 不发音的规律）、男女混合用阳复的铁律、大量后置例句、健身房斗嘴对话以及 Tex 原版 12 题。',
        cheatSummary: [
          { label: 'Regular 4-Form Grid', rule: 'Masc. sg. = base (petit) · Fem. sg. = +e (petite) · Masc. pl. = +s (petits) · Fem. pl. = +es (petites). Note: singular & plural sound the same; adding -e makes silent final consonants (like t, d, s) audible!', ruleZh: '常规四格：原型 / +e / +s / +es。注意 -s 不发音，所以 petit 和 petits 读音相同，但加 -e 变成 petite 时尾音 t 要读出！' },
          { label: 'Mixed Gender → Masc. Plural', rule: 'Even one masculine noun in a group makes the plural adjective masculine: "Tammy (f.) et Tex (m.) sont petits."', ruleZh: '只要复数群里有一个阳性（哪怕 99 个女生+1 个男生），形容词就用阳性复数：Tammy et Tex sont petits。' }
        ],
        sections: [
          {
            id: 'adj_reg_form',
            heading: '1. Regular Formation (petit / petite / petits / petites) + Mixed Gender Rule',
            headingZh: '一、常规四形变化 + 混合性别归阳规则',
            lead: 'For regular adjectives, start from the masculine singular base: add -e for feminine singular, add -s for masculine plural, and add -es for feminine plural. Listen to the audio: masculine singular and plural sound identical, and feminine singular and plural sound identical—while feminine -e awakens the final consonant sound! When modifying both a feminine and a masculine noun, French uses the masculine plural.',
            leadZh: '常规形容词以阳性单数为原型，阴性加 -e，复数加 -s。听音时记住：**加 -s 不改变读音**，但**加 -e 会让原本哑巴的尾辅音读出来（如 petit → petite）**。若主语既有男又有女，用阳性复数：',
            cartoon: {
              src: './assets/tex_cartoons/adj2_petit.gif',
              alt: 'Tex et Tammy sont petits',
              caption: 'Tex est petit · Tammy est petite · Tammy et Tex sont petits (mixed gender = m.pl.)!',
              captionZh: '男女搭配（Tammy + Tex）变复数用阳性复数 petits！'
            },
            table: {
              headers: ['Masc. sg.', 'Fem. sg. (+e)', 'Masc. pl. (+s)', 'Fem. pl. (+es)'],
              rows: [
                { cols: ['petit', 'petite', 'petits', 'petites'], audio: 'Tex est petit. Tammy est petite. Tex et Trey sont petits. Tammy et Bette sont petites.' }
              ]
            },
            examples: [
              { fr: 'Tammy et Tex sont petits.', en: 'Tammy (f.) and Tex (m.) are little → masculine plural!', zh: 'Tammy 和 Tex 个子很小（一女一男 → 阳性复数 petits）。', tag: 'Mixed Gender' },
              { fr: 'Already ends in -s (or -x): le vin français → les vins français (no double s in m.pl.!)', en: 'If masc. sg. ends in -s or -x ("français"), masc. pl. stays "français", while fem. sg. is "française".', zh: '提醒：本身以 -s/-x 结尾的形容词（如 français），阳性复数不重复加 s，阴性仍加 e（française）。', tag: '-s Note' }
            ]
          },
          {
            id: 'adj_post_gym',
            heading: '2. Post-Noun Placement + Gregory Gym Dialogue (Tammy vs. Bette)',
            headingZh: '二、典型后置例句 + 健身房对话',
            lead: 'Color, nationality, religion, shape, personality, and academic adjectives all follow the noun. Read Tex’s examples and listen to Tammy and Bette arguing at the gym while Tex runs on the treadmill:',
            leadZh: '颜色、国籍、宗教、形状、性格、学科类形容词全都站在名词“后面”。来看 Tex 例句和两位女生在健身房边看 Tex 跑步边暗中较劲的对话：',
            cartoon: {
              src: './assets/tex_cartoons/adj2_berk.gif',
              alt: 'Berk! Un corps humide et une odeur désagréable!',
              caption: 'Tammy : ses ongles jaunes, ce museau pointu, ces écailles étincelantes · Bette : cette odeur désagréable !',
              captionZh: '几乎所有修饰特征的形容词（jaunes / pointu / désagréable）都放在名词后面！'
            },
            examples: [
              { fr: 'Tex porte un béret rond. Il aime les romans existentialistes et habitait chez des nonnes catholiques.', en: 'round beret · existentialist novels · Catholic nuns', zh: '圆贝雷帽 · 存在主义小说 · 天主教修女', tag: 'Tex Examples' },
              { fr: 'Tammy a un nez pointu. C’est une tatou mince et sympathique qui apprend la langue française.', en: 'pointed nose · slim and nice armadillo · French language', zh: '尖鼻子 · 苗条友善的犰狳 · 法语', tag: 'Tammy' }
            ],
            dialogue: {
              title: 'Dialogue: Tammy et Bette à Gregory Gym',
              titleZh: '健身房暗战：Tammy 眼里的男神 vs Bette 嘴里的“淹死的老鼠”',
              lines: [
                { speaker: 'Tammy', fr: 'Regarde, Bette, comme ses ongles jaunes tapent sur le tapis roulant quand il court ! Quel tatou adorable ! Et ce museau fin et pointu, ces écailles étincelantes, ce corps souple...', en: 'Look Bette how his yellow claws tap the treadmill! What an adorable armadillo! And that fine pointed snout, shiny scales, supple body...', zh: '快看 Bette，他跑步时那双黄爪子哒哒踩在跑步机上的样子！多可爱的犰狳！那精致的小尖鼻、闪亮的鳞片、柔韧的身段……' },
                { speaker: 'Bette', fr: 'Berk ! Tu aimes vraiment ça !? Un corps humide de sueur et un poil gris comme une boule de papier mâché ! Et cette odeur désagréable ! Comme un rat noyé !', en: 'Yuck! You actually like that?! A sweaty clammy body, grey fur like wet papier-mâché! And that awful smell! Like a drowned rat!', zh: '呕！你真喜欢那样？！一身黏糊糊的汗和像废纸团一样的灰毛！还有那股难闻的气味，跟落汤老鼠似的！' },
                { speaker: 'Tammy', fr: 'Bette, je ne suis pas idiote ! Je connais tes intentions ! Il est à moi !', en: 'Bette, I’m not an idiot! I know what you’re up to! He’s mine!', zh: 'Bette，我才不傻呢！你的心思我一清二楚！Tex 是我的！' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'd32_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12 — Agreement: Tex et Tammy sont des tatous ___. (charmant, m.pl.)',
            promptZh: 'Tex 第 1 题：Tex 和 Tammy 是有魅力的犰狳（tatous 阳性复数）。',
            options: ['charmants', 'charmant', 'charmantes', 'charmante'],
            answerIdx: 0,
            audio: 'Tex et Tammy sont des tatous charmants.',
            explain: '"des tatous" is masculine plural → add -s: "charmants".',
            explainZh: 'tatous 是阳性复数，加 -s："charmants"。'
          },
          {
            id: 'd32_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Bette est une chatte ___. (rusé, f.sg.)',
            promptZh: 'Tex 第 2 题：Bette 是只狡黠的母猫（chatte 阴性单数）。',
            options: ['rusée', 'rusé', 'rusés', 'rusées'],
            answerIdx: 0,
            audio: 'Bette est une chatte rusée.',
            explain: '"une chatte" is feminine singular → add -e: "rusée".',
            explainZh: 'chatte 阴性单数，加 -e："rusée"。'
          },
          {
            id: 'd32_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Fiona et Tammy sont ___. (intelligent, f.pl.)',
            promptZh: 'Tex 第 3 题：Fiona 和 Tammy（两人都是女性）很聪明。',
            options: ['intelligentes', 'intelligents', 'intelligente', 'intelligent'],
            answerIdx: 0,
            audio: 'Fiona et Tammy sont intelligentes.',
            explain: 'Two feminine subjects (Fiona & Tammy) → add -es: "intelligentes".',
            explainZh: '全是女生复数，加 -es："intelligentes"。'
          },
          {
            id: 'd32_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Bette a un stylo ___. (vert, m.sg.)',
            promptZh: 'Tex 第 4 题：Bette 有一支绿色的笔（un stylo 阳性单数）。',
            options: ['vert', 'verte', 'verts', 'vertes'],
            answerIdx: 0,
            audio: 'Bette a un stylo vert.',
            explain: '"un stylo" is masculine singular → base form "vert".',
            explainZh: 'un stylo 阳性单数，用原型 "vert"。'
          },
          {
            id: 'd32_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Adjective agreement: Tammy aime le vin ___. (français, m.sg.)',
            promptZh: 'Tex 第 5 题：Tammy 喜欢法国葡萄酒（le vin 阳性单数）。',
            answers: ['français', 'francais'],
            hint: 'Masculine singular.',
            audio: 'Tammy aime le vin français.',
            explain: '"le vin" is masculine singular → "français".',
            explainZh: 'le vin 阳性单数，填 "français"。'
          },
          {
            id: 'd32_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12: Tammy a une robe ___. (ravissant, f.sg.)',
            promptZh: 'Tex 第 6 题：Tammy 有一条迷人的裙子（une robe 阴性单数）。',
            answers: ['ravissante'],
            hint: 'Feminine singular: add -e.',
            audio: 'Tammy a une robe ravissante.',
            explain: '"une robe" is feminine singular → "ravissante".',
            explainZh: 'robe 为阴性单数，加 -e："ravissante"。'
          },
          {
            id: 'd32_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12: Tex a un charme ___. (fou, m.sg.)',
            promptZh: 'Tex 第 7 题：Tex 有着令人疯狂的魅力（un charme 阳性单数，fou）。',
            answers: ['fou'],
            hint: 'Masculine singular of fou is simply "fou"!',
            audio: 'Tex a un charme fou.',
            explain: '"un charme" is masculine singular → "fou".',
            explainZh: 'un charme 阳性单数，用 "fou"。'
          },
          {
            id: 'd32_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12: Ah, Tex a une allure ___ ! (séduisant, f.sg.)',
            promptZh: 'Tex 第 8 题：啊，Tex 气质好迷人（une allure 阴性单数）！',
            answers: ['séduisante', 'seduisante'],
            hint: 'Feminine singular: +e.',
            audio: 'Ah, Tex a une allure séduisante !',
            explain: '"une allure" is feminine singular → "séduisante".',
            explainZh: 'allure 阴性单数，加 -e："séduisante"。'
          },
          {
            id: 'd32_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12: Joe-Bob et Corey ne sont pas ___ ! (dégourdi, m.pl.)',
            promptZh: 'Tex 第 9 题：Joe-Bob 和 Corey（两个男生）一点也不机灵（dégourdi）。',
            answers: ['dégourdis', 'degourdis'],
            hint: 'Masculine plural: +s.',
            audio: 'Joe-Bob et Corey ne sont pas dégourdis !',
            explain: 'Two masculine subjects → add -s: "dégourdis".',
            explainZh: '两位男生复数，加 -s："dégourdis"。'
          },
          {
            id: 'd32_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12: Est-ce qu’Édouard est un serveur ___ ? (poli, m.sg.)',
            promptZh: 'Tex 第 10 题：Édouard 是位礼貌的服务员吗（un serveur 阳性单数）？',
            answers: ['poli'],
            hint: 'Masculine singular.',
            audio: 'Est-ce qu’Édouard est un serveur poli ?',
            explain: '"un serveur" is masculine singular → "poli".',
            explainZh: '阳性单数保持原型 "poli"。'
          },
          {
            id: 'd32_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12: Est-ce qu’Édouard et Tex sont des Français ___ ? (typique, m.pl.)',
            promptZh: 'Tex 第 11 题：Édouard 和 Tex 是典型的法国人吗（复数）？',
            answers: ['typiques'],
            hint: 'Already ends in -e, so add -s for plural!',
            audio: 'Est-ce qu’Édouard et Tex sont des Français typiques ?',
            explain: '"typique" ends in -e → add -s for masculine plural: "typiques".',
            explainZh: '词尾已有 -e，复数直接加 -s："typiques"。'
          },
          {
            id: 'd32_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12: Tammy et Bette aiment les tatous ___. (musclé, m.pl.)',
            promptZh: 'Tex 第 12 题：Tammy 和 Bette 喜欢肌肉发达的犰狳（les tatous 阳性复数）。',
            answers: ['musclés', 'muscles'],
            hint: 'Modifies "les tatous" (m.pl.) — NOT Tammy and Bette!',
            audio: 'Tammy et Bette aiment les tatous musclés.',
            explain: 'Careful! "musclés" modifies "les tatous" (masculine plural) → "musclés".',
            explainZh: '注意配合的对象是“les tatous”（阳性复数），因此填 "musclés"！'
          }
        ],
        related: [
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_3', label: '3.3 BANGS & beau/nouveau/vieux' },
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_4', label: '3.4 Irregular Adjectives' }
        ]
      },

      /* =========================================================
         PAGE 3.3: ADJECTIVES BEFORE THE NOUN (BANGS & BEAU/NOUVEAU/VIEUX)
      ========================================================= */
      {
        id: 'adj_3_3',
        code: '3.3',
        group: 'Pre-Noun Placement',
        shortTitle: 'BANGS & beau/nouveau/vieux',
        title: 'Adjectives Before the Noun (BANGS) & beau / nouveau / vieux',
        titleZh: '前置形容词（BANGS 法则 + 序数词 + beau/nouveau/vieux 遇元音变 bel/nouvel/vieil）+ Tex 12 题',
        estMin: 5,
        summary: 'Memorize the compact BANGS group that stands BEFORE nouns (Beauty, Age, Numbers, Goodness, Size), master the 5-form vowel pattern (beau/bel, nouveau/nouvel, vieux/vieil), read Rita’s album dialogue, and finish all 12 Tex adj3 drills!',
        summaryZh: '背下少数必须站在名词前面的“BANGS”高频词（美貌、年龄、序数词、好坏、大小）以及三大双形词遇元音的变体（bel, nouvel, vieil），精读家庭相册对话并完成 Tex 原版 12 题。',
        cheatSummary: [
          { label: 'BANGS (Place BEFORE Noun!)', rule: 'Beauty: beau, joli · Age: jeune, nouveau, vieux · Numbers (Ordinals): premier, deuxième, troisième... (+ autre, seul) · Goodness: bon, mauvais · Size: grand, gros, petit. (Remember "des → de" before plural pre-noun adj.!)', ruleZh: 'BANGS 前置词口诀：美貌（beau/joli）、年龄（jeune/nouveau/vieux）、序数（premier/deuxième… + autre）、好坏（bon/mauvais）、大小（grand/gros/petit）。注意复数前 des 变 de！' },
          { label: 'Special Masculine Vowel Forms', rule: 'Before a masc. sg. noun starting with a vowel or silent h: beau → bel (un bel animal), nouveau → nouvel (le nouvel album), vieux → vieil (le vieil homme). Feminine & plurals stay belle/belles/beaux, nouvelle/s/nouveaux, vieille/s/vieux.', ruleZh: '三大词在阳性单数元音/哑音 h 前变单 l：beau → bel，nouveau → nouvel，vieux → vieil（如 un bel homme, un nouvel an, un vieil ami）。' }
        ],
        sections: [
          {
            id: 'bangs_list',
            heading: '1. The BANGS Group & Ordinal Numbers',
            headingZh: '一、哪些形容词站在名词前面？（BANGS + 序数词）',
            lead: 'Only a tight, ultra-high-frequency group of adjectives regularly precedes the noun. Memorize it with B-A-N-G-S (Beauty, Age, Numbers/Ordinals, Goodness, Size) plus "autre" (other). And don’t forget from Chapter 2: when plural, "des" in front turns into "de" ("de bonnes notes", "de grands amis")!',
            leadZh: '大多数形容词都站在名词后面，唯有下面这十几个超高频短词（BANGS：美丑、老少、序数、好坏、大小）站在名词前面，并且仍要随名词配合性数：',
            cartoon: {
              src: './assets/tex_cartoons/adj3_belle.gif',
              alt: 'Tammy est une belle Américaine',
              caption: 'Tammy est une belle Américaine, une bonne amie et une petite tatou.',
              captionZh: 'belle / bonne / petite 都属于 BANGS，站在名词前面！'
            },
            table: {
              headers: ['Category', 'French Adjectives (m. / f.)', 'Meaning'],
              rows: [
                { cols: ['B · Beauty', 'beau (belle) · joli (jolie)', 'handsome/beautiful · pretty'], audio: 'une belle Américaine, une jolie dent' },
                { cols: ['A · Age', 'jeune · nouveau (nouvelle) · vieux (vieille)', 'young · new · old'], audio: 'le jeune frère, un nouvel album, un vieil homme' },
                { cols: ['N · Numbers & Order', 'premier (première) · deuxième · troisième · autre · (seul)', 'first · second · third · other · (only/single)'], audio: 'le troisième enfant, la première photo, une seule qualité' },
                { cols: ['G · Goodness', 'bon (bonne) · mauvais (mauvaise)', 'good · bad'], audio: 'une bonne amie, une mauvaise influence' },
                { cols: ['S · Size', 'grand (grande) · gros (grosse) · petit (petite)', 'big/tall · big/fat · little/small'], audio: 'une petite tatou, de grandes oreilles' }
              ]
            }
          },
          {
            id: 'bel_nouvel_vieil',
            heading: '2. Special Forms Before Vowels: bel, nouvel, vieil (+ Photo Dialogue)',
            headingZh: '二、遇到元音/哑音 h 的特殊变体：bel, nouvel, vieil + 相册对话',
            lead: 'Three BANGS stars—beau, nouveau, and vieux—have a 5th irregular form used ONLY before a masculine singular noun starting with a vowel or silent h (so you never get an awkward vowel gap):',
            leadZh: 'beau, nouveau, vieux 这三个词各有 5 种形态——当它们站在“以元音或哑音 h 开头的阳性单数名词”前时，分别变为 **bel, nouvel, vieil**（与阴性 belle/nouvelle/vieille 读音相似，但只写 1 个 l！）：',
            cartoon: {
              src: './assets/tex_cartoons/adj3_bebe.gif',
              alt: 'La première photo de Tex',
              caption: 'le nouvel album · le vieil homme · ce petit bébé · la première photo !',
              captionZh: 'le nouvel album（album 阳元）、le vieil homme（homme 阳哑音h）、la première photo（序数词前置）！'
            },
            table: {
              headers: ['Masc. sg. (cons.)', 'Masc. sg. (+ vowel / silent h)', 'Fem. sg.', 'Masc. pl.', 'Fem. pl.'],
              rows: [
                { cols: ['beau', 'bel (un bel animal)', 'belle', 'beaux', 'belles'], audio: 'un beau tatou, un bel animal, une belle femme, de beaux livres, de belles femmes' },
                { cols: ['nouveau', 'nouvel (un nouvel album)', 'nouvelle', 'nouveaux', 'nouvelles'], audio: 'un nouveau livre, le nouvel album, une nouvelle voiture, de nouveaux amis' },
                { cols: ['vieux', 'vieil (un vieil homme)', 'vieille', 'vieux', 'vieilles'], audio: 'un vieux chien, le vieil homme, une vieille amie, de vieux livres' }
              ]
            },
            dialogue: {
              title: 'Dialogue: Tex et Tammy regardent le nouvel album de famille de Rita',
              titleZh: '家庭相册对话：看 Tex 小时候的照片',
              lines: [
                { speaker: 'Tammy', fr: 'Qui est cette belle femme ?', en: 'Who is that beautiful woman?', zh: '这位美女是谁呀？' },
                { speaker: 'Rita', fr: 'C’est notre mère.', en: 'That’s our mother.', zh: '那是我们妈妈。' },
                { speaker: 'Tammy', fr: 'Et qui sont ces autres personnes ?', en: 'And who are these other people?', zh: '那旁边这些人又是谁呢？' },
                { speaker: 'Rita', fr: 'Le vieil homme, c’est Paw-Paw Louis. Et puis, à côté, c’est moi.', en: 'The old man is Paw-Paw Louis. And next to him, that’s me.', zh: '那位老人是爷爷 Louis，旁边的就是我。' },
                { speaker: 'Tex', fr: 'Et ce petit bébé, qui est-ce ? Comme il est laid !', en: 'And that little baby, who is that? Boy is he ugly!', zh: '那这个小宝宝是谁啊？丑死了！' },
                { speaker: 'Rita', fr: 'C’est toi, Tex. C’est la première photo de toi.', en: 'That’s you, Tex. It’s the first picture of you.', zh: '……Tex，那就是你自己呀。是你人生第一张照片。' }
              ]
            },
            quickCheck: {
              prompt: 'Match the three forms of "new": "___ ordinateur" (m.+vowel), "___ maison" (f.sg.), "___ amis" (m.pl.+vowel):',
              promptZh: '选出 "nouveau" 的三种形态：① 电脑(阳单元音)、② 房子(阴单)、③ 朋友们(阳复元音)：',
              options: [
                'nouvel / nouvelle / nouveaux',
                'nouveau / nouvelle / nouvel',
                'nouvel / nouveau / nouvelles',
                'nouveaux / nouvelle / nouvel'
              ],
              answerIdx: 0,
              explain: 'Right! Masc.+vowel → "nouvel"; fem. sg. → "nouvelle"; masc. plural → "nouveaux" (with /z/ liaison before "amis"!).',
              explainZh: '① 阳单遇元音用 nouvel；② 阴单用 nouvelle；③ 阳复用 nouveaux（注意不是 nouvels！）并读 /z/ 联诵。'
            }
          }
        ],
        drills: [
          {
            id: 'd33_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12: Tex est un ___ animal. (beau — animal is m.sg., starts with a-!)',
            promptZh: 'Tex 第 1 题：Tex 是只漂亮的动物（animal 阳性单数、元音开头！）。',
            options: ['bel', 'beau', 'belle', 'beaux'],
            answerIdx: 0,
            audio: 'Tex est un bel animal.',
            explain: '"animal" is masculine singular starting with vowel a- → "bel animal"!',
            explainZh: 'animal 为阳性单数且以元音开头，beau 变成 "bel"！'
          },
          {
            id: 'd33_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Tammy a un ___ oncle en Australie. (vieux — oncle is m.sg., starts with o-!)',
            promptZh: 'Tex 第 2 题：Tammy 在澳大利亚有个年迈的叔叔（oncle 阳性单数、元音开头！）。',
            options: ['vieil', 'vieux', 'vieille', 'vieils'],
            answerIdx: 0,
            audio: 'Tammy a un vieil oncle en Australie.',
            explain: '"oncle" is masculine singular starting with vowel o- → "un vieil oncle"!',
            explainZh: 'oncle 为阳性单数且元音开头，vieux 变成 "vieil"！'
          },
          {
            id: 'd33_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Les ___ poèmes de Tex sont nuls. (premier — m.pl.)',
            promptZh: 'Tex 第 3 题：Tex 最早写的那批诗很差劲（les poèmes 阳性复数）。',
            options: ['premiers', 'premier', 'première', 'premières'],
            answerIdx: 0,
            audio: 'Les premiers poèmes de Tex sont nuls.',
            explain: '"les poèmes" is masculine plural → add -s: "premiers".',
            explainZh: 'poèmes 是阳性复数，加 -s："premiers"。'
          },
          {
            id: 'd33_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Fiona a toujours de ___ notes. (bon — notes f.pl.)',
            promptZh: 'Tex 第 4 题：Fiona 总是拿高分（les notes 阴性复数，注意 bon 阴性双写 n！）。',
            options: ['bonnes', 'bons', 'bonne', 'bon'],
            answerIdx: 0,
            audio: 'Fiona a toujours de bonnes notes.',
            explain: '"la note" is feminine plural → "de bonnes notes".',
            explainZh: 'note 为阴性（la note），bon 变阴性双写 n 加 es："bonnes"。'
          },
          {
            id: 'd33_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12: Bette n’a pas une ___ qualité. (seul, f.sg.)',
            promptZh: 'Tex 第 5 题：Bette 连一个优点都没有（une qualité 阴性单数）。',
            answers: ['seule'],
            hint: '-té ending = feminine singular.',
            audio: 'Bette n’a pas une seule qualité.',
            explain: '"une seule qualité".',
            explainZh: 'qualité 为阴性单数，填 "seule"。'
          },
          {
            id: 'd33_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12: Tex a de ___ oreilles. (grand — oreilles f.pl.)',
            promptZh: 'Tex 第 6 题：Tex 有一对大耳朵（une oreille 阴性复数）。',
            answers: ['grandes'],
            hint: '"oreille" is feminine plural.',
            audio: 'Tex a de grandes oreilles.',
            explain: '"oreilles" is feminine plural → "de grandes oreilles".',
            explainZh: 'oreille 是阴性，复数填 "grandes"。'
          },
          {
            id: 'd33_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12: Tex achète une ___ bague pour Tammy. (beau — bague f.sg.)',
            promptZh: 'Tex 第 7 题：Tex 给 Tammy 买了一枚漂亮的戒指（une bague 阴性单数）。',
            answers: ['belle'],
            hint: 'Feminine singular of beau.',
            audio: 'Tex achète une belle bague pour Tammy.',
            explain: '"une bague" is feminine singular → "une belle bague".',
            explainZh: 'beau 的阴性单数是 "belle"。'
          },
          {
            id: 'd33_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12: Bette est une ___ chatte opportuniste. (jeune, f.sg.)',
            promptZh: 'Tex 第 8 题：Bette 是只年轻的机会主义母猫（jeune 本身以 -e 结尾）。',
            answers: ['jeune'],
            hint: 'Already ends in -e!',
            audio: 'Bette est une jeune chatte opportuniste.',
            explain: '"jeune" stays identical in masculine and feminine singular.',
            explainZh: 'jeune 本身已带 -e，男女单数同形："jeune"。'
          },
          {
            id: 'd33_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12: Joe-Bob a de ___ amis. (nouveau, m.pl.)',
            promptZh: 'Tex 第 9 题：Joe-Bob 交了新朋友（amis 阳性复数，nouveau 复数怎么拼？）。',
            answers: ['nouveaux'],
            hint: 'Recall Ch 1 -eau plural rule: +x!',
            audio: 'Joe-Bob a de nouveaux amis.',
            explain: '"nouveau" ends in -eau → masculine plural adds -x: "nouveaux" (with /z/ liaison!).',
            explainZh: '-eau 结尾变复数加 -x："nouveaux"（并读 /z/ 联诵）。'
          },
          {
            id: 'd33_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12: Édouard n’a pas de ___ amie. (petit — amie f.sg.)',
            promptZh: 'Tex 第 10 题：Édouard 没有女朋友（amie 阴性单数）。',
            answers: ['petite'],
            hint: '"amie" is feminine singular.',
            audio: 'Édouard n’a pas de petite amie.',
            explain: '"une petite amie" → negative "pas de petite amie".',
            explainZh: 'amie 为阴性单数，填 "petite"。'
          },
          {
            id: 'd33_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12: Joe-Bob a une ___ influence sur Corey. (mauvais, f.sg.)',
            promptZh: 'Tex 第 11 题：Joe-Bob 对 Corey 有不良影响（une influence 阴性单数）。',
            answers: ['mauvaise'],
            hint: 'Feminine singular: +e.',
            audio: 'Joe-Bob a une mauvaise influence sur Corey.',
            explain: '"une influence" is feminine singular → "mauvaise".',
            explainZh: 'influence 阴性单数，填 "mauvaise"。'
          },
          {
            id: 'd33_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12: Joe-Bob a de ___ dents. (joli — la dent is f.pl.!)',
            promptZh: 'Tex 第 12 题：Joe-Bob 有一口漂亮的牙齿（小心：la dent 牙齿在法语里是阴性！）。',
            answers: ['jolies'],
            hint: 'Attention! "la dent" (tooth) is FEMININE in French!',
            audio: 'Joe-Bob a de jolies dents.',
            explain: 'Classic gender trap: "la dent" is feminine → plural "de jolies dents"!',
            explainZh: '高频提醒：la dent（牙齿）是阴性名词！因此填 "jolies"。'
          }
        ],
        related: [
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_2', label: '3.2 Regular Formation' },
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_6', label: '3.6 Meaning Changes With Position' }
        ]
      },

      /* =========================================================
         PAGE 3.4: IRREGULAR ADJECTIVES PART 1 — 6 IRREGULARS & 14 PATTERNS
      ========================================================= */
      {
        id: 'adj_3_4',
        code: '3.4',
        group: 'Irregular Adjectives',
        shortTitle: 'Irregulars (1): Feminine Stems',
        title: 'Irregular Adjectives (Part 1): 6 Unique Irregulars & 14 Feminine Ending Families',
        titleZh: '不规则形容词（一）：6 个彻底不规则词与 14 组阴性词尾变身表',
        estMin: 5,
        summary: 'Master the 6 one-of-a-kind feminine adjectives (doux/douce, faux/fausse, favori/favorite, frais/fraîche, long/longue, public/publique) and all 14 systematic masculine → feminine ending families.',
        summaryZh: '一次性查全法语形容词变阴性的全部密码：先记 6 个独一无二的常用特例，再用 14 组词尾转换规律批量搞定数百个形容词！',
        cheatSummary: [
          { label: '6 Unique Feminines', rule: 'doux → douce · faux → fausse · favori → favorite · frais → fraîche · long → longue · public → publique.', ruleZh: '六大独行侠：doux/douce, faux/fausse, favori/favorite, frais/fraîche, long/longue, public/publique。' },
          { label: 'Top Ending Families', rule: '-eux / -eur → -euse (heureux/heureuse, trompeur/trompeuse) · -teur → -trice (créateur/créatrice) · -f → -ve (actif/active, vif/vive) · -er → -ère (cher/chère) · -et → -ète (secret/secrète) · -el/-eil/-il/-on/-en/-s double consonant + e (cruelle, gentille, mignonne, ancienne, grosse) · -c → -che (franc/franche) · -ou → -olle (fou/folle).', ruleZh: '核心规律：-eux/-eur→-euse、-teur→-trice、-f→-ve、-er→-ère、-et→-ète；-el/-eil/-il/-on/-en/-s 双写尾辅音加 e；-c→-che，-ou→-olle。' }
        ],
        sections: [
          {
            id: 'irr_six',
            heading: '1. Six Truly Irregular Masculine → Feminine Pairs',
            headingZh: '一、六个最常用的完全不规则形容词',
            lead: 'Many irregular adjectives simply alter their final consonant to keep or shift the sound when -e is added. Start with these 6 ultra-common one-off pairs:',
            leadZh: '这 6 个高频词变阴性时拼写变化比较特殊，建议点击读音把口语印象一起记住：',
            cartoon: {
              src: './assets/tex_cartoons/adj4_bette.gif',
              alt: 'Bette est gentille? Tu es fou!',
              caption: 'doux/douce · faux/fausse · favori/favorite · frais/fraîche · long/longue · public/publique',
              captionZh: '六个最常考的不规则形容词阴性对！'
            },
            table: {
              headers: ['Masculine', 'Feminine', 'Meaning'],
              rows: [
                { cols: ['doux', 'douce', 'soft / sweet · 柔和/甜的'], audio: 'une voix douce, une peau douce' },
                { cols: ['faux', 'fausse', 'false / fake · 假的/错误的'], audio: 'une fausse accusation' },
                { cols: ['favori', 'favorite', 'favorite · 最爱的'], audio: 'ta chanson favorite' },
                { cols: ['frais', 'fraîche', 'fresh / cool · 新鲜/凉爽的'], audio: 'de l’eau fraîche' },
                { cols: ['long', 'longue', 'long · 长的 (u keeps hard /g/!)'], audio: 'une longue histoire' },
                { cols: ['public', 'publique', 'public · 公共的'], audio: 'un lieu public, une école publique' }
              ]
            }
          },
          {
            id: 'irr_14_patterns',
            heading: '2. The 14 Predictable Feminine Ending Families (From Tex)',
            headingZh: '二、14 组可按规律批发的阴性变化表',
            lead: 'Instead of memorizing hundreds of words individually, group them into these 14 predictable ending shifts:',
            leadZh: '把剩下的“不规则”形容词按词尾排成下面 14 组规律，背一个顶一串：',
            table: {
              headers: ['Group A (Doubling & Accents)', 'Example (m. → f.)', 'Group B (Consonant & Vowel Shifts)', 'Example (m. → f.)'],
              rows: [
                { cols: ['-el → -elle', 'cruel → cruelle (cruel)', '-er → -ère', 'cher → chère (dear/expensive)'], audio: 'cruelle, chère' },
                { cols: ['-eil → -eille', 'pareil → pareille (similar)', '-eux → -euse', 'heureux → heureuse (happy)'], audio: 'pareille, heureuse' },
                { cols: ['-il → -ille', 'gentil → gentille (kind/nice)', '-eur → -euse', 'trompeur → trompeuse (deceptive)'], audio: 'gentille, trompeuse' },
                { cols: ['-on → -onne', 'mignon → mignonne (cute)', '-teur → -trice', 'créateur → créatrice (creative)'], audio: 'mignonne, créatrice' },
                { cols: ['-s → -sse', 'gros → grosse (big/fat)', '-f → -ve', 'actif → active · vif → vive (active/lively)'], audio: 'grosse, active, vive' },
                { cols: ['-en → -enne', 'ancien → ancienne (old/former)', '-c → -che', 'franc → franche (frank/honest)'], audio: 'ancienne, franche' },
                { cols: ['-et → -ète', 'secret → secrète (secretive)', '-ou → -olle', 'fou → folle (crazy)'], audio: 'secrète, folle' }
              ]
            },
            quickCheck: {
              prompt: 'Apply the patterns: What are the feminine forms of "vif" (lively), "sensuel" (sensuous), and "amoureux" (in love)?',
              promptZh: '用刚才的词尾表，写出 vif / sensuel / amoureux 三个词的阴性形式：',
              options: ['vive / sensuelle / amoureuse', 'vife / sensuele / amoureuxe', 'vive / sensuele / amoureuse', 'viffe / sensuelle / amouresse'],
              answerIdx: 0,
              explain: '-f → -ve ("vive"), -el → -elle ("sensuelle"), -eux → -euse ("amoureuse")!',
              explainZh: '依次对应 -f→-ve（vive）、-el→-elle（sensuelle）、-eux→-euse（amoureuse）！'
            }
          }
        ],
        drills: [
          {
            id: 'd34_d1',
            kind: 'choice',
            prompt: 'Choose the feminine form of "frais" (fresh — "des boissons ___"):',
            promptZh: '选择 "frais"（冰凉/新鲜）对应的阴性单数：',
            options: ['fraîche', 'fraise', 'fraisse', 'fraichete'],
            answerIdx: 0,
            audio: 'une boisson fraîche',
            explain: '"frais → fraîche" (remember also "les boissons fraîches"!).',
            explainZh: 'frais 的阴性是不规则词 "fraîche"。'
          },
          {
            id: 'd34_d2',
            kind: 'choice',
            prompt: 'Choose the feminine form of "long" ("une ___ rue"):',
            promptZh: '选择 "long" 对应的阴性形式（修饰阴性 rue）：',
            options: ['longue', 'longe', 'longge', 'longuette'],
            answerIdx: 0,
            audio: 'une longue rue',
            explain: 'French inserts "u" after g before e to keep the hard /g/ sound: "long → longue".',
            explainZh: '加 u 是为了保住硬 g 音 [lɔ̃ɡ]，写成 "longue"。'
          },
          {
            id: 'd34_d3',
            kind: 'choice',
            prompt: 'Choose the feminine form of "public" ("une bibliothèque ___"):',
            promptZh: '选择 "public" 对应的阴性形式：',
            options: ['publique', 'publice', 'publiche', 'publicque'],
            answerIdx: 0,
            audio: 'une bibliothèque publique',
            explain: '"public → publique" (c shifts to qu before e).',
            explainZh: 'public 阴性写作 "publique"。'
          },
          {
            id: 'd34_d4',
            kind: 'choice',
            prompt: 'Choose the feminine form of "créateur" (-teur):',
            promptZh: '以 -teur 结尾的 "créateur"（有创造力的）变阴性：',
            options: ['créatrice', 'créateuse', 'créateure', 'créatriçe'],
            answerIdx: 0,
            audio: 'une idée créatrice',
            explain: '-teur adjectives shift to -trice: "créateur → créatrice".',
            explainZh: '-teur 变 -trice："créatrice"。'
          },
          {
            id: 'd34_d5',
            kind: 'fib',
            prompt: 'Feminine form of "actif" (-f → -ve): Fiona est une fourmi très ___.',
            promptZh: '填阴性（actif）：Fiona 是只非常积极活跃的蚂蚁。',
            answers: ['active'],
            hint: '-f → -ve.',
            audio: 'Fiona est une fourmi très active.',
            explain: '-f shifts to -ve: "actif → active".',
            explainZh: '-f 变 -ve："active"。'
          },
          {
            id: 'd34_d6',
            kind: 'fib',
            prompt: 'Feminine form of "cher" (-er → -ère): Cette voiture est trop ___.',
            promptZh: '填阴性（cher）：这辆车太贵了。',
            answers: ['chère', 'chere'],
            hint: '-er → -ère.',
            audio: 'Cette voiture est trop chère.',
            explain: '"cher → chère" (just like boulanger → boulangère).',
            explainZh: '-er 变 -ère："chère"。'
          },
          {
            id: 'd34_d7',
            kind: 'fib',
            prompt: 'Feminine form of "franc" (-c → -che): Tammy est très ___ avec Tex.',
            promptZh: '填阴性（franc）：Tammy 对 Tex 非常坦率直爽。',
            answers: ['franche'],
            hint: '-c → -che.',
            audio: 'Tammy est très franche avec Tex.',
            explain: '"franc → franche".',
            explainZh: 'franc 阴性是 "franche"。'
          },
          {
            id: 'd34_d8',
            kind: 'fib',
            prompt: 'Feminine form of "secret" (-et → -ète): Bette a une ambition ___.',
            promptZh: '填阴性（secret）：Bette 有一个秘密野心（une ambition 阴性）。',
            answers: ['secrète', 'secrete'],
            hint: '-et → -ète.',
            audio: 'Bette a une ambition secrète.',
            explain: '"secret → secrète".',
            explainZh: 'secret 阴性变成 "secrète"。'
          },
          {
            id: 'd34_d9',
            kind: 'fib',
            prompt: 'Feminine form of "gros" (-s → -sse): Quelle ___ surprise !',
            promptZh: '填阴性（gros）：多大的一个惊喜（une surprise 阴性）！',
            answers: ['grosse'],
            hint: 'Double s + e.',
            audio: 'Quelle grosse surprise !',
            explain: '"gros → grosse" (double s!).',
            explainZh: 'gros 阴性双写 s 加 e："grosse"。'
          },
          {
            id: 'd34_d10',
            kind: 'fib',
            prompt: 'Feminine form of "mignon" (-on → -onne): Bette est une chatte ___.',
            promptZh: '填阴性（mignon）：Bette 是只可爱的小母猫。',
            answers: ['mignonne'],
            hint: 'Double n + e.',
            audio: 'Bette est une chatte mignonne.',
            explain: '"mignon → mignonne".',
            explainZh: '-on 双写 n 加 e："mignonne"。'
          }
        ],
        related: [
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_5', label: '3.5 Unchanged -e, Plurals & Tex Review' },
          { chapterId: 'ch1_nouns', pageId: 'no_1_6', label: '1.6 Noun Gender Pairs' }
        ]
      },

      /* =========================================================
         PAGE 3.5: IRREGULAR ADJECTIVES PART 2 — UNCHANGED -E, PLURALS & TEX REVIEW
      ========================================================= */
      {
        id: 'adj_3_5',
        code: '3.5',
        group: 'Irregular Adjectives',
        shortTitle: 'Irregulars (2): Plurals & Review',
        title: 'Irregular Adjectives (Part 2): Unchanged -e, Plural Rules (-s/-x, -al → -aux) & Tex Review',
        titleZh: '不规则形容词（二）：-e 结尾不变词、复数特殊规则（-s/-x 不变，-al→-aux）与 Tex 12 题总测',
        estMin: 5,
        summary: 'Learn adjectives that keep the exact same masculine & feminine form (ending in -e + cool/snob), master the two plural exceptions (-s/-x unchanged, -al → -aux), read Tex & Tammy’s jealousy confrontation, and finish all 12 Tex adj4 drills!',
        summaryZh: '掌握以 -e 结尾和外来词（snob, cool）的男女同形规律、复数两大例外（-s/-x 阳复不变；-al 阳复变 -aux 但阴复仍规则加 -es！），并完成原版对话和 Tex 12 题。',
        cheatSummary: [
          { label: 'Unchanged Masc. & Fem.', rule: 'Adjectives already ending in silent -e (pauvre, difficile, sensible, riche, calme, mince, ridicule, propre, ironique, imaginaire) + loanwords (snob, cool) look identical in m.sg. & f.sg. (just add -s in plural!).', ruleZh: '阳性本身以 -e 结尾的形容词（如 pauvre, difficile, sensible, riche, mince, ridicule, cosmopolite）以及外来词（snob, cool）男女单数同形！' },
          { label: 'Two Plural Exceptions', rule: '1. Ending in -s or -x: m.pl. unchanged (un tatou heureux / des tatous heureux), while f.pl. is regular (des filles heureuses). 2. Ending in -al: m.pl. → -aux (des animaux internationaux / géniaux), while f.pl. is regular -ales (les revues internationales).', ruleZh: '复数两大规则：① -s / -x 结尾：阳复不变（heureux），阴复规则（heureuses）；② -al 结尾：阳复变 -aux（internationaux, géniaux），阴复规则 -ales（internationales）！' }
        ],
        sections: [
          {
            id: 'irr_unchanged',
            heading: '1. Unchanged -e Adjectives & The Two Plural Rules',
            headingZh: '一、男女同形词 + 两大复数例外（对比阳复 vs 阴复！）',
            lead: 'Good news: if the masculine singular adjective ALREADY ends in unaccented -e (or is a borrowed word like snob / cool), you do NOT add a second -e! And watch the plural asymmetry on -s/-x and -al words: feminine plurals are ALWAYS regular (+ -es or + -ales), while only masculine plurals change!',
            leadZh: '好消息：几十个高频形容词阳性词尾本来就是 -e（加上 snob, cool），男女单数完全一样！另外注意复数的“男女有别”：-s/-x 和 -al 的特殊规则只影响**阳性复数**，**阴性复数永远乖乖规则加 -s**（heureuses, internationales）！',
            examples: [
              { fr: 'Tex est imaginaire ; Tammy aussi est imaginaire. Ils sont imaginaires.', en: 'Both masc. & fem. sg. are "imaginaire" (same for pauvre, difficile, sensible, riche, calme, semblable, mince, minuscule, ridicule, propre, ironique, snob, cool).', zh: '以 -e 结尾与外来词男女单数一样，复数统一加 -s。', tag: 'Unchanged -e' },
              { fr: 'un animal heureux → des animaux heureux (m.pl.) vs. une fille heureuse → des filles heureuses (f.pl.)', en: '-x stays "heureux" in masc. plural, while fem. plural adds -s normally!', zh: '-x 阳复不变（des animaux heureux），阴复正常加 s（des filles heureuses）！', tag: '-s / -x Plural' },
              { fr: 'un tatou international → des animaux internationaux (m.pl.) vs. les revues internationales (f.pl.)', en: '-al turns into -aux ONLY in masc. plural; fem. plural is regular -ales!', zh: '-al 只有阳性复数变 -aux（internationaux）；阴性复数还是规则的 -ales（internationales）！', tag: '-al → -aux' }
            ]
          },
          {
            id: 'irr_jealousy_dlg',
            heading: '2. Dialogue: Tammy Confronts Tex About Bette',
            headingZh: '二、精彩戏剧对话：Tammy 兴师问罪（满屏都是本页不规则形容词！）',
            lead: 'Listen to how many irregular feminines and plurals fly around in one fast argument: franc, capricieuse, cruelle, gentille, naïf, ennuyeuse, amoureux, folle, fausse, jalouse, loyaux!',
            leadZh: '一段短小精悍的感情对峙戏，把刚学的十几个不规则形容词全串起来了：',
            cartoon: {
              src: './assets/tex_cartoons/adj4_fausse.gif',
              alt: 'Tu es folle! C’est une fausse accusation!',
              caption: 'Tex : Tu es folle ! C’est une fausse accusation ! · Tammy : Elle essaie de nous séparer, nous des amis si loyaux !',
              captionZh: '你疯啦（folle）！这是毫无根据的假指控（fausse）！· loyal 阳复变成 loyaux！'
            },
            dialogue: {
              title: 'Dialogue: Tex et Tammy se disputent à cause de Bette',
              titleZh: '醋意大爆发：Bette 到底是不是“好朋友”？',
              lines: [
                { speaker: 'Tammy', fr: 'C’est encore Bette ! Elle n’est jamais sincère ! Sois franc, Tex. Tu ne la trouves pas capricieuse et cruelle ?', en: 'It’s Bette again! She’s never sincere! Be honest, Tex. Don’t you find her capricious and cruel?', zh: '又是 Bette！她从来没真心过！Tex 你老实说，你不觉得她又善变又残忍吗？' },
                { speaker: 'Tex', fr: 'Non ! Elle est gentille ! C’est une bonne amie ! Qu’est-ce qu’elle a fait ?', en: 'No! She’s nice! She’s a good friend! What did she do?', zh: '没有啊！她人挺好的！是个好朋友嘛！她怎么了？' },
                { speaker: 'Tammy', fr: 'Comme tu es naïf ! Elle me raconte que tu me trouves ennuyeuse, que tu es amoureux d’une de tes étudiantes ! C’est vrai ?', en: 'How naive you are! She tells me you find me boring, that you’re in love with one of your students! Is that true?', zh: '你怎么这么天真！她跟我说你嫌我无聊，还爱上了你的一个女学生！是真的吗？！' },
                { speaker: 'Tex', fr: 'Tu es folle ! C’est une fausse accusation !', en: 'You’re crazy! It’s a false accusation!', zh: '你疯了！这是彻头彻尾的假指控！' },
                { speaker: 'Tammy', fr: 'C’est très clair : elle est jalouse ! Elle essaie de nous séparer, nous des amis si loyaux !', en: 'It’s crystal clear: she’s jealous! She’s trying to break us up—such loyal friends!', zh: '太明显了：她就是在嫉妒！想拆散我们俩这么忠实的朋友！' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'd35_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12: Tammy a une voix ___. (doux, f.sg.)',
            promptZh: 'Tex 第 1 题：Tammy 的嗓音很柔和（une voix 阴性单数，doux）。',
            options: ['douce', 'doux', 'douxe', 'douces'],
            answerIdx: 0,
            audio: 'Tammy a une voix douce.',
            explain: 'Irregular pair: "doux → douce".',
            explainZh: '不规则对：doux 变阴性是 "douce"。'
          },
          {
            id: 'd35_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Tammy, quelle est ta chanson ___ ? (favori, f.sg.)',
            promptZh: 'Tex 第 2 题：Tammy，你最喜欢哪首歌（chanson 阴性，favori）？',
            options: ['favorite', 'favorie', 'favori', 'favorit'],
            answerIdx: 0,
            audio: 'Quelle est ta chanson favorite ?',
            explain: 'Irregular pair: "favori → favorite".',
            explainZh: 'favori 变阴性必须加 t 和 e："favorite"。'
          },
          {
            id: 'd35_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Bette et Tammy sont ___ de la même personne. (amoureux, f.pl.)',
            promptZh: 'Tex 第 3 题：Bette 和 Tammy（两人都是女性）爱上了同一个人（amoureux）。',
            options: ['amoureuses', 'amoureux', 'amoureuse', 'amoureuxs'],
            answerIdx: 0,
            audio: 'Bette et Tammy sont amoureuses de la même personne.',
            explain: '-eux shifts to -euse in feminine, then adds -s for plural: "amoureuses"!',
            explainZh: '两个女生复数：-eux → -euse + s = "amoureuses"！'
          },
          {
            id: 'd35_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Tex et Tammy sont ___ d’amour. (fou, mixed m.pl.!)',
            promptZh: 'Tex 第 4 题：Tex 和 Tammy 为爱疯狂（男女混合，阳性复数！）。',
            options: ['fous', 'folles', 'fou', 'foux'],
            answerIdx: 0,
            audio: 'Tex et Tammy sont fous d’amour.',
            explain: 'Mixed gender (Tex + Tammy) = masculine plural: "fou + s = fous" (NOT *foux*!).',
            explainZh: '男女混合归阳性复数，fou 直接加 s 变 "fous"（不要写成 foux！）。'
          },
          {
            id: 'd35_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12: Joe-Bob et Corey ne sont pas ___. (vif, m.pl.)',
            promptZh: 'Tex 第 5 题：Joe-Bob 和 Corey（两个男生）不够机敏（vif）。',
            answers: ['vifs'],
            hint: 'Masculine plural adds -s directly to "vif" (never *vives* for boys!).',
            audio: 'Joe-Bob et Corey ne sont pas vifs.',
            explain: 'Masculine plural keeps f + s: "vifs" (feminine plural is "vives").',
            explainZh: '阳性复数保留 f 直接加 s："vifs"。'
          },
          {
            id: 'd35_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12: Fiona est très ___. (gentil, f.sg.)',
            promptZh: 'Tex 第 6 题：Fiona 非常友善善良（gentil，阴性单数）。',
            answers: ['gentille'],
            hint: '-il → -ille.',
            audio: 'Fiona est très gentille.',
            explain: '"gentil → gentille".',
            explainZh: '双写 l 加 e："gentille"。'
          },
          {
            id: 'd35_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12: Tex et Édouard sont des animaux ___. (cosmopolite, m.pl.)',
            promptZh: 'Tex 第 7 题：Tex 和 Édouard 是见过世面的国际范动物（cosmopolite）。',
            answers: ['cosmopolites'],
            hint: 'Ends in -e already → add -s.',
            audio: 'Tex et Édouard sont des animaux cosmopolites.',
            explain: '"cosmopolite" ends in -e, so plural is "cosmopolites".',
            explainZh: '以 -e 结尾，复数加 -s："cosmopolites"。'
          },
          {
            id: 'd35_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12: Les derniers poèmes de Tex sont ___ ! (génial, m.pl.)',
            promptZh: 'Tex 第 8 题：Tex 最新的诗简直绝妙（poèmes 阳性复数，génial）！',
            answers: ['géniaux', 'geniaux'],
            hint: '-al → -aux in masculine plural!',
            audio: 'Les derniers poèmes de Tex sont géniaux !',
            explain: '"le poème" is masculine plural → "-al → -aux": "géniaux"!',
            explainZh: 'poème 为阳性，-al 变阳复为 -aux："géniaux"！'
          },
          {
            id: 'd35_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12: Bette est une chatte ___. (sensuel, f.sg.)',
            promptZh: 'Tex 第 9 题：Bette 是只性感的母猫（sensuel）。',
            answers: ['sensuelle'],
            hint: '-el → -elle.',
            audio: 'Bette est une chatte sensuelle.',
            explain: '"sensuel → sensuelle".',
            explainZh: '-el 双写 l 加 e："sensuelle"。'
          },
          {
            id: 'd35_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12: Tammy a de belles lèvres ___. (pulpeux, f.pl. — la lèvre is f.!)',
            promptZh: 'Tex 第 10 题：Tammy 有着丰润的双唇（la lèvre 阴性复数，pulpeux）。',
            answers: ['pulpeuses'],
            hint: '-eux → -euse + -s.',
            audio: 'Tammy a de belles lèvres pulpeuses.',
            explain: '"lèvres" is feminine plural → "pulpeuses".',
            explainZh: 'lèvre 阴性复数，-eux → "pulpeuses"。'
          },
          {
            id: 'd35_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12: Tammy et Bette sont ___ de peinture. (amateur, f.pl. — -teur → -trice)',
            promptZh: 'Tex 第 11 题：Tammy 和 Bette（两人都是女性）是绘画爱好者（-teur → -trice 阴复）。',
            answers: ['amatrices', 'amateurs'],
            hint: 'Feminine plural of "amateur" is "amatrices" (plural -s).',
            audio: 'Tammy et Bette sont amatrices de peinture.',
            explain: '"amateur" uses -trice in the feminine: "amatrices" (note "amateurs" is also accepted).',
            explainZh: 'amateur 对应阴性复数为 "amatrices"（填 amateurs 也算对）。'
          },
          {
            id: 'd35_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12: Bette est ___. (rancunier, f.sg. = resentful)',
            promptZh: 'Tex 第 12 题：Bette 很记仇（rancunier，阴性单数，记住 -er → -ère！）。',
            answers: ['rancunière', 'rancuniere'],
            hint: '-er → -ère.',
            audio: 'Bette est rancunière.',
            explain: '"rancunier → rancunière".',
            explainZh: '-er 结尾变阴性为 -ère："rancunière"。'
          }
        ],
        related: [
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_4', label: '3.4 Irregulars Part 1' },
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_6', label: '3.6 Meaning Changes With Position' }
        ]
      },

      /* =========================================================
         PAGE 3.6: ADJECTIVES WHOSE MEANING VARIES WITH PLACEMENT
      ========================================================= */
      {
        id: 'adj_3_6',
        code: '3.6',
        group: 'Placement & Nuance',
        shortTitle: 'Meaning Shifts by Position',
        title: '11 Adjectives Whose Meaning Changes Before vs. After the Noun',
        titleZh: '进阶神技：站名词“前面”还是“后面”意思大不同的 11 个形容词（B2 加分项）+ Tex 12 题',
        estMin: 5,
        summary: 'Learn why "un grand homme" (great man) differs from "un homme grand" (tall man), study all 11 Tex nuance pairs, enjoy Tammy’s library slap dialogue, and finish all 12 Tex adj5 drills!',
        summaryZh: '搞懂法语最迷人也最常考的语序语义差：站在名词“后面”往往是字面物理意思（tall / clean / penniless），站在“前面”则变成引申/主观情感含义（great / own / unfortunate）！完整收录 Tex 11 词对比表、图书馆打耳光对话与 12 题专练。',
        cheatSummary: [
          { label: 'Core Principle: Literal AFTER vs. Figurative BEFORE', rule: 'AFTER noun = objective/literal (meubles anciens = antique; parfum cher = expensive; homme grand = tall; tatou pauvre = penniless; oreilles propres = clean; seul = alone). BEFORE noun = subjective/figurative (ancienne copine = former; cher ami = dear; grand philosophe = great; pauvre Tex = unfortunate; propre restaurant = own; seul tatou = only).', ruleZh: '总口诀：后置 = 字面客观意（老家具 / 贵香水 / 高个子 / 穷人 / 干净耳朵 / 孤单一人）；前置 = 引申主观意（前女友 / 亲爱的 / 伟大的 / 可怜的 / 自己的 / 唯一的）！' }
        ],
        sections: [
          {
            id: 'nuance_table',
            heading: '1. All 11 Key Adjectives: After Noun (Literal) vs. Before Noun (Figurative)',
            headingZh: '一、Tex 全套 11 个变义形容词对照表（点击即可听音对比）',
            lead: 'Some adjectives can stand either before or after a noun—changing their exact meaning. Notice the consistent pattern: AFTER the noun = literal, factual meaning; BEFORE the noun = figurative, emotional, or structural meaning.',
            leadZh: '这 11 个常用形容词在 TCF 阅读、听力和写作中频繁出现。浏览下表时多体会“后置客观写实 vs 前置主观/引申”的规律：',
            table: {
              headers: ['Adjective', 'AFTER Noun (Literal)', 'BEFORE Noun (Figurative / Subjective)'],
              rows: [
                { cols: ['ancien', 'les meubles anciens (antique / very old furniture · 古旧家具)', 'l’ancienne copine de Tex (former/ex-girlfriend · 前女友)'], audio: 'les meubles anciens, l’ancienne copine de Tex' },
                { cols: ['cher', 'les parfums chers (expensive perfumes · 昂贵的香水)', 'Chers amis (dear friends · 亲爱的朋友们)'], audio: 'les parfums chers, Chers amis' },
                { cols: ['dernier', 'la semaine dernière (last / preceding week · 上周)', 'la dernière fois (the final/very last time · 最后一次)'], audio: 'la semaine dernière, la dernière fois' },
                { cols: ['grand', 'un tatou grand (tall in height · 个头高)', 'un grand philosophe (a great philosopher · 伟大的)'], audio: 'un grand philosophe' },
                { cols: ['même', 'l’hypocrisie même (hypocrisy itself · 虚伪本身)', 'le même petit tatou (the same little armadillo · 同一个)'], audio: 'l’hypocrisie même, le même tatou' },
                { cols: ['pauvre', 'un tatou pauvre (financially poor · 经济贫穷)', 'Le pauvre Tex (unfortunate / poor Tex! · 真可怜的)'], audio: 'un tatou pauvre, le pauvre Tex' },
                { cols: ['prochain', 'la semaine prochaine (next week · 下周)', 'la prochaine fois (the next time · 下一次)'], audio: 'la semaine prochaine, la prochaine fois' },
                { cols: ['propre', 'un escargot propre (clean, tidy · 爱干净的)', 'son propre restaurant (his own restaurant · 自己的)'], audio: 'un escargot propre, son propre restaurant' },
                { cols: ['seul', 'Corey est seul (alone, lonely · 独自一人的)', 'le seul tatou qui compte (the only one · 唯一的)'], audio: 'Corey est seul, le seul tatou' },
                { cols: ['simple', 'Bette n’est pas simple (not simple/uncomplicated · 单纯)', 'pas un simple poète (not just/merely a poet · 仅仅)'], audio: 'pas un simple poète' },
                { cols: ['vrai', 'des histoires vraies (true, factual stories · 真实的)', 'une vraie histoire (a real / total story! · 名副其实的)'], audio: 'des histoires vraies, une vraie histoire' }
              ]
            }
          },
          {
            id: 'nuance_slap_dlg',
            heading: '2. Dialogue: Tammy Waited an Hour at the Library...',
            headingZh: '二、精彩对白：迟到一小时的 Tex 还敢讲“安慰美女”的故事……',
            lead: 'Listen closely as Tammy and Tex pack six of these position-shifting adjectives into one hilarious scene (tes propres rendez-vous, mon cher Tex, mon grand ami, une femme seule, le désespoir même, un brave tatou = good-natured/decent, vs. un homme brave = courageous):',
            leadZh: '在短短几句对话里感受“own / dear / great / lonely / itself / brave(decent)”的位置切换：',
            cartoon: {
              src: './assets/tex_cartoons/adj5_gifle.gif',
              alt: 'Aïe! Tammy gifle Tex',
              caption: 'tes PROPRES rendez-vous (own) · une femme SEULE (lonely) · un BRAVE tatou (good/kind) → Aïe !',
              captionZh: '你自己的约会（propres）· 孤独的女人（seule）· 我这只热心好心肠的犰狳（brave 前置）→ 啪！'
            },
            dialogue: {
              title: 'Tammy attend Tex à la bibliothèque depuis une heure...',
              titleZh: '图书馆门口等了一小时的 Tammy',
              lines: [
                { speaker: 'Tammy (ironique)', fr: 'Ne te presse pas mon cher Tex ! Tu oublies tes propres rendez-vous maintenant ?!', en: 'Take your time my dear Tex! Are you forgetting your own dates now?!', zh: '（冷笑）不用着急嘛亲爱的 Tex！你现在连自己的约会都忘啦？！' },
                { speaker: 'Tex', fr: 'Ah Tammy ! J’étais au café avec mon grand ami Édouard, quand j’ai vu une femme seule. Elle était le désespoir même. Et la beauté même...', en: 'Oh Tammy! I was at the café with my great friend Édouard when I saw a lonely woman. She was despair itself—and beauty itself...', zh: '哎呀 Tammy！刚才我和我好哥们 Édouard 喝咖啡，看到一个孤零零的女人，简直是绝望本身……也是美貌本身……' },
                { speaker: 'Tex', fr: 'Tu me connais ! Je suis un brave tatou ! Alors je suis allé lui offrir un café pour la consoler.', en: 'You know me! I’m a decent/kind armadillo! So I went to buy her a coffee to cheer her up.', zh: '你知道我的，我是只善良的好犰狳嘛！我就去请她喝杯咖啡安慰她。' },
                { speaker: 'Tammy / Tex', fr: 'Ah oui ? — Aïe !', en: 'Oh really? — Ouch!', zh: '哦，是吗？（一记耳光）——哎哟！！' }
              ]
            },
            quickCheck: {
              prompt: 'What is the difference between "un homme grand" and "un grand homme"?',
              promptZh: '"un homme grand" 和 "un grand homme" 意思区别在哪里？',
              options: [
                '"un homme grand" = a tall man; "un grand homme" = a great man.',
                '"un homme grand" = a great man; "un grand homme" = a tall man.',
                'Both mean the exact same thing.',
                'Only "grand homme" is grammatical.'
              ],
              answerIdx: 0,
              explain: 'AFTER noun ("homme grand") = physical height (tall); BEFORE noun ("grand homme") = greatness/admiration (great)!',
              explainZh: '后置看身高（tall 高个子男人），前置看格局（great 伟大的男人）。'
            }
          }
        ],
        drills: [
          {
            id: 'd36_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12: Tammy est le SEUL amour de Tex. ("seul" BEFORE noun)',
            promptZh: 'Tex 第 1 题：Tammy est le SEUL amour de Tex.（seul 在名词前面）是什么意思？',
            options: ['unique / only ("the only love")', 'alone / lonely'],
            answerIdx: 0,
            audio: 'Tammy est le seul amour de Tex.',
            explain: 'BEFORE the noun: "le seul amour" = the only / unique love.',
            explainZh: '站在名词前面表示“唯一的”。'
          },
          {
            id: 'd36_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Corey déteste être SEUL. ("seul" AFTER verb/noun)',
            promptZh: 'Tex 第 2 题：Corey déteste être SEUL. 是什么意思？',
            options: ['alone / lonely', 'only / unique'],
            answerIdx: 0,
            audio: 'Corey déteste être seul.',
            explain: 'Standing after the verb as predicate: "seul" = alone / lonely.',
            explainZh: '单独作表语时表示“孤单 / 独自一人”。'
          },
          {
            id: 'd36_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Tammy a la MÊME ambition que Bette : épouser Tex. ("même" BEFORE)',
            promptZh: 'Tex 第 3 题：Tammy a la MÊME ambition que Bette.（même 在前面）是什么意思？',
            options: ['identical / the same ambition', 'itself'],
            answerIdx: 0,
            audio: 'Tammy a la même ambition que Bette.',
            explain: 'BEFORE the noun: "la même ambition" = the exact same ambition.',
            explainZh: '在名词前面表示“同一个 / 相同的”。'
          },
          {
            id: 'd36_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Bette est l’opportunisme MÊME ! ("même" AFTER)',
            promptZh: 'Tex 第 4 题：Bette est l’opportunisme MÊME !（même 在后面）是什么意思？',
            options: ['itself (opportunism itself)', 'the same'],
            answerIdx: 0,
            audio: 'Bette est l’opportunisme même !',
            explain: 'AFTER the noun: "l’opportunisme même" = opportunism itself!',
            explainZh: '站在名词后面强调“……本身 / ……的化身”！'
          },
          {
            id: 'd36_d5',
            kind: 'choice',
            prompt: 'Tex Practice 5/12: Nous sommes très PAUVRES. ("pauvre" after verb)',
            promptZh: 'Tex 第 5 题：Nous sommes très PAUVRES. 的意思是：',
            options: ['penniless / financially poor', 'unfortunate / pitiful'],
            answerIdx: 0,
            audio: 'Nous sommes très pauvres.',
            explain: 'Predicate / AFTER noun → literal meaning: financially poor.',
            explainZh: '后置或作表语是字面“贫穷的 / 没钱的”。'
          },
          {
            id: 'd36_d6',
            kind: 'choice',
            prompt: 'Tex Practice 6/12: Le PAUVRE Corey a encore perdu au loto. ("pauvre" BEFORE)',
            promptZh: 'Tex 第 6 题：Le PAUVRE Corey a encore perdu au loto.（pauvre 在人名前）的意思是：',
            options: ['unfortunate (poor Corey!)', 'penniless only'],
            answerIdx: 0,
            audio: 'Le pauvre Corey a encore perdu au loto.',
            explain: 'BEFORE noun/name → emotional meaning: "poor/unfortunate Corey!".',
            explainZh: '放在人名/名词前表同情语气：“可怜的 / 倒霉的”。'
          },
          {
            id: 'd36_d7',
            kind: 'choice',
            prompt: 'Tex Practice 7/12: Le vin rouge est très CHER aux USA. ("cher" after verb/noun)',
            promptZh: 'Tex 第 7 题：Le vin rouge est très CHER aux USA. 中的 cher 是什么意思？',
            options: ['expensive', 'dear / beloved'],
            answerIdx: 0,
            audio: 'Le vin rouge est très cher aux USA.',
            explain: 'After noun/verb → literal price: expensive.',
            explainZh: '后置或作表语表示“价格昂贵的”。'
          },
          {
            id: 'd36_d8',
            kind: 'choice',
            prompt: 'Tex Practice 8/12: Bette est une GRANDE amie de Machiavel. ("grande" BEFORE)',
            promptZh: 'Tex 第 8 题：Bette est une GRANDE amie de Machiavel.（在朋友前面）是什么意思？',
            options: ['great / close (friend)', 'physically tall'],
            answerIdx: 0,
            audio: 'Bette est une grande amie de Machiavel.',
            explain: 'BEFORE "amie" → figurative: a great/close friend.',
            explainZh: '前置在 amie 前表示“关系很铁的 / 了不起的朋友”（不是个子高！）。'
          },
          {
            id: 'd36_d9',
            kind: 'choice',
            prompt: 'Tex Practice 9/12: La France est CHÈRE au cœur de Tex. (Special fixed expression!)',
            promptZh: 'Tex 第 9 题（注意常见固定搭配）：La France est CHÈRE au cœur de Tex. 意为：',
            options: ['dear (to Tex’s heart)', 'financially expensive'],
            answerIdx: 0,
            audio: 'La France est chère au cœur de Tex.',
            explain: 'With "au cœur de" (to one’s heart), "chère" carries the figurative sense "dear / precious"!',
            explainZh: '带有 au cœur de（在心里）时，即使在表语位置也指“珍贵的 / 深爱的”。'
          },
          {
            id: 'd36_d10',
            kind: 'choice',
            prompt: 'Tex Practice 10/12: Tex n’a pas toujours les oreilles PROPRES. ("propre" AFTER)',
            promptZh: 'Tex 第 10 题：Tex n’a pas toujours les oreilles PROPRES.（propre 在后）意为：',
            options: ['clean', 'his own'],
            answerIdx: 0,
            audio: 'Tex n’a pas toujours les oreilles propres.',
            explain: 'AFTER noun → literal: clean ears!',
            explainZh: '放在名词后面表示“干净的”。'
          },
          {
            id: 'd36_d11',
            kind: 'choice',
            prompt: 'Tex Practice 11/12: Tex ne connaît pas ses PROPRES parents. ("propre" BEFORE)',
            promptZh: 'Tex 第 11 题：Tex ne connaît pas ses PROPRES parents.（propre 在前）意为：',
            options: ['his own (parents)', 'clean (parents)'],
            answerIdx: 0,
            audio: 'Tex ne connaît pas ses propres parents.',
            explain: 'BEFORE noun (after possessive) → "his own parents"!',
            explainZh: '站在物主限定词与名词中间表示“自己的 / 亲生的”。'
          },
          {
            id: 'd36_d12',
            kind: 'choice',
            prompt: 'Tex Practice 12/12: Tex adore les livres ANCIENS. ("ancien" AFTER)',
            promptZh: 'Tex 第 12 题：Tex adore les livres ANCIENS.（ancien 在后）意为：',
            options: ['old / antique', 'former / ex-'],
            answerIdx: 0,
            audio: 'Tex adore les livres anciens.',
            explain: 'AFTER noun → literal: antique/old books (vs. "mon ancien livre" = my former book).',
            explainZh: '放在名词后面是“古老的 / 古董旧书”（放前面才指“以前的 / 前任的”）。'
          }
        ],
        related: [
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_3', label: '3.3 BANGS Pre-Noun Rule' },
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_7', label: '3.7 Comparatives of Adjectives' }
        ]
      },

      /* =========================================================
         PAGE 3.7: COMPARISON OF ADJECTIVES
      ========================================================= */
      {
        id: 'adj_3_7',
        code: '3.7',
        group: 'Comparison & Superlative',
        shortTitle: 'Comparatives (plus/moins/aussi)',
        title: 'Comparison of Adjectives (plus/moins/aussi ... que & meilleur / pire)',
        titleZh: '形容词比较级：plus / moins / aussi ... que + 不规则 meilleur / pire（必配性数！）+ Tex 12 题',
        estMin: 4,
        summary: 'Compare qualities cleanly using plus...que, moins...que, and aussi...que (never forgetting gender & number agreement on the adjective!), handle irregular "meilleur(e)(s)" & "pire / plus mauvais(e)", read Bette & Tex, and finish all 12 Tex adj6 drills!',
        summaryZh: '掌握形容词比较级三大框架，重点防止忘掉配合主语阴阳性复数（Tammy est plus jolie / Elles sont plus séduisantes）；掌握不规则 meilleur（更好）与 pire/plus mauvais（更差）并完成 Tex 原版 12 题。',
        cheatSummary: [
          { label: '3 Patterns + Agreement!', rule: 'plus + adj + que (more... than) · moins + adj + que (less... than) · aussi + adj + que (as... as). ALWAYS agree the adjective with the FIRST noun ("Fiona est aussi belle que Tammy", "Elles sont plus séduisantes").', ruleZh: '三大结构：plus... que / moins... que / aussi... que。形容词永远随被比较的“主语”配合阴阳性单复数！' },
          { label: 'Irregulars: bon & mauvais', rule: 'bon → meilleur / meilleure / meilleurs / meilleures que (NEVER *plus bon*!). mauvais → pire que OR plus mauvais(e)(s) que (both accepted!).', ruleZh: 'bon 的比较级不规则，永远用 meilleur(e)(s)（绝不说 *plus bon*）；mauvais 可用 pire 也可用 plus mauvais(e)(s)。' }
        ],
        sections: [
          {
            id: 'comp_adj_sec',
            heading: '1. More, Less, As... As + Irregular meilleur / pire',
            headingZh: '一、高下与同等比较 + 特殊词 bon / mauvais',
            lead: 'Use plus ... que ("more ... than"), moins ... que ("less ... than"), and aussi ... que ("as ... as"). Remember two habits: (1) The adjective ALWAYS agrees in gender and number with the subject being compared; (2) NEVER say *plus bon* — always use meilleur(e)(s)! For mauvais, both "pire" and "plus mauvais(e)" are standard.',
            leadZh: '比副词多一步：形容词必须随时盯着主语变性数！同时记住 bon（好）绝对不能说 *plus bon*，要变成随主语配合的 meilleur / meilleure / meilleurs / meilleures：',
            cartoon: {
              src: './assets/tex_cartoons/adj6_seduisantes.gif',
              alt: 'Elles ne sont pas aussi séduisantes que Bette',
              caption: 'Fiona est aussi belle que Tammy. Mais elles ne sont pas aussi séduisantes que Bette.',
              captionZh: '同等比较 aussi... que：belle（阴单）和 séduisantes（阴复）都必须跟主语配合！'
            },
            examples: [
              { fr: 'Tex est plus intelligent que Joe-Bob. Mais Joe-Bob est moins prétentieux que Tex.', en: 'more intelligent than · less pretentious than', zh: '更聪明 · 没那么傲慢', tag: 'plus / moins' },
              { fr: 'Fiona est aussi belle que Tammy. Mais elles ne sont pas aussi séduisantes que Bette.', en: 'as beautiful as · not as seductive as', zh: '一样漂亮 · 没那么迷人', tag: 'aussi... que' },
              { fr: 'Bette pense qu’elle serait un meilleur parti que Tammy. Mais le caractère de Bette est plus mauvais (ou pire) que celui de Tammy.', en: 'a better match than · worse than ("meilleur" = better; "pire / plus mauvais" = worse)', zh: '更好的一对（meilleur！）· 更差 / 更坏（pire 或 plus mauvais）', tag: 'Irregulars' }
            ]
          },
          {
            id: 'comp_dlg_sec',
            heading: '2. Dialogue: Bette Fishes for Compliments from Tex',
            headingZh: '二、原版对话：Bette 逼问哲学家 Tex “我比 Tammy 漂亮吗？”',
            lead: 'Listen to how naturally "aussi jolie que", "moins importante que", "moins bête", and "plus sexy que" flow in dialogue:',
            leadZh: '在轻松斗嘴里同时听见 moins / plus / aussi 三大比较结构：',
            cartoon: {
              src: './assets/tex_cartoons/adj6_belle.gif',
              alt: 'La beauté physique est moins importante que la beauté de l’âme',
              caption: 'Tex philosophe : La beauté physique est moins importante que la beauté de l’âme.',
              captionZh: '求生欲极强的哲学家 Tex：“外在美不如心灵美重要……”'
            },
            dialogue: {
              title: 'Bette et Tex philosophe',
              titleZh: '送命题现场',
              lines: [
                { speaker: 'Bette', fr: 'Tex, as-tu jamais vu une fille aussi jolie que moi ?', en: 'Tex, have you ever seen a girl as pretty as me?', zh: 'Tex，你这辈子见过像我这么漂亮的女生吗？' },
                { speaker: 'Tex (philosophe)', fr: 'Euh ! La beauté physique est moins importante que la beauté de l’âme.', en: 'Uh! Physical beauty is less important than beauty of the soul.', zh: '呃！肉体之美不如灵魂之美重要呀。' },
                { speaker: 'Bette', fr: 'D’accord, d’accord, mais je suis moins bête et plus sexy que Tammy, non ?', en: 'Fine, fine, but I’m less stupid and sexier than Tammy, right?', zh: '好好好，但起码我比 Tammy 聪明点、性感点吧，对不对？' },
                { speaker: 'Tex', fr: 'Être ou ne pas être, là est la question...', en: 'To be or not to be, that is the question...', zh: '生存还是毁灭，这是个问题……（火速装哲学家糊弄过去）' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'd37_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12: L’accent américain d’Édouard est ___ celui de Tex. (+, mauvais — accent is m.sg.)',
            promptZh: 'Tex 第 1 题：Édouard 的美式口音比 Tex 的“更糟”（+ 与 mauvais）。',
            options: ['pire que (or plus mauvais que)', 'meilleur que', 'plus pire que', 'moins mauvais que'],
            answerIdx: 0,
            audio: 'L’accent américain d’Édouard est pire que celui de Tex.',
            explain: 'Notice "accent américain" (m.sg.): "worse than" = "pire que" OR "plus mauvais que" (NEVER *plus pire*!).',
            explainZh: 'mauvais 的“更差”可用 pire que 或 plus mauvais que（千万别叠用 *plus pire*！）。'
          },
          {
            id: 'd37_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Tex a un ___ Q.I. ("I.Q.") qu’Édouard. (+, bon — m.sg.)',
            promptZh: 'Tex 第 2 题：Tex 的智商比 Édouard 的“更好/更高”（+ 与 bon）。',
            options: ['meilleur', 'plus bon', 'mieux', 'meilleure'],
            answerIdx: 0,
            audio: 'Tex a un meilleur Q.I. qu’Édouard.',
            explain: 'Noun "Q.I." is masculine singular → "meilleur" (NEVER *plus bon* or adverb *mieux*).',
            explainZh: '修饰名词 Q.I. 必须用形容词，bon 的比较级为 "meilleur"（绝不用 plus bon）。'
          },
          {
            id: 'd37_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Tammy est ___ Bette. (=, joli — f.sg.)',
            promptZh: 'Tex 第 3 题：Tammy 和 Bette “一样漂亮”（= 与 joli，注意阴性配合！）。',
            options: ['aussi jolie que', 'aussi joli que', 'aussi jolies que', 'plus jolie que'],
            answerIdx: 0,
            audio: 'Tammy est aussi jolie que Bette.',
            explain: 'Subject "Tammy" is feminine singular → "aussi jolie que".',
            explainZh: '主语 Tammy 阴性单数，joli 要加 e："aussi jolie que"。'
          },
          {
            id: 'd37_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Fiona est ___ Bette. (+, gentil — f.sg.)',
            promptZh: 'Tex 第 4 题：Fiona 比 Bette “更友善”（+ 与 gentil，注意双写 l！）。',
            options: ['plus gentille que', 'plus gentil que', 'meilleure gentille que', 'plus gentilles que'],
            answerIdx: 0,
            audio: 'Fiona est plus gentille que Bette.',
            explain: 'Subject "Fiona" is feminine singular → "gentil" becomes "gentille": "plus gentille que".',
            explainZh: 'Fiona 阴性单数，gentil 变 gentille："plus gentille que"。'
          },
          {
            id: 'd37_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Comparative (-): Les Aggies sont ___ les Longhorns. (-, fort — m.pl.)',
            promptZh: 'Tex 第 5 题：Aggies 校队“不如 Longhorns 强”（- 与 fort，阳复）。',
            answers: ['moins forts que'],
            hint: 'moins + forts (m.pl.) + que.',
            audio: 'Les Aggies sont moins forts que les Longhorns.',
            explain: '"Les Aggies" is masculine plural → "moins forts que".',
            explainZh: '复数要加 -s："moins forts que"。'
          },
          {
            id: 'd37_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Comparative (+): Les étudiantes de UT sont ___ celles de Texas A&M. (+, séduisant — f.pl.)',
            promptZh: 'Tex 第 6 题：UT 的女学生比 A&M 的“更迷人”（+ 与 séduisant，阴复）。',
            answers: ['plus séduisantes que', 'plus seduisantes que'],
            hint: 'plus + séduisantes (f.pl.) + que.',
            audio: 'Les étudiantes de UT sont plus séduisantes que celles de Texas A&M.',
            explain: '"Les étudiantes" is feminine plural → "plus séduisantes que".',
            explainZh: 'étudiantes 阴性复数，加 -es："plus séduisantes que"。'
          },
          {
            id: 'd37_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Comparative (+): Les Français sont ___ les Texans. (+, raffiné — m.pl.)',
            promptZh: 'Tex 第 7 题：法国人比德州人“更讲究高雅”（+ 与 raffiné，阳复）。',
            answers: ['plus raffinés que', 'plus raffines que'],
            hint: 'plus + raffinés + que.',
            audio: 'Les Français sont plus raffinés que les Texans.',
            explain: 'Masculine plural → "plus raffinés que".',
            explainZh: '阳性复数加 -s："plus raffinés que"。'
          },
          {
            id: 'd37_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Comparative (+): Les Texans sont ___ les Français. (+, drôle — m.pl.)',
            promptZh: 'Tex 第 8 题：德州人比法国人“更幽默”（+ 与 drôle，阳复）。',
            answers: ['plus drôles que', 'plus droles que'],
            hint: 'Already ends in -e → add -s: drôles.',
            audio: 'Les Texans sont plus drôles que les Français.',
            explain: 'Masculine plural → "plus drôles que".',
            explainZh: 'drôle 复数加 -s："plus drôles que"。'
          },
          {
            id: 'd37_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Comparative (-): La France est ___ le Texas. (-, grand — f.sg.)',
            promptZh: 'Tex 第 9 题：法国面积“不如”德州大（- 与 grand，La France 阴性！）。',
            answers: ['moins grande que'],
            hint: '"La France" is feminine singular → grande!',
            audio: 'La France est moins grande que le Texas.',
            explain: '"La France" is feminine singular → "moins grande que".',
            explainZh: 'La France 为阴性，grand 加 -e："moins grande que"。'
          },
          {
            id: 'd37_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — Comparative (+): Tex est ___ Tammy. (+, vieux — m.sg.)',
            promptZh: 'Tex 第 10 题：Tex 比 Tammy “年长”（+ 与 vieux，阳单）。',
            answers: ['plus vieux que'],
            hint: 'Masculine singular of vieux.',
            audio: 'Tex est plus vieux que Tammy.',
            explain: '"Tex" is masculine singular → "plus vieux que".',
            explainZh: 'Tex 阳性单数，用 "plus vieux que"。'
          },
          {
            id: 'd37_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Comparative (-): Corey et Joe-Bob sont ___ Édouard. (-, snob — elide que before Édouard!)',
            promptZh: 'Tex 第 11 题：Corey 和 Joe-Bob 不如 Édouard 势利眼（- 与 snob，记得 qu’ 省音！）。',
            answers: ["moins snobs qu'", 'moins snobs qu’'],
            hint: 'Add -s to "snob" + elide "que" to "qu’" before Édouard!',
            audio: 'Corey et Joe-Bob sont moins snobs qu’Édouard.',
            explain: 'Loanword "snob" adds -s in plural ("snobs"), and "que" elides to "qu’" before Édouard!',
            explainZh: '两人复数 snobs，且 Édouard 元音开头，que 要写成 "qu’"：moins snobs qu’！'
          },
          {
            id: 'd37_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — Comparative (+): Édouard et Tammy sont ___ Joe-Bob et Corey. (+, indépendant — mixed gender = m.pl.!)',
            promptZh: 'Tex 第 12 题：Édouard（男）和 Tammy（女）比他俩“更独立”（+ 与 indépendant，男女混合用阳复！）。',
            answers: ['plus indépendants que', 'plus independants que'],
            hint: 'Mixed gender (Édouard + Tammy) → masculine plural -s!',
            audio: 'Édouard et Tammy sont plus indépendants que Joe-Bob et Corey.',
            explain: 'Mixed-gender plural subject takes masculine plural "indépendants".',
            explainZh: '一男一女用阳性复数："plus indépendants que"。'
          }
        ],
        related: [
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_8', label: '3.8 Superlatives of Adjectives' },
          { chapterId: 'ch4_adverbs', pageId: 'adv_4_5', label: '4.5 Comparatives of Adverbs' }
        ]
      },

      /* =========================================================
         PAGE 3.8: SUPERLATIVE OF ADJECTIVES
      ========================================================= */
      {
        id: 'adj_3_8',
        code: '3.8',
        group: 'Comparison & Superlative',
        shortTitle: 'Superlatives (le plus / le pire)',
        title: 'Superlative of Adjectives: Double Article, Placement & le meilleur / le pire',
        titleZh: '形容词最高级：重贴定冠词规律、前置 vs 后置、le meilleur / le pire 与 Tex 12 题',
        estMin: 5,
        summary: 'Form "the most / the least" superlatives cleanly, notice why post-noun adjectives repeat the definite article ("la chatte la plus rusée"), master irregular "le meilleur / le pire / le plus mauvais", read the UT vs. A&M rivalry dialogue, and finish all 12 Tex adj7 drills!',
        summaryZh: '学会表达“最…… / 最不……”：后置形容词最高级要在名词前后“各放一个定冠词”（la chatte la plus rusée），而 BANGS 前置形容词只需一个；攻克 le meilleur / le pire 规则，并完成校际互怼对话与 Tex 12 题。',
        cheatSummary: [
          { label: 'Placement Mirrors Normal Adjective!', rule: 'AFTER noun (repeat article!): "la chatte la plus rusée du monde". BEFORE noun (BANGS — one article!): "la plus gentille tatou du monde". Can replace first article with mon/ma/mes ("mon ami le plus distingué"). Notice "of the" = du / de la / de l’ / des!', ruleZh: '位置不变，只在后置时“定冠词出现两次”：la chatte la plus rusée du monde（世界上的……用 du/de la/des，不用 dans！）；若本来就是 BANGS 前置词则只用一个：la plus belle ville。' },
          { label: 'Irregular Superlatives: bon & mauvais', rule: 'bon → le/la/les meilleur(e)(s) (the best); le/la/les moins bon(ne)(s) (the least good). mauvais → le/la/les pire(s) OR le/la/les plus mauvais(e)(s) (the worst) — EXCEPT with already-negative nouns like ploucs/catastrophes/crimes, use ONLY pire ("les pires catastrophes")!', ruleZh: 'bon 最高级为 le/la meilleur(e)(s)；mauvais 可用 le pire 或 le plus mauvais——但修饰本身消极的词（如灾难 catastrophes、罪行 crimes）时只能用 pire，不能叠加 mauvais！' }
        ],
        sections: [
          {
            id: 'adj_sup_pos',
            heading: '1. Form, Double Article & Placement',
            headingZh: '一、形式与语序：为什么有时出现两个定冠词 la... la plus...？',
            lead: 'Use le / la / les + plus (the most) or moins (the least) + agreeing adjective. The superlative stays in the adjective’s normal position: if it goes AFTER the noun, French uses the definite article TWICE (or a possessive + definite article); if it is a BANGS adjective BEFORE the noun, you only use ONE article! Also note: English "in the world / in the class" after a superlative translates as DE (du / de la / des) in French—never "dans"!',
            leadZh: '规则非常简单：后置形容词放名词后，所以名词前面一个定冠词、plus/moins 前面再加一个定冠词；前置形容词站名词前面，一个定冠词就够了！另外“世界上最……”后面接“在……里”永远用 **de（du / de la / des）**，不要说 *dans*！',
            cartoon: {
              src: './assets/tex_cartoons/adj7_rusee.gif',
              alt: 'Bette est la chatte la plus rusée du monde',
              caption: 'Bette est LA chatte LA plus rusée du monde (2 articles) vs. Tammy est LA plus gentille tatou (1 article).',
              captionZh: 'rusée 后置 → 两个定冠词；gentille 算前置礼貌组或 BANGS 前置 → 只用 1 个！'
            },
            examples: [
              { fr: 'After noun (2 articles): Bette est la chatte la plus rusée du monde. / Tammy est la tatou la moins rusée du monde.', en: 'the slickest cat / the least slick armadillo in the world', zh: '世界上最狡猾的猫 / 最不狡猾的犰狳', tag: 'After Noun' },
              { fr: 'Before noun (1 article): Tammy est la plus gentille tatou du monde. / Bette est la moins gentille chatte.', en: 'the nicest / least nice (pre-noun placement uses 1 article)', zh: '世界上最善良的（前置仅 1 个冠词）', tag: 'Before Noun' },
              { fr: 'With possessive: Édouard est mon ami le plus distingué.', en: 'Édouard is my most distinguished friend.', zh: 'Édouard 是我最斯文体面的朋友。', tag: 'Possessive' }
            ]
          },
          {
            id: 'adj_sup_irr',
            heading: '2. Irregular Superlatives (le meilleur & le pire) + UT vs. A&M Rivalry Dialogue',
            headingZh: '二、不规则最高级（le meilleur 与 le pire / le plus mauvais）+ 校际互怼对话',
            lead: 'Just like comparatives, bon and mauvais use irregular superlatives agreeing in gender and number. Notice Tex’s nuance: both "la pire université" and "la plus mauvaise université" work, whereas nouns that are ALREADY negative (ploucs, catastrophes, crimes) take ONLY "les pires" to avoid sounding redundant!',
            leadZh: '记住 "the worst" 一般两种都能用（la pire / la plus mauvaise），唯独遇到本身自带贬义的名词（灾难 catastrophes、罪行 crimes 等），为了避免语义重复“最坏的灾难”，只能用 **pire（les pires）**：',
            cartoon: {
              src: './assets/tex_cartoons/adj7_collegestation.gif',
              alt: 'Texas A&M vs UT Austin',
              caption: 'Les meilleurs étudiants viennent à UT ! vs. College Station est la plus belle ville du monde !',
              captionZh: '德州大学 Austin 分校 vs 德州农工大学 College Station 分校的互相吹捧与吐槽！'
            },
            table: {
              headers: ['Group', 'the best / the worst (m.sg / f.sg / m.pl / f.pl)', 'the least good / least bad'],
              rows: [
                { cols: ['bon (good)', 'le meilleur / la meilleure / les meilleurs / les meilleures', 'le moins bon / la moins bonne / les moins bons / les moins bonnes'], audio: 'le meilleur campus, la meilleure université, les meilleurs profs, les meilleures notes' },
                { cols: ['mauvais (bad)', 'le pire / la pire / les pires (OR le plus mauvais, la plus mauvaise...)', 'le moins mauvais / la moins mauvaise...'], audio: 'le pire campus, la plus mauvaise université, les pires ploucs' }
              ]
            },
            dialogue: {
              title: 'Dialogue: Tammy (UT Longhorn) vs. Joe-Bob (Texas A&M Aggie)',
              titleZh: '校园德比互怼：Tammy vs Joe-Bob',
              lines: [
                { speaker: 'Tammy', fr: 'Texas A&M est la plus mauvaise université du monde. Elle a la moins bonne équipe de foot. Elle attire les pires ploucs ! Les meilleurs étudiants viennent à UT parce qu’Austin est la ville la plus cool du Texas !', en: 'Texas A&M is the worst university in the world! It has the worst football team. It attracts the worst rednecks! The best students come to UT because Austin is the coolest city in Texas!', zh: '德州农工是世界上最差的大学！球队也最烂，净吸引一群土包子！最优秀的学生都来 UT，因为奥斯汀是德州最酷的城市！' },
                { speaker: 'Joe-Bob', fr: 'Tu parles ! UT craint ! C’est la plus grande université du Texas ! En plus, les étudiants de UT sont les plus snobs ! College Station est la plus belle ville du monde !', en: 'Yeah right! UT sucks! It’s the largest university in Texas! And UT students are the snobbiest! College Station is the most beautiful city in the world!', zh: '拉倒吧！UT 才弱爆了！不过是全德州人最多的庞大校园罢了！而且 UT 学生最势利眼！大学城（College Station）才是世界上最美的城市！' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'd38_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12: Édouard a ___ accent d’Austin. (+, mauvais — accent is m.sg.)',
            promptZh: 'Tex 第 1 题：Édouard 有着全奥斯汀“最糟糕的”口音（+ 与 mauvais）。',
            options: ['le pire (or le plus mauvais)', 'le meilleur', 'la pire', 'le moins mauvais'],
            answerIdx: 0,
            audio: 'Édouard a le pire accent d’Austin.',
            explain: '"accent" is masculine singular → "le pire" (or "le plus mauvais").',
            explainZh: 'accent 为阳性单数，“最差”用 "le pire" 或 "le plus mauvais"。'
          },
          {
            id: 'd38_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Le Q.I. ("I.Q.") de Tex est ___ du Texas. (+, bon — m.sg.)',
            promptZh: 'Tex 第 2 题：Tex 的智商是全德州“最高的/最好的”（+ 与 bon）。',
            options: ['le meilleur', 'le plus bon', 'le mieux', 'la meilleure'],
            answerIdx: 0,
            audio: 'Le Q.I. de Tex est le meilleur du Texas.',
            explain: 'Noun "Q.I." is masculine singular → "le meilleur"!',
            explainZh: 'Q.I. 是阳性名词，bon 的最高级为 "le meilleur"！'
          },
          {
            id: 'd38_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Bette est la chatte ___ du campus. (+, perfide = treacherous, f.sg.)',
            promptZh: 'Tex 第 3 题：Bette 是全校最狡诈阴险的猫（+ 与 perfide，注意前面已有 la chatte）。',
            options: ['la plus perfide', 'plus perfide', 'la perfide plus', 'le plus perfide'],
            answerIdx: 0,
            audio: 'Bette est la chatte la plus perfide du campus.',
            explain: 'Post-noun adjective repeats the feminine article: "la plus perfide".',
            explainZh: '后置形容词不要忘了再补一个定冠词："la plus perfide"！'
          },
          {
            id: 'd38_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Fiona est la fourmi ___ de l’État. (+, travailleur — f.sg.)',
            promptZh: 'Tex 第 4 题：Fiona 是全州最勤劳的蚂蚁（+ 与 travailleur，阴单）。',
            options: ['la plus travailleuse', 'la plus travailleur', 'plus travailleuse', 'le plus travailleuse'],
            answerIdx: 0,
            audio: 'Fiona est la fourmi la plus travailleuse de l’État.',
            explain: 'Post-noun feminine singular: repeat "la" and convert -eur → -euse: "la plus travailleuse".',
            explainZh: '重复定冠词 la + 阴性 -euse："la plus travailleuse"。'
          },
          {
            id: 'd38_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Superlative (+, after noun): Tex et Tammy sont les tatous ___ du monde. (mignon, m.pl.)',
            promptZh: 'Tex 第 5 题（填最高级，记得前面已有 les tatous）：最可爱的犰狳。',
            answers: ['les plus mignons'],
            hint: 'Repeat "les" + plus + mignons (m.pl.).',
            audio: 'Tex et Tammy sont les tatous les plus mignons du monde.',
            explain: 'Post-noun m.pl. → "les plus mignons".',
            explainZh: '后置最高级要加回 les："les plus mignons"。'
          },
          {
            id: 'd38_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12 — Superlative (-, after noun): Corey et Joe-Bob sont les animaux ___ du groupe. (-, intelligent, m.pl.)',
            promptZh: 'Tex 第 6 题（最不聪明的，前面已有 les animaux）：',
            answers: ['les moins intelligents'],
            hint: 'Repeat "les" + moins + intelligents (m.pl.).',
            audio: 'Corey et Joe-Bob sont les animaux les moins intelligents du groupe.',
            explain: 'Post-noun m.pl. → "les moins intelligents".',
            explainZh: '重复定冠词 les："les moins intelligents"。'
          },
          {
            id: 'd38_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12 — Superlative (+, after noun): Tammy, Bette et Fiona sont les filles ___ du campus. (+, débrouillard, f.pl.)',
            promptZh: 'Tex 第 7 题（最机灵能干的，前面已有 les filles 阴复）：',
            answers: ['les plus débrouillardes', 'les plus debrouillardes'],
            hint: 'Repeat "les" + plus + débrouillardes (f.pl.!).',
            audio: 'Elles sont les filles les plus débrouillardes du campus.',
            explain: '"les filles" is feminine plural → "les plus débrouillardes".',
            explainZh: '注意 filles 阴性复数，加 -es："les plus débrouillardes"。'
          },
          {
            id: 'd38_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12 — Superlative (-): Les blagues de Tex sont toujours ___. (-, drôle — la blague is f.pl.!)',
            promptZh: 'Tex 第 8 题（最不好笑的，注意 la blague 笑话是阴性复数！）：',
            answers: ['les moins drôles', 'les moins droles'],
            hint: 'Predicate superlative still takes plural article: "les moins drôles"!',
            audio: 'Les blagues de Tex sont toujours les moins drôles.',
            explain: '"les blagues" is feminine plural → "les moins drôles".',
            explainZh: '这里前面没有重复过冠词，直接在表语写完整 "les moins drôles"。'
          },
          {
            id: 'd38_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — BANGS BEFORE noun (+): Pour Tex, la France est ___ pays du monde. (+, beau — le pays is m.sg.)',
            promptZh: 'Tex 第 9 题（注意 beau 在 pays 前面，只有一个定冠词！）：最美丽的国家。',
            answers: ['le plus beau'],
            hint: 'Noun "pays" is MASCULINE singular (even though la France is f.!), and "beau" precedes it.',
            audio: 'La France est le plus beau pays du monde.',
            explain: 'Agrees with "pays" (m.sg.) BEFORE noun → "le plus beau"!',
            explainZh: '修饰后面的阳性名词 pays，因此用阳性单数 "le plus beau"！'
          },
          {
            id: 'd38_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12 — BANGS BEFORE noun (+, bon): Tammy et Bette ne sont pas toujours ___ amies du monde. (+, bon — f.pl.)',
            promptZh: 'Tex 第 10 题（前置形容词 bon，阴复）：并非总是世界上“最好的”朋友。',
            answers: ['les meilleures'],
            hint: 'Feminine plural superlative of "bon" before "amies"!',
            audio: 'Tammy et Bette ne sont pas toujours les meilleures amies du monde.',
            explain: '"amies" is feminine plural → "les meilleures" (1 article because it precedes the noun!).',
            explainZh: 'amies 是阴性复数，且在名词前只用一个冠词："les meilleures"。'
          },
          {
            id: 'd38_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12 — Superlative (-, after noun): Bette est la chatte ___ du campus. (-, populaire — f.sg.)',
            promptZh: 'Tex 第 11 题（最不受欢迎的，前面已有 la chatte）：',
            answers: ['la moins populaire'],
            hint: 'Repeat "la" + moins + populaire.',
            audio: 'Bette est la chatte la moins populaire du campus.',
            explain: 'Post-noun feminine singular → "la moins populaire".',
            explainZh: '重复冠词 la："la moins populaire"。'
          },
          {
            id: 'd38_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12 — Superlative (+, after noun): La Tour d’UT est le monument ___ de l’université. (+, célèbre — m.sg.)',
            promptZh: 'Tex 第 12 题（最著名的纪念碑，前面已有 le monument 阳性单数）：',
            answers: ['le plus célèbre', 'le plus celebre'],
            hint: 'Repeat "le" + plus + célèbre.',
            audio: 'La Tour d’UT est le monument le plus célèbre de l’université.',
            explain: '"monument" (-ment = masculine) → "le plus célèbre".',
            explainZh: '-ment 为阳性，重复冠词 le："le plus célèbre"。'
          }
        ],
        related: [
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_7', label: '3.7 Comparatives of Adjectives' },
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_10', label: '3.10 le meilleur vs. le mieux' }
        ]
      },

      /* =========================================================
         PAGE 3.9: BON/MEILLEUR VS. BIEN/MIEUX PART 1
      ========================================================= */
      {
        id: 'adj_3_9',
        code: '3.9',
        group: 'bon/meilleur vs. bien/mieux',
        shortTitle: 'bon/meilleur vs. bien/mieux (1)',
        title: 'bon / meilleur (Adjective) vs. bien / mieux (Adverb) — Base & Comparative',
        titleZh: '核心易混专攻（一）：bon / meilleur（修饰名词）vs bien / mieux（修饰动词）与平等比较',
        estMin: 4,
        summary: 'Stop confusing meilleur and mieux! Learn the clean split between adjective bon/meilleur/aussi bon (describing nouns) and adverb bien/mieux/aussi bien (describing verbs, adjectives & adverbs)—plus intensifiers bien meilleur / bien mieux.',
        summaryZh: '彻底治愈法语头号高频混淆点：只要形容“东西/人好（修饰名词）”，选 bon / bonne / meilleur(e)(s) / aussi bon(ne)；只要形容“动作做得好、状态好、或者加深形容词程度”，选 bien / mieux / aussi bien！',
        cheatSummary: [
          { label: 'Noun = Adjective Family (bon)', rule: 'Base: bon / bonne / bons / bonnes ("une bonne cuisinière"). Comparative: meilleur(e)(s) que ("une meilleure cuisinière"). Equality: aussi bon(ne)(s) que ("aussi bonne"). Much better: bien meilleur(e)(s).', ruleZh: '接在名词旁或形容名词 = bon 家族：bon/bonne（好）→ meilleur(e)(s) que（更好）→ aussi bon(ne) que（一样好）。' },
          { label: 'Verb / Adj / Adv = Adverb Family (bien)', rule: 'Base: bien ("cuisine bien", "bien assaisonnée", "bien attentivement"). Comparative: mieux que ("cuisine mieux"). Equality: aussi bien que. Much better (verb): bien mieux.', ruleZh: '修饰动作(动词)、状态或形容词 = bien 家族（永不变形！）：bien（好）→ mieux que（更好）→ aussi bien que（一样好）。' }
        ],
        sections: [
          {
            id: 'bon_bien_base',
            heading: '1. bon / bonne (Adjective) vs. bien (Adverb)',
            headingZh: '一、基本形辨析：bon / bonne（修饰名词）vs bien（修饰动词・形容词）',
            lead: 'Ask yourself ONE question every time: "Am I describing a NOUN (person/thing/dish), or a VERB/ACTION/ADJECTIVE?" Nouns always take bon/bonne/bons/bonnes; actions, feelings (se sentir bien), and past-participle adjectives (bien assaisonnée = well-seasoned) always take bien!',
            leadZh: '做题永远只问自己一个问题：“我是在夸某个‘名词’（菜品、厨师、书），还是在夸某个‘动作或形容词’（做得好、吃得好、调料放得好）？” 夸名词选 bon(ne)(s)，夸动词/形容词选 bien！',
            cartoon: {
              src: './assets/tex_cartoons/adj8_bonne.gif',
              alt: 'La cuisine de Tammy est bonne',
              caption: 'La cuisine de Tammy est BONNE (adj. → noun) vs. Tammy fait BIEN la cuisine (adv. → verb).',
              captionZh: '她的菜品很好（修饰名词 cuisine → bonne）；她做菜做得很好（修饰动词 fait → bien）！'
            },
            examples: [
              { fr: 'La cuisine de Tammy est bonne. / Tammy est une bonne cuisinière.', en: 'Adjective "bonne" modifies feminine nouns "cuisine" and "cuisinière".', zh: '修饰名词 cuisine / cuisinière → 阴性形容词 "bonne"。', tag: 'Adjective bon' },
              { fr: 'Tammy fait bien la cuisine. / Elle lit bien attentivement. / La soupe est bien assaisonnée.', en: 'Adverb "bien" modifies verb "fait", adverb "attentivement", and adj. "assaisonnée"!', zh: '修饰动词 fait、副词 attentivement 或形容词 assaisonnée（调味很棒）→ 副词 "bien"！', tag: 'Adverb bien' }
            ]
          },
          {
            id: 'meilleur_mieux_comp',
            heading: '2. meilleur vs. mieux · aussi bon vs. aussi bien (+ bien meilleur!)',
            headingZh: '二、比较级对比：meilleur vs mieux、aussi bon vs aussi bien',
            lead: 'In comparatives ("better than"), bon shifts to meilleur(e)(s) (agrees with noun!) while bien shifts to invariable mieux. You can even stack "bien" (= "much") in front of BOTH: "bien meilleure" (much better cook) vs. "bien mieux" (cooks much better)! For equality ("as good/well as"), return to "aussi bon(ne)(s) que" vs. "aussi bien que".',
            leadZh: '表示“比……更好”时：形容词用可配合的 **meilleur(e)(s) que**，副词用永远不变的 **mieux que**！如果说“好得多（much better）”，前面都加一个加强词 bien（bien meilleur / bien mieux）。而“一样好”则是 **aussi bon(ne) que** vs **aussi bien que**：',
            cartoon: {
              src: './assets/tex_cartoons/adj8_aussibonne.gif',
              alt: 'Bette est une aussi bonne cuisinière',
              caption: 'aussi bonne cuisinière (noun) vs. cuisine aussi bien (verb) · bien meilleure vs. bien mieux !',
              captionZh: '一样好的厨师（aussi bonne）vs 一样做得好（aussi bien）！'
            },
            examples: [
              { fr: 'Tammy est une meilleure cuisinière que Fiona. / Les gâteaux de Tammy sont meilleurs que ceux de Fiona.', en: 'meilleur(e)(s) modifies nouns ("cuisinière", "gâteaux") — agrees in gender & number!', zh: 'meilleur(e)(s) 修饰名词，必须配合阴阳性单复数！', tag: 'meilleur(e)(s)' },
              { fr: 'Tammy cuisine mieux que Fiona. / La soupe est mieux assaisonnée.', en: 'mieux modifies verbs ("cuisine") and adjectives ("assaisonnée") — invariable!', zh: 'mieux 修饰动词和形容词，永远不变形！', tag: 'mieux' },
              { fr: 'Much better: Tammy est bien meilleure cuisinière / fait bien mieux la cuisine. · Equal: aussi bonne / aussi bien que.', en: '"bien" intensifies both! Note equality uses aussi bon(ne) / aussi bien (NEVER *aussi meilleur*).', zh: '“好得多”用 bien meilleur(e) / bien mieux；同等比较绝对不说 *aussi meilleur*！', tag: 'Intensifier & Equal' }
            ],
            quickCheck: {
              prompt: 'Pick the sentence with ZERO mix-ups between meilleur and mieux:',
              promptZh: '选出 meilleur 和 mieux 都没有用混的一句：',
              options: [
                'Ce restaurant est meilleur, et le chef cuisine bien mieux ici.',
                'Ce restaurant est mieux, et le chef cuisine meilleur ici.',
                'La tarte est mieux que le gâteau.',
                'Elle parle meilleur français que moi (wait: speaks better → parle mieux).'
              ],
              answerIdx: 0,
              explain: '"Ce restaurant" (noun) → adjective "meilleur"; "cuisine" (verb) → adverb "bien mieux"!',
              explainZh: '“餐厅更好”（修饰名词 restaurant）用 meilleur；“厨师做得更好”（修饰动词 cuisine）用 bien mieux！'
            }
          }
        ],
        drills: [
          {
            id: 'd39_d1',
            kind: 'choice',
            prompt: 'Complete: "Cette tarte aux pommes est vraiment ___ !" (modifies feminine noun "tarte")',
            promptZh: '修饰阴性名词 "tarte"（苹果派很美味）用哪个？',
            options: ['bonne', 'bien', 'bon', 'mieux'],
            answerIdx: 0,
            audio: 'Cette tarte aux pommes est vraiment bonne !',
            explain: '"tarte" is a feminine noun → adjective "bonne".',
            explainZh: '修饰阴性名词 tarte 用形容词阴性 "bonne"。'
          },
          {
            id: 'd39_d2',
            kind: 'choice',
            prompt: 'Complete: "Ce chef prépare ___ la soupe à l’oignon." (modifies verb "prépare")',
            promptZh: '修饰动词 "prépare"（大厨做汤做得很好）：',
            options: ['bien', 'bon', 'bonne', 'meilleur'],
            answerIdx: 0,
            audio: 'Ce chef prépare bien la soupe à l’oignon.',
            explain: 'Modifies verb "prépare" → adverb "bien".',
            explainZh: '修饰动词 prépare 用副词 "bien"。'
          },
          {
            id: 'd39_d3',
            kind: 'choice',
            prompt: 'Complete ("much better" modifying verb): "Édouard cuisine ___ que Joe-Bob !"',
            promptZh: '“比 Joe-Bob 做饭好得多”（修饰动词 cuisine）：',
            options: ['bien mieux', 'bien meilleur', 'plus bien', 'aussi meilleur'],
            answerIdx: 0,
            audio: 'Édouard cuisine bien mieux que Joe-Bob !',
            explain: 'Action verb "cuisine" → adverbial "bien mieux" ("much better").',
            explainZh: '修饰动词用副词比较级，“好得多”是 "bien mieux"。'
          },
          {
            id: 'd39_d4',
            kind: 'choice',
            prompt: 'Complete ("as good as" modifying plural noun): "Les crêpes de Tammy sont ___ que celles de Bette." (crêpes f.pl.)',
            promptZh: '“和……一样好吃”（修饰阴性复数名词 les crêpes）：',
            options: ['aussi bonnes', 'aussi bien', 'aussi meilleures', 'aussi bon'],
            answerIdx: 0,
            audio: 'Les crêpes de Tammy sont aussi bonnes que celles de Bette.',
            explain: 'Feminine plural noun "crêpes" → "aussi bonnes"!',
            explainZh: '修饰阴性复数 crêpes，用 "aussi bonnes"。'
          },
          {
            id: 'd39_d5',
            kind: 'fib',
            prompt: 'Fill bon / bonne / bien: La soupe est ___ assaisonnée ! (modifies adj. "assaisonnée")',
            promptZh: '填空：这碗汤调味很不错（修饰形容词 assaisonnée！）。',
            answers: ['bien'],
            hint: 'Adverbs (NOT adjectives!) modify adjectives like "assaisonnée".',
            audio: 'La soupe est bien assaisonnée !',
            explain: 'Adverb "bien" modifies participle/adjective "assaisonnée": "bien assaisonnée".',
            explainZh: '修饰形容词 assaisonnée 必须用副词 "bien"！'
          },
          {
            id: 'd39_d6',
            kind: 'fib',
            prompt: 'Fill meilleur / meilleure / mieux: Tammy est une ___ cuisinière que Fiona. (modifies f.sg. "cuisinière")',
            promptZh: '填空：Tammy 是比 Fiona 更厉害的女厨师（修饰阴单 cuisinière）。',
            answers: ['meilleure'],
            hint: 'Feminine singular adjective.',
            audio: 'Tammy est une meilleure cuisinière que Fiona.',
            explain: 'Agrees with feminine noun "cuisinière" → "meilleure".',
            explainZh: '修饰阴性单数名词 cuisinière，填 "meilleure"。'
          },
          {
            id: 'd39_d7',
            kind: 'fib',
            prompt: 'Fill meilleur / mieux: La soupe de Tammy est ___ assaisonnée que celle de Fiona.',
            promptZh: '填空：Tammy 的汤比 Fiona 的调味更好（修饰形容词 assaisonnée！）。',
            answers: ['mieux'],
            hint: 'Modifying the adjective "assaisonnée" → adverb comparative!',
            audio: 'La soupe de Tammy est mieux assaisonnée que celle de Fiona.',
            explain: 'Just as "bien assaisonnée" uses adverb "bien", its comparative uses adverb "mieux"!',
            explainZh: '刚才 bien assaisonnée 用副词，变成比较级就用副词 "mieux"（绝不用 meilleure）！'
          },
          {
            id: 'd39_d8',
            kind: 'fib',
            prompt: 'Fill bon / bien: Bette est une aussi ___ cuisinière que Tammy.',
            promptZh: '填空：Bette 是和 Tammy 一样棒的厨师（修饰阴单 cuisinière）。',
            answers: ['bonne'],
            hint: 'Feminine singular noun "cuisinière".',
            audio: 'Bette est une aussi bonne cuisinière que Tammy.',
            explain: 'Agrees with "cuisinière" → "bonne".',
            explainZh: '修饰阴单 cuisinière，填 "bonne"。'
          },
          {
            id: 'd39_d9',
            kind: 'fib',
            prompt: 'Fill bon / bien: Bette cuisine aussi ___ que Tammy.',
            promptZh: '填空：Bette 做菜做得和 Tammy 一样棒（修饰动词 cuisine）。',
            answers: ['bien'],
            hint: 'Modifies verb "cuisine".',
            audio: 'Bette cuisine aussi bien que Tammy.',
            explain: 'Modifies verb "cuisine" → "bien".',
            explainZh: '修饰动词 cuisine，填 "bien"。'
          },
          {
            id: 'd39_d10',
            kind: 'fib',
            prompt: 'Fill meilleurs / meilleures / mieux: Les gâteaux de Tammy sont ___ que les gâteaux de Fiona. (gâteaux m.pl.)',
            promptZh: '填空：Tammy 的蛋糕比 Fiona 的更好吃（les gâteaux 阳性复数）。',
            answers: ['meilleurs'],
            hint: 'Masculine plural noun "les gâteaux".',
            audio: 'Les gâteaux de Tammy sont meilleurs que les gâteaux de Fiona.',
            explain: '"les gâteaux" is masculine plural → "meilleurs".',
            explainZh: 'gâteaux 为阳性复数，填 "meilleurs"。'
          }
        ],
        related: [
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_10', label: '3.10 le meilleur vs. le mieux + Tex Review' },
          { chapterId: 'ch4_adverbs', pageId: 'adv_4_1', label: '4.1 Intro to Adverbs' }
        ]
      },

      /* =========================================================
         PAGE 3.10: LE MEILLEUR VS. LE MIEUX + TEX ADJ8 REVIEW
      ========================================================= */
      {
        id: 'adj_3_10',
        code: '3.10',
        group: 'bon/meilleur vs. bien/mieux',
        shortTitle: 'le meilleur vs. le mieux',
        title: 'bon/meilleur vs. bien/mieux (Part 2): Superlatives, Cooking Contest & Tex Review',
        titleZh: '核心易混专攻（二）：最高级 le meilleur vs le mieux、厨艺大赛对话与 Tex 12 题总测',
        estMin: 5,
        summary: 'Contrast superlative adjectives ("Qui fait la meilleure tarte ?") with superlative adverbs ("Qui cuisine le mieux ?"), read Édouard’s cooking contest dialogue, and complete all 12 Tex adj8 drills!',
        summaryZh: '攻克“谁做出的馅饼最好（la meilleure）”vs“谁做菜水平最高（le mieux）”的最高级辨析，精读 Édouard 裁判的甜点品鉴对话并完成 Tex 原版 12 题。',
        cheatSummary: [
          { label: 'Superlatives: le meilleur vs. le mieux', rule: 'English uses "the best" for both, but French splits them! Noun = le / la / les meilleur(e)(s) ("Qui fait la meilleure tarte ?"). Verb = le mieux (ALWAYS invariable "le"!: "Qui cuisine le mieux ?").', ruleZh: '英语都说 "the best"，法语一分为二：修饰名词选 le/la/les meilleur(e)(s)（最好的派 la meilleure tarte）；修饰动词永远只选 le mieux（做得最好 cuisine le mieux）！' },
          { label: 'Special Fixed Idioms', rule: 'se sentir bien (feel good/well — "je me sens si bien") uses adverb "bien"! Notice also "très bonne cuisinière" vs. "cuisine bien".', ruleZh: '重要固定句："觉得舒服/状态好"用 se sentir bien（副词 bien，不用 bonne！）。' }
        ],
        sections: [
          {
            id: 'sup_meilleur_mieux',
            heading: '1. Superlative Split: le / la / les meilleur(e)(s) vs. le mieux',
            headingZh: '一、最高级辨析：la meilleure tarte（名词）vs cuisine le mieux（动词）',
            lead: 'Where English uses "the best" for everything, French distinguishes noun superlatives—le / la / les meilleur(e)(s) (and le moins bon)—from verb superlatives—invariable le mieux (and le moins bien)!',
            leadZh: '看准后面是名词还是动词：说“谁做的馅饼（名词）是全城最好的”必须配合阴阳性单复数；说“谁做饭（动词）最好”，永远只写 le mieux！',
            cartoon: {
              src: './assets/tex_cartoons/adj8_frog.gif',
              alt: 'Les moins bonnes cuisses de grenouilles',
              caption: 'Qui fait LA MEILLEURE tarte / LES MOINS BONNES cuisses ? (nouns!) · vs. Qui cuisine LE MIEUX / LE MOINS BIEN ? (verbs!)',
              captionZh: '修饰派、蛙腿（名词）用 la meilleure / les moins bonnes；修饰做饭动作（动词）用 le mieux / le moins bien！'
            },
            examples: [
              { fr: 'Qui fait la meilleure tarte ? · Qui fait les moins bonnes cuisses de grenouilles ?', en: 'Who makes the best tart (f.sg.)? · Who makes the worst frog legs (f.pl.)?', zh: '谁做最好的馅饼（阴单）？· 谁做最难吃的田鸡腿（阴复）？', tag: 'Noun Superlative' },
              { fr: 'Qui cuisine le mieux ? · Et qui cuisine le moins bien ?', en: 'Who cooks the best? · And who cooks the worst?', zh: '谁做饭最棒？· 谁做饭最差？（全用 le！）', tag: 'Verb Superlative' }
            ]
          },
          {
            id: 'cooking_contest',
            heading: '2. Dialogue: Édouard Judges the Pie-Baking Contest',
            headingZh: '二、原版美食大赛对话：Tammy、Fiona 与 Bette 的馅饼对决',
            lead: 'Listen to how Édouard switches effortlessly between bonne, bien, meilleure, aussi bien que, and le mieux in one continuous story:',
            leadZh: '听美食裁判 Édouard 现场点评三位选手时如何无缝切换 bonne / bien / meilleure / aussi bien / le mieux：',
            cartoon: {
              src: './assets/tex_cartoons/adj8_mieux.gif',
              alt: 'C’est Bette qui cuisine le mieux',
              caption: 'C’est Bette qui cuisine LE MIEUX ! Quel est votre secret ?',
              captionZh: 'Bette 厨艺荣获冠军（cuisine le mieux）！她的秘密配料到底是什么？'
            },
            dialogue: {
              title: 'Dialogue: Le concours de cuisine (Édouard goûte 3 tartes)',
              titleZh: '烘焙大赛评审现场',
              lines: [
                { speaker: 'Édouard', fr: 'Une tarte aux pommes... C’est très sucré, mais délicieux. Tammy est bonne cuisinière. Oui, oui, elle cuisine bien.', en: 'An apple tart... Sweet, but delicious. Tammy is a good cook. Yes, she cooks well.', zh: '苹果派……挺甜的，很好吃。Tammy 是个好厨师（bonne），做菜确实有一手（bien）。' },
                { speaker: 'Édouard', fr: 'Une tarte aux piments... C’est épicé mais original. Est-ce que cette tarte est meilleure que celle de Tammy ? Non, à mon avis, Fiona cuisine aussi bien que Tammy.', en: 'A pepper tart... Spicy but original! Is this tart better than Tammy’s? No, in my opinion Fiona cooks as well as Tammy.', zh: '辣椒派……挺辣但有创意。比 Tammy 的更好吗（meilleure）？不，我觉得 Fiona 做得和 Tammy 一样好（aussi bien）。' },
                { speaker: 'Édouard', fr: 'Une tarte aux fruits exotiques... Hmm ! C’est Bette qui va recevoir le prix. C’est elle qui cuisine le mieux ! Quel est votre secret ?', en: 'An exotic fruit tart... Bette’s going to win the prize! She’s the one who cooks the best! What’s your secret?', zh: '热带水果派……哇太美妙了！冠军非 Bette 莫属，她厨艺最绝（le mieux）！您的秘诀是什么？' },
                { speaker: 'Bette', fr: 'Mais, c’est tout simple, Édouard. Quand je cuisine, j’ajoute toujours une pincée d’épices secrètes !', en: 'Oh, it’s quite simple, Édouard. When I cook, I always add a pinch of secret spices!', zh: '其实很简单嘛 Édouard，做派的时候我总要加一撮“秘密香料”！' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'd310_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12 — Fill bien, mieux, bon(ne)(s), or meilleur(e)(s): Édouard fait les ___ crêpes (fem.) de la ville.',
            promptZh: 'Tex 第 1 题：Édouard 做全城“最好的”可丽饼（les crêpes 阴复）。',
            options: ['meilleures', 'mieux', 'meilleurs', 'bonnes'],
            answerIdx: 0,
            audio: 'Édouard fait les meilleures crêpes de la ville.',
            explain: '"les crêpes" is a feminine plural noun → superlative adjective "meilleures".',
            explainZh: 'crêpes 是阴性复数名词，选 "meilleures"。'
          },
          {
            id: 'd310_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Personne ne fait ___ les crêpes qu’Édouard. (cooks/makes better than)',
            promptZh: 'Tex 第 2 题：没有人做可丽饼做得比 Édouard “更好”（修饰动词 fait！）。',
            options: ['mieux', 'meilleur', 'bien', 'meilleures'],
            answerIdx: 0,
            audio: 'Personne ne fait mieux les crêpes qu’Édouard.',
            explain: 'Modifies the verb "fait" ("better than Édouard") → adverb "mieux".',
            explainZh: '修饰动词 fait，且后面有 que 构成比较，填副词 "mieux"！'
          },
          {
            id: 'd310_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Tammy travaille ___. (well — modifies verb)',
            promptZh: 'Tex 第 3 题：Tammy 工作学习得“很好”（修饰动词 travaille）。',
            options: ['bien', 'bonne', 'bon', 'meilleure'],
            answerIdx: 0,
            audio: 'Tammy travaille bien.',
            explain: 'Modifies verb "travaille" → adverb "bien".',
            explainZh: '修饰动词 travaille，选 "bien"。'
          },
          {
            id: 'd310_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Tex a le ___ accent français de UT. (best — accent m.sg.)',
            promptZh: 'Tex 第 4 题：Tex 有着全校“最好的”法语口音（le + accent 阳性单数）。',
            options: ['meilleur', 'mieux', 'bon', 'meilleure'],
            answerIdx: 0,
            audio: 'Tex a le meilleur accent français de UT.',
            explain: 'Modifies masculine singular noun "accent" → "le meilleur".',
            explainZh: 'accent 是阳性单数名词，选 "meilleur"。'
          },
          {
            id: 'd310_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Fill bien / mieux / bon(ne)(s) / meilleur(e)(s): Les crêpes (fem.) de Tammy ne sont pas aussi ___ que les crêpes d’Edouard.',
            promptZh: 'Tex 第 5 题：Tammy 的可丽饼不如 Édouard 的那么好吃（crêpes 阴复，aussi ___ que）。',
            answers: ['bonnes'],
            hint: 'After "aussi", use base adjective agreeing with feminine plural "crêpes"!',
            audio: 'Les crêpes de Tammy ne sont pas aussi bonnes que celles d’Édouard.',
            explain: '"aussi + bonnes + que" agrees with feminine plural "crêpes".',
            explainZh: 'aussi 后面不能接 meilleures，用配合阴性复数的原级 "bonnes"。'
          },
          {
            id: 'd310_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12: Tammy est une ___ étudiante. (good — f.sg.)',
            promptZh: 'Tex 第 6 题：Tammy 是位“好”学生（une étudiante 阴单）。',
            answers: ['bonne'],
            hint: 'Feminine singular adjective before "étudiante".',
            audio: 'Tammy est une bonne étudiante.',
            explain: '"une étudiante" is feminine singular → "bonne".',
            explainZh: '修饰阴性单数名词 étudiante，填 "bonne"。'
          },
          {
            id: 'd310_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12: Bette et Tammy ne sont pas toujours les ___ amies du monde. (best — f.pl.)',
            promptZh: 'Tex 第 7 题：Bette 和 Tammy 并非总是世界上“最好的”朋友（les amies 阴复）。',
            answers: ['meilleures'],
            hint: '"les ___ amies" (f.pl. superlative!).',
            audio: 'Elles ne sont pas toujours les meilleures amies du monde.',
            explain: 'Feminine plural noun "amies" → "les meilleures".',
            explainZh: 'amies 阴性复数，最高级填 "meilleures"。'
          },
          {
            id: 'd310_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12: Tammy cuisine aussi ___ qu’Édouard. (well)',
            promptZh: 'Tex 第 8 题：Tammy 做菜做得跟 Édouard 一样好（修饰动词 cuisine）。',
            answers: ['bien'],
            hint: 'Modifies verb "cuisine" after "aussi".',
            audio: 'Tammy cuisine aussi bien qu’Édouard.',
            explain: 'Verb "cuisine" → adverb "bien".',
            explainZh: '修饰动词 cuisine，填 "bien"。'
          },
          {
            id: 'd310_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12 — Idiom check!: Tammy : Oh Tex, mon chéri, je me sens ("feel") si ___ avec toi !',
            promptZh: 'Tex 第 9 题（固定搭配 se sentir + 副词）：亲爱的，跟你在一起我感觉太好了！',
            answers: ['bien'],
            hint: '"se sentir ___" ALWAYS uses the adverb (just like English "feel well")!',
            audio: 'Je me sens si bien avec toi !',
            explain: '"se sentir bien" = to feel good/well (always adverb "bien", even when a woman speaks!).',
            explainZh: '表示身体或心情感受“舒服/好”固定是 "se sentir bien"（用副词 bien，不因主语是女生而变 bonne）。'
          },
          {
            id: 'd310_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12: Bette fait beaucoup ___ les tartes que Tammy et Fiona. (better — modifies verb "fait"!)',
            promptZh: 'Tex 第 10 题：Bette 做馅饼比她俩好得多（修饰动词 fait！）。',
            answers: ['mieux'],
            hint: 'Modifies verb "fait" ("better than").',
            audio: 'Bette fait beaucoup mieux les tartes que Tammy et Fiona.',
            explain: 'Adverb modifying "fait" in comparison → "mieux"!',
            explainZh: '修饰动词 fait 作比较，“好得多”填 "mieux"（注意这里用了 beaucoup 加强比较）。'
          },
          {
            id: 'd310_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12: Édouard est serveur dans le ___ restaurant d’Austin. (best — m.sg.)',
            promptZh: 'Tex 第 11 题：Édouard 在奥斯汀“最好的”餐厅当服务员（le restaurant 阳单）。',
            answers: ['meilleur'],
            hint: 'Masculine singular noun "restaurant".',
            audio: 'Édouard est serveur dans le meilleur restaurant d’Austin.',
            explain: '"restaurant" is masculine singular → "le meilleur".',
            explainZh: 'restaurant 阳性单数，填 "meilleur"。'
          },
          {
            id: 'd310_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12: Bette est très ___ cuisinière. (good — f.sg.)',
            promptZh: 'Tex 第 12 题：Bette 是个很棒的女厨师（cuisinière 阴性单数）。',
            answers: ['bonne'],
            hint: 'Notice "très" modifies "bonne", and "bonne" agrees with feminine "cuisinière"!',
            audio: 'Bette est une très bonne cuisinière.',
            explain: 'Adjective modifying feminine "cuisinière" → "bonne".',
            explainZh: '修饰阴性名词 cuisinière，填 "bonne"。'
          }
        ],
        related: [
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_9', label: '3.9 bon vs. bien Base Rules' },
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_11', label: '3.11 Participles as Adjectives' }
        ]
      },

      /* =========================================================
         PAGE 3.11: PARTICIPLES AS ADJECTIVES (-ING VS. -ED)
      ========================================================= */
      {
        id: 'adj_3_11',
        code: '3.11',
        group: 'Participles as Adjectives',
        shortTitle: 'Participles (-ant vs. -é/-i/-u)',
        title: 'Present & Past Participles as Adjectives (fatigant vs. fatigué)',
        titleZh: '分词作形容词（令人……的 -ant vs 感到……的 过去分词 + 必须性数配合）+ Tex 12 题',
        estMin: 5,
        summary: 'Distinguish active -ant adjectives (-ing: intéressant, fatigant, amusant) from passive/feeling past-participle adjectives (-ed: fatigué, perdu, stressée, entourée d’...), agree both cleanly, read the Daily Texan dialogue, and finish all 12 Tex adj9 drills!',
        summaryZh: '像英语分清 boring vs bored 一样掌握法语的“现在分词作形容词（-ant，让人感到……）”与“过去分词作形容词（-é / -i / -u / 不规则，人自己感到……，常配 par/de）”！且二者全都要跟名词变阴阳性复数。配校报对话与 Tex 原版 12 题。',
        cheatSummary: [
          { label: 'Present Participle (-ant) = "-ing" (Causes Feeling)', rule: 'Form: nous stem + -ant (+ agreement!). Describes what causes the state: fatigant (tiring), intéressant (interesting), amusant(e)(s) (amusing), surprenant(e)(s), stressant (stressful), choquant (shocking).', ruleZh: '现在分词（动词 nous 词干 + -ant + 性数配合）= 英语 -ing（主动/令人产生感觉）：fatigant（令人累的）、stressant（让人有压力的）、captivant（引人入胜的）。' },
          { label: 'Past Participle = "-ed" (Experiences Feeling / Passive)', rule: 'Form: -er → -é, -ir → -i, -re → -u (+ irregulars like compris) + AGREEMENT! Describes how someone feels or passive state (often + par / de): fatigué(e), stressé(e), perdu(e), entourée d’admirateurs, mal compris.', ruleZh: '过去分词作形容词（+ 性数配合）= 英语 -ed（被动/主语感受到的状态，常后接 par 或 de）：fatigué（感到累的）、stressée（感到压力的）、entourée d’admirateurs（被仰慕者围绕）。' }
        ],
        sections: [
          {
            id: 'part_adj_pair',
            heading: '1. fatigant (-ing) vs. fatigué (-ed) — Both Must Agree!',
            headingZh: '一、核心对比：fatigant（累人的）vs fatigué（累了的）——全都要配合性数！',
            lead: 'Just like English -ing vs. -ed adjectives, French turns BOTH present participles (-ant) and past participles (-é / -i / -u / irregular) into full adjectives that follow the noun and agree in gender and number!',
            leadZh: '现在分词形容词（让人产生某种情绪/状态，类似 -ing）以 -ant 结尾；过去分词形容词（某人自己感受到该状态，或事物被怎样，类似 -ed）则来自各动词的过去分词。记住：**一旦用作形容词，两者都必须配合名词加 -e / -s / -es！**',
            examples: [
              { fr: 'Oh là là, Tex est fatigué après ses cours. vs. Pff... quand il parle de philosophie, Tex est parfois fatigant !', en: 'Tex is tired (-ed) after class vs. Tex is sometimes tiring (-ing)!', zh: 'Tex 上完课“好累（fatigué）” vs Tex 唠叨哲学时“真累人（fatigant）”！', tag: '-é vs. -ant' },
              { fr: 'Present participles (-ant): un tatou intéressant · une fille charmante · des animaux amusants · des créatures surprenantes', en: 'Built from nous present minus -ons + -ant (+ e/s/es!).', zh: '现在分词形容词：intéressant / charmante / amusants / surprenantes（全要加性数！）。', tag: 'Present Part.' },
              { fr: 'Past participles: un couple uni (unir) · Il est perdu (perdre) · des Français peu américanisés · Bette est trop gâtée (gâter).', en: 'Built from verb past participle (+ e/s/es!).', zh: '过去分词形容词：uni / perdu / américanisés / gâtée。', tag: 'Past Part.' },
              { fr: 'Passive + par / de: Bette est une chatte entourée d’admirateurs / gâtée par ses admirateurs.', en: 'Surrounded BY/WITH admirers (de) · spoiled BY her admirers (par).', zh: '表被动状态常接介词 par（被……）或 de（被/充满……）。', tag: 'par / de' }
            ]
          },
          {
            id: 'daily_texan_dlg',
            heading: '2. Dialogue: Shocking News in the Daily Texan',
            headingZh: '二、校园对话：《Daily Texan》校报上的震撼文章',
            lead: 'Spot "choquant" (shocking) and "amusantes" (amusing, f.pl.) in Joe-Bob and Corey’s chat:',
            leadZh: '从 Joe-Bob 和 Corey 的闲聊里听清分词作形容词怎么自然配合：',
            cartoon: {
              src: './assets/tex_cartoons/adj9_choquant.gif',
              alt: 'Un article absolument choquant',
              caption: 'Un article absolument CHOQUANT (shocking) · des conférences plus AMUSANTES (amusing, f.pl.)',
              captionZh: '一篇极其令人震惊的文章（choquant）· 更有趣的讲座（amusantes 阴复）！'
            },
            dialogue: {
              title: 'Joe-Bob et Corey lisent le journal du campus',
              titleZh: '聊考试、挂科与奇葩教授',
              lines: [
                { speaker: 'Joe-Bob', fr: 'Corey, tu as vu ? Il y a un article absolument choquant dans le Daily Texan. Il s’agit d’un prof qui a des personnalités multiples !', en: 'Corey, did you see? There’s an absolutely shocking article in the Daily Texan about a prof with multiple personalities!', zh: 'Corey 你看了吗？校报上有篇超震撼的文章，说有位教授居然有多重人格！' },
                { speaker: 'Corey', fr: 'Ah oui, je l’ai eu le semestre passé. Bien sûr, j’ai raté mon examen, mais au moins ses conférences étaient plus amusantes que celles des autres profs.', en: 'Oh yeah, I had him last semester. Of course I failed my exam, but at least his lectures were more amusing than the other profs’!', zh: '哦我知道，我上学期上过他的课。期末虽然照样挂了，但起码他的讲座比其他教授有意思多了！' }
              ]
            },
            quickCheck: {
              prompt: 'Pick the clean -ing vs. -ed contrast: "The exams are stressful (___), so Tammy (f.) is stressed (___)."',
              promptZh: '分清主动引发 vs 自身感受：“考试很让人抓狂（c’est...），所以 Tammy 压力很大”：',
              options: ['stressant / stressée', 'stressé / stressante', 'stressants / stressant', 'stressée / stressant'],
              answerIdx: 0,
              explain: '"C’est..." takes masc. sg. "-ant" ("stressant" = stressful); Tammy (f.sg.) experiences the stress → past participle "stressée"!',
              explainZh: 'c’est 后面永远用阳单，引发压力用 -ant（stressant）；Tammy（女性）感到有压力用过去分词加 e（stressée）！'
            }
          }
        ],
        drills: [
          {
            id: 'd311_d1',
            kind: 'choice',
            prompt: 'Tex Practice 1/12: Corey : J’ai trop travaillé ! Je suis ___. (épuiser = to exhaust)',
            promptZh: 'Tex 第 1 题：Corey（男）说“我工作太久了，我筋疲力尽了”（自身感受 -ed！）。',
            options: ['épuisé', 'épuisant', 'épuisée', 'épuiser'],
            answerIdx: 0,
            audio: 'J’ai trop travaillé ! Je suis épuisé.',
            explain: 'Corey (m.sg.) feels exhausted → past participle "épuisé".',
            explainZh: 'Corey 自己感到精疲力尽，用过去分词 "épuisé"。'
          },
          {
            id: 'd311_d2',
            kind: 'choice',
            prompt: 'Tex Practice 2/12: Corey : Lire des livres, c’est ___ ! (épuiser — -ing!)',
            promptZh: 'Tex 第 2 题：看书这事太耗精力了（令人疲惫的 -ing）！',
            options: ['épuisant', 'épuisé', 'épuisante', 'épuisée'],
            answerIdx: 0,
            audio: 'Lire des livres, c’est épuisant !',
            explain: 'Reading causes exhaustion (-ing) after "c’est" (always m.sg.) → "épuisant".',
            explainZh: '读书使人累（-ing），且 c’est 后只用阳性单数："épuisant"。'
          },
          {
            id: 'd311_d3',
            kind: 'choice',
            prompt: 'Tex Practice 3/12: Tammy : Ce film d’horreur est ___ ! (effrayer = to frighten — -ing!)',
            promptZh: 'Tex 第 3 题：这部恐怖片太“吓人”了（电影让人害怕，-ing）！',
            options: ['effrayant', 'effrayé', 'effrayée', 'effrayante'],
            answerIdx: 0,
            audio: 'Ce film d’horreur est effrayant !',
            explain: '"Ce film" (m.sg.) causes fright → present participle "effrayant".',
            explainZh: '电影（阳性单数）令人恐惧，用现在分词 "effrayant"。'
          },
          {
            id: 'd311_d4',
            kind: 'choice',
            prompt: 'Tex Practice 4/12: Tammy : J’ai mes examens en ce moment, je suis très ___. (stresser — f.sg.)',
            promptZh: 'Tex 第 4 题：Tammy（女）说“我现在压力山大”！',
            options: ['stressée', 'stressant', 'stressé', 'stressante'],
            answerIdx: 0,
            audio: 'Je suis très stressée.',
            explain: 'Tammy (f.sg.) feels stressed (-ed) → "stressée" (add -e!).',
            explainZh: 'Tammy（女性）自身感到有压力，用过去分词加 -e："stressée"！'
          },
          {
            id: 'd311_d5',
            kind: 'fib',
            prompt: 'Tex Practice 5/12 — Participle adjective: Les examens, c’est ___. (stresser — -ing after c’est)',
            promptZh: 'Tex 第 5 题：考试这事太让人有压力了（c’est + -ing）！',
            answers: ['stressant'],
            hint: 'After "c’est", keep masculine singular "-ant"!',
            audio: 'Les examens, c’est stressant.',
            explain: '"c’est" is always followed by a masculine singular adjective → "stressant".',
            explainZh: '无论主语是什么，c’est 后面一律只用阳性单数："stressant"。'
          },
          {
            id: 'd311_d6',
            kind: 'fib',
            prompt: 'Tex Practice 6/12: Tammy : Tex, tu es insupportable ! Tu es ___ ! (exaspérer — exasperating, -ing!)',
            promptZh: 'Tex 第 6 题：Tex 你简直让人受不了！你太“气人 / 让人抓狂”了（-ing）！',
            answers: ['exaspérant', 'exasperant'],
            hint: 'Tex (m.sg.) causes exasperation → "-ant"!',
            audio: 'Tu es exaspérant !',
            explain: '"Tu" (Tex, m.sg.) causes exasperation → "exaspérant".',
            explainZh: 'Tex 令人抓狂（主动引发情绪），用现在分词 "exaspérant"。'
          },
          {
            id: 'd311_d7',
            kind: 'fib',
            prompt: 'Tex Practice 7/12: Tammy est très ___ de tous ses amis. (apprécier — appreciated by, f.sg.!)',
            promptZh: 'Tex 第 7 题：Tammy 深受所有朋友的喜爱与赞赏（被动 -ed，阴性单数）。',
            answers: ['appréciée', 'appreciee'],
            hint: 'Past participle of apprécier + feminine "-e" ("de tous ses amis" = passive!).',
            audio: 'Tammy est très appréciée de tous ses amis.',
            explain: 'Passive meaning ("appreciated by") agreeing with Tammy (f.sg.) → "appréciée" (double ée!).',
            explainZh: '被大家喜爱属于被动感受，且 Tammy 为阴性，过去分词加 -e："appréciée"（注意是两个 e：ée）！'
          },
          {
            id: 'd311_d8',
            kind: 'fib',
            prompt: 'Tex Practice 8/12: Tex est un poète mal ___. (comprendre — irregular past participle: understood)',
            promptZh: 'Tex 第 8 题：Tex 是个不被理解的诗人（comprendre 的不规则过去分词！）。',
            answers: ['compris'],
            hint: 'Irregular past participle of comprendre (ends in -s!).',
            audio: 'Tex est un poète mal compris.',
            explain: '"comprendre → compris" ("misunderstood" = mal compris).',
            explainZh: 'comprendre 的过去分词是 "compris"（阳单）：mal compris。'
          },
          {
            id: 'd311_d9',
            kind: 'fib',
            prompt: 'Tex Practice 9/12: Édouard et Tex ont bu trop de café. Ils sont ___. (énerver — wired/agitated, m.pl.)',
            promptZh: 'Tex 第 9 题：Édouard 和 Tex 喝太多咖啡了，他们都很亢奋焦躁（m.pl.）。',
            answers: ['énervés', 'enerves'],
            hint: 'Past participle agreeing with "Ils" (m.pl.).',
            audio: 'Ils sont énervés.',
            explain: 'They feel agitated (-ed) → masculine plural "énervés".',
            explainZh: '两人自己感到焦躁，过去分词加 -s："énervés"。'
          },
          {
            id: 'd311_d10',
            kind: 'fib',
            prompt: 'Tex Practice 10/12: Le livre de Tex est ___ ! (captiver — captivating, -ing)',
            promptZh: 'Tex 第 10 题：Tex 的书太“引人入胜”了（-ing）！',
            answers: ['captivant'],
            hint: 'Book causes captivation → "-ant".',
            audio: 'Le livre de Tex est captivant !',
            explain: 'Present participle agreeing with masculine "le livre" → "captivant".',
            explainZh: '书使人入迷（-ing），阳性单数填 "captivant"。'
          },
          {
            id: 'd311_d11',
            kind: 'fib',
            prompt: 'Tex Practice 11/12: Bette est ___ que Tex soit amoureux de Tammy. (étonner — astonished, f.sg.)',
            promptZh: 'Tex 第 11 题：Bette 感到非常“惊讶”（Bette 阴性单数，感到惊讶 -ed）。',
            answers: ['étonnée', 'etonnee'],
            hint: 'Bette (f.sg.) feels astonished → "-ée"!',
            audio: 'Bette est étonnée.',
            explain: 'Bette feels astonished (-ed, f.sg.) → "étonnée".',
            explainZh: 'Bette 感到惊讶（-ed），阴性单数填 "étonnée"。'
          },
          {
            id: 'd311_d12',
            kind: 'fib',
            prompt: 'Tex Practice 12/12: Tammy est une tatou ___. (amuser — amusing, f.sg.!)',
            promptZh: 'Tex 第 12 题：Tammy 是只风趣好玩的犰狳（令人发笑的 -ing，阴性单数！）。',
            answers: ['amusante'],
            hint: 'Tammy is amusing (-ing) AND feminine singular ("une tatou") → "-ante"!',
            audio: 'Tammy est une tatou amusante.',
            explain: 'Present participle "amusant" agreeing with feminine "une tatou" → "amusante"!',
            explainZh: '注意两个要点：① “风趣有趣的”是主动引发情绪，用现在分词 -ant；② 配合阴性 une tatou 加 -e → "amusante"！'
          }
        ],
        related: [
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_2', label: '3.2 Regular Adjectives' },
          { chapterId: 'ch4_adverbs', pageId: 'adv_4_1', label: '4.1 Intro to Adverbs' },
          { chapterId: 'ch3_adjectives', pageId: 'adj_3_1', label: 'Back to 3.1 Intro to Adjectives' }
        ]
      }
    ]
  });
})();
