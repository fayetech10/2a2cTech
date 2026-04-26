import {
  Antenna,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Cpu,
  GraduationCap,
  Layers3,
  MonitorCog,
  Network,
  Palette,
  ShieldCheck,
  Sparkles,
  Wrench,
  Workflow,
} from 'lucide-react'

export const siteMeta = {
  brandName: '2A2C Tech',
  brandMark: '2A2C//TECH',
  tagline: 'Expert IT, logiciels sur mesure et infrastructure digitale',
  location: 'Dakar, Senegal',
  consultationDelay: 'Reponse en moins de 24 heures',
}

export const navigation = [
  { id: 'accueil', label: 'Accueil', href: '#accueil' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'a-propos', label: 'Expertise', href: '#a-propos' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { value: '30+', label: 'missions livrees', detail: 'logiciels, reseaux, maintenance et design' },
  { value: '98%', label: 'satisfaction client', detail: 'partenariats suivis sur la duree' },
  { value: '5', label: 'expertises connectees', detail: 'un interlocuteur pour tout votre systeme digital' },
]

export const services = [
  {
    id: 'custom-software',
    icon: Code2,
    accent: 'from-sky-400 via-blue-300 to-blue-600',
    label: 'Custom software development',
    title: 'Developpement logiciel sur mesure',
    description: 'Innovate with tailored solutions.',
    longDescription:
      'Nous concevons des applications metier, portails clients, SaaS et tableaux de bord qui collent a vos vrais flux de travail. Chaque produit est pense pour automatiser, fiabiliser et accelerer vos operations.',
    features: [
      'Applications metier, CRM, ERP legers et portails B2B/B2C',
      'Architecture evolutive avec API, authentification et tableaux de bord',
      'UX claire, performance web et maintenance continue',
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Supabase'],
    processSteps: [
      { step: 'Cadrage', desc: 'Audit des besoins, priorisation et definition des objectifs mesurables.' },
      { step: 'Prototype', desc: 'Wireframes et parcours utilisateur valides avant la phase de build.' },
      { step: 'Delivery', desc: 'Developpement par iterations avec revues, tests et documentation.' },
      { step: 'Run', desc: 'Mises a jour, optimisation et support apres mise en ligne.' },
    ],
    benefits: ['Automatisation concrete', 'Architecture durable', 'Pilotage clair des operations'],
    highlight: 'Produits concus pour vos process reels, pas pour une demo.',
  },
  {
    id: 'it-training',
    icon: GraduationCap,
    accent: 'from-indigo-300 via-sky-300 to-blue-500',
    label: 'IT training',
    title: 'Formation IT',
    description: 'Empower your team with cutting-edge knowledge.',
    longDescription:
      'Nous construisons des parcours de formation pratiques pour les equipes, les dirigeants et les operateurs terrain. L objectif est simple : transformer les outils numeriques en gains de competence visibles et durables.',
    features: [
      'Formations bureautique, collaboration cloud, cyber hygiene et productivite',
      'Ateliers dev, reseau ou exploitation adaptes au niveau des participants',
      'Supports, exercices, evaluation et transfert de bonnes pratiques',
    ],
    technologies: ['Microsoft 365', 'Google Workspace', 'Cisco', 'Linux', 'Notion', 'Figma'],
    processSteps: [
      { step: 'Evaluation', desc: 'Identification du niveau de depart et des cas d usage prioritaires.' },
      { step: 'Programme', desc: 'Creation du contenu, des exercices et des objectifs par session.' },
      { step: 'Animation', desc: 'Sessions dynamiques en presentiel ou a distance avec cas pratiques.' },
      { step: 'Ancrage', desc: 'Suivi, recap et feuille de route pour consolider les acquis.' },
    ],
    benefits: ['Montee en competence rapide', 'Adoption des outils', 'Equipes plus autonomes'],
    highlight: 'Des formations utiles des le lendemain, pas seulement theoriques.',
  },
  {
    id: 'network-telecom',
    icon: Network,
    accent: 'from-teal-300 via-cyan-300 to-sky-500',
    label: 'Network and telecom',
    title: 'Reseaux & telecom',
    description: 'Reliable, secure, and high-performance infrastructure.',
    longDescription:
      'Nous dimensionnons et securisons votre infrastructure reseau pour garantir connectivite, disponibilite et qualite de service. De la topologie LAN/WAN a la supervision, nous pensons la technique comme un levier business.',
    features: [
      'Conception, segmentation et optimisation LAN, Wi-Fi et interconnexions multi-sites',
      'Telephonie IP, lien telecom et continuite de service',
      'Monitoring, securisation des acces et documentation d exploitation',
    ],
    technologies: ['MikroTik', 'Cisco', 'pfSense', 'Ubiquiti', 'VoIP', 'Zabbix'],
    processSteps: [
      { step: 'Audit terrain', desc: 'Analyse de l existant, des goulots d etranglement et des risques.' },
      { step: 'Architecture', desc: 'Schema cible, adressage, securite et plan de migration.' },
      { step: 'Deploiement', desc: 'Installation, tests, bascule et verification de performance.' },
      { step: 'Supervision', desc: 'Suivi, alerting et maintenance preventive.' },
    ],
    benefits: ['Disponibilite accrue', 'Reseau mieux securise', 'Operations plus fluides'],
    highlight: 'Une infrastructure qui soutient votre croissance au lieu de la freiner.',
  },
  {
    id: 'maintenance',
    icon: Wrench,
    accent: 'from-amber-300 via-orange-300 to-orange-500',
    label: 'IT maintenance',
    title: 'Maintenance informatique',
    description: 'Ensure seamless operation and peak performance.',
    longDescription:
      'Nous prenons en charge le support, la maintenance preventive et la remise en etat de vos postes, serveurs et equipements critiques. Notre approche privilegie la stabilite, la rapidite d intervention et la prevention des incidents.',
    features: [
      'Support utilisateurs, diagnostic materiel et logiciel, interventions sur site ou a distance',
      'Maintenance preventive, mises a jour et optimisation des postes et serveurs',
      'Sauvegarde, reprise, hygiene de securite et suivi de parc',
    ],
    technologies: ['Windows', 'Linux', 'GLPI', 'AnyDesk', 'VMware', 'Backup tooling'],
    processSteps: [
      { step: 'Signalement', desc: 'Prise en charge structuree de la demande et qualification rapide.' },
      { step: 'Diagnostic', desc: 'Isolation de la panne et proposition de solution adaptee.' },
      { step: 'Resolution', desc: 'Intervention corrective avec verification du retour a la normale.' },
      { step: 'Prevention', desc: 'Rapport, recommandations et plan d amelioration continue.' },
    ],
    benefits: ['Moins d arrets', 'Parc plus fiable', 'Support rassurant pour vos equipes'],
    highlight: 'Le bon support au bon moment, avec une logique preventive.',
  },
  {
    id: 'graphics-design',
    icon: Palette,
    accent: 'from-pink-300 via-fuchsia-300 to-violet-500',
    label: 'Computer graphics and design',
    title: 'Infographie & design',
    description: 'Stunning visuals that captivate and convert.',
    longDescription:
      'Nous donnons une forme visuelle forte a vos produits, supports commerciaux et identites de marque. Le design est pense comme un accelerateur de credibilite, de memorisation et de conversion.',
    features: [
      'Identites visuelles, chartes, templates social media et kits commerciaux',
      'Supports print et digitaux : affiches, flyers, banniers et presentations',
      'UI design, mockups et visuels de lancement pour produits technologiques',
    ],
    technologies: ['Figma', 'Adobe Photoshop', 'Illustrator', 'Canva Pro', 'After Effects'],
    processSteps: [
      { step: 'Brief', desc: 'Clarification du positionnement, des messages et de l audience visee.' },
      { step: 'Direction', desc: 'Moodboard, style visuel et systeme graphique coherents.' },
      { step: 'Production', desc: 'Creation des assets, ajustements et declinaisons multi-supports.' },
      { step: 'Livraison', desc: 'Fichiers finalises, guidelines et formats prets a l emploi.' },
    ],
    benefits: ['Image plus premium', 'Communication plus claire', 'Supports plus memorables'],
    highlight: 'Un design qui sert votre business, pas seulement votre galerie.',
  },
]

export const aboutContent = {
  whoWeAre:
    '2A2C Tech accompagne les entreprises, PME, organisations et porteurs de projet qui veulent une execution technique serieuse, lisible et elegante. Nous combinons conseil, build et support pour faire avancer des projets concrets.',
  mission:
    'Notre mission est de transformer des besoins techniques parfois fragmentes en systemes digitaux fiables, coherents et performants : logiciels utiles, equipes mieux formees, reseaux robustes, maintenance rassurante et image visuelle nette.',
  approach:
    'Nous privilegions une collaboration directe, des recommandations sans jargon inutile, et des livrables qui restent exploitables dans le temps.',
}

export const aboutPillars = [
  {
    icon: BriefcaseBusiness,
    title: 'Vision orientee resultat',
    description: 'Chaque choix technique doit soutenir un gain metier mesurable.',
  },
  {
    icon: ShieldCheck,
    title: 'Fiabilite et securite',
    description: 'Nous cherchons la stabilite, la clarte et la reduction du risque operationnel.',
  },
  {
    icon: BadgeCheck,
    title: 'Collaboration transparente',
    description: 'Vous gardez de la visibilite sur les priorites, les delais et les arbitrages.',
  },
]

export const approachSteps = [
  {
    id: '01',
    icon: Workflow,
    title: 'Diagnostiquer avant de produire',
    description: 'Nous clarifions d abord l objectif, le parcours utilisateur et les contraintes terrain.',
  },
  {
    id: '02',
    icon: Cpu,
    title: 'Concevoir des systemes durables',
    description: 'Nous structurons la solution pour qu elle reste lisible, maintenable et evolutive.',
  },
  {
    id: '03',
    icon: MonitorCog,
    title: 'Livrer, former, transferer',
    description: 'Nous allons jusqu a la mise en service, la prise en main et le support post-lancement.',
  },
  {
    id: '04',
    icon: Sparkles,
    title: 'Polir l experience',
    description: 'Nous ajoutons la couche visuelle, la fluidite et les details qui rendent le rendu premium.',
  },
]

export const approachChecklist = [
  'Cadrage sur les vrais enjeux, pas sur des fonctionnalites accessoires',
  'Design et execution aligns avec une image premium et professionnelle',
  'Support clair, documentation simple et transfert de competence',
]

export const caseStudies = [
  {
    id: 'ops-suite',
    icon: Layers3,
    accent: 'from-sky-400 via-blue-300 to-indigo-500',
    logo: 'OPS',
    category: 'Custom software',
    title: 'Suite de gestion pour une societe de services',
    summary:
      'Centralisation des demandes clients, du suivi d interventions et des reportings direction.',
    challenge:
      'Les equipes jonglaient entre WhatsApp, Excel et appels telephoniques, avec une perte de tracabilite sur les operations.',
    solution:
      'Nous avons construit un portail metier avec tableaux de bord, demandes structurees, suivi de tickets et exports automatiques.',
    results: [
      'Reduction du temps de traitement des demandes internes',
      'Meilleure visibilite sur les priorites et les incidents ouverts',
      'Reporting de direction disponible sans ressaisie',
    ],
    metrics: [
      { value: '-42%', label: 'temps de traitement' },
      { value: '+3x', label: 'visibilite operationnelle' },
      { value: '8 sem.', label: 'mise en production' },
    ],
    stack: ['React', 'Supabase', 'Tailwind', 'Role-based access'],
    deliverables: ['Portail clients', 'Tableau de bord operations', 'Exports reporting'],
  },
  {
    id: 'academy-lab',
    icon: GraduationCap,
    accent: 'from-indigo-300 via-sky-300 to-cyan-400',
    logo: 'LAB',
    category: 'IT training',
    title: 'Programme de formation numerique pour PME',
    summary:
      'Montage d un parcours sur 6 semaines pour faire progresser des equipes administratives et commerciales.',
    challenge:
      'Les outils bureautiques, collaboratifs et de suivi n etaient pas maitrises de maniere homogene au sein des equipes.',
    solution:
      'Nous avons deploye un programme mixant ateliers, fiches pratiques et exercices lies au quotidien de l entreprise.',
    results: [
      'Adoption plus rapide des nouveaux outils',
      'Moins de support interne sur les usages courants',
      'Standardisation des methodes de travail',
    ],
    metrics: [
      { value: '24', label: 'collaborateurs formes' },
      { value: '6', label: 'semaines de parcours' },
      { value: '92%', label: 'taux d adoption' },
    ],
    stack: ['Google Workspace', 'Microsoft 365', 'Guides internes', 'Ateliers pratiques'],
    deliverables: ['Parcours de formation', 'Supports PDF', 'Plan d adoption'],
  },
  {
    id: 'network-core',
    icon: Antenna,
    accent: 'from-teal-300 via-cyan-300 to-sky-500',
    logo: 'NET',
    category: 'Network & telecom',
    title: 'Refonte reseau et telecom pour une structure multisite',
    summary:
      'Amelioration de la couverture reseau, de la segmentation et de la qualite de service entre plusieurs points.',
    challenge:
      'La qualite de connexion et la telephonie IP souffraient de coupures, de latence et d un manque de supervision.',
    solution:
      'Nous avons redessine la topologie, separe les usages critiques et installe une supervision continue avec plan de maintenance.',
    results: [
      'Connexion plus stable pour les operations sensibles',
      'Baisse des interruptions et meilleure qualite d appel',
      'Documentation reseau utile pour les futures interventions',
    ],
    metrics: [
      { value: '99.5%', label: 'disponibilite visee' },
      { value: '-60%', label: 'incidents majeurs' },
      { value: '3', label: 'sites harmonises' },
    ],
    stack: ['MikroTik', 'Ubiquiti', 'VoIP', 'Firewalling', 'Monitoring'],
    deliverables: ['Schema reseau', 'Segmentation', 'Supervision & alertes'],
  },
  {
    id: 'brand-studio',
    icon: Palette,
    accent: 'from-pink-300 via-fuchsia-300 to-violet-500',
    logo: 'VIS',
    category: 'Graphics & design',
    title: 'Kit visuel premium pour un cabinet de conseil',
    summary:
      'Creation d une identite plus haut de gamme pour les propositions commerciales et la presence digitale.',
    challenge:
      'La marque manquait de coherence visuelle, ce qui diluait la perception de valeur des prestations.',
    solution:
      'Nous avons construit un systeme visuel complet, des templates de presentation et une direction graphique plus assumee.',
    results: [
      'Image percue plus premium lors des prises de contact',
      'Supports coherents entre vente, social media et documentation',
      'Meilleure memorisation de la marque',
    ],
    metrics: [
      { value: '1', label: 'systeme visuel unifie' },
      { value: '14', label: 'assets livres' },
      { value: '72h', label: 'pour le kit initial' },
    ],
    stack: ['Figma', 'Photoshop', 'Illustrator', 'Presentation templates'],
    deliverables: ['Identite visuelle', 'Templates de slides', 'Kit social media'],
  },
]

export const testimonials = [
  {
    id: 'test-1',
    companyMark: 'NX',
    company: 'Nexa Logistics',
    author: 'Aminata S.',
    role: 'Directrice des operations',
    quote:
      'Nous avions besoin d un partenaire capable de comprendre la technique et le terrain. Le rendu final est plus clair, plus robuste et surtout plus utile pour nos equipes.',
    highlight: 'Produit deploye en 8 semaines',
  },
  {
    id: 'test-2',
    companyMark: 'OR',
    company: 'Orizon Conseil',
    author: 'Mamadou L.',
    role: 'Fondateur',
    quote:
      'Le positionnement visuel et la qualite d execution ont change la perception de notre marque. Nous avons enfin une presence coherente avec notre niveau d expertise.',
    highlight: 'Rebranding + supports de vente',
  },
  {
    id: 'test-3',
    companyMark: 'CL',
    company: 'Clinique Lumiere',
    author: 'Ndeye F.',
    role: 'Responsable IT',
    quote:
      'La refonte reseau a reduit les interruptions critiques et nous avons maintenant une documentation exploitable. Le support est reactif et rassurant.',
    highlight: 'Infrastructure multisite stabilisee',
  },
  {
    id: 'test-4',
    companyMark: 'AT',
    company: 'Atelier 360',
    author: 'Cheikh D.',
    role: 'Chef de projet',
    quote:
      'Les formations etaient pratiques, bien rythmees et directement applicables. Les equipes ont gagne en autonomie tres vite.',
    highlight: 'Parcours de formation sur mesure',
  },
]

export const ctaContent = {
  title: 'Ready to Transform Your Business?',
  text:
    'Contact us today for a personalized consultation, a clear roadmap and a custom quote aligned with your priorities.',
}

export const contactInfo = {
  email: 'contact@2a2ctech.com',
  phone: '+221 77 339 45 13',
  whatsapp: '+221 77 339 45 13',
  whatsappLink: 'https://wa.me/221773394513',
  address: 'Dakar, Senegal',
  mapsQuery: 'Dakar Senegal',
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
  ],
}
