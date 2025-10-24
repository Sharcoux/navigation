import React from 'react'
import { createRoot } from 'react-dom/client'
import Navigation, { Slide, asSlide } from '../packages/react/src'

const Page = ({ name, color, children }: { name: string; color: string; children?: React.ReactNode }) => (
  <div style={{ backgroundColor: color, padding: '20px', height: '100%', overflow: 'auto' }}>
    <h2>Page {name}</h2>
    {children}
  </div>
)

const Page2 = asSlide(Page, '2')

const App = () => {
  const [active, setActive] = React.useState(0)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex', gap: '10px', padding: '10px', justifyContent: 'space-around' }}>
        {[0, 1, 2].map(i => (
          <button key={i} onClick={() => setActive(i)}>
            Navigate to {i}
          </button>
        ))}
      </div>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Navigation active={active + ''} duration={1000}>
          <Slide name='0' Component={Page} color='red'>
            <p>This is page 0 using the pure React implementation</p>
            <p>test qsdj qsd lqjsdmlkfqj msldkfj qlskd fmqlkdjf mqkd smlqj sdlfjq</p>
            <p>test qsdj qsd lqjsdmlkfqj msldkfj qlskd fmqlkdjf mqkd smlqj sdlfjq</p>
            <p>test qsdj qsd lqjsdmlkfqj msldkfj qlskd fmqlkdjf mqkd smlqj sdlfjq</p>
            <p>test qsdj qsd lqjsdmlkfqj msldkfj qlskd fmqlkdjf mqkd smlqj sdlfjq</p>
            <p>test qsdj qsd lqjsdmlkfqj msldkfj qlskd fmqlkdjf mqkd smlqj sdlfjq</p>
            <p>test qsdj qsd lqjsdmlkfqj msldkfj qlskd fmqlkdjf mqkd smlqj sdlfjq</p>
            <p>test qsdj qsd lqjsdmlkfqj msldkfj qlskd fmqlkdjf mqkd smlqj sdlfjq</p>
          </Slide>
          <Slide name='1' Component={Page} color='blue'>
            <p>This is page 1</p>
            <p>test qsdj qsd lqjsdmlkfqj msldkfj qlskd fmqlkdjf mqkd smlqj sdlfjq sdlkjfhq lkdjsh ksdj qlksdj flqksdjh qlkjsd hflqkjdhs flqlksdjh lqkjds lfqkjdsh lfqkjds lfqkjds hlqkjdsh flqkjdshf lqsdjh qlkdshjf lkqsdjh flqkjdsh lkqf</p>
          </Slide>
          <Page2 name='2' color='green'>
            <p>This is page 2 using asSlide HOC</p>
            <p>test qsdj qsd lqjsdmlkfqj msldkfj qlskd fmqlkdjf mqkd smlqj sdlfjq</p>
            <p>test qsdj qsd lqjsdmlkfqj msldkfj qlskd fmqlkdjf mqkd smlqj sdlfjq</p>
            <p>test qsdj qsd lqjsdmlkfqj msldkfj qlskd fmqlkdjf mqkd smlqj sdlfjq</p>
          </Page2>
        </Navigation>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
