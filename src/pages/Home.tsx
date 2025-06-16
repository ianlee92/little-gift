import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Home = () => {
  return (
    <VStack spacing={8} align="center" py={12}>
      <Heading size="2xl">Welcome to Real Item Game</Heading>
      <Text fontSize="xl" textAlign="center" maxW="2xl">
        Experience a unique gaming adventure where your in-game purchases become real items!
        Play, earn, and collect real-world items as you progress through the game.
      </Text>
      <Button
        as={RouterLink}
        to="/shop"
        size="lg"
        colorScheme="blue"
      >
        Start Shopping
      </Button>
    </VStack>
  )
}

export default Home 