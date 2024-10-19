
import { Icon, generic } from "../../index";

/**
 * A component that renders the `temperature-quarter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-quarter?s=duotone temperature-quarter}
 * @preview ![temperature-quarter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAzNjhjMCA3OS41IDY0LjUgMTQ0IDE0NCAxNDRzMTQ0LTY0LjUgMTQ0LTE0NGMwLTMzLjItMTEuMi02My44LTMwLjEtODguMWMtLjktMS4yLTEuNS0yLjItMS43LTIuOGMtLjEtLjMtLjItLjUtLjItLjZMMjcyIDExMkMyNzIgNTAuMiAyMjEuOSAwIDE2MCAwUzQ4IDUwLjIgNDggMTEybDAgMTY0LjRjMCAuMS0uMSAuMy0uMiAuNmMtLjIgLjYtLjggMS42LTEuNyAyLjhDMjcuMiAzMDQuMiAxNiAzMzQuOCAxNiAzNjh6bTY0IDBjMC0xOC41IDYuMi0zNS40IDE2LjctNDguOWM4LjItMTAuNiAxNS4zLTI1LjIgMTUuMy00Mi41TDExMiAxMTJjMC0yNi41IDIxLjUtNDggNDgtNDhzNDggMjEuNSA0OCA0OGwwIDE2NC41YzAgMTcuMyA3LjEgMzEuOSAxNS4zIDQyLjVDMjMzLjggMzMyLjYgMjQwIDM0OS41IDI0MCAzNjhjMCA0NC4yLTM1LjggODAtODAgODBzLTgwLTM1LjgtODAtODB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNzYgMjcyYzAtOC44LTcuMi0xNi0xNi0xNnMtMTYgNy4yLTE2IDE2bDAgNTAuN2MtMTguNiA2LjYtMzIgMjQuNC0zMiA0NS4zYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4czQ4LTIxLjUgNDgtNDhjMC0yMC45LTEzLjQtMzguNy0zMi00NS4zbDAtNTAuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const TemperatureQuarter: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M16 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6L272 112C272 50.2 221.9 0 160 0S48 50.2 48 112l0 164.4c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C27.2 304.2 16 334.8 16 368zm64 0c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5L112 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 164.5c0 17.3 7.1 31.9 15.3 42.5C233.8 332.6 240 349.5 240 368c0 44.2-35.8 80-80 80s-80-35.8-80-80z" />
            <path d="M176 272c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 50.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-50.7z" />
    </Icon>
);

export default TemperatureQuarter;