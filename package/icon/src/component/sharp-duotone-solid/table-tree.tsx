
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-tree` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-tree?s=sharp-duotone-solid table-tree}
 * @preview ![table-tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxNjBsMCA5NiAwIDE2IDAgODAgMCAxNiAxNiAwIDEyOCAwIDE2IDAgMC0zMi0xNiAwLTExMiAwIDAtNjQgNDggMCAxNiAwIDAtMzItMTYgMC00OCAwIDAtODAtMzIgMHptMTI4IDY0bDAgNjQgMTkyIDAgMC02NC0xOTIgMHptNjQgOTZsMCA2NCAxMjggMCAwLTY0LTEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTEyIDMyTDAgMzIgMCA0ODBsNTEyIDAgMC00NDh6TTQ0OCAxNjBsMCAyNTZMNjQgNDE2bDAtMjU2IDM4NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TableTree: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 160l0 96 0 16 0 80 0 16 16 0 128 0 16 0 0-32-16 0-112 0 0-64 48 0 16 0 0-32-16 0-48 0 0-80-32 0zm128 64l0 64 192 0 0-64-192 0zm64 96l0 64 128 0 0-64-128 0z" />
            <path d="M512 32L0 32 0 480l512 0 0-448zM448 160l0 256L64 416l0-256 384 0z" />
    </Icon>
);

export default TableTree;