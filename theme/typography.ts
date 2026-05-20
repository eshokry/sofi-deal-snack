// Typography tokens — 1:1 with packages/mobile-ui/src/tokens/typography.ts.
// All variants render as SF Pro (system font on iOS, no import needed).

export type TypographyVariant =
  | 'h1.bold' | 'h1.semibold'
  | 'h2.bold' | 'h2.semibold'
  | 'h3.bold' | 'h3.semibold'
  | 'h4.bold' | 'h4.semibold'
  | 'p1.17.regular' | 'p1.17.semibold'
  | 'p2.16.regular' | 'p2.16.semibold'
  | 'p3.15.regular' | 'p3.15.semibold'
  | 'p4.13.regular' | 'p4.13.semibold'
  | 'p5.12.regular' | 'p5.12.semibold'
  | 'c1.12.regular' | 'c1.12.semibold'
  | 'c2.11.regular' | 'c2.11.semibold';

export type TypographySpec = {
  fontSize: number;
  lineHeight: number;
  fontWeight: '400' | '600' | '700';
  letterSpacing: number;
};

export const typographySpecs: Record<TypographyVariant, TypographySpec> = {
  'h1.bold':         { fontSize: 34, lineHeight: 40, fontWeight: '700', letterSpacing: -0.34 },
  'h1.semibold':     { fontSize: 34, lineHeight: 40, fontWeight: '600', letterSpacing: -0.34 },
  'h2.bold':         { fontSize: 28, lineHeight: 32, fontWeight: '700', letterSpacing: -0.28 },
  'h2.semibold':     { fontSize: 28, lineHeight: 32, fontWeight: '600', letterSpacing: -0.28 },
  'h3.bold':         { fontSize: 22, lineHeight: 28, fontWeight: '700', letterSpacing: -0.22 },
  'h3.semibold':     { fontSize: 22, lineHeight: 28, fontWeight: '600', letterSpacing: -0.22 },
  'h4.bold':         { fontSize: 20, lineHeight: 24, fontWeight: '700', letterSpacing: -0.20 },
  'h4.semibold':     { fontSize: 20, lineHeight: 24, fontWeight: '600', letterSpacing: -0.20 },
  'p1.17.regular':   { fontSize: 17, lineHeight: 24, fontWeight: '400', letterSpacing: -0.17 },
  'p1.17.semibold':  { fontSize: 17, lineHeight: 24, fontWeight: '600', letterSpacing: -0.17 },
  'p2.16.regular':   { fontSize: 16, lineHeight: 20, fontWeight: '400', letterSpacing: -0.16 },
  'p2.16.semibold':  { fontSize: 16, lineHeight: 20, fontWeight: '600', letterSpacing: -0.16 },
  'p3.15.regular':   { fontSize: 15, lineHeight: 20, fontWeight: '400', letterSpacing: -0.15 },
  'p3.15.semibold':  { fontSize: 15, lineHeight: 20, fontWeight: '600', letterSpacing: -0.15 },
  'p4.13.regular':   { fontSize: 13, lineHeight: 16, fontWeight: '400', letterSpacing: -0.13 },
  'p4.13.semibold':  { fontSize: 13, lineHeight: 16, fontWeight: '600', letterSpacing: -0.13 },
  'p5.12.regular':   { fontSize: 12, lineHeight: 16, fontWeight: '400', letterSpacing: -0.12 },
  'p5.12.semibold':  { fontSize: 12, lineHeight: 16, fontWeight: '600', letterSpacing: -0.12 },
  'c1.12.regular':   { fontSize: 12, lineHeight: 16, fontWeight: '400', letterSpacing: -0.12 },
  'c1.12.semibold':  { fontSize: 12, lineHeight: 16, fontWeight: '600', letterSpacing: -0.12 },
  'c2.11.regular':   { fontSize: 11, lineHeight: 12, fontWeight: '400', letterSpacing: -0.11 },
  'c2.11.semibold':  { fontSize: 11, lineHeight: 12, fontWeight: '600', letterSpacing: -0.11 },
};
