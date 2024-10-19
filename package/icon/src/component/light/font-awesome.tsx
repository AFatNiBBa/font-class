
import { Icon } from "../../index";

/**
 * A component that renders the `font-awesome` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-awesome?s=light font-awesome}
 * @preview ![font-awesome](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMzJhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0em01NS41IDY0YzUuNC05LjQgOC42LTIwLjMgOC42LTMyQzEyOCAyOC43IDk5LjMgMCA2NCAwUzAgMjguNyAwIDY0YzAgMjMuNyAxMi45IDQ0LjQgMzIgNTUuNGwwIDguNiAwIDI4OCAwIDMyIDAgNjQgMzIgMCAwLTY0IDQwNS42IDBjMTQuNiAwIDI2LjQtMTEuOCAyNi40LTI2LjRjMC0zLjctLjgtNy4zLTIuMy0xMC43TDQzMiAyNzJsNjEuNy0xMzguOWMxLjUtMy40IDIuMy03IDIuMy0xMC43YzAtMTQuNi0xMS44LTI2LjQtMjYuNC0yNi40TDExOS40IDk2ek02NCAxMjhsMzk3IDBMNDAyLjggMjU5Yy0zLjcgOC4zLTMuNyAxNy43IDAgMjZMNDYxIDQxNiA2NCA0MTZsMC0yODh6Ii8+PC9zdmc+|width=32|height=32)
 */
const FontAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm55.5 64c5.4-9.4 8.6-20.3 8.6-32C128 28.7 99.3 0 64 0S0 28.7 0 64c0 23.7 12.9 44.4 32 55.4l0 8.6 0 288 0 32 0 64 32 0 0-64 405.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L119.4 96zM64 128l397 0L402.8 259c-3.7 8.3-3.7 17.7 0 26L461 416 64 416l0-288z" />
    </Icon>
);

export default FontAwesome;