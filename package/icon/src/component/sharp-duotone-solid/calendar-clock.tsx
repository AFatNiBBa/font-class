
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-clock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-clock?s=sharp-duotone-solid calendar-clock}
 * @preview ![calendar-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDAgOTYgNDQ4IDAgMC05Ni05NiAwIDAtNjRMMjg4IDBsMCA2NEwxNjAgNjRsMC02NEw5NiAwbDAgNjRMMCA2NHpNMCAxOTJMMCA1MTJsMzMwLjggMEMyODUuNiA0ODAuMSAyNTYgNDI3LjUgMjU2IDM2OGMwLTk3LjIgNzguOC0xNzYgMTc2LTE3NkwwIDE5MnptNDMyIDBjNS40IDAgMTAuNyAuMiAxNiAuN2wwLS43LTE2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MzIgNTEyYTE0NCAxNDQgMCAxIDAgMC0yODggMTQ0IDE0NCAwIDEgMCAwIDI4OHptMTYtMjA4bDAgNDggMzIgMCAxNiAwIDAgMzItMTYgMC00OCAwLTE2IDAgMC0xNiAwLTY0IDAtMTYgMzIgMCAwIDE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CalendarClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 96 448 0 0-96-96 0 0-64L288 0l0 64L160 64l0-64L96 0l0 64L0 64zM0 192L0 512l330.8 0C285.6 480.1 256 427.5 256 368c0-97.2 78.8-176 176-176L0 192zm432 0c5.4 0 10.7 .2 16 .7l0-.7-16 0z" />
            <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208l0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0 0 16z" />
    </Icon>
);

export default CalendarClock;