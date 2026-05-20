import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ds } from '../theme';
import { StatusBar } from '../components/StatusBar';
import { Typography } from '../components/Typography';
import { IconButton } from '../components/IconButton';
import { Icon } from '../components/Icon';
import { CoinIcon } from '../components/CoinIcon';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';

type Reward = { icon: 'cash' | 'coin' | 'graduation-cap'; amount: string; label: string };

const nilClubRewards: Reward[] = [
  { icon: 'cash', amount: '$20.00', label: 'Cash' },
  { icon: 'coin', amount: '+910', label: 'Points' },
];
const sofiRewards: Reward[] = [
  { icon: 'graduation-cap', amount: '$30.00', label: '.edu Bonus' },
];

const friends = [
  { name: 'Courtney Henry',   uri: 'https://i.pravatar.cc/80?img=21' },
  { name: 'Leslie Alexander', uri: 'https://i.pravatar.cc/80?img=42' },
  { name: 'Liam Howard',      uri: 'https://i.pravatar.cc/80?img=51' },
];

const nextDeals = [
  { brand: 'SoFi',     bg: '#007AFF', title: 'SoFi',    body: 'Sign up and buy $50 of crypto to get up to $2,000 in BTC', reward: '+$350' },
  { brand: 'Revolut',  bg: '#000000', title: 'Revolut', body: 'Join and spend $10', reward: '+$10' },
  { brand: 'Tempo',    bg: '#0066FF', title: 'Tempo',   body: 'Order a Tempo meal', reward: '+$15' },
];

export function DealCompleteScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, backgroundColor: ds.palette.white }}>
      <LinearGradient
        colors={['#DFEFFF', '#FFFFFF']}
        style={StyleSheet.absoluteFillObject}
      />

      <StatusBar />

      {/* Floating top pill: "900 points earned" + X */}
      <View style={styles.headerRow}>
        <View style={styles.earnedPill}>
          <CoinIcon size={20} />
          <Typography variant="p3.15.semibold" color={ds.palette.black} style={{ marginLeft: ds.spacing.s8 }}>
            900 points earned
          </Typography>
        </View>
        <IconButton
          iconName="close"
          variant="light"
          onPress={() => navigation.popToTop()}
          accessibilityLabel="Close"
        />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: ds.spacing.s40 }}>
        {/* Deal rewards section */}
        <View style={{ paddingHorizontal: ds.spacing.s16, marginTop: ds.spacing.s16 }}>
          <Typography variant="h3.semibold" color={ds.palette.black} style={{ marginBottom: ds.spacing.s12 }}>
            Deal rewards
          </Typography>

          <View style={styles.rewardGroup}>
            <View style={styles.rewardGroupHeader}>
              <CoinIcon size={18} />
              <Typography variant="p3.15.semibold" color={ds.palette.blue600} style={{ marginLeft: ds.spacing.s8 }}>
                NIL Club rewards
              </Typography>
              <View style={{ marginLeft: ds.spacing.s4 }}>
                <Icon name="info-filled" size={14} color={ds.palette.blue600} />
              </View>
            </View>
            {nilClubRewards.map((r, i) => (
              <RewardRow key={i} reward={r} />
            ))}
          </View>

          <View style={[styles.rewardGroup, { marginTop: ds.spacing.s12, backgroundColor: '#E8F4FF' }]}>
            <View style={styles.rewardGroupHeader}>
              <View
                style={{
                  width: 18, height: 18, borderRadius: 4,
                  backgroundColor: ds.palette.blue600,
                  alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Icon name="finance-tag" size={12} color={ds.palette.white} />
              </View>
              <Typography variant="p3.15.semibold" color={ds.palette.blue600} style={{ marginLeft: ds.spacing.s8 }}>
                SoFi rewards
              </Typography>
              <View style={{ marginLeft: ds.spacing.s4 }}>
                <Icon name="info-filled" size={14} color={ds.palette.blue600} />
              </View>
            </View>
            {sofiRewards.map((r, i) => (
              <RewardRow key={i} reward={r} />
            ))}
          </View>
        </View>

        {/* Share this deal */}
        <View style={{ paddingHorizontal: ds.spacing.s16, marginTop: ds.spacing.s28 }}>
          <SectionHeader title="Share this deal" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: ds.spacing.s12, paddingVertical: ds.spacing.s12 }}
          >
            {friends.map((f, i) => (
              <View key={i} style={styles.friendCard}>
                <Avatar size="m" uri={f.uri} />
                <View style={{ marginLeft: ds.spacing.s8, flex: 1, justifyContent: 'center' }}>
                  <Typography variant="p4.13.semibold" numberOfLines={1}>{f.name}</Typography>
                </View>
                <View style={styles.getPill}>
                  <Typography variant="p5.12.semibold" color={ds.palette.white}>Get 200</Typography>
                  <View style={{ marginLeft: 4 }}><CoinIcon size={12} /></View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Next deals for you */}
        <View style={{ paddingHorizontal: ds.spacing.s16, marginTop: ds.spacing.s12 }}>
          <SectionHeader title="Next deals for you" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: ds.spacing.s12, paddingVertical: ds.spacing.s12 }}
          >
            {nextDeals.map((d, i) => (
              <View key={i} style={styles.nextDealCard}>
                <View style={[styles.nextDealLogo, { backgroundColor: d.bg }]}>
                  <Typography variant="p4.13.semibold" color={ds.palette.white}>{d.brand[0]}</Typography>
                </View>
                <View style={{ flex: 1, marginLeft: ds.spacing.s8 }}>
                  <Typography variant="p4.13.semibold">{d.title}</Typography>
                  <Typography variant="p5.12.regular" color={ds.palette.neutral700} numberOfLines={2}>
                    {d.body}
                  </Typography>
                </View>
                <View style={styles.rewardPill}>
                  <Typography variant="p5.12.semibold" color={ds.palette.blue600}>
                    {d.reward}
                  </Typography>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={{ paddingHorizontal: ds.spacing.s16, marginTop: ds.spacing.s12 }}>
          <Button
            label="Back to deals"
            variant="primary"
            onPress={() => navigation.popToTop()}
          />
        </View>
      </ScrollView>
    </View>
  );
}

function RewardRow({ reward }: { reward: Reward }) {
  return (
    <View style={styles.rewardRow}>
      <View style={styles.rewardIcon}>
        {reward.icon === 'cash' && <Icon name="cash" size={18} color={ds.palette.green800} />}
        {reward.icon === 'coin' && <CoinIcon size={18} />}
        {reward.icon === 'graduation-cap' && <Icon name="graduation-cap" size={18} color={ds.palette.neutral800} />}
      </View>
      <Typography variant="p2.16.semibold" color={ds.palette.black} style={{ flex: 1 }}>
        {reward.amount}
      </Typography>
      <Typography variant="p3.15.regular" color={ds.palette.neutral700}>
        {reward.label}
      </Typography>
    </View>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant="h3.semibold">{title}</Typography>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Typography variant="p4.13.semibold" color={ds.palette.neutral700} style={{ marginRight: 4 }}>View all</Typography>
        <Icon name="chevron-right" size={16} color={ds.palette.neutral700} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: ds.spacing.s16,
    paddingTop: ds.spacing.s8,
    paddingBottom: ds.spacing.s8,
  },
  earnedPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ds.spacing.s16,
    height: 40,
    borderRadius: ds.radius.r100,
    backgroundColor: ds.palette.white,
    ...ds.shadows.card,
  },
  rewardGroup: {
    backgroundColor: '#EFF8FF',
    borderRadius: ds.radius.r20,
    padding: ds.spacing.s12,
  },
  rewardGroupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ds.spacing.s4,
    paddingTop: ds.spacing.s4,
    paddingBottom: ds.spacing.s8,
  },
  rewardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ds.palette.white,
    paddingHorizontal: ds.spacing.s16,
    paddingVertical: ds.spacing.s12,
    borderRadius: ds.radius.r16,
    marginTop: ds.spacing.s4,
  },
  rewardIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: ds.spacing.s8,
  },
  friendCard: {
    width: 240,
    backgroundColor: ds.palette.white,
    borderRadius: ds.radius.r16,
    padding: ds.spacing.s12,
    flexDirection: 'row',
    alignItems: 'center',
    ...ds.shadows.card,
  },
  getPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ds.palette.blue600,
    paddingHorizontal: ds.spacing.s12,
    height: 28,
    borderRadius: 14,
  },
  nextDealCard: {
    width: 240,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ds.palette.white,
    borderRadius: ds.radius.r16,
    padding: ds.spacing.s12,
    ...ds.shadows.card,
  },
  nextDealLogo: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rewardPill: {
    paddingHorizontal: ds.spacing.s8,
    height: 24,
    borderRadius: 12,
    backgroundColor: ds.palette.blue100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
