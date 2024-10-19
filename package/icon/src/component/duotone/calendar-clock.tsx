
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-clock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-clock?s=duotone calendar-clock}
 * @preview ![calendar-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDExMmwwIDQ4IDQ0OCAwIDAtNDhjMC0yNi41LTIxLjUtNDgtNDgtNDhsLTQ4IDAgMC0zMmMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMmwwIDMyTDE2MCA2NGwwLTMyYzAtMTcuNy0xNC4zLTMyLTMyLTMyUzk2IDE0LjMgOTYgMzJsMCAzMkw0OCA2NEMyMS41IDY0IDAgODUuNSAwIDExMnptMCA4MEwwIDQ2NGMwIDI2LjUgMjEuNSA0OCA0OCA0OGwyODIuOCAwQzI4NS42IDQ4MC4xIDI1NiA0MjcuNSAyNTYgMzY4YzAtOTcuMiA3OC44LTE3NiAxNzYtMTc2TDAgMTkyem00MzIgMGM1LjQgMCAxMC43IC4yIDE2IC43bDAtLjctMTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQzMiA1MTJhMTQ0IDE0NCAwIDEgMCAwLTI4OCAxNDQgMTQ0IDAgMSAwIDAgMjg4em0xNi0yMDhsMCA0OCAzMiAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2bC00OCAwYy04LjggMC0xNi03LjItMTYtMTZsMC02NGMwLTguOCA3LjItMTYgMTYtMTZzMTYgNy4yIDE2IDE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CalendarClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32l0 32L48 64C21.5 64 0 85.5 0 112zm0 80L0 464c0 26.5 21.5 48 48 48l282.8 0C285.6 480.1 256 427.5 256 368c0-97.2 78.8-176 176-176L0 192zm432 0c5.4 0 10.7 .2 16 .7l0-.7-16 0z" />
            <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208l0 48 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default CalendarClock;