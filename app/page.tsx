"use client";

import Calendar from "@/components/Calendar";
import Hero from "@/components/sections/hero/Hero";
import Marquee from "@/components/marquee/Marquee";
import Listen from "@/components/sections/listen/Listen";
import Discography from "@/components/sections/discography/Discography";

// import "@fullcalendar/common/main.css";
// import "@fullcalendar/daygrid/main.css";

export default function Home() {



  return (
    <>
      {/* <Calendar /> */}
      <Hero/>
      <Marquee />
      <Listen/>
      <Discography/>
    </>
  );
}
