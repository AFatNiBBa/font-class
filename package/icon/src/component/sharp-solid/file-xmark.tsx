
import { Icon } from "../../index";

/**
 * A component that renders the `file-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-xmark?s=sharp-solid file-xmark}
 * @preview ![file-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDBMMCAwIDAgNTEybDM4NCAwIDAtMzUyLTE2MCAwTDIyNCAwem0zMiAwbDAgMTI4IDEyOCAwTDI1NiAwem0zMy45IDI1NmwtMTcgMTctNDcgNDcgNDcgNDcgMTcgMTdMMjU2IDQxNy45bC0xNy0xNy00Ny00Ny00NyA0Ny0xNyAxN0w5NC4xIDM4NGwxNy0xNyA0Ny00Ny00Ny00Ny0xNy0xN0wxMjggMjIyLjFsMTcgMTcgNDcgNDcgNDctNDcgMTctMTdMMjg5LjkgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FileXmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zm33.9 256l-17 17-47 47 47 47 17 17L256 417.9l-17-17-47-47-47 47-17 17L94.1 384l17-17 47-47-47-47-17-17L128 222.1l17 17 47 47 47-47 17-17L289.9 256z" />
    </Icon>
);

export default FileXmark;