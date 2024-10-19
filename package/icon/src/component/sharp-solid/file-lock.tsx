
import { Icon } from "../../index";

/**
 * A component that renders the `file-lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-lock?s=sharp-solid file-lock}
 * @preview ![file-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAwTDIyNCAwbDAgMTYwIDE2MCAwIDAgMzMuNmMtMTkuOCAyMC4yLTMyIDQ3LjktMzIgNzguNGwwIDE1LjctMzIgMEwzMjAgNTEyIDAgNTEyIDAgMHpNMzg0IDEyOGwtMTI4IDBMMjU2IDAgMzg0IDEyOHptODAgMTEyYy0xNy43IDAtMzIgMTQuMy0zMiAzMmwwIDQ4IDY0IDAgMC00OGMwLTE3LjctMTQuMy0zMi0zMi0zMnptLTgwIDMyYzAtNDQuMiAzNS44LTgwIDgwLTgwczgwIDM1LjggODAgODBsMCA0OCAzMiAwIDAgMTkyLTIyNCAwIDAtMTkyIDMyIDAgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FileLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L224 0l0 160 160 0 0 33.6c-19.8 20.2-32 47.9-32 78.4l0 15.7-32 0L320 512 0 512 0 0zM384 128l-128 0L256 0 384 128zm80 112c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default FileLock;