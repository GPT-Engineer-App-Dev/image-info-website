import { Box, Container, Image, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8} align="center">
        <Box boxSize="sm">
          <Image src="/images/dice-on-chessboard.jpg" alt="Dice on a chess board" />
        </Box>
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">The Role of Dice in Games and Probability</Text>
          <Text fontSize="lg" textAlign="center">
            Dice have been a fundamental element in games and studies of probability theory. They introduce randomness and chance, influencing outcomes in games like backgammon and Monopoly. Additionally, dice are used in various fields to teach and understand the concepts of probability and decision-making.
          </Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;