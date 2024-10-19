
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rotate-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-left?s=duotone rotate-left}
 * @preview ![rotate-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05Ny42IDM2OS4xYy0xMi41IDEyLjUtMTIuNSAzMi44IDAgNDUuM0MxNDEuMyA0NTguMSAxOTguNyA0ODAgMjU2IDQ4MHMxMTQuNy0yMS45IDE1OC40LTY1LjZTNDgwIDMxMy4zIDQ4MCAyNTZzLTIxLjktMTE0LjctNjUuNi0xNTguNGMtODcuMi04Ny4yLTIyOC4zLTg3LjUtMzE1LjgtMWMxNS4xIDE1LjEgMzAuMiAzMC4yIDQ1LjMgNDUuM2M2Mi42LTYxLjUgMTYzLjEtNjEuMiAyMjUuMyAxYzYyLjUgNjIuNSA2Mi41IDE2My44IDAgMjI2LjNzLTE2My44IDYyLjUtMjI2LjMgMGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjggMjI0TDQwIDIyNGMtMTMuMyAwLTI0LTEwLjctMjQtMjRMMTYgNzJjMC05LjcgNS44LTE4LjUgMTQuOC0yMi4yczE5LjMtMS43IDI2LjIgNS4yTDE4NSAxODNjNi45IDYuOSA4LjkgMTcuMiA1LjIgMjYuMnMtMTIuNSAxNC44LTIyLjIgMTQuOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const RotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M97.6 369.1c-12.5 12.5-12.5 32.8 0 45.3C141.3 458.1 198.7 480 256 480s114.7-21.9 158.4-65.6S480 313.3 480 256s-21.9-114.7-65.6-158.4c-87.2-87.2-228.3-87.5-315.8-1c15.1 15.1 30.2 30.2 45.3 45.3c62.6-61.5 163.1-61.2 225.3 1c62.5 62.5 62.5 163.8 0 226.3s-163.8 62.5-226.3 0c-12.5-12.5-32.8-12.5-45.3 0z" />
            <path d="M168 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z" />
    </Icon>
);

export default RotateLeft;