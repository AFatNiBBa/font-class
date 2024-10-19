
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-dashed-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-dashed-line?s=sharp-duotone-solid file-dashed-line}
 * @preview ![file-dashed-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMGwwIDI1NiAzODQgMCAwLTk2LTE2MCAwTDM1MiAwIDEyOCAwem0wIDM2OGwwIDE0NCAzODQgMCAwLTE0NC0zODQgMHpNMzg0IDBsMCAxMjggMTI4IDBMMzg0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAyODhsMjQgMCAxMTIgMCAyNCAwIDAgNDgtMjQgMEw1NiAzMzZsLTI0IDAgMC00OHptMjI0IDBsMjQgMCA4MCAwIDI0IDAgMCA0OC0yNCAwLTgwIDAtMjQgMCAwLTQ4em0xOTIgMGwyNCAwIDExMiAwIDI0IDAgMCA0OC0yNCAwLTExMiAwLTI0IDAgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FileDashedLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 0l0 256 384 0 0-96-160 0L352 0 128 0zm0 368l0 144 384 0 0-144-384 0zM384 0l0 128 128 0L384 0z" />
            <path d="M32 288l24 0 112 0 24 0 0 48-24 0L56 336l-24 0 0-48zm224 0l24 0 80 0 24 0 0 48-24 0-80 0-24 0 0-48zm192 0l24 0 112 0 24 0 0 48-24 0-112 0-24 0 0-48z" />
    </Icon>
);

export default FileDashedLine;