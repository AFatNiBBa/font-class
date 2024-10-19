
import { Icon } from "../../index";

/**
 * A component that renders the `ditto` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ditto?s=sharp-solid ditto}
 * @preview ![ditto](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMkwzMiAyODhsNjQgMEwxMjggMzIgMCAzMnptMTkyIDBsMzIgMjU2IDY0IDBMMzIwIDMyIDE5MiAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Ditto: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 32L32 288l64 0L128 32 0 32zm192 0l32 256 64 0L320 32 192 32z" />
    </Icon>
);

export default Ditto;