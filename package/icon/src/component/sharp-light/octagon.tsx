
import { Icon } from "../../index";

/**
 * A component that renders the `octagon` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon?s=sharp-light octagon}
 * @preview ![octagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTczLjMgNDgwbDE2NS41IDBMNDgwIDMzOC43bDAtMTY1LjVMMzM4LjcgMzIgMTczLjMgMzIgMzIgMTczLjNsMCAxNjUuNUwxNzMuMyA0ODB6TTAgMTYwTDE2MCAwIDM1MiAwIDUxMiAxNjBsMCAxOTJMMzUyIDUxMmwtMTkyIDBMMCAzNTIgMCAxNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Octagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M173.3 480l165.5 0L480 338.7l0-165.5L338.7 32 173.3 32 32 173.3l0 165.5L173.3 480zM0 160L160 0 352 0 512 160l0 192L352 512l-192 0L0 352 0 160z" />
    </Icon>
);

export default Octagon;