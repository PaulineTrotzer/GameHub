import { Card, Image, Heading, Box, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "../PlatformIconList";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius="md" overflow="hidden" boxShadow="md">
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
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
}
