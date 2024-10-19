
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-retro` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-retro?s=duotone camera-retro}
 * @preview ![camera-retro](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEMwIDkyLjcgMjguNyA2NCA2NCA2NGw5NiAwIDMyIDAgNTAuNS0yNS4yYzguOS00LjQgMTguNy02LjggMjguNi02LjhMNDQ4IDMyYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgNjQtMjU2IDBMMCAxNjBsMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDQ4YzAtOC44IDcuMi0xNiAxNi0xNmw2NCAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDE2TDY0IDY0bDAtMTZ6TTAgNDE2TDAgMTYwbDUxMiAwIDAgMjU2YzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDQ4MGMtMzUuMyAwLTY0LTI4LjctNjQtNjR6bTI1Ni0xNmE5NiA5NiAwIDEgMCAwLTE5MiA5NiA5NiAwIDEgMCAwIDE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CameraRetro: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128C0 92.7 28.7 64 64 64l96 0 32 0 50.5-25.2c8.9-4.4 18.7-6.8 28.6-6.8L448 32c35.3 0 64 28.7 64 64l0 64-256 0L0 160l0-32z" />
            <path d="M64 48c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 16L64 64l0-16zM0 416L0 160l512 0 0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zm256-16a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
    </Icon>
);

export default CameraRetro;