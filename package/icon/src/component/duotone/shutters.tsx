
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shutters` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shutters?s=duotone shutters}
 * @preview ![shutters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIwMy40QzAgMjE0LjggOS4yIDIyNCAyMC42IDIyNGw0NzAuNyAwYzExLjQgMCAyMC42LTkuMiAyMC42LTIwLjZjMC0yLjItLjQtNC40LTEuMS02LjVMNDg4IDEyOCAyNCAxMjggMS4xIDE5Ni44Yy0uNyAyLjEtMS4xIDQuMy0xLjEgNi41em0wIDEyOEMwIDM0Mi44IDkuMiAzNTIgMjAuNiAzNTJsNDcwLjcgMGMxMS40IDAgMjAuNi05LjIgMjAuNi0yMC42YzAtMi4yLS40LTQuNC0xLjEtNi41TDQ4OCAyNTYgMjQgMjU2IDEuMSAzMjQuOGMtLjcgMi4xLTEuMSA0LjMtMS4xIDYuNXptMCAxMjhDMCA0NzAuOCA5LjIgNDgwIDIwLjYgNDgwbDQ3MC43IDBjMTEuNCAwIDIwLjYtOS4yIDIwLjYtMjAuNmMwLTIuMi0uNC00LjQtMS4xLTYuNUw0ODggMzg0IDI0IDM4NCAxLjEgNDUyLjhjLS43IDIuMS0xLjEgNC4zLTEuMSA2LjV6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDY0QzAgNDYuMyAxNC4zIDMyIDMyIDMybDQ0OCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMyTDMyIDk2QzE0LjMgOTYgMCA4MS43IDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Shutters: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 203.4C0 214.8 9.2 224 20.6 224l470.7 0c11.4 0 20.6-9.2 20.6-20.6c0-2.2-.4-4.4-1.1-6.5L488 128 24 128 1.1 196.8c-.7 2.1-1.1 4.3-1.1 6.5zm0 128C0 342.8 9.2 352 20.6 352l470.7 0c11.4 0 20.6-9.2 20.6-20.6c0-2.2-.4-4.4-1.1-6.5L488 256 24 256 1.1 324.8c-.7 2.1-1.1 4.3-1.1 6.5zm0 128C0 470.8 9.2 480 20.6 480l470.7 0c11.4 0 20.6-9.2 20.6-20.6c0-2.2-.4-4.4-1.1-6.5L488 384 24 384 1.1 452.8c-.7 2.1-1.1 4.3-1.1 6.5z" />
            <path d="M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64z" />
    </Icon>
);

export default Shutters;