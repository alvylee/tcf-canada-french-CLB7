#!/usr/bin/env python3
"""
Professional CEFR Thematic Vocabulary Syllabus for TCF Canada (A1 -> B2 / CLB 7)
16 Bite-Sized Micro-Lessons (4 A1, 4 A2, 4 B1, 4 B2) tailored for a C1 English + Mandarin native.
Skips transparent cognates; focuses on gender-coded core terms, collocations, nominalization families,
Faux Amis traps, and TCF CO/CE synonym paraphrases.
"""

VOCAB_SYLLABUS = [
    # ===================== A1 VOCABULARY (4) =====================
    {
        "id": "vs_a1_1", "level": "A1", "code": "V-A1.1",
        "title": "Time, Schedules & Appointments",
        "duration": "5 min",
        "summary": "Decode opening hours, rescheduling notices, and relative time words heard in TCF CO Q1–Q10.",
        "bridgeNote": "Watch « la veille » (the day before) vs « le lendemain » (the next day)—they appear constantly in TCF stories and voicemails!",
        "bridgeZh": "高频时间易混词：la veille（前一天）vs le lendemain（第二天）；en avance（提前）vs en retard（迟到）vs à l’heure（准时）。",
        "words": [
            {"id": "vs_1", "fr": "Les horaires", "pos": "m.pl.", "pron": "lay zoh-rehr", "en": "Schedule / Opening hours", "zh": "时间表/营业时间"},
            {"id": "vs_2", "fr": "Un créneau", "pos": "m.", "pron": "un kray-noh", "en": "Time slot", "zh": "时间段/预约空档"},
            {"id": "vs_3", "fr": "La veille", "pos": "f.", "pron": "lah vehy", "en": "The day before", "zh": "前一天/前夕"},
            {"id": "vs_4", "fr": "Le lendemain", "pos": "m.", "pron": "luh lahn-duh-man", "en": "The next day", "zh": "第二天/次日"},
            {"id": "vs_5", "fr": "En avance", "pos": "expr.", "pron": "ahn ah-vahns", "en": "Early / Ahead of time", "zh": "提前"},
            {"id": "vs_6", "fr": "Dès (+ heure/date)", "pos": "prep.", "pron": "deh", "en": "Starting from / As early as", "zh": "自……起/一到……"}
        ],
        "collocations": [
            "prendre rendez-vous (to book an appointment)",
            "confirmer un créneau (to confirm a time slot)",
            "être à l’heure / en retard / en avance (on time / late / early)"
        ],
        "paraphrases": [
            {"a": "à partir de 8 h", "b": "dès 8 h (starting at 8 AM)"},
            {"a": "le jour suivant", "b": "le lendemain (the next day)"}
        ],
        "sentences": [
            {"fr": "Le cabinet ouvre dès huit heures trente et ferme à dix-huit heures.", "en": "The clinic opens starting at 8:30 AM and closes at 6:00 PM.", "zh": "诊所8点30分起开门，18点关门。"},
            {"fr": "J’ai reçu un rappel la veille de mon rendez-vous.", "en": "I received a reminder the day before my appointment.", "zh": "我在预约前一天收到了提醒。"}
        ],
        "quiz": [
            {"q": "Voicemail: « Nous avons un créneau libre jeudi à 15 h. » What is « un créneau »?", "opts": ["A parking spot", "An available time slot", "A discount", "A form"], "ans": 1, "exp": "« Un créneau » = a time slot (used for doctors, deliveries, interviews)."},
            {"q": "If the exam is on Friday, when is « la veille de l’examen »?", "opts": ["Thursday", "Saturday", "Friday night", "Monday"], "ans": 0, "exp": "« La veille » = the day before (Thursday); « le lendemain » = the day after (Saturday)."}
        ]
    },
    {
        "id": "vs_a1_2", "level": "A1", "code": "V-A1.2",
        "title": "Daily Errands, Shops & Customer Service",
        "duration": "5 min",
        "summary": "Navigate deliveries, receipts, counters, and public service notices effortlessly.",
        "bridgeNote": "Learn the gender pair: « le guichet » (service counter, m.) and « la caisse » (checkout register, f.).",
        "bridgeZh": "生活办事高频词：la caisse（收银台）、le guichet（服务窗口）、le colis（包裹）、la pièce d’identité（身份证件）、le reçu/la facture（收据/账单）。",
        "words": [
            {"id": "vs_7", "fr": "La caisse", "pos": "f.", "pron": "lah kess", "en": "Checkout / Cash register", "zh": "收银台"},
            {"id": "vs_8", "fr": "Le guichet", "pos": "m.", "pron": "luh gee-sheh", "en": "Ticket / Service counter", "zh": "服务窗口/售票口"},
            {"id": "vs_9", "fr": "La livraison", "pos": "f.", "pron": "lah lee-vreh-zohn", "en": "Delivery", "zh": "配送/送货"},
            {"id": "vs_10", "fr": "Une pièce d’identité", "pos": "f.", "pron": "oon pyess dee-dahn-tee-tay", "en": "Photo ID", "zh": "身份证件"},
            {"id": "vs_11", "fr": "La facture", "pos": "f.", "pron": "lah fahk-toor", "en": "Bill / Invoice", "zh": "账单/发票"},
            {"id": "vs_12", "fr": "Le remboursement", "pos": "m.", "pron": "luh rahn-boor-suh-mahn", "en": "Refund / Reimbursement", "zh": "退款/报销"}
        ],
        "collocations": [
            "passer à la caisse (to go to checkout)",
            "demander un remboursement (to request a refund)",
            "régler une facture (to pay a bill)"
        ],
        "paraphrases": [
            {"a": "payer la facture", "b": "régler la facture (settle the bill)"},
            {"a": "venir chercher son colis", "b": "récupérer son colis (pick up package)"}
        ],
        "sentences": [
            {"fr": "Pour récupérer votre colis au guichet, présentez une pièce d’identité.", "en": "To pick up your package at the counter, show a photo ID.", "zh": "在窗口取包裹时请出示身份证件。"},
            {"fr": "Vous avez trente jours pour demander un remboursement avec la facture.", "en": "You have 30 days to request a refund with the invoice.", "zh": "凭账单/小票可在30天内申请退款。"}
        ],
        "quiz": [
            {"q": "Notice: « Aucun remboursement sans facture. » What does this mean?", "opts": ["No delivery without ID", "No refund without a receipt/invoice", "Free shipping today", "Cash only at checkout"], "ans": 1, "exp": "« Remboursement » = refund; « facture » = invoice/receipt."},
            {"q": "What does « régler la facture » mean?", "opts": ["Cancel the bill", "Pay / settle the bill", "Lose the bill", "Send a complaint"], "ans": 1, "exp": "« Régler » is a common TCF synonym for « payer »."}
        ]
    },
    {
        "id": "vs_a1_3", "level": "A1", "code": "V-A1.3",
        "title": "Transport, Commuting & Disruptions",
        "duration": "5 min",
        "summary": "Catch transfers, strikes, traffic jams, and rerouting in station & radio bulletins.",
        "bridgeNote": "« Une correspondance » in transit means a TRANSFER/CONNECTION (not a letter!).",
        "bridgeZh": "交通听力高频词：la correspondance（换乘/转车）、la grève（罢工）、un embouteillage（堵车）、un aller-retour（往返票）、le trajet（路程/通勤）。",
        "words": [
            {"id": "vs_13", "fr": "La correspondance", "pos": "f.", "pron": "lah koh-rehs-pohn-dahns", "en": "Transit transfer / connection", "zh": "换乘/转车"},
            {"id": "vs_14", "fr": "La grève", "pos": "f.", "pron": "lah grehv", "en": "Strike (transit/labor)", "zh": "罢工"},
            {"id": "vs_15", "fr": "Un embouteillage", "pos": "m.", "pron": "un ahn-boo-teh-yahzh", "en": "Traffic jam", "zh": "堵车/交通拥堵"},
            {"id": "vs_16", "fr": "Le trajet", "pos": "m.", "pron": "luh trah-zheh", "en": "Commute / Journey / Route", "zh": "路程/通勤"},
            {"id": "vs_17", "fr": "Un aller-retour", "pos": "m.", "pron": "un ah-lay ruh-toor", "en": "Round-trip ticket", "zh": "往返票"},
            {"id": "vs_18", "fr": "Une déviation", "pos": "f.", "pron": "oon day-vyah-syohn", "en": "Detour / Rerouting", "zh": "绕行/改道"}
        ],
        "collocations": [
            "rater sa correspondance (to miss one’s connection)",
            "être coincé dans un embouteillage (to be stuck in traffic)",
            "en raison d’une grève (due to a strike)"
        ],
        "paraphrases": [
            {"a": "les bouchons", "b": "les embouteillages (traffic jams)"},
            {"a": "un train supprimé", "b": "un train annulé (canceled train)"}
        ],
        "sentences": [
            {"fr": "En raison d’une grève, les bus circulent avec vingt minutes de retard.", "en": "Due to a strike, buses are running 20 minutes late.", "zh": "由于罢工，公交车晚点20分钟运行。"},
            {"fr": "J’ai acheté un aller-retour pour Québec, sans correspondance.", "en": "I bought a round-trip ticket to Québec City, with no transfers.", "zh": "我买了一张去魁北克市的直达往返票。"}
        ],
        "quiz": [
            {"q": "Radio traffic report: « Évitez le pont, il y a d’importants bouchons. » What is « un bouchon »?", "opts": ["A detour", "A traffic jam", "A strike", "A free highway"], "ans": 1, "exp": "« Les bouchons » is the everyday synonym of « les embouteillages » (traffic jams)."},
            {"q": "« J’ai raté ma correspondance à Montréal. » What happened?", "opts": ["I lost my luggage", "I missed my connecting train/flight", "I bought a round-trip ticket", "I arrived early"], "ans": 1, "exp": "« Rater sa correspondance » = to miss one’s connection/transfer."}
        ]
    },
    {
        "id": "vs_a1_4", "level": "A1", "code": "V-A1.4",
        "title": "Action Verbs for Voicemails & Invitations",
        "duration": "5 min",
        "summary": "Master 6 high-frequency verbs that carry the exact answer in A1–A2 voicemails.",
        "bridgeNote": "Distinguish « prêter » (to lend) vs « emprunter » (to borrow), and « prévenir » (to notify/warn in advance) vs « empêcher » (to prevent).",
        "bridgeZh": "高频易混动词：prévenir（提前通知，不是英语的prevent！）、emprunter（借入）vs prêter（借出）、reporter（推迟改期）vs annuler（彻底取消）。",
        "words": [
            {"id": "vs_19", "fr": "Prévenir", "pos": "v.", "pron": "pray-vuh-neer", "en": "To notify / let know in advance", "zh": "提前通知/告知"},
            {"id": "vs_20", "fr": "Reporter", "pos": "v.", "pron": "ruh-pohr-tay", "en": "To postpone / reschedule", "zh": "推迟/改期"},
            {"id": "vs_21", "fr": "Emprunter", "pos": "v.", "pron": "ahn-prun-tay", "en": "To borrow (book/money)", "zh": "借入/借阅"},
            {"id": "vs_22", "fr": "Prêter", "pos": "v.", "pron": "preh-tay", "en": "To lend", "zh": "借出"},
            {"id": "vs_23", "fr": "Se dépêcher", "pos": "v.", "pron": "suh day-peh-shay", "en": "To hurry up", "zh": "赶快/抓紧"},
            {"id": "vs_24", "fr": "Empêcher", "pos": "v.", "pron": "ahn-peh-shay", "en": "To prevent / stop from", "zh": "阻止/妨碍"}
        ],
        "collocations": [
            "prévenir en cas d’absence (to notify in case of absence)",
            "emprunter un livre à la bibliothèque (to borrow a library book)",
            "reporter une réunion à lundi (to postpone a meeting to Monday)"
        ],
        "paraphrases": [
            {"a": "informer à l’avance", "b": "prévenir (notify ahead of time)"},
            {"a": "déplacer à une autre date", "b": "reporter (reschedule/postpone)"}
        ],
        "sentences": [
            {"fr": "Merci de nous prévenir vingt-quatre heures à l’avance si vous annulez.", "en": "Please notify us 24 hours in advance if you cancel.", "zh": "如需取消，请提前24小时通知我们。"},
            {"fr": "J’ai emprunté trois romans français à la bibliothèque municipale.", "en": "I borrowed three French novels from the public library.", "zh": "我在市立图书馆借了三本法语小说。"}
        ],
        "quiz": [
            {"q": "Watch the Faux Ami! « Préviens-moi quand tu arrives » means:", "opts": ["Prevent me from arriving", "Let me know when you arrive", "Wait for me when you arrive", "Postpone your arrival"], "ans": 1, "exp": "« Prévenir » = to inform/notify (to prevent = « empêcher »)."},
            {"q": "You take a book home from the library. Which verb fits?", "opts": ["prêter", "emprunter", "reporter", "empêcher"], "ans": 1, "exp": "« Emprunter » = to borrow; « prêter » = to lend."}
        ]
    },

    # ===================== A2 VOCABULARY (4) =====================
    {
        "id": "vs_a2_1", "level": "A2", "code": "V-A2.1",
        "title": "Housing, Leases & Moving In",
        "duration": "5 min",
        "summary": "Decode apartment ads, landlord emails, and tenant notices—a staple of TCF Canada Reading.",
        "bridgeNote": "In Québec, apartments are sized as 3 ½ (1 bedroom), 4 ½ (2 bedrooms), etc., where the ½ is the bathroom!",
        "bridgeZh": "加拿大租房必背词：le bail（租约）、le loyer（房租）、le locataire（租客）、le propriétaire（房东）、déménager（搬家）、meublé（带家具）。",
        "words": [
            {"id": "vs_25", "fr": "Le loyer", "pos": "m.", "pron": "luh lwah-yay", "en": "Monthly rent", "zh": "房租"},
            {"id": "vs_26", "fr": "Le bail", "pos": "m.", "pron": "luh bye", "en": "Lease contract (pl. baux)", "zh": "租房合同"},
            {"id": "vs_27", "fr": "Le locataire", "pos": "m./f.", "pron": "luh loh-kah-tehr", "en": "Tenant", "zh": "租客"},
            {"id": "vs_28", "fr": "Le propriétaire", "pos": "m./f.", "pron": "luh proh-pree-ay-tehr", "en": "Landlord / Owner", "zh": "房东/业主"},
            {"id": "vs_29", "fr": "Déménager", "pos": "v.", "pron": "day-may-nah-zhay", "en": "To move (out / house)", "zh": "搬家"},
            {"id": "vs_30", "fr": "Le chauffage", "pos": "m.", "pron": "luh shoh-fahzh", "en": "Heating", "zh": "暖气"}
        ],
        "collocations": [
            "signer / renouveler un bail (to sign / renew a lease)",
            "chauffage et eau chaude inclus (heating & hot water included)",
            "emménager dans un logement (to move into a unit)"
        ],
        "paraphrases": [
            {"a": "un appartement", "b": "un logement (housing unit)"},
            {"a": "tout compris", "b": "charges incluses (utilities included)"}
        ],
        "sentences": [
            {"fr": "Le propriétaire a augmenté le loyer lors du renouvellement du bail.", "en": "The landlord raised the rent when renewing the lease.", "zh": "续签租约时房东涨了房租。"},
            {"fr": "Nous déménageons le premier juillet dans un logement plus lumineux.", "en": "We are moving on July 1st into a brighter apartment.", "zh": "我们7月1日搬进一套采光更好的公寓。"}
        ],
        "quiz": [
            {"q": "Who pays « le loyer » every month?", "opts": ["Le propriétaire", "Le locataire", "Le bail", "Le chauffage"], "ans": 1, "exp": "« Le locataire » (tenant) pays rent to « le propriétaire » (landlord)."},
            {"q": "Notice: « Avis de renouvellement de bail ». What is this letter about?", "opts": ["A heating repair", "Renewing the apartment lease", "A moving truck", "A noise complaint"], "ans": 1, "exp": "« Renouvellement de bail » = lease renewal."}
        ]
    },
    {
        "id": "vs_a2_2", "level": "A2", "code": "V-A2.2",
        "title": "Health, Clinics & Well-Being",
        "duration": "5 min",
        "summary": "Understand clinic voicemails, pharmacy instructions, and health articles cleanly.",
        "bridgeNote": "« Une ordonnance » = medical prescription; « un arrêt de travail » = sick leave note from a doctor.",
        "bridgeZh": "看病医疗高频词：une ordonnance（医生处方）、la pharmacie（药房）、les symptômes（症状）、se rétablir（康复）、un arrêt de travail（病假条）。",
        "words": [
            {"id": "vs_31", "fr": "Une ordonnance", "pos": "f.", "pron": "oon ohr-doh-nahns", "en": "Doctor’s prescription", "zh": "处方"},
            {"id": "vs_32", "fr": "Un médicament", "pos": "m.", "pron": "un may-dee-kah-mahn", "en": "Medication / Medicine", "zh": "药物"},
            {"id": "vs_33", "fr": "Un arrêt de travail", "pos": "m.", "pron": "un ah-reh duh trah-vye", "en": "Medical sick leave", "zh": "病假/停工证明"},
            {"id": "vs_34", "fr": "La salle d’attente", "pos": "f.", "pron": "lah sahl dah-tahnt", "en": "Waiting room", "zh": "候诊室"},
            {"id": "vs_35", "fr": "Se rétablir", "pos": "v.", "pron": "suh ray-tah-bleer", "en": "To recover (from illness)", "zh": "康复/恢复健康"},
            {"id": "vs_36", "fr": "La prévention", "pos": "f.", "pron": "lah pray-vahn-syohn", "en": "Preventive healthcare", "zh": "预防保健"}
        ],
        "collocations": [
            "délivrer une ordonnance (to issue a prescription)",
            "prendre un médicament pendant cinq jours (take medicine for 5 days)",
            "souhaiter un prompt rétablissement (to wish a speedy recovery)"
        ],
        "paraphrases": [
            {"a": "aller mieux après une maladie", "b": "se rétablir (recover)"},
            {"a": "ne pas pouvoir travailler pour raison de santé", "b": "être en arrêt de travail (on sick leave)"}
        ],
        "sentences": [
            {"fr": "Ce médicament est vendu uniquement sur ordonnance à la pharmacie.", "en": "This medication is sold by prescription only at the pharmacy.", "zh": "这种药在药房仅凭处方出售。"},
            {"fr": "Mon collègue est en arrêt de travail, j’espère qu’il va vite se rétablir.", "en": "My colleague is on sick leave; I hope he recovers quickly.", "zh": "我同事在休病假，希望他早日康复。"}
        ],
        "quiz": [
            {"q": "What do you bring to the pharmacy to get restricted medication?", "opts": ["Une facture", "Une ordonnance", "Un bail", "Un créneau"], "ans": 1, "exp": "« Une ordonnance » = doctor’s prescription."},
            {"q": "Colleague says: « Je te souhaite un bon rétablissement ! » Why?", "opts": ["You got promoted", "You have been sick/injured", "You are moving house", "You passed an exam"], "ans": 1, "exp": "« Rétablissement » (from « se rétablir ») = recovery from illness."}
        ]
    },
    {
        "id": "vs_a2_3", "level": "A2", "code": "V-A2.3",
        "title": "Canadian & Québec Everyday Vocabulary",
        "duration": "5 min",
        "summary": "Instantly recognize Canadian French replacements for anglicisms on TCF Canada.",
        "bridgeNote": "Canada’s Office québécois de la langue française (OQLF) coined clean French words for tech & daily life—they show up regularly in TCF Canada!",
        "bridgeZh": "考 TCF Canada 必懂的加拿大本地法语词：courriel（邮件）、fin de semaine（周末）、stationnement（停车）、cellulaire（手机）、pourriel（垃圾邮件）、magasiner（购物）。",
        "words": [
            {"id": "vs_37", "fr": "Le courriel", "pos": "m.", "pron": "luh koor-yel", "en": "Email (courrier électronique)", "zh": "电子邮件"},
            {"id": "vs_38", "fr": "Le pourriel", "pos": "m.", "pron": "luh poor-yel", "en": "Spam email", "zh": "垃圾邮件"},
            {"id": "vs_39", "fr": "Le cellulaire", "pos": "m.", "pron": "luh seh-loo-lehr", "en": "Cell phone (FR: portable)", "zh": "手机（加）"},
            {"id": "vs_40", "fr": "La fin de semaine", "pos": "f.", "pron": "lah fan duh suh-men", "en": "Weekend (FR: week-end)", "zh": "周末（加）"},
            {"id": "vs_41", "fr": "Le stationnement", "pos": "m.", "pron": "luh stah-syohn-mahn", "en": "Parking lot / spot", "zh": "停车场"},
            {"id": "vs_42", "fr": "Magasiner", "pos": "v.", "pron": "mah-gah-zee-nay", "en": "To go shopping (FR: faire du shopping)", "zh": "逛街购物（加）"}
        ],
        "collocations": [
            "vérifier ses pourriels (to check your spam folder)",
            "trouver un stationnement gratuit (to find free parking)",
            "partir en chalet la fin de semaine (go to a cabin on the weekend)"
        ],
        "paraphrases": [
            {"a": "un e-mail / un mail", "b": "un courriel (email)"},
            {"a": "un téléphone portable", "b": "un cellulaire (cell phone)"}
        ],
        "sentences": [
            {"fr": "Si vous n’avez pas reçu notre courriel, vérifiez votre dossier de pourriels.", "en": "If you haven’t received our email, check your spam folder.", "zh": "如果没收到我们的邮件，请检查垃圾邮件箱。"},
            {"fr": "Le stationnement du centre commercial est complet toute la fin de semaine.", "en": "The mall parking lot is full all weekend.", "zh": "商场停车场整个周末都停满了。"}
        ],
        "quiz": [
            {"q": "What is « un pourriel » in Canadian French?", "opts": ["A rainy day", "A spam email", "A recycling bin", "A parking ticket"], "ans": 1, "exp": "« Pourriel » blends « poubelle » (trash) + « courriel » (email) = spam!"},
            {"q": "Which word is the Canadian French equivalent of « faire du shopping »?", "opts": ["déménager", "magasiner", "stationner", "patienter"], "ans": 1, "exp": "« Magasiner » (from « magasin ») = to shop."}
        ]
    },
    {
        "id": "vs_a2_4", "level": "A2", "code": "V-A2.4",
        "title": "Faux Amis Pack #1 (Daily English Traps)",
        "duration": "5 min",
        "summary": "Eliminate the 6 daily false friends that trick C1 English speakers on TCF A2–B1.",
        "bridgeNote": "Never trust look-alikes blindly! Memorize each Faux Ami paired with the TRUE French translation of the English word.",
        "bridgeZh": "英语C1最容易踩坑的第一批“假朋友”：actuellement=目前（不是actually），assister à=出席（不是协助），attendre=等待，rester=留下，librairie=书店，journée=白天！",
        "words": [
            {"id": "vs_43", "fr": "Actuellement", "pos": "adv.", "pron": "ahk-twee-ehl-mahn", "en": "Currently (actually = en fait)", "zh": "目前（≠事实上）"},
            {"id": "vs_44", "fr": "Assister à", "pos": "v.", "pron": "ah-sees-tay ah", "en": "To attend (assist = aider)", "zh": "出席/参加（≠协助）"},
            {"id": "vs_45", "fr": "Attendre", "pos": "v.", "pron": "ah-tahn-druh", "en": "To wait for (attend = assister à)", "zh": "等待（≠出席）"},
            {"id": "vs_46", "fr": "Rester", "pos": "v.", "pron": "rehs-tay", "en": "To stay (rest = se reposer)", "zh": "停留（≠休息）"},
            {"id": "vs_47", "fr": "La librairie", "pos": "f.", "pron": "lah lee-breh-ree", "en": "Bookstore (library = bibliothèque)", "zh": "书店（≠图书馆）"},
            {"id": "vs_48", "fr": "La journée", "pos": "f.", "pron": "lah zhoor-nay", "en": "Daytime / whole day (journey = voyage)", "zh": "一整天（≠旅行）"}
        ],
        "collocations": [
            "assister à un concert / une réunion (to attend a concert / meeting)",
            "passer la journée à la maison (to spend the day at home)",
            "rester deux semaines au Canada (to stay two weeks in Canada)"
        ],
        "paraphrases": [
            {"a": "en ce moment / aujourd’hui", "b": "actuellement (currently)"},
            {"a": "être présent à un événement", "b": "assister à un événement (attend)"}
        ],
        "sentences": [
            {"fr": "Actuellement, j’attends une réponse après avoir assisté à l’entretien.", "en": "Currently, I am waiting for a reply after attending the interview.", "zh": "目前我参加完面试后正在等回复。"},
            {"fr": "J’ai acheté ce dictionnaire à la librairie, puis je suis resté lire toute la journée.", "en": "I bought this dictionary at the bookstore, then stayed reading all day.", "zh": "我在书店买了这本词典，然后待着读了一整天。"}
        ],
        "quiz": [
            {"q": "« J’ai passé la journée à la librairie. » Where did the speaker spend the day?", "opts": ["On a long train journey", "At a bookstore", "At a public library", "At a hotel resting"], "ans": 1, "exp": "« La journée » = the day; « la librairie » = the bookstore."},
            {"q": "How do you say « Actually, I live in Ottawa » in French?", "opts": ["Actuellement, j’habite à Ottawa.", "En fait, j’habite à Ottawa.", "Éventuellement, j’habite à Ottawa.", "Finalement, j’habite à Ottawa."], "ans": 1, "exp": "« En fait » = actually/in fact; « actuellement » = currently."}
        ]
    },

    # ===================== B1 VOCABULARY (4) =====================
    {
        "id": "vs_b1_1", "level": "B1", "code": "V-B1.1",
        "title": "Work, Hiring & Workplace Culture",
        "duration": "6 min",
        "summary": "Core vocabulary for workplace dialogues, press briefs, and Speaking/Writing remote-work topics.",
        "bridgeNote": "Learn the pair: « un salarié / un employé » (employee) vs « un employeur / la direction » (employer / management).",
        "bridgeZh": "职场高频词（TCF口语和写作超爱考远程办公和职业发展）：le télétravail（远程办公）、un entretien d’embauche（求职面试）、un congé（假期）、un syndicat（工会）、la charge de travail（工作量）。",
        "words": [
            {"id": "vs_49", "fr": "Un entretien d’embauche", "pos": "m.", "pron": "un ahn-truh-tyan dahn-bohsh", "en": "Job interview", "zh": "求职面试"},
            {"id": "vs_50", "fr": "Le télétravail", "pos": "m.", "pron": "luh tay-lay-trah-vye", "en": "Remote work", "zh": "远程办公"},
            {"id": "vs_51", "fr": "Un salarié", "pos": "m.", "pron": "un sah-lah-ryay", "en": "Salaried employee / Worker", "zh": "受薪员工"},
            {"id": "vs_52", "fr": "Un syndicat", "pos": "m.", "pron": "un san-dee-kah", "en": "Labor union", "zh": "工会"},
            {"id": "vs_53", "fr": "Un congé", "pos": "m.", "pron": "un kohn-zhay", "en": "Leave / Paid time off", "zh": "休假/带薪假"},
            {"id": "vs_54", "fr": "La charge de travail", "pos": "f.", "pron": "lah shahrzh duh trah-vye", "en": "Workload", "zh": "工作量/工作负担"}
        ],
        "collocations": [
            "postuler à une offre d’emploi (to apply for a job)",
            "concilier vie professionnelle et vie personnelle (balance work & life)",
            "embaucher / licencier du personnel (to hire / lay off staff)"
        ],
        "paraphrases": [
            {"a": "recruter", "b": "embaucher (to hire)"},
            {"a": "travailler à distance", "b": "faire du télétravail (work remotely)"}
        ],
        "sentences": [
            {"fr": "Le télétravail aide de nombreux salariés à mieux concilier vie familiale et carrière.", "en": "Remote work helps many employees better balance family life and career.", "zh": "远程办公帮助许多员工更好地平衡家庭与事业。"},
            {"fr": "Les syndicats dénoncent une charge de travail excessive faute de recrutement.", "en": "Unions denounce an excessive workload due to lack of hiring.", "zh": "工会谴责因缺乏招聘导致工作量过大。"}
        ],
        "quiz": [
            {"q": "Which verb is a direct synonym of « recruter » in French job articles?", "opts": ["licencier", "embaucher", "démissionner", "reporter"], "ans": 1, "exp": "« Embaucher » = to hire (opposite: « licencier » = to lay off / fire)."},
            {"q": "What does « concilier vie professionnelle et vie personnelle » mean?", "opts": ["Quit one’s job", "Balance work and personal life", "Work overtime", "Sign a union contract"], "ans": 1, "exp": "« Concilier » = to reconcile/balance — a gold-standard B1/B2 phrase!"}
        ]
    },
    {
        "id": "vs_b1_2", "level": "B1", "code": "V-B1.2",
        "title": "Education, Training & Skills",
        "duration": "5 min",
        "summary": "Essential vocabulary for university, lifelong learning, and AI-in-education debates.",
        "bridgeNote": "Faux Ami alert inside this theme: « une formation » = training course/degree program; « un stage » = internship (NOT a theater stage!).",
        "bridgeZh": "教育与培训核心词：une formation（培训/课程项目）、un stage（实习，假朋友！）、une bourse（奖学金）、réussir à（成功做到）、échouer à（失败/挂科）、l’esprit critique（批判性思维）。",
        "words": [
            {"id": "vs_55", "fr": "Une formation", "pos": "f.", "pron": "oon fohr-mah-syohn", "en": "Training program / Course", "zh": "培训/专业进修"},
            {"id": "vs_56", "fr": "Un stage", "pos": "m.", "pron": "un stahzh", "en": "Internship / Workshop", "zh": "实习（≠舞台）"},
            {"id": "vs_57", "fr": "Une bourse", "pos": "f.", "pron": "oon boors", "en": "Scholarship / Grant", "zh": "奖学金/助学金"},
            {"id": "vs_58", "fr": "Un enseignant", "pos": "m.", "pron": "un ahn-seh-nyahn", "en": "Teacher / Educator", "zh": "教师"},
            {"id": "vs_59", "fr": "Échouer (à)", "pos": "v.", "pron": "ay-shway", "en": "To fail (an exam/attempt)", "zh": "失败/未通过"},
            {"id": "vs_60", "fr": "Acquérir des compétences", "pos": "expr.", "pron": "ah-kay-reer day kohn-pay-tahns", "en": "To acquire skills", "zh": "掌握/获得技能"}
        ],
        "collocations": [
            "suivre une formation continue (to take continuing education)",
            "développer son esprit critique (to develop critical thinking)",
            "réussir / échouer à un examen (to pass / fail an exam)"
        ],
        "paraphrases": [
            {"a": "les professeurs", "b": "les enseignants (teachers)"},
            {"a": "un apprenant / un élève", "b": "un étudiant (learner/student)"}
        ],
        "sentences": [
            {"fr": "Cette formation en ligne permet d’acquérir de nouvelles compétences tout en travaillant.", "en": "This online training lets you gain new skills while working.", "zh": "这项在线培训让你边工作边掌握新技能。"},
            {"fr": "Grâce à une bourse, elle a pu faire un stage rémunéré à Montréal.", "en": "Thanks to a scholarship, she was able to do a paid internship in Montreal.", "zh": "多亏了奖学金，她得以在蒙特利尔做带薪实习。"}
        ],
        "quiz": [
            {"q": "What is « un stage rémunéré »?", "opts": ["A theater performance", "A paid internship", "A scholarship", "A failed exam"], "ans": 1, "exp": "« Un stage » = internship; « rémunéré » = paid."},
            {"q": "What is the opposite of « réussir à un examen »?", "opts": ["assister à un examen", "échouer à un examen", "suivre un examen", "prêter un examen"], "ans": 1, "exp": "« Échouer à » = to fail."}
        ]
    },
    {
        "id": "vs_b1_3", "level": "B1", "code": "V-B1.3",
        "title": "High-Impact Collocations (Stop Translating Literally!)",
        "duration": "6 min",
        "summary": "6 verb-noun collocations that immediately make your Writing & Speaking sound natively French.",
        "bridgeNote": "English says 'make a decision / ask a question / pay attention'. French pairs completely different verbs: « prendre une décision / poser une question / faire attention »!",
        "bridgeZh": "告别中式/英式直译的高分固定搭配：做决定=prendre une décision（不用faire），提问题=poser une question（不用demander），省钱=faire des économies，考虑=tenir compte de，实施=mettre en place！",
        "words": [
            {"id": "vs_61", "fr": "Prendre une décision", "pos": "expr.", "pron": "prahn-droon day-see-zyohn", "en": "To make a decision", "zh": "做决定"},
            {"id": "vs_62", "fr": "Poser une question", "pos": "expr.", "pron": "poh-zay oon kes-tyohn", "en": "To ask a question", "zh": "提问题"},
            {"id": "vs_63", "fr": "Tenir compte de", "pos": "expr.", "pron": "tuh-neer kohnt duh", "en": "To take into account", "zh": "考虑到/顾及"},
            {"id": "vs_64", "fr": "Mettre en place", "pos": "expr.", "pron": "meh-trahn plahs", "en": "To set up / implement", "zh": "建立/推行实施"},
            {"id": "vs_65", "fr": "Jouer un rôle clé", "pos": "expr.", "pron": "zhway un rohl klay", "en": "To play a key role", "zh": "发挥关键作用"},
            {"id": "vs_66", "fr": "Faire face à", "pos": "expr.", "pron": "fehr fahs ah", "en": "To face / cope with (a challenge)", "zh": "面对/应对"}
        ],
        "collocations": [
            "mettre en place une réforme / des mesures (implement measures)",
            "tenir compte des besoins des citoyens (take citizens’ needs into account)",
            "faire face à la pénurie de logements (cope with the housing shortage)"
        ],
        "paraphrases": [
            {"a": "prendre en considération", "b": "tenir compte de (take into account)"},
            {"a": "instaurer / créer", "b": "mettre en place (put in place)"}
        ],
        "sentences": [
            {"fr": "Le gouvernement doit mettre en place des aides en tenant compte de l’inflation.", "en": "The government must put aid in place while taking inflation into account.", "zh": "政府必须结合通胀情况出台扶持措施。"},
            {"fr": "L’éducation joue un rôle clé pour faire face aux défis numériques.", "en": "Education plays a key role in facing digital challenges.", "zh": "教育在应对数字化挑战方面发挥着关键作用。"}
        ],
        "quiz": [
            {"q": "Which verb correctly completes « ___ une décision »?", "opts": ["faire", "prendre", "poser", "mettre"], "ans": 1, "exp": "Always « prendre une décision » (never « faire »!)."},
            {"q": "What does « mettre en place une politique » mean?", "opts": ["Cancel a policy", "Implement / establish a policy", "Criticize a policy", "Translate a policy"], "ans": 1, "exp": "« Mettre en place » = to set up / implement."}
        ]
    },
    {
        "id": "vs_b1_4", "level": "B1", "code": "V-B1.4",
        "title": "Faux Amis Pack #2 (B1–B2 Exam Traps)",
        "duration": "5 min",
        "summary": "Neutralize the 6 advanced false friends that derail B1–B2 Reading & Listening inference.",
        "bridgeNote": "These 6 words look 100% English but mean something dramatically different in French press articles!",
        "bridgeZh": "B1-B2 阅读和听力杀手级假朋友：éventuellement=或许（≠最终）、sensible=敏感（≠明智）、blesser=使受伤（≠祝福）、prétendre=声称（≠假装）、assumer=承担责任（≠假设）、décevoir=令失望（≠欺骗）！",
        "words": [
            {"id": "vs_67", "fr": "Éventuellement", "pos": "adv.", "pron": "ay-vahn-twee-ehl-mahn", "en": "Possibly / If needed (eventually = finalement)", "zh": "或许/可能（≠最终）"},
            {"id": "vs_68", "fr": "Sensible", "pos": "adj.", "pron": "sahn-see-bluh", "en": "Sensitive (sensible = raisonnable)", "zh": "敏感的（≠明智的）"},
            {"id": "vs_69", "fr": "Blesser", "pos": "v.", "pron": "bleh-say", "en": "To injure / hurt (bless = bénir)", "zh": "使受伤（≠祝福）"},
            {"id": "vs_70", "fr": "Prétendre", "pos": "v.", "pron": "pray-tahn-druh", "en": "To claim / assert (pretend = faire semblant)", "zh": "声称/主张（≠假装）"},
            {"id": "vs_71", "fr": "Assumer", "pos": "v.", "pron": "ah-soo-may", "en": "To take responsibility for (assume = supposer)", "zh": "承担责任（≠假设）"},
            {"id": "vs_72", "fr": "Décevoir", "pos": "v.", "pron": "day-suh-vwahr", "en": "To disappoint (deceive = tromper)", "zh": "令……失望（≠欺骗）"}
        ],
        "collocations": [
            "assumer ses responsabilités (to own up to one’s responsibilities)",
            "être déçu par les résultats (to be disappointed by the results)",
            "un sujet particulièrement sensible (a particularly sensitive topic)"
        ],
        "paraphrases": [
            {"a": "affirmer sans preuve", "b": "prétendre (claim)"},
            {"a": "être mécontent / frustré", "b": "être déçu (disappointed)"}
        ],
        "sentences": [
            {"fr": "Cet auteur prétend que la réforme a déçu une grande partie des électeurs.", "en": "This author claims that the reform disappointed a large share of voters.", "zh": "这位作者声称这项改革令很大一部分选民感到失望。"},
            {"fr": "Il doit assumer les conséquences de son choix sur ce dossier très sensible.", "en": "He must take responsibility for the consequences of his choice on this sensitive file.", "zh": "他必须就这一高度敏感的议题承担自身选择的后果。"}
        ],
        "quiz": [
            {"q": "« Le film m’a beaucoup déçu. » What is the speaker’s opinion of the movie?", "opts": ["It tricked me", "It really disappointed me", "It delighted me", "It injured me"], "ans": 1, "exp": "« Décevoir » (past participle « déçu ») = to disappoint, NOT deceive (« tromper »)."},
            {"q": "« L’entreprise prétend réduire ses émissions. » What does « prétend » imply?", "opts": ["It pretends secretly", "It claims / asserts (with possible skepticism)", "It refuses", "It succeeded"], "ans": 1, "exp": "« Prétendre » = to claim/assert (often signaling author skepticism in B2 articles!)."}
        ]
    },

    # ===================== B2 / CLB 7 VOCABULARY (4) =====================
    {
        "id": "vs_b2_1", "level": "B2", "code": "V-B2.1",
        "title": "Environment, Climate & Sustainable Cities",
        "duration": "6 min",
        "summary": "The #1 recurring societal topic on TCF Canada Reading, Listening, Writing & Speaking Tâche 3.",
        "bridgeNote": "Learn the nominalization pairs: « polluer → la pollution », « gaspiller → le gaspillage », « réchauffer → le réchauffement ».",
        "bridgeZh": "TCF B2 必考环保与城市话题词汇：le réchauffement climatique（气候变暖）、le gaspillage（浪费）、l’empreinte carbone（碳足迹）、les transports collectifs（公共交通）、la transition écologique（生态转型）。",
        "words": [
            {"id": "vs_73", "fr": "Le réchauffement climatique", "pos": "m.", "pron": "luh ray-shohf-mahn klee-mah-teek", "en": "Global warming", "zh": "气候变暖"},
            {"id": "vs_74", "fr": "Le gaspillage alimentaire", "pos": "m.", "pron": "luh gahs-pee-yahzh ah-lee-mahn-tehr", "en": "Food waste", "zh": "食物浪费"},
            {"id": "vs_75", "fr": "L’empreinte carbone", "pos": "f.", "pron": "lahn-prant kahr-bohn", "en": "Carbon footprint", "zh": "碳足迹"},
            {"id": "vs_76", "fr": "Les transports collectifs", "pos": "m.pl.", "pron": "lay trahn-spohr koh-lek-teef", "en": "Public transit", "zh": "公共交通"},
            {"id": "vs_77", "fr": "Les pistes cyclables", "pos": "f.pl.", "pron": "lay peest see-klah-bluh", "en": "Bike lanes", "zh": "自行车道"},
            {"id": "vs_78", "fr": "La transition écologique", "pos": "f.", "pron": "lah trahn-zee-syohn ay-koh-loh-zheek", "en": "Green / Ecological transition", "zh": "生态转型"}
        ],
        "collocations": [
            "lutter contre le réchauffement climatique (fight climate change)",
            "réduire son empreinte carbone (reduce one’s carbon footprint)",
            "sensibiliser le public au gaspillage (raise public awareness of waste)"
        ],
        "paraphrases": [
            {"a": "les transports en commun", "b": "les transports collectifs (public transit)"},
            {"a": "jeter de la nourriture", "b": "le gaspillage alimentaire (food waste)"}
        ],
        "sentences": [
            {"fr": "Développer les pistes cyclables et les transports collectifs réduit notre empreinte carbone.", "en": "Expanding bike lanes and public transit reduces our carbon footprint.", "zh": "发展自行车道和公共交通能减少我们的碳足迹。"},
            {"fr": "Il est essentiel de lutter contre le gaspillage alimentaire dès l’école.", "en": "It is essential to fight food waste starting at school.", "zh": "从学校阶段就着手反对食物浪费至关重要。"}
        ],
        "quiz": [
            {"q": "In a TCF article, « réduire son impact environnemental » best paraphrases:", "opts": ["augmenter le gaspillage", "diminuer son empreinte carbone", "interdire les pistes cyclables", "fermer les transports collectifs"], "ans": 1, "exp": "« Diminuer son empreinte carbone » = reduce one’s carbon footprint / environmental impact."},
            {"q": "Which verb naturally pairs with « le réchauffement climatique »?", "opts": ["lutter contre", "prêter", "assister", "emprunter"], "ans": 0, "exp": "« Lutter contre » (to fight against) is the standard B2 collocation."}
        ]
    },
    {
        "id": "vs_b2_2", "level": "B2", "code": "V-B2.2",
        "title": "Economy, Cost of Living & Public Policy",
        "duration": "6 min",
        "summary": "Decode economic news, housing-crisis debates, and budget discussions at B2/CLB 7.",
        "bridgeNote": "« Les ménages » in economics means HOUSEHOLDS (not housework « le ménage »!).",
        "bridgeZh": "经济与民生 B2 核心词：le pouvoir d’achat（购买力）、les ménages（家庭/住户）、une pénurie（短缺）、la flambée des prix（物价飙升）、une subvention（政府补贴）、les inégalités（不平等）。",
        "words": [
            {"id": "vs_79", "fr": "Le pouvoir d’achat", "pos": "m.", "pron": "luh poo-vwahr dah-shah", "en": "Purchasing power", "zh": "购买力"},
            {"id": "vs_80", "fr": "Les ménages", "pos": "m.pl.", "pron": "lay may-nahzh", "en": "Households (economic)", "zh": "家庭/住户"},
            {"id": "vs_81", "fr": "Une pénurie", "pos": "f.", "pron": "oon pay-noo-ree", "en": "Shortage (housing/labor)", "zh": "短缺/荒"},
            {"id": "vs_82", "fr": "La flambée des prix", "pos": "f.", "pron": "lah flahn-bay day pree", "en": "Surge / Skyrocketing of prices", "zh": "物价飙升"},
            {"id": "vs_83", "fr": "Une subvention", "pos": "f.", "pron": "oon soob-vahn-syohn", "en": "Subsidy / Public grant", "zh": "财政补贴"},
            {"id": "vs_84", "fr": "Les inégalités sociales", "pos": "f.pl.", "pron": "lay zee-nay-gah-lee-tay", "en": "Social inequalities", "zh": "社会不平等"}
        ],
        "collocations": [
            "peser sur le budget des ménages (weigh on household budgets)",
            "une pénurie de main-d’œuvre / de logements (labor / housing shortage)",
            "accorder des subventions aux petites entreprises (grant subsidies to SMEs)"
        ],
        "paraphrases": [
            {"a": "les tarifs ont fortement augmenté", "b": "la flambée des prix (price surge)"},
            {"a": "le manque de personnel", "b": "la pénurie de main-d’œuvre (labor shortage)"}
        ],
        "sentences": [
            {"fr": "La flambée des loyers pèse lourdement sur le pouvoir d’achat des ménages modestes.", "en": "Soaring rents weigh heavily on the purchasing power of modest households.", "zh": "飙升的房租沉重挤压了中低收入家庭的购买力。"},
            {"fr": "Pour remédier à la pénurie de logements, la province accorde de nouvelles subventions.", "en": "To remedy the housing shortage, the province is granting new subsidies.", "zh": "为缓解住房短缺，省政府发放了新的补贴。"}
        ],
        "quiz": [
            {"q": "What does « une pénurie de main-d’œuvre » mean in Canadian news?", "opts": ["A surplus of factories", "A labor / worker shortage", "A tax cut", "A holiday weekend"], "ans": 1, "exp": "« Pénurie » = shortage; « main-d’œuvre » = workforce/labor."},
            {"q": "In « Cette mesure aide les ménages modestes », who are « les ménages »?", "opts": ["Cleaning staff", "Households / families", "Landlords", "Managers"], "ans": 1, "exp": "Plural « les ménages » in economic/policy French means households."}
        ]
    },
    {
        "id": "vs_b2_3", "level": "B2", "code": "V-B2.3",
        "title": "Technology, AI & Media Literacy",
        "duration": "6 min",
        "summary": "Master the vocabulary behind TCF B2 essays & monologues on screens, AI, and social media.",
        "bridgeNote": "Pair nouns cleanly: « la vie privée » (privacy), « les données personnelles » (personal data), « la désinformation » (misinformation).",
        "bridgeZh": "科技、人工智能与媒体 B2 高频词：les réseaux sociaux（社交媒体）、la vie privée（隐私）、les données personnelles（个人数据）、la désinformation（虚假信息）、un outil（工具）、la dépendance aux écrans（屏幕成瘾）。",
        "words": [
            {"id": "vs_85", "fr": "Les réseaux sociaux", "pos": "m.pl.", "pron": "lay ray-zoh soh-syoh", "en": "Social media", "zh": "社交媒体"},
            {"id": "vs_86", "fr": "La vie privée", "pos": "f.", "pron": "lah vee pree-vay", "en": "Privacy / Private life", "zh": "隐私/私生活"},
            {"id": "vs_87", "fr": "Les données personnelles", "pos": "f.pl.", "pron": "lay doh-nay pehr-soh-nel", "en": "Personal data", "zh": "个人数据"},
            {"id": "vs_88", "fr": "La désinformation", "pos": "f.", "pron": "lah day-zan-fohr-mah-syohn", "en": "Misinformation / Fake news", "zh": "虚假信息"},
            {"id": "vs_89", "fr": "La dépendance aux écrans", "pos": "f.", "pron": "lah day-pahn-dahns oh zay-krahn", "en": "Screen addiction", "zh": "屏幕依赖/成瘾"},
            {"id": "vs_90", "fr": "Vérifier les sources", "pos": "expr.", "pron": "vay-ree-fyay lay soors", "en": "To fact-check / verify sources", "zh": "核实信息来源"}
        ],
        "collocations": [
            "protéger la vie privée et les données personnelles (protect privacy & data)",
            "lutter contre la désinformation en ligne (combat online misinformation)",
            "encadrer l’usage de l’intelligence artificielle (regulate AI use)"
        ],
        "paraphrases": [
            {"a": "réglementer / limiter", "b": "encadrer l’usage (regulate usage)"},
            {"a": "fausses nouvelles", "b": "la désinformation (misinformation)"}
        ],
        "sentences": [
            {"fr": "Bien que les réseaux sociaux facilitent l’échange, ils favorisent parfois la désinformation.", "en": "Although social media facilitates communication, it sometimes fuels misinformation.", "zh": "尽管社交媒体促进了交流，但有时也会助长虚假信息。"},
            {"fr": "Il convient d’encadrer l’intelligence artificielle afin de protéger nos données personnelles.", "en": "It is advisable to regulate artificial intelligence in order to protect our personal data.", "zh": "应当规范人工智能的使用以保护我们的个人数据。"}
        ],
        "quiz": [
            {"q": "What does « encadrer l’usage d’une technologie » mean?", "opts": ["Ban it completely", "Regulate / set clear rules for its use", "Sell it cheaply", "Ignore it"], "ans": 1, "exp": "« Encadrer » = to regulate / set a legal or ethical framework — super useful for nuanced B2 opinions!"},
            {"q": "Which phrase means « personal data »?", "opts": ["les faits divers", "les données personnelles", "les réseaux collectifs", "les pistes numériques"], "ans": 1, "exp": "« Les données personnelles » = personal data."}
        ]
    },
    {
        "id": "vs_b2_4", "level": "B2", "code": "V-B2.4",
        "title": "TCF Paraphrase, Tone & Academic Verbs (CLB 7 Gold)",
        "duration": "6 min",
        "summary": "Decode speaker attitude in CO/CE Q28–Q39 and elevate your EE/EO Tâche 3 vocabulary.",
        "bridgeNote": "These 6 verbs appear directly inside TCF Canada multiple-choice options (« L’auteur déplore / nuance / conteste / redoute... »)!",
        "bridgeZh": "冲刺 CLB 7/8 的题干态度词与学术动词：redouter（担心/畏惧）、déplorer（遗憾/痛惜）、nuancer（客观限定/辩证看）、contester（质疑/反驳）、s’avérer（结果证明是）、remédier à（补救/解决）。",
        "words": [
            {"id": "vs_91", "fr": "Redouter", "pos": "v.", "pron": "ruh-doo-tay", "en": "To fear / dread (NOT doubt!)", "zh": "担忧/畏惧"},
            {"id": "vs_92", "fr": "Déplorer", "pos": "v.", "pron": "day-ploh-ray", "en": "To regret / lament", "zh": "对……表示遗憾"},
            {"id": "vs_93", "fr": "Nuancer", "pos": "v.", "pron": "noo-ahn-say", "en": "To qualify / moderate a view", "zh": "辩证看待/加以限定"},
            {"id": "vs_94", "fr": "Contester", "pos": "v.", "pron": "kohn-tehs-tay", "en": "To challenge / dispute", "zh": "反驳/提出异议"},
            {"id": "vs_95", "fr": "S’avérer (+ adj.)", "pos": "v.", "pron": "sah-vay-ray", "en": "To turn out to be", "zh": "结果证明是"},
            {"id": "vs_96", "fr": "Remédier à", "pos": "v.", "pron": "ruh-may-dyay ah", "en": "To remedy / fix a problem", "zh": "解决/补救"}
        ],
        "collocations": [
            "s’avérer efficace / insuffisant (turn out to be effective / insufficient)",
            "remédier à une situation préoccupante (fix a concerning situation)",
            "nuancer un discours alarmiste (qualify an alarmist narrative)"
        ],
        "paraphrases": [
            {"a": "craindre / avoir peur de", "b": "redouter (to fear/dread)"},
            {"a": "regretter vivement", "b": "déplorer (to lament/regret)"}
        ],
        "sentences": [
            {"fr": "L’experte nuance cet enthousiasme et déplore le manque de financement durable.", "en": "The expert qualifies this enthusiasm and laments the lack of sustainable funding.", "zh": "专家对这种乐观态度持审慎立场，并对缺乏可持续资金表示遗憾。"},
            {"fr": "Cette solution s’est avérée efficace pour remédier aux retards chroniques.", "en": "This solution turned out to be effective for fixing chronic delays.", "zh": "事实证明该方案能有效解决长期延误问题。"}
        ],
        "quiz": [
            {"q": "TCF Option: « L’intervenant se montre sceptique et conteste l’étude. » What is he doing?", "opts": ["Praising the study", "Challenging / disputing the study", "Funding the study", "Summarizing the study happily"], "ans": 1, "exp": "« Contester » = to challenge/dispute; « sceptique » = doubtful."},
            {"q": "What does « Cette réforme s’avère insuffisante » mean?", "opts": ["This reform turns out to be insufficient", "This reform was never proposed", "This reform is completely sufficient", "This reform is finished"], "ans": 0, "exp": "« S’avérer + adj. » = to prove / turn out to be."}
        ]
    }
]

if __name__ == "__main__":
    w_count = sum(len(l["words"]) for l in VOCAB_SYLLABUS)
    s_count = sum(len(l["sentences"]) for l in VOCAB_SYLLABUS)
    print(f"Loaded {len(VOCAB_SYLLABUS)} vocab micro-lessons, {w_count} words, {s_count} context sentences.")
