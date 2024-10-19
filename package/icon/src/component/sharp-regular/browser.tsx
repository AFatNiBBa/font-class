
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=sharp-regular browser}
 * @preview ![browser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY0IDQzMmwwLTI3Mkw0OCAxNjBsMCAyNzIgNDE2IDB6bTQ4LTI3MmwwIDI3MiAwIDQ4LTQ4IDBMNDggNDgwIDAgNDgwbDAtNDhMMCAxNjAgMCA5NiAwIDgwIDAgMzJsNDggMCAxNiAwIDM4NCAwIDE2IDAgNDggMCAwIDQ4IDAgMTYgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 432l0-272L48 160l0 272 416 0zm48-272l0 272 0 48-48 0L48 480 0 480l0-48L0 160 0 96 0 80 0 32l48 0 16 0 384 0 16 0 48 0 0 48 0 16 0 64z" />
    </Icon>
);

export default Browser;