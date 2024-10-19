
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-left?s=sharp-regular circle-arrow-left}
 * @preview ![circle-arrow-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMjU2YTIwOCAyMDggMCAxIDEgNDE2IDBBMjA4IDIwOCAwIDEgMSA0OCAyNTZ6bTQ2NCAwQTI1NiAyNTYgMCAxIDAgMCAyNTZhMjU2IDI1NiAwIDEgMCA1MTIgMHpNMTE5IDIzOWwtMTcgMTcgMTcgMTcgODggODggMTcgMTdMMjU3LjkgMzQ0bC0xNy0xNy00Ny00N0wzNzYgMjgwbDI0IDAgMC00OC0yNCAwLTE4Mi4xIDAgNDctNDcgMTctMTdMMjI0IDEzNC4xbC0xNyAxNy04OCA4OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleArrowLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM119 239l-17 17 17 17 88 88 17 17L257.9 344l-17-17-47-47L376 280l24 0 0-48-24 0-182.1 0 47-47 17-17L224 134.1l-17 17-88 88z" />
    </Icon>
);

export default CircleArrowLeft;