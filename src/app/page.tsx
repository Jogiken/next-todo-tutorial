import Image from "next/image";
import styles from "./page.module.css";
import { Box, Link } from "@chakra-ui/react";
import { TodoList } from "@/components/TodoList";
import { getTodos } from "./actions";

export default async function Home() {
  const todos = await getTodos();
  return (
    <Box width="80%" maxWidth="1440px" margin="0 auto" justifyContent="center" marginTop="20px">
      <Box textAlign="right">
        <Link href="/new" bg="gray.600" color="white" px={3} py={1.5} borderRadius="sm" _hover={{ bg: "gray.700" }} mb={3} display="inline-block" fontSize="sm">追加</Link>
      </Box>
      <TodoList todos={todos} />
    </Box>
  );
}
