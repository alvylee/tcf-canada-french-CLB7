#!/usr/bin/env python3
"""
Professional CEFR French Syllabus: 32 Atomic Micro-Lessons
- 4 Phonetics & Pronunciation Lessons (P1-P4)
- 7 A1 Grammar Lessons (G-A1.1 to G-A1.7)
- 7 A2 Grammar Lessons (G-A2.1 to G-A2.7)
- 7 B1 Grammar Lessons (G-B1.1 to G-B1.7)
- 7 B2 / CLB 7 Grammar Lessons (G-B2.1 to G-B2.7)
"""

GRAMMAR_SYLLABUS = [
    # ===================== PHONETICS (4) =====================
    {
        "id": "p_1", "level": "Sounds", "code": "P.1",
        "title": "French U [y] vs. OU [u] (Mandarin ü vs. u)",
        "duration": "5 min",
        "summary": "Distinguish tu/tout, dessus/dessous, rue/roue — critical for TCF Listening.",
        "formula": "u → lips tight & rounded like Mandarin ü (鱼) | ou → back rounded like Mandarin u (乌)",
        "bridgeEn": "English has no [y] sound, so anglophones merge 'tu' and 'tout'. You already have a massive advantage from Mandarin!",
        "bridgeZh": "中文母语者零障碍：法语 u = 普通话 ü（鱼、女）；法语 ou = 普通话 u（乌、不）。听到 « dessus »（上面）vs « dessous »（下面）直接按 ü vs u 区分！",
        "trap": "In TCF Listening, confusing « beaucoup » / « beau cul », « dessous » (under) / « dessus » (on top), or « vu » (seen) / « vous » (you) completely flips the meaning.",
        "examples": [
            {"fr": "Tu as tout compris ?", "en": "Did you understand everything?", "zh": "你全都听懂了吗？（tu=ü, tout=u）"},
            {"fr": "Le dossier est dessus, pas dessous.", "en": "The file is on top, not underneath.", "zh": "文件在上面，不是在下面。"},
            {"fr": "Nous avons vu votre nouvelle rue.", "en": "We saw your new street.", "zh": "我们看到了你们的新街道。"},
            {"fr": "Je suis sûr que ce cours est utile.", "en": "I am sure this course is useful.", "zh": "我确信这门课很有用。"}
        ],
        "quiz": [
            {"q": "Which pair contrasts French [y] (Mandarin ü) and [u] (Mandarin u)?", "opts": ["tu / tout", "le / les", "un / une", "bon / bien"], "ans": 0, "exp": "« tu » uses [y] (ü) while « tout » uses [u] (u)."},
            {"q": "What does « Le colis est dessus » mean?", "opts": ["The package is underneath", "The package is on top", "The package is lost", "The package is sweet"], "ans": 1, "exp": "« dessus » [duh-sü] = on top; « dessous » [duh-soo] = underneath."}
        ]
    },
    {
        "id": "p_2", "level": "Sounds", "code": "P.2",
        "title": "The 3 Nasal Vowels: AN/EN, ON, IN/UN",
        "duration": "6 min",
        "summary": "Hear and pronounce French nasal vowels without adding a hard English 'n/ng' consonant.",
        "formula": "an/en/am/em [ɑ̃] (open jaw) • on/om [ɔ̃] (rounded lips) • in/ain/ein/un [ɛ̃] (smiling lips)",
        "bridgeEn": "Do NOT let your tongue touch the roof of your mouth for the 'n'—let air resonate through the nose, and watch for vowel+n+vowel (e.g., 'bonne', 'une') which cancels nasality!",
        "bridgeZh": "不要把鼻元音读成中文的 an/en/in 后鼻音收尾！舌尖不顶上颚：on 嘴唇撅圆，an/en 嘴巴张大，in/ain 嘴角往两边微拉。注意一旦 n 后面再跟元音（如 une, bonne），就不鼻化了！",
        "trap": "« un bon vin blanc » contains all 3 nasals. Also distinguish « ils sont » (they are [on]) vs « ils ont » (they have [z-on]) and « vent » (wind [an]) vs « vont » (go [on]).",
        "examples": [
            {"fr": "Ils sont dans le train maintenant.", "en": "They are on the train right now.", "zh": "他们现在在火车上。"},
            {"fr": "Mon voisin prend un bon café le matin.", "en": "My neighbor has a good coffee in the morning.", "zh": "我邻居早上喝一杯好咖啡。"},
            {"fr": "C’est un bon moment, mais une bonne nouvelle.", "en": "It’s a good moment, and good news.", "zh": "好时机（鼻化 bon），好消息（不鼻化 bonne）。"},
            {"fr": "En novembre, le temps change souvent.", "en": "In November, the weather changes often.", "zh": "十一月天气经常变化。"}
        ],
        "quiz": [
            {"q": "In which word is the vowel NOT nasalized?", "opts": ["bon", "bonne", "temps", "matin"], "ans": 1, "exp": "In « bonne », the double 'nn' + 'e' makes the 'n' pronounced normally, canceling the nasal vowel."},
            {"q": "Which pair shares the same nasal vowel [ɑ̃]?", "opts": ["temps / France", "bon / pain", "vin / pont", "matin / maison"], "ans": 0, "exp": "« em/en » and « an » both produce the open nasal [ɑ̃]."}
        ]
    },
    {
        "id": "p_3", "level": "Sounds", "code": "P.3",
        "title": "Silent Final Consonants & Obligatory Liaisons",
        "duration": "5 min",
        "summary": "Decode why spoken French glues words together (les‿amis, nous‿avons, grand‿hôtel).",
        "formula": "CaReFuL (C, R, F, L) usually pronounced at end • s, x, z → [z] liaison | d, t → [t] liaison",
        "bridgeEn": "Remember the English mnemonic CaReFuL: final C, R, F, L are usually pronounced (sac, mer, chef, hôtel), while S, T, D, P, X, Z are silent unless linked to a following vowel.",
        "bridgeZh": "法语听力“糊成一片”的头号原因就是联诵（liaison）！词尾 s/x 遇到元音读 [z]（les‿heures → 勒泽尔），d/t 遇到元音读 [t]（quand‿il → 康蒂尔）。记住联诵规则，听力瞬间清晰！",
        "trap": "Mandatory liaisons distinguish singular vs plural in TCF Listening: « il arrive » [ee-lah-reev] vs « ils‿arrivent » [eel-zah-reev]!",
        "examples": [
            {"fr": "Les amis arrivent à dix-huit heures.", "en": "The friends arrive at 6:00 PM.", "zh": "朋友们晚上6点到。（les‿amis, dix-huit‿heures）"},
            {"fr": "Ils ont un grand appartement.", "en": "They have a big apartment.", "zh": "他们有一套大公寓。（ils‿ont, grand‿appartement）"},
            {"fr": "Vous avez un petit enfant.", "en": "You have a young child.", "zh": "您有一个小孩。（vous‿avez, petit‿enfant）"},
            {"fr": "C’est un très bon hôtel.", "en": "It is a very good hotel.", "zh": "这是一家非常好的酒店。"}
        ],
        "quiz": [
            {"q": "How can you hear the difference between « Il habite ici » and « Ils habitent ici »?", "opts": ["They sound 100% identical", "The plural has a [z] liaison sound before « habitent »", "The verb ending -ent is pronounced loudly", "The word « ici » changes"], "ans": 1, "exp": "« Ils‿habitent » links the 's' as a [z] sound [eel-zah-beet], whereas singular « Il habite » has no [z]!"},
            {"q": "In « un grand hôtel », what sound links « grand » to « hôtel »?", "opts": ["[d]", "[t]", "[z]", "No sound"], "ans": 1, "exp": "Final 'd' turns into a crisp [t] sound in liaison: [grahn-toh-tel]."}
        ]
    },
    {
        "id": "p_4", "level": "Sounds", "code": "P.4",
        "title": "Elision & Fast Spoken Reductions (TCF CO Survival)",
        "duration": "5 min",
        "summary": "Recognize fast everyday contractions heard in B1–B2 dialogues and voicemails.",
        "formula": "je + V → j’ • il y a → [ya] • je suis → [shwee] • tu es → [t’es] • ne... pas → [pas]",
        "bridgeEn": "Just like English 'going to → gonna', natural French glides unstressed 'e' (schwa) and drops 'ne' in casual speech.",
        "bridgeZh": "真实法语和 TCF B1-B2 对话里，说话人常吞掉弱读 e 和否定词 ne：« Je ne sais pas » 听起来像 « Chais pas »，« Il y a » 听起来像 « ya »，« Je suis » 听起来像 « chuis »！",
        "trap": "In TCF CO voicemails, speakers often say « C’est pas possible » (dropping 'ne')—always listen for « pas / plus / jamais »!",
        "examples": [
            {"fr": "Il y a un problème avec le métro.", "en": "There is a problem with the metro.", "zh": "地铁出了点问题。（il y a 听起来像 ya）"},
            {"fr": "Je ne sais pas encore si je peux venir.", "en": "I don’t know yet if I can come.", "zh": "我还不知道能不能来。"},
            {"fr": "Qu’est-ce que tu fais ce week-end ?", "en": "What are you doing this weekend?", "zh": "你这周末做什么？"},
            {"fr": "Parce qu’il pleut, on reste à la maison.", "en": "Because it’s raining, we’re staying home.", "zh": "因为下雨，我们待在家里。"}
        ],
        "quiz": [
            {"q": "In fast spoken French, « Il n’y a plus de billets » often drops which word?", "opts": ["plus", "billets", "n’ (ne)", "de"], "ans": 2, "exp": "Casual speakers frequently drop « ne/n’ », leaving « y a plus de billets » — « plus » still carries the negative meaning!"},
            {"q": "What does « Qu’est-ce que » sound like in natural speech?", "opts": ["kess-kuh", "kee-est-say-kuh", "kwah-kuh", "kest-kway"], "ans": 0, "exp": "« Qu’est-ce que » is pronounced smoothly as two syllables: [kess-kuh]."}
        ]
    },

    # ===================== A1 GRAMMAR (7) =====================
    {
        "id": "g_a1_1", "level": "A1", "code": "G-A1.1",
        "title": "Articles & Grammatical Gender Shortcuts",
        "duration": "6 min",
        "summary": "Master le/la/l’/les, un/une/des, and high-accuracy noun ending patterns.",
        "formula": "Masculine: le / un • Feminine: la / une • Vowel/mute h: l’ • Plural: les / des",
        "bridgeEn": "80%+ of noun genders follow endings! Feminine: -tion, -sion, -té, -ure, -ette, -ance/-ence. Masculine: -ment, -age, -eau, -isme, -oir.",
        "bridgeZh": "中文和英语都没有名词阴阳性！别死背，记住后缀规律就能猜对 80%：-tion/-té/-ance/-ence/-ure 几乎全阴性（la situation, la liberté）；-ment/-age/-eau/-isme 几乎全阳性（le gouvernement, le voyage）。",
        "trap": "Watch out for 4 high-frequency exceptions: « le problème », « le système », « le programme » (all masculine despite ending in -e!), and « la page / la plage » (feminine despite -age).",
        "examples": [
            {"fr": "La situation économique évolue vite.", "en": "The economic situation is evolving quickly.", "zh": "经济形势变化很快。（-tion 阴性）"},
            {"fr": "Le gouvernement propose un nouveau programme.", "en": "The government proposes a new program.", "zh": "政府提出了一项新计划。（-ment / -amme 阳性）"},
            {"fr": "J’habite dans un quartier calme près de l’université.", "en": "I live in a quiet neighborhood near the university.", "zh": "我住在大学附近一个安静的街区。"},
            {"fr": "Il y a des étudiants et une bibliothèque moderne.", "en": "There are students and a modern library.", "zh": "那里有学生和一座现代图书馆。"}
        ],
        "quiz": [
            {"q": "Choose the right article: « ___ solution est très simple. »", "opts": ["Le", "La", "Un", "Des"], "ans": 1, "exp": "Nouns ending in -tion are feminine → « La solution »."},
            {"q": "Which noun is MASCULINE despite ending in -e?", "opts": ["problème", "maison", "voiture", "université"], "ans": 0, "exp": "Greek-origin -ème words (« le problème, le système, le thème ») are masculine!"}
        ]
    },
    {
        "id": "g_a1_2", "level": "A1", "code": "G-A1.2",
        "title": "Être, Avoir, C’est vs. Il est & -ER Verbs",
        "duration": "6 min",
        "summary": "The foundational verb engines used in 70% of everyday French sentences.",
        "formula": "-ER endings: -e, -es, -e, -ons, -ez, -ent (note: -e/-es/-ent are ALL silent!)",
        "bridgeEn": "Use « C’est » + article + noun (« C’est un ingénieur ») or general comment (« C’est super »). Use « Il/Elle est » + bare adjective or profession (« Il est ingénieur »).",
        "bridgeZh": "注意法语表达年龄和冷热用 avoir（有）而不是 être（是）：« J’ai 28 ans »（我28岁），« J’ai froid »（我冷）。规则 -ER 动词的 je/tu/il/ils 四个变位读音完全一样！",
        "trap": "Never say « Je suis 30 ans » or « Il est un médecin »! Say « J’ai 30 ans » and « Il est médecin » (or « C’est un médecin »).",
        "examples": [
            {"fr": "Je travaille à Toronto et j’ai trente ans.", "en": "I work in Toronto and I am thirty years old.", "zh": "我在多伦多工作，今年30岁。"},
            {"fr": "Elle est architecte ; c’est un métier passionnant.", "en": "She is an architect; it’s an exciting job.", "zh": "她是建筑师；这是一份令人兴奋的职业。"},
            {"fr": "Nous parlons anglais, mandarin et un peu français.", "en": "We speak English, Mandarin, and a little French.", "zh": "我们说英语、普通话和一点法语。"},
            {"fr": "Ils habitent dans un appartement lumineux.", "en": "They live in a bright apartment.", "zh": "他们住在一套采光很好的公寓里。"}
        ],
        "quiz": [
            {"q": "Which sentence is grammatically correct?", "opts": ["Je suis vingt-cinq ans.", "J’ai vingt-cinq ans.", "Il est un professeur.", "C’est grand le appartement."], "ans": 1, "exp": "French uses « avoir » for age: « J’ai vingt-cinq ans »."},
            {"q": "Complete: « ___ une excellente idée ! »", "opts": ["Il est", "Elle est", "C’est", "Ils sont"], "ans": 2, "exp": "Before an article + noun (« une idée »), always use « C’est »."}
        ]
    },
    {
        "id": "g_a1_3", "level": "A1", "code": "G-A1.3",
        "title": "Essential Irregular Present Verbs (Aller, Faire, Modals)",
        "duration": "6 min",
        "summary": "Master the 7 highest-frequency irregulars: aller, faire, venir, prendre, pouvoir, vouloir, devoir.",
        "formula": "Modal (pouvoir/vouloir/devoir) + Infinitive: Je peux venir • Je dois partir • Je veux apprendre",
        "bridgeEn": "Modal verbs work just like English (can/want/must + infinitive), except French conjugates the modal for every subject.",
        "bridgeZh": "这7个高频不规则动词覆盖了日常对话的一半！情态动词 pouvoir（能）、vouloir（想）、devoir（必须）后面直接接动词原形，和英语/中文语序完全一致。",
        "trap": "Watch plural 3rd person (« ils »): « ils vont » (aller), « ils font » (faire), « ils prennent » (prendre — double n!), « ils peuvent » (pouvoir).",
        "examples": [
            {"fr": "Je dois finir ce rapport avant midi.", "en": "I must finish this report before noon.", "zh": "我必须在中午之前完成这份报告。"},
            {"fr": "Nous allons au bureau en métro.", "en": "We go to the office by metro.", "zh": "我们坐地铁去办公室。"},
            {"fr": "Ils prennent un café avant la réunion.", "en": "They grab a coffee before the meeting.", "zh": "他们在开会前喝杯咖啡。"},
            {"fr": "Vous pouvez répéter, s’il vous plaît ?", "en": "Can you repeat, please?", "zh": "您能重复一遍吗？"}
        ],
        "quiz": [
            {"q": "Complete: « Mes collègues ___ (prendre) le bus tous les matins. »", "opts": ["prendent", "prennent", "prenez", "prend"], "ans": 1, "exp": "Prendre in the 3rd person plural doubles the 'n': « ils prennent »."},
            {"q": "Complete: « Demain, nous ___ (faire) une pause à midi. »", "opts": ["faisons", "faites", "font", "fais"], "ans": 0, "exp": "« Nous faisons » [fuh-zohn]."}
        ]
    },
    {
        "id": "g_a1_4", "level": "A1", "code": "G-A1.4",
        "title": "Negation Patterns (ne... pas, plus, jamais, rien)",
        "duration": "5 min",
        "summary": "Build accurate negative statements and spot the partitive article shift (un/du → de).",
        "formula": "Subject + ne + Verb + pas / plus / jamais / rien • un/une/des/du/de la → de (after negation!)",
        "bridgeEn": "Important rule: after « ne... pas », indefinite/partitive articles (un, une, des, du, de la) become « de / d’ »: « J’ai une voiture » → « Je n’ai pas DE voiture ».",
        "bridgeZh": "否定句核心变化：不仅要把动词夹在 ne...pas 中间，后面的不定冠词/部分冠词（un/une/des/du）全部变成 de（除了动词是 être 时不变）！例如 « Je n’ai pas de temps »（我没时间）。",
        "trap": "Exception: « être » keeps un/une: « Ce n’est pas un problème » (NOT « de problème »)!",
        "examples": [
            {"fr": "Je n’ai pas de voiture à Montréal.", "en": "I don’t have a car in Montreal.", "zh": "我在蒙特利尔没有车。（une → de）"},
            {"fr": "Il ne travaille plus dans cette entreprise.", "en": "He no longer works at this company.", "zh": "他不再在这家公司工作了。"},
            {"fr": "Je ne prends jamais l’avion pour les courts trajets.", "en": "I never take the plane for short trips.", "zh": "我短途旅行从不坐飞机。"},
            {"fr": "Ce n’est pas un problème, ne vous inquiétez pas.", "en": "It’s not a problem, don’t worry.", "zh": "没关系，别担心。（être 后保留 un）"}
        ],
        "quiz": [
            {"q": "Negate: « Il a du temps aujourd’hui. » → « Il n’a pas ___ temps aujourd’hui. »", "opts": ["du", "de", "des", "le"], "ans": 1, "exp": "After « ne... pas » (with avoir), partitive « du » turns into « de »."},
            {"q": "What does « Je ne bois plus de café » mean?", "opts": ["I drink more coffee", "I no longer drink coffee", "I never drank coffee", "I only drink coffee"], "ans": 1, "exp": "« ne... plus » = no longer / not anymore."}
        ]
    },
    {
        "id": "g_a1_5", "level": "A1", "code": "G-A1.5",
        "title": "Asking Questions Across 3 Registers (TCF EO Tâche 2 Key)",
        "duration": "6 min",
        "summary": "Vary your questions smoothly using intonation, Est-ce que, and inversion + question words.",
        "formula": "Casual: Tu habites où ? • Standard: Où est-ce que tu habites ? • Formal: Où habitez-vous ?",
        "bridgeEn": "In TCF Speaking Tâche 2, you must ask ~10 questions in 3.5 minutes. Alternating « Est-ce que... ? », « Quel(le)... ? », and « Inversion » immediately raises your score!",
        "bridgeZh": "TCF 口语 Tâche 2 专门考提问题！不要每句都用 Est-ce que，把三个级别轮换用：口语升调、标准 Est-ce que、礼貌倒装（Proposez-vous... ? / Quel est... ?），考官立马给高分！",
        "trap": "« Quel » agrees with the noun: quel horaire (m.), quelle adresse (f.), quels tarifs (m.pl.), quelles activités (f.pl.).",
        "examples": [
            {"fr": "Est-ce que le musée est ouvert le lundi ?", "en": "Is the museum open on Mondays?", "zh": "博物馆周一开放吗？（标准）"},
            {"fr": "Quels sont vos horaires d’ouverture ?", "en": "What are your opening hours?", "zh": "你们的营业时间是什么？（礼貌）"},
            {"fr": "Combien coûte l’abonnement mensuel ?", "en": "How much does the monthly membership cost?", "zh": "月卡多少钱？"},
            {"fr": "Proposez-vous une réduction pour les étudiants ?", "en": "Do you offer a discount for students?", "zh": "你们为学生提供折扣吗？（倒装）"}
        ],
        "quiz": [
            {"q": "Choose the right form of « quel »: « ___ est votre adresse électronique ? » (adresse = f.)", "opts": ["Quel", "Quelle", "Quels", "Quelles"], "ans": 1, "exp": "« Adresse » is feminine singular → « Quelle »."},
            {"q": "Which question is in formal inversion register?", "opts": ["Vous avez des places ?", "Est-ce que vous avez des places ?", "Avez-vous des places ?", "Places avez-vous ?"], "ans": 2, "exp": "Verb-hyphen-pronoun (« Avez-vous... ? ») is formal inversion."}
        ]
    },
    {
        "id": "g_a1_6", "level": "A1", "code": "G-A1.6",
        "title": "Prepositions of Place & Countries (au, en, à, chez)",
        "duration": "5 min",
        "summary": "Never mix up à / au / en / aux / chez when talking about cities, countries, and people.",
        "formula": "Cities: à (à Montréal) • Fem. countries/provinces: en (en France, en Ontario) • Masc. countries: au (au Canada, au Québec) • People: chez (chez le médecin)",
        "bridgeEn": "Easy country rule: ends in -e → feminine → « en » (en France, en Chine); other ending → masculine → « au » (au Canada, au Japon). Exceptions: le Mexique (au Mexique).",
        "bridgeZh": "国家/省份介词超好记：以 -e 结尾的阴性国家用 en（en France, en Chine, en Colombie-Britannique）；其他阳性国家用 au（au Canada, au Québec）；城市全用 à（à Montréal）；去某人家/诊所用 chez！",
        "trap": "Always say « au Canada » and « au Québec » (both masculine), but « en Ontario » (starts with vowel → en) and « aux États-Unis » (plural).",
        "examples": [
            {"fr": "Je vis au Canada, plus précisément à Vancouver.", "en": "I live in Canada, more specifically in Vancouver.", "zh": "我住在加拿大，具体是在温哥华。"},
            {"fr": "J’ai grandi en Chine avant d’étudier en Ontario.", "en": "I grew up in China before studying in Ontario.", "zh": "我在安大略省读书之前在中国长大。"},
            {"fr": "Je vais chez le dentiste cet après-midi.", "en": "I am going to the dentist this afternoon.", "zh": "我今天下午去看牙医。"},
            {"fr": "Le colis est arrivé à la poste du quartier.", "en": "The package arrived at the neighborhood post office.", "zh": "包裹到了街区邮局。"}
        ],
        "quiz": [
            {"q": "Complete: « Elle habite ___ Québec, mais elle travaille ___ Ottawa. »", "opts": ["en / à", "au / à", "à / au", "dans / en"], "ans": 1, "exp": "Québec (province) is masculine → « au Québec »; Ottawa (city) → « à Ottawa »."},
            {"q": "How do you say « I’m going to my friend’s place »?", "opts": ["Je vais à mon ami.", "Je vais dans mon ami.", "Je vais chez mon ami.", "Je vais au mon ami."], "ans": 2, "exp": "Going to a person’s home or office uses « chez »."}
        ]
    },
    {
        "id": "g_a1_7", "level": "A1", "code": "G-A1.7",
        "title": "Near Future (Aller + Inf.) & Recent Past (Venir de + Inf.)",
        "duration": "5 min",
        "summary": "Express what is about to happen and what just happened effortlessly.",
        "formula": "Futur proche: aller (present) + infinitive • Passé récent: venir (present) + de + infinitive",
        "bridgeEn": "« Je vais partir » = I’m going to leave. « Je viens de partir » = I JUST left (literally 'I come from leaving').",
        "bridgeZh": "两个超实用的“快捷时态”：aller + 原形 = 马上要/打算（快要去……）；venir de + 原形 = 刚刚才（« Je viens d’arriver » = 我刚到！）。口语和 TCF 听力里极高频！",
        "trap": "Don’t confuse « Je viens de Paris » (I come from Paris) with « Je viens de finir » (I just finished).",
        "examples": [
            {"fr": "Je viens d’arriver au Canada le mois dernier.", "en": "I just arrived in Canada last month.", "zh": "我上个月刚到加拿大。"},
            {"fr": "Nous allons réserver les billets ce soir.", "en": "We are going to book the tickets tonight.", "zh": "我们今晚打算订票。"},
            {"fr": "Le train vient de partir il y a deux minutes.", "en": "The train just left two minutes ago.", "zh": "火车两分钟前刚开走。"},
            {"fr": "Tu vas passer le TCF Canada bientôt ?", "en": "Are you going to take TCF Canada soon?", "zh": "你很快就要考 TCF Canada 了吗？"}
        ],
        "quiz": [
            {"q": "What does « Le magasin vient de fermer » mean?", "opts": ["The store is about to close", "The store just closed", "The store closes tomorrow", "The store never closes"], "ans": 1, "exp": "« venir de + infinitive » = just happened (recent past)."},
            {"q": "How do you say « I am going to call back »?", "opts": ["Je viens de rappeler.", "Je vais rappeler.", "J’ai rappelé.", "Je suis rappeler."], "ans": 1, "exp": "« aller + infinitive » expresses near future: « Je vais rappeler »."}
        ]
    },

    # ===================== A2 GRAMMAR (7) =====================
    {
        "id": "g_a2_1", "level": "A2", "code": "G-A2.1",
        "title": "Passé Composé with Avoir (Completed Actions)",
        "duration": "6 min",
        "summary": "Master regular (-é/-i/-u) and the core irregular past participles with avoir.",
        "formula": "avoir (ai, as, a, avons, avez, ont) + Past Participle • -er → -é | -ir → -i | -re → -u",
        "bridgeEn": "Irregulars to memorize immediately: faire → fait, prendre → pris, voir → vu, dire → dit, mettre → mis, lire → lu, pouvoir → pu, vouloir → voulu, avoir → eu, être → été.",
        "bridgeZh": "Passé Composé ≈ 中文“动词+了”，表示过去已完成的具体事件。90% 的动词用 avoir 做助动词。特别注意：口语里 « J’ai parlé » 和 « Je parlais » 读音非常接近，要结合上下文和副词（hier / la semaine dernière）判断！",
        "trap": "Past participle does NOT agree with the subject when using « avoir »: « Elle a mangé » (NOT mangée).",
        "examples": [
            {"fr": "Hier, j’ai envoyé mon dossier d’immigration.", "en": "Yesterday, I sent my immigration file.", "zh": "昨天我寄出了我的移民申请材料。"},
            {"fr": "Nous avons pris une décision importante.", "en": "We made an important decision.", "zh": "我们做了一个重要决定。"},
            {"fr": "Est-ce que vous avez reçu mon courriel ?", "en": "Did you receive my email?", "zh": "您收到我的邮件了吗？"},
            {"fr": "Ils ont fait de grands progrès en français.", "en": "They made great progress in French.", "zh": "他们在法语上取得了很大进步。"}
        ],
        "quiz": [
            {"q": "What is the Passé Composé of « prendre » with « nous »?", "opts": ["nous avons prendu", "nous avons pris", "nous sommes pris", "nous prenions"], "ans": 1, "exp": "Prendre takes avoir + irregular past participle « pris »."},
            {"q": "Complete: « Elle a ___ (lire) tout l’article en dix minutes. »", "opts": ["liré", "lit", "lu", "lue"], "ans": 2, "exp": "Lire → « lu » (no subject agreement with avoir)."}
        ]
    },
    {
        "id": "g_a2_2", "level": "A2", "code": "G-A2.2",
        "title": "Passé Composé with Être & Reflexive Verbs",
        "duration": "6 min",
        "summary": "Master movement verbs (aller, venir, partir, arriver, rester) + reflexives with agreement.",
        "formula": "être (suis, es, est, sommes, êtes, sont) + Participle (+ -e fem. / + -s pl.)",
        "bridgeEn": "All reflexive verbs (se lever, se dépêcher, s’inscrire) and the ~14 movement/state verbs (aller, venir, arriver, partir, entrer, sortir, monter, descendre, rester, tomber, naître, mourir, passer, retourner) use « être ».",
        "bridgeZh": "用 être 做助动词的两大类：1) 约14个“位移动词”（来去出入上下留）；2) 所有代词式动词（se lever, s’inscrire）。关键点：过去分词必须和主语性数配合（女生说 Je suis partie，复数说 Ils sont arrivés）！",
        "trap": "In TCF Writing, forgetting the -e/-s agreement on « être » verbs (« Elle est allé » ✕ → « Elle est allée » ✓) is one of the easiest errors to eliminate.",
        "examples": [
            {"fr": "Marie est partie tôt ce matin pour prendre son vol.", "en": "Marie left early this morning to catch her flight.", "zh": "Marie今天一早就出发赶飞机了。（阴性+e）"},
            {"fr": "Nous sommes arrivés à l’aéroport à l’heure.", "en": "We arrived at the airport on time.", "zh": "我们准时到达了机场。（复数+s）"},
            {"fr": "Je me suis inscrit à un cours intensif de français.", "en": "I enrolled in an intensive French course.", "zh": "我报名了一门法语强化班。"},
            {"fr": "Elles sont restées trois jours à Québec.", "en": "They stayed three days in Québec City.", "zh": "她们在魁北克市待了三天。"}
        ],
        "quiz": [
            {"q": "Complete (female speaker): « Hier, je ___ (aller) à la bibliothèque. »", "opts": ["ai allé", "suis allé", "suis allée", "vais"], "ans": 2, "exp": "Aller uses être + feminine agreement (-e) → « je suis allée »."},
            {"q": "Complete: « Ils ___ (se lever) à six heures du matin. »", "opts": ["ont levé", "se sont levés", "sont se levé", "se levaient"], "ans": 1, "exp": "Reflexive verbs always take être in Passé Composé + plural -s."}
        ]
    },
    {
        "id": "g_a2_3", "level": "A2", "code": "G-A2.3",
        "title": "Imparfait (Past Habits, Scenes & Descriptions)",
        "duration": "5 min",
        "summary": "Form the easiest tense in French (only ONE irregular stem!) for descriptions and routines.",
        "formula": "Take 'nous' present stem (drop -ons) + -ais, -ais, -ait, -ions, -iez, -aient • Only irregular: être → ét-",
        "bridgeEn": "Equivalent to English 'used to', 'was/were -ing', and past descriptions (weather, age, feelings, time).",
        "bridgeZh": "未完成过去时（Imparfait）是法语变位最规整的时态——全法语只有一个不规则词干（être → ét-）！对应中文里的“以前常常 / 当时正在 / 过去的状态背景”。",
        "trap": "Remember the stem for « faire » (nous faisons → je faisais) and « prendre » (nous prenons → je prenais).",
        "examples": [
            {"fr": "Quand j’étais étudiant, j’habitais près du campus.", "en": "When I was a student, I used to live near campus.", "zh": "我当学生时住在校园附近。"},
            {"fr": "Il faisait très froid et la neige tombait doucement.", "en": "It was very cold and snow was falling gently.", "zh": "当时非常冷，雪轻轻地下着。"},
            {"fr": "Avant, nous prenions toujours le métro ensemble.", "en": "Before, we always used to take the metro together.", "zh": "以前我们总是坐同一班地铁。"},
            {"fr": "Le restaurant était plein et l’ambiance était chaleureuse.", "en": "The restaurant was full and the atmosphere was warm.", "zh": "餐厅坐满了人，气氛很温馨。"}
        ],
        "quiz": [
            {"q": "What is the Imparfait of « avoir » with « nous »?", "opts": ["nous avais", "nous avions", "nous avons", "nous aurions"], "ans": 1, "exp": "Nous avons → stem av- + -ions → « nous avions »."},
            {"q": "Which verb is the ONLY irregular stem in the Imparfait?", "opts": ["aller", "faire", "être", "pouvoir"], "ans": 2, "exp": "Only « être » has an irregular Imparfait stem: « ét- » (j’étais)."}
        ]
    },
    {
        "id": "g_a2_4", "level": "A2", "code": "G-A2.4",
        "title": "Passé Composé vs. Imparfait in Stories",
        "duration": "6 min",
        "summary": "Combine both past tenses naturally in Listening comprehension and Writing Tâche 2.",
        "formula": "Imparfait (ongoing background / state) + soudain / quand + Passé Composé (completed event)",
        "bridgeEn": "Ask yourself: Is this the scenery/habit (Imparfait) or a plot action that happened once and finished (Passé Composé)?",
        "bridgeZh": "写 TCF 写作 Tâche 2 讲经历的黄金公式：背景/天气/心情/当时正在做用 Imparfait，推进故事的关键动作（到达、决定、发生、看到）用 Passé Composé！",
        "trap": "« J’ai travaillé deux heures » (PC — bounded duration) vs « Je travaillais quand il a appelé » (IMP — interrupted ongoing action).",
        "examples": [
            {"fr": "Je marchais dans le parc quand j’ai croisé un ancien collègue.", "en": "I was walking in the park when I ran into a former colleague.", "zh": "我正走在公园里，突然偶遇了一位老同事。"},
            {"fr": "Comme il pleuvait fort, nous avons décidé de prendre un taxi.", "en": "Since it was raining heavily, we decided to take a taxi.", "zh": "因为当时雨下得很大，我们决定打车。"},
            {"fr": "Au début, je ne comprenais pas l’accent, mais j’ai vite progressé.", "en": "At first I didn’t understand the accent, but I progressed quickly.", "zh": "一开始我听不懂口音，但我很快进步了。"},
            {"fr": "La conférence était longue, mais j’ai appris beaucoup de choses.", "en": "The conference was long, but I learned a lot.", "zh": "会议很长，但我学到了很多东西。"}
        ],
        "quiz": [
            {"q": "Choose the natural pair: « Comme j’___ (être) fatigué, je ___ (rentrer) tôt. »", "opts": ["ai été / rentrais", "étais / suis rentré", "suis / rentre", "étais / rentrais"], "ans": 1, "exp": "State/reason = Imparfait (étais); resulting action = Passé Composé (suis rentré)."},
            {"q": "Which sentence describes a bounded completed event?", "opts": ["Il faisait beau hier.", "J’ai visité Québec pendant trois jours.", "Je regardais un film.", "Elle avait vingt ans."], "ans": 1, "exp": "« pendant trois jours » defines a bounded completed trip → Passé Composé."}
        ]
    },
    {
        "id": "g_a2_5", "level": "A2", "code": "G-A2.5",
        "title": "Futur Simple (Plans, Forecasts & Promises)",
        "duration": "6 min",
        "summary": "Form future statements and decode weather/news/schedule announcements in TCF CO.",
        "formula": "Infinitive (drop final -e on -re) + -ai, -as, -a, -ons, -ez, -ont • Key stems: ser-, aur-, ir-, fer-, pourr-, devr-, faudr-, verr-",
        "bridgeEn": "Used for definite future plans, formal announcements (« Le train partira... »), and after « quand / dès que » (when/as soon as)!",
        "bridgeZh": "特别提醒英语C1学习者：英语里 when/as soon as 后面用一般现在时（When I arrive, I will call），但法语里 « quand / dès que » 后面如果指将来，必须也用 Futur Simple（« Quand j’arriverai, je t’appellerai »）！",
        "trap": "Don’t mix up « j’aurai » (future: I will have) vs « j’aurais » (conditional: I would have)—in writing, that final -s changes the tense!",
        "examples": [
            {"fr": "Dès que j’aurai mes résultats, je vous contacterai.", "en": "As soon as I get my results, I will contact you.", "zh": "我一拿到成绩就会联系您。（两边都用将来时！）"},
            {"fr": "Le train pour Ottawa partira finalement à seize heures.", "en": "The train to Ottawa will actually leave at 4:00 PM.", "zh": "开往渥太华的火车最终将在16点发车。"},
            {"fr": "L’année prochaine, nous vivrons à Montréal.", "en": "Next year, we will live in Montreal.", "zh": "明年我们将在蒙特利尔生活。"},
            {"fr": "Il faudra réserver vos places avant vendredi.", "en": "It will be necessary to book your seats before Friday.", "zh": "周五之前需要提前订座。"}
        ],
        "quiz": [
            {"q": "Complete: « Quand tu ___ (arriver) à la gare, envoie-moi un message. »", "opts": ["arrives", "arriveras", "arrivais", "es arrivé"], "ans": 1, "exp": "After « quand » referring to the future, French uses Futur Simple (« arriveras »)."},
            {"q": "What is the Futur Simple of « faire » for « nous »?", "opts": ["nous fairons", "nous ferons", "nous faisons", "nous ferions"], "ans": 1, "exp": "Faire has irregular future stem « fer- » → « nous ferons »."}
        ]
    },
    {
        "id": "g_a2_6", "level": "A2", "code": "G-A2.6",
        "title": "Direct & Indirect Object Pronouns (le/la/les vs. lui/leur)",
        "duration": "6 min",
        "summary": "Place object pronouns correctly before the verb and stop repeating nouns.",
        "formula": "Direct (no à): le / la / les • Indirect (à + person): lui (him/her) / leur (them) • Position: BEFORE conjugated verb (or before infinitive)",
        "bridgeEn": "Check the verb! « voir quelqu’un » (direct) → « Je le vois ». « parler À quelqu’un » (indirect) → « Je lui parle ».",
        "bridgeZh": "法语宾语代词统统放在动词前面！区分直接/间接只要看动词后面有没有 à：直接接人/物用 le/la/les（Je les connais）；接 à+人（parler à, téléphoner à, écrire à, donner à）一律用 lui（他/她）或 leur（他们）！",
        "trap": "« Leur » as an indirect pronoun NEVER takes an -s: « Je leur écris » (NOT leurs!).",
        "examples": [
            {"fr": "Tu connais Marc ? — Oui, je le vois chaque semaine.", "en": "Do you know Marc? — Yes, I see him every week.", "zh": "你认识Marc吗？— 认识，我每周都见他。（直接宾语）"},
            {"fr": "J’ai appelé mes parents et je leur ai annoncé la nouvelle.", "en": "I called my parents and told them the news.", "zh": "我给父母打了电话并告诉了他们这个消息。（间接宾语）"},
            {"fr": "Ce document est prêt, je vais l’envoyer au directeur.", "en": "This document is ready, I’m going to send it to the director.", "zh": "这份文件准备好了，我这就发给主管。"},
            {"fr": "Elle m’a posé une question et je lui ai répondu.", "en": "She asked me a question and I answered her.", "zh": "她问了我一个问题，我回答了她。（répondre à）"}
        ],
        "quiz": [
            {"q": "« Tu as écrit à Sophie ? — Oui, je ___ ai écrit hier. »", "opts": ["la", "lui", "leur", "le"], "ans": 1, "exp": "« Écrire à quelqu’un » is indirect → « lui » (works for both him and her)."},
            {"q": "« Où sont les clés ? — Je ___ ai posées sur la table. »", "opts": ["leur", "lui", "les", "en"], "ans": 2, "exp": "« Poser quelque chose » is direct plural → « les »."}
        ]
    },
    {
        "id": "g_a2_7", "level": "A2", "code": "G-A2.7",
        "title": "Pronouns Y & EN + Comparatives (meilleur vs. mieux)",
        "duration": "6 min",
        "summary": "Decode y/en in fast speech and master adjectives vs. adverbs in comparisons.",
        "formula": "y = place / à + thing • en = de + thing / quantity • meilleur (better adj.) vs mieux (better adv.)",
        "bridgeEn": "English uses 'better' for both! French splits them: « meilleur(e) » modifies a NOUN (un meilleur salaire), « mieux » modifies a VERB (je parle mieux).",
        "bridgeZh": "高频必考区分：y 代替地点或 à+物（J’y vais 我去那儿）；en 代替数量或 de+物（J’en ai besoin 我需要它）。比较级里 meilleur 修饰名词（更好的工作），mieux 修饰动词（说得更好）！",
        "trap": "Never say « plus bon » (say « meilleur ») or « plus bien » (say « mieux »)!",
        "examples": [
            {"fr": "Tu vas souvent à la piscine ? — Oui, j’y vais deux fois par semaine.", "en": "Do you go to the pool often? — Yes, I go there twice a week.", "zh": "你常去游泳池吗？— 是的，我每周去两次。"},
            {"fr": "Des livres en français ? J’en lis un chaque mois.", "en": "French books? I read one of them every month.", "zh": "法语书吗？我每个月读一本。"},
            {"fr": "Grâce à la pratique quotidienne, je comprends mieux le français.", "en": "Thanks to daily practice, I understand French better.", "zh": "多亏每天练习，我法语听得更懂了。（mieux 修饰动词）"},
            {"fr": "Ce quartier offre une meilleure qualité de vie.", "en": "This neighborhood offers a better quality of life.", "zh": "这个街区提供更好的生活质量。（meilleure 修饰名词）"}
        ],
        "quiz": [
            {"q": "« Tu as besoin de ce livre ? — Oui, j’___ ai besoin. »", "opts": ["y", "le", "en", "lui"], "ans": 2, "exp": "« Avoir besoin DE » triggers « en »."},
            {"q": "Choose the right word: « Ce nouveau logiciel fonctionne ___ que l’ancien. »", "opts": ["meilleur", "meilleure", "mieux", "plus bien"], "ans": 2, "exp": "Modifying the verb « fonctionne » requires the adverb « mieux »."}
        ]
    },

    # ===================== B1 GRAMMAR (7) =====================
    {
        "id": "g_b1_1", "level": "B1", "code": "G-B1.1",
        "title": "Relative Pronouns: Qui, Que, Où, Dont",
        "duration": "6 min",
        "summary": "Link clauses cleanly like a B1/B2 writer and avoid the #1 English-speaker error with « dont ».",
        "formula": "qui (+ verb = subject) • que (+ subject = direct object) • où (place/time) • dont (replaces de + noun)",
        "bridgeEn": "Whenever the verb takes « de » (parler de, avoir besoin de, être fier de, dépendre de), you MUST use « dont »—never « que »!",
        "bridgeZh": "关系代词是把短句升级成 B1/B2 长难句的捷径：后接动词用 qui，后接主语用 que，表地点/时间用 où，只要动词搭配介词 de（parler de, avoir besoin de, s’occuper de）一律用 dont！",
        "trap": "« Le jour OÙ je suis arrivé » (time uses « où », NOT « que »!) and « Le projet DONT je suis fier » (fier DE → dont!).",
        "examples": [
            {"fr": "C’est une application qui aide à préparer le TCF.", "en": "It’s an app that helps prepare for the TCF.", "zh": "这是一款帮助备考 TCF 的应用。（qui + 动词）"},
            {"fr": "Le livre que je viens de lire est passionnant.", "en": "The book that I just read is fascinating.", "zh": "我刚读完的那本书很精彩。（que + 主语）"},
            {"fr": "Voici le sujet dont nous avons discuté hier.", "en": "Here is the topic that we discussed yesterday.", "zh": "这就是我们昨天讨论的话题。（discuter de → dont）"},
            {"fr": "Je me souviens du jour où j’ai reçu mon visa.", "en": "I remember the day when I received my visa.", "zh": "我记得收到签证的那一天。（时间用 où）"}
        ],
        "quiz": [
            {"q": "« C’est le poste ___ j’ai toujours rêvé. » (rêver DE)", "opts": ["que", "qui", "dont", "où"], "ans": 2, "exp": "« Rêver DE quelque chose » requires « dont »."},
            {"q": "« L’année ___ il a déménagé, il a trouvé un emploi. »", "opts": ["que", "qui", "dont", "où"], "ans": 3, "exp": "Time expressions (« le jour où, l’année où ») use « où »."}
        ]
    },
    {
        "id": "g_b1_2", "level": "B1", "code": "G-B1.2",
        "title": "Plus-que-parfait (The Past Before the Past)",
        "duration": "5 min",
        "summary": "Show clear chronological sequence in past narratives (TCF Listening & Writing Tâche 2).",
        "formula": "avoir / être in Imparfait (avais / étais...) + Past Participle",
        "bridgeEn": "Exact mirror of English Past Perfect ('had done / had left'): « Quand je suis arrivé, le train était déjà parti ».",
        "bridgeZh": "愈过去时就是英语的 had done（过去的过去）：用 avoir/être 的未完成过去时 + 过去分词。在叙述回忆或做阅读时间顺序推理题时非常关键！",
        "trap": "Don’t forget « être » agreement still applies: « Elle avait fini » (avoir) vs « Elle était déjà partie » (être + e).",
        "examples": [
            {"fr": "Quand je suis arrivé à la gare, le train était déjà parti.", "en": "When I arrived at the station, the train had already left.", "zh": "我到车站时，火车已经开走了。"},
            {"fr": "Elle a réussi facilement car elle avait beaucoup révisé.", "en": "She passed easily because she had studied a lot.", "zh": "她轻松通过了，因为她之前复习了很多。"},
            {"fr": "J’ai oublié le parapluie que j’avais acheté la veille.", "en": "I forgot the umbrella that I had bought the day before.", "zh": "我忘了前一天刚买的伞。"},
            {"fr": "Nous n’avions jamais vu autant de neige avant cet hiver.", "en": "We had never seen so much snow before this winter.", "zh": "在那个冬天之前，我们从未见过这么多雪。"}
        ],
        "quiz": [
            {"q": "Complete: « Il n’a pas pu entrer car il ___ (oublier) son badge. »", "opts": ["a oublié", "avait oublié", "oubliait", "oubliera"], "ans": 1, "exp": "Forgetting happened BEFORE not being able to enter → Plus-que-parfait (« avait oublié »)."},
            {"q": "Complete: « Quand nous sommes rentrés, nos amis ___ (partir) déjà. »", "opts": ["avaient parti", "étaient déjà partis", "sont partis", "partaient"], "ans": 1, "exp": "Partir takes être in Imparfait + plural agreement → « étaient déjà partis »."}
        ]
    },
    {
        "id": "g_b1_3", "level": "B1", "code": "G-B1.3",
        "title": "Conditionnel Présent (Politeness, Advice & Proposals)",
        "duration": "5 min",
        "summary": "Sound diplomatic and fluent in TCF Speaking Tâche 2 & 3 and formal emails.",
        "formula": "Future stem (voudr-, pourr-, devr-, ser-, aur-, faudr-) + Imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)",
        "bridgeEn": "Directly maps to English 'would / could / should': « Je voudrais » (I would like), « Vous devriez » (You should), « Il faudrait » (One should).",
        "bridgeZh": "条件式现在时 = 将来时词干 + 未完成过去时词尾。用法超清晰：1) 礼貌请求（Pourriez-vous...）；2) 提建议（Il faudrait / Vous devriez）；3) 未经证实的新闻转述（Le projet coûterait... 据称将花费……）。",
        "trap": "In TCF News/Press Listening, Conditionnel Présent signals UNCONFIRMED info (« La réforme entrerait en vigueur en juin » = reportedly would take effect, NOT confirmed!).",
        "examples": [
            {"fr": "Pourriez-vous me préciser les conditions d’inscription ?", "en": "Could you clarify the registration requirements for me?", "zh": "您能为我说明一下报名条件吗？"},
            {"fr": "À mon avis, la ville devrait développer davantage les bus de nuit.", "en": "In my opinion, the city should expand night buses more.", "zh": "在我看来，市政府应该大力发展夜班公交。"},
            {"fr": "Il faudrait sensibiliser les citoyens au tri des déchets.", "en": "We ought to raise citizens’ awareness of waste sorting.", "zh": "应当提高市民对垃圾分类的意识。"},
            {"fr": "Selon certaines sources, le tarif augmenterait dès septembre.", "en": "According to some sources, the fare would reportedly rise in September.", "zh": "据部分消息称，票价可能从九月起上涨。（表推测）"}
        ],
        "quiz": [
            {"q": "In a French news clip: « Le maire annoncerait sa démission demain. » What does the Conditionnel indicate?", "opts": ["It is 100% officially confirmed", "It is unconfirmed / rumored information", "It happened last week", "It is a polite request"], "ans": 1, "exp": "Journalistic conditional signals unconfirmed/reported claims — a classic B1/B2 TCF Listening distinction!"},
            {"q": "Which sentence politely asks for info in EO Tâche 2?", "opts": ["Donnez-moi les tarifs.", "Pourriez-vous m’indiquer les tarifs ?", "Vous indiquez les tarifs.", "Indiquerez-vous les tarifs ?"], "ans": 1, "exp": "« Pourriez-vous... ? » is the gold-standard polite question form."}
        ]
    },
    {
        "id": "g_b1_4", "level": "B1", "code": "G-B1.4",
        "title": "Si-Clauses: Real vs. Hypothetical Conditions",
        "duration": "5 min",
        "summary": "Build flawless cause-effect and hypothetical arguments for TCF Speaking & Writing.",
        "formula": "Type 1 (Likely): Si + Présent → Futur/Présent • Type 2 (Hypothetical): Si + Imparfait → Conditionnel Présent",
        "bridgeEn": "Just like English: NEVER put « will / would » (Futur / Conditionnel) directly after « Si »! (No « Si j’aurais » ✕!)",
        "bridgeZh": "牢记铁律：“Si 后面绝不接条件式或将来时”！可能发生的条件用 « Si + 现在时 → 将来时 »；虚拟假设（如果……就会……）用 « Si + 未完成过去时 → 条件式现在时 »。",
        "trap": "English speakers say 'If I would have' informally, which is strictly wrong in French: always « Si j’avais... je ferais ».",
        "examples": [
            {"fr": "Si tu révises trente minutes par jour, tu réussiras le TCF.", "en": "If you review 30 minutes a day, you will pass the TCF.", "zh": "如果你每天复习30分钟，你就会通过 TCF。"},
            {"fr": "Si les loyers baissaient, davantage de familles resteraient en ville.", "en": "If rents dropped, more families would stay in the city.", "zh": "如果房租下降，更多家庭会留在市区。"},
            {"fr": "Si j’avais le choix, je travaillerais en mode hybride.", "en": "If I had the choice, I would work in hybrid mode.", "zh": "如果有选择，我会采用混合办公模式。"},
            {"fr": "S’il fait beau dimanche, nous irons randonner au parc.", "en": "If the weather is nice Sunday, we’ll go hike at the park.", "zh": "如果周日天气好，我们就去公园徒步。（si + il → s’il）"}
        ],
        "quiz": [
            {"q": "Complete: « Si la ville ___ (investir) dans le tramway, il y aurait moins d’embouteillages. »", "opts": ["investit", "investissait", "investira", "investirait"], "ans": 1, "exp": "Main clause has Conditionnel (« il y aurait ») → Si-clause MUST be Imparfait (« investissait »)."},
            {"q": "Which contraction is correct?", "opts": ["S’elle vient", "S’il vient", "S’on vient", "Si il vient"], "ans": 1, "exp": "« Si » only elides before « il / ils » → « s’il / s’ils » (never « s’elle »!)."}
        ]
    },
    {
        "id": "g_b1_5", "level": "B1", "code": "G-B1.5",
        "title": "Cause & Consequence Connectors (grâce à, puisque, donc)",
        "duration": "6 min",
        "summary": "Express positive/negative causes and logical outcomes accurately in B1–B2 essays.",
        "formula": "Cause + Noun: grâce à (+) / à cause de (-) • Cause + Clause: parce que / puisque (known) / car (formal) • Result: donc / par conséquent / c’est pourquoi",
        "bridgeEn": "Upgrade from endless 'parce que' by using « puisque » (since — obvious/known fact), « en effet » (indeed — explaining a prior point), and « par conséquent » (consequently).",
        "bridgeZh": "写作文想拿 B1+/B2，少用单调的 parce que！正面原因+名词用 grâce à，负面原因+名词用 à cause de；显而易见的前提用 puisque（既然……）；引出结果用 par conséquent / c’est pourquoi / ainsi。",
        "trap": "« Car » can NEVER start a sentence! Use « Comme » or « Puisque » at the start of a sentence.",
        "examples": [
            {"fr": "Grâce au télétravail, les salariés gagnent un temps précieux.", "en": "Thanks to remote work, employees save precious time.", "zh": "多亏了远程办公，员工节省了宝贵时间。"},
            {"fr": "À cause de la tempête de neige, les écoles sont fermées.", "en": "Because of the snowstorm, schools are closed.", "zh": "由于暴风雪，学校停课了。"},
            {"fr": "Puisque les prix augmentent, les ménages réduisent leurs dépenses.", "en": "Since prices are rising, households are cutting spending.", "zh": "既然物价上涨，家庭都在缩减开支。"},
            {"fr": "Les candidatures explosent ; par conséquent, les délais s’allongent.", "en": "Applications are surging; consequently, processing times are lengthening.", "zh": "申请量激增；因此审批周期变长了。"}
        ],
        "quiz": [
            {"q": "Choose the right connector: « ___ la hausse des loyers, beaucoup quittent le centre-ville. »", "opts": ["Grâce à", "À cause de", "Parce que", "Car"], "ans": 1, "exp": "Negative cause followed by a noun phrase → « À cause de »."},
            {"q": "Which connector CANNOT begin a sentence?", "opts": ["Comme", "Puisque", "Car", "Grâce à"], "ans": 2, "exp": "« Car » only links two clauses inside a sentence; use « Comme » or « Puisque » to start one."}
        ]
    },
    {
        "id": "g_b1_6", "level": "B1", "code": "G-B1.6",
        "title": "Opposition & Contrast Connectors (malgré, pourtant, en revanche)",
        "duration": "6 min",
        "summary": "Build balanced, nuanced arguments—the #1 skill separating B1 from B2.",
        "formula": "malgré + NOUN • pourtant / cependant / toutefois (however/yet) • en revanche (on the other hand) • alors que / tandis que (whereas)",
        "bridgeEn": "Never write « malgré que »! Use « malgré + noun » (« malgré la pluie ») or « bien que + subjunctive clause » (« bien qu’il pleuve »).",
        "bridgeZh": "对比转折是 TCF 写作 Tâche 3 概括两份对立材料的核心武器！「第一份材料认为……，而第二份强调……」直接套用 « Alors que le premier texte..., le second... » 或 « En revanche »！",
        "trap": "« En revanche » is formal and polished (great for TCF!). Avoid overusing informal « par contre » in academic writing.",
        "examples": [
            {"fr": "Malgré le froid hivernal, la vie culturelle reste très dynamique.", "en": "Despite the winter cold, cultural life remains very vibrant.", "zh": "尽管冬日严寒，文化生活依然充满活力。"},
            {"fr": "Alors que certains prônent la voiture électrique, d’autres préfèrent le rail.", "en": "Whereas some advocate electric cars, others prefer rail.", "zh": "有些人倡导电动车，而另一些人更青睐铁路。"},
            {"fr": "Ce poste est exigeant ; en revanche, il est très formateur.", "en": "This role is demanding; on the other hand, it’s very rewarding to learn from.", "zh": "这个岗位要求高；但另一方面非常锻炼人。"},
            {"fr": "Il a peu d’expérience ; pourtant, il a convaincu tout le jury.", "en": "He has little experience; yet he convinced the entire panel.", "zh": "他经验不多；然而却说服了整个评审团。"}
        ],
        "quiz": [
            {"q": "Which sentence is grammatically accurate?", "opts": ["Malgré il pleut, je sors.", "Malgré la pluie, je sors.", "Malgré que la pluie, je sors.", "Bien que la pluie, je sors."], "ans": 1, "exp": "« Malgré » takes a noun phrase (« la pluie »); « Bien que » takes a verb clause."},
            {"q": "Which formal connector best replaces casual « par contre » in TCF Writing?", "opts": ["en revanche", "donc", "grâce à", "puisque"], "ans": 0, "exp": "« En revanche » is the polished formal equivalent of « par contre »."}
        ]
    },
    {
        "id": "g_b1_7", "level": "B1", "code": "G-B1.7",
        "title": "Passive Voice & Reported Speech (Press & Radio Essential)",
        "duration": "6 min",
        "summary": "Decode press headlines (être + participle) and indirect quotes in TCF Reading & Listening.",
        "formula": "Passive: être (any tense) + Participle (+ agreement) + par • Reported: Il a dit que + tense shift (Présent → Imparfait; Futur → Conditionnel)",
        "bridgeEn": "French uses passive much like English (« La loi a été votée par le Parlement »), OR prefers active « On » (« On a voté la loi »).",
        "bridgeZh": "新闻阅读与听力常考被动语态（être 变位 + 过去分词）和间接引语！当引出动词是过去时（Il a dit que / Elle a expliqué que），从句时态整体往后退一步：现在时→未完成过去时，将来时→条件式现在时。",
        "trap": "In TCF Reading, notice who performs the action in passive sentences: « Le cycliste a été renversé par une voiture » (the cyclist was hit, NOT the driver!).",
        "examples": [
            {"fr": "Une nouvelle ligne de métro sera inaugurée l’an prochain.", "en": "A new metro line will be inaugurated next year.", "zh": "一条新地铁线将于明年开通。（将来被动）"},
            {"fr": "Cette réforme a été adoptée malgré les critiques.", "en": "This reform was adopted despite the criticism.", "zh": "尽管遭到批评，这项改革还是通过了。（过去被动）"},
            {"fr": "Le directeur a expliqué que le projet prendrait plus de temps.", "en": "The director explained that the project would take more time.", "zh": "主管解释说这个项目将花更多时间。（间接引语）"},
            {"fr": "Elle m’a demandé si j’étais disponible jeudi matin.", "en": "She asked me whether I was available Thursday morning.", "zh": "她问我周四上午是否有空。"}
        ],
        "quiz": [
            {"q": "Convert to reported speech: Il a dit : « Je viendrai demain. » → « Il a dit qu’il ___ le lendemain. »", "opts": ["vient", "viendra", "viendrait", "est venu"], "ans": 2, "exp": "After past « a dit que », Futur Simple (« viendrai ») shifts to Conditionnel Présent (« viendrait »)."},
            {"q": "Complete passive agreement: « Les résultats ont été ___ (publier) ce matin. »", "opts": ["publié", "publiée", "publiés", "publiées"], "ans": 2, "exp": "« Les résultats » is masculine plural → « publiés »."}
        ]
    },

    # ===================== B2 / CLB 7 GRAMMAR (7) =====================
    {
        "id": "g_b2_1", "level": "B2", "code": "G-B2.1",
        "title": "Subjunctive Formation & The 7 Must-Know Irregulars",
        "duration": "6 min",
        "summary": "Build every regular subjunctive in 1 second and master the 7 high-frequency irregulars.",
        "formula": "Regular: ils-present stem + -e, -es, -e, -ions, -iez, -ent • Irregulars: être→soit, avoir→ait, faire→fasse, pouvoir→puisse, aller→aille, savoir→sache, vouloir→veuille",
        "bridgeEn": "Don’t overthink the subjunctive! Just master these 7 irregular forms + the regular pattern, and you’re set for 90% of B2 Speaking & Writing.",
        "bridgeZh": "虚拟式变位其实超简单：规则动词取 ils 现在时词干（如 ils finissent → finiss-）加 -e/-es/-e/-ions/-iez/-ent；再熟背 7 个高频不规则（soit, ait, fasse, puisse, aille, sache, veuille）就能通杀 B2！",
        "trap": "Note the « nous/vous » forms of être & avoir: « nous soyons / vous soyez », « nous ayons / vous ayez ».",
        "examples": [
            {"fr": "Il faut que nous fassions preuve de patience.", "en": "We must show patience.", "zh": "我们必须表现出耐心。（faire → fassions）"},
            {"fr": "Il est essentiel que chacun puisse s’exprimer librement.", "en": "It is essential that everyone be able to express themselves freely.", "zh": "每个人都能自由表达至关重要。（pouvoir → puisse）"},
            {"fr": "Bien que le défi soit immense, nous restons optimistes.", "en": "Although the challenge is huge, we remain optimistic.", "zh": "尽管挑战巨大，我们依然保持乐观。（être → soit）"},
            {"fr": "Je souhaite que vous ayez beaucoup de succès.", "en": "I hope you have great success.", "zh": "祝您取得巨大成功。（avoir → ayez）"}
        ],
        "quiz": [
            {"q": "Choose the Subjunctive of « pouvoir » for « ils »: « Il faut qu’ils ___ participer. »", "opts": ["peuvent", "pourront", "puissent", "pouvaient"], "ans": 2, "exp": "Pouvoir subjunctive stem is puiss- → « puissent »."},
            {"q": "Choose the Subjunctive of « faire » for « nous »: « Avant que nous ___ un choix... »", "opts": ["faisons", "fassions", "ferons", "faisions"], "ans": 1, "exp": "Faire subjunctive stem is fass- → « fassions »."}
        ]
    },
    {
        "id": "g_b2_2", "level": "B2", "code": "G-B2.2",
        "title": "Subjunctive Triggers: Necessity, Emotion & Negated Opinion",
        "duration": "6 min",
        "summary": "Know exactly WHEN to switch to subjunctive vs. indicative (the #1 B2 grammar discriminator).",
        "formula": "Indicative: Je pense que / Il est certain que • Subjunctive: Je ne pense pas que / Il faut que / Je regrette que / Il est dommage que",
        "bridgeEn": "Crucial B2 rule: affirmative « Je pense que / Je crois que » takes INDICATIVE, while negative « Je ne pense pas que / Je doute que » triggers SUBJUNCTIVE!",
        "bridgeZh": "TCF B2 必考黄金分水岭：肯定观点（Je pense que, Il est évident que）用直陈式；否定观点/怀疑/必要/情感（Je ne pense pas que, Il faut que, Je crains que, Il est regrettable que）立刻切到虚拟式！",
        "trap": "« Espérer que » (to hope that) takes the INDICATIVE (« J’espère qu’il viendra »), NOT the subjunctive!",
        "examples": [
            {"fr": "Je pense que cette loi est utile, mais je ne pense pas qu’elle soit suffisante.", "en": "I think this law is useful, but I don’t think it is sufficient.", "zh": "我认为这项法律有用，但不认为它足够。（肯定直陈 vs 否定虚拟！）"},
            {"fr": "Il est regrettable que les jeunes lisent moins aujourd’hui.", "en": "It is regrettable that young people read less today.", "zh": "令人遗憾的是如今年轻人阅读变少了。"},
            {"fr": "Je crains que ce budget ne soit pas à la hauteur.", "en": "I fear this budget may not measure up.", "zh": "我担心这笔预算不够用。"},
            {"fr": "J’espère que cette initiative portera ses fruits.", "en": "I hope this initiative will bear fruit.", "zh": "我希望这项举措能结出硕果。（espérer 用直陈将来时！）"}
        ],
        "quiz": [
            {"q": "Complete: « Je ne crois pas que le télétravail ___ (être) adapté à tous les métiers. »", "opts": ["est", "soit", "sera", "était"], "ans": 1, "exp": "Negated belief (« Je ne crois pas que ») expresses doubt → Subjunctive (« soit »)."},
            {"q": "Watch the exception! « J’espère que vous ___ (réussir) votre examen. »", "opts": ["réussirez", "réussissiez", "soyez réussi", "fassiez réussir"], "ans": 0, "exp": "« Espérer que » takes the indicative (future « réussirez » or present), NOT subjunctive!"}
        ]
    },
    {
        "id": "g_b2_3", "level": "B2", "code": "G-B2.3",
        "title": "Subjunctive Conjunctions (Bien que, Afin que, Avant que)",
        "duration": "6 min",
        "summary": "Deploy B2 conjunctions naturally in Writing Tâche 3 and Speaking Tâche 3.",
        "formula": "2 different subjects → bien que / afin que / pour que / avant que / sans que + SUBJ • Same subject → afin de / avant de / sans + INFINITIVE",
        "bridgeEn": "Avoid the #1 French learner mistake: if both clauses have the SAME subject, NEVER use « pour que / avant que »—use « pour / afin de / avant de + infinitive »!",
        "bridgeZh": "主语相同 vs 主语不同是 B2 高分关键：主语不同用 « pour que / afin que / avant que + 虚拟式 »（为了让孩子们……）；主语相同时必须简化成 « afin de / avant de + 动词原形 »！",
        "trap": "« Après que » (after — fact already happened) technically takes indicative, whereas « avant que » (before — not yet happened) takes subjunctive!",
        "examples": [
            {"fr": "Bien que cette mesure soit populaire, son coût inquiète.", "en": "Although this measure is popular, its cost raises concern.", "zh": "尽管这项措施很受欢迎，但其成本令人担忧。"},
            {"fr": "L’État subventionne les crèches afin que les parents puissent travailler.", "en": "The state subsidizes daycares so that parents can work.", "zh": "政府补贴托儿所，以便父母能安心工作。（不同主语 → afin que + 虚拟）"},
            {"fr": "Il faut agir avant qu’il ne soit trop tard.", "en": "We must act before it is too late.", "zh": "我们必须在为时已晚之前采取行动。"},
            {"fr": "On ne peut pas réformer l’école sans que les enseignants participent.", "en": "We cannot reform schools without teachers participating.", "zh": "没有教师的参与就无法改革学校。"}
        ],
        "quiz": [
            {"q": "Same subject! Choose the correct sentence:", "opts": ["Je révise pour que je réussisse.", "Je révise afin de réussir.", "Je révise afin que réussir.", "Je révise pour réussirai."], "ans": 1, "exp": "Same subject (je = je) → use « afin de / pour + infinitive » (« afin de réussir »)."},
            {"q": "Different subjects! « Les parents économisent ___ leurs enfants puissent étudier. »", "opts": ["afin de", "afin que", "malgré", "grâce à"], "ans": 1, "exp": "Different subjects (les parents vs leurs enfants) + subjunctive → « afin que »."}
        ]
    },
    {
        "id": "g_b2_4", "level": "B2", "code": "G-B2.4",
        "title": "Conditionnel Passé & Type 3 Si-Clauses (Regrets & Counterfactuals)",
        "duration": "6 min",
        "summary": "Express 'would have / should have' and past counterfactuals for B2 nuance.",
        "formula": "Conditionnel Passé: aurais / serais + Participle • Type 3: Si + Plus-que-parfait → Conditionnel Passé",
        "bridgeEn": "Exact parallel to English 'If I had known, I would have...' and 'We should have...' (« On aurait dû... »).",
        "bridgeZh": "过去条件式 = 英语的 would have / should have done！用来表达遗憾（J’aurais dû... 我本该……）或对过去未发生之事的假设（Si j’avais su, j’aurais agi autrement 如果我早知道，我当时就会采取不同做法）。",
        "trap": "« J’aurais aimé + infinitive » (I would have liked to) and « Il aurait fallu + infinitive » (We should have) sound remarkably idiomatic in EO Tâche 3!",
        "examples": [
            {"fr": "Si la ville avait anticipé cette croissance, elle aurait construit plus de logements.", "en": "If the city had anticipated this growth, it would have built more housing.", "zh": "如果市政府当初预见到这种增长，就会建更多住房。"},
            {"fr": "On aurait dû investir dans les énergies propres bien plus tôt.", "en": "We should have invested in clean energy much earlier.", "zh": "我们本应该更早投资清洁能源。"},
            {"fr": "Sans votre aide, je n’aurais jamais pu terminer à temps.", "en": "Without your help, I could never have finished on time.", "zh": "没有您的帮助，我绝不可能按时完成。"},
            {"fr": "J’aurais aimé commencer le français dès l’université.", "en": "I would have liked to start French back in university.", "zh": "我真希望大学时就开始学法语。"}
        ],
        "quiz": [
            {"q": "Complete: « Si j’avais connu cette règle, je n’___ (faire) cette erreur. »", "opts": ["ai pas fait", "ferais pas", "aurais pas fait", "avais pas fait"], "ans": 2, "exp": "Si + Plus-que-parfait pairs with Conditionnel Passé → « je n’aurais pas fait »."},
            {"q": "What does « Nous aurions dû réserver plus tôt » mean?", "opts": ["We must book later", "We should have booked earlier", "We will book earlier", "We already booked early"], "ans": 1, "exp": "« Aurions dû » = should have (past regret)."}
        ]
    },
    {
        "id": "g_b2_5", "level": "B2", "code": "G-B2.5",
        "title": "Gérondif (en + -ant) & Tout en (B2 Sentence Elegance)",
        "duration": "5 min",
        "summary": "Condense clunky clauses into crisp B2 sentences showing method, simultaneity, or contrast.",
        "formula": "en + nous-stem + -ant • tout en + -ant (while at the same time / even while contrasting)",
        "bridgeEn": "Translates 'by doing' (« en pratiquant ») or 'while doing' (« tout en réduisant les coûts »). Three irregulars: en étant, en ayant, en sachant.",
        "bridgeZh": "副动词（en + 动词现在分词）是把 B1 啰嗦句升级成 B2 干练学术句的神器！「通过……方式」用 en + -ant；「在……的同时兼顾……」用 tout en + -ant（写作 Tâche 3 必用加分句型！）。",
        "trap": "The subject of the gérondif MUST match the subject of the main verb!",
        "examples": [
            {"fr": "On améliore son écoute en écoutant des podcasts chaque matin.", "en": "You improve your listening by listening to podcasts every morning.", "zh": "每天早上听播客能提升听力。（方式）"},
            {"fr": "Cette réforme protège l’environnement tout en créant des emplois.", "en": "This reform protects the environment while creating jobs.", "zh": "这项改革在保护环境的同时创造了就业。（tout en 并行）"},
            {"fr": "En arrivant au Canada, j’ai découvert une culture très accueillante.", "en": "Upon arriving in Canada, I discovered a very welcoming culture.", "zh": "刚到加拿大时，我发现了一种非常友善的文化。（时间）"},
            {"fr": "Il soutient le projet tout en exprimant quelques réserves.", "en": "He supports the project while expressing a few reservations.", "zh": "他支持该项目，同时表达了若干保留意见。（转折）"}
        ],
        "quiz": [
            {"q": "Which phrase means « while reducing costs »?", "opts": ["tout en réduisant les coûts", "en réduire les coûts", "tout réduit les coûts", "à réduisant les coûts"], "ans": 0, "exp": "« Tout en » + present participle (-ant) = while (doing X at the same time)."},
            {"q": "What is the Gérondif of « savoir »?", "opts": ["en savant", "en sachant", "en su", "en saurant"], "ans": 1, "exp": "Savoir is one of the 3 irregular present participles → « en sachant »."}
        ]
    },
    {
        "id": "g_b2_6", "level": "B2", "code": "G-B2.6",
        "title": "Ce qui / Ce que / Ce dont & B2 Nominalization",
        "duration": "6 min",
        "summary": "Frame complex ideas ('What matters is...') and turn verbs into crisp B2 nouns.",
        "formula": "ce qui (+ verb) • ce que (+ subject) • ce dont (+ verb with de) • Nominalization: augmenter → la hausse / l’augmentation",
        "bridgeEn": "Nominalization is the secret to TCF Writing Tâche 3 synthesis! Reformulate « Les prix augmentent » → « La hausse des prix » without copying the prompt.",
        "bridgeZh": "TCF 写作 Tâche 3 严禁照抄两篇原材料的句子，名词化（Nominalization）是最稳的同义改写技巧：把动词变名词（fermer → la fermeture, polluer → la pollution, réduire → la réduction），再配合 « Ce qui compte, c’est... » 立刻自带 B2 学术范！",
        "trap": "Use « ce qui » when followed directly by a verb (« Ce qui m’inquiète, c’est... »), and « ce que » when followed by a subject (« Ce que je pense, c’est... »).",
        "examples": [
            {"fr": "Ce qui compte avant tout, c’est la qualité du service public.", "en": "What matters above all is the quality of public service.", "zh": "最重要的是公共服务的质量。（ce qui + 动词）"},
            {"fr": "Ce que les citoyens demandent, c’est plus de transparence.", "en": "What citizens are asking for is greater transparency.", "zh": "市民们要求的是更高的透明度。（ce que + 主语）"},
            {"fr": "Ce dont nous avons besoin, c’est d’une vision à long terme.", "en": "What we need is a long-term vision.", "zh": "我们需要的是长远眼光。（avoir besoin de → ce dont）"},
            {"fr": "La réduction du trafic entraîne une amélioration de la qualité de l’air.", "en": "The reduction in traffic leads to an improvement in air quality.", "zh": "交通流量的减少带来了空气质量的改善。（名词化）"}
        ],
        "quiz": [
            {"q": "Complete: « ___ me surprend le plus, c’est la rapidité de ce changement. »", "opts": ["Ce que", "Ce qui", "Ce dont", "Qu’est-ce qui"], "ans": 1, "exp": "Followed directly by the verb « me surprend » (subject) → « Ce qui »."},
            {"q": "Complete: « ___ je me souviens surtout, c’est de l’accueil chaleureux. » (se souvenir DE)", "opts": ["Ce qui", "Ce que", "Ce dont", "Dont"], "ans": 2, "exp": "« Se souvenir de » requires « Ce dont »."}
        ]
    },
    {
        "id": "g_b2_7", "level": "B2", "code": "G-B2.7",
        "title": "Nuance, Emphasis & Academic Discourse Framing (CLB 7 Seal)",
        "duration": "6 min",
        "summary": "Polish your B2 essays and speaking monologues with high-impact concession and emphasis.",
        "formula": "Concession: Certes... néanmoins • Reinforcement: d’autant plus que • Emphasis: C’est X qui/que • Recommendation: Il convient de",
        "bridgeEn": "Combining one concession (« Certes... toutefois »), one reinforcement (« d’autant plus que »), and one clean closing (« En somme, il convient de... ») reliably lifts EE/EO into CLB 7–8!",
        "bridgeZh": "冲刺 CLB 7/8 的点睛之笔：在议论文或口语 Tâche 3 里用上 « Certes... néanmoins »（诚然……然而）、« d’autant plus que »（更何况）和 « En somme, il convient de... »（总而言之，应当……），逻辑层次瞬间拉满！",
        "trap": "Don’t stuff 10 fancy connectors into 120 words—2 or 3 placed accurately with natural grammar beats forced templates every time.",
        "examples": [
            {"fr": "Certes, l’apprentissage en ligne est flexible ; néanmoins, il exige une grande discipline.", "en": "Admittedly online learning is flexible; nevertheless, it requires strong discipline.", "zh": "诚然在线学习很灵活；然而它需要极强的自律。"},
            {"fr": "Cette mesure est urgente, d’autant plus que la population vieillit.", "en": "This measure is urgent, all the more so since the population is aging.", "zh": "这项措施迫在眉睫，更何况人口正在老龄化。"},
            {"fr": "C’est grâce à la prévention que l’on réduira les coûts de santé.", "en": "It is through prevention that we will reduce healthcare costs.", "zh": "正是通过预防，我们才能降低医疗成本。（强调句）"},
            {"fr": "En somme, il convient de concilier innovation technologique et protection sociale.", "en": "In short, it is advisable to reconcile technological innovation with social protection.", "zh": "总而言之，应当兼顾技术创新与社会保障。"}
        ],
        "quiz": [
            {"q": "What does « d’autant plus que » mean in an argument?", "opts": ["even though", "all the more so since / especially because", "instead of", "before that"], "ans": 1, "exp": "« D’autant plus que » reinforces an argument with an even stronger reason."},
            {"q": "Which phrase best introduces a balanced B2 conclusion?", "opts": ["C’est fini.", "En somme, il convient de trouver un équilibre entre...", "Je pense oui.", "Merci beaucoup au revoir."], "ans": 1, "exp": "« En somme, il convient de... » is a crisp, natural B2 concluding frame."}
        ]
    }
]

if __name__ == "__main__":
    print(f"Loaded {len(GRAMMAR_SYLLABUS)} syllabus micro-lessons.")
    levels = {}
    ex_count = 0
    for g in GRAMMAR_SYLLABUS:
        levels[g["level"]] = levels.get(g["level"], 0) + 1
        ex_count += len(g["examples"])
    print("Breakdown:", levels, "Total examples:", ex_count)
