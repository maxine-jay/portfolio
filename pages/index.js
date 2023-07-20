import {
  Box,
  Code,
  Flex,
  Heading,
  keyframes,
  List,
  ListItem,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Footer from "@components/Footer";
import shortid from "shortid"

const waveKeyFrame = keyframes`
  0% { transform: rotate(0deg)},
  6% { transform: rotate(0deg)},
  8% { transform: rotate(12deg)},
  10% { transform: rotate(-5deg)},
  12% { transform: rotate(12deg)},
  14% { transform: rotate(-5deg)},
  16% { transform: rotate(12deg)},
  18% { transform: rotate(0deg)},
  100% { transform: rotate(0deg)}
`;

let frameSkills = [
  {
    title: "Javascript",
    color: "pink",
  },
  {
    title: "React",
    color: "pink",
  },
  {
    title: "CSS",
    color: "pink",
  },
  {
    title: "SCSS",
    color: "pink",
  },
  {
    title: "HTML",
    color: "pink",
  },
  {
    title: "Umbraco",
    color: "teal",
  },
  {
    title: "11ty",
    color: "teal",
  },
  {
    title: "Git",
    color: "green",
  },
  {
    title: "Visual Studio",
    color: "green",
  },
  {
    title: "VSCode",
    color: "green",
  },
  {
    title: "Jira",
    color: "green",
  },
  {
    title: "BugHerd",
    color: "green",
  },
  {
    title: "Figma",
    color: "orange",
  },
  {
    title: "Agile",
    color: "purple",
  },
];

const fatbuzzSkills = [
  {
    title: "Javascript",
    color: "pink",
  },
  {
    title: "jQuery",
    color: "pink",
  },
  {
    title: "PHP",
    color: "pink",
  },
  {
    title: "CSS",
    color: "pink",
  },
  {
    title: "HTML",
    color: "pink",
  },
  {
    title: "WordPress",
    color: "teal",
  },
  {
    title: "Shopify",
    color: "teal",
  },
];

const waveAnimation = `${waveKeyFrame} 10s ease-in-out infinite; transform-origin: 55% 55%;`;

export default function Home() {
  return (
    <>
      <VStack pt={0}>
        <Flex
          minHeight="calc(100vh - 100px)"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading as="h1" fontWeight="fonts.baseWeight">
            Hi!{" "}
            <Box
              as={motion.div}
              animation={waveAnimation}
              w="12"
              h="12"
              sx={{ display: "inline-flex" }}
            >
              👋
            </Box>
          </Heading>
          <Text mt="8" fontWeight="fonts.baseWeight" fontSize="4xl">
            I'm <strong>Maxine</strong>, a Front End Developer, and I enjoy
            building beautiful, accessible and user-centered web applications.
          </Text>
          <Text mt="8" fontWeight="fonts.baseWeight" fontSize="2xl">
            If you'd like to get in touch, email me at{" "}
              <Code fontSize="20px" colorScheme="pink">
                ma{/*1*/}xi{/*2*/}ne{/*3*/}ja{/*4*/}ys{/*5*/}im{/*6*/}ps{/*7*/}on@gm{/*8*/}ai{/*9*/}l.com
              </Code>
          </Text>
        </Flex>
        <Heading as="h2" size="md" my="4">
          Experience
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={5} maxWidth="4xl">
          <Box>
            <Text>
              <strong>Front End Developer</strong>
            </Text>
            <Text>Frame - Glasgow, Scotland</Text>
            <Text>2021 - 2023</Text>
          </Box>
          <Flex flexDirection="column">
            <Text mb={4}>
              I collaborated with the UX design team and Back End Developers at
              this creative advertising agency to build and maintain dynamic,
              responsive and accessible websites for numerous clients.
            </Text>
            <List display="flex" flexWrap="wrap">
              {frameSkills.map((skill) => {
                return (
                  <ListItem key={shortid.generate()}>
                    <Tag m="1" colorScheme={skill.color} size="sm">
                      {skill.title}
                    </Tag>
                  </ListItem>
                );
              })}
            </List>
          </Flex>
        </SimpleGrid>

        <SimpleGrid columns={[1, null, 2]} spacing={5} mt={10}>
          <Box>
            <Text>
              <strong>Web Developer</strong>
            </Text>
            <Text>fatBuzz - Glasgow, Scotland</Text>
            <Text>2019 - 2021</Text>
          </Box>
          <Flex flexDirection="column">
            <Text mb={4}>
              Worked closely with the design, UX and marketing teams to build
              bespoke, responsive WordPress and Shopify themes for a variety of
              clients.
            </Text>
            <List display="flex" flexWrap="wrap">
              {fatbuzzSkills.map((skill) => {
                return (
                  <ListItem key={shortid.generate()}>
                    <Tag m="1" colorScheme={skill.color} size="sm">
                      {skill.title}
                    </Tag>
                  </ListItem>
                );
              })}
            </List>
          </Flex>
        </SimpleGrid>
        <Footer />
      </VStack>
    </>
  );
}
