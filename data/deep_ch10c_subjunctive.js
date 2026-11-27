(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch10c_subjunctive',
    code: 'Ch 10C',
    level: 'B1–B2',
    category: 'tense_mood_c',
    icon: '💭',
    title: 'Tense & Mood III: The Subjunctive Mood Mastery',
    titleZh: '第十章 C · 虚拟式全解（词干构成、十大触发语境、过去虚拟式与规避转化）',
    subtitle: 'Tex-style deep mastery of Chapter 10 Part C (tas1–tas8 across 9 bite-sized pages): regular & stem-changing subjunctive, irregular 2-stem & 1-stem verbs (avoir/être/faire/savoir/pouvoir), impersonal necessity (il faut que), doubt & opinion flips + relative/superlative triggers, will/desire/emotion (espérer trap!), subjunctive conjunctions (intention/fear/time/obstacle/condition + same-subject exceptions), past subjunctive, WEDDINGS mnemonic summary, and 4 ways to avoid the subjunctive — with 11 original Tex cartoons & 108 drills.',
    subtitleZh: '对标 Tex 原版第十章 C（tas1–tas8 共 9 个轻松小页）：规则及双词干虚拟式、完全不规则词干（avoir / être / faire / savoir / pouvoir）、义务表达 il faut que、怀疑与否定/疑问翻转、意愿情绪（含 espérer 陷阱）、虚拟式五大连词族（及 4 个同主语例外）、过去虚拟式、WEDDINGS 黄金记忆口诀与四大规避技巧，配 11 张原版卡通与 108 题专练。',
    pages: [
      /* =========================================================
         PAGE 10C.1: REGULAR SUBJUNCTIVE (tas1)
      ========================================================= */
      {
        id: 't10c_1',
        code: '10C.1',
        group: 'Subjunctive Forms',
        shortTitle: 'Regular Subjunctive (ils-stem)',
        title: 'Le Subjonctif Présent Régulier: -ER, -IR, -RE & Stem-Changing Verbs',
        titleZh: '规则现在虚拟式（Subjonctif présent）：直陈式 ils 词干 + 统一词尾',
        estMin: 4,
        summary: 'Remember first: the Subjunctive is a MOOD (attitude of necessity, doubt, wish, emotion), NOT a tense! It has two tenses: Present and Past. For almost all regular verbs — AND many present-tense irregulars like dormir, sortir, partir, lire, dire, écrire, mettre, connaître — take the PRESENT 3rd-person plural ("ils") stem minus "-ent", and add "-e, -es, -e, -ions, -iez, -ent". Look closely: for -er verbs, the boot (je/tu/il/ils) looks & sounds IDENTICAL to Present Indicative, while "nous/vous" add an "i" (-ions, -iez). For -ir ("finissent → finiss-") and -re ("attendent → attend-"), singular forms sound totally different ("je finis" vs. "que je finisse")! Stem-changing -er verbs like "appeler" and "acheter" keep two stems just like present tense ("que j’appelle" vs. "que nous appelions").',
        summaryZh: '首先建立核心概念：**虚拟式（Subjonctif）是一种“语气”（Mood）而不是单纯的“时态”**，用来表达说话人的主观态度——如必要、愿望、怀疑、情绪或假设！规则虚拟式的万能公式超好记：**先把动词变成直陈式现在时的 `ils/elles` 形式，去掉词尾 `-ent` 得到词干，然后统一加上虚拟式词尾 `-e, -es, -e, -ions, -iez, -ent`**！惊喜的是：连现在时“看似不规则”的一大批动词（`dormir, sortir, partir, lire, dire, écrire, mettre, connaître`）在虚拟式里也完全套用这套公式（因为直陈式 `ils dorment / ils lisent / ils connaissent` 词干就放在那里）！而换词干 `-er` 动词（如 `appeler, acheter`）则跟现在时一样在“靴形区（je/tu/il/ils）”变词干、`nous/vous` 保持原词干（`que j’appelle` vs `que nous appelions`）。',
        cheatSummary: [
          { label: 'Universal Regular Formula', rule: '(Present ils-form minus -ent) + -e, -es, -e, -ions, -iez, -ent. Example: ils finissent → finiss- → que je finisse, que nous finissions!', ruleZh: '规则公式：直陈式 ils 词干（去 -ent）+ -e / -es / -e / -ions / -iez / -ent！记住 -ir 动词必带 -iss-（que je finisse，不是 je fine）！' },
          { label: 'Boot vs. Nous/Vous & Hidden Friends', rule: 'dormir → dorm-, partir → part-, lire → lis-, dire → dis-, écrire → écriv-, mettre → mett-, connaître → connaiss-. Boot stem changes (appeler → appelle) revert in nous/vous (appelions)!', ruleZh: '大批高频动词套用 ils 词干完全规则：dormir (dorme), sortir (sorte), lire (lise), dire (dise), écrire (écrive), mettre (mette), connaître (connaisse)！' }
        ],
        sections: [
          {
            id: 't10c1_regular',
            heading: '1. The -ER, -IR, -RE Endings & Regular-Stem Irregulars',
            headingZh: '一、三大组规则虚拟式变位与“伪不规则”亲戚表',
            lead: 'Notice why "que" always appears before subjunctive forms: in French, the subjunctive lives inside subordinate clauses introduced by triggers like "il faut que" (it is necessary that...):',
            leadZh: '背诵虚拟式习惯前面带 `que`（如 `il faut que`），仔细对比直陈式与虚拟式发音差异（尤其是 `-ir / -re` 动词）：',
            cartoon: {
              src: './assets/tex_cartoons/tas1_jailcell.gif',
              alt: 'Il faut que vous parliez clairement — Tex en prison ou donnant les règles',
              caption: 'Il faut que vous parliez clairement ! Il faut qu’on finisse avant midi et que nous sortions ensemble après le cours !',
              captionZh: '你们必须吐字清晰（que vous parliez）！必须在正午前结束（qu’on finisse），下课后我们得一起出去喝一杯（que nous sortions）！'
            },
            table: {
              headers: ['Verb Group', 'ils Present → Stem', 'Boot (je/tu/il/ils) & Nous/Vous'],
              rows: [
                { cols: ['-ER: parler', 'ils parlent → parl-', 'que je parle · que tu parles · qu’il parle · que nous parlions · que vous parliez · qu’ils parlent'], audio: 'Il faut que je parle français et que nous parlions clairement.' },
                { cols: ['-IR: finir', 'ils finissent → finiss-', 'que je finisse · que tu finisses · qu’il finisse · que nous finissions · que vous finissiez · qu’ils finissent'], audio: 'Bien sûr, il faut qu’on finisse avant midi.' },
                { cols: ['-RE: attendre', 'ils attendent → attend-', 'que j’attende · que tu attendes · qu’il attende · que nous attendions · que vous attendiez · qu’ils attendent'], audio: 'Il faut que tu attendes la fin du cours.' },
                { cols: ['Stem-Changing -ER (appeler / acheter)', 'ils appellent / nous appelons', 'que j’appelle (boot ll) · que nous appelions (single l!) / que j’achète · que nous achetions'], audio: 'Il faut que j’appelle Paw-Paw ce soir. À quelle heure faut-il que nous appelions ?' },
                { cols: ['Hidden Regulars (dormir, sortir, partir)', 'dorment / sortent / partent', 'que je dorme · que je sorte · que je parte (nous dormions / sortions / partions)'], audio: 'Il faut que nous sortions ensemble après le cours.' },
                { cols: ['Hidden Regulars (lire, dire, écrire, mettre, connaître)', 'lisent / disent / écrivent / mettent / connaissent', 'que je lise · que je dise · que j’écrive · que je mette · que je connaisse'], audio: 'Il faut que Tammy lise mes poèmes et qu’elle connaisse ma famille.' }
              ]
            },
            examples: [
              { fr: 'Tex : Il faut que j’appelle Paw-Paw ce soir. — Tammy : À quelle heure est-ce qu’il faut que nous appelions Paw-Paw ?', en: 'Stem change inside boot (j’appelle), normal stem outside (nous appelions)', zh: '靴形区内双写 l（j’appelle），nous/vous 还原单写 l（nous appelions）！', tag: 'Stem-Changing Subjunctive' },
              { fr: 'Joe-Bob, il faut que tu attendes la fin du cours avant de dormir.', en: '-re singular "tu attendes" sounds just like "attend", unlike "-ir" "tu finisses" which gains /s/ sound!', zh: '-ir 动词单数加了 /s/ 音（je finisse），与现在时（je finis）听觉截然不同！', tag: 'Present vs. Subjunctive Sound' }
            ],
            quickCheck: {
              prompt: 'Which sentence correctly conjugates "finir" and "connaître" in the present subjunctive?',
              promptZh: '选出 `finir`（第三人称单数）与 `connaître`（第一人称单数）现在虚拟式均正确的一组：',
              options: [
                'Il faut qu’on finisse avant midi et que je connaisse la vérité.',
                'Il faut qu’on fine avant midi et que je conne la vérité.',
                'Il faut qu’on finit avant midi et que je connais la vérité.',
                'Il faut qu’on finisse avant midi et que je connaisseent la vérité.'
              ],
              answerIdx: 0,
              explain: 'ils finissent → finiss- → qu’on finisse; ils connaissent → connaiss- → que je connaisse!',
              explainZh: '两者均从直陈式 ils 词干去 -ent 而来：finissent → finisse；connaissent → connaisse。'
            }
          }
        ],
        drills: [
          {
            id: 'dt10c1_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex : Il faut que j’___ à Paw-Paw. (écrire)',
            promptZh: 'Tex 原题 #1：Tex：我得给 Paw-Paw 写封信（écrire，注意 ils écrivent → 词干 écriv-）：',
            answers: ['écrive'],
            hint: 'ils écrivent minus -ent = écriv- + -e → écrive.',
            audio: 'Il faut que j’écrive à Paw-Paw.',
            explain: 'ils écrivent → j’écrive!',
            explainZh: 'écrire 的现在时 ils 为 écrivent，去 -ent 加 -e → écrive。'
          },
          {
            id: 'dt10c1_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Bette : Il faut que Tex m’___ mieux que Tammy ! (aimer)',
            promptZh: 'Tex 原题 #2：Bette：Tex 必须比爱 Tammy 更爱我才行！（aimer）：',
            answers: ['aime'],
            hint: 'Regular -er: il aime.',
            audio: 'Il faut que Tex m’aime mieux que Tammy !',
            explain: 'qu’il aime.',
            explainZh: '第一组动词第三人称单数虚拟式与直陈式同形：aime。'
          },
          {
            id: 'dt10c1_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tex : Il faut que nous ___ en vacances. (partir)',
            promptZh: 'Tex 原题 #3：Tex：我们该去度假了（partir，nous 虚拟式）：',
            answers: ['partions'],
            hint: 'ils partent → part- + -ions → partions.',
            audio: 'Il faut que nous partions en vacances.',
            explain: 'nous partions (note -ions replaces -ons!).',
            explainZh: 'partir 词干 part- 加 nous 虚拟式词尾 -ions → partions。'
          },
          {
            id: 'dt10c1_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Paw-Paw : Il faut que Tex m’___ plus souvent. (appeler)',
            promptZh: 'Tex 原题 #4：Paw-Paw：Tex 应该更常给我打电话才对（appeler，靴形区双写 l）：',
            answers: ['appelle'],
            hint: 'Boot stem doubles the l: il appelle.',
            audio: 'Il faut que Tex m’appelle plus souvent.',
            explain: 'qu’il appelle (double l inside the boot).',
            explainZh: '第三人称单数在靴形区内，双写 l → appelle。'
          },
          {
            id: 'dt10c1_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tex : Il faut que vous ___ davantage. (travailler)',
            promptZh: 'Tex 原题 #5：Tex：你们必须更努力工作才行（travailler，vous）：',
            answers: ['travailliez'],
            hint: 'Keep -ll- and add -iez → travailliez!',
            audio: 'Il faut que vous travailliez davantage.',
            explain: 'vous travailliez (watch spelling: travaill- + -iez!).',
            explainZh: '注意拼写不要漏掉 i：travaill- + -iez → travailliez！'
          },
          {
            id: 'dt10c1_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tammy : Il faut que Tex ___ moins. (sortir)',
            promptZh: 'Tex 原题 #6：Tammy：Tex 应该少出去鬼混（sortir，3 单）：',
            answers: ['sorte'],
            hint: 'ils sortent → sort- + -e → sorte.',
            audio: 'Il faut que Tex sorte moins.',
            explain: 'sortir → qu’il sorte (NOT sort!).',
            explainZh: '注意区分：直陈式 il sort，虚拟式 qu’il sorte！'
          },
          {
            id: 'dt10c1_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Fiona : Il faut que je ___ un cours intéressant. (choisir)',
            promptZh: 'Tex 原题 #7：Fiona：我得选一门有意思的课（choisir，2 组动词别忘 -iss-）：',
            answers: ['choisisse'],
            hint: 'ils choisissent → choisiss- + -e → choisisse.',
            audio: 'Il faut que je choisisse un cours intéressant.',
            explain: 'choisisse (-ir regular takes -iss- stem).',
            explainZh: '第二组规则 -ir 动词词干带 -iss- → choisisse。'
          },
          {
            id: 'dt10c1_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tammy : Tex préfère que je ___ le couvert. (mettre)',
            promptZh: 'Tex 原题 #8：Tammy：Tex 更希望我来摆餐具（mettre，ils mettent → 词干 mett-）：',
            answers: ['mette'],
            hint: 'ils mettent → mett- + -e → mette.',
            audio: 'Tex préfère que je mette le couvert.',
            explain: 'que je mette (with two t’s!).',
            explainZh: 'mettre 的直陈式 ils 是 mettent，因此虚拟式带双写 t → mette！'
          },
          {
            id: 'dt10c1_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tammy : Tex veut que nous ___ quelques années avant le mariage. (attendre)',
            promptZh: 'Tex 原题 #9：Tammy：Tex 想让我们在结婚前再等几年（attendre，nous）：',
            answers: ['attendions'],
            hint: 'attend- + -ions → attendions.',
            audio: 'Tex veut que nous attendions quelques années avant le mariage.',
            explain: 'nous attendions.',
            explainZh: 'attendre 词干 attend- + -ions → attendions。'
          },
          {
            id: 'dt10c1_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Edouard : Il faut que nous ___ dans un bon restaurant. (manger)',
            promptZh: 'Tex 原题 #10：Edouard：我们得去一家好餐馆吃（manger，nous 前不加额外 e）：',
            answers: ['mangions'],
            hint: 'Before i, no e needed: mangions!',
            audio: 'Il faut que nous mangions dans un bon restaurant.',
            explain: 'nous mangions (g before i is soft already, no extra e!).',
            explainZh: '注意拼写：mang- 直接接 -ions（i 前 g 本身读柔音，不用写 mangeions）→ mangions。'
          },
          {
            id: 'dt10c1_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Tammy : Il ne faut pas que vous ___ en mangeant ! (parler)',
            promptZh: 'Tex 原题 #11：Tammy：吃东西的时候你们不准说话！（parler，vous）：',
            answers: ['parliez'],
            hint: 'parl- + -iez → parliez.',
            audio: 'Il ne faut pas que vous parliez en mangeant !',
            explain: 'vous parliez.',
            explainZh: 'vous 虚拟式词尾为 -iez → parliez。'
          },
          {
            id: 'dt10c1_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tex : Il faut que Tammy ___ mes poèmes ! (lire)',
            promptZh: 'Tex 原题 #12：Tex：Tammy 一定要读读我的诗！（lire，ils lisent → lis-）：',
            answers: ['lise'],
            hint: 'ils lisent → lis- + -e → lise.',
            audio: 'Il faut que Tammy lise mes poèmes !',
            explain: 'lire → qu’elle lise.',
            explainZh: 'lire 的直陈式 ils 是 lisent，词干 lis- + -e → lise。'
          }
        ],
        related: [
          { chapterId: 'ch10b_tenses_future_imp', pageId: 't10b_9', label: 'Back to 10B.9 Imperative Mood' },
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_2', label: '10C.2 Irregular Subjunctive Verbs' }
        ]
      },

      /* =========================================================
         PAGE 10C.2: IRREGULAR SUBJUNCTIVE (tas2)
      ========================================================= */
      {
        id: 't10c_2',
        code: '10C.2',
        group: 'Subjunctive Forms',
        shortTitle: 'Irregular Subjunctive (Stems)',
        title: 'Le Subjonctif Irrégulier: Two-Stem Verbs, Avoir/Être & Faire/Savoir/Pouvoir',
        titleZh: '不规则现在虚拟式：双词干靴形动词、avoir/être 与 faire/savoir/pouvoir',
        estMin: 5,
        summary: 'Irregular subjunctives break neatly into THREE memorable groups: (1) Two-stem "boot" verbs take the present "ils" stem for je/tu/il/ils (vienne, aille, boive, prenne, veuille, reçoive, meure, doive, croie, voie, tienne) and the present "nous" stem for nous/vous (venions, allions, buvions, prenions, voulions, recevions, mourions, devions, croyions, voyions, tenions); (2) Highly irregular "avoir" (aie, aies, ait, ayons, ayez, aient — note "y" for nous/vous!) and "être" (sois, sois, soit, soyons, soyez, soient — also "y"!); (3) Single completely irregular stems with regular endings: faire → fass- (fasse, fassions), savoir → sach- (sache, sachions), pouvoir → puiss- (puisse, puissions). Notice how avoir, être, and savoir match their imperative forms!',
        summaryZh: '不规则虚拟式看似庞杂，其实只需按**三大规律群**一网打尽：① **双词干“靴形”动词**：`je/tu/il/ils` 用直陈式 `ils` 词干（如 *vienne, aille, boive, prenne, veuille, reçoive, doive, meure, croie, voie, tienne*），而 `nous/vous` 用直陈式 `nous` 词干（*venions, allions, buvions, prenions, voulions, recevions, devions, mourions, croyions, voyions, tenions*）；② **绝对大王 `avoir` 与 `être`**：全套重背，特别注意 `nous/vous` 拼的是 **`y`** 而不是 `i`（`ayons / ayez` 与 `soyons / soyez`，且与命令式一模一样！）；③ **单词干特殊词根**：`faire → **fass-**`、`savoir → **sach-**`、`pouvoir → **puiss-**`，词尾依然完全规则！',
        cheatSummary: [
          { label: 'Two-Stem Rule = Present ils (Boot) + Present nous (nous/vous)', rule: 'aller (aille/allions), venir (vienne/venions), vouloir (veuille/voulions), prendre (prenne/prenions), boire (boive/buvions), devoir (doive/devions), recevoir (reçoive/recevions), voir (voie/voyions), croire (croie/croyions), mourir (meure/mourions).', ruleZh: '双词干超级规律：靴内抄 ils 现在时词干（aille, vienne, veuille, prenne），nous/vous 抄 nous 现在时词干（allions, venions, voulions, prenions）！' },
          { label: 'The Big 5 Irregulars: avoir, être, faire, savoir, pouvoir', rule: 'avoir (aie/ait/ayons/aient) · être (sois/soit/soyons/soient) · faire → fasse · savoir → sache · pouvoir → puisse! (Wait: NO "-ent" → "sache/puisse" keep single stem even for nous/vous: sachions, puissions!)', ruleZh: '必背五大王：avoir（aie/ayons）、être（sois/soyons）、faire（fasse）、savoir（sache，nous 为 sachions）、pouvoir（puisse，nous 为 puissions）！' }
        ],
        sections: [
          {
            id: 't10c2_2stem',
            heading: '1. Two-Stem Verbs, Avoir/Être & Single-Stem Irregulars',
            headingZh: '一、三大类不规则虚拟式全景速查表',
            lead: 'Study Paw-Paw’s heartfelt wedding advice to Tex below — almost every sentence uses a high-frequency irregular subjunctive ("saches, ayez, soyez, veniez, fassions, aie"):',
            leadZh: '先背熟下表两大阵营（双词干表 + 五大不规则），再精读 Paw-Paw 爷爷给 Tex 的人生忠告小对话：',
            cartoon: {
              src: './assets/tex_cartoons/tas2_death.gif',
              alt: 'Paw-Paw conseille Tex : la vie est courte, il faut que tu saches',
              caption: 'Paw-Paw : Mon cher, il faut que tu saches que la vie est courte ! Je veux que vous soyez heureux et que vous veniez me voir !',
              captionZh: 'Paw-Paw：孩子，你得明白生命苦短（que tu saches）！我只希望你们幸福（que vous soyez heureux），常来路易斯安那看我（que vous veniez me voir）！'
            },
            table: {
              headers: ['Verb', 'Boot (je / tu / il / ils)', 'Nous / Vous Form'],
              rows: [
                { cols: ['venir (tenir)', 'que je vienne · qu’ils viennent', 'que nous venions · que vous veniez'], audio: 'Il faut que vous veniez me voir.' },
                { cols: ['aller', 'que j’aille · qu’ils aillent', 'que nous allions · que vous alliez'], audio: 'Il faut que j’aille chez Paw-Paw et que nous allions au restaurant.' },
                { cols: ['vouloir', 'que je veuille · qu’ils veuillent', 'que nous voulions · que vous vouliez'], audio: 'Je suis heureuse que tu veuilles m’épouser.' },
                { cols: ['prendre / boire / devoir', 'prenne / boive / doive', 'prenions / buvions / devions'], audio: 'Il faut que Tex boive moins et que nous prenions le temps.' },
                { cols: ['recevoir / mourir / croire / voir', 'reçoive / meure / croie / voie', 'recevions / mourions / croyions / voyions'], audio: 'Il faut que je reçoive le prix et que je voie un ami.' },
                { cols: ['avoir (All Irregular)', 'que j’aie · tu aies · il ait · ils aient', 'que nous ayons · que vous ayez (with y!)'], audio: 'Il ne faut pas que Tammy et toi ayez peur. Il faut que j’aie de la compagnie.' },
                { cols: ['être (All Irregular)', 'que je sois · tu sois · il soit · ils soient', 'que nous soyons · que vous soyez (with y!)'], audio: 'Moi, je veux seulement que vous soyez heureux.' },
                { cols: ['faire / savoir / pouvoir (1-stem)', 'que je fasse / sache / puisse', 'que nous fassions / sachions / puissions'], audio: 'Il faut que tu saches la vérité et que nous fassions plus de choses ensemble.' }
              ]
            },
            dialogue: {
              title: 'Paw-Paw’s Life Advice to Tex',
              titleZh: '小对话：Paw-Paw 爷爷的人生忠告',
              lines: [
                { speaker: 'Paw-Paw', fr: 'Tex, mon cher, il faut que tu saches que la vie est courte. Il ne faut pas que Tammy et toi ayez peur de vous marier.', en: 'Tex, my dear, you have to know that life is short. You and Tammy must not be afraid to get married.', zh: 'saches（savoir 单词干）；Tammy et toi = vous → ayez（avoir 特殊 y 形式）！' },
                { speaker: 'Paw-Paw', fr: 'Moi, je veux seulement que vous soyez heureux. Après votre mariage, il faut que vous veniez me voir.', en: 'As for me, I only want you to be happy. After your wedding, you must come see me.', zh: 'soyez（être 特殊 y 形式）；veniez（venir 的 nous/vous 第二词干）。' },
                { speaker: 'Paw-Paw', fr: 'Il faut que nous fassions plus de choses ensemble. Il faut que j’aie plus de compagnie.', en: 'We have to do more things together. I’ve got to have more company.', zh: 'fassions（faire → fass- + -ions）；que j’aie（avoir 1 单）。' }
              ]
            },
            quickCheck: {
              prompt: 'Pick the sentence where BOTH "aller" (je) and "avoir" (nous) are conjugated accurately in the subjunctive:',
              promptZh: '选出 `aller`（第一人称单数）与 `avoir`（第一人称复数）现在虚拟式均正确的一句：',
              options: [
                'Il faut que j’aille à la banque bien que nous n’ayons pas d’argent.',
                'Il faut que je vais à la banque bien que nous n’avions pas d’argent.',
                'Il faut que j’allions à la banque bien que nous n’ayions pas d’argent.',
                'Il faut que j’aille à la banque bien que nous n’aions pas d’argent.'
              ],
              answerIdx: 0,
              explain: 'aller (je) = que j’aille; avoir (nous) = que nous ayons (spelled with "y", NO extra "i"!).',
              explainZh: 'que j’aille 是正确单数靴形词干；avoir 的 nous 形式是 ayons（直接用 y，绝对不写 ayions！）。'
            }
          }
        ],
        drills: [
          {
            id: 'dt10c2_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex : Il faut que j’___ chez Paw-Paw. (aller)',
            promptZh: 'Tex 原题 #1：Tex：我得去一趟 Paw-Paw 爷爷家（aller，第一人称单数）：',
            answers: ['aille'],
            hint: 'aller boot stem = aill- + -e → aille.',
            audio: 'Il faut que j’aille chez Paw-Paw.',
            explain: 'que j’aille.',
            explainZh: 'aller 的靴形区词干是 aill- → aille。'
          },
          {
            id: 'dt10c2_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Rita : Il faut que Tex ___ fidèle à Tammy ! (devenir)',
            promptZh: 'Tex 原题 #2：Rita：Tex 必须对 Tammy 忠诚才行！（devenir，同 venir 变位）：',
            answers: ['devienne'],
            hint: 'devenir conjugates just like venir: il devienne.',
            audio: 'Il faut que Tex devienne fidèle à Tammy !',
            explain: 'qu’il devienne (double n in the boot!).',
            explainZh: 'devenir 完全比照 venir 变位，单数三格双写 n → devienne。'
          },
          {
            id: 'dt10c2_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tex : Il faut que nous ___ un petit voyage. (faire)',
            promptZh: 'Tex 原题 #3：Tex：我们得来一趟短途旅行（faire，nous）：',
            answers: ['fassions'],
            hint: 'faire stem fass- + -ions → fassions.',
            audio: 'Il faut que nous fassions un petit voyage.',
            explain: 'que nous fassions (never "faisons" in subjunctive!).',
            explainZh: 'faire 的整个虚拟式全部使用词干 fass- → fassions！'
          },
          {
            id: 'dt10c2_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Paw-Paw : Il faut que Tex ___ moins. (boire)',
            promptZh: 'Tex 原题 #4：Paw-Paw：Tex 得少喝点酒了（boire，3 单）：',
            answers: ['boive'],
            hint: 'ils boivent → boiv- + -e → boive.',
            audio: 'Il faut que Tex boive moins.',
            explain: 'qu’il boive (whereas nous buvions!).',
            explainZh: 'boire 单数用靴形词干 boiv- → boive（而 nous/vous 用 buvions/buviez）。'
          },
          {
            id: 'dt10c2_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tex : Il faut que vous ___ la vérité. (savoir)',
            promptZh: 'Tex 原题 #5：Tex：你们必须知道真相（savoir，vous）：',
            answers: ['sachiez'],
            hint: 'savoir stem sach- + -iez → sachiez.',
            audio: 'Il faut que vous sachiez la vérité.',
            explain: 'savoir uses single stem sach- everywhere → que vous sachiez!',
            explainZh: 'savoir 的整个虚拟式全部使用词干 sach- → sachiez（没有 saviez 这个形式）。'
          },
          {
            id: 'dt10c2_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tammy : Il faut que Tex ___ réfléchir. (pouvoir)',
            promptZh: 'Tex 原题 #6：Tammy：Tex 得能静下来好好想想（pouvoir，3 单）：',
            answers: ['puisse'],
            hint: 'pouvoir stem puiss- + -e → puisse.',
            audio: 'Il faut que Tex puisse réfléchir.',
            explain: 'pouvoir uses single stem puiss- everywhere → qu’il puisse!',
            explainZh: 'pouvoir 的虚拟式统一使用词干 puiss- → puisse。'
          },
          {
            id: 'dt10c2_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Corey : Il faut que je ___ un psychiatre. (voir)',
            promptZh: 'Tex 原题 #7：Corey：我得去看个心理医生了（voir，1 单）：',
            answers: ['voie'],
            hint: 'ils voient → voi- + -e → voie.',
            audio: 'Il faut que je voie un psychiatre.',
            explain: 'que je voie (and nous voyions).',
            explainZh: 'voir 单数用 voi- + -e → voie（注：3 单 qu’il voie 不要忘了末尾的 e！）。'
          },
          {
            id: 'dt10c2_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tammy : Tex ne veut pas que nous ___ des enfants ! (avoir)',
            promptZh: 'Tex 原题 #8：Tammy：Tex 居然不想要我们有孩子！（avoir，nous，注意用 y）：',
            answers: ['ayons'],
            hint: 'avoir subjunctive nous = ayons (no extra i!).',
            audio: 'Tex ne veut pas que nous ayons des enfants !',
            explain: 'que nous ayons.',
            explainZh: 'avoir 虚拟式 nous 形式为 ayons（不用加 i）。'
          },
          {
            id: 'dt10c2_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tammy : Il faut que je ___ courageuse. (être)',
            promptZh: 'Tex 原题 #9：Tammy：我必须勇敢起来（être，1 单）：',
            answers: ['sois'],
            hint: 'être subjunctive je = sois.',
            audio: 'Il faut que je sois courageuse.',
            explain: 'que je sois (with -s!).',
            explainZh: 'être 虚拟式 je/tu 结尾均带 -s → sois（3 单才是 soit）。'
          },
          {
            id: 'dt10c2_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Edouard : Il faut que nous ___ au restaurant. (aller)',
            promptZh: 'Tex 原题 #10：Edouard：我们得去趟餐厅了（aller，nous 用第二词干！）：',
            answers: ['allions'],
            hint: '2-stem rule: nous = present nous stem (all-) + -ions → allions!',
            audio: 'Il faut que nous allions au restaurant.',
            explain: 'que nous allions (NOT aillions!).',
            explainZh: '典型易错点！aller 属于双词干，nous 退回普通词干 all- → allions（不是 aillions）。'
          },
          {
            id: 'dt10c2_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Tex : Il faut que je ___ le prix Goncourt ! (recevoir)',
            promptZh: 'Tex 原题 #11：Tex：我必须荣获龚古尔文学奖！（recevoir，1 单记得 ç）：',
            answers: ['reçoive'],
            hint: 'ils reçoivent → reçoiv- + -e → reçoive.',
            audio: 'Il faut que je reçoive le prix Goncourt !',
            explain: 'que je reçoive (with cedilla ç before o!).',
            explainZh: '直陈式 ils reçoivent 去 -ent 加 -e → reçoive（记得软音符 ç）。'
          },
          {
            id: 'dt10c2_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tammy : Il faut que vous ___ nous voir ! (venir)',
            promptZh: 'Tex 原题 #12：Tammy：你们一定要来看我们呀！（venir，vous 用第二词干！）：',
            answers: ['veniez'],
            hint: '2nd stem (nous venons) + -iez → veniez (single n!).',
            audio: 'Il faut que vous veniez nous voir !',
            explain: 'que vous veniez (single n outside the boot).',
            explainZh: 'venir 属于双词干，nous/vous 在靴外回归单写 n → veniez。'
          }
        ],
        related: [
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_1', label: 'Back to 10C.1 Regular Subjunctive' },
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_3', label: '10C.3 Usage 1: Obligation' }
        ]
      },

      /* =========================================================
         PAGE 10C.3: USAGE 1 - IMPERSONAL OBLIGATION (tas3a)
      ========================================================= */
      {
        id: 't10c_3',
        code: '10C.3',
        group: 'Subjunctive Triggers',
        shortTitle: 'Usage 1: Obligation & Necessity',
        title: 'Subjonctif d’Obligation: Impersonal Necessity Expressions (il faut que...)',
        titleZh: '虚拟式用法一：无人称义务与必要性表达（il faut que / il est important que…）',
        estMin: 3,
        summary: 'Whenever an impersonal expression (introduced by impersonal "il") states NECESSITY, OBLIGATION, or URGENCY followed by "que" + a specific subject, the dependent clause verb MUST be in the Subjunctive! Common triggers: il faut que (must / it is necessary that), il est important que, il est nécessaire que, il est essentiel que, il est vital que, il est inévitable que, il vaut mieux que (it’s better that), il est préférable que, il est indispensable que. Note two contrasts: (1) "il faut que tu choisisses" is more emphatic than "tu dois choisir" (devoir + inf.); (2) if no specific person is named, use "il faut / il est important de + infinitive" (no que, no subjunctive!). And watch TCF contrast: impersonal CERTAINTY ("il est certain / évident / clair que") takes the INDICATIVE!',
        summaryZh: '由形式主语 `il` 引导、表达**义务、必要或紧迫性**的无人称短语，只要后面接 **`que + 具体主语`**，从句动词**一律用虚拟式**！最高频家族：`il faut que`（必须）、`il vaut mieux que`（最好）、`il est important / nécessaire / essentiel / vital / inévitable / préférable / indispensable que`。对比两大用法：① `il faut que tu choisisses`（虚拟式从句，语气更强调个人要求）vs `tu dois choisir`（情态动词 + 不定式）；② 若不指明特定主语泛指“人们应该……”，直接用 **`il est important de + 不定式`**（没有 `que` 也没有虚拟式！）；③ 考场对比：`il est certain / évident / clair que` 表达确定事实，后面用**直陈式**！',
        cheatSummary: [
          { label: 'Core Necessity Triggers (+ que + Subjunctive)', rule: 'il faut que · il vaut mieux que · il est important / nécessaire / essentiel / indispensable / préférable / inévitable / vital que.', ruleZh: '必要家族总口诀：il faut / il vaut mieux / il est + 必要类形容词（important/nécessaire/essentiel/indispensable/préférable）+ que + 虚拟式！' },
          { label: 'Specific Subject (que + Subj.) vs. General Infinitive (de + Inf.)', rule: 'Specific person: "Il est important que vous compreniez." General principle: "Il est important de comprendre." Contrast certainty: "Il est certain que tu comprends (Indicative!)."', ruleZh: '有具体人称用 que + 虚拟式；无人称泛指或只有一主语用 de + 原形；表达客观确定（il est certain/évident que）则用直陈式！' }
        ],
        sections: [
          {
            id: 't10c3_obl',
            heading: '1. Necessity List, Devoir Contrast & Paw-Paw’s Apron Dialogue',
            headingZh: '一、必要性触发词清单、devoir 对比与小对话',
            lead: 'Read the dialogue between Paw-Paw and Tex below and spot every impersonal necessity trigger ("il est préférable que...", "il est important que...", "il faut que..."):',
            leadZh: '通读下表和 Paw-Paw 给 Tex 买围裙的幽默对话，找齐所有“无人称必要性 + 虚拟式”句式：',
            cartoon: {
              src: './assets/tex_cartoons/tas3a_apron.gif',
              alt: 'Paw-Paw achète un tablier à Tex : il faut que je t’achète un tablier',
              caption: 'Paw-Paw : Il est préférable que les hommes choisissent le vin ! C’est Tammy qui porte la culotte ? Il faut que je t’achète un tablier !',
              captionZh: 'Paw-Paw：男人挑酒才像话（préférable que... choisissent）！原来家里 Tammy 当家？那我得给你买条围裙啦（il faut que je t’achète）！'
            },
            table: {
              headers: ['Impersonal Trigger', 'Meaning', 'Example Sentence'],
              rows: [
                { cols: ['il faut que', 'it is necessary that / must', 'Il faut que tu choisisses le vin. (vs. Tu dois choisir le vin.)'], audio: 'Tex, il faut que tu choisisses le vin.' },
                { cols: ['il vaut mieux que / il est préférable que', 'it is better / preferable that', 'Il est préférable que les hommes choisissent le vin.'], audio: 'Il est préférable que les hommes choisissent le vin.' },
                { cols: ['il est important / essentiel / vital que', 'it is important / essential / vital that', 'Il est important que vous compreniez que les temps changent.'], audio: 'Il est important que vous compreniez que les temps changent.' },
                { cols: ['il est nécessaire / indispensable que', 'it is necessary / indispensable that', 'Il est nécessaire que nous passions des vacances en France.'], audio: 'Il est nécessaire que nous passions des vacances en France.' },
                { cols: ['il est inévitable que', 'it is unavoidable that', 'Il est inévitable qu’on fasse des erreurs en apprenant.'], audio: 'Il est inévitable qu’on fasse des erreurs en apprenant.' }
              ]
            },
            dialogue: {
              title: 'Paw-Paw & Tex: Who Wears the Pants?',
              titleZh: '小对话：究竟谁当家？',
              lines: [
                { speaker: 'Paw-Paw', fr: 'Écoute, mon cher, il est préférable que les hommes choisissent le vin et que les femmes fassent la cuisine.', en: 'Listen, my dear, it’s better that men choose the wine and women do the cooking.', zh: '“最好……”（il est préférable que）同时支配两个虚拟式从句：choisissent 与 fassent！' },
                { speaker: 'Tex', fr: 'Merci pour les conseils, Paw-Paw, mais il est important que vous compreniez que les temps changent.', en: 'Thanks for the advice, Paw-Paw, but it is important that you understand that times are changing.', zh: 'il est important que vous compreniez（你们该理解）；而时代在变是事实陈述，用直陈式 changent。' },
                { speaker: 'Paw-Paw', fr: 'Ah, je comprends ! C’est Tammy qui porte la culotte et pas toi ! Alors il faut que je t’achète un tablier, ma petite.', en: 'Oh, I understand! It’s Tammy who wears the pants, not you! Well then, I’ll have to buy you an apron!', zh: 'il faut que je t’achète（acheter 在靴形区变 è！）。' }
              ]
            },
            quickCheck: {
              prompt: 'Pick the sentence where the subordinate verb is in the WRONG mood:',
              promptZh: '找出从句语气（虚拟式 vs 直陈式）用**错**的一句：',
              options: [
                'Il faut que tu sais la vérité avant demain. (Error: needs subjunctive "saches"!)',
                'Il vaut mieux que nous soyons patients avec eux.',
                'Il est indispensable que vous ayez votre passeport.',
                'Il est évident que tu connais déjà la réponse.'
              ],
              answerIdx: 0,
              explain: 'After "il faut que", you MUST use subjunctive ("que tu saches"), never indicative ("sais")! Notice "il est évident que" (certainty) correctly uses indicative "connais".',
              explainZh: 'il faut que 后必用虚拟式，因此是 que tu saches，不能用直陈式 sais！最后一句 il est évident que 表示客观显而易见，用直陈式 connais 完全正确。'
            }
          }
        ],
        drills: [
          {
            id: 'dt10c3_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex : Il est vital que je ___ un grand poète. (devenir)',
            promptZh: 'Tex 原题 #1：Tex：我必须成为一名伟大的诗人，这至关重要（devenir）：',
            answers: ['devienne'],
            hint: 'Same boot stem as venir: devienne.',
            audio: 'Il est vital que je devienne un grand poète.',
            explain: 'il est vital que → subjunctive devienne.',
            explainZh: 'il est vital que 表示“至关重要”，接虚拟式 devienne。'
          },
          {
            id: 'dt10c3_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Bette : Il faut que Tex ___ la vérité. (savoir)',
            promptZh: 'Tex 原题 #2：Bette：Tex 必须知道真相（savoir）：',
            answers: ['sache'],
            hint: 'savoir → sache.',
            audio: 'Il faut que Tex sache la vérité.',
            explain: 'il faut que → qu’il sache.',
            explainZh: 'il faut que 后用 savoir 的虚拟式 sache。'
          },
          {
            id: 'dt10c3_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tex : Il vaut mieux que je ___ la vérité à Tammy. (dire)',
            promptZh: 'Tex 原题 #3：Tex：我最好还是把实情告诉 Tammy（dire，ils disent → dis-）：',
            answers: ['dise'],
            hint: 'ils disent → dis- + -e → dise.',
            audio: 'Il vaut mieux que je dise la vérité à Tammy.',
            explain: 'il vaut mieux que → que je dise.',
            explainZh: 'il vaut mieux que 引导虚拟式，dire 词干 dis- + -e → dise。'
          },
          {
            id: 'dt10c3_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Paw-Paw : Il est important que Tex ___ sa famille. (connaître)',
            promptZh: 'Tex 原题 #4：Paw-Paw：Tex 必须了解自己的家族（connaître，ils connaissent → connaiss-）：',
            answers: ['connaisse'],
            hint: 'ils connaissent → connaiss- + -e → connaisse.',
            audio: 'Il est important que Tex connaisse sa famille.',
            explain: 'connaître → qu’il connaisse.',
            explainZh: 'connaître 的直陈式 ils 是 connaissent，去 -ent 加 -e → connaisse。'
          },
          {
            id: 'dt10c3_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: L’éditeur : Tex, il faut que tu ___ un poème par mois. (écrire)',
            promptZh: 'Tex 原题 #5：出版商：Tex，你每个月都得写一首诗（écrire，tu）：',
            answers: ['écrives'],
            hint: 'tu écrives (don’t drop the -s!).',
            audio: 'Tex, il faut que tu écrives un poème par mois.',
            explain: 'que tu écrives (tu form takes -es).',
            explainZh: 'écrire 词干 écriv-，tu 词尾 -es → écrives。'
          },
          {
            id: 'dt10c3_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tammy : Il est essentiel que mes étudiants ___ tous les jours ! (étudier)',
            promptZh: 'Tex 原题 #6：Tammy：我的学生们必须每天学习！（étudier，3 复数）：',
            answers: ['étudient'],
            hint: 'Regular -er 3rd pl.: étudient.',
            audio: 'Il est essentiel que mes étudiants étudient tous les jours !',
            explain: 'qu’ils étudient.',
            explainZh: '第三人称复数虚拟式：étudient。'
          },
          {
            id: 'dt10c3_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Fiona : Il faut que nous ___ sérieux. (être)',
            promptZh: 'Tex 原题 #7：Fiona：我们必须严肃认真一点（être，nous）：',
            answers: ['soyons'],
            hint: 'être nous subjunctive = soyons (with y!).',
            audio: 'Il faut que nous soyons sérieux.',
            explain: 'que nous soyons.',
            explainZh: 'être 虚拟式 nous 形式为 soyons。'
          },
          {
            id: 'dt10c3_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tammy : Tex préfère que je ___ la cuisine. (faire)',
            promptZh: 'Tex 原题 #8：Tammy：Tex 更喜欢我来做饭（faire，je）：',
            answers: ['fasse'],
            hint: 'faire → fasse.',
            audio: 'Tex préfère que je fasse la cuisine.',
            explain: 'que je fasse.',
            explainZh: 'faire 的虚拟式词干为 fass- → fasse。'
          },
          {
            id: 'dt10c3_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tammy : Il faut que nous ___ plus souvent à Gregory Gym ! (aller)',
            promptZh: 'Tex 原题 #9：Tammy：我们应该更常去健身房！（aller，nous 记得不用 aill-）：',
            answers: ['allions'],
            hint: 'aller nous = allions!',
            audio: 'Il faut que nous allions plus souvent à Gregory Gym !',
            explain: 'que nous allions.',
            explainZh: 'aller 的 nous 虚拟式为 allions。'
          },
          {
            id: 'dt10c3_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Edouard : Il est préférable que vous ___ moins de ketchup ! (manger)',
            promptZh: 'Tex 原题 #10：Edouard：你们最好少吃点番茄酱！（manger，vous 前不加多余的 e）：',
            answers: ['mangiez'],
            hint: 'mang- + -iez → mangiez.',
            audio: 'Il est préférable que vous mangiez moins de ketchup !',
            explain: 'que vous mangiez.',
            explainZh: 'i 前不用写 e，直接 mangiez。'
          },
          {
            id: 'dt10c3_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Tex : Il est nécessaire que Tammy et moi ___ des vacances en France ! (passer)',
            promptZh: 'Tex 原题 #11：Tex：Tammy 和我（= nous）有必要去法国度个假！（passer）：',
            answers: ['passions'],
            hint: 'Tammy et moi = nous → passions.',
            audio: 'Il est nécessaire que Tammy et moi passions des vacances en France !',
            explain: 'Tammy et moi = nous → que nous passions.',
            explainZh: '“Tammy et moi”等价于 nous → passions！'
          },
          {
            id: 'dt10c3_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tex : Il vaut mieux que Tammy et Bette ___ bien. (s’entendre)',
            promptZh: 'Tex 原题 #12：Tex：Tammy 和 Bette 最好还是好好相处（s’entendre，3 复数）：',
            answers: ["s'entendent", 's’entendent'],
            hint: 'ils s’entendent (regular -re)!',
            audio: 'Il vaut mieux que Tammy et Bette s’entendent bien.',
            explain: 'qu’elles s’entendent bien.',
            explainZh: 's’entendre 第三人称复数虚拟式为 s’entendent。'
          }
        ],
        related: [
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_2', label: 'Back to 10C.2 Irregular Subjunctive' },
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_4', label: '10C.4 Usage 2: Doubt, Relatives & Superlatives' }
        ]
      },

      /* =========================================================
         PAGE 10C.4: USAGE 2 - DOUBT, NEG/INT FLIP, RELATIVES & SUPERLATIVES (tas3b)
      ========================================================= */
      {
        id: 't10c_4',
        code: '10C.4',
        group: 'Subjunctive Triggers',
        shortTitle: 'Usage 2: Doubt & Certainty Flip',
        title: 'Doubt, Uncertainty, Interrogative/Negative Flips, Relatives & Superlatives',
        titleZh: '虚拟式用法二：怀疑 vs 确定翻转（croire/douter）、不确定关系从句与主观最高级',
        estMin: 5,
        summary: 'In French, MOOD shows the speaker’s DEGREE OF CERTAINTY: Indicative = speaker treats it as fact/certain; Subjunctive = doubt, hypothesis, or question mark! Study the 4 TCF B2 high-yield rules: (1) Inherent Doubt (il est possible / impossible / incroyable / douteux que, douter que) → SUBJUNCTIVE; (2) Opinion/Certainty verbs (croire que, penser que, trouver que, être sûr/certain que, supposer que, avoir l’impression que, il est vrai/évident/clair/probable que) take INDICATIVE when affirmative ("Je crois qu’il EST là"), BUT flip to SUBJUNCTIVE when NEGATIVE or INTERROGATIVE ("Je ne crois pas / Crois-tu qu’il SOIT là ?"). Conversely, "ne pas douter que" expresses certainty → INDICATIVE! (3) Relative clauses ("qui/que"): if the existence of the thing sought is uncertain ("Existe-t-il quelqu’un qui PUISSE...") → Subjunctive; if already found/definite ("Je cherche un tatou qui EST...") → Indicative! (4) Superlatives ("le seul, l’unique, il n’y a que, le plus beau, le meilleur, le premier, le dernier"): subjective judgment → Subjunctive ("la plus belle que je connaisse"); objective fact → Indicative ("le fleuve le plus long est...").',
        summaryZh: '法语用**直陈式 vs 虚拟式**直接传递说话人对真实性的判断：**确信存在/客观事实 → 直陈式；存疑、否定、追问、主观评判 → 虚拟式**！掌握四大 TCF B2 必考黄金规则：① **天生表怀疑/可能**（`il est possible / impossible / douteux que`、`douter que`）→ **虚拟式**（哪怕 *possible* 只是“有可能”不等于“确定”，照样用虚拟！）；② **正反翻转法则（超级考点！）**：`croire / penser / trouver / être sûr / supposer / il est clair que` 在**肯定陈述句**中用**直陈式**（*Je crois qu’il est là*），一旦变成**否定句或疑问句**（*Je ne crois pas / Crois-tu qu’il soit là ?*）立刻翻转为**虚拟式**；反之，否定怀疑 `je ne doute pas que`（我不怀疑＝我确信）翻转回**直陈式**！③ **不定关系从句**：想找的人/物是否真实存在还未知（*Existe-t-il quelqu’un qui puisse...*）用**虚拟式**，心里已有明确对象（*J’ai trouvé quelqu’un qui est...*）用**直陈式**；④ **最高级（le seul / le plus / le meilleur）**：掺杂个人主观赞美用**虚拟式**（*la plus belle que je connaisse*），纯客观地理/科学事实用**直陈式**（*le plus long fleuve est l’Amazone*）！',
        cheatSummary: [
          { label: 'Mood Flip Rule (Doubt vs. Certainty)', rule: 'Je crois qu’il vient (Affirmative = Ind.) ↔ Je ne crois pas / Crois-tu qu’il vienne ? (Neg./Int. = Subj.). Je doute qu’il vienne (Subj.) ↔ Je ne doute pas qu’il vient (Ind.)! Watch "il est probable que" (Ind.!) vs "il est possible que" (Subj.!).', ruleZh: '核心翻转：croire/penser 肯定用直陈，否定/疑问变虚拟；douter 肯定用虚拟，ne doute pas 变直陈！还要区分：il est probable que（大概率→直陈）vs il est possible que（有可能→虚拟）！' },
          { label: 'Indefinite Relative Clauses & Subjective Superlatives', rule: 'Hypothetical search ("Je cherche un ami qui sache...", "Y a-t-il quelqu’un qui puisse...?") → Subjunctive! Definite person ("J’ai trouvé un ami qui sait...") → Indicative! Subjective "le seul / le plus..." → Subjunctive ("que je connaisse").', ruleZh: '找得到不确定（Existe-t-il… qui puisse）用虚拟；已锁定对象用直陈；最高级主观感叹（le seul / le plus beau que je connaisse）用虚拟！' }
        ],
        sections: [
          {
            id: 't10c4_doubt',
            heading: '1. Doubt, Opinion Flips, Relative Search & Superlative Mood Choice',
            headingZh: '一、四大情景对比矩阵与结婚前夕大辩论',
            lead: 'Contrast every affirmative/certain trigger vs. its doubtful/negative/interrogative counterpart — notice how Tammy & Tex even contrast "probable" (Indicative) vs. "possible" (Subjunctive)!',
            leadZh: '背熟下表左右对比（直陈式 vs 虚拟式），再读 Tex 和 Tammy 关于结婚的“语气交锋”对话：',
            cartoon: {
              src: './assets/tex_cartoons/tas3b_wedding.gif',
              alt: 'Tammy et Tex parlent de mariage : je ne crois pas que tu sois prête',
              caption: 'Tammy : Il est clair que tu m’aimes (Indicative!). — Tex : Je ne crois pas que tu sois prête... mais je ne doute pas que tu es la femme de ma vie !',
              captionZh: 'Tammy：很明显你爱我（直陈式 aimes）。— Tex：我不觉得你准备好结婚了（否定怀疑→虚拟式 sois），但我不怀疑你是我的命中注定（否定怀疑=确定→直陈式 es）！'
            },
            table: {
              headers: ['Context', 'Indicative (Certainty / Fact)', 'Subjunctive (Doubt / Subjective)'],
              rows: [
                { cols: ['Doubt vs. Certainty', 'il est clair / évident / vrai / certain / probable que', 'il est possible / impossible / douteux / incroyable que · douter que'], audio: 'Il est évident qu’Edouard sait bien cuisiner, mais il est impossible qu’il soit chez MacDo.' },
                { cols: ['Opinion Verbs (croire, penser, trouver, être sûr)', 'Affirmative: Je crois qu’il est là. / Je ne doute pas qu’elle vient.', 'Neg. / Question: Je ne crois pas / Crois-tu qu’il soit là ? / Je doute qu’elle vienne.'], audio: 'Crois-tu que Corey soit chez MacDo ? Non, je ne crois pas qu’il y soit.' },
                { cols: ['Relative Clauses (qui / que / dont / où)', 'Known/definite antecedent: Je cherche un tatou qui est bilingue (je l’ai déjà trouvé !).', 'Uncertain existence: Y a-t-il quelqu’un qui puisse m’aider ? Existe-t-il une fille qui ne soit pas obsédée ?'], audio: 'Y a-t-il quelqu’un qui puisse m’aider ? Existe-t-il une fille qui comprenne ?' },
                { cols: ['Superlatives (le seul, le plus, le meilleur)', 'Objective fact: Le fleuve le plus long du monde est l’Amazone.', 'Personal opinion: Tammy est la plus belle tatou que je connaisse !'], audio: 'Tammy est la plus belle tatou que je connaisse !' }
              ]
            },
            dialogue: {
              title: 'Tammy & Tex: Ready for Marriage?',
              titleZh: '小对话：语气翻转实战交锋',
              lines: [
                { speaker: 'Tammy', fr: 'Je suppose que nous allons nous marier. Il est clair que tu m’aimes.', en: 'I suppose we are going to get married. It is clear that you love me.', zh: '肯定“猜测/很明显” → 均用直陈式（allons, aimes）。' },
                { speaker: 'Tex', fr: 'Mais Tammy, je ne crois pas que tu sois prête pour le mariage. Et je ne suis pas sûr que tes parents soient d’accord.', en: 'But Tammy, I don’t think you’re ready for marriage. And I’m not sure your parents agree.', zh: '“不相信 / 不确定”否定引发怀疑 → 均翻转为虚拟式（sois, soient）！' },
                { speaker: 'Tammy', fr: 'Te semble-t-il que je sois trop jeune ? Tu n’es pas certain que je sois la femme de ta vie ?', en: 'Does it seem to you that I’m too young? You’re not sure I’m the woman of your life?', zh: 'il semble que 搭配疑问/否定语气 → 同样用虚拟式（sois）！（注意：il me semble que 肯定句一般用直陈，仅 il semble que 无人称不带间接宾语 me 时常用虚拟）。' },
                { speaker: 'Tex', fr: 'Oh, chérie, je ne doute pas que tu es la femme de ma vie. Mais il est certain que je n’ai pas assez d’argent.', en: 'Oh darling, I don’t doubt that you’re the woman of my life. But it’s certain that I don’t have enough money.', zh: 'je ne doute pas que（否定怀疑＝确信）＋ il est certain que → 全部翻转回直陈式（es, ai）！' }
              ]
            },
            quickCheck: {
              prompt: 'Look closely at these two famous TCF contrast sentences. Pick the ONE accurate pair:',
              promptZh: '选出 **probable vs possible** 与 **否定怀疑** 均完全正确的一组：',
              options: [
                'Il est probable qu’il viendra (Ind.), mais il est possible qu’il soit en retard (Subj.).',
                'Il est probable qu’il vienne (Subj.), mais il est possible qu’il est en retard (Ind.).',
                'Je ne doute pas qu’il soit intelligent (Subj.).',
                'Je pense qu’il soit prêt (Subj.).'
              ],
              answerIdx: 0,
              explain: '"il est probable que" leans toward certainty → Indicative (viendra); "il est possible que" leaves room for doubt → Subjunctive (soit)! And "ne pas douter que" / affirmative "penser que" take Indicative.',
              explainZh: '死记法考黄金铁律：il est probable que（很有可能→直陈式），il est possible que（只是可能→虚拟式）；肯定 penser 与否定 ne doute pas 均接直陈式！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10c4_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1 (Certainty!): Tex est certain que ses poèmes ___ excellents. (être)',
            promptZh: 'Tex 原题 #1：Tex 很确定他的诗非常棒（être certain que 肯定句 → 直陈/虚拟？）：',
            answers: ['sont'],
            hint: 'Affirmative "est certain que" expresses certainty → PRESENT INDICATIVE (sont)!',
            audio: 'Tex est certain que ses poèmes sont excellents.',
            explain: 'est certain que (affirmative) → indicative "sont"!',
            explainZh: 'être certain que 肯定句表客观确定 → 用直陈式 sont（不要看到 que 就乱填虚拟式！）。'
          },
          {
            id: 'dt10c4_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2 (Impossibility!): Il est impossible que Bette ___ honnête avec Tammy. (être)',
            promptZh: 'Tex 原题 #2：Bette 不可能对 Tammy 坦诚相待（il est impossible que → 直陈/虚拟？）：',
            answers: ['soit'],
            hint: 'il est impossible que → subjunctive (soit)!',
            audio: 'Il est impossible que Bette soit honnête avec Tammy.',
            explain: 'il est impossible que → subjunctive "soit".',
            explainZh: 'il est impossible que 表怀疑/不可能 → 用虚拟式 soit。'
          },
          {
            id: 'dt10c4_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3 (Affirmative opinion!): Bette croit que Tex ___ quitter Tammy. (vouloir)',
            promptZh: 'Tex 原题 #3：Bette 相信 Tex 想甩掉 Tammy（croire que 肯定陈述句）：',
            answers: ['veut'],
            hint: 'Affirmative "croit que" = belief/certainty → INDICATIVE "veut"!',
            audio: 'Bette croit que Tex veut quitter Tammy.',
            explain: 'Affirmative "croit que" → present indicative "veut" (NOT veuille!).',
            explainZh: 'croire que 在肯定陈述句中不触发虚拟式 → 直陈式 veut！'
          },
          {
            id: 'dt10c4_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4 (Negative Question!): Ne pensez-vous pas que Tammy ___ un peu naïve ? (être)',
            promptZh: 'Tex 原题 #4：难道您不觉得 Tammy 有点太天真了吗？（否定＋疑问的 penser que）：',
            answers: ['soit'],
            hint: 'Negative/interrogative "penser que" introduces doubt → subjunctive "soit"!',
            audio: 'Ne pensez-vous pas que Tammy soit un peu naïve ?',
            explain: 'Negative + question "Ne pensez-vous pas que" → subjunctive "soit"!',
            explainZh: '否定疑问句“难道你不觉得……吗”带有怀疑追问语气 → 虚拟式 soit。'
          },
          {
            id: 'dt10c4_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5 (Superlative + Question!): Corey est-il le seul cafard qui ___ le français ? (comprendre)',
            promptZh: 'Tex 原题 #5：Corey 是唯一能听懂法语的蟑螂吗？（le seul + 疑问）：',
            answers: ['comprenne'],
            hint: '"le seul... qui" + question → subjunctive (ils comprennent → comprenn- + -e = comprenne)!',
            audio: 'Corey est-il le seul cafard qui comprenne le français ?',
            explain: 'Superlative ("le seul") + question → subjunctive "comprenne"!',
            explainZh: '“唯一的 + 疑问不确定”触发虚拟式：comprendre（ils comprennent）→ comprenne！'
          },
          {
            id: 'dt10c4_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6 (Uncertain Relative!): Corey : Au secours ! Y a-t-il quelqu’un qui ___ m’aider ? (pouvoir)',
            promptZh: 'Tex 原题 #6：Corey：救命！有谁能帮帮我吗？（不确定是否存在帮助者）：',
            answers: ['puisse'],
            hint: '"Y a-t-il quelqu’un qui..." (uncertain existence) → subjunctive "puisse"!',
            audio: 'Au secours ! Y a-t-il quelqu’un qui puisse m’aider ?',
            explain: 'Uncertain relative antecedent in a question → subjunctive "puisse"!',
            explainZh: '存在与否尚未可知（Y a-t-il quelqu’un qui...）→ 虚拟式 puisse。'
          },
          {
            id: 'dt10c4_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Il est évident qu’Edouard ___ bien cuisiner. (savoir)',
            promptZh: 'Tex 原题 #7：很明显 Edouard 非常擅长做菜（il est évident que）：',
            answers: ['sait'],
            hint: 'il est évident que = objective certainty → INDICATIVE "sait"!',
            audio: 'Il est évident qu’Edouard sait bien cuisiner.',
            explain: 'il est évident que → indicative "sait"!',
            explainZh: 'il est évident que 表达“显而易见”的确定事实 → 用直陈式 sait！'
          },
          {
            id: 'dt10c4_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tex trouve que Tammy le ___ bien. (connaître)',
            promptZh: 'Tex 原题 #8：Tex 觉得 Tammy 很了解他（trouver que 肯定句）：',
            answers: ['connaît'],
            hint: 'Affirmative "trouve que" → INDICATIVE "connaît" (with î)!',
            audio: 'Tex trouve que Tammy le connaît bien.',
            explain: 'Affirmative "trouver que" → indicative "connaît".',
            explainZh: '肯定句 trouver que 后用直陈式 connaît（别忘了 t 前长音符 î）。'
          },
          {
            id: 'dt10c4_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Je ne crois pas que Joe-Bob ___ prêter sa voiture à Tex. (vouloir)',
            promptZh: 'Tex 原题 #9：我觉得 Joe-Bob 不会想把车借给 Tex 的（否定 croire que）：',
            answers: ['veuille'],
            hint: 'Negative "ne crois pas que" → SUBJUNCTIVE "veuille"!',
            audio: 'Je ne crois pas que Joe-Bob veuille prêter sa voiture à Tex.',
            explain: 'Negative "croire que" → subjunctive "veuille"!',
            explainZh: '否定 croire que 表达怀疑否定，翻转为虚拟式 veuille。'
          },
          {
            id: 'dt10c4_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Il est possible que Joe-Bob ___ des difficultés. (avoir)',
            promptZh: 'Tex 原题 #10：Joe-Bob 可能会遇到点困难（il est possible que → 虚拟式！）：',
            answers: ['ait'],
            hint: '"il est possible que" always triggers subjunctive → il ait!',
            audio: 'Il est possible que Joe-Bob ait des difficultés.',
            explain: 'il est possible que → subjunctive "ait" (unlike "il est probable que"!).',
            explainZh: 'il est possible que（只是有可能，仍存不确定性）固定用虚拟式 ait！'
          },
          {
            id: 'dt10c4_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Bette a l’impression que Tex ___ de plus en plus beau. (devenir)',
            promptZh: 'Tex 原题 #11：Bette 觉得 Tex 越变越帅了（avoir l’impression que 肯定句）：',
            answers: ['devient'],
            hint: 'Affirmative "avoir l’impression que" → INDICATIVE "devient"!',
            audio: 'Bette a l’impression que Tex devient de plus en plus beau.',
            explain: 'Affirmative "avoir l’impression que" → indicative "devient".',
            explainZh: '肯定陈述句“我觉得……”用直陈式 devient（只有变成否定/疑问时才变虚拟）。'
          },
          {
            id: 'dt10c4_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12 (Objective Fact!): Sais-tu que le fleuve le plus long du monde ___ l’Amazone ? (être)',
            promptZh: 'Tex 原题 #12：你知道世界上最长的河流是亚马逊河吗？（客观地理事实！）：',
            answers: ['est'],
            hint: '"Sais-tu que" asks about an objective fact → INDICATIVE "est"!',
            audio: 'Sais-tu que le fleuve le plus long du monde est l’Amazone ?',
            explain: 'Objective geographical fact + "savoir que" → indicative "est"!',
            explainZh: '注意陷阱！“le plus long du monde”是客观地理事实，且“Sais-tu que”表已知客观知识 → 必须用直陈式 est！'
          }
        ],
        related: [
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_3', label: 'Back to 10C.3 Usage 1: Obligation' },
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_5', label: '10C.5 Usage 3: Will, Desire & Emotion' }
        ]
      },

      /* =========================================================
         PAGE 10C.5: USAGE 3 - WILL, DESIRE, EMOTION & OPINION (tas4)
      ========================================================= */
      {
        id: 't10c_5',
        code: '10C.5',
        group: 'Subjunctive Triggers',
        shortTitle: 'Usage 3: Will, Emotion & Opinion',
        title: 'Will, Desire, Emotion & Opinion (+ The Espérer Trap & One-Subject Rule)',
        titleZh: '虚拟式用法三：意愿、情绪与评价（必考 espérer 陷阱与同主语不定式切换）',
        estMin: 5,
        summary: 'Whenever there are TWO DIFFERENT SUBJECTS connected by "que", the subjunctive is REQUIRED after expressions of: (1) Will & Desire (vouloir que, préférer que, aimer mieux que, souhaiter que, désirer que, exiger que, attendre que, avoir envie que — GIANT EXCEPTION: ESPÉRER QUE = INDICATIVE because French treats hope as looking forward to reality: "Bette espère qu’il viendra"!), (2) Emotion (être content/heureux/ravi/triste/surpris/étonné/désolé/mécontent que, regretter que, se réjouir que, craindre que, redouter que, avoir peur que), and (3) Impersonal Opinion (il est bon / juste / urgent / logique / dommage / utile que). Remember TWO GOLDEN RULES: (a) Notice Present Subjunctive can carry a FUTURE meaning ("Je suis ravie que vous veniez ce soir"); (b) If BOTH halves share the SAME SUBJECT, drop "que" + Subjunctive and use "de + Infinitive" ("Tammy est ravie de recevoir des amis", "Edouard ne veut pas faire la cuisine")!',
        summaryZh: '只要主句与从句是**两个不同的主语**（如 *Tex veut que Tammy...*），遇到以下三大主观触发词，从句一律用虚拟式：① **意愿与要求**：`vouloir que, préférer que, souhaiter que, désirer que, exiger que, avoir envie que`（⚠️ **TCF 超级陷阱**：**`espérer que`（希望）在肯定句里用直陈式 / 将来时**，绝不用虚拟式！如 *Bette espère qu’il tombera amoureux*！）；② **情感与害怕**：`être content(e) / ravi(e) / triste / surpris(e) / étonné(e) que`、`regretter que`、`se réjouir que`、`craindre que / avoir peur que`；③ **主观评价无人称**：`il est bon / juste / urgent / logique / dommage que`。两大实用法则：(a) 虚拟式没有“将来时态”，现在虚拟式自带“将要……”语义（*je suis ravie que nous venions ce soir*）；(b) **一旦前后主语是同一个人**，立刻删掉 `que + 虚拟式`，改用 **`de + 不定式`**（*Tammy est ravie de recevoir*）或直接接不定式（*Edouard ne veut pas faire*）！',
        cheatSummary: [
          { label: 'Will/Emotion → Subjunctive, EXCEPT espérer que → Indicative!', rule: 'souhaiter / vouloir / préférer / exiger / craindre / regretter / être ravi que + SUBJUNCTIVE. Bette espère que Tex VIENDRA / TOMBERA (Indicative/Future after espérer!).', ruleZh: '同义大陷阱：souhaiter que（祝愿）用虚拟式，但 espérer que（希望）用直陈式/将来时！另外 avoir peur / craindre（害怕）用虚拟式！' },
          { label: 'Two Subjects = que + Subjunctive | One Subject = (de +) Infinitive!', rule: '2 subjects: "Tammy est ravie que nous venions." 1 subject: "Tammy est ravie de recevoir des amis." / "Fiona craint de ne pas pouvoir venir."', ruleZh: '换主语用 que + 虚拟式；同一主语立刻切回不定式：Tammy est ravie DE recevoir（绝不说 Tammy est ravie qu’elle reçoive）！' }
        ],
        sections: [
          {
            id: 't10c5_will_emo',
            heading: '1. Will, Emotion, Impersonal Opinion & The One-Subject Rule',
            headingZh: '一、意愿、情绪与评价触发词全表（含单主语切换）',
            lead: 'Notice also how "être surpris(e) quand..." (temporal fact with quand!) takes Indicative, whereas "être surpris(e) que..." takes Subjunctive — inspect the cartoon and wine-pairing dialogue below!',
            leadZh: '看表里的四大板块（特别留意 `espérer que` 例外，以及 `quand` 引导客观时间从句用直陈式！），然后读完选红酒的小对话：',
            cartoon: {
              src: './assets/tex_cartoons/tas4_bugspray.gif',
              alt: 'Fiona craint qu’on mette un pesticide autour de l’immeuble',
              caption: 'Fiona craint qu’on mette un pesticide autour de l’immeuble (2 sujets → Subjonctif) ! Une seule personne ? Fiona craint de ne pas pouvoir venir (de + Inf.) !',
              captionZh: 'Fiona 担心有人在楼周围喷杀虫剂（Fiona vs on 两个主语 → 虚拟式 qu’on mette）；如果主语都是她自己：Fiona craint de ne pas pouvoir venir（直接 de + 不定式）！'
            },
            table: {
              headers: ['Category', 'Key Triggers (+ que + Subj.)', 'One-Subject / Trap Note'],
              rows: [
                { cols: ['Will & Desire', 'vouloir que · préférer que · souhaiter que · désirer que · exiger que · attendre que · avoir envie que', 'TRAP: espérer que = INDICATIVE ("j’espère qu’il viendra")! 1 subj.: il veut cuisiner.'], audio: 'Tex veut qu’Edouard fasse la cuisine, mais il espère qu’il préparera du couscous.' },
                { cols: ['Happiness & Surprise', 'être content(e) / heureux(-se) / ravi(e) / surpris(e) / étonné(e) que · se réjouir que', '1 subject → "être ravi(e) de + inf." / With quand: "surpris quand il dit (Ind.)".'], audio: 'Tammy est ravie que nous venions dîner chez elle ce soir.' },
                { cols: ['Sadness, Regret & Fear', 'être triste / désolé(e) / mécontent(e) que · regretter que · craindre que · avoir peur que · redouter que', '1 subject → "craint de ne pas pouvoir venir". With 2 subj.: subjunctive!'], audio: 'Fiona craint qu’on mette un pesticide. Elle craint de ne pas pouvoir venir.' },
                { cols: ['Impersonal Opinion', 'il est bon / juste / urgent / utile / logique / dommage que', 'General/1-subj → "Il est bon de pouvoir s’amuser avec ses amis."'], audio: 'Il est bon que Tex lise le journal et il est bon de s’amuser.' }
              ]
            },
            dialogue: {
              title: 'Tammy & Tex: Choosing the Dinner Wine',
              titleZh: '小对话：挑红酒风波（几乎句句虚拟式！）',
              lines: [
                { speaker: 'Tammy', fr: 'Tex, je voudrais que tu choisisses un bon vin. Mais je préfère que ce soit un rouge s’il te plaît. Il serait dommage que nous buvions du vin blanc avec du bœuf.', en: 'Tex, I would like you to pick a good wine. But I’d prefer a red please. It would be a pity if we drank white wine with beef.', zh: 'voudrais que / préfère que / il serait dommage que → 连环三个虚拟式：choisisses, soit, buvions！' },
                { speaker: 'Tammy', fr: 'Mais enfin Tex, pas un vin américain ! Il serait préférable que nous ouvrions une bouteille de Bordeaux ou de Bourgogne !', en: 'Tex! Not an American wine! It would be preferable if we opened a bottle of Bordeaux or Burgundy!', zh: '注意规则：即便主句用条件式 *serait préférable que*，从句照样用**现在虚拟式**（ouvrions）！' },
                { speaker: 'Tex', fr: 'Ma chère Tammy, j’ai bien peur que nous n’ayons plus de vins français en réserve ! — Tammy : Je suis étonnée qu’il n’y ait plus de vin français.', en: 'My dear Tammy, I’m afraid we have no more French wines left! — Tammy: I’m surprised there isn’t any French wine left.', zh: 'j’ai peur que → n’ayons plus；je suis étonnée que → qu’il n’y ait plus。' }
              ]
            },
            quickCheck: {
              prompt: 'Pick the sentence with ZERO mood or structure errors:',
              promptZh: '选出语气或单双主语结构**完全正确**的一句：',
              options: [
                'Bette espère qu’il viendra, mais Tammy regrette qu’il soit déjà parti.',
                'Bette espère qu’il vienne, et Tammy est ravie qu’elle puisse venir.',
                'Je suis ravi que je reçoive mes amis ce soir.',
                'Il est dommage de ce que tu fumes.'
              ],
              answerIdx: 0,
              explain: '"espérer que" takes Indicative/Future ("viendra"), while "regretter que" takes Subjunctive ("soit parti"). Saying "Je suis ravi que je..." breaks the one-subject rule (must be "de recevoir")!',
              explainZh: 'espérer que 接将来时/直陈式（viendra），regretter que 接虚拟式（soit）；主语同为 je 或 Tammy 时不能用 que，应改 de + 不定式！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10c5_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tammy ne veut pas que Tex ___ un vin californien. (choisir)',
            promptZh: 'Tex 原题 #1：Tammy 不想让 Tex 选加州葡萄酒（choisir，2 组 -iss-）：',
            answers: ['choisisse'],
            hint: 'ne veut pas que → subjunctive choisisse.',
            audio: 'Tammy ne veut pas que Tex choisisse un vin californien.',
            explain: 'choisir → qu’il choisisse.',
            explainZh: 'vouloir que（两个不同主语）触发虚拟式 → choisisse。'
          },
          {
            id: 'dt10c5_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tammy est ravie que leurs amis ___ dîner chez elle. (venir)',
            promptZh: 'Tex 原题 #2：Tammy 非常高兴他们的朋友们来她家吃晚饭（venir，3 复数）：',
            answers: ['viennent'],
            hint: '3rd pl. venir subjunctive = viennent (double n).',
            audio: 'Tammy est ravie que leurs amis viennent dîner chez elle.',
            explain: 'être ravie que → qu’ils viennent.',
            explainZh: '情绪表达 être ravie que + 复数 viennent。'
          },
          {
            id: 'dt10c5_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Bette a peur que Tex ___ vraiment amoureux de Tammy. (être)',
            promptZh: 'Tex 原题 #3：Bette 害怕 Tex 是真的爱上 Tammy 了（être）：',
            answers: ['soit'],
            hint: 'avoir peur que → subjunctive soit.',
            audio: 'Bette a peur que Tex soit vraiment amoureux de Tammy.',
            explain: 'avoir peur que → qu’il soit.',
            explainZh: 'fear 表达 avoir peur que 触发虚拟式 → soit。'
          },
          {
            id: 'dt10c5_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Fiona craint qu’il y ___ de l’Amdro sur le campus. (avoir)',
            promptZh: 'Tex 原题 #4：Fiona 担心校园里撒了杀蚁药 Amdro（il y avoir 的虚拟式！）：',
            answers: ['ait'],
            hint: 'il y a → subjunctive "qu’il y ait"!',
            audio: 'Fiona craint qu’il y ait de l’Amdro sur le campus.',
            explain: 'craindre que → qu’il y ait.',
            explainZh: 'il y a 的虚拟式永远是 qu’il y ait。'
          },
          {
            id: 'dt10c5_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tex exige que ses étudiants ___ en France pour les vacances. (aller)',
            promptZh: 'Tex 原题 #5：Tex 强烈要求他的学生假期都去法国（aller，3 复数）：',
            answers: ['aillent'],
            hint: 'aller 3rd pl. boot stem = aillent.',
            audio: 'Tex exige que ses étudiants aillent en France pour les vacances.',
            explain: 'exiger que → qu’ils aillent.',
            explainZh: 'exiger que 表达强烈要求 → 靴形复数 aillent。'
          },
          {
            id: 'dt10c5_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Trey a envie que Tammy ___ du skate-board avec lui. (faire)',
            promptZh: 'Tex 原题 #6：Trey 好想让 Tammy 跟他一起玩滑板（faire，3 单）：',
            answers: ['fasse'],
            hint: 'avoir envie que → qu’elle fasse.',
            audio: 'Trey a envie que Tammy fasse du skate-board avec lui.',
            explain: 'avoir envie que → qu’elle fasse.',
            explainZh: 'avoir envie que 表达强烈意愿 → fasse。'
          },
          {
            id: 'dt10c5_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Il est bon que Tex ___ le Daily Texan tous les jours. (lire)',
            promptZh: 'Tex 原题 #7：Tex 每天看校报是件好事（lire，3 单）：',
            answers: ['lise'],
            hint: 'il est bon que → qu’il lise.',
            audio: 'Il est bon que Tex lise le Daily Texan tous les jours.',
            explain: 'il est bon que → qu’il lise.',
            explainZh: '评价类无人称 il est bon que → lise。'
          },
          {
            id: 'dt10c5_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8 (Watch the Trap!): Bette espère que Tex ___ amoureux d’elle. (tomber — present indicative!)',
            promptZh: 'Tex 原题 #8（注意大陷阱！）：Bette 希望 Tex 会爱上她（espérer que + 直陈现在时！）：',
            answers: ['tombe', 'tombera'],
            hint: 'EXCEPTION: espérer que takes INDICATIVE (tombe / tombera), NOT subjunctive (same -er form for present, or future tombera)!',
            audio: 'Bette espère que Tex tombe amoureux d’elle.',
            explain: 'espérer que ALWAYS takes Indicative (present tombe or future tombera)!',
            explainZh: '特例牢记：espérer que 后接直陈式（现在时 tombe 或简单将来时 tombera 均对，在 -er 动词中 tombe 虽写法同虚拟但语法性质属于直陈式！）。'
          },
          {
            id: 'dt10c5_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9 (Quand = Indicative!): Tammy est surprise quand Trey ___ qu’il veut sortir avec elle. (dire)',
            promptZh: 'Tex 原题 #9（留意连接词是 quand 而非 que！）：每当 Trey 说想约她出去时，Tammy 总是很惊讶（dire）：',
            answers: ['dit'],
            hint: 'Notice "quand" (NOT "que"!) → quand takes INDICATIVE ("dit")!',
            audio: 'Tammy est surprise quand Trey dit qu’il veut sortir avec elle.',
            explain: '"être surpris quand..." describes a real recurring time → Indicative "dit" (NOT "dise")!',
            explainZh: '考场大杀器！这里不是 je suis surprise QUE（那才用 dise），而是 QUAND（当……时，客观反复发生的事实）→ 必须用直陈式 dit！'
          },
          {
            id: 'dt10c5_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Rita exige que ses enfants ___ leurs devoirs. (faire)',
            promptZh: 'Tex 原题 #10：Rita 要求孩子们必须把作业做完（faire，3 复数）：',
            answers: ['fassent'],
            hint: 'faire 3rd pl. subjunctive = fassent.',
            audio: 'Rita exige que ses enfants fassent leurs devoirs.',
            explain: 'qu’ils fassent.',
            explainZh: 'exiger que + 第三人称复数 → fassent。'
          },
          {
            id: 'dt10c5_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Trey voudrait que Tammy ___ jouer du rap. (pouvoir)',
            promptZh: 'Tex 原题 #11：Trey 希望 Tammy 能玩说唱音乐（pouvoir）：',
            answers: ['puisse'],
            hint: 'pouvoir → puisse.',
            audio: 'Trey voudrait que Tammy puisse jouer du rap.',
            explain: 'voudrait que → qu’elle puisse.',
            explainZh: 'voudrait que（即使主句是条件式）同样触发虚拟式 → puisse。'
          },
          {
            id: 'dt10c5_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Il est essentiel que les étudiants ___ conjuguer le subjonctif. (savoir)',
            promptZh: 'Tex 原题 #12：学生们必须会变虚拟式，这至关重要（savoir，3 复数）：',
            answers: ['sachent'],
            hint: 'savoir 3rd pl. subjunctive = sachent!',
            audio: 'Il est essentiel que les étudiants sachent conjuguer le subjonctif.',
            explain: 'qu’ils sachent.',
            explainZh: 'savoir 第三人称复数虚拟式为 sachent。'
          }
        ],
        related: [
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_4', label: 'Back to 10C.4 Usage 2: Doubt' },
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_6', label: '10C.6 Usage 4: Subjunctive Conjunctions' }
        ]
      },

      /* =========================================================
         PAGE 10C.6: USAGE 4 - SUBJUNCTIVE CONJUNCTIONS (tas5)
      ========================================================= */
      {
        id: 't10c_6',
        code: '10C.6',
        group: 'Subjunctive Triggers',
        shortTitle: 'Usage 4: Subjunctive Conjunctions',
        title: 'Conjunctions Taking the Subjunctive: Intention, Fear, Time, Concession & Condition',
        titleZh: '虚拟式用法四：五大虚拟式连词家族（目的、担心、时间、让步、条件与 4 个同主语例外）',
        estMin: 5,
        summary: 'Certain two-part subordinating conjunctions ending in "que" ALWAYS require the SUBJUNCTIVE when introducing a new subject — organized into FIVE core families: (1) INTENTION (pour que, afin que, de sorte que — "so that"); (2) FEAR (de peur que, de crainte que — "for fear that", often with optional stylistic "ne explétif", which does NOT negate the verb!); (3) TIME (avant que "before", en attendant que "while waiting for", jusqu’à ce que "until"); (4) OBSTACLE / CONCESSION (bien que, quoique "although", à moins que "unless"); (5) CONDITION (à condition que, pourvu que "provided that", sans que "without"). CRITICAL EXCEPTION: While most conjunctions switch to "preposition + infinitive" when both clauses share one subject ("pour / avant de / sans + inf."), FOUR conjunctions KEEP the Subjunctive EVEN WITH THE SAME SUBJECT: BIEN QUE, QUOIQUE, POURVU QUE, and JUSQU’À CE QUE!',
        summaryZh: '法语有五大高频 `... que` 从属连词家族，只要引导从句**必定触发虚拟式**：① **目的**：`pour que`、`afin que`、`de sorte que`（为了，以便）；② **担心**：`de peur que`、`de crainte que`（唯恐，以免——书面语常带不表否定含义的**赘词 `ne explétif`**，例如 *de crainte qu’elle ne se fâche*）；③ **时间先后**：`avant que`（在……之前）、`en attendant que`（在等待……期间）、`jusqu’à ce que`（直到……为止）；④ **障碍与让步**：`bien que`、`quoique`（尽管，虽然）、`à moins que`（除非）；⑤ **条件与排他**：`à condition que`、`pourvu que`（只要，前提是）、`sans que`（而没有）。⚠️ **TCF B2 必考黄金例外**：大多数虚拟式连词在前后主语相同时必须换成 `介词 + 不定式`（`pour / avant de / sans`），唯独**这 4 个连词即使前后主语是同一个人也依然直接接虚拟式**：**`bien que`、`quoique`、`pourvu que`、`jusqu’à ce que`**！另外，记住 `parce que / puisque / pendant que`（因果与同时）永远用**直陈式**！',
        cheatSummary: [
          { label: '5 Subjunctive Conjunction Families', rule: 'Intention: pour que, afin que. Fear: de peur que, de crainte que (+ ne explétif). Time: avant que, en attendant que, jusqu’à ce que. Obstacle: bien que, quoique, à moins que. Condition: à condition que, pourvu que, sans que.', ruleZh: '五大必背虚拟连词：目的(pour/afin que)、害怕(de peur/crainte que)、时间(avant/jusqu’à ce que)、让步(bien que/quoique/à moins que)、条件(à condition/pourvu/sans que)。' },
          { label: '4 Same-Subject Subjunctive Exceptions!', rule: 'Usually same subject = prep + inf. ("pour voir", "avant de partir"). BUT: bien que, quoique, pourvu que, and jusqu’à ce que KEEP the subjunctive even with the SAME subject ("Tammy aime Tex bien qu’elle le trouve puéril")!', ruleZh: '同主语四大顽固派：bien que、quoique、pourvu que、jusqu’à ce que 就算主句从句是同一个人也照用虚拟式！其他（pour/avant/sans 等）同主语须变不定式。' }
        ],
        sections: [
          {
            id: 't10c6_conj5',
            heading: '1. Five Subjunctive Conjunction Families & Ne Explétif',
            headingZh: '一、五大虚拟式连词全表与赘词 ne explétif',
            lead: 'Follow Bette flirting with Tex and Tammy finding out — every highlighted conjunction below triggers the subjunctive (while "parce que / puisque / pendant que" take Indicative!):',
            leadZh: '看 Bette、Tex 和 Tammy 的三角闹剧如何用齐五大虚拟式连词（并注意 `de crainte qu’elle ne se fâche` 中的 `ne` 只是文雅修辞，绝对不是“不生气”！）：',
            cartoon: {
              src: './assets/tex_cartoons/tas5_flirt.gif',
              alt: 'Bette drague Tex pour qu’il lui donne de bonnes notes',
              caption: 'Bette drague Tex pour qu’il lui donne de bonnes notes et afin que Tammy soit jalouse ! Tex se tait de crainte qu’elle ne se fâche.',
              captionZh: 'Bette 撩 Tex 是为了他给自己高分（pour qu’il donne），也为了让 Tammy 吃醋（afin que Tammy soit）！Tex 闭口不言，免得 Tammy 生气（de crainte qu’elle ne se fâche）。'
            },
            table: {
              headers: ['Semantic Group', 'Conjunctions (+ Subjunctive)', 'Authentic Example'],
              rows: [
                { cols: ['Intention / Goal', 'pour que · afin que · de sorte que ("in order that")', 'Bette drague Tex pour qu’il lui donne de bonnes notes et afin que Tammy soit jalouse.'], audio: 'Bette drague Tex afin que Tammy soit jalouse.' },
                { cols: ['Fear (+ optional ne explétif)', 'de peur que · de crainte que ("for fear that / lest")', 'Tex n’a rien dit de crainte qu’elle (ne) se fâche, de peur que Tammy soit blessée.'], audio: 'Tex n’a rien dit à Tammy de crainte qu’elle ne se fâche.' },
                { cols: ['Time Boundary', 'avant que · en attendant que · jusqu’à ce que', 'Il doit agir avant que Tammy (ne) se rende compte, jusqu’à ce qu’elle arrive.'], audio: 'Il doit faire quelque chose avant que Tammy se rende compte.' },
                { cols: ['Concession / Restriction', 'bien que · quoique ("although") · à moins que ("unless")', 'Tammy doute, bien qu’il ait l’air sincère, à moins que ce (ne) soit toi !'], audio: 'Tammy a du mal à croire Tex, bien qu’il ait l’air sincère.' },
                { cols: ['Condition / Exclusion', 'à condition que · pourvu que · sans que', 'Je te fais confiance à condition que tu promettes, pourvu qu’elle ne recommence pas.'], audio: 'Je veux bien te faire confiance, à condition que tu me promettes de tout me dire.' },
                { cols: ['Indicative Contrast Traps!', 'parce que · puisque · pendant que · après que (+ Ind.!)', 'Pendant qu’Edouard sert la salade, les clients discutent. (NOT subjunctive!)'], audio: 'Pendant qu’Edouard sert la salade, les clients discutent.' }
              ]
            }
          },
          {
            id: 't10c6_samesubj',
            heading: '2. Wait! The 4 Conjunctions That Keep Subjunctive Even With One Subject',
            headingZh: '二、四大同主语照用虚拟式例外（bien que / quoique / pourvu que / jusqu’à ce que）',
            lead: 'Remember: you CANNOT say "pour qu’il fasse" if the subject is identical (must say "pour faire"). ONLY these four — bien que, quoique, pourvu que, jusqu’à ce que — stay in the subjunctive when both clauses share one subject:',
            leadZh: '死记以下四句例句：同一主语照样加 `que + 虚拟式`！千万别把 `bien que` 错改成 `bien de`！',
            cartoon: {
              src: './assets/tex_cartoons/tas5_attendre.gif',
              alt: 'Tex prend un café en attendant que Tammy le rejoigne',
              caption: 'Tex prend un café en attendant que Tammy le rejoigne (2 sujets) — ET il veut attendre jusqu’à ce qu’il se sente prêt (même sujet → quand même Subjonctif !).',
              captionZh: 'Tex 喝着咖啡等 Tammy 过来汇合（en attendant que... rejoigne）；而即便前后都是 Tex 自己，jusqu’à ce qu’il se sente prêt 照样用虚拟式！'
            },
            examples: [
              { fr: 'Tammy aime Tex bien qu’elle le trouve puéril par moments.', en: 'Same subject ("Tammy = elle"): bien que STILL requires subjunctive!', zh: '同一主语：Tammy 爱 Tex，尽管她觉得他有时挺幼稚（bien que → 照用虚拟式）。', tag: 'Same-Subject Exception' },
              { fr: 'Quoique Tammy soit sûre de vouloir épouser Tex, elle ne veut pas précipiter les choses.', en: 'Same subject ("Tammy = elle"): quoique keeps subjunctive!', zh: '同一主语：尽管 Tammy 确定想嫁给 Tex，她也不想操之过急（quoique → soit）。', tag: 'Same-Subject Exception' },
              { fr: 'Tex veut attendre jusqu’à ce qu’il se sente prêt.', en: 'Same subject ("Tex = il"): jusqu’à ce que keeps subjunctive (se sente)!', zh: '同一主语：Tex 想一直等到他自己觉得准备好了为止（jusqu’à ce que → se sente）。', tag: 'Same-Subject Exception' },
              { fr: 'Tammy veut bien patienter un peu pourvu que Tex n’attende pas trop longtemps.', en: 'pourvu que keeps subjunctive even in one-subject contexts!', zh: '只要（pourvu que）同样属于四例外之一，后接虚拟式 n’attende pas。', tag: 'Condition + Subjunctive' }
            ],
            quickCheck: {
              prompt: 'Pick the sentence where the mood after the conjunction is WRONG:',
              promptZh: '找出连词后的动词语气（虚拟式 vs 直陈式）用**错**的一句：',
              options: [
                'Bien que Joe-Bob comprend mal le français, il adore écouter Tex. (Error: needs subjunctive "comprenne"!)',
                'Tammy aime Tex puisqu’elle le suit partout. (puisque = Indicative!)',
                'Corey entre sans qu’Edouard le voie. (sans que = Subjunctive!)',
                'Pendant qu’Edouard sert la salade, les clients discutent. (pendant que = Indicative!)'
              ],
              answerIdx: 0,
              explain: '"Bien que" ALWAYS takes the Subjunctive (even with one subject!) → "Bien que Joe-Bob comprenne mal...". Meanwhile, "puisque" and "pendant que" take Indicative!',
              explainZh: 'bien que 无论主语异同，后面都必须用虚拟式（comprenne）！而 puisque（既然）和 pendant que（当……同时）用直陈式完全正确。'
            }
          }
        ],
        drills: [
          {
            id: 'dt10c6_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Quoique Bette ___ l’air gentille, Tammy ne lui fait pas confiance. (avoir)',
            promptZh: 'Tex 原题 #1：尽管 Bette 看起来挺和善，Tammy 并不信任她（quoique + avoir）：',
            answers: ['ait'],
            hint: 'quoique triggers subjunctive → qu’elle ait.',
            audio: 'Quoique Bette ait l’air gentille, Tammy ne lui fait pas confiance.',
            explain: 'quoique → subjunctive "ait".',
            explainZh: 'quoique（尽管）固定引导虚拟式 → ait。'
          },
          {
            id: 'dt10c6_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tex attend jusqu’à ce qu’Edouard ___ prêt. (être)',
            promptZh: 'Tex 原题 #2：Tex 一直等到 Edouard 准备好为止（jusqu’à ce que + être）：',
            answers: ['soit'],
            hint: 'jusqu’à ce que → subjunctive soit.',
            audio: 'Tex attend jusqu’à ce qu’Edouard soit prêt.',
            explain: 'jusqu’à ce que → subjunctive "soit".',
            explainZh: 'jusqu’à ce que（直到……为止）触发虚拟式 → soit。'
          },
          {
            id: 'dt10c6_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3 (Indicative Trap!): Corey ne boit jamais d’eau parce qu’il ___ peur qu’il s’y trouve des pesticides. (avoir)',
            promptZh: 'Tex 原题 #3（注意连词！）：Corey 从不喝水，**因为**他害怕水里有农药（parce que 后用直陈式！）：',
            answers: ['a'],
            hint: 'First verb follows "parce que" (CAUSE = INDICATIVE "il a peur")! Don’t rush into subjunctive!',
            audio: 'Corey ne boit jamais d’eau parce qu’il a peur qu’il y ait des pesticides.',
            explain: 'parce que (reason) ALWAYS takes Indicative → il a peur (the subjunctive "trouve" is AFTER "qu’il a peur que")!',
            explainZh: '审题陷阱！这个空紧跟在 **parce que** 后面，因果连词用直陈式 **a**（后面 `peur que` 才支配从句 `trouve` 用虚拟式）！'
          },
          {
            id: 'dt10c6_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Bien que Joe-Bob ne ___ pas bien le français, il adore écouter Tex et Tammy. (comprendre)',
            promptZh: 'Tex 原题 #4：尽管 Joe-Bob 不太懂法语，他却超爱听 Tex 和 Tammy 聊天（bien que）：',
            answers: ['comprenne'],
            hint: 'ils comprennent → comprenne.',
            audio: 'Bien que Joe-Bob ne comprenne pas bien le français, il adore écouter Tex.',
            explain: 'bien que → subjunctive "comprenne".',
            explainZh: 'bien que 固定触发虚拟式，comprendre 词干同 ils comprennent → comprenne。'
          },
          {
            id: 'dt10c6_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5 (Indicative Trap!): Pendant qu’Edouard ___ la salade, les clients discutent. (servir)',
            promptZh: 'Tex 原题 #5（注意连词！）：就在 Edouard 端上沙拉的时候，客人们在聊天（pendant que）：',
            answers: ['sert'],
            hint: '"pendant que" (while, simultaneous action) = INDICATIVE → il sert!',
            audio: 'Pendant qu’Edouard sert la salade, les clients discutent.',
            explain: 'pendant que takes Indicative ("sert"), NOT subjunctive ("serve")!',
            explainZh: 'pendant que 表示客观同时发生的动作，永远接直陈式 → sert！'
          },
          {
            id: 'dt10c6_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Corey entre par la fenêtre sans qu’Edouard le ___. (voir)',
            promptZh: 'Tex 原题 #6：Corey 从窗户爬进来，Edouard 压根没看见他（sans que）：',
            answers: ['voie'],
            hint: 'sans que → subjunctive of voir = voie!',
            audio: 'Corey entre par la fenêtre sans qu’Edouard le voie.',
            explain: 'sans que → subjunctive "voie" (not "voit"!).',
            explainZh: 'sans que 固定触发虚拟式，voir 第 3 单为 voie（不是 voit！）。'
          },
          {
            id: 'dt10c6_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: En attendant que Tex ___ une décision, Tammy sort. (prendre)',
            promptZh: 'Tex 原题 #7：在等 Tex 下决定期间，Tammy 先出门了（en attendant que + prendre）：',
            answers: ['prenne'],
            hint: 'ils prennent → prenne (double n!).',
            audio: 'En attendant que Tex prenne une décision, Tammy sort.',
            explain: 'en attendant que → subjunctive "prenne".',
            explainZh: 'en attendant que（在等待……期间）触发虚拟式 → prenne。'
          },
          {
            id: 'dt10c6_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8 (Indicative Trap!): Tammy aime Tex puisqu’elle le ___ partout. (suivre)',
            promptZh: 'Tex 原题 #8（注意连词！）：Tammy 爱 Tex，**既然**她到哪儿都跟着他（puisque）：',
            answers: ['suit'],
            hint: '"puisque" (since = known cause) takes INDICATIVE → elle suit!',
            audio: 'Tammy aime Tex puisqu’elle le suit partout.',
            explain: 'puisque ALWAYS takes Indicative → elle suit!',
            explainZh: 'puisque（既然）表达双方已知的原因，固定用直陈式 → suit！'
          },
          {
            id: 'dt10c6_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9 (Indicative Trap!): Bette se maquille parce qu’elle ___ être remarquée. (vouloir)',
            promptZh: 'Tex 原题 #9（注意连词！）：Bette 化妆是因为她想引人注目（parce que）：',
            answers: ['veut'],
            hint: '"parce que" = INDICATIVE → elle veut!',
            audio: 'Bette se maquille parce qu’elle veut être remarquée.',
            explain: 'parce que → indicative "veut" (subjunctive "veuille" would be wrong!).',
            explainZh: 'parce que 接直陈式 → veut！'
          },
          {
            id: 'dt10c6_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Nous allons à Opelousas pour que Tex ___ fêter l’anniversaire de son grand-père. (pouvoir)',
            promptZh: 'Tex 原题 #10：我们去奥珀卢萨斯，好让 Tex 能给爷爷庆祝生日（pour que）：',
            answers: ['puisse'],
            hint: 'pour que → subjunctive "puisse".',
            audio: 'Nous allons à Opelousas pour que Tex puisse fêter l’anniversaire de son grand-père.',
            explain: 'pour que → qu’il puisse.',
            explainZh: 'pour que（为了使……）触发虚拟式 → puisse。'
          },
          {
            id: 'dt10c6_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Trey ne lit jamais les livres de Sartre de peur que sa philosophie ___ trop morose. (être)',
            promptZh: 'Tex 原题 #11：Trey 从不看萨特的书，唯恐他的哲学太阴郁（de peur que）：',
            answers: ['soit'],
            hint: 'de peur que → subjunctive "soit".',
            audio: 'Trey ne lit jamais les livres de Sartre de peur que sa philosophie soit trop morose.',
            explain: 'de peur que → qu’elle soit.',
            explainZh: 'de peur que（唯恐）触发虚拟式 → soit。'
          },
          {
            id: 'dt10c6_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Edouard veut bien faire la cuisine pourvu que quelqu’un d’autre ___ la vaisselle. (faire)',
            promptZh: 'Tex 原题 #12：Edouard 乐意做饭，只要找别人去洗碗（pourvu que）：',
            answers: ['fasse'],
            hint: 'pourvu que → subjunctive "fasse".',
            audio: 'Edouard veut bien faire la cuisine pourvu que quelqu’un d’autre fasse la vaisselle.',
            explain: 'pourvu que → qu’il fasse.',
            explainZh: 'pourvu que（只要）触发虚拟式 → fasse。'
          }
        ],
        related: [
          { chapterId: 'ch9_conjunctions', pageId: 'c9_4', label: 'Review 9.4 Subjunctive vs. Same-Subject Connectors' },
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_7', label: '10C.7 The Past Subjunctive' }
        ]
      },

      /* =========================================================
         PAGE 10C.7: PAST SUBJUNCTIVE (tas6)
      ========================================================= */
      {
        id: 't10c_7',
        code: '10C.7',
        group: 'Subjunctive Forms & Tense',
        shortTitle: 'Past Subjunctive (Anteriority)',
        title: 'Le Subjonctif Passé: Formation (aie/sois + PP) & Timeline Relative to Main Verb',
        titleZh: '过去虚拟式（Subjonctif passé）：助动词现在虚拟式 + 过去分词（“先时性”表达）',
        estMin: 4,
        summary: 'Just like the Passé Composé, the PAST SUBJUNCTIVE (le subjonctif passé) is a compound tense built with the PRESENT SUBJUNCTIVE of avoir ("que j’aie, tu aies, il ait, nous ayons, vous ayez, ils aient") or être ("que je sois, tu sois, il soit, nous soyons, vous soyez, ils soient") + the PAST PARTICIPLE ("que j’aie ri", "que nous soyons sorti(e)s") — and all regular être, pronominal, and preceding-COD agreement rules still apply! CRUCIAL RULE: The tense of the main verb (present or past!) NEVER dictates present vs. past subjunctive! What matters is CHRONOLOGICAL ORDER: use PRESENT Subjunctive if the subordinate event happens AT THE SAME TIME or AFTER the main verb ("J’ai été surpris que tu écrives ce livre"), and use PAST Subjunctive whenever the subordinate event happened BEFORE ("est antérieur à") the main verb ("Je suis surpris / J’ai été surpris que tu aies lu ce livre")!',
        summaryZh: '法语虚拟式一共有“现在”和“过去”两个核心时态。**过去虚拟式（Subjonctif passé）**的构成与复合过去时如出一辙：**`avoir` 或 `être` 的现在虚拟式（`aie / aies / ait / ayons / ayez / aient` 或 `sois / sois / soit / soyons / soyez / soient`）+ 过去分词**（且 `être` 动词、代动词及前置直宾的**性数配合规矩完全照旧**！）。🔥 **B2 高分核心心法**：主句用现在时还是过去时**完全不决定**从句用现在虚拟式还是过去虚拟式！决定时态的唯一标准是**两个动作的先后顺序（相对时间）**：① 从句动作与主句**同时发生或将要发生** → **现在虚拟式**（哪怕主句是过去时：*J’ai été surpris que tu écrives ce livre*）；② 从句动作发生在主句**之前（先时性/已完成）** → **过去虚拟式**（*Je suis content que la France ait gagné la Coupe du Monde en 98*）！',
        cheatSummary: [
          { label: 'Formula & Same Passé Composé Agreements', rule: 'avoir (aie/ait/ayons/aient) OR être (sois/soit/soyons/soient) + Past Participle. Pronominal & être verbs agree with subject ("que je sois sorti(e)", "qu’il se soit perdu")!', ruleZh: '构成公式：助动词现在虚拟式（aie/sois）+ 过去分词！être 类与代动词照常配合主语（例如 que Tex soit parti / qu’elles soient sorties）。' },
          { label: 'Chronology Rule (Anteriority vs. Simultaneous/Future)', rule: 'Main verb tense does NOT force past subjunctive! Main present + prior clause → Past Subj. ("Je suis surpris que tu aies lu"). Main past + simultaneous clause → Present Subj. ("J’ai été surpris que tu écrives")!', ruleZh: '先时性法则：先于主句发生＝过去虚拟式（que tu aies lu）；与主句同时或后于主句＝现在虚拟式（哪怕主句已经是 J’ai été surpris！）。' }
        ],
        sections: [
          {
            id: 't10c7_form_time',
            heading: '1. Past Subjunctive Forms & Simultaneous vs. Prior Contrast',
            headingZh: '一、过去虚拟式变位表、先时性对照与 1998 世界杯对话',
            lead: 'Contrast Tammy and Tex’s four key sentences below to see why main verb tense ("suis" vs. "ai été") does not change the subjunctive tense ("écrives" vs. "aies lu") — chronology does!',
            leadZh: '看表里四句黄金对比与 1998 年法国世界杯夺冠对话，一举攻克“过去虚拟式”全部逻辑：',
            cartoon: {
              src: './assets/tex_cartoons/tas6_combray.gif',
              alt: 'Tex lit Proust : je suis surpris que tu aies lu ce livre',
              caption: 'Tex : Je suis surpris que tu aies lu ce livre (already read BEFORE now = Past Subjunctive) ! — Tammy : J’ai été surprise que tu écrives ce livre (simultaneous at that past moment = Present Subjunctive) !',
              captionZh: 'Tex：真惊讶你居然已经读完这本书了（比现在更早发生 → 过去虚拟式 que tu aies lu）！— Tammy：当时我也很惊讶你居然正在写这本书（在当时同时发生 → 现在虚拟式 que tu écrives）！'
            },
            table: {
              headers: ['Verb / Type', 'Past Subjunctive Forms', 'Example & Chronology'],
              rows: [
                { cols: ['avoir Verb: rire', 'que j’aie ri · tu aies ri · il ait ri · nous ayons ri · vous ayez ri · ils aient ri', 'Je suis content qu’ils aient gagné en 98. (prior event!)'], audio: 'Tex est content que la France ait gagné la Coupe du Monde.' },
                { cols: ['être Verb: sortir (Agreement!)', 'que je sois sorti(e) · qu’il soit sorti · qu’elles soient sorties · que nous soyons sorti(e)s', 'Je doute qu’il soit sorti après la finale.'], audio: 'Je doute qu’il soit sorti après la finale.' },
                { cols: ['Pronominal Verb (always être!)', 'que je me sois inscrit(e) · qu’il se soit perdu', 'Bien que Corey se soit inscrit à la fac, il n’y va jamais.'], audio: 'Bien que Corey se soit inscrit à la fac, il ne va jamais en classe.' },
                { cols: ['Simultaneous / Future (Present Subj.)', 'Even with past main clause: "J’ai été surprise que tu écrives..."', 'At that past moment, writing was ongoing → Present Subj.!'], audio: 'J’ai été surprise que tu écrives ce livre.' },
                { cols: ['Anterior / Completed (Past Subj.)', 'With present or past main clause: "Je suis / J’ai été surpris que tu aies lu..."', 'Reading happened BEFORE being surprised → Past Subj.!'], audio: 'J’ai été surpris que tu aies lu ce livre.' }
              ]
            },
            dialogue: {
              title: 'Tammy & Tex: Remembering the 1998 World Cup',
              titleZh: '小对话：1998 年法国夺冠后的回忆（全员过去虚拟式）',
              lines: [
                { speaker: 'Tammy', fr: 'Tex est content que la France ait gagné la Coupe du Monde en 98. Mais je doute qu’il soit sorti après la finale parce qu’il avait trop bu.', en: 'Tex is happy that France won the World Cup in 98. But I doubt he went out after the final because he had drunk too much.', zh: '主句是现在时（est content / doute），但赢球（ait gagné）与没出门（soit sorti）都发生在 98 年之前 → 用过去虚拟式！' },
                { speaker: 'Tammy', fr: 'Ma mère n’était pas sûre que Tex ait aimé le vin qu’elle avait envoyé. Mais j’ai peur que Tex et Edouard l’aient trop aimé !', en: 'My mom wasn’t sure Tex had liked the wine she sent. But I’m afraid Tex and Edouard liked it too much!', zh: '注意 l’ 指代 le vin（阳性单数），因此过去分词 aimé 不额外配合；而复数主语 Tex et Edouard → aient aimé。' }
              ]
            },
            quickCheck: {
              prompt: 'Pick the sentence that accurately expresses an action COMPLETED PRIOR to the feeling in the main clause:',
              promptZh: '选出正确使用**过去虚拟式**表达“已经提前发生/完成动作”的一句：',
              options: [
                'Je suis ravi que vous soyez venus nous voir hier ! (être + plural agreement!)',
                'Je suis ravi que vous ayez venu nous voir hier !',
                'Je suis ravi que vous venez nous voir hier !',
                'Je suis ravi que vous soyez venir nous voir hier !'
              ],
              answerIdx: 0,
              explain: 'venir takes être ("soyez") + past participle ("venu") + plural agreement with vous ("venus") → que vous soyez venus!',
              explainZh: 'venir 用 être 助动词，配合复数 vous（默认阳复或男女混复加 -s）→ soyez venus！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10c7_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1 (Pronominal!): Bien que Corey ___ à la fac, il ne va jamais en classe. (s’inscrire — past subj.)',
            promptZh: 'Tex 原题 #1：尽管 Corey 之前在大学报了名（s’inscrire，代动词用 être），他从不去上课：',
            answers: ["se soit inscrit", 'se soit inscrit'],
            hint: 's’inscrire takes être: se + soit + inscrit.',
            audio: 'Bien que Corey se soit inscrit à la fac, il ne va jamais en classe.',
            explain: 'Corey (masc. sg.) + se soit inscrit (avoir/être PP of inscrire = inscrit).',
            explainZh: '代动词一律用 être 助动词：se soit inscrit（inscrire 的过去分词是 inscrit）。'
          },
          {
            id: 'dt10c7_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tammy est furieuse que Tex ___ sans elle. (partir — past subj.)',
            promptZh: 'Tex 原题 #2：Tammy 气坏了，Tex 居然不带她就提前走了（partir，用 être）：',
            answers: ['soit parti'],
            hint: 'partir uses être → soit parti.',
            audio: 'Tammy est furieuse que Tex soit parti sans elle.',
            explain: 'qu’il soit parti.',
            explainZh: 'partir 属于 être 动词，Tex 为阳性单数 → soit parti。'
          },
          {
            id: 'dt10c7_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Bette, Tammy et Fiona sont très contentes que les Américaines ___ la Coupe du Monde. (gagner — past subj.)',
            promptZh: 'Tex 原题 #3：她们仨很高兴美国女足赢了世界杯（gagner，3 复数）：',
            answers: ['aient gagné'],
            hint: 'avoir 3rd pl. subjunctive = aient + gagné (no agreement with subject!).',
            audio: 'Elles sont très contentes que les Américaines aient gagné la Coupe du Monde.',
            explain: 'qu’elles aient gagné (no subject agreement with avoir!).',
            explainZh: 'gagner 用 avoir 助动词（第三人称复数 aient），不配合主语 → aient gagné。'
          },
          {
            id: 'dt10c7_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Quoique Tex ___ au Texas, il a grandi en France. (naître — past subj.)',
            promptZh: 'Tex 原题 #4：尽管 Tex 出生在德克萨斯，他却在法国长大（naître 用 être，过去分词 né）：',
            answers: ['soit né'],
            hint: 'naître uses être + né → soit né!',
            audio: 'Quoique Tex soit né au Texas, il a grandi en France.',
            explain: 'naître is an être verb → qu’il soit né.',
            explainZh: 'naître 用 être 助动词，过去分词 né → soit né。'
          },
          {
            id: 'dt10c7_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Bette doute que Tex ___ ses devoirs avec Tammy. (faire — past subj.)',
            promptZh: 'Tex 原题 #5：Bette 怀疑 Tex 是否已经和 Tammy 一起做完了功课（faire，过去分词 fait）：',
            answers: ['ait fait'],
            hint: 'avoir 3rd sg. subj. = ait + fait.',
            audio: 'Bette doute que Tex ait fait ses devoirs avec Tammy.',
            explain: 'qu’il ait fait.',
            explainZh: 'avoir 第 3 单虚拟式 ait + fait → ait fait。'
          },
          {
            id: 'dt10c7_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tex s’étonne que Tammy ___ Ricky Williams. (rencontrer — past subj.)',
            promptZh: 'Tex 原题 #6：Tex 很惊讶 Tammy 居然偶遇过球星 Ricky Williams（rencontrer）：',
            answers: ['ait rencontré'],
            hint: 'rencontrer takes avoir → ait rencontré (no -e!).',
            audio: 'Tex s’étonne que Tammy ait rencontré Ricky Williams.',
            explain: 'qu’elle ait rencontré (avoir never agrees with subject!).',
            explainZh: 'rencontrer 用 avoir 助动词，不与主语 Tammy 配合 → ait rencontré。'
          },
          {
            id: 'dt10c7_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Il est possible que Corey ___. (se perdre — past subj.)',
            promptZh: 'Tex 原题 #7：Corey 有可能已经迷路了（se perdre，代动词）：',
            answers: ['se soit perdu'],
            hint: 'se + soit + perdu.',
            audio: 'Il est possible que Corey se soit perdu.',
            explain: 'qu’il se soit perdu.',
            explainZh: '代动词 se perdre 用 être → se soit perdu。'
          },
          {
            id: 'dt10c7_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Quel dommage qu’il ___ hier ! (pleuvoir — past subj.)',
            promptZh: 'Tex 原题 #8：昨天居然下雨了，真是太遗憾了！（pleuvoir，过去分词 plu）：',
            answers: ['ait plu'],
            hint: 'pleuvoir → il a plu → past subjunctive: qu’il ait plu!',
            audio: 'Quel dommage qu’il ait plu hier !',
            explain: 'quel dommage que → past subjunctive qu’il ait plu!',
            explainZh: 'Quel dommage que 后接虚拟式，pleuvoir 的过去分词是 plu → ait plu。'
          },
          {
            id: 'dt10c7_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Il est peu probable que les nonnes ___ une carte postale de Tex. (recevoir — past subj.)',
            promptZh: 'Tex 原题 #9：修女们不太可能收到过 Tex 寄来的明信片（recevoir，3 复数）：',
            answers: ['aient reçu'],
            hint: 'recevoir PP = reçu → qu’elles aient reçu.',
            audio: 'Il est peu probable que les nonnes aient reçu une carte postale de Tex.',
            explain: 'il est peu probable que (doubt!) → aient reçu.',
            explainZh: '注意：il est probable que 用直陈，而 **il est peu probable que** 表示几乎不可能（怀疑）→ 用虚拟式 aient reçu！'
          },
          {
            id: 'dt10c7_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Paw-Paw : Je suis ravi que vous ___ le temps de venir à Opelousas. (prendre — past subj.)',
            promptZh: 'Tex 原题 #10：Paw-Paw：真高兴你们能抽出时间来看我（prendre，vous）：',
            answers: ['ayez pris'],
            hint: 'avoir vous subj. = ayez + pris!',
            audio: 'Je suis ravi que vous ayez pris le temps de venir à Opelousas.',
            explain: 'que vous ayez pris (note spelling "ayez" with y!).',
            explainZh: 'avoir 的 vous 虚拟式是 ayez，prendre 的过去分词是 pris → ayez pris。'
          },
          {
            id: 'dt10c7_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Corey : Ah Paris ! C’est la plus belle ville que j’___. (visiter — past subj. with COD agreement!)',
            promptZh: 'Tex 原题 #11：Corey：啊巴黎！这是我游览过最美的城市（visiter，注意先导直宾 que = la ville 阴单要配合！）：',
            answers: ['aie visitée', 'aie visité'],
            hint: 'Subjective superlative + completed experience → que j’aie visitée (agrees with fem. "la ville"!)!',
            audio: 'C’est la plus belle ville que j’aie visitée.',
            explain: 'que j’aie visitée: COD "que" refers to fem. sg. "la plus belle ville", so PP adds -e!',
            explainZh: '高级配合细节！关系代词 que 指代阴性单数 ville 作 visiter 的直宾且前置 → 过去分词加上 -e 变成 aie visitée！'
          },
          {
            id: 'dt10c7_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tex est surpris que Paw-Paw ___ à Tammy. (téléphoner — past subj.)',
            promptZh: 'Tex 原题 #12：Tex 很吃惊 Paw-Paw 爷爷居然已经给 Tammy 打过电话了（téléphoner）：',
            answers: ['ait téléphoné'],
            hint: 'téléphoner à takes avoir → ait téléphoné.',
            audio: 'Tex est surpris que Paw-Paw ait téléphoné à Tammy.',
            explain: 'qu’il ait téléphoné.',
            explainZh: 'téléphoner 助动词为 avoir → ait téléphoné。'
          }
        ],
        related: [
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_6', label: 'Back to 10C.6 Usage 4: Conjunctions' },
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_8', label: '10C.8 WEDDINGS Summary' }
        ]
      },

      /* =========================================================
         PAGE 10C.8: SUBJUNCTIVE SUMMARY / WEDDINGS (tas7)
      ========================================================= */
      {
        id: 't10c_8',
        code: '10C.8',
        group: 'Subjunctive Synthesis',
        shortTitle: 'WEDDINGS Mnemonic Summary',
        title: 'Complete Subjunctive Review: Tex’s "WEDDINGS" Checklist & Mixed Mood Drills',
        titleZh: '虚拟式全章总复习：Tex 独门记忆口诀 “WEDDINGS（婚礼）” 与综合实战辨析',
        estMin: 4,
        summary: 'Just like a WEDDING has three essentials — (1) TWO DIFFERENT PEOPLE (two different subjects), (2) A WEDDING RING linking them (the conjunction "que", or a subjunctive conjunction like "bien que / pour que / avant que"), and (3) AN EMOTION-LADEN CONTEXT (attitude rather than dry certainty) — spell out W-E-D-D-I-N-G-S to remember all triggers at a glance! W = Will ("je veux que vous soyez"), E = Emotion ("je suis heureuse que tu veuilles"), D = Doubt ("je doute / il est possible que"), D = Desire ("je désire / souhaite que"), I = Interrogatives questioning certainty ("Existe-t-il une fille qui soit...?"), N = Negatives flipping belief ("Je n’ai pas l’impression / ne crois pas qu’elle soit"), G = General/Impersonal necessity ("il faut que tu saches"), S = Superlatives with subjective opinion ("la plus belle que je connaisse")! Now test your instincts on Tex’s 12 mixed Indicative vs. Subjunctive sentences!',
        summaryZh: '把虚拟式的核心灵魂浓缩成一场**婚礼（WEDDINGS）**：① 婚礼上有**两个新人**＝主从句**两个不同主语**（只有 4 个连词同主语也留虚拟式）；② 用**戒指**把两人套在一起＝连接词 **`que`**；③ 充满**主观情感与不确定性**＝说话人的意愿、好恶或怀疑。把 **W-E-D-D-I-N-G-S** 八个字母倒背如流，考场上 1 秒判断要不要用虚拟式！下面 12 道 Tex 原版混合挑战题将同时考验你的直陈式 vs 虚拟式防陷阱敏锐度！',
        cheatSummary: [
          { label: 'WEDDINGS Acronym (8 Core Triggers)', rule: 'Will · Emotion · Doubt · Desire · Interrogatives (doubtful) · Negatives (of opinion) · General impersonal statements · Superlatives (subjective)!', ruleZh: 'WEDDINGS 八字口诀：W 意愿 · E 情感 · D 怀疑 · D 愿望 · I 疑问翻转 · N 否定翻转 · G 无人称总述 · S 主观最高级！' },
          { label: 'Indicative Counter-Check Before Choosing Subjunctive', rule: 'Before writing a subjunctive, verify it’s NOT affirmative savoir/croire/penser/trouver ("Je sais qu’il EST", "Il pense qu’il FAUT") and NOT espérer que or parce que / puisque / pendant que!', ruleZh: '防坑必检：见到 que 先问一句——它是不是肯定句的 savoir / croire / penser / trouver / espérer？或者因果同时 parce que / puisque / pendant que？如果是，老老实实用直陈式！' }
        ],
        sections: [
          {
            id: 't10c8_weddings',
            heading: '1. The W-E-D-D-I-N-G-S Checklist & Shotgun Wedding Story',
            headingZh: '一、WEDDINGS 八大触发字母表与对照金句',
            lead: 'Review all 8 letters of WEDDINGS with Tammy and Tex’s marriage examples below:',
            leadZh: '背熟下表 8 句与婚礼漫画对应的例句，再冲刺 12 道直陈 vs 虚拟混合考验：',
            cartoon: {
              src: './assets/tex_cartoons/tas7_shotgun.gif',
              alt: 'Le mariage forcé de Tex et Tammy : WEDDINGS',
              caption: 'WEDDINGS = Two different subjects + a connecting ring ("que") + emotion, will, or doubt!',
              captionZh: 'WEDDINGS 婚礼口诀：两个新人（不同主语）＋ 婚戒（连词 que）＋ 情感/意愿/怀疑！'
            },
            table: {
              headers: ['Letter', 'Category', 'Tex’s Classic Trigger Sentence'],
              rows: [
                { cols: ['W — Will', 'Will & insistence (vouloir, exiger)', 'Moi, je veux seulement que vous soyez heureux.'], audio: 'Moi, je veux seulement que vous soyez heureux.' },
                { cols: ['E — Emotion', 'Feelings (être heureux/triste/ravi, regretter)', 'Je suis heureuse que tu veuilles m’épouser, Tex !'], audio: 'Je suis heureuse que tu veuilles m’épouser, Tex !' },
                { cols: ['D — Doubt', 'Doubt & uncertainty (douter, il est possible)', 'Mais Tammy, je ne crois pas que tu sois prête pour le mariage.'], audio: 'Mais Tammy, je ne crois pas que tu sois prête pour le mariage.' },
                { cols: ['D — Desire', 'Wish & preference (désirer, souhaiter, préférer)', 'Je désire que tu m’épouses, Tex !'], audio: 'Je désire que tu m’épouses, Tex !' },
                { cols: ['I — Interrogatives', 'Uncertain relatives / questioned opinion', 'Existe-t-il une seule fille qui ne soit pas obsédée par le mariage ?'], audio: 'Existe-t-il une seule fille qui ne soit pas obsédée par le mariage ?' },
                { cols: ['N — Negatives', 'Negated belief/impression', 'Je n’ai pas l’impression que Tammy soit la femme de ta vie !'], audio: 'Je n’ai pas l’impression que Tammy soit la femme de ta vie !' },
                { cols: ['G — General Statements', 'Impersonal necessity & opinion (il faut, il vaut mieux)', 'Tex, mon cher, il faut que tu saches que la vie est courte.'], audio: 'Tex, mon cher, il faut que tu saches que la vie est courte.' },
                { cols: ['S — Superlatives', 'Subjective superlatives (le plus, le seul)', 'Tammy est la plus belle tatou que je connaisse !'], audio: 'Tammy est la plus belle tatou que je connaisse !' }
              ]
            },
            quickCheck: {
              prompt: 'Mixed Challenge! Pick the sentence where the mood is COMPLETELY CORRECT:',
              promptZh: '综合辨析：选出句子中所有动词语气（直陈 vs 虚拟）均完全正确的一项：',
              options: [
                'Je crois qu’il a raison (Ind.), mais je ne pense pas qu’il ait tout compris (Subj.).',
                'Je sais qu’il soit intelligent, et j’espère qu’il réussisse.',
                'Il pense qu’il faille partir, bien qu’il est tard.',
                'Je ne doute pas qu’elle vienne (Subj.), quoiqu’elle est occupée (Ind.).'
              ],
              answerIdx: 0,
              explain: 'Affirmative "Je crois que" → Ind. ("a"); negative "Je ne pense pas que" → Subj. ("ait"). All other options reverse Indicative ("savoir, espérer, penser, ne pas douter") and Subjunctive ("bien que, quoique")!',
              explainZh: '肯定 croire que 用直陈式 a，否定 ne pense pas que 用虚拟式 ait！其余选项把 savoir/espérer/penser/ne doute pas 全错用成虚拟，又把 bien que/quoique 错用成直陈。'
            }
          }
        ],
        drills: [
          {
            id: 'dt10c8_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex : Je voudrais que Tammy ___ habiter avec moi. (venir)',
            promptZh: 'Tex 原题 #1：Tex：我希望 Tammy 能搬来跟我一起住（vouloir 条件式 + venir）：',
            answers: ['vienne'],
            hint: 'Will/Desire ("je voudrais que") → subjunctive "vienne".',
            audio: 'Je voudrais que Tammy vienne habiter avec moi.',
            explain: 'voudrais que → subjunctive vienne.',
            explainZh: 'W 意愿触发：voudrais que 后用虚拟式 → vienne。'
          },
          {
            id: 'dt10c8_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2 (Mixed Trap!): Bette : Je sais que Tex ___ un génie. (être)',
            promptZh: 'Tex 原题 #2（直陈 vs 虚拟辨析）：Bette：我知道 Tex 是个天才（savoir que 肯定句）：',
            answers: ['est'],
            hint: '"Je sais que" = knowledge/certainty (NOT doubt!) → INDICATIVE "est"!',
            audio: 'Je sais que Tex est un génie.',
            explain: 'Affirmative "savoir que" states a fact/certainty → Indicative "est"!',
            explainZh: 'savoir que（我知道）表达确信知识 → 必须用直陈式 est！'
          },
          {
            id: 'dt10c8_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tammy : Je ne pense pas que Bette ___ beaucoup d’amis. (avoir)',
            promptZh: 'Tex 原题 #3：Tammy：我觉得 Bette 并没有多少朋友（否定 penser que）：',
            answers: ['ait'],
            hint: 'Negative "ne pense pas que" → SUBJUNCTIVE "ait"!',
            audio: 'Je ne pense pas que Bette ait beaucoup d’amis.',
            explain: 'N (Negative opinion) → qu’elle ait.',
            explainZh: 'N 否定翻转：ne pense pas que 触发虚拟式 → ait。'
          },
          {
            id: 'dt10c8_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Paw-Paw : Je suis triste que tu ___ partir, Tex. (devoir)',
            promptZh: 'Tex 原题 #4：Paw-Paw：你要走了我很难过（情绪表达 + devoir，tu）：',
            answers: ['doives'],
            hint: 'Emotion + boot stem of devoir = doiv- + -es → doives.',
            audio: 'Je suis triste que tu doives partir, Tex.',
            explain: 'E (Emotion) → que tu doives.',
            explainZh: 'E 情绪触发：devoir 词干 doiv- + tu 词尾 -es → doives。'
          },
          {
            id: 'dt10c8_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tex : Y a-t-il un poète qui ___ plus fin que moi ? (être)',
            promptZh: 'Tex 原题 #5：Tex：这世上还有比我更敏锐的诗人吗？（疑问不确定关系从句）：',
            answers: ['soit'],
            hint: 'I (Interrogative uncertain antecedent) → subjunctive "soit"!',
            audio: 'Y a-t-il un poète qui soit plus fin que moi ?',
            explain: 'Questioning existence of antecedent → subjunctive "soit".',
            explainZh: 'I 不确定疑问关系从句 → 虚拟式 soit。'
          },
          {
            id: 'dt10c8_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tammy : Je ne suis pas sûre que Tex ___ faire la cuisine. (savoir)',
            promptZh: 'Tex 原题 #6：Tammy：我不太确定 Tex 会不会做饭（否定 être sûre que）：',
            answers: ['sache'],
            hint: 'Negative certainty → subjunctive "sache"!',
            audio: 'Je ne suis pas sûre que Tex sache faire la cuisine.',
            explain: 'N (Negative certainty) → qu’il sache.',
            explainZh: '否定“不确定” triggers D/N → savoir 虚拟式 sache。'
          },
          {
            id: 'dt10c8_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Fiona : Il est important que tu ___ un cours intéressant. (choisir)',
            promptZh: 'Tex 原题 #7：Fiona：选一门有趣的课很重要（无人称重要性）：',
            answers: ['choisisses'],
            hint: 'G (General necessity) + tu (-iss- + -es) → choisisses.',
            audio: 'Il est important que tu choisisses un cours intéressant.',
            explain: 'G (Impersonal statement) → que tu choisisses.',
            explainZh: 'G 无人称必要性 + tu 词尾 -es → choisisses。'
          },
          {
            id: 'dt10c8_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8 (Mixed Trap!): Tammy : Tex trouve que nous ___ heureux. (être)',
            promptZh: 'Tex 原题 #8（肯定句陷阱）：Tammy：Tex 觉得我们很幸福（trouver que 肯定句）：',
            answers: ['sommes'],
            hint: 'Affirmative "trouve que" = certainty/opinion held → INDICATIVE "sommes"!',
            audio: 'Tex trouve que nous sommes heureux.',
            explain: 'Affirmative "trouver que" → Indicative "sommes"!',
            explainZh: 'trouver que（觉得、认为）在肯定句里表达确信看法，用直陈式 sommes！'
          },
          {
            id: 'dt10c8_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9 (Mixed Trap!): Tammy : Tex pense qu’il ___ attendre avant le mariage. (falloir)',
            promptZh: 'Tex 原题 #9（肯定句陷阱）：Tammy：Tex 认为结婚前最好再等等（penser que 肯定句 + falloir）：',
            answers: ['faut'],
            hint: 'Careful! "Tex pense que" (affirmative!) governs falloir → INDICATIVE "il faut" (NOT "faille")!',
            audio: 'Tex pense qu’il faut attendre avant le mariage.',
            explain: 'Affirmative "penser que" takes INDICATIVE → "qu’il faut" (don’t confuse "il faut que ..." with "qu’il faut" inside "pense que"!).',
            explainZh: '妙题！这里 falloir 是 **penser que（肯定句）** 的从句，不是 il faut que 支配别人，因此 falloir 自己要用直陈式 **faut**！'
          },
          {
            id: 'dt10c8_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Edouard : Je suis ravi que vous ___ ma recette. (aimer)',
            promptZh: 'Tex 原题 #10：Edouard：很高兴你们喜欢我的菜谱（情绪 + aimer，vous）：',
            answers: ['aimiez'],
            hint: 'E (Emotion) + vous ending -iez → aimiez.',
            audio: 'Je suis ravi que vous aimiez ma recette.',
            explain: 'que vous aimiez.',
            explainZh: 'E 情绪触发 + vous 虚拟式词尾 -iez → aimiez。'
          },
          {
            id: 'dt10c8_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Tammy : J’exige que tu ___ te raser, Tex ! (aller)',
            promptZh: 'Tex 原题 #11：Tammy：我命令你快去刮胡子，Tex！（exiger que + aller，tu）：',
            answers: ['ailles'],
            hint: 'W (Will: exiger que) + aller tu = ailles!',
            audio: 'J’exige que tu ailles te raser, Tex !',
            explain: 'exiger que → que tu ailles.',
            explainZh: 'W 强硬要求 + aller 靴形区 tu 形式 → ailles。'
          },
          {
            id: 'dt10c8_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12 (Mixed Trap!): Tex : Je crois que Tammy ___ m’épouser. (vouloir)',
            promptZh: 'Tex 原题 #12（肯定句收官）：Tex：我相信 Tammy 想嫁给我（croire que 肯定句）：',
            answers: ['veut'],
            hint: 'Affirmative "Je crois que" → INDICATIVE "veut"!',
            audio: 'Je crois que Tammy veut m’épouser.',
            explain: 'Affirmative "croire que" → Indicative "veut"!',
            explainZh: '肯定句 croire que 后用直陈式 veut（若变成否定 je ne crois pas que 才会翻转成 veuille）。'
          }
        ],
        related: [
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_7', label: 'Back to 10C.7 Past Subjunctive' },
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_9', label: '10C.9 4 Ways to Avoid Subjunctive' }
        ]
      },

      /* =========================================================
         PAGE 10C.9: 4 WAYS TO AVOID THE SUBJUNCTIVE (tas8)
      ========================================================= */
      {
        id: 't10c_9',
        code: '10C.9',
        group: 'Subjunctive Mastery & Style',
        shortTitle: '4 Ways to Avoid Subjunctive',
        title: 'Style & TCF Writing Shortcut: 4 Ways to Avoid the Subjunctive (Infinitive & Noun Upgrades)',
        titleZh: '虚拟式高分进阶：优雅规避虚拟式的四大转换技巧（不定式、介词+名词与结构重写）',
        estMin: 4,
        summary: 'In real spoken AND polished TCF written French, native speakers constantly simplify clunky subjunctive clauses using FOUR clean structural swaps: (1) IMPERSONAL + DE + INFINITIVE ("Il est important que tu boives" → "Il est important de boire", dropping "que tu"!); (2) SUBJUNCTIVE CONJUNCTION → PREPOSITION + INFINITIVE when there is only ONE grammatical subject (à condition que → à condition de, afin que → afin de, à moins que → à moins de, avant que → avant de, de crainte/peur que → de crainte/peur de, en attendant que → en attendant de, pour que → pour, sans que → sans — "de peur qu’elle se mette en colère" → "de peur de la mettre en colère"!); (3) CONJUNCTION → PREPOSITION + NOUN ("bien que + clause" → "malgré + noun", "jusqu’à ce que + verb" → "jusqu’à + noun", "avant que + verb" → "avant + noun"); (4) STRUCTURAL REWRITES ("Je ne suis pas sûr que tu sois prêt" → "Je ne sais pas si...", "Il est possible que..." → "peut-être", "J’ai besoin que tu viennes" → "J’ai besoin de te voir").',
        summaryZh: '无论口语顺畅度还是 TCF 写作地道表达，法国人都非常喜欢用**四大简洁转换**避开啰嗦的 `que + 虚拟式` 从句：① **无人称改 `de + 不定式`**：去掉具体人称主语（*Il est important que tu boives* → *Il est important de boire*）；② **`... que` 连词改 `介词 + 不定式`**（主从语统一主语！记住 `pour que → **pour**`，没有 `pour de`！而 `avant que → avant de`、`afin que → afin de`、`de peur que → de peur de`、`à condition que → à condition de`、`sans que → sans`）；③ **`... que` 连词改 `介词 + 名词短语`**：`bien que` 变 **`malgré + 名词`**（尽管……），`jusqu’à ce que` 变 **`jusqu’à + 名词`**，`avant que` 变 **`avant + 名词`**（考试写作极加分的**名词化 Nominalisation**！）；④ **换个句型重写**：`je ne suis pas sûr que...` 改 `je ne sais pas si...`；`il est possible que...` 改 `peut-être`；`j’ai besoin que tu viennes` 改 `j’ai besoin de te voir`！',
        cheatSummary: [
          { label: 'Method 1 & 2: Infinitive Swaps (de + inf. / Prep + inf.)', rule: 'Il est important QUE TU BOIVES → DE BOIRE. pour que → POUR (+ inf.) · avant que → avant de · afin que → afin de · de peur que → de peur de · à condition que → à condition de · sans que → sans!', ruleZh: '不定式替换铁律：il est adj. de + inf.；pour que 变成 pour（绝对没有 pour de！）；sans que 变成 sans；avant/afin/de peur/à condition 都把 que 换成 de！' },
          { label: 'Method 3 & 4: Preposition + Noun & Sentence Rewrites', rule: 'bien qu’il ait des soucis → malgré ses soucis · jusqu’à ce qu’elle arrive → jusqu’à son arrivée / jusqu’à l’arrivée de... · Il est possible que → Peut-être · Je ne suis pas sûr que → Je ne sais pas si...', ruleZh: '名词化与改写：bien que → malgré + 名词；jusqu’à ce que → jusqu’à + 名词；il est possible que → peut-être！' }
        ],
        sections: [
          {
            id: 't10c9_inf',
            heading: '1. Infinitive Avoidance (Methods 1 & 2)',
            headingZh: '一、方法一 & 二：用不定式干净规避虚拟式',
            lead: 'Notice how dropping "que + subject" streamlines general advice ("Il est important de boire") and merges two clauses sharing one subject ("pour rendre Tammy jalouse"):',
            leadZh: '看清 `Il est important de boire`（比 `que tu boives` 简洁得多），以及 `pour que → pour` 等八大介词对应表：',
            cartoon: {
              src: './assets/tex_cartoons/tas8_boire.gif',
              alt: 'Il est important de boire du vin plutôt que il est important que tu boives',
              caption: 'Il est important que tu boives du vin (Subjonctif) → Il est important de boire du vin (Infinitif, plus simple et universel) !',
              captionZh: '比起“你去喝酒这件事很重要”（que tu boives），说“喝酒很重要”（de boire du vin）既省事又地道的通用法语！'
            },
            table: {
              headers: ['Subjunctive Version', 'Infinitive Replacement (Avoids Subjunctive!)', 'Rule / Preposition Pair'],
              rows: [
                { cols: ['Il est important que tu boives du vin.', 'Il est important de boire du vin.', 'impersonal + de + infinitive'], audio: 'Il est important de boire du vin.' },
                { cols: ['Il est préférable que tu sois poli.', 'Il est préférable d’être poli.', 'd’ before vowel!'], audio: 'Il est préférable d’être poli.' },
                { cols: ['Bette drague Tex pour que Tammy soit jalouse.', 'Bette drague Tex pour rendre Tammy jalouse.', 'pour que → pour (NOT pour de!)'], audio: 'Bette drague Tex pour rendre Tammy jalouse.' },
                { cols: ['Tex ne dit rien de peur qu’elle se mette en colère.', 'Tex ne dit rien de peur de la mettre en colère.', 'de peur que → de peur de · de crainte que → de crainte de'], audio: 'Tex ne dit rien à Tammy de peur de la mettre en colère.' },
                { cols: ['avant que · afin que · à condition que · en attendant que · à moins que · sans que', 'avant de · afin de · à condition de · en attendant de · à moins de · sans', 'All take "de + inf." EXCEPT pour & sans!'], audio: 'Il faut partir avant d’être en retard et sans faire de bruit.' }
              ]
            }
          },
          {
            id: 't10c9_noun',
            heading: '2. Noun Upgrades ("malgré / jusqu’à") & Structural Rewrites (Methods 3 & 4)',
            headingZh: '二、方法三 & 四：介词 + 名词升级（malgré / jusqu’à）与句型改写',
            lead: 'In TCF Essay Writing (Expression Écrite), replacing "bien que + subj." with "malgré + noun" is one of the fastest ways to sound natural AND avoid conjugation errors:',
            leadZh: '在 TCF 作文（Expression écrite）里，用 **`malgré + 名词`** 替代 `bien que + 虚拟式`，既体现名词化高级文风又零变位失误风险：',
            cartoon: {
              src: './assets/tex_cartoons/tas8_besoin.gif',
              alt: 'J’ai besoin que tu viennes me voir vs J’ai besoin de te voir',
              caption: 'Tex : J’ai besoin que tu viennes me voir (Subjonctif) → Bette : J’ai besoin de te voir (plus direct avec l’infinitif) !',
              captionZh: 'Tex：我需要你来看我（que tu viennes）→ Bette：我需要见你（j’ai besoin de te voir，不定式更直截了当！）。'
            },
            table: {
              headers: ['Subjunctive Sentence', 'Cleaner Non-Subjunctive Alternative', 'Technique'],
              rows: [
                { cols: ['Jusqu’à ce que Tammy arrive, Tex est pensif.', 'Jusqu’à l’arrivée de Tammy, Tex est pensif.', 'jusqu’à ce que → jusqu’à + noun'], audio: 'Jusqu’à l’arrivée de Tammy, Tex est très pensif.' },
                { cols: ['Il sourit bien qu’il ait des soucis.', 'Il sourit malgré ses soucis.', 'bien que → malgré + noun (NEVER "malgré que"!)'], audio: 'Quand elle arrive, il lui sourit, malgré ses soucis.' },
                { cols: ['Je ne suis pas sûre que tu sois prêt.', 'Je ne sais pas si je suis prêt.', 'je ne sais pas si + Indicative'], audio: 'Je ne sais pas si je suis prêt pour le mariage.' },
                { cols: ['Il est possible que tu sois l’homme de ma vie.', 'Je suis peut-être l’homme de ta vie.', 'il est possible que → peut-être'], audio: 'Je suis peut-être l’homme de ta vie.' },
                { cols: ['Je n’ai pas l’impression que Tammy soit...', 'J’ai l’impression que Bette n’est pas...', 'affirmative impression + pas + Indicative!'], audio: 'J’ai l’impression que Bette n’est pas la femme de ta vie.' },
                { cols: ['J’ai besoin que tu viennes me voir.', 'J’ai besoin de te voir.', 'avoir besoin de + infinitive'], audio: 'Viens me voir chez moi, j’ai besoin de te voir.' }
              ]
            },
            quickCheck: {
              prompt: 'Pick the sentence that avoids the subjunctive WITHOUT introducing a notorious French grammar error:',
              promptZh: '选出既成功规避虚拟式、又**没有犯常见中法直译语法错**的一句：',
              options: [
                'Malgré ses nombreux défauts, Tammy aime Tex. (malgré + noun!)',
                'Malgré qu’il a des défauts, Tammy aime Tex. (Error: never "malgré que + Ind."!)',
                'Pour de finir mon poème, il me faut du calme. (Error: "pour", never "pour de"!)',
                'Sans de comprendre le texte, il répond. (Error: "sans", never "sans de"!)'
              ],
              answerIdx: 0,
              explain: 'Use "malgré + noun" (never "malgré que"), "pour + inf." (never "pour de"), and "sans + inf." (never "sans de")!',
              explainZh: '三大禁区避雷：① 永远是 **malgré + 名词**（不要写成 malgré que + 直陈式！）；② 永远是 **pour + 不定式**（没有 pour de）；③ 永远是 **sans + 不定式**（没有 sans de）！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10c9_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1 (Prep + Noun): Tammy : J’aime Tex ___ ses défauts. (Rephrase "[bien qu’il ait] ses défauts")',
            promptZh: 'Tex 原题 #1：改写 `[bien qu’il ait] ses défauts`，用介词 + 名词短语规避虚拟式（不用任何从句）：',
            answers: ['malgré'],
            hint: 'One word replacing "bien qu’il ait" right before "ses défauts" = malgré!',
            audio: 'J’aime Tex malgré ses défauts.',
            explain: 'bien qu’il ait ses défauts → malgré ses défauts!',
            explainZh: 'bien que + 主谓句 直接升级为介词 **malgré** + 名词短语！'
          },
          {
            id: 'dt10c9_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2 (Impersonal + de + inf.): Tammy : Il est important ___ honnête. (Rephrase "[qu’on soit] honnête")',
            promptZh: 'Tex 原题 #2：改写 `[qu’on soit] honnête`，用 de + 不定式规避虚拟式：',
            answers: ["d'être", 'd’être'],
            hint: 'de + être → d’être!',
            audio: 'Il est important d’être honnête.',
            explain: 'Il est important qu’on soit → Il est important d’être.',
            explainZh: '无人称概括建议直接用 **d’être**！'
          },
          {
            id: 'dt10c9_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3 (pour + inf.): Tex : ___ mon poème, il me faut de l’inspiration. (Rephrase "[Pour que je finisse] mon poème")',
            promptZh: 'Tex 原题 #3：改写 `[Pour que je finisse]`，用介词 pour + 不定式（句首首字母大写）：',
            answers: ['Pour finir'],
            hint: 'pour que → Pour + finir (NO "de" after pour!).',
            audio: 'Pour finir mon poème, il me faut de l’inspiration.',
            explain: 'Pour que je finisse → Pour finir!',
            explainZh: 'pour que 去掉 que 和主语变成 **Pour finir**（千万不要加 de）。'
          },
          {
            id: 'dt10c9_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Paw-Paw : Il est indispensable pour Tex ___ sa famille. (Rephrase "[qu’il connaisse] sa famille")',
            promptZh: 'Tex 原题 #4：改写 `[qu’il connaisse]`，用 de + 不定式：',
            answers: ['de connaître'],
            hint: 'il est indispensable pour Tex de + connaître.',
            audio: 'Il est indispensable pour Tex de connaître sa famille.',
            explain: 'de connaître sa famille.',
            explainZh: '主语已在 pour Tex 中点明，后面直接用 **de connaître**！'
          },
          {
            id: 'dt10c9_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tex : Il est essentiel ___ de la poésie. (Rephrase "[que nous lisions] de la poésie")',
            promptZh: 'Tex 原题 #5：改写 `[que nous lisions]`，改为无人称不定式结构：',
            answers: ['de lire'],
            hint: 'de + infinitive of lire = de lire.',
            audio: 'Il est essentiel de lire de la poésie.',
            explain: 'Il est essentiel de lire de la poésie.',
            explainZh: 'que nous lisions → **de lire**。'
          },
          {
            id: 'dt10c9_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tammy : À condition ___ tôt, nous aurons des places. (Rephrase "[que nous arrivions] tôt")',
            promptZh: 'Tex 原题 #6：改写 `[que nous arrivions]`（同主语条件，填 `d’ + 不定式`）：',
            answers: ["d'arriver", 'd’arriver'],
            hint: 'à condition de + arriver → d’arriver!',
            audio: 'À condition d’arriver tôt, nous aurons des places.',
            explain: 'à condition que nous arrivions → à condition d’arriver.',
            explainZh: 'à condition que 同主语可变为 à condition **d’arriver**！'
          },
          {
            id: 'dt10c9_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Fiona : Il faut travailler afin ___ nos examens. (Rephrase "[que nous réussissions] nos examens")',
            promptZh: 'Tex 原题 #7：改写 `[que nous réussissions]`（afin 后接 `de + 不定式`）：',
            answers: ['de réussir'],
            hint: 'afin que → afin de + réussir!',
            audio: 'Il faut travailler afin de réussir nos examens.',
            explain: 'afin que nous réussissions → afin de réussir.',
            explainZh: 'afin que 同主语替换为 afin **de réussir**！'
          },
          {
            id: 'dt10c9_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8 (Prep + Noun): Tammy : ___ mes gros efforts, je ne comprends pas Sartre. (Rephrase "[Bien que je fasse] de gros efforts")',
            promptZh: 'Tex 原题 #8：改写 `[Bien que je fasse]`，只填前面那个让步介词（首字母大写，后接 mes gros efforts）：',
            answers: ['Malgré'],
            hint: 'bien que + verb → Malgré + mes gros efforts!',
            audio: 'Malgré mes gros efforts, je ne comprends pas Sartre.',
            explain: 'Bien que je fasse de gros efforts → Malgré mes gros efforts!',
            explainZh: '连词 bien que 升级为介词 **Malgré**（+ 名词短语 mes gros efforts）。'
          },
          {
            id: 'dt10c9_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tammy : Il est nécessaire ___ du sport régulièrement ! (Rephrase "[que nous fassions] du sport")',
            promptZh: 'Tex 原题 #9：改写 `[que nous fassions]`，用 de + 不定式：',
            answers: ['de faire'],
            hint: 'de + faire.',
            audio: 'Il est nécessaire de faire du sport régulièrement !',
            explain: 'Il est nécessaire de faire du sport régulièrement !',
            explainZh: '无人称结构直接用 **de faire**。'
          },
          {
            id: 'dt10c9_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Edouard : Avant ___ à Austin, je ne parlais pas anglais. (Rephrase "[que je vienne] à Austin")',
            promptZh: 'Tex 原题 #10：改写 `[que je vienne]`（Avant 后接 `de + 不定式`）：',
            answers: ['de venir'],
            hint: 'avant que → avant de + venir!',
            audio: 'Avant de venir à Austin, je ne parlais pas anglais.',
            explain: 'Avant que je vienne → Avant de venir!',
            explainZh: 'avant que 同主语标准替换：avant **de venir**（或已完成用 avant d’être venu）。'
          },
          {
            id: 'dt10c9_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Tammy : Il est essentiel ___ poli. (Rephrase "[qu’on soit] poli")',
            promptZh: 'Tex 原题 #11：改写 `[qu’on soit]`，用 d’ + 不定式：',
            answers: ["d'être", 'd’être'],
            hint: 'de + être → d’être!',
            audio: 'Il est essentiel d’être poli.',
            explain: 'Il est essentiel d’être poli.',
            explainZh: '同上，无人称一般建议：d’être！'
          },
          {
            id: 'dt10c9_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tex : Je veux manger avant ___ au cinéma ! (Rephrase "[que nous allions] au cinéma")',
            promptZh: 'Tex 原题 #12：改写 `[que nous allions]`（avant 后接 `d’ + 不定式`）：',
            answers: ["d'aller", 'd’aller'],
            hint: 'avant de + aller → avant d’aller!',
            audio: 'Je veux manger avant d’aller au cinéma !',
            explain: 'avant que nous allions → avant d’aller!',
            explainZh: 'avant que 同主语必换为 avant **d’aller**（绝对不能对同一个主语说 avant que nous allions！）。'
          }
        ],
        related: [
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_8', label: 'Back to 10C.8 WEDDINGS Summary' },
          { chapterId: 'ch9_conjunctions', pageId: 'c9_4', label: 'Review 9.4 Subjunctive vs. Infinitive Connectors' }
        ]
      }
    ]
  });
})();
