
import { Icon } from "../../index";

/**
 * A component that renders the `triangle-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-exclamation?s=sharp-solid triangle-exclamation}
 * @preview ![triangle-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDMyTDAgNDgwbDUxMiAwTDI1NiAzMnptMjQgMTYwbDAgMjQgMCAxMTIgMCAyNC00OCAwIDAtMjQgMC0xMTIgMC0yNCA0OCAwek0yMzIgMzg0bDQ4IDAgMCA0OC00OCAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const TriangleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32L0 480l512 0L256 32zm24 160l0 24 0 112 0 24-48 0 0-24 0-112 0-24 48 0zM232 384l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default TriangleExclamation;