
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-open` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open?s=sharp-solid envelope-open}
 * @preview ![envelope-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMjQ2LjlMMjU2IDM4NCA0NDggMjQ2LjlsMC0yMi45TDI1NiA4MCA2NCAyMjRsMCAyMi45ek0wIDE5MkwyNTYgMCA1MTIgMTkybDAgMjU2IDAgNjQtNjQgMEw2NCA1MTIgMCA1MTJsMC02NEwwIDE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const EnvelopeOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 246.9L256 384 448 246.9l0-22.9L256 80 64 224l0 22.9zM0 192L256 0 512 192l0 256 0 64-64 0L64 512 0 512l0-64L0 192z" />
    </Icon>
);

export default EnvelopeOpen;