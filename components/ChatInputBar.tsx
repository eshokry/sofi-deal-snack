import React from 'react';
import { View, ScrollView, Pressable, TextInput, StyleSheet } from 'react-native';
import { ds } from '../theme';
import { Typography } from './Typography';
import { Icon } from './Icon';

export type ChatInputBarProps = {
  suggestions?: string[];
  onSuggestionPress?: (s: string) => void;
  placeholder?: string;
  termsLink?: string;
  termsPrefix?: string;
  onTermsPress?: () => void;
  // Show the terms line under the input bar.
  showTerms?: boolean;
};

export function ChatInputBar({
  suggestions = [],
  onSuggestionPress,
  placeholder = 'Ask a question...',
  termsPrefix,
  termsLink = 'terms',
  onTermsPress,
  showTerms = true,
}: ChatInputBarProps) {
  return (
    <View>
      {/* Suggestion chips */}
      {suggestions.length > 0 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: ds.spacing.s16,
            gap: ds.spacing.s8,
            paddingBottom: ds.spacing.s12,
          }}
        >
          {suggestions.map((s, i) => (
            <Pressable
              key={i}
              onPress={() => onSuggestionPress?.(s)}
              style={styles.chip}
            >
              <Typography variant="p5.12.regular" color={ds.palette.neutral800}>
                {s}
              </Typography>
            </Pressable>
          ))}
        </ScrollView>
      )}

      {/* Input */}
      <View style={styles.inputRow}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={ds.palette.neutral500}
          style={styles.input}
        />
        <View style={styles.micWrap}>
          <Icon name="mic" size={18} color={ds.palette.neutral700} />
        </View>
      </View>

      {/* Terms line */}
      {showTerms && (
        <View
          style={{
            paddingHorizontal: ds.spacing.s24,
            paddingTop: ds.spacing.s8,
            paddingBottom: ds.spacing.s8,
          }}
        >
          <Typography variant="p5.12.regular" color={ds.palette.neutral600} align="center">
            {termsPrefix ?? 'By joining this sponsored deal, you agree to the '}
            <Typography
              variant="p5.12.regular"
              color={ds.palette.blue600}
              onPress={onTermsPress}
            >
              {termsLink}
            </Typography>
          </Typography>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: 36,
    paddingHorizontal: ds.spacing.s12,
    backgroundColor: ds.palette.neutral50,
    borderRadius: ds.radius.r16,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 130,
  },
  inputRow: {
    marginHorizontal: ds.spacing.s16,
    height: 48,
    borderRadius: ds.radius.r24,
    backgroundColor: ds.palette.neutral50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ds.spacing.s16,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: ds.palette.black,
    paddingVertical: 0,
  },
  micWrap: {
    marginLeft: ds.spacing.s8,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
