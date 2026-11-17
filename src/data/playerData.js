import { FaInstagram, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMdStats } from 'react-icons/io'

//Hero
import polaco1 from '@assets/polaco1.webp'
import heroPhoto from '@assets/hero_fertoli.webp'

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
  height: '1.74m',
  weight: '67kg',
  foot: 'Derecho',
  birthDate: '03 / 12 / 1994  ',
  birthPlace: 'El Trébol, Argentina',
  currentClub: 'Universitario',
  logoCurrentClub: universitario,
  image: polaco1,
  heroPhoto,
  heroPhotoAlt: 'conduce la pelota con la camiseta 8 de Universitario',
  

  stats: [
    { label: 'Velocidad',      value: 90 },
    { label: 'Remate',     value: 84 },
    { label: 'Regate',         value: 88 },
    { label: 'Pases',    value: 91 },
    { label: 'Presión Alta',   value: 85 },
    { label: 'Visión de Juego',value: 89 },
  ],

  seasonStats: [
    { label: 'Partidos',    value: 49},
    { label: 'Goles',       value: 2},
    { label: 'Pases Completos', value: 444},
    { label: 'Tiros al arco', value: 11},
    { label: 'Min / Part.', value: "1,480'" },
    { label: 'Valoración', value: 8.5},

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
      year: '26',
      club: 'Universitario',
      clubLogo: universitario,
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
      year: '25',
      club: 'C.A. Tigre',
      clubLogo: escudoTigre,
    },
    
    {
      id: 'v4',
      instagramId: 'DEYUrsoy4L_',
      title: 'Highlight Huracán \'24',
      fullTitle: 'Hector Fertoli | Asistencias y juego',
      season: 'Highlight Huracán \'24',
      league: 'Liga Argentina 2024',
      thumbnail: image21,
      cover: image21,
      category: 'Highlights',
      year: '24',
      club: 'C.A. Huracán',
      clubLogo: escudoHuracan,
    },
  ],



  // cat: 'u' = Universitario, 'c' = clubes anteriores (pestañas de la galería)
  gallery: [
    { id: 1, src: image1, cat: 'u', alt: 'Héctor Fertoli: conduce la pelota en el área con Universitario' },
    { id: 2, src: image2, cat: 'u', alt: 'Héctor Fertoli: remate de media distancia con Universitario' },
    { id: 3, src: image3, cat: 'u', alt: 'Héctor Fertoli: control orientado con la camiseta granate' },
    { id: 4, src: image4, cat: 'u', alt: 'Héctor Fertoli: duelo en ataque con la camiseta blanca de Universitario' },
    { id: 5, src: image5, cat: 'u', alt: 'Héctor Fertoli: de espaldas con el 8 de Universitario' },
    { id: 6, src: image6, cat: 'u', alt: 'Héctor Fertoli: avanza con la pelota junto a un compañero' },
    { id: 7, src: image7, cat: 'u', alt: 'Héctor Fertoli: disputa la pelota con la camiseta negra' },
    { id: 8, src: image8, cat: 'u', alt: 'Héctor Fertoli: encara a un rival con la camiseta negra' },
    { id: 9, src: image9, cat: 'u', alt: 'Héctor Fertoli: pisa la pelota ante la marca' },
    { id: 10, src: image10, cat: 'u', alt: 'Héctor Fertoli: gana la posición entre dos rivales' },
    { id: 11, src: image11, cat: 'u', alt: 'Héctor Fertoli: conduce en velocidad con la camiseta blanca' },
    { id: 12, src: image12, cat: 'u', alt: 'Héctor Fertoli: se escapa de la marca por la banda' },
    { id: 13, src: image13, cat: 'u', alt: 'Héctor Fertoli: retrato con la campera de Universitario' },
    { id: 14, src: image14, cat: 'u', alt: 'Héctor Fertoli: de espaldas con el 8 en el campo' },
    { id: 15, src: image15, cat: 'c', alt: 'Héctor Fertoli: conduce la pelota en un club anterior' },
    { id: 16, src: image16, cat: 'c', alt: 'Héctor Fertoli: posa con un trofeo de jugador del partido' },
    { id: 17, src: image17, cat: 'c', alt: 'Héctor Fertoli: festeja con un compañero' },
    { id: 18, src: image18, cat: 'c', alt: 'Héctor Fertoli: celebra un gol con sus compañeros' },
    { id: 19, src: image19, cat: 'u', alt: 'Héctor Fertoli: llegada al estadio con un niño en brazos' },
    { id: 20, src: image20, cat: 'u', alt: 'Héctor Fertoli: llegada al estadio con el plantel de Universitario' },
    { id: 21, src: image21, cat: 'c', alt: 'Héctor Fertoli: conduce la pelota con la camiseta de Huracán' },
    { id: 22, src: image22, cat: 'c', alt: 'Héctor Fertoli: con la Supercopa Internacional de Racing' },
  ],

  // Prensa: TEXTOS DE EJEMPLO hasta tener las notas reales (medio, titular, fecha, link).
  // La primera es la nota destacada y usa `photo` de fondo.
  press: [
    {
      outlet: 'ESPN',
      logo: logo1,
      title: 'Titular de la nota de ejemplo sobre su llegada a Universitario',
      date: 'Fecha',
      summary: 'Bajada de ejemplo: acá va una línea que resume la nota.',
      url: '#',
      photo: image13,
    },
    {
      outlet: 'Infobae',
      logo: logo2,
      title: 'Titular de ejemplo sobre su rendimiento en la temporada',
      date: 'Fecha',
      url: '#',
    },
    {
      outlet: 'CONMEBOL Libertadores',
      logo: logo3,
      title: 'Titular de ejemplo sobre su paso por la copa',
      date: 'Fecha',
      url: '#',
    },
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
