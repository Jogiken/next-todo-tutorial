import { Container, Heading } from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";

export function Header() {
  return (
    <header className="w-full">
      <Box bg="gray.100" px={4} py={3}>
        <Container maxW="container.lg">
          <Heading size="md">Todo App</Heading>
        </Container>
      </Box>
    </header>
  );
}
