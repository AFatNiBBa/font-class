
import { Icon } from "../../index";

/**
 * A component that renders the `sort-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-down?s=sharp-light sort-down}
 * @preview ![sort-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMzIwbDI1NiAwIDAgMS44TDE2MCA0MzcgMzIgMzIxLjhsMC0xLjh6bTAtMzJMMCAyODhsMCAzMiAwIDE2TDE2MCA0ODAgMzIwIDMzNmwwLTE2IDAtMzItMzIgMEwzMiAyODh6Ii8+PC9zdmc+|width=32|height=32)
 */
const SortDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 320l256 0 0 1.8L160 437 32 321.8l0-1.8zm0-32L0 288l0 32 0 16L160 480 320 336l0-16 0-32-32 0L32 288z" />
    </Icon>
);

export default SortDown;