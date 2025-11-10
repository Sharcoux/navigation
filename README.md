# React Universal Navigation

Universal navigation component for React and React Native. This repository is a monorepo that publishes two packages with the same API:

- `@cantoo/navigation`: pure React implementation
- `@react-native-assets/navigation`: React Native implementation (also compatible with web via `react-native-web`)

![](example/navigation.gif)

## Why?

The usual approach for navigation is to mirror browser history, but React components should depend only on the props they receive. These packages provide a declarative way to navigate between named children that works consistently across React and React Native.

## Packages

- React (web, DOM):
  - NPM: `@cantoo/navigation`
  - README: [packages/react](packages/react)
- React Native (iOS/Android, and web with `react-native-web`):
  - NPM: `@react-native-assets/navigation`
  - README: [packages/react-native](packages/react-native)

## Install

Choose the package for your target:

```bash
# React (DOM)
npm i @cantoo/navigation

# React Native
npm i @react-native-assets/navigation
```

Peer dependencies:
- React: `>=16.13.1`
- React Native: `>=0.63.2` (only for `@react-native-assets/navigation`)

## Usage

Both packages expose the same API:
- Default export: `Navigation`
- Named exports: `Slide`, `asSlide`
- Prop `duration` controls the transition duration in milliseconds (default: 500)

See the package-specific READMEs for examples:
- [React usage](packages/react)
- [React Native usage](packages/react-native)

## Development and examples

This repo contains two example apps powered by Parcel:

```bash
# React Native on web example (uses @react-native-assets/navigation)
npm run dev

# Pure React DOM example (uses @cantoo/navigation)
npm run dev:react
```

Open the served URL from Parcel to try the demos.
