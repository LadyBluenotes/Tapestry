import { A, useLocation } from "@solidjs/router";
import { Component, For, createSignal } from "solid-js";
import Searchbar from "./Searchbar";

type NavProps = {
	darkTheme: boolean;
	setDarkTheme: (value: boolean) => void;
};

export const Nav: Component<NavProps> = (props) => {
	const location = useLocation();

	const navLinks = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Login",
			path: "/login",
		},
		{
			name: "Guardians",
			path: "/guardians",
		},
		{
			name: "Vendors",
			path: "/vendors",
		},
		{
			name: "Contact",
			path: "/contact",
		},
		{
			name: "Donate",
			path: "/donate",
		},
		{
			name: "About",
			path: "/about",
		},
	];

	return (
		<nav class="dark:bg-OxfordBlue rounded-md bg-Silver">
			<ul class="container flex items-center p-2 mx-auto dark:text-CosmicLatte text-DarkPurple">
				<For each={navLinks}>
					{(link) => (
						<li>
							<A
								class="border-b-2 mx-1 sm:mx-11"
								activeClass="border-MayaBlue"
								inactiveClass="border-none"
								href={link.path}
								end
							>
								{link.name}
							</A>
						</li>
					)}
				</For>
				<Searchbar />
				<button
					class="material-symbols-outlined cursor-pointer ml-auto"
					onclick={() => props.setDarkTheme(!props.darkTheme)}
				>
					light_mode
				</button>
			</ul>
		</nav>
	);
};
