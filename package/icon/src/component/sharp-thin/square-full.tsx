
import { Icon } from "../../index";

/**
 * A component that renders the `square-full` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-full?s=sharp-thin square-full}
 * @preview ![square-full](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk2IDE2bDAgNDgwTDE2IDQ5NiAxNiAxNmw0ODAgMHpNMTYgMEwwIDAgMCAxNiAwIDQ5NmwwIDE2IDE2IDAgNDgwIDAgMTYgMCAwLTE2IDAtNDgwIDAtMTZMNDk2IDAgMTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 16l0 480L16 496 16 16l480 0zM16 0L0 0 0 16 0 496l0 16 16 0 480 0 16 0 0-16 0-480 0-16L496 0 16 0z" />
    </Icon>
);

export default SquareFull;