
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square?s=sharp-thin bracket-square}
 * @preview ![bracket-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmw4IDAgMTQ0IDAgOCAwIDAgMTYtOCAwTDE2IDQ4bDAgNDE2IDEzNiAwIDggMCAwIDE2LTggMEw4IDQ4MGwtOCAwIDAtOEwwIDQwbDAtOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BracketSquare: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M0 32l8 0 144 0 8 0 0 16-8 0L16 48l0 416 136 0 8 0 0 16-8 0L8 480l-8 0 0-8L0 40l0-8z" />
    </Icon>
);

export default BracketSquare;