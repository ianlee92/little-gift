import { Box, Heading, Text } from '@chakra-ui/react'

const Inventory = () => {
  return (
    <Box textAlign="center">
      <Heading mb={8}>Inventory</Heading>
      <Text fontSize="lg" mb={8}>Your purchased items will appear here.</Text>
      <Box p={8} border="1px" borderColor="gray.200" borderRadius="md" display="inline-block">
        <Text color="gray.500">No items purchased yet.</Text>
      </Box>
    </Box>
  )
}

export default Inventory 