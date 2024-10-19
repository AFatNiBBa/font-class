
import { Icon } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=sharp-solid cowbell}
 * @preview ![cowbell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDBsMjQgMEwyOTYgMGwyNCAwIDAgMjQgMCA3MiA2NCAwIDY0IDMyMEwwIDQxNiA2NCA5Nmw2NCAwIDAtNzIgMC0yNHpNMjcyIDQ4bC05NiAwIDAgNDggOTYgMCAwLTQ4em0xNiA0MDBjMCAzNS4zLTI4LjcgNjQtNjQgNjRzLTY0LTI4LjctNjQtNjRsMTI4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Cowbell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0l24 0L296 0l24 0 0 24 0 72 64 0 64 320L0 416 64 96l64 0 0-72 0-24zM272 48l-96 0 0 48 96 0 0-48zm16 400c0 35.3-28.7 64-64 64s-64-28.7-64-64l128 0z" />
    </Icon>
);

export default Cowbell;