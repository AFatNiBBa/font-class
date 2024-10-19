
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-successor` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-successor?s=duotone diagram-successor}
 * @preview ![diagram-successor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDAgNjRjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMTYwIDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC02NCA4MCAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDE2LTM4LjEgMGMtMjEuNCAwLTMyLjEgMjUuOS0xNyA0MUwzOTkgMjM5YzQuNyA0LjcgMTAuOCA3IDE3IDdzMTIuMy0yLjMgMTctN0w1MDMgMTY5YzQuOS00LjkgNy4xLTEwLjkgNy4xLTE2LjhjMC0xMi4zLTkuNi0yNC4yLTI0LTI0LjJMNDQ4IDEyOGwwLTE2YzAtNDQuMi0zNS44LTgwLTgwLTgwTDIyNCAzMmwtMTYgMEw2NCAzMkMyOC43IDMyIDAgNjAuNyAwIDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDQ4MGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTY0YzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDI4OGMtMzUuMyAwLTY0IDI4LjctNjQgNjRsMCA2NGMwIDM1LjMgMjguNyA2NCA2NCA2NGwzODQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiagramSuccessor: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l0 64c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-64 80 0c8.8 0 16 7.2 16 16l0 16-38.1 0c-21.4 0-32.1 25.9-17 41L399 239c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7L503 169c4.9-4.9 7.1-10.9 7.1-16.8c0-12.3-9.6-24.2-24-24.2L448 128l0-16c0-44.2-35.8-80-80-80L224 32l-16 0L64 32C28.7 32 0 60.7 0 96z" />
            <path d="M448 480c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0z" />
    </Icon>
);

export default DiagramSuccessor;