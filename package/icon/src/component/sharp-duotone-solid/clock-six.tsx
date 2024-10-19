
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-six` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-six?s=sharp-duotone-solid clock-six}
 * @preview ![clock-six](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTIzMiA5Nmw0OCAwIDAgMjQgMCAyNDAgMCAyNC00OCAwIDAtMjQgMC0yNDAgMC0yNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4MCA5NmwwIDI0IDAgMjQwIDAgMjQtNDggMCAwLTI0IDAtMjQwIDAtMjQgNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ClockSix: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 96l48 0 0 24 0 240 0 24-48 0 0-24 0-240 0-24z" />
            <path d="M280 96l0 24 0 240 0 24-48 0 0-24 0-240 0-24 48 0z" />
    </Icon>
);

export default ClockSix;