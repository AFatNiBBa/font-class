
import { Icon, generic } from "../../index";

/**
 * A component that renders the `slider` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slider?s=duotone slider}
 * @preview ![slider](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmMwIDE3LjcgMTQuMyAzMiAzMiAzMmwxOTIgMCAwLTY0TDMyIDIyNGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6bTQxNi0zMmwwIDY0IDY0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJsLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNTIgMTYwbDAgMTkyLTMyIDAgMC0xOTIgMzIgMHpNMzIwIDk2Yy0zNS4zIDAtNjQgMjguNy02NCA2NGwwIDE5MmMwIDM1LjMgMjguNyA2NCA2NCA2NGwzMiAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMTkyYzAtMzUuMy0yOC43LTY0LTY0LTY0bC0zMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Slider: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32l192 0 0-64L32 224c-17.7 0-32 14.3-32 32zm416-32l0 64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0z" />
            <path d="M352 160l0 192-32 0 0-192 32 0zM320 96c-35.3 0-64 28.7-64 64l0 192c0 35.3 28.7 64 64 64l32 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-32 0z" />
    </Icon>
);

export default Slider;