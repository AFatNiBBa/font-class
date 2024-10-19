
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-divide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-divide?s=sharp-duotone-solid hexagon-divide}
 * @preview ![hexagon-divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkwxMjggMzJsMjU2IDBMNTEyIDI1NiAzODQgNDgwbC0yNTYgMEwwIDI1NnptMTQ0LTI0bDAgNDggMjQgMCAxNzYgMCAyNCAwIDAtNDgtMjQgMC0xNzYgMC0yNCAwem04MC0xMDRsMCA2NCA2NCAwIDAtNjQtNjQgMHptMCAxOTJsMCA2NCA2NCAwIDAtNjQtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAxMjhsNjQgMCAwIDY0LTY0IDAgMC02NHpNMTQ0IDIzMmwyNCAwIDE3NiAwIDI0IDAgMCA0OC0yNCAwLTE3NiAwLTI0IDAgMC00OHptMTQ0IDg4bDAgNjQtNjQgMCAwLTY0IDY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const HexagonDivide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L128 32l256 0L512 256 384 480l-256 0L0 256zm144-24l0 48 24 0 176 0 24 0 0-48-24 0-176 0-24 0zm80-104l0 64 64 0 0-64-64 0zm0 192l0 64 64 0 0-64-64 0z" />
            <path d="M224 128l64 0 0 64-64 0 0-64zM144 232l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48zm144 88l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default HexagonDivide;