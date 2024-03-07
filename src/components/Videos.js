import {
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import videoData from "./videoData";

const Videos = () => {
  const videosArr2 = videoData.categories.videos;
  const videosArr = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  ];
  const [videoSrc, setVideoSrc] = useState([videosArr2[0].sources]);
  const [videoHeading, setVideoHeading] = useState([videosArr2[0].title]);
  const [videoDesc, setVideoDesc] = useState([videosArr2[0].description]);
  const [videoSubTitle, setVideoSubTitle] = useState([videosArr2[0].subtitle]);

  return (
    <Stack direction={["column", "row"]}>
      <VStack w={"full"}>
        <video
          autoPlay={true}
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: "100%",
          }}
        ></video>

        <VStack alignItems={"flex-start"} p={"8"} w={"full"}>
          <Heading lineHeight={"130%"}>
            {videoHeading},{" "}
            <Text
              color={"GrayText"}
              textTransform={"lowercase"}
              fontSize={"25"}
            >
              {videoSubTitle}
            </Text>
          </Heading>

          <Text color={"gray"}>
            {videoDesc}
          </Text>
        </VStack>
      </VStack>
      <VStack
        h={"100vh"}
        w={["full", "xl"]}
        alignItems={"stretch"}
        p={"8"}
        spacing={"8"}
        overflowY={"scroll"}
        // background={'#D3D3D3'}
        border={"1px solid #D3D3D3"}
        borderRadius={"10"}
      >
        <Heading
          alignContent={"center"}
          textAlign={"center"}
          w={"full"}
          zIndex={2}
          borderBottom={"1px solid  #d3d3d3"}
          py={"2"}
          color={"black"}
        >
          Playlist
        </Heading>

        {videosArr2.map((item, index) => (
          <Button
            py={"2"}
            key={index}
            variant={"ghost"}
            colorScheme="purple"
            onClick={() => {
              setVideoSrc(item.sources);
              setVideoHeading(item.title);
              setVideoDesc(item.description);
              setVideoSubTitle(item.subtitle);
            }}
            borderBottom={"1px solid #F3F0EF "}
          >
            {item.title}
            {/* Video {index + 1} */}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
