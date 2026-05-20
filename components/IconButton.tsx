import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import * as Haptics from 'expo-haptics';
import { ds } from '../theme';
import { Icon, IconName } from './Icon';

export type IconButtonVariant = 'light' | 'transparent' | 'blue';
export type IconButtonSize = 's' | 'm' | 'l';

export type IconButtonProps = {
  iconName: IconName;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  onPress?: () => void;
  accessibilityLabel?: string;
  style?: ViewStyle;
  hapticFeedback?: boolean;
};

const dims: Record<IconButtonSize, number> = { s: 32, m: 40, l: 48 };
const iconSizes: Record<IconButtonSize, number> = { s: 16, m: 20, l: 24 };

const variantStyles: Record<IconButtonVariant, { bg: string; fg: string }> = {
  light: { bg: ds.palette.neutral50, fg: ds.palette.neutral700 },
  transparent: { bg: 'transparent', fg: ds.palette.neutral700 },
  blue: { bg: ds.palette.blue600, fg: ds.palette.white },
};

export function IconButton({
  iconName,
  variant = 'light',
  size = 'm',
  onPress,
  accessibilityLabel,
  style,
  hapticFeedback = true,
}: IconButtonProps) {
  const v = variantStyles[variant];
  const d = dims[size];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={() => {
        if (hapticFeedback) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress?.();
      }}
      style={({ pressed }) => [
        {
          width: d,
          height: d,
          borderRadius: d / 2,
          backgroundColor: v.bg,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: pressed ? 0.7 : 1,
        },
        style as any,
      ]}
    >
      <Icon name={iconName} size={iconSizes[size]} color={v.fg} />
    </Pressable>
  );
}
