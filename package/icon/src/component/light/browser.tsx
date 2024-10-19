
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=light browser}
 * @preview ![browser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDY0bDAgNjQgMzIwIDAgMC0zMmMwLTE3LjctMTQuMy0zMi0zMi0zMkwxNjAgNjR6bS0zMiAwTDY0IDY0QzQ2LjMgNjQgMzIgNzguMyAzMiA5NmwwIDMyIDk2IDAgMC02NHpNMzIgMTYwbDAgMjU2YzAgMTcuNyAxNC4zIDMyIDMyIDMybDM4NCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtMjU2LTMzNiAwTDMyIDE2MHpNMCA5NkMwIDYwLjcgMjguNyAzMiA2NCAzMmwzODQgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDMyMGMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCA0ODBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 64l0 64 320 0 0-32c0-17.7-14.3-32-32-32L160 64zm-32 0L64 64C46.3 64 32 78.3 32 96l0 32 96 0 0-64zM32 160l0 256c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-256-336 0L32 160zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default Browser;