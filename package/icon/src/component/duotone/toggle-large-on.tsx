
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toggle-large-on` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-on?s=duotone toggle-large-on}
 * @preview ![toggle-large-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM2MiA4NiA0NDggMTkyIDQ0OGwxOTIgMGMxMDYgMCAxOTItODYgMTkyLTE5MnMtODYtMTkyLTE5Mi0xOTJMMTkyIDY0Qzg2IDY0IDAgMTUwIDAgMjU2em01MTIgMGExMjggMTI4IDAgMSAxIC0yNTYgMCAxMjggMTI4IDAgMSAxIDI1NiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDEyOGExMjggMTI4IDAgMSAwIDAgMjU2IDEyOCAxMjggMCAxIDAgMC0yNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ToggleLargeOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 362 86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64C86 64 0 150 0 256zm512 0a128 128 0 1 1 -256 0 128 128 0 1 1 256 0z" />
            <path d="M384 128a128 128 0 1 0 0 256 128 128 0 1 0 0-256z" />
    </Icon>
);

export default ToggleLargeOn;