
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-queen-piece` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen-piece?s=sharp-duotone-solid chess-queen-piece}
 * @preview ![chess-queen-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MGwwIDMyIDI1NiAwIDAtMzItNDgtNjRMNDggNDE2IDAgNDgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTA0IDI0YTI0IDI0IDAgMSAxIDQ4IDAgMjQgMjQgMCAxIDEgLTQ4IDB6TTQ4IDE5MmwxOC41IDBMMTYgOTIgMzcgNzhsNC42IDQuNmM2IDYgMTQuNSAxMC4zIDIyLjMgNy4xQzc1IDg1LjIgNzkgNzQuNiA3OSA2NGwyOCAwczAgMjEgMjEgMjFzMjEtMjEgMjEtMjFsMjggMGMwIDEwLjYgNCAyMS4yIDE1IDI1LjdjNy44IDMuMiAxNi4zLTEuMSAyMi4zLTcuMUwyMTkgNzhsMjEgMTRMMTg5LjUgMTkybDE4LjUgMCAwIDQ4LTIzIDAgMjMgMTc2TDQ4IDQxNiA3MSAyNDBsLTIzIDAgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ChessQueenPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 480l0 32 256 0 0-32-48-64L48 416 0 480z" />
            <path d="M104 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM48 192l18.5 0L16 92 37 78l4.6 4.6c6 6 14.5 10.3 22.3 7.1C75 85.2 79 74.6 79 64l28 0s0 21 21 21s21-21 21-21l28 0c0 10.6 4 21.2 15 25.7c7.8 3.2 16.3-1.1 22.3-7.1L219 78l21 14L189.5 192l18.5 0 0 48-23 0 23 176L48 416 71 240l-23 0 0-48z" />
    </Icon>
);

export default ChessQueenPiece;