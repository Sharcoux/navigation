# React Universal Navigation (React Native)

React Native implementation of the universal navigation component. It also works on web when used with `react-native-web`.

## Install

```bash
npm i @react-native-assets/navigation
```

Peer dependencies:
```json
{
  "react": ">=16.13.1",
  "react-native": ">=0.63.2"
}
```

For web usage, ensure `react-native` resolves to `react-native-web` in your bundler (this package exposes a `browser` build and can work with common setups).

## Why?

Navigation is often modeled after browser history, but React components should depend only on the props they receive. This component provides a simple, declarative way to navigate between screens by switching named children, on native and web.

## Usage (React Native)

```jsx
import React from 'react'
import { View, Text, Button } from 'react-native'
import Navigation, { Slide, asSlide } from '@react-native-assets/navigation'

const Page2 = asSlide(View, '2')

export default function App() {
  const [active, setActive] = React.useState('0')
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {['0', '1', '2'].map(i => (
          <Button key={i} title={`Navigate to ${i}`} onPress={() => setActive(i)} />
        ))}
      </View>
      <Navigation active={active} duration={500}>
        <Slide name="0" Component={View} style={{ backgroundColor: 'tomato' }}>
          <Text>This is page 0</Text>
        </Slide>
        <Slide name="1" Component={View} style={{ backgroundColor: 'royalblue' }}>
          <Text>This is page 1</Text>
        </Slide>
        <Page2 name="2" style={{ backgroundColor: 'seagreen' }}>
          <Text>This is page 2 using the asSlide HOC</Text>
        </Page2>
      </Navigation>
    </View>
  )
}
```

## API

- `Navigation` props:
  - `active: string` – name of the active slide to display
  - `duration?: number` – transition duration in ms (default: 500)
  - `children` – only children with a `name` prop are considered slides

- Helpers:
  - `Slide` – wrapper to add a `name` prop to any component
  - `asSlide(Component, defaultName)` – HOC version of `Slide`

## TypeScript

When your children components do not declare a `name` prop, use `Slide` or `asSlide` to satisfy typing while keeping the same runtime behavior.

## Web usage

- This package includes a `browser` entry and can be used with `react-native-web`.
- Ensure your bundler config or aliases point `react-native` imports to `react-native-web` when targeting the web.

## Notes

- Every child used as a slide must receive a `name` prop.
- If `active` does not match any child, the first child is displayed and a warning is logged.


