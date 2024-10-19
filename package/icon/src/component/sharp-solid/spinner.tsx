
import { Icon } from "../../index";

/**
 * A component that renders the `spinner` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner?s=sharp-solid spinner}
 * @preview ![spinner](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjA4IDBsMCA5NiA5NiAwIDAtOTZMMjA4IDB6TTAgMjA4bDAgOTYgOTYgMCAwLTk2TDAgMjA4ek0yMDggNTEybDk2IDAgMC05Ni05NiAwIDAgOTZ6TTUxMiAyMDhsLTk2IDAgMCA5NiA5NiAwIDAtOTZ6TTQxIDQwMy4xTDEwOC45IDQ3MWw2Ny45LTY3LjktNjcuOS02Ny45TDQxIDQwMy4xem0zNjIgNjcuOUw0NzEgNDAzLjFsLTY3LjktNjcuOS02Ny45IDY3LjlMNDAzLjEgNDcxek00MSAxMDguOWw2Ny45IDY3LjkgNjcuOS02Ny45TDEwOC45IDQxIDQxIDEwOC45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Spinner: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 0l0 96 96 0 0-96L208 0zM0 208l0 96 96 0 0-96L0 208zM208 512l96 0 0-96-96 0 0 96zM512 208l-96 0 0 96 96 0 0-96zM41 403.1L108.9 471l67.9-67.9-67.9-67.9L41 403.1zm362 67.9L471 403.1l-67.9-67.9-67.9 67.9L403.1 471zM41 108.9l67.9 67.9 67.9-67.9L108.9 41 41 108.9z" />
    </Icon>
);

export default Spinner;