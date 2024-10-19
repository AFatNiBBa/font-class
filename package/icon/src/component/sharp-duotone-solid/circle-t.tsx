
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-t` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-t?s=sharp-duotone-solid circle-t}
 * @preview ![circle-t](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTEyOCAxNDRsMjQgMCAxMDQgMCAxMDQgMCAyNCAwIDAgNDgtMjQgMC04MCAwIDAgMTY4IDAgMjQtNDggMCAwLTI0IDAtMTY4LTgwIDAtMjQgMCAwLTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDE0NGwyNCAwIDEwNCAwIDEwNCAwIDI0IDAgMCA0OC0yNCAwLTgwIDAgMCAxNjggMCAyNC00OCAwIDAtMjQgMC0xNjgtODAgMC0yNCAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleT: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 144l24 0 104 0 104 0 24 0 0 48-24 0-80 0 0 168 0 24-48 0 0-24 0-168-80 0-24 0 0-48z" />
            <path d="M128 144l24 0 104 0 104 0 24 0 0 48-24 0-80 0 0 168 0 24-48 0 0-24 0-168-80 0-24 0 0-48z" />
    </Icon>
);

export default CircleT;