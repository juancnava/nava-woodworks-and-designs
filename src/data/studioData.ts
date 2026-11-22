export interface BlueprintComponent {
  id: string;
  code: string;
  name: string;
  quantity: string;
  joinery: string;
  description: string;
  tolerance: string;
  linkedCutCode?: string;
  pin: { x: number; y: number };
}

export interface LumberCutItem {
  code: string;
  componentId: string;
  description: string;
  qty: number;
  grossDimensions: string;
  netDimensions: string;
  grossDimsMm: [number, number, number];
  machining: string;
}

export interface BlueprintView {
  id: 'type-s01' | 'wd-101' | 'pins-study' | 'castle-joint' | 'chair-bom' | 'chair-cad' | 'banca-bom';
  label: string;
  subtitle: string;
  image: string;
  alt: string;
  scaleLabel: string;
  notes: string;
  fitMode?: 'cover' | 'contain';
  pdfUrl?: string;
  pdfLabel?: string;
}

export interface GalleryArtifact {
  id: string;
  group: 'identidad' | 'planos' | 'banca';
  title: string;
  category: string;
  year: string;
  caption: string;
  image: string;
  alt: string;
  fitMode?: 'cover' | 'contain';
  pdfUrl?: string;
  pdfLabel?: string;
  pptxUrl?: string;
  pptxLabel?: string;
}

export interface WoodOption {
  id: string;
  name: string;
  origin: string;
  toneHex: string;
  grainNote: string;
  baseWeeks: number;
}

export interface MetalOption {
  id: string;
  name: string;
  finish: string;
  swatchHex: string;
  extraWeeks: number;
}

export interface SurfaceFinishOption {
  id: string;
  name: string;
  description: string;
}

export const BRAND_INFO = {
  wordmark: 'Nava Woodworks',
  fullTitle: 'Nava Woodworks & Designs',
  craftsman: 'Juan Nava',
  role: 'Maestro Ebanista',
  tagline: 'Artesanía Funcional',
  hybridTagline: 'Diseño & Construcción Híbrida',
  location: 'Bahía de Kino, Sonora',
  coordinates: '28°49′N 111°56′O',
  email: 'info@navawoodworks.com',
};

export const HERO_ASSETS = {
  studioView: {
    src: '/assets/aistudio/1eb47aad-887d-4743-ac5f-ce388ef5b1d2_927c6071.webp',
    alt: 'Base de exhibición ornamental Tipo S-01 en madera de pino con acabado oscuro sobre banco de taller con luz natural de estudio',
    caption: 'Base de Exhibición Tipo S-01 · Madera de Pino',
  },
  brandedView: {
    src: '/assets/aistudio/ornate_display_stand_con_logotipo_58713b0c.png',
    alt: 'Base de exhibición ornamental Tipo S-01 con sello oficial de Nava Woodworks and Designs',
    caption: 'Edición Numerada · Sello Nava Woodworks & Designs',
  },
};

export const HERO_SPECS = [
  { label: 'Material Único', value: 'Pino Regional (Pinus spp.)' },
  { label: 'Dimensiones Tipo S-01', value: '320 × 320 mm · Elevación 210 mm' },
  { label: 'Ensamble Estructural', value: '6 Piezas · Espesor 18 mm · R75 mm' },
  { label: 'Ingeniería Digital', value: 'Solidworks / OpenSCAD · Escala 1:4' },
];

export const BLUEPRINT_VIEWS: BlueprintView[] = [
  {
    id: 'type-s01',
    label: 'Despiece Tipo S-01',
    subtitle: 'Vista explotada en madera de pino · Escala 1:4',
    image: '/assets/aistudio/3cc87d55-d35c-43c0-b65f-e2af62c22a69_b2d84042.webp',
    alt: 'Plano técnico explotado de la Base de Exhibición Ornamental Tipo S-01 mostrando plataforma circular, cuatro patas en voluta y anillo estabilizador',
    scaleLabel: 'Escala 1:4 · 6 Piezas',
    notes: 'Despiece integral de la base ornamental Tipo S-01 en madera de pino (espesor bruto 22 mm, cepillado neto 18 mm). Todas las cargas axiales se distribuyen hacia el aro concéntrico mediante ajustes por fricción.',
  },
  {
    id: 'wd-101',
    label: 'Plano WD-101 (A-A)',
    subtitle: 'Proyecciones ortogonales, corte A-A y detalles B, C, D',
    image: '/assets/aistudio/Ornate_Display_Stand_-_Copy_cd743f86.webp',
    alt: 'Lámina de ingeniería WD-101 del Soporte Ornamental Tipo S-01 con planta superior, elevación frontal, corte sección A-A y detalles 1:1',
    scaleLabel: 'Escala 1:2 & 1:1 · Sheet WD-101',
    notes: 'Lámina WD-101 firmada por J. Nava (20 Nov 2026) con cotas completas: 320 × 320 mm, elevación 210 mm, espesor 18 mm, radio R75 mm y acercamientos 1:1 de los detalles B, C y D.',
  },
  {
    id: 'pins-study',
    label: 'Estudio con Pernos',
    subtitle: 'Mesa de dibujo y pernos de fijación',
    image: '/assets/aistudio/ade3262e-9218-46da-a4e7-f2cd67facec1_1600521a.webp',
    alt: 'Estudio técnico tridimensional con tablero de dibujo mostrando los cuatro pernos de ensamble y geometría de pata curvada',
    scaleLabel: 'Pernos & Alineación',
    notes: 'Estudio geométrico de la curva en S y los cuatro pernos cilíndricos torneados que bloquean la plataforma superior contra las cabezas de las patas.',
  },
  {
    id: 'castle-joint',
    label: 'Ensamble Triple',
    subtitle: 'Papelería oficial y nudo estructural en madera',
    image: '/assets/aistudio/navawoodworks_hoja_membretada_oficial_53418f0e.png',
    alt: 'Hoja membretada oficial de Nava Woodworks con diagrama de ensamble triple en madera maciza, formón y virutas de nogal',
    scaleLabel: 'Nudo Triaxial · Ebanistería',
    notes: 'Ensamble triaxial de caja y espiga entrelazada empleado en las líneas arquitectónicas del taller para uniones limpias sin herrajes visibles.',
  },
  {
    id: 'chair-bom',
    label: 'Despiece Sillón (BOM)',
    subtitle: 'Vista explosionada y lista de materiales (11 componentes)',
    image: '/assets/aistudio/Explode_view_with_BOM_640ae099.webp',
    alt: 'Vista explosionada de sillón ergonómico de listones con numeración de piezas del 1 al 11 y tabla Bill of Materials',
    scaleLabel: '11 Piezas · Caja y Espiga',
    notes: 'Despiece constructivo de sillón de listones con tabla de materiales (BOM): riel superior y listones de respaldo, descansabrazos izquierdo y derecho, asiento ergonómico, patas perfiladas y faldones con ensamble de espiga y mortaja.',
  },
  {
    id: 'chair-cad',
    label: 'Plano CAD Sillón E-01',
    subtitle: 'Proyecciones paramétricas reales (37-1/2" × 23-3/4" × 35-3/8" · 170.36°)',
    image: '/assets/aistudio/Sillon_Ergonomico_ce84502a.PNG',
    alt: 'Lámina CAD paramétrica del Sillón Ergonómico con vista isométrica, planta superior (37-1/2 x 23-3/4 in), elevación lateral (170.36 deg, 24 in, 16-1/4 in) y vista posterior (31 in)',
    scaleLabel: '95 × 60 × 90 cm · 170.36°',
    notes: 'Plano paramétrico oficial del Sillón Ergonómico E-01: ancho total 37-1/2" (95 cm, luz interior 31"), fondo 23-3/4" (60 cm), alto 35-3/8" (90 cm), altura de asiento 16-1/4", descansabrazos a 24", patas de 2" e inclinación ergonómica de respaldo de 170.36°.',
    fitMode: 'contain',
    pdfUrl: '/assets/aistudio/Sillon_Ergonomico_0859ca67.pdf',
    pdfLabel: 'Descargar Plano CAD (PDF)',
  },
  {
    id: 'banca-bom',
    label: 'Despiece Banca (BOM)',
    subtitle: 'Vista explosionada 3D y tabla de componentes de banca',
    image: '/assets/aistudio/Banca_Explode_view_with_BOM_16decd35.webp',
    alt: 'Vista explosionada 3D de banca artesanal con tabla Bill of Materials, listones de respaldo, panel de asiento, ensambles de brazos/patas y faldones',
    scaleLabel: '18 Ítems · Caja y Espiga',
    notes: 'Despiece constructivo de la banca artesanal con tabla de materiales (BOM): riel superior y 10 listones de respaldo, panel de asiento ranurado, ensambles laterales de descansabrazos/patas y faldones frontal y perimetrales.',
  },
];

export const TYPE_S01_COMPONENTS: BlueprintComponent[] = [
  {
    id: 'platform',
    code: 'Pieza P-01',
    name: 'Plato Circular Superior',
    quantity: '1 pieza',
    joinery: 'Detail B · Mortajas y cola de milano',
    description: 'Disco macizo de pino (Ø270 mm exterior, Ø220 mm útil × 18 mm neto; bruto 285 × 285 × 22 mm) con vaciado interior a 6 mm de profundidad, mortajas perimetrales y ranuras en cola de milano.',
    tolerance: 'Ø270 × 18 mm',
    linkedCutCode: 'P-01',
    pin: { x: 49, y: 28 },
  },
  {
    id: 'legs',
    code: 'Pieza P-02',
    name: 'Patas Esculpidas en "S"',
    quantity: '4 piezas',
    joinery: 'Curvatura R75 mm · Detail C y D',
    description: 'Cuatro soportes perfilados en curvatura anatómica R75 mm (320 × 135 × 18 mm neto; bruto 335 × 145 × 22 mm) con espiga rectangular superior (Detail C) y rebate curvo (Detail D).',
    tolerance: '320 × 135 × 18 mm',
    linkedCutCode: 'P-02',
    pin: { x: 32, y: 54 },
  },
  {
    id: 'ring',
    code: 'Pieza P-03',
    name: 'Aro Concéntrico de Estabilización',
    quantity: '1 pieza',
    joinery: 'Detail D · Encaje a media madera',
    description: 'Aro inferior de pino (Ø195 mm exterior × 18 × 18 mm neto; bruto 225 × 225 × 22 mm) con fresado circular continuo y 4 muescas de encaje a media madera.',
    tolerance: 'Ø195 × 18 × 18 mm',
    linkedCutCode: 'P-03',
    pin: { x: 52, y: 61 },
  },
  {
    id: 'dovetail',
    code: 'Detail B',
    name: 'Ranura Cola de Milano',
    quantity: '4 uniones',
    joinery: 'Cola de milano deslizante',
    description: 'Guía trapezoidal mecanizada en el perímetro del Plato Circular Superior (P-01) para recibir y bloquear las cabezas de las cuatro patas.',
    tolerance: 'Ajuste exacto',
    linkedCutCode: 'P-01',
    pin: { x: 64, y: 31 },
  },
  {
    id: 'mortise',
    code: 'Detail C / D',
    name: 'Espiga Superior y Rebate a Media Madera',
    quantity: '4 uniones',
    joinery: 'Fricción en seco (Friction Fit)',
    description: 'Espiga rectangular superior (Detail C) y encaje curvo a media madera contra el aro estabilizador (Detail D), calibrados para trabajar sin clavos.',
    tolerance: '±0.15 mm',
    linkedCutCode: 'P-02',
    pin: { x: 67, y: 57 },
  },
];

export interface CutlistSheet {
  id: 'type-s01' | 'sillon-e01' | 'banca' | 'mobiliario-autor';
  label: string;
  title: string;
  subtitle: string;
  blueprintViewId: BlueprintView['id'];
  csvPath: string;
  csvFilename: string;
  thicknessNote: string;
  footerActionNote: string;
  items: LumberCutItem[];
}

export const CUTLIST_SOURCE_PATH =
  '/assets/aistudio/Copia_de_Hoja_T_cnica_de_Despiece_y_Cubicaje_de_Madera__Ornate_Display_Stand__Tipo_S-01_-_Madera_de_Pino__0d7c78af';

export const LUMBER_CUTLIST: LumberCutItem[] = [
  {
    code: 'P-01',
    componentId: 'platform',
    description: 'Plato Circular Superior',
    qty: 1,
    grossDimensions: '285 x 285 x 22 mm',
    netDimensions: 'Ø270 (útil Ø220) x 18 mm',
    grossDimsMm: [285, 285, 22],
    machining:
      'Vaciado interior a 6 mm de profundidad, mortajas perimetrales y ranuras en cola de milano (Detail B)',
  },
  {
    code: 'P-02',
    componentId: 'legs',
    description: 'Patas Esculpidas en "S"',
    qty: 4,
    grossDimensions: '335 x 145 x 22 mm',
    netDimensions: '320 x 135 x 18 mm',
    grossDimsMm: [335, 145, 22],
    machining:
      'Perfil anatómico en curvatura R75 mm, espiga rectangular superior (Detail C) y rebate curvo (Detail D)',
  },
  {
    code: 'P-03',
    componentId: 'ring',
    description: 'Aro Concéntrico de Estabilización',
    qty: 1,
    grossDimensions: '225 x 225 x 22 mm',
    netDimensions: 'Ø195 (exterior) x 18 x 18 mm',
    grossDimsMm: [225, 225, 22],
    machining:
      'Fresado circular continuo con 4 muescas de encaje a media madera (Detail D)',
  },
];

export const CUTLIST_SHEETS: CutlistSheet[] = [
  {
    id: 'type-s01',
    label: 'Pedestal Tipo S-01',
    title: 'Ornate Display Stand Tipo S-01 — Lista de Corte',
    subtitle: 'Hoja Técnica de Despiece y Cubicaje · Madera de Pino',
    blueprintViewId: 'type-s01',
    csvPath: CUTLIST_SOURCE_PATH,
    csvFilename: 'Hoja_Tecnica_Despiece_Tipo_S-01_Pino.csv',
    thicknessNote: 'Madera de pino · Espesor bruto 22 mm / neto 18 mm',
    footerActionNote: 'Haz clic en cualquier fila para ubicar la pieza en el plano',
    items: LUMBER_CUTLIST,
  },
  {
    id: 'sillon-e01',
    label: 'Sillón Ergonómico (E-01)',
    title: 'Sillón Ergonómico de Listones Tipo E-01 — Lista de Corte',
    subtitle: 'Despiece CAD Base 95 × 60 × 90 cm (37-1/2" × 23-3/4" × 35-3/8" · 170.36°)',
    blueprintViewId: 'chair-cad',
    csvPath: '/assets/aistudio/Hoja_Tecnica_Despiece_Sillon_Ergonomico_E01_Pino.csv',
    csvFilename: 'Hoja_Tecnica_Despiece_Sillon_Ergonomico_E01_Pino.csv',
    thicknessNote: 'Pino Claras/FAS · Luz 31" · Patas 2" · Ajustable según medidas',
    footerActionNote: 'Cotas paramétricas tomadas del plano CAD oficial (PDF / PNG)',
    items: [
      {
        code: 'E-01',
        componentId: 'e01-rail',
        description: 'Riel Superior e Inferior de Respaldo (Luz 31")',
        qty: 2,
        grossDimensions: '815 x 95 x 32 mm',
        netDimensions: '787 x 80 x 26 mm',
        grossDimsMm: [815, 95, 32],
        machining: 'Espigas laterales de caja cerrada y ranura para 7 listones',
      },
      {
        code: 'E-02',
        componentId: 'e01-back-slats',
        description: 'Listones Verticales de Respaldo (Ancho 3" · Paso 1-1/4")',
        qty: 7,
        grossDimensions: '230 x 86 x 24 mm',
        netDimensions: '206 x 76 x 19 mm',
        grossDimsMm: [230, 86, 24],
        machining: 'Espigas calibradas en serie para vano de 8-1/8"',
      },
      {
        code: 'E-03',
        componentId: 'e01-arms',
        description: 'Descansabrazos Perfilados (Altura 24")',
        qty: 2,
        grossDimensions: '625 x 95 x 32 mm',
        netDimensions: '603 x 82 x 26 mm',
        grossDimsMm: [625, 95, 32],
        machining: 'Rebaje frontal y mortaja pasante para pata trasera a 170.36°',
      },
      {
        code: 'E-04',
        componentId: 'e01-seat-slats',
        description: 'Listones Curvos de Asiento (Luz 31" · Concavidad 3/8")',
        qty: 7,
        grossDimensions: '810 x 70 x 24 mm',
        netDimensions: '787 x 60 x 19 mm',
        grossDimsMm: [810, 70, 24],
        machining: 'Perfil anatómico de asiento (altura 16-1/4") con fijación oculta',
      },
      {
        code: 'E-05',
        componentId: 'e01-back-legs',
        description: 'Patas Traseras Inclinadas (Alto 35-3/8" · 170.36°)',
        qty: 2,
        grossDimensions: '925 x 100 x 56 mm',
        netDimensions: '898 x 85 x 51 mm',
        grossDimsMm: [925, 100, 56],
        machining: 'Espesor 2" con cajas dobles para faldón y rieles de respaldo',
      },
      {
        code: 'E-06',
        componentId: 'e01-front-legs',
        description: 'Patas Delanteras (Alto 24" · Sección 2")',
        qty: 2,
        grossDimensions: '630 x 58 x 56 mm',
        netDimensions: '610 x 51 x 51 mm',
        grossDimsMm: [630, 58, 56],
        machining: 'Espiga superior hacia descansabrazo y caja lateral para faldón',
      },
      {
        code: 'E-07',
        componentId: 'e01-front-apron',
        description: 'Faldón Frontal (Luz 31" × Alto 2-1/4")',
        qty: 1,
        grossDimensions: '815 x 68 x 30 mm',
        netDimensions: '787 x 57 x 24 mm',
        grossDimsMm: [815, 68, 30],
        machining: 'Doble espiga en extremos y placa frontal grabada opcional',
      },
      {
        code: 'E-08',
        componentId: 'e01-side-aprons',
        description: 'Faldones Laterales y Largueros (Luz 15-3/8")',
        qty: 4,
        grossDimensions: '445 x 68 x 30 mm',
        netDimensions: '425 x 57 x 24 mm',
        grossDimsMm: [445, 68, 30],
        machining: 'Espigas rectas con ajuste por fricción y adhesivo D4 marino',
      },
    ],
  },
  {
    id: 'banca',
    label: 'Banca Ergonómica',
    title: 'Banca Ergonómica de Listones — Lista de Corte',
    subtitle: 'Despiece Base 142 × 60 × 90 cm (56" × 23-7/8" × 35-1/2") · Ajustable según medidas',
    blueprintViewId: 'banca-bom',
    csvPath: '/assets/aistudio/Hoja_Tecnica_Despiece_Banca_Ergonomica_Pino.csv',
    csvFilename: 'Hoja_Tecnica_Despiece_Banca_Ergonomica_Pino.csv',
    thicknessNote: 'Pino Claras/FAS · Ensamble a caja y espiga · Ajustable según medidas',
    footerActionNote: 'Incluye despiece 3D con BOM de 18 ítems para fabricación en taller',
    items: [
      {
        code: 'B-01',
        componentId: 'b01-rails',
        description: 'Rieles Superior e Inferior de Respaldo (BOM #1–2)',
        qty: 2,
        grossDimensions: '1340 x 95 x 32 mm',
        netDimensions: '1310 x 80 x 26 mm',
        grossDimsMm: [1340, 95, 32],
        machining: 'Espigas escalonadas en extremos y ranura longitudinal para listones',
      },
      {
        code: 'B-02',
        componentId: 'b01-back-slats',
        description: 'Listones Verticales de Respaldo (BOM #4)',
        qty: 10,
        grossDimensions: '410 x 75 x 22 mm',
        netDimensions: '390 x 65 x 18 mm',
        grossDimsMm: [410, 75, 22],
        machining: 'Espigas de ensamble superior/inferior con cantos biselados',
      },
      {
        code: 'B-03',
        componentId: 'b01-posts',
        description: 'Montantes y Patas de Brazos Izq./Der. (BOM #3)',
        qty: 4,
        grossDimensions: '925 x 85 x 52 mm',
        netDimensions: '902 x 72 x 45 mm',
        grossDimsMm: [925, 85, 52],
        machining: 'Cajas pasantes múltiples para faldones y rieles de respaldo',
      },
      {
        code: 'B-04',
        componentId: 'b01-arms',
        description: 'Descansabrazos Esculpidos (BOM #3)',
        qty: 2,
        grossDimensions: '620 x 95 x 32 mm',
        netDimensions: '595 x 82 x 26 mm',
        grossDimsMm: [620, 95, 32],
        machining: 'Curva ergonómica superior y mortajas ciegas sobre montantes',
      },
      {
        code: 'B-05',
        componentId: 'b01-balusters',
        description: 'Balaustres Laterales bajo Brazos',
        qty: 6,
        grossDimensions: '340 x 45 x 24 mm',
        netDimensions: '320 x 38 x 20 mm',
        grossDimsMm: [340, 45, 24],
        machining: 'Espigas rectas entre faldón lateral y descansabrazos',
      },
      {
        code: 'B-06',
        componentId: 'b01-seat-slats',
        description: 'Listones y Marco de Panel de Asiento (BOM #4/#8)',
        qty: 12,
        grossDimensions: '1330 x 68 x 24 mm',
        netDimensions: '1305 x 56 x 19 mm',
        grossDimsMm: [1330, 68, 24],
        machining: 'Listones longitudinales de drenaje con espaciado uniforme 8 mm',
      },
      {
        code: 'B-07',
        componentId: 'b01-aprons',
        description: 'Faldón Frontal y Travesaños Perimetrales (BOM #5)',
        qty: 4,
        grossDimensions: '1340 x 110 x 32 mm',
        netDimensions: '1310 x 95 x 26 mm',
        grossDimsMm: [1340, 110, 32],
        machining: 'Espiga doble de alta carga y refuerzo inferior del panel de asiento',
      },
    ],
  },
  {
    id: 'mobiliario-autor',
    label: 'Mobiliario de Autor',
    title: 'Mobiliario de Autor (Ref. Mesa 180 × 90 × 75 cm) — Lista de Corte',
    subtitle: 'Despiece Paramétrico Base · Mismo Tabulador de Material y Mano de Obra según Medidas',
    blueprintViewId: 'castle-joint',
    csvPath: '/assets/aistudio/Hoja_Tecnica_Despiece_Mobiliario_Autor_Pino.csv',
    csvFilename: 'Hoja_Tecnica_Despiece_Mobiliario_Autor_Pino.csv',
    thicknessNote: 'Pino Macizo Estructural · Nudo triaxial y cola de milano deslizante',
    footerActionNote: 'Las dimensiones finales de corte y cubicaje se ajustan a cada encargo',
    items: [
      {
        code: 'MA-01',
        componentId: 'ma-top',
        description: 'Duelas de Tablero Macizo (Ref. Mesa 180×90 cm)',
        qty: 5,
        grossDimensions: '1840 x 195 x 48 mm',
        netDimensions: '1800 x 180 x 42 mm',
        grossDimsMm: [1840, 195, 48],
        machining: 'Canteado de precisión y unión por lengüeta con canto vivo opcional',
      },
      {
        code: 'MA-02',
        componentId: 'ma-rails',
        description: 'Largueros Estructurales de Bastidor',
        qty: 2,
        grossDimensions: '1560 x 105 x 42 mm',
        netDimensions: '1520 x 92 x 36 mm',
        grossDimsMm: [1560, 105, 42],
        machining: 'Nudo triaxial de caja y espiga entrelazada + canal para tensores',
      },
      {
        code: 'MA-03',
        componentId: 'ma-stretchers',
        description: 'Travesaños de Amarre Anti-Alabeo',
        qty: 3,
        grossDimensions: '760 x 105 x 42 mm',
        netDimensions: '720 x 92 x 36 mm',
        grossDimsMm: [760, 105, 42],
        machining: 'Cola de milano deslizante bajo cubierta para expansión estacional',
      },
      {
        code: 'MA-04',
        componentId: 'ma-legs',
        description: 'Patas Estructurales de Carga',
        qty: 4,
        grossDimensions: '740 x 95 x 95 mm',
        netDimensions: '708 x 85 x 85 mm',
        grossDimsMm: [740, 95, 95],
        machining: 'Encaje triaxial de tres vías sin herrajes visibles y nivelador oculto',
      },
    ],
  },
];

export const GALLERY_ARTIFACTS: GalleryArtifact[] = [
  {
    id: 'emblem',
    group: 'identidad',
    title: 'Emblema Oficial en Relieve',
    category: 'Identidad de Taller',
    year: 'Bahía de Kino',
    caption: 'Escudo tallado con engrane, martillo y escuadra formando el monograma N entre ramas de laurel.',
    image: '/assets/aistudio/Logo_Nava_Woodworks_2_4626c698.png',
    alt: 'Logotipo oficial de Nava Woodworks and Designs tallado en relieve sobre veta de madera oscura',
    fitMode: 'cover',
  },
  {
    id: 'hybrid-card',
    group: 'identidad',
    title: 'Diseño & Construcción Híbrida',
    category: 'Acero & Madera',
    year: 'Serie Técnica',
    caption: 'Tarjeta física híbrida de acero cepillado con pernos Allen e inserto de madera grabado junto a cepillo manual y formón.',
    image: '/assets/aistudio/navawoodworks_tarjeta_presentacion_nueva_e84f9015.png',
    alt: 'Tarjetas de presentación híbridas en acero cepillado y madera para Juan Nava Maestro Ebanista',
    fitMode: 'cover',
  },
  {
    id: 'brass-card',
    group: 'identidad',
    title: 'Maestro Ebanista · Edición Latón',
    category: 'Latón & Madera',
    year: 'Edición Clásica',
    caption: 'Presentación en madera enmarcada en latón envejecido con tornillería ranurada: Juan Nava, Maestro Ebanista.',
    image: '/assets/aistudio/navawoodworks_tarjeta_oficial_28486cd3.png',
    alt: 'Tarjeta oficial de Juan Nava Maestro Ebanista en madera con marco y tornillos de latón',
    fitMode: 'cover',
  },
  {
    id: 'wd-101-sheet',
    group: 'planos',
    title: 'Lámina Técnica WD-101 · Tipo S-01',
    category: 'Planos & Cortes A-A',
    year: 'Escala 1:2 & 1:1',
    caption: 'Planta superior, elevación frontal, corte sección A-A y detalles constructivos B, C y D diseñados por J. Nava (320 × 320 mm, R75).',
    image: '/assets/aistudio/Ornate_Display_Stand_-_Copy_cd743f86.webp',
    alt: 'Lámina técnica WD-101 del Soporte Ornamental Tipo S-01 con vistas ortogonales, sección A-A y detalles de ensamble',
    fitMode: 'contain',
  },
  {
    id: 'bench-cad-ortho',
    group: 'banca',
    title: 'Banca Ergonómica · Vistas CAD',
    category: 'Proyección Ortogonal',
    year: '53.00 × 23.78 × 35.50',
    caption: 'Plano ortogonal CAD con vista isométrica, vista de arriba, vista de frente y vista de lado acotadas para fabricación en taller.',
    image: '/assets/aistudio/Banca_f7e5bd92.JPG',
    alt: 'Plano CAD ortogonal de banca ergonómica mostrando vista de arriba, vista de frente, vista de lado e isométrico',
    fitMode: 'contain',
  },
  {
    id: 'bench-study-split',
    group: 'banca',
    title: 'Banca de Jardín · Modelo 3D y Entorno',
    category: 'Visualización 3D',
    year: 'Serie Bancas',
    caption: 'Comparativa entre el modelo paramétrico tridimensional y la pieza instalada en ambiente exterior natural.',
    image: '/assets/aistudio/Dibujo_de_banca_-_Copy_27ac2b5e.png',
    alt: 'Comparativa del modelo 3D CAD y render exterior de banca de madera artesanal',
    fitMode: 'cover',
  },
  {
    id: 'bench-outdoor-render',
    group: 'banca',
    title: 'Banca Artesanal · Render Exterior',
    category: 'Mobiliario Exterior',
    year: 'Acabado Protector',
    caption: 'Presentación ambiental de la banca de listones ergonómicos diseñada para terrazas, jardines y espacios abiertos.',
    image: '/assets/aistudio/Untitled_Project_84a46012.png',
    alt: 'Render tridimensional de banca artesanal de madera ubicada sobre área verde exterior',
    fitMode: 'cover',
  },
  {
    id: 'bench-exploded-bom',
    group: 'planos',
    title: 'Despiece Constructivo y Lista de Materiales · Banca',
    category: 'Ingeniería de Ebanistería',
    year: 'Detalles 1–4',
    caption: 'Diagrama explosionado completo de la banca (35-1/2" × 56" × 23-7/8") con geometría de mortajas en patas y tabla de materiales A–N.',
    image: '/assets/aistudio/Bench_Drawing_-_Copy_3998d720.png',
    alt: 'Diagrama explosionado y lista de materiales para banca artesanal con detalles de espiga y mortaja',
    fitMode: 'contain',
  },
  {
    id: 'chair-exploded-bom',
    group: 'planos',
    title: 'Despiece con Lista de Materiales (BOM) · Sillón de Listones',
    category: 'Ingeniería de Ebanistería',
    year: '11 Componentes',
    caption: 'Vista explosionada de estudio con tabla de materiales (Items 1–11): riel y listones de respaldo, descansabrazos, asiento curvo, patas traseras/delanteras y faldones.',
    image: '/assets/aistudio/Explode_view_with_BOM_640ae099.webp',
    alt: 'Vista explosionada de sillón artesanal de listones con numeración de componentes y tabla Bill of Materials',
    fitMode: 'cover',
  },
  {
    id: 'chair-exploded-studio',
    group: 'banca',
    title: 'Sillón Ergonómico · Despiece Limpio de Estudio',
    category: 'Serie Bancas y Sillones',
    year: 'Caja y Espiga',
    caption: 'Estudio visual limpio de los ensambles de espiga y mortaja en patas, faldones laterales y listones ergonómicos de asiento y respaldo.',
    image: '/assets/aistudio/af8c34d8-acac-4719-8a07-ef2f06b833b1_d1a0f2ac.webp',
    alt: 'Despiece limpio de sillón ergonómico de madera en estudio mostrando espigas, mortajas y listones curvos',
    fitMode: 'cover',
  },
  {
    id: 'chair-exploded-workshop',
    group: 'banca',
    title: 'Sillón de Autor · Vista Explosionada en Taller',
    category: 'Taller Bahía de Kino',
    year: 'Placa Latón',
    caption: 'Presentación en ambiente de taller con banco de carpintería, formones, mazo de madera y placa distintiva en el faldón frontal.',
    image: '/assets/aistudio/f3d861aa-e6b8-470c-9fb3-6f54606ef5f8_68f75cb5.webp',
    alt: 'Sillón de listones en vista explosionada dentro del taller de carpintería con banco de trabajo y herramientas',
    fitMode: 'cover',
  },
  {
    id: 'banca-exploded-3d-bom',
    group: 'planos',
    title: 'Despiece 3D con Lista de Materiales (BOM) · Banca',
    category: 'Ingeniería de Ebanistería',
    year: 'Serie Bancas',
    caption: 'Diagrama 3D explosionado de la banca ergonómica con tabla de materiales (BOM): riel superior, listones de respaldo, panel de asiento, laterales de brazo/pata y faldones con espiga y mortaja.',
    image: '/assets/aistudio/Banca_Explode_view_with_BOM_16decd35.webp',
    alt: 'Diagrama 3D explosionado de banca de madera con tabla Bill of Materials y detalles de ensamble a caja y espiga',
    fitMode: 'contain',
  },
  {
    id: 'sillon-cad-ortho',
    group: 'planos',
    title: 'Plano Paramétrico CAD · Sillón Ergonómico E-01',
    category: 'Proyección Ortogonal + PDF',
    year: '37-1/2" × 23-3/4" × 35-3/8"',
    caption: 'Lámina CAD oficial con vistas ortogonales e isométricas acotadas (luz 31", respaldo 170.36°, asiento 16-1/4", brazo 24", listones de 3" y concavidad 3/8").',
    image: '/assets/aistudio/Sillon_Ergonomico_ce84502a.PNG',
    alt: 'Plano CAD ortogonal e isométrico del Sillón Ergonómico E-01 con cotas en pulgadas y ángulo de respaldo de 170.36 grados',
    fitMode: 'contain',
    pdfUrl: '/assets/aistudio/Sillon_Ergonomico_0859ca67.pdf',
    pdfLabel: 'Descargar Plano CAD (PDF)',
  },
  {
    id: 'pixel-a-madera-presentation',
    group: 'identidad',
    title: 'Del Píxel a la Madera',
    category: 'Presentación Oficial',
    year: 'Nava Woodworks & Designs',
    caption: 'Presentación completa del proceso creativo e industrial: del diseño digital a la fabricación artesanal en madera.',
    image: '/assets/aistudio/navawoodworks_hoja_membretada_oficial_53418f0e.png',
    alt: 'Presentación oficial Del Píxel a la Madera de Nava Woodworks and Designs',
    fitMode: 'cover',
    pptxUrl: '/assets/aistudio/Del_Pixel_a_la_Madera.pptx',
    pptxLabel: 'Descargar Presentación (PPTX)',
  },
  {
    id: 'base-con-movimiento',
    group: 'banca',
    title: 'Base con Movimiento',
    category: 'Diseño Mecánico',
    year: 'Serie Funcional',
    caption: 'Base artesanal animada que muestra el movimiento y los ensambles estructurales de la pieza.',
    image: '/assets/aistudio/Base con movimiento.gif',
    alt: 'Animación de una base artesanal de madera con movimiento',
    fitMode: 'cover',
  },
];

export interface ProductLineItem {
  id: 'tipo-s01' | 'tipo-t01' | 'tipo-e01' | 'arquitectonica';
  filterCategory: 'pedestales' | 'taburetes' | 'sillones' | 'arquitectonica';
  code: string;
  title: string;
  subtitle: string;
  materialSpec: string;
  summary: string;
  highlights: string[];
  primaryImage: string;
  primaryAlt: string;
  secondaryImages?: { label: string; src: string; alt: string }[];
  quoteProductId: string;
}

export interface ArchitecturalSubcollection {
  id: string;
  name: string;
  description: string;
  application: string;
}

export interface QuoteCatalogItem {
  id: 'taburete-t01' | 'soporte-s01' | 'sillon-e01' | 'proyecto-medida';
  name: string;
  code: string;
  isCustomQuote: boolean;
  unitPriceMxn: number;
  baseWeeks: number;
  summary: string;
}

export const WOOD_OPTIONS: WoodOption[] = [
  {
    id: 'pino',
    name: 'Pino Regional Macizo',
    origin: 'Madera única del taller',
    toneHex: '#C59B6D',
    grainNote:
      'Construcción exclusiva en Pino Regional Macizo tratado con selladores higroscópicos y protección UV para resistir humedad salina y radiación solar en ambientes costeros.',
    baseWeeks: 4,
  },
];

export const METAL_OPTIONS: MetalOption[] = [
  {
    id: 'wood-only',
    name: 'Solo Madera (Ensamble Tradicional)',
    finish: 'Espiga, mortaja y cola de milano sin fijadores',
    swatchHex: '#5A3E2B',
    extraWeeks: 0,
  },
  {
    id: 'brushed-brass',
    name: 'Latón Envejecido',
    finish: 'Marcos, pernos ranurados e incrustaciones',
    swatchHex: '#A67C37',
    extraWeeks: 1,
  },
  {
    id: 'brushed-steel',
    name: 'Acero Inoxidable Cepillado',
    finish: 'Bastidores anticorrosivos para clima costero',
    swatchHex: '#8E9499',
    extraWeeks: 2,
  },
  {
    id: 'steel-concrete',
    name: 'Híbrido Madera · Acero · Concreto',
    finish: 'Acero cepillado y concreto fundido estructural',
    swatchHex: '#63666A',
    extraWeeks: 2,
  },
];

export const SURFACE_FINISH_OPTIONS: SurfaceFinishOption[] = [
  {
    id: 'wax',
    name: 'Cera Lustrada + Sellador Higroscópico',
    description: 'Barrera contra humedad ambiental con tacto sedoso tradicional a base de cera natural.',
  },
  {
    id: 'tung',
    name: 'Aceite de Tung + Protección UV',
    description: 'Impregnación profunda con filtro ultravioleta ideal para terrazas y costas.',
  },
  {
    id: 'matte',
    name: 'Laca Mate Arquitectónica UV',
    description: 'Sellado de poro abierto de alta resistencia al tránsito diario y brisa marina.',
  },
];

export const PRODUCT_LINES: ProductLineItem[] = [
  {
    id: 'tipo-s01',
    filterCategory: 'pedestales',
    code: 'Tipo S-01',
    title: 'Soporte Ornamental / Pedestal de Exhibición',
    subtitle: '320 × 320 mm · Elevación libre 210 mm · Plato Ø270 mm',
    materialSpec: 'Pino Regional Macizo (Pinus spp.) · 18 mm nominal',
    summary:
      'Estándar emblemático en pino macizo secado en horno. Integra cuatro detalles de ensamblaje sin tornillería vista: mortaja y espiga (A/C), ranura a cola de milano (B) y unión de aro estabilizador inferior (D) sobre patas en "S" de radio R75 mm.',
    highlights: [
      'Altura total 320 mm · Elevación de plataforma 210 mm · Plato Ø270 / útil Ø220 mm',
      'Curvatura de patas en "S" con radios interno y externo de R75 mm',
      'Diagramas de ingeniería completos y lista de cubicaje en CSV',
    ],
    primaryImage: '/assets/aistudio/ornate_display_stand_con_logotipo_58713b0c.png',
    primaryAlt:
      'Soporte Ornamental Tipo S-01 ensamblado en pino macizo con sello promocional de Nava Woodworks',
    secondaryImages: [
      {
        label: 'Vista de Estudio',
        src: '/assets/aistudio/1eb47aad-887d-4743-ac5f-ce388ef5b1d2_927c6071.webp',
        alt: 'Pedestal Tipo S-01 sobre banco de carpintería',
      },
      {
        label: 'Diagrama Explotado',
        src: '/assets/aistudio/3cc87d55-d35c-43c0-b65f-e2af62c22a69_b2d84042.webp',
        alt: 'Diagrama de ingeniería explotado Tipo S-01',
      },
      {
        label: 'Estudio con Pernos',
        src: '/assets/aistudio/ade3262e-9218-46da-a4e7-f2cd67facec1_1600521a.webp',
        alt: 'Diagrama de ingeniería con mesa de dibujo y pernos',
      },
    ],
    quoteProductId: 'soporte-s01',
  },
  {
    id: 'tipo-t01',
    filterCategory: 'taburetes',
    code: 'Tipo T-01',
    title: 'Taburete Artesanal',
    subtitle: 'Ensambles ocultos · Ergonomía adaptativa · Resistencia mecánica',
    materialSpec: 'Pino Regional Macizo · Sellador Higroscópico + UV',
    summary:
      'Solución de asiento compacto en pino macizo secado en horno y tratado contra variaciones higroscópicas costeras. Bastidor reforzado mediante caja y espiga en patas en "S" y travesaños inferiores para cargas estáticas y dinámicas.',
    highlights: [
      'Asiento cepillado con bordes suavemente biselados que resaltan la veta',
      'Construcción limpia sin fijaciones metálicas expuestas en el cuerpo principal',
      'Sellador transparente de alta resistencia a humedad e intemperie protegida',
    ],
    primaryImage: '/assets/aistudio/C026FC9B-CF63-4904-9995-793D2E10A159_a2c78f27.PNG',
    primaryAlt:
      'Taburete Artesanal Tipo T-01: vista armada y despiece estructural mostrando superficie en madera maciza, patas en S y anillo de soporte',
    quoteProductId: 'taburete-t01',
  },
  {
    id: 'tipo-e01',
    filterCategory: 'sillones',
    code: 'Tipo E-01',
    title: 'Sillón Ergonómico de Listones',
    subtitle: '95 × 60 × 90 cm (37-1/2" × 23-3/4" × 35-3/8") · Respaldo 170.36°',
    materialSpec: 'Pino Regional Macizo (5/4" habilitado) · Placa de Latón',
    summary:
      'Sillón lounge paramétrico con respaldo inclinado a 170.36°, asiento anatómico a 16-1/4" de altura (concavidad 3/8"), descansabrazos a 24" y 7 listones de 3" ensamblados a caja y espiga.',
    highlights: [
      'Cotas CAD verificadas: 37-1/2" ancho × 23-3/4" fondo × 35-3/8" alto (luz interior 31")',
      'Asiento curvo con listones biselados (altura 16-1/4") y patas macizas de 2"',
      '11 componentes documentados con tabla BOM, plano CAD en PDF y lista de corte',
    ],
    primaryImage: '/assets/aistudio/f3d861aa-e6b8-470c-9fb3-6f54606ef5f8_68f75cb5.webp',
    primaryAlt:
      'Sillón ergonómico de autor en vista explosionada dentro del taller de carpintería Nava Woodworks',
    secondaryImages: [
      {
        label: 'Despiece en Estudio',
        src: '/assets/aistudio/af8c34d8-acac-4719-8a07-ef2f06b833b1_d1a0f2ac.webp',
        alt: 'Despiece limpio de sillón ergonómico mostrando ensambles de espiga y mortaja',
      },
      {
        label: 'Despiece + BOM',
        src: '/assets/aistudio/Explode_view_with_BOM_640ae099.webp',
        alt: 'Vista explosionada con lista de materiales (BOM) numerada del 1 al 11',
      },
      {
        label: 'Plano CAD Ortogonal',
        src: '/assets/aistudio/Sillon_Ergonomico_ce84502a.PNG',
        alt: 'Plano CAD ortogonal del Sillón Ergonómico E-01 con cotas paramétricas',
      },
    ],
    quoteProductId: 'sillon-e01',
  },
  {
    id: 'arquitectonica',
    filterCategory: 'arquitectonica',
    code: 'Línea Arquitectónica',
    title: 'Mobiliario de Autor y Carpintería Estructural',
    subtitle: 'Sistemas híbridos madera-metal-concreto · Escala residencial y comercial',
    materialSpec: 'Pino Regional Macizo · Acero Inoxidable · Concreto',
    summary:
      'Proyectos personalizados desde mesas centrales con canto vivo y resinas UV hasta bancas de jardín, estructuras para cabañas, encofrados fundacionales y decks exteriores con sistemas de drenaje para el clima costero de Bahía de Kino.',
    highlights: [
      'Mesas personalizadas, bancas ergonómicas y repisas modulares',
      'Estructuras para cabañas, vigas maestras y encofrados fundacionales',
      'Decks estructurales exteriores con herrajes anticorrosivos',
    ],
    primaryImage: '/assets/aistudio/navawoodworks_hoja_membretada_oficial_53418f0e.png',
    primaryAlt:
      'Plano de nudo estructural triaxial sobre papelería oficial de Nava Woodworks para carpintería arquitectónica',
    secondaryImages: [
      {
        label: 'Despiece Banca + BOM',
        src: '/assets/aistudio/Banca_Explode_view_with_BOM_16decd35.webp',
        alt: 'Vista explosionada 3D de la banca ergonómica con lista de materiales (BOM)',
      },
      {
        label: 'Banca Exterior',
        src: '/assets/aistudio/Untitled_Project_84a46012.png',
        alt: 'Render tridimensional de banca artesanal de madera sobre área verde',
      },
      {
        label: 'Modelo 3D Banca',
        src: '/assets/aistudio/Dibujo_de_banca_-_Copy_27ac2b5e.png',
        alt: 'Comparativa entre modelo paramétrico 3D CAD y entorno exterior',
      },
    ],
    quoteProductId: 'proyecto-medida',
  },
];

export const ARCHITECTURAL_SUBCOLLECTIONS: ArchitecturalSubcollection[] = [
  {
    id: 'cabanas',
    name: 'Estructuras para Cabañas',
    description: 'Fabricación e instalación de entramados de madera y vigas maestras para edificaciones habitacionales.',
    application: 'Edificación ligera',
  },
  {
    id: 'encofrados',
    name: 'Encofrados y Bastidores Fundacionales',
    description: 'Marcos y encofrados estructurales que combinan madera tratada y refuerzos para cimentación.',
    application: 'Obra estructural',
  },
  {
    id: 'decks',
    name: 'Decks Estructurales Exteriores',
    description: 'Pisos y terrazas exteriores diseñados con sistemas de drenaje y soporte de carga optimizados.',
    application: 'Terrazas y costa',
  },
];

export interface ComparisonMatrixRow {
  line: string;
  focus: string;
  structure: string;
  finishes: string;
}

export const FURNITURE_COMPARISON_MATRIX: ComparisonMatrixRow[] = [
  {
    line: 'Mesas de Autor',
    focus: 'Piezas centrales de gran formato',
    structure: 'Pino macizo y bastidor metálico pesado',
    finishes: 'Vetas naturales, canto vivo (live edge) y resina UV',
  },
  {
    line: 'Sillas y Bancas',
    focus: 'Ergonomía y resistencia al tráfico',
    structure: 'Ensambles de espiga y mortaja',
    finishes: 'Tallado geométrico artesanal en respaldo',
  },
  {
    line: 'Taburetes Artesanales (T-01)',
    focus: 'Asiento compacto y auxiliar de acento',
    structure: 'Bastidor reforzado en pino macizo y ensambles mecánicos',
    finishes: 'Bordes suavemente biselados y sellador higroscópico',
  },
  {
    line: 'Estantería Modular',
    focus: 'Almacenamiento versátil y escalable',
    structure: 'Estructura vertical con herrajes modulares',
    finishes: 'Acabado mate resistente a la humedad',
  },
  {
    line: 'Soportes Ornamentales (S-01)',
    focus: 'Pedestales de exhibición y arte',
    structure: 'Pino macizo, aro concéntrico y 4 patas en "S"',
    finishes: 'Ensambles a cola de milano y mortaja vista',
  },
];

export const DIGITAL_WORKFLOW_STEPS = [
  {
    step: '01. Modelado Paramétrico',
    tool: 'Solidworks / OpenSCAD',
    description:
      'Generación de modelos tridimensionales para calcular proporciones, tolerancias exactas y listas de corte automatizadas.',
  },
  {
    step: '02. Visualización Tridimensional',
    tool: 'Axonométrica e Isométrica',
    description:
      'Proyección de vistas tridimensionales detalladas para la validación estética y estructural del cliente antes del corte.',
  },
  {
    step: '03. Planos de Despiece',
    tool: 'Cortes A-A y Detalles A–D',
    description:
      'Diagramas explosionados, proyecciones ortogonales y láminas de control de calidad en taller para cero desviaciones en sitio.',
  },
];

export const OFFICIAL_CATALOG_PATH =
  '/assets/aistudio/Cat_logo_Oficial_de_Productos_y_Servicios__NavaWoodworks_38b930f7';

export const T01_QUOTE_SOURCE_PATH =
  '/assets/aistudio/Copia_de_cotizacion_taburete_artesanal_pino_navawoodworks_v8_0a460167';

export const E01_QUOTE_SOURCE_PATH =
  '/assets/aistudio/Cotizacion_Sillon_Ergonomico_E01_Pino_v8.csv';

export interface T01MaterialRow {
  code: string;
  concept: string;
  unit: string;
  qty: string;
  unitPrice: number;
  subtotal: number;
}

export interface T01LaborRow {
  code: string;
  process: string;
  hours: number;
  hourlyRate: number;
  subtotal: number;
}

export const T01_QUOTATION_BREAKDOWN = {
  version: 'Cotización v8.0 · Emisión 20/11/2026',
  model: 'Taburete Artesanal Tipo T-01 y Pedestal Tipo S-01 (Pino Macizo + Aro)',
  leadTime: '5–7 días hábiles por unidad',
  warranty: '5 años en ensambles de carpintería fina',
  delivery: 'Taller Bahía de Kino / Envíos Flete',
  packagingAddonWithIva: 165.08,
  materialsTotal: 405.75,
  laborTotalHours: 11.0,
  laborTotal: 837.5,
  materials: [
    {
      code: 'MAT-01',
      concept: 'Madera Maciza Claras/FAS (5/4" habilitado + merma 60%)',
      unit: 'Pie Tabla (PT)',
      qty: '5',
      unitPrice: 48.75,
      subtotal: 243.75,
    },
    {
      code: 'MAT-02',
      concept: 'Adhesivo Estructural PVA D4 Resistencia Humedad Marino',
      unit: 'Litro',
      qty: '0.25',
      unitPrice: 165.0,
      subtotal: 41.25,
    },
    {
      code: 'MAT-03',
      concept: 'Aceite Penetrante Natural (Teak/Linaza) + Cera de Abeja',
      unit: 'Litro',
      qty: '0.20',
      unitPrice: 285.0,
      subtotal: 57.0,
    },
    {
      code: 'MAT-04',
      concept: 'Pliegos de Lija Progresiva (Granos 120, 180, 240, 320)',
      unit: 'Juego',
      qty: '1',
      unitPrice: 63.75,
      subtotal: 63.75,
    },
    {
      code: 'MAT-05',
      concept: 'Empaque de Protección y Embalaje (Opcional — A solicitud)',
      unit: 'Unidad',
      qty: 'Opcional',
      unitPrice: 112.5,
      subtotal: 0.0,
    },
  ] as T01MaterialRow[],
  labor: [
    {
      code: 'MO-01',
      process: 'Habilitado, canteado y cepillado de blancos de madera',
      hours: 1.5,
      hourlyRate: 90.0,
      subtotal: 135.0,
    },
    {
      code: 'MO-02',
      process: 'Trazo paramétrico y corte anatómico de patas en S (Sierra)',
      hours: 2.0,
      hourlyRate: 50.0,
      subtotal: 100.0,
    },
    {
      code: 'MO-03',
      process: 'Mecanizado de ensambles (Cola de Milano, Caja y Espiga)',
      hours: 2.5,
      hourlyRate: 55.0,
      subtotal: 137.5,
    },
    {
      code: 'MO-04',
      process: 'Torneado/Fresado de aro de soporte estabilizador inferior',
      hours: 1.5,
      hourlyRate: 100.0,
      subtotal: 150.0,
    },
    {
      code: 'MO-05',
      process: 'Ensamble estructural en seco, prensado y curado de uniones',
      hours: 1.5,
      hourlyRate: 90.0,
      subtotal: 135.0,
    },
    {
      code: 'MO-06',
      process: 'Lijado fino detallado a mano y aplicación de acabados',
      hours: 2.0,
      hourlyRate: 90.0,
      subtotal: 180.0,
    },
  ] as T01LaborRow[],
  commercialSummary: [
    { label: 'Costo Directo Total (Materiales + Mano de Obra)', value: 1243.25, highlight: false },
    { label: 'Gastos Indirectos de Taller & Maquinaria (15%)', value: 186.49, highlight: false },
    { label: 'Costo de Fabricación Total (Directo + Indirecto)', value: 1429.74, highlight: false },
    { label: 'Margen de Utilidad Bruta del Taller (10%)', value: 142.97, highlight: false },
    { label: 'Precio Sub-Total de Venta (Antes de IVA)', value: 1572.71, highlight: false },
    { label: 'Impuesto al Valor Agregado (IVA 16%)', value: 251.63, highlight: false },
    { label: 'Precio Total Final Base por Unidad (Sin Empaque)', value: 1824.35, highlight: true },
    { label: 'Opcional: Empaque y Embalaje de Protección (con IVA)', value: 165.08, highlight: false },
    { label: 'Precio Total Final con Empaque (Si se requiere)', value: 1989.43, highlight: true },
  ],
};

export const E01_QUOTATION_BREAKDOWN = {
  version: 'Tabulador Oficial v8.0 · Emisión 20/11/2026',
  model: 'Sillón Ergonómico, Banca y Mobiliario de Autor (Ajuste según Medidas)',
  leadTime: '10–15 días hábiles según medidas',
  warranty: '5 años en ensambles de carpintería fina',
  delivery: 'Taller Bahía de Kino / Envíos Flete',
  packagingAddonWithIva: 330.17,
  materialsTotal: 1246.5,
  laborTotalHours: 23.0,
  laborTotal: 1795.0,
  materials: [
    {
      code: 'MAT-01',
      concept: 'Madera Maciza Claras/FAS (5/4" habilitado + merma 60% · 11 piezas BOM)',
      unit: 'Pie Tabla (PT)',
      qty: '18',
      unitPrice: 48.75,
      subtotal: 877.5,
    },
    {
      code: 'MAT-02',
      concept: 'Adhesivo Estructural PVA D4 Resistencia Humedad Marino',
      unit: 'Litro',
      qty: '0.60',
      unitPrice: 165.0,
      subtotal: 99.0,
    },
    {
      code: 'MAT-03',
      concept: 'Aceite Penetrante Natural (Teak/Linaza) + Cera de Abeja',
      unit: 'Litro',
      qty: '0.50',
      unitPrice: 285.0,
      subtotal: 142.5,
    },
    {
      code: 'MAT-04',
      concept: 'Pliegos de Lija Progresiva (Granos 120, 180, 240, 320)',
      unit: 'Juego',
      qty: '2',
      unitPrice: 63.75,
      subtotal: 127.5,
    },
    {
      code: 'MAT-05',
      concept: 'Empaque de Protección y Embalaje Reforzado (Opcional — A solicitud)',
      unit: 'Unidad',
      qty: 'Opcional',
      unitPrice: 225.0,
      subtotal: 0.0,
    },
  ] as T01MaterialRow[],
  labor: [
    {
      code: 'MO-01',
      process: 'Habilitado, canteado y cepillado de blancos de madera (11 piezas BOM)',
      hours: 3.0,
      hourlyRate: 90.0,
      subtotal: 270.0,
    },
    {
      code: 'MO-02',
      process: 'Trazo paramétrico y perfilado de patas traseras/delanteras y descansabrazos',
      hours: 3.5,
      hourlyRate: 50.0,
      subtotal: 175.0,
    },
    {
      code: 'MO-03',
      process: 'Mecanizado de ensambles (16 cajas y espigas en patas, faldones y rieles)',
      hours: 5.0,
      hourlyRate: 55.0,
      subtotal: 275.0,
    },
    {
      code: 'MO-04',
      process: 'Corte, biselado y calibración de listones de respaldo y asiento curvo (14 pzas)',
      hours: 4.0,
      hourlyRate: 100.0,
      subtotal: 400.0,
    },
    {
      code: 'MO-05',
      process: 'Ensamble estructural en seco, escuadrado, prensado y curado de uniones',
      hours: 3.5,
      hourlyRate: 90.0,
      subtotal: 315.0,
    },
    {
      code: 'MO-06',
      process: 'Lijado fino detallado a mano, placa frontal y aplicación de acabados UV',
      hours: 4.0,
      hourlyRate: 90.0,
      subtotal: 360.0,
    },
  ] as T01LaborRow[],
  commercialSummary: [
    { label: 'Costo Directo Base (Materiales + Mano de Obra · Ref. CAD 95×60×90 cm)', value: 3041.5, highlight: false },
    { label: 'Gastos Indirectos de Taller & Maquinaria (15%)', value: 456.23, highlight: false },
    { label: 'Costo de Fabricación Base (Directo + Indirecto)', value: 3497.73, highlight: false },
    { label: 'Margen de Utilidad Bruta del Taller (10%)', value: 349.77, highlight: false },
    { label: 'Precio Sub-Total Base de Venta (Antes de IVA)', value: 3847.5, highlight: false },
    { label: 'Impuesto al Valor Agregado (IVA 16%)', value: 615.6, highlight: false },
    { label: 'Referencia Base por Unidad (Sujeta a Medidas Solicitadas)', value: 4463.1, highlight: true },
    { label: 'Opcional: Empaque y Embalaje Reforzado (con IVA)', value: 330.17, highlight: false },
    { label: 'Referencia Base con Empaque (Sujeta a Medidas)', value: 4793.26, highlight: true },
  ],
};

export const QUOTE_CATALOG: QuoteCatalogItem[] = [
  {
    id: 'taburete-t01',
    name: 'Taburete Artesanal Tipo T-01',
    code: 'Tipo T-01',
    isCustomQuote: false,
    unitPriceMxn: 1824.35,
    baseWeeks: 1,
    summary:
      'Presupuesto oficial v8.0 (IVA 16% incl.): Pino macizo + aro estabilizador, 11 hrs de ebanistería, garantía de 5 años y entrega en 5–7 días hábiles.',
  },
  {
    id: 'soporte-s01',
    name: 'Soporte Ornamental / Pedestal Tipo S-01',
    code: 'Tipo S-01',
    isCustomQuote: false,
    unitPriceMxn: 1824.35,
    baseWeeks: 1,
    summary:
      'Mismo costo de materiales y mano de obra que el Taburete T-01 (v8.0, IVA 16% incl.): 320 × 320 mm, elevación 210 mm, plato Ø270 mm, 11 hrs de ebanistería y garantía de 5 años.',
  },
  {
    id: 'sillon-e01',
    name: 'Sillón Ergonómico y Banca de Listones',
    code: 'Tipo E-01 / Banca',
    isCustomQuote: true,
    unitPriceMxn: 4463.1,
    baseWeeks: 2,
    summary:
      'Mismo costo unitario de material y mano de obra que Mobiliario de Autor (v8.0): el importe final depende de las medidas solicitadas (Largo × Fondo × Alto).',
  },
  {
    id: 'proyecto-medida',
    name: 'Mobiliario de Autor y Carpintería Estructural',
    code: 'A Medida',
    isCustomQuote: true,
    unitPriceMxn: 4463.1,
    baseWeeks: 3,
    summary:
      'Mesas de autor, estantería modular, cabañas, encofrados y decks exteriores con el mismo tabulador base de material y mano de obra según las medidas solicitadas.',
  },
];
