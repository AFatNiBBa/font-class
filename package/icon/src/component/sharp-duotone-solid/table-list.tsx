
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-list` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-list?s=sharp-duotone-solid table-list}
 * @preview ![table-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxNjBsMCA2NCA2NCAwIDAgNjQtNjQgMCAwIDY0IDY0IDAgMCA2NCA2NCAwIDAtNjQgMjU2IDAgMC02NC0yNTYgMCAwLTY0IDI1NiAwIDAtNjQtMjU2IDAgMC02NC02NCAwIDAgNjQtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiAzMkwwIDMyIDAgNDgwbDUxMiAwIDAtNDQ4ek00NDggOTZsMCAzMjBMNjQgNDE2IDY0IDk2bDM4NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TableList: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 160l0 64 64 0 0 64-64 0 0 64 64 0 0 64 64 0 0-64 256 0 0-64-256 0 0-64 256 0 0-64-256 0 0-64-64 0 0 64-64 0z" />
            <path d="M512 32L0 32 0 480l512 0 0-448zM448 96l0 320L64 416 64 96l384 0z" />
    </Icon>
);

export default TableList;