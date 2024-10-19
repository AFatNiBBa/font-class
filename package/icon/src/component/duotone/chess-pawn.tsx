
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-pawn` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn?s=duotone chess-pawn}
 * @preview ![chess-pawn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiA0ODkuNEMxNiA1MDEuOSAyNi4xIDUxMiAzOC42IDUxMmwyNDIuNyAwYzEyLjUgMCAyMi42LTEwLjEgMjIuNi0yMi42YzAtNi0yLjQtMTEuOC02LjYtMTZMMjU2IDQzMiA2NCA0MzIgMjIuNiA0NzMuNGMtNC4yIDQuMi02LjYgMTAtNi42IDE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjY0IDEzNmMwIDM3LjEtMTkuNCA2OS42LTQ4LjUgODhsOC41IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJjMCAxNS43LTExLjMgMjguOC0yNi4zIDMxLjVMMjU2IDQzMiA2NCA0MzIgOTAuMyAyODcuNUM3NS4zIDI4NC44IDY0IDI3MS43IDY0IDI1NmMwLTE3LjcgMTQuMy0zMiAzMi0zMmw4LjUgMEM3NS40IDIwNS42IDU2IDE3My4xIDU2IDEzNkM1NiA3OC42IDEwMi42IDMyIDE2MCAzMnMxMDQgNDYuNiAxMDQgMTA0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChessPawn: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M16 489.4C16 501.9 26.1 512 38.6 512l242.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432 64 432 22.6 473.4c-4.2 4.2-6.6 10-6.6 16z" />
            <path d="M264 136c0 37.1-19.4 69.6-48.5 88l8.5 0c17.7 0 32 14.3 32 32c0 15.7-11.3 28.8-26.3 31.5L256 432 64 432 90.3 287.5C75.3 284.8 64 271.7 64 256c0-17.7 14.3-32 32-32l8.5 0C75.4 205.6 56 173.1 56 136C56 78.6 102.6 32 160 32s104 46.6 104 104z" />
    </Icon>
);

export default ChessPawn;