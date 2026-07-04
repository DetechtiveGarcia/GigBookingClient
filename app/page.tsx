"use client";

import Hero from "@/components/sections/hero/Hero";
import Marquee from "@/components/marquee/Marquee";
import Listen from "@/components/sections/listen/Listen";
import Discography from "@/components/sections/discography/Discography";
import Artist from "@/components/sections/artist/Artist";
import Booking from "@/components/sections/booking/Booking";
// import "@fullcalendar/common/main.css";
// import "@fullcalendar/daygrid/main.css";

export default function Home() {



  return (
    <>
      <Hero/>
      <Marquee />
      <Listen/>
      <Discography/>
      <Artist/>
      <Booking/>
    </>
  );
}
