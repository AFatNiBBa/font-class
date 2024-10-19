
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-camera` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-camera?s=sharp-duotone-solid circle-camera}
 * @preview ![circle-camera](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOC05Nmw2OCAwIDEyLTMyIDk2IDAgMTIgMzIgNjggMCAwIDE5Mi0yNTYgMCAwLTE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIwOCAxMjhsLTEyIDMyLTY4IDAgMCAxOTIgMjU2IDAgMC0xOTItNjggMC0xMi0zMi05NiAwem00OCA4MGE0OCA0OCAwIDEgMSAwIDk2IDQ4IDQ4IDAgMSAxIDAtOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleCamera: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-96l68 0 12-32 96 0 12 32 68 0 0 192-256 0 0-192z" />
            <path d="M208 128l-12 32-68 0 0 192 256 0 0-192-68 0-12-32-96 0zm48 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default CircleCamera;