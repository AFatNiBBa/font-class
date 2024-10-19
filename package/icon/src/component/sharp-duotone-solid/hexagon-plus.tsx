
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-plus?s=sharp-duotone-solid hexagon-plus}
 * @preview ![hexagon-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkwxMjggMzJsMjU2IDBMNTEyIDI1NiAzODQgNDgwbC0yNTYgMEwwIDI1NnptMTQ0LTI0bDAgNDggMjQgMCA2NCAwIDAgNjQgMCAyNCA0OCAwIDAtMjQgMC02NCA2NCAwIDI0IDAgMC00OC0yNCAwLTY0IDAgMC02NCAwLTI0LTQ4IDAgMCAyNCAwIDY0LTY0IDAtMjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIzMiAzNDRsMCAyNCA0OCAwIDAtMjQgMC02NCA2NCAwIDI0IDAgMC00OC0yNCAwLTY0IDAgMC02NCAwLTI0LTQ4IDAgMCAyNCAwIDY0LTY0IDAtMjQgMCAwIDQ4IDI0IDAgNjQgMCAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HexagonPlus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L128 32l256 0L512 256 384 480l-256 0L0 256zm144-24l0 48 24 0 64 0 0 64 0 24 48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24-48 0 0 24 0 64-64 0-24 0z" />
            <path d="M232 344l0 24 48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24-48 0 0 24 0 64-64 0-24 0 0 48 24 0 64 0 0 64z" />
    </Icon>
);

export default HexagonPlus;