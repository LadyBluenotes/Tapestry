import { useLocation } from "@solidjs/router";


export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-LapisLazuli"
      : "border-transparent hover:Metal";
  return (
    <nav class="bg-OxfordBlue">
      <ul class="container flex items-center p-5 text-CosmicLatte">
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-10`}>
          <a href="/">Home</a>
        </li>
        <li class={`border-b-2 ${active("/login")} mx-1.5 sm:mx-10`}>
          <a href="/login">Login</a>
        </li>
        <li class={`border-b-2 ${active("/guardians")} mx-1.5 sm:mx-10`}>
          <a href="/guardians">Guardians</a>
        </li>
        <li class={`border-b-2 ${active("/vendors")} mx-1.5 sm:mx-10`}>
          <a href="/vendors">Vendors</a>
        </li>
        <li class={`border-b-2 ${active("/contact")} mx-1.5 sm:mx-10`}>
          <a href="/contact">Contact</a>
        </li>
        <li class={`border-b-2 ${active("/donate")} mx-1.5 sm:mx-10`}>
          <a href="/donate">Donate</a>
        </li>
        <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-10`}>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
