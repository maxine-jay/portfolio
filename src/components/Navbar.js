import { Flex, Spacer } from '@chakra-ui/react';
import ButtonBar from "@components/ButtonBar";

export default function Navbar() {
  return (
    <Flex w="full" maxW="4xl" m="auto"pr="3" sx={{ gap: "12px" }} align="center" pl={3} py={4}>
      <Spacer />
      <ButtonBar justifySelf="flex-end"></ButtonBar>
    </Flex>
  )
};