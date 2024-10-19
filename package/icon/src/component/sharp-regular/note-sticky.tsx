
import { Icon } from "../../index";

/**
 * A component that renders the `note-sticky` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-sticky?s=sharp-regular note-sticky}
 * @preview ![note-sticky](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggODBsMCAzNTIgMjQwIDAgMC0xMTIgMTEyIDAgMC0yNDBMNDggODB6TTI4OCA0ODBMNDggNDgwIDAgNDgwbDAtNDhMMCA4MCAwIDMybDQ4IDAgMzUyIDAgNDggMCAwIDQ4IDAgMjQwIDAgMzJMMzIwIDQ4MGwtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const NoteSticky: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 240 0 0-112 112 0 0-240L48 80zM288 480L48 480 0 480l0-48L0 80 0 32l48 0 352 0 48 0 0 48 0 240 0 32L320 480l-32 0z" />
    </Icon>
);

export default NoteSticky;