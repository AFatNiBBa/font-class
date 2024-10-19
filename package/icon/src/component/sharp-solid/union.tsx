
import { Icon } from "../../index";

/**
 * A component that renders the `union` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/union?s=sharp-solid union}
 * @preview ![union](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyODhMMCAzMmw2NCAwIDAgMjU2YzAgNzAuNyA1Ny4zIDEyOCAxMjggMTI4czEyOC01Ny4zIDEyOC0xMjhsMC0yNTYgNjQgMCAwIDI1NmMwIDEwNi04NiAxOTItMTkyIDE5MlMwIDM5NCAwIDI4OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Union: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 288L0 32l64 0 0 256c0 70.7 57.3 128 128 128s128-57.3 128-128l0-256 64 0 0 256c0 106-86 192-192 192S0 394 0 288z" />
    </Icon>
);

export default Union;