import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api')
      const responseData = await response.json()
      console.log('response: ', responseData)
    }
    fetchData()
  }, [])

  return (
    <main>
      <h1>Hello from React App</h1>
    </main>
  )
}

export default App
