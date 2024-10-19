
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-minus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-minus?s=solid comment-minus}
 * @preview ![comment-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzJDMTE0LjYyNSAzMiAwIDEyNS4xMjUgMCAyNDBDMCAyODkuNjI1IDIxLjM3NSAzMzUgNTcgMzcwLjc1QzQ0LjUgNDIxLjEyNSAyLjc1IDQ2NiAyLjI1IDQ2Ni41QzAgNDY4Ljc1IC0wLjYyNSA0NzIuMjUgMC43NSA0NzUuMjVDMS45OTkgNDc4LjI1IDQuNzUgNDgwIDggNDgwQzc0LjI1IDQ4MCAxMjQgNDQ4LjI1IDE0OC42MjUgNDI4LjYyNUMxODEuMjUgNDQwLjg3NSAyMTcuNjI1IDQ0OCAyNTYgNDQ4QzM5Ny4zNzUgNDQ4IDUxMiAzNTQuODc1IDUxMiAyNDBTMzk3LjM3NSAzMiAyNTYgMzJaTTMzNiAyNjMuOTk4SDE3NkMxNjIuNzMgMjYzLjk5OCAxNTIgMjUzLjI1NiAxNTIgMjQwQzE1MiAyMjYuNzQyIDE2Mi43MzggMjE2LjAwMiAxNzYgMjE2LjAwMkgzMzZDMzQ5LjI2MiAyMTYuMDAyIDM2MCAyMjYuNzQyIDM2MCAyNDBTMzQ5LjI2MiAyNjMuOTk4IDMzNiAyNjMuOTk4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CommentMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C1.999 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32ZM336 263.998H176C162.73 263.998 152 253.256 152 240C152 226.742 162.738 216.002 176 216.002H336C349.262 216.002 360 226.742 360 240S349.262 263.998 336 263.998Z" />
        </Icon>
    </>
}