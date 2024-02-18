import { A } from "@solidjs/router";
import Card from "~/components/Card";
import { Banner } from "~/components/Layout/Banner";

import { Header } from "~/components/Layout/Header";

export default function Home() {
  return (
    <main class="bg-DarkPurple text-center mx-auto text-CosmicLatte p-4">
      <Header />
      <Banner />
      <span class="grid grid-cols-3 gap-10 my-3">
        <Card>
          <h2>
            Authenticate with Bungie
          </h2>
          <p>
            Login with your Bungie account to see missing flair and sort through your collection!
          </p>
        </Card>
        <Card>
          <h2>
            Popular Shaders
          </h2>
          <p>
            Check out what other guardians are favoriting!
          </p>
        </Card>
        <Card>
          <h2>
            Vendors
          </h2>
          <p>
            See what flair is available in-game this week!
          </p>
        </Card>
      </span>
     
      
    </main>
  );
}
