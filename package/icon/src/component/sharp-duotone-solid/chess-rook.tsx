
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-rook` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook?s=sharp-duotone-solid chess-rook}
 * @preview ![chess-rook](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0ODBsNDgtNDggMjg4IDAgNDggNDggMCAzMkwzMiA1MTJsMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDMybDAgMTc2IDY0IDQ4TDgwIDQzMmwyODggMEwzNTIgMjU2bDY0LTQ4IDAtMTc2LTk2IDAgMCA2NC00OCAwIDAtNjQtOTYgMCAwIDY0LTQ4IDAgMC02NEwzMiAzMnpNMjI0IDE5MmMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDY0LTY0IDAgMC02NGMwLTE3LjcgMTQuMy0zMiAzMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ChessRook: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 480l48-48 288 0 48 48 0 32L32 512l0-32z" />
            <path d="M32 32l0 176 64 48L80 432l288 0L352 256l64-48 0-176-96 0 0 64-48 0 0-64-96 0 0 64-48 0 0-64L32 32zM224 192c17.7 0 32 14.3 32 32l0 64-64 0 0-64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default ChessRook;