
import { Icon } from "../../index";

/**
 * A component that renders the `cross` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=sharp-solid cross}
 * @preview ![cross](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDBMMTI4IDBsMCAxMjhMMCAxMjggMCAyNTZsMTI4IDAgMCAyNTYgMTI4IDAgMC0yNTYgMTI4IDAgMC0xMjgtMTI4IDBMMjU2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Cross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 0L128 0l0 128L0 128 0 256l128 0 0 256 128 0 0-256 128 0 0-128-128 0L256 0z" />
    </Icon>
);

export default Cross;