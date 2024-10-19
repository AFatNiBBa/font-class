
import { Icon } from "../../index";

/**
 * A component that renders the `folders` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folders?s=sharp-thin folders}
 * @preview ![folders](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzA0IDMybDY0IDY0IDE5MiAwIDE2IDAgMCAxNiAwIDI1NiAwIDE2LTE2IDAtNDQ4IDAtMTYgMCAwLTE2TDk2IDQ4bDAtMTYgMTYgMCAxOTIgMHptNjQgODBsLTYuNiAwLTQuNy00LjdMMjk3LjQgNDggMTEyIDQ4bDAgMzIwIDQ0OCAwIDAtMjU2LTE5MiAwek0xNiAxMjhsNDggMCAwIDE2LTQ4IDAgMCAzMjAgNDQ4IDAgMC00OCAxNiAwIDAgNDggMCAxNi0xNiAwTDE2IDQ4MCAwIDQ4MGwwLTE2TDAgMTQ0bDAtMTYgMTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Folders: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304 32l64 64 192 0 16 0 0 16 0 256 0 16-16 0-448 0-16 0 0-16L96 48l0-16 16 0 192 0zm64 80l-6.6 0-4.7-4.7L297.4 48 112 48l0 320 448 0 0-256-192 0zM16 128l48 0 0 16-48 0 0 320 448 0 0-48 16 0 0 48 0 16-16 0L16 480 0 480l0-16L0 144l0-16 16 0z" />
    </Icon>
);

export default Folders;