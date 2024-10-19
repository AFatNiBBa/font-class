
import { Icon } from "../../index";

/**
 * A component that renders the `square-quarters` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quarters?s=solid square-quarters}
 * @preview ![square-quarters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA5NkMwIDYwLjcgMjguNyAzMiA2NCAzMmwzMjAgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDMyMGMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCA0ODBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgOTZ6bTY0IDBMMjI0IDI1NiAzODQgOTYgNjQgOTZ6bTAgMzIwbDMyMCAwTDIyNCAyNTYgNjQgNDE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareQuarters: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 0L224 256 384 96 64 96zm0 320l320 0L224 256 64 416z" />
    </Icon>
);

export default SquareQuarters;