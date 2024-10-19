
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-circle-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-circle-minus?s=sharp-duotone-solid calendar-circle-minus}
 * @preview ![calendar-circle-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDAgOTYgNDQ4IDAgMC05Ni05NiAwIDAtNjRMMjg4IDBsMCA2NEwxNjAgNjRsMC02NEw5NiAwbDAgNjRMMCA2NHpNMCAxOTJMMCA1MTJsMzMwLjggMEMyODUuNiA0ODAuMSAyNTYgNDI3LjUgMjU2IDM2OGMwLTkxLjggNzAuMy0xNjcuMiAxNjAtMTc1LjNsMC0uN0wwIDE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQzMiA1MTJhMTQ0IDE0NCAwIDEgMCAwLTI4OCAxNDQgMTQ0IDAgMSAwIDAgMjg4em02NC0xMjhsLTEyOCAwLTE2IDAgMC0zMiAxNiAwIDEyOCAwIDE2IDAgMCAzMi0xNiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CalendarCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 96 448 0 0-96-96 0 0-64L288 0l0 64L160 64l0-64L96 0l0 64L0 64zM0 192L0 512l330.8 0C285.6 480.1 256 427.5 256 368c0-91.8 70.3-167.2 160-175.3l0-.7L0 192z" />
            <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm64-128l-128 0-16 0 0-32 16 0 128 0 16 0 0 32-16 0z" />
    </Icon>
);

export default CalendarCircleMinus;