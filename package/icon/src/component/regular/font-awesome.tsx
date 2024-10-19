
import { Icon } from "../../index";

/**
 * A component that renders the `font-awesome` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-awesome?s=regular font-awesome}
 * @preview ![font-awesome](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTEuNyA5NkMxMDYuMyA4Ni44IDExNiA3MC41IDExNiA1MkMxMTYgMjMuMyA5Mi43IDAgNjQgMFMxMiAyMy4zIDEyIDUyYzAgMTYuNyA3LjggMzEuNSAyMCA0MWwwIDMgMCA0OCAwIDI1NiAwIDQ4IDAgNjQgNDggMCAwLTY0IDM4OS42IDBjMTQuNiAwIDI2LjQtMTEuOCAyNi40LTI2LjRjMC0zLjctLjgtNy4zLTIuMy0xMC43TDQzMiAyNzJsNjEuNy0xMzguOWMxLjUtMy40IDIuMy03IDIuMy0xMC43YzAtMTQuNi0xMS44LTI2LjQtMjYuNC0yNi40TDkxLjcgOTZ6TTgwIDQwMGwwLTI1NiAzNTYuNCAwTDM4OC4xIDI1Mi41Yy01LjUgMTIuNC01LjUgMjYuNiAwIDM5TDQzNi40IDQwMCA4MCA0MDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const FontAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M91.7 96C106.3 86.8 116 70.5 116 52C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 3 0 48 0 256 0 48 0 64 48 0 0-64 389.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L91.7 96zM80 400l0-256 356.4 0L388.1 252.5c-5.5 12.4-5.5 26.6 0 39L436.4 400 80 400z" />
    </Icon>
);

export default FontAwesome;