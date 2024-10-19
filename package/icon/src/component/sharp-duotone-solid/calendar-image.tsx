
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-image` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-image?s=sharp-duotone-solid calendar-image}
 * @preview ![calendar-image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5Mmw0NDggMCAwIDMyMEwwIDUxMiAwIDE5MnpNODAgNDQ4bDI4OCAwTDI1NiAyNzIgMTg0IDM3NmwtMjQtMzJMODAgNDQ4ek05NiAyODhhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMCAtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAwTDk2IDBsMCA2NEwwIDY0IDAgMTkybDQ0OCAwIDAtMTI4LTk2IDAgMC02NEwyODggMGwwIDY0TDE2MCA2NGwwLTY0ek04MCA0NDhsMjg4IDBMMjU2IDI3MiAxODQgMzc2bC0yNC0zMkw4MCA0NDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const CalendarImage: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192zM80 448l288 0L256 272 184 376l-24-32L80 448zM96 288a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M160 0L96 0l0 64L0 64 0 192l448 0 0-128-96 0 0-64L288 0l0 64L160 64l0-64zM80 448l288 0L256 272 184 376l-24-32L80 448z" />
    </Icon>
);

export default CalendarImage;