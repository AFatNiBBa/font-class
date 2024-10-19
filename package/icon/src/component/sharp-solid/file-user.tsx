
import { Icon } from "../../index";

/**
 * A component that renders the `file-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-user?s=sharp-solid file-user}
 * @preview ![file-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDBMMCAwIDAgNTEybDM4NCAwIDAtMzUyLTE2MCAwTDIyNCAwem0zMiAwbDAgMTI4IDEyOCAwTDI1NiAwek0xMjggMjU2YTY0IDY0IDAgMSAxIDEyOCAwIDY0IDY0IDAgMSAxIC0xMjggMHptMTQ0IDk2bDMyIDk2TDgwIDQ0OGwzMi05NiAxNjAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FileUser: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM128 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 96l32 96L80 448l32-96 160 0z" />
    </Icon>
);

export default FileUser;