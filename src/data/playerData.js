import { FaInstagram, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMdStats } from 'react-icons/io'

//Hero
import polaco1 from '@assets/polaco1.webp'

import argentina from '@assets/argentina.webp'
import universitario from '@assets/escudo_univ.webp'
//Escudos trayectoria
import escudoHuracan from '@assets/escudos/escudo_huracan.png'
import escudoNewells from '@assets/escudos/escudo_newells.webp'
import escudoRacing from '@assets/escudos/escudo_racing.webp'
import escudoSanlorenzo from '@assets/escudos/escudo_sanlorenzo.webp'
import escudoTalleres from '@assets/escudos/escudo_talleres.webp'
import escudoTigre from '@assets/escudos/escudo_tigre.webp'
//Gallery
import image1 from '@assets/gallery/image1.webp'
import image2 from '@assets/gallery/image2.webp'
import image3 from '@assets/gallery/image3.webp'
import image4 from '@assets/gallery/image4.webp'
import image5 from '@assets/gallery/image5.webp'
import image6 from '@assets/gallery/image6.webp'
import image7 from '@assets/gallery/image7.webp'
import image8 from '@assets/gallery/image8.webp'
import image9 from '@assets/gallery/image9.webp'
import image10 from '@assets/gallery/image10.webp'
import image11 from '@assets/gallery/image11.webp'
import image12 from '@assets/gallery/image12.webp'
import image13 from '@assets/gallery/image13.webp'
import image14 from '@assets/gallery/image14.webp'
import image15 from '@assets/gallery/image15.webp'
import image16 from '@assets/gallery/image16.webp'
import image17 from '@assets/gallery/image17.webp'
import image18 from '@assets/gallery/image18.webp'
import image19 from '@assets/gallery/image19.webp'
import image20 from '@assets/gallery/image20.webp'
import image21 from '@assets/gallery/image21.webp'  
import image22 from '@assets/gallery/image22.webp'
//Video
import photoGraph from '@assets/perfil_video.webp'
//Prensa
import logo1 from '@assets/logos/logo1.webp'
import logo2 from '@assets/logos/logo2.webp'
import logo3 from '@assets/logos/logo3.webp'
//Redes
import transfermkt from '@assets/contact2.svg'
import ledsports from '@assets/contact3.webp'
import moon from '@assets/contact4.webp'


const name = 'HECTOR'
const fullName = 'FERTOLI'

export const playerData = {
  name,
  fullName,
  initials: `${name[0]}${fullName[0]}`,
  displayName: `${name} ${fullName}`,
  number: 8,
  position: 'Mediocampista',
  positionShort: 'MC',
  nationality: 'Argentina',
  nationalityFlag: argentina,
  age: 31,
  height: '1.75m',
  weight: '67kg',
  foot: 'Izquierdo',
  birthDate: '03 / 12 / 1994  ',
  birthPlace: 'El Trébol, Argentina',
  currentClub: 'Universitario',
  logoCurrentClub: universitario,
  image: polaco1,
  

  stats: [
    { label: 'Velocidad',      value: 90 },
    { label: 'Remate',     value: 84 },
    { label: 'Regate',         value: 88 },
    { label: 'Pases Completos',    value: 91 },
    { label: 'Presión Alta',   value: 85 },
    { label: 'Visión de Juego',value: 89 },
  ],

  seasonStats: [
    { label: 'Partidos',    value: 49 },
    { label: 'Goles',       value: 2 },
    { label: 'Intercepciones', value: 5  },
    { label: 'Tiros al arco', value: 10  },
    { label: 'Min / Part.', value: "3,424'" },
    { label: 'Valoración', value: 7.6  },

  ],

  clubs: [
    {
      name:    'Universitario',
      country: 'Perú',
      years:   '2026 — Actualidad',
      logo:    universitario,
      titles:  [],
      info:    'Préstamo',
    },
    {
      name:    'C.A Tigre',
      country: 'Argentina',
      years:   '2025',
      logo:    escudoTigre,
      titles:  [],
      info:    'Préstamo',
    },
    {
      name:    'C.A Huracán',
      country: 'Argentina',
      years:   '2023 — 2024',
      logo:    escudoHuracan,
      titles:  [],
      info:    'Préstamo',
    },
    {
      name:    'Talleres de Córdoba',
      country: 'Argentina',
      years:   '2021 — 2022',
      logo:    escudoTalleres,
      titles:  [],
      info:    'Préstamo',
    },
    {
      name:    'Racing Club',
      country: 'Argentina',
      years:   '2020 — Actualidad',
      logo:    escudoRacing,
      titles:  ['Supercopa Internacional 2023'],
      info:    '',
    },
    {
      name:    'San Lorenzo de Almagro',
      country: 'Argentina',
      years:   '2019',
      logo:    escudoSanlorenzo,
      titles:  [],
      info:    '',
    },
    {
      name:    'Newell\'s Old Boys',
      country: 'Argentina',
      years:   '2014',
      logo:    escudoNewells,
      titles:  [],
      info:    '',
    },
  ],

  videos: [
    {
      id: 'v2',
      instagramId: 'DYqG3t8xDzY',
      title: 'Highlight \'26',
      fullTitle: 'Hector Fertoli | Jugadas destacadas \'26',
      season: 'Highlight \'26',
      league: 'LIGA 1 2025',
      thumbnail: image8,
      cover: image8,
      category: 'Universitario',
    },
    {
      id: 'v3',
      instagramId: 'DKQcYIht3oD',
      title: 'Highlight Tigre \'25',
      fullTitle: 'Hector Fertoli | Jugadas destacadas \'25',
      season: 'Highlight Tigre \'25',
      league: 'Liga Argentina',
      thumbnail: image15,
      cover: image15,
      category: 'Highlights',
    },
    
    {
      id: 'v3',
      instagramId: 'DEYUrsoy4L_',
      title: 'Highlight Huracán \'24',
      fullTitle: 'Hector Fertoli | Asistencias y juego',
      season: 'Highlight Huracán \'24',
      league: 'Liga Argentina 2024',
      thumbnail: image21,
      cover: image21,
      category: 'Highlights',
    },
  ],



  gallery: [
    { id: 1, src: image1, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 2, src: image2, alt: 'Hector Fertoli', caption: 'Universitario',    category: 'Festejo', aspect: 'tall' },
    { id: 3, src: image3, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Entrenamiento', aspect: 'square' },
    { id: 4, src: image4, alt: 'Hector Fertoli', caption: 'Universitario',     category: 'Partido', aspect: 'wide' },
    { id: 5, src: image5, alt: 'Hector Fertoli', caption: 'Universitario',   category: 'Equipo',  aspect: 'wide' },
    { id: 6, src: image6, alt: 'Hector Fertoli', caption: 'Universitario',       category: 'Retrato', aspect: 'tall' },
    { id: 7, src: image7, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 8, src: image8, alt: 'Hector Fertoli', caption: 'Universitario',     category: 'Partido', aspect: 'wide' },
    { id: 9, src: image9, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 10, src: image10, alt: 'Hector Fertoli', caption: 'Universitario',     category: 'Partido', aspect: 'wide' },
    { id: 11, src: image11, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 12, src: image12, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 13, src: image13, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 14, src: image14, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 15, src: image15, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 16, src: image16, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 17, src: image17, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 18, src: image18, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 19, src: image19, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 20, src: image20, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 21, src: image21, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Partido', aspect: 'wide' },
    { id: 22, src: image22, alt: 'Hector Fertoli', caption: 'Universitario', category: 'Partido', aspect: 'wide' },

  ],

  socialMedia: [
    {
      label: 'Instagram',
      icon: FaInstagram,
      iconBg: FaInstagram,
      handle: '@rayofertoli',
      url: 'https://www.instagram.com/rayofertoli/',
      hoverColor: '#E1306C',
      hoverGradient: 'insta-gradient',
    },
    {
      label: 'TransferMarkt',
      image: transfermkt,
      iconBg: IoMdStats,
      handle: '/hector-fertoli',
      url: 'https://www.transfermarkt.com.ar/hector-fertoli/profil/spieler/424024',
      hoverColor: '#2e73f2',
    },
  ],

  contact: [
    {
      title:      'Representante Deportivo',
      label:      'Moon Sports Group',
      image:       moon,
      handle:     '@moonsportsgroup_',
      url:        'https://www.instagram.com/moonsportsgroup_/',
      hoverColor: 'rgba(139,69,19,0.18)',
    },
    {
      title:      'Contacto Marketing',
      label:      'led sports marketing',
      image: ledsports,
      handle:     '@_ledsports',
      url:        'https://www.instagram.com/_ledsports/',
      hoverColor: 'rgba(212,168,75,0.18)',
    },
  ],
}
