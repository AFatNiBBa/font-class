
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation?s=sharp-light circle-exclamation}
 * @preview ![circle-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDMyYTIyNCAyMjQgMCAxIDEgMCA0NDggMjI0IDIyNCAwIDEgMSAwLTQ0OHptMCA0ODBBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyem0xNi0zODRsLTMyIDAgMCAxNiAwIDEyOCAwIDE2IDMyIDAgMC0xNiAwLTEyOCAwLTE2ek0yMzIgMzY4bDQ4IDAgMC00OC00OCAwIDAgNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm16-384l-32 0 0 16 0 128 0 16 32 0 0-16 0-128 0-16zM232 368l48 0 0-48-48 0 0 48z" />
    </Icon>
);

export default CircleExclamation;