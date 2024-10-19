
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-pawn` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn?s=sharp-duotone-solid chess-pawn}
 * @preview ![chess-pawn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiA0ODBsNDgtNDggMTkyIDAgNDggNDggMCAzMkwxNiA1MTJsMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI2NCAxMzZjMCAzNy4xLTE5LjQgNjkuNi00OC41IDg4bDguNSAwIDMyIDAgMCA2NC0yNi4yIDBMMjU2IDQzMiA2NCA0MzIgOTAuMiAyODggNjQgMjg4bDAtNjQgMzIgMCA4LjUgMEM3NS40IDIwNS42IDU2IDE3My4xIDU2IDEzNkM1NiA3OC42IDEwMi42IDMyIDE2MCAzMnMxMDQgNDYuNiAxMDQgMTA0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChessPawn: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M16 480l48-48 192 0 48 48 0 32L16 512l0-32z" />
            <path d="M264 136c0 37.1-19.4 69.6-48.5 88l8.5 0 32 0 0 64-26.2 0L256 432 64 432 90.2 288 64 288l0-64 32 0 8.5 0C75.4 205.6 56 173.1 56 136C56 78.6 102.6 32 160 32s104 46.6 104 104z" />
    </Icon>
);

export default ChessPawn;