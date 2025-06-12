import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

interface LoginProps {
  setUser: (user: any) => void;
}

const Login = ({ setUser }: LoginProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const toast = useToast()
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement Firebase authentication
    // For now, just simulate a successful login
    setUser({ email })
    toast({
      title: "Login successful",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
    navigate('/')
  }

  return (
    <Box maxW="md" mx="auto" mt={8}>
      <VStack spacing={8}>
        <Heading>Login to Your Account</Heading>
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Login
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  )
}

export default Login 