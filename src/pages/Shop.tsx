import { Box, Heading, Text, Button } from '@chakra-ui/react'

const Shop = () => {
  const items = [
    { id: 1, name: 'Gaming Mouse', price: 50, description: 'High-performance gaming mouse' },
    { id: 2, name: 'Mechanical Keyboard', price: 120, description: 'Premium mechanical keyboard' },
    { id: 3, name: 'Gaming Headset', price: 80, description: 'Immersive gaming headset' },
    { id: 4, name: 'Gaming Chair', price: 200, description: 'Ergonomic gaming chair' },
  ]

  return (
    <Box>
      <Heading mb={8}>Shop</Heading>
      <Text fontSize="lg" mb={8}>Browse and purchase real gaming items!</Text>
      
      <Box>
        {items.map((item) => (
          <Box key={item.id} p={6} border="1px" borderColor="gray.200" borderRadius="md" mb={6}>
            <Heading size="md" mb={4}>{item.name}</Heading>
            <Text mb={4}>{item.description}</Text>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Text fontSize="xl" fontWeight="bold" color="blue.500">
                ${item.price}
              </Text>
              <Button colorScheme="blue">
                Purchase
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Shop 