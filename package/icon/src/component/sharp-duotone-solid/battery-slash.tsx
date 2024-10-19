
import { Icon, generic } from "../../index";

/**
 * A component that renders the `battery-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-slash?s=sharp-duotone-solid battery-slash}
 * @preview ![battery-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxMjEuMkwzMiAxNjBsMCAxOTIgMCA2NCA2NCAwIDMxMC4yIDAtODEuMi02NEw5NiAzNTJsMC0xODAuNEwzMiAxMjEuMnpNMTUzIDk2YzI3LjUgMjEuMyA1NSA0Mi43IDgyLjQgNjRMNTEyIDE2MGwwIDE5Mi0yOS4zIDBjMjcuNSAyMS4zIDU1IDQyLjcgODIuNCA2NGwxMC44IDAgMC02NCAwLTMyIDMyIDAgMC0xMjgtMzIgMCAwLTMyIDAtNjQtNjQgMEwxNTMgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yOS40IC4xbDE5IDE0LjdMNjIwLjkgNDU5LjNsMTkgMTQuNy0yOS40IDM3LjktMTktMTQuN0wxOSA1Mi43IDAgMzggMjkuNCAuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const BatterySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 121.2L32 160l0 192 0 64 64 0 310.2 0-81.2-64L96 352l0-180.4L32 121.2zM153 96c27.5 21.3 55 42.7 82.4 64L512 160l0 192-29.3 0c27.5 21.3 55 42.7 82.4 64l10.8 0 0-64 0-32 32 0 0-128-32 0 0-32 0-64-64 0L153 96z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default BatterySlash;