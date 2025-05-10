import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const links: any = [1, 2, 3];
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <BsChevronDown /> Platforms
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {links.map((link: any) => (
            <Menu.Item key={link.href} asChild value={link.title}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.title}
              </a>
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
