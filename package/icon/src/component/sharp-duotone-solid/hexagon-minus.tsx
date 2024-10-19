
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-minus?s=sharp-duotone-solid hexagon-minus}
 * @preview ![hexagon-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkwxMjggMzJsMjU2IDBMNTEyIDI1NiAzODQgNDgwbC0yNTYgMEwwIDI1NnptMTYwLTI0bDAgNDggMjQgMCAxNDQgMCAyNCAwIDAtNDgtMjQgMC0xNDQgMC0yNCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDIzMmwyNCAwIDE0NCAwIDI0IDAgMCA0OC0yNCAwLTE0NCAwLTI0IDAgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HexagonMinus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L128 32l256 0L512 256 384 480l-256 0L0 256zm160-24l0 48 24 0 144 0 24 0 0-48-24 0-144 0-24 0z" />
            <path d="M160 232l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
    </Icon>
);

export default HexagonMinus;