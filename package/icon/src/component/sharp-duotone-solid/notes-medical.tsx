
import { Icon, generic } from "../../index";

/**
 * A component that renders the `notes-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes-medical?s=sharp-duotone-solid notes-medical}
 * @preview ![notes-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMmwzODQgMCAwIDI4OC05NiA5Nkw5NiA0MTYgOTYgMzJ6bTk2IDE2MGwwIDY0IDY0IDAgMCA2NCA2NCAwIDAtNjQgNjQgMCAwLTY0LTY0IDAgMC02NC02NCAwIDAgNjQtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI5NiA0NjRsMjQgMCAwIDQ4LTI0IDBMMjQgNTEyIDAgNTEybDAtMjRMMCAxNTJsMC0yNCA0OCAwIDAgMjQgMCAzMTIgMjQ4IDB6TTI1NiAxMjhsNjQgMCAwIDY0IDY0IDAgMCA2NC02NCAwIDAgNjQtNjQgMCAwLTY0LTY0IDAgMC02NCA2NCAwIDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const NotesMedical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 32l384 0 0 288-96 96L96 416 96 32zm96 160l0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0 0 64-64 0z" />
            <path d="M296 464l24 0 0 48-24 0L24 512 0 512l0-24L0 152l0-24 48 0 0 24 0 312 248 0zM256 128l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64z" />
    </Icon>
);

export default NotesMedical;