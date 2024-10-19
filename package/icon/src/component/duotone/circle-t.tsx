
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-t` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-t?s=duotone circle-t}
 * @preview ![circle-t](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOC04OGMwLTEzLjMgMTAuNy0yNCAyNC0yNGwxMDQgMCAxMDQgMGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNGwtODAgMCAwIDE2OGMwIDEzLjMtMTAuNyAyNC0yNCAyNHMtMjQtMTAuNy0yNC0yNGwwLTE2OC04MCAwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAxNjhjMC0xMy4zIDEwLjctMjQgMjQtMjRsMTA0IDAgMTA0IDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRsLTgwIDAgMCAxNjhjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRsMC0xNjgtODAgMGMtMTMuMyAwLTI0LTEwLjctMjQtMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleT: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-88c0-13.3 10.7-24 24-24l104 0 104 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0 0 168c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-168-80 0c-13.3 0-24-10.7-24-24z" />
            <path d="M128 168c0-13.3 10.7-24 24-24l104 0 104 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0 0 168c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-168-80 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default CircleT;