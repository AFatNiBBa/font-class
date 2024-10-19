
import { Icon, generic } from "../../index";

/**
 * A component that renders the `game-board-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board-simple?s=sharp-duotone-solid game-board-simple}
 * @preview ![game-board-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTY0IDk2bDE2MCAwIDE2MCAwIDAgMTYwIDAgMTYwLTE2MCAwTDY0IDQxNmwwLTE2MEw2NCA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDk2bDAgMTYwSDIyNFY5Nkg2NHpNMjI0IDI1NlY0MTZIMzg0bDAtMTYwSDIyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const GameBoardSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM64 96l160 0 160 0 0 160 0 160-160 0L64 416l0-160L64 96z" />
            <path d="M64 96l0 160H224V96H64zM224 256V416H384l0-160H224z" />
    </Icon>
);

export default GameBoardSimple;