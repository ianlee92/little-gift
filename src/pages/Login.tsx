import { useState } from 'react'
import { Box, Heading, Input, Button } from '@chakra-ui/react'

interface User {
  email: string;
}

interface LoginProps {
  setUser: (user: User | null) => void;
}

const Login = ({ setUser }: LoginProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      setUser({ email })
    }
  }

  return (
    <Box textAlign="center" maxW="md" mx="auto">
      <Heading mb={8}>Login</Heading>
      <Box as="form" onSubmit={handleLogin}>
        <Box mb={4}>
          <Box as="label" display="block" mb={2} textAlign="left">
            Email
          </Box>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </Box>
        <Box mb={6}>
          <Box as="label" display="block" mb={2} textAlign="left">
            Password
          </Box>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </Box>
        <Button type="submit" colorScheme="blue" width="full">
          Login
        </Button>
      </Box>
    </Box>
  )
}

export default Login 