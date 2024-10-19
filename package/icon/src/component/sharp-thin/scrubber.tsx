
import { Icon } from "../../index";

/**
 * A component that renders the `scrubber` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scrubber?s=sharp-thin scrubber}
 * @preview ![scrubber](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk2IDI1NkEyNDAgMjQwIDAgMSAwIDE2IDI1NmEyNDAgMjQwIDAgMSAwIDQ4MCAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6bTMyMCAwYTY0IDY0IDAgMSAwIC0xMjggMCA2NCA2NCAwIDEgMCAxMjggMHptLTE0NCAwYTgwIDgwIDAgMSAxIDE2MCAwIDgwIDgwIDAgMSAxIC0xNjAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Scrubber: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-144 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z" />
    </Icon>
);

export default Scrubber;