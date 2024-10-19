
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-plus-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-plus-minus?s=sharp-duotone-solid file-plus-minus}
 * @preview ![file-plus-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAzNTJMMCA1MTIgMCAwek0xMTIgMjU2bDAgMzIgMTYgMCA0OCAwIDAgNDggMCAxNiAzMiAwIDAtMTYgMC00OCA0OCAwIDE2IDAgMC0zMi0xNiAwLTQ4IDAgMC00OCAwLTE2LTMyIDAgMCAxNiAwIDQ4LTQ4IDAtMTYgMHptMCAxMjhsMCAzMiAxNiAwIDEyOCAwIDE2IDAgMC0zMi0xNiAwLTEyOCAwLTE2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMTYwTDIyNCAwbDAgMTYwIDE2MCAwek0yMDggMjA4bDAtMTYtMzIgMCAwIDE2IDAgNDgtNDggMC0xNiAwIDAgMzIgMTYgMCA0OCAwIDAgNDggMCAxNiAzMiAwIDAtMTYgMC00OCA0OCAwIDE2IDAgMC0zMi0xNiAwLTQ4IDAgMC00OHpNMTI4IDM4NGwtMTYgMCAwIDMyIDE2IDAgMTI4IDAgMTYgMCAwLTMyLTE2IDAtMTI4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const FilePlusMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM112 256l0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48 0-16-32 0 0 16 0 48-48 0-16 0zm0 128l0 32 16 0 128 0 16 0 0-32-16 0-128 0-16 0z" />
            <path d="M384 160L224 0l0 160 160 0zM208 208l0-16-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48zM128 384l-16 0 0 32 16 0 128 0 16 0 0-32-16 0-128 0z" />
    </Icon>
);

export default FilePlusMinus;