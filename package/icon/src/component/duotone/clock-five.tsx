
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-five` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five?s=duotone clock-five}
 * @preview ![clock-five](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTIzMiAxMjBjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNGwwIDEyOC43IDYwIDkwYzIuNyA0LjEgNCA4LjcgNCAxMy4zYzAgNy44LTMuOCAxNS40LTEwLjcgMjBjLTQuMSAyLjctOC43IDQtMTMuMyA0Yy03LjggMC0xNS40LTMuOC0yMC0xMC43bC02NC05NmMtMi42LTMuOS00LTguNi00LTEzLjNsMC0xMzZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgOTZjMTMuMyAwIDI0IDEwLjcgMjQgMjRsMCAxMjguNyA2MCA5MGM3LjQgMTEgNC40IDI1LjktNi43IDMzLjNzLTI1LjkgNC40LTMzLjMtNi43bC02NC05NmMtMi42LTMuOS00LTguNi00LTEzLjNsMC0xMzZjMC0xMy4zIDEwLjctMjQgMjQtMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ClockFive: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 128.7 60 90c2.7 4.1 4 8.7 4 13.3c0 7.8-3.8 15.4-10.7 20c-4.1 2.7-8.7 4-13.3 4c-7.8 0-15.4-3.8-20-10.7l-64-96c-2.6-3.9-4-8.6-4-13.3l0-136z" />
            <path d="M256 96c13.3 0 24 10.7 24 24l0 128.7 60 90c7.4 11 4.4 25.9-6.7 33.3s-25.9 4.4-33.3-6.7l-64-96c-2.6-3.9-4-8.6-4-13.3l0-136c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default ClockFive;