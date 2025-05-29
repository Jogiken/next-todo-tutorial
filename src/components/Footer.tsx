import { Container, Text, Link } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export function Footer() {
  return (
    <footer>
      <Box bg="gray.100" px={4} py={3} width="100%">
        <Container maxW="container.lg" width="100%">
          <Text textAlign="center" fontSize="sm" color="gray.600" width="100%">
            © 2024 Todo App - Created by{" "}
            <Link
              href="https://github.com/yourusername"
              color="blue.500"
              _hover={{ textDecoration: "underline" }}
            >
              @yourusername
            </Link>
          </Text>
        </Container>
      </Box>
    </footer>
  );
}

