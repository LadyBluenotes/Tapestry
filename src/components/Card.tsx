import { ParentComponent } from "solid-js";

type CardProps = {
	type?: "primary" | "secondary";
	title: string;
};

export const Card: ParentComponent<CardProps> = (props) => {
	const type = {
		default: "bg-OxfordBlue",
		primary: "bg-DarkPurple",
		secondary: "bg-DarkBlue",
	};

	return (
		<div
			class=" p-10 text-CosmicLatte text-center rounded-md shadow-md"
			classList={{
				[type[props.type || "default"]]: true,
			}}
		>
			<h1 class="font-bold">{props.title}</h1>
			{props.children}
		</div>
	);
};
