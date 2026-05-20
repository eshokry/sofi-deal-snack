import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ds } from '../theme';
import { StatusBar } from '../components/StatusBar';
import { TopNavigation } from '../components/TopNavigation';
import { Typography } from '../components/Typography';
import { Button } from '../components/Button';
import { DealCard } from '../components/DealCard';
import { ChatInputBar } from '../components/ChatInputBar';
import { CoinIcon } from '../components/CoinIcon';
import { SoFiBrandHeader } from '../components/SoFiBrandHeader';

export function Step1SignupScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, backgroundColor: ds.palette.blue200 }}>
      <LinearGradient
        colors={['#79B8FF', '#59B9FF', '#007AFF']}
        style={StyleSheet.absoluteFillObject}
      />

      <StatusBar />

      <View style={{ position: 'relative' }}>
        <TopNavigation
          leftIcon="chevron-left"
          onLeftPress={() => navigation.goBack()}
          rightIcon="dots"
          variant="overlay"
        />
        <View
          style={{
            position: 'absolute',
            top: 12,
            left: 0,
            right: 0,
            alignItems: 'center',
          }}
          pointerEvents="none"
        >
          <SoFiBrandHeader color={ds.palette.white} />
          {/* Step indicator dashes */}
          <View style={{ flexDirection: 'row', marginTop: 6, gap: 4 }}>
            <View style={styles.activeDash} />
            <View style={styles.inactiveDash} />
            <View style={styles.inactiveDash} />
          </View>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: ds.spacing.s24, paddingBottom: 220 }}
      >
        <View style={{ paddingHorizontal: ds.spacing.s16 }}>
          <DealCard padding={ds.spacing.s24} radius={ds.radius.r28}>
            <Typography variant="h3.semibold">Create a SoFi account</Typography>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: ds.spacing.s4,
              }}
            >
              <Typography variant="p3.15.regular" color={ds.palette.neutral600}>
                Finish this step to get:{'  '}
              </Typography>
              <CoinIcon size={16} />
              <Typography
                variant="p3.15.semibold"
                color={ds.palette.black}
                style={{ marginLeft: ds.spacing.s4 }}
              >
                5
              </Typography>
            </View>

            <View style={{ marginTop: ds.spacing.s20, gap: ds.spacing.s12 }}>
              <Typography variant="p3.15.regular" color={ds.palette.black}>
                Click the button below to visit SoFi's website and then click "Open an account".
              </Typography>
              <Typography variant="p3.15.regular" color={ds.palette.black}>
                Enter your <Typography variant="p3.15.semibold">.edu email</Typography> when signing up.
              </Typography>
            </View>

            <View style={{ marginTop: ds.spacing.s24, gap: ds.spacing.s12 }}>
              <Button
                label="Click here to start"
                variant="primary"
                iconRight="arrow-square-out"
                onPress={() => navigation.navigate('ProgressInterstitial')}
              />
              <Button
                label="I've finished signing up"
                variant="tertiary"
                onPress={() => navigation.navigate('ProgressInterstitial')}
              />
            </View>
          </DealCard>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <ChatInputBar
          showTerms={false}
          suggestions={[
            'What should I put as my employment status?',
            'How will I know when I am done with this step?',
            'How do I get to the SoFi website from here?',
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activeDash: { width: 20, height: 3, borderRadius: 2, backgroundColor: ds.palette.white },
  inactiveDash: { width: 20, height: 3, borderRadius: 2, backgroundColor: ds.palette.whiteAlpha48 },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: ds.spacing.s12,
    paddingBottom: ds.spacing.s24,
    backgroundColor: ds.palette.white,
  },
});
