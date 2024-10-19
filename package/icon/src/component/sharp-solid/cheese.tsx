
import { Icon } from "../../index";

/**
 * A component that renders the `cheese` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=sharp-solid cheese}
 * @preview ![cheese](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZMMjg4IDMyYzEyMy43IDAgMjI0IDEwMC4zIDIyNCAyMjRMMCAyNTZ6bTUxMiAzMmwwIDE5MkwwIDQ4MCAwIDI4OGw1MTIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L288 32c123.7 0 224 100.3 224 224L0 256zm512 32l0 192L0 480 0 288l512 0z" />
    </Icon>
);

export default Cheese;