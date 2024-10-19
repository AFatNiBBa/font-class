
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-info` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-info?s=sharp-duotone-solid circle-info}
 * @preview ![circle-info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE5Mi0zMmwyNCAwIDQ4IDAgMjQgMCAwIDI0IDAgODggOCAwIDI0IDAgMCA0OC0yNCAwLTgwIDAtMjQgMCAwLTQ4IDI0IDAgMjQgMCAwLTY0LTI0IDAtMjQgMCAwLTQ4em0zMi05Nmw2NCAwIDAgNjQtNjQgMCAwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDEyOGwwIDY0LTY0IDAgMC02NCA2NCAwem0tOTYgOTZsMjQgMCA0OCAwIDI0IDAgMCAyNCAwIDg4IDggMCAyNCAwIDAgNDgtMjQgMC04MCAwLTI0IDAgMC00OCAyNCAwIDI0IDAgMC02NC0yNCAwLTI0IDAgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleInfo: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm192-32l24 0 48 0 24 0 0 24 0 88 8 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0 24 0 0-64-24 0-24 0 0-48zm32-96l64 0 0 64-64 0 0-64z" />
            <path d="M288 128l0 64-64 0 0-64 64 0zm-96 96l24 0 48 0 24 0 0 24 0 88 8 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0 24 0 0-64-24 0-24 0 0-48z" />
    </Icon>
);

export default CircleInfo;