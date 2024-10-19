
import { Icon } from "../../index";

/**
 * A component that renders the `window-flip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-flip?s=sharp-solid window-flip}
 * @preview ![window-flip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmw1MTIgMCAwIDQ0OEwwIDQ4MCAwIDMyek0zODQgOTZsMCA2NCA2NCAwIDAtNjQtNjQgMHptLTMyIDBsLTY0IDAgMCA2NCA2NCAwIDAtNjR6TTE5MiA5NmwwIDY0IDY0IDAgMC02NC02NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const WindowFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 448L0 480 0 32zM384 96l0 64 64 0 0-64-64 0zm-32 0l-64 0 0 64 64 0 0-64zM192 96l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default WindowFlip;