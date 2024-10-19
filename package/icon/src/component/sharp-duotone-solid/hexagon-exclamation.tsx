
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-exclamation?s=sharp-duotone-solid hexagon-exclamation}
 * @preview ![hexagon-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkwxMjggMzJsMjU2IDBMNTEyIDI1NiAzODQgNDgwbC0yNTYgMEwwIDI1NnpNMjMyIDEyOGwwIDI0IDAgMTEyIDAgMjQgNDggMCAwLTI0IDAtMTEyIDAtMjQtNDggMHptMCAxOTJsMCA0OCA0OCAwIDAtNDgtNDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4MCAxNTJsMC0yNC00OCAwIDAgMjQgMCAxMTIgMCAyNCA0OCAwIDAtMjQgMC0xMTJ6bTAgMTY4bC00OCAwIDAgNDggNDggMCAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HexagonExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L128 32l256 0L512 256 384 480l-256 0L0 256zM232 128l0 24 0 112 0 24 48 0 0-24 0-112 0-24-48 0zm0 192l0 48 48 0 0-48-48 0z" />
            <path d="M280 152l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zm0 168l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default HexagonExclamation;