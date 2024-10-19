
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-import` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-import?s=sharp-duotone-solid file-import}
 * @preview ![file-import](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMEwzNTIgMGwwIDE2MCAxNjAgMCAwIDM1Mi0zODQgMCAwLTE3NiAxNzQuMSAwLTM5IDM5LTE3IDE3TDI4MCA0MjUuOWwxNy0xNyA4MC04MCAxNy0xNy0xNy0xNy04MC04MC0xNy0xN0wyNDYuMSAyMzJsMTcgMTcgMzkgMzlMMTI4IDI4OCAxMjggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiAxNjBMMzUyIDBsMCAxNjAgMTYwIDB6TTI5NyAyMTVsLTE3LTE3TDI0Ni4xIDIzMmwxNyAxNyAzOSAzOUwyNCAyODggMCAyODhsMCA0OCAyNCAwIDI3OC4xIDAtMzkgMzktMTcgMTdMMjgwIDQyNS45bDE3LTE3IDgwLTgwIDE3LTE3LTE3LTE3LTgwLTgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FileImport: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 0L352 0l0 160 160 0 0 352-384 0 0-176 174.1 0-39 39-17 17L280 425.9l17-17 80-80 17-17-17-17-80-80-17-17L246.1 232l17 17 39 39L128 288 128 0z" />
            <path d="M512 160L352 0l0 160 160 0zM297 215l-17-17L246.1 232l17 17 39 39L24 288 0 288l0 48 24 0 278.1 0-39 39-17 17L280 425.9l17-17 80-80 17-17-17-17-80-80z" />
    </Icon>
);

export default FileImport;