
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=light browser}
 * @preview ![browser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjU0IDQ4My4zNDYgMzIgNDQ4IDMyWk0zMiA5NkMzMiA3OC40IDQ2LjQgNjQgNjQgNjRIMTI4VjEyOEgzMlY5NlpNNDgwIDQxNkM0ODAgNDMzLjYgNDY1LjYgNDQ4IDQ0OCA0NDhINjRDNDYuNCA0NDggMzIgNDMzLjYgMzIgNDE2VjE2MEg0ODBWNDE2Wk00ODAgMTI4SDE2MFY2NEg0NDhDNDY1LjYgNjQgNDgwIDc4LjQgNDgwIDk2VjEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Browser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32ZM32 96C32 78.4 46.4 64 64 64H128V128H32V96ZM480 416C480 433.6 465.6 448 448 448H64C46.4 448 32 433.6 32 416V160H480V416ZM480 128H160V64H448C465.6 64 480 78.4 480 96V128Z" />
        </Icon>
    </>
}