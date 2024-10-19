
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `table-list` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-list?s=duotone table-list}
 * @preview ![table-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiAyMjRWMjg4SDQ0OFYzNTJIMTkyVjQxNkgxMjhWMzUySDY0VjI4OEgxMjhWMjI0SDY0VjE2MEgxMjhWOTZIMTkyVjE2MEg0NDhWMjI0SDE5MloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDQ4IDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1MiAwIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBINDQ4QzQ4My4zNDYgNDgwIDUxMiA0NTEuMzQ2IDUxMiA0MTZWOTZDNTEyIDYwLjY1MiA0ODMuMzQ2IDMyIDQ0OCAzMlpNNDQ4IDQxNkg2NFY5Nkg0NDhWNDE2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TableList(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M192 224V288H448V352H192V416H128V352H64V288H128V224H64V160H128V96H192V160H448V224H192Z" />
            <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM448 416H64V96H448V416Z" />
        </Icon>
    </>
}