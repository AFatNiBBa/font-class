
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-layout` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-layout?s=duotone table-layout}
 * @preview ![table-layout](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxNjBsMzg0IDAgMCA2NC0yNTYgMCAwIDE5Mi02NCAwIDAtMTkyLTY0IDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDMyQzI4LjcgMzIgMCA2MC43IDAgOTZMMCA0MTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMzg0IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0zMjBjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMzJ6TTQ0OCA5NmwwIDMyMEw2NCA0MTYgNjQgOTZsMzg0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const TableLayout: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 160l384 0 0 64-256 0 0 192-64 0 0-192-64 0 0-64z" />
            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM448 96l0 320L64 416 64 96l384 0z" />
    </Icon>
);

export default TableLayout;