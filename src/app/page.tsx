"use client"

import Image from 'next/image';
import { Header, Hero, Categories, Features, Top_Saver, MiddleContent, ProductItem2 } from 'src/components';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Features />
      <Top_Saver />
      <MiddleContent />
      {/* <ProductItem2 /> */}
    </>
  );
}
