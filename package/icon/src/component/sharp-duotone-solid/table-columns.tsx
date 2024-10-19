
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-columns` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-columns?s=sharp-duotone-solid table-columns}
 * @preview ![table-columns](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMTYwbDY0IDAgMCAyNTYtNjQgMCAwLTI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDE2MGwwIDI1NiAzODQgMCAwLTI1Nkw2NCAxNjB6TTAgNDgwbDAtNjRMMCA5NiAwIDMybDY0IDAgMzg0IDAgNjQgMCAwIDY0IDAgMzIwIDAgNjQtNjQgMEw2NCA0ODAgMCA0ODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const TableColumns: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 160l64 0 0 256-64 0 0-256z" />
            <path d="M64 160l0 256 384 0 0-256L64 160zM0 480l0-64L0 96 0 32l64 0 384 0 64 0 0 64 0 320 0 64-64 0L64 480 0 480z" />
    </Icon>
);

export default TableColumns;