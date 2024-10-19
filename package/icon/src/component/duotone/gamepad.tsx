
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gamepad` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad?s=duotone gamepad}
 * @preview ![gamepad](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM2MiA4NiA0NDggMTkyIDQ0OGwyNTYgMGMxMDYgMCAxOTItODYgMTkyLTE5MnMtODYtMTkyLTE5Mi0xOTJMMTkyIDY0Qzg2IDY0IDAgMTUwIDAgMjU2em0xMTIgMGMwLTEzLjMgMTAuNy0yNCAyNC0yNGwzMiAwIDAtMzJjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNGwwIDMyIDMyIDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRsLTMyIDAgMCAzMmMwIDEzLjMtMTAuNyAyNC0yNCAyNHMtMjQtMTAuNy0yNC0yNGwwLTMyLTMyIDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0em0zNjAgNDhhNDAgNDAgMCAxIDEgLTgwIDAgNDAgNDAgMCAxIDEgODAgMHptNjQtOTZhNDAgNDAgMCAxIDEgLTgwIDAgNDAgNDAgMCAxIDEgODAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAxNzZjLTEzLjMgMC0yNCAxMC43LTI0IDI0bDAgMzItMzIgMGMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNGwzMiAwIDAgMzJjMCAxMy4zIDEwLjcgMjQgMjQgMjRzMjQtMTAuNyAyNC0yNGwwLTMyIDMyIDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRsLTMyIDAgMC0zMmMwLTEzLjMtMTAuNy0yNC0yNC0yNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Gamepad: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 362 86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64C86 64 0 150 0 256zm112 0c0-13.3 10.7-24 24-24l32 0 0-32c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24zm360 48a40 40 0 1 1 -80 0 40 40 0 1 1 80 0zm64-96a40 40 0 1 1 -80 0 40 40 0 1 1 80 0z" />
            <path d="M192 176c-13.3 0-24 10.7-24 24l0 32-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-32c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default Gamepad;