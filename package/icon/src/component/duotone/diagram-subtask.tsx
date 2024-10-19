
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-subtask` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-subtask?s=duotone diagram-subtask}
 * @preview ![diagram-subtask](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAyMjRsMCA5NmMwIDUzIDQzIDk2IDk2IDk2bDMyIDAgMC02NC0zMiAwYy0xNy43IDAtMzItMTQuMy0zMi0zMmwwLTk2LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCAzMkMyOC43IDMyIDAgNjAuNyAwIDk2bDAgNjRjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMzg0IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC02NGMwLTM1LjMtMjguNy02NC02NC02NEw2NCAzMnpNMjg4IDI4OGMtMzUuMyAwLTY0IDI4LjctNjQgNjRsMCA2NGMwIDM1LjMgMjguNyA2NCA2NCA2NGwxNjAgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTY0YzAtMzUuMy0yOC43LTY0LTY0LTY0bC0xNjAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiagramSubtask: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 224l0 96c0 53 43 96 96 96l32 0 0-64-32 0c-17.7 0-32-14.3-32-32l0-96-64 0z" />
            <path d="M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zM288 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64l-160 0z" />
    </Icon>
);

export default DiagramSubtask;