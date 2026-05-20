import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ds } from '../theme';
import { StatusBar } from '../components/StatusBar';
import { TopNavigation } from '../components/TopNavigation';
import { Typography } from '../components/Typography';
import { Button } from '../components/Button';
import { Pill } from '../components/Pill';
import { Icon } from '../components/Icon';
import { DealCard } from '../components/DealCard';
import { StepNumber } from '../components/StepNumber';
import { ChatInputBar } from '../components/ChatInputBar';
import { Avatar } from '../components/Avatar';
import { CoinIcon } from '../components/CoinIcon';
import { SoFiBrandHeader } from '../components/SoFiBrandHeader';

export function DealOverviewScreen() {
  const navigation = useNavigation<any>();
  const [showModal, setShowModal] = useState(true);

  return (
    <View style={{ flex: 1, backgroundColor: ds.palette.blue200 }}>
      {/* Blue gradient header that bleeds behind the card */}
      <LinearGradient
        colors={['#C2E0FF', '#79B8FF', '#007AFF']}
        style={StyleSheet.absoluteFillObject}
      />

      <StatusBar />
      <TopNavigation
        leftIcon="chevron-left"
        onLeftPress={() => navigation.goBack()}
        rightIcon="dots"
        variant="overlay"
        titleColor={ds.palette.white}
      />

      {/* Center brand mark slot under top nav */}
      <View
        style={{
          position: 'absolute',
          top: 60,
          left: 0,
          right: 0,
          alignItems: 'center',
        }}
        pointerEvents="none"
      >
        <SoFiBrandHeader color={ds.palette.white} />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 60, paddingBottom: 220 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingHorizontal: ds.spacing.s16, gap: ds.spacing.s8 }}>
          <DealCard padding={ds.spacing.s20} radius={ds.radius.r28}>
            <Typography variant="h4.semibold">
              Earn up to $450 in bonuses
            </Typography>
            <Typography
              variant="p3.15.regular"
              color={ds.palette.neutral600}
              style={{ marginTop: ds.spacing.s4 }}
            >
              Open a checking & savings account
            </Typography>

            <View style={styles.pillRow}>
              <Pill
                label="12 minutes"
                size="s"
                variant="neutral"
                leftIcon="clock"
              />
              <View style={styles.peoplePill}>
                <View style={{ flexDirection: 'row' }}>
                  <Avatar size="xs" uri="https://i.pravatar.cc/40?img=12" />
                  <Avatar
                    size="xs"
                    uri="https://i.pravatar.cc/40?img=22"
                    style={{ marginLeft: -8 }}
                  />
                  <Avatar
                    size="xs"
                    uri="https://i.pravatar.cc/40?img=32"
                    style={{ marginLeft: -8 }}
                  />
                </View>
                <Typography
                  variant="p5.12.semibold"
                  color={ds.palette.black}
                  style={{ marginLeft: ds.spacing.s4 }}
                >
                  174K joined
                </Typography>
              </View>
              <Pill
                label="Finance"
                size="s"
                variant="success"
                leftIcon="finance-tag"
              />
            </View>
          </DealCard>

          <DealCard
            padding={ds.spacing.s16}
            radius={ds.radius.r24}
            shadow="card"
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: ds.spacing.s12 }}>
              <StepNumber number={1} size="s" variant="filled-blue" />
              <Typography variant="p3.15.semibold" color={ds.palette.black} style={{ marginRight: ds.spacing.s4 }}>
                +900
              </Typography>
              <CoinIcon size={16} />
              <Typography variant="p3.15.regular" color={ds.palette.neutral700}>
                when you finish the deal
              </Typography>
            </View>
          </DealCard>
        </View>
      </ScrollView>

      {/* Bottom chat input bar */}
      <View style={styles.bottomBar}>
        <ChatInputBar
          suggestions={[
            'What do I need to do to qualify?',
            'What rewards will I get?',
            'Who is sponsoring this deal?',
          ]}
        />
      </View>

      {/* Modal — Start the deal */}
      {showModal && (
        <View style={styles.modalScrim}>
          <Pressable style={StyleSheet.absoluteFillObject} onPress={() => setShowModal(false)} />
          <View style={styles.modalCard}>
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: ds.palette.blue100,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: ds.spacing.s16,
              }}
            >
              <Icon name="arrow-right-circle-filled" size={28} color={ds.palette.blue600} />
            </View>
            <Typography variant="h3.semibold" color={ds.palette.black}>
              Start the deal
            </Typography>
            <Typography
              variant="p3.15.regular"
              color={ds.palette.neutral700}
              style={{ marginTop: ds.spacing.s8, marginBottom: ds.spacing.s24 }}
            >
              You will be able to view all the deal steps as soon as you start this deal.
            </Typography>
            <Button
              label="Start the deal"
              variant="primary"
              onPress={() => {
                setShowModal(false);
                navigation.navigate('Step1Signup');
              }}
            />
            <View style={{ height: ds.spacing.s8 }} />
            <Button
              label="Close"
              variant="secondary"
              onPress={() => setShowModal(false)}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  pillRow: {
    flexDirection: 'row',
    gap: ds.spacing.s8,
    marginTop: ds.spacing.s16,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  peoplePill: {
    height: 24,
    paddingHorizontal: 4,
    paddingRight: ds.spacing.s8,
    borderRadius: ds.radius.r100,
    backgroundColor: ds.palette.neutral50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: ds.spacing.s12,
    paddingBottom: ds.spacing.s24,
    backgroundColor: ds.palette.white,
    borderTopWidth: 0,
  },
  modalScrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: ds.spacing.s24,
  },
  modalCard: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: ds.palette.white,
    borderRadius: ds.radius.r24,
    padding: ds.spacing.s24,
  },
});
