import React, { useState } from 'react';
import { View, ScrollView, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ds } from '../theme';
import { StatusBar } from '../components/StatusBar';
import { Typography } from '../components/Typography';
import { IconButton } from '../components/IconButton';
import { StepNumber } from '../components/StepNumber';
import { Icon } from '../components/Icon';
import { DealCard } from '../components/DealCard';

type Step = {
  id: string;
  title: string;
  body?: string;
  completed?: boolean;
  current?: boolean;
};

export function DealStepsListScreen() {
  const navigation = useNavigation<any>();
  const [openId, setOpenId] = useState<string | null>('deposit');

  const steps: Step[] = [
    { id: 'intro',   title: 'Introduction', completed: true },
    { id: 'open',    title: 'Open your account', completed: true },
    {
      id: 'deposit',
      title: 'Deposit at least $10',
      current: true,
      body:
        'Add $10 or more to your SoFi account to finish this step. After your deposit is completed, come back and confirm by tapping "I deposited $10."',
    },
    { id: 'rewards', title: 'Claim your rewards' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: ds.palette.white }}>
      <LinearGradient
        colors={['#FFFFFF', '#FFFFFF', '#DFEFFF']}
        style={StyleSheet.absoluteFillObject}
      />

      <StatusBar />

      <View
        style={{
          paddingHorizontal: ds.spacing.s16,
          paddingTop: ds.spacing.s8,
          paddingBottom: ds.spacing.s16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h2.semibold" color={ds.palette.black}>
          Deal steps
        </Typography>
        <IconButton
          iconName="close"
          variant="light"
          onPress={() => navigation.goBack()}
          accessibilityLabel="Close"
        />
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: ds.spacing.s16, paddingBottom: ds.spacing.s40 }}>
        <View style={{ gap: ds.spacing.s12 }}>
          {steps.map((step, idx) => {
            const isOpen = openId === step.id;
            return (
              <DealCard key={step.id} padding={0} radius={ds.radius.r20} shadow="card">
                <Pressable
                  onPress={() => setOpenId(isOpen ? null : step.id)}
                  style={({ pressed }) => [
                    styles.row,
                    pressed && { opacity: 0.7 },
                  ]}
                >
                  <View style={styles.left}>
                    <StepNumber
                      number={step.completed ? undefined : idx}
                      completed={!!step.completed}
                      variant={
                        step.completed
                          ? 'success'
                          : step.current
                          ? 'filled-blue'
                          : 'light-blue'
                      }
                    />
                    <Typography variant="p2.16.semibold" color={ds.palette.black} style={{ marginLeft: ds.spacing.s12 }}>
                      {step.title}
                    </Typography>
                  </View>
                  <Icon
                    name={isOpen ? 'chevron-up' : 'chevron-down'}
                    size={20}
                    color={ds.palette.neutral500}
                  />
                </Pressable>

                {isOpen && step.body && (
                  <View style={{ paddingHorizontal: ds.spacing.s16, paddingBottom: ds.spacing.s16 }}>
                    <Typography variant="p3.15.regular" color={ds.palette.neutral800}>
                      {step.body}
                    </Typography>
                  </View>
                )}
              </DealCard>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: ds.spacing.s16,
    paddingVertical: ds.spacing.s16,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});
