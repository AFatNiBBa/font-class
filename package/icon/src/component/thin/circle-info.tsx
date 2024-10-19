
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-info` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-info?s=thin circle-info}
 * @preview ![circle-info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ0OSAxNiAxNiAxMjMuNDIgMTYgMjU2QzE2IDM4OC40OSAxMjMuNDQ5IDQ5NiAyNTYgNDk2UzQ5NiAzODguNDkgNDk2IDI1NkM0OTYgMTIzLjQyIDM4OC41NTEgMTYgMjU2IDE2Wk0yNTYgNDgwQzEzMi40ODQgNDgwIDMyIDM3OS41MTQgMzIgMjU2UzEzMi40ODQgMzIgMjU2IDMyUzQ4MCAxMzIuNDg2IDQ4MCAyNTZTMzc5LjUxNiA0ODAgMjU2IDQ4MFpNMjU1LjkxOCAxNzZDMjY0Ljc0IDE3NiAyNzEuOTE4IDE2OC44MjIgMjcxLjkxOCAxNjBTMjY0Ljc0IDE0NCAyNTUuOTE4IDE0NFMyMzkuOTE4IDE1MS4xNzggMjM5LjkxOCAxNjBTMjQ3LjA5NiAxNzYgMjU1LjkxOCAxNzZaTTI4OCAzNTJIMjYzLjk4VjIxNi4wNDdDMjYzLjk4IDIxNi4wMjkgMjY0IDIxNi4wMTggMjY0IDIxNkMyNjQgMjExLjU5NCAyNjAuNDA2IDIwOCAyNTYgMjA4SDIyNEMyMTkuNTk0IDIwOCAyMTYgMjExLjU5NCAyMTYgMjE2UzIxOS41OTQgMjI0IDIyNCAyMjRIMjQ3Ljk4VjM1MkgyMjRDMjE5LjU5NCAzNTIgMjE2IDM1NS41OTQgMjE2IDM2MFMyMTkuNTk0IDM2OCAyMjQgMzY4SDI4OEMyOTIuNDA2IDM2OCAyOTYgMzY0LjQwNiAyOTYgMzYwUzI5Mi40MDYgMzUyIDI4OCAzNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleInfo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.449 16 16 123.42 16 256C16 388.49 123.449 496 256 496S496 388.49 496 256C496 123.42 388.551 16 256 16ZM256 480C132.484 480 32 379.514 32 256S132.484 32 256 32S480 132.486 480 256S379.516 480 256 480ZM255.918 176C264.74 176 271.918 168.822 271.918 160S264.74 144 255.918 144S239.918 151.178 239.918 160S247.096 176 255.918 176ZM288 352H263.98V216.047C263.98 216.029 264 216.018 264 216C264 211.594 260.406 208 256 208H224C219.594 208 216 211.594 216 216S219.594 224 224 224H247.98V352H224C219.594 352 216 355.594 216 360S219.594 368 224 368H288C292.406 368 296 364.406 296 360S292.406 352 288 352Z" />
        </Icon>
    </>
}