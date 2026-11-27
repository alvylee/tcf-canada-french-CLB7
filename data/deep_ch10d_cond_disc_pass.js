(function () {
  if (!Array.isArray(window.__TCF_DEEP_CHAPTERS__)) window.__TCF_DEEP_CHAPTERS__ = [];
  window.__TCF_DEEP_CHAPTERS__.push({
    id: 'ch10d_cond_disc_pass',
    code: 'Ch 10D',
    level: 'B1–B2',
    category: 'tense_mood_d',
    icon: '⚖️',
    title: 'Tense & Mood IV: Conditional, Si-Clauses, Reported Speech & Passive',
    titleZh: '第十章 D · 条件式、Si 条件句、间接引语时态配合与被动语态',
    subtitle: 'Tex-style deep mastery of Chapter 10 Part D (tac1–3, tad1–2, tav1 across 6 bite-sized pages): present conditional ("would") & journalistic unconfirmed rumor, past conditional ("would have") & regrets, the 3 golden Si-clause sequences (+ "si" if vs. whether), present indirect speech (que/si/ce qui/ce que/de+inf.), past reported speech backshifting (concordance des temps), and active vs. passive voice (être + PP agreement + on/pronominal alternatives) — with 9 original Tex cartoons & 72 drills.',
    subtitleZh: '对标 Tex 原版第十章 D（tac1–3, tad1–2, tav1 共 6 个轻松小页）：现在条件式（礼貌/建议/新闻未证实传闻）、过去条件式（后悔/责备与未实现假设）、三大 Si 条件从句黄金配对、现在间接引语、过去间接引语时态后退（concordance des temps），以及被动态配合与 on/自反规避技巧，配 9 张原版卡通与 72 题专练。',
    pages: [
      /* =========================================================
         PAGE 10D.1: PRESENT CONDITIONAL (tac1)
      ========================================================= */
      {
        id: 't10d_1',
        code: '10D.1',
        group: 'Conditional & Hypothesis',
        shortTitle: 'Present Conditional ("would")',
        title: 'Le Conditionnel Présent: Future Stem + Imparfait Endings ("would / could / should")',
        titleZh: '现在条件式（Conditionnel présent）：将来时词干 + 未完成过去时词尾',
        estMin: 4,
        summary: 'Think of LE CONDITIONNEL PRÉSENT as the simplest hybrid formula in French: take the EXACT SAME STEM as Futur Simple (regular infinitive, drop final "-e" on -re verbs like "vendr-", same stem-changes like "j’achèter- / j’appeller-", and the exact same irregular stems: ser-, aur-, ir-, fer-, saur-, pourr-, voudr-, devr-, viendr-, verr-, faudr-, pleuvr-), then add IMPARFAIT endings (-ais, -ais, -ait, -ions, -iez, -aient)! Pronunciation check: watch out for "je jouerai" (future /e/) vs. "je jouerais" (conditional /ɛ/). Master all FOUR uses: (1) Polite requests & advice — "je voudrais" (I would like), "pourriez-vous" (could you), "tu devrais" (you should); (2) Hypothetical results paired with Si + Imparfait ("Si vous gagniez, j’écrirais"); (3) Journalistic uncertainty ("Il y aurait plusieurs victimes" = reportedly / allegedly); (4) Future-in-the-past reported speech ("Tex a dit qu’il rentrerait"). TRAP: English "would" for past habits ("when we lived in Paris, we would go...") = IMPARFAIT ("nous allions"), NEVER Conditional!',
        summaryZh: '现在条件式（Le conditionnel présent）是法语最爽的**“拼装式”**：**直接拿“简单将来时”词干**（规则动词不定式原形 / `-re` 去末尾 `-e` / 以及同一套不规则词根 `ser-, aur-, ir-, fer-, saur-, pourr-, voudr-, devr-, viendr-, verr-, faudr-`）＋ **未完成过去时词尾（`-ais, -ais, -ait, -ions, -iez, -aient`）**！掌握四大高频核心用途：① **礼貌委婉表达、建议与愿望**：`je voudrais`（我想要）、`pourriez-vous`（您能否）、`tu devrais`（你本应该）；② **非真实假设结果**：配 `Si + 未完成过去时`（*Si vous gagniez, j’écrirais*）；③ **新闻未证实传闻（TCF 阅读/听力必考！）**：`Il y aurait... / seraient...`（据报道/据说可能有……）；④ **过去视角下的“将来”（间接引语）**：*Tex a dit qu’il rentrerait bientôt*。⚠️ **英法超级陷阱**：英语里表达“过去常常……”的 `would`（*Every day he would go to McDonald’s*）必须用**未完成过去时（`allait`）**，绝不能用条件式！',
        cheatSummary: [
          { label: 'Formula: Futur Stem + Imparfait Endings (-ais…-aient)', rule: 'jouer → je jouerais · vendre → je vendrais · acheter → j’achèterais · être → serais · avoir → aurais · faire → ferais · pouvoir → pourrais · vouloir → voudrais · devoir → devrais!', ruleZh: '构成公式：简单将来时词干（不规则全同）+ -ais/-ais/-ait/-ions/-iez/-aient！' },
          { label: '4 Uses + The "Past Habit Would" Trap', rule: '(1) Politeness/Advice (je voudrais, pourriez-vous, tu devrais); (2) Hypothesis (si + imparfait → cond.); (3) Journalist rumor ("Il y aurait des victimes"); (4) Future-in-past ("a dit qu’il viendrait"). Past habit "used to / would" = IMPARFAIT!', ruleZh: '四大用途：礼貌请求、假设推演、新闻传闻（不确定事实）、过去时态下的将来；过去习惯性“常常会”只能用 Imparfait！' }
        ],
        sections: [
          {
            id: 't10d1_cond_forms',
            heading: '1. Conditional Stems, Politeness & Journalistic Rumor',
            headingZh: '一、高频条件式词干表、点餐礼貌对比与新闻传闻对话',
            lead: 'Compare polite Tammy ("Pourrions-nous... Je voudrais...") with blunt Joe-Bob ("Je veux un hamburger!") and waiter Edouard’s sharp reply ("vous devriez être plus poli, sinon je pourrais oublier..."):',
            leadZh: '背熟下表所有词干（尤其是 `pouvoir / vouloir / devoir / falloir / avoir / être`），再对照餐厅点餐和龙卷风新闻播报体验四种语用场景：',
            cartoon: {
              src: './assets/tex_cartoons/tac1_hamburger.gif',
              alt: 'Joe-Bob dit Je veux un hamburger au restaurant où travaille Edouard',
              caption: 'Tammy : Pourrions-nous avoir un Perrier ? Je voudrais une salade. — Joe-Bob : Je veux un hamburger ! — Edouard : Vous devriez être plus poli, sinon je pourrais oublier !',
              captionZh: 'Tammy：请问能给我们来杯气泡水吗？（Pourrions-nous / Je voudrais，超礼貌）— Joe-Bob：我要个汉堡！（Je veux，略粗鲁）— Edouard：先生您应该客气点（vous devriez），不然我可“会不小心”忘了您的单（je pourrais）！'
            },
            table: {
              headers: ['Verb Group', 'Conditional Stem', 'Je / Nous / Ils Forms'],
              rows: [
                { cols: ['Regular -ER / -IR / -RE', 'infinitif (drop -e on -re)', 'je jouerais · tu finirais · il vendrait · nous regarderions'], audio: 'Je jouerais avec toi, nous finirions tôt et il vendrait sa voiture.' },
                { cols: ['Stem-Changing -ER', 'j’appeller- / j’achèter- / j’emploier- (préférer stays préférer-!)', 'j’achèterais · j’appellerais · je préférerais · j’espérerais'], audio: 'J’achèterais mon diplôme et je préférerais aller au concert.' },
                { cols: ['être · avoir · aller · faire', 'ser- · aur- · ir- · fer-', 'je serais · j’aurais · j’irais · nous ferions · que feriez-vous ?'], audio: 'Que feriez-vous si vous gagniez trente millions de dollars ?' },
                { cols: ['vouloir · pouvoir · devoir · falloir', 'voudr- · pourr- · devr- · faudr-', 'je voudrais · pourriez-vous ? · tu devrais · il faudrait'], audio: 'Je voudrais un café, pourriez-vous m’aider et tu devrais écouter.' },
                { cols: ['savoir · voir · venir · tenir · courir · mourir · envoyer', 'saur- · verr- · viendr- · tiendr- · courr- · mourr- · enverr-', 'je saurais · je verrais · il viendrait · j’enverrais (double r on courr/mourr/verr/enverr!)'], audio: 'Il viendrait demain et nous verrions plus tard.' }
              ]
            },
            dialogue: {
              title: 'Breaking News Flash: Journalistic Conditional',
              titleZh: '实战播报：新闻媒体“未经证实传闻”条件式',
              lines: [
                { speaker: 'Présentateur', fr: 'Une tornade vient de s’abattre sur Hubbard, Texas. Il y aurait plusieurs victimes. Un tatou et un écureuil seraient gravement blessés. Nous devrions avoir plus de détails d’ici quelques secondes.', en: 'A tornado just struck Hubbard, Texas. Reportedly, there are several casualties. An armadillo and a squirrel seem to be seriously wounded. We should have more details in a few seconds.', zh: 'il y aurait / seraient（“据称/或许有……”）：记者不作百分百担保的突发新闻传闻，TCF 阅读听力极常考！' },
                { speaker: 'Tex (téléphone)', fr: 'Tammy, c’est moi, Tex. Ne t’inquiète pas, on va très bien. Je rentrerai bientôt.', en: 'Tammy, it’s me, Tex. Don’t worry, we’re fine. I’ll be home soon.', zh: '本人开口证实之后用 Futur Simple（je rentrerai）；事后转述时才变成：Tex a dit qu’il rentrerait bientôt！' }
              ]
            },
            quickCheck: {
              prompt: 'Pick the sentence where the conditional is used INCORRECTLY according to French grammar:',
              promptZh: '找出法语中**错用**条件式（Conditionnel）的一句（注意英法思维陷阱）：',
              options: [
                'Quand j’habitais à Paris, j’irais au café tous les matins. (Error: past habit = "j’allais" in Imparfait!)',
                'Pourriez-vous me passer le sel, s’il vous plaît ? (Polite request)',
                'Selon ce journal, le ministre démissionnerait demain. (Unconfirmed news)',
                'Tex a promis qu’il finirait son poème avant minuit. (Future in the past)'
              ],
              answerIdx: 0,
              explain: 'English "When I lived in Paris, I would go (= used to go)..." MUST be IMPARFAIT ("j’allais"), NEVER conditional ("j’irais")!',
              explainZh: '大坑预警：过去反复习惯动作“以前我每天都会去……”必须用未完成过去时 **j’allais**，条件式 j’irais 只表假设或礼貌请求！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10d1_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex : Je ___ un café, s’il vous plaît. (vouloir — conditionnel)',
            promptZh: 'Tex 原题 #1：Tex：请问我想要一杯咖啡（vouloir，礼貌条件式）：',
            answers: ['voudrais'],
            hint: 'vouloir conditional stem = voudr- + -ais → voudrais.',
            audio: 'Je voudrais un café, s’il vous plaît.',
            explain: 'je voudrais (polite request!).',
            explainZh: '点餐礼貌固定说法：je voudrais。'
          },
          {
            id: 'dt10d1_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tex : Edouard et moi, nous ___ bien envie d’une petite liqueur. (avoir — conditionnel)',
            promptZh: 'Tex 原题 #2：Tex：我和 Edouard 倒是很想来点利口酒（avoir，nous）：',
            answers: ['aurions'],
            hint: 'avoir stem aur- + -ions → aurions.',
            audio: 'Nous aurions bien envie d’une petite liqueur.',
            explain: 'nous aurions.',
            explainZh: 'avoir 条件式词干 aur- + nous 词尾 -ions → aurions。'
          },
          {
            id: 'dt10d1_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Bette : Si ça ne te fait rien, je ___ aller au concert. (préférer — conditionnel)',
            promptZh: 'Tex 原题 #3：Bette：如果你不介意的话，我更想去听音乐会（préférer，保留 é-é！）：',
            answers: ['préférerais'],
            hint: 'Future/cond. stem of préférer keeps acute accents: préférer- + -ais → préférerais.',
            audio: 'Si ça ne te fait rien, je préférerais aller au concert.',
            explain: 'je préférerais (two é accents, unlike "je préfère"!).',
            explainZh: '细节加分点：préférer / espérer 在将来时与条件式中两个字母都保持闭音符 **é** → préférerais！'
          },
          {
            id: 'dt10d1_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Tammy : Tex, c’est l’anniversaire de Fiona. Tu ___ lui offrir un cadeau. (devoir — conditionnel)',
            promptZh: 'Tex 原题 #4：Tammy：Tex，今天是 Fiona 生日，你应该送她一份礼物（devoir，tu）：',
            answers: ['devrais'],
            hint: 'devoir stem devr- + -ais → devrais.',
            audio: 'Tu devrais lui offrir un cadeau.',
            explain: 'tu devrais ("you should").',
            explainZh: '给出委婉建议“你应该……”用 devoir 的条件式：tu devrais。'
          },
          {
            id: 'dt10d1_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tammy : Il ___ vraiment que Tex travaille. (falloir — conditionnel)',
            promptZh: 'Tex 原题 #5：Tammy：Tex 真的得好好工作才行啊（falloir，无人称）：',
            answers: ['faudrait'],
            hint: 'falloir stem faudr- + -ait → faudrait.',
            audio: 'Il faudrait vraiment que Tex travaille.',
            explain: 'il faudrait ("it would be necessary / Tex really ought to").',
            explainZh: 'falloir 词干 faudr- + -ait → faudrait。'
          },
          {
            id: 'dt10d1_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Bette : On ___ beaucoup rencontrer Tex. (aimer — conditionnel)',
            promptZh: 'Tex 原题 #6：Bette：人家好想见见 Tex 呀（aimer，on）：',
            answers: ['aimerait'],
            hint: 'aimer- + -ait → aimerait.',
            audio: 'On aimerait beaucoup rencontrer Tex.',
            explain: 'on aimerait.',
            explainZh: '规则第一组动词：词干 aimer- + -ait → aimerait。'
          },
          {
            id: 'dt10d1_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Joe-Bob : ___-vous me prêter de l’argent ? (pouvoir — conditionnel)',
            promptZh: 'Tex 原题 #7：Joe-Bob：您能借我点钱吗？（pouvoir，vous 倒装，句首大写 + 双写 r！）：',
            answers: ['Pourriez'],
            hint: 'pouvoir stem pourr- (double r!) + -iez → Pourriez.',
            audio: 'Pourriez-vous me prêter de l’argent ?',
            explain: 'Pourriez-vous ("Could you...?").',
            explainZh: 'pouvoir 条件式词干双写 r（pourr-）+ -iez → Pourriez-vous！'
          },
          {
            id: 'dt10d1_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tex : J’___ beaucoup des excuses. (apprécier — conditionnel)',
            promptZh: 'Tex 原题 #8：Tex：如果能听到一句道歉我会非常感激（apprécier，je）：',
            answers: ['apprécierais'],
            hint: 'apprécier- + -ais → apprécierais.',
            audio: 'J’apprécierais beaucoup des excuses.',
            explain: 'j’apprécierais.',
            explainZh: '标准 -er 条件式：apprécierais。'
          },
          {
            id: 'dt10d1_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Edouard : Vous ___ aimable de fermer la porte. (être — conditionnel)',
            promptZh: 'Tex 原题 #9：Edouard：如果您能关下门那就太好了（être，vous）：',
            answers: ['seriez'],
            hint: 'être stem ser- + -iez → seriez.',
            audio: 'Vous seriez aimable de fermer la porte.',
            explain: 'vous seriez aimable de... (polite phrasing!).',
            explainZh: '礼貌套语：Vous seriez aimable de...（être 词干 ser- + -iez → seriez）。'
          },
          {
            id: 'dt10d1_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Trey : Tex, tu ___ faire plus de sport. (devoir — conditionnel)',
            promptZh: 'Tex 原题 #10：Trey：Tex，你该多做做运动了（devoir，tu）：',
            answers: ['devrais'],
            hint: 'tu devrais.',
            audio: 'Tex, tu devrais faire plus de sport.',
            explain: 'tu devrais.',
            explainZh: 'tu devrais。'
          },
          {
            id: 'dt10d1_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Tex : Vous ___ intérêt à faire attention. (avoir — conditionnel)',
            promptZh: 'Tex 原题 #11：Tex：你们最好小心点（avoir intérêt à...，vous）：',
            answers: ['auriez'],
            hint: 'avoir stem aur- + -iez → auriez.',
            audio: 'Vous auriez intérêt à faire attention.',
            explain: 'vous auriez intérêt à ("you’d be well advised to").',
            explainZh: 'vous auriez intérêt à（最好……）。'
          },
          {
            id: 'dt10d1_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tammy et Bette ___ vivre en France. (aimer — conditionnel)',
            promptZh: 'Tex 原题 #12：Tammy 和 Bette 很想住在法国（aimer，3 复数）：',
            answers: ['aimeraient'],
            hint: 'elles aimeraient.',
            audio: 'Tammy et Bette aimeraient vivre en France.',
            explain: 'elles aimeraient.',
            explainZh: '第三人称复数词尾为 -aient → aimeraient。'
          }
        ],
        related: [
          { chapterId: 'ch10c_subjunctive', pageId: 't10c_9', label: 'Back to 10C.9 Avoid Subjunctive' },
          { chapterId: 'ch10d_cond_disc_pass', pageId: 't10d_2', label: '10D.2 Past Conditional' }
        ]
      },

      /* =========================================================
         PAGE 10D.2: PAST CONDITIONAL (tac2)
      ========================================================= */
      {
        id: 't10d_2',
        code: '10D.2',
        group: 'Conditional & Hypothesis',
        shortTitle: 'Past Conditional ("would have")',
        title: 'Le Conditionnel Passé: Past Regrets, Unfulfilled Hypotheses & Journalistic Past',
        titleZh: '过去条件式（Conditionnel passé）：本可以 / 本应该 / 当初要不是……',
        estMin: 4,
        summary: 'LE CONDITIONNEL PASSÉ ("would have done") expresses regret, reproach, or imaginary results of events that NEVER happened! Formula = Present Conditional of avoir ("aurais, aurais, aurait, aurions, auriez, auraient") OR être ("serais, serais, serait, serions, seriez, seraient") + Past Participle ("j’aurais dit", "elle serait partie"). Remember all Alamo être and pronominal agreement rules still apply ("nous serions parti(e)s", "elles se seraient disputées")! Three big conversational power phrases: "j’aurais aimé / voulu" (I would have liked), "tu aurais dû" (you should have), "j’aurais pu" (I could have) + journalistic rumor about a past event ("La tornade aurait fait plusieurs victimes") + reported Futur Antérieur in past speech ("Il a dit qu’il serait rentré plus tôt")!',
        summaryZh: '想感叹“要是当初……我就（不会）……”、“你本应该……”或“我差点就能……”，靠的就是**过去条件式（Conditionnel passé）**！构成比呼吸还简单：**`avoir` 的现在条件式（`aurais…`）或 `être` 的现在条件式（`serais…`）＋ 过去分词**，且 `être` 动词（Alamo）与代动词的**性数配合规矩完全生效**（如 *elle serait devenue / elles se seraient disputées*）！三大日常必背黄金短语：`j’aurais aimé / voulu`（我本想……）、`j’aurais pu`（我本可以……）、`tu aurais dû`（你本应该……）！新闻记者播报尚未证实的“已经发生的事件”也用它（*Elle aurait fait plusieurs victimes* ＝ 据报已造成多人伤亡），并且它是先将来时在过去间接引语中的对应变体。',
        cheatSummary: [
          { label: 'Formula + Alamo / Pronominal Agreement', rule: 'avoir (aurais/aurions/auraient) OR être (serais/serions/seraient) + Past Participle! Pronominal/être verbs agree with subject ("nous serions parti(e)s", "elles se seraient disputées").', ruleZh: '构成公式：aurais / serais + 过去分词；凡用 être 或代动词，过去分词照常跟主语做性数配合！' },
          { label: 'The 3 Big Regret Modals + Type 3 Si-Clause Pair', rule: 'aurait dû = should have · aurait pu = could have · aurait voulu/aimé = would have liked. Pairs with Si + Plus-que-parfait ("Si j’avais su, je serais resté")!', ruleZh: '遗憾三剑客：aurait dû（本该）、aurait pu（本能）、aurait voulu（本想）；常与 Si + 愈过去时搭配（第 3 类虚拟过去假设）！' }
        ],
        sections: [
          {
            id: 't10d2_past_cond',
            heading: '1. Formation, Regrets & Journalistic Past Dialogue',
            headingZh: '一、过去条件式构成、遗憾三剑客与“留美还是留法”对话',
            lead: 'Notice how every verb in Tex and Edouard’s chat uses past conditional for what DID NOT happen ("je serais resté... je n’aurais pas connu... auraient perdu"):',
            leadZh: '看下面两张对照表（含 `être` 性数配合）和 Tex 的假设对话：如果当初没卖 T 恤，人生会怎样？',
            cartoon: {
              src: './assets/tex_cartoons/tac2_beau.gif',
              alt: 'Corey se regarde dans le miroir : J’aurais voulu être beau',
              caption: 'Corey : J’aurais voulu être beau ! — Tammy : Je n’aurais pas dû écouter Bette ! — Edouard : J’aurais pu être un chef célèbre !',
              captionZh: 'Corey：我好想当年长帅一点啊（j’aurais voulu）！— Tammy：我真不该听信 Bette（je n’aurais pas dû）！— Edouard：我原本可以成为名厨的（j’aurais pu）！'
            },
            table: {
              headers: ['Auxiliary / Function', 'Forms', 'Key Example'],
              rows: [
                { cols: ['avoir Auxiliary (no subject agreement)', 'j’aurais dit · tu aurais dit · il aurait dit · nous aurions dit · vous auriez dit · ils auraient dit', 'Si tu n’avais pas vendu de T-shirts, ils auraient perdu l’occasion.'], audio: 'Ses copains auraient perdu l’occasion de le connaître.' },
                { cols: ['être Auxiliary (subject agreement!)', 'je serais parti(e) · elle serait partie · nous serions parti(e)s · elles seraient parties', 'D’un côté, je serais resté en France et je ne serais pas devenu ami avec Tammy.'], audio: 'Je serais resté en France et elle serait partie plus tôt.' },
                { cols: ['Regret / Reproach Modals', 'aurais dû (should have) · aurais pu (could have) · aurais voulu/aimé (would have liked)', 'Je n’aurais pas dû écouter Bette ! J’aurais pu être un chef célèbre !'], audio: 'Je n’aurais pas dû écouter Bette. J’aurais pu être célèbre.' },
                { cols: ['Journalistic Unconfirmed Past', 'Same past conditional used in TV/press reports for unverified past facts', 'Une tornade aurait fait plusieurs victimes et un tatou aurait été blessé.'], audio: 'La tornade aurait fait plusieurs victimes à Hubbard.' }
              ]
            },
            dialogue: {
              title: 'Edouard & Tex: What If Tex Had Stayed in France?',
              titleZh: '小对话：假如 Tex 当初没来美国',
              lines: [
                { speaker: 'Edouard', fr: 'Si tu n’avais pas vendu de T-shirts aux touristes, qu’est-ce qui serait arrivé ?', en: 'If you hadn’t sold T-shirts to tourists, what would have happened?', zh: 'Si + 愈过去时（avais vendu）引出过去条件式提问：qu’est-ce qui serait arrivé（用 être）？' },
                { speaker: 'Tex', fr: 'Ben, d’un côté, je serais resté en France. Mais de l’autre, je n’aurais pas connu le Texas et je ne serais pas devenu ami avec Tammy !', en: 'Well, on one hand I would have stayed in France. On the other, I wouldn’t have known Texas and wouldn’t have become friends with Tammy!', zh: '注意 rester 和 devenir 都用 être（je serais resté / devenu），connaître 用 avoir（n’aurais pas connu）！' }
              ]
            },
            quickCheck: {
              prompt: 'Translate cleanly: "If she hadn’t lost her passport, Tammy would have left yesterday."',
              promptZh: '选出“如果她没弄丢护照，Tammy 昨天就已经出发了”的正确法语（注意 `partir` 配合）：',
              options: [
                'Si elle n’avait pas perdu son passeport, Tammy serait partie hier.',
                'Si elle n’avait pas perdu son passeport, Tammy aurait parti hier.',
                'Si elle n’aurait pas perdu son passeport, Tammy serait partie hier.',
                'Si elle n’avait pas perdu son passeport, Tammy serait parti hier.'
              ],
              answerIdx: 0,
              explain: 'Si + plus-que-parfait ("n’avait pas perdu") → past conditional with être + feminine agreement ("serait partie")!',
              explainZh: 'partir 用 être 作助动词，且 Tammy 是女性，末尾加 -e → serait partie！（另记：si 后面绝对不用 aurais！）'
            }
          }
        ],
        drills: [
          {
            id: 'dt10d2_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex et Tammy ___ en France, s’ils avaient pu. (rester — cond. passé)',
            promptZh: 'Tex 原题 #1：如果当初可以的话，Tex 和 Tammy 本会留在法国的（rester 用 être + 复数）：',
            answers: ['seraient restés'],
            hint: 'rester takes être; Tex et Tammy (masc. pl.) → seraient restés!',
            audio: 'Tex et Tammy seraient restés en France, s’ils avaient pu.',
            explain: 'seraient restés (être auxiliary + plural -s!).',
            explainZh: 'rester 是 Alamo 动词用 être，男女复数（Tex + Tammy）加 -s → seraient restés！'
          },
          {
            id: 'dt10d2_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tex ___ honte de ses parents, s’il les avait connus. (avoir — cond. passé)',
            promptZh: 'Tex 原题 #2：要是 Tex 曾认识他父母的话，他本会感到羞愧的（avoir，过去分词 eu）：',
            answers: ['aurait eu'],
            hint: 'il aurait + eu.',
            audio: 'Tex aurait eu honte de ses parents, s’il les avait connus.',
            explain: 'aurait eu.',
            explainZh: 'avoir 的过去条件式：aurait + eu → aurait eu。'
          },
          {
            id: 'dt10d2_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Edouard : Je ___ en avance, si j’avais pu ! (arriver — cond. passé, masc.)',
            promptZh: 'Tex 原题 #3：Edouard（男）：如果当初来得及，我本会提前到的（arriver 用 être）：',
            answers: ['serais arrivé'],
            hint: 'arriver takes être → je serais arrivé.',
            audio: 'Je serais arrivé en avance, si j’avais pu !',
            explain: 'je serais arrivé.',
            explainZh: 'arriver 用 être 助动词，Edouard 为男性 → serais arrivé。'
          },
          {
            id: 'dt10d2_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Rita : J’___ plus tôt mon mari, si j’avais pu. (quitter — cond. passé)',
            promptZh: 'Tex 原题 #4：Rita：如果我当时能的话，早就会离开我丈夫了（quitter，用 avoir）：',
            answers: ['aurais quitté'],
            hint: 'quitter takes avoir → j’aurais quitté.',
            audio: 'J’aurais quitté plus tôt mon mari, si j’avais pu.',
            explain: 'quitter takes avoir ("j’aurais quitté") — don’t confuse with partir!',
            explainZh: '提醒：quitter 是直接及物动词，永远用 avoir（不跟女性主语 Rita 配合）→ aurais quitté！'
          },
          {
            id: 'dt10d2_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tammy : Fiona et moi, nous ___ le concours, si nous avions joué. (gagner — cond. passé)',
            promptZh: 'Tex 原题 #5：Tammy：如果我和 Fiona 参赛了，我们肯定赢了比赛（gagner，nous）：',
            answers: ['aurions gagné'],
            hint: 'gagner takes avoir → nous aurions gagné.',
            audio: 'Nous aurions gagné le concours, si nous avions joué.',
            explain: 'nous aurions gagné.',
            explainZh: 'gagner 用 avoir → aurions gagné。'
          },
          {
            id: 'dt10d2_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tammy : Tex et Joe-Bob, vous ___ ma tarte aux pommes. (aimer — cond. passé)',
            promptZh: 'Tex 原题 #6：Tammy：Tex 和 Joe-Bob，你们一定会爱上我做的苹果派的（aimer，vous）：',
            answers: ['auriez aimé'],
            hint: 'vous auriez + aimé.',
            audio: 'Vous auriez aimé ma tarte aux pommes.',
            explain: 'vous auriez aimé.',
            explainZh: 'vous auriez aimé。'
          },
          {
            id: 'dt10d2_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Rita : Tex, tu ___ au Texas, si tu ne t’étais pas perdu. (grandir — cond. passé)',
            promptZh: 'Tex 原题 #7：Rita：Tex，如果你当初没走丢的话，你就会在德克萨斯长大了（grandir 用 avoir）：',
            answers: ['aurais grandi'],
            hint: 'grandir takes avoir → tu aurais grandi.',
            audio: 'Tu aurais grandi au Texas, si tu ne t’étais pas perdu.',
            explain: 'tu aurais grandi.',
            explainZh: 'grandir 用 avoir → aurais grandi。'
          },
          {
            id: 'dt10d2_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tammy ___ infirmière, si elle n’avait pas fait du français. (devenir — cond. passé, fem.)',
            promptZh: 'Tex 原题 #8：如果 Tammy 没学法语，她本来会成为一名护士（devenir 用 être + 阴单配合！）：',
            answers: ['serait devenue'],
            hint: 'devenir takes être + Tammy = fem. sg. → serait devenue (+e)!',
            audio: 'Tammy serait devenue infirmière, si elle n’avait pas fait du français.',
            explain: 'Tammy (fem.) + devenir (être) → serait devenue!',
            explainZh: 'devenir 用 être，配合女性主语 Tammy 加 -e → serait devenue！'
          },
          {
            id: 'dt10d2_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Joe-Bob ___ à A & M, s’il avait pu. (aller — cond. passé, masc.)',
            promptZh: 'Tex 原题 #9：Joe-Bob 当初能去的话本会去 A&M 大学的（aller 用 être）：',
            answers: ['serait allé'],
            hint: 'aller takes être → serait allé.',
            audio: 'Joe-Bob serait allé à A & M, s’il avait pu.',
            explain: 'il serait allé.',
            explainZh: 'aller 用 être → serait allé。'
          },
          {
            id: 'dt10d2_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tammy : Edouard, tu ___ de ketchup, si tu étais resté en France. (ne pas servir — cond. passé)',
            promptZh: 'Tex 原题 #10：Tammy：Edouard，如果你当时留在法国，就不会给客人端番茄酱了（否定，ne... pas 夹助动词）：',
            answers: ["n'aurais pas servi", 'n’aurais pas servi'],
            hint: 'n’ + aurais + pas + servi.',
            audio: 'Edouard, tu n’aurais pas servi de ketchup, si tu étais resté en France.',
            explain: 'n’aurais pas servi (negation wraps around auxiliary aurais!).',
            explainZh: '否定句 ne... pas 包夹助动词 aurais → n’aurais pas servi。'
          },
          {
            id: 'dt10d2_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Corey ___ sans insecticide. Il adore l’insecticide. (mourir — cond. passé, masc.)',
            promptZh: 'Tex 原题 #11：要是没有杀虫剂 Corey 早就活不下去了，他可太爱喝杀虫剂了（mourir 用 être，过去分词 mort）：',
            answers: ['serait mort'],
            hint: 'mourir takes être; PP = mort → serait mort.',
            audio: 'Corey serait mort sans insecticide.',
            explain: 'Corey (masc.) + mourir (être, PP = mort) → serait mort.',
            explainZh: 'mourir 用 être，过去分词 mort → serait mort。'
          },
          {
            id: 'dt10d2_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12 (Pronominal Feminine Plural!): Tammy et Bette ___ toute la soirée, si Bette avait été là. (se disputer — cond. passé)',
            promptZh: 'Tex 原题 #12：要是 Bette 当时在场，Tammy 和 Bette 整晚都会吵个不停（se disputer，阴性复数配合！）：',
            answers: ['se seraient disputées'],
            hint: 'Pronominal plural fem.: se + seraient + disputées (+es)!',
            audio: 'Tammy et Bette se seraient disputées toute la soirée, si Bette avait été là.',
            explain: 'se seraient disputées (agrees with fem. pl. Tammy et Bette!).',
            explainZh: '代动词用 être，且主语为两位女性，过去分词加 -es → se seraient disputées！'
          }
        ],
        related: [
          { chapterId: 'ch10d_cond_disc_pass', pageId: 't10d_1', label: 'Back to 10D.1 Present Conditional' },
          { chapterId: 'ch10d_cond_disc_pass', pageId: 't10d_3', label: '10D.3 Three Si-Clause Sequences' }
        ]
      },

      /* =========================================================
         PAGE 10D.3: SI-CLAUSES (tac3) - 2 SECTIONS FOR 2 CARTOONS!
      ========================================================= */
      {
        id: 't10d_3',
        code: '10D.3',
        group: 'Conditional & Hypothesis',
        shortTitle: 'Si-Clauses (The 3 Sequences)',
        title: 'Les Phrases avec Si: 3 Golden Tense Sequences (+ "If" vs. "Whether")',
        titleZh: 'Si 条件句全解：三大黄金时态配对律与“si 绝不接条件式/将来时”铁律',
        estMin: 5,
        summary: 'French Si-clauses ("If... then...") follow THREE rigid tense sequences — and reversing them is one of the easiest mistakes to eliminate for B2! (1) TYPE 1 — Real / Possible Future: "Si + PRÉSENT → PRÉSENT / FUTUR SIMPLE / IMPÉRATIF" ("Si je trouve l’amour, je l’épouserai"). Notice clause order can flip without changing tenses ("Elle l’épousera s’il l’invite"). (2) TYPE 2 — Hypothetical / Contrary to Present Fact: "Si + IMPARFAIT → CONDITIONNEL PRÉSENT" ("Si j’étais une voiture, je serais une 2CV"). (3) TYPE 3 — Unreal / Contrary to Past Fact: "Si + PLUS-QUE-PARFAIT → CONDITIONNEL PASSÉ" ("Si j’étais né à College Station, j’aurais préféré A&M"). GOLDEN TCF IRON LAW: NEVER put Futur Simple or Conditionnel directly after "si" when "si" means IF! (Only indirect questions meaning WHETHER — "Il demande si tu viendras" — can take future/conditional after "si"!).',
        summaryZh: '掌握法语 `Si` 条件从句（如果……就……），只需死锁**三大固定黄金配对**，无论主从句谁放前面都不变：① **第一类（现实/将来极可能发生）**：`Si + 现在时` → `现在时 / 简单将来时 / 命令式`（*Si je rencontre l’amour, je l’épouserai*）；② **第二类（与现在事实相反/纯属假想）**：`Si + 未完成过去时` → `现在条件式`（*Si j’étais une voiture, je serais la 2CV*）；③ **第三类（与过去事实相反/事后懊悔）**：`Si + 愈过去时` → `过去条件式`（*Si j’étais né là-bas, j’aurais préféré…*）。🚨 **TCF 全考场第一大红线**：表示**“如果”的 `si` 后面永远绝对不能出现简单将来时或条件式**！只有当 `si` 在间接疑问句里表示**“是否”**（如 *Tex demande si Tammy viendra demain*）时，后面才能接将来时或条件式！',
        cheatSummary: [
          { label: 'The 3 Si-Clause Pairs (Clause Order Can Flip!)', rule: '(1) Si + Présent → Présent / Futur / Impératif. (2) Si + Imparfait → Conditionnel Présent. (3) Si + Plus-que-parfait → Conditionnel Passé.', ruleZh: '三大黄金公式：① Si+现→现/将/命；② Si+未完成→现条；③ Si+愈过→过条（前后半句顺序可调换，各自时态锁死不动！）。' },
          { label: 'The #1 Trap: "Si" (If) NEVER Takes -r- Future/Cond.!', rule: 'WRONG: "Si tu viendras / Si j’aurais su." RIGHT: "Si tu viens / Si j’avais su." EXCEPTION: "si" = WHETHER in indirect speech ("Il demande si tu viendras") IS OK!', ruleZh: '如果（if）后面永远绝不接将来或条件式（千万别说 *si j’aurais su*，要说 *si j’avais su*）！唯有间接问句表“是否”（whether）后面才允许将来/条件式！' }
        ],
        sections: [
          {
            id: 't10d3_types12',
            heading: '1. Types 1 & 2: Likely Present/Future vs. Imparfait Hypothesis (2CV)',
            headingZh: '一、第一、二类 Si 条件句与“假如我是老爷车 2CV”问卷',
            lead: 'Read Tammy’s magazine personality quiz — spot Type 1 ("Si tu veux, tu peux... Si je rencontre, j’épouserai") and Type 2 ("Si j’étais une voiture, je serais la légendaire 2CV"):',
            leadZh: '看表里的三段黄金配对，再读 Tammy 给 Tex 做的杂志趣味测试前半段：',
            cartoon: {
              src: './assets/tex_cartoons/tac3_2cv.gif',
              alt: 'Si Tex était une voiture, il serait une légendaire 2CV',
              caption: 'Tammy : Si vous étiez une voiture, que seriez-vous ? — Tex : Si j’étais une voiture, je serais la légendaire 2CV !',
              captionZh: 'Tammy：如果你是一辆车，你会是什么车？— Tex：如果我是车，我一定是传奇的雪铁龙 2CV！（Si + Imparfait → Conditionnel Présent）'
            },
            table: {
              headers: ['Type & Reality', 'Si-Clause Tense', 'Result Clause Tense', 'Authentic Example'],
              rows: [
                { cols: ['Type 1 (Possible)', 'Si + Présent', 'Présent / Futur / Impératif', 'Si tu peux, choisis ! / Si je la rencontre, je l’épouserai.'], audio: 'Si je rencontre l’amour de ma vie, je l’épouserai.' },
                { cols: ['Type 2 (Present Fantasy)', 'Si + Imparfait', 'Conditionnel Présent', 'Si j’étais un fruit, je choisirais le raisin.'], audio: 'Si j’étais une voiture, je serais la légendaire Deux Chevaux.' },
                { cols: ['Type 3 (Unreal Past)', 'Si + Plus-que-parfait', 'Conditionnel Passé', 'Si je n’avais pas connu Tammy, je n’aurais jamais répondu !'], audio: 'Je n’aurais jamais répondu si je n’avais pas connu Tammy.' },
                { cols: ['"Si" = Whether (Indirect Q)', 'Reported verb + si', 'Any natural tense (incl. Future!)', 'Tex demande si Tammy est prête / viendra demain.'], audio: 'Tex demande si Tammy est prête.' }
              ]
            },
            examples: [
              { fr: 'Si vous étiez une femme, que feriez-vous ? — Si j’étais une femme, je ne lirais pas les quiz dans les magazines !', en: 'Clause flip stays identical: "Que feriez-vous si vous étiez...?"', zh: 'Type 2 假设：就算把结果句放前面问（Que feriez-vous si...），si 从句依然锁死用 Imparfait！', tag: 'Type 2 Hypothesis' }
            ]
          },
          {
            id: 't10d3_type3',
            heading: '2. Type 3: Unreal Past (Si + Plus-que-parfait → Conditionnel Passé)',
            headingZh: '二、第三类 Si 条件句（与过去事实相反）与“Aggie”噩梦',
            lead: 'Contrast Type 3 unreal past ("Si j’étais né à College Station, j’aurais préféré Texas A&M!") with indirect-question "si" ("Tex demande si Tammy est prête"):',
            leadZh: '看 Tex 对自己当年幸好没出生在死对头城市（A&M 校区）的庆幸，掌握第 3 类过去假设句与 `si` 表“是否”的区别：',
            cartoon: {
              src: './assets/tex_cartoons/tac3_aggie.gif',
              alt: 'Si Tex était né à College Station, il aurait préféré Texas A&M',
              caption: 'Si j’étais né à College Station (Plus-que-parfait), j’aurais préféré Texas A&M à UT (Conditionnel Passé) ! Quelle horreur !',
              captionZh: '要是当初我出生在大学城（Si j’étais né，愈过去时），我就得支持德州农工而不是德大奥斯汀了（j’aurais préféré，过去条件式）！太可怕了！'
            },
            examples: [
              { fr: 'Si vous n’aviez pas connu Tammy, qu’est-ce que vous auriez fait ?', en: 'Si + n’aviez pas connu (PQP) → auriez fait (Past Cond.)', zh: '标准 Type 3：从句愈过去时（n’aviez pas connu），主句过去条件式（auriez fait）。', tag: 'Type 3 Unreal Past' },
              { fr: 'Tex demande si Tammy est prête. vs. Tammy, si tu es prête, on peut partir tout de suite !', en: '"si" meaning WHETHER (indirect question) vs. "si" meaning IF (condition)', zh: '区分两个 si：① demande si（问“是否”，可自由搭各种时态）；② si tu es prête（条件“如果”）。', tag: 'If vs. Whether' }
            ],
            quickCheck: {
              prompt: 'Pick the sentence with the ONLY grammatically valid Si-clause sequence:',
              promptZh: '选出 **Si 条件句时态配对完全正确** 的唯一一句：',
              options: [
                'Si nous avions plus de temps, nous visiterions Québec aussi.',
                'Si nous aurions plus de temps, nous visiterions Québec aussi.',
                'Si nous avions eu plus de temps, nous visiterions Québec hier.',
                'Si vous viendrez demain, nous irons au cinéma.'
              ],
              answerIdx: 0,
              explain: 'Type 2 sequence: Si + Imparfait ("avions") → Present Conditional ("visiterions")! Never put Conditionnel ("aurions") or Futur ("viendrez") after "if"!',
              explainZh: '第二类假设：Si + Imparfait（avions）→ Conditionnel Présent（visiterions）！绝对不能在“如果 si”后面写 aurions 或 viendrez！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10d3_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1 (Type 1): Si Tex invite Tammy au restaurant, elle ___. (accepter — futur)',
            promptZh: 'Tex 原题 #1：如果 Tex 请 Tammy 去餐馆吃饭，她就会答应（Type 1，填简单将来时或现在时）：',
            answers: ['acceptera', 'accepte'],
            hint: 'Si + present ("invite") → future "acceptera" (or present "accepte")!',
            audio: 'Si Tex invite Tammy au restaurant, elle acceptera.',
            explain: 'Type 1: Si + present → future ("acceptera").',
            explainZh: 'Type 1：Si + 现在时 → 主句用简单将来时 acceptera（或现在时 accepte）。'
          },
          {
            id: 'dt10d3_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2 (Type 2): Tex ___ avec Bette s’il l’aimait. (se marier)',
            promptZh: 'Tex 原题 #2：如果 Tex 真爱 Bette 的话，他早就会和她结婚了（Si + Imparfait → ？）：',
            answers: ['se marierait'],
            hint: 's’il l’aimait (Imparfait) → Present Conditional "se marierait"!',
            audio: 'Tex se marierait avec Bette s’il l’aimait.',
            explain: 'Type 2: Imparfait ("aimait") → Present Conditional ("se marierait")!',
            explainZh: 'Type 2：从句是 Imparfait（aimait），因此主句用现在条件式 se marierait！'
          },
          {
            id: 'dt10d3_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3 (Type 3): La police ___ Tex, s’il n’avait pas vendu des T-shirts dans le métro. (ne pas arrêter)',
            promptZh: 'Tex 原题 #3：要是 Tex 当初没在地铁卖 T 恤，警察本来不会抓他的（Type 3，否定过去条件式）：',
            answers: ["n'aurait pas arrêté", 'n’aurait pas arrêté'],
            hint: 'Si + plus-que-parfait → Past Conditional: n’aurait pas arrêté!',
            audio: 'La police n’aurait pas arrêté Tex, s’il n’avait pas vendu des t-shirts dans le métro.',
            explain: 'Type 3: s’il n’avait pas vendu (PQP) → n’aurait pas arrêté (Past Cond.)!',
            explainZh: 'Type 3：从句是愈过去时（n’avait pas vendu），主句用过去条件式 → n’aurait pas arrêté！'
          },
          {
            id: 'dt10d3_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4 (Type 1): Edouard à Tex : Appelle-moi si tu ___ prendre un verre ce soir. (vouloir)',
            promptZh: 'Tex 原题 #4：Edouard 对 Tex 说：如果今晚你想去喝一杯就打给我（主句为命令式 → si 从句用？）：',
            answers: ['veux'],
            hint: 'Result = imperative ("Appelle-moi") → Type 1 Si + PRESENT "veux"!',
            audio: 'Appelle-moi si tu veux prendre un verre ce soir.',
            explain: 'Type 1: Si + present ("tu veux") → imperative ("Appelle-moi").',
            explainZh: 'Type 1（结果句为命令式）：si 从句配一般现在时 veux！'
          },
          {
            id: 'dt10d3_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5 (Type 1): Si j’ai le temps, je ___ au frisbee le weekend. (jouer — présent habituel)',
            promptZh: 'Tex 原题 #5：只要我有时间，周末我就去玩飞盘（规律性事实，填现在时或将来时）：',
            answers: ['joue', 'jouerai'],
            hint: 'Si + present ("j’ai") → present "joue" (habit) or future "jouerai"!',
            audio: 'Si j’ai le temps, je joue au frisbee le week-end.',
            explain: 'Type 1 supports present ("je joue") for general habits as well as future ("jouerai").',
            explainZh: 'Type 1：只要条件为一般现在时，结果可用现在时 joue（表达规律）或将来时 jouerai。'
          },
          {
            id: 'dt10d3_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6 (Type 3): Si les nonnes n’avaient pas trouvé Tex à l’aéroport, il ___ clochard. (devenir)',
            promptZh: 'Tex 原题 #6：要是当初修女没在机场捡到 Tex，他本来早就沦为流浪汉了（Type 3 + devenir 用 être）：',
            answers: ['serait devenu'],
            hint: 'Type 3 + devenir (être) → serait devenu!',
            audio: 'Si les nonnes n’avaient pas trouvé Tex à l’aéroport, il serait devenu clochard.',
            explain: 'n’avaient pas trouvé (PQP) → serait devenu (Past Cond. with être!).',
            explainZh: 'Type 3：主句用过去条件式，且 devenir 用 être 助动词 → serait devenu！'
          },
          {
            id: 'dt10d3_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7 (Type 3!): Tex n’aurait pas aimé Tammy si son nez ___ plus petit. (être)',
            promptZh: 'Tex 原题 #7：如果 Tammy 的鼻子当初小一点，Tex 根本不会爱上她（主句已是过去条件式 → si 从句填？）：',
            answers: ['avait été'],
            hint: 'Result = Past Conditional ("n’aurait pas aimé") → Si + PLUS-QUE-PARFAIT "avait été"!',
            audio: 'Tex n’aurait pas aimé Tammy si son nez avait été plus petit.',
            explain: 'Type 3: Si + plus-que-parfait ("avait été") → Past Conditional!',
            explainZh: '倒推检验！结果句已经是 n’aurait pas aimé（过去条件式），因此 si 从句必须配愈过去时 **avait été**！'
          },
          {
            id: 'dt10d3_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8 (Type 1): Trey : Tammy, si tu veux, on ___ aller au cinéma. (pouvoir)',
            promptZh: 'Tex 原题 #8：Trey：Tammy，如果你想的话，我们可以去看电影（Type 1）：',
            answers: ['peut', 'pourra'],
            hint: 'Si + present ("tu veux") → present "peut" (or future "pourra").',
            audio: 'Tammy, si tu veux, on peut aller au cinéma.',
            explain: 'on peut (or on pourra).',
            explainZh: 'Type 1：si tu veux → on peut（现在时表提议）或 on pourra（将来时）。'
          },
          {
            id: 'dt10d3_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9 (Type 1): Si Rita vient chez nous ce week-end, nous ___ certainement au parc. (aller)',
            promptZh: 'Tex 原题 #9：如果 Rita 这周末来我们家，我们肯定会去公园（Type 1，简单将来时）：',
            answers: ['irons'],
            hint: 'Si + present ("vient") → Future "irons"!',
            audio: 'Si Rita vient chez nous ce week-end, nous irons certainement au parc.',
            explain: 'Type 1: Si + present → Futur Simple "nous irons".',
            explainZh: 'Type 1：si 从句是现在时 vient → 主句用简单将来时 irons！'
          },
          {
            id: 'dt10d3_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10 (Type 2!): Si Edouard ___ plus rapide, il gagnerait plus de pourboires. (être)',
            promptZh: 'Tex 原题 #10：如果 Edouard 动作快一点的话，他就能挣更多小费了（主句为现在条件式 → si 从句填？）：',
            answers: ['était'],
            hint: 'Result = Present Conditional ("gagnerait") → Si + IMPARFAIT "était"!',
            audio: 'Si Edouard était plus rapide, il gagnerait plus de pourboires.',
            explain: 'Type 2: Si + imparfait ("était") → Cond. présent ("gagnerait").',
            explainZh: 'Type 2：主句出现 gagnerait，反推 si 从句填未完成过去时 était！'
          },
          {
            id: 'dt10d3_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11 (Type 2): Trey ___ très heureux s’il avait une petite amie. (être)',
            promptZh: 'Tex 原题 #11：如果 Trey 有个女朋友的话，他会很开心的（Type 2）：',
            answers: ['serait'],
            hint: 's’il avait (Imparfait) → Present Conditional "serait"!',
            audio: 'Trey serait très heureux s’il avait une petite amie.',
            explain: 'Type 2: s’il avait → il serait.',
            explainZh: 'Type 2：从句是 avait（未完成过去时）→ 主句用现在条件式 serait。'
          },
          {
            id: 'dt10d3_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12 (Type 2): Si nous ___ en France, nous irions à Lyon. (être)',
            promptZh: 'Tex 原题 #12：如果我们在法国的话，我们就去里昂玩了（主句是 nous irions → si 从句填？）：',
            answers: ['étions'],
            hint: 'nous irions (Present Conditional) → Si + Imparfait "étions"!',
            audio: 'Si nous étions en France, nous irions à Lyon.',
            explain: 'Type 2: Si nous étions (Imparfait) → nous irions.',
            explainZh: 'Type 2：主句出现条件式 irions，因此 si 从句填未完成过去时 étions！'
          }
        ],
        related: [
          { chapterId: 'ch10d_cond_disc_pass', pageId: 't10d_2', label: 'Back to 10D.2 Past Conditional' },
          { chapterId: 'ch10d_cond_disc_pass', pageId: 't10d_4', label: '10D.4 Reported Speech (Present)' }
        ]
      },

      /* =========================================================
         PAGE 10D.4: REPORTED SPEECH IN PRESENT (tad1)
      ========================================================= */
      {
        id: 't10d_4',
        code: '10D.4',
        group: 'Indirect Discourse',
        shortTitle: 'Reported Speech (Present)',
        title: 'Discours Indirect au Présent: Statements, Si, Ce Qui / Ce Que & De + Infinitive',
        titleZh: '现在时态下的间接引语（Discours indirect au présent）：陈述、疑问与命令式改写',
        estMin: 4,
        summary: 'When reporting what someone says or asks using a PRESENT reporting verb ("il dit, elle demande, il veut savoir"), the subordinate verb keeps its ORIGINAL tense, while pronouns ("je → il", "tu → vous") and sentence links transform according to 4 crystal-clear rules: (1) STATEMENTS → connect with "que / qu’" ("Elle dit que tu ne l’écoutes jamais"); (2) YES/NO QUESTIONS ("Est-ce que...?" / inversion) → connect with "si" (elides ONLY before "i": "s’il / s’ils", NEVER "si elle → s’elle"!) — NEVER say "que si" for yes/no! (3) QUESTION WORDS: "où / quand / comment / pourquoi / qui" stay the same, with normal subject-verb order ("où tu étais", no inversion!), whereas "que / qu’est-ce que" → "ce que" and "qu’est-ce qui" → "ce qui" ("ce que tu veux dire", "ce qui se passe")! (4) ORDERS / IMPERATIVES → replace the command with "de / d’ + infinitive" ("Tammy t’ordonne d’éteindre la télé / de ne pas faire l’idiot"). Also report standalone "oui / non" with "que oui / que non"!',
        summaryZh: '当转述引导词本身是**现在时**（如 *Il dit… / Elle te demande… / Il veut savoir…*）时，被转述句子的**动词时态不用后退**，只需精准完成**人称代词切换**和**四大引导词转换**即可：① **陈述句** → 用 **`que`** 连接；② **一般疑问句（Est-ce que / 是不是）** → 用 **`si`** 连接（注意 `si` 只在 `il / ils` 前省音成 **`s’il / s’ils`**，在 `elle / on / un` 前绝不省音！且绝不写 `que si`）；③ **特殊疑问句**：`où / quand / comment / pourquoi / qui` 原封不动保留（但后面的语序必须**恢复正常主谓语序**，取消倒装！），而问“什么”的 **`qu’est-ce qui`** 变 **`ce qui`**、**`que / qu’est-ce que`** 变 **`ce que`**；④ **命令祈使句** → 一律改用 **`de + 动词不定式`**（否定命令变 **`de ne pas + 不定式`**）！简短回答“是 / 不是”用 `il répond que oui / que non`！',
        cheatSummary: [
          { label: 'The 4 Connectors of Indirect Speech', rule: 'Statement → que. Yes/No Q → si (s’il, si elle!). Info Q (où/quand/comment/qui) → keep word + normal order! "What?" → ce qui (subj.) / ce que (obj.). Imperative → de (ne pas) + inf.!', ruleZh: '四大连词总口诀：陈述加 que；是否变 si；疑问词保留恢复正语序；qu’est-ce qui/que 变 ce qui / ce que；命令改 de (ne pas) + 不定式！' },
          { label: 'Two Classic Errors to Avoid', rule: '(1) NEVER "s’elle" — "si" ONLY elides before "i-" (s’il, si elle). (2) NEVER "qu’est-ce que" inside indirect speech — must switch to "ce que / ce qui" ("Je ne sais pas ce qu’il fait", NOT "qu’est-ce qu’il fait")!', ruleZh: '两大必避错：① si 只能跟 il 缩写成 s’il，不能写成 s’elle；② 间接宾语从句里绝不能保留 qu’est-ce que，必须换成 ce que（我不知道他在干嘛＝Je ne sais pas ce qu’il fait）！' }
        ],
        sections: [
          {
            id: 't10d4_ind_pres',
            heading: '1. Direct → Indirect Conversions & Fiona’s Mediation Dialogue',
            headingZh: '一、直接引语 vs 间接引语转换全表与劝架小对话',
            lead: 'Watch Fiona translate Tammy and Tex’s argument in real time — shifting every pronoun ("moi → elle"), removing inversion ("où étais-tu → où tu étais"), and turning imperatives into "de + infinitive":',
            leadZh: '看下表四格全转换，然后精读 Fiona 充当传话筒化解 Tex 和 Tammy 小吵架的原声对话：',
            cartoon: {
              src: './assets/tex_cartoons/tad1_ecoutes.gif',
              alt: 'Tammy reproche à Tex : Tu ne m’écoutes jamais ! Fiona traduit',
              caption: 'Tammy : Tu ne m’écoutes jamais ! Éteins cette télé ! — Fiona : Elle dit que tu ne l’écoutes jamais et elle t’ordonne d’éteindre la télé !',
              captionZh: 'Tammy：你从来不听我说话！快关电视！— Fiona 传话：她说你从来不听她说话（que tu ne l’écoutes jamais），还命令你关掉电视（d’éteindre）！'
            },
            table: {
              headers: ['Type', 'Direct Quote', 'Indirect Speech (Present Main Verb)'],
              rows: [
                { cols: ['Statement', 'Tammy : Tu ne m’écoutes jamais !', 'Fiona : Elle dit que tu ne l’écoutes jamais.'], audio: 'Elle dit que tu ne l’écoutes jamais.' },
                { cols: ['Yes / No Question', 'Est-ce que tu vas faire un effort ?', 'Elle te demande si tu vas faire un effort. (if = si / s’il)'], audio: 'Elle te demande si tu vas faire un effort.' },
                { cols: ['Wh- Question (Order Reset!)', 'Où étais-tu ? Comment l’as-tu rencontrée ?', 'Elle te demande où tu étais et comment tu l’as rencontrée.'], audio: 'Elle te demande où tu étais hier soir et quand ce match finit.' },
                { cols: ['"What?" (qui / que)', 'Qu’est-ce qui se passe ? Qu’est-ce qu’elle veut ?', 'Il ne comprend pas ce qui se passe ni ce qu’elle veut dire.'], audio: 'Tex ne comprend pas ce qui se passe ni ce que tu veux dire.' },
                { cols: ['Imperative Command', 'Éteins la télé ! Ne fais pas l’idiot !', 'Elle t’ordonne d’éteindre la télé et te dit de ne pas faire l’idiot.'], audio: 'Tammy t’ordonne d’éteindre tout de suite cette télévision.' },
                { cols: ['Oui / Non Reply', 'Tex : Non !', 'Il lui répond que non.'], audio: 'Il lui répond que non.' }
              ]
            },
            dialogue: {
              title: 'Fiona Playing Peacemaker Between Tex & Tammy',
              titleZh: '小对话：传话筒 Fiona 现场同步转述',
              lines: [
                { speaker: 'Tex', fr: 'Je ne comprends pas ! Qu’est-ce qu’elle veut dire ? Qu’est-ce qui se passe ?', en: 'I don’t understand! What does she mean? What’s going on?', zh: '直接引语用疑问词 qu’est-ce que / qu’est-ce qui。' },
                { speaker: 'Fiona', fr: 'Tammy, Tex ne comprend pas ce que tu veux dire. Il ne comprend pas ce qui se passe.', en: 'Tammy, Tex doesn’t understand what you mean. He doesn’t understand what’s going on.', zh: '进入间接引语，立刻转化为 **ce que**（作宾语）与 **ce qui**（作主语）！' },
                { speaker: 'Fiona', fr: 'Et soudain, Tammy demande à Tex s’il peut éteindre la télé et il lui répond que non !', en: 'And suddenly, Tammy asks Tex if he can turn off the TV and he answers no!', zh: 'si + il 缩写为 **s’il**；回答“不”加一个 **que** → il lui répond que non。' }
              ]
            },
            quickCheck: {
              prompt: 'Convert accurately to indirect speech: Tammy asks: "Qu’est-ce que vous avez fait ?" → Tammy demande...',
              promptZh: '将直接问句 `Tammy demande : « Qu’est-ce que vous avez fait ? »` 正确转为间接引语：',
              options: [
                'Tammy demande ce que vous avez fait.',
                'Tammy demande qu’est-ce que vous avez fait.',
                'Tammy demande ce qui vous avez fait.',
                'Tammy demande si vous avez fait quoi.'
              ],
              answerIdx: 0,
              explain: 'In indirect questions, "qu’est-ce que" (direct object "what") MUST become "ce que" ("Tammy demande ce que vous avez fait")!',
              explainZh: 'qu’est-ce que（作宾语的“什么”）在间接引语中必须变成 **ce que** → Tammy demande ce que vous avez fait！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10d4_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex : Que veut Bette ? => Tex demande ___ Bette veut.',
            promptZh: 'Tex 原题 #1：Tex：“Bette 想要什么？” => 转为间接引语：',
            answers: ['ce que'],
            hint: '"Que" (object "what") → ce que.',
            audio: 'Tex demande ce que Bette veut.',
            explain: 'que / qu’est-ce que → ce que.',
            explainZh: '作宾语的疑问词 que 在间接引语中转为 ce que。'
          },
          {
            id: 'dt10d4_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tammy : Regarde-moi Tex ! => Tammy dit à Tex ___.',
            promptZh: 'Tex 原题 #2：Tammy：“Tex，看着我！” => 转为间接命令（用代词 la 指代 Tammy）：',
            answers: ['de la regarder'],
            hint: 'Imperative + "moi" (= Tammy = la) → de la regarder!',
            audio: 'Tammy dit à Tex de la regarder.',
            explain: 'de + COD pronoun la + regarder → de la regarder.',
            explainZh: '命令句改 de + 不定式，原来的 moi（指代 Tammy）变为前置直宾代词 **la** → de la regarder！'
          },
          {
            id: 'dt10d4_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tex : Je suis fatigué. => Tex dit ___ fatigué.',
            promptZh: 'Tex 原题 #3：Tex：“我累了。” => 转述：Tex 说他累了（填连词 + 主语 + 动词）：',
            answers: ["qu'il est", 'qu’il est'],
            hint: 'que + il + est → qu’il est.',
            audio: 'Tex dit qu’il est fatigué.',
            explain: 'qu’il est.',
            explainZh: '人称由 je 转为 il，用 qu’ 连接 → qu’il est。'
          },
          {
            id: 'dt10d4_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Tex : Où vit Bette ? => Tex demande ___ Bette vit.',
            promptZh: 'Tex 原题 #4：Tex：“Bette 住在哪里？” => 转述疑问词：',
            answers: ['où'],
            hint: 'Keep question word "où" (normal order follows)!',
            audio: 'Tex demande où Bette vit.',
            explain: 'où.',
            explainZh: '带疑问词 où 直接保留即可，后面已恢复正常主谓语序 Bette vit。'
          },
          {
            id: 'dt10d4_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tammy : Est-ce que tu vas au cinéma ? => Tammy demande ___ tu vas au cinéma.',
            promptZh: 'Tex 原题 #5：Tammy：“你去电影院吗？” => 转为间接一般疑问：',
            answers: ['si'],
            hint: 'Est-ce que (yes/no question) → si!',
            audio: 'Tammy demande si tu vas au cinéma.',
            explain: 'si (never "que si"!).',
            explainZh: '一般疑问句转述只用 si。'
          },
          {
            id: 'dt10d4_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Tammy : Quand est-ce que Tex rentre ? => Tammy veut savoir ___ Tex rentre.',
            promptZh: 'Tex 原题 #6：Tammy：“Tex 什么时候回来？” => 转述疑问词：',
            answers: ['quand'],
            hint: 'Keep "quand" (drop est-ce que)!',
            audio: 'Tammy veut savoir quand Tex rentre.',
            explain: 'quand.',
            explainZh: '保留疑问词 quand，删去多余的 est-ce que。'
          },
          {
            id: 'dt10d4_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tex : Qu’est-ce qui se passe ? => Tex demande ___ se passe.',
            promptZh: 'Tex 原题 #7：Tex：“发生什么事了？” => 转为间接引语：',
            answers: ['ce qui'],
            hint: 'qu’est-ce qui (subject "what") → ce qui!',
            audio: 'Tex demande ce qui se passe.',
            explain: 'ce qui.',
            explainZh: '作主语的 qu’est-ce qui 变成 **ce qui**！'
          },
          {
            id: 'dt10d4_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tammy : Qu’est-ce que tu fais ce week-end ? => Tammy demande ___ tu fais ce week-end.',
            promptZh: 'Tex 原题 #8：Tammy：“你这周末干嘛？” => 转为间接引语：',
            answers: ['ce que'],
            hint: 'qu’est-ce que → ce que.',
            audio: 'Tammy demande ce que tu fais ce week-end.',
            explain: 'ce que.',
            explainZh: '作宾语的 qu’est-ce que 变成 **ce que**。'
          },
          {
            id: 'dt10d4_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tammy : Tex, arrête de faire l’idiot ! => Tammy dit à Tex ___ de faire l’idiot.',
            promptZh: 'Tex 原题 #9：Tammy：“Tex，别犯傻了！” => 命令改间接引语：',
            answers: ["d'arrêter", 'd’arrêter'],
            hint: 'de + arrêter → d’arrêter!',
            audio: 'Tammy dit à Tex d’arrêter de faire l’idiot.',
            explain: 'd’arrêter.',
            explainZh: '命令式转为 de + 原形（元音省音）→ d’arrêter。'
          },
          {
            id: 'dt10d4_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tex : J’adore fumer ! => Tex déclare ___ adore fumer.',
            promptZh: 'Tex 原题 #10：Tex：“我超爱抽烟！” => 转述：Tex 宣称他超爱抽烟（空后已有 adore）：',
            answers: ["qu'il", 'qu’il'],
            hint: 'que + il → qu’il (before adore).',
            audio: 'Tex déclare qu’il adore fumer.',
            explain: 'qu’il.',
            explainZh: '填 qu’il（连后文 adore fumer）。'
          },
          {
            id: 'dt10d4_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Tex : Qui vient dîner ce soir ? => Tex veut savoir ___ vient dîner ce soir.',
            promptZh: 'Tex 原题 #11：Tex：“今晚谁来吃晚饭？” => 转述疑问代词（指人！）：',
            answers: ['qui'],
            hint: 'Question word for WHO ("qui") stays "qui"!',
            audio: 'Tex veut savoir qui vient dîner ce soir.',
            explain: 'qui stays qui (unlike qu’est-ce qui → ce qui)!',
            explainZh: '指人的疑问代词 **qui**（谁）在间接引语中保持不变（只有指物的 qu’est-ce qui 才变 ce qui）！'
          },
          {
            id: 'dt10d4_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tammy : Chante la Marseillaise Tex ! => Tammy demande à Tex ___ la Marseillaise.',
            promptZh: 'Tex 原题 #12：Tammy：“Tex，唱《马赛曲》！” => 命令改间接引语：',
            answers: ['de chanter'],
            hint: 'Imperative → de + infinitive = de chanter.',
            audio: 'Tammy demande à Tex de chanter la Marseillaise.',
            explain: 'de chanter.',
            explainZh: '命令句转述为 de + 动词原形 → de chanter。'
          }
        ],
        related: [
          { chapterId: 'ch10d_cond_disc_pass', pageId: 't10d_3', label: 'Back to 10D.3 Si-Clauses' },
          { chapterId: 'ch10d_cond_disc_pass', pageId: 't10d_5', label: '10D.5 Reported Speech (Past Backshifting)' }
        ]
      },

      /* =========================================================
         PAGE 10D.5: REPORTED SPEECH IN PAST (tad2)
      ========================================================= */
      {
        id: 't10d_5',
        code: '10D.5',
        group: 'Indirect Discourse',
        shortTitle: 'Reported Speech (Past Backshift)',
        title: 'Discours Indirect au Passé: Tense Backshifting (Concordance des Temps) & Time Shifts',
        titleZh: '过去时态下的间接引语（Concordance des temps）：时态后退一步律与时间标志转换',
        estMin: 5,
        summary: 'When the reporting verb is in ANY PAST TENSE ("il a dit, il demandait, j’ai raconté, je voulais savoir"), French requires CONCORDANCE DES TEMPS — shifting the subordinate verb back into the past frame! Master the 4 shifts: (1) PRÉSENT → IMPARFAIT ("j’aime → qu’elle aimait", "qu’est-ce que tu veux → ce qu’il voulait", "je viens de → qu’il venait de", "tu vas aller → il allait aller"); (2) PASSÉ COMPOSÉ → PLUS-QUE-PARFAIT ("est devenu → était devenu", "a déménagé → avait déménagé"); (3) FUTUR SIMPLE → CONDITIONNEL PRÉSENT ("nous louerons → qu’ils loueraient"); (4) FUTUR ANTÉRIEUR → CONDITIONNEL PASSÉ ("il sera rentré → qu’il serait rentré"). Note: Imparfait, Plus-que-parfait & Conditionnel stay unchanged, and imperatives STILL just become "de / d’ + infinitive" ("Sois poli → lui a dit d’être poli")! Also watch B2 time/place shifts: aujourd’hui → ce jour-là, hier → la veille, demain → le lendemain, ici → là!',
        summaryZh: '当主句转述动词变成**任何过去时**（*il a dit que / il demandait si / elle a annoncé que*）时，从句就必须同步遵守**法语时态配合（Concordance des temps）——“时态全部向后退一格”**：① **现在时 → 未完成过去时**（含近将来 *vas faire → allais faire*、近过去 *viens de → venait de*）；② **复合过去时 → 愈过去时**（*a déménagé → avait déménagé*）；③ **简单将来时 → 现在条件式**（*louerons → loueraient*）；④ **先将来时 → 过去条件式**（*sera rentré → serait rentré*）！不变项：`Imparfait / Plus-que-parfait / Conditionnel` 本身保持不动，而**命令祈使句不管主句现在还是过去，永远照样用 `de + 不定式`**（*Sois poli → a dit d’être poli*）！TCF 阅读与写作还要顺手切换时间坐标：`aujourd’hui → ce jour-là`（那天），`hier → la veille`（前一天），`demain → le lendemain`（第二天），`ici → là`！',
        cheatSummary: [
          { label: 'The 4 Mandatory Past Backshifts', rule: 'Présent → Imparfait · Passé Composé → Plus-que-parfait · Futur Simple → Conditionnel Présent · Futur Antérieur → Conditionnel Passé! (Imperatives still = de + inf.!)', ruleZh: '过去转述四级后退：现在→未完成；复过→愈过；简将→现条；先将→过条！（命令式永远保持 de + 不定式，不受时态后退影响！）' },
          { label: 'B2 Time & Adverb Shifts in Narrative', rule: 'aujourd’hui → ce jour-là · hier → la veille · demain → le lendemain · cette semaine → cette semaine-là · ici → là.', ruleZh: '写作/阅读加分时间词转换：aujourd’hui → ce jour-là；hier → la veille（前一天）；demain → le lendemain（第二天）。' }
        ],
        sections: [
          {
            id: 't10d5_backshift',
            heading: '1. Complete Concordance Table, Time Shifts & Love-Triangle Gossip',
            headingZh: '一、时态后退全景矩阵与兄弟情敌八卦对话',
            lead: 'Follow Tammy, Trey, Fiona, and Bette gossiping about Trey’s proposal — trace every backshifted verb ("avait acheté", "était amoureux", "avait raconté"):',
            leadZh: '背熟下面六行“直陈→过去转述”对照表，再读 Fiona 与 Bette 讲八卦的精彩对话：',
            cartoon: {
              src: './assets/tex_cartoons/tad2_frere.gif',
              alt: 'Tammy à Trey : Tex m’a dit que tu avais une petite amie !',
              caption: 'Trey : Je suis amoureux de toi (Présent) ! — Tammy : Tex m’a dit que tu avais une petite amie (Imparfait) !',
              captionZh: 'Trey：我爱上你了！（现在时）— Tammy：Tex 早就告诉我你当时有女朋友了（Tex m’a dit que + Imparfait: avais）！'
            },
            table: {
              headers: ['Direct Tense', 'Backshifted Tense (Past Main)', 'Authentic Example'],
              rows: [
                { cols: ['Présent (incl. aller / venir de)', 'Imparfait (allais / venais de)', 'J’aime Trey → Elle a dit qu’elle aimait Trey. / Vas-tu quitter → Il demandait quand tu allais quitter.'], audio: 'Elle a dit qu’elle aimait beaucoup Trey.' },
                { cols: ['Passé Composé', 'Plus-que-parfait', 'Trey est devenu sexy → Elle a dit que Trey était devenu sexy.'], audio: 'Elle a dit que Trey était devenu sexy.' },
                { cols: ['Futur Simple', 'Conditionnel Présent', 'Nous louerons le film → Elle a dit qu’ils loueraient le film.'], audio: 'Elle a dit qu’ils loueraient la vidéo.' },
                { cols: ['Futur Antérieur', 'Conditionnel Passé', 'Je serai rentré → Il a dit qu’il serait rentré plus tôt.'], audio: 'Il a dit qu’il serait rentré plus tôt.' },
                { cols: ['Impératif (Unchanged!)', 'de / d’ + infinitif', 'Sois poli ! Ne flirte pas ! → Tex t’a dit d’être poli et de ne pas flirter.'], audio: 'Tex t’a dit d’être poli avec Tammy et de ne pas flirter avec elle.' },
                { cols: ['Time Markers (B2)', 'ce jour-là · la veille · le lendemain', '« Je pars demain » → Il a annoncé qu’il partirait le lendemain.'], audio: 'Il a annoncé qu’il partirait le lendemain.' }
              ]
            },
            dialogue: {
              title: 'Fiona & Bette: Gossip About Trey’s Proposal',
              titleZh: '小对话：传得沸沸扬扬的求婚八卦',
              lines: [
                { speaker: 'Fiona', fr: 'Je t’assure Bette, Trey m’a raconté qu’il avait acheté une grosse bague en diamants pour Tammy.', en: 'I assure you Bette, Trey told me he had bought a big diamond ring for Tammy.', zh: 'm’a raconté que + 愈过去时（avait acheté，原话是 J’ai acheté）。' },
                { speaker: 'Bette', fr: 'Et moi qui croyais que Trey était amoureux de moi ! Quelle déception !', en: 'And I who thought Trey was in love with me! What a disappointment!', zh: 'croyais que + 未完成过去时（était amoureux，原话是 Trey est amoureux）。' },
                { speaker: 'Fiona', fr: 'Mais je n’ai pas su si Tammy avait raconté l’histoire à Tex ou si elle avait gardé le secret !', en: 'But I didn’t find out whether Tammy had told Tex the story or had kept it secret!', zh: '两个并列间接疑问均用 si 引导 + 愈过去时（avait raconté / avait gardé）。' }
              ]
            },
            quickCheck: {
              prompt: 'Report in the past: Yesterday, Tex promised: "Je finirai ce poème demain !" → Hier, Tex a promis...',
              promptZh: '将原话 `Tex : « Je finirai ce poème demain ! »` 完整转述到昨天视角（`Hier, Tex a promis…`）：',
              options: [
                'Hier, Tex a promis qu’il finirait ce poème le lendemain.',
                'Hier, Tex a promis qu’il finira ce poème demain.',
                'Hier, Tex a promis qu’il finissait ce poème la veille.',
                'Hier, Tex a promis qu’il aurait fini ce poème aujourd’hui.'
              ],
              answerIdx: 0,
              explain: 'Futur Simple ("finirai") shifts back to Conditionnel Présent ("finirait"), and "demain" shifts to "le lendemain"!',
              explainZh: '两步同步转换：简单将来时 finirai 后退为现在条件式 finirait；时间词 demain 转换为 le lendemain（第二天）！'
            }
          }
        ],
        drills: [
          {
            id: 'dt10d5_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1 (Near Future Backshift!): Tammy : Quand est-ce que tu vas aller chez Paw-Paw ? => Hier, Tammy a demandé à Tex ___ aller chez Paw-Paw.',
            promptZh: 'Tex 原题 #1：Tammy：“你什么时候打算去 Paw-Paw 家？” => 昨天转述（quand + 人称 + allait）：',
            answers: ['quand il allait'],
            hint: 'quand + tu vas → quand il allait (present → imparfait)!',
            audio: 'Hier, Tammy a demandé à Tex quand il allait aller chez Paw-Paw.',
            explain: 'vas aller (present) shifts back to allait aller (imparfait)!',
            explainZh: '原句里的近将来时 vas aller 在过去转述中退回未完成过去时 → quand il allait。'
          },
          {
            id: 'dt10d5_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2 (PC → Plus-que-parfait!): Tex : Tammy, Bette a téléphoné. => Hier, Tex a dit à Tammy ___.',
            promptZh: 'Tex 原题 #2：Tex：“Bette 打过电话来了。” => 昨天转述（que + Bette + 愈过去时）：',
            answers: ['que Bette avait téléphoné'],
            hint: 'a téléphoné (PC) → que Bette avait téléphoné (PQP)!',
            audio: 'Hier, Tex a dit à Tammy que Bette avait téléphoné.',
            explain: 'Passé composé ("a téléphoné") shifts back to plus-que-parfait ("avait téléphoné")!',
            explainZh: '原句是复合过去时（a téléphoné），后退为愈过去时 → que Bette avait téléphoné！'
          },
          {
            id: 'dt10d5_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3 (Nous Imperative!): Tex : Allons au Mexique ! => Hier, Tex a proposé à Tammy ___ au Mexique.',
            promptZh: 'Tex 原题 #3：Tex：“我们去墨西哥吧！” => 昨天提议（proposer à qqn + de + 不定式）：',
            answers: ["d'aller", 'd’aller'],
            hint: 'proposer de + aller → d’aller!',
            audio: 'Hier, Tex a proposé à Tammy d’aller au Mexique.',
            explain: 'Commands/suggestions with proposer/dire become de + infinitive ("d’aller")!',
            explainZh: '祈使建议句不论主句是现在还是过去，转述一律变成 **de + 不定式** → d’aller！'
          },
          {
            id: 'dt10d5_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4 (Recent Past Backshift!): Tex : Je viens de finir un roman ! => Hier, Tex a annoncé ___ un roman.',
            promptZh: 'Tex 原题 #4：Tex：“我刚写完一本小说！” => 昨天宣布（que + il + 过去刚……）：',
            answers: ["qu'il venait de finir", 'qu’il venait de finir'],
            hint: 'je viens de finir → qu’il venait de finir!',
            audio: 'Hier, Tex a annoncé qu’il venait de finir un roman.',
            explain: 'present "viens de finir" shifts back to imparfait "venait de finir"!',
            explainZh: '近过去时 viens de 退回未完成过去时 → qu’il venait de finir！'
          },
          {
            id: 'dt10d5_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5 (Future → Cond. Présent!): Tammy : Nous nous marierons en France. => Hier, Tammy a dit qu’___ en France. (use "ils")',
            promptZh: 'Tex 原题 #5：Tammy：“我们将在法国结婚。” => 昨天她说**他们（ils）**将在法国结婚：',
            answers: ['ils se marieraient', 'nous nous marierions'],
            hint: 'Future "nous nous marierons" → Cond. présent "ils se marieraient"!',
            audio: 'Hier, Tammy a dit qu’ils se marieraient en France.',
            explain: 'Futur simple ("marierons") shifts to Conditionnel présent ("ils se marieraient")!',
            explainZh: '简单将来时 marierons 后退为现在条件式，且第三人称代词调整为 ils → ils se marieraient！'
          },
          {
            id: 'dt10d5_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6 (PC → PQP!): Tex : Qu’est-ce qui s’est passé ? => Hier, Tex a demandé ___.',
            promptZh: 'Tex 原题 #6：Tex：“刚才发生什么事了？” => 昨天他问发生了什么（ce qui + 愈过去时）：',
            answers: ["ce qui s'était passé", 'ce qui s’était passé'],
            hint: 'qu’est-ce qui → ce qui; s’est passé (PC) → s’était passé (PQP)!',
            audio: 'Hier, Tex a demandé ce qui s’était passé.',
            explain: 'ce qui s’était passé!',
            explainZh: '两步合一：qu’est-ce qui 变 ce qui，s’est passé 退回愈过去时 s’était passé！'
          },
          {
            id: 'dt10d5_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tammy : Aimes-tu les films d’horreur, Tex ? => Tammy a demandé à Tex ___ les films d’horreur.',
            promptZh: 'Tex 原题 #7：Tammy：“Tex，你喜欢恐怖片吗？” => 转述一般疑问（s’il + Imparfait）：',
            answers: ["s'il aimait", 's’il aimait'],
            hint: 'si + il + aimait → s’il aimait!',
            audio: 'Tammy a demandé à Tex s’il aimait les films d’horreur.',
            explain: 's’il aimait.',
            explainZh: 'si + il 缩写为 s’il，现在时 aimes 退回未完成过去时 aimait → s’il aimait。'
          },
          {
            id: 'dt10d5_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tex : Rita a déménagé. => Hier, Tex a dit que Rita ___.',
            promptZh: 'Tex 原题 #8：Tex：“Rita 搬家了。” => 昨天 Tex 说 Rita 已经搬过家了（愈过去时）：',
            answers: ['avait déménagé'],
            hint: 'a déménagé (PC) → avait déménagé (PQP).',
            audio: 'Hier, Tex a dit que Rita avait déménagé.',
            explain: 'avait déménagé.',
            explainZh: '复合过去时 a déménagé 后退为愈过去时 avait déménagé。'
          },
          {
            id: 'dt10d5_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tammy : Tex, tu as eu tort. => Hier, Tammy a dit à Tex ___ tort.',
            promptZh: 'Tex 原题 #9：Tammy：“Tex，你当时错了。” => 昨天 Tammy 跟 Tex 说他错了（qu’il + 愈过去时）：',
            answers: ["qu'il avait eu", 'qu’il avait eu'],
            hint: 'tu as eu (PC) → qu’il avait eu (PQP)!',
            audio: 'Hier, Tammy a dit à Tex qu’il avait eu tort.',
            explain: 'qu’il avait eu.',
            explainZh: '复合过去时 as eu 后退为愈过去时 → qu’il avait eu。'
          },
          {
            id: 'dt10d5_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Tex : J’adore fumer ! => Hier, Tex a déclaré ___ fumer.',
            promptZh: 'Tex 原题 #10：Tex：“我超爱抽烟！” => 昨天 Tex 宣称他超爱抽烟（qu’il + Imparfait）：',
            answers: ["qu'il adorait", 'qu’il adorait'],
            hint: 'j’adore (present) → qu’il adorait (imparfait).',
            audio: 'Hier, Tex a déclaré qu’il adorait fumer.',
            explain: 'qu’il adorait.',
            explainZh: '现在时 adore 后退为未完成过去时 adorait → qu’il adorait。'
          },
          {
            id: 'dt10d5_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11: Tex : Qui va venir ? => Hier, Tex voulait savoir ___ venir.',
            promptZh: 'Tex 原题 #11：Tex：“谁会来啊？” => 昨天 Tex 想知道谁会来（qui + allait）：',
            answers: ['qui allait'],
            hint: 'qui + va (present) → qui allait (imparfait).',
            audio: 'Hier, Tex voulait savoir qui allait venir.',
            explain: 'qui allait.',
            explainZh: 'qui 保留，近将来 va 后退为 allait → qui allait。'
          },
          {
            id: 'dt10d5_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tammy : Tex, qu’est-ce que tu veux pour ton anniversaire ? => Hier, Tammy a demandé à Tex ___ pour son anniversaire.',
            promptZh: 'Tex 原题 #12：Tammy：“Tex，你生日想要什么呀？” => 昨天转述（ce qu’il + Imparfait）：',
            answers: ["ce qu'il voulait", 'ce qu’il voulait'],
            hint: 'qu’est-ce que → ce que; tu veux → il voulait → ce qu’il voulait!',
            audio: 'Hier, Tammy a demandé à Tex ce qu’il voulait pour son anniversaire.',
            explain: 'ce qu’il voulait.',
            explainZh: 'qu’est-ce que 变 ce que，现在时 veux 退回未完成 voulait → ce qu’il voulait！'
          }
        ],
        related: [
          { chapterId: 'ch10d_cond_disc_pass', pageId: 't10d_4', label: 'Back to 10D.4 Reported Speech (Present)' },
          { chapterId: 'ch10d_cond_disc_pass', pageId: 't10d_6', label: '10D.6 Active vs. Passive Voice' }
        ]
      },

      /* =========================================================
         PAGE 10D.6: ACTIVE VS. PASSIVE VOICE (tav1) - 3 SECTIONS FOR 3 CARTOONS!
      ========================================================= */
      {
        id: 't10d_6',
        code: '10D.6',
        group: 'Voice & Style',
        shortTitle: 'Active vs. Passive Voice',
        title: 'La Voix Passive: Être + Past Participle Agreement (+ On & Pronominal Alternatives)',
        titleZh: '被动语态全解（La voix passive）：être 全时态配合、par vs de 与地道规避写法',
        estMin: 5,
        summary: 'In ACTIVE voice, the subject performs the action ("Tex a écrit ce livre"). In PASSIVE voice, the receiver becomes the subject: formula = CONJUGATED ÊTRE (in ANY tense: est, était, a été, sera, serait, soit) + PAST PARTICIPLE (+ "par" + agent). CRUCIAL AGREEMENT RULE: The passive past participle ALWAYS agrees in gender and number with the SUBJECT ("La loi a été votée", "Les Aggies sont battus"). Remember the "par" vs. "de" split: use "par" for actions ("écrit par Tex"), BUT use "de" with verbs of emotion, state, or description ("aimé de", "connu de", "respecté de", "entouré de")! Finally, remember French uses the passive FAR LESS than English — natives strongly prefer: (1) Active "ON" ("On m’a dit que..." = "I was told"), and (2) Pronominal Passive for general rules/objects ("Le français se parle ici", "Les frites se mangent avec du ketchup")!',
        summaryZh: '当你想把焦点放在“动作的承受者”或未知施动者上时，就用**被动语态（Voix passive）**：核心结构是 **`être`（按需要变成任意时态：`est / a été / était / sera / serait / ait été`）＋ 过去分词**！🚨 **铁律配合**：被动语态中的过去分词**永远必须和被动主语做性数配合**（哪怕在复合过去时 `ont été` 里，`été` 自身永不变，但后面的过去分词必须变！如 *La loi a été votée / Les poèmes ont été censurés*）。引出施动者通常用介词 **`par`**，但表示**情感、认识或陪伴状态**的动词（`aimer, connaître, respecter, accompagner, entourer`）书面语必须改用 **`de`**（*Tammy est aimée de Tex*）。此外，法语日常和写作其实**尽量少用硬邦邦的被动句**，更倾向用两大替代绝招：① 万能主语 **`on` + 主动语态**（“我听说……”不说 *J’ai été dit*，而说 *On m’a dit*）；② **物作主语 + 自反被动**（*Le français se parle en Louisiane* / *Le vin rouge se boit à température ambiante*）！',
        cheatSummary: [
          { label: 'Passive Formula Across ALL Tenses (+ Agreement!)', rule: 'Present: est battu(e)(s) · PC: a été / ont été battu(e)(s) (note: "été" NEVER changes!) · Future: sera battu(e)(s) · Agent: "par" (actions) vs. "de" (aimé de, connu de, respecté de)!', ruleZh: '全时态被动构成：être 变相应时态（注意 a été 里的 été 永远不变！），后面的过去分词必须配合主语性数！一般施动者用 par，情感认知动词用 de！' },
          { label: '2 Native Ways to Avoid Awkward Passives', rule: '(1) Active "on": "On m’a dit que..." (NEVER translate "I was told" literally with passive!). (2) Reflexive/Pronominal passive for things: "Le football américain se joue à onze." / "Le français se parle ici."', ruleZh: '法语规避僵硬被动的两大法宝：① “有人告诉我 / 我被给了……”改用 on + 主动（On m’a dit / On m’a donné）；② 客观事物属性用自反动词（se joue / se vend / se parle）。' }
        ],
        sections: [
          {
            id: 't10d6_form',
            heading: '1. Passive Conjugation, Subject Agreement & Par vs. De (Longhorns vs. Aggies)',
            headingZh: '一、被动语态全时态表、长角牛 vs 农工体育新闻',
            lead: 'Spot every tense of passive "être" and agent preposition ("par" vs. "de") in the Longhorns vs. Aggies sports examples and news broadcast:',
            leadZh: '看准下表 `être` 如何在各种时态下自由变形，同时后面分词牢牢盯住主语单复阴阳性，再看体育播报对话：',
            cartoon: {
              src: './assets/tex_cartoons/tav1_longhorn.gif',
              alt: 'Les Aggies sont battus par les Longhorns',
              caption: 'Les Aggies sont battus (Présent) / ont été battus (Passé Composé) / seront battus (Futur) par les Longhorns !',
              captionZh: '农工队（Aggies 阳性复数 → battus 加 -s）被德大长角牛队击败（sont battus / ont été battus / seront battus）！'
            },
            table: {
              headers: ['Tense / Feature', 'Example Sentence', 'Grammar Key'],
              rows: [
                { cols: ['Present Passive', 'Les Aggies sont battus par les Longhorns.', 'être present (sont) + battus (m.pl.)'], audio: 'Les Aggies sont battus par les Longhorns.' },
                { cols: ['Passé Composé Passive', 'Les Aggies ont été battus. / La loi a été votée.', '"été" never changes; final PP agrees!'], audio: 'La loi SOS-tatou a été votée et les Aggies ont été battus.' },
                { cols: ['Futur Simple Passive', 'Les Aggies seront battus par les Longhorns.', 'être future (seront) + battus (m.pl.)'], audio: 'Les Aggies seront battus par les Longhorns.' },
                { cols: ['"de" vs. "par" Agent', 'Tammy est aimée de Tex. Tex est connu de toutes et respecté de tous.', 'Emotion / state verbs (aimer, connaître, respecter) take DE!'], audio: 'Tammy est aimée de Tex. Tex est respecté de tous les professeurs.' }
              ]
            },
            dialogue: {
              title: 'Sports Desk: Longhorns Victory Bulletin',
              titleZh: '小对话：电视体育快讯（被动语态实战）',
              lines: [
                { speaker: 'Journaliste', fr: 'Aujourd’hui, l’équipe des Aggies a été battue et le moral des joueurs est profondément affecté par cette défaite.', en: 'Today, the Aggies team was defeated and the players’ morale is deeply affected by this defeat.', zh: 'l’équipe（阴单）→ a été battue（加 -e）；le moral（阳单）→ est affecté！' },
                { speaker: 'Journaliste', fr: 'Depuis que le trophée Heisman a été remporté par le légendaire Ricky Williams, rien ne les arrête !', en: 'Since the Heisman trophy was won by the legendary Ricky Williams, nothing can stop them!', zh: 'le trophée → a été remporté par...（发明、获奖、法案、受害事件最常用被动！）。' }
              ]
            }
          },
          {
            id: 't10d6_uses',
            heading: '2. Why Use Passive? Focus Shift & Unknown Agent (UFO Abduction)',
            headingZh: '二、什么时候必须用被动：突出受害者或施动者不明',
            lead: 'Use the passive voice to spotlight inventions/laws ("a été créée / votée"), shift focus onto an object ("Le livre a été écrit par Tex"), or report events with an unknown agent ("ont été enlevés !"):',
            leadZh: '聚焦对象（这本书是……写的）、未知作案者（被绑架啦！）、以及法案发明新闻，最适合直接用被动语态：',
            cartoon: {
              src: './assets/tex_cartoons/tav1_abduction.gif',
              alt: 'Oh, Corey et Fiona ont été enlevés par un OVNI !',
              caption: 'Oh, Corey et Fiona ont été enlevés ! (Focus on the victims when the abductor is unknown!)',
              captionZh: '天啊，Corey 和 Fiona 被外星人抓走了！（ont été enlevés，施动者未知或需突出受害者！）'
            },
            examples: [
              { fr: 'Le livre Guerre et Amour a été écrit par Tex. / Un nouveau genre de grammaire a été créé.', en: 'Object-focus & inventions/laws: créations, lois, accidents!', zh: '焦点放到“书 / 新语法流派”上时用被动：a été écrit / a été créé。', tag: 'Focus Shift & Inventions' }
            ]
          },
          {
            id: 't10d6_avoid',
            heading: '3. How French Natives Avoid the Passive: "On" & Pronominal Verbs',
            headingZh: '三、法语地道规避被动的两大法宝：on 主动化与自反被动',
            lead: 'Remember: in French, ONLY direct-object verbs (COD) can become passive! You CANNOT say "J’ai été donné un livre" or "J’ai été dit" — switch to "On m’a dit que..." or pronominal passive ("se joue", "se parle"):',
            leadZh: '记住英语“间接宾语作被动主语（I was told / I was given）”在法语**彻底非法**！必须改用 **`on + 主动`** 或 **`自反动词`**！',
            cartoon: {
              src: './assets/tex_cartoons/tav1_football.gif',
              alt: 'Le football américain se joue à onze',
              caption: 'Le football américain se joue à onze ! Le vin rouge se boit à température ambiante, et le français se parle en Louisiane !',
              captionZh: '美式橄榄球是十一人制的（se joue à onze）！红酒要常温饮用（se boit），法语在路易斯安那通行（se parle）！'
            },
            examples: [
              { fr: 'On m’a dit que Tex aimait Tammy. (NOT "J’ai été dit...")', en: 'Indirect object verbs (dire à, donner à, parler à, téléphoner à) CANNOT be passive in French → use "on"!', zh: '“别人告诉我”绝不能直译成 *J’ai été dit*（dire 接的是间宾 à qqn），必须用 **On m’a dit**！', tag: 'Active "on" Replacement' },
              { fr: 'Les frites se mangent avec du ketchup. / Ce mot s’écrit avec un accent.', en: 'General rules & timeless facts about objects use pronominal "se + 3rd person verb"!', zh: '薯条配番茄酱吃（se mangent）、这个词怎么拼写（s’écrit），用自反被动超级地道！', tag: 'Pronominal Passive' }
            ],
            quickCheck: {
              prompt: 'Pick the sentence with ZERO passive-voice or agreement errors:',
              promptZh: '选出被动语态或代替写法**完全地道且无配合错误**的一句：',
              options: [
                'La nouvelle loi a été votée hier, mais on ne m’a rien dit.',
                'La nouvelle loi a été voté hier, et j’ai été dit la vérité.',
                'Tex est très respecté par tous ses étudiants et aimé par sa famille.',
                'Cette chanson se chantent partout en France.'
              ],
              answerIdx: 0,
              explain: '"La loi" (fem. sg.) → "a été votée" (+e), and "I was told nothing" MUST be active "on ne m’a rien dit" (never "j’ai été dit")! Also notice "aimé de" (not par) and singular "Cette chanson se chante".',
              explainZh: 'la loi 为阴性单数 → a été votée（加 -e），且“没人告诉我”必须用 on ne m’a rien dit；另外 aimé/respecté 常搭 de，而 cette chanson 是单数应配 se chante。'
            }
          }
        ],
        drills: [
          {
            id: 'dt10d6_d1',
            kind: 'fib',
            prompt: 'Tex Practice #1: Tex : Ce plat ___ en France. (apprécier — passive PRÉSENT)',
            promptZh: 'Tex 原题 #1：Tex：这道菜在法国很受赞赏（apprécier，现在时被动，注意阳性单数 ce plat）：',
            answers: ['est apprécié'],
            hint: 'est + apprécié (masc. sg.).',
            audio: 'Ce plat est apprécié en France.',
            explain: 'ce plat (masc. sg.) → est apprécié.',
            explainZh: 'ce plat 为阳性单数，现在时被动：est apprécié。'
          },
          {
            id: 'dt10d6_d2',
            kind: 'fib',
            prompt: 'Tex Practice #2: Tammy : Cette tarte ___ par Edouard. (faire — passive PASSÉ COMPOSÉ)',
            promptZh: 'Tex 原题 #2：Tammy：这个派是 Edouard 做的（faire，复合过去时被动 + 注意阴性单数 cette tarte！）：',
            answers: ['a été faite'],
            hint: 'cette tarte (fem. sg.) → a été faite (+e)!',
            audio: 'Cette tarte a été faite par Edouard.',
            explain: 'cette tarte (fem. sg.) → a été faite (with final -e!).',
            explainZh: 'cette tarte 是阴性单数，faire 的过去分词 fait 必须配合加 -e → a été faite！'
          },
          {
            id: 'dt10d6_d3',
            kind: 'fib',
            prompt: 'Tex Practice #3: Tex : La danse country ___ par les Texans. (inventer — passive PASSÉ COMPOSÉ)',
            promptZh: 'Tex 原题 #3：Tex：乡村舞是德州人发明的（inventer，复合过去时被动，阴性单数 la danse）：',
            answers: ['a été inventée'],
            hint: 'la danse (fem. sg.) → a été inventée (+e)!',
            audio: 'La danse country a été inventée par les Texans.',
            explain: 'la danse (fem. sg.) → a été inventée.',
            explainZh: 'la danse 为阴性单数 → a été inventée（加 -e）。'
          },
          {
            id: 'dt10d6_d4',
            kind: 'fib',
            prompt: 'Tex Practice #4: Le roman de Tex ___ à des millions d’exemplaires. (vendre — passive FUTUR SIMPLE)',
            promptZh: 'Tex 原题 #4：Tex 的小说将会卖出数百万册（vendre，简单将来时被动）：',
            answers: ['sera vendu'],
            hint: 'être future (sera) + vendu.',
            audio: 'Le roman de Tex sera vendu à des millions d’exemplaires.',
            explain: 'le roman (masc. sg.) → sera vendu.',
            explainZh: '简单将来时被动：être 将来时 sera + vendu。'
          },
          {
            id: 'dt10d6_d5',
            kind: 'fib',
            prompt: 'Tex Practice #5: Tex ___ par des nonnes. (élever — passive PASSÉ COMPOSÉ)',
            promptZh: 'Tex 原题 #5：Tex 是被修女们抚养长大的（élever，复合过去时被动）：',
            answers: ['a été élevé'],
            hint: 'Tex (masc. sg.) → a été élevé.',
            audio: 'Tex a été élevé par des nonnes.',
            explain: 'a été élevé.',
            explainZh: 'Tex 为阳性单数 → a été élevé。'
          },
          {
            id: 'dt10d6_d6',
            kind: 'fib',
            prompt: 'Tex Practice #6: Les poèmes érotiques de Tex ___. (censurer — passive PASSÉ COMPOSÉ)',
            promptZh: 'Tex 原题 #6：Tex 的情诗被审查封禁了（censurer，复合过去时被动，注意复数 les poèmes！）：',
            answers: ['ont été censurés'],
            hint: 'les poèmes (masc. pl.) → ont été censurés (+s)!',
            audio: 'Les poèmes érotiques de Tex ont été censurés.',
            explain: 'ont été censurés (note: "été" never takes -s, only "censurés" does!).',
            explainZh: '主语是阳性复数 les poèmes，因此 ont été 后面的分词加 -s（但 été 本身永远不变！）→ ont été censurés！'
          },
          {
            id: 'dt10d6_d7',
            kind: 'fib',
            prompt: 'Tex Practice #7: Tex, Joe-Bob et Edouard ___ chez Tammy ce soir. (inviter — passive PRÉSENT)',
            promptZh: 'Tex 原题 #7：Tex、Joe-Bob 和 Edouard 今晚受邀去 Tammy 家（inviter，现在时被动，3 男复数）：',
            answers: ['sont invités'],
            hint: '3 guys = masc. pl. → sont invités!',
            audio: 'Tex, Joe-Bob et Edouard sont invités chez Tammy ce soir.',
            explain: 'sont invités.',
            explainZh: '阳性复数主语 → sont invités。'
          },
          {
            id: 'dt10d6_d8',
            kind: 'fib',
            prompt: 'Tex Practice #8: Tex ___ par Bette. (poursuivre — passive PRÉSENT)',
            promptZh: 'Tex 原题 #8：Tex 正被 Bette 疯狂追求/追赶（poursuivre，过去分词 poursuivi，现在时被动）：',
            answers: ['est poursuivi'],
            hint: 'poursuivre PP = poursuivi → est poursuivi.',
            audio: 'Tex est poursuivi par Bette.',
            explain: 'est poursuivi.',
            explainZh: 'poursuivre 过去分词为 poursuivi → est poursuivi。'
          },
          {
            id: 'dt10d6_d9',
            kind: 'fib',
            prompt: 'Tex Practice #9: Tex et Tammy ___ chaleureusement par Paw-Paw. (accueillir — passive PRÉSENT)',
            promptZh: 'Tex 原题 #9：Tex 和 Tammy 受到 Paw-Paw 爷爷的热情款待（accueillir，过去分词 accueilli + 男女复数）：',
            answers: ['sont accueillis'],
            hint: 'Tex et Tammy (masc. pl.) + accueillir PP = accueillis → sont accueillis!',
            audio: 'Tex et Tammy sont accueillis chaleureusement par Paw-Paw.',
            explain: 'sont accueillis (mixed pair defaults to masc. pl. -s!).',
            explainZh: '一男一女合成复数默认按阳性复数配合 → sont accueillis。'
          },
          {
            id: 'dt10d6_d10',
            kind: 'fib',
            prompt: 'Tex Practice #10: Monsieur, le café ___ ! (servir — passive PRÉSENT)',
            promptZh: 'Tex 原题 #10：先生，您的咖啡端上来啦！（servir，现在时被动）：',
            answers: ['est servi'],
            hint: 'est + servi.',
            audio: 'Monsieur, le café est servi !',
            explain: 'est servi.',
            explainZh: 'le café 为阳性单数 → est servi。'
          },
          {
            id: 'dt10d6_d11',
            kind: 'fib',
            prompt: 'Tex Practice #11 (Feminine Agreement!): Rita : Je ne peux pas venir ce soir, je ___ ! (prendre — passive PRÉSENT)',
            promptZh: 'Tex 原题 #11：Rita（女）：今晚我来不了了，我有安排/被占用啦！（prendre，现在时被动，注意女性 je 配合！）：',
            answers: ['suis prise'],
            hint: 'Rita = female → prise (+e) → je suis prise!',
            audio: 'Je ne peux pas venir ce soir, je suis prise !',
            explain: 'je suis prise (fem. sg. agreement with Rita!).',
            explainZh: '女性 Rita 说“我有事占住了”，prise 必须配合加 -e → suis prise！'
          },
          {
            id: 'dt10d6_d12',
            kind: 'fib',
            prompt: 'Tex Practice #12: Tex : Est-ce que je ___ de mon public ? (aimer — passive FUTUR SIMPLE, Notice "de"!) ',
            promptZh: 'Tex 原题 #12：Tex：我会被我的观众喜爱吗？（aimer，简单将来时被动，注意后面配的是介词 de！）：',
            answers: ['serai aimé'],
            hint: 'je serai + aimé (masc. sg. for Tex)! Notice "aimé de" uses DE!',
            audio: 'Est-ce que je serai aimé de mon public ?',
            explain: 'serai aimé (and "aimer" takes preposition "de" instead of "par" in formal passive!).',
            explainZh: 'être 简单将来时 je serai + aimé（Tex 为阳性单数）；留意句中配合使用的正宗介词 **de** mon public！'
          }
        ],
        related: [
          { chapterId: 'ch10d_cond_disc_pass', pageId: 't10d_5', label: 'Back to 10D.5 Reported Speech (Past)' },
          { chapterId: 'ch10a_tenses_past', pageId: 't10a_1', label: 'Review 10A.1 Tense, Aspect, Mood & Voice' }
        ]
      }
    ]
  });
})();
