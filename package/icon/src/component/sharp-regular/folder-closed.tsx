
import { Icon } from "../../index";

/**
 * A component that renders the `folder-closed` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-closed?s=sharp-regular folder-closed}
 * @preview ![folder-closed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDMybDQ4IDY0IDE5MiAwIDQ4IDAgMCA0OCAwIDI4OCAwIDQ4LTQ4IDBMNDggNDgwIDAgNDgwbDAtNDhMMCA4MCAwIDMybDQ4IDAgMTc2IDB6bTQ4IDExMmwtMjQgMC0xNC40LTE5LjJMMjAwIDgwIDQ4IDgwbDAgMTEyIDQxNiAwIDAtNDgtMTkyIDB6TTQ4IDI0MGwwIDE5MiA0MTYgMCAwLTE5Mkw0OCAyNDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const FolderClosed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 192 0 48 0 0 48 0 288 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 176 0zm48 112l-24 0-14.4-19.2L200 80 48 80l0 112 416 0 0-48-192 0zM48 240l0 192 416 0 0-192L48 240z" />
    </Icon>
);

export default FolderClosed;