import { useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";
import Searchbar from "./Searchbar";


export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-MayaBlue"
      : "border-transparent hover:AlloyOrange";
      const [darkTheme, setDarkTheme] = createSignal(false)

      function toggleTheme() {
          setDarkTheme(!darkTheme())
      }

  return (
    <nav class="bg-OxfordBlue rounded-md"
        classList={{"bg-Silver": darkTheme()}}
        >
      <ul class="container flex items-center p-5 mx-auto text-CosmicLatte"
          classList={{"text-DarkPurple": darkTheme()}}
          >
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-12`}>
          <a href="/">Home</a>
        </li>
        <li class={`border-b-2 ${active("/login")} mx-1.5 sm:mx-12`}>
          <a href="/login">Login</a>
        </li>
        <li class={`border-b-2 ${active("/guardians")} mx-1.5 sm:mx-12`}>
          <a href="/guardians">Guardians</a>
        </li>
        <li class={`border-b-2 ${active("/vendors")} mx-1.5 sm:mx-12`}>
          <a href="/vendors">Vendors</a>
        </li>
        <li class={`border-b-2 ${active("/contact")} mx-1.5 sm:mx-12`}>
          <a href="/contact">Contact</a>
        </li>
        <li class={`border-b-2 ${active("/donate")} mx-1.5 sm:mx-12`}>
          <a href="/donate">Donate</a>
        </li>
        <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-12`}>
          <a href="/about">About</a>
        </li>
        <Searchbar />
        <span class="material-symbols-outlined cursor-pointer ml-auto" 
        onclick={toggleTheme}
        >
          light_mode

        </span>
      </ul>

    </nav>
  );
}

