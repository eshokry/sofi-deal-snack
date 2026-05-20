import React from 'react';
import { Text, TextProps } from 'react-native';
import { ds } from '../theme';
import { typographySpecs, TypographyVariant } from '../theme/typography';

export type TypographyProps = TextProps & {
  variant?: TypographyVariant;
  color?: string;
  align?: 'left' | 'center' | 'right';
};

export function Typography({
  variant = 'p3.15.regular',
  color,
  align,
  style,
  children,
  ...rest
}: TypographyProps) {
  const spec = typographySpecs[variant];
  return (
    <Text
      style={[
        { color: color ?? ds.colors.text.default, textAlign: align },
        spec,
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}
