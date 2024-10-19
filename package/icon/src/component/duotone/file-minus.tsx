
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-minus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-minus?s=duotone file-minus}
 * @preview ![file-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgMjguNyAyOC43IDAgNjQgMEwyMjQgMGwwIDEyOGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxMjggMCAwIDI4OGMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCA1MTJjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgNjR6TTk2IDMyOGMwIDEzLjMgMTAuNyAyNCAyNCAyNGwxNDQgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNHMtMTAuNy0yNC0yNC0yNGwtMTQ0IDBjLTEzLjMgMC0yNCAxMC43LTI0IDI0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDE2MEwyMjQgMGwwIDEyOGMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxMjggMHpNMTIwIDMwNGMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNGwxNDQgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNHMtMTAuNy0yNC0yNC0yNGwtMTQ0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const FileMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM96 328c0 13.3 10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0c-13.3 0-24 10.7-24 24z" />
            <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM120 304c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
    </Icon>
);

export default FileMinus;