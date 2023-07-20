import { Box, Code, Icon, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box pt={32} pb={4}>
      <Text>
        🛠️ Built by me using{" "}
        <Link href="https://nextjs.org/">
          <Code colorScheme="orange">NextJS</Code>
        </Link>{" "}
        and{" "}
        <Link href="https://chakra-ui.com/">
          <Code colorScheme="orange">Chakra UI</Code>
        </Link>
        . Deployed on{" "}
        <Link href="https://vercel.com/">
          {" "}
          <Code colorScheme="orange">Vercel</Code>
        </Link>{" "}
      </Text>
    </Box>
  );
}
