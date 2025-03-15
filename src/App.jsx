import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
const [count, setCount] = useState(0)

return (
// <UserContextProvider>
  // <h1>Vite + React</h1>
  // <Login></Login>
  // <Profile></Profile>
  // </UserContextProvider>

    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* theme button */}
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* card component */}
        </div>
      </div>
    </div>

  )
}

export default App