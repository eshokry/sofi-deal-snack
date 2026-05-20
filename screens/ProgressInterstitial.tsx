import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';
import Svg, { Path, Defs, LinearGradient as SvgGradient, Stop, Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ds } from '../theme';
import { Typography } from '../components/Typography';
import { Button } from '../components/Button';
import { Avatar } from '../components/Avatar';
import { CoinIcon } from '../components/CoinIcon';
import { Icon } from '../components/Icon';

// Roughly 33% of a half-circle arc — drawn as an SVG path.
// Full arc sweeps from -150° on left, around the top, to -30° on right.
// We render two paths: a faint gray track and an animated blue progress arc on top.
const RADIUS = 110;
const STROKE = 14;
const SIZE = (RADIUS + STROKE) * 2;
const CENTER = SIZE / 2;

function polar(deg: number) {
  const r = (deg * Math.PI) / 180;
  return [CENTER + RADIUS * Math.cos(r), CENTER + RADIUS * Math.sin(r)];
}

// Open arc spanning -180° (180° on x-axis) clockwise to 0°, then to 180° (full bottom-up half ring).
// We draw a top-half-circle going from left 180° → right 0°.
function arcPath(startDeg: number, endDeg: number) {
  const [x1, y1] = polar(startDeg);
  const [x2, y2] = polar(endDeg);
  const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
  const sweep = endDeg > startDeg ? 1 : 0;
  return `M ${x1} ${y1} A ${RADIUS} ${RADIUS} 0 ${largeArc} ${sweep} ${x2} ${y2}`;
}

export function ProgressInterstitialScreen() {
  const navigation = useNavigation<any>();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 0.33,
      duration: 1100,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [progress]);

  // Full arc covers 180° (from 180° to 360°, i.e., top-half). 33% = 60°.
  // We just render the static 33% sweep here (Snack: keep it simple; animate via opacity tick).
  const trackPath = arcPath(180, 360);
  const progressPath = arcPath(180, 180 + 60);

  return (
    <View style={{ flex: 1, backgroundColor: ds.palette.white }}>
      <LinearGradient
        colors={['#DFEFFF', '#FFFFFF', '#FFFFFF', '#DFEFFF']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFillObject}
      />

      <View style={styles.center}>
        <View style={{ width: SIZE, height: SIZE / 2 + 40, alignItems: 'center' }}>
          <Svg width={SIZE} height={SIZE}>
            <Defs>
              <SvgGradient id="g" x1="0" y1="0" x2="1" y2="0">
                <Stop offset="0" stopColor="#007AFF" />
                <Stop offset="1" stopColor="#59B9FF" />
              </SvgGradient>
            </Defs>
            {/* Track */}
            <Path
              d={trackPath}
              stroke={ds.palette.neutral100}
              strokeWidth={STROKE}
              strokeLinecap="round"
              fill="none"
            />
            {/* Progress */}
            <Path
              d={progressPath}
              stroke="url(#g)"
              strokeWidth={STROKE}
              strokeLinecap="round"
              fill="none"
            />
            {/* End-cap gift icon */}
            <Circle cx={polar(360)[0]} cy={polar(360)[1]} r={12} fill={ds.palette.white} stroke={ds.palette.neutral200} />
          </Svg>

          {/* Avatar on the starting cap */}
          <View
            style={{
              position: 'absolute',
              left: polar(180)[0] - 20,
              top: polar(180)[1] - 20,
            }}
          >
            <Avatar size="s" uri="https://i.pravatar.cc/80?img=15" ring />
          </View>

          {/* Gift icon at end cap */}
          <View
            style={{
              position: 'absolute',
              left: polar(360)[0] - 10,
              top: polar(360)[1] - 10,
            }}
          >
            <Icon name="gift" size={20} color={ds.palette.neutral500} />
          </View>

          {/* Numeric badge — centered inside the arc */}
          <View
            style={{
              position: 'absolute',
              top: SIZE / 2 - 64,
              left: 0,
              right: 0,
              alignItems: 'center',
            }}
          >
            <Typography variant="h1.bold" color={ds.palette.blue600}>
              33%
            </Typography>
            <Typography variant="p1.17.semibold" color={ds.palette.black} style={{ marginTop: ds.spacing.s4 }}>
              Let's go Jordan
            </Typography>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: ds.spacing.s4,
              }}
            >
              <Typography variant="p3.15.regular" color={ds.palette.black}>
                5{'  '}
              </Typography>
              <CoinIcon size={14} />
              <Typography variant="p3.15.regular" color={ds.palette.neutral700} style={{ marginLeft: ds.spacing.s4 }}>
                earned so far
              </Typography>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          label="Keep going"
          variant="primary"
          onPress={() => navigation.navigate('DealStepsList')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    paddingHorizontal: ds.spacing.s16,
    paddingBottom: ds.spacing.s32,
  },
});
