
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-project` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-project?s=sharp-duotone-solid diagram-project}
 * @preview ![diagram-project](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNDQgMjI0bDQ4IDAgMC00Mi43TDI3MiAyODhsLTQ4IDAgMCA0Mi43TDE0NCAyMjR6TTE5MiA5NmwxOTIgMCAwIDY0LTE5MiAwIDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDMybDE5MiAwIDAgMTkyTDAgMjI0IDAgMzJ6TTIyNCAyODhsMTkyIDAgMCAxOTItMTkyIDAgMC0xOTJ6TTU3NiAzMmwwIDE5Mi0xOTIgMCAwLTE5MiAxOTIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiagramProject: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M144 224l48 0 0-42.7L272 288l-48 0 0 42.7L144 224zM192 96l192 0 0 64-192 0 0-64z" />
            <path d="M0 32l192 0 0 192L0 224 0 32zM224 288l192 0 0 192-192 0 0-192zM576 32l0 192-192 0 0-192 192 0z" />
    </Icon>
);

export default DiagramProject;