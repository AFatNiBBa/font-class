
import { Icon, generic } from "../../index";

/**
 * A component that renders the `door-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-open?s=sharp-duotone-solid door-open}
 * @preview ![door-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA2NGwwIDM4NCAwIDY0IDI1NiAwIDAtMzg0IDAtNjQgMC02NEw2NCA2NHpNMjA4IDI1NmMwLTE3LjcgMTAuNy0zMiAyNC0zMnMyNCAxNC4zIDI0IDMycy0xMC43IDMyLTI0IDMycy0yNC0xNC4zLTI0LTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIwIDEyOGwxMjggMCAwIDM1MiAwIDMyIDMyIDAgNjQgMCAzMiAwIDAtNjQtMzIgMC0zMiAwIDAtMzUyIDAtMzItMzIgMEwzMjAgNjRsMCA2NHpNMzIgNDQ4TDAgNDQ4bDAgNjQgMzIgMCAzMiAwIDAtNjQtMzIgMHpNMjMyIDI4OGMxMy4zIDAgMjQtMTQuMyAyNC0zMnMtMTAuNy0zMi0yNC0zMnMtMjQgMTQuMy0yNCAzMnMxMC43IDMyIDI0IDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DoorOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 64l0 384 0 64 256 0 0-384 0-64 0-64L64 64zM208 256c0-17.7 10.7-32 24-32s24 14.3 24 32s-10.7 32-24 32s-24-14.3-24-32z" />
            <path d="M320 128l128 0 0 352 0 32 32 0 64 0 32 0 0-64-32 0-32 0 0-352 0-32-32 0L320 64l0 64zM32 448L0 448l0 64 32 0 32 0 0-64-32 0zM232 288c13.3 0 24-14.3 24-32s-10.7-32-24-32s-24 14.3-24 32s10.7 32 24 32z" />
    </Icon>
);

export default DoorOpen;