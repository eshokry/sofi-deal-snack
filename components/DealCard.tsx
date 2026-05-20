import React from 'react';
import { View, ViewStyle } from 'react-native';
import { ds } from '../theme';

export type DealCardProps = {
  children: React.ReactNode;
  padding?: number;
  radius?: number;
  style?: ViewStyle;
  shadow?: 'card' | 'softCard' | 'none';
};

// White rounded card with consistent shadow + radius across all surfaces.
// Audit C4 caveat — use one canonical shadow value (not the divergent 7.1/14.2 values from Figma).
export function DealCard({
  children,
  padding = ds.spacing.s20,
  radius = ds.radius.r28,
  style,
  shadow = 'softCard',
}: DealCardProps) {
  const shadowStyle = shadow === 'none' ? undefined : ds.shadows[shadow];
  return (
    <View
      style={[
        {
          backgroundColor: ds.palette.white,
          borderRadius: radius,
          padding,
        },
        shadowStyle as any,
        style as any,
      ]}
    >
      {children}
    </View>
  );
}
