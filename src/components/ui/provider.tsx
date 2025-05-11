"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { ReactNode } from "react";
import { system } from "../../theme";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      {}
      <ColorModeProvider
        attribute="class"
        defaultTheme="light"
        storageKey="chakra-ui-color-mode"
        disableTransitionOnChange
      >
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  );
}
