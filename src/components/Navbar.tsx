import { Box, Flex, Button, Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

interface User {
  email: string;
}

interface NavbarProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const Navbar = ({ user, setUser }: NavbarProps) => {
  return (
    <Box bg="white" px={4} shadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap={8}>
          <ChakraLink as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
            Real Item Game
          </ChakraLink>
          <Flex gap={4}>
            <ChakraLink as={RouterLink} to="/shop">
              Shop
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/inventory">
              Inventory
            </ChakraLink>
          </Flex>
        </Flex>
        <Flex alignItems="center" gap={4}>
          {user ? (
            <>
              <Box>Welcome, {user.email}</Box>
              <Button onClick={() => setUser(null)}>Logout</Button>
            </>
          ) : (
            <Button as={RouterLink} to="/login" colorScheme="blue">
              Login
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 