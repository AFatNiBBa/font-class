
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-arrow-up?s=sharp-duotone-solid calendar-arrow-up}
 * @preview ![calendar-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5Mmw0NDggMCAwIDMyMEwwIDUxMiAwIDE5MnpNMTEwLjEgMzQ0TDE0NCAzNzcuOWwxNy0xNyAzOS0zOUwyMDAgNDI0bDAgMjQgNDggMCAwLTI0IDAtMTAyLjEgMzkgMzkgMTcgMTdMMzM3LjkgMzQ0bC0xNy0xNy04MC04MC0xNy0xNy0xNyAxNy04MCA4MC0xNyAxN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAwTDk2IDBsMCA2NEwwIDY0IDAgMTkybDQ0OCAwIDAtMTI4LTk2IDAgMC02NEwyODggMGwwIDY0TDE2MCA2NGwwLTY0em04OCA0MjRsMC0xMDIuMSAzOSAzOSAxNyAxN0wzMzcuOSAzNDRsLTE3LTE3LTgwLTgwLTE3LTE3LTE3IDE3LTgwIDgwLTE3IDE3TDE0NCAzNzcuOWwxNy0xNyAzOS0zOUwyMDAgNDI0bDAgMjQgNDggMCAwLTI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CalendarArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192zM110.1 344L144 377.9l17-17 39-39L200 424l0 24 48 0 0-24 0-102.1 39 39 17 17L337.9 344l-17-17-80-80-17-17-17 17-80 80-17 17z" />
            <path d="M160 0L96 0l0 64L0 64 0 192l448 0 0-128-96 0 0-64L288 0l0 64L160 64l0-64zm88 424l0-102.1 39 39 17 17L337.9 344l-17-17-80-80-17-17-17 17-80 80-17 17L144 377.9l17-17 39-39L200 424l0 24 48 0 0-24z" />
    </Icon>
);

export default CalendarArrowUp;