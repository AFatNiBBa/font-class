
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-range` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-range?s=sharp-duotone-solid calendar-range}
 * @preview ![calendar-range](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5Mmw0NDggMCAwIDMyMEwwIDUxMiAwIDE5MnptNjQgNjRsMCA2NCA2NCAwIDAtNjQtNjQgMHptMCAxMzZsMCA0OCAxOTIgMCAwLTQ4TDY0IDM5MnpNMTkyIDI2NGwwIDQ4IDE5MiAwIDAtNDgtMTkyIDB6TTMyMCAzODRsMCA2NCA2NCAwIDAtNjQtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDBsNjQgMCAwIDY0IDEyOCAwIDAtNjQgNjQgMCAwIDY0IDk2IDAgMCAxMjhMMCAxOTIgMCA2NGw5NiAwTDk2IDB6bTMyIDI1NmwwIDY0LTY0IDAgMC02NCA2NCAwek0zMjAgNDQ4bDAtNjQgNjQgMCAwIDY0LTY0IDB6bTY0LTE4NGwwIDQ4LTE5MiAwIDAtNDggMTkyIDB6TTY0IDM5MmwxOTIgMCAwIDQ4TDY0IDQ0MGwwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CalendarRange: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192zm64 64l0 64 64 0 0-64-64 0zm0 136l0 48 192 0 0-48L64 392zM192 264l0 48 192 0 0-48-192 0zM320 384l0 64 64 0 0-64-64 0z" />
            <path d="M96 0l64 0 0 64 128 0 0-64 64 0 0 64 96 0 0 128L0 192 0 64l96 0L96 0zm32 256l0 64-64 0 0-64 64 0zM320 448l0-64 64 0 0 64-64 0zm64-184l0 48-192 0 0-48 192 0zM64 392l192 0 0 48L64 440l0-48z" />
    </Icon>
);

export default CalendarRange;