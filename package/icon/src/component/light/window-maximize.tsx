
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `window-maximize` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-maximize?s=light window-maximize}
 * @preview ![window-maximize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0OCAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDggNTEyIDQxNlY5NkM1MTIgNjAuNjUyIDQ4My4zNDYgMzIgNDQ4IDMyWk00ODAgNDE2QzQ4MCA0MzMuNjQ1IDQ2NS42NDUgNDQ4IDQ0OCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlYyMjRINDgwVjQxNlpNNDgwIDE5MkgzMlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDQ0OEM0NjUuNjQ1IDY0IDQ4MCA3OC4zNTUgNDgwIDk2VjE5MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WindowMaximize(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.348 28.654 480 64 480H448C483.346 480 512 451.348 512 416V96C512 60.652 483.346 32 448 32ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V224H480V416ZM480 192H32V96C32 78.355 46.355 64 64 64H448C465.645 64 480 78.355 480 96V192Z" />
        </Icon>
    </>
}