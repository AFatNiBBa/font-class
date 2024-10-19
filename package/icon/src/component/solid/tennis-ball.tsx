
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tennis-ball` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tennis-ball?s=solid tennis-ball}
 * @preview ![tennis-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzkuOTU0IDQ3LjQwNkMyMzkuOTU0IDM2Ljc4IDIzOC44NjMgMjYuNDI0IDIzNy4yIDE2LjI2MkMxMTkuMzEgMjUuNDAyIDI1LjQwMiAxMTkuMzEgMTYuMjYyIDIzNy4yQzI2LjQyNCAyMzguODYzIDM2Ljc4IDIzOS45NTQgNDcuNDA2IDIzOS45NTRDMTUzLjU4MyAyMzkuOTU0IDIzOS45NTQgMTUzLjU4MyAyMzkuOTU0IDQ3LjQwNlpNNDY0LjU5NCAyMzkuOTU0QzQ3NS4yNzkgMjM5Ljk1NCA0ODUuNzA5IDI0MC45NjMgNDk2IDI0Mi40MTJDNDg5LjE2NiAxMjAuMzcgMzkxLjYzIDIyLjgzNCAyNjkuNTg4IDE2QzI3MS4wMzcgMjYuMjkxIDI3Mi4wNDYgMzYuNzIxIDI3Mi4wNDYgNDcuNDA2QzI3Mi4wNDYgMTcxLjI3NCAxNzEuMjc0IDI3Mi4wNDYgNDcuNDA2IDI3Mi4wNDZDMzYuNzIxIDI3Mi4wNDYgMjYuMjkxIDI3MS4wMzcgMTYgMjY5LjU4OEMyMi44MzQgMzkxLjYzIDEyMC4zNyA0ODkuMTY2IDI0Mi40MTIgNDk2QzI0MC45NjMgNDg1LjcwOSAyMzkuOTU0IDQ3NS4yNzkgMjM5Ljk1NCA0NjQuNTk0QzIzOS45NTQgMzQwLjcyNiAzNDAuNzI2IDIzOS45NTQgNDY0LjU5NCAyMzkuOTU0Wk0yNzIuMDQ2IDQ2NC41OTRDMjcyLjA0NiA0NzUuMjIgMjczLjEzNyA0ODUuNTc2IDI3NC44IDQ5NS43MzhDMzkyLjY5IDQ4Ni41OTggNDg2LjU5OCAzOTIuNjkgNDk1LjczOCAyNzQuOEM0ODUuNTc2IDI3My4xMzcgNDc1LjIyIDI3Mi4wNDYgNDY0LjU5NCAyNzIuMDQ2QzM1OC40MTcgMjcyLjA0NiAyNzIuMDQ2IDM1OC40MTcgMjcyLjA0NiA0NjQuNTk0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TennisBall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M239.954 47.406C239.954 36.78 238.863 26.424 237.2 16.262C119.31 25.402 25.402 119.31 16.262 237.2C26.424 238.863 36.78 239.954 47.406 239.954C153.583 239.954 239.954 153.583 239.954 47.406ZM464.594 239.954C475.279 239.954 485.709 240.963 496 242.412C489.166 120.37 391.63 22.834 269.588 16C271.037 26.291 272.046 36.721 272.046 47.406C272.046 171.274 171.274 272.046 47.406 272.046C36.721 272.046 26.291 271.037 16 269.588C22.834 391.63 120.37 489.166 242.412 496C240.963 485.709 239.954 475.279 239.954 464.594C239.954 340.726 340.726 239.954 464.594 239.954ZM272.046 464.594C272.046 475.22 273.137 485.576 274.8 495.738C392.69 486.598 486.598 392.69 495.738 274.8C485.576 273.137 475.22 272.046 464.594 272.046C358.417 272.046 272.046 358.417 272.046 464.594Z" />
        </Icon>
    </>
}