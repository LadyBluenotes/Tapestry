import { createSignal } from "solid-js";

export const Header = () => {
    const [darkTheme, setDarkTheme] = createSignal(false)

    function toggleTheme() {
        setDarkTheme(!darkTheme())
    }
    
    return(
        <header
          class="my-5 padding-2 text-XL flex items-center gap-4"
          classList={{"bg-white": darkTheme(), "text-white": darkTheme()}}
        >
          <span
            class="material-symbols-outlined text-black cursor-pointer"
            onclick={toggleTheme}
          >
            dark_mode
          </span>
          <h1 class="text-white">Project: Tapestry</h1>
        </header>
    );
}