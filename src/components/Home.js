import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.jpg";

const Home = () => {
  return (
    <Box>
      <MyCarousel />
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      swipeable={true}
      stopOnHover={false}
      showArrows={false}
    >
      <Box w={"full"} h={"100vh"}>
        <Image src={img1} />
      </Box>

      <Box w={"full"} h={"100vh"}>
        <Image src={img2} />
      </Box>
    </Carousel>
  );
};

export default Home;
