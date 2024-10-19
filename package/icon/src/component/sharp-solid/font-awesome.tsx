
import { Icon } from "../../index";

/**
 * A component that renders the `font-awesome` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-awesome?s=sharp-solid font-awesome}
 * @preview ![font-awesome](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTEuNyA5NkMxMDYuMyA4Ni44IDExNiA3MC41IDExNiA1MkMxMTYgMjMuMyA5Mi43IDAgNjQgMFMxMiAyMy4zIDEyIDUyYzAgMTYuNyA3LjggMzEuNSAyMCA0MWwwIDMgMCAzNTIgMCA2NCA2NCAwIDAtNjQgNDAwIDAgMC0zMkw0MzIgMjcybDY0LTE0NCAwLTMyTDkxLjcgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FontAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M91.7 96C106.3 86.8 116 70.5 116 52C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 3 0 352 0 64 64 0 0-64 400 0 0-32L432 272l64-144 0-32L91.7 96z" />
    </Icon>
);

export default FontAwesome;