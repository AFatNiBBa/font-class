
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `table` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table?s=solid table}
 * @preview ![table](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjU0IDQ4My4zNDYgMzIgNDQ4IDMyWk0yMjQgNDE2SDY0VjMyMEgyMjRWNDE2Wk0yMjQgMjU2SDY0VjE2MEgyMjRWMjU2Wk00NDggNDE2SDI4OFYzMjBINDQ4VjQxNlpNNDQ4IDI1NkgyODhWMTYwSDQ0OFYyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Table(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32ZM224 416H64V320H224V416ZM224 256H64V160H224V256ZM448 416H288V320H448V416ZM448 256H288V160H448V256Z" />
        </Icon>
    </>
}