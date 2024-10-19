
import { Icon, generic } from "../../index";

/**
 * A component that renders the `soap` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/soap?s=sharp-duotone-solid soap}
 * @preview ![soap](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgNDhhNDggNDggMCAxIDAgOTYgMCA0OCA0OCAwIDEgMCAtOTYgMHptOTYgMTQ0YTY0IDY0IDAgMSAwIDEyOCAwIDY0IDY0IDAgMSAwIC0xMjggMHpNMzUyIDMyYTMyIDMyIDAgMSAwIDY0IDAgMzIgMzIgMCAxIDAgLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zOTEuNiAyNTZjMTUuMi0xNyAyNC40LTM5LjQgMjQuNC02NGw5NiAwIDAgMzIwTDAgNTEyIDAgMTkybDIyNCAwYzAgMjQuNiA5LjIgNDcgMjQuNCA2NEw5NiAyNTZsLTMyIDAgMCAzMiAwIDEyOCAwIDMyIDMyIDAgMzIwIDAgMzIgMCAwLTMyIDAtMTI4IDAtMzItMzIgMC0yNC40IDB6TTMyMCAyODhsOTYgMCAwIDEyOEw5NiA0MTZsMC0xMjggMjI0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Soap: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm96 144a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zM352 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M391.6 256c15.2-17 24.4-39.4 24.4-64l96 0 0 320L0 512 0 192l224 0c0 24.6 9.2 47 24.4 64L96 256l-32 0 0 32 0 128 0 32 32 0 320 0 32 0 0-32 0-128 0-32-32 0-24.4 0zM320 288l96 0 0 128L96 416l0-128 224 0z" />
    </Icon>
);

export default Soap;