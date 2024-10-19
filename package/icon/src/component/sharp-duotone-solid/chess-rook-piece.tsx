
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-rook-piece` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook-piece?s=sharp-duotone-solid chess-rook-piece}
 * @preview ![chess-rook-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MGw0OC02NCAyMjQgMCA0OCA2NCAwIDMyTDAgNTEybDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00OCA0MTZMNzIgMjY0IDQwIDIyNCA0MCA5Nmw1NiAwIDAgNDggMzIgMCAwLTQ4IDY0IDAgMCA0OCAzMiAwIDAtNDggNTYgMCAwIDEyOC0zMiA0MCAyNCAxNTJMNDggNDE2em04OC0xNjhsMCA0MCA0OCAwIDAtNDBjMC0xMy4zLTEwLjctMjQtMjQtMjRzLTI0IDEwLjctMjQgMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChessRookPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 480l48-64 224 0 48 64 0 32L0 512l0-32z" />
            <path d="M48 416L72 264 40 224 40 96l56 0 0 48 32 0 0-48 64 0 0 48 32 0 0-48 56 0 0 128-32 40 24 152L48 416zm88-168l0 40 48 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
    </Icon>
);

export default ChessRookPiece;