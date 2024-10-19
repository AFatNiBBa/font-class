
import { Icon } from "../../index";

/**
 * A component that renders the `caret-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-up?s=sharp-light caret-up}
 * @preview ![caret-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMjg4bDI1NiAwIDAtMS43TDE2MCAxNzEgMzIgMjg2LjJsMCAxLjd6bTAgMzJMMCAzMjBsMC0zMiAwLTE2TDE2MCAxMjggMzIwIDI3MmwwIDE2IDAgMzItMzIgMEwzMiAzMjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 288l256 0 0-1.7L160 171 32 286.2l0 1.7zm0 32L0 320l0-32 0-16L160 128 320 272l0 16 0 32-32 0L32 320z" />
    </Icon>
);

export default CaretUp;