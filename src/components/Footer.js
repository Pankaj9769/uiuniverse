import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import lightLogo from "../assets/13.png";
import darkLogo from "../assets/9.png";

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} p={"16"} color={"white"} minH={"40"}>
      <Stack direction={["column", "row"]}>
        <VStack
          w={"full"}
          alignItems={"stretch"}
          px={"4"}
          marginTop={["2", "0"]}
        >
          <Heading
            size={"md"}
            textTransform={"uppercase"}
            textAlign={["center", "initial"]}
          >
            Subscribe
          </Heading>

          <HStack
            py={"2"}
            //   borderBottom={"2px solid"}
          >
            <Input
              placeholder="Email Id"
              borderRadius={"20"}
              outline={"none"}
              focusBorderColor={"none"}
              border={"1px solid #6C22A6"}
            />
            <Button
              p={"0"}
              colorScheme={"purple"}
              variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
              border={"1px solid"}
            >
              <AiOutlineSend size={"20"} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          marginTop={["2", "0"]}
          w={"full"}
          h={"5rem"}
          //   borderLeft={["none", "1px solid white"]}
          //   borderRight={["none", "1px solid white"]}
        >
          <Image src={lightLogo} h={["100%", "250%"]} m={["0", "-60px"]} />
          <Text>© All Rights Reserved 2024</Text>
        </VStack>

        <VStack w={"full"} marginTop={["10", "0"]}>
          <Heading>Follow Us On</Heading>
          <Button variant={"link"} color={"white"}>
            <a href="">Instagram</a>
          </Button>
          <Button variant={"link"} color={"white"}>
            <a href="">GitHub</a>
          </Button>
          <Button variant={"link"} color={"white"}>
            <a href="">LinkedIn</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
