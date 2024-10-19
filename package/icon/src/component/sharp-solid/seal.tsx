
import { Icon } from "../../index";

/**
 * A component that renders the `seal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal?s=sharp-solid seal}
 * @preview ![seal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzMxIDc1TDI1NiAwIDE4MSA3NSA3NSA3NWwwIDEwNkwwIDI1Nmw3NSA3NSAwIDEwNiAxMDYgMCA3NSA3NSA3NS03NSAxMDYgMCAwLTEwNiA3NS03NS03NS03NSAwLTEwNkwzMzEgNzV6Ii8+PC9zdmc+|width=32|height=32)
 */
const Seal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M331 75L256 0 181 75 75 75l0 106L0 256l75 75 0 106 106 0 75 75 75-75 106 0 0-106 75-75-75-75 0-106L331 75z" />
    </Icon>
);

export default Seal;