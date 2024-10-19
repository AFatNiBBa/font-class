
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-retro` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-retro?s=sharp-duotone-solid camera-retro}
 * @preview ![camera-retro](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDY0IDAgOTYgMCAzMiAwIDY0LTMyIDI1NiAwIDAgMTI4LTI1NiAwTDAgMTYwIDAgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCAzMmw5NiAwIDAgMzJMNjQgNjRsMC0zMnpNMCA0ODBMMCAxNjBsNTEyIDAgMCAzMjBMMCA0ODB6bTI1Ni04MGE5NiA5NiAwIDEgMCAwLTE5MiA5NiA5NiAwIDEgMCAwIDE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CameraRetro: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64l64 0 96 0 32 0 64-32 256 0 0 128-256 0L0 160 0 64z" />
            <path d="M64 32l96 0 0 32L64 64l0-32zM0 480L0 160l512 0 0 320L0 480zm256-80a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
    </Icon>
);

export default CameraRetro;