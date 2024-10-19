
import { Icon } from "../../index";

/**
 * A component that renders the `envelope` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=sharp-regular envelope}
 * @preview ![envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMTUwLjhsMjA4IDE0MyAyMDgtMTQzIDAtMzguOEw0OCAxMTJsMCAzOC44ek00NjQgMjA5TDI1NiAzNTIgNDggMjA5bDAgMTkxIDQxNiAwIDAtMTkxek0wIDQwMEwwIDE3NmwwLTY0TDAgNjRsNDggMCA0MTYgMCA0OCAwIDAgNDggMCA2NCAwIDIyNCAwIDQ4LTQ4IDBMNDggNDQ4IDAgNDQ4bDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 150.8l208 143 208-143 0-38.8L48 112l0 38.8zM464 209L256 352 48 209l0 191 416 0 0-191zM0 400L0 176l0-64L0 64l48 0 416 0 48 0 0 48 0 64 0 224 0 48-48 0L48 448 0 448l0-48z" />
    </Icon>
);

export default Envelope;