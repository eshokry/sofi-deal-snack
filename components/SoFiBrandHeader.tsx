import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { ds } from '../theme';
import { Typography } from './Typography';

// SoFi wordmark + 3-tile glyph (approximated from the Figma frames).
// Used in the top-nav title on every SoFi screen.
export function SoFiBrandHeader({ color = ds.palette.white }: { color?: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
      <Typography variant="p1.17.semibold" color={color} style={{ letterSpacing: -0.2 }}>
        SoFi
      </Typography>
      <Svg width={18} height={18} viewBox="0 0 24 24">
        <Path d="M3  3 H10 V10 H3 Z M14 3 H21 V10 H14 Z M3 14 H10 V21 H3 Z M14 14 H21 V21 H14 Z" fill={color} />
      </Svg>
    </View>
  );
}
