
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-plus?s=sharp-duotone-solid circle-plus}
 * @preview ![circle-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE0NC0yNGwyNCAwIDY0IDAgMC02NCAwLTI0IDQ4IDAgMCAyNCAwIDY0IDY0IDAgMjQgMCAwIDQ4LTI0IDAtNjQgMCAwIDY0IDAgMjQtNDggMCAwLTI0IDAtNjQtNjQgMC0yNCAwIDAtNDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMzIgMzQ0bDAgMjQgNDggMCAwLTI0IDAtNjQgNjQgMCAyNCAwIDAtNDgtMjQgMC02NCAwIDAtNjQgMC0yNC00OCAwIDAgMjQgMCA2NC02NCAwLTI0IDAgMCA0OCAyNCAwIDY0IDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CirclePlus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144-24l24 0 64 0 0-64 0-24 48 0 0 24 0 64 64 0 24 0 0 48-24 0-64 0 0 64 0 24-48 0 0-24 0-64-64 0-24 0 0-48z" />
            <path d="M232 344l0 24 48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24-48 0 0 24 0 64-64 0-24 0 0 48 24 0 64 0 0 64z" />
    </Icon>
);

export default CirclePlus;