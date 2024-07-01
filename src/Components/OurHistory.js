// Chakra added to page for styling purposes.
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GroupSingers from "../img/group-singers.webp";
import SingingMic from "../img/singing-with-mic.webp";
import Piano from "../img/Image by Siniz Kim.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function OurHistory() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      textAlign={"center"}
      pb={"40px"}
      m={"30px 0"}
      id="about"
    >
      {/* Carousel Start */}
      <>
        <Swiper
          cssMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={GroupSingers} alt="Group Singers" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SingingMic} alt="Women with mic" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Piano} alt="Piano" />
          </SwiperSlide>
        </Swiper>
      </>

      {/* Carousel End */}
      <Heading fontSize={"50px"} m={"40px 0"} color={"#2dbfb2"}>
        Our History
      </Heading>
      <Text fontSize={"20px"} p={"0 30px"} mb={"30px"}>
        The Stratford & East London Music Festival was founded in 1882, making
        it the UK’s oldest music and drama festival. It has continued to grow in
        popularity since that time. Our festival is affiliated with the British
        and International Federation of Festivals for Music, Dance and Speech
        (BIFF). Many musicians and actors can trace the start of their careers
        from success at the Stratford & East London Music Festival. These
        include Jonathan Antoine, one half of ‘Jonathan and Charlotte’, who were
        runners-up in Britain’s Got Talent in 2012 (losing out to dancing dog
        act ‘Ashleigh and Pudsey’) and Charlotte Barbour-Condini, who reached
        the final of the BBC Young Musician of the Year in 2012. The Stratford &
        East London Music Festival usually runs across two weeks in February.
      </Text>
    </Box>
  );
}
