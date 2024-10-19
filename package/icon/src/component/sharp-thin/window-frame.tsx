
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=sharp-thin window-frame}
 * @preview ![window-frame](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQ4IDI1NmwwIDI0MEw0OCA0OTZsMC0yNDAgMjAwIDB6bTE2IDI0MGwwLTI0MCAyMDAgMCAwIDI0MC0yMDAgMHptMjE2IDBsMC00ODAgMC0xNkw0NjQgMCA0OCAwIDMyIDBsMCAxNiAwIDQ4MEw4IDQ5NmwtOCAwIDAgMTYgOCAwIDI0IDAgMTYgMCA0MTYgMCAxNiAwIDI0IDAgOCAwIDAtMTYtOCAwLTI0IDB6TTQ2NCAyNDBsLTIwMCAwIDAtMjI0IDIwMCAwIDAgMjI0ek00OCAxNmwyMDAgMCAwIDIyNEw0OCAyNDAgNDggMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const WindowFrame: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 256l0 240L48 496l0-240 200 0zm16 240l0-240 200 0 0 240-200 0zm216 0l0-480 0-16L464 0 48 0 32 0l0 16 0 480L8 496l-8 0 0 16 8 0 24 0 16 0 416 0 16 0 24 0 8 0 0-16-8 0-24 0zM464 240l-200 0 0-224 200 0 0 224zM48 16l200 0 0 224L48 240 48 16z" />
    </Icon>
);

export default WindowFrame;