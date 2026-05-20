// Design tokens — distilled from @yoke-global/mobile-ui (Figma: NIL Club_2026 Design System, file JfEo5kDoGcwI6pvXgpBImm).
// 1:1 with packages/mobile-ui/src/tokens/{colors,spacing,radius,shadows}.ts.

export const palette = {
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  blue100: '#DFEFFF',
  blue200: '#C2E0FF',
  blue300: '#59B9FF',
  blue500: '#0069DB',
  blue600: '#007AFF',
  darkBlue: '#15345A',

  green100: '#E6FAEB',
  green600: '#34C759',
  green800: '#05A664',

  neutral50:  '#F2F2F7',
  neutral100: '#E2E2E5',
  neutral200: '#DEDEE0',
  neutral300: '#D0D0D2',
  neutral400: '#BCBCBF',
  neutral500: '#A1A1A4',
  neutral600: '#87878D',
  neutral700: '#717177',
  neutral800: '#4E4E53',
  neutral900: '#2F2F31',

  orange100: '#FF9500',
  pink500: '#FF0059',
  red500: '#D72819',
  red700: '#FF453A',
  violet1000: '#7000FF',
  yellow500: '#FFD60D',

  shadowBlack8: '#00000014',
  shadowBlack12: '#0000001F',
  whiteAlpha48: '#FFFFFF7A',
  blackAlpha25: '#00000040',
} as const;

export const lightColors = {
  primary: palette.blue600,

  background: {
    default: palette.white,
    subtle: palette.neutral50,
    tertiary: palette.blue200,
    overlay: palette.blackAlpha25,
    inverse: palette.black,
  },

  text: {
    default: palette.black,
    inverse: palette.white,
    secondary: palette.neutral700,
    tertiary: palette.neutral600,
    disabled: palette.neutral500,
    blue: palette.blue600,
    green: palette.green600,
    danger: palette.red500,
    link: palette.blue600,
  },

  icon: {
    blue: palette.blue600,
    gray: palette.neutral600,
    danger: palette.red500,
  },

  button: {
    primary: { base: palette.white, disabled: palette.white },
    secondary: { base: palette.black, disabled: palette.neutral500 },
    tertiary: { base: palette.blue600, disabled: palette.neutral500 },
  },
} as const;

export const spacing = {
  s0: 0, s2: 2, s4: 4, s8: 8, s12: 12, s16: 16, s20: 20, s24: 24, s28: 28,
  s32: 32, s36: 36, s40: 40, s44: 44, s48: 48, s52: 52, s56: 56, s60: 60, s64: 64,
} as const;

export const radius = {
  r0: 0, r2: 2, r4: 4, r6: 6, r8: 8, r12: 12, r16: 16, r20: 20, r24: 24,
  r28: 28, r32: 32, r34: 34, r50: 50, r100: 100,
} as const;

export const shadows = {
  // Figma: 0 2 1.6 rgba(0,0,0,0.05) — Card lift on white/neutral50.
  card: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 1.6,
    elevation: 1,
  },
  // Figma: 0 8 40 rgba(0,0,0,0.12) — Alert dialog lift.
  alert: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 40,
    elevation: 12,
  },
  // Soft top-row card lift used on rewards/share cards.
  softCard: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
} as const;

export const ds = {
  palette,
  colors: lightColors,
  spacing,
  radius,
  shadows,
};

export type SpacingToken = keyof typeof spacing;
export type RadiusToken = keyof typeof radius;
