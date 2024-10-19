
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=sharp-thin greater-than}
 * @preview ![greater-than](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOCA2Ny4xTDM3MS42IDI0OC44bDQuNCAyLjIgMCA5LjktNC40IDIuMkw4IDQ0NC45bDAtMTcuOUwzNTAuMSAyNTYgOCA4NC45IDggNjcuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const GreaterThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 67.1L371.6 248.8l4.4 2.2 0 9.9-4.4 2.2L8 444.9l0-17.9L350.1 256 8 84.9 8 67.1z" />
    </Icon>
);

export default GreaterThan;