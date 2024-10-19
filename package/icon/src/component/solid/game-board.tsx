
import { Icon } from "../../index";

/**
 * A component that renders the `game-board` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board?s=solid game-board}
 * @preview ![game-board](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA5NkMwIDYwLjcgMjguNyAzMiA2NCAzMkgzODRjMzUuMyAwIDY0IDI4LjcgNjQgNjRWNDE2YzAgMzUuMy0yOC43IDY0LTY0IDY0SDY0Yy0zNS4zIDAtNjQtMjguNy02NC02NFY5NnptMTQ0IDB2ODBoODBWOTZIMTQ0em0wIDE2MFYxNzZINjR2ODBoODB6bTgwIDBIMTQ0djgwSDY0djgwaDgwVjMzNmg4MHY4MGg4MFYzMzZoODBWMjU2SDMwNFYxNzZoODBWOTZIMzA0djgwSDIyNHY4MHptMCAwaDgwdjgwSDIyNFYyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const GameBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm144 0v80h80V96H144zm0 160V176H64v80h80zm80 0H144v80H64v80h80V336h80v80h80V336h80V256H304V176h80V96H304v80H224v80zm0 0h80v80H224V256z" />
    </Icon>
);

export default GameBoard;