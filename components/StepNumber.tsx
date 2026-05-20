import React from 'react';
import { View } from 'react-native';
import { ds } from '../theme';
import { Typography } from './Typography';
import { Icon } from './Icon';

export type StepNumberProps = {
  number?: number;
  completed?: boolean;
  size?: 's' | 'm' | 'l';
  // 'filled-blue' = solid blue (current step), 'light-blue' = pale blue (upcoming),
  // 'success' = green check (done).
  variant?: 'filled-blue' | 'light-blue' | 'success';
};

const dims = { s: 20, m: 28, l: 32 };

export function StepNumber({
  number,
  completed = false,
  size = 'm',
  variant,
}: StepNumberProps) {
  const v = variant ?? (completed ? 'success' : 'light-blue');
  const d = dims[size];

  const bg = v === 'filled-blue'
    ? ds.palette.blue600
    : v === 'success'
    ? ds.palette.green100
    : ds.palette.blue100;

  const fg = v === 'filled-blue'
    ? ds.palette.white
    : v === 'success'
    ? ds.palette.green800
    : ds.palette.blue600;

  return (
    <View
      style={{
        width: d,
        height: d,
        borderRadius: d / 2,
        backgroundColor: bg,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {v === 'success' ? (
        <Icon name="check" size={d * 0.55} color={fg} strokeWidth={2.4} />
      ) : (
        <Typography
          variant={size === 's' ? 'c2.11.semibold' : 'p4.13.semibold'}
          color={fg}
        >
          {number ?? ''}
        </Typography>
      )}
    </View>
  );
}
