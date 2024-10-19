
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-week` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-week?s=duotone calendar-week}
 * @preview ![calendar-week](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkwwIDQ2NGMwIDI2LjUgMjEuNSA0OCA0OCA0OGwzNTIgMGMyNi41IDAgNDgtMjEuNSA0OC00OGwwLTI3MkwwIDE5MnptNjQgODBjMC04LjggNy4yLTE2IDE2LTE2bDI4OCAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDY0YzAgOC44LTcuMiAxNi0xNiAxNkw4MCAzNTJjLTguOCAwLTE2LTcuMi0xNi0xNmwwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMzJjMC0xNy43IDE0LjMtMzIgMzItMzJzMzIgMTQuMyAzMiAzMmwwIDMyIDEyOCAwIDAtMzJjMC0xNy43IDE0LjMtMzIgMzItMzJzMzIgMTQuMyAzMiAzMmwwIDMyIDQ4IDBjMjYuNSAwIDQ4IDIxLjUgNDggNDhsMCA4MEwwIDE5MmwwLTgwQzAgODUuNSAyMS41IDY0IDQ4IDY0bDQ4IDAgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CalendarWeek: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272L0 192zm64 80c0-8.8 7.2-16 16-16l288 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16L80 352c-8.8 0-16-7.2-16-16l0-64z" />
            <path d="M96 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 80L0 192l0-80C0 85.5 21.5 64 48 64l48 0 0-32z" />
    </Icon>
);

export default CalendarWeek;