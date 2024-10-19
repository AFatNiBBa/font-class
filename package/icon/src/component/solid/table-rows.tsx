
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `table-rows` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-rows?s=solid table-rows}
 * @preview ![table-rows](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBINDQ4QzQ4My4zNDYgNDgwIDUxMiA0NTEuMzQ2IDUxMiA0MTZWOTZDNTEyIDYwLjY1NCA0ODMuMzQ2IDMyIDQ0OCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlpNNDQ4IDI4OFY0MTZIMTI4VjI4OEg0NDhaTTQ0OCA5NlYyMjRIMTI4Vjk2SDQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TableRows(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32H64C28.654 32 0 60.654 0 96ZM448 288V416H128V288H448ZM448 96V224H128V96H448Z" />
        </Icon>
    </>
}