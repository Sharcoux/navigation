# React Universal Navigation (React)

Pure React implementation of the universal navigation component.

## Install

```bash
npm i @cantoo/navigation
```

Peer dependencies:
```json
{
  "react": ">=16.13.1"
}
```

## Why?

Navigation is often modeled after browser history, but React components should depend only on the props they receive. This component provides a simple, declarative way to navigate between screens in React by switching named children.

## Usage

```jsx
import React from 'react'
import Navigation, { Slide, asSlide } from '@cantoo/navigation'

const Page = ({ name, color, children }) => (
  <div style={{ backgroundColor: color, padding: 20, height: '100%' }}>
    <h2>Page {name}</h2>
    {children}
  </div>
)

const Page2 = asSlide(Page, '2')

export default function App() {
  const [active, setActive] = React.useState('0')
  return (
    <div style={{ height: '100dvh', width: '100dvw' }}>
      <div style={{ display: 'flex', gap: 10 }}>
        {['0', '1', '2'].map(i => (
          <button key={i} onClick={() => setActive(i)}>Navigate to {i}</button>
        ))}
      </div>
      <div style={{ height: '100%', overflow: 'hidden' }}>
        <Navigation active={active} duration={500}>
          <Slide name="0" Component={Page} color="tomato">
            <p>This is page 0 using the pure React implementation</p>
          </Slide>
          <Slide name="1" Component={Page} color="royalblue">
            <p>This is page 1</p>
          </Slide>
          <Page2 name="2" color="seagreen">
            <p>This is page 2 using the asSlide HOC</p>
          </Page2>
        </Navigation>
      </div>
    </div>
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

## Notes

- Every child used as a slide must receive a `name` prop.
- If `active` does not match any child, the first child is displayed and a warning is logged.


