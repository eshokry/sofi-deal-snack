import React from 'react';
import { View, ViewStyle } from 'react-native';
import { ds } from '../theme';
import { Typography } from './Typography';
import { IconButton } from './IconButton';
import { IconName } from './Icon';

export type TopNavigationProps = {
  title?: string;
  subtitle?: string;
  leftIcon?: IconName;
  onLeftPress?: () => void;
  rightIcon?: IconName;
  onRightPress?: () => void;
  rightSlot?: React.ReactNode;
  titleColor?: string;
  background?: 'transparent' | string;
  style?: ViewStyle;
  variant?: 'light' | 'overlay';
};

export function TopNavigation({
  title,
  subtitle,
  leftIcon = 'chevron-left',
  onLeftPress,
  rightIcon,
  onRightPress,
  rightSlot,
  titleColor,
  background = 'transparent',
  style,
  variant = 'light',
}: TopNavigationProps) {
  const iconVariant = variant === 'overlay' ? 'transparent' : 'light';
  const sideBg = variant === 'overlay'
    ? ds.palette.whiteAlpha48
    : ds.palette.neutral50;

  return (
    <View
      style={[
        {
          height: 56,
          paddingHorizontal: ds.spacing.s16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: background,
        },
        style as any,
      ]}
    >
      <View style={{ width: 40 }}>
        {leftIcon && (
          <IconButton
            iconName={leftIcon}
            size="m"
            variant={iconVariant}
            onPress={onLeftPress}
            style={{ backgroundColor: sideBg }}
            accessibilityLabel="Back"
          />
        )}
      </View>

      <View style={{ flex: 1, alignItems: 'center' }}>
        {title && (
          <Typography variant="p3.15.semibold" color={titleColor ?? ds.palette.black}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="p5.12.regular" color={ds.palette.neutral600}>
            {subtitle}
          </Typography>
        )}
      </View>

      <View style={{ width: 40, alignItems: 'flex-end' }}>
        {rightSlot ?? (rightIcon && (
          <IconButton
            iconName={rightIcon}
            size="m"
            variant={iconVariant}
            onPress={onRightPress}
            style={{ backgroundColor: sideBg }}
            accessibilityLabel="More"
          />
        ))}
      </View>
    </View>
  );
}
