import './App.css'
import ItemRender from './components/ItemRender'
import Image from './components/ui/Image'
import Item from './components/Item'

const concepts = [
  {
    img: 'components.png',
    title: 'Components',
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation',
  },
  {
    img: 'state.png',
    title: 'State',
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data',
  },
  {
    img: 'events.png',
    title: 'Events',
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event',
  },
]

const header = {
  img: 'key-concepts.png',
  title: 'Key React Concepts',
  description: 'Selected key React concepts you should know about',
}

function App() {
  return (
    <div className='App'>
      <Item data={header} />
      <ItemRender arr={concepts} />
    </div>
  )
}

export default App
