
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-pie` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pie?s=duotone chart-pie}
 * @preview ![chart-pie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyNzJDMzIgMTUwLjcgMTIyLjEgNTAuMyAyMzkgMzQuM2M5LjItMS4zIDE3IDYuMSAxNyAxNS40TDI1NiAyODggNDEyLjUgNDQ0LjVjNi43IDYuNyA2LjIgMTcuNy0xLjUgMjMuMUMzNzEuOCA0OTUuNiAzMjMuOCA1MTIgMjcyIDUxMkMxMzkuNSA1MTIgMzIgNDA0LjYgMzIgMjcyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTI3LjQgMjQwTDMwNCAyNDBsMC0yMjMuNGMwLTkgNy0xNi42IDE2LTE2LjZDNDQzLjcgMCA1NDQgMTAwLjMgNTQ0IDIyNGMwIDktNy42IDE2LTE2LjYgMTZ6bTMxIDQ4YzkuMyAwIDE2LjYgNy44IDE1LjQgMTdjLTcuNyA1NS45LTM0LjYgMTA1LjYtNzMuOSAxNDIuM2MtNiA1LjYtMTUuNCA1LjItMjEuMi0uN0wzMjAgMjg4bDIzOC40IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChartPie: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4L256 288 412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272z" />
            <path d="M527.4 240L304 240l0-223.4c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16zm31 48c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288l238.4 0z" />
    </Icon>
);

export default ChartPie;