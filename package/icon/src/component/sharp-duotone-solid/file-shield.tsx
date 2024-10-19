
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-shield` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-shield?s=sharp-duotone-solid file-shield}
 * @preview ![file-shield](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCA0OC4zTDI1NiAyNTcuOGwwIDM4LjJjMCA3Ni42IDM0LjMgMTY0LjggMTA2LjEgMjE2TDAgNTEyIDAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxNjBMMjI0IDBsMCAxNjAgMTYwIDB6TTUyNy4zIDMxMi40Yy01LjIgNjEtMzguOCAxMjEuNy05NS4zIDE0OGwwLTE4NC45IDk1LjMgMzYuOXpNNDMyIDUxMmM5Ni0zMiAxNDQtMTMwLjIgMTQ0LTIxNmwwLTE2LjJMNDMyIDIyNCAyODggMjc5LjhsMCAxNi4yYzAgODUuOCA0OCAxODQgMTQ0IDIxNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const FileShield: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 48.3L256 257.8l0 38.2c0 76.6 34.3 164.8 106.1 216L0 512 0 0z" />
            <path d="M384 160L224 0l0 160 160 0zM527.3 312.4c-5.2 61-38.8 121.7-95.3 148l0-184.9 95.3 36.9zM432 512c96-32 144-130.2 144-216l0-16.2L432 224 288 279.8l0 16.2c0 85.8 48 184 144 216z" />
    </Icon>
);

export default FileShield;