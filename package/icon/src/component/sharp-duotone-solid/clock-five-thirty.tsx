
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-five-thirty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five-thirty?s=sharp-duotone-solid clock-five-thirty}
 * @preview ![clock-five-thirty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTIzMiAwbDQ0LTEzLjMgNjQgOTYgMTMuMyAyMC0zOS45IDI2LjYtMTMuMy0yMC0yMC0zMCAwIDU2LjcgMCAyNC00OCAwIDAtMjQgMC0xMzZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODAgNDE2bDAtMjQgMC01Ni43IDIwIDMwIDEzLjMgMjAgMzkuOS0yNi42LTEzLjMtMjAtNjQtOTZMMjMyIDI1NmwwIDEzNiAwIDI0IDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ClockFiveThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232 0l44-13.3 64 96 13.3 20-39.9 26.6-13.3-20-20-30 0 56.7 0 24-48 0 0-24 0-136z" />
            <path d="M280 416l0-24 0-56.7 20 30 13.3 20 39.9-26.6-13.3-20-64-96L232 256l0 136 0 24 48 0z" />
    </Icon>
);

export default ClockFiveThirty;