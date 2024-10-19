
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gamepad-modern` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad-modern?s=sharp-duotone-solid gamepad-modern}
 * @preview ![gamepad-modern](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MEw0Mi44IDk2IDE2MCAzMmwxNjAgMCAxNjAgMEw1OTcuMiA5NiA2NDAgNDgwbC0yMDAgMC0xNi05Ni0yMDggMC0xNiA5NkwwIDQ4MHpNMTEyIDIwMGwwIDQ4IDI0IDAgMzIgMCAwIDMyIDAgMjQgNDggMCAwLTI0IDAtMzIgMzIgMCAyNCAwIDAtNDgtMjQgMC0zMiAwIDAtMzIgMC0yNC00OCAwIDAgMjQgMCAzMi0zMiAwLTI0IDB6bTI4MCA3MmE0MCA0MCAwIDEgMCA4MCAwIDQwIDQwIDAgMSAwIC04MCAwem02NC05NmE0MCA0MCAwIDEgMCA4MCAwIDQwIDQwIDAgMSAwIC04MCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjE2IDE0NGwwIDI0IDAgMzIgMzIgMCAyNCAwIDAgNDgtMjQgMC0zMiAwIDAgMzIgMCAyNC00OCAwIDAtMjQgMC0zMi0zMiAwLTI0IDAgMC00OCAyNCAwIDMyIDAgMC0zMiAwLTI0IDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const GamepadModern: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 480L42.8 96 160 32l160 0 160 0L597.2 96 640 480l-200 0-16-96-208 0-16 96L0 480zM112 200l0 48 24 0 32 0 0 32 0 24 48 0 0-24 0-32 32 0 24 0 0-48-24 0-32 0 0-32 0-24-48 0 0 24 0 32-32 0-24 0zm280 72a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm64-96a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
            <path d="M216 144l0 24 0 32 32 0 24 0 0 48-24 0-32 0 0 32 0 24-48 0 0-24 0-32-32 0-24 0 0-48 24 0 32 0 0-32 0-24 48 0z" />
    </Icon>
);

export default GamepadModern;