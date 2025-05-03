import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { ReactNode } from "react";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      {}
      <ColorModeProvider
        attribute="class"
        defaultTheme="light"
        storageKey="chakra-ui-color-mode"
      >
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  );
}
