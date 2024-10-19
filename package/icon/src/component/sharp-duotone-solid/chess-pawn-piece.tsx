
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-pawn-piece` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=sharp-duotone-solid chess-pawn-piece}
 * @preview ![chess-pawn-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MGw0OC02NCAxNjAgMCA0OCA2NCAwIDMyTDAgNTEybDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNzYgMjQwYzE5LjQtMTQuNiAzMi0zNy44IDMyLTY0YzAtNDQuMi0zNS44LTgwLTgwLTgwcy04MCAzNS44LTgwIDgwYzAgMjYuMiAxMi42IDQ5LjQgMzIgNjRsLTggMC0yNCAwIDAgNDggMjQgMCA0LjQgMEw0OCA0MTZsMTYwIDBMMTc5LjYgMjg4bDQuNCAwIDI0IDAgMC00OC0yNCAwLTggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ChessPawnPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 480l48-64 160 0 48 64 0 32L0 512l0-32z" />
            <path d="M176 240c19.4-14.6 32-37.8 32-64c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 26.2 12.6 49.4 32 64l-8 0-24 0 0 48 24 0 4.4 0L48 416l160 0L179.6 288l4.4 0 24 0 0-48-24 0-8 0z" />
    </Icon>
);

export default ChessPawnPiece;