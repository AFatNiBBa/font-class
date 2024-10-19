
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ghost` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ghost?s=sharp-duotone-solid ghost}
 * @preview ![ghost](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkwwIDQ4MGw0OC0zMiA3MiA2NCA3Mi02NCA3MiA2NCA3Mi02NCA0OCAzMiAwLTI4OEMzODQgODYgMjk4IDAgMTkyIDBTMCA4NiAwIDE5MnptMTYwIDBhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHptMTI4IDBhMzIgMzIgMCAxIDEgLTY0IDAgMzIgMzIgMCAxIDEgNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAyMjRhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0em0xMjggMGEzMiAzMiAwIDEgMCAwLTY0IDMyIDMyIDAgMSAwIDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Ghost: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 480l48-32 72 64 72-64 72 64 72-64 48 32 0-288C384 86 298 0 192 0S0 86 0 192zm160 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M128 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Ghost;