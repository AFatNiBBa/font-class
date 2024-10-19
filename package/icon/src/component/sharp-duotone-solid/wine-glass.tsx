
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wine-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass?s=sharp-duotone-solid wine-glass}
 * @preview ![wine-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNC41IDE5Mi43TDMyIDAgMjg4IDBsMTcuNSAxOTIuN2MuNCA0LjUgLjYgOSAuNiAxMy40YzAgNjguOS00OC40IDEyNy43LTExNC4xIDE0Mi40bDAgOTkuNSA4MCAwIDAgNjQtMTEyIDBMNDggNTEybDAtNjQgODAgMCAwLTk5LjVDNTggMzMyLjkgNy43IDI2Ny4zIDE0LjUgMTkyLjd6bTYzLjcgNS44QzczLjkgMjQ2LjUgMTExLjcgMjg4IDE2MCAyODhzODYuMS00MS41IDgxLjgtODkuNWMtMi4xLTIzLjUtNC4zLTQ3LTYuNC03MC41Yy0xLjktMjEuMy0zLjktNDIuNy01LjgtNjRMOTAuNCA2NGwtNS44IDY0Yy0yLjEgMjMuNS00LjMgNDctNi40IDcwLjV6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik04NC42IDEyOGwtNi40IDcwLjVDNzMuOSAyNDYuNSAxMTEuNyAyODggMTYwIDI4OHM4Ni4xLTQxLjUgODEuOC04OS41TDIzNS40IDEyOCA4NC42IDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const WineGlass: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M14.5 192.7L32 0 288 0l17.5 192.7c.4 4.5 .6 9 .6 13.4c0 68.9-48.4 127.7-114.1 142.4l0 99.5 80 0 0 64-112 0L48 512l0-64 80 0 0-99.5C58 332.9 7.7 267.3 14.5 192.7zm63.7 5.8C73.9 246.5 111.7 288 160 288s86.1-41.5 81.8-89.5c-2.1-23.5-4.3-47-6.4-70.5c-1.9-21.3-3.9-42.7-5.8-64L90.4 64l-5.8 64c-2.1 23.5-4.3 47-6.4 70.5z" />
            <path d="M84.6 128l-6.4 70.5C73.9 246.5 111.7 288 160 288s86.1-41.5 81.8-89.5L235.4 128 84.6 128z" />
    </Icon>
);

export default WineGlass;