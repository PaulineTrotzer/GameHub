import {
  Button,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "./hooks/useGenre";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { genres, isLoading, error } = useGenres(null);

  if (error) return null;
  if (isLoading) return <Spinner />;

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
            <Link onClick={() => onSelectGenre(genre)} fontSize="lg">
              {genre.name}
            </Link>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
