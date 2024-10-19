
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `folder-bookmark` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-bookmark?s=light folder-bookmark}
 * @preview ![folder-bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggOTZIMjcyTDIyNi43NDYgNTAuNzQ2QzIxNC43NDIgMzguNzQyIDE5OC40NjUgMzIgMTgxLjQ5IDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1NCAwIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBINDQ4QzQ4My4zNDYgNDgwIDUxMiA0NTEuMzQ2IDUxMiA0MTZWMTYwQzUxMiAxMjQuNjU0IDQ4My4zNDYgOTYgNDQ4IDk2Wk0zODQgMTI4VjI3OC4xMDlMMzQzLjE1NiAyNTcuNjg4QzMzOC42NTYgMjU1LjQzOCAzMzMuMzQ0IDI1NS40MzggMzI4Ljg0NCAyNTcuNjg4TDI4OCAyNzguMTA5VjEyOEgzODRaTTQ4MCA0MTZDNDgwIDQzMy42NDUgNDY1LjY0NSA0NDggNDQ4IDQ0OEg2NEM0Ni4zNTUgNDQ4IDMyIDQzMy42NDUgMzIgNDE2Vjk2QzMyIDc4LjM1NSA0Ni4zNTUgNjQgNjQgNjRIMTgxLjQ5QzE5MC4wMzkgNjQgMTk4LjA3NCA2Ny4zMjggMjA0LjExNyA3My4zNzVMMjQ5LjM3MyAxMTguNjI3TDI1Ni40NjEgMTI1LjcxNUMyNTYuMzQ2IDEyNi40OTQgMjU2IDEyNy4xODkgMjU2IDEyOFYzMDRDMjU2IDMwOS41NDcgMjU4Ljg3NSAzMTQuNjg4IDI2My41OTQgMzE3LjYwOUMyNjguMjgxIDMyMC41MTYgMjc0LjE1NiAzMjAuNzgxIDI3OS4xNTYgMzE4LjMxM0wzMzYgMjg5Ljg5MUwzOTIuODQ0IDMxOC4zMTJDMzk1LjA5NCAzMTkuNDM4IDM5Ny41NjIgMzIwIDQwMCAzMjBDNDAyLjkzOCAzMjAgNDA1Ljg0NCAzMTkuMjAzIDQwOC40MDYgMzE3LjYwOUM0MTMuMTI1IDMxNC42ODggNDE2IDMwOS41NDcgNDE2IDMwNFYxMjhINDQ4QzQ2NS42NDUgMTI4IDQ4MCAxNDIuMzU1IDQ4MCAxNjBWNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FolderBookmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 96H272L226.746 50.746C214.742 38.742 198.465 32 181.49 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V160C512 124.654 483.346 96 448 96ZM384 128V278.109L343.156 257.688C338.656 255.438 333.344 255.438 328.844 257.688L288 278.109V128H384ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H181.49C190.039 64 198.074 67.328 204.117 73.375L249.373 118.627L256.461 125.715C256.346 126.494 256 127.189 256 128V304C256 309.547 258.875 314.688 263.594 317.609C268.281 320.516 274.156 320.781 279.156 318.313L336 289.891L392.844 318.312C395.094 319.438 397.562 320 400 320C402.938 320 405.844 319.203 408.406 317.609C413.125 314.688 416 309.547 416 304V128H448C465.645 128 480 142.355 480 160V416Z" />
        </Icon>
    </>
}