
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-web` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-web?s=duotone camera-web}
 * @preview ![camera-web](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAyMjRhMTI4IDEyOCAwIDEgMCAyNTYgMEExMjggMTI4IDAgMSAwIDk2IDIyNHptNDggMGMwLTQ0LjIgMzUuOC04MCA4MC04MGM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNmMtMjYuNSAwLTQ4IDIxLjUtNDggNDhjMCA4LjgtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggMjI0YzAgNzkuNS00MS40IDE0OS4zLTEwMy44IDE4OS4xbDU4LjIgNDAuN2MxMS40IDggMTYuNCAyMi41IDEyLjIgMzUuOFMzOTggNTEyIDM4NCA1MTJMNjQgNTEyYy0xNCAwLTI2LjMtOS4xLTMwLjUtMjIuNHMuNy0yNy44IDEyLjItMzUuOGw1OC4yLTQwLjdDNDEuNCAzNzMuMyAwIDMwMy41IDAgMjI0QzAgMTAwLjMgMTAwLjMgMCAyMjQgMFM0NDggMTAwLjMgNDQ4IDIyNHpNMjI0IDM4NGExNjAgMTYwIDAgMSAwIDAtMzIwIDE2MCAxNjAgMCAxIDAgMCAzMjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CameraWeb: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 224a128 128 0 1 0 256 0A128 128 0 1 0 96 224zm48 0c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
            <path d="M448 224c0 79.5-41.4 149.3-103.8 189.1l58.2 40.7c11.4 8 16.4 22.5 12.2 35.8S398 512 384 512L64 512c-14 0-26.3-9.1-30.5-22.4s.7-27.8 12.2-35.8l58.2-40.7C41.4 373.3 0 303.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224zM224 384a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default CameraWeb;