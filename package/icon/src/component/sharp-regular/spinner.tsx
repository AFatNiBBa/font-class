
import { Icon } from "../../index";

/**
 * A component that renders the `spinner` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner?s=sharp-regular spinner}
 * @preview ![spinner](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjg4IDBsMCA2NC02NCAwIDAtNjQgNjQgMHptODEuMSA0MTQuNGw0NS4zLTQ1LjMgNDUuMyA0NS4zLTQ1LjMgNDUuMy00NS4zLTQ1LjN6TTIyNCA0NDhsNjQgMCAwIDY0LTY0IDAgMC02NHpNNTIuNCA5Ny42TDk3LjYgNTIuNGw0NS4zIDQ1LjNMOTcuNiAxNDIuOSA1Mi40IDk3LjZ6TTY0IDIyNGwwIDY0TDAgMjg4bDAtNjQgNjQgMHpNNTIuNCA0MTQuNGw0NS4zLTQ1LjMgNDUuMyA0NS4zTDk3LjYgNDU5LjYgNTIuNCA0MTQuNHpNNTEyIDIyNGwwIDY0LTY0IDAgMC02NCA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Spinner: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 0l0 64-64 0 0-64 64 0zm81.1 414.4l45.3-45.3 45.3 45.3-45.3 45.3-45.3-45.3zM224 448l64 0 0 64-64 0 0-64zM52.4 97.6L97.6 52.4l45.3 45.3L97.6 142.9 52.4 97.6zM64 224l0 64L0 288l0-64 64 0zM52.4 414.4l45.3-45.3 45.3 45.3L97.6 459.6 52.4 414.4zM512 224l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default Spinner;