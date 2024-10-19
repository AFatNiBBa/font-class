
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn?s=sharp-solid chess-pawn}
 * @preview ![chess-pawn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjE1LjUgMjI0YzI5LjItMTguNCA0OC41LTUwLjkgNDguNS04OGMwLTU3LjQtNDYuNi0xMDQtMTA0LTEwNFM1NiA3OC42IDU2IDEzNmMwIDM3LjEgMTkuNCA2OS42IDQ4LjUgODhMOTYgMjI0bC0zMiAwIDAgNjQgMjguNCAwTDgwIDQwMGwxNjAgMEwyMjcuNiAyODhsMjguNCAwIDAtNjQtMzIgMC04LjUgMHpNMTYgNTEybDI4OCAwIDAtMzItNDgtNDhMNjQgNDMyIDE2IDQ4MGwwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChessPawn: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88L96 224l-32 0 0 64 28.4 0L80 400l160 0L227.6 288l28.4 0 0-64-32 0-8.5 0zM16 512l288 0 0-32-48-48L64 432 16 480l0 32z" />
    </Icon>
);

export default ChessPawn;