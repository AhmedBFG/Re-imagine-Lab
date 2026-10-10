/* =====================================================================
   RE-IMAGINE – FabLab Solidaire
   CONTENT FILE: this is the ONLY file you need to edit to change text,
   machines, projects, partners or contact details.

   - TEXT  : every sentence of the site, French (fr) and English (en)
             side by side. Keep the key names, change only the values.
   - DATA  : lists rendered automatically (services, machines, projects,
             partners, contact info, form settings).

   Tip: a value like "[CNC MODEL]" is a placeholder still to fill in.
   ===================================================================== */

const DEFAULT_LANG = "fr";

/* ---------------------------------------------------------------------
   1. TEXT (translations)
   --------------------------------------------------------------------- */
const TEXT = {
  /* ----- SEO: page titles and meta descriptions ----- */
  "meta.home.title": { fr: "Re-Imagine – FabLab Solidaire | ENISO Sousse", en: "Re-Imagine – FabLab Solidaire | ENISO Sousse" },
  "meta.home.desc": {
    fr: "FabLab ouvert à tous à l'ENISO, Sousse : découpe laser, impression 3D, CNC, réalité virtuelle et accompagnement de projets. Demandez votre devis.",
    en: "A FabLab open to everyone at ENISO, Sousse: laser cutting, 3D printing, CNC, virtual reality and project support. Request your quote.",
  },
  "meta.about.title": { fr: "À propos | Re-Imagine FabLab Solidaire", en: "About | Re-Imagine FabLab Solidaire" },
  "meta.about.desc": {
    fr: "Re-Imagine est un FabLab solidaire à l'ENISO, né d'une collaboration entre Orange et JEENISo. Découvrez notre mission et notre fonctionnement.",
    en: "Re-Imagine is a FabLab Solidaire at ENISO, born from a collaboration between Orange and JEENISo. Discover our mission and how it works.",
  },
  "meta.services.title": { fr: "Services | Re-Imagine FabLab Solidaire", en: "Services | Re-Imagine FabLab Solidaire" },
  "meta.services.desc": {
    fr: "Conception mécanique, conception électronique, développement web et mobile, prototypage : on vous accompagne de l'idée à l'objet.",
    en: "Mechanical design, electronic design, web and mobile development, prototyping: we help you go from idea to object.",
  },
  "meta.equipment.title": { fr: "Équipements | Re-Imagine FabLab Solidaire", en: "Equipment | Re-Imagine FabLab Solidaire" },
  "meta.equipment.desc": {
    fr: "Découpeuse laser CO2, imprimante 3D Creality CR-5 Pro, machine CNC et casques Meta Quest 2 disponibles au FabLab Re-Imagine.",
    en: "CO2 laser cutter, Creality CR-5 Pro 3D printer, CNC machine and Meta Quest 2 headsets available at the Re-Imagine FabLab.",
  },
  "meta.projects.title": { fr: "Réalisations | Re-Imagine FabLab Solidaire", en: "Projects | Re-Imagine FabLab Solidaire" },
  "meta.projects.desc": {
    fr: "Découvrez des projets réalisés pour des entreprises : carte électronique de variateur pour PLASTIFILM, imprimante 3D Prusa i3 pour FACTOORYA.",
    en: "See projects made for companies: a motor drive electronic board for PLASTIFILM and a Prusa i3 3D printer for FACTOORYA.",
  },
  "meta.quote.title": { fr: "Demander un devis | Re-Imagine FabLab Solidaire", en: "Request a quote | Re-Imagine FabLab Solidaire" },
  "meta.quote.desc": {
    fr: "Décrivez votre projet et recevez un devis personnalisé. Tarif spécial pour les étudiants de l'ENISO.",
    en: "Describe your project and get a personalised quote. Special rate for ENISO students.",
  },
  "meta.contact.title": { fr: "Contact | Re-Imagine FabLab Solidaire", en: "Contact | Re-Imagine FabLab Solidaire" },
  "meta.contact.desc": {
    fr: "Contactez le FabLab Re-Imagine à l'ENISO, Sousse : WhatsApp, téléphone, e-mail, réseaux sociaux et plan d'accès.",
    en: "Contact the Re-Imagine FabLab at ENISO, Sousse: WhatsApp, phone, email, social media and map.",
  },

  /* ----- Header / navigation ----- */
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.about": { fr: "À propos", en: "About" },
  "nav.services": { fr: "Services", en: "Services" },
  "nav.equipment": { fr: "Équipements", en: "Equipment" },
  "nav.projects": { fr: "Réalisations", en: "Projects" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.menu": { fr: "Menu", en: "Menu" },
  "nav.skip": { fr: "Aller au contenu", en: "Skip to content" },
  "nav.lang": { fr: "Choisir la langue", en: "Choose language" },
  "nav.homeLink": { fr: "Re-Imagine, retour à l'accueil", en: "Re-Imagine, back to home" },

  /* ----- Shared buttons and labels ----- */
  "cta.quote": { fr: "Demander un devis", en: "Request a quote" },
  "cta.equipment": { fr: "Voir les équipements", en: "See the equipment" },
  "cta.allServices": { fr: "Tous les services", en: "All services" },
  "cta.allEquipment": { fr: "Tous les équipements", en: "All equipment" },
  "cta.allProjects": { fr: "Toutes les réalisations", en: "All projects" },
  "site.label": { fr: "jeeniso.com", en: "jeeniso.com" },
  "site.title": { fr: "Le site de JEENISo", en: "The JEENISo website" },
  "site.text": {
    fr: "Découvrez la Junior Entreprise de l'ENISO, partenaire de Re-Imagine.",
    en: "Discover ENISO's Junior Enterprise, Re-Imagine's partner.",
  },
  "site.cta": { fr: "Visiter le site", en: "Visit the website" },
  "site.imgAlt": { fr: "Page d'accueil du site jeeniso.com", en: "Home page of the jeeniso.com website" },
  "cta.contact": { fr: "Nous contacter", en: "Contact us" },
  "cta.whatsapp": { fr: "Écrire sur WhatsApp", en: "Chat on WhatsApp" },
  "label.uses": { fr: "Utilisations", en: "Typical uses" },
  "label.client": { fr: "Client", en: "Client" },
  "label.photoSoon": { fr: "Photo à venir", en: "Photo coming soon" },
  "label.productPage": { fr: "Fiche produit", en: "Product page" },
  "label.newTab": { fr: "(nouvel onglet)", en: "(opens in a new tab)" },
  "label.partnersLine": { fr: "Une collaboration entre Orange et JEENISo", en: "A collaboration between Orange and JEENISo" },
  "label.partners": { fr: "Nos partenaires", en: "Our partners" },
  "label.hours": { fr: "Horaires d'ouverture", en: "Opening hours" },

  /* ----- HOME ----- */
  "home.hero.kicker": { fr: "FabLab Solidaire · ENISO Sousse", en: "FabLab Solidaire · ENISO Sousse" },
  "home.hero.title1": { fr: "Imaginez-le.", en: "Imagine it." },
  "home.hero.title2": { fr: "Fabriquez-le.", en: "Build it." },
  "home.hero.lead": {
    fr: "Un atelier de fabrication numérique ouvert à tous, pour transformer vos idées en objets réels.",
    en: "A digital fabrication workshop open to everyone, to turn your ideas into real objects.",
  },
  "home.hero.badge": { fr: "Ouvert à tous", en: "Open to everyone" },
  "home.hero.imgAlt": {
    fr: "L'atelier Re-Imagine avec son imprimante 3D, sa découpeuse laser et son mur d'outils",
    en: "The Re-Imagine workshop with its 3D printer, laser cutter and tool wall",
  },
  "home.services.kicker": { fr: "Ce que nous faisons", en: "What we do" },
  "home.services.title": { fr: "De l'idée au prototype", en: "From idea to prototype" },
  "home.services.lead": {
    fr: "Notre équipe vous aide à concevoir et fabriquer votre projet, étape par étape.",
    en: "Our team helps you design and build your project, step by step.",
  },
  "home.machines.kicker": { fr: "L'atelier", en: "The workshop" },
  "home.machines.title": { fr: "Nos machines", en: "Our machines" },
  "home.machines.lead": {
    fr: "Des outils professionnels accessibles à tous, avec l'aide de notre équipe.",
    en: "Professional tools open to everyone, with help from our team.",
  },
  "home.projects.kicker": { fr: "Réalisations", en: "Past projects" },
  "home.projects.title": { fr: "Ils nous ont fait confiance", en: "They trusted us" },
  "home.discount.title": { fr: "Étudiant·e à l'ENISO ?", en: "ENISO student?" },
  "home.discount.text": {
    fr: "Profitez d'un tarif spécial sur tous vos projets. Indiquez simplement votre statut dans la demande de devis.",
    en: "Enjoy a special rate on all your projects. Just mention your status in the quote request.",
  },
  "home.discount.cta": { fr: "Profiter du tarif étudiant", en: "Get the student rate" },
  "home.final.title": { fr: "Vous avez un projet en tête ?", en: "Got a project in mind?" },
  "home.final.text": {
    fr: "Parlez-nous de votre idée. Nous vous répondons avec un devis adapté.",
    en: "Tell us about your idea. We'll get back to you with a tailored quote.",
  },

  /* ----- ABOUT ----- */
  "about.hero.kicker": { fr: "À propos", en: "About us" },
  "about.hero.title": { fr: "Un FabLab solidaire, ouvert à tous", en: "A FabLab Solidaire, open to everyone" },
  "about.hero.lead": {
    fr: "Re-Imagine est un atelier de fabrication numérique installé à l'École Nationale d'Ingénieurs de Sousse (ENISO).",
    en: "Re-Imagine is a digital fabrication workshop located at the National Engineering School of Sousse (ENISO).",
  },
  "about.what.title": { fr: "Qu'est-ce qu'un FabLab ?", en: "What is a FabLab?" },
  "about.what.text": {
    fr: "Un FabLab (« laboratoire de fabrication ») est un lieu équipé de machines comme des imprimantes 3D ou des découpeuses laser. On y vient pour concevoir et fabriquer un objet, un prototype ou une application, avec l'aide d'une équipe qui connaît les outils.",
    en: "A FabLab (\"fabrication laboratory\") is a place equipped with machines such as 3D printers or laser cutters. People come to design and build an object, a prototype or an app, with help from a team that knows the tools.",
  },
  "about.mission.title": { fr: "Notre mission", en: "Our mission" },
  "about.mission.text": {
    fr: "Rendre la fabrication numérique accessible : aider étudiants, makers, entreprises et particuliers à donner vie à leurs idées, sans avoir besoin d'acheter des machines coûteuses.",
    en: "Make digital fabrication accessible: help students, makers, companies and individuals bring their ideas to life, without having to buy expensive machines.",
  },
  "about.partners.title": { fr: "ENISO, Orange et JEENISo", en: "ENISO, Orange and JEENISo" },
  "about.partners.text": {
    fr: "Re-Imagine est né d'une collaboration entre Orange et JEENISo, la Junior Entreprise de l'ENISO. Le lab est hébergé au sein de l'école et animé par les étudiants ingénieurs de JEENISo.",
    en: "Re-Imagine was born from a collaboration between Orange and JEENISo, ENISO's Junior Enterprise. The lab is hosted inside the school and run by JEENISo's engineering students.",
  },
  "about.photoAlt": {
    fr: "L'équipe du Reimagine Lab devant le mur de briques blanches du FabLab",
    en: "The Reimagine Lab team in front of the FabLab's white brick wall",
  },
  "about.who.kicker": { fr: "Pour qui ?", en: "Who is it for?" },
  "about.who.title": { fr: "Tout le monde peut venir fabriquer", en: "Anyone can come and build" },
  "about.who.lead": {
    fr: "L'accès est payant, avec un prix fixé par projet sur devis.",
    en: "Access is paid, with a price set per project based on a quote.",
  },
  "about.how.kicker": { fr: "Comment ça marche ?", en: "How does it work?" },
  "about.how.title": { fr: "3 étapes simples", en: "3 simple steps" },

  /* ----- SERVICES ----- */
  "services.hero.kicker": { fr: "Services", en: "Services" },
  "services.hero.title": { fr: "On vous accompagne de l'idée à l'objet", en: "We help you go from idea to object" },
  "services.hero.lead": {
    fr: "Choisissez un service, décrivez votre besoin, et recevez un devis adapté à votre projet.",
    en: "Pick a service, describe your need, and get a quote tailored to your project.",
  },
  "services.pricing.title": { fr: "Un prix par projet", en: "One price per project" },
  "services.pricing.text": {
    fr: "Chaque projet est différent : nous établissons un devis selon votre besoin. Les étudiants de l'ENISO bénéficient d'un tarif spécial.",
    en: "Every project is different: we prepare a quote based on your needs. ENISO students get a special rate.",
  },

  /* ----- EQUIPMENT ----- */
  "equipment.hero.kicker": { fr: "Équipements", en: "Equipment" },
  "equipment.hero.title": { fr: "Les machines de l'atelier", en: "The workshop's machines" },
  "equipment.hero.lead": {
    fr: "Toutes nos machines s'utilisent avec l'accompagnement de notre équipe. Pas besoin d'être expert.",
    en: "All our machines are used with support from our team. No need to be an expert.",
  },
  "equipment.filter.label": { fr: "Filtrer par catégorie", en: "Filter by category" },
  "equipment.filter.all": { fr: "Toutes", en: "All" },
  "equipment.empty": { fr: "Aucune machine dans cette catégorie pour le moment.", en: "No machine in this category yet." },
  "equipment.count": { fr: "{n} machine(s) affichée(s)", en: "{n} machine(s) shown" },

  /* ----- PROJECTS ----- */
  "projects.hero.kicker": { fr: "Réalisations", en: "Past projects" },
  "projects.hero.title": { fr: "Des projets concrets, pour de vraies entreprises", en: "Real projects for real companies" },
  "projects.hero.lead": {
    fr: "Quelques exemples de projets conçus et réalisés par notre équipe.",
    en: "A few examples of projects designed and built by our team.",
  },

  /* ----- QUOTE FORM ----- */
  "quote.hero.kicker": { fr: "Devis gratuit", en: "Free quote" },
  "quote.hero.title": { fr: "Demander un devis", en: "Request a quote" },
  "quote.hero.lead": {
    fr: "Décrivez votre projet en quelques lignes. Nous vous recontactons rapidement avec une proposition.",
    en: "Describe your project in a few lines. We'll get back to you quickly with a proposal.",
  },
  "quote.discount": {
    fr: "Étudiant·e de l'ENISO ? Vous bénéficiez d'un tarif spécial : choisissez « Étudiant·e ENISO » dans votre statut.",
    en: "ENISO student? You get a special rate: choose \"ENISO student\" as your status.",
  },
  "quote.required": { fr: "Les champs marqués * sont obligatoires.", en: "Fields marked * are required." },
  "quote.section.you": { fr: "Vous", en: "About you" },
  "quote.section.project": { fr: "Votre projet", en: "Your project" },
  "quote.name": { fr: "Nom complet", en: "Full name" },
  "quote.email": { fr: "E-mail", en: "Email" },
  "quote.phone": { fr: "Téléphone", en: "Phone" },
  "quote.phoneHint": { fr: "Ex. : +216 29 393 999", en: "E.g. +216 29 393 999" },
  "quote.status": { fr: "Vous êtes", en: "You are" },
  "quote.status.eniso": { fr: "Étudiant·e ENISO", en: "ENISO student" },
  "quote.status.student": { fr: "Autre étudiant·e", en: "Other student" },
  "quote.status.company": { fr: "Entreprise", en: "Company" },
  "quote.status.individual": { fr: "Particulier", en: "Individual" },
  "quote.service": { fr: "Service souhaité", en: "Service needed" },
  "quote.machine": { fr: "Machine souhaitée (facultatif)", en: "Machine needed (optional)" },
  "quote.choose": { fr: "— Choisir —", en: "— Choose —" },
  "quote.machine.none": { fr: "Je ne sais pas / aucune", en: "Not sure / none" },
  "quote.description": { fr: "Description du projet", en: "Project description" },
  "quote.descriptionHint": {
    fr: "Ce que vous voulez fabriquer, quantité, matériaux, délai souhaité…",
    en: "What you want to build, quantity, materials, desired deadline…",
  },
  "quote.file": { fr: "Fichier joint (facultatif)", en: "Attachment (optional)" },
  "quote.fileHint": {
    fr: "Plan, croquis, fichier 3D ou photo. 10 Mo maximum.",
    en: "Drawing, sketch, 3D file or photo. 10 MB max.",
  },
  "quote.contactMethod": { fr: "Comment préférez-vous être contacté·e ?", en: "How would you like to be contacted?" },
  "quote.contact.email": { fr: "E-mail", en: "Email" },
  "quote.contact.phone": { fr: "Téléphone", en: "Phone" },
  "quote.contact.whatsapp": { fr: "WhatsApp", en: "WhatsApp" },
  "quote.submit": { fr: "Envoyer ma demande", en: "Send my request" },
  "quote.sending": { fr: "Envoi en cours…", en: "Sending…" },
  "quote.privacy": {
    fr: "Vos informations servent uniquement à répondre à votre demande.",
    en: "Your information is only used to answer your request.",
  },
  "quote.err.required": { fr: "Ce champ est obligatoire.", en: "This field is required." },
  "quote.err.email": { fr: "Saisissez une adresse e-mail valide.", en: "Enter a valid email address." },
  "quote.err.phone": { fr: "Saisissez un numéro valide (8 chiffres minimum).", en: "Enter a valid number (at least 8 digits)." },
  "quote.err.description": { fr: "Décrivez votre projet en 20 caractères minimum.", en: "Describe your project in at least 20 characters." },
  "quote.err.fileSize": { fr: "Le fichier dépasse 10 Mo.", en: "The file is larger than 10 MB." },
  "quote.err.summary": { fr: "Merci de corriger les champs indiqués.", en: "Please fix the highlighted fields." },
  "quote.err.network": {
    fr: "L'envoi a échoué. Réessayez, ou contactez-nous directement par WhatsApp ou e-mail.",
    en: "Sending failed. Please try again, or contact us directly on WhatsApp or by email.",
  },
  "quote.success.title": { fr: "Merci, votre demande est envoyée !", en: "Thank you, your request has been sent!" },
  "quote.success.text": {
    fr: "Nous revenons vers vous très vite avec un devis. Pour toute urgence, écrivez-nous sur WhatsApp.",
    en: "We'll get back to you very soon with a quote. For anything urgent, message us on WhatsApp.",
  },
  "quote.mailto.title": { fr: "Dernière étape : envoyez l'e-mail", en: "Last step: send the email" },
  "quote.mailto.text": {
    fr: "Votre application de messagerie s'est ouverte avec votre demande déjà rédigée. Cliquez sur « Envoyer » pour nous la transmettre. Si un fichier est à joindre, ajoutez-le à l'e-mail.",
    en: "Your email app has opened with your request already written. Click \"Send\" to submit it. If you have a file, attach it to the email.",
  },
  "quote.mailto.retry": { fr: "Rouvrir l'e-mail", en: "Open the email again" },
  "quote.again": { fr: "Faire une autre demande", en: "Make another request" },
  "quote.mailSubject": { fr: "Demande de devis – Re-Imagine", en: "Quote request – Re-Imagine" },
  "quote.aside.title": { fr: "Une question avant ?", en: "A question first?" },
  "quote.aside.text": { fr: "Écrivez-nous directement, on vous répond.", en: "Message us directly, we'll answer." },

  /* ----- CONTACT ----- */
  "contact.hero.kicker": { fr: "Contact", en: "Contact" },
  "contact.hero.title": { fr: "Venez nous voir", en: "Come and see us" },
  "contact.hero.lead": {
    fr: "Une question, un projet ? Écrivez-nous ou passez à l'atelier.",
    en: "A question, a project? Message us or drop by the workshop.",
  },
  "contact.whatsapp": { fr: "WhatsApp et téléphone", en: "WhatsApp and phone" },
  "contact.email": { fr: "E-mail", en: "Email" },
  "contact.address": { fr: "Adresse", en: "Address" },
  "contact.social": { fr: "Suivez-nous", en: "Follow us" },
  "contact.call": { fr: "Appeler", en: "Call" },
  "contact.map": { fr: "Carte : ENISO, Sousse", en: "Map: ENISO, Sousse" },
  "contact.directions": { fr: "Itinéraire", en: "Get directions" },

  /* ----- FOOTER ----- */
  "footer.desc": {
    fr: "FabLab solidaire de l'ENISO : un atelier de fabrication numérique ouvert à tous, à Sousse.",
    en: "ENISO's FabLab Solidaire: a digital fabrication workshop open to everyone, in Sousse.",
  },
  "footer.links": { fr: "Liens rapides", en: "Quick links" },
  "footer.follow": { fr: "Réseaux sociaux", en: "Social media" },
  "footer.rights": { fr: "Tous droits réservés.", en: "All rights reserved." },
};

/* ---------------------------------------------------------------------
   2. DATA (lists displayed on the site)
   Each text field has { fr, en }. Images live in assets/img/.
   --------------------------------------------------------------------- */
const DATA = {
  /* ----- Contact details (used in header, footer, contact page, form) ----- */
  contact: {
    phoneDisplay: "+216 29 393 999",
    phoneLink: "+21629393999", // no spaces, used in tel: links
    whatsapp: "21629393999", // international format without "+", used in wa.me links
    email: "junior.entreprise.eniso@gmail.com",
    address: {
      fr: "École Nationale d'Ingénieurs de Sousse\nBP 264 Sousse Erriadh 4023, Tunisie",
      en: "National Engineering School of Sousse (ENISO)\nBP 264 Sousse Erriadh 4023, Tunisia",
    },
    mapQuery: "Ecole Nationale d'Ingénieurs de Sousse, Sousse, Tunisie",
    hours: {
      // TODO [DAYS OPEN]: add the opening days, e.g. { fr: "Du lundi au vendredi", en: "Monday to Friday" }
      days: { fr: "", en: "" },
      time: { fr: "8h30 – 18h00", en: "8:30 am – 6:00 pm" },
    },
    socials: [
      { id: "facebook", label: "Facebook", url: "https://www.facebook.com/Junior.Entreprise.ENISo" },
      { id: "instagram", label: "Instagram", url: "https://www.instagram.com/junior.entreprise.eniso/" },
      { id: "linkedin", label: "LinkedIn", url: "https://tn.linkedin.com/company/junior-entreprise-eniso" },
    ],
  },

  /* ----- Partners (logos are shown as provided, never recoloured) ----- */
  partners: [
    {
      name: "Orange",
      logo: "assets/img/partners/orange.png",
      url: "", // no link requested; add "https://www.orange.tn/" if wanted
      alt: { fr: "Logo Orange", en: "Orange logo" },
    },
    {
      name: "JEENISo",
      logo: "assets/img/partners/jeeniso.png",
      url: "https://www.jeeniso.com/",
      alt: { fr: "Logo JEENISo, Junior Entreprise de l'ENISO", en: "JEENISo logo, ENISO Junior Enterprise" },
    },
  ],

  /* ----- Services (icon names come from js/icons.js) ----- */
  services: [
    {
      id: "mechanical",
      icon: "gear",
      title: { fr: "Conception mécanique", en: "Mechanical design" },
      short: { fr: "Modélisation 3D et plans de vos pièces.", en: "3D modelling and drawings of your parts." },
      desc: {
        fr: "Nous dessinons vos pièces et assemblages en 3D (CAO), prêts à être imprimés, découpés ou usinés.",
        en: "We design your parts and assemblies in 3D (CAD), ready to be printed, cut or machined.",
      },
    },
    {
      id: "electronic",
      icon: "chip",
      title: { fr: "Conception électronique", en: "Electronic design" },
      short: { fr: "Schémas et cartes électroniques sur mesure.", en: "Custom schematics and circuit boards." },
      desc: {
        fr: "Du schéma à la carte électronique : nous concevons les circuits qui font fonctionner votre projet.",
        en: "From schematic to circuit board: we design the electronics that make your project work.",
      },
    },
    {
      id: "web",
      icon: "browser",
      title: { fr: "Développement web", en: "Web development" },
      short: { fr: "Sites et applications web.", en: "Websites and web apps." },
      desc: {
        fr: "Sites vitrines, plateformes et applications web pour présenter ou piloter votre projet.",
        en: "Showcase sites, platforms and web apps to present or control your project.",
      },
    },
    {
      id: "mobile",
      icon: "phoneApp",
      title: { fr: "Développement mobile", en: "Mobile development" },
      short: { fr: "Applications pour smartphones.", en: "Smartphone apps." },
      desc: {
        fr: "Applications mobiles pour vos clients, vos équipes ou pour contrôler vos objets connectés.",
        en: "Mobile apps for your customers, your teams or to control your connected devices.",
      },
    },
    {
      id: "prototyping",
      icon: "cube",
      title: { fr: "Prototypage", en: "Prototyping" },
      short: { fr: "Un premier modèle réel de votre idée.", en: "A first real model of your idea." },
      desc: {
        fr: "Nous fabriquons un premier modèle de votre produit pour le tester, le montrer et l'améliorer.",
        en: "We build a first model of your product so you can test it, show it and improve it.",
      },
    },
  ],

  /* ----- Machine categories (used for the filters on the Equipment page) ----- */
  machineCategories: [
    { id: "laser", label: { fr: "Découpe & gravure", en: "Cutting & engraving" } },
    { id: "printing", label: { fr: "Impression 3D", en: "3D printing" } },
    { id: "machining", label: { fr: "Usinage", en: "Machining" } },
    { id: "vr", label: { fr: "Réalité virtuelle", en: "Virtual reality" } },
  ],

  /* ----- Machines: copy one block to add a new machine ----- */
  machines: [
    {
      id: "laser-co2",
      category: "laser",
      featured: true, // shown on the Home page
      image: "assets/img/machines/laser-co2.webp",
      name: { fr: "Découpeuse et graveuse laser CO2", en: "CO2 laser cutting and engraving machine" },
      desc: {
        fr: "Découpe et grave avec précision des matériaux fins.",
        en: "Precisely cuts and engraves thin materials.",
      },
      specs: { fr: ["40 W", "Format 3020", "Refroidissement", "USB"], en: ["40W", "3020 format", "Cooling", "USB"] },
      uses: {
        fr: ["Bois", "Acrylique", "Cuir", "Carton"],
        en: ["Wood", "Acrylic", "Leather", "Cardboard"],
      },
      link: "",
    },
    {
      id: "creality-cr5-pro",
      category: "printing",
      featured: true,
      image: "assets/img/machines/creality-cr5-pro.webp",
      name: { fr: "Imprimante 3D Creality CR-5 Pro", en: "Creality CR-5 Pro 3D printer" },
      desc: {
        fr: "Transforme un fichier 3D en objet réel, couche par couche.",
        en: "Turns a 3D file into a real object, layer by layer.",
      },
      specs: { fr: [], en: [] },
      uses: {
        fr: ["Prototypes", "Boîtiers", "Pièces mécaniques"],
        en: ["Prototypes", "Enclosures", "Mechanical parts"],
      },
      link: "https://www.creality.com/products/creality-cr-5-pro-h-3d-printer",
    },
    {
      id: "cnc",
      category: "machining",
      featured: true,
      image: "assets/img/machines/cnc.webp",
      // TODO [CNC MODEL]: add the model to the name, e.g. "Machine CNC <model>"
      name: { fr: "Machine CNC", en: "CNC machine" },
      desc: {
        fr: "Fraise et usine des pièces à partir de vos plans.",
        en: "Mills and machines parts from your drawings.",
      },
      specs: { fr: [], en: [] },
      uses: { fr: ["Fraisage", "Usinage"], en: ["Milling", "Machining"] },
      link: "",
    },
    {
      id: "meta-quest-2",
      category: "vr",
      featured: true,
      image: "assets/img/machines/meta-quest-2.webp",
      name: { fr: "Casques VR Meta Quest 2", en: "Meta Quest 2 VR headsets" },
      desc: {
        fr: "Des casques de réalité virtuelle pour découvrir et créer en 3D.",
        en: "Virtual reality headsets to explore and create in 3D.",
      },
      specs: { fr: ["256 Go"], en: ["256 GB"] },
      uses: {
        fr: ["Démos immersives", "Projets VR et 3D", "Formation"],
        en: ["Immersive demos", "VR and 3D projects", "Training"],
      },
      link: "",
    },
  ],

  /* ----- Past projects ("Réalisations"). tags = service ids above ----- */
  projects: [
    {
      id: "plastifilm-drive",
      client: "PLASTIFILM",
      image: "assets/img/projects/plastifilm-drive.webp",
      title: {
        fr: "Conception et réalisation de la carte électronique d'un variateur de vitesse pour moteur à courant continu",
        en: "Design and production of the electronic board of a DC motor speed drive",
      },
      desc: {
        fr: "Conception et fabrication d'une carte électronique pour piloter la vitesse d'un moteur à courant continu.",
        en: "Design and manufacturing of an electronic board that controls the speed of a DC motor.",
      },
      tags: ["electronic", "prototyping"],
    },
    {
      id: "factoorya-prusa",
      client: "FACTOORYA",
      image: "assets/img/projects/factoorya-prusa.webp",
      fit: "contain", // "contain" shows the whole picture (good for slides); default crops to fill
      title: {
        fr: "Conception et réalisation d'une imprimante 3D Prusa i3",
        en: "Design and production of a Prusa i3 3D printer",
      },
      desc: {
        fr: "Conception mécanique (CAO) et fabrication d'une imprimante 3D de type Prusa i3.",
        en: "Mechanical design (CAD) and production of a Prusa i3-type 3D printer.",
      },
      tags: ["mechanical", "prototyping"],
    },
  ],
  /* Picture card linking to the JEENISo website (shown after the projects) */
  siteLink: {
    url: "https://www.jeeniso.com/",
    image: "assets/img/projects/jeeniso-site.webp",
  },

  /* ----- "Who is it for" (About page) ----- */
  audience: [
    { icon: "cap", title: { fr: "Étudiants", en: "Students" }, text: { fr: "Projets de cours, PFE, clubs. Tarif spécial ENISO.", en: "Course projects, final-year projects, clubs. Special ENISO rate." } },
    { icon: "bulb", title: { fr: "Makers", en: "Makers" }, text: { fr: "Passionnés qui veulent bricoler, tester et créer.", en: "Hobbyists who want to tinker, test and create." } },
    { icon: "briefcase", title: { fr: "Entreprises", en: "Companies" }, text: { fr: "Prototypes, pièces sur mesure et développement.", en: "Prototypes, custom parts and development." } },
    { icon: "user", title: { fr: "Particuliers", en: "Individuals" }, text: { fr: "Un objet personnalisé, une réparation, une idée.", en: "A custom object, a repair, an idea." } },
  ],

  /* ----- How it works (About page) ----- */
  steps: [
    { icon: "message", title: { fr: "Parlez-nous de votre projet", en: "Tell us your project" }, text: { fr: "Remplissez le formulaire ou écrivez-nous sur WhatsApp.", en: "Fill in the form or message us on WhatsApp." } },
    { icon: "file", title: { fr: "Recevez un devis", en: "Get a quote" }, text: { fr: "Nous étudions votre besoin et vous proposons un prix clair.", en: "We study your needs and send you a clear price." } },
    { icon: "tool", title: { fr: "Fabriquons ensemble", en: "Build with us" }, text: { fr: "Notre équipe vous accompagne jusqu'au résultat final.", en: "Our team supports you all the way to the final result." } },
  ],

  /* ----- Quote form settings -----
     endpoint: paste your Formspree URL here (e.g. "https://formspree.io/f/abcdwxyz")
     to receive requests by email at junior.entreprise.eniso@gmail.com.
     Left empty, the form opens the visitor's email app with the request pre-filled. */
  quoteForm: {
    endpoint: "",
    maxFileMB: 10,
  },
};
