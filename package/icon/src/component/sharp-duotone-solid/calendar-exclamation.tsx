
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-exclamation?s=sharp-duotone-solid calendar-exclamation}
 * @preview ![calendar-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5Mmw0NDggMCAwIDMyMEwwIDUxMiAwIDE5MnptMjAwIDQ4bDAgMjQgMCA5NiAwIDI0IDQ4IDAgMC0yNCAwLTk2IDAtMjQtNDggMHptMCAxNzZsMCA0OCA0OCAwIDAtNDgtNDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDBsNjQgMCAwIDY0IDEyOCAwIDAtNjQgNjQgMCAwIDY0IDk2IDAgMCAxMjhMMCAxOTIgMCA2NGw5NiAwTDk2IDB6TTI0OCAyNDBsMCAyNCAwIDk2IDAgMjQtNDggMCAwLTI0IDAtOTYgMC0yNCA0OCAwem0wIDE3NmwwIDQ4LTQ4IDAgMC00OCA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CalendarExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192zm200 48l0 24 0 96 0 24 48 0 0-24 0-96 0-24-48 0zm0 176l0 48 48 0 0-48-48 0z" />
            <path d="M96 0l64 0 0 64 128 0 0-64 64 0 0 64 96 0 0 128L0 192 0 64l96 0L96 0zM248 240l0 24 0 96 0 24-48 0 0-24 0-96 0-24 48 0zm0 176l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default CalendarExclamation;