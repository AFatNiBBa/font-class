
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-minus?s=sharp-duotone-solid calendar-minus}
 * @preview ![calendar-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkwwIDUxMmw0NDggMCAwLTMyMEwwIDE5MnpNMTEyIDMyOGwyNCAwIDE3NiAwIDI0IDAgMCA0OC0yNCAwLTE3NiAwLTI0IDAgMC00OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAwTDk2IDBsMCA2NEwwIDY0IDAgMTkybDQ0OCAwIDAtMTI4LTk2IDAgMC02NEwyODggMGwwIDY0TDE2MCA2NGwwLTY0ek0zMTIgMzc2bDI0IDAgMC00OC0yNCAwLTE3NiAwLTI0IDAgMCA0OCAyNCAwIDE3NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CalendarMinus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 512l448 0 0-320L0 192zM112 328l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48z" />
            <path d="M160 0L96 0l0 64L0 64 0 192l448 0 0-128-96 0 0-64L288 0l0 64L160 64l0-64zM312 376l24 0 0-48-24 0-176 0-24 0 0 48 24 0 176 0z" />
    </Icon>
);

export default CalendarMinus;