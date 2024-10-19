
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shredder` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shredder?s=sharp-duotone-solid shredder}
 * @preview ![shredder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00MCAzODRsMCAxMDQgMCAyNCA0OCAwIDAtMjQgMC0xMDQtNDggMHpNNjQgMGwwIDE5MiAzODQgMCAwLTEyOEwzODQgMCA2NCAwem03MiAzODRsMCAxMDQgMCAyNCA0OCAwIDAtMjQgMC0xMDQtNDggMHptOTYgMGwwIDEwNCAwIDI0IDQ4IDAgMC0yNCAwLTEwNC00OCAwem05NiAwbDAgMTA0IDAgMjQgNDggMCAwLTI0IDAtMTA0LTQ4IDB6bTk2IDBsMCAxMDQgMCAyNCA0OCAwIDAtMjQgMC0xMDQtNDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiAxOTJMMCAxOTIgMCAzODRsNTEyIDAgMC0xOTJ6bS01NiA1NmwwIDQ4LTQ4IDAgMC00OCA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Shredder: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M40 384l0 104 0 24 48 0 0-24 0-104-48 0zM64 0l0 192 384 0 0-128L384 0 64 0zm72 384l0 104 0 24 48 0 0-24 0-104-48 0zm96 0l0 104 0 24 48 0 0-24 0-104-48 0zm96 0l0 104 0 24 48 0 0-24 0-104-48 0zm96 0l0 104 0 24 48 0 0-24 0-104-48 0z" />
            <path d="M512 192L0 192 0 384l512 0 0-192zm-56 56l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default Shredder;