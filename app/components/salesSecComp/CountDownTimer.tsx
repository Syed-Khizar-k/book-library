"use client"; 

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    //this is to convert the end sale date into milliseconds
    const endDate = new Date("2025-05-31T23:59:59").getTime();
    //timer added here
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }
      //calculating the days , hours , minut3es and seconds and setting the state after every sec

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (val:unknown) => String(val).padStart(2, "0");

  return (
    <div className="flex  gap-6 py-6">
      <div className="text-center">
        <span className="text-[#ED553B] text-2xl font-bold">
          {format(timeLeft.days)}
        </span>
        <p className="text-sm tracking-wide text-black">DAYS</p>
      </div>
      <div className="text-center">
        <span className="text-[#ED553B] text-2xl font-bold">
          {format(timeLeft.hours)}
        </span>
        <p className="text-sm tracking-wide text-black">HOUR</p>
      </div>
      <div className="text-center">
        <span className="text-[#ED553B] text-2xl font-bold">
          {format(timeLeft.minutes)}
        </span>
        <p className="text-sm tracking-wide text-black">MINT</p>
      </div>
      <div className="text-center">
        <span className="text-[#ED553B] text-2xl font-bold">
          {format(timeLeft.seconds)}
        </span>
        <p className="text-sm tracking-wide text-black">SEC</p>
      </div>
    </div>
  );
}
