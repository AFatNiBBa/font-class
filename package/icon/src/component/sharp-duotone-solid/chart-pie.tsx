
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-pie` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pie?s=sharp-duotone-solid chart-pie}
 * @preview ![chart-pie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyNzJDMzIgMTQ0LjggMTMwLjkgNDAuOCAyNTYgMzIuNUwyNTYgMjg4IDQyNSA0NTdjLTQxLjUgMzQuNC05NC44IDU1LTE1MyA1NUMxMzkuNSA1MTIgMzIgNDA0LjYgMzIgMjcyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTQzLjQgMjQwTDMwNCAyNDAgMzA0IC42YzUuMy0uNCAxMC42LS42IDE2LS42QzQ0My43IDAgNTQ0IDEwMC4zIDU0NCAyMjRjMCA1LjQtLjIgMTAuNy0uNiAxNnpNMzIwIDI4OGwyNTUuNSAwQzU3MSAzNTUuOSA1MzguMyA0MTYuMSA0ODkgNDU3TDMyMCAyODh6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChartPie: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 272C32 144.8 130.9 40.8 256 32.5L256 288 425 457c-41.5 34.4-94.8 55-153 55C139.5 512 32 404.6 32 272z" />
            <path d="M543.4 240L304 240 304 .6c5.3-.4 10.6-.6 16-.6C443.7 0 544 100.3 544 224c0 5.4-.2 10.7-.6 16zM320 288l255.5 0C571 355.9 538.3 416.1 489 457L320 288z" />
    </Icon>
);

export default ChartPie;