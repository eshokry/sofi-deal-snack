import React from 'react';
import { View, Image, ImageSourcePropType, StyleSheet, ViewStyle } from 'react-native';
import { ds } from '../theme';
import { Typography } from './Typography';

export type AvatarSize = 'xs' | 's' | 'm' | 'l';
const sizes: Record<AvatarSize, number> = { xs: 24, s: 32, m: 48, l: 64 };

export type AvatarProps = {
  size?: AvatarSize;
  source?: ImageSourcePropType;
  uri?: string;
  initials?: string;
  ring?: boolean;
  ringColor?: string;
  style?: ViewStyle;
};

export function Avatar({
  size = 'm',
  source,
  uri,
  initials,
  ring = false,
  ringColor = ds.palette.blue600,
  style,
}: AvatarProps) {
  const dim = sizes[size];
  const inner = ring ? dim - 4 : dim;

  return (
    <View
      style={[
        styles.outer,
        { width: dim, height: dim, borderRadius: dim / 2 },
        ring && { borderWidth: 2, borderColor: ringColor },
        style,
      ]}
    >
      {source || uri ? (
        <Image
          source={source ?? { uri }}
          style={{
            width: inner,
            height: inner,
            borderRadius: inner / 2,
          }}
        />
      ) : (
        <View
          style={{
            width: inner,
            height: inner,
            borderRadius: inner / 2,
            backgroundColor: ds.palette.neutral100,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="p3.15.semibold" color={ds.palette.neutral700}>
            {initials ?? ''}
          </Typography>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
