
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sausage` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sausage?s=sharp-duotone-solid sausage}
 * @preview ![sausage](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM2MEwwIDQ3Mmw2OS4yLTI0LjdjMTMgMzcuNyA0OC43IDY0LjcgOTAuOCA2NC43YzE5NC40IDAgMzUyLTE1Ny42IDM1Mi0zNTJjMC00Mi4xLTI3LjEtNzcuOC02NC43LTkwLjhMNDcyIDAgMzYwIDBsMjQuNyA2OS4yQzM0Ny4xIDgyLjIgMzIwIDExNy45IDMyMCAxNjBjMCA4OC40LTcxLjYgMTYwLTE2MCAxNjBjLTQyLjEgMC03Ny44IDI3LjEtOTAuOCA2NC43TDAgMzYwem0xNjAgOGMxMTQuOSAwIDIwOC05My4xIDIwOC0yMDhsMzIgMGMwIDEzMi41LTEwNy41IDI0MC0yNDAgMjQwbDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MDAgMTYwYzAgMTMyLjUtMTA3LjUgMjQwLTI0MCAyNDBsMC0zMmMxMTQuOSAwIDIwOC05My4xIDIwOC0yMDhsMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Sausage: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 360L0 472l69.2-24.7c13 37.7 48.7 64.7 90.8 64.7c194.4 0 352-157.6 352-352c0-42.1-27.1-77.8-64.7-90.8L472 0 360 0l24.7 69.2C347.1 82.2 320 117.9 320 160c0 88.4-71.6 160-160 160c-42.1 0-77.8 27.1-90.8 64.7L0 360zm160 8c114.9 0 208-93.1 208-208l32 0c0 132.5-107.5 240-240 240l0-32z" />
            <path d="M400 160c0 132.5-107.5 240-240 240l0-32c114.9 0 208-93.1 208-208l32 0z" />
    </Icon>
);

export default Sausage;