
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-pen?s=sharp-duotone-solid calendar-pen}
 * @preview ![calendar-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5Mmw0NDggMCAwIDMyMEwwIDUxMiAwIDE5MnpNMTI4IDQ0OGw2NC04IDg4LjctODguNy01Ni01NkwxMzYgMzg0bC04IDY0ek0yNDcuMyAyNzIuN2w1NiA1NkwzMzYgMjk2bC01Ni01Ni0zMi43IDMyLjd6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMEw5NiAwbDAgNjRMMCA2NCAwIDE5Mmw0NDggMCAwLTEyOC05NiAwIDAtNjRMMjg4IDBsMCA2NEwxNjAgNjRsMC02NHpNMjgwLjcgMzUxLjNsLTU2LTU2TDEzNiAzODRsLTggNjQgNjQtOCA4OC43LTg4Ljd6bTIyLjYtMjIuNkwzMzYgMjk2bC01Ni01Ni0zMi43IDMyLjcgNTYgNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CalendarPen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192zM128 448l64-8 88.7-88.7-56-56L136 384l-8 64zM247.3 272.7l56 56L336 296l-56-56-32.7 32.7z" />
            <path d="M160 0L96 0l0 64L0 64 0 192l448 0 0-128-96 0 0-64L288 0l0 64L160 64l0-64zM280.7 351.3l-56-56L136 384l-8 64 64-8 88.7-88.7zm22.6-22.6L336 296l-56-56-32.7 32.7 56 56z" />
    </Icon>
);

export default CalendarPen;