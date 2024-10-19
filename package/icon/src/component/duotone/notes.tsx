
import { Icon, generic } from "../../index";

/**
 * A component that renders the `notes` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=duotone notes}
 * @preview ![notes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA5NmwwIDI1NmMwIDM1LjMgMjguNyA2NCA2NCA2NGwxOTIgMCAwLTk2YzAtMTcuNyAxNC4zLTMyIDMyLTMybDk2IDAgMC0xOTJjMC0zNS4zLTI4LjctNjQtNjQtNjRMMTYwIDMyYy0zNS4zIDAtNjQgMjguNy02NCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI5NiA0NjRjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRsLTE2MCAwQzYwLjkgNTEyIDAgNDUxLjEgMCAzNzZMMCAxNTJjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNGwwIDIyNGMwIDQ4LjYgMzkuNCA4OCA4OCA4OGwxNjAgMHptNTYtNDhsMC05NmMwLTE3LjcgMTQuMy0zMiAzMi0zMmw5NiAwTDM1MiA0MTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Notes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 96l0 256c0 35.3 28.7 64 64 64l192 0 0-96c0-17.7 14.3-32 32-32l96 0 0-192c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64z" />
            <path d="M296 464c13.3 0 24 10.7 24 24s-10.7 24-24 24l-160 0C60.9 512 0 451.1 0 376L0 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 224c0 48.6 39.4 88 88 88l160 0zm56-48l0-96c0-17.7 14.3-32 32-32l96 0L352 416z" />
    </Icon>
);

export default Notes;