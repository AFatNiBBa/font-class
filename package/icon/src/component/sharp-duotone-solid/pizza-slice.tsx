
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pizza-slice` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pizza-slice?s=sharp-duotone-solid pizza-slice}
 * @preview ![pizza-slice](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMkw0MzIgNDA0YzAtMS4zIDAtMi43IDAtNEM0MzIgMjIzLjMgMjg4LjcgODAgMTEyIDgwYy0xLjMgMC0yLjcgMC00IDBDNzIgMjI0IDM2IDM2OCAwIDUxMnpNMTYwIDM4NGEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAwem00OC0xNDRhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHptOTYgOTZhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAwTDEwOCA4MGMxLjMgMCAyLjcgMCA0IDBjMTc2LjcgMCAzMjAgMTQzLjMgMzIwIDMyMGMwIDEuMyAwIDIuNyAwIDRsODAtMjBDNTEyIDE3MS45IDM0MC4xIDAgMTI4IDB6bTgwIDI0MGEzMiAzMiAwIDEgMCAtNjQgMCAzMiAzMiAwIDEgMCA2NCAwem02NCAxMjhhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0ek0xMjggNDE2YTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PizzaSlice: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 512L432 404c0-1.3 0-2.7 0-4C432 223.3 288.7 80 112 80c-1.3 0-2.7 0-4 0C72 224 36 368 0 512zM160 384a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm48-144a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M128 0L108 80c1.3 0 2.7 0 4 0c176.7 0 320 143.3 320 320c0 1.3 0 2.7 0 4l80-20C512 171.9 340.1 0 128 0zm80 240a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM128 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default PizzaSlice;