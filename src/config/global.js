export default {
  global: {
    componenteFormativo: 'Arte conceptual y diseño 3D',
    descripcionCurso:
      'Se explican conceptos básicos del diseño, desarrollo de personajes, conocimientos del color, modelado en 3D y texturizado.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Formas primarias y composición dinámica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Formas primarias y temas emocionales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Identidad en los personajes',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Anatomía básica',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Diseño de personajes',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Escenarios y props',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Blueprint',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Texturas y color',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Conceptos de 3D y modelado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Personajes',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Escenarios y props',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Materiales y texturizado',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Blender. (s.f.). Introducing: SCULPT EXPAND | Blender development preview [video]. YouTube.  ',
      link: 'https://www.youtube.com/watch?v=XT7h6lmE5bc&ab_channel=Blender',
    },
    {
      referencia:
        'Blendtuts-ES. (2019). HDRIs y materiales PBR (introducción a Blender 2.80 #35) [video]. YouTube.  ',
      link: 'https://www.youtube.com/watch?v=twkX4Hwl8AA&t=452',
    },
    {
      referencia:
        'Blendtuts-ES. (2019). Shading básico (materiales) (introducción a Blender 2.80 #31) [video]. YouTube.  ',
      link: 'https://www.youtube.com/watch?v=_HlV4DUjnDY',
    },
    {
      referencia: 'Paletton. (2021). The color scheme designer. ',
      link: 'https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF',
    },
    {
      referencia:
        'Powerhouse Animation Studios. (2017). PHA ProTip - Character design [video]. YouTube.  ',
      link:
        'https://www.youtube.com/watch?v=MUZHfnlKggI&t=256s&ab_channel=PowerhouseAnimationStudios',
    },
    {
      referencia: 'SENA. (2021). Modelado prop daga. SENA.',
    },
  ],
  glosario: [
    {
      termino: '¾',
      significado:
        'Es la vista en la que se observa un elemento, por ejemplo, un rostro visto de frente girando hacia su derecha o izquierda, por lo que se alcanza a notar más parte de un lado que del otro.',
    },
    {
      termino: 'Dinámico',
      significado:
        'Se refiere a la fluidez que tiene un elemento, siendo todo lo contrario de rigidez, por ello, evoca movilidad. ',
    },
    {
      termino: 'Disonancia',
      significado: 'Diferencia entre dos elementos, totalmente opuestos.',
    },
    {
      termino: 'Emociones',
      significado:
        'Sentimientos que las personas poseen, como la rabia, alegría, tristeza, entre otras.',
    },
    {
      termino: 'Estética',
      significado:
        'Es la forma como se visualizan las cosas, pueden ser bellas o por el contrario, horrorosas.',
    },
    {
      termino: 'Estructura',
      significado:
        'Es la base de los elementos, la columna vertebral que le da forma desde lo interno a lo externo.',
    },
    {
      termino: 'Limitantes',
      significado:
        'Carecen de las condiciones para que funcione con cualquier elemento.',
    },
    {
      termino: 'Loops',
      significado:
        'Se refiere a las repeticiones que se pueden dar de un mismo elemento animado, por ejemplo, un hámster corriendo en una jaula.',
    },
    {
      termino: 'Modelador',
      significado:
        'Es la persona que realiza en un software 3D modelos tridimensionales.',
    },
    {
      termino: 'Percepción subjetiva',
      significado:
        'Es la forma como cada sujeto entiende cualquier tipo de información, sea visual, auditiva o táctil, dándole un significado propio.',
    },
  ],
  complementario: [
    {
      texto: 'Paletton. (2021). The color scheme designer.',
      tipo: 'Página web',
      link: 'https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF',
    },
    {
      texto:
        'Powerhouse Animation Studios. (2017). PHA ProTip - Character design [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=MUZHfnlKggI&t=256s&ab_channel=PowerhouseAnimationStudios ',
    },
    {
      texto:
        'Blendtuts-ES. (2019). Shading básico (materiales) (introducción a Blender 2.80 #31) [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_HlV4DUjnDY',
    },
    {
      texto:
        'Blendtuts-ES. (2019). HDRIs y materiales PBR (introducción a Blender 2.80 #35) [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=twkX4Hwl8AA&t=452s ',
    },
    {
      texto:
        'Blender. (s.f.). Introducing: SCULPT EXPAND | Blender development preview [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XT7h6lmE5bc&ab_channel=Blender ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabián Andrés Gómez Pico ',
        cargo: 'Experto Temático 3D',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Johnier Felipe Perafán Ledezma',
        cargo: 'Experto Temático 3D',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Andrés Martín Moreno',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'John Alexander García Ángel',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Evaluador instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortes García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
