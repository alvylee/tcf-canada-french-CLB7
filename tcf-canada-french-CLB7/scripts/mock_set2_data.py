#!/usr/bin/env python3
"""
TCF Canada Mock Exam Set 2: B1 -> B2+ (CLB 7 Sprint)
10 Listening (CO) + 10 Reading (CE) progressive B1-B2+ questions with nuanced inference,
paraphrases, speaker attitude, and Canadian/Francophone societal themes.
"""

MOCK_SET2 = {
    "co2": {
        "title": "CO Set 2 — B1 → B2+ (CLB 7 Sprint)",
        "durationSec": 12 * 60,
        "description": "10 high-yield B1–B2+ Listening items targeting CLB 7–8: radio interviews, implicit tone, concession traps, and Canadian announcements.",
        "questions": [
            {
                "id": "co2_1", "level": "B1", "weight": 3,
                "audio": "Chers usagers du métro, en raison d’un incident technique à la station Berri-UQAM, le service est temporairement interrompu sur la ligne verte. Des navettes d’autobus assurent la liaison entre les stations concernées.",
                "question": "Comment les voyageurs peuvent-ils poursuivre leur trajet ?",
                "options": [
                    "En attendant la reprise du métro demain matin",
                    "En prenant les bus de remplacement mis en place",
                    "En changeant pour la ligne orange uniquement",
                    "En achetant un nouveau billet au guichet"
                ],
                "ans": 1,
                "exp": "« Des navettes d’autobus assurent la liaison » = shuttle buses are providing the connection."
            },
            {
                "id": "co2_2", "level": "B1", "weight": 3,
                "audio": "Franchement, j’avais peur que le cours intensif soit trop théorique. Finalement, on passe presque tout le temps à débattre et à simuler des situations réelles. Je ne regrette pas du tout mon inscription.",
                "question": "Quel est le sentiment de cette personne à propos de son cours ?",
                "options": [
                    "Elle est déçue par le manque de pratique",
                    "Elle trouve le cours trop difficile et théorique",
                    "Elle est très satisfaite de l’approche pratique",
                    "Elle souhaite annuler son inscription"
                ],
                "ans": 2,
                "exp": "Initial fear (« j’avais peur que... ») contrasted with « Finalement... Je ne regrette pas du tout »."
            },
            {
                "id": "co2_3", "level": "B1", "weight": 3,
                "audio": "Bonjour, je vous appelle au sujet de votre demande de renouvellement de passeport. Votre formulaire est bien complet, mais la photo jointe ne respecte pas les nouvelles normes. Merci de nous en transmettre une autre d’ici vendredi.",
                "question": "Pourquoi le dossier est-il actuellement bloqué ?",
                "options": [
                    "Le formulaire n’a pas été signé",
                    "La photo fournie n’est pas conforme aux exigences",
                    "Le délai de vendredi est déjà dépassé",
                    "Le paiement n’a pas été reçu"
                ],
                "ans": 1,
                "exp": "« la photo jointe ne respecte pas les nouvelles normes » = the attached photo does not meet standards."
            },
            {
                "id": "co2_4", "level": "B1", "weight": 3,
                "audio": "Tu sais, depuis que la municipalité a rendu la rue principale piétonne l’été, certains commerçants redoutaient une baisse de leur chiffre d’affaires. Or, les terrasses ne désemplissent pas et les ventes ont augmenté de quinze pour cent.",
                "question": "Quel a été l’effet réel de la piétonnisation ?",
                "options": [
                    "Les ventes des commerçants ont chuté de 15 %",
                    "Les craintes initiales ne se sont pas confirmées : l’activité a progressé",
                    "Les habitants évitent désormais la rue principale",
                    "Les terrasses ont dû fermer"
                ],
                "ans": 1,
                "exp": "« Or » flips expectation: despite fearing a drop (« redoutaient »), sales rose 15 %."
            },
            {
                "id": "co2_5", "level": "B2", "weight": 4,
                "audio": "Journaliste : Les cours en ligne vont-ils remplacer les universités traditionnelles ? Professeure : Je n’irais pas jusque-là. Ils constituent un outil formidable pour les adultes en reconversion, mais rien ne remplace la richesse des échanges spontanés sur un campus.",
                "question": "Quelle est l’opinion de la professeure ?",
                "options": [
                    "Les universités physiques vont bientôt disparaître",
                    "Les cours en ligne sont inutiles pour les adultes",
                    "Le numérique est un bon complément, sans remplacer la vie de campus",
                    "Les étudiants ne discutent plus sur les campus"
                ],
                "ans": 2,
                "exp": "« Je n’irais pas jusque-là » (polite disagreement) + balanced view valuing both online flexibility and campus interaction."
            },
            {
                "id": "co2_6", "level": "B2", "weight": 4,
                "audio": "On nous répète que la voiture électrique résoudra la crise climatique. Encore faut-il regarder d’où provient l’électricité utilisée pour la recharger et l’impact écologique de la fabrication des batteries. La vraie priorité reste de réduire le nombre total de véhicules.",
                "question": "Que souligne cet intervenant ?",
                "options": [
                    "La voiture électrique est une solution parfaite et suffisante",
                    "Il faut nuancer son bilan écologique et privilégier moins de voitures",
                    "Les batteries n’ont aucun impact environnemental",
                    "L’électricité est toujours polluante au Canada"
                ],
                "ans": 1,
                "exp": "« Encore faut-il regarder... La vraie priorité reste de réduire le nombre total de véhicules »."
            },
            {
                "id": "co2_7", "level": "B2", "weight": 4,
                "audio": "Face à la pénurie de logements abordables, plusieurs élus proposent de plafonner strictement les loyers. Toutefois, certains économistes mettent en garde : sans construction de nouveaux immeubles, un simple blocage risque de décourager les investissements locatifs.",
                "question": "Quel risque évoquent certains économistes ?",
                "options": [
                    "Une baisse trop rapide de la population",
                    "Un frein à l’investissement locatif si l’on ne construit pas davantage",
                    "Une hausse immédiate des salaires dans le bâtiment",
                    "La disparition des élus municipaux"
                ],
                "ans": 1,
                "exp": "« mettent en garde » (warn): capping rent alone without new supply may discourage rental investment."
            },
            {
                "id": "co2_8", "level": "B2", "weight": 4,
                "audio": "Ce qui m’inquiète le plus avec les algorithmes de recommandation, ce n’est pas le temps passé devant l’écran, c’est qu’ils nous enferment dans des bulles d’opinion où chacun n’entend plus que l’écho de ses propres convictions.",
                "question": "Quel danger principal dénonce la personne ?",
                "options": [
                    "Le coût élevé des abonnements Internet",
                    "L’isolement intellectuel dans des opinions déjà partagées",
                    "La lenteur des algorithmes actuels",
                    "Le manque de vidéos divertissantes"
                ],
                "ans": 1,
                "exp": "« nous enferment dans des bulles d’opinion » = echo chambers / intellectual isolation."
            },
            {
                "id": "co2_9", "level": "B2", "weight": 5,
                "audio": "L’entreprise a annoncé en grande pompe une charte sur le droit à la déconnexion. Pourtant, dans les faits, les cadres continuent de recevoir des courriels urgents le dimanche soir. Faute de changement culturel au sommet, cette charte reste lettre morte.",
                "question": "Que signifie « cette charte reste lettre morte » dans ce contexte ?",
                "options": [
                    "La charte a radicalement transformé l’entreprise",
                    "La charte n’est pas réellement appliquée sur le terrain",
                    "La charte interdit définitivement les courriels en semaine",
                    "Les cadres refusent de lire la charte"
                ],
                "ans": 1,
                "exp": "« Rester lettre morte » is a classic B2/C1 idiom meaning a rule exists on paper but is never enforced in practice."
            },
            {
                "id": "co2_10", "level": "B2", "weight": 5,
                "audio": "Bien que les festivals attirent des milliers de touristes chaque été, les résidents du centre-ville déplorent la hausse du bruit et des loyers de courte durée. Il convient donc d’encadrer l’hébergement touristique afin que le dynamisme culturel ne se fasse pas au détriment des habitants.",
                "question": "Quelle mesure l’auteur recommande-t-il ?",
                "options": [
                    "Supprimer tous les festivals d’été",
                    "Réglementer les locations touristiques pour protéger les résidents",
                    "Interdire aux résidents de vivre au centre-ville",
                    "Augmenter le prix des billets de concert"
                ],
                "ans": 1,
                "exp": "« encadrer l’hébergement touristique » = regulate short-term tourist rentals so residents aren’t harmed."
            }
        ]
    },
    "ce2": {
        "title": "CE Set 2 — B1 → B2+ (CLB 7 Sprint)",
        "durationSec": 15 * 60,
        "description": "10 B1–B2+ Reading items focused on TCF paraphrases, implicit meaning, tone verbs, and Canadian societal press.",
        "questions": [
            {
                "id": "ce2_1", "level": "B1", "weight": 3,
                "passage": "AVIS MUNICIPAL — Afin de lutter contre le gaspillage d’eau potable, l’arrosage des pelouses est désormais autorisé uniquement les mardis et jeudis entre 20 h et 22 h. Tout contrevenant s’expose à une amende pouvant atteindre 150 dollars.",
                "question": "Dans quel cas un résident risque-t-il une amende ?",
                "options": [
                    "S’il arrose sa pelouse mardi à 21 h",
                    "S’il arrose sa pelouse samedi matin à 9 h",
                    "S’il n’arrose jamais son jardin",
                    "S’il boit de l’eau potable"
                ],
                "ans": 1,
                "exp": "Watering is ONLY allowed Tuesday & Thursday 8–10 PM, so Saturday at 9 AM risks a fine (« amende »)."
            },
            {
                "id": "ce2_2", "level": "B1", "weight": 3,
                "passage": "De nombreux travailleurs qualifiés choisissent aujourd’hui de s’installer dans des villes moyennes plutôt que dans les métropoles. Ils mettent en avant non seulement un coût du logement plus raisonnable, mais aussi des trajets quotidiens nettement plus courts.",
                "question": "Quelles sont les deux raisons principales de ce choix ?",
                "options": [
                    "Des salaires doublés et plus de musées",
                    "Des logements plus abordables et moins de temps de transport",
                    "L’obligation imposée par leur employeur",
                    "Un climat plus chaud toute l’année"
                ],
                "ans": 1,
                "exp": "« coût du logement plus raisonnable » + « trajets quotidiens nettement plus courts »."
            },
            {
                "id": "ce2_3", "level": "B1", "weight": 3,
                "passage": "Contrairement à une idée reçue, apprendre une langue étrangère après quarante ans ne présente pas que des obstacles : les apprenants adultes disposent souvent d’une meilleure discipline méthodologique et d’une motivation plus claire que les adolescents.",
                "question": "Quel cliché l’auteur remet-il en cause ?",
                "options": [
                    "Que les adolescents sont toujours disciplinés",
                    "Qu’il serait uniquement désavantageux d’apprendre une langue après 40 ans",
                    "Que la motivation est inutile pour progresser",
                    "Que les méthodes d’apprentissage ont disparu"
                ],
                "ans": 1,
                "exp": "« Contrairement à une idée reçue » (contrary to popular belief) challenges the myth that adult learning only has drawbacks."
            },
            {
                "id": "ce2_4", "level": "B1", "weight": 3,
                "passage": "L’hôpital régional lance un programme de téléconsultation afin de désengorger les urgences. Toutefois, le dispositif est réservé aux symptômes bénins et ne remplace en aucun cas un examen physique pour les situations graves.",
                "question": "À qui s’adresse ce service de téléconsultation ?",
                "options": [
                    "Aux cas d’urgence vitale uniquement",
                    "Aux patients présentant des problèmes de santé légers",
                    "Aux médecins souhaitant fermer l’hôpital",
                    "À personne sans ordonnance préalable"
                ],
                "ans": 1,
                "exp": "« symptômes bénins » = mild/minor symptoms (not serious emergencies)."
            },
            {
                "id": "ce2_5", "level": "B2", "weight": 4,
                "passage": "Si la numérisation complète des services administratifs simplifie la vie de la majorité des usagers, elle creuse silencieusement une fracture pour les personnes âgées ou peu équipées. Maintenir un accueil humain au guichet s’avère donc indispensable.",
                "question": "Que défend l’auteur de cet extrait ?",
                "options": [
                    "L’abandon total des démarches en ligne",
                    "Le maintien de services en personne en parallèle du numérique",
                    "L’achat obligatoire d’ordinateurs pour tous les seniors",
                    "La fermeture des guichets municipaux"
                ],
                "ans": 1,
                "exp": "Acknowledges digital benefits (« Si... simplifie ») then argues keeping human counter service is essential to avoid excluding seniors."
            },
            {
                "id": "ce2_6", "level": "B2", "weight": 4,
                "passage": "Les programmes de fidélité des supermarchés promettent des économies substantielles. Or, une étude de consommateurs révèle que les détenteurs de ces cartes dépensent en moyenne davantage, incités par des promotions ciblées sur des produits superflus.",
                "question": "Quel paradoxe met en lumière cette étude ?",
                "options": [
                    "Les cartes de fidélité sont devenues payantes",
                    "Les clients censés économiser finissent souvent par dépenser plus",
                    "Les supermarchés n’offrent plus aucune promotion",
                    "Les consommateurs refusent les produits essentiels"
                ],
                "ans": 1,
                "exp": "Cards promise savings, yet (« Or ») cardholders spend more due to targeted promos on unnecessary items (« superflus »)."
            },
            {
                "id": "ce2_7", "level": "B2", "weight": 4,
                "passage": "À force de vouloir optimiser chaque minute de notre temps libre grâce à des applications de productivité, nous risquons de transformer le repos lui-même en performance. Or, l’ennui et la flânerie jouent un rôle méconnu dans la créativité.",
                "question": "Quelle critique formule l’auteur ?",
                "options": [
                    "Les applications mobiles manquent de fonctionnalités",
                    "L’obsession de la productivité nuit au repos véritable et à la créativité",
                    "Les gens s’ennuient trop souvent aujourd’hui",
                    "La créativité dépend uniquement de la discipline stricte"
                ],
                "ans": 1,
                "exp": "Turning rest into performance kills boredom/wandering (« l’ennui et la flânerie »), which fuel creativity."
            },
            {
                "id": "ce2_8", "level": "B2", "weight": 4,
                "passage": "Plusieurs universités canadiennes exigent désormais des étudiants qu’ils expliquent leur démarche de recherche plutôt que de remettre un simple texte final. Cette évolution vise moins à sanctionner l’usage de l’IA qu’à vérifier la compréhension réelle du sujet.",
                "question": "Quel est l’objectif principal de cette nouvelle pratique universitaire ?",
                "options": [
                    "Punir sévèrement tout étudiant utilisant un ordinateur",
                    "Évaluer la véritable maîtrise intellectuelle et le processus de réflexion",
                    "Supprimer tous les travaux écrits",
                    "Réduire le temps de correction des enseignants"
                ],
                "ans": 1,
                "exp": "« vise moins à sanctionner... qu’à vérifier la compréhension réelle » = aims to assess real understanding rather than merely punish AI."
            },
            {
                "id": "ce2_9", "level": "B2", "weight": 5,
                "passage": "On accuse volontiers les jeunes générations d’être moins engagées dans la vie civique parce qu’elles votent moins. Pourtant, leur mobilisation sur les enjeux climatiques, le bénévolat associatif et les pétitions numériques témoigne moins d’une indifférence que d’une mutation des formes d’engagement.",
                "question": "Comment l’auteur interprète-t-il l’attitude civique des jeunes ?",
                "options": [
                    "Ils sont devenus totalement indifférents à la société",
                    "Ils s’engagent autrement plutôt que de se désintéresser",
                    "Ils votent plus que leurs parents",
                    "Ils rejettent le bénévolat associatif"
                ],
                "ans": 1,
                "exp": "« moins d’une indifférence que d’une mutation des formes d’engagement » = evolving forms of engagement, not apathy."
            },
            {
                "id": "ce2_10", "level": "B2", "weight": 5,
                "passage": "Rendre l’information scientifique accessible au grand public est un défi délicat : trop technique, elle décourage le lecteur ; trop simplifiée, elle perd toute nuance et alimente les malentendus. Tout l’art de la vulgarisation consiste à trouver cette ligne de crête.",
                "question": "Selon l’auteur, quelle est la principale difficulté de la vulgarisation scientifique ?",
                "options": [
                    "Les scientifiques refusent de parler aux médias",
                    "Trouver le juste équilibre entre clarté et rigueur sans déformer les faits",
                    "Le grand public ne s’intéresse pas à la science",
                    "Utiliser un vocabulaire toujours plus complexe"
                ],
                "ans": 1,
                "exp": "« trouver cette ligne de crête » = balancing accessibility (avoiding jargon) with accuracy/nuance (avoiding oversimplification)."
            }
        ]
    }
}
