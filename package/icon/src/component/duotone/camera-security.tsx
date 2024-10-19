
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-security` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-security?s=duotone camera-security}
 * @preview ![camera-security](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMjA4YTk2IDk2IDAgMSAwIDE5MiAwIDk2IDk2IDAgMSAwIC0xOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgNjRDMCAyOC43IDI4LjcgMCA2NCAwTDM4NCAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMjg4YzAgMzUuMy0yOC43IDY0LTY0IDY0bC03NCAwIDU5IDM2LjljMTIuMSA3LjYgMTcuNyAyMi4yIDEzLjggMzZTMzY2LjMgNTEyIDM1MiA1MTJMOTYgNTEyYy0xNC4zIDAtMjYuOC05LjUtMzAuOC0yMy4yczEuNy0yOC40IDEzLjgtMzZMMTM4IDQxNmwtNzQgMGMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCA2NHpNMjI0IDMzNmExMjggMTI4IDAgMSAwIDAtMjU2IDEyOCAxMjggMCAxIDAgMCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CameraSecurity: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 208a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
            <path d="M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-74 0 59 36.9c12.1 7.6 17.7 22.2 13.8 36S366.3 512 352 512L96 512c-14.3 0-26.8-9.5-30.8-23.2s1.7-28.4 13.8-36L138 416l-74 0c-35.3 0-64-28.7-64-64L0 64zM224 336a128 128 0 1 0 0-256 128 128 0 1 0 0 256z" />
    </Icon>
);

export default CameraSecurity;