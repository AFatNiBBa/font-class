
import { Icon } from "../../index";

/**
 * A component that renders the `file` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file?s=solid file}
 * @preview ![file](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NEMwIDI4LjcgMjguNyAwIDY0IDBMMjI0IDBsMCAxMjhjMCAxNy43IDE0LjMgMzIgMzIgMzJsMTI4IDAgMCAyODhjMCAzNS4zLTI4LjcgNjQtNjQgNjRMNjQgNTEyYy0zNS4zIDAtNjQtMjguNy02NC02NEwwIDY0em0zODQgNjRsLTEyOCAwTDI1NiAwIDM4NCAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const File: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
    </Icon>
);

export default File;