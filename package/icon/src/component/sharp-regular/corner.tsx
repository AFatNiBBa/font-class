
import { Icon } from "../../index";

/**
 * A component that renders the `corner` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corner?s=sharp-regular corner}
 * @preview ![corner](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxNjBsMjQgMCA0MDAgMCAyNCAwIDAgMjQgMCAxNzYgMCAyNC00OCAwIDAtMjQgMC0xNTJMMjQgMjA4IDAgMjA4bDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Corner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 160l24 0 400 0 24 0 0 24 0 176 0 24-48 0 0-24 0-152L24 208 0 208l0-48z" />
    </Icon>
);

export default Corner;