import { A } from "@solidjs/router";
import Card from "~/components/Card";
import { Banner } from "~/components/Layout/Banner";

import { Header } from "~/components/Layout/Header";

export default function Home() {
  return (
    <main class="bg-DarkPurple text-center mx-auto text-CosmicLatte p-4">
      <Header />
      <Banner />
      <Card title="Popular Shader Carousel?" rounded={true} flat={false} />
     
      
    </main>
  );
}
