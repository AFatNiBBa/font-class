
import { Icon } from "../../index";

/**
 * A component that renders the `square-small` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-small?s=sharp-thin square-small}
 * @preview ![square-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzA0IDExMmwwIDI4OEwxNiA0MDBsMC0yODggMjg4IDB6TTE2IDk2TDAgOTZsMCAxNkwwIDQwMGwwIDE2IDE2IDAgMjg4IDAgMTYgMCAwLTE2IDAtMjg4IDAtMTYtMTYgMEwxNiA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M304 112l0 288L16 400l0-288 288 0zM16 96L0 96l0 16L0 400l0 16 16 0 288 0 16 0 0-16 0-288 0-16-16 0L16 96z" />
    </Icon>
);

export default SquareSmall;