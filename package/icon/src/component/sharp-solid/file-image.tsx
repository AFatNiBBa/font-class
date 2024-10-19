
import { Icon } from "../../index";

/**
 * A component that renders the `file-image` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-image?s=sharp-solid file-image}
 * @preview ![file-image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDBMMCAwIDAgNTEybDM4NCAwIDAtMzUyLTE2MCAwTDIyNCAwem0zMiAwbDAgMTI4IDEyOCAwTDI1NiAwek05NiAyMjRhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0ek0zMjAgNDQ4bC0xMjggMC02NCAwLTY0IDAgMC0zMiA2NC04OCAzMi41IDQ0LjdMMjI0IDI4OGw5NiAxMjggMCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const FileImage: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM96 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM320 448l-128 0-64 0-64 0 0-32 64-88 32.5 44.7L224 288l96 128 0 32z" />
    </Icon>
);

export default FileImage;