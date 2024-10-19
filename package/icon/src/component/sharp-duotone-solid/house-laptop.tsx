
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-laptop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-laptop?s=sharp-duotone-solid house-laptop}
 * @preview ![house-laptop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIwOGwwIDQ4IDY0IDAgMCAxNjAgMjA4IDAgMC0xMjgtODAgMCAwLTk2IDk2IDAgMCAzMiAxOTIgMCAwLTE2TDI0MCAwIDAgMjA4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUyIDMwNGwwIDE0NCAxOTIgMCAwLTE0NC0xOTIgMHpNMzA0IDQ0OGwwLTE0NCAwLTQ4IDQ4IDAgMTkyIDAgNDggMCAwIDQ4IDAgMTQ0IDQ4IDAgMCAzMi0zMiAzMi0xNiAwLTQ4IDAtMTkyIDAtNDggMC0xNiAwLTMyLTMyIDAtMzIgNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HouseLaptop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 208l0 48 64 0 0 160 208 0 0-128-80 0 0-96 96 0 0 32 192 0 0-16L240 0 0 208z" />
            <path d="M352 304l0 144 192 0 0-144-192 0zM304 448l0-144 0-48 48 0 192 0 48 0 0 48 0 144 48 0 0 32-32 32-16 0-48 0-192 0-48 0-16 0-32-32 0-32 48 0z" />
    </Icon>
);

export default HouseLaptop;