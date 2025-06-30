"use client";

import { useEffect } from "react";
import Carousel from '../../components/Carousel';

export default function Home() {
  useEffect(() => {
    fetch('/api/page-visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pageName: 'home' }),
    });
  }, []);

  return (
    <div className="w-full h-full ">
      <Carousel/>
    </div>
  );
}
