
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-off` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-off?s=sharp-solid toggle-off}
 * @preview ![toggle-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDEyOGwwIDI1Nkw2NCAzODRsMC0yNTYgNDQ4IDB6bTY0LTY0bC02NCAwTDY0IDY0IDAgNjRsMCA2NEwwIDM4NGwwIDY0IDY0IDAgNDQ4IDAgNjQgMCAwLTY0IDAtMjU2IDAtNjR6TTk2IDE2MGwwIDE5MiAxOTIgMCAwLTE5Mkw5NiAxNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ToggleOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 128l0 256L64 384l0-256 448 0zm64-64l-64 0L64 64 0 64l0 64L0 384l0 64 64 0 448 0 64 0 0-64 0-256 0-64zM96 160l0 192 192 0 0-192L96 160z" />
    </Icon>
);

export default ToggleOff;