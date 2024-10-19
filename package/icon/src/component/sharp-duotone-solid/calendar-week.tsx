
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-week` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-week?s=sharp-duotone-solid calendar-week}
 * @preview ![calendar-week](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkwwIDUxMmw0NDggMCAwLTMyMEwwIDE5MnptNjQgNjRsMzIwIDAgMCA5Nkw2NCAzNTJsMC05NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDBsNjQgMCAwIDY0IDEyOCAwIDAtNjQgNjQgMCAwIDY0IDk2IDAgMCAxMjhMMCAxOTIgMCA2NGw5NiAwTDk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CalendarWeek: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 512l448 0 0-320L0 192zm64 64l320 0 0 96L64 352l0-96z" />
            <path d="M96 0l64 0 0 64 128 0 0-64 64 0 0 64 96 0 0 128L0 192 0 64l96 0L96 0z" />
    </Icon>
);

export default CalendarWeek;