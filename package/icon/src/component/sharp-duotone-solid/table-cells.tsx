
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-cells` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells?s=sharp-duotone-solid table-cells}
 * @preview ![table-cells](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxNjBsMCA2NCA4MCAwIDAgNjQtODAgMCAwIDY0IDgwIDAgMCA2NCA2NCAwIDAtNjQgOTYgMCAwIDY0IDY0IDAgMC02NCA4MCAwIDAtNjQtODAgMCAwLTY0IDgwIDAgMC02NC04MCAwIDAtNjQtNjQgMCAwIDY0LTk2IDAgMC02NC02NCAwIDAgNjQtODAgMHptMTQ0IDY0bDk2IDAgMCA2NC05NiAwIDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTIgMzJMMCAzMiAwIDQ4MGw1MTIgMCAwLTQ0OHpNNDQ4IDk2bDAgMzIwTDY0IDQxNiA2NCA5NmwzODQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const TableCells: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 160l0 64 80 0 0 64-80 0 0 64 80 0 0 64 64 0 0-64 96 0 0 64 64 0 0-64 80 0 0-64-80 0 0-64 80 0 0-64-80 0 0-64-64 0 0 64-96 0 0-64-64 0 0 64-80 0zm144 64l96 0 0 64-96 0 0-64z" />
            <path d="M512 32L0 32 0 480l512 0 0-448zM448 96l0 320L64 416 64 96l384 0z" />
    </Icon>
);

export default TableCells;