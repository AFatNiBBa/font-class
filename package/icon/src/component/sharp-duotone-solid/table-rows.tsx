
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-rows` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-rows?s=sharp-duotone-solid table-rows}
 * @preview ![table-rows](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMjI0bDAgNjQgMzIwIDAgMC02NC0zMjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCA0MTZsMzIwIDAgMC0zMjBMMTI4IDk2bDAgMzIwek0wIDQ4MGwwLTY0TDAgOTYgMCAzMmw2NCAwIDM4NCAwIDY0IDAgMCA2NCAwIDMyMCAwIDY0LTY0IDBMNjQgNDgwIDAgNDgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TableRows: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 224l0 64 320 0 0-64-320 0z" />
            <path d="M128 416l320 0 0-320L128 96l0 320zM0 480l0-64L0 96 0 32l64 0 384 0 64 0 0 64 0 320 0 64-64 0L64 480 0 480z" />
    </Icon>
);

export default TableRows;