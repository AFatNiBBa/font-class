
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-flip` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-flip?s=duotone window-flip}
 * @preview ![window-flip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGw1MTIgMCAwIDE5MmMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCA0ODBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgMjI0em0zNTItOTZhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHptOTYgMGEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDMyYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMTI4TDAgMjI0IDAgOTZDMCA2MC43IDI4LjcgMzIgNjQgMzJsMzg0IDB6TTQxNiAxNjBhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0ek0yODggMTI4YTMyIDMyIDAgMSAwIDY0IDAgMzIgMzIgMCAxIDAgLTY0IDB6bS02NCAzMmEzMiAzMiAwIDEgMCAwLTY0IDMyIDMyIDAgMSAwIDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const WindowFlip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l512 0 0 192c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 224zm352-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M448 32c35.3 0 64 28.7 64 64l0 128L0 224 0 96C0 60.7 28.7 32 64 32l384 0zM416 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 128a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default WindowFlip;