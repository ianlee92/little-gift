import { Heading, Text, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '48px 0' }}>
      <Heading size="2xl" mb={8}>Welcome to Real Item Game</Heading>
      <Text fontSize="xl" textAlign="center" maxW="2xl" mx="auto" mb={8}>
        Experience a unique gaming adventure where your in-game purchases become real items!
        Play, earn, and collect real-world items as you progress through the game.
      </Text>
      <RouterLink to="/shop">
        <Button size="lg" colorScheme="blue">
          Start Shopping
        </Button>
      </RouterLink>
    </div>
  )
}

export default Home 