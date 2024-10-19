
import { Icon } from "../../index";

/**
 * A component that renders the `notes` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=sharp-regular notes}
 * @preview ![notes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQ0IDQxNmwtNDggMCAwLTQ4TDk2IDgwbDAtNDggNDggMCAyODggMCA0OCAwIDAgNDggMCAyNDAtOTYgOTYtMjQwIDB6TTQzMiAyODhsMC0yMDhMMTQ0IDgwbDAgMjg4IDIwOCAwIDAtODAgODAgMHpNMzIwIDQ2NGwwIDQ4LTI0IDBMMjQgNTEyIDAgNTEybDAtMjRMMCAxNTJsMC0yNCA0OCAwIDAgMjQgMCAzMTIgMjQ4IDAgMjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Notes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 416l-48 0 0-48L96 80l0-48 48 0 288 0 48 0 0 48 0 240-96 96-240 0zM432 288l0-208L144 80l0 288 208 0 0-80 80 0zM320 464l0 48-24 0L24 512 0 512l0-24L0 152l0-24 48 0 0 24 0 312 248 0 24 0z" />
    </Icon>
);

export default Notes;