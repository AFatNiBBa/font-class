
import { Icon } from "../../index";

/**
 * A component that renders the `game-board` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/game-board?s=sharp-solid game-board}
 * @preview ![game-board](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMkg0NDhWNDgwSDBWMzJ6TTE0NCA5NnY4MGg4MFY5NkgxNDR6bTAgMTYwVjE3Nkg2NHY4MGg4MHptODAgMEgxNDR2ODBINjR2ODBoODBWMzM2aDgwdjgwaDgwVjMzNmg4MFYyNTZIMzA0VjE3Nmg4MFY5NkgzMDR2ODBIMjI0djgwem0wIDBoODB2ODBIMjI0VjI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const GameBoard: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32H448V480H0V32zM144 96v80h80V96H144zm0 160V176H64v80h80zm80 0H144v80H64v80h80V336h80v80h80V336h80V256H304V176h80V96H304v80H224v80zm0 0h80v80H224V256z" />
    </Icon>
);

export default GameBoard;