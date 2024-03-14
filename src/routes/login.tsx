import BungieAuth from "~/components/BungiePieces/BungieAuth";
import { Card } from "~/components/Card";

export default function Login() {
	return (
		<main>
			<h1 class="max-6-xs text-6xl font-thin uppercase my-16">Login</h1>
			<p>
				Sign in and authorize with Bungie to view your guardians, favorite
				shaders, and check vendors for missing flair!
			</p>
			<p class="my-20 mx-20">
				<Card>
					<h2>
						<BungieAuth />
					</h2>
				</Card>
			</p>
		</main>
	);
}
