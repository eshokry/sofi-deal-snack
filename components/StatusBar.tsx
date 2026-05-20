import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, Circle } from 'react-native-svg';
import { ds } from '../theme';
import { Typography } from './Typography';

// iOS 14+ floating island + 9:41 + signal/wifi/battery row.
// Drawn at 60pt height to match real iOS status bar + dynamic-island stack.
export function StatusBar() {
  return (
    <View
      style={{
        height: 54,
        paddingHorizontal: ds.spacing.s24,
        paddingTop: ds.spacing.s16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="p3.15.semibold" color={ds.palette.black} style={{ minWidth: 60 }}>
        9:41
      </Typography>

      <View
        style={{
          width: 122,
          height: 34,
          borderRadius: 22,
          backgroundColor: ds.palette.black,
        }}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
        {/* signal bars */}
        <Svg width={18} height={11} viewBox="0 0 18 11">
          <Rect x="0"  y="7" width="3" height="4" rx="1" fill="#000" />
          <Rect x="5"  y="5" width="3" height="6" rx="1" fill="#000" />
          <Rect x="10" y="2" width="3" height="9" rx="1" fill="#000" />
          <Rect x="15" y="0" width="3" height="11" rx="1" fill="#000" />
        </Svg>

        {/* wifi */}
        <Svg width={18} height={12} viewBox="0 0 18 12">
          <Path d="M1 4.5c4-3.5 12-3.5 16 0" stroke="#000" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <Path d="M3.5 7c2.5-2 8.5-2 11 0" stroke="#000" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <Circle cx="9" cy="10" r="1.4" fill="#000" />
        </Svg>

        {/* battery */}
        <Svg width={26} height={12} viewBox="0 0 26 12">
          <Rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="#000" strokeOpacity="0.4" fill="none" />
          <Rect x="2.5" y="2.5" width="18" height="7" rx="1.5" fill="#000" />
          <Rect x="23.5" y="4" width="1.5" height="4" rx="0.5" fill="#000" fillOpacity="0.4" />
        </Svg>
      </View>
    </View>
  );
}
