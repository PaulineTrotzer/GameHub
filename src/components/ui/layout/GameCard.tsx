import { Card, Image, Heading, Box } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card.Root w="420px" borderRadius="md" overflow="hidden" boxShadow="md">
      <Image
        src={game.background_image}
        alt={game.name}
        w="full"
        h="300px"
        objectFit="cover"
      />

      <Card.Body p={4}>
        <Heading as="h3" size="2xl" fontWeight="bold" textAlign="center" mb={2}>
          {game.name}
        </Heading>
      </Card.Body>
    </Card.Root>
  );
}
