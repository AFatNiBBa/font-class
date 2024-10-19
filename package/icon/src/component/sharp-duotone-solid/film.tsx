
import { Icon, generic } from "../../index";

/**
 * A component that renders the `film` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film?s=sharp-duotone-solid film}
 * @preview ![film](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgOTZsMCAxMjggMTkyIDAgMC0xMjhMMTYwIDk2em0wIDE5MmwwIDEyOCAxOTIgMCAwLTEyOC0xOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMzJsNTEyIDAgMCA0NDhMMCA0ODAgMCAzMnpNNDggMzUybDAgNjQgNjQgMCAwLTY0LTY0IDB6bTQxNiAwbC02NCAwIDAgNjQgNjQgMCAwLTY0ek00OCAyMjRsMCA2NCA2NCAwIDAtNjQtNjQgMHptNDE2IDBsLTY0IDAgMCA2NCA2NCAwIDAtNjR6TTQ4IDk2bDAgNjQgNjQgMCAwLTY0TDQ4IDk2em00MTYgMGwtNjQgMCAwIDY0IDY0IDAgMC02NHpNMTYwIDk2bDAgMTI4IDE5MiAwIDAtMTI4TDE2MCA5NnpNMzUyIDI4OGwtMTkyIDAgMCAxMjggMTkyIDAgMC0xMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Film: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 96l0 128 192 0 0-128L160 96zm0 192l0 128 192 0 0-128-192 0z" />
            <path d="M0 32l512 0 0 448L0 480 0 32zM48 352l0 64 64 0 0-64-64 0zm416 0l-64 0 0 64 64 0 0-64zM48 224l0 64 64 0 0-64-64 0zm416 0l-64 0 0 64 64 0 0-64zM48 96l0 64 64 0 0-64L48 96zm416 0l-64 0 0 64 64 0 0-64zM160 96l0 128 192 0 0-128L160 96zM352 288l-192 0 0 128 192 0 0-128z" />
    </Icon>
);

export default Film;