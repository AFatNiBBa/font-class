
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-circle-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-exclamation?s=sharp-duotone-solid file-circle-exclamation}
 * @preview ![file-circle-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAzOC42QzMxMC4xIDIxOS41IDI1NiAyODcuNCAyNTYgMzY4YzAgNTkuNSAyOS42IDExMi4xIDc0LjggMTQ0TDAgNTEyIDAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxNjBMMjI0IDBsMCAxNjAgMTYwIDB6bTQ4IDM1MmExNDQgMTQ0IDAgMSAwIDAtMjg4IDE0NCAxNDQgMCAxIDAgMCAyODh6bTE2LTY0bC0zMiAwIDAtMzIgMzIgMCAwIDMyem0wLTE3NmwwIDE2IDAgODAgMCAxNi0zMiAwIDAtMTYgMC04MCAwLTE2IDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const FileCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 38.6C310.1 219.5 256 287.4 256 368c0 59.5 29.6 112.1 74.8 144L0 512 0 0z" />
            <path d="M384 160L224 0l0 160 160 0zm48 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-64l-32 0 0-32 32 0 0 32zm0-176l0 16 0 80 0 16-32 0 0-16 0-80 0-16 32 0z" />
    </Icon>
);

export default FileCircleExclamation;