
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-cells` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells?s=duotone table-cells}
 * @preview ![table-cells](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCAyMjRWMTYwSDM2Mi42NjZWOTZIMjk4LjY2NlYxNjBIMjEzLjMzNFY5NkgxNDkuMzM0VjE2MEg2NFYyMjRIMTQ5LjMzNFYyODhINjRWMzUySDE0OS4zMzRWNDE2SDIxMy4zMzRWMzUySDI5OC42NjZWNDE2SDM2Mi42NjZWMzUySDQ0OFYyODhIMzYyLjY2NlYyMjRINDQ4Wk0yOTguNjY2IDI4OEgyMTMuMzM0VjIyNEgyOTguNjY2VjI4OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDQ4IDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1MiAwIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBINDQ4QzQ4My4zNDYgNDgwIDUxMiA0NTEuMzQ2IDUxMiA0MTZWOTZDNTEyIDYwLjY1MiA0ODMuMzQ2IDMyIDQ0OCAzMlpNNDQ4IDQxNkg2NFY5Nkg0NDhWNDE2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const TableCells: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M448 224V160H362.666V96H298.666V160H213.334V96H149.334V160H64V224H149.334V288H64V352H149.334V416H213.334V352H298.666V416H362.666V352H448V288H362.666V224H448ZM298.666 288H213.334V224H298.666V288Z" />
            <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM448 416H64V96H448V416Z" />
    </Icon>
);

export default TableCells;