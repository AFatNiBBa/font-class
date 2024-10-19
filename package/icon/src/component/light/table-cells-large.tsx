
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `table-cells-large` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-large?s=light table-cells-large}
 * @preview ![table-cells-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjUyIDQ4My4zNDYgMzIgNDQ4IDMyWk0yNDAgNDQ4SDY0QzQ2LjMyNiA0NDggMzIgNDMzLjY3MiAzMiA0MTZWMjcySDI0MFY0NDhaTTI0MCAyNDBIMzJWOTZDMzIgNzguMzI2IDQ2LjMyNiA2NCA2NCA2NEgyNDBWMjQwWk00ODAgNDE2QzQ4MCA0MzMuNjcyIDQ2NS42NzQgNDQ4IDQ0OCA0NDhIMjcyVjI3Mkg0ODBWNDE2Wk00ODAgMjQwSDI3MlY2NEg0NDhDNDY1LjY3NCA2NCA0ODAgNzguMzI2IDQ4MCA5NlYyNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TableCellsLarge(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM240 448H64C46.326 448 32 433.672 32 416V272H240V448ZM240 240H32V96C32 78.326 46.326 64 64 64H240V240ZM480 416C480 433.672 465.674 448 448 448H272V272H480V416ZM480 240H272V64H448C465.674 64 480 78.326 480 96V240Z" />
        </Icon>
    </>
}