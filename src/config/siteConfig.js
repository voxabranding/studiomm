export const siteConfig = {
  brand: {
    name: 'Studio MM • Mayco Miguel',
    shortName: 'Studio MM',
    professional: 'Mayco Miguel',
    role: 'Especialista em Micropigmentação & Spa Facial',
    tagline: 'Especialista em renovar sua autoestima com máxima naturalidade.',
    logo: '/images/logo-studiomm.svg',
    avatar: '/images/mayco-miguel.png',
    procedureImage: '/images/mayco-procedimento.png',
  },

  contact: {
    instagram: 'https://www.instagram.com/estetica.studiomm/',
    instagramHandle: '@estetica.studiomm',
    whatsappNumber: '5527997096912',
    whatsappDisplay: '(27) 99709-6912',
    whatsappMessage: 'Olá Mayco! Conheci o Studio MM pelo site e gostaria de agendar uma avaliação.',
    promoMessage: 'Olá Mayco! Vi a promoção no site (de R$ 590 por R$ 390) e gostaria de garantir meu horário com desconto!',
    email: 'Mayco.Miguel@hotmail.com',
    linktree: 'https://linktr.ee/mayco.miguel',
  },

  address: {
    full: 'Rua Francisco Vieira Passo, 231 - Edifício JU, LJ - Sala 108 - Muquiçaba, Guarapari - ES',
    street: 'Rua Francisco Vieira Passo, 231 - Edifício JU, Sala 108',
    neighborhood: 'Muquiçaba',
    city: 'Guarapari',
    state: 'ES',
    citiesServed: 'Guarapari & Vila Velha',
    hours: 'Segunda a Sábado — Atendimento com agendamento prévio',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Francisco+Vieira+Passo+231+Muquicaba+Guarapari+ES',
  },

  bookingUrl: '', // Redireciona dinamicamente para o WhatsApp oficial configurado

  offer: {
    active: true,
    tag: 'OFERTA POR TEMPO LIMITADO',
    eyebrow: 'CAMPANHA GUARAPARI & VILA VELHA',
    title: 'R$ 200 de desconto na sua micropigmentação',
    subtitle: 'De R$ 590 por apenas R$ 390 em até 3x ou condições especiais no Pix.',
    badge: 'ECONOMIZE R$ 200',
    originalPrice: 'R$ 590',
    promoPrice: 'R$ 390',
    description: 'Renove o desenho do seu olhar com naturalidade absoluta. Válido para novos agendamentos via WhatsApp.',
    cta: 'Quero garantir meu desconto de R$ 200',
  },

  hero: {
    eyebrow: 'ESTÉTICA AVANÇADA • GUARAPARI & VILA VELHA',
    title: 'Renove sua autoestima com naturalidade.',
    subtitle: 'Especialista em Micropigmentação de Sobrancelhas (Fio a Fio & Shadow), Revitalização Labial e Spa Facial. Técnicas personalizadas para homens e mulheres.',
    ctaPrimary: 'Garantir desconto de R$ 200',
    ctaSecondary: 'Conhecer procedimentos',
    location: 'Guarapari & Vila Velha - ES',
    badge: 'HOMENS & MULHERES',
  },

  trustItems: [
    {
      title: 'Naturalidade Hiper-Realista',
      description: 'Fios finos e precisos que respeitam a direção e densidade real, sem aspecto artificial.',
      icon: 'sparkles',
    },
    {
      title: 'Visagismo Personalizado',
      description: 'Mapeamento anatômico sob medida para os traços de cada rosto masculino e feminino.',
      icon: 'ruler',
    },
    {
      title: 'Atendimento Unissex',
      description: 'Protocolos específicos desenhados tanto para o público masculino quanto feminino.',
      icon: 'users',
    },
    {
      title: 'Formador de Profissionais PMU',
      description: 'Master especialista com certificação e instrutor de novos micropigmentadores.',
      icon: 'award',
    },
  ],

  marqueeItems: [
    'Micropigmentação Fio a Fio',
    'Design de Sobrancelhas Visagista',
    'Revitalização Labial',
    'Spa Facial & Limpeza Profunda',
    'Efeito Shadow Line',
    'Neutralização de Lábios Escuros',
    'Atendimento Masculino & Feminino',
    'Formação Profissional PMU',
    'Autoestima & Naturalidade'
  ],

  services: [
    {
      id: 'fio-a-fio',
      title: 'Micropigmentação Fio a Fio (Nanoblading)',
      category: 'Sobrancelhas',
      badge: 'Mais Procurado',
      target: 'Homens & Mulheres',
      description: 'Técnica hiper-realista que reproduz fios idênticos aos naturais. Preenche falhas e cicatrizes com discrição total para homens e arqueamento harmonioso para mulheres.',
      benefits: ['Duração de 12 a 18 meses', 'Procedimento praticamente indolor', 'Desenho prévio aprovado por você'],
    },
    {
      id: 'shadow-line',
      title: 'Micropigmentação Shadow / Efeito Pó',
      category: 'Sobrancelhas',
      badge: 'Definição Suave',
      target: 'Homens & Mulheres',
      description: 'Sombra suave em degradê que proporciona efeito de preenchimento natural e elegante, eliminando a necessidade diária de lápis ou sombra.',
      benefits: ['Acabamento aveludado', 'Ideal para quem busca praticidade', 'Degradê sutil do início ao fim'],
    },
    {
      id: 'labios',
      title: 'Revitalização & Neutralização Labial',
      category: 'Lábios',
      badge: 'Alta Procura',
      target: 'Homens & Mulheres',
      description: 'Uniformiza a tonalidade de lábios escuros ou arroxeados (neutralização unissex) ou devolve uma cor saudável e viçosa com contorno restaurado (revitalização).',
      benefits: ['Uniformiza tons desiguais', 'Aspecto saudável de lábios hidratados', 'Pigmentos biocompatíveis e seguros'],
    },
    {
      id: 'spa-facial',
      title: 'Spa Facial & Limpeza de Pele Profunda',
      category: 'Cuidados com a Pele',
      badge: 'Renovação',
      target: 'Homens & Mulheres',
      description: 'Protocolo completo de higienização, extração delicada de cravos, desobstrução dos poros, esfoliação e hidratação profunda para todos os tipos de pele.',
      benefits: ['Controle de oleosidade e brilho', 'Pele revigorada e oxigenada', 'Relaxamento e bem-estar imediato'],
    },
    {
      id: 'design-visagista',
      title: 'Design de Sobrancelhas com Visagismo',
      category: 'Harmonização',
      badge: 'Expressão Única',
      target: 'Homens & Mulheres',
      description: 'Alinhamento estratégico que valoriza o olhar. No público masculino, preserva a robustez natural sem afinar; no feminino, confere harmonia e simetria.',
      benefits: ['Mapeamento com paquímetro', 'Realce do olhar sem exageros', 'Remoção precisa e alinhamento'],
    },
    {
      id: 'cursos-pmu',
      title: 'Cursos & Formação Profissional PMU',
      category: 'Academy',
      badge: 'Carreira de Sucesso',
      target: 'Iniciantes & Profissionais',
      description: 'Aprenda do absoluto zero ou aprimore suas técnicas com Mayco Miguel. Mentoria prática presencial, biossegurança, treino em modelos e certificado profissional.',
      benefits: ['Apostila e material completo', 'Prática em modelos reais', 'Suporte e mentoria pós-curso'],
    },
  ],

  beforeAfter: {
    enabled: true,
    eyebrow: 'TRANSFORMAÇÃO REAL',
    title: 'Veja a diferença que a naturalidade faz.',
    description: 'Arraste o comparador para conferir a evolução. Fios precisos que recuperam a densidade sem parecer procedimento artificial.',
    beforeLabel: 'Antes (Sem micropigmentação)',
    afterLabel: 'Depois (Studio MM)',
    beforeImage: '/images/antes.jpg',
    afterImage: '/images/depois.jpg',
  },

  results: [
    { title: 'Micropigmentação Fio a Fio', category: 'FIO A FIO' },
    { title: 'Micropigmentação Shadow', category: 'SHADOW LINE' },
    { title: 'Revitalização & Neutralização', category: 'LÁBIOS' },
    { title: 'Design com Visagismo', category: 'VISAGISMO' },
  ],

  about: {
    eyebrow: 'SOBRE MAYCO MIGUEL',
    title: 'Especialista em renovar sua autoestima.',
    subtitle: 'Autoridade em micropigmentação e visagismo no Espírito Santo.',
    image: '/images/mayco-sobre.jpg',
    text: 'Mayco Miguel é especialista em Micropigmentação Avançada (PMU) e Spa Facial. Com atendimento exclusivo em Guarapari e Vila Velha, desenvolveu uma abordagem contemporânea e neutra, focada em entregar resultados altamente naturais para mulheres e homens que desejam realçar seus traços com sofisticação e sem exageros.',
    secondaryText: 'Além da atuação clínica com centenas de transformações realizadas, Mayco dedica-se à formação de novos profissionais na área estética, transmitindo rigor técnico, biossegurança e maestria artística.',
    stats: [
      { number: '+7.300', label: 'Seguidores no Instagram' },
      { number: '+800', label: 'Procedimentos realizados' },
      { number: '2 Cidades', label: 'Guarapari & Vila Velha' },
      { number: '100%', label: 'Material descartável & seguro' },
    ],
  },

  experience: {
    eyebrow: 'O ATENDIMENTO',
    title: 'Um espaço pensado para o seu conforto.',
    text: 'No Studio MM, sua individualidade vem em primeiro lugar. Iniciamos cada atendimento com uma consultoria de visagismo detalhada e aprovação do desenho prévio, garantindo que o resultado final supere todas as suas expectativas.',
    ctaText: 'Agendar minha avaliação',
  },

  faq: [
    {
      question: 'Homens também podem fazer micropigmentação de sobrancelhas?',
      answer: 'Sim! Hoje os homens representam uma grande parcela dos nossos clientes. A técnica masculina é adaptada: preservamos a textura rústica e a direção natural dos pelos, cobrindo cicatrizes e falhas de modo completamente imperceptível no dia a dia.',
    },
    {
      question: 'O procedimento é doloroso?',
      answer: 'Não. Utilizamos anestésicos tópicos de alta eficiência aprovados pela Anvisa, aplicados antes e durante a sessão. A grande maioria dos clientes relata apenas um leve formigamento ou nem sente desconforto.',
    },
    {
      question: 'Como funciona a promoção de R$ 590 por R$ 390?',
      answer: 'É uma condição especial de campanha com R$ 200 de desconto para você conhecer o nosso trabalho e renovar sua autoestima. Para garantir o valor promocional, basta entrar em contato pelo nosso WhatsApp e agendar sua sessão enquanto restarem vagas no lote.',
    },
    {
      question: 'Quanto tempo dura a micropigmentação?',
      answer: 'Em média, de 10 a 18 meses. Com o tempo, o pigmento vai clareando gradualmente e de forma homogênea, sem alterar a cor para tons azulados ou avermelhados, pois utilizamos pigmentos estabilizados de nível internacional.',
    },
    {
      question: 'O que é a neutralização labial e quem pode fazer?',
      answer: 'A neutralização labial corrige e clareia lábios arroxeados, amarronzados ou com manchas causadas por genética ou tabagismo. É muito procurada tanto por homens quanto por mulheres que querem um tom de lábio uniforme e saudável.',
    },
    {
      question: 'Eu posso ver como vai ficar antes de iniciar o procedimento?',
      answer: 'Com certeza! Nós nunca iniciamos a micropigmentação sem antes fazer o desenho visagista prévio no espelho com você. Somente após a sua total aprovação de formato, espessura e tonalidade é que o procedimento é iniciado.',
    },
  ],

  testimonials: [
    {
      name: 'Lucas Mendes',
      city: 'Vila Velha - ES',
      text: 'Eu tinha uma falha enorme na sobrancelha por conta de um acidente. O Mayco fez a micropigmentação fio a fio e ficou inacreditavelmente natural. Ninguém percebe nada, parecem pelos reais. Recomendo demais!',
      rating: 5,
      gender: 'm',
    },
    {
      name: 'Juliana Campos',
      city: 'Guarapari - ES',
      text: 'Fiz lábios e sobrancelhas com o Mayco e minha autoestima foi lá em cima! O atendimento é impecável, o estúdio é lindo e super seguro. Acordo pronta todos os dias sem me preocupar com maquiagem.',
      rating: 5,
      gender: 'f',
    },
    {
      name: 'Rafael Torres',
      city: 'Guarapari - ES',
      text: 'Excelente profissional. Muito detalhista, explicou cada etapa e tirou todas as minhas dúvidas. A neutralização labial e a limpeza de pele fizeram uma diferença absurda. Ambiente muito discreto e profissional.',
      rating: 5,
      gender: 'm',
    },
    {
      name: 'Patrícia Silveira',
      city: 'Vila Velha - ES',
      text: 'Aproveitei a promoção de R$ 390 e me surpreendi com a qualidade. Vale muito mais do que custa! O Mayco é um artista de verdade, mãos super leves e atencioso do início ao fim.',
      rating: 5,
      gender: 'f',
    },
  ],

  finalCta: {
    eyebrow: 'ESTÉTICA AVANÇADA UNISSEX',
    title: 'Chegou o momento de renovar a sua autoestima.',
    text: 'Aproveite a condição exclusiva de R$ 200 OFF (de R$ 590 por apenas R$ 390) e agende seu horário com Mayco Miguel em Guarapari ou Vila Velha.',
    ctaPrimary: 'Garantir meu desconto no WhatsApp',
    ctaSecondary: 'Falar com a equipe',
  },

  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Oferta Especial', href: '#oferta' },
    { label: 'Antes & Depois', href: '#resultados' },
    { label: 'Sobre Mayco', href: '#sobre' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ],

  footer: {
    copyright: `© ${new Date().getFullYear()} Studio MM • Mayco Miguel Micropigmentação & Spa Facial. Todos os direitos reservados.`,
    privacyText: 'Política de Privacidade',
    privacyUrl: '#',
  },
};
