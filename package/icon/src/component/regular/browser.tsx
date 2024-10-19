
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=regular browser}
 * @preview ![browser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0OCAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDggNTEyIDQxNlY5NkM1MTIgNjAuNjUyIDQ4My4zNDYgMzIgNDQ4IDMyWk00NjQgNDE2QzQ2NCA0MjQuODI0IDQ1Ni44MjIgNDMyIDQ0OCA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODI0IDQ4IDQxNlYxNjBINDY0VjQxNloiLz48L3N2Zz4=|width=32|height=32)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.348 28.654 480 64 480H448C483.346 480 512 451.348 512 416V96C512 60.652 483.346 32 448 32ZM464 416C464 424.824 456.822 432 448 432H64C55.178 432 48 424.824 48 416V160H464V416Z" />
    </Icon>
);

export default Browser;