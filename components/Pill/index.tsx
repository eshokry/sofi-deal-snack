import React from 'react';
import { View, Pressable, ViewStyle, StyleSheet } from 'react-native';
import { ds } from '../../theme';
import { Typography } from '../Typography';
import { Icon, IconName } from '../Icon';

export type PillVariant = 'neutral' | 'success' | 'brand' | 'info' | 'lightBlue';
export type PillSize = 's' | 'm';

export type PillProps = {
  label: string;
  variant?: PillVariant;
  size?: PillSize;
  leftIcon?: IconName;
  rightIcon?: IconName;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
};

const variantStyles: Record<PillVariant, { bg: string; fg: string }> = {
  neutral: { bg: ds.palette.neutral50, fg: ds.palette.black },
  success: { bg: ds.palette.green100, fg: ds.palette.green800 },
  brand: { bg: ds.palette.blue600, fg: ds.palette.white },
  info: { bg: ds.palette.blue100, fg: ds.palette.blue600 },
  lightBlue: { bg: ds.palette.blue100, fg: ds.palette.blue600 },
};

export function Pill({
  label,
  variant = 'neutral',
  size = 'm',
  leftIcon,
  rightIcon,
  leftElement,
  rightElement,
  onPress,
  style,
}: PillProps) {
  const v = variantStyles[variant];
  const height = size === 's' ? 24 : 32;
  const px = size === 's' ? ds.spacing.s8 : ds.spacing.s12;

  const inner = (
    <View
      style={[
        styles.row,
        {
          height,
          paddingHorizontal: px,
          backgroundColor: v.bg,
          borderRadius: ds.radius.r100,
        },
        style,
      ]}
    >
      {leftElement}
      {leftIcon && (
        <View style={{ marginRight: ds.spacing.s4 }}>
          <Icon name={leftIcon} size={size === 's' ? 12 : 14} color={v.fg} />
        </View>
      )}
      <Typography
        variant={size === 's' ? 'p5.12.semibold' : 'p4.13.semibold'}
        color={v.fg}
      >
        {label}
      </Typography>
      {rightIcon && (
        <View style={{ marginLeft: ds.spacing.s4 }}>
          <Icon name={rightIcon} size={size === 's' ? 12 : 14} color={v.fg} />
        </View>
      )}
      {rightElement}
    </View>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={6}>
        {inner}
      </Pressable>
    );
  }
  return inner;
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
});
