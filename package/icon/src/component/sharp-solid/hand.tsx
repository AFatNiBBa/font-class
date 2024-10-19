
import { Icon } from "../../index";

/**
 * A component that renders the `hand` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand?s=sharp-solid hand}
 * @preview ![hand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjg4IDMybDAtMzJMMjI0IDBsMCAzMiAwIDIyNC0zMiAwIDAtMTkyIDAtMzItNjQgMCAwIDMyIDAgMjcyYzAgMS41IDAgMy4xIC4xIDQuNkw4NC41IDI5OS4xbC0yOS0yNy42TC4zIDMyOS40bDI5IDI3LjYgOTUuNSA5MWM0My4xIDQxLjEgMTAwLjQgNjQgMTYwIDY0bDE5LjIgMGM5Ny4yIDAgMTc2LTc4LjggMTc2LTE3NmwwLTIwOCAwLTMyLTY0IDAgMCAzMiAwIDEyOC0zMiAwIDAtMTkyIDAtMzItNjQgMCAwIDMyIDAgMTkyLTMyIDAgMC0yMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Hand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0-32L224 0l0 32 0 224-32 0 0-192 0-32-64 0 0 32 0 272c0 1.5 0 3.1 .1 4.6L84.5 299.1l-29-27.6L.3 329.4l29 27.6 95.5 91c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208 0-32-64 0 0 32 0 128-32 0 0-192 0-32-64 0 0 32 0 192-32 0 0-224z" />
    </Icon>
);

export default Hand;