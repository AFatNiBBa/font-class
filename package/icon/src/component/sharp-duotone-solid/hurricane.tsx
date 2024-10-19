
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hurricane` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hurricane?s=sharp-duotone-solid hurricane}
 * @preview ![hurricane](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIwOEMwIDMxNy41IDg0LjYgNDA3LjIgMTkyIDQxNS40bDAgOTUuNGMxMDcuNC04LjIgMTkyLTk3LjkgMTkyLTIwNy40UzI5OS40IDEwNC4yIDE5MiA5NkwxOTIgLjZDODQuNiA4LjggMCA5OC41IDAgMjA4em0yODggNDhBOTYgOTYgMCAxIDEgOTYgMjU2YTk2IDk2IDAgMSAxIDE5MiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDM1MmE5NiA5NiAwIDEgMCAwLTE5MiA5NiA5NiAwIDEgMCAwIDE5MnptMC0xMjhhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Hurricane: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 208C0 317.5 84.6 407.2 192 415.4l0 95.4c107.4-8.2 192-97.9 192-207.4S299.4 104.2 192 96L192 .6C84.6 8.8 0 98.5 0 208zm288 48A96 96 0 1 1 96 256a96 96 0 1 1 192 0z" />
            <path d="M192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Hurricane;