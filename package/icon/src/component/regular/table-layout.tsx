
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `table-layout` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-layout?s=regular table-layout}
 * @preview ![table-layout](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjUyIDQ4My4zNDYgMzIgNDQ4IDMyWk0xMzYgNDMySDY0QzU1LjE3OCA0MzIgNDggNDI0LjgyMiA0OCA0MTZWMjE2SDEzNlY0MzJaTTQ2NCA0MTZDNDY0IDQyNC44MjIgNDU2LjgyMiA0MzIgNDQ4IDQzMkgxODRWMjE2SDQ2NFY0MTZaTTQ2NCAxNjhINDhWOTZDNDggODcuMTc4IDU1LjE3OCA4MCA2NCA4MEg0NDhDNDU2LjgyMiA4MCA0NjQgODcuMTc4IDQ2NCA5NlYxNjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TableLayout(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM136 432H64C55.178 432 48 424.822 48 416V216H136V432ZM464 416C464 424.822 456.822 432 448 432H184V216H464V416ZM464 168H48V96C48 87.178 55.178 80 64 80H448C456.822 80 464 87.178 464 96V168Z" />
        </Icon>
    </>
}