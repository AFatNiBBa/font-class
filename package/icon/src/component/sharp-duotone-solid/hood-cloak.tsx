
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hood-cloak` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hood-cloak?s=sharp-duotone-solid hood-cloak}
 * @preview ![hood-cloak](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMzIwbDAgMTkyIDI1NiAwIDAtMTkyYzAtNzAuNy01Ny4zLTEyOC0xMjgtMTI4cy0xMjggNTcuMy0xMjggMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA0NjRsMCA0OCAxNjAgMCAwLTE5MmMwLTcwLjcgNTcuMy0xMjggMTI4LTEyOHMxMjggNTcuMyAxMjggMTI4bDAgMTkyIDE2MCAwIDAtNDgtNjQtODAgMC05NmMwLTk4LjQtNDIuNC0xNzIuNi0xMDQuOC0yMTUuMkw0ODAgMCAyODggMEMxNjAgMCA2NCAxMjggNjQgMjg4bDAgOTZMMCA0NjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const HoodCloak: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M160 320l0 192 256 0 0-192c0-70.7-57.3-128-128-128s-128 57.3-128 128z" />
            <path d="M0 464l0 48 160 0 0-192c0-70.7 57.3-128 128-128s128 57.3 128 128l0 192 160 0 0-48-64-80 0-96c0-98.4-42.4-172.6-104.8-215.2L480 0 288 0C160 0 64 128 64 288l0 96L0 464z" />
    </Icon>
);

export default HoodCloak;