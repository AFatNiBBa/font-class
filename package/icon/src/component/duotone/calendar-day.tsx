
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-day` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-day?s=duotone calendar-day}
 * @preview ![calendar-day](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkwwIDQ2NGMwIDI2LjUgMjEuNSA0OCA0OCA0OGwzNTIgMGMyNi41IDAgNDgtMjEuNSA0OC00OGwwLTI3MkwwIDE5MnptNjQgODBjMC04LjggNy4yLTE2IDE2LTE2bDk2IDBjOC44IDAgMTYgNy4yIDE2IDE2bDAgOTZjMCA4LjgtNy4yIDE2LTE2IDE2bC05NiAwYy04LjggMC0xNi03LjItMTYtMTZsMC05NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDMyYzAtMTcuNyAxNC4zLTMyIDMyLTMyczMyIDE0LjMgMzIgMzJsMCAzMiAxMjggMCAwLTMyYzAtMTcuNyAxNC4zLTMyIDMyLTMyczMyIDE0LjMgMzIgMzJsMCAzMiA0OCAwYzI2LjUgMCA0OCAyMS41IDQ4IDQ4bDAgODBMMCAxOTJsMC04MEMwIDg1LjUgMjEuNSA2NCA0OCA2NGw0OCAwIDAtMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CalendarDay: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272L0 192zm64 80c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-96z" />
            <path d="M96 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 80L0 192l0-80C0 85.5 21.5 64 48 64l48 0 0-32z" />
    </Icon>
);

export default CalendarDay;