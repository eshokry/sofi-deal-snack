import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

// A simplified "blue coin pointer" mark used across the SoFi flow
// (next to point values, in the +900 chip, etc).
export function CoinIcon({ size = 18 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx="12" cy="12" r="11" fill="#007AFF" />
      <Path
        d="M8 12.5l2.6 2.5L16 9.5"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}
