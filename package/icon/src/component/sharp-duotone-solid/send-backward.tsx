
import { Icon, generic } from "../../index";

/**
 * A component that renders the `send-backward` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-backward?s=sharp-duotone-solid send-backward}
 * @preview ![send-backward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMTYwbDE5MiAwIDE2MCAwIDAgMzUyLTM1MiAwIDAtMTYwIDAtMTkyem02NCA2NGwwIDIyNCAyMjQgMCAwLTIyNC0yMjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiAwTDAgMCAwIDM1MmwxNjAgMCAwLTE5MiAxOTIgMEwzNTIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SendBackward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 160l192 0 160 0 0 352-352 0 0-160 0-192zm64 64l0 224 224 0 0-224-224 0z" />
            <path d="M352 0L0 0 0 352l160 0 0-192 192 0L352 0z" />
    </Icon>
);

export default SendBackward;