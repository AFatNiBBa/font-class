
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-exclamation` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-exclamation?s=solid square-exclamation}
 * @preview ![square-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk0yMDAgMTUyQzIwMCAxMzguNzUgMjEwLjc1IDEyOCAyMjQgMTI4UzI0OCAxMzguNzUgMjQ4IDE1MlYyODBDMjQ4IDI5My4yNSAyMzcuMjUgMzA0IDIyNCAzMDRTMjAwIDI5My4yNSAyMDAgMjgwVjE1MlpNMjI0IDQwMEMyMDYuNjM3IDQwMCAxOTIuNTYyIDM4NS45MjQgMTkyLjU2MiAzNjguNTYxQzE5Mi41NjIgMzUxLjE5OSAyMDYuNjM3IDMzNy4xMjMgMjI0IDMzNy4xMjNTMjU1LjQzOCAzNTEuMTk5IDI1NS40MzggMzY4LjU2MUMyNTUuNDM4IDM4NS45MjQgMjQxLjM2MyA0MDAgMjI0IDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM200 152C200 138.75 210.75 128 224 128S248 138.75 248 152V280C248 293.25 237.25 304 224 304S200 293.25 200 280V152ZM224 400C206.637 400 192.562 385.924 192.562 368.561C192.562 351.199 206.637 337.123 224 337.123S255.438 351.199 255.438 368.561C255.438 385.924 241.363 400 224 400Z" />
        </Icon>
    </>
}