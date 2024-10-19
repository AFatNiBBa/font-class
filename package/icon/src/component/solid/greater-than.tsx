
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=solid greater-than}
 * @preview ![greater-than](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMjU1Ljk0M0MzODQgMjcxLjA5NCAzNzUuNDM3IDI4NC45MzIgMzYxLjg5IDI5MS43MDlMNTcuODk4IDQ0My42NDFDMzQuMjMyIDQ1NS40NjkgMTEuOTE0IDQ0MS4xMTEgNC4yMjYgNDI1Ljc0NEMtNS42NDcgNDA2LjAwMiAyLjM2OSAzODEuOTgyIDIyLjExNyAzNzIuMTExTDI1NC41NjYgMjU1Ljk0M0wyMi4xMTcgMTM5Ljc3N0MyLjM2OSAxMjkuOTA2IC01LjY0NyAxMDUuODg3IDQuMjI2IDg2LjE0NUMxNC4xMDEgNjYuMzQyIDM4LjEwMSA1OC4zNDYgNTcuODk4IDY4LjI0NkwzNjEuODkgMjIwLjE4QzM3NS40MzcgMjI2Ljk1NyAzODQgMjQwLjc5NSAzODQgMjU1Ljk0M1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function GreaterThan(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 255.943C384 271.094 375.437 284.932 361.89 291.709L57.898 443.641C34.232 455.469 11.914 441.111 4.226 425.744C-5.647 406.002 2.369 381.982 22.117 372.111L254.566 255.943L22.117 139.777C2.369 129.906 -5.647 105.887 4.226 86.145C14.101 66.342 38.101 58.346 57.898 68.246L361.89 220.18C375.437 226.957 384 240.795 384 255.943Z" />
        </Icon>
    </>
}