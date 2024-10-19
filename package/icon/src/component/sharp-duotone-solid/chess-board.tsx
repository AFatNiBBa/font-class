
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-board` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-board?s=sharp-duotone-solid chess-board}
 * @preview ![chess-board](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00NDggMzJMMCAzMiAwIDQ4MGw0NDggMCAwLTQ0OHpNMzg0IDk2bDAgMzIwTDY0IDQxNiA2NCA5NmwzMjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiA5NmwtNjQgMCAwIDY0LTY0IDAgMCA2NCA2NCAwIDAgNjQtNjQgMCAwIDY0IDY0IDAgMCA2NCA2NCAwIDAtNjQgNjQgMCAwIDY0IDY0IDAgMC02NCA2NCAwIDAtNjQtNjQgMCAwLTY0IDY0IDAgMC02NC02NCAwIDAtNjQtNjQgMCAwIDY0LTY0IDAgMC02NHptMCAxMjhsLTY0IDAgMC02NCA2NCAwIDAgNjR6bTY0IDBsMCA2NCA2NCAwIDAgNjQtNjQgMCAwLTY0LTY0IDAgMCA2NC02NCAwIDAtNjQgNjQgMCAwLTY0IDY0IDB6bTAgMGwwLTY0IDY0IDAgMCA2NC02NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChessBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M448 32L0 32 0 480l448 0 0-448zM384 96l0 320L64 416 64 96l320 0z" />
            <path d="M192 96l-64 0 0 64-64 0 0 64 64 0 0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64 64 0 0-64-64 0 0-64-64 0 0 64-64 0 0-64zm0 128l-64 0 0-64 64 0 0 64zm64 0l0 64 64 0 0 64-64 0 0-64-64 0 0 64-64 0 0-64 64 0 0-64 64 0zm0 0l0-64 64 0 0 64-64 0z" />
    </Icon>
);

export default ChessBoard;