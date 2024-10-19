
import { Icon } from "../../index";

/**
 * A component that renders the `file` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file?s=sharp-solid file}
 * @preview ![file](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAwTDIyNCAwbDAgMTYwIDE2MCAwIDAgMzUyTDAgNTEyIDAgMHpNMzg0IDEyOGwtMTI4IDBMMjU2IDAgMzg0IDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const File: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM384 128l-128 0L256 0 384 128z" />
    </Icon>
);

export default File;