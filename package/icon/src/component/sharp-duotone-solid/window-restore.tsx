
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-restore` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-restore?s=sharp-duotone-solid window-restore}
 * @preview ![window-restore](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMGwwIDY0IDAgMzIgNjQgMCAwLTMyIDI1NiAwIDAgMjU2LTMyIDAgMCA2NCAzMiAwIDY0IDAgMC02NCAwLTI1NiAwLTY0TDQ0OCAwIDE5MiAwIDEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDEyOEwwIDEyOCAwIDUxMmwzODQgMCAwLTM4NHptLTY0IDY0bDAgNjRMNjQgMjU2bDAtNjQgMjU2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const WindowRestore: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 0l0 64 0 32 64 0 0-32 256 0 0 256-32 0 0 64 32 0 64 0 0-64 0-256 0-64L448 0 192 0 128 0z" />
            <path d="M384 128L0 128 0 512l384 0 0-384zm-64 64l0 64L64 256l0-64 256 0z" />
    </Icon>
);

export default WindowRestore;