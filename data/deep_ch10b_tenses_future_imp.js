(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch10b_tenses_future_imp',
    code: 'Ch 10B',
    level: 'A1–B2',
    category: 'tense_mood_b',
    icon: '🚀',
    title: 'Tense & Mood II: Plus-que-parfait, Future, Passé Simple & Imperative',
    titleZh: '第十章 B · 愈过去时、将来时全家族、文学过去时与命令式',
    subtitle: 'Tex-style deep mastery of Chapter 10 Part B (tap9–11, taf1–5, tai1 across 9 bite-sized pages): plus-que-parfait ("had done") vs. depuis/venir de traps, passé simple & passé antérieur literary recognition (Cendrillon story!), futur proche & imparfait "was going to", regular & 17 irregular futur simple stems, futur proche vs. futur simple + mandatory future after quand/dès que, futur antérieur ("will have done"), and affirmative/negative imperative rules — with 11 original Tex cartoons & 108 drills.',
    subtitleZh: '对标 Tex 原版第十章 B（tap9–11, taf1–5, tai1 共 9 个轻松小页）：愈过去时（对比 depuis 与 venir de）、文学时态识别（简单过去与先过去 +《灰姑娘》精读）、近将来与“正准备……”，规则与 17 组不规则简单将来时、近将来 vs 简单将来与 quand/dès que 后必须用将来时、先将来时，以及命令式肯定/否定规则，配 11 张原版卡通与 108 题专练。',
    pages: [
      /* =========================================================
         PAGE 10B.1: PLUS-QUE-PARFAIT (tap9)
      ========================================================= */
      {
        id: 't10b_1',
        code: '10B.1',
        group: 'Advanced Past',
        shortTitle: 'Plus-que-parfait ("had done")',
        title: 'Le Plus-que-parfait: Auxiliary in Imparfait + Past Participle ("had already done")',
        titleZh: '愈过去时（Plus-que-parfait）：助动词 Imparfait + 过去分词（“在那之前已经……”与两项高频对比）',
        estMin: 4,
        summary: 'Master the pluperfect (le plus-que-parfait) for events occurring PRIOR to another past moment ("had done"): conjugate avoir ("avais, avait, avions, aviez, avaient") or être ("étais, était, étions, étiez, étaient" + Alamo / pronominal subject agreement!) in the IMPARFAIT + past participle. Pair naturally with "déjà" / "ne... pas encore" and past wishes ("Si seulement tu avais fini !"). WATCH TWO TRAPS: English "had been waiting" = Imparfait + depuis (NOT plus-que-parfait!); English "had just done" = Imparfait venir de + inf.!',
        summaryZh: '讲故事时，若要回溯**在某个过去动作之前“早就已经发生”的事**（英语 *had done*），就用**愈过去时（Plus-que-parfait）**：结构简单到极点——直接把复合过去时的助动词 `avoir` 或 `être` 变成**未完成过去时（`avais / étais`）+ 过去分词**，代动词和 `être` 动词的性数配合规矩完全不变！注意两大英汉转换陷阱：① “那时已经等了好几年了”不用愈过去时，用 **`Imparfait + depuis`**；② “那时刚做完……”用 **`venait de + 原形`**！',
        cheatSummary: [
          { label: 'Formula & Same Agreement Rules as Passé Composé', rule: 'avoir/être in IMPARFAIT (avais, avais, avait, avions, aviez, avaient OR étais, étais, était, étions, étiez, étaient) + Past Participle. All être, COD, and pronominal agreement rules still apply ("les poèmes que Tex avait écrits", "elle était sortie")!', ruleZh: '构成公式：avoir（avais…）或 être（étais…）的未完成过去时 + 过去分词；配合规则与复合过去时一模一样（遇前置直宾/être/代动词要配合！）。' },
          { label: '3-Way Past Prior Trap', rule: '(1) "had already started" → avait déjà commencé (Plus-que-parfait). (2) "had just started" → venait de commencer (Imp. venir de). (3) "had been waiting for years" → attendait depuis des années (Imparfait + depuis!).', ruleZh: '三者精准区分：① 当时早就开始了 → avait déjà commencé；② 当时刚刚开始 → venait de commencer；③ 当时已经持续等了好几年 → attendait depuis des années！' }
        ],
        sections: [
          {
            id: 't10b1_pqp',
            heading: '1. Formation, Past Narrative Context & 3-Way Comparison',
            headingZh: '一、愈过去时构成、déjà / pas encore 搭配与三项对照',
            lead: 'Compare Tex’s three situations when his editor called: "attendait depuis des années" (had been waiting), "venait de commencer" (had just started), and "avait (déjà) commencé / n’avait pas encore fini" (Plus-que-parfait):',
            leadZh: '看 Tex 和出版商打电话的三句王牌对比，一眼区分愈过去时、近过去时与 depuis 未完成过去时：',
            cartoon: {
              src: './assets/tex_cartoons/tap9_commence.gif',
              alt: 'Tex avait commencé son poème quand son éditeur a téléphoné',
              caption: 'Tex avait déjà commencé son poème (plus-que-parfait) quand son éditeur a téléphoné ! — Si seulement tu avais fini !',
              captionZh: '编辑打来电话时，Tex 早就开始写新诗了（avait commencé，愈过去时）！— 要是你早就写完了该多好（Si seulement tu avais fini !）！'
            },
            table: {
              headers: ['Verb Group', 'Forms (Imparfait Aux. + PP)', 'Tex Example'],
              rows: [
                { cols: ['avoir Verbs', 'j’avais mangé · nous avions fini · ils avaient lu', 'À 7 ans, Tex avait déjà rédigé dix poèmes.'], audio: 'À l’âge de sept ans, Tex avait déjà rédigé dix poèmes.' },
                { cols: ['être (Alamo) Verbs', 'j’étais allé(e) · elles étaient parties (+ agreement!)', 'Si j’avais su, je serais devenu comptable.'], audio: 'Elles étaient allées à Paris avant l’été.' },
                { cols: ['Pronominal Verbs', 'je m’étais levé(e) · ils s’étaient amusés', 'Avant l’âge de 8 ans, Trey s’était cassé le bras.'], audio: 'Avant l’âge de huit ans, Trey s’était cassé le bras.' },
                { cols: ['Preceding COD + avoir', 'agrees with preceding que/le/la/les!', 'Elle a adoré les poèmes que Tex avait écrits !'], audio: 'Elle a adoré les poèmes que Tex avait écrits.' },
                { cols: ['Past Wish (Si seulement...!)', 'Si (seulement) + Plus-que-parfait ! ("If only I had...")', 'Si seulement tu avais fini ton nouveau poème !'], audio: 'Si seulement tu avais fini ton nouveau poème !' }
              ]
            },
            examples: [
              { fr: 'Tex n’avait pas encore fini son poème quand son éditeur a téléphoné.', en: 'already ("déjà") ↔ not yet ("ne... pas encore") around auxiliary!', zh: 'déjà（早就）和 pas encore（还没）一律放在助动词 avait 和过去分词之间！', tag: 'déjà / pas encore' },
              { fr: 'Si vous ne m’aviez pas interrompu, j’aurais pu finir !', en: 'Preview of 3rd Si-Clause: Si + Plus-que-parfait → Past Conditional', zh: 'Si + 愈过去时 → 过去条件式，用于表达与过去事实相反的遗憾！', tag: 'Past Si-Clause' }
            ],
            quickCheck: {
              prompt: 'Pick the right French translation for "She had been waiting for two hours when Tex arrived":',
              promptZh: '选择正确表达“Tex 到的时候，她**已经持续等了两个小时**（depuis deux heures）”的一句：',
              options: [
                'Elle attendait depuis deux heures quand Tex est arrivé. (Imparfait + depuis!)',
                'Elle avait attendu depuis deux heures quand Tex est arrivé.',
                'Elle venait d’attendre deux heures quand Tex est arrivé.',
                'Elle a attendu depuis deux heures quand Tex est arrivé.'
              ],
              answerIdx: 0,
              explain: 'With an ongoing duration ("depuis deux heures") up to a past moment, French uses Imparfait + depuis ("attendait depuis"), NOT plus-que-parfait!',
              explainZh: '这是英汉切换高频考坑：动作一直持续到那个过去节点（带 depuis），用法语要用 Imparfait + depuis（attendait depuis），不能用愈过去时！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10b1_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Corey : J’___ mon film préféré à l’âge de 10 ans. (choisir)',
            promptZh: 'Tex 原题 #1：我十岁那年就已经选定了我最喜欢的电影（choisir，填 avais + 过去分词）：',
            answers: ['avais choisi'],
            hint: 'avoir in imparfait (avais) + choisi.',
            audio: 'J’avais choisi mon film préféré à l’âge de dix ans.',
            explain: 'j’avais choisi.',
            explainZh: '助动词 avoir 的未完成过去时 avais + 过去分词 choisi。'
          },
          {
            id: 'dt10b1_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tammy : Bette ___ avec Tex avant la fin de mes cours. (sortir — female!)',
            promptZh: 'Tex 原题 #2：在我下课之前，Bette（女）就已经和 Tex 一起出去了（sortir，用 être）：',
            answers: ['était sortie'],
            hint: 'sortir takes être; Bette = fem. sg. → était sortie (+e)!',
            audio: 'Bette était sortie avec Tex avant la fin de mes cours.',
            explain: 'était sortie (agrees with female Bette!).',
            explainZh: 'sortir 无直宾时用 être，且配合女性 Bette 加 -e → était sortie！'
          },
          {
            id: 'dt10b1_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Joe-Bob : Tex, tu ___ l’anglais avant ton arrivée à Austin, n’est-ce pas ? (apprendre)',
            promptZh: 'Tex 原题 #3：Tex，你来奥斯汀之前就已经学过英语了，对吧？（apprendre）：',
            answers: ['avais appris'],
            hint: 'tu avais + appris (from prendre → pris).',
            audio: 'Tu avais appris l’anglais avant ton arrivée à Austin ?',
            explain: 'tu avais appris.',
            explainZh: 'apprendre 的过去分词为 appris → avais appris。'
          },
          {
            id: 'dt10b1_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Les parents de Tex ___ sur l’autoroute pendant son absence. (mourir — plural!)',
            promptZh: 'Tex 原题 #4：在他离开期间，Tex 的父母在高速公路上去世了（mourir，用 être + 复数）：',
            answers: ['étaient morts'],
            hint: 'mourir → mort + être plural → étaient morts!',
            audio: 'Les parents de Tex étaient morts pendant son absence.',
            explain: 'Les parents (pl.) + mourir (être) → étaient morts.',
            explainZh: 'mourir 用 être，父母复数加 -s → étaient morts。'
          },
          {
            id: 'dt10b1_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Paw-Paw ___ amoureux avant la fin de la guerre. (tomber)',
            promptZh: 'Tex 原题 #5：战争结束前 Paw-Paw 就已经坠入爱河了（tomber）：',
            answers: ['était tombé'],
            hint: 'tomber takes être → était tombé.',
            audio: 'Paw-Paw était tombé amoureux avant la fin de la guerre.',
            explain: 'Paw-Paw (masc. sg.) → était tombé.',
            explainZh: 'tomber 是 Alamo 动词用 être → était tombé。'
          },
          {
            id: 'dt10b1_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Fiona : Corey et Joe-Bob, vous ___ deux examens au début du semestre ? (rater)',
            promptZh: 'Tex 原题 #6：你们在学期初就已经挂了两门考试吗？（rater，vous）：',
            answers: ['aviez raté'],
            hint: 'vous aviez + raté.',
            audio: 'Vous aviez raté deux examens au début du semestre ?',
            explain: 'vous aviez raté.',
            explainZh: 'vous 的愈过去时助动词 aviez + raté。'
          },
          {
            id: 'dt10b1_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: À la rentrée, Tammy et Fiona ___ tous les livres scolaires. (acheter)',
            promptZh: 'Tex 原题 #7：开学前，Tammy 和 Fiona 就已经买好所有课本了（acheter）：',
            answers: ['avaient acheté'],
            hint: 'elles avaient + acheté (no -es with avoir!).',
            audio: 'Tammy et Fiona avaient acheté tous les livres scolaires.',
            explain: 'avaient acheté (no agreement with subject when using avoir).',
            explainZh: 'avoir 助动词不配合主语 → avaient acheté。'
          },
          {
            id: 'dt10b1_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Dès 1990, Tex ___ les grandes œuvres de la littérature française. (lire)',
            promptZh: 'Tex 原题 #8：早在 1990 年，Tex 就已经读遍法国文学名著了（lire）：',
            answers: ['avait lu'],
            hint: 'lire → lu → avait lu.',
            audio: 'Dès 1990, Tex avait lu les grandes œuvres.',
            explain: 'avait lu.',
            explainZh: 'lire 的过去分词为 lu → avait lu。'
          },
          {
            id: 'dt10b1_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tammy : Tex et moi, nous ___ le bus avant l’éclat des orages. (prendre)',
            promptZh: 'Tex 原题 #9：暴风雨来临前我们已经乘上了公交车（prendre，nous）：',
            answers: ['avions pris'],
            hint: 'prendre → pris → avions pris.',
            audio: 'Nous avions pris le bus avant les orages.',
            explain: 'nous avions pris.',
            explainZh: 'nous avions pris。'
          },
          {
            id: 'dt10b1_d10',
            kind: 'fib',
            prompt: 'Tex Practice #11 (Body part exception in plus-que-parfait!): Trey ___ le bras plusieurs fois avant l’âge de 8 ans. (se casser)',
            promptZh: 'Tex 原题 #11：Trey 8 岁前就已经摔断过好几次胳膊了（se casser，注意后面有 le bras）：',
            answers: ["s'était cassé", 's’était cassé'],
            hint: 'se + était + cassé (le bras follows verb).',
            audio: 'Trey s’était cassé le bras plusieurs fois.',
            explain: 's’était cassé le bras.',
            explainZh: '代动词用 s’était cassé（且后面有直接宾语 le bras 不额外配合）。'
          },
          {
            id: 'dt10b1_d11',
            kind: 'fib',
            prompt: 'Tex Practice #12 (Negation!): Fiona ___ tant d’étudiants avant son arrivée à UT. (ne pas voir)',
            promptZh: 'Tex 原题 #12：来到德州大学前，Fiona 从来没见过这么多学生（否定愈过去时）：',
            answers: ["n'avait pas vu", 'n’avait pas vu'],
            hint: 'ne + avait + pas + vu.',
            audio: 'Fiona n’avait pas vu tant d’étudiants avant son arrivée.',
            explain: 'Negation wraps around auxiliary: n’avait pas vu.',
            explainZh: 'ne... pas 夹住助动词 avait → n’avait pas vu。'
          },
          {
            id: 'dt10b1_d12',
            kind: 'fib',
            prompt: 'Past wish ("If only"): Si seulement nous ___ nos billets plus tôt ! (réserver — nous)',
            promptZh: '遗憾过去愿望句：“要是我们当初早点订票就好了！”（nous + réserver）：',
            answers: ['avions réservé'],
            hint: 'Si seulement + plus-que-parfait → avions réservé!',
            audio: 'Si seulement nous avions réservé nos billets plus tôt !',
            explain: 'Regret about a past action uses "Si seulement + plus-que-parfait"!',
            explainZh: '对过去已不可挽回之事的遗憾，用 Si seulement + 愈过去时 → avions réservé。'
          }
        ],
        related: [
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_10', label: 'Back to 10A.10 PC vs. Imparfait' },
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_2', label: '10B.2 Passé Simple (Literary Past)' }
        ]
      },

      /* =========================================================
         PAGE 10B.2: PASSÉ SIMPLE (tap10)
      ========================================================= */
      {
        id: 't10b_2',
        code: '10B.2',
        group: 'Advanced Past',
        shortTitle: 'Passé Simple (Literary Recognition)',
        title: 'Le Passé Simple: Literary & Formal Past Recognition (+ Rita’s Cendrillon Story)',
        titleZh: '简单过去时（Passé simple）：阅读小说/新闻的识别法则、两大词尾系统与《灰姑娘》故事',
        estMin: 4,
        summary: 'Learn the PASSÉ SIMPLE — NOT for everyday conversation (where you always use Passé Composé!), but indispensable for reading French novels, fairy tales ("Il était une fois..."), newspapers, and history! Notice the single-word literary endings: (1) ALL -er verbs (+ aller): -ai, -as, -a, -âmes, -âtes, -èrent (especially 3rd sg. -a & pl. -èrent: "son père épousa... tout changea"); (2) Regular -ir/-re: -is, -is, -it, -îmes, -îtes, -irent ("Cendrillon entendit"); (3) Irregular -i- vs. -u- families: être → fut/furent, avoir → eut/eurent, faire → fit/firent, venir → vint/vinrent, mourir → mourut, naître → naquit.',
        summaryZh: '简单过去时（Passé simple）在日常聊天中**几乎从不用来开口说**（口语全用 Passé Composé），但在**读法语小说、童话、历史文章或高级新闻/TCF 阅读材料**时铺天盖地全都是它！掌握阅读识别的三个核心：① **第一组 `-er` 动词（含 `aller`）**：单数三格变 **`-a`**，复数三格变 **`-èrent`**（如 *son père épousa* / *ils parlèrent*）；② **第二、三组（-i- 族）**：`il` 变 **`-it`**，`ils` 变 **`-irent`**；③ **高频不规则（-u- 族与特例）**：`avoir → il **eut**`、`être → il **fut**`、`faire → il **fit**`、`mourir → il **mourut**`、`venir → il **vint**`、`naître → il **naquit**`（出现 `^` 的是 `nous/vous` 的 `-âmes/-îmes/-ûmes`）！',
        cheatSummary: [
          { label: 'Focus on 3rd-Person Literary Forms (90% of Texts!)', rule: '-er verbs: -a / -èrent ("changea / trouvèrent"). -ir/-re verbs: -it / -irent ("entendit / perdirent"). Irregular -u-: eut / furent / put / sut / mourut / vécut. Special: fut (être), fit (faire), vint (venir), naquit (naître)!', ruleZh: '阅读看懂 90% 只需盯紧第三人称单复数：-er 族认 -a / -èrent；-i- 族认 -it / -irent（fit, vit, naquit, ouvrit）；-u- 族认 -ut / -urent（eut, fut, put, dut, mourut, vécurent）！' },
          { label: 'Same Aspect Contrast as Passé Composé vs. Imparfait', rule: 'In stories: Imparfait paints the setting ("il était une fois... avait deux filles"), Passé Simple advances each plot step ("épousa... mourut... changea... fut invitée").', ruleZh: '在书面叙事里，Passé simple 就是 Passé composé 的“文学替身”：负责推进剧情，Imparfait 仍负责搭背景！' }
        ],
        sections: [
          {
            id: 't10b2_ps_grid',
            heading: '1. Passé Simple Endings & Key Literary Verbs',
            headingZh: '一、简单过去时三大变位模式与不规则高频表',
            lead: 'Remember: in a French novel, ANY weird-looking one-word verb ending in -a, -èrent, -it, -irent, -ut, or -urent (like "mourut", "fut", "se mit", "entendit") is simply a Passé Simple event — the literary twin of Passé Composé:',
            leadZh: '读懂下面两张表（尤其是 `être / avoir / faire / venir / naître / vivre` 的单复数），法语小说里的文学过去时一秒就能认出原型：',
            table: {
              headers: ['Group / Infinitive', '3rd Sg. (il/elle)', '3rd Pl. (ils/elles)', '1st Sg. / Pl. (je / nous)'],
              rows: [
                { cols: ['-er verbs (parler, aller)', 'parla · alla', 'parlèrent · allèrent', 'je parlai · nous parlâmes'], audio: 'Tout changea. Elles parlèrent ensemble.' },
                { cols: ['Regular -ir / -re (finir, perdre)', 'finit · perdit', 'finirent · perdirent', 'je finis · nous finîmes'], audio: 'Cendrillon entendit une voix. Ils perdirent.' },
                { cols: ['avoir · être · faire', 'eut · fut · fit', 'eurent · furent · firent', 'j’eus / je fus / je fis · nous fûmes'], audio: 'La famille fut invitée. Ils firent un bal.' },
                { cols: ['dire · mettre · prendre · voir', 'dit · mit · prit · vit', 'dirent · mirent · prirent · virent', 'je dis / mis / pris / vis'], audio: 'Elle se mit à pleurer. Il prit l’avion.' },
                { cols: ['naître · vivre · mourir', 'naquit · vécut · mourut', 'naquirent · vécurent · moururent', 'je naquis · il vécut · il mourut'], audio: 'Il naquit à Houston, vécut en France et mourut.' },
                { cols: ['pouvoir · savoir · vouloir · venir', 'put · sut · voulut · vint', 'purent · surent · voulurent · vinrent', 'je vins · nous vînmes · ils vinrent'], audio: 'Il vint en France et put vivre heureux.' }
              ]
            }
          },
          {
            id: 't10b2_cendrillon',
            heading: '2. Fairy Tale Reading: Rita’s Cendrillon Story',
            headingZh: '二、童话阅读实战：Rita 给孩子们讲《灰姑娘》（Cendrillon）',
            lead: 'Spot every Passé Simple event in Rita’s bedtime story ("épousa, mourut, changea, confia, força, organisa, fut invitée, se rendirent, défendirent, se mit, entendit") against the opening Imparfait background ("était, avait"):',
            leadZh: '看这段经典童话故事，体验 Imparfait（开头背景）如何自然切入 Passé simple（一连串情节发生）：',
            cartoon: {
              src: './assets/tex_cartoons/tap10_cendrillon.gif',
              alt: 'Rita lit l’histoire de Cendrillon aux enfants',
              caption: 'Il était une fois (Imparfait) Cendrillon... Son père épousa une veuve, mourut peu après ; tout changea et Cendrillon entendit sa marraine !',
              captionZh: '从前有个姑娘（Imparfait 背景）；父亲再婚（épousa）、不久去世（mourut）、一切巨变（changea）、仙女现身（entendit）！'
            },
            examples: [
              { fr: 'Il était une fois une ravissante jeune fille du nom de Cendrillon. Son père épousa une veuve qui avait deux filles.', en: 'était / avait (Imparfait scene) + épousa (Passé Simple plot event!)', zh: '“从前有……”（était）和“继母有两个女儿”（avait）用 Imparfait；父亲娶妻（épousa）用 Passé simple。', tag: 'Background vs. Plot' },
              { fr: 'Hélas, le brave homme mourut peu après. Un jour, le roi organisa un grand bal. La famille fut invitée.', en: 'mourut (from mourir), organisa (from organiser), fut invitée (passive of être!)', zh: 'mourut 是 mourir；fut invitée 是被动语态“被邀请”（即 a été invitée 的文学版）。', tag: 'Literary Passive' }
            ],
            quickCheck: {
              prompt: 'Look at the notorious look-alike pair in Passé Simple: "Il eut" vs. "Il fut" vs. "Il fit". Match each to its infinitive!',
              promptZh: '辨认文学时态最易混淆的三胞胎：`il eut` / `il fut` / `il fit` 分别来自哪个原型动词？',
              options: [
                'il eut = avoir · il fut = être · il fit = faire',
                'il eut = être · il fut = faire · il fit = avoir',
                'il eut = faire · il fut = avoir · il fit = finir',
                'il eut = aller · il fut = fuir · il fit = fixer'
              ],
              answerIdx: 0,
              explain: 'avoir → il eut (/il y/), être → il fut (/fy/), faire → il fit (/fi/) — memorizing these 3 unlocks half of French literature!',
              explainZh: '记牢这三组铁搭档：il eut（avoir）· il fut（être）· il fit（faire）！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10b2_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Des nonnes françaises ___ Tex à l’aéroport. (trouver — passé simple)',
            promptZh: 'Tex 原题 #1：几位法国修女在机场发现了 Tex（trouver，3 复数 -èrent）：',
            answers: ['trouvèrent'],
            hint: '3rd plural of -er verb = -èrent!',
            audio: 'Des nonnes françaises trouvèrent Tex à l’aéroport.',
            explain: 'trouver → elles trouvèrent.',
            explainZh: '第一组动词第三人称复数固定词尾：-èrent → trouvèrent。'
          },
          {
            id: 'dt10b2_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2 (Irregular!): Tex : Je ___ à Houston. (naître — passé simple)',
            promptZh: 'Tex 原题 #2：我出生在休斯顿（naître 的简单过去时词干 naqu-）：',
            answers: ['naquis'],
            hint: 'naître → je naquis (stem naqu- + -is)!',
            audio: 'Je naquis à Houston.',
            explain: 'naître has irregular passé simple stem "naqu-": je naquis, il naquit.',
            explainZh: '高频特例 naître：je naquis / il naquit！'
          },
          {
            id: 'dt10b2_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3 (Irregular!): Tex ___ en France. (vivre — passé simple)',
            promptZh: 'Tex 原题 #3：Tex 曾生活在法国（vivre，与过去分词 vécu 同词干）：',
            answers: ['vécut'],
            hint: 'vivre → vécu → il vécut!',
            audio: 'Tex vécut en France.',
            explain: 'vivre (vécu) → il vécut.',
            explainZh: 'vivre 词干 véc- + -ut → vécut。'
          },
          {
            id: 'dt10b2_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Paw-Paw : Nous ___ honte des soldats infidèles. (avoir — passé simple)',
            promptZh: 'Tex 原题 #4：我们曾为不忠的士兵感到羞愧（avoir，nous，记得长音符 û！）：',
            answers: ['eûmes'],
            hint: 'avoir → nous eûmes!',
            audio: 'Nous eûmes honte.',
            explain: 'avoir in passé simple (nous) = eûmes.',
            explainZh: 'avoir 简单过去时 nous 形式：eûmes。'
          },
          {
            id: 'dt10b2_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Paw-Paw : Nous ___ les premiers soldats américains à Paris. (être — passé simple)',
            promptZh: 'Tex 原题 #5：我们是首批进入巴黎的美国士兵（être，nous，记得长音符 û！）：',
            answers: ['fûmes'],
            hint: 'être → nous fûmes!',
            audio: 'Nous fûmes les premiers soldats américains à Paris.',
            explain: 'être (nous) = fûmes.',
            explainZh: 'être 简单过去时 nous 形式：fûmes。'
          },
          {
            id: 'dt10b2_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Paw-Paw et ses copains ___ la musique française. (aimer — passé simple)',
            promptZh: 'Tex 原题 #6：Paw-Paw 和他的战友们爱上了法国音乐（aimer，3 复数）：',
            answers: ['aimèrent'],
            hint: '-er 3rd pl. → aimèrent.',
            audio: 'Paw-Paw et ses copains aimèrent la musique française.',
            explain: 'ils aimèrent.',
            explainZh: 'ils aimèrent。'
          },
          {
            id: 'dt10b2_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tex et les nonnes ___ l’abbaye. (finir — passé simple)',
            promptZh: 'Tex 原题 #7：Tex 和修女们建造完工了修道院 / 完成了修道院的事（finir，3 复数）：',
            answers: ['finirent'],
            hint: 'Regular -ir 3rd pl. = -irent!',
            audio: 'Tex et les nonnes finirent l’abbaye.',
            explain: 'finir → ils finirent.',
            explainZh: '-ir 动词第三人称复数为 -irent → finirent。'
          },
          {
            id: 'dt10b2_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tammy ___ à Fort Worth. (grandir — passé simple)',
            promptZh: 'Tex 原题 #8：Tammy 在沃斯堡长大（grandir，3 单）：',
            answers: ['grandit'],
            hint: 'Regular -ir 3rd sg. = -it!',
            audio: 'Tammy grandit à Fort Worth.',
            explain: 'grandir → elle grandit.',
            explainZh: '-ir 动词第三人称单数 -it → grandit。'
          },
          {
            id: 'dt10b2_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tex : Je ___ les œuvres de Sartre à l’âge de 7 ans. (lire — passé simple)',
            promptZh: 'Tex 原题 #9：我七岁就读完了萨特的著作（lire，je）：',
            answers: ['lus'],
            hint: 'lire (lu) → je lus.',
            audio: 'Je lus les œuvres de Sartre à l’âge de sept ans.',
            explain: 'lire → je lus, il lut.',
            explainZh: 'lire 的简单过去时用 -u- 词尾：je lus。'
          },
          {
            id: 'dt10b2_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Rita et sa famille ___ Tex à l’aéroport. (perdre — passé simple)',
            promptZh: 'Tex 原题 #10：Rita 一家在机场把 Tex 弄丢了（perdre，3 复数）：',
            answers: ['perdirent'],
            hint: 'Regular -re 3rd pl. = -irent → perdirent.',
            audio: 'Rita et sa famille perdirent Tex à l’aéroport.',
            explain: 'perdre → ils perdirent.',
            explainZh: '规则 -re 第三人称复数为 -irent → perdirent。'
          },
          {
            id: 'dt10b2_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Rita : Mes parents ___ sur l’autoroute. (mourir — passé simple)',
            promptZh: 'Tex 原题 #11：我的父母死在了高速公路上（mourir，3 复数）：',
            answers: ['moururent'],
            hint: 'mourir → il mourut / ils moururent!',
            audio: 'Mes parents moururent sur l’autoroute.',
            explain: 'mourir uses -u- endings: moururent.',
            explainZh: 'mourir 词干 mour- + -urent → moururent。'
          },
          {
            id: 'dt10b2_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tex ___ un avion à Paris. (prendre — passé simple)',
            promptZh: 'Tex 原题 #12：Tex 搭飞机去了巴黎（prendre，3 单）：',
            answers: ['prit'],
            hint: 'prendre (pris) → il prit!',
            audio: 'Tex prit un avion à Paris.',
            explain: 'prendre → je pris, il prit.',
            explainZh: 'prendre 简单过去时三单：il prit。'
          }
        ],
        related: [
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_1', label: 'Back to 10B.1 Plus-que-parfait' },
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_3', label: '10B.3 Passé Antérieur' }
        ]
      },

      /* =========================================================
         PAGE 10B.3: PASSÉ ANTÉRIEUR (tap11)
      ========================================================= */
      {
        id: 't10b_3',
        code: '10B.3',
        group: 'Advanced Past',
        shortTitle: 'Passé Antérieur (Literary)',
        title: 'Le Passé Antérieur: Literary Equivalent of Plus-que-parfait (eut parlé / fut allé)',
        titleZh: '先过去时（Passé antérieur）：书面语中的“愈过去时”（aussitôt que / dès que / après que 从句）',
        estMin: 3,
        summary: 'Recognize the PASSÉ ANTÉRIEUR in formal & literary texts: it is simply the Passé Simple of AVOIR ("eus, eut, eûmes, eurent") or ÊTRE ("fus, fut, fûmes, furent") + Past Participle. It marks an action completed immediately BEFORE a Passé Simple main action, typically after time conjunctions: "aussitôt que", "dès que", "après que", or "quand / lorsque" ("Quand elle eut fini de nettoyer les fenêtres, elle fit les lits").',
        summaryZh: '先过去时（Passé antérieur）同样几乎**只用于书面文学作品与故事阅读**，它是愈过去时（Plus-que-parfait）在古典文学里的搭档：构成公式为 **`avoir / être 的简单过去时`（`eut / fut`）+ `过去分词`**。专门用在 **`aussitôt que`（一……就）、`dès que`（一……就）、`après que`、`quand / lorsque`** 引导的时间从句里，表示“做完这件事紧接着就做了另一件 Passé simple 的事”（例如灰姑娘“一擦完窗户，就开始铺床”）。',
        cheatSummary: [
          { label: 'Formula: Passé Simple Aux. (eut / fut) + PP', rule: 'avoir: j’eus, tu eus, il eut, nous eûmes, vous eûtes, ils eurent + PP. être: je fus, il fut, ils furent + PP (+ subject agreement! Note pronominals use être: "elle se fut levée").', ruleZh: '构成：助动词用简单过去时（eut / eurent 或 fut / furent）+ 过去分词；être 与代动词照例配合主语性数。' },
          { label: 'Typical Trigger Conjunctions', rule: 'Appears mainly after "aussitôt que, dès que, après que, quand, lorsque" paired with a Passé Simple main verb ("Dès qu’elle eut rangé la maison, sa marraine apparut").', ruleZh: '典型语境：紧跟在 dès que / aussitôt que / après que / quand / lorsque 后面，主句动词配 Passé simple（一旦先完成 A，紧接着发生 B）。' }
        ],
        sections: [
          {
            id: 't10b3_pa_grid',
            heading: '1. Literary Past-Before-Past + Cendrillon Part 2',
            headingZh: '一、先过去时结构与《灰姑娘》（下）擦窗做家务选段',
            lead: 'Look at Rita’s second Cendrillon excerpt: "Quand elle eut fini de nettoyer les fenêtres, elle fit les lits. Lorsque les chambres furent propres, elle fit la vaisselle. Après qu’elle eut rangé toute la maison, elle éclata en sanglots..." — notice how fast every "had finished" triggers the next step!',
            leadZh: '看《灰姑娘》第二段，两处先过去时（`eut fini` / `eut rangé`）紧接着引出主句的简单过去时（`fit` / `éclata`），节奏紧凑生动：',
            cartoon: {
              src: './assets/tex_cartoons/tap11_fenetres.gif',
              alt: 'Cendrillon eut fini de nettoyer les fenêtres avant de faire les lits',
              caption: 'Quand elle EUT FINI de nettoyer les fenêtres, elle FIT les lits. Après qu’elle EUT RANGÉ toute la maison, sa marraine APPARUT !',
              captionZh: '她刚把窗户擦完（eut fini，先过去时），就去铺了床（fit，简单过去时）；收拾完屋子，仙女教母出现啦！'
            },
            table: {
              headers: ['Auxiliary Type', 'Passé Antérieur Model', 'Prior-Action Literary Example'],
              rows: [
                { cols: ['avoir (eut / eurent)', 'j’eus parlé · il eut publié · ils eurent fini', 'Quand il eut publié son recueil, il y eut un grand scandale.'], audio: 'Quand il eut publié son recueil, il y eut un grand scandale.' },
                { cols: ['être (fut / furent)', 'je fus allé(e) · il fut né · ils furent venus', 'Aussitôt qu’il fut né, Tex commença à parler.'], audio: 'Aussitôt qu’il fut né, Tex commença à parler.' },
                { cols: ['Pronominal (se fut...)', 'je me fus couché(e) · elles se furent réveillées', 'Dès qu’elle se fut reposée, elle reprit la route.'], audio: 'Dès qu’elle se fut reposée, elle repartit.' }
              ]
            },
            examples: [
              { fr: 'Après qu’il eut vécu quelques années à Paris, Tex retourna dans son pays d’origine.', en: 'Prior completed living ("had lived") → eut vécu; subsequent return → retourna', zh: '在巴黎生活了几年之后（eut vécu），才回到故乡（retourna）。', tag: 'après que + PA' },
              { fr: 'Aussitôt qu’il fut né, Tex commença à parler !', en: 'As soon as he was born (had been born = fut né), he began speaking!', zh: '他一出生（fut né，使用 être）就开始说话啦！', tag: 'aussitôt que + PA' }
            ],
            quickCheck: {
              prompt: 'Recognize the verb and tense in this reading excerpt: "Dès qu’elles furent parties, la fête commença."',
              promptZh: '阅读辨识练习：在 “Dès qu’elles furent parties, la fête commença.” 中，“furent parties” 是什么动词、什么时态？',
              options: [
                'partir in Passé Antérieur ("as soon as they had left")',
                'partir in Plus-que-parfait',
                'parler in Future Perfect',
                'partir in Present Passive'
              ],
              answerIdx: 0,
              explain: 'furent (passé simple of être) + parties (fem. pl. PP of partir) = Passé Antérieur ("had left").',
              explainZh: 'furent 是 être 的简单过去时复数，加上 partir 阴性复数分词 parties，构成先过去时！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10b3_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Les nonnes françaises ___ au Texas. (voyager — passé antérieur)',
            promptZh: 'Tex 原题 #1：法国修女们此前去过德州旅行（voyager 用 avoir，3 复数）：',
            answers: ['eurent voyagé'],
            hint: 'avoir passé simple (elles eurent) + voyagé.',
            audio: 'Les nonnes eurent voyagé au Texas.',
            explain: 'elles eurent voyagé.',
            explainZh: '复数主语用 eurent + voyagé。'
          },
          {
            id: 'dt10b3_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tex ___ les œuvres de Sartre. (étudier — passé antérieur)',
            promptZh: 'Tex 原题 #2：Tex 事先读完了萨特的作品（étudier，3 单）：',
            answers: ['eut étudié'],
            hint: 'il eut + étudié.',
            audio: 'Tex eut étudié les œuvres de Sartre.',
            explain: 'il eut étudié.',
            explainZh: '三单填 eut étudié。'
          },
          {
            id: 'dt10b3_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Rita : Tu ___ tout seul. (partir — passé antérieur, address = male/masc. sg.)',
            promptZh: 'Tex 原题 #3：Rita 对男生说：“你早就独自离开了”（partir 用 être，tu）：',
            answers: ['fus parti'],
            hint: 'tu fus + parti (masculine sg.).',
            audio: 'Tu fus parti tout seul.',
            explain: 'tu fus parti.',
            explainZh: 'partir 用 être 的简单过去时 fus → fus parti。'
          },
          {
            id: 'dt10b3_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Tex : J’___ ma profession à l’âge de 6 ans. (choisir — passé antérieur)',
            promptZh: 'Tex 原题 #4：我六岁那会儿就已经选好了自己的职业（choisir，J’ + eus...）：',
            answers: ['eus choisi'],
            hint: 'j’eus + choisi.',
            audio: 'J’eus choisi ma profession à l’âge de six ans.',
            explain: 'j’eus choisi.',
            explainZh: 'j’eus choisi。'
          },
          {
            id: 'dt10b3_d5',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tex : Rita et Trey, vous ___ votre frère ! (oublier — passé antérieur, remember û!)',
            promptZh: 'Tex 原题 #6：Rita 和 Trey，你们早把哥哥忘了！（oublier，vous，记住长音符 û！）：',
            answers: ['eûtes oublié'],
            hint: 'vous eûtes (with circumflex û!) + oublié.',
            audio: 'Vous eûtes oublié votre frère !',
            explain: 'vous eûtes oublié.',
            explainZh: 'vous 助动词为 eûtes（必带长音符 û）+ oublié。'
          },
          {
            id: 'dt10b3_d6',
            kind: 'fib',
            prompt: 'Tex Practice #7: Les parents de Tex ___ amoureux à Houston. (tomber — passé antérieur)',
            promptZh: 'Tex 原题 #7：Tex 的父母在休斯顿坠入了爱河（tomber 用 être + 复数）：',
            answers: ['furent tombés'],
            hint: 'ils furent + tombés (+ -s!).',
            audio: 'Les parents de Tex furent tombés amoureux.',
            explain: 'tomber (être) + plural parents → furent tombés.',
            explainZh: 'tomber 是 être 动词，加复数 -s → furent tombés。'
          },
          {
            id: 'dt10b3_d7',
            kind: 'fib',
            prompt: 'Tex Practice #8: La mère supérieure ___ à Lyon pendant la guerre. (venir — passé antérieur, fem. sg.!)',
            promptZh: 'Tex 原题 #8：院长修女（女性）战争期间就已经来到里昂（venir，用 être 且配合阴性）：',
            answers: ['fut venue'],
            hint: 'elle fut + venue (+ -e!).',
            audio: 'La mère supérieure fut venue à Lyon pendant la guerre.',
            explain: 'La mère supérieure (fem.) → fut venue.',
            explainZh: '女性主语配合 -e → fut venue。'
          },
          {
            id: 'dt10b3_d8',
            kind: 'fib',
            prompt: 'Tex Practice #9: La mère supérieure ___ plusieurs orphelins. (élever)',
            promptZh: 'Tex 原题 #9：院长修女抚养了多名孤儿（élever 用 avoir）：',
            answers: ['eut élevé'],
            hint: 'élever takes avoir → eut élevé (no -e agreement).',
            audio: 'La mère supérieure eut élevé plusieurs orphelins.',
            explain: 'eut élevé.',
            explainZh: 'avoir 助动词不配合主语 → eut élevé。'
          },
          {
            id: 'dt10b3_d9',
            kind: 'fib',
            prompt: 'Tex Practice #10: Paw-Paw ___ la femme de sa vie à Paris. (connaître)',
            promptZh: 'Tex 原题 #10：Paw-Paw 在巴黎结识了毕生挚爱（connaître）：',
            answers: ['eut connu'],
            hint: 'connaître → connu → eut connu.',
            audio: 'Paw-Paw eut connu la femme de sa vie à Paris.',
            explain: 'eut connu.',
            explainZh: 'connaître 过去分词为 connu → eut connu。'
          },
          {
            id: 'dt10b3_d10',
            kind: 'fib',
            prompt: 'Tex Practice #11: Paw-Paw ___ héros de la guerre. (devenir — être)',
            promptZh: 'Tex 原题 #11：Paw-Paw 早已成了战争英雄（devenir 用 être）：',
            answers: ['fut devenu'],
            hint: 'devenir takes être → fut devenu.',
            audio: 'Paw-Paw fut devenu héros de la guerre.',
            explain: 'fut devenu.',
            explainZh: 'devenir 是 Alamo 动词 → fut devenu。'
          },
          {
            id: 'dt10b3_d11',
            kind: 'fib',
            prompt: 'Tex Practice #12: Les parents de Tex ___ sur l’autoroute. (mourir — plural être!)',
            promptZh: 'Tex 原题 #12：Tex 的父母在高速路上去世（mourir，复数）：',
            answers: ['furent morts'],
            hint: 'furent + morts.',
            audio: 'Les parents de Tex furent morts sur l’autoroute.',
            explain: 'furent morts.',
            explainZh: 'furent morts。'
          },
          {
            id: 'dt10b3_d12',
            kind: 'choice',
            prompt: 'In modern spoken French (if Rita told Cendrillon conversationally), what would replace "Quand elle eut fini, elle fit les lits"?',
            promptZh: '如果把书面语 “Quand elle eut fini, elle fit les lits.” 转化成日常现代法语口语讲述，应对应哪一组时态？',
            options: [
              'Quand elle avait fini, elle a fait les lits. (Plus-que-parfait + Passé Composé)',
              'Quand elle finira, elle fera les lits.',
              'Quand elle finissait, elle ferait les lits.',
              'Quand elle a fini, elle fit les lits.'
            ],
            answerIdx: 0,
            audio: 'Quand elle avait fini, elle a fait les lits.',
            explain: 'Passé antérieur = literary Plus-que-parfait; Passé simple = literary Passé composé!',
            explainZh: '牢记对应关系：先过去时（eut fini）↔ 口语愈过去时（avait fini）；简单过去时（fit）↔ 口语复合过去时（a fait）！'
          }
        ],
        related: [
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_2', label: 'Back to 10B.2 Passé Simple' },
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_4', label: '10B.4 Futur Proche (aller + inf.)' }
        ]
      },

      /* =========================================================
         PAGE 10B.4: FUTUR PROCHE (taf1)
      ========================================================= */
      {
        id: 't10b_4',
        code: '10B.4',
        group: 'Future Tenses',
        shortTitle: 'Futur Proche (aller + inf.)',
        title: 'Le Futur Proche: Immediate Future ("going to...") & Past-Future ("allait + infinitive")',
        titleZh: '最近将来时（Futur proche）：aller + 不定式（“马上就要”）与“当时正要（allait + 原形）”',
        estMin: 3,
        summary: 'Master the #1 spoken French future form: ALLER (present: "vais, vas, va, allons, allez, vont") + INFINITIVE ("Il va pleuvoir !", "Je vais nager"). Negation places ne... pas around ALLER ("Je ne vais pas nager"). And shift ALLER into the Imparfait ("allais, allait, allions, alliez, allaient + infinitive") to say someone WAS GOING TO do something right before an interruption ("Les copains allaient partir quand ils ont vu un éclair")!',
        summaryZh: '日常说法国、魁北克口语里使用率最高的将来时就是**最近将来时（Futur proche）**：**`aller（现在时：vais, vas, va, allons, allez, vont）+ 动词原形`**！否定形式把 `ne... pas` 夹在变位的 `aller` 两边（`Je ne vais pas nager`），反身/宾语代词放**不定式前**（`Tu vas **te** faire électrocuter`）。再加分一招：把 `aller` 变成**未完成过去时（`allait + 原形`）**，即可表示“当时正准备去做某事（结果被闪电/电话打断了）”！',
        cheatSummary: [
          { label: 'Present + Imparfait Forms of aller + Infinitive', rule: 'NEAR FUTURE: je vais, tu vas, il va, nous allons, vous allez, ils vont + INF ("Il va pleuvoir"). PAST INTENTION ("was going to..."): j’allais, il allait, nous allions, ils allaient + INF ("Ils allaient partir quand...").', ruleZh: '近将来：je vais / tu vas / il va / nous allons / vous allez / ils vont + 原形；过去未遂意图（当时正打算）：allais / allait / allions / allaient + 原形！' },
          { label: 'Negation & Pronouns Rule', rule: 'Negation brackets "aller" ("Je ne vais pas nager"). Reflexive or object pronouns stand directly BEFORE the INFINITIVE ("Tu vas te faire électrocuter", "Nous allons nous promener").', ruleZh: '两个固定位置：① ne... pas 夹住 aller（不夹后面的原形）；② 反身/宾语代词紧贴不定式前面（Tu vas **te** faire…）。' }
        ],
        sections: [
          {
            id: 't10b4_fp',
            heading: '1. Going to Swim & "Was Going to Leave" Dialogue',
            headingZh: '一、近将来时对话与“当时正准备出发”表达',
            lead: 'Listen to Corey, Bette, Tex, and Tammy planning a swim at Barton Springs — watch how "va pleuvoir", "ne vais pas nager", "allaient partir", and "vas te faire électrocuter" work in real conversation:',
            leadZh: '看 Bette 嫌冷劝退、大乌云飘来准备下大雨时大家的话，一次练会否定和反身代词位置：',
            cartoon: {
              src: './assets/tex_cartoons/taf1_pleuvoir.gif',
              alt: 'Il va pleuvoir à Barton Springs',
              caption: 'Bette : Il y a de gros nuages gris, il va pleuvoir ! Tu vas te faire électrocuter ! — Les copains allaient partir quand ils ont vu un éclair.',
              captionZh: '乌云压顶，马上要下雨了（il va pleuvoir）！小心被雷劈（tu vas te faire électrocuter）！大家正准备走时看见了闪电（allaient partir）。'
            },
            table: {
              headers: ['Pattern', 'Conjugation + Infinitive', 'Example'],
              rows: [
                { cols: ['Affirmative Futur Proche', 'vais, vas, va, allons, allez, vont + INF', 'Il va pleuvoir. · Je vais nager sous la pluie.'], audio: 'Il va pleuvoir. Je vais nager sous la pluie.' },
                { cols: ['Negative Futur Proche', 'ne + aller + pas + INF', 'Je ne vais pas nager ! · Tex ne va pas oublier.'], audio: 'Je ne vais pas nager ! Il fait trop froid.' },
                { cols: ['With Pronominal / COD', 'aller + pronoun + INF', 'Tu vas te faire électrocuter !'], audio: 'Tu vas te faire électrocuter !' },
                { cols: ['Past Intention ("was going to")', 'allais/allait/allions/allaient + INF', 'Les copains allaient partir quand ils ont vu un éclair.'], audio: 'Les copains allaient partir quand ils ont vu un éclair.' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'dt10b4_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Corey : Je ne sors pas ce soir. Je ___ à la maison. (rester — futur proche)',
            promptZh: 'Tex 原题 #1：我今晚不出门，打算待在家里（rester，je）：',
            answers: ['vais rester'],
            hint: 'je vais + rester.',
            audio: 'Je vais rester à la maison.',
            explain: 'je vais rester.',
            explainZh: 'je vais rester。'
          },
          {
            id: 'dt10b4_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tammy : Nous avons un examen demain. Nous ___ ce soir. (étudier — futur proche)',
            promptZh: 'Tex 原题 #2：我们明天有考试，今晚我们要学习（étudier，nous）：',
            answers: ['allons étudier'],
            hint: 'nous allons + étudier.',
            audio: 'Nous allons étudier ce soir.',
            explain: 'nous allons étudier.',
            explainZh: 'nous allons étudier。'
          },
          {
            id: 'dt10b4_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tex et Tammy ___ en France cet été. (voyager — futur proche)',
            promptZh: 'Tex 原题 #3：Tex 和 Tammy 今年夏天打算去法国旅游（voyager，3 复数）：',
            answers: ['vont voyager'],
            hint: 'ils vont + voyager.',
            audio: 'Tex et Tammy vont voyager en France cet été.',
            explain: 'ils vont voyager.',
            explainZh: 'vont voyager。'
          },
          {
            id: 'dt10b4_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Fiona : J’ai besoin d’argent. Je ___ cet automne. (travailler — futur proche)',
            promptZh: 'Tex 原题 #4：我需要挣钱，这个秋天我要去打工（travailler，je）：',
            answers: ['vais travailler'],
            hint: 'je vais travailler.',
            audio: 'Je vais travailler cet automne.',
            explain: 'je vais travailler.',
            explainZh: 'vais travailler。'
          },
          {
            id: 'dt10b4_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Joe-Bob : J’ai faim. Est-ce qu’on ___ bientôt ? (manger — futur proche)',
            promptZh: 'Tex 原题 #5：我饿啦，我们一会儿就吃饭吗？（manger，on）：',
            answers: ['va manger'],
            hint: 'on va manger.',
            audio: 'Est-ce qu’on va manger bientôt ?',
            explain: 'on va manger.',
            explainZh: 'on 配 va → va manger。'
          },
          {
            id: 'dt10b4_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Il y a du soleil. Il ___ chaud. (faire — futur proche)',
            promptZh: 'Tex 原题 #6：出太阳了，天马上会暖和起来（faire，il）：',
            answers: ['va faire'],
            hint: 'il va faire.',
            audio: 'Il va faire chaud.',
            explain: 'il va faire chaud.',
            explainZh: 'il va faire。'
          },
          {
            id: 'dt10b4_d7',
            kind: 'fib',
            prompt: 'Tex Practice #8: Edouard ___ un pique-nique pour ses amis. (préparer — futur proche)',
            promptZh: 'Tex 原题 #8：Edouard 要为朋友们准备一次野餐（préparer，3 单）：',
            answers: ['va préparer'],
            hint: 'il va préparer.',
            audio: 'Edouard va préparer un pique-nique.',
            explain: 'va préparer.',
            explainZh: 'va préparer。'
          },
          {
            id: 'dt10b4_d8',
            kind: 'fib',
            prompt: 'Tex Practice #9 (Negation!): C’est la Saint-Valentin, et Tex ___ d’acheter une carte. (ne pas oublier — futur proche)',
            promptZh: 'Tex 原题 #9：情人节快到了，Tex 才不会忘了买贺卡呢（否定近将来时：ne va pas...）：',
            answers: ['ne va pas oublier'],
            hint: 'ne + va + pas + oublier!',
            audio: 'Tex ne va pas oublier d’acheter une carte.',
            explain: 'Negation brackets "va": ne va pas oublier.',
            explainZh: 'ne... pas 夹在 va 两边：ne va pas oublier。'
          },
          {
            id: 'dt10b4_d9',
            kind: 'fib',
            prompt: 'Tex Practice #11: Fiona : Est-ce que vous ___ des amis ? (emmener — futur proche)',
            promptZh: 'Tex 原题 #11：你们打算带几个朋友一起来吗？（emmener，vous）：',
            answers: ['allez emmener'],
            hint: 'vous allez + emmener.',
            audio: 'Est-ce que vous allez emmener des amis ?',
            explain: 'allez emmener.',
            explainZh: 'vous 变位 allez emmener。'
          },
          {
            id: 'dt10b4_d10',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tex, pourquoi est-ce que tu ___ en France cet été ? (voyager — futur proche)',
            promptZh: 'Tex 原题 #12：Tex，今年夏天你为什么又要飞去法国旅游呀？（voyager，tu）：',
            answers: ['vas voyager'],
            hint: 'tu vas + voyager.',
            audio: 'Pourquoi est-ce que tu vas voyager en France ?',
            explain: 'tu vas voyager.',
            explainZh: 'tu 对应 vas → vas voyager。'
          },
          {
            id: 'dt10b4_d11',
            kind: 'fib',
            prompt: 'Past intention ("was going to"): Nous ___ sortir quand il a commencé à pleuvoir ! (aller + sortir in imparfait)',
            promptZh: '过去未遂打算：“刚才我们**正准备**出门呢，结果开始下雨了！”（nous，aller 用 Imparfait + 原形 sortir）：',
            answers: ['allions sortir'],
            hint: 'Imparfait of aller for nous (allions) + sortir!',
            audio: 'Nous allions sortir quand il a commencé à pleuvoir !',
            explain: 'allions sortir = were going to go out.',
            explainZh: '用 aller 的未完成过去时 allions + sortir 表示“当时正要出门”。'
          },
          {
            id: 'dt10b4_d12',
            kind: 'choice',
            prompt: 'Word order with negative pronominal in futur proche: "He is not going to get up early."',
            promptZh: '带有反身代词的否定近将来时：“他明天不打算早起（se lever）”哪句语序正确？',
            options: [
              'Il ne va pas se lever tôt.',
              'Il ne se va pas lever tôt.',
              'Il va ne pas se lever tôt.',
              'Il ne va se lever pas tôt.'
            ],
            answerIdx: 0,
            audio: 'Il ne va pas se lever tôt.',
            explain: 'ne... pas brackets ONLY "va", while reflexive "se" sits right before infinitive "lever": ne va pas se lever!',
            explainZh: 'ne... pas 夹住 va，反身代词 se 紧跟不定式 lever 前面 → Il ne va pas se lever tôt.！'
          }
        ],
        related: [
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_3', label: 'Back to 10B.3 Passé Antérieur' },
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_5', label: '10B.5 Futur Simple: Regular Forms' }
        ]
      },

      /* =========================================================
         PAGE 10B.5: SIMPLE FUTURE — REGULAR STEMS (taf2)
      ========================================================= */
      {
        id: 't10b_5',
        code: '10B.5',
        group: 'Future Tenses',
        shortTitle: 'Futur Simple: Regular',
        title: 'Le Futur Simple (1): Infinitive Stem (-r) + Endings (-ai, -as, -a, -ons, -ez, -ont)',
        titleZh: '简单将来时（上）：规则词干构成（直接加词尾 / -re 去 -e）、六个人称词尾与常见“半规则”动词',
        estMin: 3,
        summary: 'Master the simple future (le futur simple — "will do"): (1) ENDINGS (identical for EVERY verb in French, derived from avoir!): -ai, -as, -a, -ons, -ez, -ont; (2) REGULAR STEMS: keep the full infinitive for -er and -ir verbs ("je nagerai", "je réfléchirai"), and drop ONLY the final "-e" on -re verbs ("rendre → je rendrai"); (3) BONUS SHORTCUT: many verbs that are irregular in the present tense (sortir, partir, dormir, boire, dire, écrire, lire, mettre, prendre, suivre) use their REGULAR infinitive (-re minus -e) as their future stem ("je partirai, je boirai, j’écrirai, je prendrai")!',
        summaryZh: '简单将来时（Futur simple）只用一个单词表达英语的 *will do*！记住超清晰的规律：① **全法语所有动词共享完全同一套词尾**（跟 `avoir` 现在时几乎一致）：**`-ai, -as, -a, -ons, -ez, -ont`**（词干结尾永远带一个 **`r`**！）；② **规则词干**：`-er` 和 `-ir` 动词**直接拿整个不定式当词干**（如 *je nagerai, je réfléchirai*），`-re` 动词只需**去掉末尾 `-e`**（*rendre → je rendrai*）；③ **好消息**：很多现在时不规则的动词（`sortir, partir, dormir, boire, dire, écrire, lire, mettre, prendre, suivre`），将来时竟然**完全规则**！',
        cheatSummary: [
          { label: 'Universal Future Endings (-r + avoir-style endings)', rule: '-ai, -as, -a, -ons, -ez, -ont (Notice: je = -ai, tu = -as, il = -a, nous = -ons, vous = -ez, ils = -ont!). Watch silent e in je nagerai / parlerai.', ruleZh: '将来时六大词尾永不变：-rai, -ras, -ra, -rons, -rez, -ront！（注意区分 je 结尾 -ai 与未完成过去时 -ais 的发音/拼写）。' },
          { label: 'Present Irregulars That Are REGULAR in Future!', rule: 'sortir → sortirai · partir → partirai · dormir → dormirai · boire → boirai · dire → dirai · écrire → écrirai · lire → lirai · mettre → mettrai · prendre → prendrai · suivre → suivrai! Also préférer/manger/commencer stay regular!', ruleZh: '超级减负清单：boire→boirai, lire→lirai, dire→dirai, écrire→écrirai, mettre→mettrai, prendre→prendrai, partir→partirai, dormir→dormirai, suivre→suivrai 全都直接按规则取词干！' }
        ],
        sections: [
          {
            id: 't10b5_reg_fut',
            heading: '1. Endings, Regular Stems & Tammy’s Paris Honeymoon',
            headingZh: '一、简单将来时词尾表与 Tammy 的巴黎蜜月畅想',
            lead: 'Read Tammy dreaming out loud about her honeymoon with Tex ("Nous prendrons le Concorde... On restera... Nous mangerons... Nous flânerons... Tu m’offriras... Nous descendrons...") — notice every single verb ends with the unmistakable "-r-" future sound:',
            leadZh: '看 Tammy 幻想自己跟 Tex 坐协和飞机去巴黎度蜜月的长篇大论，感受一连串干净利落的简单将来时：',
            cartoon: {
              src: './assets/tex_cartoons/taf2_concorde.gif',
              alt: 'Tammy imagine sa lune de miel à Paris en Concorde',
              caption: 'Tammy : Nous prendrons le Concorde, on restera dans un hôtel chic, tu m’offriras du parfum et nous descendrons la Seine !',
              captionZh: '我们将坐协和号飞巴黎（prendrons）、住精品酒店（resteras/restera）、在塞纳河夜游（descendrons）！'
            },
            table: {
              headers: ['Verb Group', 'Future Stem', 'Conjugation Model (je / nous / ils)'],
              rows: [
                { cols: ['-er: nager · chanter · voyager', 'infinitive (nager-, chanter-, voyager-)', 'je nagerai · nous voyagerons · ils chanteront'], audio: 'Nous voyagerons beaucoup. Je nagerai demain.' },
                { cols: ['-ir: réfléchir · finir · dormir · partir', 'infinitive (réfléchir-, finir-, dormir-)', 'je réfléchirai · il finira · ils dormiront'], audio: 'Elle finira ses études. Nous partirons ensemble.' },
                { cols: ['-re (drop final -e): rendre · prendre · mettre', 'infinitive minus -e (rendr-, prendr-, mettr-)', 'je rendrai · tu mettras · nous prendrons'], audio: 'Nous prendrons le Concorde. Tu mettras la table.' },
                { cols: ['write / read / drink: écrire · lire · boire · suivre', 'écrir- · lir- · boir- · suivr-', 'j’écrirai · on lira · ils suivront'], audio: 'J’écrirai un livre. Il suivra des cours faciles.' }
              ]
            },
            examples: [
              { fr: 'Nous prendrons le Concorde à Paris, on restera dans un hôtel trois étoiles et tu m’offriras des fleurs.', en: 'prendre (-re → prendr-), rester (rester-), offrir (offrir-)', zh: 'prendre 去掉 e 加 -ons → prendrons；rester 和 offrir 直接整个原形加词尾。', tag: 'Honeymoon Plan' },
              { fr: 'je parlerai vs. je parlerais (Future -ai vs. Conditional -ais!)', en: 'Watch spelling: Future ends in -ai / -ons / -ez; Conditional uses Imparfait endings (-ais / -ions / -iez)!', zh: '预告区分：将来时 je 结尾是 -ai，条件式 je 结尾是 -ais！发音在标准法语也常略不同。', tag: 'Future vs. Cond.' }
            ],
            quickCheck: {
              prompt: 'What is the correct Futur Simple stem of "prendre" and "écrire" for "ils"?',
              promptZh: '动词 prendre（拿）和 écrire（写）在简单将来时里的第三人称复数（ils）怎么写？',
              options: [
                'ils prendront · ils écriront (infinitive minus -e + -ont)',
                'ils prennent · ils écrivent',
                'ils prendront · ils écrireont',
                'ils prenront · ils écriront'
              ],
              answerIdx: 0,
              explain: '-re verbs simply drop ONLY the final -e before adding future endings: prendr- + ont = prendront; écrir- + ont = écriront!',
              explainZh: '-re 动词只需划掉末尾一个字母 -e（prendr- / écrir-），保留 d/r，加上 -ont → prendront / écriront！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10b5_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex et Tammy ___ ensemble. (partir — futur simple)',
            promptZh: 'Tex 原题 #1：Tex 和 Tammy 将一起出发（partir，3 复数）：',
            answers: ['partiront'],
            hint: 'partir + -ont = partiront.',
            audio: 'Tex et Tammy partiront ensemble.',
            explain: 'partir is regular in future: partiront.',
            explainZh: 'partir 将来时完全规则：partiront。'
          },
          {
            id: 'dt10b5_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tammy ___ ses études. (finir — futur simple)',
            promptZh: 'Tex 原题 #2：Tammy 将完成她的学业（finir，3 单）：',
            answers: ['finira'],
            hint: 'finir + -a = finira.',
            audio: 'Tammy finira ses études.',
            explain: 'elle finira.',
            explainZh: '直接加词尾 -a → finira。'
          },
          {
            id: 'dt10b5_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tammy : J’___ un livre. (écrire — futur simple)',
            promptZh: 'Tex 原题 #3：我要写一本书（écrire，je）：',
            answers: ['écrirai'],
            hint: 'écrire minus -e = écrir- + -ai = écrirai.',
            audio: 'J’écrirai un livre.',
            explain: 'j’écrirai.',
            explainZh: '-re 去 e 加 -ai → écrirai。'
          },
          {
            id: 'dt10b5_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Tammy : Je ___ les habitudes de Tex. (comprendre — futur simple)',
            promptZh: 'Tex 原题 #4：我会理解 Tex 的生活习惯（comprendre，je）：',
            answers: ['comprendrai'],
            hint: 'comprendr- + -ai = comprendrai.',
            audio: 'Je comprendrai les habitudes de Tex.',
            explain: 'je comprendrai.',
            explainZh: 'comprendre 去 e 加 ai → comprendrai。'
          },
          {
            id: 'dt10b5_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tammy : Tex et moi, nous ___ beaucoup. (voyager — futur simple)',
            promptZh: 'Tex 原题 #5：Tex 和我以后要多多旅行（voyager，nous，不用加额外 e）：',
            answers: ['voyagerons'],
            hint: 'voyager + -ons = voyagerons.',
            audio: 'Tex et moi, nous voyagerons beaucoup.',
            explain: 'nous voyagerons.',
            explainZh: '完整原形 voyager + -ons → voyagerons。'
          },
          {
            id: 'dt10b5_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tex : Mes neveux, vous ___ la philosophie ! (aimer — futur simple)',
            promptZh: 'Tex 原题 #6：我的侄子们，你们以后会爱上哲学的！（aimer，vous）：',
            answers: ['aimerez'],
            hint: 'aimer + -ez = aimerez.',
            audio: 'Vous aimerez la philosophie !',
            explain: 'vous aimerez.',
            explainZh: 'aimer + -ez → aimerez。'
          },
          {
            id: 'dt10b5_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tammy : Tex, tu ___ la table, n’est-ce pas ? (mettre — futur simple)',
            promptZh: 'Tex 原题 #7：Tex，你会摆餐桌的，对吧？（mettre，tu，保留两个 t）：',
            answers: ['mettras'],
            hint: 'mettre minus -e = mettr- + -as = mettras!',
            audio: 'Tex, tu mettras la table, n’est-ce pas ?',
            explain: 'tu mettras (keeps double t!).',
            explainZh: 'mettr- 保留双写 t，tu 加 -as → mettras！'
          },
          {
            id: 'dt10b5_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tammy ___ sans cesse. (chanter — futur simple)',
            promptZh: 'Tex 原题 #8：Tammy 会不停地唱歌（chanter，3 单）：',
            answers: ['chantera'],
            hint: 'chanter + -a = chantera.',
            audio: 'Tammy chantera sans cesse.',
            explain: 'elle chantera.',
            explainZh: 'chantera。'
          },
          {
            id: 'dt10b5_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Joe-Bob ___ des cours faciles. (suivre — futur simple)',
            promptZh: 'Tex 原题 #9：Joe-Bob 将会选修很轻松的课（suivre，3 单）：',
            answers: ['suivra'],
            hint: 'suivre minus -e = suivr- + -a = suivra.',
            audio: 'Joe-Bob suivra des cours faciles.',
            explain: 'il suivra.',
            explainZh: 'suivr- + a → suivra。'
          },
          {
            id: 'dt10b5_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tex : Bette, est-ce que tu ___ Tammy ? (respecter — futur simple)',
            promptZh: 'Tex 原题 #10：Bette，以后你会尊重 Tammy 吗？（respecter，tu）：',
            answers: ['respecteras'],
            hint: 'tu respecteras (-as!).',
            audio: 'Bette, est-ce que tu respecteras Tammy ?',
            explain: 'tu respecteras.',
            explainZh: 'tu 结尾必带 -s → respecteras。'
          },
          {
            id: 'dt10b5_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Joe-Bob ___ pendant quatre jours. (dormir — futur simple)',
            promptZh: 'Tex 原题 #11：Joe-Bob 将会一睡睡四天（dormir，3 单）：',
            answers: ['dormira'],
            hint: 'dormir + -a = dormira.',
            audio: 'Joe-Bob dormira pendant quatre jours.',
            explain: 'dormira.',
            explainZh: 'dormira。'
          },
          {
            id: 'dt10b5_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tammy et Bette ___. (se téléphoner — futur simple)',
            promptZh: 'Tex 原题 #12：Tammy 和 Bette 以后会互相打电话（se téléphoner，3 复数）：',
            answers: ['se téléphoneront'],
            hint: 'elles se + téléphoner + -ont.',
            audio: 'Tammy et Bette se téléphoneront.',
            explain: 'se téléphoneront.',
            explainZh: '反身代词 se + téléphoneront。'
          }
        ],
        related: [
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_4', label: 'Back to 10B.4 Futur Proche' },
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_6', label: '10B.6 Futur Simple: Irregular Stems' }
        ]
      },

      /* =========================================================
         PAGE 10B.6: SIMPLE FUTURE — IRREGULAR STEMS (taf3)
      ========================================================= */
      {
        id: 't10b_6',
        code: '10B.6',
        group: 'Future Tenses',
        shortTitle: 'Futur Simple: 17 Irregular Stems',
        title: 'Le Futur Simple (2): 17 High-Frequency Irregular Stems & Boot-Stem Verbs (appeler / acheter)',
        titleZh: '简单将来时（下）：17 个必背不规则词干与拼写变调动词（appeler / acheter / employer）',
        estMin: 4,
        summary: 'Master ALL irregular future stems — remember the endings ALWAYS stay -ai, -as, -a, -ons, -ez, -ont! Key irregulars: être → ser- ("je serai"), avoir → aur- ("j’aurai"), aller → ir- ("j’irai"), faire → fer- ("je ferai"), pouvoir → pourr- (double r!), courir → courr-, mourir → mourr-, voir → verr-, envoyer → enverr-, savoir → saur-, devoir → devr-, recevoir → recevr-, vouloir → voudr-, falloir → faudr- ("il faudra"), pleuvoir → pleuvr- ("il pleuvra"), venir/tenir → viendr-/tiendr-. Also notice boot spelling verbs build their future stem from the present "je" form + r ("j’appellerai, j’achèterai, j’emploierai")!',
        summaryZh: '攻克简单将来时不规则家族：**六个人称词尾（-ai, -as, -a, -ons, -ez, -ont）一个都不变**，只换掉前面的词干（而且将来时词干也同时是后面条件式的词干，背一次管两个时态！）：① 核心四大天王：`être → ser-`、`avoir → aur-`、`aller → ir-`、`faire → fer-`；② 双写 **rr** 族：`pouvoir → pourr-`、`voir → verr-`、`envoyer → enverr-`、`courir → courr-`、`mourir → mourr-`；③ **dr / vr** 族：`venir → viendr-`、`tenir → tiendr-`、`vouloir → voudr-`、`falloir → faudr-`、`devoir → devr-`、`recevoir → recevr-`、`savoir → saur-`、`pleuvoir → pleuvr-`；④ 另外 **`appeler / acheter / employer`** 拿现在时 `je` 的形式加 `-r`（`j’appellerai, j’achèterai, j’emploierai`）！',
        cheatSummary: [
          { label: 'Core Irregular Stems (Same Stems Used for Conditional!)', rule: 'être→ser-, avoir→aur-, aller→ir-, faire→fer-, savoir→saur-, pouvoir→pourr-, voir→verr-, envoyer→enverr-, courir→courr-, mourir→mourr-, vouloir→voudr-, falloir→faudr-, devoir→devr-, recevoir→recevr-, pleuvoir→pleuvr-, venir→viendr-, tenir→tiendr-.', ruleZh: '将来时+条件式共用词干速记：ser / aur / ir / fer / saur；双 r：pourr / verr / enverr / courr / mourr；dr/vr：viendr / tiendr / voudr / faudr / devr / recevr / pleuvr！' },
          { label: 'Present Boot Stem Shortcut (appeler / acheter / employer)', rule: 'Use the present "je" form + "-r": j’appelle → j’appellerai; j’achète → j’achèterai; j’emploie → j’emploierai.', ruleZh: '双写/变音调 -er 动词（appeler, acheter, employer）：直接拿现在时第一人称单数加 r → j’appellerai / j’achèterai / j’emploierai！' }
        ],
        sections: [
          {
            id: 't10b6_irreg_fut',
            heading: '1. All 17 Irregular Stems & Tammy’s Year-3000 Sci-Fi Novel',
            headingZh: '一、17 个核心不规则将来时词干与《公元 3000 年》科幻选段',
            lead: 'Read Tammy’s gloomy sci-fi preview — packed cleanly with "pleuvra, aura, mourront, deviendra, iront, devront, seront, voudra":',
            leadZh: '看 Tammy 写的那本被 Tex 吐槽的公元 3000 年科幻小说，八大不规则词干一口气全部登场：',
            cartoon: {
              src: './assets/tex_cartoons/taf3_lune.gif',
              alt: 'En l’an 3000, certains iront vivre sur la Lune',
              caption: 'En l’an 3000, il ne pleuvra plus ! Tout le monde aura peur, certains iront sur la Lune et les autres devront vivre sur Mars !',
              captionZh: '公元 3000 年不再下雨（pleuvra）、人人惊恐（aura）、有人飞去月球（iront）、其他人只得移居火星（devront）！'
            },
            table: {
              headers: ['Group', 'Infinitive → Future Stem', '1st Sg. / 3rd Sg. / 3rd Pl.'],
              rows: [
                { cols: ['Core 4', 'être (ser-) · avoir (aur-) · aller (ir-) · faire (fer-)', 'je serai · j’aurai · tu iras · il fera'], audio: 'Je serai là. J’aurai le temps. Tu iras et il fera beau.' },
                { cols: ['Double -rr- Family', 'pouvoir (pourr-) · voir (verr-) · envoyer (enverr-) · courir (courr-) · mourir (mourr-)', 'je pourrai · on verra · j’enverrai · ils mourront'], audio: 'Je pourrai venir. Tu verras. Des gens mourront.' },
                { cols: ['-dr- & -vr- Verbs', 'vouloir (voudr-) · falloir (faudr-) · venir (viendr-) · tenir (tiendr-)', 'il voudra · il faudra · ils viendront · tu obtiendras'], audio: 'Il faudra partir. Elle viendra demain.' },
                { cols: ['savoir / devoir / recevoir / pleuvoir', 'saur- · devr- · recevr- · pleuvr-', 'tu sauras · ils devront · je recevrai · il pleuvra'], audio: 'Tu sauras tout. Ils devront partir. Il ne pleuvra plus.' },
                { cols: ['Boot-stem -er', 'appeler → appeller- · acheter → achèter- · employer → emploier-', 'j’appellerai · tu achèteras · j’emploierai'], audio: 'Tu achèteras trop de vêtements. Je t’appellerai.' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'dt10b6_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex et Tammy ___ la Tour Eiffel. (voir — futur simple)',
            promptZh: 'Tex 原题 #1：Tex 和 Tammy 将去看埃菲尔铁塔（voir，3 复数，双写 rr！）：',
            answers: ['verront'],
            hint: 'voir stem = verr- (double r!) + -ont = verront.',
            audio: 'Tex et Tammy verront la Tour Eiffel.',
            explain: 'voir → ils verront (double r!).',
            explainZh: 'voir 词干为 verr-（两个 r），加 -ont → verront。'
          },
          {
            id: 'dt10b6_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tammy ___ toujours la cuisine. (faire — futur simple)',
            promptZh: 'Tex 原题 #2：Tammy 将永远包揽做饭（faire，3 单）：',
            answers: ['fera'],
            hint: 'faire stem = fer- + -a = fera.',
            audio: 'Tammy fera toujours la cuisine.',
            explain: 'faire → fera.',
            explainZh: 'faire 将来时词干为 fer- → fera。'
          },
          {
            id: 'dt10b6_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Paw-Paw : Je ___ tout seul à Opelousas. (mourir — futur simple)',
            promptZh: 'Tex 原题 #3：我会一个人孤零零死在 Opelousas（mourir，je，双写 rr！）：',
            answers: ['mourrai'],
            hint: 'mourir stem = mourr- (double r!) + -ai = mourrai.',
            audio: 'Je mourrai tout seul à Opelousas.',
            explain: 'mourir → je mourrai (pronounced with double/clear r).',
            explainZh: 'mourir 双写 rr 词干 mourr- → mourrai。'
          },
          {
            id: 'dt10b6_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Tex : J’___ beaucoup d’admirateurs. (avoir — futur simple)',
            promptZh: 'Tex 原题 #4：我将拥有一大批粉丝（avoir，j’）：',
            answers: ['aurai'],
            hint: 'avoir → j’aurai.',
            audio: 'J’aurai beaucoup d’admirateurs.',
            explain: 'avoir → aurai.',
            explainZh: 'avoir 词干 aur- → aurai。'
          },
          {
            id: 'dt10b6_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tammy : Tex et moi, nous ___ très contents. (être — futur simple)',
            promptZh: 'Tex 原题 #5：Tex 和我将会非常开心（être，nous）：',
            answers: ['serons'],
            hint: 'être → nous serons.',
            audio: 'Tex et moi, nous serons très contents.',
            explain: 'être stem = ser- → nous serons.',
            explainZh: 'être 词干 ser- → serons。'
          },
          {
            id: 'dt10b6_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tex : Mes neveux, vous ___ en France, n’est-ce pas ? (aller — futur simple)',
            promptZh: 'Tex 原题 #6：我的侄子们，你们以后会去法国的，对吗？（aller，vous）：',
            answers: ['irez'],
            hint: 'aller → stem ir- + -ez = irez!',
            audio: 'Vous irez en France, n’est-ce pas ?',
            explain: 'aller stem = ir- → vous irez.',
            explainZh: 'aller 词干 ir- → irez。'
          },
          {
            id: 'dt10b6_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tex : Tammy, tu ___ trop de vêtements. (acheter — futur simple)',
            promptZh: 'Tex 原题 #7：Tammy，你以后会买太多衣服的（acheter，记住变音调 è！）：',
            answers: ['achèteras'],
            hint: 'Present "j’achète" → achèter- + -as = achèteras!',
            audio: 'Tammy, tu achèteras trop de vêtements.',
            explain: 'acheter switches e → è throughout future/conditional: achèteras.',
            explainZh: 'acheter 将来时保留 è → achèteras。'
          },
          {
            id: 'dt10b6_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tammy ___ des cadeaux aux neveux de Tex. (envoyer — futur simple)',
            promptZh: 'Tex 原题 #8：Tammy 会给 Tex 的侄子们寄去礼物（envoyer，3 单，双写 rr！）：',
            answers: ['enverra'],
            hint: 'envoyer stem = enverr- (double r!) + -a = enverra.',
            audio: 'Tammy enverra des cadeaux.',
            explain: 'envoyer → enverra (NOT *envoyerai!).',
            explainZh: 'envoyer 将来时不规则且双写 rr → enverra！'
          },
          {
            id: 'dt10b6_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9 (Negation!): Joe-Bob ___ son diplôme. (ne pas obtenir — futur simple)',
            promptZh: 'Tex 原题 #9：Joe-Bob 将拿不到他的毕业证了（ne pas obtenir，记得 tenir → tiendr-！）：',
            answers: ["n'obtiendra pas", 'n’obtiendra pas'],
            hint: 'tenir → tiendr- → ne + obtiendra + pas!',
            audio: 'Joe-Bob n’obtiendra pas son diplôme.',
            explain: 'obtenir (like tenir/venir) → obtiendr-: n’obtiendra pas.',
            explainZh: 'obtenir 与 tenir/venir 同族，词干 obtiendr- → n’obtiendra pas。'
          },
          {
            id: 'dt10b6_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tammy : Tex, est-ce que tu ___ m’écrire souvent ? (pouvoir — futur simple)',
            promptZh: 'Tex 原题 #10：Tex，你以后能经常给我写信吗？（pouvoir，tu，双写 rr！）：',
            answers: ['pourras'],
            hint: 'pouvoir stem = pourr- + -as = pourras.',
            audio: 'Est-ce que tu pourras m’écrire souvent ?',
            explain: 'tu pourras.',
            explainZh: 'pouvoir 词干 pourr- → pourras。'
          },
          {
            id: 'dt10b6_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Bette ___ tous les secrets de Tex. (savoir — futur simple)',
            promptZh: 'Tex 原题 #11：Bette 终将知晓 Tex 的所有秘密（savoir，3 单）：',
            answers: ['saura'],
            hint: 'savoir stem = saur- (NOT *sav-!) + -a = saura.',
            audio: 'Bette saura tous les secrets de Tex.',
            explain: 'savoir → saura.',
            explainZh: 'savoir 词干为 saur- → saura。'
          },
          {
            id: 'dt10b6_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tammy et Bette ___ des prix culinaires. (recevoir — futur simple)',
            promptZh: 'Tex 原题 #12：Tammy 和 Bette 将获得美食奖项（recevoir，3 复数）：',
            answers: ['recevront'],
            hint: 'recevoir stem = recevr- + -ont = recevront.',
            audio: 'Tammy et Bette recevront des prix culinaires.',
            explain: 'recevoir → recevront.',
            explainZh: 'recevoir 词干 recevr- → recevront。'
          }
        ],
        related: [
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_5', label: 'Back to 10B.5 Regular Future' },
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_7', label: '10B.7 Futur Proche vs. Futur Simple & Time Clauses' }
        ]
      },

      /* =========================================================
         PAGE 10B.7: FUTUR PROCHE VS. FUTUR SIMPLE + QUAND/DÈS QUE (taf4)
      ========================================================= */
      {
        id: 't10b_7',
        code: '10B.7',
        group: 'Future Tenses',
        shortTitle: 'Near vs. Simple Future & quand + Future',
        title: 'Futur Proche vs. Futur Simple + Mandatory Future After quand / lorsque / dès que / aussitôt que',
        titleZh: '近将来时 vs. 简单将来时辨析 + quand / dès que 时间从句必用将来时铁律',
        estMin: 4,
        summary: 'Learn the subtle real-life difference between Futur Proche ("aller + inf.") and Futur Simple ("-rai"): (1) Futur Proche sounds conversational, immediate, or practically INEVITABLE ("Il va tomber !", "Le test est positif : je vais encore avoir quatre enfants !"); (2) Futur Simple feels more distant, formal, objective, general-truth ("L’homme sera toujours l’homme"), or uncertain; (3) MANDATORY FRENCH RULE (different from English!): after quand, lorsque, dès que, aussitôt que referring to future time, French REQUIRES the Future tense ("Quand ils reviendront, on fera la fête", NEVER *Quand ils reviennent)!',
        summaryZh: '真正理解两种将来时的语感差别，并掌握一项极核心的英法对比铁律：① **近将来时（Futur proche）**偏向**口语、眼下马上发生**，或者虽然时间还早但说话人认为**铁板钉钉必会发生**的事实（比如 Rita 验孕呈阳性：`Je **vais** encore avoir quatre bébés !`）；② **简单将来时（Futur simple）**偏向**书面、较长远的未来、普遍真理**（`Qui vivra, verra`）或还没打包票的设想（`Je **serai** heureuse quand…`）；③ **TCF 必考铁律**：由 **`quand / lorsque / dès que / aussitôt que`** 引导将来时间状语从句时，英文常偷懒用一般现在时，但**法语从句里面必须使用将来时**（`Dès qu’ils **arriveront**, ils nous téléphoneront`）！',
        cheatSummary: [
          { label: 'Futur Proche vs. Futur Simple Nuance', rule: 'FUTUR PROCHE = spoken, immediate, or already-in-motion inevitable ("Le test est positif : je vais avoir 4 bébés !", "Il va tomber !"). FUTUR SIMPLE = formal, distant/general truth ("Qui vivra, verra"), hypothetical/contingent.', ruleZh: '语感对比：近将来 = 口语、眼前或已成定局必然发生（验孕阳性 → Je vais avoir…）；简单将来 = 书面、较远、尚无定数、或格言真理。' },
          { label: 'NO Present Tense After quand / dès que for Future!', rule: 'After quand, lorsque, dès que, aussitôt que talking about the future, use FUTUR SIMPLE (or futur antérieur), NEVER Present! ("Dès qu’ils arriveront à Austin, on fera la fête", "Quand je serai riche...")', ruleZh: '重要纠错：表示将来时，quand / lorsque / dès que / aussitôt que 后绝对不用现在时，必须用将来时（如 Quand il fera beau / Dès qu’ils arriveront）！' }
        ],
        sections: [
          {
            id: 't10b7_contrast',
            heading: '1. Inevitable vs. Distant Future (Rita’s Pregnancy Test) & Conjunction Rule',
            headingZh: '一、Rita 验孕对话（必然 vs. 遥远设想）与时间连词后必用将来时',
            lead: 'Notice how Rita instantly says "Je vais avoir quatre enfants !" (positive test = certain/inevitable → Futur Proche!), while Tammy reassures her "la joie te donnera de l’énergie, tu verras" and Rita replies "Je serai heureuse quand mon mari aura une vasectomie" (future condition → Futur Simple!):',
            leadZh: '细读 Rita 验孕阳性后和 Tammy 的幽默对话，再重点背下右方框里的四大未来时间连词规则：',
            cartoon: {
              src: './assets/tex_cartoons/taf4_pregnant.gif',
              alt: 'Rita passe un test de grossesse positif',
              caption: 'Rita : Le test est positif ! Je VAIS encore avoir quatre enfants ! Je SERAI heureuse quand mon mari AURA une vasectomie !',
              captionZh: '验孕阳性已成定局（Je vais avoir…）；至于什么时候真正开心——“等我老公做了结扎时（quand… aura）我才会开心（Je serai）”！'
            },
            table: {
              headers: ['Cue / Situation', 'Preferred Future Tense', 'Tex Example'],
              rows: [
                { cols: ['Immediate / Already Decided / Inevitable', 'Futur Proche (aller + inf.)', 'Il va tomber ! · Le test est positif : je vais avoir 4 enfants !'], audio: 'Le test est positif : je vais encore avoir quatre enfants !' },
                { cols: ['Distant / Contingent / Predictions', 'Futur Simple (-rai)', 'Un jour, je deviendrai un chef célèbre. · Qui vivra, verra.'], audio: 'Un jour, je deviendrai un chef célèbre.' },
                { cols: ['Always / Forever Declarations', 'Futur Simple (-rai)', 'J’aimerai toujours Tex. · Je serai toujours une femme fatale !'], audio: 'J’aimerai toujours Tex.' },
                { cols: ['After quand / lorsque / dès que / aussitôt que', 'Futur Simple (NEVER Present!)', 'Dès que Tex et Tammy seront en vacances, ils iront à NOLA.'], audio: 'Dès qu’ils seront en vacances, ils iront à La Nouvelle-Orléans.' }
              ]
            }
          },
          {
            id: 't10b7_clauses',
            heading: '2. Time Clauses With Future & Inevitable Warnings',
            headingZh: '二、未来时间连词从句与“眼看必然发生”情景',
            lead: 'Listen to Corey and Joe-Bob planning a party once Tex and Tammy return from New Orleans — remember every time conjunction (dès que, aussitôt que, lorsque, quand) takes Future Tense:',
            leadZh: '读 Corey 和 Joe-Bob 等着开派对的对白，注意所有四个未来时间连词后面全都必须接将来时：',
            cartoon: {
              src: './assets/tex_cartoons/taf4_phone.gif',
              alt: 'Corey et Joe-Bob attendent le coup de téléphone',
              caption: 'Corey : Ils nous téléphoneront aussitôt qu’ils arriveront à La Nouvelle-Orléans ! Quand ils reviendront, on fera la fête !',
              captionZh: '他们一到新奥尔良就会（aussitôt qu’ils arriveront，从句一样用将来时！）打电话；等他们一回来（quand ils reviendront），咱们就开派对！'
            },
            examples: [
              { fr: 'Dès que Tex et Tammy seront en vacances, ils iront à La Nouvelle-Orléans. Ils nous téléphoneront aussitôt qu’ils arriveront.', en: 'Both clauses take Future ("seront... iront", "téléphoneront... arriveront")!', zh: '主句和从句统一用简单将来时：aussitôt qu’ils arriveront（一到就……，从句绝不用 *arrivent）！', tag: 'Future Time Clauses' },
              { fr: 'Joe-Bob : Regarde cet homme qui perd l’équilibre : Il va tomber !', en: 'Inevitable immediate event in motion → Futur Proche!', zh: '眼看都要掉下去了，迫在眉睫必然发生 → Il va tomber !', tag: 'Inevitability' }
            ],
            quickCheck: {
              prompt: 'Translate correctly: "As soon as we get to Paris, we will send you a message."',
              promptZh: '把英语 “As soon as we get to Paris, we’ll text you” 翻译成无语法漏洞的标准法语：',
              options: [
                'Dès que nous arriverons à Paris, nous t’enverrons un message.',
                'Dès que nous arrivons à Paris, nous t’enverrons un message.',
                'Dès que nous sommes arrivés à Paris, nous envoyons un message.',
                'Dès que nous allons arriver à Paris, nous envoyons un message.'
              ],
              answerIdx: 0,
              explain: 'Future meaning after "dès que" REQUIRES Future tense ("arriverons") — English uses present "get", French NEVER does here!',
              explainZh: '中文和英文都在“一……就”里用一般现在，但法语必须严格使用将来时：Dès que nous arriverons…，nous t’enverrons…！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10b7_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1 (Quand clause — distant future!): Tex : Quand je serai riche, je ___, mais pas maintenant ! (me marier)',
            promptZh: 'Tex 原题 #1：等我以后发财了，我才会结婚，但现在可不结！（遥远未来设想 → 简单将来时，含反身代词 me）：',
            answers: ['me marierai'],
            hint: 'Distant future ("pas maintenant") → futur simple: me marierai!',
            audio: 'Quand je serai riche, je me marierai !',
            explain: 'Distant/contingent future → Futur simple: je me marierai.',
            explainZh: '非近期、待定假设的遥远将来，用简单将来时 me marierai。'
          },
          {
            id: 'dt10b7_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2 (Immediate right now!): Tex : J’ai une idée pour un poème : je ___ tout de suite ! (écrire — futur proche!)',
            promptZh: 'Tex 原题 #2：我有灵感了，我**马上立刻（tout de suite）**就要写下来！（用近将来时）：',
            answers: ['vais écrire'],
            hint: '"tout de suite" = immediate action → vais écrire!',
            audio: 'J’ai une idée : je vais écrire tout de suite !',
            explain: 'Immediate action right now ("tout de suite") → Futur proche: vais écrire.',
            explainZh: '“马上立刻做”选近将来时 → vais écrire。'
          },
          {
            id: 'dt10b7_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3 (Immediate decision!): Tex : Je veux revoir la France. Je ___ un billet d’avion immédiatement. (acheter — futur proche!)',
            promptZh: 'Tex 原题 #3：我想再看一眼法国，我**立刻（immédiatement）**去买张机票（近将来时）：',
            answers: ['vais acheter'],
            hint: 'immédiatement → vais acheter!',
            audio: 'Je vais acheter un billet d’avion immédiatement.',
            explain: 'Immediate decision → je vais acheter.',
            explainZh: '立即行动用近将来时 vais acheter。'
          },
          {
            id: 'dt10b7_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4 (Today’s plan!): Tammy : Aujourd’hui, c’est les soldes ! Tex et moi, nous ___ à Dillard’s. (aller — futur proche!)',
            promptZh: 'Tex 原题 #4：今天打折啦！我和 Tex 今天就要去 Dillard’s 逛街（近将来时）：',
            answers: ['allons aller'],
            hint: 'Immediate today plan → nous allons + aller = allons aller (yes, aller+aller is totally normal in French!).',
            audio: 'Aujourd’hui, nous allons aller à Dillard’s.',
            explain: 'Immediate plan today → Futur proche "nous allons aller"!',
            explainZh: '法语里说“今天马上要去某地”完全可以连用 allons aller（别觉得两个 aller 奇怪！）。'
          },
          {
            id: 'dt10b7_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5 (Distant dream!): Edouard : Je suis serveur. Mais un jour, je ___ un chef célèbre. (devenir — futur simple!)',
            promptZh: 'Tex 原题 #5：我现在还是服务员，但**总有一天（un jour）**，我会成为名厨！（远期梦想 → 简单将来时）：',
            answers: ['deviendrai'],
            hint: 'Distant dream ("un jour") → devenir stem deviendr- + -ai = deviendrai!',
            audio: 'Un jour, je deviendrai un chef célèbre.',
            explain: 'Distant future dream ("un jour") → Futur simple: je deviendrai.',
            explainZh: '遥远宏愿“总有一天”用简单将来时（且注意 devenir 词干 deviendr-）→ deviendrai。'
          },
          {
            id: 'dt10b7_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6 (Quand clause!): Edouard : Quand vous vous marierez, vous ___ votre lune de miel à Paris. (passer — futur simple)',
            promptZh: 'Tex 原题 #6：等你们将来结婚时，你们将在巴黎度蜜月（搭配 quand 从句，用简单将来时）：',
            answers: ['passerez'],
            hint: 'Matching future clause "quand vous vous marierez" → passerez.',
            audio: 'Quand vous vous marierez, vous passerez votre lune de miel à Paris.',
            explain: 'Future time clause + distant plan → vous passerez.',
            explainZh: '对应将来时间从句，填 vous passerez。'
          },
          {
            id: 'dt10b7_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7 ("Forever" vow!): Tammy : J’___ toujours Tex. (aimer — futur simple)',
            promptZh: 'Tex 原题 #7：我会永远（toujours）爱着 Tex（长远誓言 → 简单将来时，注意前面的 J’）：',
            answers: ['aimerai'],
            hint: 'Vow / timeless promise → J’aimerai toujours.',
            audio: 'J’aimerai toujours Tex.',
            explain: 'Always/timeless vow → Futur simple: aimerai.',
            explainZh: '“永远……”这类跨越时间承诺用简单将来时 aimerai。'
          },
          {
            id: 'dt10b7_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8 ("Forever"): Bette : Je ___ toujours une femme fatale ! (être — futur simple)',
            promptZh: 'Tex 原题 #8：我将永远做个万人迷女郎！（être，简单将来时）：',
            answers: ['serai'],
            hint: 'être future → je serai.',
            audio: 'Je serai toujours une femme fatale !',
            explain: 'je serai toujours...',
            explainZh: 'être 简单将来时 → serai。'
          },
          {
            id: 'dt10b7_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9 (Immediate consequence!): Tex : Je suis en retard. Tammy ___ contente ! (ne pas être — futur proche)',
            promptZh: 'Tex 原题 #9：糟了，我迟到了！Tammy 肯定马上就不高兴了（眼前必发生的反应 → 否定近将来时）：',
            answers: ['ne va pas être'],
            hint: 'Immediate inevitable outcome → ne va pas être!',
            audio: 'Je suis en retard. Tammy ne va pas être contente !',
            explain: 'Immediate expected reaction → ne va pas être contente.',
            explainZh: '眼看迟到马上会引发的不悦，口语地道选近将来否定 ne va pas être！'
          },
          {
            id: 'dt10b7_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10 (Today’s weather plan!): Il fait beau aujourd’hui. Nous ___ un pique-nique. (faire — futur proche)',
            promptZh: 'Tex 原题 #10：今天天气真好，我们去野餐吧！（今天近期计划 → 近将来时）：',
            answers: ['allons faire'],
            hint: 'Immediate plan today → allons faire.',
            audio: 'Il fait beau aujourd’hui. Nous allons faire un pique-nique.',
            explain: 'nous allons faire.',
            explainZh: '当天计划用近将来时 allons faire。'
          },
          {
            id: 'dt10b7_d11',
            kind: 'fib',
            prompt: 'Tex Practice #12 (Tomorrow’s urgent action!): L’examen est demain ! Nous ___ ce soir. (réviser — futur proche)',
            promptZh: 'Tex 原题 #12：明天就考试啦！今晚我们得突击复习（今晚近期安排 → 近将来时）：',
            answers: ['allons réviser'],
            hint: 'Tonight’s urgent plan → allons réviser.',
            audio: 'L’examen est demain ! Nous allons réviser ce soir.',
            explain: 'nous allons réviser.',
            explainZh: '今晚立刻要执行的学习计划 → allons réviser。'
          },
          {
            id: 'dt10b7_d12',
            kind: 'fib',
            prompt: 'Conjunction trap ("dès que" + future!): Dès qu’il ___ son visa, il achètera son billet d’avion ! (recevoir)',
            promptZh: '必考时间连词陷阱：他一收到签证（dès que，注意不能用现在时！），就会买机票（recevoir，il）：',
            answers: ['recevra'],
            hint: 'After "dès que" for a future event, use Futur Simple (or Futur Antérieur): recevra!',
            audio: 'Dès qu’il recevra son visa, il achètera son billet d’avion !',
            explain: 'NEVER use present *reçoit after dès que for a future event — use Futur Simple "recevra" (or Futur Antérieur "aura reçu")!',
            explainZh: 'dès que / aussitôt que / quand 表将来时，从句内必须用简单将来时 recevra（或者下页要学的先将来时 aura reçu），绝对不能用现在时 *reçoit！'
          }
        ],
        related: [
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_6', label: 'Back to 10B.6 Irregular Future Stems' },
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_8', label: '10B.8 Futur Antérieur ("will have done")' }
        ]
      },

      /* =========================================================
         PAGE 10B.8: FUTUR ANTÉRIEUR (taf5)
      ========================================================= */
      {
        id: 't10b_8',
        code: '10B.8',
        group: 'Future Tenses',
        shortTitle: 'Futur Antérieur ("will have")',
        title: 'Le Futur Antérieur: "Will Have Done" + Time Clauses (quand / dès que / lorsque)',
        titleZh: '先将来时（Futur antérieur）：到那时“已经完成”（aurai / serai + 过去分词）与时间先后搭配',
        estMin: 4,
        summary: 'Master the future perfect (le futur antérieur): FUTUR SIMPLE of AVOIR ("aurai, auras, aura, aurons, aurez, auront") or ÊTRE ("serai, seras, sera, serons, serez, seront" + Alamo/pronominal agreement!) + PAST PARTICIPLE. It expresses an action that WILL ALREADY BE COMPLETED before another future deadline ("L’an prochain, tu m’auras connu depuis 5 ans") OR right BEFORE a second future step after quand / lorsque / dès que / aussitôt que ("Quand tu auras fini de draguer toutes mes copines, je voudrais te dire deux mots !").',
        summaryZh: '先将来时（Futur antérieur）专门表达“**在将来的某个动作发生之前，这件事就已经先做完了**”（英语 *will have done*）。构成公式一目了然：**`avoir` 或 `être` 的简单将来时（`aurai / serai`）+ `过去分词`**（如果是 `être` 或代动词，同样必须做性数配合！）。除了配将来时间点（*Dans une semaine, on aura terminé*），它最高频的用法就是跟在 **`quand / lorsque / dès que / aussitôt que`** 后面，表示“**等先把 A 做完，紧接着就去做 B（Futur simple）**”！',
        cheatSummary: [
          { label: 'Formula: Future Auxiliary (aurai / serai) + PP', rule: 'AVOIR verbs: j’aurai fini, tu auras bu, ils auront oublié. ÊTRE & PRONOMINAL verbs: je serai parti(e), elle sera arrivée (+e), dès que tu te seras calmée (+e if fem.!). Negation: "n’auront pas compris".', ruleZh: '构成：助动词用简单将来时（aurai… / serai…）+ 过去分词。使用 être 或代动词时（如 se calmer → tu te seras calmée）同样配合主语性数！否定词 ne...pas 夹在 aurai/serai 两边。' },
          { label: 'English Present vs. French Future Perfect Trap!', rule: 'English says "We’ll talk when you’ve calmed down / when you finish." French uses FUTUR ANTÉRIEUR in the completed first clause: "On parlera dès que tu te seras calmée !", "Quand Tammy aura reçu son diplôme, ils iront en France."', ruleZh: '英汉转换必考点：英文/中文说“等你做完……我就……”，但法语“先完成”的从句里必须用先将来时（Quand tu auras fini…, nous partirons）！' }
        ],
        sections: [
          {
            id: 't10b8_fa',
            heading: '1. Prior Future Completion & Tex and Tammy’s Party Quarrel',
            headingZh: '一、先将来时构成表与派对争吵实战对话',
            lead: 'Listen to how Tammy scolds Tex at a party using THREE futur antérieur verbs ("quand tu auras fini...", "lorsque tu te seras excusé !", "quand tu auras bien bu..."), and Tex counters with "dès que tu te seras calmée !" and "quand la soirée sera terminée":',
            leadZh: '读 Tammy 和 Tex 在派对上吵架的这组对白，看 **`quand / dès que / lorsque + 先将来时`** 有多自然、多高级：',
            cartoon: {
              src: './assets/tex_cartoons/taf5_copines.gif',
              alt: 'Tammy se dispute avec Tex à une soirée',
              caption: 'Tammy : Quand tu AURAS FINI de draguer mes copines ! — Tex : On parlera dès que tu te SERAS CALMÉE !',
              captionZh: '等你把我闺蜜们全撩完了（auras fini）咱再说！— 等你先冷静下来了（te seras calmée）咱们再聊！'
            },
            table: {
              headers: ['Verb Type', 'Future Aux. + Past Participle', 'Time-Sequence Example'],
              rows: [
                { cols: ['avoir verb (finir / recevoir)', 'j’aurai fini · elle aura reçu · ils auront compris', 'Quand Tammy aura reçu son diplôme, ils iront en France.'], audio: 'Quand Tammy aura reçu son diplôme, ils iront en France.' },
                { cols: ['être verb (partir / devenir)', 'je serai parti(e) · elles seront rentrées', 'Je travaillerai quand vous serez partis.'], audio: 'Je travaillerai quand vous serez partis.' },
                { cols: ['Pronominal (se calmer / se marier)', 'tu te seras calmé(e) · ils se seront mariés', 'Dès que Tex et Tammy se seront mariés, ils partiront.'], audio: 'Dès que Tex et Tammy se seront mariés, ils iront en France.' },
                { cols: ['Negative + Adverb', 'ne + future aux. + pas + PP', 'Ils n’auront certainement pas fini avant minuit.'], audio: 'Ils n’auront pas fini avant la fin du semestre.' }
              ]
            }
          },
          {
            id: 't10b8_dialogue',
            heading: '2. Dialogue: Party Quarrel With Futur Antérieur',
            headingZh: '二、派对拌嘴对话：先将来时高频实战句',
            lead: 'Notice how Tammy drops three consecutive futur antérieur forms after quand / lorsque, forcing Tex to concede:',
            leadZh: '再细看两人吵架的后半段，感受一下先将来时在口语警告里有多带感：',
            cartoon: {
              src: './assets/tex_cartoons/taf5_question.gif',
              alt: 'Tammy dit à Tex que quand il aura bien bu ce sera trop tard',
              caption: 'Tammy : Je ne partirai que lorsque tu te seras excusé ! Quand tu auras bien bu, ce sera trop tard.',
              captionZh: '除非你先道歉（te seras excusé），否则我不走！等你喝醉了（auras bien bu），一切就太晚了（ce sera trop tard）！'
            },
            examples: [
              { fr: 'Tammy : Quand tu auras fini de draguer mes copines, je voudrais te dire deux mots ! — Tex : On parlera dès que tu te seras calmée !', en: 'auras fini ("when you’re done") · dès que tu te seras calmée ("as soon as you’ve calmed down")', zh: '两处从句都是“动作先发生完”：先撩完/先冷静下来，再谈！', tag: 'Sequential Future' }
            ]
          }
        ],
        drills: [
          {
            id: 'dt10b8_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex : Tammy, l’an prochain tu m’___ depuis 5 ans. (connaître — futur antérieur)',
            promptZh: 'Tex 原题 #1：明年此时，你就认识我整整 5 年了（connaître，tu + 记得前面的 m’ 省音，填 auras + 过去分词）：',
            answers: ['auras connu'],
            hint: 'avoir future (auras) + connu (no agreement — m’ is before auras? Wait: Tex = masc. sg.!).',
            audio: 'L’an prochain tu m’auras connu depuis cinq ans.',
            explain: 'm’ = male Tex → auras connu.',
            explainZh: 'tu auras + connu（connaître 过去分词为 connu）。'
          },
          {
            id: 'dt10b8_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tammy : Demain, Tex ___ ses promesses. (oublier — futur antérieur)',
            promptZh: 'Tex 原题 #2：到明天的时候，Tex 早就把自己的诺言忘光了（oublier，3 单）：',
            answers: ['aura oublié'],
            hint: 'il aura + oublié.',
            audio: 'Demain, Tex aura oublié ses promesses.',
            explain: 'Tex aura oublié.',
            explainZh: 'aura oublié。'
          },
          {
            id: 'dt10b8_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tex : J’espère que Tammy ___ son examen. (réussir — futur antérieur)',
            promptZh: 'Tex 原题 #3：我希望 Tammy 到时已经顺利考过了（réussir，3 单）：',
            answers: ['aura réussi'],
            hint: 'elle aura + réussi.',
            audio: 'J’espère que Tammy aura réussi son examen.',
            explain: 'Tammy aura réussi.',
            explainZh: 'aura réussi。'
          },
          {
            id: 'dt10b8_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Tammy : Quand j’___ des enfants, je ressemblerai à Rita. (avoir — futur antérieur!)',
            promptZh: 'Tex 原题 #4：等我以后有了孩子，我大概就会像 Rita 一样了（avoir 本身的先将来时：j’ + aurai eu）：',
            answers: ['aurai eu'],
            hint: 'avoir in futur antérieur: j’aurai + eu!',
            audio: 'Quand j’aurai eu des enfants, je ressemblerai à Rita.',
            explain: 'Auxiliary "aurai" + past participle "eu" = aurai eu!',
            explainZh: 'avoir 作实义动词时，先将来时由“将来助动词 aurai + 过去分词 eu”组成 → aurai eu！'
          },
          {
            id: 'dt10b8_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Joe-Bob : Quand est-ce que vous ___ ? (finir — futur antérieur)',
            promptZh: 'Tex 原题 #5：你们要到什么时候才会做完呀？（finir，vous）：',
            answers: ['aurez fini'],
            hint: 'vous aurez + fini.',
            audio: 'Quand est-ce que vous aurez fini ?',
            explain: 'vous aurez fini.',
            explainZh: 'vous aurez fini。'
          },
          {
            id: 'dt10b8_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tammy : Quand Tex et Edouard ___, on pourra manger. (rentrer — être plural!)',
            promptZh: 'Tex 原题 #6：等 Tex 和 Edouard 回家后，咱们就可以开饭了（rentrer 用 être + 复数）：',
            answers: ['seront rentrés'],
            hint: 'rentrer takes être; Tex & Edouard (m. pl.) → seront rentrés (+s)!',
            audio: 'Quand Tex et Edouard seront rentrés, on pourra manger.',
            explain: 'ils seront rentrés.',
            explainZh: 'rentrer 是 être 动词，两个男性主语加 -s → seront rentrés。'
          },
          {
            id: 'dt10b8_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tammy : Je travaillerai quand vous ___. (partir — être plural!)',
            promptZh: 'Tex 原题 #7：等你们离开后我再工作（partir 用 être，vous 按多人复数）：',
            answers: ['serez partis'],
            hint: 'vous serez + partis (+s).',
            audio: 'Je travaillerai quand vous serez partis.',
            explain: 'partir (être) → serez partis.',
            explainZh: 'partir 用 être → serez partis。'
          },
          {
            id: 'dt10b8_d8',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tex : Dans quelques années, je ___ un poète célèbre. (devenir — male speaker)',
            promptZh: 'Tex 原题 #9：再过几年，我将会成为一名著名诗人（devenir 用 être，je 指男性 Tex）：',
            answers: ['serai devenu'],
            hint: 'devenir takes être → je serai devenu.',
            audio: 'Dans quelques années, je serai devenu un poète célèbre.',
            explain: 'je serai devenu.',
            explainZh: 'devenir 是 Alamo 动词 → serai devenu。'
          },
          {
            id: 'dt10b8_d9',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tammy : L’an prochain, les bébés de Rita ___. (grandir — avoir)',
            promptZh: 'Tex 原题 #10：明年，Rita 的宝宝们就已经长大了（grandir 用 avoir，3 复数）：',
            answers: ['auront grandi'],
            hint: 'grandir takes avoir → auront grandi.',
            audio: 'L’an prochain, les bébés de Rita auront grandi.',
            explain: 'auront grandi.',
            explainZh: 'grandir 用 avoir → auront grandi。'
          },
          {
            id: 'dt10b8_d10',
            kind: 'fib',
            prompt: 'Tex Practice #11: Tex : Dans une semaine, on ___ les cours. (terminer)',
            promptZh: 'Tex 原题 #11：再过一周，大家就把课程全都学完了（terminer，on）：',
            answers: ['aura terminé'],
            hint: 'on aura + terminé.',
            audio: 'Dans une semaine, on aura terminé les cours.',
            explain: 'on aura terminé.',
            explainZh: 'on 配第三人称单数：aura terminé。'
          },
          {
            id: 'dt10b8_d11',
            kind: 'fib',
            prompt: 'Pronominal agreement check: Dès que Tammy ___, nous partirons ! (se réveiller — Tammy = female!)',
            promptZh: '代动词先将来时：等 Tammy（女）一醒过来，我们就出发！（se réveiller，注意配合阴性！）：',
            answers: ['se sera réveillée'],
            hint: 'se + sera + réveillée (+e)!',
            audio: 'Dès que Tammy se sera réveillée, nous partirons !',
            explain: 'Tammy se sera réveillée (feminine -e agreement!).',
            explainZh: '代动词用 être：se sera réveillée（配合阴性主语加 -e！）。'
          },
          {
            id: 'dt10b8_d12',
            kind: 'choice',
            prompt: 'Pick the sentence showing the right future sequence ("First she finishes, THEN we eat"):',
            promptZh: '“等她先做好饭，我们才一起吃（先后顺承）”，哪一句时态配合最地道？',
            options: [
              'Quand elle aura fini de cuisiner, nous mangerons.',
              'Quand elle finira de cuisiner, nous aurons mangé.',
              'Quand elle a fini de cuisiner, nous mangerons.',
              'Quand elle finit de cuisiner, nous mangerons.'
            ],
            answerIdx: 0,
            audio: 'Quand elle aura fini de cuisiner, nous mangerons.',
            explain: 'Completed prior future action → Futur antérieur ("aura fini"); subsequent action → Futur simple ("mangerons")!',
            explainZh: '“先完成”的一步用先将来时（aura fini），“紧接着发生”的主句用简单将来时（mangerons）！'
          }
        ],
        related: [
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_7', label: 'Back to 10B.7 Near vs. Simple Future' },
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_9', label: '10B.9 The Imperative Mood' }
        ]
      },

      /* =========================================================
         PAGE 10B.9: THE IMPERATIVE MOOD (tai1)
      ========================================================= */
      {
        id: 't10b_9',
        code: '10B.9',
        group: 'Imperative Mood',
        shortTitle: 'The Imperative Mood (Commands)',
        title: 'L’Impératif: Command Forms, -s Drop & Restoration (Vas-y !), 4 Irregulars & Pronouns',
        titleZh: '第十章 B 压轴 · 命令式全解（-er 去 s、Vas-y / Achètes-en 恢复 s、四大不规则与宾语语序）',
        estMin: 4,
        summary: 'Master every imperative rule cleanly (tai1): (1) 3 forms ONLY ("tu, nous, vous"), with NO subject pronoun ("Finis ! Finissons ! Finissez !"); (2) DROP THE FINAL -s on ALL "tu" forms ending in -es (ALL -er verbs, aller → "Va !", and ouvrir/offrir/souffrir → "Ouvre !"), EXCEPT restore -s directly before "y" or "en" ("Vas-y !", "Achètes-en !"); (3) 4 IRREGULAR IMPERATIVES: être ("sois, soyons, soyez"), avoir ("aie, ayons, ayez"), savoir ("sache, sachons, sachez"), vouloir ("veuille, veuillons, veuillez" — polite "Veuillez patienter !"); (4) AFFIRMATIVE vs. NEGATIVE WITH PRONOUNS: Affirmative adds hyphenated pronoun AFTER verb with me/te → moi/toi ("Aide-moi ! Dépêche-toi !"), whereas NEGATIVE snaps back BEFORE verb ("Ne te moque pas de moi !").',
        summaryZh: '命令式（Impératif）总复习与难点一网打尽：① 只有 `tu / nous / vous` 三个形式，且**不写主语**；② **`tu` 形式去 `-s` 规则**：所有 `-er` 动词、`aller`（`Va !`）以及按 `-er` 变位的 `ouvrir / offrir`（`Ouvre !`）在 `tu` 命令式里**必须去掉末尾 `-s`**（唯一反例：当后面紧跟 **`y` 或 `en`** 连音时，必须把 `-s` 补回来：**`Vas-y !` / `Achètes-en !`**）；③ **四大不规则命令式**：`être (sois/soyons/soyez)`、`avoir (aie/ayons/ayez)`、`savoir (sache/sachons/sachez)`、`vouloir (veuillez 敬请……)`；④ **代词位置与 `me/te → moi/toi`**：肯定命令式连字符放后面（`Aidez-moi ! / Dépêche-toi !`），**否定命令式瞬间回归动词前面**（`Ne te moque pas ! / Ne le faites pas !`）！',
        cheatSummary: [
          { label: '-s Drop & Vas-y / Achètes-en Rescue', rule: 'tu regardes → Regarde ! · tu ouvres → Ouvre ! · tu vas → Va ! BEFORE y/en → restore -s with hyphen: Vas-y ! Achètes-en ! Parles-en !', ruleZh: 'tu 结尾只要是 -es（以及 va），平时一律删 -s（Regarde / Ouvre / Va）；唯独紧跟 y 或 en 时恢复 -s 并加连字符：Vas-y ! / Achètes-en !' },
          { label: '4 Irregulars + Affirmative vs. Negative Pronouns', rule: 'être: sois/soyons/soyez · avoir: aie/ayons/ayez · savoir: sache/sachons/sachez · vouloir: veuillez. Pronouns: "Aidez-moi ! Dépêche-toi !" vs. "Ne te moque pas ! Ne le faites pas !"', ruleZh: '四大不规则：sois, aie, sache, veuillez。肯定命令式：Aidez-moi / Dépêche-toi；否定命令式退回动词前：Ne te moque pas / Ne le faites pas！' }
        ],
        sections: [
          {
            id: 't10b9_imp',
            heading: '1. Command Rules, 4 Irregulars & Corey’s Cry for Help',
            headingZh: '一、命令式规则、四大不规则表与 Corey 摔倒求助对话',
            lead: 'Listen to Corey begging Bette and Joe-Bob for help ("Vas-y ! Achètes-en ! Aide-moi ! Ne te moque pas de moi ! Retournons-le ! Ne le faites pas trop vite ! Dépêche-toi !") — EVERY single imperative nuance appears in this one funny scene:',
            leadZh: '看这段爆笑小短剧，一次见齐 `Vas-y`、`Achètes-en`、`Ne te moque pas`、`Retournons-le` 和 `Dépêche-toi`！',
            cartoon: {
              src: './assets/tex_cartoons/tai1_moque.gif',
              alt: 'Corey dit à Joe-Bob de ne pas se moquer de lui',
              caption: 'Corey : Aidez-moi ! Ne te moque pas de moi ! — Joe-Bob : Retournons-le ! Ne le faites pas trop vite !',
              captionZh: '快帮帮我（Aidez-moi）！别嘲笑我（Ne te moque pas）！— 咱们把他翻个面（Retournons-le），别太快了（Ne le faites pas）！'
            },
            table: {
              headers: ['Category', 'tu', 'nous', 'vous / Key Example'],
              rows: [
                { cols: ['Regular -er / ouvrir / aller (Drop -s!)', 'regarde · ouvre · va', 'regardons · ouvrons · allons', 'regardez · ouvrez · allez'], audio: 'Regarde, ouvre, va ! Allons-y !' },
                { cols: ['Before y or en (Restore -s!)', 'vas-y · achètes-en', '(allons-y · achetons-en)', 'Bette, vas-y ! Achètes-en pour moi !'], audio: 'Bette, vas-y ! Achètes-en pour moi !' },
                { cols: ['être · avoir (Irregular!)', 'sois · aie', 'soyons · ayons', 'soyez · ayez ("Ne sois pas prétentieux !")'], audio: 'Sois sage, soyez patients, n’aie pas peur !' },
                { cols: ['savoir · vouloir (Irregular!)', 'sache · (veuille)', 'sachons · (veuillons)', 'sachez · veuillez ("Veuillez entrer !")'], audio: 'Sachez rester modestes ! Veuillez patienter.' },
                { cols: ['Pronominal / Object Pronouns', 'Dépêche-toi ! / Ne te moque pas !', 'Souvenons-nous ! / Ne le faisons pas !', 'Aidez-moi ! / Ne le faites pas trop vite !'], audio: 'Aidez-moi ! Dépêche-toi ! Ne te moque pas de moi !' }
              ]
            }
          }
        ],
        drills: [
          {
            id: 'dt10b9_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1 (Pronominal tu): Tex : ___ Tammy ! On était si heureux à Lyon ! (se rappeler)',
            promptZh: 'Tex 原题 #1：Tammy，回想一下吧！（se rappeler 的 tu 肯定命令式，注意双写 ll 与去 -s + toi！）：',
            answers: ['Rappelle-toi'],
            hint: 'tu te rappelles → drop -s → Rappelle-toi!',
            audio: 'Rappelle-toi, Tammy ! On était si heureux à Lyon !',
            explain: 'rappelle (drop -s!) + hyphen + toi = Rappelle-toi !',
            explainZh: 'se rappeler 的 tu 肯定命令式：去掉 -s，连字符接 toi → Rappelle-toi！'
          },
          {
            id: 'dt10b9_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tammy : Tex, ___ tes légumes ! (finir — tu)',
            promptZh: 'Tex 原题 #2：Tex，把你的蔬菜吃完！（finir，tu 命令式——-ir 保留 s！）：',
            answers: ['finis'],
            hint: 'Regular -ir verbs KEEP the final -s: finis!',
            audio: 'Tex, finis tes légumes !',
            explain: '-ir (except ouvrir/offrir) keeps -s on tu: finis !',
            explainZh: '第二组规则 -ir 动词（非 ouvrir 类）保留词尾 -s → finis！'
          },
          {
            id: 'dt10b9_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tex : ___ de nous disputer ! (arrêter — nous: Let’s stop!)',
            promptZh: 'Tex 原题 #3：Tex 说：“咱们别再吵啦！”（arrêter，nous 命令式，句首大写）：',
            answers: ['Arrêtons'],
            hint: 'nous form without subject pronoun → Arrêtons!',
            audio: 'Arrêtons de nous disputer !',
            explain: 'Arrêtons de nous disputer !',
            explainZh: 'nous 命令式表示“咱们……吧”：Arrêtons！'
          },
          {
            id: 'dt10b9_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4 (Irregular negative!): Tammy : ___ prétentieux, Tex ! (ne pas être — tu)',
            promptZh: 'Tex 原题 #4：别这么自大狂了，Tex！（être 的 tu 否定命令式，句首大写）：',
            answers: ['Ne sois pas'],
            hint: 'être tu imperative = sois → Ne sois pas!',
            audio: 'Ne sois pas prétentieux, Tex !',
            explain: 'Irregular imperative of être (tu) = sois → Ne sois pas.',
            explainZh: 'être 不规则命令式 sois，否定夹心 Ne sois pas。'
          },
          {
            id: 'dt10b9_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5 (Irregular nous!): Tex et Tammy : ___ rester modestes ! (savoir — nous)',
            promptZh: 'Tex 原题 #5：让我们学会保持谦虚！（savoir 的 nous 命令式，句首大写）：',
            answers: ['Sachons'],
            hint: 'Irregular savoir imperative: sache, sachons, sachez!',
            audio: 'Sachons rester modestes !',
            explain: 'savoir (nous) imperative = Sachons!',
            explainZh: 'savoir 的命令式不规则：sache / sachons / sachez → Sachons。'
          },
          {
            id: 'dt10b9_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tammy : ___ chez le coiffeur, Tex ! (aller — tu, NO y here!)',
            promptZh: 'Tex 原题 #6：去理发店理个发吧，Tex！（单独 aller 的 tu 命令式，后面没有 y）：',
            answers: ['Va'],
            hint: 'Stand-alone aller tu imperative drops -s → Va!',
            audio: 'Va chez le coiffeur, Tex !',
            explain: 'Without y immediately following, aller tu imperative is "Va !" (NO -s!).',
            explainZh: '后面没有紧跟 y 时，aller 的 tu 命令式去掉 s，只写 Va！'
          },
          {
            id: 'dt10b9_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7 (Compare with #6!): Tu as envie d’aller chez Bette, Tex ? ___-y ! (aller — restore -s!)',
            promptZh: 'Tex 原题 #7（对比上一题！）：想去 Bette 家吗？那去呀！（空格后已有 -y，记得恢复 -s！）：',
            answers: ['Vas'],
            hint: 'Right before -y, restore the -s: Vas-y!',
            audio: 'Tu as envie d’aller chez Bette ? Vas-y !',
            explain: 'Before -y, Va restores -s for liaison → Vas-y!',
            explainZh: '紧接着 -y 时必须加回 -s 连音：Vas-y！'
          },
          {
            id: 'dt10b9_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8 (-er + en!): J’achète du vin ? — Tex : Oui, ___-en plusieurs bouteilles ! (acheter — tu)',
            promptZh: 'Tex 原题 #8：我买点红酒吗？— 买！买好几瓶吧（acheter 的 tu 命令式，空格后已有 -en！）：',
            answers: ['achètes'],
            hint: 'tu achètes normally drops -s, EXCEPT right before -en → achètes-en!',
            audio: 'Oui, achètes-en plusieurs bouteilles !',
            explain: '-er tu imperatives restore -s directly before -y or -en: achètes-en!',
            explainZh: '注意两步：首先变位词干变 è（achète），其次在 -en 前恢复 -s → achètes-en！'
          },
          {
            id: 'dt10b9_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Ta maison n’est pas propre, Tex ! ___ tes affaires ! (ranger — tu)',
            promptZh: 'Tex 原题 #9：你家太乱啦，快收拾（ranger）你的东西！（tu 命令式）：',
            answers: ['Range'],
            hint: '-er verb tu imperative drops -s → Range!',
            audio: 'Range tes affaires !',
            explain: 'tu ranges → Range!',
            explainZh: '-er 动词 tu 命令式去 -s → Range！'
          },
          {
            id: 'dt10b9_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10 (Pronominal vous!): Edouard, Corey, ___ ! Vous allez être en retard ! (se dépêcher — vous)',
            promptZh: 'Tex 原题 #10：Edouard 和 Corey，你们快点儿！要迟到了！（se dépêcher，vous）：',
            answers: ['dépêchez-vous'],
            hint: 'dépêchez + hyphen + vous.',
            audio: 'Edouard, Corey, dépêchez-vous !',
            explain: 'dépêchez-vous !',
            explainZh: '肯定命令式 vous 形式：dépêchez-vous！'
          },
          {
            id: 'dt10b9_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11 (Negative vous!): Edouard, Corey, ceci est secret ! ___ à Tammy ! (ne pas parler — vous)',
            promptZh: 'Tex 原题 #11：这是秘密！可千万别跟 Tammy 说（ne pas parler，vous）：',
            answers: ['Ne parlez pas'],
            hint: 'Ne + parlez + pas!',
            audio: 'Ne parlez pas à Tammy !',
            explain: 'Ne parlez pas.',
            explainZh: '否定命令式：Ne parlez pas。'
          },
          {
            id: 'dt10b9_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Chers amis, ___ tous à mon anniversaire ! (venir — vous)',
            promptZh: 'Tex 原题 #12：亲爱的朋友们，全都来参加我的生日派对吧！（venir，vous 命令式）：',
            answers: ['venez'],
            hint: 'Normal vous form without "vous": venez!',
            audio: 'Chers amis, venez tous à mon anniversaire !',
            explain: 'venir imperative (vous) = venez!',
            explainZh: 'venir 的 vous 命令式完全规则：venez。'
          }
        ],
        related: [
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_8', label: 'Back to 10B.8 Futur Antérieur' },
          { chapterId: 'ch8a_pronouns_personal', pageId: 'p8a_11', label: 'Review 8A.11 Double Pronouns in Imperatives' }
        ]
      }
    ]
  });
})();
