import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      width="28px"
      paddingX={1}
      borderRadius="4px"
      fontSize="14px"
      fontWeight="bold"
      colorPalette={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
