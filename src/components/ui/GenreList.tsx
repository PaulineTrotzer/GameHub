import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "./hooks/useGenre";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <List.Root>
      {genres.map((genre) => (
        <ListItem listStyle="none" key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
