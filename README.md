# SoFi Deal — Expo Snack Prototype

A 5-screen prototype of the NIL Club SoFi brand-deal flow, hand-built against the [NIL Club 2026 Design System](https://www.figma.com/design/JfEo5kDoGcwI6pvXgpBImm/NIL-Club_2026-Design-System) tokens.

## Run

Open in Expo Snack:

```
https://snack.expo.dev/git?repo=https://github.com/eshokry/sofi-deal-snack&platform=ios
```

Or `git clone` and `npx expo start`.

## Flow

| # | Screen | File |
|---|---|---|
| 1 | Deal overview + "Start the deal" modal | `screens/DealOverview.tsx` |
| 2 | Step 1 — Create a SoFi account | `screens/Step1Signup.tsx` |
| 3 | Progress interstitial — Let's go Jordan / 33% | `screens/ProgressInterstitial.tsx` |
| 4 | Deal steps list (vertical accordion) | `screens/DealStepsList.tsx` |
| 5 | Final earnings — 900 points + share + next deals | `screens/DealComplete.tsx` |

## Design system

All spacing, radius, color, shadow, and typography tokens are 1:1 with `packages/mobile-ui/src/tokens/` in the production nilclub monorepo. See `theme/tokens.ts` and `theme/typography.ts`.

Components in `components/` are hand-rolled (not pulled from `@yoke-global/mobile-ui`) because Snack doesn't install workspace packages.

## Source frames

Figma file `86XoXOp8a7YrqD6laXxrfi`, section "SoFi deal" (`10435:338295`). Frames 597, 606, 605, 624, 611.

## Stack

- Expo SDK 51 (Snack-stable)
- React Navigation native-stack
- react-native-svg for icons + arc progress
- expo-linear-gradient for screen backgrounds
- expo-haptics for button feedback
