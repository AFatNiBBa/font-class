
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `comment-plus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-plus?s=solid comment-plus}
 * @preview ![comment-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzJDMTE0LjYyNSAzMiAwIDEyNS4xMjUgMCAyNDBDMCAyODkuNjI1IDIxLjM3NSAzMzUgNTcgMzcwLjc1QzQ0LjUgNDIxLjEyNSAyLjc1IDQ2NiAyLjI1IDQ2Ni41QzAgNDY4Ljc1IC0wLjYyNSA0NzIuMjUgMC43NSA0NzUuMjVDMiA0NzguMjUgNC43NSA0ODAgOCA0ODBDNzQuMjUgNDgwIDEyNCA0NDguMjUgMTQ4LjYyNSA0MjguNjI1QzE4MS4yNSA0NDAuODc1IDIxNy42MjUgNDQ4IDI1NiA0NDhDMzk3LjM3NSA0NDggNTEyIDM1NC44NzUgNTEyIDI0MFMzOTcuMzc1IDMyIDI1NiAzMlpNMzM2IDI2My45OThIMjgwVjMyMC4wMDJDMjgwIDMzMy4yNjIgMjY5LjI1OCAzNDQgMjU2IDM0NEMyNDIuNzM0IDM0NCAyMzIgMzMzLjI1OCAyMzIgMzIwLjAwMlYyNjMuOTk4SDE3NkMxNjIuNzMgMjYzLjk5OCAxNTIgMjUzLjI1NiAxNTIgMjQwQzE1MiAyMjYuNzQyIDE2Mi43MzggMjE2LjAwMiAxNzYgMjE2LjAwMkgyMzJWMTU5Ljk5OEMyMzIgMTQ2LjczOCAyNDIuNzQyIDEzNiAyNTYgMTM2UzI4MCAxNDYuNzM4IDI4MCAxNTkuOTk4VjIxNi4wMDJIMzM2QzM0OS4yNjIgMjE2LjAwMiAzNjAgMjI2Ljc0MiAzNjAgMjQwUzM0OS4yNjIgMjYzLjk5OCAzMzYgMjYzLjk5OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CommentPlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C2 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32ZM336 263.998H280V320.002C280 333.262 269.258 344 256 344C242.734 344 232 333.258 232 320.002V263.998H176C162.73 263.998 152 253.256 152 240C152 226.742 162.738 216.002 176 216.002H232V159.998C232 146.738 242.742 136 256 136S280 146.738 280 159.998V216.002H336C349.262 216.002 360 226.742 360 240S349.262 263.998 336 263.998Z" />
        </Icon>
    </>
}