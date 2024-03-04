import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        position={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme="purple"
        p={"0"}
        w={"10"}
        h={"10"}
        borderRadius={"full"}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"20"} radius={"full"} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>uiUniverse</DrawerHeader>
          <VStack py={"20"}>

            <Button variant={"ghost"} colorScheme="purple" w={"full"} onClick={onClose}>
              <Link to={"/home"}>Home</Link>
            </Button>

            <Button variant={"ghost"} colorScheme="purple" w={"full"} onClick={onClose}>
              <Link to={"/videos"}>Videos</Link>
            </Button>

            <Button variant={"ghost"} colorScheme="purple" w={"full"} onClick={onClose}>
              <Link to={"/videos?category=free"}>Free Videos</Link>
            </Button>

            <Button variant={"ghost"} colorScheme="purple" w={"full"} onClick={onClose}>
              <Link to={"/upload"}>Upload</Link>
            </Button>

          </VStack>
          <HStack w={'full'} justifyContent={'space-evenly'}>
            <Button colorScheme={"purple"} variant={'outline'}  w={'30%'} m={'2'} onClick={onClose}>
                <Link to={'/login'}>Login</Link>
            </Button>

            <Button colorScheme={"purple"} variant={'solid'} w={'30%'} m={'2'} onClick={onClose}>
                <Link to={'/register'}>Register</Link>
            </Button>
          </HStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
