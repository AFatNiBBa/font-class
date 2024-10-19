
import { Icon, generic } from "../../index";

/**
 * A component that renders the `billboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/billboard?s=sharp-duotone-solid billboard}
 * @preview ![billboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMTI4bDAgNjQgMzIgMCAzMiAwIDMyIDAgMzIgMCAwLTY0LTMyIDAgMC0zMiAwLTY0IDAtMzJMMTkyIDBsMCAzMiAwIDY0IDAgMzItMzIgMHpNMjg4IDQxNmwwIDY0IDAgMzIgNjQgMCAwLTMyIDAtNjQtNjQgMHptNjQtMjg4bDAgNjQgMzIgMCAzMiAwIDMyIDAgMzIgMCAwLTY0LTMyIDAgMC0zMiAwLTY0IDAtMzJMMzg0IDBsMCAzMiAwIDY0IDAgMzItMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAzMkw5NiAzMiAzMiAzMmwwIDY0IDAgMjU2TDAgMzUybDAgNjQgMzIgMCA2NCAwIDQ0OCAwIDY0IDAgMzIgMCAwLTY0LTMyIDAgMC0yNTYgMC02NC02NCAwLTk2IDAgMCA2NCA5NiAwIDAgMjU2TDk2IDM1MiA5NiA5Nmw5NiAwIDAtNjR6bTY0IDY0bDEyOCAwIDAtNjRMMjU2IDMybDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Billboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 128l0 64 32 0 32 0 32 0 32 0 0-64-32 0 0-32 0-64 0-32L192 0l0 32 0 64 0 32-32 0zM288 416l0 64 0 32 64 0 0-32 0-64-64 0zm64-288l0 64 32 0 32 0 32 0 32 0 0-64-32 0 0-32 0-64 0-32L384 0l0 32 0 64 0 32-32 0z" />
            <path d="M192 32L96 32 32 32l0 64 0 256L0 352l0 64 32 0 64 0 448 0 64 0 32 0 0-64-32 0 0-256 0-64-64 0-96 0 0 64 96 0 0 256L96 352 96 96l96 0 0-64zm64 64l128 0 0-64L256 32l0 64z" />
    </Icon>
);

export default Billboard;