
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-lines` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-lines?s=sharp-duotone-solid calendar-lines}
 * @preview ![calendar-lines](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5Mmw0NDggMCAwIDMyMEwwIDUxMiAwIDE5MnptOTYgODBsMCA0OCAyNTYgMCAwLTQ4TDk2IDI3MnptMCA5NmwwIDQ4IDE2MCAwIDAtNDhMOTYgMzY4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMGw2NCAwIDAgNjQgMTI4IDAgMC02NCA2NCAwIDAgNjQgOTYgMCAwIDEyOEwwIDE5MiAwIDY0bDk2IDBMOTYgMHptMCAyNzJsMjU2IDAgMCA0OEw5NiAzMjBsMC00OHptMTYwIDk2bDAgNDhMOTYgNDE2bDAtNDggMTYwIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CalendarLines: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192zm96 80l0 48 256 0 0-48L96 272zm0 96l0 48 160 0 0-48L96 368z" />
            <path d="M96 0l64 0 0 64 128 0 0-64 64 0 0 64 96 0 0 128L0 192 0 64l96 0L96 0zm0 272l256 0 0 48L96 320l0-48zm160 96l0 48L96 416l0-48 160 0z" />
    </Icon>
);

export default CalendarLines;