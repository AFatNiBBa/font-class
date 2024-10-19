
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window?s=duotone window}
 * @preview ![window](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGw1MTIgMCAwIDE5MmMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCA0ODBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgMjI0em0yMjQtOTZhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHptOTYgMGEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMzJDMjguNyAzMiAwIDYwLjcgMCA5NkwwIDIyNGw1MTIgMCAwLTEyOGMwLTM1LjMtMjguNy02NC02NC02NEw2NCAzMnpNOTYgOTZhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0em02NCAzMmEzMiAzMiAwIDEgMSA2NCAwIDMyIDMyIDAgMSAxIC02NCAwek0yODggOTZhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Window: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l512 0 0 192c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 224zm224-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M64 32C28.7 32 0 60.7 0 96L0 224l512 0 0-128c0-35.3-28.7-64-64-64L64 32zM96 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM288 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Window;