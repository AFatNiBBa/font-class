
import { Icon } from "../../index";

/**
 * A component that renders the `square-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down?s=sharp-solid square-down}
 * @preview ![square-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA0ODBsNDQ4IDAgMC00NDhMMCAzMiAwIDQ4MHpNOTYgMjU2bDgwIDAgMC0xMjggOTYgMCAwIDEyOCA4MCAwIDAgMTZMMjI0IDQwMCA5NiAyNzJsMC0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 480l448 0 0-448L0 32 0 480zM96 256l80 0 0-128 96 0 0 128 80 0 0 16L224 400 96 272l0-16z" />
    </Icon>
);

export default SquareDown;