import { createSignal } from "solid-js";

export const Header = () => {
    const [darkTheme, setDarkTheme] = createSignal(false)

    function toggleTheme() {
        setDarkTheme(!darkTheme())
    }
    
    return(
        <header
          class="my-5 p-2 text-XL flex items-center gap-4"
          classList={{"bg-indigo-900": darkTheme(), "text-white": darkTheme()}}
        >
          <span
            class="material-symbols-outlined cursor-pointer"
            onclick={toggleTheme}
          >
            light_mode
          </span>
          <h1>Project: Tapestry</h1>
        </header>
    );
}