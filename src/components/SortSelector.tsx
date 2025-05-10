import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild fontSize={16}>
        <Button variant="outline" size="sm">
          <BsChevronDown /> {/* {selectedPlatform?.name || "Platforms"} */}Order
          by: Relevance
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item>1</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
