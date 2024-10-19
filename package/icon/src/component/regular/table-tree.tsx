
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `table-tree` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-tree?s=regular table-tree}
 * @preview ![table-tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjI1IDMyIDAgNjAuNjQxIDAgOTZWNDE2QzAgNDUxLjM1OSAyOC42MjUgNDgwIDY0IDQ4MEg0NDhDNDgzLjM3NSA0ODAgNTEyIDQ1MS4zNTkgNTEyIDQxNlY5NkM1MTIgNjAuNjQxIDQ4My4zMTIgMzIgNDQ4IDMyWk00NjQgNDE2QzQ2NCA0MjQuODM2IDQ1Ni44MzggNDMyIDQ0OCA0MzJINjRDNTUuMTY0IDQzMiA0OCA0MjQuODM2IDQ4IDQxNlYxNDRIOTZWMzI4Qzk2IDM1MC4wNjIgMTEzLjkzOCAzNjggMTM2IDM2OEgyNTZWMzM2SDEzNkMxMzEuNTk0IDMzNiAxMjggMzMyLjQwNiAxMjggMzI4VjI3MC4zODFDMTMwLjY3MiAyNzAuOTQ1IDEzMy4xNjQgMjcyIDEzNiAyNzJIMTkyVjI0MEgxMzZDMTMxLjU5NCAyNDAgMTI4IDIzNi40MDYgMTI4IDIzMlYxNDRINDY0VjQxNlpNMjg4IDM4NEg0MTZWMzIwSDI4OFYzODRaTTQxNiAyMjRIMjI0VjI4OEg0MTZWMjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TableTree(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.625 32 0 60.641 0 96V416C0 451.359 28.625 480 64 480H448C483.375 480 512 451.359 512 416V96C512 60.641 483.312 32 448 32ZM464 416C464 424.836 456.838 432 448 432H64C55.164 432 48 424.836 48 416V144H96V328C96 350.062 113.938 368 136 368H256V336H136C131.594 336 128 332.406 128 328V270.381C130.672 270.945 133.164 272 136 272H192V240H136C131.594 240 128 236.406 128 232V144H464V416ZM288 384H416V320H288V384ZM416 224H224V288H416V224Z" />
        </Icon>
    </>
}