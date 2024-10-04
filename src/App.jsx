import './App.css'
import Button from './Button'
import withBorderAndBackground from './hoc/withBorderAndBackground'

function App() {

  const EnhancedButton = withBorderAndBackground(Button)

  return (
    <>
      <div>
        <EnhancedButton label="Click me!" />
      </div>
    </>
  )
}

export default App
