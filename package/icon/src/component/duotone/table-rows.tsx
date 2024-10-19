
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-rows` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-rows?s=duotone table-rows}
 * @preview ![table-rows](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMjI0bDAgNjQgMzIwIDAgMC02NC0zMjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCA0MTZsMzIwIDAgMC0zMjBMMTI4IDk2bDAgMzIwek02NCA0ODBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgOTZDMCA2MC43IDI4LjcgMzIgNjQgMzJsMzg0IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAzMjBjMCAzNS4zLTI4LjcgNjQtNjQgNjRMNjQgNDgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TableRows: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 224l0 64 320 0 0-64-320 0z" />
            <path d="M128 416l320 0 0-320L128 96l0 320zM64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480z" />
    </Icon>
);

export default TableRows;