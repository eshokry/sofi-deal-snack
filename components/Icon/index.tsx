import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { iconPaths, IconName } from './icons';

export type { IconName };

export type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
};

export function Icon({ name, size = 24, color = '#000', strokeWidth = 1.8 }: IconProps) {
  const def = iconPaths[name];
  if (!def) return null;
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {def.paths.map((d, i) => (
        <Path
          key={i}
          d={d}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={def.fill && i === 0 ? color : 'none'}
        />
      ))}
    </Svg>
  );
}
