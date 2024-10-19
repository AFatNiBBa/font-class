
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=sharp-light browser}
 * @preview ![browser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDY0bDAgNjQgMzIwIDAgMC02NEwxNjAgNjR6bS0zMiAwTDMyIDY0bDAgNjQgOTYgMCAwLTY0ek0zMiAxNjBsMCAyODggNDQ4IDAgMC0yODgtMzM2IDBMMzIgMTYwek0wIDMybDMyIDAgNDQ4IDAgMzIgMCAwIDMyIDAgMzg0IDAgMzItMzIgMEwzMiA0ODAgMCA0ODBsMC0zMkwwIDY0IDAgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 64l0 64 320 0 0-64L160 64zm-32 0L32 64l0 64 96 0 0-64zM32 160l0 288 448 0 0-288-336 0L32 160zM0 32l32 0 448 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default Browser;