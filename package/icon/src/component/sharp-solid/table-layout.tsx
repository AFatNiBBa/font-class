
import { Icon } from "../../index";

/**
 * A component that renders the `table-layout` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-layout?s=sharp-solid table-layout}
 * @preview ![table-layout](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDMyTDAgMzIgMCA0ODBsNTEyIDAgMC00NDh6TTQ0OCA5NmwwIDY0TDY0IDE2MGwwLTY0IDM4NCAwek02NCAyMjRsNjQgMCAwIDE5Mi02NCAwIDAtMTkyem0zODQgMGwwIDE5Mi0yNTYgMCAwLTE5MiAyNTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const TableLayout: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32L0 32 0 480l512 0 0-448zM448 96l0 64L64 160l0-64 384 0zM64 224l64 0 0 192-64 0 0-192zm384 0l0 192-256 0 0-192 256 0z" />
    </Icon>
);

export default TableLayout;