
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-cells-large` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-large?s=duotone table-cells-large}
 * @preview ![table-cells-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCAyODhIMjg4VjQxNkgyMjRWMjg4SDY0VjIyNEgyMjRWOTZIMjg4VjIyNEg0NDhWMjg4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjUyIDQ4My4zNDYgMzIgNDQ4IDMyWk00NDggNDE2SDY0Vjk2SDQ0OFY0MTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const TableCellsLarge: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M448 288H288V416H224V288H64V224H224V96H288V224H448V288Z" />
            <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM448 416H64V96H448V416Z" />
    </Icon>
);

export default TableCellsLarge;