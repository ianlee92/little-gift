import { useState } from 'react'
import { ChakraProvider, Box, Container, defaultSystem } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Types
interface User {
  email: string;
}

// Components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Inventory from './pages/Inventory'
import Login from './pages/Login'

function App() {
  const [user, setUser] = useState<User | null>(null)

  return (
    <ChakraProvider value={defaultSystem}>
      <Router>
        <Box minH="100vh" bg="gray.50">
          <Navbar user={user} setUser={setUser} />
          <Container maxW="container.xl" py={8}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
