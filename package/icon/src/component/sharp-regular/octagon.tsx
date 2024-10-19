
import { Icon } from "../../index";

/**
 * A component that renders the `octagon` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon?s=sharp-regular octagon}
 * @preview ![octagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTc5LjkgNDY0bDE1Mi4yIDBMNDY0IDMzMi4xbDAtMTUyLjJMMzMyLjEgNDggMTc5LjkgNDggNDggMTc5LjlsMCAxNTIuMkwxNzkuOSA0NjR6TTAgMTYwTDE2MCAwIDM1MiAwIDUxMiAxNjBsMCAxOTJMMzUyIDUxMmwtMTkyIDBMMCAzNTIgMCAxNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Octagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M179.9 464l152.2 0L464 332.1l0-152.2L332.1 48 179.9 48 48 179.9l0 152.2L179.9 464zM0 160L160 0 352 0 512 160l0 192L352 512l-192 0L0 352 0 160z" />
    </Icon>
);

export default Octagon;