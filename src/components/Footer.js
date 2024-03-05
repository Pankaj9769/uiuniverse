import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import lightLogo from '../assets/13.png';
import darkLogo from '../assets/9.png';


const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} p={"16"} color={"white"} minH={"40"}>
      <Stack direction={["column", "row"]}>
        <VStack w={'full'} alignItems={'stretch'} px={'4'}>
          <Heading size={"md"} textTransform={"uppercase"}>
            Subscribe
          </Heading>

          <HStack py={"2"} borderBottom={'2px solid'}>
            <Input
              placeholder="Email Id"
              borderRadius={"none"}
              outline={"none"}
              focusBorderColor={"none"}
              border={'none'}
            />
            <Button
              p={"0"}
              colorScheme={"purple"}
              variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
            //   border={'1px solid'}
            >
              <AiOutlineSend size={"20"} />
            </Button>
          </HStack>
        </VStack>

        <VStack w={'full'} h={'5rem'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
        <Image src={lightLogo} h={['100%','250%']} margin={'-60px'}/>
            {/* <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>uiuniverse</Heading> */}
        </VStack>

        <VStack w={'full'}>

        </VStack>


      </Stack>
    </Box>
  );
};

export default Footer;
