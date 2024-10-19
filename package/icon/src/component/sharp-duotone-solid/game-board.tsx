
import { Icon, generic } from "../../index";

/**
 * A component that renders the `game-board` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board?s=sharp-duotone-solid game-board}
 * @preview ![game-board](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTY0IDk2bDgwIDAgODAgMCA4MCAwIDgwIDAgMCA4MCAwIDgwIDAgODAgMCA4MC04MCAwLTgwIDAtODAgMC04MCAwIDAtODAgMC04MCAwLTgwIDAtODB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCAyNTZsMCA4MGg4MFYyNTZINjR6TTM4NCA0MTZsMC04MEgzMDR2ODBoODB6bS0yNDAgMGg4MFYzMzZIMTQ0djgwek02NCA5NmwwIDgwaDgwVjk2SDY0em0xNjAgODBIMTQ0djgwaDgwVjE3NnptMCA4MHY4MGg4MFYyNTZIMjI0em0xNjAgMFYxNzZIMzA0djgwaDgwek0zMDQgOTZIMjI0djgwaDgwVjk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const GameBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM64 96l80 0 80 0 80 0 80 0 0 80 0 80 0 80 0 80-80 0-80 0-80 0-80 0 0-80 0-80 0-80 0-80z" />
            <path d="M64 256l0 80h80V256H64zM384 416l0-80H304v80h80zm-240 0h80V336H144v80zM64 96l0 80h80V96H64zm160 80H144v80h80V176zm0 80v80h80V256H224zm160 0V176H304v80h80zM304 96H224v80h80V96z" />
    </Icon>
);

export default GameBoard;