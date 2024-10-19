
import { Icon, generic } from "../../index";

/**
 * A component that renders the `browser` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=duotone browser}
 * @preview ![browser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNEwwIDQxNmMwIDM1LjMgMjguNyA2NCA2NCA2NGwzODQgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTE5MkwwIDIyNHptNjQtOTZhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMCAtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgOTZDMCA2MC43IDI4LjcgMzIgNjQgMzJsMzg0IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAxMjhMMCAyMjQgMCA5NnptNjQgMzJhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMCAtNjQgMHptMTIwLTI0Yy0xMy4zIDAtMjQgMTAuNy0yNCAyNHMxMC43IDI0IDI0IDI0bDI0MCAwYzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0bC0yNDAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192L0 224zm64-96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 128L0 224 0 96zm64 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm120-24c-13.3 0-24 10.7-24 24s10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-240 0z" />
    </Icon>
);

export default Browser;