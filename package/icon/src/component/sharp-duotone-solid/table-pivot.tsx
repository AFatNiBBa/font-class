
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-pivot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-pivot?s=sharp-duotone-solid table-pivot}
 * @preview ![table-pivot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MmwxMjggMCAwIDIyNCAzMjAgMCAwLTI1Ni0yODggMCAwLTEyOCAzNTIgMCAwIDQ0OEwwIDQ4MCAwIDE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAzMkwwIDMyIDAgMTYwbDEyOCAwIDAtMTI4ek0zNjggMTkybC00OCA0OCAwIDE2IDMyIDAgMCA2NC02NCAwIDAtMzItMTYgMC00OCA0OCA0OCA0OCAxNiAwIDAtMzIgODAgMCAxNiAwIDAtMTYgMC04MCAzMiAwIDAtMTYtNDgtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const TablePivot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192l128 0 0 224 320 0 0-256-288 0 0-128 352 0 0 448L0 480 0 192z" />
            <path d="M128 32L0 32 0 160l128 0 0-128zM368 192l-48 48 0 16 32 0 0 64-64 0 0-32-16 0-48 48 48 48 16 0 0-32 80 0 16 0 0-16 0-80 32 0 0-16-48-48z" />
    </Icon>
);

export default TablePivot;