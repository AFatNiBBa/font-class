
import { Icon } from "../../index";

/**
 * A component that renders the `square-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-check?s=sharp-solid square-check}
 * @preview ![square-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDMyTDAgMzIgMCA0ODBsNDQ4IDAgMC00NDh6TTMzNyAyMDlMMjA5IDMzN2wtMTcgMTctMTctMTctNjQtNjQtMTctMTdMMTI4IDIyMi4xbDE3IDE3IDQ3IDQ3TDMwMyAxNzVsMTctMTdMMzUzLjkgMTkybC0xNyAxN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM337 209L209 337l-17 17-17-17-64-64-17-17L128 222.1l17 17 47 47L303 175l17-17L353.9 192l-17 17z" />
    </Icon>
);

export default SquareCheck;