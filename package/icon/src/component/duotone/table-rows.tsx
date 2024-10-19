
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-rows` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-rows?s=duotone table-rows}
 * @preview ![table-rows](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAyODhWMjI0SDQ0OFYyODhIMTI4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0wIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjUyIDQ4MCA2NCA0ODBINDQ4QzQ4My4zNDYgNDgwIDUxMiA0NTEuMzQ2IDUxMiA0MTZWOTZDNTEyIDYwLjY1NCA0ODMuMzQ2IDMyIDQ0OCAzMkg2NEMyOC42NTIgMzIgMCA2MC42NTQgMCA5NlpNNDQ4IDk2VjQxNkgxMjhWOTZINDQ4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const TableRows: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 288V224H448V288H128Z" />
            <path d="M0 96V416C0 451.346 28.652 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32H64C28.652 32 0 60.654 0 96ZM448 96V416H128V96H448Z" />
    </Icon>
);

export default TableRows;