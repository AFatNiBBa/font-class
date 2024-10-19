
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-circle-info` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-info?s=sharp-duotone-solid file-circle-info}
 * @preview ![file-circle-info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAzOC42QzMxMC4xIDIxOS41IDI1NiAyODcuNCAyNTYgMzY4YzAgNTkuNSAyOS42IDExMi4xIDc0LjggMTQ0TDAgNTEyIDAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxNjBMMjI0IDBsMCAxNjAgMTYwIDB6bTQ4IDM1MmExNDQgMTQ0IDAgMSAwIDAtMjg4IDE0NCAxNDQgMCAxIDAgMCAyODh6bTE1LjMtMjI0bDAgMzItMzIgMCAwLTMyIDMyIDB6bTEuMiA2NGwwIDE2IDAgNjQgMTUuNSAwIDAgMzItMTUuNSAwLS41IDAtMzIgMC0xNiAwIDAtMzIgMTYgMCAuNSAwIDAtNDgtLjUgMC0xNiAwIDAtMzIgMTYgMCAxNi41IDAgMTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FileCircleInfo: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 38.6C310.1 219.5 256 287.4 256 368c0 59.5 29.6 112.1 74.8 144L0 512 0 0z" />
            <path d="M384 160L224 0l0 160 160 0zm48 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm15.3-224l0 32-32 0 0-32 32 0zm1.2 64l0 16 0 64 15.5 0 0 32-15.5 0-.5 0-32 0-16 0 0-32 16 0 .5 0 0-48-.5 0-16 0 0-32 16 0 16.5 0 16 0z" />
    </Icon>
);

export default FileCircleInfo;