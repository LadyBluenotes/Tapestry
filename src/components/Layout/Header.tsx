import { createSignal } from "solid-js";

export const Header = () => {
    const [darkTheme, setDarkTheme] = createSignal(false)

    function toggleTheme() {
        setDarkTheme(!darkTheme())
    }
    
    return(
        <header
          class="my-5 p-2 text-XL flex items-center gap-4"
          classList={{"bg-Silver": darkTheme(), "text-DarkPurple": darkTheme()}}
        >
          <span
            class="material-symbols-outlined cursor-pointer"
            onclick={toggleTheme}
          >
            dark_mode
          </span>
          <h1>Project: Tapestry</h1>
        </header>
    );
}