
import { Icon } from "../../index";

/**
 * A component that renders the `octagon` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon?s=sharp-thin octagon}
 * @preview ![octagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTY2LjYgNDk2bDE3OC43IDBMNDk2IDM0NS40bDAtMTc4LjdMMzQ1LjQgMTYgMTY2LjYgMTYgMTYgMTY2LjZsMCAxNzguN0wxNjYuNiA0OTZ6TTAgMTYwTDE2MCAwIDM1MiAwIDUxMiAxNjBsMCAxOTJMMzUyIDUxMmwtMTkyIDBMMCAzNTIgMCAxNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Octagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M166.6 496l178.7 0L496 345.4l0-178.7L345.4 16 166.6 16 16 166.6l0 178.7L166.6 496zM0 160L160 0 352 0 512 160l0 192L352 512l-192 0L0 352 0 160z" />
    </Icon>
);

export default Octagon;