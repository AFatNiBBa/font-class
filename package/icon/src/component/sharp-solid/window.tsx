
import { Icon } from "../../index";

/**
 * A component that renders the `window` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window?s=sharp-solid window}
 * @preview ![window](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDMyTDAgMzIgMCA0ODBsNTEyIDAgMC00NDh6TTEyOCA5NmwwIDY0LTY0IDAgMC02NCA2NCAwem0zMiAwbDY0IDAgMCA2NC02NCAwIDAtNjR6bTE2MCAwbDAgNjQtNjQgMCAwLTY0IDY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Window: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32L0 32 0 480l512 0 0-448zM128 96l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default Window;