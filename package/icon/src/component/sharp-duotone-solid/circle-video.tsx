
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-video` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-video?s=sharp-duotone-solid circle-video}
 * @preview ![circle-video](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOC05NmwxOTIgMCAwIDE5Mi0xOTIgMCAwLTE5MnptMjI0IDY0bDY0LTQ4IDAgMTYwLTY0LTQ4IDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMjAgMTYwbC0xOTIgMCAwIDE5MiAxOTIgMCAwLTE5MnptMzIgMTI4bDY0IDQ4IDAtMTYwLTY0IDQ4IDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleVideo: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-96l192 0 0 192-192 0 0-192zm224 64l64-48 0 160-64-48 0-64z" />
            <path d="M320 160l-192 0 0 192 192 0 0-192zm32 128l64 48 0-160-64 48 0 64z" />
    </Icon>
);

export default CircleVideo;