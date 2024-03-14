// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense, createEffect, createSignal } from "solid-js";
import { Nav } from "~/components/Nav";
import "./app.css";

export default function App() {
	const [darkTheme, setDarkTheme] = createSignal(false);

	createEffect(() => {
		document.body.classList.toggle("dark", darkTheme());
	});

	return (
		<div class="bg-DarkPurple text-center mx-auto text-CosmicLatte p-4 min-h-screen min-w-screen">
			<Router
				root={(props) => (
					<>
						<Nav darkTheme={darkTheme()} setDarkTheme={setDarkTheme} />
						<Suspense>{props.children}</Suspense>
					</>
				)}
			>
				<FileRoutes />
			</Router>
		</div>
	);
}
