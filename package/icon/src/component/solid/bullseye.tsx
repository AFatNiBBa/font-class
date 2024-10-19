
import { Icon } from "../../index";

/**
 * A component that renders the `bullseye` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye?s=solid bullseye}
 * @preview ![bullseye](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDI1NkExOTIgMTkyIDAgMSAwIDY0IDI1NmExOTIgMTkyIDAgMSAwIDM4NCAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6bTI1NiA4MGE4MCA4MCAwIDEgMCAwLTE2MCA4MCA4MCAwIDEgMCAwIDE2MHptMC0yMjRhMTQ0IDE0NCAwIDEgMSAwIDI4OCAxNDQgMTQ0IDAgMSAxIDAtMjg4ek0yMjQgMjU2YTMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAxIDEgLTY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Bullseye: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Bullseye;