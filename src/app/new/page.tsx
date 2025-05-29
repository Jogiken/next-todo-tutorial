import { Box, Heading } from "@chakra-ui/react";
import { AddForm } from "@/components/AddForm";
export default function New() {
    return (
        <Box width="80%" maxWidth="1440px" margin="0 auto" justifyContent="center" marginTop="20px">
            <Heading>新規作成</Heading>
            <Box>
                <AddForm />
            </Box>
        </Box>
    );
}