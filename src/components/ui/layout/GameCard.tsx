import { Card, Image, Heading, Box, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "../PlatformIconList";
import CriticScore from "../CriticScore";

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

        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}
