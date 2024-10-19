
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-check?s=sharp-duotone-solid file-circle-check}
 * @preview ![file-circle-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAzOC42QzMxMC4xIDIxOS41IDI1NiAyODcuNCAyNTYgMzY4YzAgNTkuNSAyOS42IDExMi4xIDc0LjggMTQ0TDAgNTEyIDAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxNjBsLTE2MCAwTDIyNCAwIDM4NCAxNjB6TTI4OCAzNjhhMTQ0IDE0NCAwIDEgMSAyODggMCAxNDQgMTQ0IDAgMSAxIC0yODggMHptMjIyLjYtMzJMNDg4IDMxMy40bC0xMS4zIDExLjNMNDE2IDM4NS40bC0yOC43LTI4LjdMMzc2IDM0NS40IDM1My40IDM2OGwxMS4zIDExLjMgNDAgNDBMNDE2IDQzMC42bDExLjMtMTEuMyA3Mi03Mkw1MTAuNiAzMzZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FileCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 38.6C310.1 219.5 256 287.4 256 368c0 59.5 29.6 112.1 74.8 144L0 512 0 0z" />
            <path d="M384 160l-160 0L224 0 384 160zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm222.6-32L488 313.4l-11.3 11.3L416 385.4l-28.7-28.7L376 345.4 353.4 368l11.3 11.3 40 40L416 430.6l11.3-11.3 72-72L510.6 336z" />
    </Icon>
);

export default FileCircleCheck;