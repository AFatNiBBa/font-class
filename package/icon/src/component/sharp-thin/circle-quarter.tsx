
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter?s=sharp-thin circle-quarter}
 * @preview ![circle-quarter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYuNSAyNDBMMjQwIDI0MGwwLTIyMy41QzEyMC4yIDI0LjQgMjQuNCAxMjAuMiAxNi41IDI0MHptLTE2IDBDOC40IDExMS40IDExMS40IDguNCAyNDAgLjVjNS4zLS4zIDEwLjYtLjUgMTYtLjVsMCAxNiAwIDIyNCAwIDE2LTE2IDBMMTYgMjU2IDAgMjU2YzAtNS40IC4yLTEwLjcgLjUtMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleQuarter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16.5 240L240 240l0-223.5C120.2 24.4 24.4 120.2 16.5 240zm-16 0C8.4 111.4 111.4 8.4 240 .5c5.3-.3 10.6-.5 16-.5l0 16 0 224 0 16-16 0L16 256 0 256c0-5.4 .2-10.7 .5-16z" />
    </Icon>
);

export default CircleQuarter;