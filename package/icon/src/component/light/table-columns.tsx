
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `table-columns` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-columns?s=light table-columns}
 * @preview ![table-columns](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjUyIDQ4My4zNDYgMzIgNDQ4IDMyWk0yNDAgNDQ4SDY0QzQ2LjM1NSA0NDggMzIgNDMzLjY0NSAzMiA0MTZWMTkySDI0MFY0NDhaTTQ4MCA0MTZDNDgwIDQzMy42NDUgNDY1LjY0NSA0NDggNDQ4IDQ0OEgyNzJWMTkySDQ4MFY0MTZaTTQ4MCAxNjBIMzJWOTZDMzIgNzguMzU1IDQ2LjM1NSA2NCA2NCA2NEg0NDhDNDY1LjY0NSA2NCA0ODAgNzguMzU1IDQ4MCA5NlYxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TableColumns(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM240 448H64C46.355 448 32 433.645 32 416V192H240V448ZM480 416C480 433.645 465.645 448 448 448H272V192H480V416ZM480 160H32V96C32 78.355 46.355 64 64 64H448C465.645 64 480 78.355 480 96V160Z" />
        </Icon>
    </>
}