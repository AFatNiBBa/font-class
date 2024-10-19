
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `folder-bookmark` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-bookmark?s=solid folder-bookmark}
 * @preview ![folder-bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgOTZIMjcyTDIwOCAzMkg0OEMyMS41IDMyIDAgNTMuNSAwIDgwVjQzMkMwIDQ1OC41IDIxLjUgNDgwIDQ4IDQ4MEg0NjRDNDkwLjUgNDgwIDUxMiA0NTguNSA1MTIgNDMyVjE0NEM1MTIgMTE3LjUgNDkwLjUgOTYgNDY0IDk2Wk00NDggMzM1Ljk2OUM0NDggMzQ5LjM4NSA0MzIuNDggMzU2Ljg0NCA0MjIuMDA0IDM0OC40NjNMMzY4IDMwNS4yNkwzMTMuOTk2IDM0OC40NjNDMzAzLjUyIDM1Ni44NDQgMjg4IDM0OS4zODUgMjg4IDMzNS45NjlWMTYwSDQ0OFYzMzUuOTY5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FolderBookmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM448 335.969C448 349.385 432.48 356.844 422.004 348.463L368 305.26L313.996 348.463C303.52 356.844 288 349.385 288 335.969V160H448V335.969Z" />
        </Icon>
    </>
}