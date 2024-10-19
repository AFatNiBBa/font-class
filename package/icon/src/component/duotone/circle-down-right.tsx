
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-down-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down-right?s=duotone circle-down-right}
 * @preview ![circle-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE0NC01NmMwLTUuMSAyLTEwIDUuNy0xMy43bDM2LjctMzYuN2MzLjYtMy42IDguNS01LjcgMTMuNy01LjdzMTAgMiAxMy43IDUuN0wyODAgMjE2bDMzLjQtMzMuNGM0LjItNC4yIDEwLTYuNiAxNi02LjZjMTIuNSAwIDIyLjYgMTAuMSAyMi42IDIyLjZMMzUyIDMzNmMwIDguOC03LjIgMTYtMTYgMTZsLTEzNy40IDBjLTEyLjUgMC0yMi42LTEwLjEtMjIuNi0yMi42YzAtNiAyLjQtMTEuOCA2LjYtMTZMMjE2IDI4MGwtNjYuMy02Ni4zQzE0NiAyMTAgMTQ0IDIwNS4xIDE0NCAyMDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNTIgMzM2bDAtMTM3LjRjMC0xMi41LTEwLjEtMjIuNi0yMi42LTIyLjZjLTYgMC0xMS44IDIuNC0xNiA2LjZMMjgwIDIxNmwtNjYuMy02Ni4zQzIxMCAxNDYgMjA1LjEgMTQ0IDIwMCAxNDRzLTEwIDItMTMuNyA1LjdsLTM2LjcgMzYuN0MxNDYgMTkwIDE0NCAxOTQuOSAxNDQgMjAwczIgMTAgNS43IDEzLjdMMjE2IDI4MGwtMzMuNCAzMy40Yy00LjIgNC4yLTYuNiAxMC02LjYgMTZjMCAxMi41IDEwLjEgMjIuNiAyMi42IDIyLjZMMzM2IDM1MmM4LjggMCAxNi03LjIgMTYtMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144-56c0-5.1 2-10 5.7-13.7l36.7-36.7c3.6-3.6 8.5-5.7 13.7-5.7s10 2 13.7 5.7L280 216l33.4-33.4c4.2-4.2 10-6.6 16-6.6c12.5 0 22.6 10.1 22.6 22.6L352 336c0 8.8-7.2 16-16 16l-137.4 0c-12.5 0-22.6-10.1-22.6-22.6c0-6 2.4-11.8 6.6-16L216 280l-66.3-66.3C146 210 144 205.1 144 200z" />
            <path d="M352 336l0-137.4c0-12.5-10.1-22.6-22.6-22.6c-6 0-11.8 2.4-16 6.6L280 216l-66.3-66.3C210 146 205.1 144 200 144s-10 2-13.7 5.7l-36.7 36.7C146 190 144 194.9 144 200s2 10 5.7 13.7L216 280l-33.4 33.4c-4.2 4.2-6.6 10-6.6 16c0 12.5 10.1 22.6 22.6 22.6L336 352c8.8 0 16-7.2 16-16z" />
    </Icon>
);

export default CircleDownRight;