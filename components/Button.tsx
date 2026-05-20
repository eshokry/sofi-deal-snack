import React from 'react';
import {
  Pressable,
  PressableProps,
  View,
  ActivityIndicator,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { ds } from '../theme';
import { Typography } from './Typography';
import { Icon, IconName } from './Icon';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'transparent';
export type ButtonSize = 'large' | 'small';

export type ButtonProps = Omit<PressableProps, 'children'> & {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
  hapticFeedback?: boolean;
  fullWidth?: boolean;
};

export function Button({
  label,
  variant = 'primary',
  size = 'large',
  loading,
  disabled,
  iconLeft,
  iconRight,
  hapticFeedback = true,
  fullWidth = true,
  onPress,
  style,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const handlePress = (e: any) => {
    if (hapticFeedback) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress?.(e);
  };

  const heights: Record<ButtonSize, number> = { large: 52, small: 40 };
  const radii: Record<ButtonSize, number> = { large: ds.radius.r100, small: ds.radius.r100 };

  const containerByVariant = {
    primary: {
      bg: ds.palette.blue600,
      bgPressed: ds.palette.blue500,
      bgDisabled: ds.palette.neutral100,
      labelColor: ds.palette.white,
      border: 0,
    },
    secondary: {
      bg: ds.palette.neutral100,
      bgPressed: ds.palette.neutral200,
      bgDisabled: ds.palette.neutral100,
      labelColor: ds.palette.black,
      border: 0,
    },
    tertiary: {
      bg: ds.palette.white,
      bgPressed: ds.palette.neutral50,
      bgDisabled: ds.palette.white,
      labelColor: ds.palette.blue600,
      border: 1.5,
    },
    transparent: {
      bg: ds.palette.transparent,
      bgPressed: ds.palette.neutral50,
      bgDisabled: ds.palette.transparent,
      labelColor: ds.palette.blue600,
      border: 0,
    },
  } as const;

  const v = containerByVariant[variant];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!isDisabled }}
      disabled={isDisabled}
      onPress={handlePress}
      style={({ pressed }) => [
        {
          height: heights[size],
          borderRadius: radii[size],
          backgroundColor: isDisabled ? v.bgDisabled : pressed ? v.bgPressed : v.bg,
          borderWidth: v.border,
          borderColor: ds.palette.blue600,
          paddingHorizontal: size === 'large' ? ds.spacing.s24 : ds.spacing.s16,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          opacity: isDisabled && !loading ? 0.55 : 1,
          width: fullWidth ? '100%' : undefined,
        },
        style as any,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={v.labelColor} />
      ) : (
        <>
          {iconLeft && (
            <View style={{ marginRight: ds.spacing.s8 }}>
              <Icon name={iconLeft} size={size === 'large' ? 18 : 16} color={v.labelColor} />
            </View>
          )}
          <Typography
            variant={size === 'large' ? 'p1.17.semibold' : 'p3.15.semibold'}
            color={v.labelColor}
          >
            {label}
          </Typography>
          {iconRight && (
            <View style={{ marginLeft: ds.spacing.s8 }}>
              <Icon name={iconRight} size={size === 'large' ? 18 : 16} color={v.labelColor} />
            </View>
          )}
        </>
      )}
    </Pressable>
  );
}
