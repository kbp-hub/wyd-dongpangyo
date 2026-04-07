"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2027-07-29T00:00:00+09:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(): TimeLeft {
  const diff = TARGET_DATE - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calcTimeLeft());
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="flex gap-4 justify-center">
        {["일", "시간", "분", "초"].map((label) => (
          <div key={label} className="text-center">
            <div className="bg-white/20 backdrop-blur rounded-lg w-20 h-20 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">--</span>
            </div>
            <span className="text-sm text-white/80 mt-1 block">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: "일" },
    { value: timeLeft.hours, label: "시간" },
    { value: timeLeft.minutes, label: "분" },
    { value: timeLeft.seconds, label: "초" },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {units.map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="bg-white/20 backdrop-blur rounded-lg w-20 h-20 flex items-center justify-center">
            <span className="text-3xl font-bold text-white">
              {String(value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-sm text-white/80 mt-1 block">{label}</span>
        </div>
      ))}
    </div>
  );
}
