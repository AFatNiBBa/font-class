
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-circle-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-circle-plus?s=sharp-duotone-solid calendar-circle-plus}
 * @preview ![calendar-circle-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDAgOTYgNDQ4IDAgMC05Ni05NiAwIDAtNjRMMjg4IDBsMCA2NEwxNjAgNjRsMC02NEw5NiAwbDAgNjRMMCA2NHpNMCAxOTJMMCA1MTJsMzMwLjggMEMyODUuNiA0ODAuMSAyNTYgNDI3LjUgMjU2IDM2OGMwLTkxLjggNzAuMy0xNjcuMiAxNjAtMTc1LjNsMC0uN0wwIDE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAzNjhhMTQ0IDE0NCAwIDEgMSAyODggMCAxNDQgMTQ0IDAgMSAxIC0yODggMHptMTYwLTgwbC0zMiAwIDAgMTYgMCA0OC00OCAwLTE2IDAgMCAzMiAxNiAwIDQ4IDAgMCA0OCAwIDE2IDMyIDAgMC0xNiAwLTQ4IDQ4IDAgMTYgMCAwLTMyLTE2IDAtNDggMCAwLTQ4IDAtMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CalendarCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 96 448 0 0-96-96 0 0-64L288 0l0 64L160 64l0-64L96 0l0 64L0 64zM0 192L0 512l330.8 0C285.6 480.1 256 427.5 256 368c0-91.8 70.3-167.2 160-175.3l0-.7L0 192z" />
            <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-80l-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48 0-16z" />
    </Icon>
);

export default CalendarCirclePlus;