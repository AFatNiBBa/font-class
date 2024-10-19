
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-history` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-history?s=duotone rectangle-history}
 * @preview ![rectangle-history](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCAxMDRjMCAxMy4zIDEwLjcgMjQgMjQgMjRsMzY4IDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRMNzIgODBjLTEzLjMgMC0yNCAxMC43LTI0IDI0ek05NiAyNGMwIDEzLjMgMTAuNyAyNCAyNCAyNGwyNzIgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNHMtMTAuNy0yNC0yNC0yNEwxMjAgMEMxMDYuNyAwIDk2IDEwLjcgOTYgMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggMTYwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMjI0YzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDUxMmMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCAyMjRjMC0zNS4zIDI4LjctNjQgNjQtNjRsMzg0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const RectangleHistory: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 104c0 13.3 10.7 24 24 24l368 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L72 80c-13.3 0-24 10.7-24 24zM96 24c0 13.3 10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L120 0C106.7 0 96 10.7 96 24z" />
            <path d="M448 160c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64l384 0z" />
    </Icon>
);

export default RectangleHistory;