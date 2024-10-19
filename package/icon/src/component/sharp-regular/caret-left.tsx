
import { Icon } from "../../index";

/**
 * A component that renders the `caret-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-left?s=sharp-regular caret-left}
 * @preview ![caret-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDE0NGwwLTQ4LTQ4IDBMMCAyNTYgMTQ0IDQxNmw0OCAwIDAtNDggMC0yMjR6TTE0NCAzNDQuMkw2NC42IDI1NiAxNDQgMTY3LjhsMCAxNzYuNXoiLz48L3N2Zz4=|width=32|height=32)
 */
const CaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M192 144l0-48-48 0L0 256 144 416l48 0 0-48 0-224zM144 344.2L64.6 256 144 167.8l0 176.5z" />
    </Icon>
);

export default CaretLeft;