// SVG path data for icons used across the SoFi flow.
// Stroke-based icons; fill uses `currentColor` so the Icon component can recolor.
// All paths are designed on a 24×24 viewbox.

export type IconName =
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-down'
  | 'chevron-up'
  | 'dots'
  | 'close'
  | 'clock'
  | 'check'
  | 'check-circle-filled'
  | 'arrow-square-out'
  | 'arrow-right-circle-filled'
  | 'mic'
  | 'gift'
  | 'cash'
  | 'graduation-cap'
  | 'info-filled'
  | 'finance-tag'
  | 'people';

// All paths assume a 24×24 viewBox.
export const iconPaths: Record<IconName, { paths: string[]; fill?: boolean }> = {
  'chevron-left': {
    paths: ['M15 6l-6 6 6 6'],
  },
  'chevron-right': {
    paths: ['M9 6l6 6-6 6'],
  },
  'chevron-down': {
    paths: ['M6 9l6 6 6-6'],
  },
  'chevron-up': {
    paths: ['M6 15l6-6 6 6'],
  },
  'dots': {
    paths: ['M5 12h.01M12 12h.01M19 12h.01'],
  },
  'close': {
    paths: ['M6 6l12 12M6 18L18 6'],
  },
  'clock': {
    paths: [
      'M12 7v5l3 3',
      'M12 21a9 9 0 100-18 9 9 0 000 18z',
    ],
  },
  'check': {
    paths: ['M5 12l5 5 9-10'],
  },
  'check-circle-filled': {
    paths: [
      'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z',
      'M8 12.5l2.5 2.5L16 9.5',
    ],
    fill: true,
  },
  'arrow-square-out': {
    paths: [
      'M14 4h6v6',
      'M20 4l-9 9',
      'M19 13v6a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h6',
    ],
  },
  'arrow-right-circle-filled': {
    paths: [
      'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z',
      'M9 12h6M13 8l4 4-4 4',
    ],
    fill: true,
  },
  'mic': {
    paths: [
      'M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3z',
      'M5 11v1a7 7 0 0014 0v-1M12 19v3',
    ],
  },
  'gift': {
    paths: [
      'M3 11h18v10H3z',
      'M3 7h18v4H3z',
      'M12 7v14',
      'M12 7C12 5 10 3 8 3s-2 4 4 4M12 7c0-2 2-4 4-4s2 4-4 4',
    ],
  },
  'cash': {
    paths: [
      'M2 7h20v10H2z',
      'M12 15a3 3 0 100-6 3 3 0 000 6z',
    ],
  },
  'graduation-cap': {
    paths: [
      'M2 9l10-5 10 5-10 5L2 9z',
      'M6 11v4a6 6 0 0012 0v-4',
    ],
  },
  'info-filled': {
    paths: [
      'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z',
      'M12 11v6M12 7.5v.01',
    ],
    fill: true,
  },
  'finance-tag': {
    paths: [
      'M12 4l8 8-8 8-8-8 8-8z',
      'M12 9v6M9 12h6',
    ],
  },
  'people': {
    paths: [
      'M9 11a4 4 0 100-8 4 4 0 000 8z',
      'M17 11a3 3 0 100-6 3 3 0 000 6z',
      'M3 21v-1a6 6 0 0112 0v1',
      'M17 21v-1a4 4 0 00-3-3.87',
    ],
  },
};
