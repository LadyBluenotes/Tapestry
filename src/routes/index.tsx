import { A } from "@solidjs/router";
import { createResource } from "solid-js";
import { Card } from "~/components/Card";
import { Banner } from "~/components/Layout/Banner";
import Shader from "~/components/Shader";

const fetchExample = async () => {
	const res = await fetch("http://localhost:4000/shaders");

	return res.json();
};

export default function Home() {
	const [example] = createResource(fetchExample);

	return (
		<main>
			<Banner />
			<span class="grid grid-cols-3 gap-8 my-9">
				<Card title="hello">
					<h2>Authenticate with Bungie</h2>
					<p>
						Login with your Bungie account to see missing flair and sort through
						your collection!
					</p>
					<p>
						<button class="bg-MayaBlue hover:bg-LapisLazuli text-CosmicLatte font-bold py-2 px-4 rounded-md">
							Login
						</button>
					</p>
					<p>
						This will split into 3 cards - each character slot - if user is
						alreaday signed in
					</p>
				</Card>
				<Card title="shader">
					<h2>Popular Shaders</h2>
					<p>Check out what other guardians are favoriting!</p>
					<p>
						<Shader></Shader>
					</p>
				</Card>
				<Card>
					<h2>Vendors</h2>
					<p>See what flair is available in-game this week!</p>
				</Card>
			</span>
		</main>
	);
}
