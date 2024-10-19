
import { Icon } from "../../index";

/**
 * A component that renders the `square-quarters` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quarters?s=sharp-solid square-quarters}
 * @preview ![square-quarters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmw2NCAwIDMyMCAwIDY0IDAgMCA2NCAwIDMyMCAwIDY0LTY0IDBMNjQgNDgwIDAgNDgwbDAtNjRMMCA5NiAwIDMyek02NCA5NkwyMjQgMjU2IDM4NCA5NiA2NCA5NnptMCAzMjBsMzIwIDBMMjI0IDI1NiA2NCA0MTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareQuarters: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l64 0 320 0 64 0 0 64 0 320 0 64-64 0L64 480 0 480l0-64L0 96 0 32zM64 96L224 256 384 96 64 96zm0 320l320 0L224 256 64 416z" />
    </Icon>
);

export default SquareQuarters;