import {
  Card,
  Image,
  Heading,
  Box,
  Text,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "../PlatformIconList";
import CriticScore from "../CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "@/components/Emoji";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius="md" overflow="hidden" boxShadow="md">
      <Image
        objectFit="cover"
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      />
      <Card.Header>
        <HStack w="full" justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Header>
      <Card.Footer mt="auto" p={4}>
        <Card.Title fontSize={20} textAlign="center" mt="2" mb={4}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Card.Title>
      </Card.Footer>
    </Card.Root>
  );
}
