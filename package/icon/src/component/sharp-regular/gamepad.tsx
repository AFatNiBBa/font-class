
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad?s=sharp-regular gamepad}
 * @preview ![gamepad](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMTEybDAgMjg4IDU0NCAwIDAtMjg4TDQ4IDExMnpNMCA2NGw0OCAwIDU0NCAwIDQ4IDAgMCA0OCAwIDI4OCAwIDQ4LTQ4IDBMNDggNDQ4IDAgNDQ4bDAtNDhMMCAxMTIgMCA2NHpNMjMyIDIwMGwwIDMyIDMyIDAgMjQgMCAwIDQ4LTI0IDAtMzIgMCAwIDMyIDAgMjQtNDggMCAwLTI0IDAtMzItMzIgMC0yNCAwIDAtNDggMjQgMCAzMiAwIDAtMzIgMC0yNCA0OCAwIDAgMjR6bTE2OCA3MmEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6bTMyLTY0YTMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAxIDEgLTY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Gamepad: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 112l0 288 544 0 0-288L48 112zM0 64l48 0 544 0 48 0 0 48 0 288 0 48-48 0L48 448 0 448l0-48L0 112 0 64zM232 200l0 32 32 0 24 0 0 48-24 0-32 0 0 32 0 24-48 0 0-24 0-32-32 0-24 0 0-48 24 0 32 0 0-32 0-24 48 0 0 24zm168 72a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm32-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Gamepad;