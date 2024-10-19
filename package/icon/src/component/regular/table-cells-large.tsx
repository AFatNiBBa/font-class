
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `table-cells-large` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-large?s=regular table-cells-large}
 * @preview ![table-cells-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjUyIDQ4My4zNDYgMzIgNDQ4IDMyWk00NjQgOTZWMjMySDI4MFY4MEg0NDhDNDU2LjgyMiA4MCA0NjQgODcuMTc4IDQ2NCA5NlpNNjQgODBIMjMyVjIzMkg0OFY5NkM0OCA4Ny4xNzggNTUuMTc4IDgwIDY0IDgwWk00OCA0MTZWMjgwSDIzMlY0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlpNNDQ4IDQzMkgyODBWMjgwSDQ2NFY0MTZDNDY0IDQyNC44MjIgNDU2LjgyMiA0MzIgNDQ4IDQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TableCellsLarge(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM464 96V232H280V80H448C456.822 80 464 87.178 464 96ZM64 80H232V232H48V96C48 87.178 55.178 80 64 80ZM48 416V280H232V432H64C55.178 432 48 424.822 48 416ZM448 432H280V280H464V416C464 424.822 456.822 432 448 432Z" />
        </Icon>
    </>
}