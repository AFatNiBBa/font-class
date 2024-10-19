
import { Icon } from "../../index";

/**
 * A component that renders the `square-quarters` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quarters?s=sharp-regular square-quarters}
 * @preview ![square-quarters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmw0OCAwIDM1MiAwIDQ4IDAgMCA0OCAwIDM1MiAwIDQ4LTQ4IDBMNDggNDgwIDAgNDgwbDAtNDhMMCA4MCAwIDMyek00OCA4MEwyMjQgMjU2IDQwMCA4MCA0OCA4MHptMCAzNTJsMzUyIDBMMjI0IDI1NiA0OCA0MzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareQuarters: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM48 80L224 256 400 80 48 80zm0 352l352 0L224 256 48 432z" />
    </Icon>
);

export default SquareQuarters;