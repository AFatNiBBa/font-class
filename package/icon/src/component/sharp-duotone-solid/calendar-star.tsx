
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-star` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-star?s=sharp-duotone-solid calendar-star}
 * @preview ![calendar-star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5Mmw0NDggMCAwIDMyMEwwIDUxMiAwIDE5MnpNMTE3LjUgMzA5LjRsNTguNiA1MC4yLTE3LjkgNzVMMjI0IDM5NC40bDY1LjggNDAuMi0xNy45LTc1IDU4LjYtNTAuMi03Ni45LTYuMkwyMjQgMjMybC0yOS42IDcxLjItNzYuOSA2LjJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMEw5NiAwbDAgNjRMMCA2NCAwIDE5Mmw0NDggMCAwLTEyOC05NiAwIDAtNjRMMjg4IDBsMCA2NEwxNjAgNjRsMC02NHptOTMuNiAzMDMuMkwyMjQgMjMybC0yOS42IDcxLjItNzYuOSA2LjIgNTguNiA1MC4yLTE3LjkgNzVMMjI0IDM5NC40bDY1LjggNDAuMi0xNy45LTc1IDU4LjYtNTAuMi03Ni45LTYuMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CalendarStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192zM117.5 309.4l58.6 50.2-17.9 75L224 394.4l65.8 40.2-17.9-75 58.6-50.2-76.9-6.2L224 232l-29.6 71.2-76.9 6.2z" />
            <path d="M160 0L96 0l0 64L0 64 0 192l448 0 0-128-96 0 0-64L288 0l0 64L160 64l0-64zm93.6 303.2L224 232l-29.6 71.2-76.9 6.2 58.6 50.2-17.9 75L224 394.4l65.8 40.2-17.9-75 58.6-50.2-76.9-6.2z" />
    </Icon>
);

export default CalendarStar;