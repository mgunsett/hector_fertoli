import { extendTheme } from '@chakra-ui/react'


// ─── PALETA OSCURA — 
const brandDark = {
  brown:      '#171514', // base casi negra cálida neutra
  brownDark:  '#000000', // negro profundo
  brownLight: '#3B322E', // sombra marrón cálida
  amber:      '#dbccaf', // arena/dorado apagado (bordes/títulos)
  amber2:     '#c2ac828e',
  amberDark:  '#8F7B54', // arena oscura
  amberLight: '#c2ac824f', // arena translúcida (bordes suaves)
  dorado:     '#A04E56', // vino luminoso (acentos destacados)
  orange:     '#B08573', // marrón rosado camiseta alterna (hover botones)
  orangeDark: '#8A6353', // marrón rosado oscuro
  orangeLight:'#cca56b', // marrón rosado claro
  dark:       '#2321209f', // fondo casi negro cálido (mantener alpha)
  dark3:      '#232120a1',
  dark2:      '#a5a09a', // divisores neutros cálidos
  gray:       '#AFA08D', // arena apagada (texto secundario)
  gray2:      '#8B4149', // vino apagado (números grandes/relleno)
  bone:       '#FFFFFF', // texto principal
  boneWarm:   '#E3D4B1', // crema arena (detalles)
  rec:        '#E5484D', // rojo del indicador REC
  bgRef:      '#b0857321', // bg de hover en cajas (guiño camiseta alterna)
}

// ─── PALETA CLARA — 
const brandLight = {
  brown:      '#FCF8EC', // superficie clara (tarjetas/nodos)
  brownDark:  '#EFE6CF', // crema profundo (sombras suaves)
  brownLight: '#7A3A3C', // granate amarronado (texto de apoyo)
  amber:      '#9E1B1E', // granate del escudo (bordes/títulos)
  amber2:     '#9e1b1e8e',
  amberDark:  '#701316', // granate oscuro
  amberLight: '#9e1b1e40', // granate translúcido (bordes suaves)
  dorado:     '#B22A2E', // rojo U (acentos destacados)
  orange:     '#8F191C', // hover de botones
  orangeDark: '#6E1214', // hover de botones (oscuro)
  orangeLight:'#C24448', // hover de botones (claro)
  dark:       '#F5EFDE', // fondo crema (camiseta titular)
  dark3:      '#EFE8D2',
  dark2:      '#CDBFA5', // divisores sobre crema
  gray:       '#7D6E5F', // texto secundario cálido
  gray2:      '#8F393C', // granate apagado (números grandes/relleno)
  bone:       '#241718', // texto principal (casi negro granate)
  boneWarm:   '#8A1E22', // granate (detalles/labels)
  rec:        '#C1121F', // rojo del indicador REC
  bgRef:      '#9e1b1e12', // bg de hover en cajas
}

// ─── PALETA NEÓN — 
const brandNeon = {
  brown:      '#0D0F0A', // base negra cálida verdosa
  brownDark:  '#000000', // negro profundo
  brownLight: '#242A1C', // sombra olivácea oscura
  amber:      '#B4F32A', // verde lima neón (bordes/títulos) — acento principal
  amber2:     '#b4f32a8e',
  amberDark:  '#7FA800', // lima oliva oscuro
  amberLight: '#b4f32a40', // lima translúcido (bordes suaves)
  dorado:     '#FF2E9A', // magenta neón (acentos destacados)
  orange:     '#FF3DA6', // rosa camiseta (hover botones)
  orangeDark: '#D11E7E', // magenta oscuro
  orangeLight:'#FF6EC7', // rosa claro
  dark:       '#0C0E0A9f', // fondo casi negro cálido (mantener alpha)
  dark3:      '#0C0E0Aa1',
  dark2:      '#5A6650', // divisores oliváceos neutros
  gray:       '#98A388', // lima-gris apagado (texto secundario)
  gray2:      '#4A5C2E', // verde apagado (números grandes/relleno)
  bone:       '#FFFFFF', // texto principal
  boneWarm:   '#E4FF8A', // amarillo lima claro (detalles)
  rec:        '#FF2D55', // rojo-rosa del indicador REC
  bgRef:      '#b4f32a14', // bg de hover en cajas (guiño verde neón)
}

// Elegí la paleta de la landing:
const PALETTE = 'neon'

const brand =
  PALETTE === 'light' ? brandLight :
  PALETTE === 'neon'  ? brandNeon  :
  brandDark

// Colores de la firma del desarrollador (crédito en el footer)
const dev = {
  green: '#2D5A47',
  cream: '#E8D5A3',
}

const theme = extendTheme({
  colors: { brand, dev },
  fonts: {
    heading:   'Nippo',
    body:      `Nippo`,
    mono:      `Nippo`,
  },
  styles: {
    global: {
      'html, body': {
        bg: brand.dark,
        color: brand.bone,
        overflowX: 'hidden',
      },
      '::-webkit-scrollbar': { width: '4px' },
      '::-webkit-scrollbar-track': { bg: brand.dark },
      '::-webkit-scrollbar-thumb': { bg: brand.amber, borderRadius: '2px' },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
})

export default theme
