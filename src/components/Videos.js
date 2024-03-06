import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Videos = () => {
  const videosArr = [
    'https://youtu.be/UKP-Vca9Q4c',
    "https://media.istockphoto.com/id/1478934162/video/colorful-fashion-fabric-samples-textile-textures-swatches-concept-woven-fabric-is-any-textile.mp4?s=mp4-640x640-is&k=20&c=emSYR3Cg1KSRx4FaCVjLFFeV5RnaPyQ4GPjKMytgx1E=",
    "https://www.youtube.com/watch?v=UKP-Vca9Q4c",
    "https://youtu.be/UKP-Vca9Q4c?si=otRqz_ZY_8DVrWe3",
    "F:SeriesF.R.I.E.N.D.SFriends Season 1 COMPLETE 720p.BRrip.sujaidr (pimprg)\friends_s01e01_720p_bluray_x264-sujaidr.mkv",
    "F:SeriesF.R.I.E.N.D.SFriends Season 1 COMPLETE 720p.BRrip.sujaidr (pimprg)\friends_s01e01_720p_bluray_x264-sujaidr.mkv",
  ];
  const [videoSrc, setVideoSrc] = useState([videosArr[0]]);
  return (
    <Stack direction={["column", "row"]}>
      <VStack w={"full"}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: "100%",
          }}
        ></video>

        <VStack alignItems={"flex-start"} p={"8"} w={"full"}>
          <Heading>Videos</Heading>

          <Text>
            This is a sample video This is a sample video This is a sample video
            This is a sample video This is a sample video This is a sample video
            This is a sample video This is a sample video This is a sample video
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={["full", "xl"]}
        alignItems={"stretch"}
        p={"8"}
        spacing={"8"}
        overflowY={"auto"}
      >
        <Button variant={"ghost"} colorScheme="purple">
          Lecture 1
        </Button>
      </VStack>
    </Stack>
  );
};

export default Videos;
