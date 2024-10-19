
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-circle-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-xmark?s=sharp-duotone-solid file-circle-xmark}
 * @preview ![file-circle-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAzOC42QzMxMC4xIDIxOS41IDI1NiAyODcuNCAyNTYgMzY4YzAgNTkuNSAyOS42IDExMi4xIDc0LjggMTQ0TDAgNTEyIDAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxNjBMMjI0IDBsMCAxNjAgMTYwIDB6bTQ4IDM1MmExNDQgMTQ0IDAgMSAwIDAtMjg4IDE0NCAxNDQgMCAxIDAgMCAyODh6bTU5LjMtMTgwLjdMNDU0LjYgMzY4bDM2LjcgMzYuN0w1MDIuNiA0MTYgNDgwIDQzOC42bC0xMS4zLTExLjNMNDMyIDM5MC42bC0zNi43IDM2LjdMMzg0IDQzOC42IDM2MS40IDQxNmwxMS4zLTExLjNMNDA5LjQgMzY4bC0zNi43LTM2LjdMMzYxLjQgMzIwIDM4NCAyOTcuNGwxMS4zIDExLjNMNDMyIDM0NS40bDM2LjctMzYuN0w0ODAgMjk3LjQgNTAyLjYgMzIwbC0xMS4zIDExLjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const FileCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 38.6C310.1 219.5 256 287.4 256 368c0 59.5 29.6 112.1 74.8 144L0 512 0 0z" />
            <path d="M384 160L224 0l0 160 160 0zm48 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm59.3-180.7L454.6 368l36.7 36.7L502.6 416 480 438.6l-11.3-11.3L432 390.6l-36.7 36.7L384 438.6 361.4 416l11.3-11.3L409.4 368l-36.7-36.7L361.4 320 384 297.4l11.3 11.3L432 345.4l36.7-36.7L480 297.4 502.6 320l-11.3 11.3z" />
    </Icon>
);

export default FileCircleXmark;