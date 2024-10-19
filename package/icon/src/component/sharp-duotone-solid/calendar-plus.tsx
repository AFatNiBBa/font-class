
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-plus?s=sharp-duotone-solid calendar-plus}
 * @preview ![calendar-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5Mmw0NDggMCAwIDMyMEwwIDUxMiAwIDE5MnpNMTIwIDMyOGwwIDQ4IDI0IDAgNTYgMCAwIDU2IDAgMjQgNDggMCAwLTI0IDAtNTYgNTYgMCAyNCAwIDAtNDgtMjQgMC01NiAwIDAtNTYgMC0yNC00OCAwIDAgMjQgMCA1Ni01NiAwLTI0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAwbDY0IDAgMCA2NCAxMjggMCAwLTY0IDY0IDAgMCA2NCA5NiAwIDAgMTI4TDAgMTkyIDAgNjRsOTYgMEw5NiAwek0yNDggMjQ4bDAgMjQgMCA1NiA1NiAwIDI0IDAgMCA0OC0yNCAwLTU2IDAgMCA1NiAwIDI0LTQ4IDAgMC0yNCAwLTU2LTU2IDAtMjQgMCAwLTQ4IDI0IDAgNTYgMCAwLTU2IDAtMjQgNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CalendarPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192zM120 328l0 48 24 0 56 0 0 56 0 24 48 0 0-24 0-56 56 0 24 0 0-48-24 0-56 0 0-56 0-24-48 0 0 24 0 56-56 0-24 0z" />
            <path d="M96 0l64 0 0 64 128 0 0-64 64 0 0 64 96 0 0 128L0 192 0 64l96 0L96 0zM248 248l0 24 0 56 56 0 24 0 0 48-24 0-56 0 0 56 0 24-48 0 0-24 0-56-56 0-24 0 0-48 24 0 56 0 0-56 0-24 48 0z" />
    </Icon>
);

export default CalendarPlus;