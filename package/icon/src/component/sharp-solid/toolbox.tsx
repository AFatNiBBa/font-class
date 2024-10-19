
import { Icon } from "../../index";

/**
 * A component that renders the `toolbox` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toolbox?s=sharp-solid toolbox}
 * @preview ![toolbox](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTUyIDMybC0yNCAwIDAgMjQgMCA3Mi00OCAwTDAgMjA4IDAgMzIwbDEyOCAwIDAtMzIgMC0zMiA2NCAwIDAgMzIgMCAzMiAxMjggMCAwLTMyIDAtMzIgNjQgMCAwIDMyIDAgMzIgMTI4IDAgMC0xMTItODAtODAtNDggMCAwLTcyIDAtMjQtMjQgMEwxNTIgMzJ6bTE4NCA5NmwtMTYwIDAgMC00OCAxNjAgMCAwIDQ4ek0wIDQ4MGw1MTIgMCAwLTEyOC0xMjggMCAwIDMyLTY0IDAgMC0zMi0xMjggMCAwIDMyLTY0IDAgMC0zMkwwIDM1MiAwIDQ4MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Toolbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M152 32l-24 0 0 24 0 72-48 0L0 208 0 320l128 0 0-32 0-32 64 0 0 32 0 32 128 0 0-32 0-32 64 0 0 32 0 32 128 0 0-112-80-80-48 0 0-72 0-24-24 0L152 32zm184 96l-160 0 0-48 160 0 0 48zM0 480l512 0 0-128-128 0 0 32-64 0 0-32-128 0 0 32-64 0 0-32L0 352 0 480z" />
    </Icon>
);

export default Toolbox;